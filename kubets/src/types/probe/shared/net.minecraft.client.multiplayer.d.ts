declare module "packages/net/minecraft/client/multiplayer/$ServerData" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ExtendedServerListData, $ExtendedServerListData$$Type } from "packages/net/minecraftforge/client/$ExtendedServerListData"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ServerData$ServerPackStatus, $ServerData$ServerPackStatus$$Type } from "packages/net/minecraft/client/multiplayer/$ServerData$ServerPackStatus"
import { $ServerStatus$Players, $ServerStatus$Players$$Type } from "packages/net/minecraft/network/protocol/status/$ServerStatus$Players"

export class $ServerData {
constructor(string0: string, string1: string, boolean2: boolean)

public "copyFrom"(serverData0: $ServerData$$Type): void
public "copyNameIconFrom"(serverData0: $ServerData$$Type): void
public "enforcesSecureChat"(): boolean
public "getIconBytes"(): byte[]
public "getResourcePackStatus"(): $ServerData$ServerPackStatus
public "isLan"(): boolean
public static "read"(compoundTag0: $CompoundTag$$Type): $ServerData
public "setEnforcesSecureChat"(boolean0: boolean): void
public "setIconBytes"(byte0s: byte[]): void
public "setResourcePackStatus"(serverPackStatus0: $ServerData$ServerPackStatus$$Type): void
public "write"(): $CompoundTag
get "forgeData"(): $ExtendedServerListData
set "forgeData"(value: $ExtendedServerListData$$Type)
get "ip"(): string
set "ip"(value: string)
get "motd"(): $Component
set "motd"(value: $Component$$Type)
get "name"(): string
set "name"(value: string)
get "ping"(): long
set "ping"(value: long)
get "pinged"(): boolean
set "pinged"(value: boolean)
get "playerList"(): $List<$Component>
set "playerList"(value: $List$$Type<$Component$$Type>)
get "players"(): $ServerStatus$Players
set "players"(value: $ServerStatus$Players$$Type)
get "protocol"(): integer
set "protocol"(value: integer)
get "status"(): $Component
set "status"(value: $Component$$Type)
get "version"(): $Component
set "version"(value: $Component$$Type)
get "iconBytes"(): byte[]
get "resourcePackStatus"(): $ServerData$ServerPackStatus
get "lan"(): boolean
set "iconBytes"(value: byte[])
set "resourcePackStatus"(value: $ServerData$ServerPackStatus$$Type)
}
}

declare module "packages/net/minecraft/client/multiplayer/$PlayerInfo" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $RemoteChatSession } from "packages/net/minecraft/network/chat/$RemoteChatSession"
import { $MinecraftProfileTexture$Type } from "packages/com/mojang/authlib/minecraft/$MinecraftProfileTexture$Type"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GameType } from "packages/net/minecraft/world/level/$GameType"
import { $SignedMessageValidator } from "packages/net/minecraft/network/chat/$SignedMessageValidator"
import { $Map } from "packages/java/util/$Map"
import { $PlayerTeam } from "packages/net/minecraft/world/scores/$PlayerTeam"

export class $PlayerInfo {
readonly "textureLocations": $Map<$MinecraftProfileTexture$Type, $ResourceLocation>

constructor(gameProfile0: $GameProfile$$Type, boolean1: boolean)

public "getCapeLocation"(): $ResourceLocation
public "getChatSession"(): $RemoteChatSession
public "getElytraLocation"(): $ResourceLocation
public "getGameMode"(): $GameType
public "getLatency"(): integer
public "getMessageValidator"(): $SignedMessageValidator
public "getModelName"(): string
public "getProfile"(): $GameProfile
public "getSkinLocation"(): $ResourceLocation
public "getTabListDisplayName"(): $Component
public "getTeam"(): $PlayerTeam
public "hasVerifiableChat"(): boolean
public "isCapeLoaded"(): boolean
public "isSkinLoaded"(): boolean
public "setTabListDisplayName"(component0: $Component$$Type): void
get "capeLocation"(): $ResourceLocation
get "chatSession"(): $RemoteChatSession
get "elytraLocation"(): $ResourceLocation
get "gameMode"(): $GameType
get "latency"(): integer
get "messageValidator"(): $SignedMessageValidator
get "modelName"(): string
get "profile"(): $GameProfile
get "skinLocation"(): $ResourceLocation
get "tabListDisplayName"(): $Component
get "team"(): $PlayerTeam
get "capeLoaded"(): boolean
get "skinLoaded"(): boolean
set "tabListDisplayName"(value: $Component$$Type)
}
}

declare module "packages/net/minecraft/client/multiplayer/$ClientAdvancements$Listener" {
import { $Advancement$$Type } from "packages/net/minecraft/advancements/$Advancement"
import { $AdvancementProgress$$Type } from "packages/net/minecraft/advancements/$AdvancementProgress"
import { $AdvancementList$Listener } from "packages/net/minecraft/advancements/$AdvancementList$Listener"

export interface $ClientAdvancements$Listener extends $AdvancementList$Listener {
"onAddAdvancementRoot"(advancement0: $Advancement$$Type): void
"onAddAdvancementTask"(advancement0: $Advancement$$Type): void
"onAdvancementsCleared"(): void
"onRemoveAdvancementRoot"(advancement0: $Advancement$$Type): void
"onRemoveAdvancementTask"(advancement0: $Advancement$$Type): void
"onSelectedTabChanged"(advancement0: $Advancement$$Type): void
"onUpdateAdvancementProgress"(advancement0: $Advancement$$Type, advancementProgress1: $AdvancementProgress$$Type): void
}

export namespace $ClientAdvancements$Listener {
const probejs$$marker: never
}
export abstract class $ClientAdvancements$Listener$$Static implements $ClientAdvancements$Listener {
}
}

declare module "packages/net/minecraft/client/multiplayer/$ClientSuggestionProvider" {
import { $Suggestions, $Suggestions$$Type } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type } from "packages/net/minecraft/commands/$SharedSuggestionProvider$TextCoordinates"
import { $FeatureFlagSet } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List$$Type } from "packages/java/util/$List"
import { $Stream, $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $SuggestionsBuilder$$Type } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $SharedSuggestionProvider$ElementSuggestionType$$Type } from "packages/net/minecraft/commands/$SharedSuggestionProvider$ElementSuggestionType"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"
import { $ClientboundCustomChatCompletionsPacket$Action$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundCustomChatCompletionsPacket$Action"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $RegistryAccess } from "packages/net/minecraft/core/$RegistryAccess"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $Set } from "packages/java/util/$Set"
import { $Message } from "packages/com/mojang/brigadier/$Message"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $SharedSuggestionProvider } from "packages/net/minecraft/commands/$SharedSuggestionProvider"

export class $ClientSuggestionProvider implements $SharedSuggestionProvider {
constructor(clientPacketListener0: $ClientPacketListener$$Type, minecraft1: $Minecraft$$Type)

public "completeCustomSuggestions"(int0: integer, suggestions1: $Suggestions$$Type): void
public "customSuggestion"(commandContext0: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
public "enabledFeatures"(): $FeatureFlagSet
public static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
public static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, function2: $Function$$Type<T, $ResourceLocation>, consumer3: $Consumer$$Type<T>): void
public "getAbsoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
public "getAllTeams"(): $Collection<string>
public "getAvailableSounds"(): $Stream<$ResourceLocation>
public "getCustomTabSugggestions"(): $Collection<string>
public "getOnlinePlayerNames"(): $Collection<string>
public "getRecipeNames"(): $Stream<$ResourceLocation>
public "getRelevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
public "getSelectedEntities"(): $Collection<string>
public "hasPermission"(int0: integer): boolean
public "levels"(): $Set<$ResourceKey<$Level>>
public static "matchesSubStr"(string0: string, string1: string): boolean
public "modifyCustomCompletions"(action0: $ClientboundCustomChatCompletionsPacket$Action$$Type, list1: $List$$Type<string>): void
public "registryAccess"(): $RegistryAccess
public static "suggest"(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggest"(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest"(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest2DCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
public static "suggestCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
public "suggestRegistryElements"(resourceKey0: $ResourceKey$$Type<$Registry<any>>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type, commandContext3: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
public "suggestRegistryElements"(registry0: $Registry$$Type<any>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type): void
public static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggestResource"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggestResource"<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
public static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
public static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
get "absoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "allTeams"(): $Collection<string>
get "availableSounds"(): $Stream<$ResourceLocation>
get "customTabSugggestions"(): $Collection<string>
get "onlinePlayerNames"(): $Collection<string>
get "recipeNames"(): $Stream<$ResourceLocation>
get "relevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "selectedEntities"(): $Collection<string>
}
}

declare module "packages/net/minecraft/client/multiplayer/chat/report/$AbuseReportSender" {
import { $AbuseReport$$Type } from "packages/com/mojang/authlib/minecraft/report/$AbuseReport"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $UserApiService$$Type } from "packages/com/mojang/authlib/minecraft/$UserApiService"
import { $ReportEnvironment$$Type } from "packages/net/minecraft/client/multiplayer/chat/report/$ReportEnvironment"
import { $AbuseReportLimits } from "packages/com/mojang/authlib/minecraft/report/$AbuseReportLimits"
import { $Unit } from "packages/com/mojang/datafixers/util/$Unit"

export interface $AbuseReportSender {
"isEnabled"(): boolean
"reportLimits"(): $AbuseReportLimits
"send"(uUID0: $UUID$$Type, abuseReport1: $AbuseReport$$Type): $CompletableFuture<$Unit>
get "enabled"(): boolean
}

export namespace $AbuseReportSender {
function create(reportEnvironment0: $ReportEnvironment$$Type, userApiService1: $UserApiService$$Type): $AbuseReportSender
}
export abstract class $AbuseReportSender$$Static implements $AbuseReportSender {
static "create"(reportEnvironment0: $ReportEnvironment$$Type, userApiService1: $UserApiService$$Type): $AbuseReportSender
}
}

declare module "packages/net/minecraft/client/multiplayer/$ClientLevel$ClientLevelData" {
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $WritableLevelData } from "packages/net/minecraft/world/level/storage/$WritableLevelData"
import { $Difficulty, $Difficulty$$Type } from "packages/net/minecraft/world/$Difficulty"
import { $GameRules } from "packages/net/minecraft/world/level/$GameRules"
import { $CrashReportCategory$$Type } from "packages/net/minecraft/$CrashReportCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $SkyblockWorldInfo } from "packages/vazkii/botania/client/core/$SkyblockWorldInfo"

export class $ClientLevel$ClientLevelData implements $WritableLevelData, $SkyblockWorldInfo {
constructor(difficulty0: $Difficulty$$Type, boolean1: boolean, boolean2: boolean)

public "fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type): void
public "getClearColorScale"(): float
public "getDayTime"(): long
public "getDifficulty"(): $Difficulty
public "getGameRules"(): $GameRules
public "getGameTime"(): long
public "getHorizonHeight"(levelHeightAccessor0: $LevelHeightAccessor$$Type): double
public "getSpawnAngle"(): float
public "getXSpawn"(): integer
public "getYSpawn"(): integer
public "getZSpawn"(): integer
public "isDifficultyLocked"(): boolean
public "isGardenOfGlass"(): boolean
public "isHardcore"(): boolean
public "isRaining"(): boolean
public "isThundering"(): boolean
public "markGardenOfGlass"(): void
public "setDayTime"(long0: long): void
public "setDifficulty"(difficulty0: $Difficulty$$Type): void
public "setDifficultyLocked"(boolean0: boolean): void
public "setGameTime"(long0: long): void
public "setRaining"(boolean0: boolean): void
public "setSpawn"(blockPos0: $BlockPos$$Type, float1: float): void
public "setSpawnAngle"(float0: float): void
public "setXSpawn"(int0: integer): void
public "setYSpawn"(int0: integer): void
public "setZSpawn"(int0: integer): void
get "clearColorScale"(): float
get "dayTime"(): long
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameTime"(): long
get "spawnAngle"(): float
get "xSpawn"(): integer
get "ySpawn"(): integer
get "zSpawn"(): integer
get "difficultyLocked"(): boolean
get "gardenOfGlass"(): boolean
get "hardcore"(): boolean
get "raining"(): boolean
get "thundering"(): boolean
set "dayTime"(value: long)
set "difficulty"(value: $Difficulty$$Type)
set "difficultyLocked"(value: boolean)
set "gameTime"(value: long)
set "raining"(value: boolean)
set "spawnAngle"(value: float)
set "xSpawn"(value: integer)
set "ySpawn"(value: integer)
set "zSpawn"(value: integer)
}
}

declare module "packages/net/minecraft/client/multiplayer/$ProfileKeyPairManager" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Optional } from "packages/java/util/$Optional"
import { $User$$Type } from "packages/net/minecraft/client/$User"
import { $UserApiService$$Type } from "packages/com/mojang/authlib/minecraft/$UserApiService"
import { $ProfileKeyPair } from "packages/net/minecraft/world/entity/player/$ProfileKeyPair"

export interface $ProfileKeyPairManager {
"prepareKeyPair"(): $CompletableFuture<$Optional<$ProfileKeyPair>>
"shouldRefreshKeyPair"(): boolean
}

export namespace $ProfileKeyPairManager {
const EMPTY_KEY_MANAGER: $ProfileKeyPairManager
function create(userApiService0: $UserApiService$$Type, user1: $User$$Type, path2: $Path$$Type): $ProfileKeyPairManager
}
export abstract class $ProfileKeyPairManager$$Static implements $ProfileKeyPairManager {
static readonly "EMPTY_KEY_MANAGER": $ProfileKeyPairManager

static "create"(userApiService0: $UserApiService$$Type, user1: $User$$Type, path2: $Path$$Type): $ProfileKeyPairManager
}
}

declare module "packages/net/minecraft/client/multiplayer/chat/report/$ReportingContext" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $ChatReportBuilder$ChatReport$$Type } from "packages/net/minecraft/client/multiplayer/chat/report/$ChatReportBuilder$ChatReport"
import { $ChatLog, $ChatLog$$Type } from "packages/net/minecraft/client/multiplayer/chat/$ChatLog"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $UserApiService$$Type } from "packages/com/mojang/authlib/minecraft/$UserApiService"
import { $ReportEnvironment$$Type } from "packages/net/minecraft/client/multiplayer/chat/report/$ReportEnvironment"
import { $AbuseReportSender, $AbuseReportSender$$Type } from "packages/net/minecraft/client/multiplayer/chat/report/$AbuseReportSender"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $ReportingContext {
constructor(abuseReportSender0: $AbuseReportSender$$Type, reportEnvironment1: $ReportEnvironment$$Type, chatLog2: $ChatLog$$Type)

public "chatLog"(): $ChatLog
public static "create"(reportEnvironment0: $ReportEnvironment$$Type, userApiService1: $UserApiService$$Type): $ReportingContext
public "draftReportHandled"(minecraft0: $Minecraft$$Type, screen1: $Screen$$Type, runnable2: $Runnable$$Type, boolean3: boolean): void
public "hasDraftReport"(): boolean
public "hasDraftReportFor"(uUID0: $UUID$$Type): boolean
public "matches"(reportEnvironment0: $ReportEnvironment$$Type): boolean
public "sender"(): $AbuseReportSender
public "setChatReportDraft"(chatReport0: $ChatReportBuilder$ChatReport$$Type): void
set "chatReportDraft"(value: $ChatReportBuilder$ChatReport$$Type)
}
}

declare module "packages/net/minecraft/client/multiplayer/chat/$LoggedChatEvent$Type" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $LoggedChatEvent$Type extends $Enum<$LoggedChatEvent$Type> implements $StringRepresentable {
static readonly "PLAYER": $LoggedChatEvent$Type
static readonly "SYSTEM": $LoggedChatEvent$Type

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $LoggedChatEvent$Type
public static "values"(): $LoggedChatEvent$Type[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/client/multiplayer/chat/report/$ReportEnvironment" {
import { $AbuseReportRequest$ClientInfo } from "packages/com/mojang/authlib/yggdrasil/request/$AbuseReportRequest$ClientInfo"
import { $AbuseReportRequest$RealmInfo } from "packages/com/mojang/authlib/yggdrasil/request/$AbuseReportRequest$RealmInfo"
import { $Record } from "packages/java/lang/$Record"
import { $ReportEnvironment$Server, $ReportEnvironment$Server$$Type } from "packages/net/minecraft/client/multiplayer/chat/report/$ReportEnvironment$Server"
import { $RealmsServer$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsServer"
import { $AbuseReportRequest$ThirdPartyServerInfo } from "packages/com/mojang/authlib/yggdrasil/request/$AbuseReportRequest$ThirdPartyServerInfo"

export class $ReportEnvironment extends $Record {
constructor(string0: string, server1: $ReportEnvironment$Server$$Type)

public "clientInfo"(): $AbuseReportRequest$ClientInfo
public "clientVersion"(): string
public static "create"(server0: $ReportEnvironment$Server$$Type): $ReportEnvironment
public static "local"(): $ReportEnvironment
public static "realm"(realmsServer0: $RealmsServer$$Type): $ReportEnvironment
public "realmInfo"(): $AbuseReportRequest$RealmInfo
public "server"(): $ReportEnvironment$Server
public static "thirdParty"(string0: string): $ReportEnvironment
public "thirdPartyServerInfo"(): $AbuseReportRequest$ThirdPartyServerInfo
}
}

declare module "packages/net/minecraft/client/multiplayer/$ClientAdvancements" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $WorldSessionTelemetryManager$$Type } from "packages/net/minecraft/client/telemetry/$WorldSessionTelemetryManager"
import { $ClientAdvancements$Listener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientAdvancements$Listener"
import { $AccessorClientAdvancements } from "packages/vazkii/patchouli/mixin/client/$AccessorClientAdvancements"
import { $Advancement, $Advancement$$Type } from "packages/net/minecraft/advancements/$Advancement"
import { $AdvancementProgress } from "packages/net/minecraft/advancements/$AdvancementProgress"
import { $ClientboundUpdateAdvancementsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateAdvancementsPacket"
import { $Map } from "packages/java/util/$Map"
import { $AdvancementList } from "packages/net/minecraft/advancements/$AdvancementList"

export class $ClientAdvancements implements $AccessorClientAdvancements {
readonly "progress": $Map<$Advancement, $AdvancementProgress>

constructor(minecraft0: $Minecraft$$Type, worldSessionTelemetryManager1: $WorldSessionTelemetryManager$$Type)

public "getAdvancements"(): $AdvancementList
public "handler$dpj000$patchouli_onSync"(clientboundUpdateAdvancementsPacket0: $ClientboundUpdateAdvancementsPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "setListener"(listener0: $ClientAdvancements$Listener$$Type): void
public "setSelectedTab"(advancement0: $Advancement$$Type, boolean1: boolean): void
public "update"(clientboundUpdateAdvancementsPacket0: $ClientboundUpdateAdvancementsPacket$$Type): void
get "advancements"(): $AdvancementList
set "listener"(value: $ClientAdvancements$Listener$$Type)
}
}

declare module "packages/net/minecraft/client/multiplayer/chat/$LoggedChatEvent" {
import { $LoggedChatEvent$Type } from "packages/net/minecraft/client/multiplayer/chat/$LoggedChatEvent$Type"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $LoggedChatEvent {
"type"(): $LoggedChatEvent$Type
}

export namespace $LoggedChatEvent {
const CODEC: $Codec<$LoggedChatEvent>
}
export abstract class $LoggedChatEvent$$Static implements $LoggedChatEvent {
static readonly "CODEC": $Codec<$LoggedChatEvent>

}
}

declare module "packages/net/minecraft/client/multiplayer/$ClientPacketListener" {
import { $ClientboundOpenScreenPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundOpenScreenPacket"
import { $ClientboundSetPassengersPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetPassengersPacket"
import { $ClientboundCommandsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundCommandsPacket"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $Iterable, $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $ClientboundSetChunkCacheCenterPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetChunkCacheCenterPacket"
import { $ClientSuggestionProvider } from "packages/net/minecraft/client/multiplayer/$ClientSuggestionProvider"
import { $ClientboundChunksBiomesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundChunksBiomesPacket"
import { $ClientboundResourcePackPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundResourcePackPacket"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $ClientLevel, $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $ClientboundEntityEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundEntityEventPacket"
import { $AttributeMap$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import { $ClientboundSetEntityLinkPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetEntityLinkPacket"
import { $ClientboundMoveVehiclePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundMoveVehiclePacket"
import { $ClientboundContainerClosePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundContainerClosePacket"
import { $ClientboundClearTitlesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundClearTitlesPacket"
import { $ServerData, $ServerData$$Type } from "packages/net/minecraft/client/multiplayer/$ServerData"
import { $ClientboundBlockEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEventPacket"
import { $ClientboundDeleteChatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundDeleteChatPacket"
import { $ClientboundPlayerInfoUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerInfoUpdatePacket"
import { $LocalRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"
import { $ClientboundAddEntityPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundAddEntityPacket"
import { $ClientboundForgetLevelChunkPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundForgetLevelChunkPacket"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $ClientboundTagQueryPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundTagQueryPacket"
import { $ClientboundPlayerChatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerChatPacket"
import { $ClientboundSetScorePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetScorePacket"
import { $ClientboundSetSubtitleTextPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetSubtitleTextPacket"
import { $ClientboundSetActionBarTextPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetActionBarTextPacket"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $ClientboundSetObjectivePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetObjectivePacket"
import { $ClientboundLevelEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundLevelEventPacket"
import { $ClientboundRemoveEntitiesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundRemoveEntitiesPacket"
import { $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $ClientboundSetEquipmentPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetEquipmentPacket"
import { $RegistryAccess } from "packages/net/minecraft/core/$RegistryAccess"
import { $ClientboundRecipePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundRecipePacket"
import { $ClientboundPingPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPingPacket"
import { $ClientboundOpenSignEditorPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundOpenSignEditorPacket"
import { $ClientboundSetBorderWarningDistancePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderWarningDistancePacket"
import { $ClientboundSelectAdvancementsTabPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSelectAdvancementsTabPacket"
import { $PlayerInfo } from "packages/net/minecraft/client/multiplayer/$PlayerInfo"
import { $SharedSuggestionProvider, $SharedSuggestionProvider$$Type } from "packages/net/minecraft/commands/$SharedSuggestionProvider"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ClientboundSystemChatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSystemChatPacket"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $ClientboundDisconnectPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundDisconnectPacket"
import { $ClientboundPlayerAbilitiesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerAbilitiesPacket"
import { $ClientboundContainerSetSlotPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundContainerSetSlotPacket"
import { $ClientboundMerchantOffersPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundMerchantOffersPacket"
import { $ClientboundCustomPayloadPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundCustomPayloadPacket"
import { $ClientboundTeleportEntityPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundTeleportEntityPacket"
import { $FeatureFlagCacher } from "packages/com/sammy/malum/core/handlers/hiding/flags/$FeatureFlagCacher"
import { $DebugQueryHandler } from "packages/net/minecraft/client/$DebugQueryHandler"
import { $ClientboundSetEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetEntityDataPacket"
import { $ClientboundSetDefaultSpawnPositionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetDefaultSpawnPositionPacket"
import { $ClientboundSetCameraPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetCameraPacket"
import { $Collection } from "packages/java/util/$Collection"
import { $ClientboundHurtAnimationPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundHurtAnimationPacket"
import { $ClientboundPlayerPositionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerPositionPacket"
import { $ClientboundSoundPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSoundPacket"
import { $ClientboundUpdateAdvancementsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateAdvancementsPacket"
import { $ClientboundContainerSetContentPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundContainerSetContentPacket"
import { $ClientboundUpdateAttributesPacket$AttributeSnapshot$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateAttributesPacket$AttributeSnapshot"
import { $ClientboundDisguisedChatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundDisguisedChatPacket"
import { $ClientboundHorseScreenOpenPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundHorseScreenOpenPacket"
import { $ClientboundRespawnPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundRespawnPacket"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $ClientboundLevelParticlesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundLevelParticlesPacket"
import { $FeatureFlagRegistry$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagRegistry"
import { $LocalBooleanRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalBooleanRef"
import { $XaeroMinimapSession, $XaeroMinimapSession$$Type } from "packages/xaero/common/$XaeroMinimapSession"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $ClientboundInitializeBorderPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundInitializeBorderPacket"
import { $WorldMapSession, $WorldMapSession$$Type } from "packages/xaero/map/$WorldMapSession"
import { $ClientboundAnimatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundAnimatePacket"
import { $ClientboundRemoveMobEffectPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundRemoveMobEffectPacket"
import { $TickablePacketListener } from "packages/net/minecraft/network/$TickablePacketListener"
import { $IWorldMapClientPlayNetHandler } from "packages/xaero/map/core/$IWorldMapClientPlayNetHandler"
import { $ClientboundSoundEntityPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSoundEntityPacket"
import { $Connection, $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $ClientboundLevelChunkWithLightPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundLevelChunkWithLightPacket"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ClientboundPlayerLookAtPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerLookAtPacket"
import { $ClientboundSetChunkCacheRadiusPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetChunkCacheRadiusPacket"
import { $ClientboundDamageEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundDamageEventPacket"
import { $ClientboundSetSimulationDistancePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetSimulationDistancePacket"
import { $ClientboundTabListPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundTabListPacket"
import { $ClientboundOpenBookPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundOpenBookPacket"
import { $ClientboundMapItemDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundMapItemDataPacket"
import { $ClientboundSetEntityMotionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetEntityMotionPacket"
import { $IXaeroMinimapClientPlayNetHandler } from "packages/xaero/common/core/$IXaeroMinimapClientPlayNetHandler"
import { $ClientboundSetTitleTextPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetTitleTextPacket"
import { $ClientboundUpdateAttributesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateAttributesPacket"
import { $ClientboundUpdateRecipesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateRecipesPacket"
import { $ClientboundContainerSetDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundContainerSetDataPacket"
import { $CommandDispatcher, $CommandDispatcher$$Type } from "packages/com/mojang/brigadier/$CommandDispatcher"
import { $ClientboundPlayerCombatEnterPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerCombatEnterPacket"
import { $ClientboundLevelChunkPacketData$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundLevelChunkPacketData"
import { $ClientboundSectionBlocksUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSectionBlocksUpdatePacket"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundSetTitlesAnimationPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetTitlesAnimationPacket"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ClientboundPlaceGhostRecipePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlaceGhostRecipePacket"
import { $ClientboundSetBorderCenterPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderCenterPacket"
import { $ClientboundLightUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundLightUpdatePacket"
import { $RecipeManager } from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import { $ClientboundGameEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundGameEventPacket"
import { $WorldSessionTelemetryManager$$Type } from "packages/net/minecraft/client/telemetry/$WorldSessionTelemetryManager"
import { $ClientboundPlayerInfoRemovePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerInfoRemovePacket"
import { $ClientboundRotateHeadPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundRotateHeadPacket"
import { $ClientboundSetBorderSizePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderSizePacket"
import { $ClientboundBundlePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBundlePacket"
import { $ClientboundKeepAlivePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundKeepAlivePacket"
import { $ClientboundSetCarriedItemPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetCarriedItemPacket"
import { $ClientboundUpdateEnabledFeaturesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateEnabledFeaturesPacket"
import { $ClientboundUpdateMobEffectPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateMobEffectPacket"
import { $ClientboundBlockChangedAckPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockChangedAckPacket"
import { $ClientboundSetExperiencePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetExperiencePacket"
import { $ClientboundAddPlayerPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundAddPlayerPacket"
import { $ClientboundTakeItemEntityPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundTakeItemEntityPacket"
import { $ClientboundCommandSuggestionsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundCommandSuggestionsPacket"
import { $ClientboundPlayerCombatKillPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerCombatKillPacket"
import { $ClientboundPlayerCombatEndPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerCombatEndPacket"
import { $ClientboundChangeDifficultyPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundChangeDifficultyPacket"
import { $ClientGamePacketListener } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $ClientboundSetBorderLerpSizePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderLerpSizePacket"
import { $ClientAdvancements } from "packages/net/minecraft/client/multiplayer/$ClientAdvancements"
import { $ClientboundBlockUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockUpdatePacket"
import { $ClientboundStopSoundPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundStopSoundPacket"
import { $ClientboundExplodePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundExplodePacket"
import { $ClientboundCustomChatCompletionsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundCustomChatCompletionsPacket"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $ClientboundBlockDestructionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockDestructionPacket"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ClientboundMoveEntityPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundMoveEntityPacket"
import { $ClientboundAwardStatsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundAwardStatsPacket"
import { $ClientboundSetBorderWarningDelayPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderWarningDelayPacket"
import { $ClientboundSetTimePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetTimePacket"
import { $ClientboundServerDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundServerDataPacket"
import { $ClientboundSetPlayerTeamPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetPlayerTeamPacket"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $ClientboundSetHealthPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetHealthPacket"
import { $AttributeInstance$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeInstance"
import { $ClientboundLoginPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundLoginPacket"
import { $ClientboundSetDisplayObjectivePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetDisplayObjectivePacket"
import { $Set } from "packages/java/util/$Set"
import { $PlayerChatMessage$$Type } from "packages/net/minecraft/network/chat/$PlayerChatMessage"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $ClientboundAddExperienceOrbPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundAddExperienceOrbPacket"
import { $ClientboundCooldownPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundCooldownPacket"
import { $ClientboundUpdateTagsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateTagsPacket"
import { $Iterator$$Type } from "packages/java/util/$Iterator"
import { $ProfileKeyPair$$Type } from "packages/net/minecraft/world/entity/player/$ProfileKeyPair"
import { $ClientboundBossEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBossEventPacket"

export class $ClientPacketListener implements $TickablePacketListener, $ClientGamePacketListener, $IXaeroMinimapClientPlayNetHandler, $IWorldMapClientPlayNetHandler, $FeatureFlagCacher {
constructor(minecraft0: $Minecraft$$Type, screen1: $Screen$$Type, connection2: $Connection$$Type, serverData3: $ServerData$$Type, gameProfile4: $GameProfile$$Type, worldSessionTelemetryManager5: $WorldSessionTelemetryManager$$Type)

public "close"(): void
public "enabledFeatures"(): $FeatureFlagSet
public "getAdvancements"(): $ClientAdvancements
public "getCommands"(): $CommandDispatcher<$SharedSuggestionProvider>
public "getConnection"(): $Connection
public "getDebugQueryHandler"(): $DebugQueryHandler
public "getId"(): $UUID
public "getLevel"(): $ClientLevel
public "getListedOnlinePlayers"(): $Collection<$PlayerInfo>
public "getLocalGameProfile"(): $GameProfile
public "getOnlinePlayerIds"(): $Collection<$UUID>
public "getOnlinePlayers"(): $Collection<$PlayerInfo>
public "getPlayerInfo"(uUID0: $UUID$$Type): $PlayerInfo
public "getPlayerInfo"(string0: string): $PlayerInfo
public "getRecipeManager"(): $RecipeManager
public "getServerData"(): $ServerData
public "getSuggestionsProvider"(): $ClientSuggestionProvider
public "getXaero_minimapSession"(): $XaeroMinimapSession
public "getXaero_worldmapSession"(): $WorldMapSession
public "handleAddEntity"(clientboundAddEntityPacket0: $ClientboundAddEntityPacket$$Type): void
public "handleAddExperienceOrb"(clientboundAddExperienceOrbPacket0: $ClientboundAddExperienceOrbPacket$$Type): void
public "handleAddObjective"(clientboundSetObjectivePacket0: $ClientboundSetObjectivePacket$$Type): void
public "handleAddOrRemoveRecipes"(clientboundRecipePacket0: $ClientboundRecipePacket$$Type): void
public "handleAddPlayer"(clientboundAddPlayerPacket0: $ClientboundAddPlayerPacket$$Type): void
public "handleAnimate"(clientboundAnimatePacket0: $ClientboundAnimatePacket$$Type): void
public "handleAwardStats"(clientboundAwardStatsPacket0: $ClientboundAwardStatsPacket$$Type): void
public "handleBlockChangedAck"(clientboundBlockChangedAckPacket0: $ClientboundBlockChangedAckPacket$$Type): void
public "handleBlockDestruction"(clientboundBlockDestructionPacket0: $ClientboundBlockDestructionPacket$$Type): void
public "handleBlockEntityData"(clientboundBlockEntityDataPacket0: $ClientboundBlockEntityDataPacket$$Type): void
public "handleBlockEvent"(clientboundBlockEventPacket0: $ClientboundBlockEventPacket$$Type): void
public "handleBlockUpdate"(clientboundBlockUpdatePacket0: $ClientboundBlockUpdatePacket$$Type): void
public "handleBossUpdate"(clientboundBossEventPacket0: $ClientboundBossEventPacket$$Type): void
public "handleBundlePacket"(clientboundBundlePacket0: $ClientboundBundlePacket$$Type): void
public "handleChangeDifficulty"(clientboundChangeDifficultyPacket0: $ClientboundChangeDifficultyPacket$$Type): void
public "handleChunkBlocksUpdate"(clientboundSectionBlocksUpdatePacket0: $ClientboundSectionBlocksUpdatePacket$$Type): void
public "handleChunksBiomes"(clientboundChunksBiomesPacket0: $ClientboundChunksBiomesPacket$$Type): void
public "handleCommandSuggestions"(clientboundCommandSuggestionsPacket0: $ClientboundCommandSuggestionsPacket$$Type): void
public "handleCommands"(clientboundCommandsPacket0: $ClientboundCommandsPacket$$Type): void
public "handleContainerClose"(clientboundContainerClosePacket0: $ClientboundContainerClosePacket$$Type): void
public "handleContainerContent"(clientboundContainerSetContentPacket0: $ClientboundContainerSetContentPacket$$Type): void
public "handleContainerSetData"(clientboundContainerSetDataPacket0: $ClientboundContainerSetDataPacket$$Type): void
public "handleContainerSetSlot"(clientboundContainerSetSlotPacket0: $ClientboundContainerSetSlotPacket$$Type): void
public "handleCustomChatCompletions"(clientboundCustomChatCompletionsPacket0: $ClientboundCustomChatCompletionsPacket$$Type): void
public "handleCustomPayload"(clientboundCustomPayloadPacket0: $ClientboundCustomPayloadPacket$$Type): void
public "handleDamageEvent"(clientboundDamageEventPacket0: $ClientboundDamageEventPacket$$Type): void
public "handleDeleteChat"(clientboundDeleteChatPacket0: $ClientboundDeleteChatPacket$$Type): void
public "handleDisconnect"(clientboundDisconnectPacket0: $ClientboundDisconnectPacket$$Type): void
public "handleDisguisedChat"(clientboundDisguisedChatPacket0: $ClientboundDisguisedChatPacket$$Type): void
public "handleEnabledFeatures"(clientboundUpdateEnabledFeaturesPacket0: $ClientboundUpdateEnabledFeaturesPacket$$Type): void
public "handleEntityEvent"(clientboundEntityEventPacket0: $ClientboundEntityEventPacket$$Type): void
public "handleEntityLinkPacket"(clientboundSetEntityLinkPacket0: $ClientboundSetEntityLinkPacket$$Type): void
public "handleExplosion"(clientboundExplodePacket0: $ClientboundExplodePacket$$Type): void
public "handleForgetLevelChunk"(clientboundForgetLevelChunkPacket0: $ClientboundForgetLevelChunkPacket$$Type): void
public "handleGameEvent"(clientboundGameEventPacket0: $ClientboundGameEventPacket$$Type): void
public "handleHorseScreenOpen"(clientboundHorseScreenOpenPacket0: $ClientboundHorseScreenOpenPacket$$Type): void
public "handleHurtAnimation"(clientboundHurtAnimationPacket0: $ClientboundHurtAnimationPacket$$Type): void
public "handleInitializeBorder"(clientboundInitializeBorderPacket0: $ClientboundInitializeBorderPacket$$Type): void
public "handleItemCooldown"(clientboundCooldownPacket0: $ClientboundCooldownPacket$$Type): void
public "handleKeepAlive"(clientboundKeepAlivePacket0: $ClientboundKeepAlivePacket$$Type): void
public "handleLevelChunkWithLight"(clientboundLevelChunkWithLightPacket0: $ClientboundLevelChunkWithLightPacket$$Type): void
public "handleLevelEvent"(clientboundLevelEventPacket0: $ClientboundLevelEventPacket$$Type): void
public "handleLightUpdatePacket"(clientboundLightUpdatePacket0: $ClientboundLightUpdatePacket$$Type): void
public "handleLogin"(clientboundLoginPacket0: $ClientboundLoginPacket$$Type): void
public "handleLookAt"(clientboundPlayerLookAtPacket0: $ClientboundPlayerLookAtPacket$$Type): void
public "handleMapItemData"(clientboundMapItemDataPacket0: $ClientboundMapItemDataPacket$$Type): void
public "handleMerchantOffers"(clientboundMerchantOffersPacket0: $ClientboundMerchantOffersPacket$$Type): void
public "handleMoveEntity"(clientboundMoveEntityPacket0: $ClientboundMoveEntityPacket$$Type): void
public "handleMovePlayer"(clientboundPlayerPositionPacket0: $ClientboundPlayerPositionPacket$$Type): void
public "handleMoveVehicle"(clientboundMoveVehiclePacket0: $ClientboundMoveVehiclePacket$$Type): void
public "handleOpenBook"(clientboundOpenBookPacket0: $ClientboundOpenBookPacket$$Type): void
public "handleOpenScreen"(clientboundOpenScreenPacket0: $ClientboundOpenScreenPacket$$Type): void
public "handleOpenSignEditor"(clientboundOpenSignEditorPacket0: $ClientboundOpenSignEditorPacket$$Type): void
public "handleParticleEvent"(clientboundLevelParticlesPacket0: $ClientboundLevelParticlesPacket$$Type): void
public "handlePing"(clientboundPingPacket0: $ClientboundPingPacket$$Type): void
public "handlePlaceRecipe"(clientboundPlaceGhostRecipePacket0: $ClientboundPlaceGhostRecipePacket$$Type): void
public "handlePlayerAbilities"(clientboundPlayerAbilitiesPacket0: $ClientboundPlayerAbilitiesPacket$$Type): void
public "handlePlayerChat"(clientboundPlayerChatPacket0: $ClientboundPlayerChatPacket$$Type): void
public "handlePlayerCombatEnd"(clientboundPlayerCombatEndPacket0: $ClientboundPlayerCombatEndPacket$$Type): void
public "handlePlayerCombatEnter"(clientboundPlayerCombatEnterPacket0: $ClientboundPlayerCombatEnterPacket$$Type): void
public "handlePlayerCombatKill"(clientboundPlayerCombatKillPacket0: $ClientboundPlayerCombatKillPacket$$Type): void
public "handlePlayerInfoRemove"(clientboundPlayerInfoRemovePacket0: $ClientboundPlayerInfoRemovePacket$$Type): void
public "handlePlayerInfoUpdate"(clientboundPlayerInfoUpdatePacket0: $ClientboundPlayerInfoUpdatePacket$$Type): void
public "handleRemoveEntities"(clientboundRemoveEntitiesPacket0: $ClientboundRemoveEntitiesPacket$$Type): void
public "handleRemoveMobEffect"(clientboundRemoveMobEffectPacket0: $ClientboundRemoveMobEffectPacket$$Type): void
public "handleResourcePack"(clientboundResourcePackPacket0: $ClientboundResourcePackPacket$$Type): void
public "handleRespawn"(clientboundRespawnPacket0: $ClientboundRespawnPacket$$Type): void
public "handleRotateMob"(clientboundRotateHeadPacket0: $ClientboundRotateHeadPacket$$Type): void
public "handleSelectAdvancementsTab"(clientboundSelectAdvancementsTabPacket0: $ClientboundSelectAdvancementsTabPacket$$Type): void
public "handleServerData"(clientboundServerDataPacket0: $ClientboundServerDataPacket$$Type): void
public "handleSetBorderCenter"(clientboundSetBorderCenterPacket0: $ClientboundSetBorderCenterPacket$$Type): void
public "handleSetBorderLerpSize"(clientboundSetBorderLerpSizePacket0: $ClientboundSetBorderLerpSizePacket$$Type): void
public "handleSetBorderSize"(clientboundSetBorderSizePacket0: $ClientboundSetBorderSizePacket$$Type): void
public "handleSetBorderWarningDelay"(clientboundSetBorderWarningDelayPacket0: $ClientboundSetBorderWarningDelayPacket$$Type): void
public "handleSetBorderWarningDistance"(clientboundSetBorderWarningDistancePacket0: $ClientboundSetBorderWarningDistancePacket$$Type): void
public "handleSetCamera"(clientboundSetCameraPacket0: $ClientboundSetCameraPacket$$Type): void
public "handleSetCarriedItem"(clientboundSetCarriedItemPacket0: $ClientboundSetCarriedItemPacket$$Type): void
public "handleSetChunkCacheCenter"(clientboundSetChunkCacheCenterPacket0: $ClientboundSetChunkCacheCenterPacket$$Type): void
public "handleSetChunkCacheRadius"(clientboundSetChunkCacheRadiusPacket0: $ClientboundSetChunkCacheRadiusPacket$$Type): void
public "handleSetDisplayObjective"(clientboundSetDisplayObjectivePacket0: $ClientboundSetDisplayObjectivePacket$$Type): void
public "handleSetEntityData"(clientboundSetEntityDataPacket0: $ClientboundSetEntityDataPacket$$Type): void
public "handleSetEntityMotion"(clientboundSetEntityMotionPacket0: $ClientboundSetEntityMotionPacket$$Type): void
public "handleSetEntityPassengersPacket"(clientboundSetPassengersPacket0: $ClientboundSetPassengersPacket$$Type): void
public "handleSetEquipment"(clientboundSetEquipmentPacket0: $ClientboundSetEquipmentPacket$$Type): void
public "handleSetExperience"(clientboundSetExperiencePacket0: $ClientboundSetExperiencePacket$$Type): void
public "handleSetHealth"(clientboundSetHealthPacket0: $ClientboundSetHealthPacket$$Type): void
public "handleSetPlayerTeamPacket"(clientboundSetPlayerTeamPacket0: $ClientboundSetPlayerTeamPacket$$Type): void
public "handleSetScore"(clientboundSetScorePacket0: $ClientboundSetScorePacket$$Type): void
public "handleSetSimulationDistance"(clientboundSetSimulationDistancePacket0: $ClientboundSetSimulationDistancePacket$$Type): void
public "handleSetSpawn"(clientboundSetDefaultSpawnPositionPacket0: $ClientboundSetDefaultSpawnPositionPacket$$Type): void
public "handleSetTime"(clientboundSetTimePacket0: $ClientboundSetTimePacket$$Type): void
public "handleSoundEntityEvent"(clientboundSoundEntityPacket0: $ClientboundSoundEntityPacket$$Type): void
public "handleSoundEvent"(clientboundSoundPacket0: $ClientboundSoundPacket$$Type): void
public "handleStopSoundEvent"(clientboundStopSoundPacket0: $ClientboundStopSoundPacket$$Type): void
public "handleSystemChat"(clientboundSystemChatPacket0: $ClientboundSystemChatPacket$$Type): void
public "handleTabListCustomisation"(clientboundTabListPacket0: $ClientboundTabListPacket$$Type): void
public "handleTagQueryPacket"(clientboundTagQueryPacket0: $ClientboundTagQueryPacket$$Type): void
public "handleTakeItemEntity"(clientboundTakeItemEntityPacket0: $ClientboundTakeItemEntityPacket$$Type): void
public "handleTeleportEntity"(clientboundTeleportEntityPacket0: $ClientboundTeleportEntityPacket$$Type): void
public "handleTitlesClear"(clientboundClearTitlesPacket0: $ClientboundClearTitlesPacket$$Type): void
public "handleUpdateAdvancementsPacket"(clientboundUpdateAdvancementsPacket0: $ClientboundUpdateAdvancementsPacket$$Type): void
public "handleUpdateAttributes"(clientboundUpdateAttributesPacket0: $ClientboundUpdateAttributesPacket$$Type): void
public "handleUpdateMobEffect"(clientboundUpdateMobEffectPacket0: $ClientboundUpdateMobEffectPacket$$Type): void
public "handleUpdateRecipes"(clientboundUpdateRecipesPacket0: $ClientboundUpdateRecipesPacket$$Type): void
public "handleUpdateTags"(clientboundUpdateTagsPacket0: $ClientboundUpdateTagsPacket$$Type): void
public "handler$boc000$apoth_postAttrChangedEvent"(clientboundUpdateAttributesPacket0: $ClientboundUpdateAttributesPacket$$Type, callbackInfo1: $CallbackInfo$$Type, entity2: $Entity$$Type, attributeMap3: $AttributeMap$$Type, iterator4: $Iterator$$Type<any>, attributeSnapshot5: $ClientboundUpdateAttributesPacket$AttributeSnapshot$$Type, attributeInstance6: $AttributeInstance$$Type): void
public "handler$boc000$apoth_recordOldAttrValue"(clientboundUpdateAttributesPacket0: $ClientboundUpdateAttributesPacket$$Type, callbackInfo1: $CallbackInfo$$Type, entity2: $Entity$$Type, attributeMap3: $AttributeMap$$Type, iterator4: $Iterator$$Type<any>, attributeSnapshot5: $ClientboundUpdateAttributesPacket$AttributeSnapshot$$Type, attributeInstance6: $AttributeInstance$$Type): void
public "handler$cfa000$handle"(clientboundSetEntityMotionPacket0: $ClientboundSetEntityMotionPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ckc000$mna$handleRemoveMobEffect"(clientboundRemoveMobEffectPacket0: $ClientboundRemoveMobEffectPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ckc000$mna$handleUpdateMobEffect"(clientboundUpdateMobEffectPacket0: $ClientboundUpdateMobEffectPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$cnn000$onChunkData"(packet: $ClientboundLevelChunkWithLightPacket$$Type, ci: $CallbackInfo$$Type, seenChunkRef: $LocalBooleanRef$$Type): void
public "handler$cnn000$onChunkDataPacket"(packet: $ClientboundLevelChunkWithLightPacket$$Type, ci: $CallbackInfo$$Type, seenChunkRef: $LocalBooleanRef$$Type): void
public "handler$cnn000$onClientSessionClose"(ci: $CallbackInfo$$Type): void
public "handler$cnn000$onTeleport"(ci: $CallbackInfo$$Type): void
public "handler$cof000$onHandleLevelChunkWithLight"(clientboundLevelChunkWithLightPacket0: $ClientboundLevelChunkWithLightPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$cof000$onHandleLightUpdatePacket"(clientboundLightUpdatePacket0: $ClientboundLightUpdatePacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$cof000$onOnBlockUpdate"(clientboundBlockUpdatePacket0: $ClientboundBlockUpdatePacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$cof000$onOnChunkData"(int0: integer, int1: integer, clientboundLevelChunkPacketData2: $ClientboundLevelChunkPacketData$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "handler$cof000$onOnChunkDeltaUpdate"(clientboundSectionBlocksUpdatePacket0: $ClientboundSectionBlocksUpdatePacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$cof000$onOnGameJoin"(clientboundLoginPacket0: $ClientboundLoginPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$cof000$onOnPlayerSpawnPosition"(clientboundSetDefaultSpawnPositionPacket0: $ClientboundSetDefaultSpawnPositionPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$cof000$onQueueLightRemoval"(clientboundForgetLevelChunkPacket0: $ClientboundForgetLevelChunkPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$cof000$onSendUnsignedCommand"(string0: string, callbackInfoReturnable1: $CallbackInfoReturnable$$Type<any>): void
public "handler$cof001$onClose"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$cof001$onSendCommand"(string0: string, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ddh000$onCleanup"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$ddh001$onHandleLevelChunkWithLight"(clientboundLevelChunkWithLightPacket0: $ClientboundLevelChunkWithLightPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ddh001$onHandleLightUpdatePacket"(clientboundLightUpdatePacket0: $ClientboundLightUpdatePacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ddh001$onOnBlockUpdate"(clientboundBlockUpdatePacket0: $ClientboundBlockUpdatePacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ddh001$onOnChunkData"(int0: integer, int1: integer, clientboundLevelChunkPacketData2: $ClientboundLevelChunkPacketData$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "handler$ddh001$onOnChunkDeltaUpdate"(clientboundSectionBlocksUpdatePacket0: $ClientboundSectionBlocksUpdatePacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ddh001$onOnPlayerSpawnPosition"(clientboundSetDefaultSpawnPositionPacket0: $ClientboundSetDefaultSpawnPositionPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ddh001$onQueueLightRemoval"(clientboundForgetLevelChunkPacket0: $ClientboundForgetLevelChunkPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ddj001$onOnGameJoin"(clientboundLoginPacket0: $ClientboundLoginPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$zco000$onHandleInitializeBorder"(clientboundInitializeBorderPacket0: $ClientboundInitializeBorderPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$zoa000$handleTakeItemEntity"(clientboundTakeItemEntityPacket0: $ClientboundTakeItemEntityPacket$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "isAcceptingMessages"(): boolean
public "isFeatureEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "levels"(): $Set<$ResourceKey<$Level>>
public "malum$cachedFeatureFlags"(): $Iterable<any>
public "markMessageAsProcessed"(playerChatMessage0: $PlayerChatMessage$$Type, boolean1: boolean): void
public "onDisconnect"(component0: $Component$$Type): void
public "registryAccess"(): $RegistryAccess
public "send"(packet0: $Packet$$Type<any>): void
public "sendChat"(string0: string): void
public "sendCommand"(string0: string): void
public "sendUnsignedCommand"(string0: string): boolean
public "setActionBarText"(clientboundSetActionBarTextPacket0: $ClientboundSetActionBarTextPacket$$Type): void
public "setKeyPair"(profileKeyPair0: $ProfileKeyPair$$Type): void
public "setSubtitleText"(clientboundSetSubtitleTextPacket0: $ClientboundSetSubtitleTextPacket$$Type): void
public "setTitleText"(clientboundSetTitleTextPacket0: $ClientboundSetTitleTextPacket$$Type): void
public "setTitlesAnimation"(clientboundSetTitlesAnimationPacket0: $ClientboundSetTitlesAnimationPacket$$Type): void
public "setXaero_minimapSession"(xaeroMinimapSession0: $XaeroMinimapSession$$Type): void
public "setXaero_worldmapSession"(worldMapSession0: $WorldMapSession$$Type): void
public "shouldPropagateHandlingExceptions"(): boolean
public "tick"(): void
public "wrapOperation$cnn000$onBlockUpdate"(instance: $ClientLevel$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, flags: integer, original: $Operation$$Type<any>, packet: $ClientboundBlockUpdatePacket$$Type): void
public "wrapOperation$cnn000$onBlockUpdate$mixinextras$bridge$245"(instance: $ClientLevel$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, flags: integer, original: $Operation$$Type<any>, packet: $LocalRef$$Type<any>): void
public "wrapOperation$cnn000$onChunkBlocksUpdate"(instance: $ClientboundSectionBlocksUpdatePacket$$Type, mutableBlockPos: $BiConsumer$$Type<any, any>, original: $Operation$$Type<any>): void
public "wrapOperation$fmc000$captureFeatureFlags"(featureFlagRegistry0: $FeatureFlagRegistry$$Type, iterable1: $Iterable$$Type<any>, operation2: $Operation$$Type<any>): $FeatureFlagSet
get "commands"(): $CommandDispatcher<$SharedSuggestionProvider>
set "commands"(value: $CommandDispatcher$$Type<$SharedSuggestionProvider$$Type>)
get "serverChunkRadius"(): integer
set "serverChunkRadius"(value: integer)
get "advancements"(): $ClientAdvancements
get "connection"(): $Connection
get "debugQueryHandler"(): $DebugQueryHandler
get "id"(): $UUID
get "level"(): $ClientLevel
get "listedOnlinePlayers"(): $Collection<$PlayerInfo>
get "localGameProfile"(): $GameProfile
get "onlinePlayerIds"(): $Collection<$UUID>
get "onlinePlayers"(): $Collection<$PlayerInfo>
get "recipeManager"(): $RecipeManager
get "serverData"(): $ServerData
get "suggestionsProvider"(): $ClientSuggestionProvider
get "xaero_minimapSession"(): $XaeroMinimapSession
get "xaero_worldmapSession"(): $WorldMapSession
get "acceptingMessages"(): boolean
set "actionBarText"(value: $ClientboundSetActionBarTextPacket$$Type)
set "keyPair"(value: $ProfileKeyPair$$Type)
set "subtitleText"(value: $ClientboundSetSubtitleTextPacket$$Type)
set "titleText"(value: $ClientboundSetTitleTextPacket$$Type)
set "titlesAnimation"(value: $ClientboundSetTitlesAnimationPacket$$Type)
set "xaero_minimapSession"(value: $XaeroMinimapSession$$Type)
set "xaero_worldmapSession"(value: $WorldMapSession$$Type)
}
}

declare module "packages/net/minecraft/client/multiplayer/$ClientLevel" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $WorldMapClientWorldData, $WorldMapClientWorldData$$Type } from "packages/xaero/map/mcworld/$WorldMapClientWorldData"
import { $BooleanSupplier$$Type } from "packages/java/util/function/$BooleanSupplier"
import { $IWorldMapClientWorld } from "packages/xaero/map/mcworld/$IWorldMapClientWorld"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $ChunkTracker } from "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Entity$RemovalReason$$Type } from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Difficulty } from "packages/net/minecraft/world/$Difficulty"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import { $DimensionSpecialEffects } from "packages/net/minecraft/client/renderer/$DimensionSpecialEffects"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $AbstractClientPlayer$$Type } from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ClonedClientLevel, $ClonedClientLevel$$Type } from "packages/com/sonicether/soundphysics/world/$ClonedClientLevel"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $ChunkAccess } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Scoreboard$$Type } from "packages/net/minecraft/world/scores/$Scoreboard"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $ChunkTrackerHolder } from "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTrackerHolder"
import { $TargetingConditions$$Type } from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import { $Optional } from "packages/java/util/$Optional"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $IXaeroMinimapClientWorld } from "packages/xaero/common/minimap/mcworld/$IXaeroMinimapClientWorld"
import { $TransientEntitySectionManager } from "packages/net/minecraft/world/level/entity/$TransientEntitySectionManager"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ChunkStatus$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $BiomeSeedProvider } from "packages/me/jellysquid/mods/sodium/client/world/$BiomeSeedProvider"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockPos$MutableBlockPos$$Type } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ProfilerFiller } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $ICapabilityProvider, $ICapabilityProvider$$Type } from "packages/xaero/pac/common/capability/$ICapabilityProvider"
import { $ICapableObject } from "packages/xaero/pac/common/capability/$ICapableObject"
import { $ClientLevel$ClientLevelData$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel$ClientLevelData"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $MapItemSavedData$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ColorResolver$$Type } from "packages/net/minecraft/world/level/$ColorResolver"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $HolderLookup } from "packages/net/minecraft/core/$HolderLookup"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $ClientLevelKJS } from "packages/dev/latvian/mods/kubejs/core/$ClientLevelKJS"
import { $LightLayer$$Type } from "packages/net/minecraft/world/level/$LightLayer"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $CollisionContext$$Type } from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import { $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $FireworksJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import { $CachingClientLevel } from "packages/com/sonicether/soundphysics/world/$CachingClientLevel"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $MinimapClientWorldData, $MinimapClientWorldData$$Type } from "packages/xaero/common/minimap/mcworld/$MinimapClientWorldData"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $ExplosionJS } from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import { $TickPriority$$Type } from "packages/net/minecraft/world/ticks/$TickPriority"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $ClientLevel extends $Level implements $ICapableObject, $IXaeroMinimapClientWorld, $IWorldMapClientWorld, $ClientLevelKJS, $CachingClientLevel, $BiomeSeedProvider, $ChunkTrackerHolder {
readonly "entityStorage": $TransientEntitySectionManager<$Entity>

constructor(clientPacketListener0: $ClientPacketListener$$Type, clientLevelData1: $ClientLevel$ClientLevelData$$Type, resourceKey2: $ResourceKey$$Type<$Level>, holder3: $Holder$$Type<$DimensionType$$Type>, int4: integer, int5: integer, supplier6: $Supplier$$Type<$ProfilerFiller>, levelRenderer7: $LevelRenderer$$Type, boolean8: boolean, long9: long)

public "addFreshEntity"(entity0: $Entity$$Type): boolean
public "addPlayer"(int0: integer, abstractClientPlayer1: $AbstractClientPlayer$$Type): void
public "animateTick"(int0: integer, int1: integer, int2: integer): void
public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "calculateBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public "clearTintCaches"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
public "createExplosion"(x: double, y: double, z: double): $ExplosionJS
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "doAnimateTick"(int0: integer, int1: integer, int2: integer, int3: integer, randomSource4: $RandomSource$$Type, block5: $Block$$Type, mutableBlockPos6: $BlockPos$MutableBlockPos$$Type): void
public "effects"(): $DimensionSpecialEffects
public "entitiesForRendering"(): $Iterable<$Entity>
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public static "get"(clientLevel0: $ClientLevel$$Type): $ChunkTracker
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public static "getBiomeSeed"(clientLevel0: $ClientLevel$$Type): long
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
public "getCloudColor"(float0: float): $Vec3
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getDifficulty"(): $Difficulty
public "getDimension"(): $ResourceLocation
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getEntityCount"(): integer
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getHeight"(): integer
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getName"(): $Component
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(): $EntityArrayList
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "getServerSimulationDistance"(): integer
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getSkyColor"(vec30: $Vec3$$Type, float1: float): $Vec3
public "getSkyDarken"(float0: float): float
public "getSkyFlashTime"(): integer
public "getStarBrightness"(float0: float): float
public "getTimeOfDay"(float0: float): float
public "getXaero_OPAC_CapabilityProvider"(): $ICapabilityProvider
public "getXaero_minimapData"(): $MinimapClientWorldData
public "getXaero_worldmapData"(): $WorldMapClientWorldData
public "handleBlockChangedAck"(int0: integer): void
public "handler$cpi001$immersiveMelodies$injectTickEntity"(entity: $Entity$$Type, ci: $CallbackInfo$$Type): void
public "handler$cpi001$immersiveMelodies$injectTickPassenger"(entity: $Entity$$Type, passenger: $Entity$$Type, ci: $CallbackInfo$$Type): void
public "handler$fna000$onSetBlocksDirty"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, callbackInfo3: $CallbackInfo$$Type): void
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isLightUpdateQueueEmpty"(): boolean
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public "isOverworld"(): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "onChunkLoaded"(chunkPos0: $ChunkPos$$Type): void
public "overrideMapData"(string0: string, mapItemSavedData1: $MapItemSavedData$$Type): void
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "pollLightUpdates"(): void
public "putNonPlayerEntity"(int0: integer, entity1: $Entity$$Type): void
public "queueLightUpdate"(runnable0: $Runnable$$Type): void
public "removeEntity"(int0: integer, removalReason1: $Entity$RemovalReason$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "setDayTime"(long0: long): void
public "setDefaultSpawnPos"(blockPos0: $BlockPos$$Type, float1: float): void
public "setGameTime"(long0: long): void
public "setScoreboard"(scoreboard0: $Scoreboard$$Type): void
public "setSectionDirtyWithNeighbors"(int0: integer, int1: integer, int2: integer): void
public "setServerSimulationDistance"(int0: integer): void
public "setServerVerifiedBlockState"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): void
public "setStatusMessage"(message: $Component$$Type): void
public "setXaero_OPAC_CapabilityProvider"(iCapabilityProvider0: $ICapabilityProvider$$Type): void
public "setXaero_minimapData"(minimapClientWorldData0: $MinimapClientWorldData$$Type): void
public "setXaero_worldmapData"(worldMapClientWorldData0: $WorldMapClientWorldData$$Type): void
public "sodium$getBiomeSeed"(): long
public "sodium$getTracker"(): $ChunkTracker
public "sound_physics_remastered$getCachedClone"(): $ClonedClientLevel
public "sound_physics_remastered$setCachedClone"(clonedClientLevel0: $ClonedClientLevel$$Type): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public "syncBlockState"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, vec32: $Vec3$$Type): void
public "tell"(message: $Component$$Type): void
public "tick"(booleanSupplier0: $BooleanSupplier$$Type): void
public "tickEntities"(): void
public "tickNonPassenger"(entity0: $Entity$$Type): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "unload"(levelChunk0: $LevelChunk$$Type): void
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "entityCount"(): integer
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "players"(): $EntityArrayList
get "sectionsCount"(): integer
get "serverSimulationDistance"(): integer
get "side"(): $ScriptType
get "skyFlashTime"(): integer
get "xaero_OPAC_CapabilityProvider"(): $ICapabilityProvider
get "xaero_minimapData"(): $MinimapClientWorldData
get "xaero_worldmapData"(): $WorldMapClientWorldData
get "lightUpdateQueueEmpty"(): boolean
get "overworld"(): boolean
set "gameTime"(value: long)
set "scoreboard"(value: $Scoreboard$$Type)
set "serverSimulationDistance"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "xaero_OPAC_CapabilityProvider"(value: $ICapabilityProvider$$Type)
set "xaero_minimapData"(value: $MinimapClientWorldData$$Type)
set "xaero_worldmapData"(value: $WorldMapClientWorldData$$Type)
}
}

declare module "packages/net/minecraft/client/multiplayer/chat/report/$ReportEnvironment$Server" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ReportEnvironment$Server {
}

export namespace $ReportEnvironment$Server {
const probejs$$marker: never
}
export abstract class $ReportEnvironment$Server$$Static implements $ReportEnvironment$Server {
}
}

declare module "packages/net/minecraft/client/multiplayer/chat/$ChatListener" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PlayerChatMessage$$Type } from "packages/net/minecraft/network/chat/$PlayerChatMessage"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $ChatType$Bound$$Type } from "packages/net/minecraft/network/chat/$ChatType$Bound"
import { $MessageSignature$$Type } from "packages/net/minecraft/network/chat/$MessageSignature"

export class $ChatListener {
constructor(minecraft0: $Minecraft$$Type)

public "acceptNextDelayedMessage"(): void
public "clearQueue"(): void
public "handleDisguisedChatMessage"(component0: $Component$$Type, bound1: $ChatType$Bound$$Type): void
public "handlePlayerChatMessage"(playerChatMessage0: $PlayerChatMessage$$Type, gameProfile1: $GameProfile$$Type, bound2: $ChatType$Bound$$Type): void
public "handleSystemMessage"(component0: $Component$$Type, boolean1: boolean): void
public "handler$cod000$onHandleDisguisedChatMessag"(component0: $Component$$Type, bound1: $ChatType$Bound$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$cod000$onHandleSystemChat"(component0: $Component$$Type, boolean1: boolean, callbackInfo2: $CallbackInfo$$Type): void
public "handler$ddg001$onHandleDisguisedChatMessag"(component0: $Component$$Type, bound1: $ChatType$Bound$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$ddg001$onHandleSystemChat"(component0: $Component$$Type, boolean1: boolean, callbackInfo2: $CallbackInfo$$Type): void
public "queueSize"(): long
public "removeFromDelayedMessageQueue"(messageSignature0: $MessageSignature$$Type): boolean
public "setMessageDelay"(double0: double): void
public "tick"(): void
set "messageDelay"(value: double)
}
}

declare module "packages/net/minecraft/client/multiplayer/$MultiPlayerGameMode" {
import { $EntityHitResult$$Type } from "packages/net/minecraft/world/phys/$EntityHitResult"
import { $AccessorMultiPlayerGameMode } from "packages/org/violetmoon/quark/mixin/mixins/client/accessor/$AccessorMultiPlayerGameMode"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $StatsCounter$$Type } from "packages/net/minecraft/stats/$StatsCounter"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $LocalPlayer, $LocalPlayer$$Type } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $ClickType$$Type } from "packages/net/minecraft/world/inventory/$ClickType"
import { $PlayerControllerAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/client/$PlayerControllerAccess"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $ClientRecipeBook$$Type } from "packages/net/minecraft/client/$ClientRecipeBook"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $GameType, $GameType$$Type } from "packages/net/minecraft/world/level/$GameType"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $MultiPlayerGameMode implements $PlayerControllerAccess, $AccessorMultiPlayerGameMode {
constructor(minecraft0: $Minecraft$$Type, clientPacketListener1: $ClientPacketListener$$Type)

public "adjustPlayer"(player0: $Player$$Type): void
public "attack"(player0: $Player$$Type, entity1: $Entity$$Type): void
public "canHurtPlayer"(): boolean
public "continueDestroyBlock"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "createPlayer"(clientLevel0: $ClientLevel$$Type, statsCounter1: $StatsCounter$$Type, clientRecipeBook2: $ClientRecipeBook$$Type, boolean3: boolean, boolean4: boolean): $LocalPlayer
public "createPlayer"(clientLevel0: $ClientLevel$$Type, statsCounter1: $StatsCounter$$Type, clientRecipeBook2: $ClientRecipeBook$$Type): $LocalPlayer
public "destroyBlock"(blockPos0: $BlockPos$$Type): boolean
public "getDestroyStage"(): integer
public "getPickRange"(): float
public "getPlayerMode"(): $GameType
public "getPreviousPlayerMode"(): $GameType
public "handleCreativeModeItemAdd"(itemStack0: $ItemStack$$Type, int1: integer): void
public "handleCreativeModeItemDrop"(itemStack0: $ItemStack$$Type): void
public "handleInventoryButtonClick"(int0: integer, int1: integer): void
public "handleInventoryMouseClick"(int0: integer, int1: integer, int2: integer, clickType3: $ClickType$$Type, player4: $Player$$Type): void
public "handlePickItem"(int0: integer): void
public "handlePlaceRecipe"(int0: integer, recipe1: $Recipe$$Type<any>, boolean2: boolean): void
public "handler$cfo000$cancelBlockBreaking_FixAttackCD"(ci: $CallbackInfo$$Type): void
public "handler$eag000$clickSlot"(int0: integer, int1: integer, int2: integer, clickType3: $ClickType$$Type, player4: $Player$$Type, callbackInfo5: $CallbackInfo$$Type): void
public "handler$eag000$clickSlotPre"(int0: integer, int1: integer, int2: integer, clickType3: $ClickType$$Type, player4: $Player$$Type, callbackInfo5: $CallbackInfo$$Type): void
public "handler$eah000$clickCreativeStack"(itemStack0: $ItemStack$$Type, int1: integer, callbackInfo2: $CallbackInfo$$Type): void
public "handler$eah000$pickItem"(int0: integer, callbackInfo1: $CallbackInfo$$Type): void
public "handler$eaj000$internalOnSlotClickBegin"(int0: integer, int1: integer, int2: integer, clickType3: $ClickType$$Type, player4: $Player$$Type, callbackInfo5: $CallbackInfo$$Type): void
public "handler$eaj000$postInternalOnSlotClickBegin"(int0: integer, int1: integer, int2: integer, clickType3: $ClickType$$Type, player4: $Player$$Type, callbackInfo5: $CallbackInfo$$Type): void
public "hasExperience"(): boolean
public "hasFarPickRange"(): boolean
public "hasInfiniteItems"(): boolean
public "hasMissTime"(): boolean
public "interact"(player0: $Player$$Type, entity1: $Entity$$Type, interactionHand2: $InteractionHand$$Type): $InteractionResult
public "interactAt"(player0: $Player$$Type, entity1: $Entity$$Type, entityHitResult2: $EntityHitResult$$Type, interactionHand3: $InteractionHand$$Type): $InteractionResult
public "isAlwaysFlying"(): boolean
public "isDestroying"(): boolean
public "isServerControlledInventory"(): boolean
public "releaseUsingItem"(player0: $Player$$Type): void
public "setLocalMode"(gameType0: $GameType$$Type, gameType1: $GameType$$Type): void
public "setLocalMode"(gameType0: $GameType$$Type): void
public "startDestroyBlock"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "stopDestroyBlock"(): void
public "tick"(): void
public "useItem"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type): $InteractionResult
public "useItemOn"(localPlayer0: $LocalPlayer$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type): $InteractionResult
get "destroyBlockPos"(): $BlockPos
set "destroyBlockPos"(value: $BlockPos$$Type)
get "destroyDelay"(): integer
set "destroyDelay"(value: integer)
get "destroyProgress"(): float
set "destroyProgress"(value: float)
get "destroyStage"(): integer
get "pickRange"(): float
get "playerMode"(): $GameType
get "previousPlayerMode"(): $GameType
get "alwaysFlying"(): boolean
get "destroying"(): boolean
get "serverControlledInventory"(): boolean
set "localMode"(value: $GameType$$Type)
}
}

declare module "packages/net/minecraft/client/multiplayer/$ServerData$ServerPackStatus" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
static readonly "DISABLED": $ServerData$ServerPackStatus
static readonly "ENABLED": $ServerData$ServerPackStatus
static readonly "PROMPT": $ServerData$ServerPackStatus

public "getName"(): $Component
public static "valueOf"(string0: string): $ServerData$ServerPackStatus
public static "values"(): $ServerData$ServerPackStatus[]
get "name"(): $Component
}
}

declare module "packages/net/minecraft/client/multiplayer/chat/report/$ChatReportBuilder$ChatReport" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $AbuseReportLimits$$Type } from "packages/com/mojang/authlib/minecraft/report/$AbuseReportLimits"

export class $ChatReportBuilder$ChatReport {
public "copy"(): $ChatReportBuilder$ChatReport
public "isReportedPlayer"(uUID0: $UUID$$Type): boolean
public "toggleReported"(int0: integer, abuseReportLimits1: $AbuseReportLimits$$Type): void
}
}

declare module "packages/net/minecraft/client/multiplayer/chat/$ChatLog" {
import { $LoggedChatEvent, $LoggedChatEvent$$Type } from "packages/net/minecraft/client/multiplayer/chat/$LoggedChatEvent"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ChatLog {
constructor(int0: integer)

public static "codec"(int0: integer): $Codec<$ChatLog>
public "end"(): integer
public "lookup"(int0: integer): $LoggedChatEvent
public "push"(loggedChatEvent0: $LoggedChatEvent$$Type): void
public "start"(): integer
}
}

