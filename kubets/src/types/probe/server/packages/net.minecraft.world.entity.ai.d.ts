declare module "packages/net/minecraft/world/entity/ai/memory/$MemoryStatus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MemoryStatus$$Type = ($MemoryStatus | ("value_present" | "value_absent" | "registered"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MemoryStatus_ = $MemoryStatus$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/village/poi/$PoiSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PoiSection$$Type = ($PoiSection);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PoiSection_ = $PoiSection$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttributeInstance$$Type = ($AttributeInstance);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttributeInstance_ = $AttributeInstance$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$DummySensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DummySensor$$Type = ($DummySensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DummySensor_ = $DummySensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/control/$LookControl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LookControl$$Type = ($LookControl);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LookControl_ = $LookControl$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/control/$MoveControl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MoveControl$$Type = ($MoveControl);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MoveControl_ = $MoveControl$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$SensorType" {
import { $DummySensor } from "packages/net/minecraft/world/entity/ai/sensing/$DummySensor"
import { $NearestItemSensor } from "packages/net/minecraft/world/entity/ai/sensing/$NearestItemSensor"
import { $FrogAttackablesSensor } from "packages/net/minecraft/world/entity/ai/sensing/$FrogAttackablesSensor"
import { $Sensor, $Sensor$$Type } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $TemptingSensor } from "packages/net/minecraft/world/entity/ai/sensing/$TemptingSensor"
import { $AdultSensor } from "packages/net/minecraft/world/entity/ai/sensing/$AdultSensor"
import { $GolemSensor } from "packages/net/minecraft/world/entity/ai/sensing/$GolemSensor"
import { $HurtBySensor } from "packages/net/minecraft/world/entity/ai/sensing/$HurtBySensor"
import { $AxolotlAttackablesSensor } from "packages/net/minecraft/world/entity/ai/sensing/$AxolotlAttackablesSensor"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $VillagerBabiesSensor } from "packages/net/minecraft/world/entity/ai/sensing/$VillagerBabiesSensor"
import { $WardenEntitySensor } from "packages/net/minecraft/world/entity/ai/sensing/$WardenEntitySensor"
import { $NearestLivingEntitySensor } from "packages/net/minecraft/world/entity/ai/sensing/$NearestLivingEntitySensor"
import { $PiglinBruteSpecificSensor } from "packages/net/minecraft/world/entity/ai/sensing/$PiglinBruteSpecificSensor"
import { $IsInWaterSensor } from "packages/net/minecraft/world/entity/ai/sensing/$IsInWaterSensor"
import { $PlayerSensor } from "packages/net/minecraft/world/entity/ai/sensing/$PlayerSensor"
import { $NearestBedSensor } from "packages/net/minecraft/world/entity/ai/sensing/$NearestBedSensor"
import { $SecondaryPoiSensor } from "packages/net/minecraft/world/entity/ai/sensing/$SecondaryPoiSensor"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $VillagerHostilesSensor } from "packages/net/minecraft/world/entity/ai/sensing/$VillagerHostilesSensor"
import { $HoglinSpecificSensor } from "packages/net/minecraft/world/entity/ai/sensing/$HoglinSpecificSensor"
import { $PiglinSpecificSensor } from "packages/net/minecraft/world/entity/ai/sensing/$PiglinSpecificSensor"

export class $SensorType<U extends $Sensor<any>> {
static readonly "AXOLOTL_ATTACKABLES": $SensorType<$AxolotlAttackablesSensor>
static readonly "AXOLOTL_TEMPTATIONS": $SensorType<$TemptingSensor>
static readonly "CAMEL_TEMPTATIONS": $SensorType<$TemptingSensor>
static readonly "DUMMY": $SensorType<$DummySensor>
static readonly "FROG_ATTACKABLES": $SensorType<$FrogAttackablesSensor>
static readonly "FROG_TEMPTATIONS": $SensorType<$TemptingSensor>
static readonly "GOAT_TEMPTATIONS": $SensorType<$TemptingSensor>
static readonly "GOLEM_DETECTED": $SensorType<$GolemSensor>
static readonly "HOGLIN_SPECIFIC_SENSOR": $SensorType<$HoglinSpecificSensor>
static readonly "HURT_BY": $SensorType<$HurtBySensor>
static readonly "IS_IN_WATER": $SensorType<$IsInWaterSensor>
static readonly "NEAREST_ADULT": $SensorType<$AdultSensor>
static readonly "NEAREST_BED": $SensorType<$NearestBedSensor>
static readonly "NEAREST_ITEMS": $SensorType<$NearestItemSensor>
static readonly "NEAREST_LIVING_ENTITIES": $SensorType<$NearestLivingEntitySensor<$LivingEntity>>
static readonly "NEAREST_PLAYERS": $SensorType<$PlayerSensor>
static readonly "PIGLIN_BRUTE_SPECIFIC_SENSOR": $SensorType<$PiglinBruteSpecificSensor>
static readonly "PIGLIN_SPECIFIC_SENSOR": $SensorType<$PiglinSpecificSensor>
static readonly "SECONDARY_POIS": $SensorType<$SecondaryPoiSensor>
static readonly "SNIFFER_TEMPTATIONS": $SensorType<$TemptingSensor>
static readonly "VILLAGER_BABIES": $SensorType<$VillagerBabiesSensor>
static readonly "VILLAGER_HOSTILES": $SensorType<$VillagerHostilesSensor>
static readonly "WARDEN_ENTITY_SENSOR": $SensorType<$WardenEntitySensor>

constructor(supplier0: $Supplier$$Type<U>)

public "create"(): U
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.SensorType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.SensorTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SensorType$$Type<U extends $Sensor<any>> = ($SensorType<U> | Special.SensorType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SensorType_<U extends $Sensor<any>> = $SensorType$$Type<U>;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$HoglinSpecificSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HoglinSpecificSensor$$Type = ($HoglinSpecificSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HoglinSpecificSensor_ = $HoglinSpecificSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$VillagerBabiesSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VillagerBabiesSensor$$Type = ($VillagerBabiesSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VillagerBabiesSensor_ = $VillagerBabiesSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/behavior/$Behavior$Status" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Behavior$Status$$Type = ($Behavior$Status | ("stopped" | "running"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Behavior$Status_ = $Behavior$Status$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$NearestItemSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NearestItemSensor$$Type = ($NearestItemSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NearestItemSensor_ = $NearestItemSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PathNavigation$$Type = ($PathNavigation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PathNavigation_ = $PathNavigation$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/$Brain$MemoryValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Brain$MemoryValue$$Type<U> = ($Brain$MemoryValue<U>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Brain$MemoryValue_<U> = $Brain$MemoryValue$$Type<U>;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$NearestVisibleLivingEntitySensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NearestVisibleLivingEntitySensor$$Type = ($NearestVisibleLivingEntitySensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NearestVisibleLivingEntitySensor_ = $NearestVisibleLivingEntitySensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/goal/$Goal$Flag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Goal$Flag$$Type = ($Goal$Flag | ("move" | "look" | "jump" | "target"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Goal$Flag_ = $Goal$Flag$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$AdultSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AdultSensor$$Type = ($AdultSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AdultSensor_ = $AdultSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$Attribute" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $TooltipFlag$$Type } from "packages/net/minecraft/world/item/$TooltipFlag"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UUID } from "packages/java/util/$UUID"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $IFormattableAttribute } from "packages/dev/shadowsoffire/attributeslib/api/$IFormattableAttribute"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export class $Attribute implements $IFormattableAttribute {
static readonly "MAX_NAME_LENGTH": integer

public "addBonusTooltips"(itemStack0: $ItemStack$$Type, consumer1: $Consumer$$Type<$Component$$Type>, tooltipFlag2: $TooltipFlag$$Type): void
public "getBaseUUID"(): $UUID
public "getBonusBaseValue"(itemStack0: $ItemStack$$Type): double
public "getDebugInfo"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $Component
public "getDefaultValue"(): double
public "getDescriptionId"(): string
public "isClientSyncable"(): boolean
public static "isNullOrAddition"(operation0: $AttributeModifier$Operation$$Type): boolean
public "sanitizeValue"(double0: double): double
public "setSyncable"(boolean0: boolean): $Attribute
public "ths"(): $Attribute
public "toBaseComponent"(double0: double, double1: double, boolean2: boolean, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
public static "toBaseComponent"(attribute0: $Attribute$$Type, double1: double, double2: double, boolean3: boolean, tooltipFlag4: $TooltipFlag$$Type): $MutableComponent
public static "toComponent"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
public "toComponent"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $MutableComponent
public static "toValueComponent"(attribute0: $Attribute$$Type, operation1: $AttributeModifier$Operation$$Type, double2: double, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
public "toValueComponent"(operation0: $AttributeModifier$Operation$$Type, double1: double, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
get "baseUUID"(): $UUID
get "defaultValue"(): double
get "descriptionId"(): string
get "clientSyncable"(): boolean
set "syncable"(value: boolean)
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Attribute
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.AttributeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Attribute$$Type = ($Attribute | Special.Attribute);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Attribute_ = $Attribute$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$SecondaryPoiSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SecondaryPoiSensor$$Type = ($SecondaryPoiSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SecondaryPoiSensor_ = $SecondaryPoiSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttributeModifier$$Type = ($AttributeModifier);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttributeModifier_ = $AttributeModifier$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttributeMap$$Type = ($AttributeMap);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttributeMap_ = $AttributeMap$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttributeSupplier$$Type = ($AttributeSupplier);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttributeSupplier_ = $AttributeSupplier$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$Sensor" {
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Sensor$$Type<E extends $LivingEntity> = ($Sensor<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Sensor_<E extends $LivingEntity> = $Sensor$$Type<E>;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$PiglinSpecificSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PiglinSpecificSensor$$Type = ($PiglinSpecificSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PiglinSpecificSensor_ = $PiglinSpecificSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/behavior/$Behavior" {
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Behavior$$Type<E extends $LivingEntity> = ($Behavior<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Behavior_<E extends $LivingEntity> = $Behavior$$Type<E>;
}
}

declare module "packages/net/minecraft/world/entity/ai/gossip/$GossipType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GossipType$$Type = ($GossipType | ("major_negative" | "minor_negative" | "minor_positive" | "major_positive" | "trading"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GossipType_ = $GossipType$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/goal/$Goal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Goal$$Type = ($Goal);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Goal_ = $Goal$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/memory/$NearestVisibleLivingEntities" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NearestVisibleLivingEntities$$Type = ($NearestVisibleLivingEntities);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NearestVisibleLivingEntities_ = $NearestVisibleLivingEntities$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttributeModifier$Operation$$Type = ($AttributeModifier$Operation | ("addition" | "multiply_base" | "multiply_total"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttributeModifier$Operation_ = $AttributeModifier$Operation$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$PiglinBruteSpecificSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PiglinBruteSpecificSensor$$Type = ($PiglinBruteSpecificSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PiglinBruteSpecificSensor_ = $PiglinBruteSpecificSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/village/poi/$PoiType" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Record } from "packages/java/lang/$Record"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $PoiType extends $Record {
static readonly "NONE": $Predicate<$Holder<$PoiType>>
"matchingStates": $Set<$BlockState>

constructor(set0: $Set$$Type<$BlockState$$Type>, int1: integer, int2: integer)

public "is"(blockState0: $BlockState$$Type): boolean
public "matchingStates"(): $Set<$BlockState>
public "maxTickets"(): integer
public "validRange"(): integer
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.PointOfInterestType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.PointOfInterestTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PoiType$$Type = ($PoiType | Special.PointOfInterestType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PoiType_ = $PoiType$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/village/$VillageSiege" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VillageSiege$$Type = ($VillageSiege);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VillageSiege_ = $VillageSiege$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$GolemSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GolemSensor$$Type = ($GolemSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GolemSensor_ = $GolemSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/goal/$WrappedGoal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WrappedGoal$$Type = ($WrappedGoal);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WrappedGoal_ = $WrappedGoal$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$IsInWaterSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IsInWaterSensor$$Type = ($IsInWaterSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IsInWaterSensor_ = $IsInWaterSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/$Brain" {
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Brain$$Type<E extends $LivingEntity> = ($Brain<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Brain_<E extends $LivingEntity> = $Brain$$Type<E>;
}
}

declare module "packages/net/minecraft/world/entity/ai/gossip/$GossipContainer$EntityGossips" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GossipContainer$EntityGossips$$Type = ($GossipContainer$EntityGossips);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GossipContainer$EntityGossips_ = $GossipContainer$EntityGossips$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/behavior/$PositionTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PositionTracker$$Type = ($PositionTracker);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PositionTracker_ = $PositionTracker$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/control/$Control" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Control$$Type = ($Control);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Control_ = $Control$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType" {
import { $AbstractPiglin } from "packages/net/minecraft/world/entity/monster/piglin/$AbstractPiglin"
import { $UUID } from "packages/java/util/$UUID"
import { $DamageSource } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $NearestVisibleLivingEntities } from "packages/net/minecraft/world/entity/ai/memory/$NearestVisibleLivingEntities"
import { $ExpirableValue } from "packages/net/minecraft/world/entity/ai/memory/$ExpirableValue"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $Path } from "packages/net/minecraft/world/level/pathfinder/$Path"
import { $Mob } from "packages/net/minecraft/world/entity/$Mob"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set } from "packages/java/util/$Set"
import { $GlobalPos } from "packages/net/minecraft/core/$GlobalPos"
import { $Hoglin } from "packages/net/minecraft/world/entity/monster/hoglin/$Hoglin"
import { $AgeableMob } from "packages/net/minecraft/world/entity/$AgeableMob"
import { $List } from "packages/java/util/$List"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $WalkTarget } from "packages/net/minecraft/world/entity/ai/memory/$WalkTarget"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $ItemEntity } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $PositionTracker } from "packages/net/minecraft/world/entity/ai/behavior/$PositionTracker"
import { $Unit } from "packages/net/minecraft/util/$Unit"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $MemoryModuleType<U> {
static readonly "ADMIRING_DISABLED": $MemoryModuleType<boolean>
static readonly "ADMIRING_ITEM": $MemoryModuleType<boolean>
static readonly "ANGRY_AT": $MemoryModuleType<$UUID>
static readonly "ATE_RECENTLY": $MemoryModuleType<boolean>
static readonly "ATTACK_COOLING_DOWN": $MemoryModuleType<boolean>
static readonly "ATTACK_TARGET": $MemoryModuleType<$LivingEntity>
static readonly "AVOID_TARGET": $MemoryModuleType<$LivingEntity>
static readonly "BREED_TARGET": $MemoryModuleType<$AgeableMob>
static readonly "CANT_REACH_WALK_TARGET_SINCE": $MemoryModuleType<long>
static readonly "CELEBRATE_LOCATION": $MemoryModuleType<$BlockPos>
static readonly "DANCING": $MemoryModuleType<boolean>
static readonly "DIG_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "DISABLE_WALK_TO_ADMIRE_ITEM": $MemoryModuleType<boolean>
static readonly "DISTURBANCE_LOCATION": $MemoryModuleType<$BlockPos>
static readonly "DOORS_TO_CLOSE": $MemoryModuleType<$Set<$GlobalPos>>
static readonly "DUMMY": $MemoryModuleType<void>
static readonly "GAZE_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "GOLEM_DETECTED_RECENTLY": $MemoryModuleType<boolean>
static readonly "HAS_HUNTING_COOLDOWN": $MemoryModuleType<boolean>
static readonly "HEARD_BELL_TIME": $MemoryModuleType<long>
static readonly "HIDING_PLACE": $MemoryModuleType<$GlobalPos>
static readonly "HOME": $MemoryModuleType<$GlobalPos>
static readonly "HUNTED_RECENTLY": $MemoryModuleType<boolean>
static readonly "HURT_BY": $MemoryModuleType<$DamageSource>
static readonly "HURT_BY_ENTITY": $MemoryModuleType<$LivingEntity>
static readonly "INTERACTABLE_DOORS": $MemoryModuleType<$List<$GlobalPos>>
static readonly "INTERACTION_TARGET": $MemoryModuleType<$LivingEntity>
static readonly "IS_EMERGING": $MemoryModuleType<$Unit>
static readonly "IS_IN_WATER": $MemoryModuleType<$Unit>
static readonly "IS_PANICKING": $MemoryModuleType<boolean>
static readonly "IS_PREGNANT": $MemoryModuleType<$Unit>
static readonly "IS_SNIFFING": $MemoryModuleType<$Unit>
static readonly "IS_TEMPTED": $MemoryModuleType<boolean>
static readonly "ITEM_PICKUP_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "JOB_SITE": $MemoryModuleType<$GlobalPos>
static readonly "LAST_SLEPT": $MemoryModuleType<long>
static readonly "LAST_WOKEN": $MemoryModuleType<long>
static readonly "LAST_WORKED_AT_POI": $MemoryModuleType<long>
static readonly "LIKED_NOTEBLOCK_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "LIKED_NOTEBLOCK_POSITION": $MemoryModuleType<$GlobalPos>
static readonly "LIKED_PLAYER": $MemoryModuleType<$UUID>
static readonly "LONG_JUMP_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "LONG_JUMP_MID_JUMP": $MemoryModuleType<boolean>
static readonly "LOOK_TARGET": $MemoryModuleType<$PositionTracker>
static readonly "MEETING_POINT": $MemoryModuleType<$GlobalPos>
static readonly "NEARBY_ADULT_PIGLINS": $MemoryModuleType<$List<$AbstractPiglin>>
static readonly "NEAREST_ATTACKABLE": $MemoryModuleType<$LivingEntity>
static readonly "NEAREST_BED": $MemoryModuleType<$BlockPos>
static readonly "NEAREST_HOSTILE": $MemoryModuleType<$LivingEntity>
static readonly "NEAREST_LIVING_ENTITIES": $MemoryModuleType<$List<$LivingEntity>>
static readonly "NEAREST_PLAYERS": $MemoryModuleType<$List<$Player>>
static readonly "NEAREST_PLAYER_HOLDING_WANTED_ITEM": $MemoryModuleType<$Player>
static readonly "NEAREST_REPELLENT": $MemoryModuleType<$BlockPos>
static readonly "NEAREST_TARGETABLE_PLAYER_NOT_WEARING_GOLD": $MemoryModuleType<$Player>
static readonly "NEAREST_VISIBLE_ADULT": $MemoryModuleType<$AgeableMob>
static readonly "NEAREST_VISIBLE_ADULT_HOGLINS": $MemoryModuleType<$List<$Hoglin>>
static readonly "NEAREST_VISIBLE_ADULT_PIGLIN": $MemoryModuleType<$AbstractPiglin>
static readonly "NEAREST_VISIBLE_ADULT_PIGLINS": $MemoryModuleType<$List<$AbstractPiglin>>
static readonly "NEAREST_VISIBLE_ATTACKABLE_PLAYER": $MemoryModuleType<$Player>
static readonly "NEAREST_VISIBLE_BABY_HOGLIN": $MemoryModuleType<$Hoglin>
static readonly "NEAREST_VISIBLE_HUNTABLE_HOGLIN": $MemoryModuleType<$Hoglin>
static readonly "NEAREST_VISIBLE_LIVING_ENTITIES": $MemoryModuleType<$NearestVisibleLivingEntities>
static readonly "NEAREST_VISIBLE_NEMESIS": $MemoryModuleType<$Mob>
static readonly "NEAREST_VISIBLE_PLAYER": $MemoryModuleType<$Player>
static readonly "NEAREST_VISIBLE_WANTED_ITEM": $MemoryModuleType<$ItemEntity>
static readonly "NEAREST_VISIBLE_ZOMBIFIED": $MemoryModuleType<$LivingEntity>
static readonly "PACIFIED": $MemoryModuleType<boolean>
static readonly "PATH": $MemoryModuleType<$Path>
static readonly "PLAY_DEAD_TICKS": $MemoryModuleType<integer>
static readonly "POTENTIAL_JOB_SITE": $MemoryModuleType<$GlobalPos>
static readonly "RAM_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "RAM_TARGET": $MemoryModuleType<$Vec3>
static readonly "RECENT_PROJECTILE": $MemoryModuleType<$Unit>
static readonly "RIDE_TARGET": $MemoryModuleType<$Entity>
static readonly "ROAR_SOUND_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "ROAR_SOUND_DELAY": $MemoryModuleType<$Unit>
static readonly "ROAR_TARGET": $MemoryModuleType<$LivingEntity>
static readonly "SECONDARY_JOB_SITE": $MemoryModuleType<$List<$GlobalPos>>
static readonly "SNIFFER_DIGGING": $MemoryModuleType<boolean>
static readonly "SNIFFER_EXPLORED_POSITIONS": $MemoryModuleType<$List<$GlobalPos>>
static readonly "SNIFFER_HAPPY": $MemoryModuleType<boolean>
static readonly "SNIFFER_SNIFFING_TARGET": $MemoryModuleType<$BlockPos>
static readonly "SNIFF_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "SONIC_BOOM_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "SONIC_BOOM_SOUND_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "SONIC_BOOM_SOUND_DELAY": $MemoryModuleType<$Unit>
static readonly "TEMPTATION_COOLDOWN_TICKS": $MemoryModuleType<integer>
static readonly "TEMPTING_PLAYER": $MemoryModuleType<$Player>
static readonly "TIME_TRYING_TO_REACH_ADMIRE_ITEM": $MemoryModuleType<integer>
static readonly "TOUCH_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "UNIVERSAL_ANGER": $MemoryModuleType<boolean>
static readonly "UNREACHABLE_TONGUE_TARGETS": $MemoryModuleType<$List<$UUID>>
static readonly "VIBRATION_COOLDOWN": $MemoryModuleType<$Unit>
static readonly "VISIBLE_ADULT_HOGLIN_COUNT": $MemoryModuleType<integer>
static readonly "VISIBLE_ADULT_PIGLIN_COUNT": $MemoryModuleType<integer>
static readonly "VISIBLE_VILLAGER_BABIES": $MemoryModuleType<$List<$LivingEntity>>
static readonly "WALK_TARGET": $MemoryModuleType<$WalkTarget>

constructor(optional0: $Optional$$Type<$Codec$$Type<U>>)

public "getCodec"(): $Optional<$Codec<$ExpirableValue<U>>>
get "codec"(): $Optional<$Codec<$ExpirableValue<U>>>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.MemoryModuleType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.MemoryModuleTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MemoryModuleType$$Type<U> = ($MemoryModuleType<U> | Special.MemoryModuleType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MemoryModuleType_<U> = $MemoryModuleType$$Type<U>;
}
}

declare module "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TargetingConditions$$Type = ($TargetingConditions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TargetingConditions_ = $TargetingConditions$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$Sensing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Sensing$$Type = ($Sensing);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Sensing_ = $Sensing$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$RangedAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RangedAttribute$$Type = ($RangedAttribute);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RangedAttribute_ = $RangedAttribute$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/memory/$WalkTarget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WalkTarget$$Type = ($WalkTarget);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WalkTarget_ = $WalkTarget$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$NearestLivingEntitySensor" {
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NearestLivingEntitySensor$$Type<T extends $LivingEntity> = ($NearestLivingEntitySensor<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NearestLivingEntitySensor_<T extends $LivingEntity> = $NearestLivingEntitySensor$$Type<T>;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$FrogAttackablesSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FrogAttackablesSensor$$Type = ($FrogAttackablesSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FrogAttackablesSensor_ = $FrogAttackablesSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/control/$JumpControl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $JumpControl$$Type = ($JumpControl);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $JumpControl_ = $JumpControl$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttributeSupplier$Builder$$Type = ($AttributeSupplier$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttributeSupplier$Builder_ = $AttributeSupplier$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/gossip/$GossipContainer$GossipEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GossipContainer$GossipEntry$$Type = ($GossipContainer$GossipEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GossipContainer$GossipEntry_ = $GossipContainer$GossipEntry$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/goal/$GoalSelector" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GoalSelector$$Type = ($GoalSelector);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GoalSelector_ = $GoalSelector$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl" {
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BehaviorControl$$Type<E extends $LivingEntity> = ($BehaviorControl<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BehaviorControl_<E extends $LivingEntity> = $BehaviorControl$$Type<E>;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$WardenEntitySensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WardenEntitySensor$$Type = ($WardenEntitySensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WardenEntitySensor_ = $WardenEntitySensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$AxolotlAttackablesSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AxolotlAttackablesSensor$$Type = ($AxolotlAttackablesSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AxolotlAttackablesSensor_ = $AxolotlAttackablesSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/gossip/$GossipContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GossipContainer$$Type = ($GossipContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GossipContainer_ = $GossipContainer$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$VillagerHostilesSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VillagerHostilesSensor$$Type = ($VillagerHostilesSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VillagerHostilesSensor_ = $VillagerHostilesSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$TemptingSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TemptingSensor$$Type = ($TemptingSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TemptingSensor_ = $TemptingSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/$Brain$Provider" {
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Brain$Provider$$Type<E extends $LivingEntity> = ($Brain$Provider<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Brain$Provider_<E extends $LivingEntity> = $Brain$Provider$$Type<E>;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$NearestBedSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NearestBedSensor$$Type = ($NearestBedSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NearestBedSensor_ = $NearestBedSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/village/$ReputationEventType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReputationEventType$$Type = ($ReputationEventType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReputationEventType_ = $ReputationEventType$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager$Occupancy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PoiManager$Occupancy$$Type = ($PoiManager$Occupancy | ("has_space" | "is_occupied" | "any"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PoiManager$Occupancy_ = $PoiManager$Occupancy$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/goal/$EatBlockGoal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EatBlockGoal$$Type = ($EatBlockGoal);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EatBlockGoal_ = $EatBlockGoal$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PoiManager$$Type = ($PoiManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PoiManager_ = $PoiManager$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/village/poi/$PoiRecord" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PoiRecord$$Type = ($PoiRecord);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PoiRecord_ = $PoiRecord$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$PlayerSensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerSensor$$Type = ($PlayerSensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerSensor_ = $PlayerSensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/sensing/$HurtBySensor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HurtBySensor$$Type = ($HurtBySensor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HurtBySensor_ = $HurtBySensor$$Type;
}
}

declare module "packages/net/minecraft/world/entity/ai/memory/$ExpirableValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ExpirableValue$$Type<T> = ($ExpirableValue<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ExpirableValue_<T> = $ExpirableValue$$Type<T>;
}
}

