declare module "packages/net/minecraft/client/$RecipeBookCategories" {
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $RecipeBookType$$Type } from "packages/net/minecraft/world/inventory/$RecipeBookType"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $List } from "packages/java/util/$List"
import { $IExtensibleEnum } from "packages/net/minecraftforge/common/$IExtensibleEnum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Map } from "packages/java/util/$Map"

export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum {
static readonly "AGGREGATE_CATEGORIES": $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>
static readonly "BLAST_FURNACE_BLOCKS": $RecipeBookCategories
static readonly "BLAST_FURNACE_CATEGORIES": $List<$RecipeBookCategories>
static readonly "BLAST_FURNACE_MISC": $RecipeBookCategories
static readonly "BLAST_FURNACE_SEARCH": $RecipeBookCategories
static readonly "CAMPFIRE": $RecipeBookCategories
static readonly "CRAFTING_BUILDING_BLOCKS": $RecipeBookCategories
static readonly "CRAFTING_CATEGORIES": $List<$RecipeBookCategories>
static readonly "CRAFTING_EQUIPMENT": $RecipeBookCategories
static readonly "CRAFTING_MISC": $RecipeBookCategories
static readonly "CRAFTING_REDSTONE": $RecipeBookCategories
static readonly "CRAFTING_SEARCH": $RecipeBookCategories
static readonly "FURNACE_BLOCKS": $RecipeBookCategories
static readonly "FURNACE_CATEGORIES": $List<$RecipeBookCategories>
static readonly "FURNACE_FOOD": $RecipeBookCategories
static readonly "FURNACE_MISC": $RecipeBookCategories
static readonly "FURNACE_SEARCH": $RecipeBookCategories
static readonly "SMITHING": $RecipeBookCategories
static readonly "SMOKER_CATEGORIES": $List<$RecipeBookCategories>
static readonly "SMOKER_FOOD": $RecipeBookCategories
static readonly "SMOKER_SEARCH": $RecipeBookCategories
static readonly "STONECUTTER": $RecipeBookCategories
static readonly "UNKNOWN": $RecipeBookCategories

public static "create"(string0: string, ...itemStack1s: $ItemStack$$Type[]): $RecipeBookCategories
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
public static "getCategories"(recipeBookType0: $RecipeBookType$$Type): $List<$RecipeBookCategories>
public "getIconItems"(): $List<$ItemStack>
/** @deprecated */
public "init"(): void
public static "valueOf"(string0: string): $RecipeBookCategories
public static "values"(): $RecipeBookCategories[]
get "iconItems"(): $List<$ItemStack>
}
}

declare module "packages/net/minecraft/client/$Minecraft" {
import { $Proxy } from "packages/java/net/$Proxy"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $SearchTree } from "packages/net/minecraft/client/searchtree/$SearchTree"
import { $GameConfig$$Type } from "packages/net/minecraft/client/main/$GameConfig"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $InputType, $InputType$$Type } from "packages/net/minecraft/client/$InputType"
import { $ScheduledEvents } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents"
import { $ClientLevel, $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $SoundManager } from "packages/net/minecraft/client/sounds/$SoundManager"
import { $List$$Type } from "packages/java/util/$List"
import { $User } from "packages/net/minecraft/client/$User"
import { $ServerData } from "packages/net/minecraft/client/multiplayer/$ServerData"
import { $IForgeMinecraft } from "packages/net/minecraftforge/client/extensions/$IForgeMinecraft"
import { $ReportEnvironment$$Type } from "packages/net/minecraft/client/multiplayer/chat/report/$ReportEnvironment"
import { $RealmsDataFetcher } from "packages/com/mojang/realmsclient/gui/$RealmsDataFetcher"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $Gui } from "packages/net/minecraft/client/gui/$Gui"
import { $DebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer"
import { $PaintingTextureManager } from "packages/net/minecraft/client/resources/$PaintingTextureManager"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $MinecraftClientKJS } from "packages/dev/latvian/mods/kubejs/core/$MinecraftClientKJS"
import { $PropertyMap } from "packages/com/mojang/authlib/properties/$PropertyMap"
import { $LevelStorageSource } from "packages/net/minecraft/world/level/storage/$LevelStorageSource"
import { $WindowEventHandler } from "packages/com/mojang/blaze3d/platform/$WindowEventHandler"
import { $FontManager, $FontManager$$Type } from "packages/net/minecraft/client/gui/font/$FontManager"
import { $TextureManager } from "packages/net/minecraft/client/renderer/texture/$TextureManager"
import { $DownloadedPackSource } from "packages/net/minecraft/client/resources/$DownloadedPackSource"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $MusicManager } from "packages/net/minecraft/client/sounds/$MusicManager"
import { $EntityModelSet } from "packages/net/minecraft/client/model/geom/$EntityModelSet"
import { $GameNarrator } from "packages/net/minecraft/client/$GameNarrator"
import { $MinecraftSessionService } from "packages/com/mojang/authlib/minecraft/$MinecraftSessionService"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $SearchRegistry } from "packages/net/minecraft/client/searchtree/$SearchRegistry"
import { $AddCustomNbtDataInvoker } from "packages/mod/traister101/sns/mixins/client/invoker/$AddCustomNbtDataInvoker"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"
import { $Runnable } from "packages/java/lang/$Runnable"
import { $ChatListener } from "packages/net/minecraft/client/multiplayer/chat/$ChatListener"
import { $ProfilerFiller } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $BlockColors } from "packages/net/minecraft/client/color/block/$BlockColors"
import { $ReentrantBlockableEventLoop } from "packages/net/minecraft/util/thread/$ReentrantBlockableEventLoop"
import { $WorldStem$$Type } from "packages/net/minecraft/server/$WorldStem"
import { $GpuWarnlistManager } from "packages/net/minecraft/client/renderer/$GpuWarnlistManager"
import { $ScheduledEvents$Callback$$Type } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback"
import { $ResourceManager } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $BanDetails } from "packages/com/mojang/authlib/minecraft/$BanDetails"
import { $Path } from "packages/java/nio/file/$Path"
import { $IXaeroMinimapMinecraftClient } from "packages/xaero/common/core/$IXaeroMinimapMinecraftClient"
import { $Tutorial } from "packages/net/minecraft/client/tutorial/$Tutorial"
import { $ToastComponent, $ToastComponent$$Type } from "packages/net/minecraft/client/gui/components/toasts/$ToastComponent"
import { $ModCheck } from "packages/net/minecraft/util/$ModCheck"
import { $Font } from "packages/net/minecraft/client/gui/$Font"
import { $HitResult, $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Music } from "packages/net/minecraft/sounds/$Music"
import { $VanillaPackResources } from "packages/net/minecraft/server/packs/$VanillaPackResources"
import { $MobEffectTextureManager } from "packages/net/minecraft/client/resources/$MobEffectTextureManager"
import { $ModelManager } from "packages/net/minecraft/client/resources/model/$ModelManager"
import { $HotbarManager } from "packages/net/minecraft/client/$HotbarManager"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $Realms32BitWarningStatus } from "packages/net/minecraft/client/$Realms32BitWarningStatus"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SignatureValidator } from "packages/net/minecraft/util/$SignatureValidator"
import { $ProcessorHandle, $ProcessorHandle$$Type } from "packages/net/minecraft/util/thread/$ProcessorHandle"
import { $TemporalAmount$$Type } from "packages/java/time/temporal/$TemporalAmount"
import { $StoringChunkProgressListener } from "packages/net/minecraft/server/level/progress/$StoringChunkProgressListener"
import { $PlayerSocialManager } from "packages/net/minecraft/client/gui/screens/social/$PlayerSocialManager"
import { $ReportingContext } from "packages/net/minecraft/client/multiplayer/chat/report/$ReportingContext"
import { $ClientTelemetryManager } from "packages/net/minecraft/client/telemetry/$ClientTelemetryManager"
import { $GameRenderer } from "packages/net/minecraft/client/renderer/$GameRenderer"
import { $QuickPlayLog } from "packages/net/minecraft/client/quickplay/$QuickPlayLog"
import { $Timer } from "packages/net/minecraft/client/$Timer"
import { $Locale } from "packages/java/util/$Locale"
import { $RenderTarget, $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import { $KeyboardHandler } from "packages/net/minecraft/client/$KeyboardHandler"
import { $Options, $Options$$Type } from "packages/net/minecraft/client/$Options"
import { $FrameTimer } from "packages/net/minecraft/util/$FrameTimer"
import { $MouseHandler } from "packages/net/minecraft/client/$MouseHandler"
import { $Minecraft$ChatStatus } from "packages/net/minecraft/client/$Minecraft$ChatStatus"
import { $ClientPacketListener } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $MultiPlayerGameMode, $MultiPlayerGameMode$$Type } from "packages/net/minecraft/client/multiplayer/$MultiPlayerGameMode"
import { $MinecraftClientAccessor } from "packages/net/bettercombat/mixin/client/$MinecraftClientAccessor"
import { $DataFixer } from "packages/com/mojang/datafixers/$DataFixer"
import { $EntityRenderDispatcher } from "packages/net/minecraft/client/renderer/entity/$EntityRenderDispatcher"
import { $ItemRenderer } from "packages/net/minecraft/client/renderer/entity/$ItemRenderer"
import { $LanguageManager, $LanguageManager$$Type } from "packages/net/minecraft/client/resources/language/$LanguageManager"
import { $BlockRenderDispatcher, $BlockRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/block/$BlockRenderDispatcher"
import { $WorldOpenFlows } from "packages/net/minecraft/client/gui/screens/worldselection/$WorldOpenFlows"
import { $Window } from "packages/com/mojang/blaze3d/platform/$Window"
import { $Overlay, $Overlay$$Type } from "packages/net/minecraft/client/gui/screens/$Overlay"
import { $SkinManager } from "packages/net/minecraft/client/resources/$SkinManager"
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $IWorldMapMinecraftClient } from "packages/xaero/map/core/$IWorldMapMinecraftClient"
import { $CrashReport, $CrashReport$$Type } from "packages/net/minecraft/$CrashReport"
import { $IntegratedServer } from "packages/net/minecraft/client/server/$IntegratedServer"
import { $MinecraftAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/client/$MinecraftAccess"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $File, $File$$Type } from "packages/java/io/$File"
import { $SplashManager } from "packages/net/minecraft/client/resources/$SplashManager"
import { $LevelRenderer } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $MinecraftAccessor } from "packages/vazkii/botania/mixin/client/$MinecraftAccessor"
import { $MinecraftClient_BetterCombat } from "packages/net/bettercombat/api/$MinecraftClient_BetterCombat"
import { $PackRepository, $PackRepository$$Type } from "packages/net/minecraft/server/packs/repository/$PackRepository"
import { $SearchRegistry$Key$$Type } from "packages/net/minecraft/client/searchtree/$SearchRegistry$Key"
import { $ProfileKeyPairManager } from "packages/net/minecraft/client/multiplayer/$ProfileKeyPairManager"
import { $LocalPlayer, $LocalPlayer$$Type } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $RenderBuffers } from "packages/net/minecraft/client/renderer/$RenderBuffers"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $MinecraftAccessor as $MinecraftAccessor$0 } from "packages/me/jellysquid/mods/sodium/mixin/core/render/$MinecraftAccessor"
import { $BlockEntityRenderDispatcher } from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderDispatcher"
import { $ParticleEngine } from "packages/net/minecraft/client/particle/$ParticleEngine"
import { $Exception$$Type } from "packages/java/lang/$Exception"
import { $ScheduledEvents$ScheduledEvent } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IForgeMinecraft, $MinecraftAccessor, $MinecraftClientAccessor, $MinecraftClient_BetterCombat, $MinecraftAccess, $IXaeroMinimapMinecraftClient, $IWorldMapMinecraftClient, $AddCustomNbtDataInvoker, $MinecraftClientKJS, $MinecraftAccessor$0 {
static readonly "ALT_FONT": $ResourceLocation
static readonly "DEFAULT_FONT": $ResourceLocation
static readonly "ON_OSX": boolean
static readonly "UNIFORM_FONT": $ResourceLocation
static readonly "UPDATE_DRIVERS_ADVICE": string
readonly "debugRenderer": $DebugRenderer
readonly "font": $Font
readonly "fontFilterFishy": $Font
static "fps": integer
readonly "frameTimer": $FrameTimer
readonly "gameDirectory": $File
readonly "gameRenderer": $GameRenderer
readonly "gui": $Gui
readonly "keyboardHandler": $KeyboardHandler
readonly "levelRenderer": $LevelRenderer
readonly "mouseHandler": $MouseHandler
readonly "options": $Options
readonly "particleEngine": $ParticleEngine
readonly "renderBuffers": $RenderBuffers
readonly "textureManager": $TextureManager
readonly "timer": $Timer

constructor(gameConfig0: $GameConfig$$Type)

public "addCustomNbtData"(itemStack0: $ItemStack$$Type, blockEntity1: $BlockEntity$$Type): void
public "allowsMultiplayer"(): boolean
public "allowsRealms"(): boolean
public "allowsTelemetry"(): boolean
public "ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, $Runnable>): $CompletableFuture<Source>
public "askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, $Runnable>): $CompletableFuture<Source>
public "cancelUpswing"(): void
public static "checkModStatus"(): $ModCheck
public "clearLevel"(): void
public "clearLevel"(screen0: $Screen$$Type): void
public "clearResourcePacksOnError"(throwable0: $Throwable$$Type, component1: $Component$$Type): void
public static "crash"(crashReport0: $CrashReport$$Type): void
public "createSearchTrees"(): void
public "createWorldOpenFlows"(): $WorldOpenFlows
public "cursorEntered"(): void
public "debugClientMetricsStart"(consumer0: $Consumer$$Type<$Component$$Type>): boolean
public "debugFpsMeterKeyPress"(int0: integer): void
public "delayCrash"(crashReport0: $CrashReport$$Type): void
public "delayCrashRaw"(crashReport0: $CrashReport$$Type): void
public "delayTextureReload"(): $CompletableFuture<void>
public "destroy"(): void
public "doWorldLoad"(string0: string, levelStorageAccess1: $LevelStorageSource$LevelStorageAccess$$Type, packRepository2: $PackRepository$$Type, worldStem3: $WorldStem$$Type, boolean4: boolean): void
public "emergencySave"(): void
public "extraTelemetryAvailable"(): boolean
public "fillReport"(crashReport0: $CrashReport$$Type): $CrashReport
public static "fillReport"(minecraft0: $Minecraft$$Type, languageManager1: $LanguageManager$$Type, string2: string, options3: $Options$$Type, crashReport4: $CrashReport$$Type): void
public "forceSetScreen"(screen0: $Screen$$Type): void
public "getBlockColors"(): $BlockColors
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "getBlockRenderer"(): $BlockRenderDispatcher
public "getCameraEntity"(): $Entity
public "getChatListener"(): $ChatListener
public "getChatStatus"(): $Minecraft$ChatStatus
public "getComboCount"(): integer
public "getConnection"(): $ClientPacketListener
public "getCurrentScreen"(): $Screen
public "getCurrentServer"(): $ServerData
public "getCurrentWorldName"(): string
public "getCursorTarget"(): $Entity
public "getDeltaFrameTime"(): float
public "getDisplayName"(): $Component
public "getDownloadedPackSource"(): $DownloadedPackSource
public "getEntityModels"(): $EntityModelSet
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "getFixerUpper"(): $DataFixer
public "getFps"(): integer
public "getFrameTime"(): float
public "getFrameTimeNs"(): long
public "getFrameTimer"(): $FrameTimer
public "getGpuUtilization"(): double
public "getGpuWarnlistManager"(): $GpuWarnlistManager
public "getHotbarManager"(): $HotbarManager
public static "getInstance"(): $Minecraft
public "getItemRenderer"(): $ItemRenderer
public "getLanguageManager"(): $LanguageManager
public "getLastInputType"(): $InputType
public "getLaunchedVersion"(): string
public "getLevelSource"(): $LevelStorageSource
public "getLocale"(): $Locale
public "getMainRenderTarget"(): $RenderTarget
public "getMinecraftSessionService"(): $MinecraftSessionService
public "getMobEffectTextures"(): $MobEffectTextureManager
public "getModelManager"(): $ModelManager
public "getMusicManager"(): $MusicManager
public "getName"(): $Component
public "getNarrator"(): $GameNarrator
public "getOverlay"(): $Overlay
public "getPaintingTextures"(): $PaintingTextureManager
public "getPartialTick"(): float
public "getPlayerSocialManager"(): $PlayerSocialManager
public "getProfileKeyPairManager"(): $ProfileKeyPairManager
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "getProfileProperties"(): $PropertyMap
public "getProfiler"(): $ProfilerFiller
public "getProgressListener"(): $StoringChunkProgressListener
public "getProxy"(): $Proxy
public "getRealms32BitWarningStatus"(): $Realms32BitWarningStatus
public "getReportingContext"(): $ReportingContext
public "getResourceManager"(): $ResourceManager
public "getResourcePackDirectory"(): $Path
public "getResourcePackRepository"(): $PackRepository
public "getScheduledEvents"(): $ScheduledEvents
public "getSearchTree"<T>(key0: $SearchRegistry$Key$$Type<T>): $SearchTree<T>
public "getSearchTreeManager"(): $SearchRegistry
public "getSingleplayerServer"(): $IntegratedServer
public "getSituationalMusic"(): $Music
public "getSkinManager"(): $SkinManager
public "getSoundManager"(): $SoundManager
public "getSplashManager"(): $SplashManager
public "getSwingProgress"(): float
public "getTelemetryManager"(): $ClientTelemetryManager
public "getTextureAtlas"(resourceLocation0: $ResourceLocation$$Type): $Function<$ResourceLocation, $TextureAtlasSprite>
public "getTextureManager"(): $TextureManager
public "getToasts"(): $ToastComponent
public "getTutorial"(): $Tutorial
public "getUpswingTicks"(): integer
public "getUser"(): $User
public "getVanillaPackResources"(): $VanillaPackResources
public "getVersionType"(): string
public "getWindow"(): $Window
public "getXaeroMinimap_fps"(): integer
public "getXaeroWorldMap_fps"(): integer
public "grabPanoramixScreenshot"(file0: $File$$Type, int1: integer, int2: integer): $Component
public "handler$bdm000$iris$trackLastDimensionOnLeave"(arg: $Screen$$Type, ci: $CallbackInfo$$Type): void
public "handler$coj000$onRunTickStart"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$dlh000$handleInputEvents"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$fhf000$stop"(callbackInfo0: $CallbackInfo$$Type): void
public "hasSingleplayerServer"(): boolean
public "hasTargetsInReach"(): boolean
public "is64Bit"(): boolean
public "isAltDown"(): boolean
public "isBlocked"(uUID0: $UUID$$Type): boolean
public "isConnectedToRealms"(): boolean
public "isCtrlDown"(): boolean
public "isDemo"(): boolean
public "isEnforceUnicode"(): boolean
public "isKeyDown"(key: integer): boolean
public "isLocalServer"(): boolean
public "isPaused"(): boolean
public "isRunning"(): boolean
public "isShiftDown"(): boolean
public "isSingleplayer"(): boolean
public "isTextFilteringEnabled"(): boolean
public "isWeaponSwingInProgress"(): boolean
public "isWindowActive"(): boolean
public "modify$coj000$onRenderCall"(boolean0: boolean): boolean
public "multiplayerBan"(): $BanDetails
public static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
public "pauseGame"(boolean0: boolean): void
public "popGuiLayer"(): void
public "populateSearchTree"<T>(key0: $SearchRegistry$Key$$Type<T>, list1: $List$$Type<T>): void
public "prepareForMultiplayer"(): void
public "pushGuiLayer"(screen0: $Screen$$Type): void
public "quickPlayLog"(): $QuickPlayLog
public "realmsDataFetcher"(): $RealmsDataFetcher
public "redirect$ehm000$fixUpdateURLs"(renderTarget0: $RenderTarget$$Type, boolean1: boolean): void
public "reloadResourcePacks"(): $CompletableFuture<void>
public "renderBuffers"(): $RenderBuffers
public static "renderNames"(): boolean
public "renderOnThread"(): boolean
public "resizeDisplay"(): void
public "run"(): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "self"(): $Minecraft
public "setCameraEntity"(entity0: $Entity$$Type): void
public "setConnectedToRealms"(boolean0: boolean): void
public "setCurrentScreen"(gui: $Screen$$Type): void
public "setLastInputType"(inputType0: $InputType$$Type): void
public "setLevel"(clientLevel0: $ClientLevel$$Type): void
public "setOverlay"(overlay0: $Overlay$$Type): void
public "setScreen"(screen0: $Screen$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTitle"(t: string): void
public "setWindowActive"(boolean0: boolean): void
public "shouldEntityAppearGlowing"(entity0: $Entity$$Type): boolean
public "shouldShowBanNotice"(): boolean
public "showOnlyReducedInfo"(): boolean
public "stop"(): void
public "telemetryOptInExtra"(): boolean
public "tell"(message: $Component$$Type): void
public "tick"(): void
public "updateMaxMipLevel"(int0: integer): void
public "updateReportEnvironment"(reportEnvironment0: $ReportEnvironment$$Type): void
public "updateTitle"(): void
public static "useAmbientOcclusion"(): boolean
public static "useFancyGraphics"(): boolean
public static "useShaderTransparency"(): boolean
get "blockRenderer"(): $BlockRenderDispatcher
set "blockRenderer"(value: $BlockRenderDispatcher$$Type)
get "cameraEntity"(): $Entity
set "cameraEntity"(value: $Entity$$Type)
get "chunkPath"(): boolean
set "chunkPath"(value: boolean)
get "chunkVisibility"(): boolean
set "chunkVisibility"(value: boolean)
get "crosshairPickEntity"(): $Entity
set "crosshairPickEntity"(value: $Entity$$Type)
get "fontManager"(): $FontManager
set "fontManager"(value: $FontManager$$Type)
get "fpsString"(): string
set "fpsString"(value: string)
get "gameMode"(): $MultiPlayerGameMode
set "gameMode"(value: $MultiPlayerGameMode$$Type)
get "hitResult"(): $HitResult
set "hitResult"(value: $HitResult$$Type)
get "level"(): $ClientLevel
set "level"(value: $ClientLevel$$Type)
get "missTime"(): integer
set "missTime"(value: integer)
get "noRender"(): boolean
set "noRender"(value: boolean)
get "pausePartialTick"(): float
set "pausePartialTick"(value: float)
get "player"(): $LocalPlayer
set "player"(value: $LocalPlayer$$Type)
get "rightClickDelay"(): integer
set "rightClickDelay"(value: integer)
get "screen"(): $Screen
set "screen"(value: $Screen$$Type)
get "smartCull"(): boolean
set "smartCull"(value: boolean)
get "toast"(): $ToastComponent
set "toast"(value: $ToastComponent$$Type)
get "wireframe"(): boolean
set "wireframe"(value: boolean)
get "blockColors"(): $BlockColors
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "chatListener"(): $ChatListener
get "chatStatus"(): $Minecraft$ChatStatus
get "comboCount"(): integer
get "connection"(): $ClientPacketListener
get "currentScreen"(): $Screen
get "currentServer"(): $ServerData
get "currentWorldName"(): string
get "cursorTarget"(): $Entity
get "deltaFrameTime"(): float
get "displayName"(): $Component
get "downloadedPackSource"(): $DownloadedPackSource
get "entityModels"(): $EntityModelSet
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "fixerUpper"(): $DataFixer
get "frameTime"(): float
get "frameTimeNs"(): long
get "gpuUtilization"(): double
get "gpuWarnlistManager"(): $GpuWarnlistManager
get "hotbarManager"(): $HotbarManager
get "itemRenderer"(): $ItemRenderer
get "languageManager"(): $LanguageManager
get "lastInputType"(): $InputType
get "launchedVersion"(): string
get "levelSource"(): $LevelStorageSource
get "locale"(): $Locale
get "mainRenderTarget"(): $RenderTarget
get "minecraftSessionService"(): $MinecraftSessionService
get "mobEffectTextures"(): $MobEffectTextureManager
get "modelManager"(): $ModelManager
get "musicManager"(): $MusicManager
get "name"(): $Component
get "narrator"(): $GameNarrator
get "overlay"(): $Overlay
get "paintingTextures"(): $PaintingTextureManager
get "partialTick"(): float
get "playerSocialManager"(): $PlayerSocialManager
get "profileKeyPairManager"(): $ProfileKeyPairManager
get "profileKeySignatureValidator"(): $SignatureValidator
get "profileProperties"(): $PropertyMap
get "profiler"(): $ProfilerFiller
get "progressListener"(): $StoringChunkProgressListener
get "proxy"(): $Proxy
get "realms32BitWarningStatus"(): $Realms32BitWarningStatus
get "reportingContext"(): $ReportingContext
get "resourceManager"(): $ResourceManager
get "resourcePackDirectory"(): $Path
get "resourcePackRepository"(): $PackRepository
get "scheduledEvents"(): $ScheduledEvents
get "searchTreeManager"(): $SearchRegistry
get "singleplayerServer"(): $IntegratedServer
get "situationalMusic"(): $Music
get "skinManager"(): $SkinManager
get "soundManager"(): $SoundManager
get "splashManager"(): $SplashManager
get "swingProgress"(): float
get "telemetryManager"(): $ClientTelemetryManager
get "toasts"(): $ToastComponent
get "tutorial"(): $Tutorial
get "upswingTicks"(): integer
get "user"(): $User
get "vanillaPackResources"(): $VanillaPackResources
get "versionType"(): string
get "window"(): $Window
get "xaeroMinimap_fps"(): integer
get "xaeroWorldMap_fps"(): integer
get "64Bit"(): boolean
get "altDown"(): boolean
get "connectedToRealms"(): boolean
get "ctrlDown"(): boolean
get "demo"(): boolean
get "enforceUnicode"(): boolean
get "localServer"(): boolean
get "paused"(): boolean
get "running"(): boolean
get "shiftDown"(): boolean
get "singleplayer"(): boolean
get "textFilteringEnabled"(): boolean
get "weaponSwingInProgress"(): boolean
get "windowActive"(): boolean
set "connectedToRealms"(value: boolean)
set "currentScreen"(value: $Screen$$Type)
set "lastInputType"(value: $InputType$$Type)
set "overlay"(value: $Overlay$$Type)
set "statusMessage"(value: $Component$$Type)
set "title"(value: string)
set "windowActive"(value: boolean)
}
}

declare module "packages/net/minecraft/client/$KeyMapping" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $KeyMappingAccessor } from "packages/net/blay09/mods/balm/mixin/$KeyMappingAccessor"
import { $IKeyConflictContext, $IKeyConflictContext$$Type } from "packages/net/minecraftforge/client/settings/$IKeyConflictContext"
import { $AccessorKeyMapping } from "packages/com/railwayteam/railways/mixin/conductor_possession/$AccessorKeyMapping"
import { $IForgeKeyMapping } from "packages/net/minecraftforge/client/extensions/$IForgeKeyMapping"
import { $IMixinKeyBinding } from "packages/org/anti_ad/mc/ipnext/mixin/$IMixinKeyBinding"
import { $KeyMappingAccessor as $KeyMappingAccessor$0 } from "packages/net/blay09/mods/kuma/mixin/$KeyMappingAccessor"
import { $AccessKeyMapping } from "packages/com/blamejared/controlling/mixin/$AccessKeyMapping"
import { $AccessorKeyMapping as $AccessorKeyMapping$0 } from "packages/vazkii/patchouli/mixin/client/$AccessorKeyMapping"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $InputConstants$Type$$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Type"
import { $KeyModifier, $KeyModifier$$Type } from "packages/net/minecraftforge/client/settings/$KeyModifier"
import { $InputConstants$Key, $InputConstants$Key$$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"
import { $Map } from "packages/java/util/$Map"

export class $KeyMapping implements $Comparable<$KeyMapping>, $IForgeKeyMapping, $KeyMappingAccessor, $KeyMappingAccessor$0, $AccessKeyMapping, $AccessorKeyMapping, $AccessorKeyMapping$0, $IMixinKeyBinding {
static readonly "ALL": $Map<string, $KeyMapping>
static readonly "CATEGORY_CREATIVE": string
static readonly "CATEGORY_GAMEPLAY": string
static readonly "CATEGORY_INTERFACE": string
static readonly "CATEGORY_INVENTORY": string
static readonly "CATEGORY_MISC": string
static readonly "CATEGORY_MOVEMENT": string
static readonly "CATEGORY_MULTIPLAYER": string

constructor(string0: string, iKeyConflictContext1: $IKeyConflictContext$$Type, keyModifier2: $KeyModifier$$Type, key3: $InputConstants$Key$$Type, string4: string)
constructor(string0: string, type1: $InputConstants$Type$$Type, int2: integer, string3: string)
constructor(string0: string, int1: integer, string2: string)
constructor(string0: string, iKeyConflictContext1: $IKeyConflictContext$$Type, keyModifier2: $KeyModifier$$Type, type3: $InputConstants$Type$$Type, int4: integer, string5: string)
constructor(string0: string, iKeyConflictContext1: $IKeyConflictContext$$Type, key2: $InputConstants$Key$$Type, string3: string)
constructor(string0: string, iKeyConflictContext1: $IKeyConflictContext$$Type, type2: $InputConstants$Type$$Type, int3: integer, string4: string)

public static "click"(key0: $InputConstants$Key$$Type): void
public "compareTo"(keyMapping0: $KeyMapping$$Type): integer
public "consumeClick"(): boolean
public static "createNameSupplier"(string0: string): $Supplier<$Component>
public "getCategory"(): string
public "getDefaultKey"(): $InputConstants$Key
public "getDefaultKeyModifier"(): $KeyModifier
public "getKeyConflictContext"(): $IKeyConflictContext
public "getKeyModifier"(): $KeyModifier
public "getName"(): string
public "getTranslatedKeyMessage"(): $Component
public "hasKeyModifierConflict"(keyMapping0: $KeyMapping$$Type): boolean
public "isActiveAndMatches"(key0: $InputConstants$Key$$Type): boolean
public "isConflictContextAndModifierActive"(): boolean
public "isDefault"(): boolean
public "isDown"(): boolean
public "isUnbound"(): boolean
public "matches"(int0: integer, int1: integer): boolean
public "matchesMouse"(int0: integer): boolean
public static "releaseAll"(): void
public static "resetMapping"(): void
public static "resetToggleKeys"(): void
public "same"(keyMapping0: $KeyMapping$$Type): boolean
public "saveString"(): string
public static "set"(key0: $InputConstants$Key$$Type, boolean1: boolean): void
public static "setAll"(): void
public "setDown"(boolean0: boolean): void
public "setKey"(key0: $InputConstants$Key$$Type): void
public "setKeyConflictContext"(iKeyConflictContext0: $IKeyConflictContext$$Type): void
public "setKeyModifierAndCode"(keyModifier0: $KeyModifier$$Type, key1: $InputConstants$Key$$Type): void
public "setToDefault"(): void
get "key"(): $InputConstants$Key
set "key"(value: $InputConstants$Key$$Type)
get "category"(): string
get "defaultKey"(): $InputConstants$Key
get "defaultKeyModifier"(): $KeyModifier
get "keyConflictContext"(): $IKeyConflictContext
get "keyModifier"(): $KeyModifier
get "name"(): string
get "translatedKeyMessage"(): $Component
get "conflictContextAndModifierActive"(): boolean
get "default"(): boolean
get "down"(): boolean
get "unbound"(): boolean
set "down"(value: boolean)
set "keyConflictContext"(value: $IKeyConflictContext$$Type)
}
}

declare module "packages/net/minecraft/client/$GuiMessage$Line" {
import { $FormattedCharSequence, $FormattedCharSequence$$Type } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $Record } from "packages/java/lang/$Record"
import { $GuiMessageTag, $GuiMessageTag$$Type } from "packages/net/minecraft/client/$GuiMessageTag"

export class $GuiMessage$Line extends $Record {
constructor(int0: integer, formattedCharSequence1: $FormattedCharSequence$$Type, guiMessageTag2: $GuiMessageTag$$Type, boolean3: boolean)

public "addedTime"(): integer
public "content"(): $FormattedCharSequence
public "endOfEntry"(): boolean
public "tag"(): $GuiMessageTag
}
}

declare module "packages/net/minecraft/client/$DebugQueryHandler" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $DebugQueryHandler {
constructor(clientPacketListener0: $ClientPacketListener$$Type)

public "handleResponse"(int0: integer, compoundTag1: $CompoundTag$$Type): boolean
public "queryBlockEntityTag"(blockPos0: $BlockPos$$Type, consumer1: $Consumer$$Type<$CompoundTag$$Type>): void
public "queryEntityTag"(int0: integer, consumer1: $Consumer$$Type<$CompoundTag$$Type>): void
}
}

declare module "packages/net/minecraft/client/$PrioritizeChunkUpdates" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"
import { $OptionEnum } from "packages/net/minecraft/util/$OptionEnum"

export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
static readonly "NEARBY": $PrioritizeChunkUpdates
static readonly "NONE": $PrioritizeChunkUpdates
static readonly "PLAYER_AFFECTED": $PrioritizeChunkUpdates

public static "byId"(int0: integer): $PrioritizeChunkUpdates
public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $PrioritizeChunkUpdates
public static "values"(): $PrioritizeChunkUpdates[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "packages/net/minecraft/client/$OptionInstance$CycleableValueSet$ValueSetter" {
import { $OptionInstance$$Type } from "packages/net/minecraft/client/$OptionInstance"

export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
"set"(optionInstance0: $OptionInstance$$Type<T>, t1: T): void
}

export namespace $OptionInstance$CycleableValueSet$ValueSetter {
const probejs$$marker: never
}
export abstract class $OptionInstance$CycleableValueSet$ValueSetter$$Static<T> implements $OptionInstance$CycleableValueSet$ValueSetter<T> {
}
}

declare module "packages/net/minecraft/client/$CameraType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $CameraType extends $Enum<$CameraType> {
static readonly "FIRST_PERSON": $CameraType
static readonly "THIRD_PERSON_BACK": $CameraType
static readonly "THIRD_PERSON_FRONT": $CameraType

public "cycle"(): $CameraType
public "isFirstPerson"(): boolean
public "isMirrored"(): boolean
public static "valueOf"(string0: string): $CameraType
public static "values"(): $CameraType[]
get "firstPerson"(): boolean
get "mirrored"(): boolean
}
}

declare module "packages/net/minecraft/client/$Options" {
import { $PlayerModelPart$$Type } from "packages/net/minecraft/world/entity/player/$PlayerModelPart"
import { $PackRepository$$Type } from "packages/net/minecraft/server/packs/repository/$PackRepository"
import { $HumanoidArm } from "packages/net/minecraft/world/entity/$HumanoidArm"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $PrioritizeChunkUpdates } from "packages/net/minecraft/client/$PrioritizeChunkUpdates"
import { $NarratorStatus } from "packages/net/minecraft/client/$NarratorStatus"
import { $AttackIndicatorStatus } from "packages/net/minecraft/client/$AttackIndicatorStatus"
import { $ChatVisiblity } from "packages/net/minecraft/world/entity/player/$ChatVisiblity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $OptionInstance } from "packages/net/minecraft/client/$OptionInstance"
import { $ParticleStatus } from "packages/net/minecraft/client/$ParticleStatus"
import { $KeyMapping, $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $TutorialSteps, $TutorialSteps$$Type } from "packages/net/minecraft/client/tutorial/$TutorialSteps"
import { $File, $File$$Type } from "packages/java/io/$File"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $OptionsDuck } from "packages/com/github/exopandora/shouldersurfing/mixinducks/$OptionsDuck"
import { $CloudStatus } from "packages/net/minecraft/client/$CloudStatus"
import { $CameraType, $CameraType$$Type } from "packages/net/minecraft/client/$CameraType"
import { $InputConstants$Key$$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"
import { $GraphicsStatus } from "packages/net/minecraft/client/$GraphicsStatus"

export class $Options implements $OptionsDuck {
static readonly "AUTO_GUI_SCALE": integer
static readonly "DEFAULT_SOUND_DEVICE": string
static readonly "RENDER_DISTANCE_EXTREME": integer
static readonly "RENDER_DISTANCE_FAR": integer
static readonly "RENDER_DISTANCE_NORMAL": integer
static readonly "RENDER_DISTANCE_REALLY_FAR": integer
static readonly "RENDER_DISTANCE_SHORT": integer
static readonly "RENDER_DISTANCE_TINY": integer
static readonly "UNLIMITED_FRAMERATE_CUTOFF": integer
readonly "forceUnicodeFont": $OptionInstance<boolean>
readonly "fullscreen": $OptionInstance<boolean>
readonly "keyAdvancements": $KeyMapping
readonly "keyAttack": $KeyMapping
readonly "keyChat": $KeyMapping
readonly "keyCommand": $KeyMapping
readonly "keyDown": $KeyMapping
readonly "keyDrop": $KeyMapping
readonly "keyFullscreen": $KeyMapping
readonly "keyHotbarSlots": $KeyMapping[]
readonly "keyInventory": $KeyMapping
readonly "keyJump": $KeyMapping
readonly "keyLeft": $KeyMapping
readonly "keyLoadHotbarActivator": $KeyMapping
readonly "keyPickItem": $KeyMapping
readonly "keyPlayerList": $KeyMapping
readonly "keyRight": $KeyMapping
readonly "keySaveHotbarActivator": $KeyMapping
readonly "keyScreenshot": $KeyMapping
readonly "keyShift": $KeyMapping
readonly "keySmoothCamera": $KeyMapping
readonly "keySocialInteractions": $KeyMapping
readonly "keySpectatorOutlines": $KeyMapping
readonly "keySprint": $KeyMapping
readonly "keySwapOffhand": $KeyMapping
readonly "keyTogglePerspective": $KeyMapping
readonly "keyUp": $KeyMapping
readonly "keyUse": $KeyMapping
"useNativeTransport": boolean

constructor(minecraft0: $Minecraft$$Type, file1: $File$$Type)

public "allowServerListing"(): $OptionInstance<boolean>
public "ambientOcclusion"(): $OptionInstance<boolean>
public "attackIndicator"(): $OptionInstance<$AttackIndicatorStatus>
public "autoJump"(): $OptionInstance<boolean>
public "autoSuggestions"(): $OptionInstance<boolean>
public "backgroundForChatOnly"(): $OptionInstance<boolean>
public "biomeBlendRadius"(): $OptionInstance<integer>
public "bobView"(): $OptionInstance<boolean>
public "broadcastOptions"(): void
public "chatColors"(): $OptionInstance<boolean>
public "chatDelay"(): $OptionInstance<double>
public "chatHeightFocused"(): $OptionInstance<double>
public "chatHeightUnfocused"(): $OptionInstance<double>
public "chatLineSpacing"(): $OptionInstance<double>
public "chatLinks"(): $OptionInstance<boolean>
public "chatLinksPrompt"(): $OptionInstance<boolean>
public "chatOpacity"(): $OptionInstance<double>
public "chatScale"(): $OptionInstance<double>
public "chatVisibility"(): $OptionInstance<$ChatVisiblity>
public "chatWidth"(): $OptionInstance<double>
public "cloudStatus"(): $OptionInstance<$CloudStatus>
public "damageTiltStrength"(): $OptionInstance<double>
public "darkMojangStudiosBackground"(): $OptionInstance<boolean>
public "darknessEffectScale"(): $OptionInstance<double>
public "directionalAudio"(): $OptionInstance<boolean>
public "discreteMouseScroll"(): $OptionInstance<boolean>
public "dumpOptionsForReport"(): string
public "enableVsync"(): $OptionInstance<boolean>
public "entityDistanceScaling"(): $OptionInstance<double>
public "entityShadows"(): $OptionInstance<boolean>
public "forceUnicodeFont"(): $OptionInstance<boolean>
public "fov"(): $OptionInstance<integer>
public "fovEffectScale"(): $OptionInstance<double>
public "framerateLimit"(): $OptionInstance<integer>
public "fullscreen"(): $OptionInstance<boolean>
public "gamma"(): $OptionInstance<double>
public static "genericValueLabel"(component0: $Component$$Type, int1: integer): $Component
public static "genericValueLabel"(component0: $Component$$Type, component1: $Component$$Type): $Component
public "getBackgroundColor"(float0: float): integer
public "getBackgroundColor"(int0: integer): integer
public "getBackgroundOpacity"(float0: float): float
public "getCameraType"(): $CameraType
public "getCloudsType"(): $CloudStatus
public "getEffectiveRenderDistance"(): integer
public "getFile"(): $File
public "getSoundSourceOptionInstance"(soundSource0: $SoundSource$$Type): $OptionInstance<double>
public "getSoundSourceVolume"(soundSource0: $SoundSource$$Type): float
public "glintSpeed"(): $OptionInstance<double>
public "glintStrength"(): $OptionInstance<double>
public "graphicsMode"(): $OptionInstance<$GraphicsStatus>
public "guiScale"(): $OptionInstance<integer>
public "handler$cdo000$setCameraType"(cameraType0: $CameraType$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fha000$onGetCameraType"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type<any>): void
public "hideLightningFlash"(): $OptionInstance<boolean>
public "hideMatchedNames"(): $OptionInstance<boolean>
public "highContrast"(): $OptionInstance<boolean>
public "invertYMouse"(): $OptionInstance<boolean>
public "isModelPartEnabled"(playerModelPart0: $PlayerModelPart$$Type): boolean
public "load"(boolean0: boolean): void
public "load"(): void
public "loadSelectedResourcePacks"(packRepository0: $PackRepository$$Type): void
public "mainHand"(): $OptionInstance<$HumanoidArm>
public "mipmapLevels"(): $OptionInstance<integer>
public "mouseWheelSensitivity"(): $OptionInstance<double>
public "narrator"(): $OptionInstance<$NarratorStatus>
public "notificationDisplayTime"(): $OptionInstance<double>
public "onlyShowSecureChat"(): $OptionInstance<boolean>
public "operatorItemsTab"(): $OptionInstance<boolean>
public "panoramaSpeed"(): $OptionInstance<double>
public "particles"(): $OptionInstance<$ParticleStatus>
public "prioritizeChunkUpdates"(): $OptionInstance<$PrioritizeChunkUpdates>
public "rawMouseInput"(): $OptionInstance<boolean>
public "realmsNotifications"(): $OptionInstance<boolean>
public "reducedDebugInfo"(): $OptionInstance<boolean>
public "renderDistance"(): $OptionInstance<integer>
public "save"(): void
public "screenEffectScale"(): $OptionInstance<double>
public "sensitivity"(): $OptionInstance<double>
public "setCameraType"(cameraType0: $CameraType$$Type): void
public "setKey"(keyMapping0: $KeyMapping$$Type, key1: $InputConstants$Key$$Type): void
public "setServerRenderDistance"(int0: integer): void
public "shouldersurfing$setCameraTypeDirect"(cameraType0: $CameraType$$Type): void
public "showAutosaveIndicator"(): $OptionInstance<boolean>
public "showSubtitles"(): $OptionInstance<boolean>
public "simulationDistance"(): $OptionInstance<integer>
public "soundDevice"(): $OptionInstance<string>
public "telemetryOptInExtra"(): $OptionInstance<boolean>
public "textBackgroundOpacity"(): $OptionInstance<double>
public "toggleCrouch"(): $OptionInstance<boolean>
public "toggleModelPart"(playerModelPart0: $PlayerModelPart$$Type, boolean1: boolean): void
public "toggleSprint"(): $OptionInstance<boolean>
public "touchscreen"(): $OptionInstance<boolean>
public "updateResourcePacks"(packRepository0: $PackRepository$$Type): void
public "useNativeTransport"(): boolean
get "advancedItemTooltips"(): boolean
set "advancedItemTooltips"(value: boolean)
get "cameraType"(): $CameraType
set "cameraType"(value: $CameraType$$Type)
get "fullscreenVideoModeString"(): string
set "fullscreenVideoModeString"(value: string)
get "glDebugVerbosity"(): integer
set "glDebugVerbosity"(value: integer)
get "hideBundleTutorial"(): boolean
set "hideBundleTutorial"(value: boolean)
get "hideGui"(): boolean
set "hideGui"(value: boolean)
get "hideServerAddress"(): boolean
set "hideServerAddress"(value: boolean)
get "incompatibleResourcePacks"(): $List<string>
set "incompatibleResourcePacks"(value: $List$$Type<string>)
get "joinedFirstServer"(): boolean
set "joinedFirstServer"(value: boolean)
get "keyMappings"(): $KeyMapping[]
set "keyMappings"(value: $KeyMapping$$Type[])
get "languageCode"(): string
set "languageCode"(value: string)
get "lastMpIp"(): string
set "lastMpIp"(value: string)
get "onboardAccessibility"(): boolean
set "onboardAccessibility"(value: boolean)
get "overrideHeight"(): integer
set "overrideHeight"(value: integer)
get "overrideWidth"(): integer
set "overrideWidth"(value: integer)
get "pauseOnLostFocus"(): boolean
set "pauseOnLostFocus"(value: boolean)
get "renderDebug"(): boolean
set "renderDebug"(value: boolean)
get "renderDebugCharts"(): boolean
set "renderDebugCharts"(value: boolean)
get "renderFpsChart"(): boolean
set "renderFpsChart"(value: boolean)
get "resourcePacks"(): $List<string>
set "resourcePacks"(value: $List$$Type<string>)
get "skipMultiplayerWarning"(): boolean
set "skipMultiplayerWarning"(value: boolean)
get "skipRealms32bitWarning"(): boolean
set "skipRealms32bitWarning"(value: boolean)
get "smoothCamera"(): boolean
set "smoothCamera"(value: boolean)
get "syncWrites"(): boolean
set "syncWrites"(value: boolean)
get "tutorialStep"(): $TutorialSteps
set "tutorialStep"(value: $TutorialSteps$$Type)
get "cloudsType"(): $CloudStatus
get "effectiveRenderDistance"(): integer
get "file"(): $File
set "serverRenderDistance"(value: integer)
}
}

declare module "packages/net/minecraft/client/$OptionInstance" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Options$$Type } from "packages/net/minecraft/client/$Options"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $OptionInstance$TooltipSupplier, $OptionInstance$TooltipSupplier$$Type } from "packages/net/minecraft/client/$OptionInstance$TooltipSupplier"
import { $OptionInstance$CaptionBasedToString, $OptionInstance$CaptionBasedToString$$Type } from "packages/net/minecraft/client/$OptionInstance$CaptionBasedToString"
import { $OptionInstance$ValueSet, $OptionInstance$ValueSet$$Type } from "packages/net/minecraft/client/$OptionInstance$ValueSet"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $OptionEnum, $OptionEnum$$Type } from "packages/net/minecraft/util/$OptionEnum"
import { $OptionInstance$Enum } from "packages/net/minecraft/client/$OptionInstance$Enum"

export class $OptionInstance<T> {
static readonly "BOOLEAN_TO_STRING": $OptionInstance$CaptionBasedToString<boolean>
static readonly "BOOLEAN_VALUES": $OptionInstance$Enum<boolean>

constructor(string0: string, tooltipSupplier1: $OptionInstance$TooltipSupplier$$Type<T>, captionBasedToString2: $OptionInstance$CaptionBasedToString$$Type<T>, valueSet3: $OptionInstance$ValueSet$$Type<T>, t4: T, consumer5: $Consumer$$Type<T>)
constructor(string0: string, tooltipSupplier1: $OptionInstance$TooltipSupplier$$Type<T>, captionBasedToString2: $OptionInstance$CaptionBasedToString$$Type<T>, valueSet3: $OptionInstance$ValueSet$$Type<T>, codec4: $Codec$$Type<T>, t5: T, consumer6: $Consumer$$Type<T>)

public static "cachedConstantTooltip"<T>(component0: $Component$$Type): $OptionInstance$TooltipSupplier<T>
public "codec"(): $Codec<T>
public static "createBoolean"(string0: string, tooltipSupplier1: $OptionInstance$TooltipSupplier$$Type<boolean>, boolean2: boolean): $OptionInstance<boolean>
public static "createBoolean"(string0: string, boolean1: boolean, consumer2: $Consumer$$Type<boolean>): $OptionInstance<boolean>
public static "createBoolean"(string0: string, tooltipSupplier1: $OptionInstance$TooltipSupplier$$Type<boolean>, boolean2: boolean, consumer3: $Consumer$$Type<boolean>): $OptionInstance<boolean>
public static "createBoolean"(string0: string, boolean1: boolean): $OptionInstance<boolean>
public static "createBoolean"(string0: string, tooltipSupplier1: $OptionInstance$TooltipSupplier$$Type<boolean>, captionBasedToString2: $OptionInstance$CaptionBasedToString$$Type<boolean>, boolean3: boolean, consumer4: $Consumer$$Type<boolean>): $OptionInstance<boolean>
public "createButton"(options0: $Options$$Type, int1: integer, int2: integer, int3: integer, consumer4: $Consumer$$Type<T>): $AbstractWidget
public "createButton"(options0: $Options$$Type, int1: integer, int2: integer, int3: integer): $AbstractWidget
public static "forOptionEnum"<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>
public "get"(): T
public static "noTooltip"<T>(): $OptionInstance$TooltipSupplier<T>
public "set"(t0: T): void
public "values"(): $OptionInstance$ValueSet<T>
}
}

declare module "packages/net/minecraft/client/$InputType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $InputType extends $Enum<$InputType> {
static readonly "KEYBOARD_ARROW": $InputType
static readonly "KEYBOARD_TAB": $InputType
static readonly "MOUSE": $InputType
static readonly "NONE": $InputType

public "isKeyboard"(): boolean
public "isMouse"(): boolean
public static "valueOf"(string0: string): $InputType
public static "values"(): $InputType[]
get "keyboard"(): boolean
get "mouse"(): boolean
}
}

declare module "packages/net/minecraft/client/$Realms32BitWarningStatus" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $Realms32BitWarningStatus {
constructor(minecraft0: $Minecraft$$Type)

public "showRealms32BitWarningIfNeeded"(screen0: $Screen$$Type): void
}
}

declare module "packages/net/minecraft/client/$AttackIndicatorStatus" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"
import { $OptionEnum } from "packages/net/minecraft/util/$OptionEnum"

export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
static readonly "CROSSHAIR": $AttackIndicatorStatus
static readonly "HOTBAR": $AttackIndicatorStatus
static readonly "OFF": $AttackIndicatorStatus

public static "byId"(int0: integer): $AttackIndicatorStatus
public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $AttackIndicatorStatus
public static "values"(): $AttackIndicatorStatus[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "packages/net/minecraft/client/$OptionInstance$CaptionBasedToString" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"

export interface $OptionInstance$CaptionBasedToString<T> {
"toString"(component0: $Component$$Type, t1: T): $Component
}

export namespace $OptionInstance$CaptionBasedToString {
const probejs$$marker: never
}
export abstract class $OptionInstance$CaptionBasedToString$$Static<T> implements $OptionInstance$CaptionBasedToString<T> {
}
}

declare module "packages/net/minecraft/client/$OptionInstance$CycleableValueSet" {
import { $OptionInstance } from "packages/net/minecraft/client/$OptionInstance"
import { $CycleButton$ValueListSupplier } from "packages/net/minecraft/client/gui/components/$CycleButton$ValueListSupplier"
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Function } from "packages/java/util/function/$Function"
import { $Options$$Type } from "packages/net/minecraft/client/$Options"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Optional } from "packages/java/util/$Optional"
import { $OptionInstance$TooltipSupplier$$Type } from "packages/net/minecraft/client/$OptionInstance$TooltipSupplier"
import { $OptionInstance$CycleableValueSet$ValueSetter } from "packages/net/minecraft/client/$OptionInstance$CycleableValueSet$ValueSetter"
import { $OptionInstance$ValueSet } from "packages/net/minecraft/client/$OptionInstance$ValueSet"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
"codec"(): $Codec<T>
"createButton"(tooltipSupplier0: $OptionInstance$TooltipSupplier$$Type<T>, options1: $Options$$Type, int2: integer, int3: integer, int4: integer, consumer5: $Consumer$$Type<T>): $Function<$OptionInstance<T>, $AbstractWidget>
"validateValue"(t0: T): $Optional<T>
"valueListSupplier"(): $CycleButton$ValueListSupplier<T>
"valueSetter"(): $OptionInstance$CycleableValueSet$ValueSetter<T>
}

export namespace $OptionInstance$CycleableValueSet {
const probejs$$marker: never
}
export abstract class $OptionInstance$CycleableValueSet$$Static<T> implements $OptionInstance$CycleableValueSet<T> {
}
}

declare module "packages/net/minecraft/client/$User$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $User$Type extends $Enum<$User$Type> {
static readonly "LEGACY": $User$Type
static readonly "MOJANG": $User$Type
static readonly "MSA": $User$Type

public static "byName"(string0: string): $User$Type
public "getName"(): string
public static "valueOf"(string0: string): $User$Type
public static "values"(): $User$Type[]
get "name"(): string
}
}

declare module "packages/net/minecraft/client/$StringSplitter$LinePosConsumer" {
import { $Style$$Type } from "packages/net/minecraft/network/chat/$Style"

export interface $StringSplitter$LinePosConsumer {
"accept"(style0: $Style$$Type, int1: integer, int2: integer): void
}

export namespace $StringSplitter$LinePosConsumer {
const probejs$$marker: never
}
export abstract class $StringSplitter$LinePosConsumer$$Static implements $StringSplitter$LinePosConsumer {
}
}

declare module "packages/net/minecraft/client/$Camera$NearPlane" {
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"

export class $Camera$NearPlane {
public "getBottomLeft"(): $Vec3
public "getBottomRight"(): $Vec3
public "getPointOnPlane"(float0: float, float1: float): $Vec3
public "getTopLeft"(): $Vec3
public "getTopRight"(): $Vec3
get "bottomLeft"(): $Vec3
get "bottomRight"(): $Vec3
get "topLeft"(): $Vec3
get "topRight"(): $Vec3
}
}

declare module "packages/net/minecraft/client/$GuiMessage" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $GuiMessageTag, $GuiMessageTag$$Type } from "packages/net/minecraft/client/$GuiMessageTag"
import { $MessageSignature, $MessageSignature$$Type } from "packages/net/minecraft/network/chat/$MessageSignature"

export class $GuiMessage extends $Record {
constructor(int0: integer, component1: $Component$$Type, messageSignature2: $MessageSignature$$Type, guiMessageTag3: $GuiMessageTag$$Type)

public "addedTime"(): integer
public "content"(): $Component
public "signature"(): $MessageSignature
public "tag"(): $GuiMessageTag
}
}

declare module "packages/net/minecraft/client/$GuiMessageTag" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $GuiMessageTag$Icon, $GuiMessageTag$Icon$$Type } from "packages/net/minecraft/client/$GuiMessageTag$Icon"

export class $GuiMessageTag extends $Record {
constructor(int0: integer, icon1: $GuiMessageTag$Icon$$Type, component2: $Component$$Type, string3: string)

public static "chatModified"(string0: string): $GuiMessageTag
public static "chatNotSecure"(): $GuiMessageTag
public "icon"(): $GuiMessageTag$Icon
public "indicatorColor"(): integer
public "logTag"(): string
public static "system"(): $GuiMessageTag
public static "systemSinglePlayer"(): $GuiMessageTag
public "text"(): $Component
}
}

declare module "packages/net/minecraft/client/$GameNarrator" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $NarratorStatus$$Type } from "packages/net/minecraft/client/$NarratorStatus"
import { $Narrator } from "packages/com/mojang/text2speech/$Narrator"

export class $GameNarrator {
static readonly "NO_TITLE": $Component
readonly "narrator": $Narrator

constructor(minecraft0: $Minecraft$$Type)

public "checkStatus"(boolean0: boolean): void
public "clear"(): void
public "destroy"(): void
public "isActive"(): boolean
public "say"(component0: $Component$$Type): void
public "sayChat"(component0: $Component$$Type): void
public "sayNow"(string0: string): void
public "sayNow"(component0: $Component$$Type): void
public "updateNarratorStatus"(narratorStatus0: $NarratorStatus$$Type): void
get "active"(): boolean
}
}

declare module "packages/net/minecraft/client/$Camera" {
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $BlockPos$MutableBlockPos } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $CameraAccessor } from "packages/dev/kosmx/playerAnim/mixin/firstPerson/$CameraAccessor"
import { $BlockGetter, $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $FogType } from "packages/net/minecraft/world/level/material/$FogType"
import { $CameraDuck } from "packages/com/github/exopandora/shouldersurfing/mixinducks/$CameraDuck"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $ViewportEvent$ComputeFogColor$$Type } from "packages/net/minecraftforge/client/event/$ViewportEvent$ComputeFogColor"
import { $Quaternionf } from "packages/org/joml/$Quaternionf"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Camera$NearPlane } from "packages/net/minecraft/client/$Camera$NearPlane"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $InkRenderingCamera } from "packages/plus/dragons/createenchantmentindustry/content/contraptions/fluids/ink/$InkRenderingCamera"

export class $Camera implements $CameraAccessor, $CameraDuck, $InkRenderingCamera {
static readonly "FOG_DISTANCE_SCALE": float
readonly "blockPosition": $BlockPos$MutableBlockPos

constructor()

public "getBlockAtCamera"(): $BlockState
public "getBlockPosition"(): $BlockPos
public "getEntity"(): $Entity
public "getFluidInCamera"(): $FogType
public "getLeftVector"(): $Vector3f
public "getLookVector"(): $Vector3f
public "getMaxZoom"(double0: double): double
public "getNearPlane"(): $Camera$NearPlane
public "getPosition"(): $Vec3
public "getUpVector"(): $Vector3f
public "getXRot"(): float
public "getYRot"(): float
public static "handleInkFogColor"(computeFogColor0: $ViewportEvent$ComputeFogColor$$Type): void
public "handler$cmf000$adastra$update"(area: $BlockGetter$$Type, focusedEntity: $Entity$$Type, thirdPerson: boolean, inverseView: boolean, tickDelta: float, ci: $CallbackInfo$$Type): void
public "handler$fam000$supplementaries$setupCannonCamera"(level: $BlockGetter$$Type, entity: $Entity$$Type, detached: boolean, thirdPersonReverse: boolean, partialTick: float, ci: $CallbackInfo$$Type): void
public "handler$zol000$injectCameraChanges"(blockGetter0: $BlockGetter$$Type, entity1: $Entity$$Type, boolean2: boolean, boolean3: boolean, float4: float, callbackInfo5: $CallbackInfo$$Type): void
public "isDetached"(): boolean
public "isInInk"(): boolean
public "isInitialized"(): boolean
public "move"(double0: double, double1: double, double2: double): void
public "reset"(): void
public "rotation"(): $Quaternionf
public "setAnglesInternal"(float0: float, float1: float): void
public "setPosition"(vec30: $Vec3$$Type): void
public "setRotation"(float0: float, float1: float): void
public "setup"(blockGetter0: $BlockGetter$$Type, entity1: $Entity$$Type, boolean2: boolean, boolean3: boolean, float4: float): void
public "shouldersurfing$getZRot"(): float
public "shouldersurfing$setZRot"(float0: float): void
public "tick"(): void
get "level"(): $BlockGetter
set "level"(value: $BlockGetter$$Type)
get "blockAtCamera"(): $BlockState
get "entity"(): $Entity
get "fluidInCamera"(): $FogType
get "leftVector"(): $Vector3f
get "lookVector"(): $Vector3f
get "nearPlane"(): $Camera$NearPlane
get "position"(): $Vec3
get "upVector"(): $Vector3f
get "xRot"(): float
get "yRot"(): float
get "detached"(): boolean
get "inInk"(): boolean
get "initialized"(): boolean
set "position"(value: $Vec3$$Type)
}
}

declare module "packages/net/minecraft/client/$GraphicsStatus" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"
import { $OptionEnum } from "packages/net/minecraft/util/$OptionEnum"

export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
static readonly "FABULOUS": $GraphicsStatus
static readonly "FANCY": $GraphicsStatus
static readonly "FAST": $GraphicsStatus

public static "byId"(int0: integer): $GraphicsStatus
public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $GraphicsStatus
public static "values"(): $GraphicsStatus[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "packages/net/minecraft/client/$User" {
import { $UUID } from "packages/java/util/$UUID"
import { $PropertyMap$$Type } from "packages/com/mojang/authlib/properties/$PropertyMap"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $User$Type, $User$Type$$Type } from "packages/net/minecraft/client/$User$Type"

export class $User {
constructor(string0: string, string1: string, string2: string, optional3: $Optional$$Type<string>, optional4: $Optional$$Type<string>, type5: $User$Type$$Type)

public "getAccessToken"(): string
public "getClientId"(): $Optional<string>
public "getGameProfile"(): $GameProfile
public "getName"(): string
public "getProfileId"(): $UUID
public "getSessionId"(): string
public "getType"(): $User$Type
public "getUuid"(): string
public "getXuid"(): $Optional<string>
public "hasCachedProperties"(): boolean
public "setProperties"(propertyMap0: $PropertyMap$$Type): void
get "accessToken"(): string
get "clientId"(): $Optional<string>
get "gameProfile"(): $GameProfile
get "name"(): string
get "profileId"(): $UUID
get "sessionId"(): string
get "type"(): $User$Type
get "uuid"(): string
get "xuid"(): $Optional<string>
set "properties"(value: $PropertyMap$$Type)
}
}

declare module "packages/net/minecraft/client/$CloudStatus" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"
import { $OptionEnum } from "packages/net/minecraft/util/$OptionEnum"

export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum {
static readonly "FANCY": $CloudStatus
static readonly "FAST": $CloudStatus
static readonly "OFF": $CloudStatus

public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $CloudStatus
public static "values"(): $CloudStatus[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "packages/net/minecraft/client/$GuiMessageTag$Icon" {
import { $Enum } from "packages/java/lang/$Enum"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
static readonly "CHAT_MODIFIED": $GuiMessageTag$Icon
readonly "height": integer
readonly "u": integer
readonly "v": integer
readonly "width": integer

public "draw"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): void
public static "valueOf"(string0: string): $GuiMessageTag$Icon
public static "values"(): $GuiMessageTag$Icon[]
}
}

declare module "packages/net/minecraft/client/$ClientRecipeBook" {
import { $RecipeCollection } from "packages/net/minecraft/client/gui/screens/recipebook/$RecipeCollection"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $List } from "packages/java/util/$List"
import { $RecipeBook } from "packages/net/minecraft/stats/$RecipeBook"
import { $RecipeBookCategories$$Type } from "packages/net/minecraft/client/$RecipeBookCategories"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ClientRecipeBook extends $RecipeBook {
constructor()

public "getCollection"(recipeBookCategories0: $RecipeBookCategories$$Type): $List<$RecipeCollection>
public "getCollections"(): $List<$RecipeCollection>
public "setupCollections"(iterable0: $Iterable$$Type<$Recipe$$Type<any>>, registryAccess1: $RegistryAccess$$Type): void
get "collections"(): $List<$RecipeCollection>
}
}

declare module "packages/net/minecraft/client/$ParticleStatus" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"
import { $OptionEnum } from "packages/net/minecraft/util/$OptionEnum"

export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
static readonly "ALL": $ParticleStatus
static readonly "DECREASED": $ParticleStatus
static readonly "MINIMAL": $ParticleStatus

public static "byId"(int0: integer): $ParticleStatus
public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $ParticleStatus
public static "values"(): $ParticleStatus[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "packages/net/minecraft/client/$Minecraft$ChatStatus" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
static readonly "DISABLED_BY_LAUNCHER": $Minecraft$ChatStatus
static readonly "DISABLED_BY_OPTIONS": $Minecraft$ChatStatus
static readonly "DISABLED_BY_PROFILE": $Minecraft$ChatStatus
static readonly "ENABLED": $Minecraft$ChatStatus

public "getMessage"(): $Component
public "isChatAllowed"(boolean0: boolean): boolean
public static "valueOf"(string0: string): $Minecraft$ChatStatus
public static "values"(): $Minecraft$ChatStatus[]
get "message"(): $Component
}
}

declare module "packages/net/minecraft/client/$KeyboardHandler" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"

export class $KeyboardHandler {
static readonly "DEBUG_CRASH_TIME": integer

constructor(minecraft0: $Minecraft$$Type)

public "getClipboard"(): string
public "handler$dpn000$redirect$handleFullScreenToggle"(long0: long, int1: integer, int2: integer, int3: integer, int4: integer, callbackInfo5: $CallbackInfo$$Type): void
public "keyPress"(long0: long, int1: integer, int2: integer, int3: integer, int4: integer): void
public "setClipboard"(string0: string): void
public "setup"(long0: long): void
public "tick"(): void
get "clipboard"(): string
set "clipboard"(value: string)
set "up"(value: long)
}
}

declare module "packages/net/minecraft/client/$NarratorStatus" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $NarratorStatus extends $Enum<$NarratorStatus> {
static readonly "ALL": $NarratorStatus
static readonly "CHAT": $NarratorStatus
static readonly "OFF": $NarratorStatus
static readonly "SYSTEM": $NarratorStatus

public static "byId"(int0: integer): $NarratorStatus
public "getId"(): integer
public "getName"(): $Component
public "shouldNarrateChat"(): boolean
public "shouldNarrateSystem"(): boolean
public static "valueOf"(string0: string): $NarratorStatus
public static "values"(): $NarratorStatus[]
get "id"(): integer
get "name"(): $Component
}
}

declare module "packages/net/minecraft/client/$OptionInstance$Enum" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $OptionInstance } from "packages/net/minecraft/client/$OptionInstance"
import { $CycleButton$ValueListSupplier } from "packages/net/minecraft/client/gui/components/$CycleButton$ValueListSupplier"
import { $Function } from "packages/java/util/function/$Function"
import { $Options$$Type } from "packages/net/minecraft/client/$Options"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Record } from "packages/java/lang/$Record"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $OptionInstance$TooltipSupplier$$Type } from "packages/net/minecraft/client/$OptionInstance$TooltipSupplier"
import { $OptionInstance$CycleableValueSet } from "packages/net/minecraft/client/$OptionInstance$CycleableValueSet"
import { $OptionInstance$CycleableValueSet$ValueSetter } from "packages/net/minecraft/client/$OptionInstance$CycleableValueSet$ValueSetter"

export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
constructor(list0: $List$$Type<T>, codec1: $Codec$$Type<T>)

public "codec"(): $Codec<T>
public "createButton"(tooltipSupplier0: $OptionInstance$TooltipSupplier$$Type<T>, options1: $Options$$Type, int2: integer, int3: integer, int4: integer, consumer5: $Consumer$$Type<T>): $Function<$OptionInstance<T>, $AbstractWidget>
public "validateValue"(t0: T): $Optional<T>
public "valueListSupplier"(): $CycleButton$ValueListSupplier<T>
public "valueSetter"(): $OptionInstance$CycleableValueSet$ValueSetter<T>
public "values"(): $List<T>
}
}

declare module "packages/net/minecraft/client/$StringSplitter" {
import { $FormattedCharSequence$$Type } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $StringSplitter$LinePosConsumer$$Type } from "packages/net/minecraft/client/$StringSplitter$LinePosConsumer"
import { $FormattedText, $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $List } from "packages/java/util/$List"
import { $StringSplitterAccessor } from "packages/team/creative/creativecore/mixin/$StringSplitterAccessor"
import { $StringSplitter$WidthProvider$$Type } from "packages/net/minecraft/client/$StringSplitter$WidthProvider"
import { $Style, $Style$$Type } from "packages/net/minecraft/network/chat/$Style"

export class $StringSplitter implements $StringSplitterAccessor {
constructor(widthProvider0: $StringSplitter$WidthProvider$$Type)

public "componentStyleAtWidth"(formattedCharSequence0: $FormattedCharSequence$$Type, int1: integer): $Style
public "componentStyleAtWidth"(formattedText0: $FormattedText$$Type, int1: integer): $Style
public "findLineBreak"(string0: string, int1: integer, style2: $Style$$Type): integer
public "formattedHeadByWidth"(string0: string, int1: integer, style2: $Style$$Type): string
public "formattedIndexByWidth"(string0: string, int1: integer, style2: $Style$$Type): integer
public static "getWordPosition"(string0: string, int1: integer, int2: integer, boolean3: boolean): integer
public "headByWidth"(formattedText0: $FormattedText$$Type, int1: integer, style2: $Style$$Type): $FormattedText
public "plainHeadByWidth"(string0: string, int1: integer, style2: $Style$$Type): string
public "plainIndexAtWidth"(string0: string, int1: integer, style2: $Style$$Type): integer
public "plainTailByWidth"(string0: string, int1: integer, style2: $Style$$Type): string
public "splitLines"(formattedText0: $FormattedText$$Type, int1: integer, style2: $Style$$Type): $List<$FormattedText>
public "splitLines"(formattedText0: $FormattedText$$Type, int1: integer, style2: $Style$$Type, formattedText3: $FormattedText$$Type): $List<$FormattedText>
public "splitLines"(formattedText0: $FormattedText$$Type, int1: integer, style2: $Style$$Type, biConsumer3: $BiConsumer$$Type<$FormattedText$$Type, boolean>): void
public "splitLines"(string0: string, int1: integer, style2: $Style$$Type): $List<$FormattedText>
public "splitLines"(string0: string, int1: integer, style2: $Style$$Type, boolean3: boolean, linePosConsumer4: $StringSplitter$LinePosConsumer$$Type): void
public "stringWidth"(formattedText0: $FormattedText$$Type): float
public "stringWidth"(string0: string): float
public "stringWidth"(formattedCharSequence0: $FormattedCharSequence$$Type): float
}
}

declare module "packages/net/minecraft/client/$ToggleKeyMapping" {
import { $KeyMapping, $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $BooleanSupplier$$Type } from "packages/java/util/function/$BooleanSupplier"
import { $InputConstants$Key$$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export class $ToggleKeyMapping extends $KeyMapping {
constructor(string0: string, int1: integer, string2: string, booleanSupplier3: $BooleanSupplier$$Type)

public "hasKeyModifierConflict"(keyMapping0: $KeyMapping$$Type): boolean
public "isActiveAndMatches"(key0: $InputConstants$Key$$Type): boolean
public "isConflictContextAndModifierActive"(): boolean
public "setToDefault"(): void
get "conflictContextAndModifierActive"(): boolean
}
}

declare module "packages/net/minecraft/client/$OptionInstance$TooltipSupplier" {
import { $Tooltip } from "packages/net/minecraft/client/gui/components/$Tooltip"

export interface $OptionInstance$TooltipSupplier<T> {
"apply"(t0: T): $Tooltip
}

export namespace $OptionInstance$TooltipSupplier {
const probejs$$marker: never
}
export abstract class $OptionInstance$TooltipSupplier$$Static<T> implements $OptionInstance$TooltipSupplier<T> {
}
}

declare module "packages/net/minecraft/client/$OptionInstance$ValueSet" {
import { $OptionInstance } from "packages/net/minecraft/client/$OptionInstance"
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Function } from "packages/java/util/function/$Function"
import { $Options$$Type } from "packages/net/minecraft/client/$Options"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Optional } from "packages/java/util/$Optional"
import { $OptionInstance$TooltipSupplier$$Type } from "packages/net/minecraft/client/$OptionInstance$TooltipSupplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $OptionInstance$ValueSet<T> {
"codec"(): $Codec<T>
"createButton"(tooltipSupplier0: $OptionInstance$TooltipSupplier$$Type<T>, options1: $Options$$Type, int2: integer, int3: integer, int4: integer, consumer5: $Consumer$$Type<T>): $Function<$OptionInstance<T>, $AbstractWidget>
"validateValue"(t0: T): $Optional<T>
}

export namespace $OptionInstance$ValueSet {
const probejs$$marker: never
}
export abstract class $OptionInstance$ValueSet$$Static<T> implements $OptionInstance$ValueSet<T> {
}
}

declare module "packages/net/minecraft/client/$MouseHandler" {
import { $MouseHandlerAccessor } from "packages/com/simibubi/create/foundation/mixin/accessor/$MouseHandlerAccessor"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $MouseHandlerAccessor as $MouseHandlerAccessor$0 } from "packages/team/creative/creativecore/mixin/$MouseHandlerAccessor"
import { $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "packages/net/blay09/mods/balm/mixin/$MouseHandlerAccessor"

export class $MouseHandler implements $MouseHandlerAccessor$1, $MouseHandlerAccessor$0, $MouseHandlerAccessor {
constructor(minecraft0: $Minecraft$$Type)

public "cursorEntered"(): void
public "getXVelocity"(): double
public "getYVelocity"(): double
public "grabMouse"(): void
public "handler$cni000$turnPlayer"(callbackInfo0: $CallbackInfo$$Type): void
public "isLeftPressed"(): boolean
public "isMiddlePressed"(): boolean
public "isMouseGrabbed"(): boolean
public "isRightPressed"(): boolean
public "releaseMouse"(): void
public "setIgnoreFirstMove"(): void
public "setup"(long0: long): void
public "turnPlayer"(): void
public "xpos"(): double
public "ypos"(): double
get "xVelocity"(): double
get "yVelocity"(): double
get "leftPressed"(): boolean
get "middlePressed"(): boolean
get "mouseGrabbed"(): boolean
get "rightPressed"(): boolean
set "up"(value: long)
}
}

declare module "packages/net/minecraft/client/$StringSplitter$WidthProvider" {
import { $Style$$Type } from "packages/net/minecraft/network/chat/$Style"

export interface $StringSplitter$WidthProvider {
"getWidth"(int0: integer, style1: $Style$$Type): float
}

export namespace $StringSplitter$WidthProvider {
const probejs$$marker: never
}
export abstract class $StringSplitter$WidthProvider$$Static implements $StringSplitter$WidthProvider {
}
}

declare module "packages/net/minecraft/client/$HotbarManager" {
import { $Hotbar } from "packages/net/minecraft/client/player/inventory/$Hotbar"
import { $File$$Type } from "packages/java/io/$File"
import { $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"

export class $HotbarManager {
static readonly "NUM_HOTBAR_GROUPS": integer

constructor(file0: $File$$Type, dataFixer1: $DataFixer$$Type)

public "get"(int0: integer): $Hotbar
public "save"(): void
}
}

declare module "packages/net/minecraft/client/$Timer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Timer {
constructor(float0: float, long1: long)

public "advanceTime"(long0: long): integer
get "msPerTick"(): float
set "msPerTick"(value: float)
get "partialTick"(): float
set "partialTick"(value: float)
get "tickDelta"(): float
set "tickDelta"(value: float)
}
}

