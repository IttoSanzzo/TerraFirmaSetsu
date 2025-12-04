declare module "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IDamageProvider" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $LivingUpgrade$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade"
import { $LivingStats$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingStats"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $LivingUpgrade$IDamageProvider {
"getAdditionalDamage"(player0: $Player$$Type, itemStack1: $ItemStack$$Type, double2: double, livingStats3: $LivingStats$$Type, livingEntity4: $LivingEntity$$Type, livingUpgrade5: $LivingUpgrade$$Type, int6: integer): double
}

export namespace $LivingUpgrade$IDamageProvider {
const probejs$$marker: never
}
export abstract class $LivingUpgrade$IDamageProvider$$Static implements $LivingUpgrade$IDamageProvider {
}
}

declare module "packages/wayoftime/bloodmagic/event/$SoulNetworkEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $SoulNetwork, $SoulNetwork$$Type } from "packages/wayoftime/bloodmagic/core/data/$SoulNetwork"
import { $SoulTicket, $SoulTicket$$Type } from "packages/wayoftime/bloodmagic/core/data/$SoulTicket"

export class $SoulNetworkEvent extends $Event {
constructor()
constructor(soulNetwork0: $SoulNetwork$$Type, soulTicket1: $SoulTicket$$Type)

public "getNetwork"(): $SoulNetwork
public "getTicket"(): $SoulTicket
public "setTicket"(soulTicket0: $SoulTicket$$Type): void
get "network"(): $SoulNetwork
get "ticket"(): $SoulTicket
set "ticket"(value: $SoulTicket$$Type)
}
}

declare module "packages/wayoftime/bloodmagic/ritual/$Ritual$BreakType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Ritual$BreakType extends $Enum<$Ritual$BreakType> {
static readonly "ACTIVATE": $Ritual$BreakType
static readonly "BREAK_MRS": $Ritual$BreakType
static readonly "BREAK_STONE": $Ritual$BreakType
static readonly "DEACTIVATE": $Ritual$BreakType
static readonly "EXPLOSION": $Ritual$BreakType
static readonly "REDSTONE": $Ritual$BreakType

public static "valueOf"(string0: string): $Ritual$BreakType
public static "values"(): $Ritual$BreakType[]
}
}

declare module "packages/wayoftime/bloodmagic/event/$SoulNetworkEvent$Syphon$User" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $SoulNetworkEvent$Syphon } from "packages/wayoftime/bloodmagic/event/$SoulNetworkEvent$Syphon"
import { $SoulNetwork$$Type } from "packages/wayoftime/bloodmagic/core/data/$SoulNetwork"
import { $SoulTicket$$Type } from "packages/wayoftime/bloodmagic/core/data/$SoulTicket"

export class $SoulNetworkEvent$Syphon$User extends $SoulNetworkEvent$Syphon {
constructor()
constructor(soulNetwork0: $SoulNetwork$$Type, soulTicket1: $SoulTicket$$Type, player2: $Player$$Type)

public "getUser"(): $Player
get "user"(): $Player
}
}

declare module "packages/wayoftime/bloodmagic/ritual/$IMasterRitualStone" {
import { $UUID } from "packages/java/util/$UUID"
import { $EnumReaderBoundaries } from "packages/wayoftime/bloodmagic/ritual/$EnumReaderBoundaries"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $AreaDescriptor, $AreaDescriptor$$Type } from "packages/wayoftime/bloodmagic/ritual/$AreaDescriptor"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Ritual, $Ritual$$Type } from "packages/wayoftime/bloodmagic/ritual/$Ritual"
import { $Ritual$BreakType$$Type } from "packages/wayoftime/bloodmagic/ritual/$Ritual$BreakType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $SoulNetwork } from "packages/wayoftime/bloodmagic/core/data/$SoulNetwork"
import { $SoulTicket } from "packages/wayoftime/bloodmagic/core/data/$SoulTicket"
import { $EnumDemonWillType, $EnumDemonWillType$$Type } from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $IMasterRitualStone {
"activateRitual"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, ritual2: $Ritual$$Type): boolean
"addBlockRange"(string0: string, areaDescriptor1: $AreaDescriptor$$Type): void
"addBlockRanges"(map0: $Map$$Type<string, $AreaDescriptor$$Type>): void
"areTanksEmpty"(): boolean
"getActiveWillConfig"(): $List<$EnumDemonWillType>
"getBlockRange"(string0: string): $AreaDescriptor
"getCooldown"(): integer
"getCurrentRitual"(): $Ritual
"getDirection"(): $Direction
"getMasterBlockPos"(): $BlockPos
"getNextBlockRange"(string0: string): string
"getOwner"(): $UUID
"getOwnerNetwork"(): $SoulNetwork
"getRunningTime"(): integer
"getWorldObj"(): $Level
"isActive"(): boolean
"performRitual"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
"provideInformationOfRangeToPlayer"(player0: $Player$$Type, string1: string): void
"provideInformationOfRitualToPlayer"(player0: $Player$$Type): void
"provideInformationOfWillConfigToPlayer"(player0: $Player$$Type, list1: $List$$Type<$EnumDemonWillType$$Type>): void
"setActive"(boolean0: boolean): void
"setActiveWillConfig"(player0: $Player$$Type, list1: $List$$Type<$EnumDemonWillType$$Type>): void
"setBlockRange"(string0: string, areaDescriptor1: $AreaDescriptor$$Type): void
"setBlockRangeByBounds"(player0: $Player$$Type, string1: string, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): $EnumReaderBoundaries
"setBlockRanges"(map0: $Map$$Type<string, $AreaDescriptor$$Type>): void
"setCooldown"(int0: integer): void
"stopRitual"(breakType0: $Ritual$BreakType$$Type): void
"ticket"(int0: integer): $SoulTicket
get "activeWillConfig"(): $List<$EnumDemonWillType>
get "cooldown"(): integer
get "currentRitual"(): $Ritual
get "direction"(): $Direction
get "masterBlockPos"(): $BlockPos
get "owner"(): $UUID
get "ownerNetwork"(): $SoulNetwork
get "runningTime"(): integer
get "worldObj"(): $Level
get "active"(): boolean
set "active"(value: boolean)
set "blockRanges"(value: $Map$$Type<string, $AreaDescriptor$$Type>)
set "cooldown"(value: integer)
}

export namespace $IMasterRitualStone {
const probejs$$marker: never
}
export abstract class $IMasterRitualStone$$Static implements $IMasterRitualStone {
}
}

declare module "packages/wayoftime/bloodmagic/event/$RitualEvent$RitualStopEvent" {
import { $Ritual$BreakType, $Ritual$BreakType$$Type } from "packages/wayoftime/bloodmagic/ritual/$Ritual$BreakType"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $RitualEvent } from "packages/wayoftime/bloodmagic/event/$RitualEvent"
import { $IMasterRitualStone$$Type } from "packages/wayoftime/bloodmagic/ritual/$IMasterRitualStone"
import { $Ritual$$Type } from "packages/wayoftime/bloodmagic/ritual/$Ritual"

export class $RitualEvent$RitualStopEvent extends $RitualEvent {
constructor()
constructor(iMasterRitualStone0: $IMasterRitualStone$$Type, uUID1: $UUID$$Type, ritual2: $Ritual$$Type, breakType3: $Ritual$BreakType$$Type)

public "getMethod"(): $Ritual$BreakType
get "method"(): $Ritual$BreakType
}
}

declare module "packages/wayoftime/bloodmagic/ritual/$EnumReaderBoundaries" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $EnumReaderBoundaries extends $Enum<$EnumReaderBoundaries> implements $StringRepresentable {
static readonly "NOT_WITHIN_BOUNDARIES": $EnumReaderBoundaries
static readonly "SUCCESS": $EnumReaderBoundaries
static readonly "VOLUME_TOO_LARGE": $EnumReaderBoundaries

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $EnumReaderBoundaries
public static "values"(): $EnumReaderBoundaries[]
get "serializedName"(): string
}
}

declare module "packages/wayoftime/bloodmagic/api/event/$BloodMagicCraftedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $BloodMagicCraftedEvent extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1s: $ItemStack$$Type[], boolean2: boolean)

public "getInputs"(): $ItemStack[]
public "getOutput"(): $ItemStack
public "isModifiable"(): boolean
public "setOutput"(itemStack0: $ItemStack$$Type): void
get "inputs"(): $ItemStack[]
get "output"(): $ItemStack
get "modifiable"(): boolean
set "output"(value: $ItemStack$$Type)
}
}

declare module "packages/wayoftime/bloodmagic/event/$SoulNetworkEvent$Syphon$Item" {
import { $SoulNetworkEvent$Syphon } from "packages/wayoftime/bloodmagic/event/$SoulNetworkEvent$Syphon"
import { $SoulNetwork$$Type } from "packages/wayoftime/bloodmagic/core/data/$SoulNetwork"
import { $SoulTicket$$Type } from "packages/wayoftime/bloodmagic/core/data/$SoulTicket"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $SoulNetworkEvent$Syphon$Item extends $SoulNetworkEvent$Syphon {
constructor()
constructor(soulNetwork0: $SoulNetwork$$Type, soulTicket1: $SoulTicket$$Type, itemStack2: $ItemStack$$Type)

public "getStack"(): $ItemStack
get "stack"(): $ItemStack
}
}

declare module "packages/wayoftime/bloodmagic/event/$LivingEquipmentEvent$LevelUp" {
import { $LivingEquipmentEvent } from "packages/wayoftime/bloodmagic/event/$LivingEquipmentEvent"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $LivingUpgrade, $LivingUpgrade$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade"
import { $LivingStats$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingStats"

export class $LivingEquipmentEvent$LevelUp extends $LivingEquipmentEvent {
constructor()
constructor(player0: $Player$$Type, livingStats1: $LivingStats$$Type, livingUpgrade2: $LivingUpgrade$$Type)

public "getUpgrade"(): $LivingUpgrade
get "upgrade"(): $LivingUpgrade
}
}

declare module "packages/wayoftime/bloodmagic/event/$RitualEvent$RitualActivatedEvent" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RitualEvent } from "packages/wayoftime/bloodmagic/event/$RitualEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IMasterRitualStone$$Type } from "packages/wayoftime/bloodmagic/ritual/$IMasterRitualStone"
import { $Ritual$$Type } from "packages/wayoftime/bloodmagic/ritual/$Ritual"

export class $RitualEvent$RitualActivatedEvent extends $RitualEvent {
constructor()
constructor(iMasterRitualStone0: $IMasterRitualStone$$Type, uUID1: $UUID$$Type, ritual2: $Ritual$$Type, player3: $Player$$Type, itemStack4: $ItemStack$$Type, int5: integer)

public "getCrystalStack"(): $ItemStack
public "getCrystalTier"(): integer
public "getPlayer"(): $Player
get "crystalStack"(): $ItemStack
get "crystalTier"(): integer
get "player"(): $Player
}
}

declare module "packages/wayoftime/bloodmagic/api/event/$BloodMagicCraftedEvent$SoulForge" {
import { $BloodMagicCraftedEvent } from "packages/wayoftime/bloodmagic/api/event/$BloodMagicCraftedEvent"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $BloodMagicCraftedEvent$SoulForge extends $BloodMagicCraftedEvent {
constructor(itemStack0: $ItemStack$$Type, itemStack1s: $ItemStack$$Type[])
constructor()

}
}

declare module "packages/wayoftime/bloodmagic/util/$BooleanResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BooleanResult<T> {
public "getValue"(): T
public "isSuccess"(): boolean
public static "newResult"<T>(boolean0: boolean, t1: T): $BooleanResult<T>
get "value"(): T
get "success"(): boolean
}
}

declare module "packages/wayoftime/bloodmagic/ritual/imperfect/$IImperfectRitualStone" {
import { $ImperfectRitual$$Type } from "packages/wayoftime/bloodmagic/ritual/imperfect/$ImperfectRitual"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $IImperfectRitualStone {
"getRitualPos"(): $BlockPos
"getRitualWorld"(): $Level
"performRitual"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, imperfectRitual2: $ImperfectRitual$$Type, player3: $Player$$Type): boolean
get "ritualPos"(): $BlockPos
get "ritualWorld"(): $Level
}

export namespace $IImperfectRitualStone {
const probejs$$marker: never
}
export abstract class $IImperfectRitualStone$$Static implements $IImperfectRitualStone {
}
}

declare module "packages/wayoftime/bloodmagic/ritual/$Ritual" {
import { $RitualComponent$$Type } from "packages/wayoftime/bloodmagic/ritual/$RitualComponent"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $EnumReaderBoundaries } from "packages/wayoftime/bloodmagic/ritual/$EnumReaderBoundaries"
import { $AreaDescriptor, $AreaDescriptor$$Type } from "packages/wayoftime/bloodmagic/ritual/$AreaDescriptor"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $DemonWillHolder$$Type } from "packages/wayoftime/bloodmagic/will/$DemonWillHolder"
import { $Ritual$BreakType$$Type } from "packages/wayoftime/bloodmagic/ritual/$Ritual$BreakType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $EnumDemonWillType$$Type } from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"
import { $RitualRenderer, $RitualRenderer$$Type } from "packages/wayoftime/bloodmagic/ritual/$RitualRenderer"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IMasterRitualStone$$Type } from "packages/wayoftime/bloodmagic/ritual/$IMasterRitualStone"
import { $Map } from "packages/java/util/$Map"

export class $Ritual {
constructor(string0: string, int1: integer, int2: integer, ritualRenderer3: $RitualRenderer$$Type, string4: string)
constructor(string0: string, int1: integer, int2: integer, string3: string)

public "activateRitual"(iMasterRitualStone0: $IMasterRitualStone$$Type, player1: $Player$$Type, uUID2: $UUID$$Type): boolean
public "addBlockRange"(string0: string, areaDescriptor1: $AreaDescriptor$$Type): void
public "canBlockRangeBeModified"(string0: string, areaDescriptor1: $AreaDescriptor$$Type, iMasterRitualStone2: $IMasterRitualStone$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type, demonWillHolder5: $DemonWillHolder$$Type): $EnumReaderBoundaries
public "gatherComponents"(consumer0: $Consumer$$Type<$RitualComponent$$Type>): void
public "getActivationCost"(): integer
public "getBlockRange"(string0: string): $AreaDescriptor
public "getCrystalLevel"(): integer
public "getErrorForBlockRangeOnFail"(player0: $Player$$Type, string1: string, iMasterRitualStone2: $IMasterRitualStone$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): $Component
public "getHorizontalRangeMap"(): $Map<string, integer>
public "getListOfRanges"(): $List<string>
public "getMaxHorizontalRadiusForRange"(string0: string, list1: $List$$Type<$EnumDemonWillType$$Type>, demonWillHolder2: $DemonWillHolder$$Type): integer
public "getMaxVerticalRadiusForRange"(string0: string, list1: $List$$Type<$EnumDemonWillType$$Type>, demonWillHolder2: $DemonWillHolder$$Type): integer
public "getMaxVolumeForRange"(string0: string, list1: $List$$Type<$EnumDemonWillType$$Type>, demonWillHolder2: $DemonWillHolder$$Type): integer
public "getModableRangeMap"(): $Map<string, $AreaDescriptor>
public "getName"(): string
public "getNewCopy"(): $Ritual
public "getNextBlockRange"(string0: string): string
public "getRefreshCost"(): integer
public "getRefreshTime"(): integer
public "getRenderer"(): $RitualRenderer
public "getTranslationKey"(): string
public "getVerticalRangeMap"(): $Map<string, integer>
public "getVolumeRangeMap"(): $Map<string, integer>
public "getWillRespectingConfig"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, enumDemonWillType2: $EnumDemonWillType$$Type, list3: $List$$Type<$EnumDemonWillType$$Type>): double
public "performRitual"(iMasterRitualStone0: $IMasterRitualStone$$Type): void
public "provideInformationOfRangeToPlayer"(player0: $Player$$Type, string1: string): $Component
public "provideInformationOfRitualToPlayer"(player0: $Player$$Type): $Component[]
public "readFromNBT"(compoundTag0: $CompoundTag$$Type): void
public "stopRitual"(iMasterRitualStone0: $IMasterRitualStone$$Type, breakType1: $Ritual$BreakType$$Type): void
public "writeToNBT"(compoundTag0: $CompoundTag$$Type): void
get "activationCost"(): integer
get "crystalLevel"(): integer
get "horizontalRangeMap"(): $Map<string, integer>
get "listOfRanges"(): $List<string>
get "modableRangeMap"(): $Map<string, $AreaDescriptor>
get "name"(): string
get "newCopy"(): $Ritual
get "refreshCost"(): integer
get "refreshTime"(): integer
get "renderer"(): $RitualRenderer
get "translationKey"(): string
get "verticalRangeMap"(): $Map<string, integer>
get "volumeRangeMap"(): $Map<string, integer>
}
}

declare module "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$Level" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LivingUpgrade$Level {
constructor(int0: integer, int1: integer)

}
}

declare module "packages/wayoftime/bloodmagic/event/$LivingEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $LivingEvent extends $Event {
constructor()

}
}

declare module "packages/wayoftime/bloodmagic/core/data/$SoulTicket" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $CommandSource$$Type } from "packages/net/minecraft/commands/$CommandSource"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $SoulTicket {
constructor(component0: $Component$$Type, int1: integer)
constructor(int0: integer)

public static "block"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer): $SoulTicket
public static "command"(commandSource0: $CommandSource$$Type, string1: string, int2: integer): $SoulTicket
public "getAmount"(): integer
public "getDescription"(): $Component
public "isSyphon"(): boolean
public static "item"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, entity2: $Entity$$Type, int3: integer): $SoulTicket
public static "item"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, int3: integer): $SoulTicket
public static "item"(itemStack0: $ItemStack$$Type, int1: integer): $SoulTicket
get "amount"(): integer
get "description"(): $Component
get "syphon"(): boolean
}
}

declare module "packages/wayoftime/bloodmagic/ritual/imperfect/$ImperfectRitual" {
import { $IImperfectRitualStone$$Type } from "packages/wayoftime/bloodmagic/ritual/imperfect/$IImperfectRitualStone"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $ImperfectRitual {
constructor(string0: string, predicate1: $Predicate$$Type<$BlockState$$Type>, int2: integer, boolean3: boolean, string4: string)
constructor(string0: string, predicate1: $Predicate$$Type<$BlockState$$Type>, int2: integer, string3: string)

public "getActivationCost"(): integer
public "getBlockRequirement"(): $Predicate<$BlockState>
public "getName"(): string
public "getTranslationKey"(): string
public "isLightShow"(): boolean
public "onActivate"(iImperfectRitualStone0: $IImperfectRitualStone$$Type, player1: $Player$$Type): boolean
get "activationCost"(): integer
get "blockRequirement"(): $Predicate<$BlockState>
get "name"(): string
get "translationKey"(): string
get "lightShow"(): boolean
}
}

declare module "packages/wayoftime/bloodmagic/event/$RitualEvent$ImperfectRitualActivatedEvent" {
import { $IImperfectRitualStone, $IImperfectRitualStone$$Type } from "packages/wayoftime/bloodmagic/ritual/imperfect/$IImperfectRitualStone"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ImperfectRitual, $ImperfectRitual$$Type } from "packages/wayoftime/bloodmagic/ritual/imperfect/$ImperfectRitual"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $RitualEvent$ImperfectRitualActivatedEvent extends $Event {
constructor()
constructor(iImperfectRitualStone0: $IImperfectRitualStone$$Type, player1: $Player$$Type, imperfectRitual2: $ImperfectRitual$$Type)

public "getActivator"(): $Player
public "getImperfectRitual"(): $ImperfectRitual
public "getRitualStone"(): $IImperfectRitualStone
get "activator"(): $Player
get "imperfectRitual"(): $ImperfectRitual
get "ritualStone"(): $IImperfectRitualStone
}
}

declare module "packages/wayoftime/bloodmagic/api/event/$BloodMagicCraftedEvent$Altar" {
import { $BloodMagicCraftedEvent } from "packages/wayoftime/bloodmagic/api/event/$BloodMagicCraftedEvent"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $BloodMagicCraftedEvent$Altar extends $BloodMagicCraftedEvent {
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type)
constructor()

}
}

declare module "packages/wayoftime/bloodmagic/api/event/$BloodMagicCraftedEvent$AlchemyTable" {
import { $BloodMagicCraftedEvent } from "packages/wayoftime/bloodmagic/api/event/$BloodMagicCraftedEvent"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $BloodMagicCraftedEvent$AlchemyTable extends $BloodMagicCraftedEvent {
constructor(itemStack0: $ItemStack$$Type, itemStack1s: $ItemStack$$Type[])
constructor()

}
}

declare module "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LivingUpgrade$IDamageProvider, $LivingUpgrade$IDamageProvider$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IDamageProvider"
import { $List$$Type } from "packages/java/util/$List"
import { $LivingUpgrade$IAttributeProvider, $LivingUpgrade$IAttributeProvider$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IAttributeProvider"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingUpgrade$IArmorProvider, $LivingUpgrade$IArmorProvider$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IArmorProvider"
import { $LivingUpgrade$Level$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$Level"

export class $LivingUpgrade {
static readonly "DUMMY": $LivingUpgrade

constructor(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$List$$Type<$LivingUpgrade$Level$$Type>>)

public "addIncompatibility"(resourceLocation0: $ResourceLocation$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $LivingUpgrade
public "asDowngrade"(): $LivingUpgrade
public "getArmorProvider"(): $LivingUpgrade$IArmorProvider
public "getAttributeProvider"(): $LivingUpgrade$IAttributeProvider
public "getBonusValue"(string0: string, int1: integer): number
public "getDamageProvider"(): $LivingUpgrade$IDamageProvider
public "getKey"(): $ResourceLocation
public "getLevel"(int0: integer): integer
public "getLevelCost"(int0: integer): integer
public "getLevelExp"(int0: integer): integer
public "getNextRequirement"(int0: integer): integer
public "getTranslationKey"(): string
public "isCompatible"(resourceLocation0: $ResourceLocation$$Type): boolean
public "isNegative"(): boolean
public "withArmorProvider"(iArmorProvider0: $LivingUpgrade$IArmorProvider$$Type): $LivingUpgrade
public "withAttributeProvider"(iAttributeProvider0: $LivingUpgrade$IAttributeProvider$$Type): $LivingUpgrade
public "withBonusSet"(string0: string, consumer1: $Consumer$$Type<$List$$Type<number>>): $LivingUpgrade
public "withDamageProvider"(iDamageProvider0: $LivingUpgrade$IDamageProvider$$Type): $LivingUpgrade
get "armorProvider"(): $LivingUpgrade$IArmorProvider
get "attributeProvider"(): $LivingUpgrade$IAttributeProvider
get "damageProvider"(): $LivingUpgrade$IDamageProvider
get "key"(): $ResourceLocation
get "translationKey"(): string
get "negative"(): boolean
}
}

declare module "packages/wayoftime/bloodmagic/core/data/$SoulNetwork" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $BMWorldSavedData, $BMWorldSavedData$$Type } from "packages/wayoftime/bloodmagic/core/data/$BMWorldSavedData"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $SoulTicket, $SoulTicket$$Type } from "packages/wayoftime/bloodmagic/core/data/$SoulTicket"
import { $List } from "packages/java/util/$List"
import { $INBTSerializable } from "packages/net/minecraftforge/common/util/$INBTSerializable"
import { $BooleanResult } from "packages/wayoftime/bloodmagic/util/$BooleanResult"

export class $SoulNetwork implements $INBTSerializable<$CompoundTag> {
/** @deprecated */
public "add"(int0: integer, int1: integer): integer
public "add"(soulTicket0: $SoulTicket$$Type, int1: integer): integer
/** @deprecated */
public "addLifeEssence"(int0: integer, int1: integer): integer
public "causeNausea"(): void
/** @deprecated */
public "causeNauseaToPlayer"(): void
public "clear"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public static "fromNBT"(compoundTag0: $CompoundTag$$Type): $SoulNetwork
public "getCachedPlayer"(): $Player
public "getCurrentEssence"(): integer
public "getOrbTier"(): integer
public "getParent"(): $BMWorldSavedData
public "getPlayer"(): $Player
public "getPlayerId"(): $UUID
public "getTicketHistory"(): $List<$SoulTicket>
public "hurtPlayer"(player0: $Player$$Type, float1: float): void
public static "newEmpty"(uUID0: $UUID$$Type): $SoulNetwork
public "serializeNBT"(): $CompoundTag
public "setCurrentEssence"(int0: integer): $SoulNetwork
public "setOrbTier"(int0: integer): $SoulNetwork
public "setParent"(bMWorldSavedData0: $BMWorldSavedData$$Type): $SoulNetwork
public "syphon"(soulTicket0: $SoulTicket$$Type): integer
/** @deprecated */
public "syphon"(int0: integer): integer
public "syphon"(soulTicket0: $SoulTicket$$Type, boolean1: boolean): integer
public "syphonAndDamage"(player0: $Player$$Type, soulTicket1: $SoulTicket$$Type): $BooleanResult<integer>
/** @deprecated */
public "syphonAndDamage"(player0: $Player$$Type, int1: integer): boolean
get "cachedPlayer"(): $Player
get "currentEssence"(): integer
get "orbTier"(): integer
get "parent"(): $BMWorldSavedData
get "player"(): $Player
get "playerId"(): $UUID
get "ticketHistory"(): $List<$SoulTicket>
set "currentEssence"(value: integer)
set "orbTier"(value: integer)
set "parent"(value: $BMWorldSavedData$$Type)
}
}

declare module "packages/wayoftime/bloodmagic/event/$SacrificeKnifeUsedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $SacrificeKnifeUsedEvent extends $Event {
readonly "healthDrained": integer
readonly "player": $Player

constructor()
constructor(player0: $Player$$Type, boolean1: boolean, boolean2: boolean, int3: integer, int4: integer)

get "lpAdded"(): integer
set "lpAdded"(value: integer)
get "shouldDrainHealth"(): boolean
set "shouldDrainHealth"(value: boolean)
get "shouldFillAltar"(): boolean
set "shouldFillAltar"(value: boolean)
}
}

declare module "packages/wayoftime/bloodmagic/ritual/$EnumRuneType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ChatFormatting } from "packages/net/minecraft/$ChatFormatting"

export class $EnumRuneType extends $Enum<$EnumRuneType> implements $StringRepresentable {
static readonly "AIR": $EnumRuneType
static readonly "BLANK": $EnumRuneType
static readonly "DAWN": $EnumRuneType
static readonly "DUSK": $EnumRuneType
static readonly "EARTH": $EnumRuneType
static readonly "FIRE": $EnumRuneType
static readonly "WATER": $EnumRuneType
readonly "colorCode": $ChatFormatting
readonly "patchouliColor": string
readonly "translationKey": string

public static "byMetadata"(int0: integer): $EnumRuneType
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $EnumRuneType
public static "values"(): $EnumRuneType[]
get "serializedName"(): string
}
}

declare module "packages/wayoftime/bloodmagic/event/$RitualEvent$RitualRunEvent" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $RitualEvent } from "packages/wayoftime/bloodmagic/event/$RitualEvent"
import { $IMasterRitualStone$$Type } from "packages/wayoftime/bloodmagic/ritual/$IMasterRitualStone"
import { $Ritual$$Type } from "packages/wayoftime/bloodmagic/ritual/$Ritual"

export class $RitualEvent$RitualRunEvent extends $RitualEvent {
constructor()
constructor(iMasterRitualStone0: $IMasterRitualStone$$Type, uUID1: $UUID$$Type, ritual2: $Ritual$$Type)

}
}

declare module "packages/wayoftime/bloodmagic/ritual/$RitualComponent" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EnumRuneType, $EnumRuneType$$Type } from "packages/wayoftime/bloodmagic/ritual/$EnumRuneType"

export class $RitualComponent {
constructor(blockPos0: $BlockPos$$Type, enumRuneType1: $EnumRuneType$$Type)

public "getOffset"(): $BlockPos
public "getOffset"(direction0: $Direction$$Type): $BlockPos
public "getRuneType"(): $EnumRuneType
public "getX"(direction0: $Direction$$Type): integer
public "getY"(): integer
public "getZ"(direction0: $Direction$$Type): integer
get "offset"(): $BlockPos
get "runeType"(): $EnumRuneType
get "y"(): integer
}
}

declare module "packages/wayoftime/bloodmagic/ritual/$RitualRenderer" {
import { $IMasterRitualStone$$Type } from "packages/wayoftime/bloodmagic/ritual/$IMasterRitualStone"

export class $RitualRenderer {
constructor()

public "renderAt"(iMasterRitualStone0: $IMasterRitualStone$$Type, double1: double, double2: double, double3: double): void
}
}

declare module "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $EnumDemonWillType extends $Enum<$EnumDemonWillType> implements $StringRepresentable {
static readonly "CORROSIVE": $EnumDemonWillType
static readonly "DEFAULT": $EnumDemonWillType
static readonly "DESTRUCTIVE": $EnumDemonWillType
static readonly "STEADFAST": $EnumDemonWillType
static readonly "VENGEFUL": $EnumDemonWillType
readonly "name": string

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "getType"(string0: string): $EnumDemonWillType
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $EnumDemonWillType
public static "values"(): $EnumDemonWillType[]
get "serializedName"(): string
}
}

declare module "packages/wayoftime/bloodmagic/ritual/$AreaDescriptor" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $StructurePlaceSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructurePlaceSettings"
import { $List } from "packages/java/util/$List"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Iterator } from "packages/java/util/$Iterator"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $AreaDescriptor implements $Iterator<$BlockPos> {
constructor()

public "copy"(): $AreaDescriptor
public "forEachRemaining"(consumer0: $Consumer$$Type<$BlockPos$$Type>): void
public "getAABB"(blockPos0: $BlockPos$$Type): $AABB
public "getContainedPositions"(blockPos0: $BlockPos$$Type): $List<$BlockPos>
public "getHeight"(): integer
public "getVolume"(): integer
public "getVolumeForOffsets"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): integer
public "hasNext"(): boolean
public "intersects"(areaDescriptor0: $AreaDescriptor$$Type): boolean
public "isWithinArea"(blockPos0: $BlockPos$$Type): boolean
public "isWithinRange"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer): boolean
public "isWithinRange"(int0: integer, int1: integer): boolean
public "modifyAreaByBlockPositions"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): void
public "next"(): $BlockPos
public "offset"(blockPos0: $BlockPos$$Type): $AreaDescriptor
public "readFromNBT"(compoundTag0: $CompoundTag$$Type): void
public "remove"(): void
public "resetCache"(): void
public "resetIterator"(): void
public "rotateDescriptor"(structurePlaceSettings0: $StructurePlaceSettings$$Type): $AreaDescriptor
public "writeToNBT"(compoundTag0: $CompoundTag$$Type): void
get "height"(): integer
get "volume"(): integer
}
}

declare module "packages/wayoftime/bloodmagic/event/$LivingEquipmentEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $LivingStats } from "packages/wayoftime/bloodmagic/core/living/$LivingStats"

export class $LivingEquipmentEvent extends $Event {
constructor()

public "getPlayer"(): $Player
public "getStats"(): $LivingStats
get "player"(): $Player
get "stats"(): $LivingStats
}
}

declare module "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IArmorProvider" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $LivingUpgrade$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade"
import { $LivingStats$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingStats"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"

export interface $LivingUpgrade$IArmorProvider {
"getProtection"(player0: $Player$$Type, livingStats1: $LivingStats$$Type, damageSource2: $DamageSource$$Type, livingUpgrade3: $LivingUpgrade$$Type, int4: integer): double
}

export namespace $LivingUpgrade$IArmorProvider {
const probejs$$marker: never
}
export abstract class $LivingUpgrade$IArmorProvider$$Static implements $LivingUpgrade$IArmorProvider {
}
}

declare module "packages/wayoftime/bloodmagic/event/$RitualEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $UUID } from "packages/java/util/$UUID"
import { $IMasterRitualStone } from "packages/wayoftime/bloodmagic/ritual/$IMasterRitualStone"
import { $Ritual } from "packages/wayoftime/bloodmagic/ritual/$Ritual"

export class $RitualEvent extends $Event {
constructor()

public "getOwnerId"(): $UUID
public "getRitual"(): $Ritual
public "getRitualStone"(): $IMasterRitualStone
get "ownerId"(): $UUID
get "ritual"(): $Ritual
get "ritualStone"(): $IMasterRitualStone
}
}

declare module "packages/wayoftime/bloodmagic/event/$LivingEquipmentEvent$GainExperience" {
import { $LivingEquipmentEvent } from "packages/wayoftime/bloodmagic/event/$LivingEquipmentEvent"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $LivingUpgrade, $LivingUpgrade$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade"
import { $LivingStats$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingStats"

export class $LivingEquipmentEvent$GainExperience extends $LivingEquipmentEvent {
constructor()
constructor(player0: $Player$$Type, livingStats1: $LivingStats$$Type, livingUpgrade2: $LivingUpgrade$$Type, double3: double)

public "getExperience"(): double
public "getUpgrade"(): $LivingUpgrade
public "setExperience"(double0: double): void
get "experience"(): double
get "upgrade"(): $LivingUpgrade
set "experience"(value: double)
}
}

declare module "packages/wayoftime/bloodmagic/will/$DemonWillHolder" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $HashMap, $HashMap$$Type } from "packages/java/util/$HashMap"
import { $EnumDemonWillType, $EnumDemonWillType$$Type } from "packages/wayoftime/bloodmagic/api/compat/$EnumDemonWillType"

export class $DemonWillHolder {
constructor()

public "addWill"(enumDemonWillType0: $EnumDemonWillType$$Type, double1: double): void
public "addWill"(enumDemonWillType0: $EnumDemonWillType$$Type, double1: double, double2: double): double
public "clearWill"(): void
public "drainWill"(enumDemonWillType0: $EnumDemonWillType$$Type, double1: double): double
public "getWill"(enumDemonWillType0: $EnumDemonWillType$$Type): double
public "readFromNBT"(compoundTag0: $CompoundTag$$Type, string1: string): void
public "writeToNBT"(compoundTag0: $CompoundTag$$Type, string1: string): void
get "willMap"(): $HashMap<$EnumDemonWillType, double>
set "willMap"(value: $HashMap$$Type<$EnumDemonWillType$$Type, double>)
}
}

declare module "packages/wayoftime/bloodmagic/event/$SoulNetworkEvent$Fill" {
import { $SoulNetwork$$Type } from "packages/wayoftime/bloodmagic/core/data/$SoulNetwork"
import { $SoulTicket$$Type } from "packages/wayoftime/bloodmagic/core/data/$SoulTicket"
import { $SoulNetworkEvent } from "packages/wayoftime/bloodmagic/event/$SoulNetworkEvent"

export class $SoulNetworkEvent$Fill extends $SoulNetworkEvent {
constructor()
constructor(soulNetwork0: $SoulNetwork$$Type, soulTicket1: $SoulTicket$$Type, int2: integer)

public "getMaximum"(): integer
public "setMaximum"(int0: integer): void
get "maximum"(): integer
set "maximum"(value: integer)
}
}

declare module "packages/wayoftime/bloodmagic/event/$SoulNetworkEvent$Syphon" {
import { $SoulNetwork$$Type } from "packages/wayoftime/bloodmagic/core/data/$SoulNetwork"
import { $SoulTicket$$Type } from "packages/wayoftime/bloodmagic/core/data/$SoulTicket"
import { $SoulNetworkEvent } from "packages/wayoftime/bloodmagic/event/$SoulNetworkEvent"

export class $SoulNetworkEvent$Syphon extends $SoulNetworkEvent {
constructor()
constructor(soulNetwork0: $SoulNetwork$$Type, soulTicket1: $SoulTicket$$Type)

public "setShouldDamage"(boolean0: boolean): void
public "shouldDamage"(): boolean
}
}

declare module "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade$IAttributeProvider" {
import { $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $LivingUpgrade$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade"
import { $LivingStats$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingStats"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export interface $LivingUpgrade$IAttributeProvider {
"handleAttributes"(livingStats0: $LivingStats$$Type, multimap1: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>, uUID2: $UUID$$Type, livingUpgrade3: $LivingUpgrade$$Type, int4: integer): void
}

export namespace $LivingUpgrade$IAttributeProvider {
const probejs$$marker: never
}
export abstract class $LivingUpgrade$IAttributeProvider$$Static implements $LivingUpgrade$IAttributeProvider {
}
}

declare module "packages/wayoftime/bloodmagic/event/$ItemBindEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemBindEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)

public "getBindingStack"(): $ItemStack
public "getNewOwner"(): $Player
get "bindingStack"(): $ItemStack
get "newOwner"(): $Player
}
}

declare module "packages/wayoftime/bloodmagic/core/living/$LivingStats" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $LivingUpgrade, $LivingUpgrade$$Type } from "packages/wayoftime/bloodmagic/core/living/$LivingUpgrade"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $LivingStats {
constructor(map0: $Map$$Type<$LivingUpgrade$$Type, double>)
constructor()

public "addExperience"(resourceLocation0: $ResourceLocation$$Type, double1: double): $LivingStats
public "deserialize"(compoundTag0: $CompoundTag$$Type): void
public static "fromNBT"(compoundTag0: $CompoundTag$$Type): $LivingStats
public static "fromPlayer"(player0: $Player$$Type, boolean1: boolean): $LivingStats
public static "fromPlayer"(player0: $Player$$Type): $LivingStats
public "getLevel"(resourceLocation0: $ResourceLocation$$Type): integer
public "getMaxPoints"(): integer
public "getUpgrades"(): $Map<$LivingUpgrade, double>
public "getUsedPoints"(): integer
public "isEvolved"(): boolean
public "resetExperience"(resourceLocation0: $ResourceLocation$$Type): $LivingStats
public "serialize"(): $CompoundTag
public "setEvolved"(): $LivingStats
public "setMaxPoints"(int0: integer): $LivingStats
public static "toPlayer"(player0: $Player$$Type, livingStats1: $LivingStats$$Type): void
get "maxPoints"(): integer
get "upgrades"(): $Map<$LivingUpgrade, double>
get "usedPoints"(): integer
get "evolved"(): boolean
set "maxPoints"(value: integer)
}
}

declare module "packages/wayoftime/bloodmagic/core/data/$BMWorldSavedData" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $SavedData } from "packages/net/minecraft/world/level/saveddata/$SavedData"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $SoulNetwork } from "packages/wayoftime/bloodmagic/core/data/$SoulNetwork"

export class $BMWorldSavedData extends $SavedData {
static readonly "DUNGEON_DISPLACEMENT": integer
static readonly "ID": string

constructor(string0: string)
constructor()

public "getNetwork"(uUID0: $UUID$$Type): $SoulNetwork
public "getNetwork"(player0: $Player$$Type): $SoulNetwork
public "getNumberOfDungeons"(): integer
public static "load"(compoundTag0: $CompoundTag$$Type): $BMWorldSavedData
public "setNumberOfDungeons"(int0: integer): void
get "numberOfDungeons"(): integer
set "numberOfDungeons"(value: integer)
}
}

