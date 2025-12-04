declare module "packages/xaero/pac/common/server/claims/api/$IServerRegionClaimsAPI" {
import { $IRegionClaimsAPI } from "packages/xaero/pac/common/claims/api/$IRegionClaimsAPI"
import { $IPlayerChunkClaimAPI } from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"

export interface $IServerRegionClaimsAPI extends $IRegionClaimsAPI {
"get"(int0: integer, int1: integer): $IPlayerChunkClaimAPI
"getX"(): integer
"getZ"(): integer
get "x"(): integer
get "z"(): integer
}

export namespace $IServerRegionClaimsAPI {
const probejs$$marker: never
}
export abstract class $IServerRegionClaimsAPI$$Static implements $IServerRegionClaimsAPI {
}
}

declare module "packages/xaero/pac/common/claims/result/api/$ClaimResult" {
import { $ClaimResult$Type, $ClaimResult$Type$$Type } from "packages/xaero/pac/common/claims/result/api/$ClaimResult$Type"
import { $IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$$Type } from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"

export class $ClaimResult<C extends $IPlayerChunkClaimAPI> {
constructor(c0: C, type1: $ClaimResult$Type$$Type)

public "getClaimResult"(): C
public "getResultType"(): $ClaimResult$Type
get "claimResult"(): C
get "resultType"(): $ClaimResult$Type
}
}

declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigOptionClientStorageAPI" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $BiPredicate } from "packages/java/util/function/$BiPredicate"
import { $IPlayerConfigClientStorageAPI } from "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI"
import { $IPlayerConfigOptionSpecAPI } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import { $Class } from "packages/java/lang/$Class"

export interface $IPlayerConfigOptionClientStorageAPI<T extends $Comparable<T>> {
"getComment"(): string
"getCommentTranslation"(): string
"getCommentTranslationArgs"(): any[]
"getId"(): string
"getOption"(): $IPlayerConfigOptionSpecAPI<T>
"getTooltipPrefix"(): string
"getTranslation"(): string
"getTranslationArgs"(): any[]
"getType"(): $Class<T>
"getValidator"(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>
"getValue"(): T
"isDefaulted"(): boolean
"isMutable"(): boolean
get "comment"(): string
get "commentTranslation"(): string
get "commentTranslationArgs"(): any[]
get "id"(): string
get "option"(): $IPlayerConfigOptionSpecAPI<T>
get "tooltipPrefix"(): string
get "translation"(): string
get "translationArgs"(): any[]
get "type"(): $Class<T>
get "validator"(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>
get "value"(): T
get "defaulted"(): boolean
get "mutable"(): boolean
}

export namespace $IPlayerConfigOptionClientStorageAPI {
const probejs$$marker: never
}
export abstract class $IPlayerConfigOptionClientStorageAPI$$Static<T extends $Comparable<T>> implements $IPlayerConfigOptionClientStorageAPI<T> {
}
}

declare module "packages/xaero/pac/common/server/core/accessor/$IServerGamePacketListenerImpl" {
import { $Connection } from "packages/net/minecraft/network/$Connection"

export interface $IServerGamePacketListenerImpl {
"getXaero_OPAC_connection"(): $Connection
get "xaero_OPAC_connection"(): $Connection
}

export namespace $IServerGamePacketListenerImpl {
const probejs$$marker: never
}
export abstract class $IServerGamePacketListenerImpl$$Static implements $IServerGamePacketListenerImpl {
}
}

declare module "packages/xaero/pac/common/server/parties/system/api/$IPlayerPartySystemAPI" {
import { $UUID$$Type } from "packages/java/util/$UUID"

export interface $IPlayerPartySystemAPI<P> {
"getPartyByMember"(uUID0: $UUID$$Type): P
"getPartyByOwner"(uUID0: $UUID$$Type): P
"isPermittedToPartyClaim"(uUID0: $UUID$$Type): boolean
"isPlayerAllying"(uUID0: $UUID$$Type, uUID1: $UUID$$Type): boolean
}

export namespace $IPlayerPartySystemAPI {
const probejs$$marker: never
}
export abstract class $IPlayerPartySystemAPI$$Static<P> implements $IPlayerPartySystemAPI<P> {
}
}

declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI" {
import { $IPlayerChunkClaimAPI$$Type } from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IClaimsManagerListenerAPI {
"onChunkChange"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, iPlayerChunkClaimAPI3: $IPlayerChunkClaimAPI$$Type): void
"onDimensionChange"(resourceLocation0: $ResourceLocation$$Type): void
"onWholeRegionChange"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer): void
}

export namespace $IClaimsManagerListenerAPI {
const probejs$$marker: never
}
export abstract class $IClaimsManagerListenerAPI$$Static implements $IClaimsManagerListenerAPI {
}
}

declare module "packages/xaero/pac/common/server/player/localization/api/$IAdaptiveLocalizerAPI" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IAdaptiveLocalizerAPI {
"getFor"(serverPlayer0: $ServerPlayer$$Type, string1: string, ...object2s: any[]): $MutableComponent
"getFor"(serverPlayer0: $ServerPlayer$$Type, component1: $Component$$Type): $Component
}

export namespace $IAdaptiveLocalizerAPI {
const probejs$$marker: never
}
export abstract class $IAdaptiveLocalizerAPI$$Static implements $IAdaptiveLocalizerAPI {
}
}

declare module "packages/xaero/pac/client/event/api/$OPACClientAddonRegisterEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IClaimsManagerTrackerRegisterAPI, $IClaimsManagerTrackerRegisterAPI$$Type } from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerRegisterAPI"
import { $IClaimsManagerClaimResultTrackerRegisterAPI, $IClaimsManagerClaimResultTrackerRegisterAPI$$Type } from "packages/xaero/pac/client/claims/tracker/result/api/$IClaimsManagerClaimResultTrackerRegisterAPI"

export class $OPACClientAddonRegisterEvent extends $Event {
constructor()
constructor(iClaimsManagerTrackerRegisterAPI0: $IClaimsManagerTrackerRegisterAPI$$Type, iClaimsManagerClaimResultTrackerRegisterAPI1: $IClaimsManagerClaimResultTrackerRegisterAPI$$Type)

public "getClaimsManagerClaimResultTrackerAPI"(): $IClaimsManagerClaimResultTrackerRegisterAPI
public "getClaimsManagerTrackerAPI"(): $IClaimsManagerTrackerRegisterAPI
get "claimsManagerClaimResultTrackerAPI"(): $IClaimsManagerClaimResultTrackerRegisterAPI
get "claimsManagerTrackerAPI"(): $IClaimsManagerTrackerRegisterAPI
}
}

declare module "packages/xaero/pac/common/parties/party/api/$IPartyMemberDynamicInfoSyncableAPI" {
import { $UUID } from "packages/java/util/$UUID"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IPartyMemberDynamicInfoSyncableAPI {
"getDimension"(): $ResourceLocation
"getPlayerId"(): $UUID
"getX"(): double
"getY"(): double
"getZ"(): double
get "dimension"(): $ResourceLocation
get "playerId"(): $UUID
get "x"(): double
get "y"(): double
get "z"(): double
}

export namespace $IPartyMemberDynamicInfoSyncableAPI {
const probejs$$marker: never
}
export abstract class $IPartyMemberDynamicInfoSyncableAPI$$Static implements $IPartyMemberDynamicInfoSyncableAPI {
}
}

declare module "packages/xaero/pac/client/claims/tracker/result/api/$IClaimsManagerClaimResultListenerAPI" {
import { $AreaClaimResult$$Type } from "packages/xaero/pac/common/claims/result/api/$AreaClaimResult"

export interface $IClaimsManagerClaimResultListenerAPI {
"onClaimResult"(areaClaimResult0: $AreaClaimResult$$Type): void
}

export namespace $IClaimsManagerClaimResultListenerAPI {
const probejs$$marker: never
}
export abstract class $IClaimsManagerClaimResultListenerAPI$$Static implements $IClaimsManagerClaimResultListenerAPI {
}
}

declare module "packages/xaero/pac/common/event/api/$OPACServerAddonRegisterEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $MinecraftServer, $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $IClaimsManagerTrackerRegisterAPI, $IClaimsManagerTrackerRegisterAPI$$Type } from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerRegisterAPI"
import { $IPlayerPermissionSystemRegisterAPI, $IPlayerPermissionSystemRegisterAPI$$Type } from "packages/xaero/pac/common/server/player/permission/api/$IPlayerPermissionSystemRegisterAPI"
import { $IPlayerPartySystemRegisterAPI, $IPlayerPartySystemRegisterAPI$$Type } from "packages/xaero/pac/common/server/parties/system/api/$IPlayerPartySystemRegisterAPI"

export class $OPACServerAddonRegisterEvent extends $Event {
constructor()
constructor(minecraftServer0: $MinecraftServer$$Type, iPlayerPermissionSystemRegisterAPI1: $IPlayerPermissionSystemRegisterAPI$$Type, iPlayerPartySystemRegisterAPI2: $IPlayerPartySystemRegisterAPI$$Type, iClaimsManagerTrackerRegisterAPI3: $IClaimsManagerTrackerRegisterAPI$$Type)

public "getClaimsManagerTrackerAPI"(): $IClaimsManagerTrackerRegisterAPI
public "getPartySystemManagerAPI"(): $IPlayerPartySystemRegisterAPI
public "getPermissionSystemManager"(): $IPlayerPermissionSystemRegisterAPI
public "getServer"(): $MinecraftServer
get "claimsManagerTrackerAPI"(): $IClaimsManagerTrackerRegisterAPI
get "partySystemManagerAPI"(): $IPlayerPartySystemRegisterAPI
get "permissionSystemManager"(): $IPlayerPermissionSystemRegisterAPI
get "server"(): $MinecraftServer
}
}

declare module "packages/xaero/pac/common/server/parties/party/api/$IPartyManagerAPI" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $IServerPartyAPI, $IServerPartyAPI$$Type } from "packages/xaero/pac/common/server/parties/party/api/$IServerPartyAPI"
import { $Stream } from "packages/java/util/stream/$Stream"

export interface $IPartyManagerAPI {
"createPartyForOwner"(player0: $Player$$Type): $IServerPartyAPI
"getAllStream"(): $Stream<$IServerPartyAPI>
"getPartiesThatAlly"(uUID0: $UUID$$Type): $Stream<$IServerPartyAPI>
"getPartyById"(uUID0: $UUID$$Type): $IServerPartyAPI
"getPartyByMember"(uUID0: $UUID$$Type): $IServerPartyAPI
"getPartyByOwner"(uUID0: $UUID$$Type): $IServerPartyAPI
"partyExistsForOwner"(uUID0: $UUID$$Type): boolean
"removeParty"(iServerPartyAPI0: $IServerPartyAPI$$Type): void
"removePartyById"(uUID0: $UUID$$Type): void
"removePartyByOwner"(uUID0: $UUID$$Type): void
get "allStream"(): $Stream<$IServerPartyAPI>
}

export namespace $IPartyManagerAPI {
const probejs$$marker: never
}
export abstract class $IPartyManagerAPI$$Static implements $IPartyManagerAPI {
}
}

declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigStringableOptionClientStorageAPI" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Function } from "packages/java/util/function/$Function"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $BiPredicate } from "packages/java/util/function/$BiPredicate"
import { $IPlayerConfigClientStorageAPI } from "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI"
import { $IPlayerConfigOptionClientStorageAPI } from "packages/xaero/pac/client/player/config/api/$IPlayerConfigOptionClientStorageAPI"
import { $IPlayerConfigOptionSpecAPI } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import { $Class } from "packages/java/lang/$Class"

export interface $IPlayerConfigStringableOptionClientStorageAPI<T extends $Comparable<T>> extends $IPlayerConfigOptionClientStorageAPI<T> {
"getCommandInputParser"(): $Function<string, T>
"getCommandOutputWriterCast"(): $Function<any, $Component>
"getComment"(): string
"getCommentTranslation"(): string
"getCommentTranslationArgs"(): any[]
"getId"(): string
"getOption"(): $IPlayerConfigOptionSpecAPI<T>
"getStringValidator"(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>
"getTooltipPrefix"(): string
"getTranslation"(): string
"getTranslationArgs"(): any[]
"getType"(): $Class<T>
"getValidator"(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>
"getValue"(): T
"isDefaulted"(): boolean
"isMutable"(): boolean
get "commandInputParser"(): $Function<string, T>
get "commandOutputWriterCast"(): $Function<any, $Component>
get "comment"(): string
get "commentTranslation"(): string
get "commentTranslationArgs"(): any[]
get "id"(): string
get "option"(): $IPlayerConfigOptionSpecAPI<T>
get "stringValidator"(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>
get "tooltipPrefix"(): string
get "translation"(): string
get "translationArgs"(): any[]
get "type"(): $Class<T>
get "validator"(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>
get "value"(): T
get "defaulted"(): boolean
get "mutable"(): boolean
}

export namespace $IPlayerConfigStringableOptionClientStorageAPI {
const probejs$$marker: never
}
export abstract class $IPlayerConfigStringableOptionClientStorageAPI$$Static<T extends $Comparable<T>> implements $IPlayerConfigStringableOptionClientStorageAPI<T> {
}
}

declare module "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI" {
import { $UUID } from "packages/java/util/$UUID"

export interface $IPlayerChunkClaimAPI {
"getPlayerId"(): $UUID
"getSubConfigIndex"(): integer
"isForceloadable"(): boolean
"isSameClaimType"(iPlayerChunkClaimAPI0: $IPlayerChunkClaimAPI$$Type): boolean
get "playerId"(): $UUID
get "subConfigIndex"(): integer
get "forceloadable"(): boolean
}

export namespace $IPlayerChunkClaimAPI {
const probejs$$marker: never
}
export abstract class $IPlayerChunkClaimAPI$$Static implements $IPlayerChunkClaimAPI {
}
}

declare module "packages/xaero/pac/common/mixin/create/$MixinAccessorDeployerFakePlayer" {
import { $Pair } from "packages/org/apache/commons/lang3/tuple/$Pair"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export interface $MixinAccessorDeployerFakePlayer {
"getBlockBreakingProgress"(): $Pair<$BlockPos, float>
get "blockBreakingProgress"(): $Pair<$BlockPos, float>
}

export namespace $MixinAccessorDeployerFakePlayer {
const probejs$$marker: never
}
export abstract class $MixinAccessorDeployerFakePlayer$$Static implements $MixinAccessorDeployerFakePlayer {
}
}

declare module "packages/xaero/pac/common/parties/party/member/$PartyMemberRank" {
import { $Enum } from "packages/java/lang/$Enum"
import { $ChatFormatting } from "packages/net/minecraft/$ChatFormatting"

export class $PartyMemberRank extends $Enum<$PartyMemberRank> {
static readonly "ADMIN": $PartyMemberRank
static readonly "MEMBER": $PartyMemberRank
static readonly "MODERATOR": $PartyMemberRank

public "getColor"(): $ChatFormatting
public static "valueOf"(string0: string): $PartyMemberRank
public static "values"(): $PartyMemberRank[]
get "color"(): $ChatFormatting
}
}

declare module "packages/xaero/pac/common/claims/api/$IDimensionClaimsManagerAPI" {
import { $IRegionClaimsAPI } from "packages/xaero/pac/common/claims/api/$IRegionClaimsAPI"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IDimensionClaimsManagerAPI {
"getCount"(): integer
"getDimension"(): $ResourceLocation
"getRegion"(int0: integer, int1: integer): $IRegionClaimsAPI
get "count"(): integer
get "dimension"(): $ResourceLocation
}

export namespace $IDimensionClaimsManagerAPI {
const probejs$$marker: never
}
export abstract class $IDimensionClaimsManagerAPI$$Static implements $IDimensionClaimsManagerAPI {
}
}

declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerRegisterAPI" {
import { $IClaimsManagerListenerAPI$$Type } from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI"

export interface $IClaimsManagerTrackerRegisterAPI {
"register"(iClaimsManagerListenerAPI0: $IClaimsManagerListenerAPI$$Type): void
}

export namespace $IClaimsManagerTrackerRegisterAPI {
const probejs$$marker: never
}
export abstract class $IClaimsManagerTrackerRegisterAPI$$Static implements $IClaimsManagerTrackerRegisterAPI {
}
}

declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $IPlayerConfigAPI$SetResult } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI$SetResult"
import { $UUID } from "packages/java/util/$UUID"
import { $PlayerConfigType } from "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType"
import { $IPlayerConfigOptionSpecAPI$$Type } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"

export interface $IPlayerConfigAPI {
"createSubConfig"(string0: string): $IPlayerConfigAPI
"getDefaultRawValue"<T extends $Comparable<T>>(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<T>): T
"getEffective"<T extends $Comparable<T>>(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<T>): T
"getEffectiveSubConfig"(int0: integer): $IPlayerConfigAPI
"getEffectiveSubConfig"(string0: string): $IPlayerConfigAPI
"getFromEffectiveConfig"<T extends $Comparable<T>>(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<T>): T
"getPlayerId"(): $UUID
"getRaw"<T extends $Comparable<T>>(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<T>): T
"getSubConfig"(string0: string): $IPlayerConfigAPI
"getSubConfigAPIStream"(): $Stream<$IPlayerConfigAPI>
"getSubConfigIds"(): $List<string>
"getSubConfigLimit"(): integer
"getSubCount"(): integer
"getSubId"(): string
"getSubIndex"(): integer
"getType"(): $PlayerConfigType
"getUsedServerSubConfig"(): $IPlayerConfigAPI
"getUsedSubConfig"(): $IPlayerConfigAPI
"isBeingDeleted"(): boolean
"isOptionAllowed"(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<any>): boolean
"subConfigExists"(string0: string): boolean
"subConfigExists"(int0: integer): boolean
"tryToReset"<T extends $Comparable<T>>(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<T>): $IPlayerConfigAPI$SetResult
"tryToSet"<T extends $Comparable<T>>(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<T>, t1: T): $IPlayerConfigAPI$SetResult
get "playerId"(): $UUID
get "subConfigAPIStream"(): $Stream<$IPlayerConfigAPI>
get "subConfigIds"(): $List<string>
get "subConfigLimit"(): integer
get "subCount"(): integer
get "subId"(): string
get "subIndex"(): integer
get "type"(): $PlayerConfigType
get "usedServerSubConfig"(): $IPlayerConfigAPI
get "usedSubConfig"(): $IPlayerConfigAPI
get "beingDeleted"(): boolean
}

export namespace $IPlayerConfigAPI {
const probejs$$marker: never
}
export abstract class $IPlayerConfigAPI$$Static implements $IPlayerConfigAPI {
}
}

declare module "packages/xaero/pac/common/claims/result/api/$ClaimResult$Type" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $ClaimResult$Type extends $Enum<$ClaimResult$Type> {
static readonly "ALREADY_CLAIMED": $ClaimResult$Type
static readonly "ALREADY_FORCELOADABLE": $ClaimResult$Type
static readonly "ALREADY_UNFORCELOADED": $ClaimResult$Type
static readonly "CLAIMS_ARE_DISABLED": $ClaimResult$Type
static readonly "CLAIM_LIMIT_REACHED": $ClaimResult$Type
static readonly "FORCELOAD_LIMIT_REACHED": $ClaimResult$Type
static readonly "NOT_CLAIMED_BY_USER": $ClaimResult$Type
static readonly "NOT_CLAIMED_BY_USER_FORCELOAD": $ClaimResult$Type
static readonly "NO_SERVER_PERMISSION": $ClaimResult$Type
static readonly "REPLACEMENT_IN_PROGRESS": $ClaimResult$Type
static readonly "SUCCESSFUL_CLAIM": $ClaimResult$Type
static readonly "SUCCESSFUL_FORCELOAD": $ClaimResult$Type
static readonly "SUCCESSFUL_UNCLAIM": $ClaimResult$Type
static readonly "SUCCESSFUL_UNFORCELOAD": $ClaimResult$Type
static readonly "TOO_FAR": $ClaimResult$Type
static readonly "TOO_MANY_CHUNKS": $ClaimResult$Type
static readonly "UNCLAIMABLE_DIMENSION": $ClaimResult$Type
readonly "fail": boolean
readonly "message": $Component
readonly "success": boolean

public static "valueOf"(string0: string): $ClaimResult$Type
public static "values"(): $ClaimResult$Type[]
}
}

declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $BiPredicate } from "packages/java/util/function/$BiPredicate"
import { $Function } from "packages/java/util/function/$Function"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $PlayerConfigType } from "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType"
import { $IPlayerConfigClientStorageAPI } from "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $List } from "packages/java/util/$List"
import { $Class } from "packages/java/lang/$Class"
import { $IPlayerConfigAPI } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI"

export interface $IPlayerConfigOptionSpecAPI<T extends $Comparable<T>> {
"getClientSideValidator"(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>
"getCommandInputParser"(): $Function<string, T>
"getCommandOutputWriter"(): $Function<T, $Component>
"getComment"(): string
"getCommentTranslation"(): string
"getCommentTranslationArgs"(): string[]
"getConfigTypeFilter"(): $Predicate<$PlayerConfigType>
"getDefaultValue"(): T
"getId"(): string
"getPath"(): $List<string>
"getServerSideValidator"(): $BiPredicate<$IPlayerConfigAPI, T>
"getShortenedId"(): string
"getTooltipPrefix"(): string
"getTranslation"(): string
"getTranslationArgs"(): string[]
"getType"(): $Class<T>
get "clientSideValidator"(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>
get "commandInputParser"(): $Function<string, T>
get "commandOutputWriter"(): $Function<T, $Component>
get "comment"(): string
get "commentTranslation"(): string
get "commentTranslationArgs"(): string[]
get "configTypeFilter"(): $Predicate<$PlayerConfigType>
get "defaultValue"(): T
get "id"(): string
get "path"(): $List<string>
get "serverSideValidator"(): $BiPredicate<$IPlayerConfigAPI, T>
get "shortenedId"(): string
get "tooltipPrefix"(): string
get "translation"(): string
get "translationArgs"(): string[]
get "type"(): $Class<T>
}

export namespace $IPlayerConfigOptionSpecAPI {
const probejs$$marker: never
}
export abstract class $IPlayerConfigOptionSpecAPI$$Static<T extends $Comparable<T>> implements $IPlayerConfigOptionSpecAPI<T> {
}
}

declare module "packages/xaero/pac/common/server/player/data/api/$ServerPlayerDataAPI" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"

export class $ServerPlayerDataAPI {
constructor()

public static "from"(serverPlayer0: $ServerPlayer$$Type): $ServerPlayerDataAPI
public "isClaimsAdminMode"(): boolean
public "isClaimsNonallyMode"(): boolean
public "isClaimsServerMode"(): boolean
get "claimsAdminMode"(): boolean
get "claimsNonallyMode"(): boolean
get "claimsServerMode"(): boolean
}
}

declare module "packages/xaero/pac/common/claims/player/api/$IPlayerDimensionClaimsAPI" {
import { $IPlayerClaimPosListAPI } from "packages/xaero/pac/common/claims/player/api/$IPlayerClaimPosListAPI"
import { $Stream } from "packages/java/util/stream/$Stream"

export interface $IPlayerDimensionClaimsAPI {
"getStream"(): $Stream<$IPlayerClaimPosListAPI>
get "stream"(): $Stream<$IPlayerClaimPosListAPI>
}

export namespace $IPlayerDimensionClaimsAPI {
const probejs$$marker: never
}
export abstract class $IPlayerDimensionClaimsAPI$$Static implements $IPlayerDimensionClaimsAPI {
}
}

declare module "packages/xaero/pac/common/server/player/permission/api/$IPermissionNodeAPI" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Class } from "packages/java/lang/$Class"

export interface $IPermissionNodeAPI<T> {
"getComment"(): $Component
"getDefaultNodeString"(): string
"getName"(): $Component
"getNodeString"(): string
"getType"(): $Class<T>
get "comment"(): $Component
get "defaultNodeString"(): string
get "name"(): $Component
get "nodeString"(): string
get "type"(): $Class<T>
}

export namespace $IPermissionNodeAPI {
const probejs$$marker: never
}
export abstract class $IPermissionNodeAPI$$Static<T> implements $IPermissionNodeAPI<T> {
}
}

declare module "packages/xaero/pac/common/claims/api/$IRegionClaimsAPI" {
import { $IPlayerChunkClaimAPI } from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"

export interface $IRegionClaimsAPI {
"get"(int0: integer, int1: integer): $IPlayerChunkClaimAPI
"getX"(): integer
"getZ"(): integer
get "x"(): integer
get "z"(): integer
}

export namespace $IRegionClaimsAPI {
const probejs$$marker: never
}
export abstract class $IRegionClaimsAPI$$Static implements $IRegionClaimsAPI {
}
}

declare module "packages/xaero/pac/common/server/claims/player/api/$IServerPlayerClaimInfoAPI" {
import { $IPlayerDimensionClaimsAPI } from "packages/xaero/pac/common/claims/player/api/$IPlayerDimensionClaimsAPI"
import { $UUID } from "packages/java/util/$UUID"
import { $IPlayerClaimInfoAPI } from "packages/xaero/pac/common/claims/player/api/$IPlayerClaimInfoAPI"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export interface $IServerPlayerClaimInfoAPI extends $IPlayerClaimInfoAPI {
"getClaimCount"(): integer
"getClaimsColor"(): integer
"getClaimsColor"(string0: string): integer
"getClaimsColor"(int0: integer): integer
"getClaimsName"(): string
"getClaimsName"(string0: string): string
"getClaimsName"(int0: integer): string
"getDimension"(resourceLocation0: $ResourceLocation$$Type): $IPlayerDimensionClaimsAPI
"getForceloadCount"(): integer
"getPlayerId"(): $UUID
"getPlayerUsername"(): string
"getStream"(): $Stream<$Map$Entry<$ResourceLocation, $IPlayerDimensionClaimsAPI>>
get "claimCount"(): integer
get "claimsColor"(): integer
get "claimsName"(): string
get "forceloadCount"(): integer
get "playerId"(): $UUID
get "playerUsername"(): string
get "stream"(): $Stream<$Map$Entry<$ResourceLocation, $IPlayerDimensionClaimsAPI>>
}

export namespace $IServerPlayerClaimInfoAPI {
const probejs$$marker: never
}
export abstract class $IServerPlayerClaimInfoAPI$$Static implements $IServerPlayerClaimInfoAPI {
}
}

declare module "packages/xaero/pac/common/claims/player/api/$IPlayerClaimPosListAPI" {
import { $ChunkPos } from "packages/net/minecraft/world/level/$ChunkPos"
import { $IPlayerChunkClaimAPI } from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import { $Stream } from "packages/java/util/stream/$Stream"

export interface $IPlayerClaimPosListAPI {
"getClaimState"(): $IPlayerChunkClaimAPI
"getCount"(): integer
"getStream"(): $Stream<$ChunkPos>
get "claimState"(): $IPlayerChunkClaimAPI
get "count"(): integer
get "stream"(): $Stream<$ChunkPos>
}

export namespace $IPlayerClaimPosListAPI {
const probejs$$marker: never
}
export abstract class $IPlayerClaimPosListAPI$$Static implements $IPlayerClaimPosListAPI {
}
}

declare module "packages/xaero/pac/common/parties/party/member/api/$IPartyMemberAPI" {
import { $UUID } from "packages/java/util/$UUID"
import { $PartyMemberRank } from "packages/xaero/pac/common/parties/party/member/$PartyMemberRank"
import { $IPartyPlayerInfoAPI } from "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI"

export interface $IPartyMemberAPI extends $IPartyPlayerInfoAPI {
"getRank"(): $PartyMemberRank
"getUUID"(): $UUID
"getUsername"(): string
"isOwner"(): boolean
get "rank"(): $PartyMemberRank
get "uUID"(): $UUID
get "username"(): string
get "owner"(): boolean
}

export namespace $IPartyMemberAPI {
const probejs$$marker: never
}
export abstract class $IPartyMemberAPI$$Static implements $IPartyMemberAPI {
}
}

declare module "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI" {
import { $UUID } from "packages/java/util/$UUID"

export interface $IPartyPlayerInfoAPI {
"getUUID"(): $UUID
"getUsername"(): string
get "uUID"(): $UUID
get "username"(): string
}

export namespace $IPartyPlayerInfoAPI {
const probejs$$marker: never
}
export abstract class $IPartyPlayerInfoAPI$$Static implements $IPartyPlayerInfoAPI {
}
}

declare module "packages/xaero/pac/common/server/$IOpenPACMinecraftServer" {
import { $IServerDataAPI, $IServerDataAPI$$Type } from "packages/xaero/pac/common/server/$IServerDataAPI"

export interface $IOpenPACMinecraftServer {
"getXaero_OPAC_ServerData"(): $IServerDataAPI
"setXaero_OPAC_ServerData"(iServerDataAPI0: $IServerDataAPI$$Type): void
get "xaero_OPAC_ServerData"(): $IServerDataAPI
set "xaero_OPAC_ServerData"(value: $IServerDataAPI$$Type)
}

export namespace $IOpenPACMinecraftServer {
const probejs$$marker: never
}
export abstract class $IOpenPACMinecraftServer$$Static implements $IOpenPACMinecraftServer {
}
}

declare module "packages/xaero/pac/common/server/player/data/$IOpenPACServerPlayer" {
import { $ServerPlayerDataAPI, $ServerPlayerDataAPI$$Type } from "packages/xaero/pac/common/server/player/data/api/$ServerPlayerDataAPI"

export interface $IOpenPACServerPlayer {
"getXaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
"setXaero_OPAC_PlayerData"(serverPlayerDataAPI0: $ServerPlayerDataAPI$$Type): void
get "xaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
set "xaero_OPAC_PlayerData"(value: $ServerPlayerDataAPI$$Type)
}

export namespace $IOpenPACServerPlayer {
const probejs$$marker: never
}
export abstract class $IOpenPACServerPlayer$$Static implements $IOpenPACServerPlayer {
}
}

declare module "packages/xaero/pac/common/claims/api/$IClaimsManagerAPI" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $IDimensionClaimsManagerAPI } from "packages/xaero/pac/common/claims/api/$IDimensionClaimsManagerAPI"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $IPlayerChunkClaimAPI } from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import { $IPlayerClaimInfoAPI } from "packages/xaero/pac/common/claims/player/api/$IPlayerClaimInfoAPI"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IClaimsManagerTrackerAPI } from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerAPI"

export interface $IClaimsManagerAPI {
"get"(resourceLocation0: $ResourceLocation$$Type, blockPos1: $BlockPos$$Type): $IPlayerChunkClaimAPI
"get"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer): $IPlayerChunkClaimAPI
"get"(resourceLocation0: $ResourceLocation$$Type, chunkPos1: $ChunkPos$$Type): $IPlayerChunkClaimAPI
"getDimension"(resourceLocation0: $ResourceLocation$$Type): $IDimensionClaimsManagerAPI
"getPlayerInfo"(uUID0: $UUID$$Type): $IPlayerClaimInfoAPI
"getTracker"(): $IClaimsManagerTrackerAPI
"hasPlayerInfo"(uUID0: $UUID$$Type): boolean
get "tracker"(): $IClaimsManagerTrackerAPI
}

export namespace $IClaimsManagerAPI {
const probejs$$marker: never
}
export abstract class $IClaimsManagerAPI$$Static implements $IClaimsManagerAPI {
}
}

declare module "packages/xaero/pac/common/entity/$IEntity" {
import { $EntityData, $EntityData$$Type } from "packages/xaero/pac/common/entity/$EntityData"

export interface $IEntity {
"getXaero_OPAC_data"(): $EntityData
"setXaero_OPAC_data"(entityData0: $EntityData$$Type): void
get "xaero_OPAC_data"(): $EntityData
set "xaero_OPAC_data"(value: $EntityData$$Type)
}

export namespace $IEntity {
const probejs$$marker: never
}
export abstract class $IEntity$$Static implements $IEntity {
}
}

declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI$SetResult" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IPlayerConfigAPI$SetResult extends $Enum<$IPlayerConfigAPI$SetResult> {
static readonly "DEFAULTED": $IPlayerConfigAPI$SetResult
static readonly "ILLEGAL_OPTION": $IPlayerConfigAPI$SetResult
static readonly "INVALID": $IPlayerConfigAPI$SetResult
static readonly "SUCCESS": $IPlayerConfigAPI$SetResult

public static "valueOf"(string0: string): $IPlayerConfigAPI$SetResult
public static "values"(): $IPlayerConfigAPI$SetResult[]
}
}

declare module "packages/xaero/pac/common/parties/party/ally/api/$IPartyAllyAPI" {
import { $UUID } from "packages/java/util/$UUID"

export interface $IPartyAllyAPI {
"getPartyId"(): $UUID
get "partyId"(): $UUID
}

export namespace $IPartyAllyAPI {
const probejs$$marker: never
}
export abstract class $IPartyAllyAPI$$Static implements $IPartyAllyAPI {
}
}

declare module "packages/xaero/pac/common/claims/player/api/$IPlayerClaimInfoAPI" {
import { $IPlayerDimensionClaimsAPI } from "packages/xaero/pac/common/claims/player/api/$IPlayerDimensionClaimsAPI"
import { $UUID } from "packages/java/util/$UUID"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IPlayerClaimInfoAPI {
"getClaimCount"(): integer
"getClaimsColor"(): integer
"getClaimsColor"(int0: integer): integer
"getClaimsName"(int0: integer): string
"getClaimsName"(): string
"getDimension"(resourceLocation0: $ResourceLocation$$Type): $IPlayerDimensionClaimsAPI
"getForceloadCount"(): integer
"getPlayerId"(): $UUID
"getPlayerUsername"(): string
get "claimCount"(): integer
get "claimsColor"(): integer
get "claimsName"(): string
get "forceloadCount"(): integer
get "playerId"(): $UUID
get "playerUsername"(): string
}

export namespace $IPlayerClaimInfoAPI {
const probejs$$marker: never
}
export abstract class $IPlayerClaimInfoAPI$$Static implements $IPlayerClaimInfoAPI {
}
}

declare module "packages/xaero/pac/client/claims/tracker/result/api/$IClaimsManagerClaimResultTrackerRegisterAPI" {
import { $IClaimsManagerClaimResultListenerAPI$$Type } from "packages/xaero/pac/client/claims/tracker/result/api/$IClaimsManagerClaimResultListenerAPI"

export interface $IClaimsManagerClaimResultTrackerRegisterAPI {
"register"(iClaimsManagerClaimResultListenerAPI0: $IClaimsManagerClaimResultListenerAPI$$Type): void
}

export namespace $IClaimsManagerClaimResultTrackerRegisterAPI {
const probejs$$marker: never
}
export abstract class $IClaimsManagerClaimResultTrackerRegisterAPI$$Static implements $IClaimsManagerClaimResultTrackerRegisterAPI {
}
}

declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $UUID } from "packages/java/util/$UUID"
import { $PlayerConfigType } from "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType"
import { $IPlayerConfigOptionSpecAPI$$Type } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $IPlayerConfigStringableOptionClientStorageAPI } from "packages/xaero/pac/client/player/config/api/$IPlayerConfigStringableOptionClientStorageAPI"

export interface $IPlayerConfigClientStorageAPI {
"getEffectiveSubConfig"(string0: string): $IPlayerConfigClientStorageAPI
"getOptionStorage"<T extends $Comparable<T>>(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<T>): $IPlayerConfigStringableOptionClientStorageAPI<any>
"getOwner"(): $UUID
"getSubConfig"(string0: string): $IPlayerConfigClientStorageAPI
"getSubConfigAPIStream"(): $Stream<$IPlayerConfigClientStorageAPI>
"getSubConfigIds"(): $List<string>
"getSubConfigLimit"(): integer
"getSubCount"(): integer
"getType"(): $PlayerConfigType
"isBeingDeleted"(): boolean
"optionStream"(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI<any>>
"subConfigExists"(string0: string): boolean
get "owner"(): $UUID
get "subConfigAPIStream"(): $Stream<$IPlayerConfigClientStorageAPI>
get "subConfigIds"(): $List<string>
get "subConfigLimit"(): integer
get "subCount"(): integer
get "type"(): $PlayerConfigType
get "beingDeleted"(): boolean
}

export namespace $IPlayerConfigClientStorageAPI {
const probejs$$marker: never
}
export abstract class $IPlayerConfigClientStorageAPI$$Static implements $IPlayerConfigClientStorageAPI {
}
}

declare module "packages/xaero/pac/common/server/parties/party/api/$IServerPartyAPI" {
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $PartyMemberRank$$Type } from "packages/xaero/pac/common/parties/party/member/$PartyMemberRank"
import { $IPartyAllyAPI } from "packages/xaero/pac/common/parties/party/ally/api/$IPartyAllyAPI"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $IPartyMemberAPI, $IPartyMemberAPI$$Type } from "packages/xaero/pac/common/parties/party/member/api/$IPartyMemberAPI"
import { $IPartyPlayerInfoAPI } from "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI"
import { $IPartyAPI } from "packages/xaero/pac/common/parties/party/api/$IPartyAPI"

export interface $IServerPartyAPI extends $IPartyAPI {
"addAllyParty"(uUID0: $UUID$$Type): void
"addMember"(uUID0: $UUID$$Type, partyMemberRank1: $PartyMemberRank$$Type, string2: string): $IPartyMemberAPI
"getAllyCount"(): integer
"getAllyPartiesStream"(): $Stream<$IPartyAllyAPI>
"getDefaultName"(): string
"getId"(): $UUID
"getInviteCount"(): integer
"getInvitedPlayersStream"(): $Stream<$IPartyPlayerInfoAPI>
"getMemberCount"(): integer
"getMemberInfo"(string0: string): $IPartyMemberAPI
"getMemberInfo"(uUID0: $UUID$$Type): $IPartyMemberAPI
"getMemberInfoStream"(): $Stream<$IPartyMemberAPI>
"getNonStaffInfoStream"(): $Stream<$IPartyMemberAPI>
"getOnlineMemberStream"(): $Stream<$ServerPlayer>
"getOwner"(): $IPartyMemberAPI
"getStaffInfoStream"(): $Stream<$IPartyMemberAPI>
"invitePlayer"(uUID0: $UUID$$Type, string1: string): $IPartyPlayerInfoAPI
"isAlly"(uUID0: $UUID$$Type): boolean
"isInvited"(uUID0: $UUID$$Type): boolean
"removeAllyParty"(uUID0: $UUID$$Type): void
"removeMember"(uUID0: $UUID$$Type): $IPartyMemberAPI
"setRank"(iPartyMemberAPI0: $IPartyMemberAPI$$Type, partyMemberRank1: $PartyMemberRank$$Type): boolean
"uninvitePlayer"(uUID0: $UUID$$Type): $IPartyPlayerInfoAPI
get "allyCount"(): integer
get "allyPartiesStream"(): $Stream<$IPartyAllyAPI>
get "defaultName"(): string
get "id"(): $UUID
get "inviteCount"(): integer
get "invitedPlayersStream"(): $Stream<$IPartyPlayerInfoAPI>
get "memberCount"(): integer
get "memberInfoStream"(): $Stream<$IPartyMemberAPI>
get "nonStaffInfoStream"(): $Stream<$IPartyMemberAPI>
get "onlineMemberStream"(): $Stream<$ServerPlayer>
get "owner"(): $IPartyMemberAPI
get "staffInfoStream"(): $Stream<$IPartyMemberAPI>
}

export namespace $IServerPartyAPI {
const probejs$$marker: never
}
export abstract class $IServerPartyAPI$$Static implements $IServerPartyAPI {
}
}

declare module "packages/xaero/pac/common/claims/result/api/$AreaClaimResult" {
import { $ClaimResult$Type, $ClaimResult$Type$$Type } from "packages/xaero/pac/common/claims/result/api/$ClaimResult$Type"
import { $Set$$Type } from "packages/java/util/$Set"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $AreaClaimResult {
constructor(set0: $Set$$Type<$ClaimResult$Type$$Type>, int1: integer, int2: integer, int3: integer, int4: integer)

public "getBottom"(): integer
public "getLeft"(): integer
public "getResultTypesIterable"(): $Iterable<$ClaimResult$Type>
public "getResultTypesStream"(): $Stream<$ClaimResult$Type>
public "getRight"(): integer
public "getSize"(): integer
public "getTop"(): integer
get "bottom"(): integer
get "left"(): integer
get "resultTypesIterable"(): $Iterable<$ClaimResult$Type>
get "resultTypesStream"(): $Stream<$ClaimResult$Type>
get "right"(): integer
get "size"(): integer
get "top"(): integer
}
}

declare module "packages/xaero/pac/common/server/claims/protection/api/$IChunkProtectionAPI" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $IPlayerConfigOptionSpecAPI$$Type } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IPlayerChunkClaimAPI$$Type } from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $IPlayerConfigAPI, $IPlayerConfigAPI$$Type } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $IChunkProtectionAPI {
"checkExceptionLeveledOption"(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<integer>, iPlayerConfigAPI1: $IPlayerConfigAPI$$Type, entity2: $Entity$$Type): boolean
"checkExceptionLeveledOption"(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<integer>, iPlayerConfigAPI1: $IPlayerConfigAPI$$Type, uUID2: $UUID$$Type): boolean
"checkProtectionLeveledOption"(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<integer>, iPlayerConfigAPI1: $IPlayerConfigAPI$$Type, uUID2: $UUID$$Type): boolean
"checkProtectionLeveledOption"(iPlayerConfigOptionSpecAPI0: $IPlayerConfigOptionSpecAPI$$Type<integer>, iPlayerConfigAPI1: $IPlayerConfigAPI$$Type, entity2: $Entity$$Type): boolean
"getClaimConfig"(iPlayerChunkClaimAPI0: $IPlayerChunkClaimAPI$$Type): $IPlayerConfigAPI
"giveFullPass"(uUID0: $UUID$$Type): void
"hasChunkAccess"(iPlayerConfigAPI0: $IPlayerConfigAPI$$Type, entity1: $Entity$$Type): boolean
"hasChunkAccess"(iPlayerConfigAPI0: $IPlayerConfigAPI$$Type, uUID1: $UUID$$Type): boolean
/** @deprecated */
"onBlockInteraction"(entity0: $Entity$$Type, interactionHand1: $InteractionHand$$Type, itemStack2: $ItemStack$$Type, serverLevel3: $ServerLevel$$Type, blockPos4: $BlockPos$$Type, direction5: $Direction$$Type, boolean6: boolean, boolean7: boolean): boolean
"onBlockInteraction"(entity0: $Entity$$Type, interactionHand1: $InteractionHand$$Type, itemStack2: $ItemStack$$Type, serverLevel3: $ServerLevel$$Type, blockPos4: $BlockPos$$Type, direction5: $Direction$$Type, boolean6: boolean, boolean7: boolean, boolean8: boolean): boolean
"onEntityInteraction"(entity0: $Entity$$Type, entity1: $Entity$$Type, entity2: $Entity$$Type, itemStack3: $ItemStack$$Type, interactionHand4: $InteractionHand$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean): boolean
/** @deprecated */
"onEntityInteraction"(entity0: $Entity$$Type, entity1: $Entity$$Type, entity2: $Entity$$Type, itemStack3: $ItemStack$$Type, interactionHand4: $InteractionHand$$Type, boolean5: boolean, boolean6: boolean): boolean
"onEntityPlaceBlock"(entity0: $Entity$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type): boolean
"onItemPickup"(entity0: $Entity$$Type, itemEntity1: $ItemEntity$$Type): boolean
"onPosAffectedByAnotherPos"(serverLevel0: $ServerLevel$$Type, chunkPos1: $ChunkPos$$Type, serverLevel2: $ServerLevel$$Type, chunkPos3: $ChunkPos$$Type, boolean4: boolean, boolean5: boolean, boolean6: boolean): boolean
"onProjectileHitSpawnedEntity"(entity0: $Entity$$Type, entity1: $Entity$$Type): boolean
"removeFullPass"(uUID0: $UUID$$Type): void
}

export namespace $IChunkProtectionAPI {
const probejs$$marker: never
}
export abstract class $IChunkProtectionAPI$$Static implements $IChunkProtectionAPI {
}
}

declare module "packages/xaero/pac/common/server/$IServerDataAPI" {
import { $IChunkProtectionAPI } from "packages/xaero/pac/common/server/claims/protection/api/$IChunkProtectionAPI"
import { $IAdaptiveLocalizerAPI } from "packages/xaero/pac/common/server/player/localization/api/$IAdaptiveLocalizerAPI"
import { $OpenPACServerAPI } from "packages/xaero/pac/common/server/api/$OpenPACServerAPI"
import { $IPartyManagerAPI } from "packages/xaero/pac/common/server/parties/party/api/$IPartyManagerAPI"
import { $IPlayerConfigManagerAPI } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigManagerAPI"
import { $IServerClaimsManagerAPI } from "packages/xaero/pac/common/server/claims/api/$IServerClaimsManagerAPI"

export interface $IServerDataAPI {
"getAPI"(): $OpenPACServerAPI
"getAdaptiveLocalizer"(): $IAdaptiveLocalizerAPI
"getChunkProtection"(): $IChunkProtectionAPI
"getPartyManager"(): $IPartyManagerAPI
"getPlayerConfigs"(): $IPlayerConfigManagerAPI
"getServerClaimsManager"(): $IServerClaimsManagerAPI
get "aPI"(): $OpenPACServerAPI
get "adaptiveLocalizer"(): $IAdaptiveLocalizerAPI
get "chunkProtection"(): $IChunkProtectionAPI
get "partyManager"(): $IPartyManagerAPI
get "playerConfigs"(): $IPlayerConfigManagerAPI
get "serverClaimsManager"(): $IServerClaimsManagerAPI
}

export namespace $IServerDataAPI {
const probejs$$marker: never
}
export abstract class $IServerDataAPI$$Static implements $IServerDataAPI {
}
}

declare module "packages/xaero/pac/common/parties/party/api/$IPartyAPI" {
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $IPartyAllyAPI } from "packages/xaero/pac/common/parties/party/ally/api/$IPartyAllyAPI"
import { $PartyMemberRank$$Type } from "packages/xaero/pac/common/parties/party/member/$PartyMemberRank"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $IPartyMemberAPI, $IPartyMemberAPI$$Type } from "packages/xaero/pac/common/parties/party/member/api/$IPartyMemberAPI"
import { $IPartyPlayerInfoAPI } from "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI"

export interface $IPartyAPI {
"getAllyCount"(): integer
"getAllyPartiesStream"(): $Stream<$IPartyAllyAPI>
"getDefaultName"(): string
"getId"(): $UUID
"getInviteCount"(): integer
"getInvitedPlayersStream"(): $Stream<$IPartyPlayerInfoAPI>
"getMemberCount"(): integer
"getMemberInfo"(uUID0: $UUID$$Type): $IPartyMemberAPI
"getMemberInfoStream"(): $Stream<$IPartyMemberAPI>
"getNonStaffInfoStream"(): $Stream<$IPartyMemberAPI>
"getOwner"(): $IPartyMemberAPI
"getStaffInfoStream"(): $Stream<$IPartyMemberAPI>
"isAlly"(uUID0: $UUID$$Type): boolean
"isInvited"(uUID0: $UUID$$Type): boolean
"setRank"(iPartyMemberAPI0: $IPartyMemberAPI$$Type, partyMemberRank1: $PartyMemberRank$$Type): boolean
get "allyCount"(): integer
get "allyPartiesStream"(): $Stream<$IPartyAllyAPI>
get "defaultName"(): string
get "id"(): $UUID
get "inviteCount"(): integer
get "invitedPlayersStream"(): $Stream<$IPartyPlayerInfoAPI>
get "memberCount"(): integer
get "memberInfoStream"(): $Stream<$IPartyMemberAPI>
get "nonStaffInfoStream"(): $Stream<$IPartyMemberAPI>
get "owner"(): $IPartyMemberAPI
get "staffInfoStream"(): $Stream<$IPartyMemberAPI>
}

export namespace $IPartyAPI {
const probejs$$marker: never
}
export abstract class $IPartyAPI$$Static implements $IPartyAPI {
}
}

declare module "packages/xaero/pac/common/server/player/permission/api/$IPlayerPermissionSystemRegisterAPI" {
import { $IPlayerPermissionSystemAPI$$Type } from "packages/xaero/pac/common/server/player/permission/api/$IPlayerPermissionSystemAPI"

export interface $IPlayerPermissionSystemRegisterAPI {
"register"(string0: string, iPlayerPermissionSystemAPI1: $IPlayerPermissionSystemAPI$$Type): void
}

export namespace $IPlayerPermissionSystemRegisterAPI {
const probejs$$marker: never
}
export abstract class $IPlayerPermissionSystemRegisterAPI$$Static implements $IPlayerPermissionSystemRegisterAPI {
}
}

declare module "packages/xaero/pac/common/entity/$IItemEntity" {
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"

export interface $IItemEntity {
"getXaero_OPAC_target"(): $UUID
"getXaero_OPAC_thrower"(): $UUID
"getXaero_OPAC_throwerAccessor"(): $UUID
"setXaero_OPAC_throwerAccessor"(uUID0: $UUID$$Type): void
get "xaero_OPAC_target"(): $UUID
get "xaero_OPAC_thrower"(): $UUID
get "xaero_OPAC_throwerAccessor"(): $UUID
set "xaero_OPAC_throwerAccessor"(value: $UUID$$Type)
}

export namespace $IItemEntity {
const probejs$$marker: never
}
export abstract class $IItemEntity$$Static implements $IItemEntity {
}
}

declare module "packages/xaero/pac/common/server/parties/system/api/$IPlayerPartySystemRegisterAPI" {
import { $IPlayerPartySystemAPI$$Type } from "packages/xaero/pac/common/server/parties/system/api/$IPlayerPartySystemAPI"

export interface $IPlayerPartySystemRegisterAPI {
"register"(string0: string, iPlayerPartySystemAPI1: $IPlayerPartySystemAPI$$Type<any>): void
}

export namespace $IPlayerPartySystemRegisterAPI {
const probejs$$marker: never
}
export abstract class $IPlayerPartySystemRegisterAPI$$Static implements $IPlayerPartySystemRegisterAPI {
}
}

declare module "packages/xaero/pac/common/capability/$ICapabilityProvider" {
import { $ICapability$$Type } from "packages/xaero/pac/common/capability/$ICapability"

export interface $ICapabilityProvider {
"getCapability"<T>(iCapability0: $ICapability$$Type<T>): T
}

export namespace $ICapabilityProvider {
const probejs$$marker: never
}
export abstract class $ICapabilityProvider$$Static implements $ICapabilityProvider {
}
}

declare module "packages/xaero/pac/common/server/core/accessor/$ICreateContraption" {
import { $StructureTemplate$StructureBlockInfo } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Map } from "packages/java/util/$Map"

export interface $ICreateContraption {
"getBlocks"(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>
"getXaero_OPAC_anchor"(): $BlockPos
"getXaero_OPAC_placementPos"(): $BlockPos
"setXaero_OPAC_placementPos"(blockPos0: $BlockPos$$Type): void
get "blocks"(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>
get "xaero_OPAC_anchor"(): $BlockPos
get "xaero_OPAC_placementPos"(): $BlockPos
set "xaero_OPAC_placementPos"(value: $BlockPos$$Type)
}

export namespace $ICreateContraption {
const probejs$$marker: never
}
export abstract class $ICreateContraption$$Static implements $ICreateContraption {
}
}

declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigManagerAPI" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $IPlayerConfigOptionSpecAPI } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $IPlayerConfigAPI } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI"

export interface $IPlayerConfigManagerAPI {
"getAllOptionsStream"(): $Stream<$IPlayerConfigOptionSpecAPI<any>>
"getDefaultConfig"(): $IPlayerConfigAPI
"getExpiredClaimConfig"(): $IPlayerConfigAPI
"getLoadedConfig"(uUID0: $UUID$$Type): $IPlayerConfigAPI
"getOptionForId"(string0: string): $IPlayerConfigOptionSpecAPI<any>
"getServerClaimConfig"(): $IPlayerConfigAPI
"getWildernessConfig"(): $IPlayerConfigAPI
get "allOptionsStream"(): $Stream<$IPlayerConfigOptionSpecAPI<any>>
get "defaultConfig"(): $IPlayerConfigAPI
get "expiredClaimConfig"(): $IPlayerConfigAPI
get "serverClaimConfig"(): $IPlayerConfigAPI
get "wildernessConfig"(): $IPlayerConfigAPI
}

export namespace $IPlayerConfigManagerAPI {
const probejs$$marker: never
}
export abstract class $IPlayerConfigManagerAPI$$Static implements $IPlayerConfigManagerAPI {
}
}

declare module "packages/xaero/pac/common/server/player/permission/api/$IPlayerPermissionSystemAPI" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Optional } from "packages/java/util/$Optional"
import { $OptionalInt } from "packages/java/util/$OptionalInt"
import { $IPermissionNodeAPI$$Type } from "packages/xaero/pac/common/server/player/permission/api/$IPermissionNodeAPI"

export interface $IPlayerPermissionSystemAPI {
"getIntPermission"(serverPlayer0: $ServerPlayer$$Type, iPermissionNodeAPI1: $IPermissionNodeAPI$$Type<integer>): $OptionalInt
"getPermission"(serverPlayer0: $ServerPlayer$$Type, iPermissionNodeAPI1: $IPermissionNodeAPI$$Type<boolean>): boolean
"getPermissionTyped"<T>(serverPlayer0: $ServerPlayer$$Type, iPermissionNodeAPI1: $IPermissionNodeAPI$$Type<T>): $Optional<T>
}

export namespace $IPlayerPermissionSystemAPI {
const probejs$$marker: never
}
export abstract class $IPlayerPermissionSystemAPI$$Static implements $IPlayerPermissionSystemAPI {
}
}

declare module "packages/xaero/pac/common/server/core/accessor/$ICreateContraptionEntity" {
import { $ICreateContraption } from "packages/xaero/pac/common/server/core/accessor/$ICreateContraption"

export interface $ICreateContraptionEntity {
"getXaero_OPAC_contraption"(): $ICreateContraption
get "xaero_OPAC_contraption"(): $ICreateContraption
}

export namespace $ICreateContraptionEntity {
const probejs$$marker: never
}
export abstract class $ICreateContraptionEntity$$Static implements $ICreateContraptionEntity {
}
}

declare module "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $PlayerConfigType extends $Enum<$PlayerConfigType> {
static readonly "DEFAULT_PLAYER": $PlayerConfigType
static readonly "EXPIRED": $PlayerConfigType
static readonly "PLAYER": $PlayerConfigType
static readonly "SERVER": $PlayerConfigType
static readonly "WILDERNESS": $PlayerConfigType

public "getName"(): $Component
public static "valueOf"(string0: string): $PlayerConfigType
public static "values"(): $PlayerConfigType[]
get "name"(): $Component
}
}

declare module "packages/xaero/pac/common/capability/$ICapability" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICapability<T> {
}

export namespace $ICapability {
const probejs$$marker: never
}
export abstract class $ICapability$$Static<T> implements $ICapability<T> {
}
}

declare module "packages/xaero/pac/common/server/claims/api/$IServerDimensionClaimsManagerAPI" {
import { $IServerRegionClaimsAPI } from "packages/xaero/pac/common/server/claims/api/$IServerRegionClaimsAPI"
import { $IDimensionClaimsManagerAPI } from "packages/xaero/pac/common/claims/api/$IDimensionClaimsManagerAPI"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IServerDimensionClaimsManagerAPI extends $IDimensionClaimsManagerAPI {
"getCount"(): integer
"getDimension"(): $ResourceLocation
"getRegionStream"(): $Stream<$IServerRegionClaimsAPI>
get "count"(): integer
get "dimension"(): $ResourceLocation
get "regionStream"(): $Stream<$IServerRegionClaimsAPI>
}

export namespace $IServerDimensionClaimsManagerAPI {
const probejs$$marker: never
}
export abstract class $IServerDimensionClaimsManagerAPI$$Static implements $IServerDimensionClaimsManagerAPI {
}
}

declare module "packages/xaero/pac/common/server/claims/api/$IServerClaimsManagerAPI" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $IServerPlayerClaimInfoAPI } from "packages/xaero/pac/common/server/claims/player/api/$IServerPlayerClaimInfoAPI"
import { $ClaimResult } from "packages/xaero/pac/common/claims/result/api/$ClaimResult"
import { $IClaimsManagerAPI } from "packages/xaero/pac/common/claims/api/$IClaimsManagerAPI"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IPlayerChunkClaimAPI } from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import { $IServerDimensionClaimsManagerAPI } from "packages/xaero/pac/common/server/claims/api/$IServerDimensionClaimsManagerAPI"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AreaClaimResult } from "packages/xaero/pac/common/claims/result/api/$AreaClaimResult"
import { $IClaimsManagerTrackerAPI } from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerAPI"

export interface $IServerClaimsManagerAPI extends $IClaimsManagerAPI {
"claim"(resourceLocation0: $ResourceLocation$$Type, uUID1: $UUID$$Type, int2: integer, int3: integer, int4: integer, boolean5: boolean): $IPlayerChunkClaimAPI
"get"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer): $IPlayerChunkClaimAPI
"get"(resourceLocation0: $ResourceLocation$$Type, chunkPos1: $ChunkPos$$Type): $IPlayerChunkClaimAPI
"get"(resourceLocation0: $ResourceLocation$$Type, blockPos1: $BlockPos$$Type): $IPlayerChunkClaimAPI
"getDimensionStream"(): $Stream<$IServerDimensionClaimsManagerAPI>
"getPlayerBaseClaimLimit"(serverPlayer0: $ServerPlayer$$Type): integer
"getPlayerBaseClaimLimit"(uUID0: $UUID$$Type): integer
"getPlayerBaseForceloadLimit"(serverPlayer0: $ServerPlayer$$Type): integer
"getPlayerBaseForceloadLimit"(uUID0: $UUID$$Type): integer
"getPlayerInfoStream"(): $Stream<$IServerPlayerClaimInfoAPI>
"getTracker"(): $IClaimsManagerTrackerAPI
"hasPlayerInfo"(uUID0: $UUID$$Type): boolean
"isClaimable"(resourceLocation0: $ResourceLocation$$Type): boolean
"tryToClaim"(resourceLocation0: $ResourceLocation$$Type, uUID1: $UUID$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean): $ClaimResult<$IPlayerChunkClaimAPI>
"tryToClaimArea"(resourceLocation0: $ResourceLocation$$Type, uUID1: $UUID$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, boolean9: boolean): $AreaClaimResult
"tryToForceload"(resourceLocation0: $ResourceLocation$$Type, uUID1: $UUID$$Type, int2: integer, int3: integer, int4: integer, int5: integer, boolean6: boolean, boolean7: boolean): $ClaimResult<$IPlayerChunkClaimAPI>
"tryToForceloadArea"(resourceLocation0: $ResourceLocation$$Type, uUID1: $UUID$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, boolean8: boolean, boolean9: boolean): $AreaClaimResult
"tryToUnclaim"(resourceLocation0: $ResourceLocation$$Type, uUID1: $UUID$$Type, int2: integer, int3: integer, int4: integer, int5: integer, boolean6: boolean): $ClaimResult<$IPlayerChunkClaimAPI>
"tryToUnclaimArea"(resourceLocation0: $ResourceLocation$$Type, uUID1: $UUID$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, boolean8: boolean): $AreaClaimResult
"unclaim"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer): void
get "dimensionStream"(): $Stream<$IServerDimensionClaimsManagerAPI>
get "playerInfoStream"(): $Stream<$IServerPlayerClaimInfoAPI>
get "tracker"(): $IClaimsManagerTrackerAPI
}

export namespace $IServerClaimsManagerAPI {
const probejs$$marker: never
}
export abstract class $IServerClaimsManagerAPI$$Static implements $IServerClaimsManagerAPI {
}
}

declare module "packages/xaero/pac/common/server/api/$OpenPACServerAPI" {
import { $IChunkProtectionAPI } from "packages/xaero/pac/common/server/claims/protection/api/$IChunkProtectionAPI"
import { $IServerDataAPI$$Type } from "packages/xaero/pac/common/server/$IServerDataAPI"
import { $IAdaptiveLocalizerAPI } from "packages/xaero/pac/common/server/player/localization/api/$IAdaptiveLocalizerAPI"
import { $IPartyManagerAPI } from "packages/xaero/pac/common/server/parties/party/api/$IPartyManagerAPI"
import { $IPlayerConfigManagerAPI } from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigManagerAPI"
import { $IServerClaimsManagerAPI } from "packages/xaero/pac/common/server/claims/api/$IServerClaimsManagerAPI"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"

export class $OpenPACServerAPI {
constructor(iServerDataAPI0: $IServerDataAPI$$Type)

public static "get"(minecraftServer0: $MinecraftServer$$Type): $OpenPACServerAPI
public "getAdaptiveTextLocalizer"(): $IAdaptiveLocalizerAPI
public "getChunkProtection"(): $IChunkProtectionAPI
public "getPartyManager"(): $IPartyManagerAPI
public "getPlayerConfigs"(): $IPlayerConfigManagerAPI
public "getServerClaimsManager"(): $IServerClaimsManagerAPI
get "adaptiveTextLocalizer"(): $IAdaptiveLocalizerAPI
get "chunkProtection"(): $IChunkProtectionAPI
get "partyManager"(): $IPartyManagerAPI
get "playerConfigs"(): $IPlayerConfigManagerAPI
get "serverClaimsManager"(): $IServerClaimsManagerAPI
}
}

declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerAPI" {
import { $IClaimsManagerListenerAPI$$Type } from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI"
import { $IClaimsManagerTrackerRegisterAPI } from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerRegisterAPI"

export interface $IClaimsManagerTrackerAPI extends $IClaimsManagerTrackerRegisterAPI {
"register"(iClaimsManagerListenerAPI0: $IClaimsManagerListenerAPI$$Type): void
}

export namespace $IClaimsManagerTrackerAPI {
const probejs$$marker: never
}
export abstract class $IClaimsManagerTrackerAPI$$Static implements $IClaimsManagerTrackerAPI {
}
}

declare module "packages/xaero/pac/common/entity/$EntityData" {
import { $IEntity$$Type } from "packages/xaero/pac/common/entity/$IEntity"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityData {
constructor()

public static "from"(entity0: $Entity$$Type): $EntityData
public static "from"(iEntity0: $IEntity$$Type): $EntityData
public "getDeadPlayer"(): $UUID
public "getLastChunkEntryDimension"(): $ResourceKey<$Level>
public "getLootOwner"(): $UUID
public "getShouldCheckItemUseTick"(): boolean
public "setDeadPlayer"(uUID0: $UUID$$Type): void
public "setLastChunkEntryDimension"(resourceKey0: $ResourceKey$$Type<$Level>): void
public "setLootOwner"(uUID0: $UUID$$Type): void
public "setShouldCheckItemUseTick"(boolean0: boolean): void
get "deadPlayer"(): $UUID
get "lastChunkEntryDimension"(): $ResourceKey<$Level>
get "lootOwner"(): $UUID
get "shouldCheckItemUseTick"(): boolean
set "deadPlayer"(value: $UUID$$Type)
set "lastChunkEntryDimension"(value: $ResourceKey$$Type<$Level>)
set "lootOwner"(value: $UUID$$Type)
set "shouldCheckItemUseTick"(value: boolean)
}
}

declare module "packages/xaero/pac/common/capability/$ICapableObject" {
import { $ICapabilityProvider, $ICapabilityProvider$$Type } from "packages/xaero/pac/common/capability/$ICapabilityProvider"

export interface $ICapableObject {
"getXaero_OPAC_CapabilityProvider"(): $ICapabilityProvider
"setXaero_OPAC_CapabilityProvider"(iCapabilityProvider0: $ICapabilityProvider$$Type): void
get "xaero_OPAC_CapabilityProvider"(): $ICapabilityProvider
set "xaero_OPAC_CapabilityProvider"(value: $ICapabilityProvider$$Type)
}

export namespace $ICapableObject {
const probejs$$marker: never
}
export abstract class $ICapableObject$$Static implements $ICapableObject {
}
}

