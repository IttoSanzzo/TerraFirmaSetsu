declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseButtonPressed$Post" {
import { $ScreenEvent$MouseButtonPressed } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseButtonPressed"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$MouseButtonPressed$Post extends $ScreenEvent$MouseButtonPressed {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer, boolean4: boolean)

public "wasHandled"(): boolean
}
}

declare module "packages/net/minecraftforge/client/event/$RenderHandEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $RenderHandEvent extends $Event {
constructor()
constructor(interactionHand0: $InteractionHand$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, int3: integer, float4: float, float5: float, float6: float, float7: float, itemStack8: $ItemStack$$Type)

public "getEquipProgress"(): float
public "getHand"(): $InteractionHand
public "getInterpolatedPitch"(): float
public "getItemStack"(): $ItemStack
public "getMultiBufferSource"(): $MultiBufferSource
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getSwingProgress"(): float
get "equipProgress"(): float
get "hand"(): $InteractionHand
get "interpolatedPitch"(): float
get "itemStack"(): $ItemStack
get "multiBufferSource"(): $MultiBufferSource
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "swingProgress"(): float
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$RenderInventoryMobEffects" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent } from "packages/net/minecraftforge/client/event/$ScreenEvent"

export class $ScreenEvent$RenderInventoryMobEffects extends $ScreenEvent {
constructor()
constructor(screen0: $Screen$$Type, int1: integer, boolean2: boolean, int3: integer)

public "addHorizontalOffset"(int0: integer): void
public "getAvailableSpace"(): integer
public "getHorizontalOffset"(): integer
public "isCompact"(): boolean
public "setCompact"(boolean0: boolean): void
public "setHorizontalOffset"(int0: integer): void
get "availableSpace"(): integer
get "horizontalOffset"(): integer
get "compact"(): boolean
set "compact"(value: boolean)
set "horizontalOffset"(value: integer)
}
}

declare module "packages/net/minecraftforge/client/event/$RenderHighlightEvent$Entity" {
import { $EntityHitResult, $EntityHitResult$$Type } from "packages/net/minecraft/world/phys/$EntityHitResult"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RenderHighlightEvent } from "packages/net/minecraftforge/client/event/$RenderHighlightEvent"

export class $RenderHighlightEvent$Entity extends $RenderHighlightEvent {
constructor()
constructor(levelRenderer0: $LevelRenderer$$Type, camera1: $Camera$$Type, entityHitResult2: $EntityHitResult$$Type, float3: float, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type)

public "getTarget"(): $EntityHitResult
get "target"(): $EntityHitResult
}
}

declare module "packages/net/minecraftforge/client/event/$RenderLevelStageEvent$Stage" {
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $RenderLevelStageEvent$Stage {
static readonly "AFTER_BLOCK_ENTITIES": $RenderLevelStageEvent$Stage
static readonly "AFTER_CUTOUT_BLOCKS": $RenderLevelStageEvent$Stage
static readonly "AFTER_CUTOUT_MIPPED_BLOCKS_BLOCKS": $RenderLevelStageEvent$Stage
static readonly "AFTER_ENTITIES": $RenderLevelStageEvent$Stage
static readonly "AFTER_LEVEL": $RenderLevelStageEvent$Stage
static readonly "AFTER_PARTICLES": $RenderLevelStageEvent$Stage
static readonly "AFTER_SKY": $RenderLevelStageEvent$Stage
static readonly "AFTER_SOLID_BLOCKS": $RenderLevelStageEvent$Stage
static readonly "AFTER_TRANSLUCENT_BLOCKS": $RenderLevelStageEvent$Stage
static readonly "AFTER_TRIPWIRE_BLOCKS": $RenderLevelStageEvent$Stage
static readonly "AFTER_WEATHER": $RenderLevelStageEvent$Stage

public static "fromRenderType"(renderType0: $RenderType$$Type): $RenderLevelStageEvent$Stage
}
}

declare module "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions" {
import { $FogShape$$Type } from "packages/com/mojang/blaze3d/shaders/$FogShape"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Vector3f, $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $FluidStack$$Type } from "packages/net/minecraftforge/fluids/$FluidStack"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FogRenderer$FogMode$$Type } from "packages/net/minecraft/client/renderer/$FogRenderer$FogMode"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IClientFluidTypeExtensions {
"getFlowingTexture"(fluidStack0: $FluidStack$$Type): $ResourceLocation
"getFlowingTexture"(): $ResourceLocation
"getFlowingTexture"(fluidState0: $FluidState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $ResourceLocation
"getOverlayTexture"(fluidStack0: $FluidStack$$Type): $ResourceLocation
"getOverlayTexture"(): $ResourceLocation
"getOverlayTexture"(fluidState0: $FluidState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $ResourceLocation
"getRenderOverlayTexture"(minecraft0: $Minecraft$$Type): $ResourceLocation
"getStillTexture"(): $ResourceLocation
"getStillTexture"(fluidState0: $FluidState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $ResourceLocation
"getStillTexture"(fluidStack0: $FluidStack$$Type): $ResourceLocation
"getTintColor"(fluidStack0: $FluidStack$$Type): integer
"getTintColor"(fluidState0: $FluidState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getTintColor"(): integer
"modifyFogColor"(camera0: $Camera$$Type, float1: float, clientLevel2: $ClientLevel$$Type, int3: integer, float4: float, vector3f5: $Vector3f$$Type): $Vector3f
"modifyFogRender"(camera0: $Camera$$Type, fogMode1: $FogRenderer$FogMode$$Type, float2: float, float3: float, float4: float, float5: float, fogShape6: $FogShape$$Type): void
"renderOverlay"(minecraft0: $Minecraft$$Type, poseStack1: $PoseStack$$Type): void
get "flowingTexture"(): $ResourceLocation
get "overlayTexture"(): $ResourceLocation
get "stillTexture"(): $ResourceLocation
get "tintColor"(): integer
}

export namespace $IClientFluidTypeExtensions {
const DEFAULT: $IClientFluidTypeExtensions
function of(fluidState0: $FluidState$$Type): $IClientFluidTypeExtensions
function of(fluidType0: $FluidType$$Type): $IClientFluidTypeExtensions
function of(fluid0: $Fluid$$Type): $IClientFluidTypeExtensions
}
export abstract class $IClientFluidTypeExtensions$$Static implements $IClientFluidTypeExtensions {
static readonly "DEFAULT": $IClientFluidTypeExtensions

static "of"(fluidState0: $FluidState$$Type): $IClientFluidTypeExtensions
static "of"(fluidType0: $FluidType$$Type): $IClientFluidTypeExtensions
static "of"(fluid0: $Fluid$$Type): $IClientFluidTypeExtensions
}
}

declare module "packages/net/minecraftforge/client/$IItemDecorator" {
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IItemDecorator {
"render"(guiGraphics0: $GuiGraphics$$Type, font1: $Font$$Type, itemStack2: $ItemStack$$Type, int3: integer, int4: integer): boolean
}

export namespace $IItemDecorator {
const probejs$$marker: never
}
export abstract class $IItemDecorator$$Static implements $IItemDecorator {
}
}

declare module "packages/net/minecraftforge/client/event/$EntityRenderersEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"

export class $EntityRenderersEvent extends $Event implements $IModBusEvent {
}
}

declare module "packages/net/minecraftforge/client/event/$RenderGuiEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Window } from "packages/com/mojang/blaze3d/platform/$Window"
import { $GuiGraphics } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $RenderGuiEvent extends $Event {
constructor()

public "getGuiGraphics"(): $GuiGraphics
public "getPartialTick"(): float
public "getWindow"(): $Window
get "guiGraphics"(): $GuiGraphics
get "partialTick"(): float
get "window"(): $Window
}
}

declare module "packages/net/minecraftforge/client/model/data/$ModelDataManager" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ChunkEvent$Unload$$Type } from "packages/net/minecraftforge/event/level/$ChunkEvent$Unload"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AppearanceHelper$ModelDataAccessor } from "packages/xfacthd/framedblocks/api/block/render/$AppearanceHelper$ModelDataAccessor"
import { $Map } from "packages/java/util/$Map"

export class $ModelDataManager implements $AppearanceHelper$ModelDataAccessor {
constructor(level0: $Level$$Type)

public "framedblocks$getCachedAt"(blockPos0: $BlockPos$$Type): $ModelData
public "getAt"(blockPos0: $BlockPos$$Type): $ModelData
public "getAt"(chunkPos0: $ChunkPos$$Type): $Map<$BlockPos, $ModelData>
public static "onChunkUnload"(unload0: $ChunkEvent$Unload$$Type): void
public "requestRefresh"(blockEntity0: $BlockEntity$$Type): void
}
}

declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup } from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup"
import { $MultiPartBlockStateBuilder } from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder"
import { $Multimap } from "packages/com/google/common/collect/$Multimap"
import { $BlockStateProvider$ConfiguredModelList, $BlockStateProvider$ConfiguredModelList$$Type } from "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList"
import { $List } from "packages/java/util/$List"
import { $Property, $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export class $MultiPartBlockStateBuilder$PartBuilder {
readonly "conditions": $Multimap<$Property<any>, $Comparable<any>>
readonly "nestedConditionGroups": $List<$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup>
"useOr": boolean

public "canApplyTo"(block0: $Block$$Type): boolean
public "condition"<T extends $Comparable<T>>(property0: $Property$$Type<T>, ...t1s: T[]): $MultiPartBlockStateBuilder$PartBuilder
public "end"(): $MultiPartBlockStateBuilder
public "nestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "useOr"(): $MultiPartBlockStateBuilder$PartBuilder
get "models"(): $BlockStateProvider$ConfiguredModelList
set "models"(value: $BlockStateProvider$ConfiguredModelList$$Type)
}
}

declare module "packages/net/minecraftforge/client/event/$CustomizeGuiOverlayEvent$BossEventProgress" {
import { $CustomizeGuiOverlayEvent } from "packages/net/minecraftforge/client/event/$CustomizeGuiOverlayEvent"
import { $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $LerpingBossEvent, $LerpingBossEvent$$Type } from "packages/net/minecraft/client/gui/components/$LerpingBossEvent"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $CustomizeGuiOverlayEvent$BossEventProgress extends $CustomizeGuiOverlayEvent {
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, float2: float, lerpingBossEvent3: $LerpingBossEvent$$Type, int4: integer, int5: integer, int6: integer)
constructor()

public "getBossEvent"(): $LerpingBossEvent
public "getIncrement"(): integer
public "getX"(): integer
public "getY"(): integer
public "setIncrement"(int0: integer): void
get "bossEvent"(): $LerpingBossEvent
get "increment"(): integer
get "x"(): integer
get "y"(): integer
set "increment"(value: integer)
}
}

declare module "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions" {
import { $Gui$$Type } from "packages/net/minecraft/client/gui/$Gui"
import { $EffectRenderingInventoryScreen$$Type } from "packages/net/minecraft/client/gui/screens/inventory/$EffectRenderingInventoryScreen"
import { $MobEffectInstance$$Type } from "packages/net/minecraft/world/effect/$MobEffectInstance"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $MobEffect$$Type } from "packages/net/minecraft/world/effect/$MobEffect"

export interface $IClientMobEffectExtensions {
"isVisibleInGui"(mobEffectInstance0: $MobEffectInstance$$Type): boolean
"isVisibleInInventory"(mobEffectInstance0: $MobEffectInstance$$Type): boolean
"renderGuiIcon"(mobEffectInstance0: $MobEffectInstance$$Type, gui1: $Gui$$Type, guiGraphics2: $GuiGraphics$$Type, int3: integer, int4: integer, float5: float, float6: float): boolean
"renderInventoryIcon"(mobEffectInstance0: $MobEffectInstance$$Type, effectRenderingInventoryScreen1: $EffectRenderingInventoryScreen$$Type<any>, guiGraphics2: $GuiGraphics$$Type, int3: integer, int4: integer, int5: integer): boolean
"renderInventoryText"(mobEffectInstance0: $MobEffectInstance$$Type, effectRenderingInventoryScreen1: $EffectRenderingInventoryScreen$$Type<any>, guiGraphics2: $GuiGraphics$$Type, int3: integer, int4: integer, int5: integer): boolean
}

export namespace $IClientMobEffectExtensions {
const DEFAULT: $IClientMobEffectExtensions
function of(mobEffectInstance0: $MobEffectInstance$$Type): $IClientMobEffectExtensions
function of(mobEffect0: $MobEffect$$Type): $IClientMobEffectExtensions
}
export abstract class $IClientMobEffectExtensions$$Static implements $IClientMobEffectExtensions {
static readonly "DEFAULT": $IClientMobEffectExtensions

static "of"(mobEffectInstance0: $MobEffectInstance$$Type): $IClientMobEffectExtensions
static "of"(mobEffect0: $MobEffect$$Type): $IClientMobEffectExtensions
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$Closing" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent } from "packages/net/minecraftforge/client/event/$ScreenEvent"

export class $ScreenEvent$Closing extends $ScreenEvent {
constructor(screen0: $Screen$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent$ColorResolvers" {
import { $ColorResolver$$Type } from "packages/net/minecraft/world/level/$ColorResolver"
import { $RegisterColorHandlersEvent } from "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent"
import { $ImmutableList$Builder$$Type } from "packages/com/google/common/collect/$ImmutableList$Builder"

export class $RegisterColorHandlersEvent$ColorResolvers extends $RegisterColorHandlersEvent {
constructor()
constructor(builder0: $ImmutableList$Builder$$Type<$ColorResolver$$Type>)

public "register"(colorResolver0: $ColorResolver$$Type): void
}
}

declare module "packages/net/minecraftforge/client/event/$ClientPlayerChangeGameTypeEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $PlayerInfo, $PlayerInfo$$Type } from "packages/net/minecraft/client/multiplayer/$PlayerInfo"
import { $GameType, $GameType$$Type } from "packages/net/minecraft/world/level/$GameType"

export class $ClientPlayerChangeGameTypeEvent extends $Event {
constructor(playerInfo0: $PlayerInfo$$Type, gameType1: $GameType$$Type, gameType2: $GameType$$Type)
constructor()

public "getCurrentGameType"(): $GameType
public "getInfo"(): $PlayerInfo
public "getNewGameType"(): $GameType
get "currentGameType"(): $GameType
get "info"(): $PlayerInfo
get "newGameType"(): $GameType
}
}

declare module "packages/net/minecraftforge/client/event/$TextureStitchEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $TextureAtlas, $TextureAtlas$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"

export class $TextureStitchEvent extends $Event implements $IModBusEvent {
constructor()
constructor(textureAtlas0: $TextureAtlas$$Type)

public "getAtlas"(): $TextureAtlas
get "atlas"(): $TextureAtlas
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseScrolled$Pre" {
import { $ScreenEvent$MouseScrolled } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseScrolled"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$MouseScrolled$Pre extends $ScreenEvent$MouseScrolled {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, double3: double)

}
}

declare module "packages/net/minecraftforge/client/event/$ClientChatEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $ClientChatEvent extends $Event {
constructor(string0: string)
constructor()

public "getMessage"(): string
public "getOriginalMessage"(): string
public "setMessage"(string0: string): void
get "message"(): string
get "originalMessage"(): string
set "message"(value: string)
}
}

declare module "packages/net/minecraftforge/client/event/$TextureStitchEvent$Post" {
import { $TextureAtlas$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import { $TextureStitchEvent } from "packages/net/minecraftforge/client/event/$TextureStitchEvent"

export class $TextureStitchEvent$Post extends $TextureStitchEvent {
constructor(textureAtlas0: $TextureAtlas$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"

export interface $IGeneratedBlockState {
"toJson"(): $JsonObject
}

export namespace $IGeneratedBlockState {
const probejs$$marker: never
}
export abstract class $IGeneratedBlockState$$Static implements $IGeneratedBlockState {
}
}

declare module "packages/net/minecraftforge/client/event/$RenderGuiEvent$Post" {
import { $RenderGuiEvent } from "packages/net/minecraftforge/client/event/$RenderGuiEvent"
import { $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $RenderGuiEvent$Post extends $RenderGuiEvent {
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, float2: float)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$ModelEvent$RegisterAdditional" {
import { $Set$$Type } from "packages/java/util/$Set"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ModelEvent } from "packages/net/minecraftforge/client/event/$ModelEvent"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModelEvent$RegisterAdditional extends $ModelEvent implements $IModBusEvent {
constructor()
constructor(set0: $Set$$Type<$ResourceLocation$$Type>)

public "register"(resourceLocation0: $ResourceLocation$$Type): void
}
}

declare module "packages/net/minecraftforge/client/event/$InputEvent$MouseButton" {
import { $InputEvent } from "packages/net/minecraftforge/client/event/$InputEvent"

export class $InputEvent$MouseButton extends $InputEvent {
constructor()

public "getAction"(): integer
public "getButton"(): integer
public "getModifiers"(): integer
get "action"(): integer
get "button"(): integer
get "modifiers"(): integer
}
}

declare module "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent$LoggingIn" {
import { $LocalPlayer$$Type } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $ClientPlayerNetworkEvent } from "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent"
import { $MultiPlayerGameMode$$Type } from "packages/net/minecraft/client/multiplayer/$MultiPlayerGameMode"

export class $ClientPlayerNetworkEvent$LoggingIn extends $ClientPlayerNetworkEvent {
constructor(multiPlayerGameMode0: $MultiPlayerGameMode$$Type, localPlayer1: $LocalPlayer$$Type, connection2: $Connection$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$RotationBuilder" {
import { $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"
import { $ModelBuilder$ElementBuilder, $ModelBuilder$ElementBuilder$$Type } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"

export class $ModelBuilder$ElementBuilder$RotationBuilder {
constructor(elementBuilder0: $ModelBuilder$ElementBuilder$$Type)

public "angle"(float0: float): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "axis"(axis0: $Direction$Axis$$Type): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "end"(): $ModelBuilder$ElementBuilder<>
public "origin"(float0: float, float1: float, float2: float): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "rescale"(boolean0: boolean): $ModelBuilder$ElementBuilder$RotationBuilder<>
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterClientReloadListenersEvent" {
import { $PreparableReloadListener$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ReloadableResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ReloadableResourceManager"

export class $RegisterClientReloadListenersEvent extends $Event implements $IModBusEvent {
constructor()
constructor(reloadableResourceManager0: $ReloadableResourceManager$$Type)

public "registerReloadListener"(preparableReloadListener0: $PreparableReloadListener$$Type): void
}
}

declare module "packages/net/minecraftforge/client/extensions/$IForgeFont" {
import { $FormattedText, $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $Font } from "packages/net/minecraft/client/gui/$Font"

export interface $IForgeFont {
"ellipsize"(formattedText0: $FormattedText$$Type, int1: integer): $FormattedText
"self"(): $Font
}

export namespace $IForgeFont {
const ELLIPSIS: $FormattedText
}
export abstract class $IForgeFont$$Static implements $IForgeFont {
static readonly "ELLIPSIS": $FormattedText

}
}

declare module "packages/net/minecraftforge/client/extensions/$IForgeKeyMapping" {
import { $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $IKeyConflictContext, $IKeyConflictContext$$Type } from "packages/net/minecraftforge/client/settings/$IKeyConflictContext"
import { $KeyModifier, $KeyModifier$$Type } from "packages/net/minecraftforge/client/settings/$KeyModifier"
import { $InputConstants$Key, $InputConstants$Key$$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IForgeKeyMapping {
"getDefaultKeyModifier"(): $KeyModifier
"getKey"(): $InputConstants$Key
"getKeyConflictContext"(): $IKeyConflictContext
"getKeyModifier"(): $KeyModifier
"hasKeyModifierConflict"(keyMapping0: $KeyMapping$$Type): boolean
"isActiveAndMatches"(key0: $InputConstants$Key$$Type): boolean
"isConflictContextAndModifierActive"(): boolean
"setKeyConflictContext"(iKeyConflictContext0: $IKeyConflictContext$$Type): void
"setKeyModifierAndCode"(keyModifier0: $KeyModifier$$Type, key1: $InputConstants$Key$$Type): void
"setToDefault"(): void
get "defaultKeyModifier"(): $KeyModifier
get "key"(): $InputConstants$Key
get "keyConflictContext"(): $IKeyConflictContext
get "keyModifier"(): $KeyModifier
get "conflictContextAndModifierActive"(): boolean
set "keyConflictContext"(value: $IKeyConflictContext$$Type)
}

export namespace $IForgeKeyMapping {
const probejs$$marker: never
}
export abstract class $IForgeKeyMapping$$Static implements $IForgeKeyMapping {
}
}

declare module "packages/net/minecraftforge/client/event/$ViewportEvent$ComputeCameraAngles" {
import { $GameRenderer$$Type } from "packages/net/minecraft/client/renderer/$GameRenderer"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $ViewportEvent } from "packages/net/minecraftforge/client/event/$ViewportEvent"

export class $ViewportEvent$ComputeCameraAngles extends $ViewportEvent {
constructor()
constructor(gameRenderer0: $GameRenderer$$Type, camera1: $Camera$$Type, double2: double, float3: float, float4: float, float5: float)

public "getPitch"(): float
public "getRoll"(): float
public "getYaw"(): float
public "setPitch"(float0: float): void
public "setRoll"(float0: float): void
public "setYaw"(float0: float): void
get "pitch"(): float
get "roll"(): float
get "yaw"(): float
set "pitch"(value: float)
set "roll"(value: float)
set "yaw"(value: float)
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseDragged" {
import { $ScreenEvent$MouseInput } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseInput"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$MouseDragged extends $ScreenEvent$MouseInput {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer, double4: double, double5: double)

public "getDragX"(): double
public "getDragY"(): double
public "getMouseButton"(): integer
get "dragX"(): double
get "dragY"(): double
get "mouseButton"(): integer
}
}

declare module "packages/net/minecraftforge/client/event/$ClientChatReceivedEvent$Player" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $PlayerChatMessage, $PlayerChatMessage$$Type } from "packages/net/minecraft/network/chat/$PlayerChatMessage"
import { $ClientChatReceivedEvent } from "packages/net/minecraftforge/client/event/$ClientChatReceivedEvent"
import { $ChatType$Bound$$Type } from "packages/net/minecraft/network/chat/$ChatType$Bound"

export class $ClientChatReceivedEvent$Player extends $ClientChatReceivedEvent {
constructor()
constructor(bound0: $ChatType$Bound$$Type, component1: $Component$$Type, playerChatMessage2: $PlayerChatMessage$$Type, uUID3: $UUID$$Type)

public "getPlayerChatMessage"(): $PlayerChatMessage
get "playerChatMessage"(): $PlayerChatMessage
}
}

declare module "packages/net/minecraftforge/client/model/geometry/$IUnbakedGeometry" {
import { $Material$$Type } from "packages/net/minecraft/client/resources/model/$Material"
import { $ItemOverrides$$Type } from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ModelBaker$$Type } from "packages/net/minecraft/client/resources/model/$ModelBaker"
import { $ModelState$$Type } from "packages/net/minecraft/client/resources/model/$ModelState"
import { $IGeometryBakingContext$$Type } from "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext"
import { $Set } from "packages/java/util/$Set"
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $UnbakedModel } from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IUnbakedGeometry<T extends $IUnbakedGeometry<T>> {
"bake"(iGeometryBakingContext0: $IGeometryBakingContext$$Type, modelBaker1: $ModelBaker$$Type, function2: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, modelState3: $ModelState$$Type, itemOverrides4: $ItemOverrides$$Type, resourceLocation5: $ResourceLocation$$Type): $BakedModel
"getConfigurableComponentNames"(): $Set<string>
"resolveParents"(function0: $Function$$Type<$ResourceLocation$$Type, $UnbakedModel>, iGeometryBakingContext1: $IGeometryBakingContext$$Type): void
get "configurableComponentNames"(): $Set<string>
}

export namespace $IUnbakedGeometry {
const probejs$$marker: never
}
export abstract class $IUnbakedGeometry$$Static<T extends $IUnbakedGeometry<T>> implements $IUnbakedGeometry<T> {
}
}

declare module "packages/net/minecraftforge/client/event/$ViewportEvent$RenderFog" {
import { $FogShape, $FogShape$$Type } from "packages/com/mojang/blaze3d/shaders/$FogShape"
import { $FogType, $FogType$$Type } from "packages/net/minecraft/world/level/material/$FogType"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $ViewportEvent } from "packages/net/minecraftforge/client/event/$ViewportEvent"
import { $FogRenderer$FogMode, $FogRenderer$FogMode$$Type } from "packages/net/minecraft/client/renderer/$FogRenderer$FogMode"

export class $ViewportEvent$RenderFog extends $ViewportEvent {
constructor()
constructor(fogMode0: $FogRenderer$FogMode$$Type, fogType1: $FogType$$Type, camera2: $Camera$$Type, float3: float, float4: float, float5: float, fogShape6: $FogShape$$Type)

public "getFarPlaneDistance"(): float
public "getFogShape"(): $FogShape
public "getMode"(): $FogRenderer$FogMode
public "getNearPlaneDistance"(): float
public "getType"(): $FogType
public "scaleFarPlaneDistance"(float0: float): void
public "scaleNearPlaneDistance"(float0: float): void
public "setFarPlaneDistance"(float0: float): void
public "setFogShape"(fogShape0: $FogShape$$Type): void
public "setNearPlaneDistance"(float0: float): void
get "farPlaneDistance"(): float
get "fogShape"(): $FogShape
get "mode"(): $FogRenderer$FogMode
get "nearPlaneDistance"(): float
get "type"(): $FogType
set "farPlaneDistance"(value: float)
set "fogShape"(value: $FogShape$$Type)
set "nearPlaneDistance"(value: float)
}
}

declare module "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext$VisibilityData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockGeometryBakingContext$VisibilityData {
constructor()

public "copyFrom"(visibilityData0: $BlockGeometryBakingContext$VisibilityData$$Type): void
public "hasCustomVisibility"(string0: string): boolean
public "isVisible"(string0: string, boolean1: boolean): boolean
public "setVisibilityState"(string0: string, boolean1: boolean): void
}
}

declare module "packages/net/minecraftforge/client/event/$RenderGuiOverlayEvent$Pre" {
import { $NamedGuiOverlay$$Type } from "packages/net/minecraftforge/client/gui/overlay/$NamedGuiOverlay"
import { $RenderGuiOverlayEvent } from "packages/net/minecraftforge/client/event/$RenderGuiOverlayEvent"
import { $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $RenderGuiOverlayEvent$Pre extends $RenderGuiOverlayEvent {
constructor()
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, float2: float, namedGuiOverlay3: $NamedGuiOverlay$$Type)

}
}

declare module "packages/net/minecraftforge/client/event/$ModelEvent$RegisterGeometryLoaders" {
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $IGeometryLoader$$Type } from "packages/net/minecraftforge/client/model/geometry/$IGeometryLoader"
import { $ModelEvent } from "packages/net/minecraftforge/client/event/$ModelEvent"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $ModelEvent$RegisterGeometryLoaders extends $ModelEvent implements $IModBusEvent {
constructor()
constructor(map0: $Map$$Type<$ResourceLocation$$Type, $IGeometryLoader$$Type<any>>)

public "register"(string0: string, iGeometryLoader1: $IGeometryLoader$$Type<any>): void
}
}

declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder" {
import { $ItemDisplayContext$$Type } from "packages/net/minecraft/world/item/$ItemDisplayContext"
import { $ModelBuilder$TransformsBuilder$TransformVecBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder$TransformVecBuilder"
import { $ModelBuilder, $ModelBuilder$$Type } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$TransformsBuilder {
constructor(modelBuilder0: $ModelBuilder$$Type<any>)

public "end"(): T
public "transform"(itemDisplayContext0: $ItemDisplayContext$$Type): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
}
}

declare module "packages/net/minecraftforge/client/event/$RenderPlayerEvent$Post" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $PlayerRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/player/$PlayerRenderer"
import { $RenderPlayerEvent } from "packages/net/minecraftforge/client/event/$RenderPlayerEvent"

export class $RenderPlayerEvent$Post extends $RenderPlayerEvent {
constructor(player0: $Player$$Type, playerRenderer1: $PlayerRenderer$$Type, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$RegisterPresetEditorsEvent" {
import { $PresetEditor$$Type } from "packages/net/minecraft/client/gui/screens/worldselection/$PresetEditor"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $WorldPreset, $WorldPreset$$Type } from "packages/net/minecraft/world/level/levelgen/presets/$WorldPreset"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Map$$Type } from "packages/java/util/$Map"

export class $RegisterPresetEditorsEvent extends $Event implements $IModBusEvent {
constructor(map0: $Map$$Type<$ResourceKey$$Type<$WorldPreset$$Type>, $PresetEditor$$Type>)
constructor()

public "register"(resourceKey0: $ResourceKey$$Type<$WorldPreset>, presetEditor1: $PresetEditor$$Type): void
}
}

declare module "packages/net/minecraftforge/client/event/$InputEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $InputEvent extends $Event {
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterParticleProvidersEvent" {
import { $ParticleProvider$$Type } from "packages/net/minecraft/client/particle/$ParticleProvider"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ParticleType$$Type } from "packages/net/minecraft/core/particles/$ParticleType"
import { $ParticleEngine$SpriteParticleRegistration$$Type } from "packages/net/minecraft/client/particle/$ParticleEngine$SpriteParticleRegistration"
import { $ParticleEngine$$Type } from "packages/net/minecraft/client/particle/$ParticleEngine"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $ParticleProvider$Sprite$$Type } from "packages/net/minecraft/client/particle/$ParticleProvider$Sprite"

export class $RegisterParticleProvidersEvent extends $Event implements $IModBusEvent {
constructor(particleEngine0: $ParticleEngine$$Type)
constructor()

public "registerSpecial"<T extends $ParticleOptions>(particleType0: $ParticleType$$Type<T>, particleProvider1: $ParticleProvider$$Type<T>): void
public "registerSprite"<T extends $ParticleOptions>(particleType0: $ParticleType$$Type<T>, sprite1: $ParticleProvider$Sprite$$Type<T>): void
public "registerSpriteSet"<T extends $ParticleOptions>(particleType0: $ParticleType$$Type<T>, spriteParticleRegistration1: $ParticleEngine$SpriteParticleRegistration$$Type<T>): void
}
}

declare module "packages/net/minecraftforge/client/model/generators/$ItemModelProvider" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $ItemModelBuilder } from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $PackOutput$$Type } from "packages/net/minecraft/data/$PackOutput"
import { $ModelProvider } from "packages/net/minecraftforge/client/model/generators/$ModelProvider"
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ItemModelProvider extends $ModelProvider<$ItemModelBuilder> {
constructor(packOutput0: $PackOutput$$Type, string1: string, existingFileHelper2: $ExistingFileHelper$$Type)

public "basicItem"(item0: $Item$$Type): $ItemModelBuilder
public "basicItem"(resourceLocation0: $ResourceLocation$$Type): $ItemModelBuilder
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "packages/net/minecraftforge/client/event/$ModelEvent$BakingCompleted" {
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ModelEvent } from "packages/net/minecraftforge/client/event/$ModelEvent"
import { $BakedModel, $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ModelBakery, $ModelBakery$$Type } from "packages/net/minecraft/client/resources/model/$ModelBakery"
import { $ModelManager, $ModelManager$$Type } from "packages/net/minecraft/client/resources/model/$ModelManager"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $ModelEvent$BakingCompleted extends $ModelEvent implements $IModBusEvent {
constructor()
constructor(modelManager0: $ModelManager$$Type, map1: $Map$$Type<$ResourceLocation$$Type, $BakedModel$$Type>, modelBakery2: $ModelBakery$$Type)

public "getModelBakery"(): $ModelBakery
public "getModelManager"(): $ModelManager
public "getModels"(): $Map<$ResourceLocation, $BakedModel>
get "modelBakery"(): $ModelBakery
get "modelManager"(): $ModelManager
get "models"(): $Map<$ResourceLocation, $BakedModel>
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterItemDecorationsEvent" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IItemDecorator$$Type } from "packages/net/minecraftforge/client/$IItemDecorator"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $Map$$Type } from "packages/java/util/$Map"

export class $RegisterItemDecorationsEvent extends $Event implements $IModBusEvent {
constructor(map0: $Map$$Type<$Item$$Type, $List$$Type<$IItemDecorator$$Type>>)
constructor()

public "register"(itemLike0: $ItemLike$$Type, iItemDecorator1: $IItemDecorator$$Type): void
}
}

declare module "packages/net/minecraftforge/client/event/$RenderItemInFrameEvent" {
import { $ItemFrame, $ItemFrame$$Type } from "packages/net/minecraft/world/entity/decoration/$ItemFrame"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $ItemFrameRenderer, $ItemFrameRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$ItemFrameRenderer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export class $RenderItemInFrameEvent extends $Event {
constructor()
constructor(itemFrame0: $ItemFrame$$Type, itemFrameRenderer1: $ItemFrameRenderer$$Type<any>, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer)

public "getItemFrameEntity"(): $ItemFrame
public "getItemStack"(): $ItemStack
public "getMultiBufferSource"(): $MultiBufferSource
public "getPackedLight"(): integer
public "getPoseStack"(): $PoseStack
public "getRenderer"(): $ItemFrameRenderer<any>
get "itemFrameEntity"(): $ItemFrame
get "itemStack"(): $ItemStack
get "multiBufferSource"(): $MultiBufferSource
get "packedLight"(): integer
get "poseStack"(): $PoseStack
get "renderer"(): $ItemFrameRenderer<any>
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent$Block" {
import { $BlockColors, $BlockColors$$Type } from "packages/net/minecraft/client/color/block/$BlockColors"
import { $BlockColor$$Type } from "packages/net/minecraft/client/color/block/$BlockColor"
import { $RegisterColorHandlersEvent } from "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export class $RegisterColorHandlersEvent$Block extends $RegisterColorHandlersEvent {
constructor()
constructor(blockColors0: $BlockColors$$Type)

public "getBlockColors"(): $BlockColors
public "register"(blockColor0: $BlockColor$$Type, ...block1s: $Block$$Type[]): void
get "blockColors"(): $BlockColors
}
}

declare module "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder$PartialBlockstate" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $VariantBlockStateBuilder } from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Property, $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $SortedMap } from "packages/java/util/$SortedMap"
import { $ConfiguredModel$Builder } from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $ConfiguredModel$$Type } from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $VariantBlockStateBuilder$PartialBlockstate implements $Predicate<$BlockState> {
public "addModels"(...configuredModel0s: $ConfiguredModel$$Type[]): $VariantBlockStateBuilder$PartialBlockstate
public "and"(predicate0: $Predicate$$Type<$BlockState$$Type>): $Predicate<$BlockState>
public static "comparingByProperties"(): $Comparator<$VariantBlockStateBuilder$PartialBlockstate>
public "getOwner"(): $Block
public "getSetStates"(): $SortedMap<$Property<any>, $Comparable<any>>
public static "isEqual"<T>(object0: any): $Predicate<T>
public "modelForState"(): $ConfiguredModel$Builder<$VariantBlockStateBuilder>
public "negate"(): $Predicate<$BlockState>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$BlockState$$Type>): $Predicate<$BlockState>
public "partialState"(): $VariantBlockStateBuilder$PartialBlockstate
public "setModels"(...configuredModel0s: $ConfiguredModel$$Type[]): $VariantBlockStateBuilder
public "test"(blockState0: $BlockState$$Type): boolean
public "with"<T extends $Comparable<T>>(property0: $Property$$Type<T>, t1: T): $VariantBlockStateBuilder$PartialBlockstate
get "owner"(): $Block
get "setStates"(): $SortedMap<$Property<any>, $Comparable<any>>
set "models"(value: $ConfiguredModel$$Type[])
}
}

declare module "packages/net/minecraftforge/client/event/$RecipesUpdatedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $RecipeManager, $RecipeManager$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeManager"

export class $RecipesUpdatedEvent extends $Event {
constructor()
constructor(recipeManager0: $RecipeManager$$Type)

public "getRecipeManager"(): $RecipeManager
get "recipeManager"(): $RecipeManager
}
}

declare module "packages/net/minecraftforge/client/event/$ContainerScreenEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $AbstractContainerScreen } from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export class $ContainerScreenEvent extends $Event {
constructor()

public "getContainerScreen"(): $AbstractContainerScreen<any>
get "containerScreen"(): $AbstractContainerScreen<any>
}
}

declare module "packages/net/minecraftforge/client/event/$ViewportEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $GameRenderer, $GameRenderer$$Type } from "packages/net/minecraft/client/renderer/$GameRenderer"
import { $Camera, $Camera$$Type } from "packages/net/minecraft/client/$Camera"

export class $ViewportEvent extends $Event {
constructor()
constructor(gameRenderer0: $GameRenderer$$Type, camera1: $Camera$$Type, double2: double)

public "getCamera"(): $Camera
public "getPartialTick"(): double
public "getRenderer"(): $GameRenderer
get "camera"(): $Camera
get "partialTick"(): double
get "renderer"(): $GameRenderer
}
}

declare module "packages/net/minecraftforge/client/event/$ContainerScreenEvent$Render$Background" {
import { $ContainerScreenEvent$Render } from "packages/net/minecraftforge/client/event/$ContainerScreenEvent$Render"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $AbstractContainerScreen$$Type } from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export class $ContainerScreenEvent$Render$Background extends $ContainerScreenEvent$Render {
constructor(abstractContainerScreen0: $AbstractContainerScreen$$Type<any>, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$Init$Post" {
import { $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List$$Type } from "packages/java/util/$List"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent$Init } from "packages/net/minecraftforge/client/event/$ScreenEvent$Init"

export class $ScreenEvent$Init$Post extends $ScreenEvent$Init {
constructor(screen0: $Screen$$Type, list1: $List$$Type<$GuiEventListener$$Type>, consumer2: $Consumer$$Type<$GuiEventListener$$Type>, consumer3: $Consumer$$Type<$GuiEventListener$$Type>)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$InputEvent$MouseScrollingEvent" {
import { $InputEvent } from "packages/net/minecraftforge/client/event/$InputEvent"

export class $InputEvent$MouseScrollingEvent extends $InputEvent {
constructor()
constructor(double0: double, boolean1: boolean, boolean2: boolean, boolean3: boolean, double4: double, double5: double)

public "getMouseX"(): double
public "getMouseY"(): double
public "getScrollDelta"(): double
public "isLeftDown"(): boolean
public "isMiddleDown"(): boolean
public "isRightDown"(): boolean
get "mouseX"(): double
get "mouseY"(): double
get "scrollDelta"(): double
get "leftDown"(): boolean
get "middleDown"(): boolean
get "rightDown"(): boolean
}
}

declare module "packages/net/minecraftforge/client/$ChunkRenderTypeSet" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $Iterable, $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $RenderType, $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $ChunkRenderTypeSet implements $Iterable<$RenderType> {
public static "all"(): $ChunkRenderTypeSet
public "asList"(): $List<any>
public "contains"(renderType0: $RenderType$$Type): boolean
public "forEach"(consumer0: $Consumer$$Type<$RenderType$$Type>): void
public static "intersection"(collection0: $Collection$$Type<$ChunkRenderTypeSet$$Type>): $ChunkRenderTypeSet
public static "intersection"(...chunkRenderTypeSet0s: $ChunkRenderTypeSet$$Type[]): $ChunkRenderTypeSet
public static "intersection"(iterable0: $Iterable$$Type<any>): $ChunkRenderTypeSet
public "isEmpty"(): boolean
public "iterator"(): $Iterator<any>
public static "none"(): $ChunkRenderTypeSet
public static "of"(...renderType0s: $RenderType$$Type[]): $ChunkRenderTypeSet
public static "of"(collection0: $Collection$$Type<$RenderType$$Type>): $ChunkRenderTypeSet
public "spliterator"(): $Spliterator<$RenderType>
public static "union"(iterable0: $Iterable$$Type<any>): $ChunkRenderTypeSet
public static "union"(collection0: $Collection$$Type<$ChunkRenderTypeSet$$Type>): $ChunkRenderTypeSet
public static "union"(...chunkRenderTypeSet0s: $ChunkRenderTypeSet$$Type[]): $ChunkRenderTypeSet
[Symbol.iterator](): IterableIterator<any>;
get "empty"(): boolean
}
}

declare module "packages/net/minecraftforge/client/event/$RenderLevelStageEvent$RegisterStageEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RenderLevelStageEvent$Stage } from "packages/net/minecraftforge/client/event/$RenderLevelStageEvent$Stage"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $RenderLevelStageEvent$RegisterStageEvent extends $Event implements $IModBusEvent {
constructor()

public "register"(resourceLocation0: $ResourceLocation$$Type, renderType1: $RenderType$$Type): $RenderLevelStageEvent$Stage
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$CharacterTyped" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent } from "packages/net/minecraftforge/client/event/$ScreenEvent"

export class $ScreenEvent$CharacterTyped extends $ScreenEvent {
constructor()
constructor(screen0: $Screen$$Type, char1: character, int2: integer)

public "getCodePoint"(): character
public "getModifiers"(): integer
get "codePoint"(): character
get "modifiers"(): integer
}
}

declare module "packages/net/minecraftforge/client/settings/$IKeyConflictContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IKeyConflictContext {
"conflicts"(iKeyConflictContext0: $IKeyConflictContext$$Type): boolean
"isActive"(): boolean
get "active"(): boolean
}

export namespace $IKeyConflictContext {
const probejs$$marker: never
}
export abstract class $IKeyConflictContext$$Static implements $IKeyConflictContext {
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterShadersEvent" {
import { $ResourceProvider, $ResourceProvider$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ShaderInstance$$Type } from "packages/net/minecraft/client/renderer/$ShaderInstance"
import { $List$$Type } from "packages/java/util/$List"
import { $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"

export class $RegisterShadersEvent extends $Event implements $IModBusEvent {
constructor()
constructor(resourceProvider0: $ResourceProvider$$Type, list1: $List$$Type<$Pair$$Type<$ShaderInstance$$Type, $Consumer$$Type<$ShaderInstance$$Type>>>)

public "getResourceProvider"(): $ResourceProvider
public "registerShader"(shaderInstance0: $ShaderInstance$$Type, consumer1: $Consumer$$Type<$ShaderInstance$$Type>): void
get "resourceProvider"(): $ResourceProvider
}
}

declare module "packages/net/minecraftforge/client/event/$RenderTooltipEvent$Color" {
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $RenderTooltipEvent } from "packages/net/minecraftforge/client/event/$RenderTooltipEvent"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ClientTooltipComponent$$Type } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipComponent"

export class $RenderTooltipEvent$Color extends $RenderTooltipEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, font4: $Font$$Type, int5: integer, int6: integer, int7: integer, list8: $List$$Type<$ClientTooltipComponent$$Type>)

public "getBackgroundEnd"(): integer
public "getBackgroundStart"(): integer
public "getBorderEnd"(): integer
public "getBorderStart"(): integer
public "getOriginalBackgroundEnd"(): integer
public "getOriginalBackgroundStart"(): integer
public "getOriginalBorderEnd"(): integer
public "getOriginalBorderStart"(): integer
public "setBackground"(int0: integer): void
public "setBackgroundEnd"(int0: integer): void
public "setBackgroundStart"(int0: integer): void
public "setBorderEnd"(int0: integer): void
public "setBorderStart"(int0: integer): void
get "backgroundEnd"(): integer
get "backgroundStart"(): integer
get "borderEnd"(): integer
get "borderStart"(): integer
get "originalBackgroundEnd"(): integer
get "originalBackgroundStart"(): integer
get "originalBorderEnd"(): integer
get "originalBorderStart"(): integer
set "background"(value: integer)
set "backgroundEnd"(value: integer)
set "backgroundStart"(value: integer)
set "borderEnd"(value: integer)
set "borderStart"(value: integer)
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$KeyPressed$Post" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent$KeyPressed } from "packages/net/minecraftforge/client/event/$ScreenEvent$KeyPressed"

export class $ScreenEvent$KeyPressed$Post extends $ScreenEvent$KeyPressed {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/minecraftforge/client/model/data/$ModelProperty" {
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"

export class $ModelProperty<T> implements $Predicate<T> {
constructor()
constructor(predicate0: $Predicate$$Type<T>)

public "and"(predicate0: $Predicate$$Type<T>): $Predicate<T>
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<T>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "test"(t0: T): boolean
}
}

declare module "packages/net/minecraftforge/client/event/$ViewportEvent$ComputeFogColor" {
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $ViewportEvent } from "packages/net/minecraftforge/client/event/$ViewportEvent"

export class $ViewportEvent$ComputeFogColor extends $ViewportEvent {
constructor()
constructor(camera0: $Camera$$Type, float1: float, float2: float, float3: float, float4: float)

public "getBlue"(): float
public "getGreen"(): float
public "getRed"(): float
public "setBlue"(float0: float): void
public "setGreen"(float0: float): void
public "setRed"(float0: float): void
get "blue"(): float
get "green"(): float
get "red"(): float
set "blue"(value: float)
set "green"(value: float)
set "red"(value: float)
}
}

declare module "packages/net/minecraftforge/client/event/$RenderLivingEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $LivingEntityRenderer } from "packages/net/minecraft/client/renderer/entity/$LivingEntityRenderer"
import { $PoseStack } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $EntityModel } from "packages/net/minecraft/client/model/$EntityModel"
import { $MultiBufferSource } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $RenderLivingEvent<T extends $LivingEntity, M extends $EntityModel<T>> extends $Event {
constructor()

public "getEntity"(): $LivingEntity
public "getMultiBufferSource"(): $MultiBufferSource
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getRenderer"(): $LivingEntityRenderer<T, M>
get "entity"(): $LivingEntity
get "multiBufferSource"(): $MultiBufferSource
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "renderer"(): $LivingEntityRenderer<T, M>
}
}

declare module "packages/net/minecraftforge/client/event/$EntityRenderersEvent$CreateSkullModels" {
import { $SkullModelBase$$Type } from "packages/net/minecraft/client/model/$SkullModelBase"
import { $EntityRenderersEvent } from "packages/net/minecraftforge/client/event/$EntityRenderersEvent"
import { $EntityModelSet, $EntityModelSet$$Type } from "packages/net/minecraft/client/model/geom/$EntityModelSet"
import { $SkullBlock$Type$$Type } from "packages/net/minecraft/world/level/block/$SkullBlock$Type"
import { $ImmutableMap$Builder$$Type } from "packages/com/google/common/collect/$ImmutableMap$Builder"

export class $EntityRenderersEvent$CreateSkullModels extends $EntityRenderersEvent {
constructor()
constructor(builder0: $ImmutableMap$Builder$$Type<$SkullBlock$Type$$Type, $SkullModelBase$$Type>, entityModelSet1: $EntityModelSet$$Type)

public "getEntityModelSet"(): $EntityModelSet
public "registerSkullModel"(type0: $SkullBlock$Type$$Type, skullModelBase1: $SkullModelBase$$Type): void
get "entityModelSet"(): $EntityModelSet
}
}

declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Multimap } from "packages/com/google/common/collect/$Multimap"
import { $MultiPartBlockStateBuilder$PartBuilder, $MultiPartBlockStateBuilder$PartBuilder$$Type } from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder"
import { $List } from "packages/java/util/$List"
import { $Property, $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup {
readonly "conditions": $Multimap<$Property<any>, $Comparable<any>>
readonly "nestedConditionGroups": $List<$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup>
"useOr": boolean

constructor(partBuilder0: $MultiPartBlockStateBuilder$PartBuilder$$Type)

public "condition"<T extends $Comparable<T>>(property0: $Property$$Type<T>, ...t1s: T[]): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "end"(): $MultiPartBlockStateBuilder$PartBuilder
public "endNestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "nestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "useOr"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
}
}

declare module "packages/net/minecraftforge/client/event/$ClientChatReceivedEvent$System" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ClientChatReceivedEvent } from "packages/net/minecraftforge/client/event/$ClientChatReceivedEvent"
import { $ChatType$Bound$$Type } from "packages/net/minecraft/network/chat/$ChatType$Bound"

export class $ClientChatReceivedEvent$System extends $ClientChatReceivedEvent {
constructor()
constructor(bound0: $ChatType$Bound$$Type, component1: $Component$$Type, boolean2: boolean)

public "isOverlay"(): boolean
get "overlay"(): boolean
}
}

declare module "packages/net/minecraftforge/client/model/generators/$BlockModelProvider" {
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $BlockModelBuilder } from "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder"
import { $PackOutput$$Type } from "packages/net/minecraft/data/$PackOutput"
import { $ModelProvider } from "packages/net/minecraftforge/client/model/generators/$ModelProvider"
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"

export class $BlockModelProvider extends $ModelProvider<$BlockModelBuilder> {
constructor(packOutput0: $PackOutput$$Type, string1: string, existingFileHelper2: $ExistingFileHelper$$Type)

public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "packages/net/minecraftforge/client/event/$RenderLivingEvent$Post" {
import { $LivingEntityRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$LivingEntityRenderer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $RenderLivingEvent } from "packages/net/minecraftforge/client/event/$RenderLivingEvent"
import { $EntityModel } from "packages/net/minecraft/client/model/$EntityModel"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $RenderLivingEvent$Post<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLivingEvent<T, M> {
constructor(livingEntity0: $LivingEntity$$Type, livingEntityRenderer1: $LivingEntityRenderer$$Type<T, M>, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$RegisterRecipeBookCategoriesEvent" {
import { $RecipeBookType$$Type } from "packages/net/minecraft/world/inventory/$RecipeBookType"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $ImmutableList$$Type } from "packages/com/google/common/collect/$ImmutableList"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $List$$Type } from "packages/java/util/$List"
import { $RecipeBookCategories, $RecipeBookCategories$$Type } from "packages/net/minecraft/client/$RecipeBookCategories"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $Map$$Type } from "packages/java/util/$Map"

export class $RegisterRecipeBookCategoriesEvent extends $Event implements $IModBusEvent {
constructor()
constructor(map0: $Map$$Type<$RecipeBookCategories$$Type, $ImmutableList$$Type<$RecipeBookCategories$$Type>>, map1: $Map$$Type<$RecipeBookType$$Type, $ImmutableList$$Type<$RecipeBookCategories$$Type>>, map2: $Map$$Type<$RecipeType$$Type<any>, $Function$$Type<$Recipe$$Type<any>, $RecipeBookCategories$$Type>>)

public "registerAggregateCategory"(recipeBookCategories0: $RecipeBookCategories$$Type, list1: $List$$Type<$RecipeBookCategories$$Type>): void
public "registerBookCategories"(recipeBookType0: $RecipeBookType$$Type, list1: $List$$Type<$RecipeBookCategories$$Type>): void
public "registerRecipeCategoryFinder"(recipeType0: $RecipeType$$Type<any>, function1: $Function$$Type<$Recipe$$Type<any>, $RecipeBookCategories>): void
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseButtonReleased$Pre" {
import { $ScreenEvent$MouseButtonReleased } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseButtonReleased"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$MouseButtonReleased$Pre extends $ScreenEvent$MouseButtonReleased {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)

}
}

declare module "packages/net/minecraftforge/client/event/$RenderNameTagEvent" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $EntityEvent } from "packages/net/minecraftforge/event/entity/$EntityEvent"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $EntityRenderer, $EntityRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $RenderNameTagEvent extends $EntityEvent {
constructor()
constructor(entity0: $Entity$$Type, component1: $Component$$Type, entityRenderer2: $EntityRenderer$$Type<any>, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, float6: float)

public "getContent"(): $Component
public "getEntityRenderer"(): $EntityRenderer<any>
public "getMultiBufferSource"(): $MultiBufferSource
public "getOriginalContent"(): $Component
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "setContent"(component0: $Component$$Type): void
get "content"(): $Component
get "entityRenderer"(): $EntityRenderer<any>
get "multiBufferSource"(): $MultiBufferSource
get "originalContent"(): $Component
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
set "content"(value: $Component$$Type)
}
}

declare module "packages/net/minecraftforge/client/model/generators/$ConfiguredModel" {
import { $ConfiguredModel$Builder } from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import { $ModelFile, $ModelFile$$Type } from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ConfiguredModel {
static readonly "DEFAULT_WEIGHT": integer
readonly "model": $ModelFile
readonly "rotationX": integer
readonly "rotationY": integer
readonly "uvLock": boolean
readonly "weight": integer

constructor(modelFile0: $ModelFile$$Type)
constructor(modelFile0: $ModelFile$$Type, int1: integer, int2: integer, boolean3: boolean, int4: integer)
constructor(modelFile0: $ModelFile$$Type, int1: integer, int2: integer, boolean3: boolean)

public static "allRotations"(modelFile0: $ModelFile$$Type, boolean1: boolean, int2: integer): $ConfiguredModel[]
public static "allRotations"(modelFile0: $ModelFile$$Type, boolean1: boolean): $ConfiguredModel[]
public static "allYRotations"(modelFile0: $ModelFile$$Type, int1: integer, boolean2: boolean): $ConfiguredModel[]
public static "allYRotations"(modelFile0: $ModelFile$$Type, int1: integer, boolean2: boolean, int3: integer): $ConfiguredModel[]
public static "builder"(): $ConfiguredModel$Builder<any>
}
}

declare module "packages/net/minecraftforge/client/event/$MovementInputUpdateEvent" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PlayerEvent } from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import { $Input, $Input$$Type } from "packages/net/minecraft/client/player/$Input"

export class $MovementInputUpdateEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, input1: $Input$$Type)

public "getInput"(): $Input
get "input"(): $Input
}
}

declare module "packages/net/minecraftforge/client/event/$InputEvent$MouseButton$Pre" {
import { $InputEvent$MouseButton } from "packages/net/minecraftforge/client/event/$InputEvent$MouseButton"

export class $InputEvent$MouseButton$Pre extends $InputEvent$MouseButton {
constructor()
constructor(int0: integer, int1: integer, int2: integer)

}
}

declare module "packages/net/minecraftforge/client/model/generators/$ModelFile$ExistingModelFile" {
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ModelFile } from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ModelFile$ExistingModelFile extends $ModelFile {
constructor(resourceLocation0: $ResourceLocation$$Type, existingFileHelper1: $ExistingFileHelper$$Type)

}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseButtonPressed$Pre" {
import { $ScreenEvent$MouseButtonPressed } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseButtonPressed"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$MouseButtonPressed$Pre extends $ScreenEvent$MouseButtonPressed {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)

}
}

declare module "packages/net/minecraftforge/client/event/$ModelEvent$ModifyBakingResult" {
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ModelEvent } from "packages/net/minecraftforge/client/event/$ModelEvent"
import { $BakedModel, $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ModelBakery, $ModelBakery$$Type } from "packages/net/minecraft/client/resources/model/$ModelBakery"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $ModelEvent$ModifyBakingResult extends $ModelEvent implements $IModBusEvent {
constructor()
constructor(map0: $Map$$Type<$ResourceLocation$$Type, $BakedModel$$Type>, modelBakery1: $ModelBakery$$Type)

public "getModelBakery"(): $ModelBakery
public "getModels"(): $Map<$ResourceLocation, $BakedModel>
get "modelBakery"(): $ModelBakery
get "models"(): $Map<$ResourceLocation, $BakedModel>
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$Init" {
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $List } from "packages/java/util/$List"
import { $ScreenEvent } from "packages/net/minecraftforge/client/event/$ScreenEvent"

export class $ScreenEvent$Init extends $ScreenEvent {
constructor()

public "addListener"(guiEventListener0: $GuiEventListener$$Type): void
public "getListenersList"(): $List<$GuiEventListener>
public "removeListener"(guiEventListener0: $GuiEventListener$$Type): void
get "listenersList"(): $List<$GuiEventListener>
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseDragged$Post" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent$MouseDragged } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseDragged"

export class $ScreenEvent$MouseDragged$Post extends $ScreenEvent$MouseDragged {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer, double4: double, double5: double)

}
}

declare module "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"

export class $RegisterColorHandlersEvent extends $Event implements $IModBusEvent {
}
}

declare module "packages/net/minecraftforge/client/event/sound/$SoundEvent$SoundSourceEvent" {
import { $Channel } from "packages/com/mojang/blaze3d/audio/$Channel"
import { $SoundInstance } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import { $SoundEvent } from "packages/net/minecraftforge/client/event/sound/$SoundEvent"

export class $SoundEvent$SoundSourceEvent extends $SoundEvent {
constructor()

public "getChannel"(): $Channel
public "getName"(): string
public "getSound"(): $SoundInstance
get "channel"(): $Channel
get "name"(): string
get "sound"(): $SoundInstance
}
}

declare module "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent" {
import { $LocalPlayer } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Connection } from "packages/net/minecraft/network/$Connection"
import { $MultiPlayerGameMode } from "packages/net/minecraft/client/multiplayer/$MultiPlayerGameMode"

export class $ClientPlayerNetworkEvent extends $Event {
constructor()

public "getConnection"(): $Connection
public "getMultiPlayerGameMode"(): $MultiPlayerGameMode
public "getPlayer"(): $LocalPlayer
get "connection"(): $Connection
get "multiPlayerGameMode"(): $MultiPlayerGameMode
get "player"(): $LocalPlayer
}
}

declare module "packages/net/minecraftforge/client/$RenderTypeGroup" {
import { $Record } from "packages/java/lang/$Record"
import { $RenderType, $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $RenderTypeGroup extends $Record {
static "EMPTY": $RenderTypeGroup

constructor(block: $RenderType$$Type, entity: $RenderType$$Type, entityFabulous: $RenderType$$Type)
constructor(renderType0: $RenderType$$Type, renderType1: $RenderType$$Type)

public "block"(): $RenderType
public "entity"(): $RenderType
public "entityFabulous"(): $RenderType
public "isEmpty"(): boolean
get "empty"(): boolean
}
}

declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$FaceRotation" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ModelBuilder$FaceRotation extends $Enum<$ModelBuilder$FaceRotation> {
static readonly "CLOCKWISE_90": $ModelBuilder$FaceRotation
static readonly "COUNTERCLOCKWISE_90": $ModelBuilder$FaceRotation
static readonly "UPSIDE_DOWN": $ModelBuilder$FaceRotation
static readonly "ZERO": $ModelBuilder$FaceRotation

public static "valueOf"(string0: string): $ModelBuilder$FaceRotation
public static "values"(): $ModelBuilder$FaceRotation[]
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseButtonReleased" {
import { $ScreenEvent$MouseInput } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseInput"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$MouseButtonReleased extends $ScreenEvent$MouseInput {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)

public "getButton"(): integer
get "button"(): integer
}
}

declare module "packages/net/minecraftforge/client/model/generators/$CustomLoaderBuilder" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ModelBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $CustomLoaderBuilder<T extends $ModelBuilder<T>> {
public "end"(): T
public "toJson"(jsonObject0: $JsonObject$$Type): $JsonObject
public "visibility"(string0: string, boolean1: boolean): $CustomLoaderBuilder<T>
}
}

declare module "packages/net/minecraftforge/client/event/$InputEvent$MouseButton$Post" {
import { $InputEvent$MouseButton } from "packages/net/minecraftforge/client/event/$InputEvent$MouseButton"

export class $InputEvent$MouseButton$Post extends $InputEvent$MouseButton {
constructor(int0: integer, int1: integer, int2: integer)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$KeyReleased" {
import { $ScreenEvent$KeyInput } from "packages/net/minecraftforge/client/event/$ScreenEvent$KeyInput"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$KeyReleased extends $ScreenEvent$KeyInput {
constructor()
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)

}
}

declare module "packages/net/minecraftforge/client/model/data/$ModelData$Builder" {
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $ModelProperty$$Type } from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $ModelData$Builder {
public "build"(): $ModelData
public "with"<T>(modelProperty0: $ModelProperty$$Type<T>, t1: T): $ModelData$Builder
}
}

declare module "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder" {
import { $ModelFile$$Type } from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import { $ConfiguredModel } from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $ConfiguredModel$Builder<T> {
public "addModel"(): T
public "build"(): $ConfiguredModel[]
public "buildLast"(): $ConfiguredModel
public "modelFile"(modelFile0: $ModelFile$$Type): $ConfiguredModel$Builder<T>
public "nextModel"(): $ConfiguredModel$Builder<T>
public "rotationX"(int0: integer): $ConfiguredModel$Builder<T>
public "rotationY"(int0: integer): $ConfiguredModel$Builder<T>
public "uvLock"(boolean0: boolean): $ConfiguredModel$Builder<T>
public "weight"(int0: integer): $ConfiguredModel$Builder<T>
}
}

declare module "packages/net/minecraftforge/client/gui/overlay/$NamedGuiOverlay" {
import { $Record } from "packages/java/lang/$Record"
import { $IGuiOverlay, $IGuiOverlay$$Type } from "packages/net/minecraftforge/client/gui/overlay/$IGuiOverlay"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $NamedGuiOverlay extends $Record {
constructor(id: $ResourceLocation$$Type, overlay: $IGuiOverlay$$Type)

public "id"(): $ResourceLocation
public "overlay"(): $IGuiOverlay
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$KeyReleased$Pre" {
import { $ScreenEvent$KeyReleased } from "packages/net/minecraftforge/client/event/$ScreenEvent$KeyReleased"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$KeyReleased$Pre extends $ScreenEvent$KeyReleased {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$RenderBlockScreenEffectEvent$OverlayType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $RenderBlockScreenEffectEvent$OverlayType extends $Enum<$RenderBlockScreenEffectEvent$OverlayType> {
static readonly "BLOCK": $RenderBlockScreenEffectEvent$OverlayType
static readonly "FIRE": $RenderBlockScreenEffectEvent$OverlayType
static readonly "WATER": $RenderBlockScreenEffectEvent$OverlayType

public static "valueOf"(string0: string): $RenderBlockScreenEffectEvent$OverlayType
public static "values"(): $RenderBlockScreenEffectEvent$OverlayType[]
}
}

declare module "packages/net/minecraftforge/client/model/geometry/$IGeometryLoader" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $IUnbakedGeometry } from "packages/net/minecraftforge/client/model/geometry/$IUnbakedGeometry"
import { $JsonDeserializationContext$$Type } from "packages/com/google/gson/$JsonDeserializationContext"

export interface $IGeometryLoader<T extends $IUnbakedGeometry<T>> {
"read"(jsonObject0: $JsonObject$$Type, jsonDeserializationContext1: $JsonDeserializationContext$$Type): T
}

export namespace $IGeometryLoader {
const probejs$$marker: never
}
export abstract class $IGeometryLoader$$Static<T extends $IUnbakedGeometry<T>> implements $IGeometryLoader<T> {
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$KeyPressed" {
import { $ScreenEvent$KeyInput } from "packages/net/minecraftforge/client/event/$ScreenEvent$KeyInput"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$KeyPressed extends $ScreenEvent$KeyInput {
constructor()
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)

}
}

declare module "packages/net/minecraftforge/client/event/$RenderPlayerEvent" {
import { $PoseStack } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $PlayerEvent } from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import { $MultiBufferSource } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $PlayerRenderer } from "packages/net/minecraft/client/renderer/entity/player/$PlayerRenderer"

export class $RenderPlayerEvent extends $PlayerEvent {
constructor()

public "getMultiBufferSource"(): $MultiBufferSource
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getRenderer"(): $PlayerRenderer
get "multiBufferSource"(): $MultiBufferSource
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "renderer"(): $PlayerRenderer
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$KeyReleased$Post" {
import { $ScreenEvent$KeyReleased } from "packages/net/minecraftforge/client/event/$ScreenEvent$KeyReleased"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$KeyReleased$Post extends $ScreenEvent$KeyReleased {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/sound/$PlayStreamingSourceEvent" {
import { $Channel$$Type } from "packages/com/mojang/blaze3d/audio/$Channel"
import { $SoundInstance$$Type } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import { $SoundEngine$$Type } from "packages/net/minecraft/client/sounds/$SoundEngine"
import { $SoundEvent$SoundSourceEvent } from "packages/net/minecraftforge/client/event/sound/$SoundEvent$SoundSourceEvent"

export class $PlayStreamingSourceEvent extends $SoundEvent$SoundSourceEvent {
constructor(soundEngine0: $SoundEngine$$Type, soundInstance1: $SoundInstance$$Type, channel2: $Channel$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$ToastAddEvent" {
import { $Toast, $Toast$$Type } from "packages/net/minecraft/client/gui/components/toasts/$Toast"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $ToastAddEvent extends $Event {
constructor()
constructor(toast0: $Toast$$Type)

public "getToast"(): $Toast
get "toast"(): $Toast
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$Render" {
import { $GuiGraphics } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ScreenEvent } from "packages/net/minecraftforge/client/event/$ScreenEvent"

export class $ScreenEvent$Render extends $ScreenEvent {
constructor()

public "getGuiGraphics"(): $GuiGraphics
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getPartialTick"(): float
get "guiGraphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
get "partialTick"(): float
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$Render$Pre" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent$Render } from "packages/net/minecraftforge/client/event/$ScreenEvent$Render"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ScreenEvent$Render$Pre extends $ScreenEvent$Render {
constructor()
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, float4: float)

}
}

declare module "packages/net/minecraftforge/client/event/$ViewportEvent$ComputeFov" {
import { $GameRenderer$$Type } from "packages/net/minecraft/client/renderer/$GameRenderer"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $ViewportEvent } from "packages/net/minecraftforge/client/event/$ViewportEvent"

export class $ViewportEvent$ComputeFov extends $ViewportEvent {
constructor()
constructor(gameRenderer0: $GameRenderer$$Type, camera1: $Camera$$Type, double2: double, double3: double, boolean4: boolean)

public "getFOV"(): double
public "setFOV"(double0: double): void
public "usedConfiguredFov"(): boolean
get "fOV"(): double
set "fOV"(value: double)
}
}

declare module "packages/net/minecraftforge/client/event/$RenderLevelStageEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Camera, $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $Matrix4f, $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $Frustum, $Frustum$$Type } from "packages/net/minecraft/client/renderer/culling/$Frustum"
import { $LevelRenderer, $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RenderLevelStageEvent$Stage, $RenderLevelStageEvent$Stage$$Type } from "packages/net/minecraftforge/client/event/$RenderLevelStageEvent$Stage"

export class $RenderLevelStageEvent extends $Event {
constructor()
constructor(stage0: $RenderLevelStageEvent$Stage$$Type, levelRenderer1: $LevelRenderer$$Type, poseStack2: $PoseStack$$Type, matrix4f3: $Matrix4f$$Type, int4: integer, float5: float, camera6: $Camera$$Type, frustum7: $Frustum$$Type)

public "getCamera"(): $Camera
public "getFrustum"(): $Frustum
public "getLevelRenderer"(): $LevelRenderer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getProjectionMatrix"(): $Matrix4f
public "getRenderTick"(): integer
public "getStage"(): $RenderLevelStageEvent$Stage
get "camera"(): $Camera
get "frustum"(): $Frustum
get "levelRenderer"(): $LevelRenderer
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "projectionMatrix"(): $Matrix4f
get "renderTick"(): integer
get "stage"(): $RenderLevelStageEvent$Stage
}
}

declare module "packages/net/minecraftforge/client/event/$InputEvent$Key" {
import { $InputEvent } from "packages/net/minecraftforge/client/event/$InputEvent"

export class $InputEvent$Key extends $InputEvent {
constructor()
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "getAction"(): integer
public "getKey"(): integer
public "getModifiers"(): integer
public "getScanCode"(): integer
get "action"(): integer
get "key"(): integer
get "modifiers"(): integer
get "scanCode"(): integer
}
}

declare module "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockStateProvider$ConfiguredModelList } from "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList"
import { $IGeneratedBlockState } from "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState"
import { $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $VariantBlockStateBuilder$PartialBlockstate, $VariantBlockStateBuilder$PartialBlockstate$$Type } from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder$PartialBlockstate"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $ConfiguredModel, $ConfiguredModel$$Type } from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"
import { $Map } from "packages/java/util/$Map"

export class $VariantBlockStateBuilder implements $IGeneratedBlockState {
public "addModels"(partialBlockstate0: $VariantBlockStateBuilder$PartialBlockstate$$Type, ...configuredModel1s: $ConfiguredModel$$Type[]): $VariantBlockStateBuilder
public "forAllStates"(function0: $Function$$Type<$BlockState$$Type, $ConfiguredModel[]>): $VariantBlockStateBuilder
public "forAllStatesExcept"(function0: $Function$$Type<$BlockState$$Type, $ConfiguredModel[]>, ...property1s: $Property$$Type<any>[]): $VariantBlockStateBuilder
public "getModels"(): $Map<$VariantBlockStateBuilder$PartialBlockstate, $BlockStateProvider$ConfiguredModelList>
public "getOwner"(): $Block
public "partialState"(): $VariantBlockStateBuilder$PartialBlockstate
public "setModels"(partialBlockstate0: $VariantBlockStateBuilder$PartialBlockstate$$Type, ...configuredModel1s: $ConfiguredModel$$Type[]): $VariantBlockStateBuilder
public "toJson"(): $JsonObject
get "models"(): $Map<$VariantBlockStateBuilder$PartialBlockstate, $BlockStateProvider$ConfiguredModelList>
get "owner"(): $Block
}
}

declare module "packages/net/minecraftforge/client/textures/$ITextureAtlasSpriteLoader" {
import { $ForgeTextureMetadata$$Type } from "packages/net/minecraftforge/client/textures/$ForgeTextureMetadata"
import { $AnimationMetadataSection$$Type } from "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSection"
import { $Resource$$Type } from "packages/net/minecraft/server/packs/resources/$Resource"
import { $NativeImage$$Type } from "packages/com/mojang/blaze3d/platform/$NativeImage"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FrameSize$$Type } from "packages/net/minecraft/client/resources/metadata/animation/$FrameSize"
import { $SpriteContents, $SpriteContents$$Type } from "packages/net/minecraft/client/renderer/texture/$SpriteContents"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ITextureAtlasSpriteLoader {
"loadContents"(resourceLocation0: $ResourceLocation$$Type, resource1: $Resource$$Type, frameSize2: $FrameSize$$Type, nativeImage3: $NativeImage$$Type, animationMetadataSection4: $AnimationMetadataSection$$Type, forgeTextureMetadata5: $ForgeTextureMetadata$$Type): $SpriteContents
"makeSprite"(resourceLocation0: $ResourceLocation$$Type, spriteContents1: $SpriteContents$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): $TextureAtlasSprite
}

export namespace $ITextureAtlasSpriteLoader {
const probejs$$marker: never
}
export abstract class $ITextureAtlasSpriteLoader$$Static implements $ITextureAtlasSpriteLoader {
}
}

declare module "packages/net/minecraftforge/client/extensions/$IForgeVertexConsumer" {
import { $VertexFormatElement$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import { $VertexConsumer } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $Matrix3f$$Type } from "packages/org/joml/$Matrix3f"
import { $BakedQuad$$Type } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IForgeVertexConsumer {
"applyBakedLighting"(int0: integer, byteBuffer1: $ByteBuffer$$Type): integer
"applyBakedNormals"(vector3f0: $Vector3f$$Type, byteBuffer1: $ByteBuffer$$Type, matrix3f2: $Matrix3f$$Type): void
"misc"(vertexFormatElement0: $VertexFormatElement$$Type, ...int1s: integer[]): $VertexConsumer
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, float5: float, int6: integer, int7: integer, boolean8: boolean): void
}

export namespace $IForgeVertexConsumer {
const probejs$$marker: never
}
export abstract class $IForgeVertexConsumer$$Static implements $IForgeVertexConsumer {
}
}

declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $ModelBuilder$TransformsBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder"
import { $BlockModel$GuiLight$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockModel$GuiLight"
import { $ModelBuilder$RootTransformsBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$RootTransformsBuilder"
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $ModelBuilder$ElementBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $CustomLoaderBuilder, $CustomLoaderBuilder$$Type } from "packages/net/minecraftforge/client/model/generators/$CustomLoaderBuilder"
import { $ModelFile, $ModelFile$$Type } from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ModelBuilder<T extends $ModelBuilder<T>> extends $ModelFile {
public "ao"(boolean0: boolean): T
public "customLoader"<L extends $CustomLoaderBuilder<T>>(biFunction0: $BiFunction$$Type<T, $ExistingFileHelper$$Type, L>): L
public "element"(): $ModelBuilder$ElementBuilder<>
public "element"(int0: integer): $ModelBuilder$ElementBuilder<>
public "getElementCount"(): integer
public "guiLight"(guiLight0: $BlockModel$GuiLight$$Type): T
public "parent"(modelFile0: $ModelFile$$Type): T
public "renderType"(string0: string, string1: string): T
public "renderType"(resourceLocation0: $ResourceLocation$$Type): T
public "renderType"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): T
public "renderType"(string0: string): T
public "rootTransforms"(): $ModelBuilder$RootTransformsBuilder<>
public "texture"(string0: string, string1: string): T
public "texture"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "toJson"(): $JsonObject
public "transforms"(): $ModelBuilder$TransformsBuilder<>
get "elementCount"(): integer
}
}

declare module "packages/net/minecraftforge/client/event/$ContainerScreenEvent$Render$Foreground" {
import { $ContainerScreenEvent$Render } from "packages/net/minecraftforge/client/event/$ContainerScreenEvent$Render"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $AbstractContainerScreen$$Type } from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export class $ContainerScreenEvent$Render$Foreground extends $ContainerScreenEvent$Render {
constructor(abstractContainerScreen0: $AbstractContainerScreen$$Type<any>, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/minecraftforge/client/model/generators/$ModelProvider" {
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $DataProvider } from "packages/net/minecraft/data/$DataProvider"
import { $ModelFile$ExistingModelFile } from "packages/net/minecraftforge/client/model/generators/$ModelFile$ExistingModelFile"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $ExistingFileHelper, $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $ModelBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $PackOutput$$Type } from "packages/net/minecraft/data/$PackOutput"
import { $Map } from "packages/java/util/$Map"

export class $ModelProvider<T extends $ModelBuilder<T>> implements $DataProvider {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "existingFileHelper": $ExistingFileHelper
readonly "generatedModels": $Map<$ResourceLocation, T>

constructor(packOutput0: $PackOutput$$Type, string1: string, string2: string, biFunction3: $BiFunction$$Type<$ResourceLocation$$Type, $ExistingFileHelper$$Type, T>, existingFileHelper4: $ExistingFileHelper$$Type)
constructor(packOutput0: $PackOutput$$Type, string1: string, string2: string, function3: $Function$$Type<$ResourceLocation$$Type, T>, existingFileHelper4: $ExistingFileHelper$$Type)

public "button"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "buttonInventory"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "buttonPressed"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "carpet"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "crop"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "cross"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "cube"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type, resourceLocation6: $ResourceLocation$$Type): T
public "cubeAll"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "cubeBottomTop"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): T
public "cubeColumn"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "cubeColumnHorizontal"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "cubeTop"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "doorBottomLeft"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "doorBottomLeftOpen"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "doorBottomRight"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "doorBottomRightOpen"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "doorTopLeft"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "doorTopLeftOpen"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "doorTopRight"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "doorTopRightOpen"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "fenceGate"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "fenceGateOpen"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "fenceGateWall"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "fenceGateWallOpen"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "fenceInventory"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "fencePost"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "fenceSide"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "getBuilder"(string0: string): T
public "getExistingFile"(resourceLocation0: $ResourceLocation$$Type): $ModelFile$ExistingModelFile
public "getName"(): string
public "leaves"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "mcLoc"(string0: string): $ResourceLocation
public "modLoc"(string0: string): $ResourceLocation
public "nested"(): T
public "orientable"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): T
public "orientableVertical"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "orientableWithBottom"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): T
public "paneNoSide"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "paneNoSideAlt"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "panePost"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "paneSide"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "paneSideAlt"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "pressurePlate"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "pressurePlateDown"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
public "sign"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "singleTexture"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): T
public "singleTexture"(string0: string, resourceLocation1: $ResourceLocation$$Type, string2: string, resourceLocation3: $ResourceLocation$$Type): T
public "slab"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): T
public "slabTop"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): T
public "stairs"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): T
public "stairsInner"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): T
public "stairsOuter"(string0: string, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): T
public "torch"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "torchWall"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "trapdoorBottom"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "trapdoorOpen"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "trapdoorOrientableBottom"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "trapdoorOrientableOpen"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "trapdoorOrientableTop"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "trapdoorTop"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "wallInventory"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "wallPost"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "wallSide"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "wallSideTall"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "withExistingParent"(string0: string, resourceLocation1: $ResourceLocation$$Type): T
public "withExistingParent"(string0: string, string1: string): T
get "name"(): string
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterEntitySpectatorShadersEvent" {
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $RegisterEntitySpectatorShadersEvent extends $Event implements $IModBusEvent {
constructor()
constructor(map0: $Map$$Type<$EntityType$$Type<any>, $ResourceLocation$$Type>)

public "register"(entityType0: $EntityType$$Type<any>, resourceLocation1: $ResourceLocation$$Type): void
}
}

declare module "packages/net/minecraftforge/client/event/$RenderGuiOverlayEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $NamedGuiOverlay } from "packages/net/minecraftforge/client/gui/overlay/$NamedGuiOverlay"
import { $Window } from "packages/com/mojang/blaze3d/platform/$Window"
import { $GuiGraphics } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $RenderGuiOverlayEvent extends $Event {
constructor()

public "getGuiGraphics"(): $GuiGraphics
public "getOverlay"(): $NamedGuiOverlay
public "getPartialTick"(): float
public "getWindow"(): $Window
get "guiGraphics"(): $GuiGraphics
get "overlay"(): $NamedGuiOverlay
get "partialTick"(): float
get "window"(): $Window
}
}

declare module "packages/net/minecraftforge/client/event/$InputEvent$InteractionKeyMappingTriggered" {
import { $KeyMapping, $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $InputEvent } from "packages/net/minecraftforge/client/event/$InputEvent"

export class $InputEvent$InteractionKeyMappingTriggered extends $InputEvent {
constructor()
constructor(int0: integer, keyMapping1: $KeyMapping$$Type, interactionHand2: $InteractionHand$$Type)

public "getHand"(): $InteractionHand
public "getKeyMapping"(): $KeyMapping
public "isAttack"(): boolean
public "isPickBlock"(): boolean
public "isUseItem"(): boolean
public "setSwingHand"(boolean0: boolean): void
public "shouldSwingHand"(): boolean
get "hand"(): $InteractionHand
get "keyMapping"(): $KeyMapping
get "attack"(): boolean
get "pickBlock"(): boolean
get "useItem"(): boolean
set "swingHand"(value: boolean)
}
}

declare module "packages/net/minecraftforge/client/event/$EntityRenderersEvent$RegisterLayerDefinitions" {
import { $EntityRenderersEvent } from "packages/net/minecraftforge/client/event/$EntityRenderersEvent"
import { $ModelLayerLocation$$Type } from "packages/net/minecraft/client/model/geom/$ModelLayerLocation"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $LayerDefinition } from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"

export class $EntityRenderersEvent$RegisterLayerDefinitions extends $EntityRenderersEvent {
constructor()

public "registerLayerDefinition"(modelLayerLocation0: $ModelLayerLocation$$Type, supplier1: $Supplier$$Type<$LayerDefinition>): void
}
}

declare module "packages/net/minecraftforge/client/extensions/$IForgeDimensionSpecialEffects" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $LightTexture$$Type } from "packages/net/minecraft/client/renderer/$LightTexture"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export interface $IForgeDimensionSpecialEffects {
"adjustLightmapColors"(clientLevel0: $ClientLevel$$Type, float1: float, float2: float, float3: float, float4: float, int5: integer, int6: integer, vector3f7: $Vector3f$$Type): void
"renderClouds"(clientLevel0: $ClientLevel$$Type, int1: integer, float2: float, poseStack3: $PoseStack$$Type, double4: double, double5: double, double6: double, matrix4f7: $Matrix4f$$Type): boolean
"renderSky"(clientLevel0: $ClientLevel$$Type, int1: integer, float2: float, poseStack3: $PoseStack$$Type, camera4: $Camera$$Type, matrix4f5: $Matrix4f$$Type, boolean6: boolean, runnable7: $Runnable$$Type): boolean
"renderSnowAndRain"(clientLevel0: $ClientLevel$$Type, int1: integer, float2: float, lightTexture3: $LightTexture$$Type, double4: double, double5: double, double6: double): boolean
"tickRain"(clientLevel0: $ClientLevel$$Type, int1: integer, camera2: $Camera$$Type): boolean
}

export namespace $IForgeDimensionSpecialEffects {
const probejs$$marker: never
}
export abstract class $IForgeDimensionSpecialEffects$$Static implements $IForgeDimensionSpecialEffects {
}
}

declare module "packages/net/minecraftforge/client/gui/overlay/$IGuiOverlay" {
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ForgeGui$$Type } from "packages/net/minecraftforge/client/gui/overlay/$ForgeGui"

export interface $IGuiOverlay {
"render"(forgeGui0: $ForgeGui$$Type, guiGraphics1: $GuiGraphics$$Type, float2: float, int3: integer, int4: integer): void
}

export namespace $IGuiOverlay {
const probejs$$marker: never
}
export abstract class $IGuiOverlay$$Static implements $IGuiOverlay {
}
}

declare module "packages/net/minecraftforge/client/model/data/$ModelData" {
import { $Set } from "packages/java/util/$Set"
import { $ModelData$Builder } from "packages/net/minecraftforge/client/model/data/$ModelData$Builder"
import { $ModelProperty$$Type } from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $ModelData {
static readonly "EMPTY": $ModelData

public static "builder"(): $ModelData$Builder
public "derive"(): $ModelData$Builder
public "get"<T>(modelProperty0: $ModelProperty$$Type<T>): T
public "getProperties"(): $Set<any>
public "has"(modelProperty0: $ModelProperty$$Type<any>): boolean
get "properties"(): $Set<any>
}
}

declare module "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent$Clone" {
import { $LocalPlayer, $LocalPlayer$$Type } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $ClientPlayerNetworkEvent } from "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent"
import { $MultiPlayerGameMode$$Type } from "packages/net/minecraft/client/multiplayer/$MultiPlayerGameMode"

export class $ClientPlayerNetworkEvent$Clone extends $ClientPlayerNetworkEvent {
constructor()
constructor(multiPlayerGameMode0: $MultiPlayerGameMode$$Type, localPlayer1: $LocalPlayer$$Type, localPlayer2: $LocalPlayer$$Type, connection3: $Connection$$Type)

public "getNewPlayer"(): $LocalPlayer
public "getOldPlayer"(): $LocalPlayer
get "newPlayer"(): $LocalPlayer
get "oldPlayer"(): $LocalPlayer
}
}

declare module "packages/net/minecraftforge/client/extensions/$IForgeGuiGraphics" {
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeGuiGraphics {
"blitInscribed"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, boolean8: boolean): void
"blitInscribed"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
"blitNineSlicedSized"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer, int13: integer, int14: integer): void
"blitNineSlicedSized"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer): void
"blitNineSlicedSized"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer): void
"blitWithBorder"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer): void
"blitWithBorder"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer): void
"getColorFromFormattingCharacter"(char0: character, boolean1: boolean): integer
}

export namespace $IForgeGuiGraphics {
const DEFAULT_BACKGROUND_COLOR: integer
const DEFAULT_BORDER_COLOR_END: integer
const DEFAULT_BORDER_COLOR_START: integer
const INVALID: string
const RESET_CHAR: string
const TEXT_COLOR_CODES: integer[]
const UNDO_CHAR: string
const VALID: string
}
export abstract class $IForgeGuiGraphics$$Static implements $IForgeGuiGraphics {
static readonly "DEFAULT_BACKGROUND_COLOR": integer
static readonly "DEFAULT_BORDER_COLOR_END": integer
static readonly "DEFAULT_BORDER_COLOR_START": integer
static readonly "INVALID": string
static readonly "RESET_CHAR": string
static readonly "TEXT_COLOR_CODES": integer[]
static readonly "UNDO_CHAR": string
static readonly "VALID": string

}
}

declare module "packages/net/minecraftforge/client/event/$ScreenshotEvent" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $File, $File$$Type } from "packages/java/io/$File"
import { $NativeImage, $NativeImage$$Type } from "packages/com/mojang/blaze3d/platform/$NativeImage"

export class $ScreenshotEvent extends $Event {
static readonly "DEFAULT_CANCEL_REASON": $Component

constructor(nativeImage0: $NativeImage$$Type, file1: $File$$Type)
constructor()

public "getCancelMessage"(): $Component
public "getImage"(): $NativeImage
public "getResultMessage"(): $Component
public "getScreenshotFile"(): $File
public "setResultMessage"(component0: $Component$$Type): void
public "setScreenshotFile"(file0: $File$$Type): void
get "cancelMessage"(): $Component
get "image"(): $NativeImage
get "resultMessage"(): $Component
get "screenshotFile"(): $File
set "resultMessage"(value: $Component$$Type)
set "screenshotFile"(value: $File$$Type)
}
}

declare module "packages/net/minecraftforge/client/event/$CustomizeGuiOverlayEvent$Chat" {
import { $CustomizeGuiOverlayEvent } from "packages/net/minecraftforge/client/event/$CustomizeGuiOverlayEvent"
import { $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $CustomizeGuiOverlayEvent$Chat extends $CustomizeGuiOverlayEvent {
constructor()
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, float2: float, int3: integer, int4: integer)

public "getPosX"(): integer
public "getPosY"(): integer
public "setPosX"(int0: integer): void
public "setPosY"(int0: integer): void
get "posX"(): integer
get "posY"(): integer
set "posX"(value: integer)
set "posY"(value: integer)
}
}

declare module "packages/net/minecraftforge/client/event/sound/$SoundEngineLoadEvent" {
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $SoundEngine$$Type } from "packages/net/minecraft/client/sounds/$SoundEngine"
import { $SoundEvent } from "packages/net/minecraftforge/client/event/sound/$SoundEvent"

export class $SoundEngineLoadEvent extends $SoundEvent implements $IModBusEvent {
constructor(soundEngine0: $SoundEngine$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList" {
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $ConfiguredModel$$Type } from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $BlockStateProvider$ConfiguredModelList {
constructor(...configuredModel0s: $ConfiguredModel$$Type[])
constructor(configuredModel0: $ConfiguredModel$$Type)

public "append"(...configuredModel0s: $ConfiguredModel$$Type[]): $BlockStateProvider$ConfiguredModelList
public "toJSON"(): $JsonElement
}
}

declare module "packages/net/minecraftforge/client/event/$RenderGuiEvent$Pre" {
import { $RenderGuiEvent } from "packages/net/minecraftforge/client/event/$RenderGuiEvent"
import { $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $RenderGuiEvent$Pre extends $RenderGuiEvent {
constructor()
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, float2: float)

}
}

declare module "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ParticleEngine$$Type } from "packages/net/minecraft/client/particle/$ParticleEngine"
import { $Vector3d, $Vector3d$$Type } from "packages/org/joml/$Vector3d"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $IClientBlockExtensions {
"addDestroyEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, particleEngine3: $ParticleEngine$$Type): boolean
"addHitEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, hitResult2: $HitResult$$Type, particleEngine3: $ParticleEngine$$Type): boolean
"areBreakingParticlesTinted"(blockState0: $BlockState$$Type, clientLevel1: $ClientLevel$$Type, blockPos2: $BlockPos$$Type): boolean
"getFogColor"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type, vector3d4: $Vector3d$$Type, float5: float): $Vector3d
}

export namespace $IClientBlockExtensions {
const DEFAULT: $IClientBlockExtensions
function of(blockState0: $BlockState$$Type): $IClientBlockExtensions
function of(block0: $Block$$Type): $IClientBlockExtensions
}
export abstract class $IClientBlockExtensions$$Static implements $IClientBlockExtensions {
static readonly "DEFAULT": $IClientBlockExtensions

static "of"(blockState0: $BlockState$$Type): $IClientBlockExtensions
static "of"(block0: $Block$$Type): $IClientBlockExtensions
}
}

declare module "packages/net/minecraftforge/client/event/sound/$PlaySoundEvent" {
import { $SoundInstance, $SoundInstance$$Type } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import { $SoundEngine$$Type } from "packages/net/minecraft/client/sounds/$SoundEngine"
import { $SoundEvent } from "packages/net/minecraftforge/client/event/sound/$SoundEvent"

export class $PlaySoundEvent extends $SoundEvent {
constructor(soundEngine0: $SoundEngine$$Type, soundInstance1: $SoundInstance$$Type)
constructor()

public "getName"(): string
public "getOriginalSound"(): $SoundInstance
public "getSound"(): $SoundInstance
public "setSound"(soundInstance0: $SoundInstance$$Type): void
get "name"(): string
get "originalSound"(): $SoundInstance
get "sound"(): $SoundInstance
set "sound"(value: $SoundInstance$$Type)
}
}

declare module "packages/net/minecraftforge/client/event/$RenderTooltipEvent$Pre" {
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $RenderTooltipEvent } from "packages/net/minecraftforge/client/event/$RenderTooltipEvent"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ClientTooltipComponent$$Type } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipComponent"
import { $ClientTooltipPositioner, $ClientTooltipPositioner$$Type } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipPositioner"

export class $RenderTooltipEvent$Pre extends $RenderTooltipEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer, font6: $Font$$Type, list7: $List$$Type<$ClientTooltipComponent$$Type>, clientTooltipPositioner8: $ClientTooltipPositioner$$Type)

public "getScreenHeight"(): integer
public "getScreenWidth"(): integer
public "getTooltipPositioner"(): $ClientTooltipPositioner
public "setFont"(font0: $Font$$Type): void
public "setX"(int0: integer): void
public "setY"(int0: integer): void
get "screenHeight"(): integer
get "screenWidth"(): integer
get "tooltipPositioner"(): $ClientTooltipPositioner
set "font"(value: $Font$$Type)
set "x"(value: integer)
set "y"(value: integer)
}
}

declare module "packages/net/minecraftforge/client/event/sound/$PlaySoundSourceEvent" {
import { $Channel$$Type } from "packages/com/mojang/blaze3d/audio/$Channel"
import { $SoundInstance$$Type } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import { $SoundEngine$$Type } from "packages/net/minecraft/client/sounds/$SoundEngine"
import { $SoundEvent$SoundSourceEvent } from "packages/net/minecraftforge/client/event/sound/$SoundEvent$SoundSourceEvent"

export class $PlaySoundSourceEvent extends $SoundEvent$SoundSourceEvent {
constructor(soundEngine0: $SoundEngine$$Type, soundInstance1: $SoundInstance$$Type, channel2: $Channel$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$RenderPlayerEvent$Pre" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $PlayerRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/player/$PlayerRenderer"
import { $RenderPlayerEvent } from "packages/net/minecraftforge/client/event/$RenderPlayerEvent"

export class $RenderPlayerEvent$Pre extends $RenderPlayerEvent {
constructor()
constructor(player0: $Player$$Type, playerRenderer1: $PlayerRenderer$$Type, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer)

}
}

declare module "packages/net/minecraftforge/client/event/$RegisterKeyMappingsEvent" {
import { $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $Options$$Type } from "packages/net/minecraft/client/$Options"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"

export class $RegisterKeyMappingsEvent extends $Event implements $IModBusEvent {
constructor()
constructor(options0: $Options$$Type)

public "register"(keyMapping0: $KeyMapping$$Type): void
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseDragged$Pre" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent$MouseDragged } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseDragged"

export class $ScreenEvent$MouseDragged$Pre extends $ScreenEvent$MouseDragged {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer, double4: double, double5: double)

}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseInput" {
import { $ScreenEvent } from "packages/net/minecraftforge/client/event/$ScreenEvent"

export class $ScreenEvent$MouseInput extends $ScreenEvent {
constructor()

public "getMouseX"(): double
public "getMouseY"(): double
get "mouseX"(): double
get "mouseY"(): double
}
}

declare module "packages/net/minecraftforge/client/extensions/$IForgeMinecraft" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $Locale } from "packages/java/util/$Locale"

export interface $IForgeMinecraft {
"getLocale"(): $Locale
"popGuiLayer"(): void
"pushGuiLayer"(screen0: $Screen$$Type): void
get "locale"(): $Locale
}

export namespace $IForgeMinecraft {
const probejs$$marker: never
}
export abstract class $IForgeMinecraft$$Static implements $IForgeMinecraft {
}
}

declare module "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext" {
import { $Material, $Material$$Type } from "packages/net/minecraft/client/resources/model/$Material"
import { $BlockModel, $BlockModel$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import { $BlockGeometryBakingContext$VisibilityData } from "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext$VisibilityData"
import { $ModelBaker$$Type } from "packages/net/minecraft/client/resources/model/$ModelBaker"
import { $ModelState$$Type } from "packages/net/minecraft/client/resources/model/$ModelState"
import { $IGeometryBakingContext } from "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext"
import { $ItemTransforms } from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import { $IUnbakedGeometry, $IUnbakedGeometry$$Type } from "packages/net/minecraftforge/client/model/geometry/$IUnbakedGeometry"
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RenderTypeGroup } from "packages/net/minecraftforge/client/$RenderTypeGroup"
import { $ItemOverrides$$Type } from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Transformation, $Transformation$$Type } from "packages/com/mojang/math/$Transformation"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BlockGeometryBakingContext implements $IGeometryBakingContext {
readonly "owner": $BlockModel
readonly "visibilityData": $BlockGeometryBakingContext$VisibilityData

constructor(blockModel0: $BlockModel$$Type)

public "bake"(modelBaker0: $ModelBaker$$Type, function1: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, modelState2: $ModelState$$Type, itemOverrides3: $ItemOverrides$$Type, resourceLocation4: $ResourceLocation$$Type): $BakedModel
public "copyFrom"(blockGeometryBakingContext0: $BlockGeometryBakingContext$$Type): void
public "getCustomGeometry"(): $IUnbakedGeometry<any>
public "getMaterial"(string0: string): $Material
public "getModelName"(): string
public "getRenderType"(resourceLocation0: $ResourceLocation$$Type): $RenderTypeGroup
public "getRenderTypeFastHint"(): $ResourceLocation
public "getRenderTypeHint"(): $ResourceLocation
public "getRootTransform"(): $Transformation
public "getTransforms"(): $ItemTransforms
public "hasCustomGeometry"(): boolean
public "hasMaterial"(string0: string): boolean
public "isComponentVisible"(string0: string, boolean1: boolean): boolean
public "isGui3d"(): boolean
public "setCustomGeometry"(iUnbakedGeometry0: $IUnbakedGeometry$$Type<any>): void
public "setGui3d"(boolean0: boolean): void
public "setRenderTypeFastHint"(resourceLocation0: $ResourceLocation$$Type): void
public "setRenderTypeHint"(resourceLocation0: $ResourceLocation$$Type): void
public "setRootTransform"(transformation0: $Transformation$$Type): void
public "useAmbientOcclusion"(): boolean
public "useBlockLight"(): boolean
get "customGeometry"(): $IUnbakedGeometry<any>
get "modelName"(): string
get "renderTypeFastHint"(): $ResourceLocation
get "renderTypeHint"(): $ResourceLocation
get "rootTransform"(): $Transformation
get "transforms"(): $ItemTransforms
get "gui3d"(): boolean
set "customGeometry"(value: $IUnbakedGeometry$$Type<any>)
set "gui3d"(value: boolean)
set "renderTypeFastHint"(value: $ResourceLocation$$Type)
set "renderTypeHint"(value: $ResourceLocation$$Type)
set "rootTransform"(value: $Transformation$$Type)
}
}

declare module "packages/net/minecraftforge/client/textures/$ForgeTextureMetadata" {
import { $ITextureAtlasSpriteLoader, $ITextureAtlasSpriteLoader$$Type } from "packages/net/minecraftforge/client/textures/$ITextureAtlasSpriteLoader"
import { $MetadataSectionSerializer } from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import { $Resource$$Type } from "packages/net/minecraft/server/packs/resources/$Resource"

export class $ForgeTextureMetadata {
static readonly "EMPTY": $ForgeTextureMetadata
static readonly "SERIALIZER": $MetadataSectionSerializer<$ForgeTextureMetadata>

constructor(iTextureAtlasSpriteLoader0: $ITextureAtlasSpriteLoader$$Type)

public static "forResource"(resource0: $Resource$$Type): $ForgeTextureMetadata
public "getLoader"(): $ITextureAtlasSpriteLoader
get "loader"(): $ITextureAtlasSpriteLoader
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterGuiOverlaysEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $List$$Type } from "packages/java/util/$List"
import { $IGuiOverlay$$Type } from "packages/net/minecraftforge/client/gui/overlay/$IGuiOverlay"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $RegisterGuiOverlaysEvent extends $Event implements $IModBusEvent {
constructor()
constructor(map0: $Map$$Type<$ResourceLocation$$Type, $IGuiOverlay$$Type>, list1: $List$$Type<$ResourceLocation$$Type>)

public "registerAbove"(resourceLocation0: $ResourceLocation$$Type, string1: string, iGuiOverlay2: $IGuiOverlay$$Type): void
public "registerAboveAll"(string0: string, iGuiOverlay1: $IGuiOverlay$$Type): void
public "registerBelow"(resourceLocation0: $ResourceLocation$$Type, string1: string, iGuiOverlay2: $IGuiOverlay$$Type): void
public "registerBelowAll"(string0: string, iGuiOverlay1: $IGuiOverlay$$Type): void
}
}

declare module "packages/net/minecraftforge/client/extensions/$IForgeBlockAndTintGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IForgeBlockAndTintGetter {
"getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
}

export namespace $IForgeBlockAndTintGetter {
const probejs$$marker: never
}
export abstract class $IForgeBlockAndTintGetter$$Static implements $IForgeBlockAndTintGetter {
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterTextureAtlasSpriteLoadersEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ITextureAtlasSpriteLoader$$Type } from "packages/net/minecraftforge/client/textures/$ITextureAtlasSpriteLoader"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $RegisterTextureAtlasSpriteLoadersEvent extends $Event implements $IModBusEvent {
constructor()
constructor(map0: $Map$$Type<$ResourceLocation$$Type, $ITextureAtlasSpriteLoader$$Type>)

public "register"(string0: string, iTextureAtlasSpriteLoader1: $ITextureAtlasSpriteLoader$$Type): void
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseButtonPressed" {
import { $ScreenEvent$MouseInput } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseInput"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$MouseButtonPressed extends $ScreenEvent$MouseInput {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)

public "getButton"(): integer
get "button"(): integer
}
}

declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ModelBuilder$ElementBuilder$FaceBuilder, $ModelBuilder$ElementBuilder$FaceBuilder$$Type } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$FaceBuilder"
import { $ModelBuilder$ElementBuilder$RotationBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$RotationBuilder"
import { $ModelBuilder, $ModelBuilder$$Type } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$ElementBuilder {
constructor(modelBuilder0: $ModelBuilder$$Type<any>)

public "allFaces"(biConsumer0: $BiConsumer$$Type<$Direction$$Type, $ModelBuilder$ElementBuilder$FaceBuilder$$Type<>>): $ModelBuilder$ElementBuilder<>
public "ao"(boolean0: boolean): $ModelBuilder$ElementBuilder<>
public "calculateNormals"(boolean0: boolean): $ModelBuilder$ElementBuilder<>
public "color"(int0: integer): $ModelBuilder$ElementBuilder<>
public "cube"(string0: string): $ModelBuilder$ElementBuilder<>
public "emissivity"(int0: integer, int1: integer): $ModelBuilder$ElementBuilder<>
public "end"(): T
public "face"(direction0: $Direction$$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "faces"(biConsumer0: $BiConsumer$$Type<$Direction$$Type, $ModelBuilder$ElementBuilder$FaceBuilder$$Type<>>): $ModelBuilder$ElementBuilder<>
public "from"(float0: float, float1: float, float2: float): $ModelBuilder$ElementBuilder<>
public "rotation"(): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "shade"(boolean0: boolean): $ModelBuilder$ElementBuilder<>
public "texture"(string0: string): $ModelBuilder$ElementBuilder<>
public "textureAll"(string0: string): $ModelBuilder$ElementBuilder<>
public "to"(float0: float, float1: float, float2: float): $ModelBuilder$ElementBuilder<>
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$KeyPressed$Pre" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent$KeyPressed } from "packages/net/minecraftforge/client/event/$ScreenEvent$KeyPressed"

export class $ScreenEvent$KeyPressed$Pre extends $ScreenEvent$KeyPressed {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$RenderArmEvent" {
import { $AbstractClientPlayer, $AbstractClientPlayer$$Type } from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import { $HumanoidArm, $HumanoidArm$$Type } from "packages/net/minecraft/world/entity/$HumanoidArm"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $RenderArmEvent extends $Event {
constructor()
constructor(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, abstractClientPlayer3: $AbstractClientPlayer$$Type, humanoidArm4: $HumanoidArm$$Type)

public "getArm"(): $HumanoidArm
public "getMultiBufferSource"(): $MultiBufferSource
public "getPackedLight"(): integer
public "getPlayer"(): $AbstractClientPlayer
public "getPoseStack"(): $PoseStack
get "arm"(): $HumanoidArm
get "multiBufferSource"(): $MultiBufferSource
get "packedLight"(): integer
get "player"(): $AbstractClientPlayer
get "poseStack"(): $PoseStack
}
}

declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $MultiPartBlockStateBuilder$PartBuilder } from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder"
import { $IGeneratedBlockState } from "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState"
import { $ConfiguredModel$Builder } from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export class $MultiPartBlockStateBuilder implements $IGeneratedBlockState {
constructor(block0: $Block$$Type)

public "part"(): $ConfiguredModel$Builder<$MultiPartBlockStateBuilder$PartBuilder>
public "toJson"(): $JsonObject
}
}

declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$FaceBuilder" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ModelBuilder$FaceRotation$$Type } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$FaceRotation"
import { $ModelBuilder$ElementBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"

export class $ModelBuilder$ElementBuilder$FaceBuilder {
public "ao"(boolean0: boolean): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "calculateNormals"(boolean0: boolean): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "color"(int0: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "cullface"(direction0: $Direction$$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "emissivity"(int0: integer, int1: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "end"(): $ModelBuilder$ElementBuilder<>
public "rotation"(faceRotation0: $ModelBuilder$FaceRotation$$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "texture"(string0: string): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "tintindex"(int0: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "uvs"(float0: float, float1: float, float2: float, float3: float): $ModelBuilder$ElementBuilder$FaceBuilder<>
}
}

declare module "packages/net/minecraftforge/client/$IArmPoseTransformer" {
import { $HumanoidArm$$Type } from "packages/net/minecraft/world/entity/$HumanoidArm"
import { $HumanoidModel$$Type } from "packages/net/minecraft/client/model/$HumanoidModel"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IArmPoseTransformer {
"applyTransform"(humanoidModel0: $HumanoidModel$$Type<any>, livingEntity1: $LivingEntity$$Type, humanoidArm2: $HumanoidArm$$Type): void
}

export namespace $IArmPoseTransformer {
const probejs$$marker: never
}
export abstract class $IArmPoseTransformer$$Static implements $IArmPoseTransformer {
}
}

declare module "packages/net/minecraftforge/client/event/$RenderTooltipEvent$GatherComponents" {
import { $TooltipComponent, $TooltipComponent$$Type } from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import { $FormattedText, $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Either, $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $RenderTooltipEvent$GatherComponents extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type, int1: integer, int2: integer, list3: $List$$Type<$Either$$Type<$FormattedText$$Type, $TooltipComponent$$Type>>, int4: integer)

public "getItemStack"(): $ItemStack
public "getMaxWidth"(): integer
public "getScreenHeight"(): integer
public "getScreenWidth"(): integer
public "getTooltipElements"(): $List<$Either<$FormattedText, $TooltipComponent>>
public "setMaxWidth"(int0: integer): void
get "itemStack"(): $ItemStack
get "maxWidth"(): integer
get "screenHeight"(): integer
get "screenWidth"(): integer
get "tooltipElements"(): $List<$Either<$FormattedText, $TooltipComponent>>
set "maxWidth"(value: integer)
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$Init$Pre" {
import { $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List$$Type } from "packages/java/util/$List"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent$Init } from "packages/net/minecraftforge/client/event/$ScreenEvent$Init"

export class $ScreenEvent$Init$Pre extends $ScreenEvent$Init {
constructor()
constructor(screen0: $Screen$$Type, list1: $List$$Type<$GuiEventListener$$Type>, consumer2: $Consumer$$Type<$GuiEventListener$$Type>, consumer3: $Consumer$$Type<$GuiEventListener$$Type>)

}
}

declare module "packages/net/minecraftforge/client/$ExtendedServerListData" {
import { $Record } from "packages/java/lang/$Record"

export class $ExtendedServerListData extends $Record {
constructor(string0: string, boolean1: boolean, int2: integer, string3: string)
constructor(type: string, isCompatible: boolean, numberOfMods: integer, extraReason: string, truncated: boolean)

public "extraReason"(): string
public "isCompatible"(): boolean
public "numberOfMods"(): integer
public "truncated"(): boolean
public "type"(): string
get "compatible"(): boolean
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseScrolled" {
import { $ScreenEvent$MouseInput } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseInput"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$MouseScrolled extends $ScreenEvent$MouseInput {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, double3: double)

public "getScrollDelta"(): double
get "scrollDelta"(): double
}
}

declare module "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext" {
import { $Material } from "packages/net/minecraft/client/resources/model/$Material"
import { $ItemTransforms } from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import { $Transformation } from "packages/com/mojang/math/$Transformation"
import { $RenderTypeGroup } from "packages/net/minecraftforge/client/$RenderTypeGroup"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IGeometryBakingContext {
"getMaterial"(string0: string): $Material
"getModelName"(): string
"getRenderType"(resourceLocation0: $ResourceLocation$$Type): $RenderTypeGroup
"getRenderTypeFastHint"(): $ResourceLocation
"getRenderTypeHint"(): $ResourceLocation
"getRootTransform"(): $Transformation
"getTransforms"(): $ItemTransforms
"hasMaterial"(string0: string): boolean
"isComponentVisible"(string0: string, boolean1: boolean): boolean
"isGui3d"(): boolean
"useAmbientOcclusion"(): boolean
"useBlockLight"(): boolean
get "modelName"(): string
get "renderTypeFastHint"(): $ResourceLocation
get "renderTypeHint"(): $ResourceLocation
get "rootTransform"(): $Transformation
get "transforms"(): $ItemTransforms
get "gui3d"(): boolean
}

export namespace $IGeometryBakingContext {
const probejs$$marker: never
}
export abstract class $IGeometryBakingContext$$Static implements $IGeometryBakingContext {
}
}

declare module "packages/net/minecraftforge/client/extensions/$IForgePoseStack" {
import { $Transformation$$Type } from "packages/com/mojang/math/$Transformation"

export interface $IForgePoseStack {
"pushTransformation"(transformation0: $Transformation$$Type): void
}

export namespace $IForgePoseStack {
const probejs$$marker: never
}
export abstract class $IForgePoseStack$$Static implements $IForgePoseStack {
}
}

declare module "packages/net/minecraftforge/client/model/generators/$BlockStateProvider" {
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $DataProvider } from "packages/net/minecraft/data/$DataProvider"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $TrapDoorBlock$$Type } from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import { $PressurePlateBlock$$Type } from "packages/net/minecraft/world/level/block/$PressurePlateBlock"
import { $ItemModelProvider } from "packages/net/minecraftforge/client/model/generators/$ItemModelProvider"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $WallSide } from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $WallBlock$$Type } from "packages/net/minecraft/world/level/block/$WallBlock"
import { $CrossCollisionBlock$$Type } from "packages/net/minecraft/world/level/block/$CrossCollisionBlock"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $PackOutput$$Type } from "packages/net/minecraft/data/$PackOutput"
import { $ImmutableMap } from "packages/com/google/common/collect/$ImmutableMap"
import { $SlabBlock$$Type } from "packages/net/minecraft/world/level/block/$SlabBlock"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $FenceGateBlock$$Type } from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import { $VariantBlockStateBuilder } from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder"
import { $IronBarsBlock$$Type } from "packages/net/minecraft/world/level/block/$IronBarsBlock"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $ModelFile, $ModelFile$$Type } from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import { $ConfiguredModel, $ConfiguredModel$$Type } from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"
import { $MultiPartBlockStateBuilder, $MultiPartBlockStateBuilder$$Type } from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder"
import { $RotatedPillarBlock$$Type } from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import { $FenceBlock$$Type } from "packages/net/minecraft/world/level/block/$FenceBlock"
import { $ButtonBlock$$Type } from "packages/net/minecraft/world/level/block/$ButtonBlock"
import { $StandingSignBlock$$Type } from "packages/net/minecraft/world/level/block/$StandingSignBlock"
import { $DoorBlock$$Type } from "packages/net/minecraft/world/level/block/$DoorBlock"
import { $StairBlock$$Type } from "packages/net/minecraft/world/level/block/$StairBlock"
import { $Property } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $WallSignBlock$$Type } from "packages/net/minecraft/world/level/block/$WallSignBlock"
import { $BlockModelProvider } from "packages/net/minecraftforge/client/model/generators/$BlockModelProvider"

export class $BlockStateProvider implements $DataProvider {
static readonly "WALL_PROPS": $ImmutableMap<$Direction, $Property<$WallSide>>

constructor(packOutput0: $PackOutput$$Type, string1: string, existingFileHelper2: $ExistingFileHelper$$Type)

public "axisBlock"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "axisBlock"(rotatedPillarBlock0: $RotatedPillarBlock$$Type): void
public "axisBlock"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "axisBlock"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, modelFile1: $ModelFile$$Type, modelFile2: $ModelFile$$Type): void
public "axisBlockWithRenderType"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "axisBlockWithRenderType"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "axisBlockWithRenderType"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "axisBlockWithRenderType"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, string3: string): void
public "axisBlockWithRenderType"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): void
public "axisBlockWithRenderType"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, string1: string): void
public "axisBlockWithRenderTypeAndFast"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string, string3: string): void
public "axisBlockWithRenderTypeAndFast"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, string3: string, string4: string): void
public "axisBlockWithRenderTypeAndFast"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "axisBlockWithRenderTypeAndFast"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "axisBlockWithRenderTypeAndFast"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "axisBlockWithRenderTypeAndFast"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, string1: string, string2: string): void
public "blockTexture"(block0: $Block$$Type): $ResourceLocation
public "buttonBlock"(buttonBlock0: $ButtonBlock$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "buttonBlock"(buttonBlock0: $ButtonBlock$$Type, modelFile1: $ModelFile$$Type, modelFile2: $ModelFile$$Type): void
public "cubeAll"(block0: $Block$$Type): $ModelFile
public "directionalBlock"(block0: $Block$$Type, modelFile1: $ModelFile$$Type, int2: integer): void
public "directionalBlock"(block0: $Block$$Type, function1: $Function$$Type<$BlockState$$Type, $ModelFile>, int2: integer): void
public "directionalBlock"(block0: $Block$$Type, function1: $Function$$Type<$BlockState$$Type, $ModelFile>): void
public "directionalBlock"(block0: $Block$$Type, modelFile1: $ModelFile$$Type): void
public "doorBlock"(doorBlock0: $DoorBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "doorBlock"(doorBlock0: $DoorBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "doorBlock"(doorBlock0: $DoorBlock$$Type, modelFile1: $ModelFile$$Type, modelFile2: $ModelFile$$Type, modelFile3: $ModelFile$$Type, modelFile4: $ModelFile$$Type, modelFile5: $ModelFile$$Type, modelFile6: $ModelFile$$Type, modelFile7: $ModelFile$$Type, modelFile8: $ModelFile$$Type): void
public "doorBlockWithRenderType"(doorBlock0: $DoorBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, string4: string): void
public "doorBlockWithRenderType"(doorBlock0: $DoorBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, string3: string): void
public "doorBlockWithRenderType"(doorBlock0: $DoorBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "doorBlockWithRenderType"(doorBlock0: $DoorBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "doorBlockWithRenderTypeAndFast"(doorBlock0: $DoorBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type): void
public "doorBlockWithRenderTypeAndFast"(doorBlock0: $DoorBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "doorBlockWithRenderTypeAndFast"(doorBlock0: $DoorBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, string4: string, string5: string): void
public "doorBlockWithRenderTypeAndFast"(doorBlock0: $DoorBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, string3: string, string4: string): void
public "fenceBlock"(fenceBlock0: $FenceBlock$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "fenceBlock"(fenceBlock0: $FenceBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type): void
public "fenceBlockWithRenderType"(fenceBlock0: $FenceBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, string3: string): void
public "fenceBlockWithRenderType"(fenceBlock0: $FenceBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "fenceBlockWithRenderType"(fenceBlock0: $FenceBlock$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): void
public "fenceBlockWithRenderType"(fenceBlock0: $FenceBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "fenceBlockWithRenderTypeAndFast"(fenceBlock0: $FenceBlock$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string, string3: string): void
public "fenceBlockWithRenderTypeAndFast"(fenceBlock0: $FenceBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, string3: string, string4: string): void
public "fenceBlockWithRenderTypeAndFast"(fenceBlock0: $FenceBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "fenceBlockWithRenderTypeAndFast"(fenceBlock0: $FenceBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "fenceGateBlock"(fenceGateBlock0: $FenceGateBlock$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "fenceGateBlock"(fenceGateBlock0: $FenceGateBlock$$Type, modelFile1: $ModelFile$$Type, modelFile2: $ModelFile$$Type, modelFile3: $ModelFile$$Type, modelFile4: $ModelFile$$Type): void
public "fenceGateBlock"(fenceGateBlock0: $FenceGateBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type): void
public "fenceGateBlockWithRenderType"(fenceGateBlock0: $FenceGateBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, string3: string): void
public "fenceGateBlockWithRenderType"(fenceGateBlock0: $FenceGateBlock$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): void
public "fenceGateBlockWithRenderType"(fenceGateBlock0: $FenceGateBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "fenceGateBlockWithRenderType"(fenceGateBlock0: $FenceGateBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "fenceGateBlockWithRenderTypeAndFast"(fenceGateBlock0: $FenceGateBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "fenceGateBlockWithRenderTypeAndFast"(fenceGateBlock0: $FenceGateBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, string3: string, string4: string): void
public "fenceGateBlockWithRenderTypeAndFast"(fenceGateBlock0: $FenceGateBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "fenceGateBlockWithRenderTypeAndFast"(fenceGateBlock0: $FenceGateBlock$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string, string3: string): void
public "fourWayBlock"(crossCollisionBlock0: $CrossCollisionBlock$$Type, modelFile1: $ModelFile$$Type, modelFile2: $ModelFile$$Type): void
public "fourWayMultipart"(multiPartBlockStateBuilder0: $MultiPartBlockStateBuilder$$Type, modelFile1: $ModelFile$$Type): void
public "getMultipartBuilder"(block0: $Block$$Type): $MultiPartBlockStateBuilder
public "getName"(): string
public "getVariantBuilder"(block0: $Block$$Type): $VariantBlockStateBuilder
public "horizontalBlock"(block0: $Block$$Type, modelFile1: $ModelFile$$Type, int2: integer): void
public "horizontalBlock"(block0: $Block$$Type, modelFile1: $ModelFile$$Type): void
public "horizontalBlock"(block0: $Block$$Type, function1: $Function$$Type<$BlockState$$Type, $ModelFile>): void
public "horizontalBlock"(block0: $Block$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "horizontalBlock"(block0: $Block$$Type, function1: $Function$$Type<$BlockState$$Type, $ModelFile>, int2: integer): void
public "horizontalFaceBlock"(block0: $Block$$Type, modelFile1: $ModelFile$$Type): void
public "horizontalFaceBlock"(block0: $Block$$Type, function1: $Function$$Type<$BlockState$$Type, $ModelFile>): void
public "horizontalFaceBlock"(block0: $Block$$Type, modelFile1: $ModelFile$$Type, int2: integer): void
public "horizontalFaceBlock"(block0: $Block$$Type, function1: $Function$$Type<$BlockState$$Type, $ModelFile>, int2: integer): void
public "itemModels"(): $ItemModelProvider
public "logBlock"(rotatedPillarBlock0: $RotatedPillarBlock$$Type): void
public "logBlockWithRenderType"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, string1: string): void
public "logBlockWithRenderType"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "logBlockWithRenderType"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "logBlockWithRenderTypeAndFast"(rotatedPillarBlock0: $RotatedPillarBlock$$Type, string1: string, string2: string): void
public "mcLoc"(string0: string): $ResourceLocation
public "modLoc"(string0: string): $ResourceLocation
public "models"(): $BlockModelProvider
public "paneBlock"(ironBarsBlock0: $IronBarsBlock$$Type, modelFile1: $ModelFile$$Type, modelFile2: $ModelFile$$Type, modelFile3: $ModelFile$$Type, modelFile4: $ModelFile$$Type, modelFile5: $ModelFile$$Type): void
public "paneBlock"(ironBarsBlock0: $IronBarsBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "paneBlock"(ironBarsBlock0: $IronBarsBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "paneBlockWithRenderType"(ironBarsBlock0: $IronBarsBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, string4: string): void
public "paneBlockWithRenderType"(ironBarsBlock0: $IronBarsBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, string3: string): void
public "paneBlockWithRenderType"(ironBarsBlock0: $IronBarsBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "paneBlockWithRenderType"(ironBarsBlock0: $IronBarsBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "paneBlockWithRenderTypeAndFast"(ironBarsBlock0: $IronBarsBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "paneBlockWithRenderTypeAndFast"(ironBarsBlock0: $IronBarsBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, string4: string, string5: string): void
public "paneBlockWithRenderTypeAndFast"(ironBarsBlock0: $IronBarsBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, string3: string, string4: string): void
public "paneBlockWithRenderTypeAndFast"(ironBarsBlock0: $IronBarsBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type): void
public "pressurePlateBlock"(pressurePlateBlock0: $PressurePlateBlock$$Type, modelFile1: $ModelFile$$Type, modelFile2: $ModelFile$$Type): void
public "pressurePlateBlock"(pressurePlateBlock0: $PressurePlateBlock$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
public "signBlock"(standingSignBlock0: $StandingSignBlock$$Type, wallSignBlock1: $WallSignBlock$$Type, modelFile2: $ModelFile$$Type): void
public "signBlock"(standingSignBlock0: $StandingSignBlock$$Type, wallSignBlock1: $WallSignBlock$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "simpleBlock"(block0: $Block$$Type, ...configuredModel1s: $ConfiguredModel$$Type[]): void
public "simpleBlock"(block0: $Block$$Type, function1: $Function$$Type<$ModelFile$$Type, $ConfiguredModel[]>): void
public "simpleBlock"(block0: $Block$$Type): void
public "simpleBlock"(block0: $Block$$Type, modelFile1: $ModelFile$$Type): void
public "simpleBlockItem"(block0: $Block$$Type, modelFile1: $ModelFile$$Type): void
public "simpleBlockWithItem"(block0: $Block$$Type, modelFile1: $ModelFile$$Type): void
public "slabBlock"(slabBlock0: $SlabBlock$$Type, modelFile1: $ModelFile$$Type, modelFile2: $ModelFile$$Type, modelFile3: $ModelFile$$Type): void
public "slabBlock"(slabBlock0: $SlabBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "slabBlock"(slabBlock0: $SlabBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "stairsBlock"(stairBlock0: $StairBlock$$Type, modelFile1: $ModelFile$$Type, modelFile2: $ModelFile$$Type, modelFile3: $ModelFile$$Type): void
public "stairsBlock"(stairBlock0: $StairBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "stairsBlock"(stairBlock0: $StairBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type): void
public "stairsBlock"(stairBlock0: $StairBlock$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "stairsBlock"(stairBlock0: $StairBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "stairsBlockWithRenderType"(stairBlock0: $StairBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, string4: string): void
public "stairsBlockWithRenderType"(stairBlock0: $StairBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "stairsBlockWithRenderType"(stairBlock0: $StairBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "stairsBlockWithRenderType"(stairBlock0: $StairBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, string5: string): void
public "stairsBlockWithRenderType"(stairBlock0: $StairBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, string3: string): void
public "stairsBlockWithRenderType"(stairBlock0: $StairBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "stairsBlockWithRenderType"(stairBlock0: $StairBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type): void
public "stairsBlockWithRenderType"(stairBlock0: $StairBlock$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): void
public "stairsBlockWithRenderTypeAndFast"(stairBlock0: $StairBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type): void
public "stairsBlockWithRenderTypeAndFast"(stairBlock0: $StairBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "stairsBlockWithRenderTypeAndFast"(stairBlock0: $StairBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "stairsBlockWithRenderTypeAndFast"(stairBlock0: $StairBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, string5: string, string6: string): void
public "stairsBlockWithRenderTypeAndFast"(stairBlock0: $StairBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, string3: string, string4: string): void
public "stairsBlockWithRenderTypeAndFast"(stairBlock0: $StairBlock$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string, string3: string): void
public "stairsBlockWithRenderTypeAndFast"(stairBlock0: $StairBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, string4: string, string5: string): void
public "stairsBlockWithRenderTypeAndFast"(stairBlock0: $StairBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type, resourceLocation6: $ResourceLocation$$Type): void
public "trapdoorBlock"(trapDoorBlock0: $TrapDoorBlock$$Type, modelFile1: $ModelFile$$Type, modelFile2: $ModelFile$$Type, modelFile3: $ModelFile$$Type, boolean4: boolean): void
public "trapdoorBlock"(trapDoorBlock0: $TrapDoorBlock$$Type, resourceLocation1: $ResourceLocation$$Type, boolean2: boolean): void
public "trapdoorBlock"(trapDoorBlock0: $TrapDoorBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, boolean3: boolean): void
public "trapdoorBlockWithRenderType"(trapDoorBlock0: $TrapDoorBlock$$Type, resourceLocation1: $ResourceLocation$$Type, boolean2: boolean, resourceLocation3: $ResourceLocation$$Type): void
public "trapdoorBlockWithRenderType"(trapDoorBlock0: $TrapDoorBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, boolean3: boolean, resourceLocation4: $ResourceLocation$$Type): void
public "trapdoorBlockWithRenderType"(trapDoorBlock0: $TrapDoorBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, boolean3: boolean, string4: string): void
public "trapdoorBlockWithRenderType"(trapDoorBlock0: $TrapDoorBlock$$Type, resourceLocation1: $ResourceLocation$$Type, boolean2: boolean, string3: string): void
public "trapdoorBlockWithRenderTypeAndFast"(trapDoorBlock0: $TrapDoorBlock$$Type, resourceLocation1: $ResourceLocation$$Type, boolean2: boolean, string3: string, string4: string): void
public "trapdoorBlockWithRenderTypeAndFast"(trapDoorBlock0: $TrapDoorBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, boolean3: boolean, string4: string, string5: string): void
public "trapdoorBlockWithRenderTypeAndFast"(trapDoorBlock0: $TrapDoorBlock$$Type, resourceLocation1: $ResourceLocation$$Type, boolean2: boolean, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "trapdoorBlockWithRenderTypeAndFast"(trapDoorBlock0: $TrapDoorBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, boolean3: boolean, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type): void
public "wallBlock"(wallBlock0: $WallBlock$$Type, modelFile1: $ModelFile$$Type, modelFile2: $ModelFile$$Type, modelFile3: $ModelFile$$Type): void
public "wallBlock"(wallBlock0: $WallBlock$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "wallBlock"(wallBlock0: $WallBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type): void
public "wallBlockWithRenderType"(wallBlock0: $WallBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "wallBlockWithRenderType"(wallBlock0: $WallBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "wallBlockWithRenderType"(wallBlock0: $WallBlock$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): void
public "wallBlockWithRenderType"(wallBlock0: $WallBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, string3: string): void
public "wallBlockWithRenderTypeAndFast"(wallBlock0: $WallBlock$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "wallBlockWithRenderTypeAndFast"(wallBlock0: $WallBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public "wallBlockWithRenderTypeAndFast"(wallBlock0: $WallBlock$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string, string3: string): void
public "wallBlockWithRenderTypeAndFast"(wallBlock0: $WallBlock$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type, string3: string, string4: string): void
get "name"(): string
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterClientCommandsEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $CommandBuildContext, $CommandBuildContext$$Type } from "packages/net/minecraft/commands/$CommandBuildContext"
import { $CommandDispatcher, $CommandDispatcher$$Type } from "packages/com/mojang/brigadier/$CommandDispatcher"

export class $RegisterClientCommandsEvent extends $Event {
constructor()
constructor(commandDispatcher0: $CommandDispatcher$$Type<$CommandSourceStack$$Type>, commandBuildContext1: $CommandBuildContext$$Type)

public "getBuildContext"(): $CommandBuildContext
public "getDispatcher"(): $CommandDispatcher<$CommandSourceStack>
get "buildContext"(): $CommandBuildContext
get "dispatcher"(): $CommandDispatcher<$CommandSourceStack>
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$BackgroundRendered" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $GuiGraphics, $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ScreenEvent } from "packages/net/minecraftforge/client/event/$ScreenEvent"

export class $ScreenEvent$BackgroundRendered extends $ScreenEvent {
constructor()
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type)

public "getGuiGraphics"(): $GuiGraphics
get "guiGraphics"(): $GuiGraphics
}
}

declare module "packages/net/minecraftforge/client/event/$ModelEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $ModelEvent extends $Event {
}
}

declare module "packages/net/minecraftforge/client/event/sound/$SoundEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $SoundEngine } from "packages/net/minecraft/client/sounds/$SoundEngine"

export class $SoundEvent extends $Event {
constructor()

public "getEngine"(): $SoundEngine
get "engine"(): $SoundEngine
}
}

declare module "packages/net/minecraftforge/client/model/generators/$ModelFile" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModelFile {
public "assertExistence"(): void
public "getLocation"(): $ResourceLocation
public "getUncheckedLocation"(): $ResourceLocation
get "location"(): $ResourceLocation
get "uncheckedLocation"(): $ResourceLocation
}
}

declare module "packages/net/minecraftforge/client/model/$ForgeFaceData" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Record } from "packages/java/lang/$Record"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ForgeFaceData extends $Record {
static readonly "CODEC": $Codec<$ForgeFaceData>
static readonly "COLOR": $Codec<integer>
static readonly "DEFAULT": $ForgeFaceData

constructor(int0: integer, int1: integer, int2: integer, boolean3: boolean)
constructor(color: integer, blockLight: integer, skyLight: integer, ambientOcclusion: boolean, calculateNormals: boolean)

public "ambientOcclusion"(): boolean
public "blockLight"(): integer
public "calculateNormals"(): boolean
public "color"(): integer
public static "read"(jsonElement0: $JsonElement$$Type, forgeFaceData1: $ForgeFaceData$$Type): $ForgeFaceData
public "skyLight"(): integer
}
}

declare module "packages/net/minecraftforge/client/event/$EntityRenderersEvent$AddLayers" {
import { $EntityRenderersEvent } from "packages/net/minecraftforge/client/event/$EntityRenderersEvent"
import { $LivingEntityRenderer, $LivingEntityRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$LivingEntityRenderer"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $EntityRendererProvider$Context, $EntityRendererProvider$Context$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider$Context"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set } from "packages/java/util/$Set"
import { $EntityRenderer, $EntityRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import { $EntityModelSet } from "packages/net/minecraft/client/model/geom/$EntityModelSet"
import { $EntityModel, $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $Map$$Type } from "packages/java/util/$Map"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityRenderersEvent$AddLayers extends $EntityRenderersEvent {
constructor()
constructor(map0: $Map$$Type<$EntityType$$Type<any>, $EntityRenderer$$Type<any>>, map1: $Map$$Type<string, $EntityRenderer$$Type<$Player$$Type>>, context2: $EntityRendererProvider$Context$$Type)

public "getContext"(): $EntityRendererProvider$Context
public "getEntityModels"(): $EntityModelSet
public "getEntityRenderer"<T extends $Entity, R extends $EntityRenderer<T>>(entityType0: $EntityType$$Type<T>): R
public "getPlayerSkin"<R extends $EntityRenderer<$Player>>(string0: string): R
public "getRenderer"<T extends $LivingEntity, R extends $LivingEntityRenderer<T, $EntityModel<T>>>(entityType0: $EntityType$$Type<T>): R
public "getSkin"<R extends $LivingEntityRenderer<$Player, $EntityModel<$Player>>>(string0: string): R
public "getSkins"(): $Set<string>
get "context"(): $EntityRendererProvider$Context
get "entityModels"(): $EntityModelSet
get "skins"(): $Set<string>
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterNamedRenderTypesEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RenderTypeGroup$$Type } from "packages/net/minecraftforge/client/$RenderTypeGroup"
import { $Map$$Type } from "packages/java/util/$Map"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $RegisterNamedRenderTypesEvent extends $Event implements $IModBusEvent {
constructor()
constructor(map0: $Map$$Type<$ResourceLocation$$Type, $RenderTypeGroup$$Type>)

public "register"(string0: string, renderType1: $RenderType$$Type, renderType2: $RenderType$$Type, renderType3: $RenderType$$Type): void
public "register"(string0: string, renderType1: $RenderType$$Type, renderType2: $RenderType$$Type): void
}
}

declare module "packages/net/minecraftforge/client/event/$ClientChatReceivedEvent" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $ChatType$Bound, $ChatType$Bound$$Type } from "packages/net/minecraft/network/chat/$ChatType$Bound"

export class $ClientChatReceivedEvent extends $Event {
constructor(bound0: $ChatType$Bound$$Type, component1: $Component$$Type, uUID2: $UUID$$Type)
constructor()

public "getBoundChatType"(): $ChatType$Bound
public "getMessage"(): $Component
public "getSender"(): $UUID
public "isSystem"(): boolean
public "setMessage"(component0: $Component$$Type): void
get "boundChatType"(): $ChatType$Bound
get "message"(): $Component
get "sender"(): $UUID
get "system"(): boolean
set "message"(value: $Component$$Type)
}
}

declare module "packages/net/minecraftforge/client/event/$RenderLivingEvent$Pre" {
import { $LivingEntityRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$LivingEntityRenderer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $RenderLivingEvent } from "packages/net/minecraftforge/client/event/$RenderLivingEvent"
import { $EntityModel } from "packages/net/minecraft/client/model/$EntityModel"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $RenderLivingEvent$Pre<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLivingEvent<T, M> {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, livingEntityRenderer1: $LivingEntityRenderer$$Type<T, M>, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer)

}
}

declare module "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent$Item" {
import { $BlockColors, $BlockColors$$Type } from "packages/net/minecraft/client/color/block/$BlockColors"
import { $RegisterColorHandlersEvent } from "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $ItemColor$$Type } from "packages/net/minecraft/client/color/item/$ItemColor"
import { $ItemColors, $ItemColors$$Type } from "packages/net/minecraft/client/color/item/$ItemColors"

export class $RegisterColorHandlersEvent$Item extends $RegisterColorHandlersEvent {
constructor()
constructor(itemColors0: $ItemColors$$Type, blockColors1: $BlockColors$$Type)

public "getBlockColors"(): $BlockColors
public "getItemColors"(): $ItemColors
public "register"(itemColor0: $ItemColor$$Type, ...itemLike1s: $ItemLike$$Type[]): void
get "blockColors"(): $BlockColors
get "itemColors"(): $ItemColors
}
}

declare module "packages/net/minecraftforge/client/event/$CustomizeGuiOverlayEvent$DebugText" {
import { $CustomizeGuiOverlayEvent } from "packages/net/minecraftforge/client/event/$CustomizeGuiOverlayEvent"
import { $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $ArrayList, $ArrayList$$Type } from "packages/java/util/$ArrayList"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $CustomizeGuiOverlayEvent$DebugText extends $CustomizeGuiOverlayEvent {
constructor()
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, float2: float, arrayList3: $ArrayList$$Type<string>, arrayList4: $ArrayList$$Type<string>)

public "getLeft"(): $ArrayList<string>
public "getRight"(): $ArrayList<string>
get "left"(): $ArrayList<string>
get "right"(): $ArrayList<string>
}
}

declare module "packages/net/minecraftforge/client/event/$RenderHighlightEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $HitResult } from "packages/net/minecraft/world/phys/$HitResult"
import { $PoseStack } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Camera } from "packages/net/minecraft/client/$Camera"
import { $MultiBufferSource } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $LevelRenderer } from "packages/net/minecraft/client/renderer/$LevelRenderer"

export class $RenderHighlightEvent extends $Event {
constructor()

public "getCamera"(): $Camera
public "getLevelRenderer"(): $LevelRenderer
public "getMultiBufferSource"(): $MultiBufferSource
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getTarget"(): $HitResult
get "camera"(): $Camera
get "levelRenderer"(): $LevelRenderer
get "multiBufferSource"(): $MultiBufferSource
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "target"(): $HitResult
}
}

declare module "packages/net/minecraftforge/client/event/$EntityRenderersEvent$RegisterRenderers" {
import { $EntityRendererProvider$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $EntityRenderersEvent } from "packages/net/minecraftforge/client/event/$EntityRenderersEvent"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockEntityRendererProvider$$Type } from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRendererProvider"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityRenderersEvent$RegisterRenderers extends $EntityRenderersEvent {
constructor()

public "registerBlockEntityRenderer"<T extends $BlockEntity>(blockEntityType0: $BlockEntityType$$Type<T>, blockEntityRendererProvider1: $BlockEntityRendererProvider$$Type<T>): void
public "registerEntityRenderer"<T extends $Entity>(entityType0: $EntityType$$Type<T>, entityRendererProvider1: $EntityRendererProvider$$Type<T>): void
}
}

declare module "packages/net/minecraftforge/client/settings/$KeyModifier" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"
import { $IKeyConflictContext$$Type } from "packages/net/minecraftforge/client/settings/$IKeyConflictContext"
import { $List } from "packages/java/util/$List"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $InputConstants$Key$$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export class $KeyModifier extends $Enum<$KeyModifier> {
static readonly "ALT": $KeyModifier
static readonly "CONTROL": $KeyModifier
/** @deprecated */
static readonly "MODIFIER_VALUES": $KeyModifier[]
static readonly "NONE": $KeyModifier
static readonly "SHIFT": $KeyModifier

/** @deprecated */
public static "getActiveModifier"(): $KeyModifier
public "getCombinedName"(key0: $InputConstants$Key$$Type, supplier1: $Supplier$$Type<$Component>): $Component
public static "getModifier"(key0: $InputConstants$Key$$Type): $KeyModifier
public static "getValues"(boolean0: boolean): $List<$KeyModifier>
public "isActive"(iKeyConflictContext0: $IKeyConflictContext$$Type): boolean
public static "isKeyCodeModifier"(key0: $InputConstants$Key$$Type): boolean
public "matches"(key0: $InputConstants$Key$$Type): boolean
public static "valueFromString"(string0: string): $KeyModifier
public static "valueOf"(string0: string): $KeyModifier
public static "values"(): $KeyModifier[]
}
}

declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$RootTransformsBuilder" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $TransformationHelper$TransformOrigin$$Type } from "packages/net/minecraftforge/common/util/$TransformationHelper$TransformOrigin"
import { $Transformation$$Type } from "packages/com/mojang/math/$Transformation"
import { $Quaternionf$$Type } from "packages/org/joml/$Quaternionf"
import { $ModelBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$RootTransformsBuilder {
public "end"(): $ModelBuilder<T>
public "leftRotation"(float0: float, float1: float, float2: float, boolean3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "leftRotation"(quaternionf0: $Quaternionf$$Type): $ModelBuilder$RootTransformsBuilder<>
public "origin"(vector3f0: $Vector3f$$Type): $ModelBuilder$RootTransformsBuilder<>
public "origin"(transformOrigin0: $TransformationHelper$TransformOrigin$$Type): $ModelBuilder$RootTransformsBuilder<>
public "postRotation"(float0: float, float1: float, float2: float, boolean3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "postRotation"(quaternionf0: $Quaternionf$$Type): $ModelBuilder$RootTransformsBuilder<>
public "rightRotation"(float0: float, float1: float, float2: float, boolean3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "rightRotation"(quaternionf0: $Quaternionf$$Type): $ModelBuilder$RootTransformsBuilder<>
public "rotation"(float0: float, float1: float, float2: float, boolean3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "rotation"(quaternionf0: $Quaternionf$$Type): $ModelBuilder$RootTransformsBuilder<>
public "scale"(float0: float): $ModelBuilder$RootTransformsBuilder<>
public "scale"(float0: float, float1: float, float2: float): $ModelBuilder$RootTransformsBuilder<>
public "scale"(vector3f0: $Vector3f$$Type): $ModelBuilder$RootTransformsBuilder<>
public "toJson"(): $JsonObject
public "transform"(transformation0: $Transformation$$Type): $ModelBuilder$RootTransformsBuilder<>
public "translation"(vector3f0: $Vector3f$$Type): $ModelBuilder$RootTransformsBuilder<>
public "translation"(float0: float, float1: float, float2: float): $ModelBuilder$RootTransformsBuilder<>
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterDimensionSpecialEffectsEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $DimensionSpecialEffects$$Type } from "packages/net/minecraft/client/renderer/$DimensionSpecialEffects"
import { $Map$$Type } from "packages/java/util/$Map"

export class $RegisterDimensionSpecialEffectsEvent extends $Event implements $IModBusEvent {
constructor()
constructor(map0: $Map$$Type<$ResourceLocation$$Type, $DimensionSpecialEffects$$Type>)

public "register"(resourceLocation0: $ResourceLocation$$Type, dimensionSpecialEffects1: $DimensionSpecialEffects$$Type): void
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$CharacterTyped$Post" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent$CharacterTyped } from "packages/net/minecraftforge/client/event/$ScreenEvent$CharacterTyped"

export class $ScreenEvent$CharacterTyped$Post extends $ScreenEvent$CharacterTyped {
constructor(screen0: $Screen$$Type, char1: character, int2: integer)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$ContainerScreenEvent$Render" {
import { $GuiGraphics } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ContainerScreenEvent } from "packages/net/minecraftforge/client/event/$ContainerScreenEvent"

export class $ContainerScreenEvent$Render extends $ContainerScreenEvent {
constructor()

public "getGuiGraphics"(): $GuiGraphics
public "getMouseX"(): integer
public "getMouseY"(): integer
get "guiGraphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseScrolled$Post" {
import { $ScreenEvent$MouseScrolled } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseScrolled"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$MouseScrolled$Post extends $ScreenEvent$MouseScrolled {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, double3: double)

}
}

declare module "packages/net/minecraftforge/client/extensions/$IForgeBakedModel" {
import { $ModelData, $ModelData$$Type } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $RenderType, $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"
import { $ItemDisplayContext$$Type } from "packages/net/minecraft/world/item/$ItemDisplayContext"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ChunkRenderTypeSet } from "packages/net/minecraftforge/client/$ChunkRenderTypeSet"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import { $BakedQuad } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IForgeBakedModel {
"applyTransform"(itemDisplayContext0: $ItemDisplayContext$$Type, poseStack1: $PoseStack$$Type, boolean2: boolean): $BakedModel
"getModelData"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, modelData3: $ModelData$$Type): $ModelData
"getParticleIcon"(modelData0: $ModelData$$Type): $TextureAtlasSprite
"getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type, modelData3: $ModelData$$Type, renderType4: $RenderType$$Type): $List<$BakedQuad>
"getRenderPasses"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$BakedModel>
"getRenderTypes"(blockState0: $BlockState$$Type, randomSource1: $RandomSource$$Type, modelData2: $ModelData$$Type): $ChunkRenderTypeSet
"getRenderTypes"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$RenderType>
"useAmbientOcclusion"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
"useAmbientOcclusion"(blockState0: $BlockState$$Type): boolean
}

export namespace $IForgeBakedModel {
const probejs$$marker: never
}
export abstract class $IForgeBakedModel$$Static implements $IForgeBakedModel {
}
}

declare module "packages/net/minecraftforge/client/event/$RegisterClientTooltipComponentFactoriesEvent" {
import { $TooltipComponent, $TooltipComponent$$Type } from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $ClientTooltipComponent, $ClientTooltipComponent$$Type } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipComponent"
import { $Map$$Type } from "packages/java/util/$Map"

export class $RegisterClientTooltipComponentFactoriesEvent extends $Event implements $IModBusEvent {
constructor()
constructor(map0: $Map$$Type<$Class$$Type<$TooltipComponent$$Type>, $Function$$Type<$TooltipComponent$$Type, $ClientTooltipComponent$$Type>>)

public "register"<T extends $TooltipComponent>(class0: $Class$$Type<T>, function1: $Function$$Type<T, $ClientTooltipComponent>): void
}
}

declare module "packages/net/minecraftforge/client/event/$CustomizeGuiOverlayEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Window } from "packages/com/mojang/blaze3d/platform/$Window"
import { $GuiGraphics } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $CustomizeGuiOverlayEvent extends $Event {
constructor()

public "getGuiGraphics"(): $GuiGraphics
public "getPartialTick"(): float
public "getWindow"(): $Window
get "guiGraphics"(): $GuiGraphics
get "partialTick"(): float
get "window"(): $Window
}
}

declare module "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder" {
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ModelBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $BlockModelBuilder extends $ModelBuilder<$BlockModelBuilder> {
constructor(resourceLocation0: $ResourceLocation$$Type, existingFileHelper1: $ExistingFileHelper$$Type)

}
}

declare module "packages/net/minecraftforge/client/event/$RenderHighlightEvent$Block" {
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RenderHighlightEvent } from "packages/net/minecraftforge/client/event/$RenderHighlightEvent"

export class $RenderHighlightEvent$Block extends $RenderHighlightEvent {
constructor()
constructor(levelRenderer0: $LevelRenderer$$Type, camera1: $Camera$$Type, blockHitResult2: $BlockHitResult$$Type, float3: float, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type)

}
}

declare module "packages/net/minecraftforge/client/extensions/$IForgeModelBaker" {
import { $Material, $Material$$Type } from "packages/net/minecraft/client/resources/model/$Material"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $ModelState$$Type } from "packages/net/minecraft/client/resources/model/$ModelState"
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IForgeModelBaker {
"bake"(resourceLocation0: $ResourceLocation$$Type, modelState1: $ModelState$$Type, function2: $Function$$Type<$Material$$Type, $TextureAtlasSprite>): $BakedModel
"getModelTextureGetter"(): $Function<$Material, $TextureAtlasSprite>
get "modelTextureGetter"(): $Function<$Material, $TextureAtlasSprite>
}

export namespace $IForgeModelBaker {
const probejs$$marker: never
}
export abstract class $IForgeModelBaker$$Static implements $IForgeModelBaker {
}
}

declare module "packages/net/minecraftforge/client/event/$RenderGuiOverlayEvent$Post" {
import { $NamedGuiOverlay$$Type } from "packages/net/minecraftforge/client/gui/overlay/$NamedGuiOverlay"
import { $RenderGuiOverlayEvent } from "packages/net/minecraftforge/client/event/$RenderGuiOverlayEvent"
import { $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $RenderGuiOverlayEvent$Post extends $RenderGuiOverlayEvent {
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, float2: float, namedGuiOverlay3: $NamedGuiOverlay$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder$OverrideBuilder" {
import { $ItemModelBuilder, $ItemModelBuilder$$Type } from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ModelFile$$Type } from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ItemModelBuilder$OverrideBuilder {
constructor(itemModelBuilder0: $ItemModelBuilder$$Type)

public "end"(): $ItemModelBuilder
public "model"(modelFile0: $ModelFile$$Type): $ItemModelBuilder$OverrideBuilder
public "predicate"(resourceLocation0: $ResourceLocation$$Type, float1: float): $ItemModelBuilder$OverrideBuilder
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Screen } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent extends $Event {
constructor()

public "getScreen"(): $Screen
get "screen"(): $Screen
}
}

declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder$TransformVecBuilder" {
import { $ModelBuilder$TransformsBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder"

export class $ModelBuilder$TransformsBuilder$TransformVecBuilder {
public "end"(): $ModelBuilder$TransformsBuilder<>
public "leftRotation"(float0: float, float1: float, float2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "rightRotation"(float0: float, float1: float, float2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "rotation"(float0: float, float1: float, float2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "scale"(float0: float, float1: float, float2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "scale"(float0: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "translation"(float0: float, float1: float, float2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
}
}

declare module "packages/net/minecraftforge/client/event/$RenderBlockScreenEffectEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RenderBlockScreenEffectEvent$OverlayType, $RenderBlockScreenEffectEvent$OverlayType$$Type } from "packages/net/minecraftforge/client/event/$RenderBlockScreenEffectEvent$OverlayType"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $RenderBlockScreenEffectEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, poseStack1: $PoseStack$$Type, overlayType2: $RenderBlockScreenEffectEvent$OverlayType$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type)

public "getBlockPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "getOverlayType"(): $RenderBlockScreenEffectEvent$OverlayType
public "getPlayer"(): $Player
public "getPoseStack"(): $PoseStack
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
get "overlayType"(): $RenderBlockScreenEffectEvent$OverlayType
get "player"(): $Player
get "poseStack"(): $PoseStack
}
}

declare module "packages/net/minecraftforge/client/event/$ComputeFovModifierEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $ComputeFovModifierEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, float1: float)

public "getFovModifier"(): float
public "getNewFovModifier"(): float
public "getPlayer"(): $Player
public "setNewFovModifier"(float0: float): void
get "fovModifier"(): float
get "newFovModifier"(): float
get "player"(): $Player
set "newFovModifier"(value: float)
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$CharacterTyped$Pre" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent$CharacterTyped } from "packages/net/minecraftforge/client/event/$ScreenEvent$CharacterTyped"

export class $ScreenEvent$CharacterTyped$Pre extends $ScreenEvent$CharacterTyped {
constructor()
constructor(screen0: $Screen$$Type, char1: character, int2: integer)

}
}

declare module "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions$FontContext" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IClientItemExtensions$FontContext extends $Enum<$IClientItemExtensions$FontContext> {
static readonly "ITEM_COUNT": $IClientItemExtensions$FontContext
static readonly "SELECTED_ITEM_NAME": $IClientItemExtensions$FontContext
static readonly "TOOLTIP": $IClientItemExtensions$FontContext

public static "valueOf"(string0: string): $IClientItemExtensions$FontContext
public static "values"(): $IClientItemExtensions$FontContext[]
}
}

declare module "packages/net/minecraftforge/client/gui/overlay/$ForgeGui" {
import { $Gui } from "packages/net/minecraft/client/gui/$Gui"
import { $Minecraft, $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ForgeGui extends $Gui {
static "rayTraceDistance": double

constructor(minecraft0: $Minecraft$$Type)

public "getMinecraft"(): $Minecraft
public "handler$bja000$iris$handleHudHidingScreens"(pGui0: $GuiGraphics$$Type, pFloat1: float, ci: $CallbackInfo$$Type): void
public "renderFood"(int0: integer, int1: integer, guiGraphics2: $GuiGraphics$$Type): void
public "renderHealth"(int0: integer, int1: integer, guiGraphics2: $GuiGraphics$$Type): void
public "setupOverlayRenderState"(boolean0: boolean, boolean1: boolean): void
public "shouldDrawSurvivalElements"(): boolean
get "leftHeight"(): integer
set "leftHeight"(value: integer)
get "rightHeight"(): integer
set "rightHeight"(value: integer)
get "minecraft"(): $Minecraft
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$MouseButtonReleased$Post" {
import { $ScreenEvent$MouseButtonReleased } from "packages/net/minecraftforge/client/event/$ScreenEvent$MouseButtonReleased"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenEvent$MouseButtonReleased$Post extends $ScreenEvent$MouseButtonReleased {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer, boolean4: boolean)

public "wasHandled"(): boolean
}
}

declare module "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent$LoggingOut" {
import { $LocalPlayer$$Type } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $ClientPlayerNetworkEvent } from "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent"
import { $MultiPlayerGameMode$$Type } from "packages/net/minecraft/client/multiplayer/$MultiPlayerGameMode"

export class $ClientPlayerNetworkEvent$LoggingOut extends $ClientPlayerNetworkEvent {
constructor()
constructor(multiPlayerGameMode0: $MultiPlayerGameMode$$Type, localPlayer1: $LocalPlayer$$Type, connection2: $Connection$$Type)

}
}

declare module "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder" {
import { $ItemModelBuilder$OverrideBuilder } from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder$OverrideBuilder"
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ModelBuilder } from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ItemModelBuilder extends $ModelBuilder<$ItemModelBuilder> {
constructor(resourceLocation0: $ResourceLocation$$Type, existingFileHelper1: $ExistingFileHelper$$Type)

public "override"(int0: integer): $ItemModelBuilder$OverrideBuilder
public "override"(): $ItemModelBuilder$OverrideBuilder
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$Render$Post" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent$Render } from "packages/net/minecraftforge/client/event/$ScreenEvent$Render"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ScreenEvent$Render$Post extends $ScreenEvent$Render {
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, float4: float)
constructor()

}
}

declare module "packages/net/minecraftforge/client/event/$RenderTooltipEvent" {
import { $Font } from "packages/net/minecraft/client/gui/$Font"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $List } from "packages/java/util/$List"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ClientTooltipComponent } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipComponent"
import { $GuiGraphics } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $RenderTooltipEvent extends $Event {
constructor()

public "getComponents"(): $List<$ClientTooltipComponent>
public "getFont"(): $Font
public "getGraphics"(): $GuiGraphics
public "getItemStack"(): $ItemStack
public "getX"(): integer
public "getY"(): integer
get "components"(): $List<$ClientTooltipComponent>
get "font"(): $Font
get "graphics"(): $GuiGraphics
get "itemStack"(): $ItemStack
get "x"(): integer
get "y"(): integer
}
}

declare module "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions" {
import { $BlockEntityWithoutLevelRenderer } from "packages/net/minecraft/client/renderer/$BlockEntityWithoutLevelRenderer"
import { $HumanoidArm$$Type } from "packages/net/minecraft/world/entity/$HumanoidArm"
import { $HumanoidModel, $HumanoidModel$$Type } from "packages/net/minecraft/client/model/$HumanoidModel"
import { $HumanoidModel$ArmPose } from "packages/net/minecraft/client/model/$HumanoidModel$ArmPose"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $LocalPlayer$$Type } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $Font } from "packages/net/minecraft/client/gui/$Font"
import { $IClientItemExtensions$FontContext$$Type } from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions$FontContext"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Model } from "packages/net/minecraft/client/model/$Model"

export interface $IClientItemExtensions {
"applyForgeHandTransform"(poseStack0: $PoseStack$$Type, localPlayer1: $LocalPlayer$$Type, humanoidArm2: $HumanoidArm$$Type, itemStack3: $ItemStack$$Type, float4: float, float5: float, float6: float): boolean
"getArmPose"(livingEntity0: $LivingEntity$$Type, interactionHand1: $InteractionHand$$Type, itemStack2: $ItemStack$$Type): $HumanoidModel$ArmPose
"getCustomRenderer"(): $BlockEntityWithoutLevelRenderer
"getFont"(itemStack0: $ItemStack$$Type, fontContext1: $IClientItemExtensions$FontContext$$Type): $Font
"getGenericArmorModel"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, equipmentSlot2: $EquipmentSlot$$Type, humanoidModel3: $HumanoidModel$$Type<any>): $Model
"getHumanoidArmorModel"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, equipmentSlot2: $EquipmentSlot$$Type, humanoidModel3: $HumanoidModel$$Type<any>): $HumanoidModel<any>
"renderHelmetOverlay"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer, int3: integer, float4: float): void
get "customRenderer"(): $BlockEntityWithoutLevelRenderer
}

export namespace $IClientItemExtensions {
const DEFAULT: $IClientItemExtensions
function of(itemStack0: $ItemStack$$Type): $IClientItemExtensions
function of(item0: $Item$$Type): $IClientItemExtensions
}
export abstract class $IClientItemExtensions$$Static implements $IClientItemExtensions {
static readonly "DEFAULT": $IClientItemExtensions

static "of"(itemStack0: $ItemStack$$Type): $IClientItemExtensions
static "of"(item0: $Item$$Type): $IClientItemExtensions
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$KeyInput" {
import { $ScreenEvent } from "packages/net/minecraftforge/client/event/$ScreenEvent"

export class $ScreenEvent$KeyInput extends $ScreenEvent {
constructor()

public "getKeyCode"(): integer
public "getModifiers"(): integer
public "getScanCode"(): integer
get "keyCode"(): integer
get "modifiers"(): integer
get "scanCode"(): integer
}
}

declare module "packages/net/minecraftforge/client/event/$ScreenEvent$Opening" {
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenEvent } from "packages/net/minecraftforge/client/event/$ScreenEvent"

export class $ScreenEvent$Opening extends $ScreenEvent {
constructor()
constructor(screen0: $Screen$$Type, screen1: $Screen$$Type)

public "getCurrentScreen"(): $Screen
public "getNewScreen"(): $Screen
public "setNewScreen"(screen0: $Screen$$Type): void
get "currentScreen"(): $Screen
get "newScreen"(): $Screen
set "newScreen"(value: $Screen$$Type)
}
}

