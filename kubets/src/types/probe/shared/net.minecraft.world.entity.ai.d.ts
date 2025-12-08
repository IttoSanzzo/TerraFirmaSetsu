declare module "packages/net/minecraft/world/entity/ai/memory/$MemoryStatus" {
import { $Enum } from "packages/java/lang/$Enum"

export class $MemoryStatus extends $Enum<$MemoryStatus> {
static readonly "REGISTERED": $MemoryStatus
static readonly "VALUE_ABSENT": $MemoryStatus
static readonly "VALUE_PRESENT": $MemoryStatus

public static "valueOf"(string0: string): $MemoryStatus
public static "values"(): $MemoryStatus[]
}
}

declare module "packages/net/minecraft/world/entity/ai/village/poi/$PoiSection" {
import { $PoiRecord } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiRecord"
import { $PoiType, $PoiType$$Type } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $PoiManager$Occupancy$$Type } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager$Occupancy"

export class $PoiSection {
constructor(runnable0: $Runnable$$Type)

public "add"(blockPos0: $BlockPos$$Type, holder1: $Holder$$Type<$PoiType$$Type>): void
public static "codec"(runnable0: $Runnable$$Type): $Codec<$PoiSection>
public "exists"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>): boolean
/** @deprecated */
public "getFreeTickets"(blockPos0: $BlockPos$$Type): integer
public "getRecords"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, occupancy1: $PoiManager$Occupancy$$Type): $Stream<$PoiRecord>
public "getType"(blockPos0: $BlockPos$$Type): $Optional<$Holder<$PoiType>>
public "refresh"(consumer0: $Consumer$$Type<$BiConsumer$$Type<$BlockPos$$Type, $Holder$$Type<$PoiType$$Type>>>): void
public "release"(blockPos0: $BlockPos$$Type): boolean
public "remove"(blockPos0: $BlockPos$$Type): void
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeInstance" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Set } from "packages/java/util/$Set"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $AttributeInstanceAccessor } from "packages/dev/shadowsoffire/attributeslib/mixin/$AttributeInstanceAccessor"
import { $AttributeModifier, $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export class $AttributeInstance implements $AttributeInstanceAccessor {
constructor(attribute0: $Attribute$$Type, consumer1: $Consumer$$Type<$AttributeInstance$$Type>)

public "addPermanentModifier"(attributeModifier0: $AttributeModifier$$Type): void
public "addTransientModifier"(attributeModifier0: $AttributeModifier$$Type): void
public "getAttribute"(): $Attribute
public "getBaseValue"(): double
public "getModifier"(uUID0: $UUID$$Type): $AttributeModifier
public "getModifiers"(): $Set<$AttributeModifier>
public "getModifiers"(operation0: $AttributeModifier$Operation$$Type): $Set<$AttributeModifier>
public "getValue"(): double
public "hasModifier"(attributeModifier0: $AttributeModifier$$Type): boolean
public "load"(compoundTag0: $CompoundTag$$Type): void
public "removeModifier"(attributeModifier0: $AttributeModifier$$Type): void
public "removeModifier"(uUID0: $UUID$$Type): void
public "removeModifiers"(): void
public "removePermanentModifier"(uUID0: $UUID$$Type): boolean
public "replaceFrom"(attributeInstance0: $AttributeInstance$$Type): void
public "save"(): $CompoundTag
public "setBaseValue"(double0: double): void
public "setDirty"(): void
get "attribute"(): $Attribute
get "baseValue"(): double
get "modifiers"(): $Set<$AttributeModifier>
get "value"(): double
set "baseValue"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$DummySensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $DummySensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/control/$LookControl" {
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Control } from "packages/net/minecraft/world/entity/ai/control/$Control"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $LookControl implements $Control {
constructor(mob0: $Mob$$Type)

public "getWantedX"(): double
public "getWantedY"(): double
public "getWantedZ"(): double
public "isLookingAtTarget"(): boolean
public "setLookAt"(vec30: $Vec3$$Type): void
public "setLookAt"(entity0: $Entity$$Type, float1: float, float2: float): void
public "setLookAt"(double0: double, double1: double, double2: double): void
public "setLookAt"(double0: double, double1: double, double2: double, float3: float, float4: float): void
public "setLookAt"(entity0: $Entity$$Type): void
public "tick"(): void
get "wantedX"(): double
get "wantedY"(): double
get "wantedZ"(): double
get "lookingAtTarget"(): boolean
set "lookAt"(value: $Vec3$$Type)
set "lookAt"(value: $Entity$$Type)
}
}

declare module "packages/net/minecraft/world/entity/ai/control/$MoveControl" {
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Control } from "packages/net/minecraft/world/entity/ai/control/$Control"

export class $MoveControl implements $Control {
static readonly "MIN_SPEED": float
static readonly "MIN_SPEED_SQR": float

constructor(mob0: $Mob$$Type)

public "getSpeedModifier"(): double
public "getWantedX"(): double
public "getWantedY"(): double
public "getWantedZ"(): double
public "hasWanted"(): boolean
public "setWantedPosition"(double0: double, double1: double, double2: double, double3: double): void
public "strafe"(float0: float, float1: float): void
public "tick"(): void
get "speedModifier"(): double
get "wantedX"(): double
get "wantedY"(): double
get "wantedZ"(): double
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$HoglinSpecificSensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $Hoglin } from "packages/net/minecraft/world/entity/monster/hoglin/$Hoglin"

export class $HoglinSpecificSensor extends $Sensor<$Hoglin> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$VillagerBabiesSensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $VillagerBabiesSensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/behavior/$Behavior$Status" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Behavior$Status extends $Enum<$Behavior$Status> {
static readonly "RUNNING": $Behavior$Status
static readonly "STOPPED": $Behavior$Status

public static "valueOf"(string0: string): $Behavior$Status
public static "values"(): $Behavior$Status[]
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$NearestItemSensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $Mob } from "packages/net/minecraft/world/entity/$Mob"

export class $NearestItemSensor extends $Sensor<$Mob> {
static readonly "MAX_DISTANCE_TO_WANTED_ITEM": integer

constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation" {
import { $Path, $Path$$Type } from "packages/net/minecraft/world/level/pathfinder/$Path"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $NodeEvaluator } from "packages/net/minecraft/world/level/pathfinder/$NodeEvaluator"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $PathNavigation {
constructor(mob0: $Mob$$Type, level1: $Level$$Type)

public "canCutCorner"(blockPathTypes0: $BlockPathTypes$$Type): boolean
public "canFloat"(): boolean
public "createPath"(blockPos0: $BlockPos$$Type, int1: integer): $Path
public "createPath"(set0: $Set$$Type<$BlockPos$$Type>, int1: integer): $Path
public "createPath"(stream0: $Stream$$Type<$BlockPos$$Type>, int1: integer): $Path
public "createPath"(double0: double, double1: double, double2: double, int3: integer): $Path
public "createPath"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer): $Path
public "createPath"(entity0: $Entity$$Type, int1: integer): $Path
public "getMaxDistanceToWaypoint"(): float
public "getNodeEvaluator"(): $NodeEvaluator
public "getPath"(): $Path
public "getTargetPos"(): $BlockPos
public "isDone"(): boolean
public "isInProgress"(): boolean
public "isStableDestination"(blockPos0: $BlockPos$$Type): boolean
public "isStuck"(): boolean
public "moveTo"(double0: double, double1: double, double2: double, double3: double): boolean
public "moveTo"(path0: $Path$$Type, double1: double): boolean
public "moveTo"(entity0: $Entity$$Type, double1: double): boolean
public "recomputePath"(): void
public "resetMaxVisitedNodesMultiplier"(): void
public "setCanFloat"(boolean0: boolean): void
public "setMaxVisitedNodesMultiplier"(float0: float): void
public "setSpeedModifier"(double0: double): void
public "shouldRecomputePath"(blockPos0: $BlockPos$$Type): boolean
public "stop"(): void
public "tick"(): void
get "maxDistanceToWaypoint"(): float
get "nodeEvaluator"(): $NodeEvaluator
get "path"(): $Path
get "targetPos"(): $BlockPos
get "done"(): boolean
get "inProgress"(): boolean
get "stuck"(): boolean
set "maxVisitedNodesMultiplier"(value: float)
set "speedModifier"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/ai/$Brain$MemoryValue" {
import { $RecordBuilder$$Type } from "packages/com/mojang/serialization/$RecordBuilder"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"

export class $Brain$MemoryValue<U> {
public "serialize"<T>(dynamicOps0: $DynamicOps$$Type<T>, recordBuilder1: $RecordBuilder$$Type<T>): void
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$NearestVisibleLivingEntitySensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $NearestVisibleLivingEntitySensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/goal/$Goal$Flag" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Goal$Flag extends $Enum<$Goal$Flag> {
static readonly "JUMP": $Goal$Flag
static readonly "LOOK": $Goal$Flag
static readonly "MOVE": $Goal$Flag
static readonly "TARGET": $Goal$Flag

public static "valueOf"(string0: string): $Goal$Flag
public static "values"(): $Goal$Flag[]
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$AdultSensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $AgeableMob } from "packages/net/minecraft/world/entity/$AgeableMob"

export class $AdultSensor extends $Sensor<$AgeableMob> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$SecondaryPoiSensor" {
import { $Villager } from "packages/net/minecraft/world/entity/npc/$Villager"
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"

export class $SecondaryPoiSensor extends $Sensor<$Villager> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $AttributeModifier$Operation, $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $AttributeModifier {
constructor(uUID0: $UUID$$Type, supplier1: $Supplier$$Type<string>, double2: double, operation3: $AttributeModifier$Operation$$Type)
constructor(uUID0: $UUID$$Type, string1: string, double2: double, operation3: $AttributeModifier$Operation$$Type)
constructor(string0: string, double1: double, operation2: $AttributeModifier$Operation$$Type)

public "getAmount"(): double
public "getId"(): $UUID
public "getName"(): string
public "getOperation"(): $AttributeModifier$Operation
public static "load"(compoundTag0: $CompoundTag$$Type): $AttributeModifier
public "save"(): $CompoundTag
get "amount"(): double
get "id"(): $UUID
get "name"(): string
get "operation"(): $AttributeModifier$Operation
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap" {
import { $AttributeSupplier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier"
import { $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $ListTag, $ListTag$$Type } from "packages/net/minecraft/nbt/$ListTag"
import { $Collection } from "packages/java/util/$Collection"
import { $IAttributeManager } from "packages/dev/shadowsoffire/attributeslib/util/$IAttributeManager"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $AttributeInstance, $AttributeInstance$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeInstance"
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Set } from "packages/java/util/$Set"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $IEntityOwned } from "packages/dev/shadowsoffire/attributeslib/util/$IEntityOwned"
import { $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export class $AttributeMap implements $IEntityOwned, $IAttributeManager {
constructor(attributeSupplier0: $AttributeSupplier$$Type)

public "addTransientAttributeModifiers"(multimap0: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>): void
public "areAttributesUpdating"(): boolean
public "assignValues"(attributeMap0: $AttributeMap$$Type): void
public "getBaseValue"(attribute0: $Attribute$$Type): double
public "getDirtyAttributes"(): $Set<$AttributeInstance>
public "getInstance"(attribute0: $Attribute$$Type): $AttributeInstance
public "getInstance"(holder0: $Holder$$Type<$Attribute$$Type>): $AttributeInstance
public "getModifierValue"(holder0: $Holder$$Type<$Attribute$$Type>, uUID1: $UUID$$Type): double
public "getModifierValue"(attribute0: $Attribute$$Type, uUID1: $UUID$$Type): double
public "getOwner"(): $LivingEntity
public "getSyncableAttributes"(): $Collection<$AttributeInstance>
public "getValue"(attribute0: $Attribute$$Type): double
public "handler$bni000$apoth_attrModifiedEvent"(attributeInstance0: $AttributeInstance$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "hasAttribute"(attribute0: $Attribute$$Type): boolean
public "hasAttribute"(holder0: $Holder$$Type<$Attribute$$Type>): boolean
public "hasModifier"(holder0: $Holder$$Type<$Attribute$$Type>, uUID1: $UUID$$Type): boolean
public "hasModifier"(attribute0: $Attribute$$Type, uUID1: $UUID$$Type): boolean
public "load"(listTag0: $ListTag$$Type): void
public "removeAttributeModifiers"(multimap0: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>): void
public "save"(): $ListTag
public "setAttributesUpdating"(boolean0: boolean): void
public "setOwner"(livingEntity0: $LivingEntity$$Type): void
get "dirtyAttributes"(): $Set<$AttributeInstance>
get "owner"(): $LivingEntity
get "syncableAttributes"(): $Collection<$AttributeInstance>
set "attributesUpdating"(value: boolean)
set "owner"(value: $LivingEntity$$Type)
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier" {
import { $AttributeInstance, $AttributeInstance$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeInstance"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Map$$Type } from "packages/java/util/$Map"

export class $AttributeSupplier {
constructor(map0: $Map$$Type<$Attribute$$Type, $AttributeInstance$$Type>)

public static "builder"(): $AttributeSupplier$Builder
public "createInstance"(consumer0: $Consumer$$Type<$AttributeInstance$$Type>, attribute1: $Attribute$$Type): $AttributeInstance
public "getBaseValue"(attribute0: $Attribute$$Type): double
public "getModifierValue"(attribute0: $Attribute$$Type, uUID1: $UUID$$Type): double
public "getValue"(attribute0: $Attribute$$Type): double
public "hasAttribute"(attribute0: $Attribute$$Type): boolean
public "hasModifier"(attribute0: $Attribute$$Type, uUID1: $UUID$$Type): boolean
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$Sensor" {
import { $Set } from "packages/java/util/$Set"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $MemoryModuleType } from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Sensor<E extends $LivingEntity> {
constructor(int0: integer)
constructor()

public static "isEntityAttackable"(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type): boolean
public static "isEntityAttackableIgnoringLineOfSight"(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type): boolean
public static "isEntityTargetable"(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "requires"(): $Set<$MemoryModuleType<any>>
public "tick"(serverLevel0: $ServerLevel$$Type, e1: E): void
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$PiglinSpecificSensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PiglinSpecificSensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/behavior/$Behavior" {
import { $Behavior$Status } from "packages/net/minecraft/world/entity/ai/behavior/$Behavior$Status"
import { $BehaviorControl } from "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $MemoryModuleType$$Type } from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import { $MemoryStatus$$Type } from "packages/net/minecraft/world/entity/ai/memory/$MemoryStatus"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Map$$Type } from "packages/java/util/$Map"

export class $Behavior<E extends $LivingEntity> implements $BehaviorControl<E> {
static readonly "DEFAULT_DURATION": integer

constructor(map0: $Map$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>, int1: integer, int2: integer)
constructor(map0: $Map$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>, int1: integer)
constructor(map0: $Map$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>)

public "debugString"(): string
public "doStop"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): void
public "getStatus"(): $Behavior$Status
public "tickOrStop"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): void
public "tryStart"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): boolean
get "status"(): $Behavior$Status
}
}

declare module "packages/net/minecraft/world/entity/ai/gossip/$GossipType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $GossipType extends $Enum<$GossipType> implements $StringRepresentable {
static readonly "CODEC": $Codec<$GossipType>
static readonly "MAJOR_NEGATIVE": $GossipType
static readonly "MAJOR_POSITIVE": $GossipType
static readonly "MINOR_NEGATIVE": $GossipType
static readonly "MINOR_POSITIVE": $GossipType
static readonly "REPUTATION_CHANGE_PER_EVENT": integer
static readonly "REPUTATION_CHANGE_PER_EVERLASTING_MEMORY": integer
static readonly "REPUTATION_CHANGE_PER_TRADE": integer
static readonly "TRADING": $GossipType
readonly "decayPerDay": integer
readonly "decayPerTransfer": integer
readonly "id": string
readonly "max": integer
readonly "weight": integer

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $GossipType
public static "values"(): $GossipType[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/entity/ai/goal/$Goal" {
import { $EnumSet, $EnumSet$$Type } from "packages/java/util/$EnumSet"
import { $Goal$Flag, $Goal$Flag$$Type } from "packages/net/minecraft/world/entity/ai/goal/$Goal$Flag"

export class $Goal {
constructor()

public "canContinueToUse"(): boolean
public "canUse"(): boolean
public "getFlags"(): $EnumSet<$Goal$Flag>
public "isInterruptable"(): boolean
public "requiresUpdateEveryTick"(): boolean
public "setFlags"(enumSet0: $EnumSet$$Type<$Goal$Flag$$Type>): void
public "start"(): void
public "stop"(): void
public "tick"(): void
get "flags"(): $EnumSet<$Goal$Flag>
get "interruptable"(): boolean
set "flags"(value: $EnumSet$$Type<$Goal$Flag$$Type>)
}
}

declare module "packages/net/minecraft/world/entity/ai/memory/$NearestVisibleLivingEntities" {
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $List$$Type } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $NearestVisibleLivingEntities {
constructor(livingEntity0: $LivingEntity$$Type, list1: $List$$Type<$LivingEntity$$Type>)

public "contains"(predicate0: $Predicate$$Type<$LivingEntity$$Type>): boolean
public "contains"(livingEntity0: $LivingEntity$$Type): boolean
public static "empty"(): $NearestVisibleLivingEntities
public "find"(predicate0: $Predicate$$Type<$LivingEntity$$Type>): $Stream<$LivingEntity>
public "findAll"(predicate0: $Predicate$$Type<$LivingEntity$$Type>): $Iterable<$LivingEntity>
public "findClosest"(predicate0: $Predicate$$Type<$LivingEntity$$Type>): $Optional<$LivingEntity>
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation" {
import { $Enum } from "packages/java/lang/$Enum"

export class $AttributeModifier$Operation extends $Enum<$AttributeModifier$Operation> {
static readonly "ADDITION": $AttributeModifier$Operation
static readonly "MULTIPLY_BASE": $AttributeModifier$Operation
static readonly "MULTIPLY_TOTAL": $AttributeModifier$Operation

public static "fromValue"(int0: integer): $AttributeModifier$Operation
public "toValue"(): integer
public static "valueOf"(string0: string): $AttributeModifier$Operation
public static "values"(): $AttributeModifier$Operation[]
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$PiglinBruteSpecificSensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PiglinBruteSpecificSensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/village/$VillageSiege" {
import { $CustomSpawner } from "packages/net/minecraft/world/level/$CustomSpawner"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"

export class $VillageSiege implements $CustomSpawner {
constructor()

public "tick"(serverLevel0: $ServerLevel$$Type, boolean1: boolean, boolean2: boolean): integer
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$GolemSensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $GolemSensor extends $Sensor<$LivingEntity> {
constructor()
constructor(int0: integer)

public static "checkForNearbyGolem"(livingEntity0: $LivingEntity$$Type): void
public static "golemDetected"(livingEntity0: $LivingEntity$$Type): void
}
}

declare module "packages/net/minecraft/world/entity/ai/goal/$WrappedGoal" {
import { $Goal, $Goal$$Type } from "packages/net/minecraft/world/entity/ai/goal/$Goal"

export class $WrappedGoal extends $Goal {
constructor(int0: integer, goal1: $Goal$$Type)

public "canBeReplacedBy"(wrappedGoal0: $WrappedGoal$$Type): boolean
public "getGoal"(): $Goal
public "getPriority"(): integer
public "isRunning"(): boolean
get "goal"(): $Goal
get "priority"(): integer
get "running"(): boolean
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$IsInWaterSensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $IsInWaterSensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/$Brain" {
import { $Schedule, $Schedule$$Type } from "packages/net/minecraft/world/entity/schedule/$Schedule"
import { $Sensor$$Type } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $ExpirableValue } from "packages/net/minecraft/world/entity/ai/memory/$ExpirableValue"
import { $Brain$MemoryValue$$Type } from "packages/net/minecraft/world/entity/ai/$Brain$MemoryValue"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $ImmutableList$$Type } from "packages/com/google/common/collect/$ImmutableList"
import { $Activity, $Activity$$Type } from "packages/net/minecraft/world/entity/schedule/$Activity"
import { $BehaviorControl, $BehaviorControl$$Type } from "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Brain$Provider } from "packages/net/minecraft/world/entity/ai/$Brain$Provider"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $MemoryModuleType, $MemoryModuleType$$Type } from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import { $MemoryStatus$$Type } from "packages/net/minecraft/world/entity/ai/memory/$MemoryStatus"
import { $SensorType$$Type } from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import { $BrainAccessor } from "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$BrainAccessor"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $BrainBuilder, $BrainBuilder$$Type } from "packages/net/minecraftforge/common/util/$BrainBuilder"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $Map } from "packages/java/util/$Map"

export class $Brain<E extends $LivingEntity> implements $BrainAccessor<any> {
constructor(collection0: $Collection$$Type<$MemoryModuleType$$Type<any>>, collection1: $Collection$$Type<$SensorType$$Type<$Sensor$$Type<E>>>, immutableList2: $ImmutableList$$Type<$Brain$MemoryValue$$Type<any>>, supplier3: $Supplier$$Type<$Codec<$Brain<E>>>)

public "addActivity"(activity0: $Activity$$Type, int1: integer, immutableList2: $ImmutableList$$Type<$BehaviorControl$$Type<E>>): void
public "addActivity"(activity0: $Activity$$Type, immutableList1: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<E>>>): void
public "addActivityAndRemoveMemoriesWhenStopped"(activity0: $Activity$$Type, immutableList1: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<E>>>, set2: $Set$$Type<$Pair$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>>, set3: $Set$$Type<$MemoryModuleType$$Type<any>>): void
public "addActivityAndRemoveMemoryWhenStopped"(activity0: $Activity$$Type, int1: integer, immutableList2: $ImmutableList$$Type<$BehaviorControl$$Type<E>>, memoryModuleType3: $MemoryModuleType$$Type<any>): void
public "addActivityWithConditions"(activity0: $Activity$$Type, immutableList1: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<E>>>, set2: $Set$$Type<$Pair$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>>): void
public "checkMemory"(memoryModuleType0: $MemoryModuleType$$Type<any>, memoryStatus1: $MemoryStatus$$Type): boolean
public "clearMemories"(): void
public static "codec"<E extends $LivingEntity>(collection0: $Collection$$Type<$MemoryModuleType$$Type<any>>, collection1: $Collection$$Type<$SensorType$$Type<$Sensor$$Type<E>>>): $Codec<$Brain<E>>
public "copyFromBuilder"(brainBuilder0: $BrainBuilder$$Type<E>): void
public "copyWithoutBehaviors"(): $Brain<E>
public "createBuilder"(): $BrainBuilder<E>
public "eraseMemory"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>): void
/** @deprecated */
public "getActiveActivities"(): $Set<$Activity>
public "getActiveNonCoreActivity"(): $Optional<$Activity>
/** @deprecated */
public "getMemories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
public "getMemory"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>): $Optional<U>
public "getMemoryInternal"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>): $Optional<U>
/** @deprecated */
public "getRunningBehaviors"(): $List<$BehaviorControl<E>>
public "getSchedule"(): $Schedule
public "getTimeUntilExpiry"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>): long
public "hasMemoryValue"(memoryModuleType0: $MemoryModuleType$$Type<any>): boolean
public "isActive"(activity0: $Activity$$Type): boolean
public "isMemoryValue"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>, u1: U): boolean
public static "provider"<E extends $LivingEntity>(collection0: $Collection$$Type<$MemoryModuleType$$Type<any>>, collection1: $Collection$$Type<$SensorType$$Type<$Sensor$$Type<E>>>): $Brain$Provider<E>
public "removeAllBehaviors"(): void
public "serializeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>): $DataResult<T>
public "setActiveActivityIfPossible"(activity0: $Activity$$Type): void
public "setActiveActivityToFirstValid"(list0: $List$$Type<$Activity$$Type>): void
public "setCoreActivities"(set0: $Set$$Type<$Activity$$Type>): void
public "setDefaultActivity"(activity0: $Activity$$Type): void
public "setMemory"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>, u1: U): void
public "setMemory"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>, optional1: $Optional$$Type<U>): void
public "setMemoryWithExpiry"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>, u1: U, long2: long): void
public "setSchedule"(schedule0: $Schedule$$Type): void
public "stopAll"(serverLevel0: $ServerLevel$$Type, e1: E): void
public "tick"(serverLevel0: $ServerLevel$$Type, e1: E): void
public "updateActivityFromSchedule"(long0: long, long1: long): void
public "useDefaultActivity"(): void
get "activeActivities"(): $Set<$Activity>
get "activeNonCoreActivity"(): $Optional<$Activity>
get "memories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
get "runningBehaviors"(): $List<$BehaviorControl<E>>
get "schedule"(): $Schedule
set "activeActivityIfPossible"(value: $Activity$$Type)
set "activeActivityToFirstValid"(value: $List$$Type<$Activity$$Type>)
set "coreActivities"(value: $Set$$Type<$Activity$$Type>)
set "defaultActivity"(value: $Activity$$Type)
set "schedule"(value: $Schedule$$Type)
}
}

declare module "packages/net/minecraft/world/entity/ai/gossip/$GossipContainer$EntityGossips" {
import { $GossipContainer$GossipEntry } from "packages/net/minecraft/world/entity/ai/gossip/$GossipContainer$GossipEntry"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $GossipType$$Type } from "packages/net/minecraft/world/entity/ai/gossip/$GossipType"

export class $GossipContainer$EntityGossips {
public "decay"(): void
public "isEmpty"(): boolean
public "makeSureValueIsntTooLowOrTooHigh"(gossipType0: $GossipType$$Type): void
public "remove"(gossipType0: $GossipType$$Type): void
public "unpack"(uUID0: $UUID$$Type): $Stream<$GossipContainer$GossipEntry>
public "weightedValue"(predicate0: $Predicate$$Type<$GossipType$$Type>): integer
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/world/entity/ai/behavior/$PositionTracker" {
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $PositionTracker {
"currentBlockPosition"(): $BlockPos
"currentPosition"(): $Vec3
"isVisibleBy"(livingEntity0: $LivingEntity$$Type): boolean
}

export namespace $PositionTracker {
const probejs$$marker: never
}
export abstract class $PositionTracker$$Static implements $PositionTracker {
}
}

declare module "packages/net/minecraft/world/entity/ai/control/$Control" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Control {
}

export namespace $Control {
const probejs$$marker: never
}
export abstract class $Control$$Static implements $Control {
}
}

declare module "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions" {
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TargetingConditions {
static readonly "DEFAULT": $TargetingConditions
"selector": $Predicate<$LivingEntity>

constructor(boolean0: boolean)

public "copy"(): $TargetingConditions
public static "forCombat"(): $TargetingConditions
public static "forNonCombat"(): $TargetingConditions
public "ignoreInvisibilityTesting"(): $TargetingConditions
public "ignoreLineOfSight"(): $TargetingConditions
public "range"(double0: double): $TargetingConditions
public "selector"(predicate0: $Predicate$$Type<$LivingEntity$$Type>): $TargetingConditions
public "test"(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type): boolean
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$Sensing" {
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $Sensing {
constructor(mob0: $Mob$$Type)

public "hasLineOfSight"(entity0: $Entity$$Type): boolean
public "tick"(): void
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$RangedAttribute" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $TooltipFlag$$Type } from "packages/net/minecraft/world/item/$TooltipFlag"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UUID } from "packages/java/util/$UUID"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export class $RangedAttribute extends $Attribute {
constructor(string0: string, double1: double, double2: double, double3: double)

public "addBonusTooltips"(itemStack0: $ItemStack$$Type, consumer1: $Consumer$$Type<$Component$$Type>, tooltipFlag2: $TooltipFlag$$Type): void
public "getBaseUUID"(): $UUID
public "getBonusBaseValue"(itemStack0: $ItemStack$$Type): double
public "getDebugInfo"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $Component
public "getMaxValue"(): double
public "getMinValue"(): double
public static "isNullOrAddition"(operation0: $AttributeModifier$Operation$$Type): boolean
public "ths"(): $Attribute
public "toBaseComponent"(double0: double, double1: double, boolean2: boolean, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
public static "toBaseComponent"(attribute0: $Attribute$$Type, double1: double, double2: double, boolean3: boolean, tooltipFlag4: $TooltipFlag$$Type): $MutableComponent
public "toComponent"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $MutableComponent
public static "toComponent"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
public "toValueComponent"(operation0: $AttributeModifier$Operation$$Type, double1: double, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
public static "toValueComponent"(attribute0: $Attribute$$Type, operation1: $AttributeModifier$Operation$$Type, double2: double, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
get "baseUUID"(): $UUID
get "maxValue"(): double
get "minValue"(): double
}
}

declare module "packages/net/minecraft/world/entity/ai/memory/$WalkTarget" {
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $PositionTracker, $PositionTracker$$Type } from "packages/net/minecraft/world/entity/ai/behavior/$PositionTracker"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $WalkTarget {
constructor(positionTracker0: $PositionTracker$$Type, float1: float, int2: integer)
constructor(entity0: $Entity$$Type, float1: float, int2: integer)
constructor(vec30: $Vec3$$Type, float1: float, int2: integer)
constructor(blockPos0: $BlockPos$$Type, float1: float, int2: integer)

public "getCloseEnoughDist"(): integer
public "getSpeedModifier"(): float
public "getTarget"(): $PositionTracker
get "closeEnoughDist"(): integer
get "speedModifier"(): float
get "target"(): $PositionTracker
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$NearestLivingEntitySensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $NearestLivingEntitySensor<T extends $LivingEntity> extends $Sensor<T> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$FrogAttackablesSensor" {
import { $NearestVisibleLivingEntitySensor } from "packages/net/minecraft/world/entity/ai/sensing/$NearestVisibleLivingEntitySensor"

export class $FrogAttackablesSensor extends $NearestVisibleLivingEntitySensor {
static readonly "TARGET_DETECTION_DISTANCE": float

constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/control/$JumpControl" {
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Control } from "packages/net/minecraft/world/entity/ai/control/$Control"

export class $JumpControl implements $Control {
constructor(mob0: $Mob$$Type)

public "jump"(): void
public "tick"(): void
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder" {
import { $AttributeSupplier, $AttributeSupplier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"

export class $AttributeSupplier$Builder {
constructor()
constructor(attributeSupplier0: $AttributeSupplier$$Type)

public "add"(attribute0: $Attribute$$Type): $AttributeSupplier$Builder
public "add"(attribute0: $Attribute$$Type, double1: double): $AttributeSupplier$Builder
public "build"(): $AttributeSupplier
public "combine"(builder0: $AttributeSupplier$Builder$$Type): void
public "hasAttribute"(attribute0: $Attribute$$Type): boolean
}
}

declare module "packages/net/minecraft/world/entity/ai/gossip/$GossipContainer$GossipEntry" {
import { $Record } from "packages/java/lang/$Record"
import { $UUID } from "packages/java/util/$UUID"
import { $List } from "packages/java/util/$List"
import { $GossipType } from "packages/net/minecraft/world/entity/ai/gossip/$GossipType"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $GossipContainer$GossipEntry extends $Record {
static readonly "CODEC": $Codec<$GossipContainer$GossipEntry>
static readonly "LIST_CODEC": $Codec<$List<$GossipContainer$GossipEntry>>

public "target"(): $UUID
public "type"(): $GossipType
public "value"(): integer
public "weightedValue"(): integer
}
}

declare module "packages/net/minecraft/world/entity/ai/goal/$GoalSelector" {
import { $Goal$$Type } from "packages/net/minecraft/world/entity/ai/goal/$Goal"
import { $Set } from "packages/java/util/$Set"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $WrappedGoal } from "packages/net/minecraft/world/entity/ai/goal/$WrappedGoal"
import { $Goal$Flag$$Type } from "packages/net/minecraft/world/entity/ai/goal/$Goal$Flag"
import { $ProfilerFiller } from "packages/net/minecraft/util/profiling/$ProfilerFiller"

export class $GoalSelector {
readonly "availableGoals": $Set<$WrappedGoal>

constructor(supplier0: $Supplier$$Type<$ProfilerFiller>)

public "addGoal"(int0: integer, goal1: $Goal$$Type): void
public "disableControlFlag"(flag0: $Goal$Flag$$Type): void
public "enableControlFlag"(flag0: $Goal$Flag$$Type): void
public "getAvailableGoals"(): $Set<$WrappedGoal>
public "getRunningGoals"(): $Stream<$WrappedGoal>
public "removeAllGoals"(predicate0: $Predicate$$Type<$Goal$$Type>): void
public "removeGoal"(goal0: $Goal$$Type): void
public "setControlFlag"(flag0: $Goal$Flag$$Type, boolean1: boolean): void
public "setNewGoalRate"(int0: integer): void
public "tick"(): void
public "tickRunningGoals"(boolean0: boolean): void
get "runningGoals"(): $Stream<$WrappedGoal>
set "newGoalRate"(value: integer)
}
}

declare module "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl" {
import { $Behavior$Status } from "packages/net/minecraft/world/entity/ai/behavior/$Behavior$Status"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $BehaviorControl<E extends $LivingEntity> {
"debugString"(): string
"doStop"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): void
"getStatus"(): $Behavior$Status
"tickOrStop"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): void
"tryStart"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): boolean
get "status"(): $Behavior$Status
}

export namespace $BehaviorControl {
const probejs$$marker: never
}
export abstract class $BehaviorControl$$Static<E extends $LivingEntity> implements $BehaviorControl<E> {
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$WardenEntitySensor" {
import { $NearestLivingEntitySensor } from "packages/net/minecraft/world/entity/ai/sensing/$NearestLivingEntitySensor"
import { $Warden } from "packages/net/minecraft/world/entity/monster/warden/$Warden"

export class $WardenEntitySensor extends $NearestLivingEntitySensor<$Warden> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$AxolotlAttackablesSensor" {
import { $NearestVisibleLivingEntitySensor } from "packages/net/minecraft/world/entity/ai/sensing/$NearestVisibleLivingEntitySensor"

export class $AxolotlAttackablesSensor extends $NearestVisibleLivingEntitySensor {
static readonly "TARGET_DETECTION_DISTANCE": float

constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/gossip/$GossipContainer" {
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $GossipType, $GossipType$$Type } from "packages/net/minecraft/world/entity/ai/gossip/$GossipType"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"
import { $GossipContainer$EntityGossips } from "packages/net/minecraft/world/entity/ai/gossip/$GossipContainer$EntityGossips"
import { $Map } from "packages/java/util/$Map"
import { $DoublePredicate$$Type } from "packages/java/util/function/$DoublePredicate"
import { $Object2IntMap } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"

export class $GossipContainer {
static readonly "DISCARD_THRESHOLD": integer
readonly "gossips": $Map<$UUID, $GossipContainer$EntityGossips>

constructor()

public "add"(uUID0: $UUID$$Type, gossipType1: $GossipType$$Type, int2: integer): void
public "decay"(): void
public "getCountForType"(gossipType0: $GossipType$$Type, doublePredicate1: $DoublePredicate$$Type): long
public "getGossipEntries"(): $Map<$UUID, $Object2IntMap<$GossipType>>
public "getReputation"(uUID0: $UUID$$Type, predicate1: $Predicate$$Type<$GossipType$$Type>): integer
public "remove"(gossipType0: $GossipType$$Type): void
public "remove"(uUID0: $UUID$$Type, gossipType1: $GossipType$$Type, int2: integer): void
public "remove"(uUID0: $UUID$$Type, gossipType1: $GossipType$$Type): void
public "store"<T>(dynamicOps0: $DynamicOps$$Type<T>): T
public "transferFrom"(gossipContainer0: $GossipContainer$$Type, randomSource1: $RandomSource$$Type, int2: integer): void
public "update"(dynamic0: $Dynamic$$Type<any>): void
get "gossipEntries"(): $Map<$UUID, $Object2IntMap<$GossipType>>
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$VillagerHostilesSensor" {
import { $NearestVisibleLivingEntitySensor } from "packages/net/minecraft/world/entity/ai/sensing/$NearestVisibleLivingEntitySensor"

export class $VillagerHostilesSensor extends $NearestVisibleLivingEntitySensor {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$TemptingSensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $AccessorTemptingSensor } from "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorTemptingSensor"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $PathfinderMob, $PathfinderMob$$Type } from "packages/net/minecraft/world/entity/$PathfinderMob"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"

export class $TemptingSensor extends $Sensor<$PathfinderMob> implements $AccessorTemptingSensor {
static readonly "TEMPTATION_RANGE": integer

constructor(ingredient0: $Ingredient$$Type)

public "modifyExpressionValue$ffj000$quark$findTroughs"(object0: any, serverLevel1: $ServerLevel$$Type, pathfinderMob2: $PathfinderMob$$Type): any
}
}

declare module "packages/net/minecraft/world/entity/ai/$Brain$Provider" {
import { $Brain } from "packages/net/minecraft/world/entity/ai/$Brain"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Brain$Provider<E extends $LivingEntity> {
public "makeBrain"(dynamic0: $Dynamic$$Type<any>): $Brain<E>
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$NearestBedSensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $Mob } from "packages/net/minecraft/world/entity/$Mob"

export class $NearestBedSensor extends $Sensor<$Mob> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/village/$ReputationEventType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ReputationEventType {
}

export namespace $ReputationEventType {
const GOLEM_KILLED: $ReputationEventType
const TRADE: $ReputationEventType
const VILLAGER_HURT: $ReputationEventType
const VILLAGER_KILLED: $ReputationEventType
const ZOMBIE_VILLAGER_CURED: $ReputationEventType
function register(string0: string): $ReputationEventType
}
export abstract class $ReputationEventType$$Static implements $ReputationEventType {
static readonly "GOLEM_KILLED": $ReputationEventType
static readonly "TRADE": $ReputationEventType
static readonly "VILLAGER_HURT": $ReputationEventType
static readonly "VILLAGER_KILLED": $ReputationEventType
static readonly "ZOMBIE_VILLAGER_CURED": $ReputationEventType

static "register"(string0: string): $ReputationEventType
}
}

declare module "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager$Occupancy" {
import { $PoiRecord } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiRecord"
import { $Enum } from "packages/java/lang/$Enum"
import { $Predicate } from "packages/java/util/function/$Predicate"

export class $PoiManager$Occupancy extends $Enum<$PoiManager$Occupancy> {
static readonly "ANY": $PoiManager$Occupancy
static readonly "HAS_SPACE": $PoiManager$Occupancy
static readonly "IS_OCCUPIED": $PoiManager$Occupancy

public "getTest"(): $Predicate<$PoiRecord>
public static "valueOf"(string0: string): $PoiManager$Occupancy
public static "values"(): $PoiManager$Occupancy[]
get "test"(): $Predicate<$PoiRecord>
}
}

declare module "packages/net/minecraft/world/entity/ai/goal/$EatBlockGoal" {
import { $Goal } from "packages/net/minecraft/world/entity/ai/goal/$Goal"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $EatBlockGoal extends $Goal {
static readonly "IS_TALL_GRASS": $Predicate<$BlockState>

constructor(mob0: $Mob$$Type)

public "getEatAnimationTick"(): integer
get "eatAnimationTick"(): integer
}
}

declare module "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $BooleanSupplier$$Type } from "packages/java/util/function/$BooleanSupplier"
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $PoiRecord } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiRecord"
import { $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $PoiType, $PoiType$$Type } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $PoiSection } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiSection"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $LevelChunkSection$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunkSection"
import { $SectionStorage } from "packages/net/minecraft/world/level/chunk/storage/$SectionStorage"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $PoiManager$Occupancy$$Type } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager$Occupancy"
import { $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"

export class $PoiManager extends $SectionStorage<$PoiSection> {
static readonly "MAX_VILLAGE_DISTANCE": integer
static readonly "VILLAGE_SECTION_SIZE": integer

constructor(path0: $Path$$Type, dataFixer1: $DataFixer$$Type, boolean2: boolean, registryAccess3: $RegistryAccess$$Type, levelHeightAccessor4: $LevelHeightAccessor$$Type)

public "add"(blockPos0: $BlockPos$$Type, holder1: $Holder$$Type<$PoiType$$Type>): void
public "checkConsistencyWithBlocks"(sectionPos0: $SectionPos$$Type, levelChunkSection1: $LevelChunkSection$$Type): void
public "ensureLoadedAndValid"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, int2: integer): void
public "exists"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>): boolean
public "existsAtPosition"(resourceKey0: $ResourceKey$$Type<$PoiType>, blockPos1: $BlockPos$$Type): boolean
public "find"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer, occupancy4: $PoiManager$Occupancy$$Type): $Optional<$BlockPos>
public "findAll"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer, occupancy4: $PoiManager$Occupancy$$Type): $Stream<$BlockPos>
public "findAllClosestFirstWithType"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer, occupancy4: $PoiManager$Occupancy$$Type): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>
public "findAllWithType"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer, occupancy4: $PoiManager$Occupancy$$Type): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>
public "findClosest"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer, occupancy4: $PoiManager$Occupancy$$Type): $Optional<$BlockPos>
public "findClosest"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, occupancy3: $PoiManager$Occupancy$$Type): $Optional<$BlockPos>
public "findClosestWithType"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, occupancy3: $PoiManager$Occupancy$$Type): $Optional<$Pair<$Holder<$PoiType>, $BlockPos>>
public "getCountInRange"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, occupancy3: $PoiManager$Occupancy$$Type): long
/** @deprecated */
public "getFreeTickets"(blockPos0: $BlockPos$$Type): integer
public "getInChunk"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, chunkPos1: $ChunkPos$$Type, occupancy2: $PoiManager$Occupancy$$Type): $Stream<$PoiRecord>
public "getInRange"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, occupancy3: $PoiManager$Occupancy$$Type): $Stream<$PoiRecord>
public "getInSquare"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, occupancy3: $PoiManager$Occupancy$$Type): $Stream<$PoiRecord>
public "getRandom"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, occupancy2: $PoiManager$Occupancy$$Type, blockPos3: $BlockPos$$Type, int4: integer, randomSource5: $RandomSource$$Type): $Optional<$BlockPos>
public "getType"(blockPos0: $BlockPos$$Type): $Optional<$Holder<$PoiType>>
public "release"(blockPos0: $BlockPos$$Type): boolean
public "remove"(blockPos0: $BlockPos$$Type): void
public "sectionsToVillage"(sectionPos0: $SectionPos$$Type): integer
public "take"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, biPredicate1: $BiPredicate$$Type<$Holder$$Type<$PoiType$$Type>, $BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer): $Optional<$BlockPos>
public "tick"(booleanSupplier0: $BooleanSupplier$$Type): void
}
}

declare module "packages/net/minecraft/world/entity/ai/village/poi/$PoiRecord" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $PoiType, $PoiType$$Type } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $PoiRecord {
constructor(blockPos0: $BlockPos$$Type, holder1: $Holder$$Type<$PoiType$$Type>, runnable2: $Runnable$$Type)

public static "codec"(runnable0: $Runnable$$Type): $Codec<$PoiRecord>
/** @deprecated */
public "getFreeTickets"(): integer
public "getPoiType"(): $Holder<$PoiType>
public "getPos"(): $BlockPos
public "hasSpace"(): boolean
public "isOccupied"(): boolean
get "freeTickets"(): integer
get "poiType"(): $Holder<$PoiType>
get "pos"(): $BlockPos
get "occupied"(): boolean
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$PlayerSensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PlayerSensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$HurtBySensor" {
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $HurtBySensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "packages/net/minecraft/world/entity/ai/memory/$ExpirableValue" {
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $ExpirableValue<T> {
constructor(t0: T, long1: long)

public "canExpire"(): boolean
public static "codec"<T>(codec0: $Codec$$Type<T>): $Codec<$ExpirableValue<T>>
public "getTimeToLive"(): long
public "getValue"(): T
public "hasExpired"(): boolean
public static "of"<T>(t0: T): $ExpirableValue<T>
public static "of"<T>(t0: T, long1: long): $ExpirableValue<T>
public "tick"(): void
get "timeToLive"(): long
get "value"(): T
}
}

