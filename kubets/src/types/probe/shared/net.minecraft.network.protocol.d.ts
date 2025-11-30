declare module "packages/net/minecraft/network/protocol/game/$ClientboundEntityEventPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundEntityEventPacket implements $Packet<$ClientGamePacketListener> {
constructor(entity0: $Entity$$Type, byte1: byte)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEntity"(level0: $Level$$Type): $Entity
public "getEventId"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "eventId"(): byte
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundClearTitlesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundClearTitlesPacket implements $Packet<$ClientGamePacketListener> {
constructor(boolean0: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "shouldResetTimes"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundHurtAnimationPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ClientboundHurtAnimationPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, float1: float)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(livingEntity0: $LivingEntity$$Type)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "id"(): integer
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "yaw"(): float
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener" {
import { $ClientboundOpenScreenPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundOpenScreenPacket"
import { $ClientboundSetPassengersPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetPassengersPacket"
import { $ClientboundCommandsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundCommandsPacket"
import { $ClientboundSetChunkCacheCenterPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetChunkCacheCenterPacket"
import { $ClientboundChunksBiomesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundChunksBiomesPacket"
import { $ClientboundResourcePackPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundResourcePackPacket"
import { $ClientboundEntityEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundEntityEventPacket"
import { $ClientboundSetEntityLinkPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetEntityLinkPacket"
import { $ClientboundMoveVehiclePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundMoveVehiclePacket"
import { $ClientboundContainerClosePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundContainerClosePacket"
import { $ClientboundClearTitlesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundClearTitlesPacket"
import { $ClientboundBlockEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEventPacket"
import { $ClientboundDeleteChatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundDeleteChatPacket"
import { $ClientboundPlayerInfoUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerInfoUpdatePacket"
import { $ClientboundAddEntityPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundAddEntityPacket"
import { $ClientboundForgetLevelChunkPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundForgetLevelChunkPacket"
import { $ClientboundTagQueryPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundTagQueryPacket"
import { $ClientboundPlayerChatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerChatPacket"
import { $ClientboundSetScorePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetScorePacket"
import { $ClientboundSetSubtitleTextPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetSubtitleTextPacket"
import { $ClientboundSetActionBarTextPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetActionBarTextPacket"
import { $ClientboundSetObjectivePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetObjectivePacket"
import { $ClientboundLevelEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundLevelEventPacket"
import { $ClientboundRemoveEntitiesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundRemoveEntitiesPacket"
import { $ClientboundSetEquipmentPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetEquipmentPacket"
import { $ClientboundRecipePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundRecipePacket"
import { $ClientboundPingPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPingPacket"
import { $ClientboundOpenSignEditorPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundOpenSignEditorPacket"
import { $ClientboundSetBorderWarningDistancePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderWarningDistancePacket"
import { $ClientboundSelectAdvancementsTabPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSelectAdvancementsTabPacket"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ClientboundSystemChatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSystemChatPacket"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $ClientboundDisconnectPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundDisconnectPacket"
import { $ClientboundPlayerAbilitiesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerAbilitiesPacket"
import { $ClientboundContainerSetSlotPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundContainerSetSlotPacket"
import { $ClientboundMerchantOffersPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundMerchantOffersPacket"
import { $ClientboundCustomPayloadPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundCustomPayloadPacket"
import { $ClientboundTeleportEntityPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundTeleportEntityPacket"
import { $ClientboundSetEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetEntityDataPacket"
import { $ClientboundSetDefaultSpawnPositionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetDefaultSpawnPositionPacket"
import { $ClientboundSetCameraPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetCameraPacket"
import { $ClientboundHurtAnimationPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundHurtAnimationPacket"
import { $ClientboundPlayerPositionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerPositionPacket"
import { $ClientboundSoundPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSoundPacket"
import { $ClientboundUpdateAdvancementsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateAdvancementsPacket"
import { $ClientboundContainerSetContentPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundContainerSetContentPacket"
import { $ClientboundDisguisedChatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundDisguisedChatPacket"
import { $ClientboundHorseScreenOpenPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundHorseScreenOpenPacket"
import { $ClientboundRespawnPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundRespawnPacket"
import { $ClientboundLevelParticlesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundLevelParticlesPacket"
import { $ClientboundInitializeBorderPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundInitializeBorderPacket"
import { $ClientboundAnimatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundAnimatePacket"
import { $ClientboundRemoveMobEffectPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundRemoveMobEffectPacket"
import { $ClientboundSoundEntityPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSoundEntityPacket"
import { $ClientboundLevelChunkWithLightPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundLevelChunkWithLightPacket"
import { $ClientboundPlayerLookAtPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerLookAtPacket"
import { $ClientboundSetChunkCacheRadiusPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetChunkCacheRadiusPacket"
import { $ClientboundDamageEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundDamageEventPacket"
import { $ClientboundSetSimulationDistancePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetSimulationDistancePacket"
import { $ClientboundTabListPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundTabListPacket"
import { $ClientboundOpenBookPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundOpenBookPacket"
import { $ClientboundMapItemDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundMapItemDataPacket"
import { $ClientboundSetEntityMotionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetEntityMotionPacket"
import { $ClientboundSetTitleTextPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetTitleTextPacket"
import { $ClientboundUpdateAttributesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateAttributesPacket"
import { $ClientboundUpdateRecipesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateRecipesPacket"
import { $ClientboundContainerSetDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundContainerSetDataPacket"
import { $ClientboundPlayerCombatEnterPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerCombatEnterPacket"
import { $ClientboundSectionBlocksUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSectionBlocksUpdatePacket"
import { $ClientboundSetTitlesAnimationPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetTitlesAnimationPacket"
import { $ClientboundPlaceGhostRecipePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlaceGhostRecipePacket"
import { $ClientboundSetBorderCenterPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderCenterPacket"
import { $ClientboundLightUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundLightUpdatePacket"
import { $PacketListener } from "packages/net/minecraft/network/$PacketListener"
import { $ClientboundGameEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundGameEventPacket"
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
import { $ClientboundSetBorderLerpSizePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderLerpSizePacket"
import { $ClientboundBlockUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockUpdatePacket"
import { $ClientboundStopSoundPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundStopSoundPacket"
import { $ClientboundExplodePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundExplodePacket"
import { $ClientboundCustomChatCompletionsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundCustomChatCompletionsPacket"
import { $ClientboundBlockDestructionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockDestructionPacket"
import { $ClientboundMoveEntityPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundMoveEntityPacket"
import { $ClientboundAwardStatsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundAwardStatsPacket"
import { $ClientboundSetBorderWarningDelayPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderWarningDelayPacket"
import { $ClientboundSetTimePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetTimePacket"
import { $ClientboundServerDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundServerDataPacket"
import { $ClientboundSetPlayerTeamPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetPlayerTeamPacket"
import { $ClientboundSetHealthPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetHealthPacket"
import { $ClientboundLoginPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundLoginPacket"
import { $ClientboundSetDisplayObjectivePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetDisplayObjectivePacket"
import { $ClientboundAddExperienceOrbPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundAddExperienceOrbPacket"
import { $ClientboundCooldownPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundCooldownPacket"
import { $ClientboundUpdateTagsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateTagsPacket"
import { $ClientboundBossEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBossEventPacket"

export interface $ClientGamePacketListener extends $PacketListener {
"handleAddEntity"(clientboundAddEntityPacket0: $ClientboundAddEntityPacket$$Type): void
"handleAddExperienceOrb"(clientboundAddExperienceOrbPacket0: $ClientboundAddExperienceOrbPacket$$Type): void
"handleAddObjective"(clientboundSetObjectivePacket0: $ClientboundSetObjectivePacket$$Type): void
"handleAddOrRemoveRecipes"(clientboundRecipePacket0: $ClientboundRecipePacket$$Type): void
"handleAddPlayer"(clientboundAddPlayerPacket0: $ClientboundAddPlayerPacket$$Type): void
"handleAnimate"(clientboundAnimatePacket0: $ClientboundAnimatePacket$$Type): void
"handleAwardStats"(clientboundAwardStatsPacket0: $ClientboundAwardStatsPacket$$Type): void
"handleBlockChangedAck"(clientboundBlockChangedAckPacket0: $ClientboundBlockChangedAckPacket$$Type): void
"handleBlockDestruction"(clientboundBlockDestructionPacket0: $ClientboundBlockDestructionPacket$$Type): void
"handleBlockEntityData"(clientboundBlockEntityDataPacket0: $ClientboundBlockEntityDataPacket$$Type): void
"handleBlockEvent"(clientboundBlockEventPacket0: $ClientboundBlockEventPacket$$Type): void
"handleBlockUpdate"(clientboundBlockUpdatePacket0: $ClientboundBlockUpdatePacket$$Type): void
"handleBossUpdate"(clientboundBossEventPacket0: $ClientboundBossEventPacket$$Type): void
"handleBundlePacket"(clientboundBundlePacket0: $ClientboundBundlePacket$$Type): void
"handleChangeDifficulty"(clientboundChangeDifficultyPacket0: $ClientboundChangeDifficultyPacket$$Type): void
"handleChunkBlocksUpdate"(clientboundSectionBlocksUpdatePacket0: $ClientboundSectionBlocksUpdatePacket$$Type): void
"handleChunksBiomes"(clientboundChunksBiomesPacket0: $ClientboundChunksBiomesPacket$$Type): void
"handleCommandSuggestions"(clientboundCommandSuggestionsPacket0: $ClientboundCommandSuggestionsPacket$$Type): void
"handleCommands"(clientboundCommandsPacket0: $ClientboundCommandsPacket$$Type): void
"handleContainerClose"(clientboundContainerClosePacket0: $ClientboundContainerClosePacket$$Type): void
"handleContainerContent"(clientboundContainerSetContentPacket0: $ClientboundContainerSetContentPacket$$Type): void
"handleContainerSetData"(clientboundContainerSetDataPacket0: $ClientboundContainerSetDataPacket$$Type): void
"handleContainerSetSlot"(clientboundContainerSetSlotPacket0: $ClientboundContainerSetSlotPacket$$Type): void
"handleCustomChatCompletions"(clientboundCustomChatCompletionsPacket0: $ClientboundCustomChatCompletionsPacket$$Type): void
"handleCustomPayload"(clientboundCustomPayloadPacket0: $ClientboundCustomPayloadPacket$$Type): void
"handleDamageEvent"(clientboundDamageEventPacket0: $ClientboundDamageEventPacket$$Type): void
"handleDeleteChat"(clientboundDeleteChatPacket0: $ClientboundDeleteChatPacket$$Type): void
"handleDisconnect"(clientboundDisconnectPacket0: $ClientboundDisconnectPacket$$Type): void
"handleDisguisedChat"(clientboundDisguisedChatPacket0: $ClientboundDisguisedChatPacket$$Type): void
"handleEnabledFeatures"(clientboundUpdateEnabledFeaturesPacket0: $ClientboundUpdateEnabledFeaturesPacket$$Type): void
"handleEntityEvent"(clientboundEntityEventPacket0: $ClientboundEntityEventPacket$$Type): void
"handleEntityLinkPacket"(clientboundSetEntityLinkPacket0: $ClientboundSetEntityLinkPacket$$Type): void
"handleExplosion"(clientboundExplodePacket0: $ClientboundExplodePacket$$Type): void
"handleForgetLevelChunk"(clientboundForgetLevelChunkPacket0: $ClientboundForgetLevelChunkPacket$$Type): void
"handleGameEvent"(clientboundGameEventPacket0: $ClientboundGameEventPacket$$Type): void
"handleHorseScreenOpen"(clientboundHorseScreenOpenPacket0: $ClientboundHorseScreenOpenPacket$$Type): void
"handleHurtAnimation"(clientboundHurtAnimationPacket0: $ClientboundHurtAnimationPacket$$Type): void
"handleInitializeBorder"(clientboundInitializeBorderPacket0: $ClientboundInitializeBorderPacket$$Type): void
"handleItemCooldown"(clientboundCooldownPacket0: $ClientboundCooldownPacket$$Type): void
"handleKeepAlive"(clientboundKeepAlivePacket0: $ClientboundKeepAlivePacket$$Type): void
"handleLevelChunkWithLight"(clientboundLevelChunkWithLightPacket0: $ClientboundLevelChunkWithLightPacket$$Type): void
"handleLevelEvent"(clientboundLevelEventPacket0: $ClientboundLevelEventPacket$$Type): void
"handleLightUpdatePacket"(clientboundLightUpdatePacket0: $ClientboundLightUpdatePacket$$Type): void
"handleLogin"(clientboundLoginPacket0: $ClientboundLoginPacket$$Type): void
"handleLookAt"(clientboundPlayerLookAtPacket0: $ClientboundPlayerLookAtPacket$$Type): void
"handleMapItemData"(clientboundMapItemDataPacket0: $ClientboundMapItemDataPacket$$Type): void
"handleMerchantOffers"(clientboundMerchantOffersPacket0: $ClientboundMerchantOffersPacket$$Type): void
"handleMoveEntity"(clientboundMoveEntityPacket0: $ClientboundMoveEntityPacket$$Type): void
"handleMovePlayer"(clientboundPlayerPositionPacket0: $ClientboundPlayerPositionPacket$$Type): void
"handleMoveVehicle"(clientboundMoveVehiclePacket0: $ClientboundMoveVehiclePacket$$Type): void
"handleOpenBook"(clientboundOpenBookPacket0: $ClientboundOpenBookPacket$$Type): void
"handleOpenScreen"(clientboundOpenScreenPacket0: $ClientboundOpenScreenPacket$$Type): void
"handleOpenSignEditor"(clientboundOpenSignEditorPacket0: $ClientboundOpenSignEditorPacket$$Type): void
"handleParticleEvent"(clientboundLevelParticlesPacket0: $ClientboundLevelParticlesPacket$$Type): void
"handlePing"(clientboundPingPacket0: $ClientboundPingPacket$$Type): void
"handlePlaceRecipe"(clientboundPlaceGhostRecipePacket0: $ClientboundPlaceGhostRecipePacket$$Type): void
"handlePlayerAbilities"(clientboundPlayerAbilitiesPacket0: $ClientboundPlayerAbilitiesPacket$$Type): void
"handlePlayerChat"(clientboundPlayerChatPacket0: $ClientboundPlayerChatPacket$$Type): void
"handlePlayerCombatEnd"(clientboundPlayerCombatEndPacket0: $ClientboundPlayerCombatEndPacket$$Type): void
"handlePlayerCombatEnter"(clientboundPlayerCombatEnterPacket0: $ClientboundPlayerCombatEnterPacket$$Type): void
"handlePlayerCombatKill"(clientboundPlayerCombatKillPacket0: $ClientboundPlayerCombatKillPacket$$Type): void
"handlePlayerInfoRemove"(clientboundPlayerInfoRemovePacket0: $ClientboundPlayerInfoRemovePacket$$Type): void
"handlePlayerInfoUpdate"(clientboundPlayerInfoUpdatePacket0: $ClientboundPlayerInfoUpdatePacket$$Type): void
"handleRemoveEntities"(clientboundRemoveEntitiesPacket0: $ClientboundRemoveEntitiesPacket$$Type): void
"handleRemoveMobEffect"(clientboundRemoveMobEffectPacket0: $ClientboundRemoveMobEffectPacket$$Type): void
"handleResourcePack"(clientboundResourcePackPacket0: $ClientboundResourcePackPacket$$Type): void
"handleRespawn"(clientboundRespawnPacket0: $ClientboundRespawnPacket$$Type): void
"handleRotateMob"(clientboundRotateHeadPacket0: $ClientboundRotateHeadPacket$$Type): void
"handleSelectAdvancementsTab"(clientboundSelectAdvancementsTabPacket0: $ClientboundSelectAdvancementsTabPacket$$Type): void
"handleServerData"(clientboundServerDataPacket0: $ClientboundServerDataPacket$$Type): void
"handleSetBorderCenter"(clientboundSetBorderCenterPacket0: $ClientboundSetBorderCenterPacket$$Type): void
"handleSetBorderLerpSize"(clientboundSetBorderLerpSizePacket0: $ClientboundSetBorderLerpSizePacket$$Type): void
"handleSetBorderSize"(clientboundSetBorderSizePacket0: $ClientboundSetBorderSizePacket$$Type): void
"handleSetBorderWarningDelay"(clientboundSetBorderWarningDelayPacket0: $ClientboundSetBorderWarningDelayPacket$$Type): void
"handleSetBorderWarningDistance"(clientboundSetBorderWarningDistancePacket0: $ClientboundSetBorderWarningDistancePacket$$Type): void
"handleSetCamera"(clientboundSetCameraPacket0: $ClientboundSetCameraPacket$$Type): void
"handleSetCarriedItem"(clientboundSetCarriedItemPacket0: $ClientboundSetCarriedItemPacket$$Type): void
"handleSetChunkCacheCenter"(clientboundSetChunkCacheCenterPacket0: $ClientboundSetChunkCacheCenterPacket$$Type): void
"handleSetChunkCacheRadius"(clientboundSetChunkCacheRadiusPacket0: $ClientboundSetChunkCacheRadiusPacket$$Type): void
"handleSetDisplayObjective"(clientboundSetDisplayObjectivePacket0: $ClientboundSetDisplayObjectivePacket$$Type): void
"handleSetEntityData"(clientboundSetEntityDataPacket0: $ClientboundSetEntityDataPacket$$Type): void
"handleSetEntityMotion"(clientboundSetEntityMotionPacket0: $ClientboundSetEntityMotionPacket$$Type): void
"handleSetEntityPassengersPacket"(clientboundSetPassengersPacket0: $ClientboundSetPassengersPacket$$Type): void
"handleSetEquipment"(clientboundSetEquipmentPacket0: $ClientboundSetEquipmentPacket$$Type): void
"handleSetExperience"(clientboundSetExperiencePacket0: $ClientboundSetExperiencePacket$$Type): void
"handleSetHealth"(clientboundSetHealthPacket0: $ClientboundSetHealthPacket$$Type): void
"handleSetPlayerTeamPacket"(clientboundSetPlayerTeamPacket0: $ClientboundSetPlayerTeamPacket$$Type): void
"handleSetScore"(clientboundSetScorePacket0: $ClientboundSetScorePacket$$Type): void
"handleSetSimulationDistance"(clientboundSetSimulationDistancePacket0: $ClientboundSetSimulationDistancePacket$$Type): void
"handleSetSpawn"(clientboundSetDefaultSpawnPositionPacket0: $ClientboundSetDefaultSpawnPositionPacket$$Type): void
"handleSetTime"(clientboundSetTimePacket0: $ClientboundSetTimePacket$$Type): void
"handleSoundEntityEvent"(clientboundSoundEntityPacket0: $ClientboundSoundEntityPacket$$Type): void
"handleSoundEvent"(clientboundSoundPacket0: $ClientboundSoundPacket$$Type): void
"handleStopSoundEvent"(clientboundStopSoundPacket0: $ClientboundStopSoundPacket$$Type): void
"handleSystemChat"(clientboundSystemChatPacket0: $ClientboundSystemChatPacket$$Type): void
"handleTabListCustomisation"(clientboundTabListPacket0: $ClientboundTabListPacket$$Type): void
"handleTagQueryPacket"(clientboundTagQueryPacket0: $ClientboundTagQueryPacket$$Type): void
"handleTakeItemEntity"(clientboundTakeItemEntityPacket0: $ClientboundTakeItemEntityPacket$$Type): void
"handleTeleportEntity"(clientboundTeleportEntityPacket0: $ClientboundTeleportEntityPacket$$Type): void
"handleTitlesClear"(clientboundClearTitlesPacket0: $ClientboundClearTitlesPacket$$Type): void
"handleUpdateAdvancementsPacket"(clientboundUpdateAdvancementsPacket0: $ClientboundUpdateAdvancementsPacket$$Type): void
"handleUpdateAttributes"(clientboundUpdateAttributesPacket0: $ClientboundUpdateAttributesPacket$$Type): void
"handleUpdateMobEffect"(clientboundUpdateMobEffectPacket0: $ClientboundUpdateMobEffectPacket$$Type): void
"handleUpdateRecipes"(clientboundUpdateRecipesPacket0: $ClientboundUpdateRecipesPacket$$Type): void
"handleUpdateTags"(clientboundUpdateTagsPacket0: $ClientboundUpdateTagsPacket$$Type): void
"isAcceptingMessages"(): boolean
"onDisconnect"(component0: $Component$$Type): void
"setActionBarText"(clientboundSetActionBarTextPacket0: $ClientboundSetActionBarTextPacket$$Type): void
"setSubtitleText"(clientboundSetSubtitleTextPacket0: $ClientboundSetSubtitleTextPacket$$Type): void
"setTitleText"(clientboundSetTitleTextPacket0: $ClientboundSetTitleTextPacket$$Type): void
"setTitlesAnimation"(clientboundSetTitlesAnimationPacket0: $ClientboundSetTitlesAnimationPacket$$Type): void
"shouldPropagateHandlingExceptions"(): boolean
get "acceptingMessages"(): boolean
set "actionBarText"(value: $ClientboundSetActionBarTextPacket$$Type)
set "subtitleText"(value: $ClientboundSetSubtitleTextPacket$$Type)
set "titleText"(value: $ClientboundSetTitleTextPacket$$Type)
set "titlesAnimation"(value: $ClientboundSetTitlesAnimationPacket$$Type)
}

export namespace $ClientGamePacketListener {
const probejs$$marker: never
}
export abstract class $ClientGamePacketListener$$Static implements $ClientGamePacketListener {
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener" {
import { $ServerboundKeepAlivePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundKeepAlivePacket"
import { $ServerboundMovePlayerPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundMovePlayerPacket"
import { $ServerboundAcceptTeleportationPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundAcceptTeleportationPacket"
import { $ServerboundCustomPayloadPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundCustomPayloadPacket"
import { $ServerboundPongPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPongPacket"
import { $ServerboundSignUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSignUpdatePacket"
import { $ServerboundPlayerActionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerActionPacket"
import { $ServerPacketListener } from "packages/net/minecraft/network/protocol/game/$ServerPacketListener"
import { $ServerboundSetCommandBlockPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetCommandBlockPacket"
import { $ServerboundChatCommandPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundChatCommandPacket"
import { $ServerboundContainerClickPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundContainerClickPacket"
import { $ServerboundSetCommandMinecartPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetCommandMinecartPacket"
import { $ServerboundContainerClosePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundContainerClosePacket"
import { $ServerboundPlayerAbilitiesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerAbilitiesPacket"
import { $ServerboundRenameItemPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundRenameItemPacket"
import { $ServerboundChangeDifficultyPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundChangeDifficultyPacket"
import { $ServerboundClientCommandPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundClientCommandPacket"
import { $ServerboundChatSessionUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundChatSessionUpdatePacket"
import { $ServerboundSwingPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSwingPacket"
import { $ServerboundSelectTradePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSelectTradePacket"
import { $ServerboundEditBookPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundEditBookPacket"
import { $ServerboundUseItemOnPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundUseItemOnPacket"
import { $ServerboundPlayerCommandPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerCommandPacket"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ServerboundMoveVehiclePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundMoveVehiclePacket"
import { $ServerboundChatAckPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundChatAckPacket"
import { $ServerboundSetCreativeModeSlotPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetCreativeModeSlotPacket"
import { $ServerboundSeenAdvancementsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSeenAdvancementsPacket"
import { $ServerboundRecipeBookSeenRecipePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundRecipeBookSeenRecipePacket"
import { $ServerboundBlockEntityTagQuery$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundBlockEntityTagQuery"
import { $ServerboundEntityTagQuery$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundEntityTagQuery"
import { $ServerboundPaddleBoatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPaddleBoatPacket"
import { $ServerboundClientInformationPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundClientInformationPacket"
import { $ServerboundLockDifficultyPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundLockDifficultyPacket"
import { $ServerboundChatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundChatPacket"
import { $ServerboundSetJigsawBlockPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetJigsawBlockPacket"
import { $ServerboundPlayerInputPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerInputPacket"
import { $ServerboundSetStructureBlockPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetStructureBlockPacket"
import { $ServerboundTeleportToEntityPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundTeleportToEntityPacket"
import { $ServerboundUseItemPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundUseItemPacket"
import { $ServerboundRecipeBookChangeSettingsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundRecipeBookChangeSettingsPacket"
import { $ServerboundResourcePackPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundResourcePackPacket"
import { $ServerboundJigsawGeneratePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundJigsawGeneratePacket"
import { $ServerboundSetBeaconPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetBeaconPacket"
import { $ServerboundSetCarriedItemPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetCarriedItemPacket"
import { $ServerboundContainerButtonClickPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundContainerButtonClickPacket"
import { $ServerboundInteractPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundInteractPacket"
import { $ServerboundCommandSuggestionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundCommandSuggestionPacket"
import { $ServerboundPlaceRecipePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlaceRecipePacket"
import { $ServerboundPickItemPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPickItemPacket"

export interface $ServerGamePacketListener extends $ServerPacketListener {
"handleAcceptTeleportPacket"(serverboundAcceptTeleportationPacket0: $ServerboundAcceptTeleportationPacket$$Type): void
"handleAnimate"(serverboundSwingPacket0: $ServerboundSwingPacket$$Type): void
"handleBlockEntityTagQuery"(serverboundBlockEntityTagQuery0: $ServerboundBlockEntityTagQuery$$Type): void
"handleChangeDifficulty"(serverboundChangeDifficultyPacket0: $ServerboundChangeDifficultyPacket$$Type): void
"handleChat"(serverboundChatPacket0: $ServerboundChatPacket$$Type): void
"handleChatAck"(serverboundChatAckPacket0: $ServerboundChatAckPacket$$Type): void
"handleChatCommand"(serverboundChatCommandPacket0: $ServerboundChatCommandPacket$$Type): void
"handleChatSessionUpdate"(serverboundChatSessionUpdatePacket0: $ServerboundChatSessionUpdatePacket$$Type): void
"handleClientCommand"(serverboundClientCommandPacket0: $ServerboundClientCommandPacket$$Type): void
"handleClientInformation"(serverboundClientInformationPacket0: $ServerboundClientInformationPacket$$Type): void
"handleContainerButtonClick"(serverboundContainerButtonClickPacket0: $ServerboundContainerButtonClickPacket$$Type): void
"handleContainerClick"(serverboundContainerClickPacket0: $ServerboundContainerClickPacket$$Type): void
"handleContainerClose"(serverboundContainerClosePacket0: $ServerboundContainerClosePacket$$Type): void
"handleCustomCommandSuggestions"(serverboundCommandSuggestionPacket0: $ServerboundCommandSuggestionPacket$$Type): void
"handleCustomPayload"(serverboundCustomPayloadPacket0: $ServerboundCustomPayloadPacket$$Type): void
"handleEditBook"(serverboundEditBookPacket0: $ServerboundEditBookPacket$$Type): void
"handleEntityTagQuery"(serverboundEntityTagQuery0: $ServerboundEntityTagQuery$$Type): void
"handleInteract"(serverboundInteractPacket0: $ServerboundInteractPacket$$Type): void
"handleJigsawGenerate"(serverboundJigsawGeneratePacket0: $ServerboundJigsawGeneratePacket$$Type): void
"handleKeepAlive"(serverboundKeepAlivePacket0: $ServerboundKeepAlivePacket$$Type): void
"handleLockDifficulty"(serverboundLockDifficultyPacket0: $ServerboundLockDifficultyPacket$$Type): void
"handleMovePlayer"(serverboundMovePlayerPacket0: $ServerboundMovePlayerPacket$$Type): void
"handleMoveVehicle"(serverboundMoveVehiclePacket0: $ServerboundMoveVehiclePacket$$Type): void
"handlePaddleBoat"(serverboundPaddleBoatPacket0: $ServerboundPaddleBoatPacket$$Type): void
"handlePickItem"(serverboundPickItemPacket0: $ServerboundPickItemPacket$$Type): void
"handlePlaceRecipe"(serverboundPlaceRecipePacket0: $ServerboundPlaceRecipePacket$$Type): void
"handlePlayerAbilities"(serverboundPlayerAbilitiesPacket0: $ServerboundPlayerAbilitiesPacket$$Type): void
"handlePlayerAction"(serverboundPlayerActionPacket0: $ServerboundPlayerActionPacket$$Type): void
"handlePlayerCommand"(serverboundPlayerCommandPacket0: $ServerboundPlayerCommandPacket$$Type): void
"handlePlayerInput"(serverboundPlayerInputPacket0: $ServerboundPlayerInputPacket$$Type): void
"handlePong"(serverboundPongPacket0: $ServerboundPongPacket$$Type): void
"handleRecipeBookChangeSettingsPacket"(serverboundRecipeBookChangeSettingsPacket0: $ServerboundRecipeBookChangeSettingsPacket$$Type): void
"handleRecipeBookSeenRecipePacket"(serverboundRecipeBookSeenRecipePacket0: $ServerboundRecipeBookSeenRecipePacket$$Type): void
"handleRenameItem"(serverboundRenameItemPacket0: $ServerboundRenameItemPacket$$Type): void
"handleResourcePackResponse"(serverboundResourcePackPacket0: $ServerboundResourcePackPacket$$Type): void
"handleSeenAdvancements"(serverboundSeenAdvancementsPacket0: $ServerboundSeenAdvancementsPacket$$Type): void
"handleSelectTrade"(serverboundSelectTradePacket0: $ServerboundSelectTradePacket$$Type): void
"handleSetBeaconPacket"(serverboundSetBeaconPacket0: $ServerboundSetBeaconPacket$$Type): void
"handleSetCarriedItem"(serverboundSetCarriedItemPacket0: $ServerboundSetCarriedItemPacket$$Type): void
"handleSetCommandBlock"(serverboundSetCommandBlockPacket0: $ServerboundSetCommandBlockPacket$$Type): void
"handleSetCommandMinecart"(serverboundSetCommandMinecartPacket0: $ServerboundSetCommandMinecartPacket$$Type): void
"handleSetCreativeModeSlot"(serverboundSetCreativeModeSlotPacket0: $ServerboundSetCreativeModeSlotPacket$$Type): void
"handleSetJigsawBlock"(serverboundSetJigsawBlockPacket0: $ServerboundSetJigsawBlockPacket$$Type): void
"handleSetStructureBlock"(serverboundSetStructureBlockPacket0: $ServerboundSetStructureBlockPacket$$Type): void
"handleSignUpdate"(serverboundSignUpdatePacket0: $ServerboundSignUpdatePacket$$Type): void
"handleTeleportToEntityPacket"(serverboundTeleportToEntityPacket0: $ServerboundTeleportToEntityPacket$$Type): void
"handleUseItem"(serverboundUseItemPacket0: $ServerboundUseItemPacket$$Type): void
"handleUseItemOn"(serverboundUseItemOnPacket0: $ServerboundUseItemOnPacket$$Type): void
"isAcceptingMessages"(): boolean
"onDisconnect"(component0: $Component$$Type): void
"shouldPropagateHandlingExceptions"(): boolean
get "acceptingMessages"(): boolean
}

export namespace $ServerGamePacketListener {
const probejs$$marker: never
}
export abstract class $ServerGamePacketListener$$Static implements $ServerGamePacketListener {
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundPlaceRecipePacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ServerboundPlaceRecipePacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer, recipe1: $Recipe$$Type<any>, boolean2: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getContainerId"(): integer
public "getRecipe"(): $ResourceLocation
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isShiftDown"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "recipe"(): $ResourceLocation
get "shiftDown"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundCustomChatCompletionsPacket$Action" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ClientboundCustomChatCompletionsPacket$Action extends $Enum<$ClientboundCustomChatCompletionsPacket$Action> {
static readonly "ADD": $ClientboundCustomChatCompletionsPacket$Action
static readonly "REMOVE": $ClientboundCustomChatCompletionsPacket$Action
static readonly "SET": $ClientboundCustomChatCompletionsPacket$Action

public static "valueOf"(string0: string): $ClientboundCustomChatCompletionsPacket$Action
public static "values"(): $ClientboundCustomChatCompletionsPacket$Action[]
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundExplodePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ClientboundExplodePacket implements $Packet<$ClientGamePacketListener> {
constructor(double0: double, double1: double, double2: double, float3: float, list4: $List$$Type<$BlockPos$$Type>, vec35: $Vec3$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getKnockbackX"(): float
public "getKnockbackY"(): float
public "getKnockbackZ"(): float
public "getPower"(): float
public "getToBlow"(): $List<$BlockPos>
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "knockbackX"(): float
get "knockbackY"(): float
get "knockbackZ"(): float
get "power"(): float
get "toBlow"(): $List<$BlockPos>
get "x"(): double
get "y"(): double
get "z"(): double
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlayerInfoUpdatePacket$Entry" {
import { $RemoteChatSession$Data, $RemoteChatSession$Data$$Type } from "packages/net/minecraft/network/chat/$RemoteChatSession$Data"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $GameType, $GameType$$Type } from "packages/net/minecraft/world/level/$GameType"

export class $ClientboundPlayerInfoUpdatePacket$Entry extends $Record {
constructor(uUID0: $UUID$$Type, gameProfile1: $GameProfile$$Type, boolean2: boolean, int3: integer, gameType4: $GameType$$Type, component5: $Component$$Type, data6: $RemoteChatSession$Data$$Type)

public "chatSession"(): $RemoteChatSession$Data
public "displayName"(): $Component
public "gameMode"(): $GameType
public "latency"(): integer
public "listed"(): boolean
public "profile"(): $GameProfile
public "profileId"(): $UUID
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundLevelChunkPacketData" {
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $Consumer } from "packages/java/util/function/$Consumer"
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput } from "packages/net/minecraft/network/protocol/game/$ClientboundLevelChunkPacketData$BlockEntityTagOutput"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ClientboundLevelChunkPacketData {
constructor(levelChunk0: $LevelChunk$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type, int1: integer, int2: integer)

public static "extractChunkData"(friendlyByteBuf0: $FriendlyByteBuf$$Type, levelChunk1: $LevelChunk$$Type): void
public "getBlockEntitiesTagsConsumer"(int0: integer, int1: integer): $Consumer<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>
public "getHeightmaps"(): $CompoundTag
public "getReadBuffer"(): $FriendlyByteBuf
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "heightmaps"(): $CompoundTag
get "readBuffer"(): $FriendlyByteBuf
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSetJigsawBlockPacket" {
import { $JigsawBlockEntity$JointType, $JigsawBlockEntity$JointType$$Type } from "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity$JointType"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ServerboundSetJigsawBlockPacket implements $Packet<$ServerGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, string4: string, jointType5: $JigsawBlockEntity$JointType$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getFinalState"(): string
public "getJoint"(): $JigsawBlockEntity$JointType
public "getName"(): $ResourceLocation
public "getPool"(): $ResourceLocation
public "getPos"(): $BlockPos
public "getTarget"(): $ResourceLocation
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "finalState"(): string
get "joint"(): $JigsawBlockEntity$JointType
get "name"(): $ResourceLocation
get "pool"(): $ResourceLocation
get "pos"(): $BlockPos
get "target"(): $ResourceLocation
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundBlockDestructionPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ClientboundBlockDestructionPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, blockPos1: $BlockPos$$Type, int2: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "getPos"(): $BlockPos
public "getProgress"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "pos"(): $BlockPos
get "progress"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundContainerClosePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundContainerClosePacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getContainerId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundClientInformationPacket" {
import { $HumanoidArm, $HumanoidArm$$Type } from "packages/net/minecraft/world/entity/$HumanoidArm"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ChatVisiblity, $ChatVisiblity$$Type } from "packages/net/minecraft/world/entity/player/$ChatVisiblity"

export class $ServerboundClientInformationPacket extends $Record implements $Packet<$ServerGamePacketListener> {
static readonly "MAX_LANGUAGE_LENGTH": integer

constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(string0: string, int1: integer, chatVisiblity2: $ChatVisiblity$$Type, boolean3: boolean, int4: integer, humanoidArm5: $HumanoidArm$$Type, boolean6: boolean, boolean7: boolean)

public "allowsListing"(): boolean
public "chatColors"(): boolean
public "chatVisibility"(): $ChatVisiblity
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "language"(): string
public "mainHand"(): $HumanoidArm
public "modelCustomisation"(): integer
public "textFilteringEnabled"(): boolean
public "viewDistance"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundRecipeBookChangeSettingsPacket" {
import { $RecipeBookType, $RecipeBookType$$Type } from "packages/net/minecraft/world/inventory/$RecipeBookType"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundRecipeBookChangeSettingsPacket implements $Packet<$ServerGamePacketListener> {
constructor(recipeBookType0: $RecipeBookType$$Type, boolean1: boolean, boolean2: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getBookType"(): $RecipeBookType
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isFiltering"(): boolean
public "isOpen"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "bookType"(): $RecipeBookType
get "filtering"(): boolean
get "open"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundLevelChunkPacketData$BlockEntityTagOutput" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
"accept"(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<any>, compoundTag2: $CompoundTag$$Type): void
}

export namespace $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
const probejs$$marker: never
}
export abstract class $ClientboundLevelChunkPacketData$BlockEntityTagOutput$$Static implements $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlayerCombatEndPacket" {
import { $CombatTracker$$Type } from "packages/net/minecraft/world/damagesource/$CombatTracker"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundPlayerCombatEndPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)
constructor(combatTracker0: $CombatTracker$$Type)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetPlayerTeamPacket$Action" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ClientboundSetPlayerTeamPacket$Action extends $Enum<$ClientboundSetPlayerTeamPacket$Action> {
static readonly "ADD": $ClientboundSetPlayerTeamPacket$Action
static readonly "REMOVE": $ClientboundSetPlayerTeamPacket$Action

public static "valueOf"(string0: string): $ClientboundSetPlayerTeamPacket$Action
public static "values"(): $ClientboundSetPlayerTeamPacket$Action[]
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundUpdateAttributesPacket" {
import { $AttributeInstance$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeInstance"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $ClientboundUpdateAttributesPacket$AttributeSnapshot } from "packages/net/minecraft/network/protocol/game/$ClientboundUpdateAttributesPacket$AttributeSnapshot"

export class $ClientboundUpdateAttributesPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, collection1: $Collection$$Type<$AttributeInstance$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEntityId"(): integer
public "getValues"(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "entityId"(): integer
get "values"(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlayerCombatEnterPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundPlayerCombatEnterPacket implements $Packet<$ClientGamePacketListener> {
constructor()
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundRenameItemPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundRenameItemPacket implements $Packet<$ServerGamePacketListener> {
constructor(string0: string)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getName"(): string
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "name"(): string
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderWarningDelayPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $WorldBorder$$Type } from "packages/net/minecraft/world/level/border/$WorldBorder"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetBorderWarningDelayPacket implements $Packet<$ClientGamePacketListener> {
constructor(worldBorder0: $WorldBorder$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getWarningDelay"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "warningDelay"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundCustomPayloadPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $NetworkDirection } from "packages/net/minecraftforge/network/$NetworkDirection"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ICustomPacket } from "packages/net/minecraftforge/network/$ICustomPacket"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IWrappedPacket } from "packages/com/connectivity/networkstats/$IWrappedPacket"

export class $ClientboundCustomPayloadPacket implements $Packet<$ClientGamePacketListener>, $ICustomPacket<$ClientboundCustomPayloadPacket>, $IWrappedPacket {
static readonly "BRAND": $ResourceLocation
static readonly "DEBUG_BEE": $ResourceLocation
static readonly "DEBUG_BRAIN": $ResourceLocation
static readonly "DEBUG_GAME_EVENT": $ResourceLocation
static readonly "DEBUG_GAME_EVENT_LISTENER": $ResourceLocation
static readonly "DEBUG_GAME_TEST_ADD_MARKER": $ResourceLocation
static readonly "DEBUG_GAME_TEST_CLEAR": $ResourceLocation
static readonly "DEBUG_GOAL_SELECTOR": $ResourceLocation
static readonly "DEBUG_HIVE": $ResourceLocation
static readonly "DEBUG_NEIGHBORSUPDATE_PACKET": $ResourceLocation
static readonly "DEBUG_PATHFINDING_PACKET": $ResourceLocation
static readonly "DEBUG_POI_ADDED_PACKET": $ResourceLocation
static readonly "DEBUG_POI_REMOVED_PACKET": $ResourceLocation
static readonly "DEBUG_POI_TICKET_COUNT_PACKET": $ResourceLocation
static readonly "DEBUG_RAIDS": $ResourceLocation
static readonly "DEBUG_STRUCTURES_PACKET": $ResourceLocation
static readonly "DEBUG_VILLAGE_SECTIONS": $ResourceLocation
static readonly "DEBUG_WORLDGENATTEMPT_PACKET": $ResourceLocation

constructor(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getData"(): $FriendlyByteBuf
public "getDirection"(): $NetworkDirection
public "getIdentifier"(): $ResourceLocation
public "getIndex"(): integer
public "getInternalData"(): $FriendlyByteBuf
public "getName"(): $ResourceLocation
public "getOriginalMsg"(): any
public "getThis"(): $ClientboundCustomPayloadPacket
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "setOrgMsg"(object0: any): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "data"(): $FriendlyByteBuf
get "direction"(): $NetworkDirection
get "identifier"(): $ResourceLocation
get "index"(): integer
get "internalData"(): $FriendlyByteBuf
get "name"(): $ResourceLocation
get "originalMsg"(): any
get "this"(): $ClientboundCustomPayloadPacket
get "skippable"(): boolean
set "orgMsg"(value: any)
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundHorseScreenOpenPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundHorseScreenOpenPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, int1: integer, int2: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getContainerId"(): integer
public "getEntityId"(): integer
public "getSize"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "entityId"(): integer
get "size"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderLerpSizePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $WorldBorder$$Type } from "packages/net/minecraft/world/level/border/$WorldBorder"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetBorderLerpSizePacket implements $Packet<$ClientGamePacketListener> {
constructor(worldBorder0: $WorldBorder$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getLerpTime"(): long
public "getNewSize"(): double
public "getOldSize"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "lerpTime"(): long
get "newSize"(): double
get "oldSize"(): double
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetPlayerTeamPacket$Parameters" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ChatFormatting } from "packages/net/minecraft/$ChatFormatting"
import { $PlayerTeam$$Type } from "packages/net/minecraft/world/scores/$PlayerTeam"

export class $ClientboundSetPlayerTeamPacket$Parameters {
constructor(playerTeam0: $PlayerTeam$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getCollisionRule"(): string
public "getColor"(): $ChatFormatting
public "getDisplayName"(): $Component
public "getNametagVisibility"(): string
public "getOptions"(): integer
public "getPlayerPrefix"(): $Component
public "getPlayerSuffix"(): $Component
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "collisionRule"(): string
get "color"(): $ChatFormatting
get "displayName"(): $Component
get "nametagVisibility"(): string
get "options"(): integer
get "playerPrefix"(): $Component
get "playerSuffix"(): $Component
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundChatPacket" {
import { $Record } from "packages/java/lang/$Record"
import { $Instant, $Instant$$Type } from "packages/java/time/$Instant"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $LastSeenMessages$Update, $LastSeenMessages$Update$$Type } from "packages/net/minecraft/network/chat/$LastSeenMessages$Update"
import { $MessageSignature, $MessageSignature$$Type } from "packages/net/minecraft/network/chat/$MessageSignature"

export class $ServerboundChatPacket extends $Record implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(string0: string, instant1: $Instant$$Type, long2: long, messageSignature3: $MessageSignature$$Type, update4: $LastSeenMessages$Update$$Type)

public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "lastSeenMessages"(): $LastSeenMessages$Update
public "message"(): string
public "salt"(): long
public "signature"(): $MessageSignature
public "timeStamp"(): $Instant
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundMerchantOffersPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $MerchantOffers, $MerchantOffers$$Type } from "packages/net/minecraft/world/item/trading/$MerchantOffers"

export class $ClientboundMerchantOffersPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, merchantOffers1: $MerchantOffers$$Type, int2: integer, int3: integer, boolean4: boolean, boolean5: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "canRestock"(): boolean
public "getContainerId"(): integer
public "getOffers"(): $MerchantOffers
public "getVillagerLevel"(): integer
public "getVillagerXp"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "showProgress"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "offers"(): $MerchantOffers
get "villagerLevel"(): integer
get "villagerXp"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/$BundlerInfo$Provider" {
import { $BundlerInfo } from "packages/net/minecraft/network/protocol/$BundlerInfo"
import { $PacketFlow$$Type } from "packages/net/minecraft/network/protocol/$PacketFlow"

export interface $BundlerInfo$Provider {
"getBundlerInfo"(packetFlow0: $PacketFlow$$Type): $BundlerInfo
}

export namespace $BundlerInfo$Provider {
const probejs$$marker: never
}
export abstract class $BundlerInfo$Provider$$Static implements $BundlerInfo$Provider {
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundChangeDifficultyPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Difficulty, $Difficulty$$Type } from "packages/net/minecraft/world/$Difficulty"

export class $ServerboundChangeDifficultyPacket implements $Packet<$ServerGamePacketListener> {
constructor(difficulty0: $Difficulty$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getDifficulty"(): $Difficulty
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "difficulty"(): $Difficulty
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSeenAdvancementsPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerboundSeenAdvancementsPacket$Action, $ServerboundSeenAdvancementsPacket$Action$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSeenAdvancementsPacket$Action"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Advancement$$Type } from "packages/net/minecraft/advancements/$Advancement"

export class $ServerboundSeenAdvancementsPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(action0: $ServerboundSeenAdvancementsPacket$Action$$Type, resourceLocation1: $ResourceLocation$$Type)

public static "closedScreen"(): $ServerboundSeenAdvancementsPacket
public "getAction"(): $ServerboundSeenAdvancementsPacket$Action
public "getTab"(): $ResourceLocation
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public static "openedTab"(advancement0: $Advancement$$Type): $ServerboundSeenAdvancementsPacket
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): $ServerboundSeenAdvancementsPacket$Action
get "tab"(): $ResourceLocation
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundKeepAlivePacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundKeepAlivePacket implements $Packet<$ServerGamePacketListener> {
constructor(long0: long)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): long
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): long
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSetCreativeModeSlotPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ServerboundSetCreativeModeSlotPacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer, itemStack1: $ItemStack$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getItem"(): $ItemStack
public "getSlotNum"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "item"(): $ItemStack
get "slotNum"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/status/$ServerStatus$Players" {
import { $Record } from "packages/java/lang/$Record"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ServerStatus$Players extends $Record {
static readonly "CODEC": $Codec<$ServerStatus$Players>

constructor(max: integer, online: integer, sample: $List$$Type<$GameProfile$$Type>)

public "max"(): integer
public "online"(): integer
public "sample"(): $List<$GameProfile>
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetDefaultSpawnPositionPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ClientboundSetDefaultSpawnPositionPacket implements $Packet<$ClientGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, float1: float)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getAngle"(): float
public "getPos"(): $BlockPos
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "angle"(): float
get "pos"(): $BlockPos
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSetCarriedItemPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundSetCarriedItemPacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getSlot"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "slot"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundAnimatePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundAnimatePacket implements $Packet<$ClientGamePacketListener> {
static readonly "CRITICAL_HIT": integer
static readonly "MAGIC_CRITICAL_HIT": integer
static readonly "SWING_MAIN_HAND": integer
static readonly "SWING_OFF_HAND": integer
static readonly "WAKE_UP": integer

constructor(entity0: $Entity$$Type, int1: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getAction"(): integer
public "getId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): integer
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSetCommandMinecartPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BaseCommandBlock } from "packages/net/minecraft/world/level/$BaseCommandBlock"

export class $ServerboundSetCommandMinecartPacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer, string1: string, boolean2: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getCommand"(): string
public "getCommandBlock"(level0: $Level$$Type): $BaseCommandBlock
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "isTrackOutput"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "command"(): string
get "skippable"(): boolean
get "trackOutput"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlayerLookAtPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EntityAnchorArgument$Anchor, $EntityAnchorArgument$Anchor$$Type } from "packages/net/minecraft/commands/arguments/$EntityAnchorArgument$Anchor"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundPlayerLookAtPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(anchor0: $EntityAnchorArgument$Anchor$$Type, entity1: $Entity$$Type, anchor2: $EntityAnchorArgument$Anchor$$Type)
constructor(anchor0: $EntityAnchorArgument$Anchor$$Type, double1: double, double2: double, double3: double)

public "getFromAnchor"(): $EntityAnchorArgument$Anchor
public "getPosition"(level0: $Level$$Type): $Vec3
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "fromAnchor"(): $EntityAnchorArgument$Anchor
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetEquipmentPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Pair, $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ClientboundSetEquipmentPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, list1: $List$$Type<$Pair$$Type<$EquipmentSlot$$Type, $ItemStack$$Type>>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEntity"(): integer
public "getSlots"(): $List<$Pair<$EquipmentSlot, $ItemStack>>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "entity"(): integer
get "slots"(): $List<$Pair<$EquipmentSlot, $ItemStack>>
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetEntityDataPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $SynchedEntityData$DataValue, $SynchedEntityData$DataValue$$Type } from "packages/net/minecraft/network/syncher/$SynchedEntityData$DataValue"

export class $ClientboundSetEntityDataPacket extends $Record implements $Packet<$ClientGamePacketListener> {
static readonly "EOF_MARKER": integer

constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, list1: $List$$Type<$SynchedEntityData$DataValue$$Type<any>>)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "id"(): integer
public "isSkippable"(): boolean
public "packedItems"(): $List<$SynchedEntityData$DataValue<any>>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSoundEntityPacket" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $SoundSource, $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundSoundEntityPacket implements $Packet<$ClientGamePacketListener> {
constructor(holder0: $Holder$$Type<$SoundEvent$$Type>, soundSource1: $SoundSource$$Type, entity2: $Entity$$Type, float3: float, float4: float, long5: long)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "getPitch"(): float
public "getSeed"(): long
public "getSound"(): $Holder<$SoundEvent>
public "getSource"(): $SoundSource
public "getVolume"(): float
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "pitch"(): float
get "seed"(): long
get "sound"(): $Holder<$SoundEvent>
get "source"(): $SoundSource
get "volume"(): float
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundChunksBiomesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ClientboundChunksBiomesPacket$ChunkBiomeData, $ClientboundChunksBiomesPacket$ChunkBiomeData$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundChunksBiomesPacket$ChunkBiomeData"

export class $ClientboundChunksBiomesPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(list0: $List$$Type<$ClientboundChunksBiomesPacket$ChunkBiomeData$$Type>)

public "chunkBiomeData"(): $List<$ClientboundChunksBiomesPacket$ChunkBiomeData>
public static "forChunks"(list0: $List$$Type<$LevelChunk$$Type>): $ClientboundChunksBiomesPacket
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundRemoveEntitiesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $IntList, $IntList$$Type } from "packages/it/unimi/dsi/fastutil/ints/$IntList"

export class $ClientboundRemoveEntitiesPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(...int0s: integer[])
constructor(intList0: $IntList$$Type)

public "getEntityIds"(): $IntList
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "entityIds"(): $IntList
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/$BundlePacket" {
import { $PacketListener, $PacketListener$$Type } from "packages/net/minecraft/network/$PacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $BundlePacket<T extends $PacketListener> implements $Packet<T> {
public "handle"(t0: T): void
public "isSkippable"(): boolean
public "subPackets"(): $Iterable<$Packet<T>>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundPickItemPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundPickItemPacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getSlot"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "slot"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundUseItemPacket" {
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundUseItemPacket implements $Packet<$ServerGamePacketListener> {
constructor(interactionHand0: $InteractionHand$$Type, int1: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getHand"(): $InteractionHand
public "getSequence"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "hand"(): $InteractionHand
get "sequence"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/$BundleDelimiterPacket" {
import { $PacketListener, $PacketListener$$Type } from "packages/net/minecraft/network/$PacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $BundleDelimiterPacket<T extends $PacketListener> implements $Packet<T> {
constructor()

public "handle"(t0: T): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundLevelChunkWithLightPacket" {
import { $ClientboundLightUpdatePacketData } from "packages/net/minecraft/network/protocol/game/$ClientboundLightUpdatePacketData"
import { $LevelLightEngine$$Type } from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BitSet$$Type } from "packages/java/util/$BitSet"
import { $ClientboundLevelChunkPacketData } from "packages/net/minecraft/network/protocol/game/$ClientboundLevelChunkPacketData"

export class $ClientboundLevelChunkWithLightPacket implements $Packet<$ClientGamePacketListener> {
constructor(levelChunk0: $LevelChunk$$Type, levelLightEngine1: $LevelLightEngine$$Type, bitSet2: $BitSet$$Type, bitSet3: $BitSet$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getChunkData"(): $ClientboundLevelChunkPacketData
public "getLightData"(): $ClientboundLightUpdatePacketData
public "getX"(): integer
public "getZ"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "chunkData"(): $ClientboundLevelChunkPacketData
get "lightData"(): $ClientboundLightUpdatePacketData
get "x"(): integer
get "z"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderCenterPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $WorldBorder$$Type } from "packages/net/minecraft/world/level/border/$WorldBorder"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetBorderCenterPacket implements $Packet<$ClientGamePacketListener> {
constructor(worldBorder0: $WorldBorder$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getNewCenterX"(): double
public "getNewCenterZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "newCenterX"(): double
get "newCenterZ"(): double
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetScorePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ServerScoreboard$Method, $ServerScoreboard$Method$$Type } from "packages/net/minecraft/server/$ServerScoreboard$Method"

export class $ClientboundSetScorePacket implements $Packet<$ClientGamePacketListener> {
constructor(method0: $ServerScoreboard$Method$$Type, string1: string, string2: string, int3: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getMethod"(): $ServerScoreboard$Method
public "getObjectiveName"(): string
public "getOwner"(): string
public "getScore"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "method"(): $ServerScoreboard$Method
get "objectiveName"(): string
get "owner"(): string
get "score"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/status/$ServerStatus" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $ServerStatusPing, $ServerStatusPing$$Type } from "packages/net/minecraftforge/network/$ServerStatusPing"
import { $ServerStatus$Version, $ServerStatus$Version$$Type } from "packages/net/minecraft/network/protocol/status/$ServerStatus$Version"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $ServerStatus$Favicon, $ServerStatus$Favicon$$Type } from "packages/net/minecraft/network/protocol/status/$ServerStatus$Favicon"
import { $ServerStatus$Players, $ServerStatus$Players$$Type } from "packages/net/minecraft/network/protocol/status/$ServerStatus$Players"

export class $ServerStatus extends $Record {
static readonly "CODEC": $Codec<$ServerStatus>

constructor(description: $Component$$Type, players: $Optional$$Type<$ServerStatus$Players$$Type>, version: $Optional$$Type<$ServerStatus$Version$$Type>, favicon: $Optional$$Type<$ServerStatus$Favicon$$Type>, enforcesSecureChat: boolean, forgeData: $Optional$$Type<$ServerStatusPing$$Type>)

public "description"(): $Component
public "enforcesSecureChat"(): boolean
public "favicon"(): $Optional<$ServerStatus$Favicon>
public "forgeData"(): $Optional<$ServerStatusPing>
public "players"(): $Optional<$ServerStatus$Players>
public "version"(): $Optional<$ServerStatus$Version>
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundContainerButtonClickPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundContainerButtonClickPacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer, int1: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getButtonId"(): integer
public "getContainerId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "buttonId"(): integer
get "containerId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSelectAdvancementsTabPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClientboundSelectAdvancementsTabPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type)

public "getTab"(): $ResourceLocation
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "tab"(): $ResourceLocation
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSelectTradePacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundSelectTradePacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getItem"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "item"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/$PacketFlow" {
import { $Enum } from "packages/java/lang/$Enum"

export class $PacketFlow extends $Enum<$PacketFlow> {
static readonly "CLIENTBOUND": $PacketFlow
static readonly "SERVERBOUND": $PacketFlow

public "getOpposite"(): $PacketFlow
public static "valueOf"(string0: string): $PacketFlow
public static "values"(): $PacketFlow[]
get "opposite"(): $PacketFlow
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundTagQueryPacket" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundTagQueryPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, compoundTag1: $CompoundTag$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getTag"(): $CompoundTag
public "getTransactionId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "tag"(): $CompoundTag
get "transactionId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundLevelEventPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ClientboundLevelEventPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, blockPos1: $BlockPos$$Type, int2: integer, boolean3: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getData"(): integer
public "getPos"(): $BlockPos
public "getType"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isGlobalEvent"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "type"(): integer
set "type"(value: integer)
get "data"(): integer
get "pos"(): $BlockPos
get "globalEvent"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundLevelParticlesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ClientboundLevelParticlesPacket implements $Packet<$ClientGamePacketListener> {
constructor<T extends $ParticleOptions>(t0: T, boolean1: boolean, double2: double, double3: double, double4: double, float5: float, float6: float, float7: float, float8: float, int9: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getCount"(): integer
public "getMaxSpeed"(): float
public "getParticle"(): $ParticleOptions
public "getX"(): double
public "getXDist"(): float
public "getY"(): double
public "getYDist"(): float
public "getZ"(): double
public "getZDist"(): float
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isOverrideLimiter"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "count"(): integer
get "maxSpeed"(): float
get "particle"(): $ParticleOptions
get "x"(): double
get "xDist"(): float
get "y"(): double
get "yDist"(): float
get "z"(): double
get "zDist"(): float
get "overrideLimiter"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundMoveEntityPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundMoveEntityPacket implements $Packet<$ClientGamePacketListener> {
public "getEntity"(level0: $Level$$Type): $Entity
public "getXa"(): short
public "getYa"(): short
public "getZa"(): short
public "getxRot"(): byte
public "getyRot"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "hasPosition"(): boolean
public "hasRotation"(): boolean
public "isOnGround"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "xa"(): short
get "ya"(): short
get "za"(): short
get "xRot"(): byte
get "yRot"(): byte
get "onGround"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundOpenScreenPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $MenuType, $MenuType$$Type } from "packages/net/minecraft/world/inventory/$MenuType"

export class $ClientboundOpenScreenPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, menuType1: $MenuType$$Type<any>, component2: $Component$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getContainerId"(): integer
public "getTitle"(): $Component
public "getType"(): $MenuType<any>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "title"(): $Component
get "type"(): $MenuType<any>
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetChunkCacheRadiusPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetChunkCacheRadiusPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getRadius"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "radius"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundCooldownPacket" {
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundCooldownPacket implements $Packet<$ClientGamePacketListener> {
constructor(item0: $Item$$Type, int1: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getDuration"(): integer
public "getItem"(): $Item
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "duration"(): integer
get "item"(): $Item
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSignUpdatePacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ServerboundSignUpdatePacket implements $Packet<$ServerGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, boolean1: boolean, string2: string, string3: string, string4: string, string5: string)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getLines"(): string[]
public "getPos"(): $BlockPos
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isFrontText"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "lines"(): string[]
get "pos"(): $BlockPos
get "frontText"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetSubtitleTextPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetSubtitleTextPacket implements $Packet<$ClientGamePacketListener> {
constructor(component0: $Component$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getText"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "text"(): $Component
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetEntityMotionPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundSetEntityMotionPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, vec31: $Vec3$$Type)
constructor(entity0: $Entity$$Type)

public "getId"(): integer
public "getXa"(): integer
public "getYa"(): integer
public "getZa"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "handler$cam000$init"(int0: integer, vec31: $Vec3$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "xa"(): integer
get "ya"(): integer
get "za"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundGameEventPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ClientboundGameEventPacket$Type, $ClientboundGameEventPacket$Type$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundGameEventPacket$Type"

export class $ClientboundGameEventPacket implements $Packet<$ClientGamePacketListener> {
static readonly "ARROW_HIT_PLAYER": $ClientboundGameEventPacket$Type
static readonly "CHANGE_GAME_MODE": $ClientboundGameEventPacket$Type
static readonly "DEMO_EVENT": $ClientboundGameEventPacket$Type
static readonly "DEMO_PARAM_HINT_1": integer
static readonly "DEMO_PARAM_HINT_2": integer
static readonly "DEMO_PARAM_HINT_3": integer
static readonly "DEMO_PARAM_HINT_4": integer
static readonly "DEMO_PARAM_INTRO": integer
static readonly "GUARDIAN_ELDER_EFFECT": $ClientboundGameEventPacket$Type
static readonly "IMMEDIATE_RESPAWN": $ClientboundGameEventPacket$Type
static readonly "NO_RESPAWN_BLOCK_AVAILABLE": $ClientboundGameEventPacket$Type
static readonly "PUFFER_FISH_STING": $ClientboundGameEventPacket$Type
static readonly "RAIN_LEVEL_CHANGE": $ClientboundGameEventPacket$Type
static readonly "START_RAINING": $ClientboundGameEventPacket$Type
static readonly "STOP_RAINING": $ClientboundGameEventPacket$Type
static readonly "THUNDER_LEVEL_CHANGE": $ClientboundGameEventPacket$Type
static readonly "WIN_GAME": $ClientboundGameEventPacket$Type

constructor(type0: $ClientboundGameEventPacket$Type$$Type, float1: float)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEvent"(): $ClientboundGameEventPacket$Type
public "getParam"(): float
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "event"(): $ClientboundGameEventPacket$Type
get "param"(): float
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundChangeDifficultyPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Difficulty, $Difficulty$$Type } from "packages/net/minecraft/world/$Difficulty"

export class $ClientboundChangeDifficultyPacket implements $Packet<$ClientGamePacketListener> {
constructor(difficulty0: $Difficulty$$Type, boolean1: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getDifficulty"(): $Difficulty
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isLocked"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "difficulty"(): $Difficulty
get "locked"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket" {
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockEntityType } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export class $ClientboundBlockEntityDataPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public static "create"(blockEntity0: $BlockEntity$$Type): $ClientboundBlockEntityDataPacket
public static "create"(blockEntity0: $BlockEntity$$Type, function1: $Function$$Type<$BlockEntity$$Type, $CompoundTag>): $ClientboundBlockEntityDataPacket
public "getPos"(): $BlockPos
public "getTag"(): $CompoundTag
public "getType"(): $BlockEntityType<any>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "pos"(): $BlockPos
get "tag"(): $CompoundTag
get "type"(): $BlockEntityType<any>
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSetBeaconPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $MobEffect, $MobEffect$$Type } from "packages/net/minecraft/world/effect/$MobEffect"

export class $ServerboundSetBeaconPacket implements $Packet<$ServerGamePacketListener> {
constructor(optional0: $Optional$$Type<$MobEffect$$Type>, optional1: $Optional$$Type<$MobEffect$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getPrimary"(): $Optional<$MobEffect>
public "getSecondary"(): $Optional<$MobEffect>
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "primary"(): $Optional<$MobEffect>
get "secondary"(): $Optional<$MobEffect>
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundResourcePackPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ServerboundResourcePackPacket$Action, $ServerboundResourcePackPacket$Action$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundResourcePackPacket$Action"

export class $ServerboundResourcePackPacket implements $Packet<$ServerGamePacketListener> {
constructor(action0: $ServerboundResourcePackPacket$Action$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getAction"(): $ServerboundResourcePackPacket$Action
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): $ServerboundResourcePackPacket$Action
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlayerCombatKillPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundPlayerCombatKillPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, component1: $Component$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getMessage"(): $Component
public "getPlayerId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "message"(): $Component
get "playerId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlayerAbilitiesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Abilities$$Type } from "packages/net/minecraft/world/entity/player/$Abilities"

export class $ClientboundPlayerAbilitiesPacket implements $Packet<$ClientGamePacketListener> {
constructor(abilities0: $Abilities$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "canFly"(): boolean
public "canInstabuild"(): boolean
public "getFlyingSpeed"(): float
public "getWalkingSpeed"(): float
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isFlying"(): boolean
public "isInvulnerable"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "flyingSpeed"(): float
get "walkingSpeed"(): float
get "flying"(): boolean
get "invulnerable"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundInitializeBorderPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $WorldBorder$$Type } from "packages/net/minecraft/world/level/border/$WorldBorder"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundInitializeBorderPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(worldBorder0: $WorldBorder$$Type)

public "getLerpTime"(): long
public "getNewAbsoluteMaxSize"(): integer
public "getNewCenterX"(): double
public "getNewCenterZ"(): double
public "getNewSize"(): double
public "getOldSize"(): double
public "getWarningBlocks"(): integer
public "getWarningTime"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "lerpTime"(): long
get "newAbsoluteMaxSize"(): integer
get "newCenterX"(): double
get "newCenterZ"(): double
get "newSize"(): double
get "oldSize"(): double
get "warningBlocks"(): integer
get "warningTime"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundCustomPayloadPacket" {
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $NetworkDirection } from "packages/net/minecraftforge/network/$NetworkDirection"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ICustomPacket } from "packages/net/minecraftforge/network/$ICustomPacket"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IWrappedPacket } from "packages/com/connectivity/networkstats/$IWrappedPacket"

export class $ServerboundCustomPayloadPacket implements $Packet<$ServerGamePacketListener>, $ICustomPacket<$ServerboundCustomPayloadPacket>, $IWrappedPacket {
static readonly "BRAND": $ResourceLocation

constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type)

public "getData"(): $FriendlyByteBuf
public "getDirection"(): $NetworkDirection
public "getIdentifier"(): $ResourceLocation
public "getIndex"(): integer
public "getInternalData"(): $FriendlyByteBuf
public "getName"(): $ResourceLocation
public "getOriginalMsg"(): any
public "getThis"(): $ServerboundCustomPayloadPacket
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "setOrgMsg"(object0: any): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "data"(): $FriendlyByteBuf
get "direction"(): $NetworkDirection
get "identifier"(): $ResourceLocation
get "index"(): integer
get "internalData"(): $FriendlyByteBuf
get "name"(): $ResourceLocation
get "originalMsg"(): any
get "this"(): $ServerboundCustomPayloadPacket
get "skippable"(): boolean
set "orgMsg"(value: any)
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetExperiencePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetExperiencePacket implements $Packet<$ClientGamePacketListener> {
constructor(float0: float, int1: integer, int2: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getExperienceLevel"(): integer
public "getExperienceProgress"(): float
public "getTotalExperience"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "experienceLevel"(): integer
get "experienceProgress"(): float
get "totalExperience"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundCommandSuggestionsPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Suggestions, $Suggestions$$Type } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundCommandSuggestionsPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, suggestions1: $Suggestions$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "getSuggestions"(): $Suggestions
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "suggestions"(): $Suggestions
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundLoginPacket" {
import { $RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type } from "packages/net/minecraft/core/$RegistryAccess$Frozen"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $DimensionType } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $GlobalPos, $GlobalPos$$Type } from "packages/net/minecraft/core/$GlobalPos"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $GameType, $GameType$$Type } from "packages/net/minecraft/world/level/$GameType"

export class $ClientboundLoginPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, boolean1: boolean, gameType2: $GameType$$Type, gameType3: $GameType$$Type, set4: $Set$$Type<$ResourceKey$$Type<$Level$$Type>>, frozen5: $RegistryAccess$Frozen$$Type, resourceKey6: $ResourceKey$$Type<$DimensionType>, resourceKey7: $ResourceKey$$Type<$Level>, long8: long, int9: integer, int10: integer, int11: integer, boolean12: boolean, boolean13: boolean, boolean14: boolean, boolean15: boolean, optional16: $Optional$$Type<$GlobalPos$$Type>, int17: integer)

public "chunkRadius"(): integer
public "dimension"(): $ResourceKey<$Level>
public "dimensionType"(): $ResourceKey<$DimensionType>
public "gameType"(): $GameType
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "hardcore"(): boolean
public "isDebug"(): boolean
public "isFlat"(): boolean
public "isSkippable"(): boolean
public "lastDeathLocation"(): $Optional<$GlobalPos>
public "levels"(): $Set<$ResourceKey<$Level>>
public "maxPlayers"(): integer
public "playerId"(): integer
public "portalCooldown"(): integer
public "previousGameType"(): $GameType
public "reducedDebugInfo"(): boolean
public "registryHolder"(): $RegistryAccess$Frozen
public "seed"(): long
public "showDeathScreen"(): boolean
public "simulationDistance"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "debug"(): boolean
get "flat"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundAddExperienceOrbPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ExperienceOrb$$Type } from "packages/net/minecraft/world/entity/$ExperienceOrb"

export class $ClientboundAddExperienceOrbPacket implements $Packet<$ClientGamePacketListener> {
constructor(experienceOrb0: $ExperienceOrb$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "getValue"(): integer
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "value"(): integer
get "x"(): double
get "y"(): double
get "z"(): double
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundBossEventPacket" {
import { $BossEvent$$Type } from "packages/net/minecraft/world/$BossEvent"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $ClientboundBossEventPacket$Handler$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBossEventPacket$Handler"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundBossEventPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public static "createAddPacket"(bossEvent0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "createRemovePacket"(uUID0: $UUID$$Type): $ClientboundBossEventPacket
public static "createUpdateNamePacket"(bossEvent0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "createUpdateProgressPacket"(bossEvent0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "createUpdatePropertiesPacket"(bossEvent0: $BossEvent$$Type): $ClientboundBossEventPacket
public static "createUpdateStylePacket"(bossEvent0: $BossEvent$$Type): $ClientboundBossEventPacket
public "dispatch"(handler0: $ClientboundBossEventPacket$Handler$$Type): void
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundTabListPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundTabListPacket implements $Packet<$ClientGamePacketListener> {
constructor(component0: $Component$$Type, component1: $Component$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getFooter"(): $Component
public "getHeader"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "footer"(): $Component
get "header"(): $Component
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundPaddleBoatPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundPaddleBoatPacket implements $Packet<$ServerGamePacketListener> {
constructor(boolean0: boolean, boolean1: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getLeft"(): boolean
public "getRight"(): boolean
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "left"(): boolean
get "right"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetSimulationDistancePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetSimulationDistancePacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "simulationDistance"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetEntityLinkPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundSetEntityLinkPacket implements $Packet<$ClientGamePacketListener> {
constructor(entity0: $Entity$$Type, entity1: $Entity$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getDestId"(): integer
public "getSourceId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "destId"(): integer
get "sourceId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundDeleteChatPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $MessageSignature$Packed, $MessageSignature$Packed$$Type } from "packages/net/minecraft/network/chat/$MessageSignature$Packed"

export class $ClientboundDeleteChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(packed0: $MessageSignature$Packed$$Type)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "messageSignature"(): $MessageSignature$Packed
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSystemChatPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSystemChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(component0: $Component$$Type, boolean1: boolean)

public "content"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "overlay"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundContainerSetContentPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $List } from "packages/java/util/$List"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ClientboundContainerSetContentPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, int1: integer, nonNullList2: $NonNullList$$Type<$ItemStack$$Type>, itemStack3: $ItemStack$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getCarriedItem"(): $ItemStack
public "getContainerId"(): integer
public "getItems"(): $List<$ItemStack>
public "getStateId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "carriedItem"(): $ItemStack
get "containerId"(): integer
get "items"(): $List<$ItemStack>
get "stateId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundOpenBookPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundOpenBookPacket implements $Packet<$ClientGamePacketListener> {
constructor(interactionHand0: $InteractionHand$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getHand"(): $InteractionHand
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "hand"(): $InteractionHand
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSetStructureBlockPacket" {
import { $StructureMode, $StructureMode$$Type } from "packages/net/minecraft/world/level/block/state/properties/$StructureMode"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Vec3i, $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Rotation, $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Mirror, $Mirror$$Type } from "packages/net/minecraft/world/level/block/$Mirror"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $StructureBlockEntity$UpdateType, $StructureBlockEntity$UpdateType$$Type } from "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity$UpdateType"

export class $ServerboundSetStructureBlockPacket implements $Packet<$ServerGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, updateType1: $StructureBlockEntity$UpdateType$$Type, structureMode2: $StructureMode$$Type, string3: string, blockPos4: $BlockPos$$Type, vec3i5: $Vec3i$$Type, mirror6: $Mirror$$Type, rotation7: $Rotation$$Type, string8: string, boolean9: boolean, boolean10: boolean, boolean11: boolean, float12: float, long13: long)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getData"(): string
public "getIntegrity"(): float
public "getMirror"(): $Mirror
public "getMode"(): $StructureMode
public "getName"(): string
public "getOffset"(): $BlockPos
public "getPos"(): $BlockPos
public "getRotation"(): $Rotation
public "getSeed"(): long
public "getSize"(): $Vec3i
public "getUpdateType"(): $StructureBlockEntity$UpdateType
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isIgnoreEntities"(): boolean
public "isShowAir"(): boolean
public "isShowBoundingBox"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "data"(): string
get "integrity"(): float
get "mirror"(): $Mirror
get "mode"(): $StructureMode
get "name"(): string
get "offset"(): $BlockPos
get "pos"(): $BlockPos
get "rotation"(): $Rotation
get "seed"(): long
get "size"(): $Vec3i
get "updateType"(): $StructureBlockEntity$UpdateType
get "ignoreEntities"(): boolean
get "showAir"(): boolean
get "showBoundingBox"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetChunkCacheCenterPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetChunkCacheCenterPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, int1: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getX"(): integer
public "getZ"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "x"(): integer
get "z"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSectionBlocksUpdatePacket" {
import { $ShortSet$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$ShortSet"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $LevelChunkSection$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunkSection"
import { $SectionPos, $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IXaeroMinimapSMultiBlockChangePacket } from "packages/xaero/common/core/$IXaeroMinimapSMultiBlockChangePacket"
import { $IWorldMapSMultiBlockChangePacket } from "packages/xaero/map/core/$IWorldMapSMultiBlockChangePacket"

export class $ClientboundSectionBlocksUpdatePacket implements $Packet<$ClientGamePacketListener>, $IXaeroMinimapSMultiBlockChangePacket, $IWorldMapSMultiBlockChangePacket {
constructor(sectionPos0: $SectionPos$$Type, shortSet1: $ShortSet$$Type, levelChunkSection2: $LevelChunkSection$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "runUpdates"(biConsumer0: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "xaero_mm_getSectionPos"(): $SectionPos
public "xaero_wm_getSectionPos"(): $SectionPos
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundBlockEntityTagQuery" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ServerboundBlockEntityTagQuery implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer, blockPos1: $BlockPos$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getPos"(): $BlockPos
public "getTransactionId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "pos"(): $BlockPos
get "transactionId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundServerDataPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"

export class $ClientboundServerDataPacket implements $Packet<$ClientGamePacketListener> {
constructor(component0: $Component$$Type, optional1: $Optional$$Type<byte[]>, boolean2: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "enforcesSecureChat"(): boolean
public "getIconBytes"(): $Optional<byte[]>
public "getMotd"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "iconBytes"(): $Optional<byte[]>
get "motd"(): $Component
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundUpdateTagsPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $TagNetworkSerialization$NetworkPayload, $TagNetworkSerialization$NetworkPayload$$Type } from "packages/net/minecraft/tags/$TagNetworkSerialization$NetworkPayload"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $ClientboundUpdateTagsPacket implements $Packet<$ClientGamePacketListener> {
constructor(map0: $Map$$Type<$ResourceKey$$Type<$Registry$$Type<any>>, $TagNetworkSerialization$NetworkPayload$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getTags"(): $Map<$ResourceKey<$Registry<any>>, $TagNetworkSerialization$NetworkPayload>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "tags"(): $Map<$ResourceKey<$Registry<any>>, $TagNetworkSerialization$NetworkPayload>
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerPacketListener" {
import { $PacketListener } from "packages/net/minecraft/network/$PacketListener"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"

export interface $ServerPacketListener extends $PacketListener {
"isAcceptingMessages"(): boolean
"onDisconnect"(component0: $Component$$Type): void
"shouldPropagateHandlingExceptions"(): boolean
get "acceptingMessages"(): boolean
}

export namespace $ServerPacketListener {
const probejs$$marker: never
}
export abstract class $ServerPacketListener$$Static implements $ServerPacketListener {
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundRecipePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $ClientboundRecipePacket$State, $ClientboundRecipePacket$State$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundRecipePacket$State"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $RecipeBookSettings, $RecipeBookSettings$$Type } from "packages/net/minecraft/stats/$RecipeBookSettings"
import { $List } from "packages/java/util/$List"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClientboundRecipePacket implements $Packet<$ClientGamePacketListener> {
constructor(state0: $ClientboundRecipePacket$State$$Type, collection1: $Collection$$Type<$ResourceLocation$$Type>, collection2: $Collection$$Type<$ResourceLocation$$Type>, recipeBookSettings3: $RecipeBookSettings$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getBookSettings"(): $RecipeBookSettings
public "getHighlights"(): $List<$ResourceLocation>
public "getRecipes"(): $List<$ResourceLocation>
public "getState"(): $ClientboundRecipePacket$State
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "bookSettings"(): $RecipeBookSettings
get "highlights"(): $List<$ResourceLocation>
get "recipes"(): $List<$ResourceLocation>
get "state"(): $ClientboundRecipePacket$State
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundUpdateAttributesPacket$AttributeSnapshot" {
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier, $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export class $ClientboundUpdateAttributesPacket$AttributeSnapshot {
constructor(attribute0: $Attribute$$Type, double1: double, collection2: $Collection$$Type<$AttributeModifier$$Type>)

public "getAttribute"(): $Attribute
public "getBase"(): double
public "getModifiers"(): $Collection<$AttributeModifier>
get "attribute"(): $Attribute
get "base"(): double
get "modifiers"(): $Collection<$AttributeModifier>
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlayerPositionPacket" {
import { $RelativeMovement, $RelativeMovement$$Type } from "packages/net/minecraft/world/entity/$RelativeMovement"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundPlayerPositionPacket implements $Packet<$ClientGamePacketListener> {
constructor(double0: double, double1: double, double2: double, float3: float, float4: float, set5: $Set$$Type<$RelativeMovement$$Type>, int6: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "getRelativeArguments"(): $Set<$RelativeMovement>
public "getX"(): double
public "getXRot"(): float
public "getY"(): double
public "getYRot"(): float
public "getZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "relativeArguments"(): $Set<$RelativeMovement>
get "x"(): double
get "xRot"(): float
get "y"(): double
get "yRot"(): float
get "z"(): double
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundChatCommandPacket" {
import { $Record } from "packages/java/lang/$Record"
import { $Instant, $Instant$$Type } from "packages/java/time/$Instant"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ArgumentSignatures, $ArgumentSignatures$$Type } from "packages/net/minecraft/commands/arguments/$ArgumentSignatures"
import { $LastSeenMessages$Update, $LastSeenMessages$Update$$Type } from "packages/net/minecraft/network/chat/$LastSeenMessages$Update"

export class $ServerboundChatCommandPacket extends $Record implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(string0: string, instant1: $Instant$$Type, long2: long, argumentSignatures3: $ArgumentSignatures$$Type, update4: $LastSeenMessages$Update$$Type)

public "argumentSignatures"(): $ArgumentSignatures
public "command"(): string
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "lastSeenMessages"(): $LastSeenMessages$Update
public "salt"(): long
public "timeStamp"(): $Instant
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundContainerClosePacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundContainerClosePacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getContainerId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundLightUpdatePacketData" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $LevelLightEngine$$Type } from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $List } from "packages/java/util/$List"
import { $BitSet, $BitSet$$Type } from "packages/java/util/$BitSet"

export class $ClientboundLightUpdatePacketData {
constructor(chunkPos0: $ChunkPos$$Type, levelLightEngine1: $LevelLightEngine$$Type, bitSet2: $BitSet$$Type, bitSet3: $BitSet$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type, int1: integer, int2: integer)

public "getBlockUpdates"(): $List<byte[]>
public "getBlockYMask"(): $BitSet
public "getEmptyBlockYMask"(): $BitSet
public "getEmptySkyYMask"(): $BitSet
public "getSkyUpdates"(): $List<byte[]>
public "getSkyYMask"(): $BitSet
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "blockUpdates"(): $List<byte[]>
get "blockYMask"(): $BitSet
get "emptyBlockYMask"(): $BitSet
get "emptySkyYMask"(): $BitSet
get "skyUpdates"(): $List<byte[]>
get "skyYMask"(): $BitSet
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundBundlePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $BundlePacket } from "packages/net/minecraft/network/protocol/$BundlePacket"
import { $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"

export class $ClientboundBundlePacket extends $BundlePacket<$ClientGamePacketListener> {
constructor(iterable0: $Iterable$$Type<$Packet$$Type<$ClientGamePacketListener$$Type>>)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundContainerSetSlotPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ClientboundContainerSetSlotPacket implements $Packet<$ClientGamePacketListener> {
static readonly "CARRIED_ITEM": integer
static readonly "PLAYER_INVENTORY": integer

constructor(int0: integer, int1: integer, int2: integer, itemStack3: $ItemStack$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getContainerId"(): integer
public "getItem"(): $ItemStack
public "getSlot"(): integer
public "getStateId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "item"(): $ItemStack
get "slot"(): integer
get "stateId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSoundPacket" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $SoundSource, $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"

export class $ClientboundSoundPacket implements $Packet<$ClientGamePacketListener> {
static readonly "LOCATION_ACCURACY": float

constructor(holder0: $Holder$$Type<$SoundEvent$$Type>, soundSource1: $SoundSource$$Type, double2: double, double3: double, double4: double, float5: float, float6: float, long7: long)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getPitch"(): float
public "getSeed"(): long
public "getSound"(): $Holder<$SoundEvent>
public "getSource"(): $SoundSource
public "getVolume"(): float
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "sound"(): $Holder<$SoundEvent>
set "sound"(value: $Holder$$Type<$SoundEvent$$Type>)
get "pitch"(): float
get "seed"(): long
get "source"(): $SoundSource
get "volume"(): float
get "x"(): double
get "y"(): double
get "z"(): double
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundCommandSuggestionPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundCommandSuggestionPacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer, string1: string)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getCommand"(): string
public "getId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "command"(): string
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundTakeItemEntityPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundTakeItemEntityPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, int1: integer, int2: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getAmount"(): integer
public "getItemId"(): integer
public "getPlayerId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "amount"(): integer
get "itemId"(): integer
get "playerId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetPlayerTeamPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $ClientboundSetPlayerTeamPacket$Action, $ClientboundSetPlayerTeamPacket$Action$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundSetPlayerTeamPacket$Action"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Collection } from "packages/java/util/$Collection"
import { $Optional } from "packages/java/util/$Optional"
import { $ClientboundSetPlayerTeamPacket$Parameters } from "packages/net/minecraft/network/protocol/game/$ClientboundSetPlayerTeamPacket$Parameters"
import { $PlayerTeam$$Type } from "packages/net/minecraft/world/scores/$PlayerTeam"

export class $ClientboundSetPlayerTeamPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public static "createAddOrModifyPacket"(playerTeam0: $PlayerTeam$$Type, boolean1: boolean): $ClientboundSetPlayerTeamPacket
public static "createPlayerPacket"(playerTeam0: $PlayerTeam$$Type, string1: string, action2: $ClientboundSetPlayerTeamPacket$Action$$Type): $ClientboundSetPlayerTeamPacket
public static "createRemovePacket"(playerTeam0: $PlayerTeam$$Type): $ClientboundSetPlayerTeamPacket
public "getName"(): string
public "getParameters"(): $Optional<$ClientboundSetPlayerTeamPacket$Parameters>
public "getPlayerAction"(): $ClientboundSetPlayerTeamPacket$Action
public "getPlayers"(): $Collection<string>
public "getTeamAction"(): $ClientboundSetPlayerTeamPacket$Action
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "name"(): string
get "parameters"(): $Optional<$ClientboundSetPlayerTeamPacket$Parameters>
get "playerAction"(): $ClientboundSetPlayerTeamPacket$Action
get "players"(): $Collection<string>
get "teamAction"(): $ClientboundSetPlayerTeamPacket$Action
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetDisplayObjectivePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Objective$$Type } from "packages/net/minecraft/world/scores/$Objective"

export class $ClientboundSetDisplayObjectivePacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, objective1: $Objective$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getObjectiveName"(): string
public "getSlot"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "objectiveName"(): string
get "slot"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/status/$ServerStatus$Favicon" {
import { $Record } from "packages/java/lang/$Record"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ServerStatus$Favicon extends $Record {
static readonly "CODEC": $Codec<$ServerStatus$Favicon>

constructor(iconBytes: byte[])

public "iconBytes"(): byte[]
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundUpdateAdvancementsPacket" {
import { $Advancement$Builder } from "packages/net/minecraft/advancements/$Advancement$Builder"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Advancement$$Type } from "packages/net/minecraft/advancements/$Advancement"
import { $AdvancementProgress, $AdvancementProgress$$Type } from "packages/net/minecraft/advancements/$AdvancementProgress"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $ClientboundUpdateAdvancementsPacket implements $Packet<$ClientGamePacketListener> {
constructor(boolean0: boolean, collection1: $Collection$$Type<$Advancement$$Type>, set2: $Set$$Type<$ResourceLocation$$Type>, map3: $Map$$Type<$ResourceLocation$$Type, $AdvancementProgress$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getAdded"(): $Map<$ResourceLocation, $Advancement$Builder>
public "getProgress"(): $Map<$ResourceLocation, $AdvancementProgress>
public "getRemoved"(): $Set<$ResourceLocation>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "shouldReset"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "added"(): $Map<$ResourceLocation, $Advancement$Builder>
get "progress"(): $Map<$ResourceLocation, $AdvancementProgress>
get "removed"(): $Set<$ResourceLocation>
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundJigsawGeneratePacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ServerboundJigsawGeneratePacket implements $Packet<$ServerGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, int1: integer, boolean2: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getPos"(): $BlockPos
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "keepJigsaws"(): boolean
public "levels"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "pos"(): $BlockPos
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundContainerClickPacket" {
import { $ClickType, $ClickType$$Type } from "packages/net/minecraft/world/inventory/$ClickType"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Int2ObjectMap, $Int2ObjectMap$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"

export class $ServerboundContainerClickPacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer, int1: integer, int2: integer, int3: integer, clickType4: $ClickType$$Type, itemStack5: $ItemStack$$Type, int2ObjectMap6: $Int2ObjectMap$$Type<$ItemStack$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getButtonNum"(): integer
public "getCarriedItem"(): $ItemStack
public "getChangedSlots"(): $Int2ObjectMap<$ItemStack>
public "getClickType"(): $ClickType
public "getContainerId"(): integer
public "getSlotNum"(): integer
public "getStateId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "buttonNum"(): integer
get "carriedItem"(): $ItemStack
get "changedSlots"(): $Int2ObjectMap<$ItemStack>
get "clickType"(): $ClickType
get "containerId"(): integer
get "slotNum"(): integer
get "stateId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPingPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundPingPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundLockDifficultyPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundLockDifficultyPacket implements $Packet<$ServerGamePacketListener> {
constructor(boolean0: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isLocked"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "locked"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSeenAdvancementsPacket$Action" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ServerboundSeenAdvancementsPacket$Action extends $Enum<$ServerboundSeenAdvancementsPacket$Action> {
static readonly "CLOSED_SCREEN": $ServerboundSeenAdvancementsPacket$Action
static readonly "OPENED_TAB": $ServerboundSeenAdvancementsPacket$Action

public static "valueOf"(string0: string): $ServerboundSeenAdvancementsPacket$Action
public static "values"(): $ServerboundSeenAdvancementsPacket$Action[]
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundRotateHeadPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundRotateHeadPacket implements $Packet<$ClientGamePacketListener> {
constructor(entity0: $Entity$$Type, byte1: byte)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEntity"(level0: $Level$$Type): $Entity
public "getYHeadRot"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "yHeadRot"(): byte
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/$BundlerInfo" {
import { $PacketListener, $PacketListener$$Type } from "packages/net/minecraft/network/$PacketListener"
import { $BundlePacket, $BundlePacket$$Type } from "packages/net/minecraft/network/protocol/$BundlePacket"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BundleDelimiterPacket$$Type } from "packages/net/minecraft/network/protocol/$BundleDelimiterPacket"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BundlerInfo$Bundler } from "packages/net/minecraft/network/protocol/$BundlerInfo$Bundler"
import { $BundlerInfo$Provider } from "packages/net/minecraft/network/protocol/$BundlerInfo$Provider"
import { $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $AttributeKey } from "packages/io/netty/util/$AttributeKey"

export interface $BundlerInfo {
"startPacketBundling"(packet0: $Packet$$Type<any>): $BundlerInfo$Bundler
"unbundlePacket"(packet0: $Packet$$Type<any>, consumer1: $Consumer$$Type<$Packet$$Type<any>>): void
}

export namespace $BundlerInfo {
const BUNDLER_PROVIDER: $AttributeKey<$BundlerInfo$Provider>
const BUNDLE_SIZE_LIMIT: integer
const EMPTY: $BundlerInfo
function createForPacket<T extends $PacketListener, P extends $BundlePacket<T>>(class0: $Class$$Type<P>, function1: $Function$$Type<$Iterable$$Type<$Packet$$Type<T>>, P>, bundleDelimiterPacket2: $BundleDelimiterPacket$$Type<T>): $BundlerInfo
}
export abstract class $BundlerInfo$$Static implements $BundlerInfo {
static readonly "BUNDLER_PROVIDER": $AttributeKey<$BundlerInfo$Provider>
static readonly "BUNDLE_SIZE_LIMIT": integer
static readonly "EMPTY": $BundlerInfo

static "createForPacket"<T extends $PacketListener, P extends $BundlePacket<T>>(class0: $Class$$Type<P>, function1: $Function$$Type<$Iterable$$Type<$Packet$$Type<T>>, P>, bundleDelimiterPacket2: $BundleDelimiterPacket$$Type<T>): $BundlerInfo
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundPlayerActionPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ServerboundPlayerActionPacket$Action, $ServerboundPlayerActionPacket$Action$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerActionPacket$Action"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ServerboundPlayerActionPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(action0: $ServerboundPlayerActionPacket$Action$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type)
constructor(action0: $ServerboundPlayerActionPacket$Action$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, int3: integer)

public "getAction"(): $ServerboundPlayerActionPacket$Action
public "getDirection"(): $Direction
public "getPos"(): $BlockPos
public "getSequence"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): $ServerboundPlayerActionPacket$Action
get "direction"(): $Direction
get "pos"(): $BlockPos
get "sequence"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundBlockChangedAckPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundBlockChangedAckPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "sequence"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundMoveVehiclePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundMoveVehiclePacket implements $Packet<$ClientGamePacketListener> {
constructor(entity0: $Entity$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getX"(): double
public "getXRot"(): float
public "getY"(): double
public "getYRot"(): float
public "getZ"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "x"(): double
get "xRot"(): float
get "y"(): double
get "yRot"(): float
get "z"(): double
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundLightUpdatePacket" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ClientboundLightUpdatePacketData } from "packages/net/minecraft/network/protocol/game/$ClientboundLightUpdatePacketData"
import { $LevelLightEngine$$Type } from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BitSet$$Type } from "packages/java/util/$BitSet"

export class $ClientboundLightUpdatePacket implements $Packet<$ClientGamePacketListener> {
constructor(chunkPos0: $ChunkPos$$Type, levelLightEngine1: $LevelLightEngine$$Type, bitSet2: $BitSet$$Type, bitSet3: $BitSet$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getLightData"(): $ClientboundLightUpdatePacketData
public "getX"(): integer
public "getZ"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "lightData"(): $ClientboundLightUpdatePacketData
get "x"(): integer
get "z"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetObjectivePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Objective$$Type } from "packages/net/minecraft/world/scores/$Objective"
import { $ObjectiveCriteria$RenderType } from "packages/net/minecraft/world/scores/criteria/$ObjectiveCriteria$RenderType"

export class $ClientboundSetObjectivePacket implements $Packet<$ClientGamePacketListener> {
static readonly "METHOD_ADD": integer
static readonly "METHOD_CHANGE": integer
static readonly "METHOD_REMOVE": integer

constructor(objective0: $Objective$$Type, int1: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getDisplayName"(): $Component
public "getMethod"(): integer
public "getObjectiveName"(): string
public "getRenderType"(): $ObjectiveCriteria$RenderType
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "displayName"(): $Component
get "method"(): integer
get "objectiveName"(): string
get "renderType"(): $ObjectiveCriteria$RenderType
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundClientCommandPacket" {
import { $ServerboundClientCommandPacket$Action, $ServerboundClientCommandPacket$Action$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundClientCommandPacket$Action"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundClientCommandPacket implements $Packet<$ServerGamePacketListener> {
constructor(action0: $ServerboundClientCommandPacket$Action$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getAction"(): $ServerboundClientCommandPacket$Action
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): $ServerboundClientCommandPacket$Action
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundBossEventPacket$Handler" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $BossEvent$BossBarColor$$Type } from "packages/net/minecraft/world/$BossEvent$BossBarColor"
import { $BossEvent$BossBarOverlay$$Type } from "packages/net/minecraft/world/$BossEvent$BossBarOverlay"

export interface $ClientboundBossEventPacket$Handler {
"add"(uUID0: $UUID$$Type, component1: $Component$$Type, float2: float, bossBarColor3: $BossEvent$BossBarColor$$Type, bossBarOverlay4: $BossEvent$BossBarOverlay$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean): void
"remove"(uUID0: $UUID$$Type): void
"updateName"(uUID0: $UUID$$Type, component1: $Component$$Type): void
"updateProgress"(uUID0: $UUID$$Type, float1: float): void
"updateProperties"(uUID0: $UUID$$Type, boolean1: boolean, boolean2: boolean, boolean3: boolean): void
"updateStyle"(uUID0: $UUID$$Type, bossBarColor1: $BossEvent$BossBarColor$$Type, bossBarOverlay2: $BossEvent$BossBarOverlay$$Type): void
}

export namespace $ClientboundBossEventPacket$Handler {
const probejs$$marker: never
}
export abstract class $ClientboundBossEventPacket$Handler$$Static implements $ClientboundBossEventPacket$Handler {
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlayerInfoRemovePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Record } from "packages/java/lang/$Record"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $List, $List$$Type } from "packages/java/util/$List"

export class $ClientboundPlayerInfoRemovePacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(list0: $List$$Type<$UUID$$Type>)

public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "profileIds"(): $List<$UUID>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundAwardStatsPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Stat, $Stat$$Type } from "packages/net/minecraft/stats/$Stat"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Object2IntMap$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"
import { $Map } from "packages/java/util/$Map"

export class $ClientboundAwardStatsPacket implements $Packet<$ClientGamePacketListener> {
constructor(object2IntMap0: $Object2IntMap$$Type<$Stat$$Type<any>>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getStats"(): $Map<$Stat<any>, integer>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "stats"(): $Map<$Stat<any>, integer>
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundPlayerCommandPacket$Action" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ServerboundPlayerCommandPacket$Action extends $Enum<$ServerboundPlayerCommandPacket$Action> {
static readonly "OPEN_INVENTORY": $ServerboundPlayerCommandPacket$Action
static readonly "PRESS_SHIFT_KEY": $ServerboundPlayerCommandPacket$Action
static readonly "RELEASE_SHIFT_KEY": $ServerboundPlayerCommandPacket$Action
static readonly "START_FALL_FLYING": $ServerboundPlayerCommandPacket$Action
static readonly "START_RIDING_JUMP": $ServerboundPlayerCommandPacket$Action
static readonly "START_SPRINTING": $ServerboundPlayerCommandPacket$Action
static readonly "STOP_RIDING_JUMP": $ServerboundPlayerCommandPacket$Action
static readonly "STOP_SLEEPING": $ServerboundPlayerCommandPacket$Action
static readonly "STOP_SPRINTING": $ServerboundPlayerCommandPacket$Action

public static "valueOf"(string0: string): $ServerboundPlayerCommandPacket$Action
public static "values"(): $ServerboundPlayerCommandPacket$Action[]
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundKeepAlivePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundKeepAlivePacket implements $Packet<$ClientGamePacketListener> {
constructor(long0: long)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): long
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): long
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundAddEntityPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $EntityType, $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundAddEntityPacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer, uUID1: $UUID$$Type, double2: double, double3: double, double4: double, float5: float, float6: float, entityType7: $EntityType$$Type<any>, int8: integer, vec39: $Vec3$$Type, double10: double)
constructor(entity0: $Entity$$Type, int1: integer, blockPos2: $BlockPos$$Type)
constructor(entity0: $Entity$$Type, int1: integer)
constructor(entity0: $Entity$$Type)

public "getData"(): integer
public "getId"(): integer
public "getType"(): $EntityType<any>
public "getUUID"(): $UUID
public "getX"(): double
public "getXRot"(): float
public "getXa"(): double
public "getY"(): double
public "getYHeadRot"(): float
public "getYRot"(): float
public "getYa"(): double
public "getZ"(): double
public "getZa"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "data"(): integer
get "id"(): integer
get "type"(): $EntityType<any>
get "uUID"(): $UUID
get "x"(): double
get "xRot"(): float
get "xa"(): double
get "y"(): double
get "yHeadRot"(): float
get "yRot"(): float
get "ya"(): double
get "z"(): double
get "za"(): double
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundForgetLevelChunkPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundForgetLevelChunkPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, int1: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getX"(): integer
public "getZ"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "x"(): integer
get "z"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundChunksBiomesPacket$ChunkBiomeData" {
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ClientboundChunksBiomesPacket$ChunkBiomeData extends $Record {
constructor(chunkPos0: $ChunkPos$$Type, byte1s: byte[])
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(levelChunk0: $LevelChunk$$Type)

public "buffer"(): byte[]
public static "extractChunkData"(friendlyByteBuf0: $FriendlyByteBuf$$Type, levelChunk1: $LevelChunk$$Type): void
public "getReadBuffer"(): $FriendlyByteBuf
public "pos"(): $ChunkPos
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "readBuffer"(): $FriendlyByteBuf
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderWarningDistancePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $WorldBorder$$Type } from "packages/net/minecraft/world/level/border/$WorldBorder"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetBorderWarningDistancePacket implements $Packet<$ClientGamePacketListener> {
constructor(worldBorder0: $WorldBorder$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getWarningBlocks"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "warningBlocks"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlaceGhostRecipePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ClientboundPlaceGhostRecipePacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, recipe1: $Recipe$$Type<any>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getContainerId"(): integer
public "getRecipe"(): $ResourceLocation
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "recipe"(): $ResourceLocation
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundPlayerActionPacket$Action" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ServerboundPlayerActionPacket$Action extends $Enum<$ServerboundPlayerActionPacket$Action> {
static readonly "ABORT_DESTROY_BLOCK": $ServerboundPlayerActionPacket$Action
static readonly "DROP_ALL_ITEMS": $ServerboundPlayerActionPacket$Action
static readonly "DROP_ITEM": $ServerboundPlayerActionPacket$Action
static readonly "RELEASE_USE_ITEM": $ServerboundPlayerActionPacket$Action
static readonly "START_DESTROY_BLOCK": $ServerboundPlayerActionPacket$Action
static readonly "STOP_DESTROY_BLOCK": $ServerboundPlayerActionPacket$Action
static readonly "SWAP_ITEM_WITH_OFFHAND": $ServerboundPlayerActionPacket$Action

public static "valueOf"(string0: string): $ServerboundPlayerActionPacket$Action
public static "values"(): $ServerboundPlayerActionPacket$Action[]
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundChatAckPacket" {
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundChatAckPacket extends $Record implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(int0: integer)

public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "offset"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundTeleportEntityPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundTeleportEntityPacket implements $Packet<$ClientGamePacketListener> {
constructor(entity0: $Entity$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "getxRot"(): byte
public "getyRot"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isOnGround"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "x"(): double
get "y"(): double
get "z"(): double
get "xRot"(): byte
get "yRot"(): byte
get "onGround"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundMapItemDataPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $MapItemSavedData$MapPatch, $MapItemSavedData$MapPatch$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData$MapPatch"
import { $MapDecoration$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $MapItemSavedData$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $IMapDataPacketExtension } from "packages/net/mehvahdjukaar/moonlight/core/misc/$IMapDataPacketExtension"

export class $ClientboundMapItemDataPacket implements $Packet<$ClientGamePacketListener>, $IMapDataPacketExtension {
constructor(int0: integer, byte1: byte, boolean2: boolean, collection3: $Collection$$Type<$MapDecoration$$Type>, mapPatch4: $MapItemSavedData$MapPatch$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "applyToMap"(mapItemSavedData0: $MapItemSavedData$$Type): void
public "getMapId"(): integer
public "getScale"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isLocked"(): boolean
public "isSkippable"(): boolean
public "moonlight$getColorPatch"(): $MapItemSavedData$MapPatch
public "moonlight$getCustomMapDataTag"(): $CompoundTag
public "moonlight$getDimension"(): $ResourceKey<any>
public "moonlight$sendCustomDecorations"(decorations: $Collection$$Type<any>): void
public "moonlight$sendCustomMapDataTag"(dataTag: $CompoundTag$$Type): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "mapId"(): integer
get "scale"(): byte
get "locked"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlayerInfoUpdatePacket$Action" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ClientboundPlayerInfoUpdatePacket$Action extends $Enum<$ClientboundPlayerInfoUpdatePacket$Action> {
static readonly "ADD_PLAYER": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "INITIALIZE_CHAT": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "UPDATE_DISPLAY_NAME": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "UPDATE_GAME_MODE": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "UPDATE_LATENCY": $ClientboundPlayerInfoUpdatePacket$Action
static readonly "UPDATE_LISTED": $ClientboundPlayerInfoUpdatePacket$Action

public static "valueOf"(string0: string): $ClientboundPlayerInfoUpdatePacket$Action
public static "values"(): $ClientboundPlayerInfoUpdatePacket$Action[]
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetCarriedItemPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetCarriedItemPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getSlot"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "slot"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundRemoveMobEffectPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $MobEffect, $MobEffect$$Type } from "packages/net/minecraft/world/effect/$MobEffect"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundRemoveMobEffectPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, mobEffect1: $MobEffect$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEffect"(): $MobEffect
public "getEntity"(level0: $Level$$Type): $Entity
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "effect"(): $MobEffect
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundChatSessionUpdatePacket" {
import { $RemoteChatSession$Data, $RemoteChatSession$Data$$Type } from "packages/net/minecraft/network/chat/$RemoteChatSession$Data"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundChatSessionUpdatePacket extends $Record implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(data0: $RemoteChatSession$Data$$Type)

public "chatSession"(): $RemoteChatSession$Data
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundEditBookPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"

export class $ServerboundEditBookPacket implements $Packet<$ServerGamePacketListener> {
static readonly "MAX_BYTES_PER_CHAR": integer

constructor(int0: integer, list1: $List$$Type<string>, optional2: $Optional$$Type<string>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getPages"(): $List<string>
public "getSlot"(): integer
public "getTitle"(): $Optional<string>
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "pages"(): $List<string>
get "slot"(): integer
get "title"(): $Optional<string>
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetHealthPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetHealthPacket implements $Packet<$ClientGamePacketListener> {
constructor(float0: float, int1: integer, float2: float)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getFood"(): integer
public "getHealth"(): float
public "getSaturation"(): float
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "food"(): integer
get "health"(): float
get "saturation"(): float
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetPassengersPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundSetPassengersPacket implements $Packet<$ClientGamePacketListener> {
constructor(entity0: $Entity$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getPassengers"(): integer[]
public "getVehicle"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "passengers"(): integer[]
get "vehicle"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundDisguisedChatPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ChatType$BoundNetwork, $ChatType$BoundNetwork$$Type } from "packages/net/minecraft/network/chat/$ChatType$BoundNetwork"

export class $ClientboundDisguisedChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(component0: $Component$$Type, boundNetwork1: $ChatType$BoundNetwork$$Type)

public "chatType"(): $ChatType$BoundNetwork
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "message"(): $Component
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetTitleTextPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetTitleTextPacket implements $Packet<$ClientGamePacketListener> {
constructor(component0: $Component$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getText"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "text"(): $Component
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundUseItemOnPacket" {
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockHitResult, $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"

export class $ServerboundUseItemOnPacket implements $Packet<$ServerGamePacketListener> {
constructor(interactionHand0: $InteractionHand$$Type, blockHitResult1: $BlockHitResult$$Type, int2: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getHand"(): $InteractionHand
public "getHitResult"(): $BlockHitResult
public "getSequence"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "hand"(): $InteractionHand
get "hitResult"(): $BlockHitResult
get "sequence"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundAddPlayerPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $UUID } from "packages/java/util/$UUID"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundAddPlayerPacket implements $Packet<$ClientGamePacketListener> {
constructor(player0: $Player$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEntityId"(): integer
public "getPlayerId"(): $UUID
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "getxRot"(): byte
public "getyRot"(): byte
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "entityId"(): integer
get "playerId"(): $UUID
get "x"(): double
get "y"(): double
get "z"(): double
get "xRot"(): byte
get "yRot"(): byte
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundAcceptTeleportationPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundAcceptTeleportationPacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/$Packet" {
import { $PacketListener, $PacketListener$$Type } from "packages/net/minecraft/network/$PacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $Packet<T extends $PacketListener> {
"handle"(t0: T): void
"isSkippable"(): boolean
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}

export namespace $Packet {
const probejs$$marker: never
}
export abstract class $Packet$$Static<T extends $PacketListener> implements $Packet<T> {
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundPongPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundPongPacket implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/status/$ServerStatus$Version" {
import { $Record } from "packages/java/lang/$Record"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ServerStatus$Version extends $Record {
static readonly "CODEC": $Codec<$ServerStatus$Version>

constructor(name: string, protocol: integer)

public static "current"(): $ServerStatus$Version
public "name"(): string
public "protocol"(): integer
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundRecipePacket$State" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ClientboundRecipePacket$State extends $Enum<$ClientboundRecipePacket$State> {
static readonly "ADD": $ClientboundRecipePacket$State
static readonly "INIT": $ClientboundRecipePacket$State
static readonly "REMOVE": $ClientboundRecipePacket$State

public static "valueOf"(string0: string): $ClientboundRecipePacket$State
public static "values"(): $ClientboundRecipePacket$State[]
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetCameraPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundSetCameraPacket implements $Packet<$ClientGamePacketListener> {
constructor(entity0: $Entity$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEntity"(level0: $Level$$Type): $Entity
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundRespawnPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $GlobalPos, $GlobalPos$$Type } from "packages/net/minecraft/core/$GlobalPos"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $DimensionType } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $GameType, $GameType$$Type } from "packages/net/minecraft/world/level/$GameType"

export class $ClientboundRespawnPacket implements $Packet<$ClientGamePacketListener> {
static readonly "KEEP_ALL_DATA": byte
static readonly "KEEP_ATTRIBUTES": byte
static readonly "KEEP_ENTITY_DATA": byte

constructor(resourceKey0: $ResourceKey$$Type<$DimensionType>, resourceKey1: $ResourceKey$$Type<$Level>, long2: long, gameType3: $GameType$$Type, gameType4: $GameType$$Type, boolean5: boolean, boolean6: boolean, byte7: byte, optional8: $Optional$$Type<$GlobalPos$$Type>, int9: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getDimension"(): $ResourceKey<$Level>
public "getDimensionType"(): $ResourceKey<$DimensionType>
public "getLastDeathLocation"(): $Optional<$GlobalPos>
public "getPlayerGameType"(): $GameType
public "getPortalCooldown"(): integer
public "getPreviousPlayerGameType"(): $GameType
public "getSeed"(): long
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isDebug"(): boolean
public "isFlat"(): boolean
public "isSkippable"(): boolean
public "shouldKeep"(byte0: byte): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "dimension"(): $ResourceKey<$Level>
get "dimensionType"(): $ResourceKey<$DimensionType>
get "lastDeathLocation"(): $Optional<$GlobalPos>
get "playerGameType"(): $GameType
get "portalCooldown"(): integer
get "previousPlayerGameType"(): $GameType
get "seed"(): long
get "debug"(): boolean
get "flat"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundContainerSetDataPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundContainerSetDataPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, int1: integer, int2: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getContainerId"(): integer
public "getId"(): integer
public "getValue"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "containerId"(): integer
get "id"(): integer
get "value"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundPlayerInputPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundPlayerInputPacket implements $Packet<$ServerGamePacketListener> {
constructor(float0: float, float1: float, boolean2: boolean, boolean3: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getXxa"(): float
public "getZza"(): float
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isJumping"(): boolean
public "isShiftKeyDown"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "xxa"(): float
get "zza"(): float
get "jumping"(): boolean
get "shiftKeyDown"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlayerChatPacket" {
import { $FilterMask, $FilterMask$$Type } from "packages/net/minecraft/network/chat/$FilterMask"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $SignedMessageBody$Packed, $SignedMessageBody$Packed$$Type } from "packages/net/minecraft/network/chat/$SignedMessageBody$Packed"
import { $MessageSignature, $MessageSignature$$Type } from "packages/net/minecraft/network/chat/$MessageSignature"
import { $ChatType$BoundNetwork, $ChatType$BoundNetwork$$Type } from "packages/net/minecraft/network/chat/$ChatType$BoundNetwork"

export class $ClientboundPlayerChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(uUID0: $UUID$$Type, int1: integer, messageSignature2: $MessageSignature$$Type, packed3: $SignedMessageBody$Packed$$Type, component4: $Component$$Type, filterMask5: $FilterMask$$Type, boundNetwork6: $ChatType$BoundNetwork$$Type)

public "body"(): $SignedMessageBody$Packed
public "chatType"(): $ChatType$BoundNetwork
public "filterMask"(): $FilterMask
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "index"(): integer
public "isSkippable"(): boolean
public "sender"(): $UUID
public "signature"(): $MessageSignature
public "unsignedContent"(): $Component
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundDamageEventPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $DamageSource, $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ClientboundDamageEventPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, int1: integer, int2: integer, int3: integer, optional4: $Optional$$Type<$Vec3$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type)

public "entityId"(): integer
public "getSource"(level0: $Level$$Type): $DamageSource
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "sourceCauseId"(): integer
public "sourceDirectId"(): integer
public "sourcePosition"(): $Optional<$Vec3>
public "sourceTypeId"(): integer
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundStopSoundPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SoundSource, $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"

export class $ClientboundStopSoundPacket implements $Packet<$ClientGamePacketListener> {
constructor(resourceLocation0: $ResourceLocation$$Type, soundSource1: $SoundSource$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getName"(): $ResourceLocation
public "getSource"(): $SoundSource
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "name"(): $ResourceLocation
get "source"(): $SoundSource
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundCommandsPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $CommandBuildContext$$Type } from "packages/net/minecraft/commands/$CommandBuildContext"
import { $SharedSuggestionProvider, $SharedSuggestionProvider$$Type } from "packages/net/minecraft/commands/$SharedSuggestionProvider"
import { $RootCommandNode, $RootCommandNode$$Type } from "packages/com/mojang/brigadier/tree/$RootCommandNode"

export class $ClientboundCommandsPacket implements $Packet<$ClientGamePacketListener> {
constructor(rootCommandNode0: $RootCommandNode$$Type<$SharedSuggestionProvider$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getRoot"(commandBuildContext0: $CommandBuildContext$$Type): $RootCommandNode<$SharedSuggestionProvider>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundPlayerInfoUpdatePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ClientboundPlayerInfoUpdatePacket$Action, $ClientboundPlayerInfoUpdatePacket$Action$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerInfoUpdatePacket$Action"
import { $EnumSet, $EnumSet$$Type } from "packages/java/util/$EnumSet"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ClientboundPlayerInfoUpdatePacket$Entry } from "packages/net/minecraft/network/protocol/game/$ClientboundPlayerInfoUpdatePacket$Entry"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"

export class $ClientboundPlayerInfoUpdatePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(action0: $ClientboundPlayerInfoUpdatePacket$Action$$Type, serverPlayer1: $ServerPlayer$$Type)
constructor(enumSet0: $EnumSet$$Type<$ClientboundPlayerInfoUpdatePacket$Action$$Type>, collection1: $Collection$$Type<$ServerPlayer$$Type>)

public "actions"(): $EnumSet<$ClientboundPlayerInfoUpdatePacket$Action>
public static "createPlayerInitializing"(collection0: $Collection$$Type<$ServerPlayer$$Type>): $ClientboundPlayerInfoUpdatePacket
public "entries"(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "newEntries"(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundPlayerAbilitiesPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Abilities$$Type } from "packages/net/minecraft/world/entity/player/$Abilities"

export class $ServerboundPlayerAbilitiesPacket implements $Packet<$ServerGamePacketListener> {
constructor(abilities0: $Abilities$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isFlying"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "flying"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundInteractPacket$Handler" {
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"

export interface $ServerboundInteractPacket$Handler {
"onAttack"(): void
"onInteraction"(interactionHand0: $InteractionHand$$Type, vec31: $Vec3$$Type): void
"onInteraction"(interactionHand0: $InteractionHand$$Type): void
}

export namespace $ServerboundInteractPacket$Handler {
const probejs$$marker: never
}
export abstract class $ServerboundInteractPacket$Handler$$Static implements $ServerboundInteractPacket$Handler {
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundResourcePackPacket$Action" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ServerboundResourcePackPacket$Action extends $Enum<$ServerboundResourcePackPacket$Action> {
static readonly "ACCEPTED": $ServerboundResourcePackPacket$Action
static readonly "DECLINED": $ServerboundResourcePackPacket$Action
static readonly "FAILED_DOWNLOAD": $ServerboundResourcePackPacket$Action
static readonly "SUCCESSFULLY_LOADED": $ServerboundResourcePackPacket$Action

public static "valueOf"(string0: string): $ServerboundResourcePackPacket$Action
public static "values"(): $ServerboundResourcePackPacket$Action[]
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundGameEventPacket$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ClientboundGameEventPacket$Type {
constructor(int0: integer)

}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetTimePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetTimePacket implements $Packet<$ClientGamePacketListener> {
constructor(long0: long, long1: long, boolean2: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getDayTime"(): long
public "getGameTime"(): long
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "dayTime"(): long
get "gameTime"(): long
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSwingPacket" {
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundSwingPacket implements $Packet<$ServerGamePacketListener> {
constructor(interactionHand0: $InteractionHand$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getHand"(): $InteractionHand
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "hand"(): $InteractionHand
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetBorderSizePacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $WorldBorder$$Type } from "packages/net/minecraft/world/level/border/$WorldBorder"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetBorderSizePacket implements $Packet<$ClientGamePacketListener> {
constructor(worldBorder0: $WorldBorder$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getSize"(): double
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "size"(): double
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundCustomChatCompletionsPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $ClientboundCustomChatCompletionsPacket$Action, $ClientboundCustomChatCompletionsPacket$Action$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundCustomChatCompletionsPacket$Action"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $List, $List$$Type } from "packages/java/util/$List"

export class $ClientboundCustomChatCompletionsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(action0: $ClientboundCustomChatCompletionsPacket$Action$$Type, list1: $List$$Type<string>)

public "action"(): $ClientboundCustomChatCompletionsPacket$Action
public "entries"(): $List<string>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundSetCommandBlockPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $CommandBlockEntity$Mode, $CommandBlockEntity$Mode$$Type } from "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity$Mode"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ServerboundSetCommandBlockPacket implements $Packet<$ServerGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, string1: string, mode2: $CommandBlockEntity$Mode$$Type, boolean3: boolean, boolean4: boolean, boolean5: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getCommand"(): string
public "getMode"(): $CommandBlockEntity$Mode
public "getPos"(): $BlockPos
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isAutomatic"(): boolean
public "isConditional"(): boolean
public "isSkippable"(): boolean
public "isTrackOutput"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "command"(): string
get "mode"(): $CommandBlockEntity$Mode
get "pos"(): $BlockPos
get "automatic"(): boolean
get "conditional"(): boolean
get "skippable"(): boolean
get "trackOutput"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetActionBarTextPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetActionBarTextPacket implements $Packet<$ClientGamePacketListener> {
constructor(component0: $Component$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getText"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "text"(): $Component
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundRecipeBookSeenRecipePacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ServerboundRecipeBookSeenRecipePacket implements $Packet<$ServerGamePacketListener> {
constructor(recipe0: $Recipe$$Type<any>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getRecipe"(): $ResourceLocation
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "recipe"(): $ResourceLocation
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundOpenSignEditorPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ClientboundOpenSignEditorPacket implements $Packet<$ClientGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, boolean1: boolean)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getPos"(): $BlockPos
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isFrontText"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "pos"(): $BlockPos
get "frontText"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundUpdateRecipesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ClientboundUpdateRecipesPacket implements $Packet<$ClientGamePacketListener> {
constructor(collection0: $Collection$$Type<$Recipe$$Type<any>>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Recipe<any>
public "getRecipes"(): $List<$Recipe<any>>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public static "toNetwork"<T extends $Recipe<any>>(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "recipes"(): $List<$Recipe<any>>
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/$BundlerInfo$Bundler" {
import { $Packet, $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"

export interface $BundlerInfo$Bundler {
"addPacket"(packet0: $Packet$$Type<any>): $Packet<any>
}

export namespace $BundlerInfo$Bundler {
const probejs$$marker: never
}
export abstract class $BundlerInfo$Bundler$$Static implements $BundlerInfo$Bundler {
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundUpdateMobEffectPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $MobEffectInstance$$Type } from "packages/net/minecraft/world/effect/$MobEffectInstance"
import { $MobEffect } from "packages/net/minecraft/world/effect/$MobEffect"
import { $MobEffectInstance$FactorData } from "packages/net/minecraft/world/effect/$MobEffectInstance$FactorData"

export class $ClientboundUpdateMobEffectPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, mobEffectInstance1: $MobEffectInstance$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "effectShowsIcon"(): boolean
public "getEffect"(): $MobEffect
public "getEffectAmplifier"(): byte
public "getEffectDurationTicks"(): integer
public "getEntityId"(): integer
public "getFactorData"(): $MobEffectInstance$FactorData
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isEffectAmbient"(): boolean
public "isEffectVisible"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "effect"(): $MobEffect
get "effectAmplifier"(): byte
get "effectDurationTicks"(): integer
get "entityId"(): integer
get "factorData"(): $MobEffectInstance$FactorData
get "effectAmbient"(): boolean
get "effectVisible"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundEntityTagQuery" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundEntityTagQuery implements $Packet<$ServerGamePacketListener> {
constructor(int0: integer, int1: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEntityId"(): integer
public "getTransactionId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "entityId"(): integer
get "transactionId"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundBlockUpdatePacket" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ClientboundBlockUpdatePacket implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type)
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "getBlockState"(): $BlockState
public "getPos"(): $BlockPos
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "blockState"(): $BlockState
get "pos"(): $BlockPos
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundMovePlayerPacket" {
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ServerboundMovePlayerPacket implements $Packet<$ServerGamePacketListener> {
public "getX"(double0: double): double
public "getXRot"(float0: float): float
public "getY"(double0: double): double
public "getYRot"(float0: float): float
public "getZ"(double0: double): double
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "hasPosition"(): boolean
public "hasRotation"(): boolean
public "isOnGround"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "onGround"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundResourcePackPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundResourcePackPacket implements $Packet<$ClientGamePacketListener> {
static readonly "MAX_HASH_LENGTH": integer

constructor(string0: string, string1: string, boolean2: boolean, component3: $Component$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getHash"(): string
public "getPrompt"(): $Component
public "getUrl"(): string
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isRequired"(): boolean
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "hash"(): string
get "prompt"(): $Component
get "url"(): string
get "required"(): boolean
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundBlockEventPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export class $ClientboundBlockEventPacket implements $Packet<$ClientGamePacketListener> {
constructor(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, int3: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getB0"(): integer
public "getB1"(): integer
public "getBlock"(): $Block
public "getPos"(): $BlockPos
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "b0"(): integer
get "b1"(): integer
get "block"(): $Block
get "pos"(): $BlockPos
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundDisconnectPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundDisconnectPacket implements $Packet<$ClientGamePacketListener> {
constructor(component0: $Component$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getReason"(): $Component
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "reason"(): $Component
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundClientCommandPacket$Action" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ServerboundClientCommandPacket$Action extends $Enum<$ServerboundClientCommandPacket$Action> {
static readonly "PERFORM_RESPAWN": $ServerboundClientCommandPacket$Action
static readonly "REQUEST_STATS": $ServerboundClientCommandPacket$Action

public static "valueOf"(string0: string): $ServerboundClientCommandPacket$Action
public static "values"(): $ServerboundClientCommandPacket$Action[]
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundSetTitlesAnimationPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"

export class $ClientboundSetTitlesAnimationPacket implements $Packet<$ClientGamePacketListener> {
constructor(int0: integer, int1: integer, int2: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getFadeIn"(): integer
public "getFadeOut"(): integer
public "getStay"(): integer
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "fadeIn"(): integer
get "fadeOut"(): integer
get "stay"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$VecDeltaCodec" {
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"

export class $VecDeltaCodec {
constructor()

public "decode"(long0: long, long1: long, long2: long): $Vec3
public "delta"(vec30: $Vec3$$Type): $Vec3
public "encodeX"(vec30: $Vec3$$Type): long
public "encodeY"(vec30: $Vec3$$Type): long
public "encodeZ"(vec30: $Vec3$$Type): long
public "setBase"(vec30: $Vec3$$Type): void
set "base"(value: $Vec3$$Type)
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundPlayerCommandPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerboundPlayerCommandPacket$Action, $ServerboundPlayerCommandPacket$Action$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerCommandPacket$Action"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ServerboundPlayerCommandPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(entity0: $Entity$$Type, action1: $ServerboundPlayerCommandPacket$Action$$Type, int2: integer)
constructor(entity0: $Entity$$Type, action1: $ServerboundPlayerCommandPacket$Action$$Type)

public "getAction"(): $ServerboundPlayerCommandPacket$Action
public "getData"(): integer
public "getId"(): integer
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "action"(): $ServerboundPlayerCommandPacket$Action
get "data"(): integer
get "id"(): integer
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ClientboundUpdateEnabledFeaturesPacket" {
import { $ClientGamePacketListener, $ClientGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClientboundUpdateEnabledFeaturesPacket extends $Record implements $Packet<$ClientGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(set0: $Set$$Type<$ResourceLocation$$Type>)

public "features"(): $Set<$ResourceLocation>
public "handle"(clientGamePacketListener0: $ClientGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundMoveVehiclePacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ServerboundMoveVehiclePacket implements $Packet<$ServerGamePacketListener> {
constructor(entity0: $Entity$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getX"(): double
public "getXRot"(): float
public "getY"(): double
public "getYRot"(): float
public "getZ"(): double
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "x"(): double
get "xRot"(): float
get "y"(): double
get "yRot"(): float
get "z"(): double
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundTeleportToEntityPacket" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $ServerboundTeleportToEntityPacket implements $Packet<$ServerGamePacketListener> {
constructor(uUID0: $UUID$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "getEntity"(serverLevel0: $ServerLevel$$Type): $Entity
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
}
}

declare module "packages/net/minecraft/network/protocol/game/$ServerboundInteractPacket" {
import { $ServerboundInteractPacket$Handler$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundInteractPacket$Handler"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $ServerGamePacketListener, $ServerGamePacketListener$$Type } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ServerboundInteractPacket implements $Packet<$ServerGamePacketListener> {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public static "createAttackPacket"(entity0: $Entity$$Type, boolean1: boolean): $ServerboundInteractPacket
public static "createInteractionPacket"(entity0: $Entity$$Type, boolean1: boolean, interactionHand2: $InteractionHand$$Type): $ServerboundInteractPacket
public static "createInteractionPacket"(entity0: $Entity$$Type, boolean1: boolean, interactionHand2: $InteractionHand$$Type, vec33: $Vec3$$Type): $ServerboundInteractPacket
public "dispatch"(handler0: $ServerboundInteractPacket$Handler$$Type): void
public "getTarget"(serverLevel0: $ServerLevel$$Type): $Entity
public "handle"(serverGamePacketListener0: $ServerGamePacketListener$$Type): void
public "isSkippable"(): boolean
public "isUsingSecondaryAction"(): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "skippable"(): boolean
get "usingSecondaryAction"(): boolean
}
}

