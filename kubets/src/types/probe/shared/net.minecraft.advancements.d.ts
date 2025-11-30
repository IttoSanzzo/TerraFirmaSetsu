declare module "packages/net/minecraft/advancements/$CriterionProgress" {
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $Date } from "packages/java/util/$Date"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $CriterionProgress {
constructor()

public static "fromJson"(string0: string): $CriterionProgress
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $CriterionProgress
public "getObtained"(): $Date
public "grant"(): void
public "isDone"(): boolean
public "revoke"(): void
public "serializeToJson"(): $JsonElement
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "obtained"(): $Date
get "done"(): boolean
}
}

declare module "packages/net/minecraft/advancements/$AdvancementProgress" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Date } from "packages/java/util/$Date"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $CriterionProgress } from "packages/net/minecraft/advancements/$CriterionProgress"
import { $Criterion$$Type } from "packages/net/minecraft/advancements/$Criterion"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Map$$Type } from "packages/java/util/$Map"

export class $AdvancementProgress implements $Comparable<$AdvancementProgress> {
constructor()

public "compareTo"(advancementProgress0: $AdvancementProgress$$Type): integer
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $AdvancementProgress
public "getCompletedCriteria"(): $Iterable<string>
public "getCriterion"(string0: string): $CriterionProgress
public "getFirstProgressDate"(): $Date
public "getPercent"(): float
public "getProgressText"(): string
public "getRemainingCriteria"(): $Iterable<string>
public "grantProgress"(string0: string): boolean
public "hasProgress"(): boolean
public "isDone"(): boolean
public "revokeProgress"(string0: string): boolean
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "update"(map0: $Map$$Type<string, $Criterion$$Type>, string1ss: string[][]): void
get "completedCriteria"(): $Iterable<string>
get "firstProgressDate"(): $Date
get "percent"(): float
get "progressText"(): string
get "remainingCriteria"(): $Iterable<string>
get "done"(): boolean
}
}

declare module "packages/net/minecraft/advancements/$AdvancementRewards$Builder" {
import { $AdvancementRewards } from "packages/net/minecraft/advancements/$AdvancementRewards"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $AdvancementRewards$Builder {
constructor()

public "addExperience"(int0: integer): $AdvancementRewards$Builder
public "addLootTable"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public "addRecipe"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public "build"(): $AdvancementRewards
public static "experience"(int0: integer): $AdvancementRewards$Builder
public static "function"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public static "loot"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public static "recipe"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public "runs"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
}
}

declare module "packages/net/minecraft/advancements/$CriterionTrigger" {
import { $CriterionTrigger$Listener$$Type } from "packages/net/minecraft/advancements/$CriterionTrigger$Listener"
import { $PlayerAdvancements$$Type } from "packages/net/minecraft/server/$PlayerAdvancements"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $DeserializationContext$$Type } from "packages/net/minecraft/advancements/critereon/$DeserializationContext"
import { $CriterionTriggerInstance } from "packages/net/minecraft/advancements/$CriterionTriggerInstance"

export interface $CriterionTrigger<T extends $CriterionTriggerInstance> {
"addPlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
"createInstance"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): T
"getId"(): $ResourceLocation
"removePlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
"removePlayerListeners"(playerAdvancements0: $PlayerAdvancements$$Type): void
get "id"(): $ResourceLocation
}

export namespace $CriterionTrigger {
const probejs$$marker: never
}
export abstract class $CriterionTrigger$$Static<T extends $CriterionTriggerInstance> implements $CriterionTrigger<T> {
}
}

declare module "packages/net/minecraft/advancements/$Criterion" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $DeserializationContext$$Type } from "packages/net/minecraft/advancements/critereon/$DeserializationContext"
import { $CriterionTriggerInstance, $CriterionTriggerInstance$$Type } from "packages/net/minecraft/advancements/$CriterionTriggerInstance"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $Criterion {
constructor(criterionTriggerInstance0: $CriterionTriggerInstance$$Type)
constructor()

public static "criteriaFromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): $Map<string, $Criterion>
public static "criteriaFromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Map<string, $Criterion>
public static "criterionFromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): $Criterion
public static "criterionFromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Criterion
public "getTrigger"(): $CriterionTriggerInstance
public "serializeToJson"(): $JsonElement
public static "serializeToNetwork"(map0: $Map$$Type<string, $Criterion$$Type>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "trigger"(): $CriterionTriggerInstance
}
}

declare module "packages/net/minecraft/advancements/$CriterionTrigger$Listener" {
import { $PlayerAdvancements$$Type } from "packages/net/minecraft/server/$PlayerAdvancements"
import { $Advancement$$Type } from "packages/net/minecraft/advancements/$Advancement"
import { $CriterionTriggerInstance, $CriterionTriggerInstance$$Type } from "packages/net/minecraft/advancements/$CriterionTriggerInstance"

export class $CriterionTrigger$Listener<T extends $CriterionTriggerInstance> {
constructor(t0: T, advancement1: $Advancement$$Type, string2: string)

public "getTriggerInstance"(): T
public "run"(playerAdvancements0: $PlayerAdvancements$$Type): void
get "triggerInstance"(): T
}
}

declare module "packages/net/minecraft/advancements/$Advancement" {
import { $Advancement$Builder } from "packages/net/minecraft/advancements/$Advancement$Builder"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $DisplayInfo, $DisplayInfo$$Type } from "packages/net/minecraft/advancements/$DisplayInfo"
import { $AdvancementRewards, $AdvancementRewards$$Type } from "packages/net/minecraft/advancements/$AdvancementRewards"
import { $Criterion, $Criterion$$Type } from "packages/net/minecraft/advancements/$Criterion"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $Advancement {
constructor(resourceLocation0: $ResourceLocation$$Type, advancement1: $Advancement$$Type, displayInfo2: $DisplayInfo$$Type, advancementRewards3: $AdvancementRewards$$Type, map4: $Map$$Type<string, $Criterion$$Type>, string5ss: string[][], boolean6: boolean)

public "addChild"(advancement0: $Advancement$$Type): void
public "deconstruct"(): $Advancement$Builder
public "getChatComponent"(): $Component
public "getChildren"(): $Iterable<$Advancement>
public "getCriteria"(): $Map<string, $Criterion>
public "getDisplay"(): $DisplayInfo
public "getId"(): $ResourceLocation
public "getMaxCriteraRequired"(): integer
public "getParent"(): $Advancement
public "getRequirements"(): string[][]
public "getRewards"(): $AdvancementRewards
public static "getRoot"(advancement0: $Advancement$$Type): $Advancement
public "getRoot"(): $Advancement
public "sendsTelemetryEvent"(): boolean
get "criteria"(): $Map<string, $Criterion>
set "criteria"(value: $Map$$Type<string, $Criterion$$Type>)
get "requirements"(): string[][]
set "requirements"(value: string[][])
get "chatComponent"(): $Component
get "children"(): $Iterable<$Advancement>
get "display"(): $DisplayInfo
get "id"(): $ResourceLocation
get "maxCriteraRequired"(): integer
get "parent"(): $Advancement
get "rewards"(): $AdvancementRewards
get "root"(): $Advancement
}
}

declare module "packages/net/minecraft/advancements/$AdvancementRewards" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $CommandFunction$CacheableFunction$$Type } from "packages/net/minecraft/commands/$CommandFunction$CacheableFunction"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $AdvancementRewards {
static readonly "EMPTY": $AdvancementRewards

constructor(int0: integer, resourceLocation1s: $ResourceLocation$$Type[], resourceLocation2s: $ResourceLocation$$Type[], cacheableFunction3: $CommandFunction$CacheableFunction$$Type)

public static "deserialize"(jsonObject0: $JsonObject$$Type): $AdvancementRewards
public "getRecipes"(): $ResourceLocation[]
public "grant"(serverPlayer0: $ServerPlayer$$Type): void
public "serializeToJson"(): $JsonElement
get "recipes"(): $ResourceLocation[]
}
}

declare module "packages/net/minecraft/advancements/critereon/$ItemPredicate" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $MinMaxBounds$Ints$$Type } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import { $NbtPredicate$$Type } from "packages/net/minecraft/advancements/critereon/$NbtPredicate"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $EnchantmentPredicate$$Type } from "packages/net/minecraft/advancements/critereon/$EnchantmentPredicate"
import { $Potion$$Type } from "packages/net/minecraft/world/item/alchemy/$Potion"
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Map } from "packages/java/util/$Map"

export class $ItemPredicate {
static readonly "ANY": $ItemPredicate

constructor()
constructor(tagKey0: $TagKey$$Type<$Item$$Type>, set1: $Set$$Type<$Item$$Type>, ints2: $MinMaxBounds$Ints$$Type, ints3: $MinMaxBounds$Ints$$Type, enchantmentPredicate4s: $EnchantmentPredicate$$Type[], enchantmentPredicate5s: $EnchantmentPredicate$$Type[], potion6: $Potion$$Type, nbtPredicate7: $NbtPredicate$$Type)

public static "fromJson"(jsonElement0: $JsonElement$$Type): $ItemPredicate
public static "fromJsonArray"(jsonElement0: $JsonElement$$Type): $ItemPredicate[]
public static "getPredicates"(): $Map<$ResourceLocation, $Function<$JsonObject, $ItemPredicate>>
public "matches"(itemStack0: $ItemStack$$Type): boolean
public static "register"(resourceLocation0: $ResourceLocation$$Type, function1: $Function$$Type<$JsonObject$$Type, $ItemPredicate>): void
public "serializeToJson"(): $JsonElement
get "items"(): $Set<$Item>
set "items"(value: $Set$$Type<$Item$$Type>)
}
}

declare module "packages/net/minecraft/advancements/critereon/$NbtPredicate" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Tag$$Type } from "packages/net/minecraft/nbt/$Tag"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $NbtPredicate {
static readonly "ANY": $NbtPredicate

constructor(compoundTag0: $CompoundTag$$Type)

public static "fromJson"(jsonElement0: $JsonElement$$Type): $NbtPredicate
public static "getEntityTagToCompare"(entity0: $Entity$$Type): $CompoundTag
public "matches"(tag0: $Tag$$Type): boolean
public "matches"(itemStack0: $ItemStack$$Type): boolean
public "matches"(entity0: $Entity$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $StringReader$$Type } from "packages/com/mojang/brigadier/$StringReader"
import { $MinMaxBounds } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds"

export class $MinMaxBounds$Doubles extends $MinMaxBounds<double> {
static readonly "ANY": $MinMaxBounds$Doubles

constructor(double0: double, double1: double)

public static "atLeast"(double0: double): $MinMaxBounds$Doubles
public static "atMost"(double0: double): $MinMaxBounds$Doubles
public static "between"(double0: double, double1: double): $MinMaxBounds$Doubles
public static "exactly"(double0: double): $MinMaxBounds$Doubles
public static "fromJson"(jsonElement0: $JsonElement$$Type): $MinMaxBounds$Doubles
public static "fromReader"(stringReader0: $StringReader$$Type): $MinMaxBounds$Doubles
public static "fromReader"(stringReader0: $StringReader$$Type, function1: $Function$$Type<double, double>): $MinMaxBounds$Doubles
public "matches"(double0: double): boolean
public "matchesSqr"(double0: double): boolean
}
}

declare module "packages/net/minecraft/advancements/critereon/$DistancePredicate" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $MinMaxBounds$Doubles$$Type } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $DistancePredicate {
static readonly "ANY": $DistancePredicate

constructor(doubles0: $MinMaxBounds$Doubles$$Type, doubles1: $MinMaxBounds$Doubles$$Type, doubles2: $MinMaxBounds$Doubles$$Type, doubles3: $MinMaxBounds$Doubles$$Type, doubles4: $MinMaxBounds$Doubles$$Type)

public static "absolute"(doubles0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
public static "fromJson"(jsonElement0: $JsonElement$$Type): $DistancePredicate
public static "horizontal"(doubles0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
public "matches"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): boolean
public "serializeToJson"(): $JsonElement
public static "vertical"(doubles0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
}
}

declare module "packages/net/minecraft/advancements/$RequirementsStrategy" {
import { $Collection$$Type } from "packages/java/util/$Collection"

export interface $RequirementsStrategy {
"createRequirements"(collection0: $Collection$$Type<string>): string[][]
}

export namespace $RequirementsStrategy {
const AND: $RequirementsStrategy
const OR: $RequirementsStrategy
}
export abstract class $RequirementsStrategy$$Static implements $RequirementsStrategy {
static readonly "AND": $RequirementsStrategy
static readonly "OR": $RequirementsStrategy

}
}

declare module "packages/net/minecraft/advancements/$Advancement$Builder" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $DisplayInfo$$Type } from "packages/net/minecraft/advancements/$DisplayInfo"
import { $AdvancementRewards$$Type } from "packages/net/minecraft/advancements/$AdvancementRewards"
import { $ICondition$IContext$$Type } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $DeserializationContext$$Type } from "packages/net/minecraft/advancements/critereon/$DeserializationContext"
import { $Advancement, $Advancement$$Type } from "packages/net/minecraft/advancements/$Advancement"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $RequirementsStrategy$$Type } from "packages/net/minecraft/advancements/$RequirementsStrategy"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Criterion, $Criterion$$Type } from "packages/net/minecraft/advancements/$Criterion"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $AdvancementRewards$Builder$$Type } from "packages/net/minecraft/advancements/$AdvancementRewards$Builder"
import { $IForgeAdvancementBuilder } from "packages/net/minecraftforge/common/extensions/$IForgeAdvancementBuilder"
import { $CriterionTriggerInstance$$Type } from "packages/net/minecraft/advancements/$CriterionTriggerInstance"
import { $FrameType$$Type } from "packages/net/minecraft/advancements/$FrameType"
import { $Map } from "packages/java/util/$Map"

export class $Advancement$Builder implements $IForgeAdvancementBuilder {
public "addCriterion"(string0: string, criterionTriggerInstance1: $CriterionTriggerInstance$$Type): $Advancement$Builder
public "addCriterion"(string0: string, criterion1: $Criterion$$Type): $Advancement$Builder
public static "advancement"(): $Advancement$Builder
public "build"(resourceLocation0: $ResourceLocation$$Type): $Advancement
public "canBuild"(function0: $Function$$Type<$ResourceLocation$$Type, $Advancement>): boolean
public "display"(itemStack0: $ItemStack$$Type, component1: $Component$$Type, component2: $Component$$Type, resourceLocation3: $ResourceLocation$$Type, frameType4: $FrameType$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean): $Advancement$Builder
public "display"(displayInfo0: $DisplayInfo$$Type): $Advancement$Builder
public "display"(itemLike0: $ItemLike$$Type, component1: $Component$$Type, component2: $Component$$Type, resourceLocation3: $ResourceLocation$$Type, frameType4: $FrameType$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean): $Advancement$Builder
public static "fromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type, iContext2: $ICondition$IContext$$Type): $Advancement$Builder
/** @deprecated */
public static "fromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): $Advancement$Builder
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Advancement$Builder
public "getCriteria"(): $Map<string, $Criterion>
public "parent"(advancement0: $Advancement$$Type): $Advancement$Builder
public "parent"(resourceLocation0: $ResourceLocation$$Type): $Advancement$Builder
public static "recipeAdvancement"(): $Advancement$Builder
public "requirements"(string0ss: string[][]): $Advancement$Builder
public "requirements"(requirementsStrategy0: $RequirementsStrategy$$Type): $Advancement$Builder
public "rewards"(advancementRewards0: $AdvancementRewards$$Type): $Advancement$Builder
public "rewards"(builder0: $AdvancementRewards$Builder$$Type): $Advancement$Builder
public "save"(consumer0: $Consumer$$Type<$Advancement$$Type>, string1: string): $Advancement
public "save"(consumer0: $Consumer$$Type<$Advancement$$Type>, resourceLocation1: $ResourceLocation$$Type, existingFileHelper2: $ExistingFileHelper$$Type): $Advancement
public "serializeToJson"(): $JsonObject
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "criteria"(): $Map<string, $Criterion>
}
}

declare module "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $StringReader$$Type } from "packages/com/mojang/brigadier/$StringReader"
import { $MinMaxBounds } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds"

export class $MinMaxBounds$Ints extends $MinMaxBounds<integer> {
static readonly "ANY": $MinMaxBounds$Ints

constructor(integer0: integer, integer1: integer)

public static "atLeast"(int0: integer): $MinMaxBounds$Ints
public static "atMost"(int0: integer): $MinMaxBounds$Ints
public static "between"(int0: integer, int1: integer): $MinMaxBounds$Ints
public static "exactly"(int0: integer): $MinMaxBounds$Ints
public static "fromJson"(jsonElement0: $JsonElement$$Type): $MinMaxBounds$Ints
public static "fromReader"(stringReader0: $StringReader$$Type): $MinMaxBounds$Ints
public static "fromReader"(stringReader0: $StringReader$$Type, function1: $Function$$Type<integer, integer>): $MinMaxBounds$Ints
public "matches"(int0: integer): boolean
public "matchesSqr"(long0: long): boolean
}
}

declare module "packages/net/minecraft/advancements/critereon/$MinMaxBounds" {
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $SimpleCommandExceptionType } from "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType"

export class $MinMaxBounds<T extends number> {
static readonly "ERROR_EMPTY": $SimpleCommandExceptionType
static readonly "ERROR_SWAPPED": $SimpleCommandExceptionType

public "getMax"(): T
public "getMin"(): T
public "isAny"(): boolean
public "serializeToJson"(): $JsonElement
get "max"(): T
get "min"(): T
get "any"(): boolean
}
}

declare module "packages/net/minecraft/advancements/critereon/$AbstractCriterionTriggerInstance" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SerializationContext$$Type } from "packages/net/minecraft/advancements/critereon/$SerializationContext"
import { $ContextAwarePredicate$$Type } from "packages/net/minecraft/advancements/critereon/$ContextAwarePredicate"
import { $CriterionTriggerInstance } from "packages/net/minecraft/advancements/$CriterionTriggerInstance"

export class $AbstractCriterionTriggerInstance implements $CriterionTriggerInstance {
constructor(resourceLocation0: $ResourceLocation$$Type, contextAwarePredicate1: $ContextAwarePredicate$$Type)

public "getCriterion"(): $ResourceLocation
public "serializeToJson"(serializationContext0: $SerializationContext$$Type): $JsonObject
get "criterion"(): $ResourceLocation
}
}

declare module "packages/net/minecraft/advancements/critereon/$SerializationContext" {
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $LootItemCondition$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"

export class $SerializationContext {
static readonly "INSTANCE": $SerializationContext

constructor()

public "serializeConditions"(lootItemCondition0s: $LootItemCondition$$Type[]): $JsonElement
}
}

declare module "packages/net/minecraft/advancements/critereon/$InventoryChangeTrigger$TriggerInstance" {
import { $ItemPredicate$$Type } from "packages/net/minecraft/advancements/critereon/$ItemPredicate"
import { $AbstractCriterionTriggerInstance } from "packages/net/minecraft/advancements/critereon/$AbstractCriterionTriggerInstance"
import { $MinMaxBounds$Ints$$Type } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $ContextAwarePredicate$$Type } from "packages/net/minecraft/advancements/critereon/$ContextAwarePredicate"

export class $InventoryChangeTrigger$TriggerInstance extends $AbstractCriterionTriggerInstance {
constructor(contextAwarePredicate0: $ContextAwarePredicate$$Type, ints1: $MinMaxBounds$Ints$$Type, ints2: $MinMaxBounds$Ints$$Type, ints3: $MinMaxBounds$Ints$$Type, itemPredicate4s: $ItemPredicate$$Type[])

public static "hasItems"(...itemLike0s: $ItemLike$$Type[]): $InventoryChangeTrigger$TriggerInstance
public static "hasItems"(...itemPredicate0s: $ItemPredicate$$Type[]): $InventoryChangeTrigger$TriggerInstance
public "matches"(inventory0: $Inventory$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, int4: integer): boolean
}
}

declare module "packages/net/minecraft/advancements/$FrameType" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"
import { $ChatFormatting } from "packages/net/minecraft/$ChatFormatting"

export class $FrameType extends $Enum<$FrameType> {
static readonly "CHALLENGE": $FrameType
static readonly "GOAL": $FrameType
static readonly "TASK": $FrameType

public static "byName"(string0: string): $FrameType
public "getChatColor"(): $ChatFormatting
public "getDisplayName"(): $Component
public "getName"(): string
public "getTexture"(): integer
public static "valueOf"(string0: string): $FrameType
public static "values"(): $FrameType[]
get "chatColor"(): $ChatFormatting
get "displayName"(): $Component
get "name"(): string
get "texture"(): integer
}
}

declare module "packages/net/minecraft/advancements/$DisplayInfo" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FrameType, $FrameType$$Type } from "packages/net/minecraft/advancements/$FrameType"

export class $DisplayInfo {
constructor(itemStack0: $ItemStack$$Type, component1: $Component$$Type, component2: $Component$$Type, resourceLocation3: $ResourceLocation$$Type, frameType4: $FrameType$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean)

public static "fromJson"(jsonObject0: $JsonObject$$Type): $DisplayInfo
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $DisplayInfo
public "getBackground"(): $ResourceLocation
public "getDescription"(): $Component
public "getFrame"(): $FrameType
public "getIcon"(): $ItemStack
public "getTitle"(): $Component
public "getX"(): float
public "getY"(): float
public "isHidden"(): boolean
public "serializeToJson"(): $JsonElement
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "setLocation"(float0: float, float1: float): void
public "shouldAnnounceChat"(): boolean
public "shouldShowToast"(): boolean
get "background"(): $ResourceLocation
get "description"(): $Component
get "frame"(): $FrameType
get "icon"(): $ItemStack
get "title"(): $Component
get "x"(): float
get "y"(): float
get "hidden"(): boolean
}
}

declare module "packages/net/minecraft/advancements/$AdvancementList$Listener" {
import { $Advancement$$Type } from "packages/net/minecraft/advancements/$Advancement"

export interface $AdvancementList$Listener {
"onAddAdvancementRoot"(advancement0: $Advancement$$Type): void
"onAddAdvancementTask"(advancement0: $Advancement$$Type): void
"onAdvancementsCleared"(): void
"onRemoveAdvancementRoot"(advancement0: $Advancement$$Type): void
"onRemoveAdvancementTask"(advancement0: $Advancement$$Type): void
}

export namespace $AdvancementList$Listener {
const probejs$$marker: never
}
export abstract class $AdvancementList$Listener$$Static implements $AdvancementList$Listener {
}
}

declare module "packages/net/minecraft/advancements/critereon/$EnchantmentPredicate" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $MinMaxBounds$Ints$$Type } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import { $Map$$Type } from "packages/java/util/$Map"

export class $EnchantmentPredicate {
static readonly "ANY": $EnchantmentPredicate
static readonly "NONE": $EnchantmentPredicate[]

constructor()
constructor(enchantment0: $Enchantment$$Type, ints1: $MinMaxBounds$Ints$$Type)

public "containedIn"(map0: $Map$$Type<$Enchantment$$Type, integer>): boolean
public static "fromJson"(jsonElement0: $JsonElement$$Type): $EnchantmentPredicate
public static "fromJsonArray"(jsonElement0: $JsonElement$$Type): $EnchantmentPredicate[]
public "serializeToJson"(): $JsonElement
}
}

declare module "packages/net/minecraft/advancements/critereon/$DeserializationContext" {
import { $LootDataManager$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $JsonArray$$Type } from "packages/com/google/gson/$JsonArray"
import { $LootContextParamSet$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import { $LootItemCondition } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"

export class $DeserializationContext {
constructor(resourceLocation0: $ResourceLocation$$Type, lootDataManager1: $LootDataManager$$Type)

public "deserializeConditions"(jsonArray0: $JsonArray$$Type, string1: string, lootContextParamSet2: $LootContextParamSet$$Type): $LootItemCondition[]
public "getAdvancementId"(): $ResourceLocation
get "advancementId"(): $ResourceLocation
}
}

declare module "packages/net/minecraft/advancements/$CriterionTriggerInstance" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SerializationContext$$Type } from "packages/net/minecraft/advancements/critereon/$SerializationContext"

export interface $CriterionTriggerInstance {
"getCriterion"(): $ResourceLocation
"serializeToJson"(serializationContext0: $SerializationContext$$Type): $JsonObject
get "criterion"(): $ResourceLocation
}

export namespace $CriterionTriggerInstance {
const probejs$$marker: never
}
export abstract class $CriterionTriggerInstance$$Static implements $CriterionTriggerInstance {
}
}

declare module "packages/net/minecraft/advancements/critereon/$EntityPredicate" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $LootContext } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $DeserializationContext$$Type } from "packages/net/minecraft/advancements/critereon/$DeserializationContext"
import { $ContextAwarePredicate } from "packages/net/minecraft/advancements/critereon/$ContextAwarePredicate"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityPredicate {
static readonly "ANY": $EntityPredicate

public static "createContext"(serverPlayer0: $ServerPlayer$$Type, entity1: $Entity$$Type): $LootContext
public static "fromJson"(jsonObject0: $JsonObject$$Type, string1: string, deserializationContext2: $DeserializationContext$$Type): $ContextAwarePredicate
public static "fromJson"(jsonElement0: $JsonElement$$Type): $EntityPredicate
public static "fromJsonArray"(jsonObject0: $JsonObject$$Type, string1: string, deserializationContext2: $DeserializationContext$$Type): $ContextAwarePredicate[]
public "matches"(serverLevel0: $ServerLevel$$Type, vec31: $Vec3$$Type, entity2: $Entity$$Type): boolean
public "matches"(serverPlayer0: $ServerPlayer$$Type, entity1: $Entity$$Type): boolean
public "serializeToJson"(): $JsonElement
public static "wrap"(entityPredicate0: $EntityPredicate$$Type): $ContextAwarePredicate
}
}

declare module "packages/net/minecraft/advancements/critereon/$StatePropertiesPredicate" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $StateDefinition$$Type } from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $StateHolder, $StateHolder$$Type } from "packages/net/minecraft/world/level/block/state/$StateHolder"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"

export class $StatePropertiesPredicate {
static readonly "ANY": $StatePropertiesPredicate

public "checkState"(stateDefinition0: $StateDefinition$$Type<any, any>, consumer1: $Consumer$$Type<string>): void
public static "fromJson"(jsonElement0: $JsonElement$$Type): $StatePropertiesPredicate
public "matches"(fluidState0: $FluidState$$Type): boolean
public "matches"<S extends $StateHolder<any, S>>(stateDefinition0: $StateDefinition$$Type<any, S>, s1: S): boolean
public "matches"(blockState0: $BlockState$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "packages/net/minecraft/advancements/critereon/$ContextAwarePredicate" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $LootContext, $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $LootContextParamSet$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import { $SerializationContext$$Type } from "packages/net/minecraft/advancements/critereon/$SerializationContext"
import { $LootItemCondition$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"
import { $DeserializationContext$$Type } from "packages/net/minecraft/advancements/critereon/$DeserializationContext"

export class $ContextAwarePredicate {
static readonly "ANY": $ContextAwarePredicate

public static "create"(...lootItemCondition0s: $LootItemCondition$$Type[]): $ContextAwarePredicate
public static "fromElement"(string0: string, deserializationContext1: $DeserializationContext$$Type, jsonElement2: $JsonElement$$Type, lootContextParamSet3: $LootContextParamSet$$Type): $ContextAwarePredicate
public "matches"(lootContext0: $LootContext$$Type): boolean
public static "toJson"(contextAwarePredicate0s: $ContextAwarePredicate$$Type[], serializationContext1: $SerializationContext$$Type): $JsonElement
public "toJson"(serializationContext0: $SerializationContext$$Type): $JsonElement
get "compositePredicates"(): $Predicate<$LootContext>
set "compositePredicates"(value: $Predicate$$Type<$LootContext$$Type>)
}
}

declare module "packages/net/minecraft/advancements/critereon/$SimpleCriterionTrigger" {
import { $CriterionTrigger$Listener$$Type } from "packages/net/minecraft/advancements/$CriterionTrigger$Listener"
import { $PlayerAdvancements$$Type } from "packages/net/minecraft/server/$PlayerAdvancements"
import { $CriterionTrigger } from "packages/net/minecraft/advancements/$CriterionTrigger"
import { $AbstractCriterionTriggerInstance } from "packages/net/minecraft/advancements/critereon/$AbstractCriterionTriggerInstance"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $SimpleCriterionTrigger<T extends $AbstractCriterionTriggerInstance> implements $CriterionTrigger<T> {
constructor()

public "addPlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
public "getId"(): $ResourceLocation
public "removePlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
public "removePlayerListeners"(playerAdvancements0: $PlayerAdvancements$$Type): void
get "id"(): $ResourceLocation
}
}

declare module "packages/net/minecraft/advancements/$AdvancementList" {
import { $Advancement$Builder$$Type } from "packages/net/minecraft/advancements/$Advancement$Builder"
import { $Set$$Type } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Advancement } from "packages/net/minecraft/advancements/$Advancement"
import { $Map$$Type } from "packages/java/util/$Map"
import { $AdvancementList$Listener$$Type } from "packages/net/minecraft/advancements/$AdvancementList$Listener"

export class $AdvancementList {
constructor()

public "add"(map0: $Map$$Type<$ResourceLocation$$Type, $Advancement$Builder$$Type>): void
public "clear"(): void
public "get"(resourceLocation0: $ResourceLocation$$Type): $Advancement
public "getAllAdvancements"(): $Collection<$Advancement>
public "getRoots"(): $Iterable<$Advancement>
public "remove"(set0: $Set$$Type<$ResourceLocation$$Type>): void
public "setListener"(listener0: $AdvancementList$Listener$$Type): void
get "allAdvancements"(): $Collection<$Advancement>
get "roots"(): $Iterable<$Advancement>
set "listener"(value: $AdvancementList$Listener$$Type)
}
}

declare module "packages/net/minecraft/advancements/critereon/$EnterBlockTrigger$TriggerInstance" {
import { $AbstractCriterionTriggerInstance } from "packages/net/minecraft/advancements/critereon/$AbstractCriterionTriggerInstance"
import { $StatePropertiesPredicate$$Type } from "packages/net/minecraft/advancements/critereon/$StatePropertiesPredicate"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $ContextAwarePredicate$$Type } from "packages/net/minecraft/advancements/critereon/$ContextAwarePredicate"

export class $EnterBlockTrigger$TriggerInstance extends $AbstractCriterionTriggerInstance {
constructor(contextAwarePredicate0: $ContextAwarePredicate$$Type, block1: $Block$$Type, statePropertiesPredicate2: $StatePropertiesPredicate$$Type)

public static "entersBlock"(block0: $Block$$Type): $EnterBlockTrigger$TriggerInstance
public "matches"(blockState0: $BlockState$$Type): boolean
}
}

