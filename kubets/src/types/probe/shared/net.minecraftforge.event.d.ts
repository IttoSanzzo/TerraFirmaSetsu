declare module "packages/net/minecraftforge/event/$LootTableLoadEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LootTable, $LootTable$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootTable"

export class $LootTableLoadEvent extends $Event {
constructor()
constructor(resourceLocation0: $ResourceLocation$$Type, lootTable1: $LootTable$$Type)

public "getName"(): $ResourceLocation
public "getTable"(): $LootTable
public "setTable"(lootTable0: $LootTable$$Type): void
get "name"(): $ResourceLocation
get "table"(): $LootTable
set "table"(value: $LootTable$$Type)
}
}

declare module "packages/net/minecraftforge/event/$TickEvent$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TickEvent$Type extends $Enum<$TickEvent$Type> {
static readonly "CLIENT": $TickEvent$Type
static readonly "LEVEL": $TickEvent$Type
static readonly "PLAYER": $TickEvent$Type
static readonly "RENDER": $TickEvent$Type
static readonly "SERVER": $TickEvent$Type

public static "valueOf"(string0: string): $TickEvent$Type
public static "values"(): $TickEvent$Type[]
}
}

declare module "packages/net/minecraftforge/event/$ModMismatchEvent$MismatchedVersionInfo" {
import { $Record } from "packages/java/lang/$Record"
import { $ArtifactVersion, $ArtifactVersion$$Type } from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"

export class $ModMismatchEvent$MismatchedVersionInfo extends $Record {
constructor(oldVersion: $ArtifactVersion$$Type, newVersion: $ArtifactVersion$$Type)

public "isMissing"(): boolean
public "newVersion"(): $ArtifactVersion
public "oldVersion"(): $ArtifactVersion
public "wasUpgrade"(): boolean
get "missing"(): boolean
}
}

declare module "packages/net/minecraftforge/event/$ModMismatchEvent$MismatchResolutionResult" {
import { $ModContainer, $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $Record } from "packages/java/lang/$Record"
import { $ModMismatchEvent$MismatchedVersionInfo, $ModMismatchEvent$MismatchedVersionInfo$$Type } from "packages/net/minecraftforge/event/$ModMismatchEvent$MismatchedVersionInfo"

export class $ModMismatchEvent$MismatchResolutionResult extends $Record {
constructor(modid: string, versionDifference: $ModMismatchEvent$MismatchedVersionInfo$$Type, resolver: $ModContainer$$Type)

public "modid"(): string
public "resolver"(): $ModContainer
public "versionDifference"(): $ModMismatchEvent$MismatchedVersionInfo
public "wasSelfResolved"(): boolean
}
}

declare module "packages/net/minecraftforge/event/$ModMismatchEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ModContainer } from "packages/net/minecraftforge/fml/$ModContainer"
import { $ArtifactVersion, $ArtifactVersion$$Type } from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $LevelStorageSource$LevelDirectory, $LevelStorageSource$LevelDirectory$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelDirectory"
import { $ModMismatchEvent$MismatchResolutionResult } from "packages/net/minecraftforge/event/$ModMismatchEvent$MismatchResolutionResult"
import { $ModMismatchEvent$MismatchedVersionInfo } from "packages/net/minecraftforge/event/$ModMismatchEvent$MismatchedVersionInfo"
import { $Map$$Type } from "packages/java/util/$Map"

export class $ModMismatchEvent extends $Event implements $IModBusEvent {
constructor()
constructor(levelDirectory0: $LevelStorageSource$LevelDirectory$$Type, map1: $Map$$Type<string, $ArtifactVersion$$Type>, map2: $Map$$Type<string, $ArtifactVersion$$Type>)

public "anyResolved"(): boolean
public "anyUnresolved"(): boolean
public "getCurrentVersion"(string0: string): $ArtifactVersion
public "getLevelDirectory"(): $LevelStorageSource$LevelDirectory
public "getPreviousVersion"(string0: string): $ArtifactVersion
public "getResolved"(): $Stream<$ModMismatchEvent$MismatchResolutionResult>
public "getResolver"(string0: string): $Optional<$ModContainer>
public "getUnresolved"(): $Stream<$ModMismatchEvent$MismatchResolutionResult>
public "getVersionDifference"(string0: string): $Optional<$ModMismatchEvent$MismatchedVersionInfo>
public "markResolved"(string0: string): void
public "wasResolved"(string0: string): boolean
get "levelDirectory"(): $LevelStorageSource$LevelDirectory
get "resolved"(): $Stream<$ModMismatchEvent$MismatchResolutionResult>
get "unresolved"(): $Stream<$ModMismatchEvent$MismatchResolutionResult>
}
}

declare module "packages/net/minecraftforge/event/$PlayLevelSoundEvent$AtEntity" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $PlayLevelSoundEvent } from "packages/net/minecraftforge/event/$PlayLevelSoundEvent"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $PlayLevelSoundEvent$AtEntity extends $PlayLevelSoundEvent {
constructor()
constructor(entity0: $Entity$$Type, holder1: $Holder$$Type<$SoundEvent$$Type>, soundSource2: $SoundSource$$Type, float3: float, float4: float)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
}

declare module "packages/net/minecraftforge/event/$ItemAttributeModifierEvent" {
import { $Multimap, $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Collection } from "packages/java/util/$Collection"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier, $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemAttributeModifierEvent extends $Event {
constructor(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, multimap2: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>)
constructor()

public "addModifier"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type): boolean
public "clearModifiers"(): void
public "getItemStack"(): $ItemStack
public "getModifiers"(): $Multimap<$Attribute, $AttributeModifier>
public "getOriginalModifiers"(): $Multimap<$Attribute, $AttributeModifier>
public "getSlotType"(): $EquipmentSlot
public "removeAttribute"(attribute0: $Attribute$$Type): $Collection<$AttributeModifier>
public "removeModifier"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type): boolean
get "itemStack"(): $ItemStack
get "modifiers"(): $Multimap<$Attribute, $AttributeModifier>
get "originalModifiers"(): $Multimap<$Attribute, $AttributeModifier>
get "slotType"(): $EquipmentSlot
}
}

declare module "packages/net/minecraftforge/event/$CommandEvent" {
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $ParseResults, $ParseResults$$Type } from "packages/com/mojang/brigadier/$ParseResults"

export class $CommandEvent extends $Event {
constructor()
constructor(parseResults0: $ParseResults$$Type<$CommandSourceStack$$Type>)

public "getException"(): $Throwable
public "getParseResults"(): $ParseResults<$CommandSourceStack>
public "setException"(throwable0: $Throwable$$Type): void
public "setParseResults"(parseResults0: $ParseResults$$Type<$CommandSourceStack$$Type>): void
get "exception"(): $Throwable
get "parseResults"(): $ParseResults<$CommandSourceStack>
set "exception"(value: $Throwable$$Type)
set "parseResults"(value: $ParseResults$$Type<$CommandSourceStack$$Type>)
}
}

declare module "packages/net/minecraftforge/event/$AnvilUpdateEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $AnvilUpdateEvent extends $Event {
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, string2: string, int3: integer, player4: $Player$$Type)
constructor()

public "getCost"(): integer
public "getLeft"(): $ItemStack
public "getMaterialCost"(): integer
public "getName"(): string
public "getOutput"(): $ItemStack
public "getPlayer"(): $Player
public "getRight"(): $ItemStack
public "setCost"(int0: integer): void
public "setMaterialCost"(int0: integer): void
public "setOutput"(itemStack0: $ItemStack$$Type): void
get "cost"(): integer
get "left"(): $ItemStack
get "materialCost"(): integer
get "name"(): string
get "output"(): $ItemStack
get "player"(): $Player
get "right"(): $ItemStack
set "cost"(value: integer)
set "materialCost"(value: integer)
set "output"(value: $ItemStack$$Type)
}
}

declare module "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $CreativeModeTab$TabVisibility, $CreativeModeTab$TabVisibility$$Type } from "packages/net/minecraft/world/item/$CreativeModeTab$TabVisibility"
import { $CreativeModeTab, $CreativeModeTab$$Type } from "packages/net/minecraft/world/item/$CreativeModeTab"
import { $CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type } from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $CreativeModeTab$Output } from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ItemLike, $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $MutableHashedLinkedMap, $MutableHashedLinkedMap$$Type } from "packages/net/minecraftforge/common/util/$MutableHashedLinkedMap"

export class $BuildCreativeModeTabContentsEvent extends $Event implements $IModBusEvent, $CreativeModeTab$Output {
constructor()
constructor(creativeModeTab0: $CreativeModeTab$$Type, resourceKey1: $ResourceKey$$Type<$CreativeModeTab>, itemDisplayParameters2: $CreativeModeTab$ItemDisplayParameters$$Type, mutableHashedLinkedMap3: $MutableHashedLinkedMap$$Type<$ItemStack$$Type, $CreativeModeTab$TabVisibility$$Type>)

public "accept"(supplier0: $Supplier$$Type<$ItemLike>): void
public "accept"(supplier0: $Supplier$$Type<$ItemLike>, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(itemStack0: $ItemStack$$Type, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(itemLike0: $ItemLike$$Type, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(itemLike0: $ItemLike$$Type): void
public "accept"(itemStack0: $ItemStack$$Type): void
public "acceptAll"(collection0: $Collection$$Type<$ItemStack$$Type>, tabVisibility1: $CreativeModeTab$TabVisibility$$Type): void
public "acceptAll"(collection0: $Collection$$Type<$ItemStack$$Type>): void
public "getEntries"(): $MutableHashedLinkedMap<$ItemStack, $CreativeModeTab$TabVisibility>
public "getFlags"(): $FeatureFlagSet
public "getParameters"(): $CreativeModeTab$ItemDisplayParameters
public "getTab"(): $CreativeModeTab
public "getTabKey"(): $ResourceKey<$CreativeModeTab>
public "hasPermissions"(): boolean
get "entries"(): $MutableHashedLinkedMap<$ItemStack, $CreativeModeTab$TabVisibility>
get "flags"(): $FeatureFlagSet
get "parameters"(): $CreativeModeTab$ItemDisplayParameters
get "tab"(): $CreativeModeTab
get "tabKey"(): $ResourceKey<$CreativeModeTab>
}
}

declare module "packages/net/minecraftforge/event/$RegisterStructureConversionsEvent" {
import { $StructuresBecomeConfiguredFix$Conversion$$Type } from "packages/net/minecraft/util/datafix/fixes/$StructuresBecomeConfiguredFix$Conversion"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Map$$Type } from "packages/java/util/$Map"

export class $RegisterStructureConversionsEvent extends $Event {
constructor()
constructor(map0: $Map$$Type<string, $StructuresBecomeConfiguredFix$Conversion$$Type>)

public "register"(string0: string, conversion1: $StructuresBecomeConfiguredFix$Conversion$$Type): void
}
}

declare module "packages/net/minecraftforge/event/$TickEvent$LevelTickEvent" {
import { $BooleanSupplier$$Type } from "packages/java/util/function/$BooleanSupplier"
import { $TickEvent$Phase$$Type } from "packages/net/minecraftforge/event/$TickEvent$Phase"
import { $TickEvent } from "packages/net/minecraftforge/event/$TickEvent"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $LogicalSide$$Type } from "packages/net/minecraftforge/fml/$LogicalSide"

export class $TickEvent$LevelTickEvent extends $TickEvent {
readonly "level": $Level

constructor()
constructor(logicalSide0: $LogicalSide$$Type, phase1: $TickEvent$Phase$$Type, level2: $Level$$Type, booleanSupplier3: $BooleanSupplier$$Type)

public "haveTime"(): boolean
}
}

declare module "packages/net/minecraftforge/event/$GrindstoneEvent$OnPlaceItem" {
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $GrindstoneEvent } from "packages/net/minecraftforge/event/$GrindstoneEvent"

export class $GrindstoneEvent$OnPlaceItem extends $GrindstoneEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, int2: integer)

public "getOutput"(): $ItemStack
public "setOutput"(itemStack0: $ItemStack$$Type): void
get "output"(): $ItemStack
set "output"(value: $ItemStack$$Type)
}
}

declare module "packages/net/minecraftforge/event/$TickEvent$PlayerTickEvent" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $TickEvent$Phase$$Type } from "packages/net/minecraftforge/event/$TickEvent$Phase"
import { $TickEvent } from "packages/net/minecraftforge/event/$TickEvent"

export class $TickEvent$PlayerTickEvent extends $TickEvent {
readonly "player": $Player

constructor(phase0: $TickEvent$Phase$$Type, player1: $Player$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/event/$TickEvent$ClientTickEvent" {
import { $TickEvent$Phase$$Type } from "packages/net/minecraftforge/event/$TickEvent$Phase"
import { $TickEvent } from "packages/net/minecraftforge/event/$TickEvent"

export class $TickEvent$ClientTickEvent extends $TickEvent {
constructor(phase0: $TickEvent$Phase$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/event/$ServerChatEvent" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"

export class $ServerChatEvent extends $Event {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, string1: string, component2: $Component$$Type)

public "getMessage"(): $Component
public "getPlayer"(): $ServerPlayer
public "getRawText"(): string
public "getUsername"(): string
public "setMessage"(component0: $Component$$Type): void
get "message"(): $Component
get "player"(): $ServerPlayer
get "rawText"(): string
get "username"(): string
set "message"(value: $Component$$Type)
}
}

declare module "packages/net/minecraftforge/event/$VanillaGameEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $GameEvent, $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $GameEvent$Context, $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $VanillaGameEvent extends $Event {
constructor(level0: $Level$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type, context3: $GameEvent$Context$$Type)
constructor()

public "getCause"(): $Entity
public "getContext"(): $GameEvent$Context
public "getEventPosition"(): $Vec3
public "getLevel"(): $Level
public "getVanillaEvent"(): $GameEvent
get "cause"(): $Entity
get "context"(): $GameEvent$Context
get "eventPosition"(): $Vec3
get "level"(): $Level
get "vanillaEvent"(): $GameEvent
}
}

declare module "packages/net/minecraftforge/event/$TagsUpdatedEvent$UpdateCause" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TagsUpdatedEvent$UpdateCause extends $Enum<$TagsUpdatedEvent$UpdateCause> {
static readonly "CLIENT_PACKET_RECEIVED": $TagsUpdatedEvent$UpdateCause
static readonly "SERVER_DATA_LOAD": $TagsUpdatedEvent$UpdateCause

public static "valueOf"(string0: string): $TagsUpdatedEvent$UpdateCause
public static "values"(): $TagsUpdatedEvent$UpdateCause[]
}
}

declare module "packages/net/minecraftforge/event/$TickEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $TickEvent$Phase, $TickEvent$Phase$$Type } from "packages/net/minecraftforge/event/$TickEvent$Phase"
import { $LogicalSide, $LogicalSide$$Type } from "packages/net/minecraftforge/fml/$LogicalSide"
import { $TickEvent$Type, $TickEvent$Type$$Type } from "packages/net/minecraftforge/event/$TickEvent$Type"

export class $TickEvent extends $Event {
readonly "phase": $TickEvent$Phase
readonly "side": $LogicalSide
readonly "type": $TickEvent$Type

constructor()
constructor(type0: $TickEvent$Type$$Type, logicalSide1: $LogicalSide$$Type, phase2: $TickEvent$Phase$$Type)

}
}

declare module "packages/net/minecraftforge/event/$RegisterCommandsEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $CommandBuildContext, $CommandBuildContext$$Type } from "packages/net/minecraft/commands/$CommandBuildContext"
import { $Commands$CommandSelection, $Commands$CommandSelection$$Type } from "packages/net/minecraft/commands/$Commands$CommandSelection"
import { $CommandDispatcher, $CommandDispatcher$$Type } from "packages/com/mojang/brigadier/$CommandDispatcher"

export class $RegisterCommandsEvent extends $Event {
constructor(commandDispatcher0: $CommandDispatcher$$Type<$CommandSourceStack$$Type>, commandSelection1: $Commands$CommandSelection$$Type, commandBuildContext2: $CommandBuildContext$$Type)
constructor()

public "getBuildContext"(): $CommandBuildContext
public "getCommandSelection"(): $Commands$CommandSelection
public "getDispatcher"(): $CommandDispatcher<$CommandSourceStack>
get "buildContext"(): $CommandBuildContext
get "commandSelection"(): $Commands$CommandSelection
get "dispatcher"(): $CommandDispatcher<$CommandSourceStack>
}
}

declare module "packages/net/minecraftforge/event/$ItemStackedOnOtherEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $SlotAccess, $SlotAccess$$Type } from "packages/net/minecraft/world/entity/$SlotAccess"
import { $Slot, $Slot$$Type } from "packages/net/minecraft/world/inventory/$Slot"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ClickAction, $ClickAction$$Type } from "packages/net/minecraft/world/inventory/$ClickAction"

export class $ItemStackedOnOtherEvent extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, slot2: $Slot$$Type, clickAction3: $ClickAction$$Type, player4: $Player$$Type, slotAccess5: $SlotAccess$$Type)

public "getCarriedItem"(): $ItemStack
public "getCarriedSlotAccess"(): $SlotAccess
public "getClickAction"(): $ClickAction
public "getPlayer"(): $Player
public "getSlot"(): $Slot
public "getStackedOnItem"(): $ItemStack
get "carriedItem"(): $ItemStack
get "carriedSlotAccess"(): $SlotAccess
get "clickAction"(): $ClickAction
get "player"(): $Player
get "slot"(): $Slot
get "stackedOnItem"(): $ItemStack
}
}

declare module "packages/net/minecraftforge/event/$PlayLevelSoundEvent$AtPosition" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $PlayLevelSoundEvent } from "packages/net/minecraftforge/event/$PlayLevelSoundEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"

export class $PlayLevelSoundEvent$AtPosition extends $PlayLevelSoundEvent {
constructor()
constructor(level0: $Level$$Type, vec31: $Vec3$$Type, holder2: $Holder$$Type<$SoundEvent$$Type>, soundSource3: $SoundSource$$Type, float4: float, float5: float)

public "getPosition"(): $Vec3
get "position"(): $Vec3
}
}

declare module "packages/net/minecraftforge/event/$RegisterGameTestsEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Set$$Type } from "packages/java/util/$Set"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Method$$Type } from "packages/java/lang/reflect/$Method"

export class $RegisterGameTestsEvent extends $Event implements $IModBusEvent {
constructor()
constructor(set0: $Set$$Type<$Method$$Type>)

public "register"(method0: $Method$$Type): void
public "register"(class0: $Class$$Type<any>): void
}
}

declare module "packages/net/minecraftforge/event/$GrindstoneEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export class $GrindstoneEvent extends $Event {
constructor()

public "getBottomItem"(): $ItemStack
public "getTopItem"(): $ItemStack
public "getXp"(): integer
public "setXp"(int0: integer): void
get "bottomItem"(): $ItemStack
get "topItem"(): $ItemStack
get "xp"(): integer
set "xp"(value: integer)
}
}

declare module "packages/net/minecraftforge/event/$AddPackFindersEvent" {
import { $PackType, $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $RepositorySource$$Type } from "packages/net/minecraft/server/packs/repository/$RepositorySource"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"

export class $AddPackFindersEvent extends $Event implements $IModBusEvent {
constructor()
constructor(packType0: $PackType$$Type, consumer1: $Consumer$$Type<$RepositorySource$$Type>)

public "addRepositorySource"(repositorySource0: $RepositorySource$$Type): void
public "getPackType"(): $PackType
get "packType"(): $PackType
}
}

declare module "packages/net/minecraftforge/event/$GrindstoneEvent$OnTakeItem" {
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $GrindstoneEvent } from "packages/net/minecraftforge/event/$GrindstoneEvent"

export class $GrindstoneEvent$OnTakeItem extends $GrindstoneEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, int2: integer)

public "getNewBottomItem"(): $ItemStack
public "getNewTopItem"(): $ItemStack
public "setNewBottomItem"(itemStack0: $ItemStack$$Type): void
public "setNewTopItem"(itemStack0: $ItemStack$$Type): void
get "newBottomItem"(): $ItemStack
get "newTopItem"(): $ItemStack
set "newBottomItem"(value: $ItemStack$$Type)
set "newTopItem"(value: $ItemStack$$Type)
}
}

declare module "packages/net/minecraftforge/event/$TickEvent$Phase" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TickEvent$Phase extends $Enum<$TickEvent$Phase> {
static readonly "END": $TickEvent$Phase
static readonly "START": $TickEvent$Phase

public static "valueOf"(string0: string): $TickEvent$Phase
public static "values"(): $TickEvent$Phase[]
}
}

declare module "packages/net/minecraftforge/event/$OnDatapackSyncEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $List } from "packages/java/util/$List"
import { $PlayerList, $PlayerList$$Type } from "packages/net/minecraft/server/players/$PlayerList"

export class $OnDatapackSyncEvent extends $Event {
constructor()
constructor(playerList0: $PlayerList$$Type, serverPlayer1: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
public "getPlayerList"(): $PlayerList
public "getPlayers"(): $List<$ServerPlayer>
get "player"(): $ServerPlayer
get "playerList"(): $PlayerList
get "players"(): $List<$ServerPlayer>
}
}

declare module "packages/net/minecraftforge/event/$PlayLevelSoundEvent" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $SoundSource, $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"

export class $PlayLevelSoundEvent extends $Event {
constructor()
constructor(level0: $Level$$Type, holder1: $Holder$$Type<$SoundEvent$$Type>, soundSource2: $SoundSource$$Type, float3: float, float4: float)

public "getLevel"(): $Level
public "getNewPitch"(): float
public "getNewVolume"(): float
public "getOriginalPitch"(): float
public "getOriginalVolume"(): float
public "getSound"(): $Holder<$SoundEvent>
public "getSource"(): $SoundSource
public "setNewPitch"(float0: float): void
public "setNewVolume"(float0: float): void
public "setSound"(holder0: $Holder$$Type<$SoundEvent$$Type>): void
public "setSource"(soundSource0: $SoundSource$$Type): void
get "level"(): $Level
get "newPitch"(): float
get "newVolume"(): float
get "originalPitch"(): float
get "originalVolume"(): float
get "sound"(): $Holder<$SoundEvent>
get "source"(): $SoundSource
set "newPitch"(value: float)
set "newVolume"(value: float)
set "sound"(value: $Holder$$Type<$SoundEvent$$Type>)
set "source"(value: $SoundSource$$Type)
}
}

declare module "packages/net/minecraftforge/event/$GameShuttingDownEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $GameShuttingDownEvent extends $Event {
constructor()

}
}

declare module "packages/net/minecraftforge/event/$TagsUpdatedEvent" {
import { $RegistryAccess, $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $TagsUpdatedEvent$UpdateCause } from "packages/net/minecraftforge/event/$TagsUpdatedEvent$UpdateCause"

export class $TagsUpdatedEvent extends $Event {
constructor()
constructor(registryAccess0: $RegistryAccess$$Type, boolean1: boolean, boolean2: boolean)

public "getRegistryAccess"(): $RegistryAccess
public "getUpdateCause"(): $TagsUpdatedEvent$UpdateCause
public "shouldUpdateStaticData"(): boolean
get "registryAccess"(): $RegistryAccess
get "updateCause"(): $TagsUpdatedEvent$UpdateCause
}
}

declare module "packages/net/minecraftforge/event/$TickEvent$RenderTickEvent" {
import { $TickEvent$Phase$$Type } from "packages/net/minecraftforge/event/$TickEvent$Phase"
import { $TickEvent } from "packages/net/minecraftforge/event/$TickEvent"

export class $TickEvent$RenderTickEvent extends $TickEvent {
readonly "renderTickTime": float

constructor(phase0: $TickEvent$Phase$$Type, float1: float)
constructor()

}
}

declare module "packages/net/minecraftforge/event/$TickEvent$ServerTickEvent" {
import { $BooleanSupplier$$Type } from "packages/java/util/function/$BooleanSupplier"
import { $TickEvent$Phase$$Type } from "packages/net/minecraftforge/event/$TickEvent$Phase"
import { $TickEvent } from "packages/net/minecraftforge/event/$TickEvent"
import { $MinecraftServer, $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"

export class $TickEvent$ServerTickEvent extends $TickEvent {
constructor()
constructor(phase0: $TickEvent$Phase$$Type, booleanSupplier1: $BooleanSupplier$$Type, minecraftServer2: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
public "haveTime"(): boolean
get "server"(): $MinecraftServer
}
}

declare module "packages/net/minecraftforge/event/$AddReloadListenerEvent" {
import { $RegistryAccess, $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $PreparableReloadListener, $PreparableReloadListener$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $List } from "packages/java/util/$List"
import { $ICondition$IContext } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $ReloadableServerResources, $ReloadableServerResources$$Type } from "packages/net/minecraft/server/$ReloadableServerResources"

export class $AddReloadListenerEvent extends $Event {
constructor()
constructor(reloadableServerResources0: $ReloadableServerResources$$Type, registryAccess1: $RegistryAccess$$Type)

public "addListener"(preparableReloadListener0: $PreparableReloadListener$$Type): void
public "getConditionContext"(): $ICondition$IContext
public "getListeners"(): $List<$PreparableReloadListener>
public "getRegistryAccess"(): $RegistryAccess
public "getServerResources"(): $ReloadableServerResources
get "conditionContext"(): $ICondition$IContext
get "listeners"(): $List<$PreparableReloadListener>
get "registryAccess"(): $RegistryAccess
get "serverResources"(): $ReloadableServerResources
}
}

declare module "packages/net/minecraftforge/event/$DifficultyChangeEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Difficulty, $Difficulty$$Type } from "packages/net/minecraft/world/$Difficulty"

export class $DifficultyChangeEvent extends $Event {
constructor(difficulty0: $Difficulty$$Type, difficulty1: $Difficulty$$Type)
constructor()

public "getDifficulty"(): $Difficulty
public "getOldDifficulty"(): $Difficulty
get "difficulty"(): $Difficulty
get "oldDifficulty"(): $Difficulty
}
}

