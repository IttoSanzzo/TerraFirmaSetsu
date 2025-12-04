declare module "packages/com/mojang/realmsclient/dto/$RealmsServer$State" {
import { $Enum } from "packages/java/lang/$Enum"

export class $RealmsServer$State extends $Enum<$RealmsServer$State> {
static readonly "CLOSED": $RealmsServer$State
static readonly "OPEN": $RealmsServer$State
static readonly "UNINITIALIZED": $RealmsServer$State

public static "valueOf"(string0: string): $RealmsServer$State
public static "values"(): $RealmsServer$State[]
}
}

declare module "packages/com/mojang/realmsclient/client/$RealmsClient$Environment" {
import { $Enum } from "packages/java/lang/$Enum"
import { $Optional } from "packages/java/util/$Optional"

export class $RealmsClient$Environment extends $Enum<$RealmsClient$Environment> {
static readonly "LOCAL": $RealmsClient$Environment
static readonly "PRODUCTION": $RealmsClient$Environment
static readonly "STAGE": $RealmsClient$Environment

public static "byName"(string0: string): $Optional<$RealmsClient$Environment>
public static "valueOf"(string0: string): $RealmsClient$Environment
public static "values"(): $RealmsClient$Environment[]
get "baseUrl"(): string
set "baseUrl"(value: string)
get "protocol"(): string
set "protocol"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/util/$LevelType" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $LevelType extends $Enum<$LevelType> {
static readonly "AMPLIFIED": $LevelType
static readonly "DEFAULT": $LevelType
static readonly "FLAT": $LevelType
static readonly "LARGE_BIOMES": $LevelType

public "getDtoIndex"(): integer
public "getName"(): $Component
public static "valueOf"(string0: string): $LevelType
public static "values"(): $LevelType[]
get "dtoIndex"(): integer
get "name"(): $Component
}
}

declare module "packages/com/mojang/realmsclient/util/$RealmsPersistence" {
import { $RealmsPersistence$RealmsPersistenceData, $RealmsPersistence$RealmsPersistenceData$$Type } from "packages/com/mojang/realmsclient/util/$RealmsPersistence$RealmsPersistenceData"

export class $RealmsPersistence {
constructor()

public "read"(): $RealmsPersistence$RealmsPersistenceData
public static "readFile"(): $RealmsPersistence$RealmsPersistenceData
public "save"(realmsPersistenceData0: $RealmsPersistence$RealmsPersistenceData$$Type): void
public static "writeFile"(realmsPersistenceData0: $RealmsPersistence$RealmsPersistenceData$$Type): void
}
}

declare module "packages/com/mojang/realmsclient/dto/$RealmsServerList" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RealmsServer, $RealmsServer$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsServer"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsServerList extends $ValueObject {
constructor()

public static "parse"(string0: string): $RealmsServerList
get "servers"(): $List<$RealmsServer>
set "servers"(value: $List$$Type<$RealmsServer$$Type>)
}
}

declare module "packages/com/mojang/realmsclient/gui/task/$DataFetcher" {
import { $DataFetcher$Task } from "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Task"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $RepeatedDelayStrategy$$Type } from "packages/com/mojang/realmsclient/gui/task/$RepeatedDelayStrategy"
import { $TimeSource$$Type } from "packages/net/minecraft/util/$TimeSource"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Duration$$Type } from "packages/java/time/$Duration"
import { $DataFetcher$Subscription } from "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Subscription"

export class $DataFetcher {
constructor(executor0: $Executor$$Type, timeUnit1: $TimeUnit$$Type, timeSource2: $TimeSource$$Type)

public "createSubscription"(): $DataFetcher$Subscription
public "createTask"<T>(string0: string, callable1: $Callable$$Type<T>, duration2: $Duration$$Type, repeatedDelayStrategy3: $RepeatedDelayStrategy$$Type): $DataFetcher$Task<T>
}
}

declare module "packages/com/mojang/realmsclient/client/$RealmsClient$CompatibleVersionResponse" {
import { $Enum } from "packages/java/lang/$Enum"

export class $RealmsClient$CompatibleVersionResponse extends $Enum<$RealmsClient$CompatibleVersionResponse> {
static readonly "COMPATIBLE": $RealmsClient$CompatibleVersionResponse
static readonly "OTHER": $RealmsClient$CompatibleVersionResponse
static readonly "OUTDATED": $RealmsClient$CompatibleVersionResponse

public static "valueOf"(string0: string): $RealmsClient$CompatibleVersionResponse
public static "values"(): $RealmsClient$CompatibleVersionResponse[]
}
}

declare module "packages/com/mojang/realmsclient/dto/$Subscription$SubscriptionType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Subscription$SubscriptionType extends $Enum<$Subscription$SubscriptionType> {
static readonly "NORMAL": $Subscription$SubscriptionType
static readonly "RECURRING": $Subscription$SubscriptionType

public static "valueOf"(string0: string): $Subscription$SubscriptionType
public static "values"(): $Subscription$SubscriptionType[]
}
}

declare module "packages/com/mojang/realmsclient/dto/$RealmsWorldOptions" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsWorldOptions extends $ValueObject {
readonly "commandBlocks": boolean
readonly "difficulty": integer
readonly "forceGameMode": boolean
readonly "gameMode": integer
readonly "pvp": boolean
readonly "spawnAnimals": boolean
readonly "spawnMonsters": boolean
readonly "spawnNPCs": boolean
readonly "spawnProtection": integer

constructor(boolean0: boolean, boolean1: boolean, boolean2: boolean, boolean3: boolean, int4: integer, boolean5: boolean, int6: integer, int7: integer, boolean8: boolean, string9: string)

public "clone"(): $RealmsWorldOptions
public static "createDefaults"(): $RealmsWorldOptions
public static "createEmptyDefaults"(): $RealmsWorldOptions
public "getDefaultSlotName"(int0: integer): string
public "getSlotName"(int0: integer): string
public static "parse"(jsonObject0: $JsonObject$$Type): $RealmsWorldOptions
public "setEmpty"(boolean0: boolean): void
public "toJson"(): string
get "empty"(): boolean
set "empty"(value: boolean)
get "templateId"(): long
set "templateId"(value: long)
get "templateImage"(): string
set "templateImage"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/dto/$UploadInfo" {
import { $URI } from "packages/java/net/$URI"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $UploadInfo extends $ValueObject {
public static "assembleUri"(string0: string, int1: integer): $URI
public static "createRequest"(string0: string): string
public "getToken"(): string
public "getUploadEndpoint"(): $URI
public "isWorldClosed"(): boolean
public static "parse"(string0: string): $UploadInfo
get "token"(): string
get "uploadEndpoint"(): $URI
get "worldClosed"(): boolean
}
}

declare module "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Subscription" {
import { $DataFetcher$Task$$Type } from "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Task"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $DataFetcher$$Type } from "packages/com/mojang/realmsclient/gui/task/$DataFetcher"

export class $DataFetcher$Subscription {
constructor(dataFetcher0: $DataFetcher$$Type)

public "forceUpdate"(): void
public "reset"(): void
public "subscribe"<T>(task0: $DataFetcher$Task$$Type<T>, consumer1: $Consumer$$Type<T>): void
public "tick"(): void
}
}

declare module "packages/com/mojang/realmsclient/util/$RealmsPersistence$RealmsPersistenceData" {
import { $ReflectionBasedSerialization } from "packages/com/mojang/realmsclient/dto/$ReflectionBasedSerialization"

export class $RealmsPersistence$RealmsPersistenceData implements $ReflectionBasedSerialization {
constructor()

get "hasUnreadNews"(): boolean
set "hasUnreadNews"(value: boolean)
get "newsLink"(): string
set "newsLink"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/dto/$RealmsServer$WorldType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $RealmsServer$WorldType extends $Enum<$RealmsServer$WorldType> {
static readonly "ADVENTUREMAP": $RealmsServer$WorldType
static readonly "EXPERIENCE": $RealmsServer$WorldType
static readonly "INSPIRATION": $RealmsServer$WorldType
static readonly "MINIGAME": $RealmsServer$WorldType
static readonly "NORMAL": $RealmsServer$WorldType

public static "valueOf"(string0: string): $RealmsServer$WorldType
public static "values"(): $RealmsServer$WorldType[]
}
}

declare module "packages/com/mojang/realmsclient/gui/$RealmsNewsManager" {
import { $RealmsNews$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsNews"
import { $RealmsPersistence$$Type } from "packages/com/mojang/realmsclient/util/$RealmsPersistence"

export class $RealmsNewsManager {
constructor(realmsPersistence0: $RealmsPersistence$$Type)

public "hasUnreadNews"(): boolean
public "newsLink"(): string
public "updateUnreadNews"(realmsNews0: $RealmsNews$$Type): void
}
}

declare module "packages/com/mojang/realmsclient/dto/$ReflectionBasedSerialization" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ReflectionBasedSerialization {
}

export namespace $ReflectionBasedSerialization {
const probejs$$marker: never
}
export abstract class $ReflectionBasedSerialization$$Static implements $ReflectionBasedSerialization {
}
}

declare module "packages/com/mojang/realmsclient/dto/$RealmsServer" {
import { $RealmsWorldOptions, $RealmsWorldOptions$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsWorldOptions"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RealmsServer$WorldType, $RealmsServer$WorldType$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsServer$WorldType"
import { $RealmsServerPlayerList$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerList"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"
import { $ServerData } from "packages/net/minecraft/client/multiplayer/$ServerData"
import { $RealmsServer$State, $RealmsServer$State$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsServer$State"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $PlayerInfo, $PlayerInfo$$Type } from "packages/com/mojang/realmsclient/dto/$PlayerInfo"
import { $RealmsServerPing, $RealmsServerPing$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsServerPing"

export class $RealmsServer extends $ValueObject {
constructor()

public "cloneSlots"(map0: $Map$$Type<integer, $RealmsWorldOptions$$Type>): $Map<integer, $RealmsWorldOptions>
public "getDescription"(): string
public "getMinigameName"(): string
public "getName"(): string
public "getWorldName"(int0: integer): string
public static "parse"(jsonObject0: $JsonObject$$Type): $RealmsServer
public static "parse"(string0: string): $RealmsServer
public "setDescription"(string0: string): void
public "setName"(string0: string): void
public "toServerData"(string0: string): $ServerData
public "updateServerPing"(realmsServerPlayerList0: $RealmsServerPlayerList$$Type): void
get "activeSlot"(): integer
set "activeSlot"(value: integer)
get "daysLeft"(): integer
set "daysLeft"(value: integer)
get "expired"(): boolean
set "expired"(value: boolean)
get "expiredTrial"(): boolean
set "expiredTrial"(value: boolean)
get "id"(): long
set "id"(value: long)
get "minigameId"(): integer
set "minigameId"(value: integer)
get "minigameImage"(): string
set "minigameImage"(value: string)
get "minigameName"(): string
set "minigameName"(value: string)
get "motd"(): string
set "motd"(value: string)
get "name"(): string
set "name"(value: string)
get "owner"(): string
set "owner"(value: string)
get "ownerUUID"(): string
set "ownerUUID"(value: string)
get "players"(): $List<$PlayerInfo>
set "players"(value: $List$$Type<$PlayerInfo$$Type>)
get "remoteSubscriptionId"(): string
set "remoteSubscriptionId"(value: string)
get "serverPing"(): $RealmsServerPing
set "serverPing"(value: $RealmsServerPing$$Type)
get "slots"(): $Map<integer, $RealmsWorldOptions>
set "slots"(value: $Map$$Type<integer, $RealmsWorldOptions$$Type>)
get "state"(): $RealmsServer$State
set "state"(value: $RealmsServer$State$$Type)
get "worldType"(): $RealmsServer$WorldType
set "worldType"(value: $RealmsServer$WorldType$$Type)
get "description"(): string
set "description"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Task" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataFetcher$Task<T> {
public "reset"(): void
}
}

declare module "packages/com/mojang/realmsclient/dto/$RegionPingResult" {
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"
import { $ReflectionBasedSerialization } from "packages/com/mojang/realmsclient/dto/$ReflectionBasedSerialization"

export class $RegionPingResult extends $ValueObject implements $ReflectionBasedSerialization {
constructor(string0: string, int1: integer)

public "ping"(): integer
}
}

declare module "packages/com/mojang/realmsclient/dto/$RealmsServerPing" {
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsServerPing extends $ValueObject {
constructor()

get "nrOfPlayers"(): string
set "nrOfPlayers"(value: string)
get "playerList"(): string
set "playerList"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/dto/$WorldDownload" {
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $WorldDownload extends $ValueObject {
constructor()

public static "parse"(string0: string): $WorldDownload
get "downloadLink"(): string
set "downloadLink"(value: string)
get "resourcePackHash"(): string
set "resourcePackHash"(value: string)
get "resourcePackUrl"(): string
set "resourcePackUrl"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/dto/$BackupList" {
import { $Backup, $Backup$$Type } from "packages/com/mojang/realmsclient/dto/$Backup"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $BackupList extends $ValueObject {
constructor()

public static "parse"(string0: string): $BackupList
get "backups"(): $List<$Backup>
set "backups"(value: $List$$Type<$Backup$$Type>)
}
}

declare module "packages/com/mojang/realmsclient/dto/$RealmsNotification" {
import { $UUID } from "packages/java/util/$UUID"
import { $List } from "packages/java/util/$List"

export class $RealmsNotification {
public "dismissable"(): boolean
public static "parseList"(string0: string): $List<$RealmsNotification>
public "seen"(): boolean
public "uuid"(): $UUID
}
}

declare module "packages/com/mojang/realmsclient/dto/$PendingInvite" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Date, $Date$$Type } from "packages/java/util/$Date"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $PendingInvite extends $ValueObject {
constructor()

public static "parse"(jsonObject0: $JsonObject$$Type): $PendingInvite
get "date"(): $Date
set "date"(value: $Date$$Type)
get "invitationId"(): string
set "invitationId"(value: string)
get "worldName"(): string
set "worldName"(value: string)
get "worldOwnerName"(): string
set "worldOwnerName"(value: string)
get "worldOwnerUuid"(): string
set "worldOwnerUuid"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/dto/$WorldTemplatePaginatedList" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $WorldTemplate, $WorldTemplate$$Type } from "packages/com/mojang/realmsclient/dto/$WorldTemplate"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $WorldTemplatePaginatedList extends $ValueObject {
constructor()
constructor(int0: integer)

public "isLastPage"(): boolean
public static "parse"(string0: string): $WorldTemplatePaginatedList
get "page"(): integer
set "page"(value: integer)
get "size"(): integer
set "size"(value: integer)
get "templates"(): $List<$WorldTemplate>
set "templates"(value: $List$$Type<$WorldTemplate$$Type>)
get "total"(): integer
set "total"(value: integer)
get "lastPage"(): boolean
}
}

declare module "packages/com/mojang/realmsclient/dto/$Backup" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Date, $Date$$Type } from "packages/java/util/$Date"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $Backup extends $ValueObject {
constructor()

public "isUploadedVersion"(): boolean
public static "parse"(jsonElement0: $JsonElement$$Type): $Backup
public "setUploadedVersion"(boolean0: boolean): void
get "backupId"(): string
set "backupId"(value: string)
get "changeList"(): $Map<string, string>
set "changeList"(value: $Map$$Type<string, string>)
get "lastModifiedDate"(): $Date
set "lastModifiedDate"(value: $Date$$Type)
get "metadata"(): $Map<string, string>
set "metadata"(value: $Map$$Type<string, string>)
get "size"(): long
set "size"(value: long)
get "uploadedVersion"(): boolean
set "uploadedVersion"(value: boolean)
}
}

declare module "packages/com/mojang/realmsclient/gui/$RealmsDataFetcher" {
import { $DataFetcher$Task } from "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Task"
import { $RealmsNews } from "packages/com/mojang/realmsclient/dto/$RealmsNews"
import { $RealmsServerPlayerLists } from "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerLists"
import { $RealmsNewsManager } from "packages/com/mojang/realmsclient/gui/$RealmsNewsManager"
import { $List } from "packages/java/util/$List"
import { $RealmsServer } from "packages/com/mojang/realmsclient/dto/$RealmsServer"
import { $RealmsNotification } from "packages/com/mojang/realmsclient/dto/$RealmsNotification"
import { $DataFetcher } from "packages/com/mojang/realmsclient/gui/task/$DataFetcher"
import { $RealmsClient$$Type } from "packages/com/mojang/realmsclient/client/$RealmsClient"

export class $RealmsDataFetcher {
readonly "dataFetcher": $DataFetcher
readonly "liveStatsTask": $DataFetcher$Task<$RealmsServerPlayerLists>
readonly "newsManager": $RealmsNewsManager
readonly "newsTask": $DataFetcher$Task<$RealmsNews>
readonly "notificationsTask": $DataFetcher$Task<$List<$RealmsNotification>>
readonly "pendingInvitesTask": $DataFetcher$Task<integer>
readonly "serverListUpdateTask": $DataFetcher$Task<$List<$RealmsServer>>
readonly "trialAvailabilityTask": $DataFetcher$Task<boolean>

constructor(realmsClient0: $RealmsClient$$Type)

}
}

declare module "packages/com/mojang/realmsclient/dto/$ServerActivity" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $ServerActivity extends $ValueObject {
constructor()

public static "parse"(jsonObject0: $JsonObject$$Type): $ServerActivity
get "joinTime"(): long
set "joinTime"(value: long)
get "leaveTime"(): long
set "leaveTime"(value: long)
get "profileUuid"(): string
set "profileUuid"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/dto/$RealmsServerAddress" {
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsServerAddress extends $ValueObject {
constructor()

public static "parse"(string0: string): $RealmsServerAddress
get "address"(): string
set "address"(value: string)
get "resourcePackHash"(): string
set "resourcePackHash"(value: string)
get "resourcePackUrl"(): string
set "resourcePackUrl"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerList" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsServerPlayerList extends $ValueObject {
constructor()

public static "parse"(jsonObject0: $JsonObject$$Type): $RealmsServerPlayerList
get "players"(): $List<string>
set "players"(value: $List$$Type<string>)
get "serverId"(): long
set "serverId"(value: long)
}
}

declare module "packages/com/mojang/realmsclient/dto/$ValueObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ValueObject {
constructor()

}
}

declare module "packages/com/mojang/realmsclient/dto/$PingResult" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"
import { $RegionPingResult, $RegionPingResult$$Type } from "packages/com/mojang/realmsclient/dto/$RegionPingResult"
import { $ReflectionBasedSerialization } from "packages/com/mojang/realmsclient/dto/$ReflectionBasedSerialization"

export class $PingResult extends $ValueObject implements $ReflectionBasedSerialization {
constructor()

get "pingResults"(): $List<$RegionPingResult>
set "pingResults"(value: $List$$Type<$RegionPingResult$$Type>)
get "worldIds"(): $List<long>
set "worldIds"(value: $List$$Type<long>)
}
}

declare module "packages/com/mojang/realmsclient/dto/$Ops" {
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $Ops extends $ValueObject {
constructor()

public static "parse"(string0: string): $Ops
get "ops"(): $Set<string>
set "ops"(value: $Set$$Type<string>)
}
}

declare module "packages/com/mojang/realmsclient/dto/$RealmsNews" {
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsNews extends $ValueObject {
constructor()

public static "parse"(string0: string): $RealmsNews
get "newsLink"(): string
set "newsLink"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/util/$WorldGenerationInfo" {
import { $LevelType, $LevelType$$Type } from "packages/com/mojang/realmsclient/util/$LevelType"

export class $WorldGenerationInfo {
constructor(string0: string, levelType1: $LevelType$$Type, boolean2: boolean)

public "getLevelType"(): $LevelType
public "getSeed"(): string
public "shouldGenerateStructures"(): boolean
get "levelType"(): $LevelType
get "seed"(): string
}
}

declare module "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerLists" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RealmsServerPlayerList, $RealmsServerPlayerList$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerList"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsServerPlayerLists extends $ValueObject {
constructor()

public static "parse"(string0: string): $RealmsServerPlayerLists
get "servers"(): $List<$RealmsServerPlayerList>
set "servers"(value: $List$$Type<$RealmsServerPlayerList$$Type>)
}
}

declare module "packages/com/mojang/realmsclient/dto/$WorldTemplate" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"
import { $WorldTemplate$WorldTemplateType, $WorldTemplate$WorldTemplateType$$Type } from "packages/com/mojang/realmsclient/dto/$WorldTemplate$WorldTemplateType"

export class $WorldTemplate extends $ValueObject {
constructor()

public static "parse"(jsonObject0: $JsonObject$$Type): $WorldTemplate
get "author"(): string
set "author"(value: string)
get "id"(): string
set "id"(value: string)
get "image"(): string
set "image"(value: string)
get "link"(): string
set "link"(value: string)
get "name"(): string
set "name"(value: string)
get "recommendedPlayers"(): string
set "recommendedPlayers"(value: string)
get "trailer"(): string
set "trailer"(value: string)
get "type"(): $WorldTemplate$WorldTemplateType
set "type"(value: $WorldTemplate$WorldTemplateType$$Type)
get "version"(): string
set "version"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/client/$RealmsClient" {
import { $RealmsNews } from "packages/com/mojang/realmsclient/dto/$RealmsNews"
import { $Ops } from "packages/com/mojang/realmsclient/dto/$Ops"
import { $ServerActivityList } from "packages/com/mojang/realmsclient/dto/$ServerActivityList"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $UploadInfo } from "packages/com/mojang/realmsclient/dto/$UploadInfo"
import { $BackupList } from "packages/com/mojang/realmsclient/dto/$BackupList"
import { $RealmsNotification } from "packages/com/mojang/realmsclient/dto/$RealmsNotification"
import { $RealmsServerAddress } from "packages/com/mojang/realmsclient/dto/$RealmsServerAddress"
import { $WorldDownload } from "packages/com/mojang/realmsclient/dto/$WorldDownload"
import { $RealmsClient$CompatibleVersionResponse } from "packages/com/mojang/realmsclient/client/$RealmsClient$CompatibleVersionResponse"
import { $PendingInvitesList } from "packages/com/mojang/realmsclient/dto/$PendingInvitesList"
import { $RealmsWorldOptions$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsWorldOptions"
import { $PingResult$$Type } from "packages/com/mojang/realmsclient/dto/$PingResult"
import { $RealmsServerPlayerLists } from "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerLists"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $WorldGenerationInfo$$Type } from "packages/com/mojang/realmsclient/util/$WorldGenerationInfo"
import { $Subscription } from "packages/com/mojang/realmsclient/dto/$Subscription"
import { $RealmsServerList } from "packages/com/mojang/realmsclient/dto/$RealmsServerList"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RealmsServer$WorldType$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsServer$WorldType"
import { $RealmsServer } from "packages/com/mojang/realmsclient/dto/$RealmsServer"
import { $RealmsClient$Environment } from "packages/com/mojang/realmsclient/client/$RealmsClient$Environment"
import { $WorldTemplatePaginatedList } from "packages/com/mojang/realmsclient/dto/$WorldTemplatePaginatedList"

export class $RealmsClient {
static "currentEnvironment": $RealmsClient$Environment

constructor(string0: string, string1: string, minecraft2: $Minecraft$$Type)

public "acceptInvitation"(string0: string): void
public "agreeToTos"(): void
public "backupsFor"(long0: long): $BackupList
public "clientCompatible"(): $RealmsClient$CompatibleVersionResponse
public "close"(long0: long): boolean
public static "create"(): $RealmsClient
public static "create"(minecraft0: $Minecraft$$Type): $RealmsClient
public "deleteWorld"(long0: long): void
public "deop"(long0: long, string1: string): $Ops
public "fetchWorldTemplates"(int0: integer, int1: integer, worldType2: $RealmsServer$WorldType$$Type): $WorldTemplatePaginatedList
public "getActivity"(long0: long): $ServerActivityList
public "getLiveStats"(): $RealmsServerPlayerLists
public "getNews"(): $RealmsNews
public "getNotifications"(): $List<$RealmsNotification>
public "getOwnWorld"(long0: long): $RealmsServer
public "initializeWorld"(long0: long, string1: string, string2: string): void
public "invite"(long0: long, string1: string): $RealmsServer
public "join"(long0: long): $RealmsServerAddress
public "listWorlds"(): $RealmsServerList
public "mcoEnabled"(): boolean
public "notificationsDismiss"(list0: $List$$Type<$UUID$$Type>): void
public "notificationsSeen"(list0: $List$$Type<$UUID$$Type>): void
public "op"(long0: long, string1: string): $Ops
public "open"(long0: long): boolean
public "pendingInvites"(): $PendingInvitesList
public "pendingInvitesCount"(): integer
public "putIntoMinigameMode"(long0: long, string1: string): boolean
public "rejectInvitation"(string0: string): void
public "requestDownloadInfo"(long0: long, int1: integer): $WorldDownload
public "requestUploadInfo"(long0: long, string1: string): $UploadInfo
public "resetWorldWithSeed"(long0: long, worldGenerationInfo1: $WorldGenerationInfo$$Type): boolean
public "resetWorldWithTemplate"(long0: long, string1: string): boolean
public "restoreWorld"(long0: long, string1: string): void
public "sendPingResults"(pingResult0: $PingResult$$Type): void
public "stageAvailable"(): boolean
public "subscriptionFor"(long0: long): $Subscription
public "switchSlot"(long0: long, int1: integer): boolean
public static "switchToLocal"(): void
public static "switchToProd"(): void
public static "switchToStage"(): void
public "trialAvailable"(): boolean
public "uninvite"(long0: long, string1: string): void
public "uninviteMyselfFrom"(long0: long): void
public "update"(long0: long, string1: string, string2: string): void
public "updateSlot"(long0: long, int1: integer, realmsWorldOptions2: $RealmsWorldOptions$$Type): void
get "liveStats"(): $RealmsServerPlayerLists
get "news"(): $RealmsNews
get "notifications"(): $List<$RealmsNotification>
}
}

declare module "packages/com/mojang/realmsclient/dto/$WorldTemplate$WorldTemplateType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $WorldTemplate$WorldTemplateType extends $Enum<$WorldTemplate$WorldTemplateType> {
static readonly "ADVENTUREMAP": $WorldTemplate$WorldTemplateType
static readonly "EXPERIENCE": $WorldTemplate$WorldTemplateType
static readonly "INSPIRATION": $WorldTemplate$WorldTemplateType
static readonly "MINIGAME": $WorldTemplate$WorldTemplateType
static readonly "WORLD_TEMPLATE": $WorldTemplate$WorldTemplateType

public static "valueOf"(string0: string): $WorldTemplate$WorldTemplateType
public static "values"(): $WorldTemplate$WorldTemplateType[]
}
}

declare module "packages/com/mojang/realmsclient/dto/$PlayerInfo" {
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"
import { $ReflectionBasedSerialization } from "packages/com/mojang/realmsclient/dto/$ReflectionBasedSerialization"

export class $PlayerInfo extends $ValueObject implements $ReflectionBasedSerialization {
constructor()

public "getAccepted"(): boolean
public "getName"(): string
public "getOnline"(): boolean
public "getUuid"(): string
public "isOperator"(): boolean
public "setAccepted"(boolean0: boolean): void
public "setName"(string0: string): void
public "setOnline"(boolean0: boolean): void
public "setOperator"(boolean0: boolean): void
public "setUuid"(string0: string): void
get "accepted"(): boolean
get "name"(): string
get "online"(): boolean
get "uuid"(): string
get "operator"(): boolean
set "accepted"(value: boolean)
set "name"(value: string)
set "online"(value: boolean)
set "operator"(value: boolean)
set "uuid"(value: string)
}
}

declare module "packages/com/mojang/realmsclient/gui/task/$RepeatedDelayStrategy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RepeatedDelayStrategy {
"delayCyclesAfterFailure"(): long
"delayCyclesAfterSuccess"(): long
}

export namespace $RepeatedDelayStrategy {
const CONSTANT: $RepeatedDelayStrategy
function exponentialBackoff(int0: integer): $RepeatedDelayStrategy
}
export abstract class $RepeatedDelayStrategy$$Static implements $RepeatedDelayStrategy {
static readonly "CONSTANT": $RepeatedDelayStrategy

static "exponentialBackoff"(int0: integer): $RepeatedDelayStrategy
}
}

declare module "packages/com/mojang/realmsclient/dto/$PendingInvitesList" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"
import { $PendingInvite, $PendingInvite$$Type } from "packages/com/mojang/realmsclient/dto/$PendingInvite"

export class $PendingInvitesList extends $ValueObject {
constructor()

public static "parse"(string0: string): $PendingInvitesList
get "pendingInvites"(): $List<$PendingInvite>
set "pendingInvites"(value: $List$$Type<$PendingInvite$$Type>)
}
}

declare module "packages/com/mojang/realmsclient/dto/$ServerActivityList" {
import { $ServerActivity, $ServerActivity$$Type } from "packages/com/mojang/realmsclient/dto/$ServerActivity"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $ServerActivityList extends $ValueObject {
constructor()

public static "parse"(string0: string): $ServerActivityList
get "periodInMillis"(): long
set "periodInMillis"(value: long)
get "serverActivities"(): $List<$ServerActivity>
set "serverActivities"(value: $List$$Type<$ServerActivity$$Type>)
}
}

declare module "packages/com/mojang/realmsclient/dto/$Subscription" {
import { $Subscription$SubscriptionType, $Subscription$SubscriptionType$$Type } from "packages/com/mojang/realmsclient/dto/$Subscription$SubscriptionType"
import { $ValueObject } from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $Subscription extends $ValueObject {
constructor()

public static "parse"(string0: string): $Subscription
get "daysLeft"(): integer
set "daysLeft"(value: integer)
get "startDate"(): long
set "startDate"(value: long)
get "type"(): $Subscription$SubscriptionType
set "type"(value: $Subscription$SubscriptionType$$Type)
}
}

