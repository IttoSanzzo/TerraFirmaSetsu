declare module "packages/xaero/pac/common/server/claims/api/$IServerRegionClaimsAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IServerRegionClaimsAPI$$Type = ($IServerRegionClaimsAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IServerRegionClaimsAPI_ = $IServerRegionClaimsAPI$$Type;
}
}

declare module "packages/xaero/pac/common/claims/result/api/$ClaimResult" {
import { $IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$$Type } from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClaimResult$$Type<C extends $IPlayerChunkClaimAPI> = ($ClaimResult<C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClaimResult_<C extends $IPlayerChunkClaimAPI> = $ClaimResult$$Type<C>;
}
}

declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigOptionClientStorageAPI" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerConfigOptionClientStorageAPI$$Type<T extends $Comparable<T>> = ($IPlayerConfigOptionClientStorageAPI<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerConfigOptionClientStorageAPI_<T extends $Comparable<T>> = $IPlayerConfigOptionClientStorageAPI$$Type<T>;
}
}

declare module "packages/xaero/pac/common/server/core/accessor/$IServerGamePacketListenerImpl" {
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IServerGamePacketListenerImpl$$Type = ($IServerGamePacketListenerImpl | (() => $Connection$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IServerGamePacketListenerImpl_ = $IServerGamePacketListenerImpl$$Type;
}
}

declare module "packages/xaero/pac/common/server/parties/system/api/$IPlayerPartySystemAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerPartySystemAPI$$Type<P> = ($IPlayerPartySystemAPI<P>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerPartySystemAPI_<P> = $IPlayerPartySystemAPI$$Type<P>;
}
}

declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IClaimsManagerListenerAPI$$Type = ($IClaimsManagerListenerAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IClaimsManagerListenerAPI_ = $IClaimsManagerListenerAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/player/localization/api/$IAdaptiveLocalizerAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IAdaptiveLocalizerAPI$$Type = ($IAdaptiveLocalizerAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IAdaptiveLocalizerAPI_ = $IAdaptiveLocalizerAPI$$Type;
}
}

declare module "packages/xaero/pac/client/event/api/$OPACClientAddonRegisterEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OPACClientAddonRegisterEvent$$Type = ($OPACClientAddonRegisterEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OPACClientAddonRegisterEvent_ = $OPACClientAddonRegisterEvent$$Type;
}
}

declare module "packages/xaero/pac/common/parties/party/api/$IPartyMemberDynamicInfoSyncableAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPartyMemberDynamicInfoSyncableAPI$$Type = ($IPartyMemberDynamicInfoSyncableAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPartyMemberDynamicInfoSyncableAPI_ = $IPartyMemberDynamicInfoSyncableAPI$$Type;
}
}

declare module "packages/xaero/pac/client/claims/tracker/result/api/$IClaimsManagerClaimResultListenerAPI" {
import { $AreaClaimResult } from "packages/xaero/pac/common/claims/result/api/$AreaClaimResult"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IClaimsManagerClaimResultListenerAPI$$Type = ($IClaimsManagerClaimResultListenerAPI | ((arg0: $AreaClaimResult) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IClaimsManagerClaimResultListenerAPI_ = $IClaimsManagerClaimResultListenerAPI$$Type;
}
}

declare module "packages/xaero/pac/common/event/api/$OPACServerAddonRegisterEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OPACServerAddonRegisterEvent$$Type = ($OPACServerAddonRegisterEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OPACServerAddonRegisterEvent_ = $OPACServerAddonRegisterEvent$$Type;
}
}

declare module "packages/xaero/pac/common/server/parties/party/api/$IPartyManagerAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPartyManagerAPI$$Type = ($IPartyManagerAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPartyManagerAPI_ = $IPartyManagerAPI$$Type;
}
}

declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigStringableOptionClientStorageAPI" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerConfigStringableOptionClientStorageAPI$$Type<T extends $Comparable<T>> = ($IPlayerConfigStringableOptionClientStorageAPI<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerConfigStringableOptionClientStorageAPI_<T extends $Comparable<T>> = $IPlayerConfigStringableOptionClientStorageAPI$$Type<T>;
}
}

declare module "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerChunkClaimAPI$$Type = ($IPlayerChunkClaimAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerChunkClaimAPI_ = $IPlayerChunkClaimAPI$$Type;
}
}

declare module "packages/xaero/pac/common/mixin/create/$MixinAccessorDeployerFakePlayer" {
import { $Pair$$Type } from "packages/org/apache/commons/lang3/tuple/$Pair"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MixinAccessorDeployerFakePlayer$$Type = ($MixinAccessorDeployerFakePlayer | (() => $Pair$$Type<$BlockPos$$Type, float>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MixinAccessorDeployerFakePlayer_ = $MixinAccessorDeployerFakePlayer$$Type;
}
}

declare module "packages/xaero/pac/common/parties/party/member/$PartyMemberRank" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PartyMemberRank$$Type = ($PartyMemberRank | ("member" | "moderator" | "admin"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PartyMemberRank_ = $PartyMemberRank$$Type;
}
}

declare module "packages/xaero/pac/common/claims/api/$IDimensionClaimsManagerAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IDimensionClaimsManagerAPI$$Type = ($IDimensionClaimsManagerAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IDimensionClaimsManagerAPI_ = $IDimensionClaimsManagerAPI$$Type;
}
}

declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerRegisterAPI" {
import { $IClaimsManagerListenerAPI } from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IClaimsManagerTrackerRegisterAPI$$Type = ($IClaimsManagerTrackerRegisterAPI | ((arg0: $IClaimsManagerListenerAPI) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IClaimsManagerTrackerRegisterAPI_ = $IClaimsManagerTrackerRegisterAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerConfigAPI$$Type = ($IPlayerConfigAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerConfigAPI_ = $IPlayerConfigAPI$$Type;
}
}

declare module "packages/xaero/pac/common/claims/result/api/$ClaimResult$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClaimResult$Type$$Type = ($ClaimResult$Type | ("already_forceloadable" | "already_unforceloaded" | "claims_are_disabled" | "too_many_chunks" | "unclaimable_dimension" | "not_claimed_by_user_forceload" | "not_claimed_by_user" | "already_claimed" | "forceload_limit_reached" | "claim_limit_reached" | "too_far" | "replacement_in_progress" | "no_server_permission" | "successful_unforceload" | "successful_unclaim" | "successful_forceload" | "successful_claim"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClaimResult$Type_ = $ClaimResult$Type$$Type;
}
}

declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerConfigOptionSpecAPI$$Type<T extends $Comparable<T>> = ($IPlayerConfigOptionSpecAPI<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerConfigOptionSpecAPI_<T extends $Comparable<T>> = $IPlayerConfigOptionSpecAPI$$Type<T>;
}
}

declare module "packages/xaero/pac/common/server/player/data/api/$ServerPlayerDataAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerPlayerDataAPI$$Type = ($ServerPlayerDataAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerPlayerDataAPI_ = $ServerPlayerDataAPI$$Type;
}
}

declare module "packages/xaero/pac/common/claims/player/api/$IPlayerDimensionClaimsAPI" {
import { $IPlayerClaimPosListAPI$$Type } from "packages/xaero/pac/common/claims/player/api/$IPlayerClaimPosListAPI"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerDimensionClaimsAPI$$Type = ($IPlayerDimensionClaimsAPI | (() => $Stream$$Type<$IPlayerClaimPosListAPI$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerDimensionClaimsAPI_ = $IPlayerDimensionClaimsAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/player/permission/api/$IPermissionNodeAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPermissionNodeAPI$$Type<T> = ($IPermissionNodeAPI<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPermissionNodeAPI_<T> = $IPermissionNodeAPI$$Type<T>;
}
}

declare module "packages/xaero/pac/common/claims/api/$IRegionClaimsAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IRegionClaimsAPI$$Type = ($IRegionClaimsAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IRegionClaimsAPI_ = $IRegionClaimsAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/claims/player/api/$IServerPlayerClaimInfoAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IServerPlayerClaimInfoAPI$$Type = ($IServerPlayerClaimInfoAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IServerPlayerClaimInfoAPI_ = $IServerPlayerClaimInfoAPI$$Type;
}
}

declare module "packages/xaero/pac/common/claims/player/api/$IPlayerClaimPosListAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerClaimPosListAPI$$Type = ($IPlayerClaimPosListAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerClaimPosListAPI_ = $IPlayerClaimPosListAPI$$Type;
}
}

declare module "packages/xaero/pac/common/parties/party/member/api/$IPartyMemberAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPartyMemberAPI$$Type = ($IPartyMemberAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPartyMemberAPI_ = $IPartyMemberAPI$$Type;
}
}

declare module "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPartyPlayerInfoAPI$$Type = ($IPartyPlayerInfoAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPartyPlayerInfoAPI_ = $IPartyPlayerInfoAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/$IOpenPACMinecraftServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IOpenPACMinecraftServer$$Type = ($IOpenPACMinecraftServer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IOpenPACMinecraftServer_ = $IOpenPACMinecraftServer$$Type;
}
}

declare module "packages/xaero/pac/common/server/player/data/$IOpenPACServerPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IOpenPACServerPlayer$$Type = ($IOpenPACServerPlayer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IOpenPACServerPlayer_ = $IOpenPACServerPlayer$$Type;
}
}

declare module "packages/xaero/pac/common/claims/api/$IClaimsManagerAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IClaimsManagerAPI$$Type = ($IClaimsManagerAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IClaimsManagerAPI_ = $IClaimsManagerAPI$$Type;
}
}

declare module "packages/xaero/pac/common/entity/$IEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IEntity$$Type = ($IEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IEntity_ = $IEntity$$Type;
}
}

declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI$SetResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerConfigAPI$SetResult$$Type = ($IPlayerConfigAPI$SetResult | ("invalid" | "illegal_option" | "defaulted" | "success"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerConfigAPI$SetResult_ = $IPlayerConfigAPI$SetResult$$Type;
}
}

declare module "packages/xaero/pac/common/parties/party/ally/api/$IPartyAllyAPI" {
import { $UUID$$Type } from "packages/java/util/$UUID"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPartyAllyAPI$$Type = ($IPartyAllyAPI | (() => $UUID$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPartyAllyAPI_ = $IPartyAllyAPI$$Type;
}
}

declare module "packages/xaero/pac/common/claims/player/api/$IPlayerClaimInfoAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerClaimInfoAPI$$Type = ($IPlayerClaimInfoAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerClaimInfoAPI_ = $IPlayerClaimInfoAPI$$Type;
}
}

declare module "packages/xaero/pac/client/claims/tracker/result/api/$IClaimsManagerClaimResultTrackerRegisterAPI" {
import { $IClaimsManagerClaimResultListenerAPI } from "packages/xaero/pac/client/claims/tracker/result/api/$IClaimsManagerClaimResultListenerAPI"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IClaimsManagerClaimResultTrackerRegisterAPI$$Type = ($IClaimsManagerClaimResultTrackerRegisterAPI | ((arg0: $IClaimsManagerClaimResultListenerAPI) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IClaimsManagerClaimResultTrackerRegisterAPI_ = $IClaimsManagerClaimResultTrackerRegisterAPI$$Type;
}
}

declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerConfigClientStorageAPI$$Type = ($IPlayerConfigClientStorageAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerConfigClientStorageAPI_ = $IPlayerConfigClientStorageAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/parties/party/api/$IServerPartyAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IServerPartyAPI$$Type = ($IServerPartyAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IServerPartyAPI_ = $IServerPartyAPI$$Type;
}
}

declare module "packages/xaero/pac/common/claims/result/api/$AreaClaimResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AreaClaimResult$$Type = ($AreaClaimResult);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AreaClaimResult_ = $AreaClaimResult$$Type;
}
}

declare module "packages/xaero/pac/common/server/claims/protection/api/$IChunkProtectionAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IChunkProtectionAPI$$Type = ($IChunkProtectionAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IChunkProtectionAPI_ = $IChunkProtectionAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/$IServerDataAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IServerDataAPI$$Type = ($IServerDataAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IServerDataAPI_ = $IServerDataAPI$$Type;
}
}

declare module "packages/xaero/pac/common/parties/party/api/$IPartyAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPartyAPI$$Type = ($IPartyAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPartyAPI_ = $IPartyAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/player/permission/api/$IPlayerPermissionSystemRegisterAPI" {
import { $IPlayerPermissionSystemAPI } from "packages/xaero/pac/common/server/player/permission/api/$IPlayerPermissionSystemAPI"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerPermissionSystemRegisterAPI$$Type = ($IPlayerPermissionSystemRegisterAPI | ((arg0: string, arg1: $IPlayerPermissionSystemAPI) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerPermissionSystemRegisterAPI_ = $IPlayerPermissionSystemRegisterAPI$$Type;
}
}

declare module "packages/xaero/pac/common/entity/$IItemEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IItemEntity$$Type = ($IItemEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IItemEntity_ = $IItemEntity$$Type;
}
}

declare module "packages/xaero/pac/common/server/parties/system/api/$IPlayerPartySystemRegisterAPI" {
import { $IPlayerPartySystemAPI } from "packages/xaero/pac/common/server/parties/system/api/$IPlayerPartySystemAPI"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerPartySystemRegisterAPI$$Type = ($IPlayerPartySystemRegisterAPI | ((arg0: string, arg1: $IPlayerPartySystemAPI<any>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerPartySystemRegisterAPI_ = $IPlayerPartySystemRegisterAPI$$Type;
}
}

declare module "packages/xaero/pac/common/capability/$ICapabilityProvider" {
import { $ICapability } from "packages/xaero/pac/common/capability/$ICapability"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ICapabilityProvider$$Type = ($ICapabilityProvider | ((arg0: $ICapability<T>) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ICapabilityProvider_ = $ICapabilityProvider$$Type;
}
}

declare module "packages/xaero/pac/common/server/core/accessor/$ICreateContraption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ICreateContraption$$Type = ($ICreateContraption);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ICreateContraption_ = $ICreateContraption$$Type;
}
}

declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigManagerAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerConfigManagerAPI$$Type = ($IPlayerConfigManagerAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerConfigManagerAPI_ = $IPlayerConfigManagerAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/player/permission/api/$IPlayerPermissionSystemAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerPermissionSystemAPI$$Type = ($IPlayerPermissionSystemAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerPermissionSystemAPI_ = $IPlayerPermissionSystemAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/core/accessor/$ICreateContraptionEntity" {
import { $ICreateContraption$$Type } from "packages/xaero/pac/common/server/core/accessor/$ICreateContraption"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ICreateContraptionEntity$$Type = ($ICreateContraptionEntity | (() => $ICreateContraption$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ICreateContraptionEntity_ = $ICreateContraptionEntity$$Type;
}
}

declare module "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerConfigType$$Type = ($PlayerConfigType | ("server" | "expired" | "wilderness" | "default_player" | "player"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerConfigType_ = $PlayerConfigType$$Type;
}
}

declare module "packages/xaero/pac/common/capability/$ICapability" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ICapability$$Type<T> = ($ICapability<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ICapability_<T> = $ICapability$$Type<T>;
}
}

declare module "packages/xaero/pac/common/server/claims/api/$IServerDimensionClaimsManagerAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IServerDimensionClaimsManagerAPI$$Type = ($IServerDimensionClaimsManagerAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IServerDimensionClaimsManagerAPI_ = $IServerDimensionClaimsManagerAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/claims/api/$IServerClaimsManagerAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IServerClaimsManagerAPI$$Type = ($IServerClaimsManagerAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IServerClaimsManagerAPI_ = $IServerClaimsManagerAPI$$Type;
}
}

declare module "packages/xaero/pac/common/server/api/$OpenPACServerAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OpenPACServerAPI$$Type = ($OpenPACServerAPI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OpenPACServerAPI_ = $OpenPACServerAPI$$Type;
}
}

declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerAPI" {
import { $IClaimsManagerListenerAPI } from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IClaimsManagerTrackerAPI$$Type = ($IClaimsManagerTrackerAPI | ((arg0: $IClaimsManagerListenerAPI) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IClaimsManagerTrackerAPI_ = $IClaimsManagerTrackerAPI$$Type;
}
}

declare module "packages/xaero/pac/common/entity/$EntityData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityData$$Type = ($EntityData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityData_ = $EntityData$$Type;
}
}

declare module "packages/xaero/pac/common/capability/$ICapableObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ICapableObject$$Type = ($ICapableObject);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ICapableObject_ = $ICapableObject$$Type;
}
}

