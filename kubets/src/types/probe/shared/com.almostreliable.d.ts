declare module "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder" {
import { $DistancePredicate } from "packages/net/minecraft/advancements/critereon/$DistancePredicate"
import { $MinMaxBounds$Doubles$$Type } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $DistancePredicateBuilder {
constructor()

public "absolute"(bounds: $MinMaxBounds$Doubles$$Type): $DistancePredicateBuilder
public "build"(): $DistancePredicate
public "horizontal"(bounds: $MinMaxBounds$Doubles$$Type): $DistancePredicateBuilder
public "x"(bounds: $MinMaxBounds$Doubles$$Type): $DistancePredicateBuilder
public "y"(bounds: $MinMaxBounds$Doubles$$Type): $DistancePredicateBuilder
public "z"(bounds: $MinMaxBounds$Doubles$$Type): $DistancePredicateBuilder
}
}

declare module "packages/com/almostreliable/lootjs/core/$ILootCondition" {
import { $ILootHandler } from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import { $LootContext, $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootCondition extends $ILootHandler, $Predicate<$LootContext> {
"and"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"applyLootHandler"(context: $LootContext$$Type, loot: $List$$Type<$ItemStack$$Type>): boolean
"negate"(): $Predicate<$LootContext>
"or"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"test"(lootContext0: $LootContext$$Type): boolean
}

export namespace $ILootCondition {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ILootCondition$$Static implements $ILootCondition {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/com/almostreliable/lootjs/loot/action/$CompositeLootAction" {
import { $ILootHandler$$Type } from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ILootAction } from "packages/com/almostreliable/lootjs/core/$ILootAction"

export class $CompositeLootAction implements $ILootAction {
constructor(handlers: $Collection$$Type<$ILootHandler$$Type>)

public "applyLootHandler"(context: $LootContext$$Type, loot: $List$$Type<$ItemStack$$Type>): boolean
}
}

declare module "packages/com/almostreliable/lootjs/forge/filters/$ForgeItemFilter" {
import { $ItemFilter, $ItemFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ResourceLocationFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ForgeItemFilter extends $ItemFilter {
"and"(other: $ItemFilter$$Type): $ItemFilter
"and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"negate"(): $ItemFilter
"or"(other: $ItemFilter$$Type): $ItemFilter
"or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"test"(itemStack0: $ItemStack$$Type): boolean
}

export namespace $ForgeItemFilter {
function and(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
function canPerformAction(...actions: string[]): $ItemFilter
function canPerformAnyAction(...actions: string[]): $ItemFilter
function custom(predicate: $Predicate$$Type<$ItemStack$$Type>): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$$Type, min: integer, max: integer): $ItemFilter
function isEqual<T>(object0: any): $Predicate<T>
function not(itemFilter: $ItemFilter$$Type): $ItemFilter
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
function or(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
}
export abstract class $ForgeItemFilter$$Static implements $ForgeItemFilter {
static "and"(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
static "canPerformAction"(...actions: string[]): $ItemFilter
static "canPerformAnyAction"(...actions: string[]): $ItemFilter
static "custom"(predicate: $Predicate$$Type<$ItemStack$$Type>): $ItemFilter
static "equipmentSlot"(slot: $EquipmentSlot$$Type): $ItemFilter
static "hasEnchantment"(filter: $ResourceLocationFilter$$Type): $ItemFilter
static "hasEnchantment"(filter: $ResourceLocationFilter$$Type, min: integer, max: integer): $ItemFilter
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"(itemFilter: $ItemFilter$$Type): $ItemFilter
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
static "or"(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
}
}

declare module "packages/com/almostreliable/lootjs/loot/action/$GroupedLootAction" {
import { $ILootHandler$$Type } from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $CompositeLootAction } from "packages/com/almostreliable/lootjs/loot/action/$CompositeLootAction"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $GroupedLootAction extends $CompositeLootAction {
constructor(numberProvider: $NumberProvider$$Type, handlers: $Collection$$Type<$ILootHandler$$Type>)

}
}

declare module "packages/com/almostreliable/lootjs/core/$LootEntry$Generator" {
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootEntry$Generator {
"create"(lootContext0: $LootContext$$Type): $ItemStack
}

export namespace $LootEntry$Generator {
const probejs$$marker: never
}
export abstract class $LootEntry$Generator$$Static implements $LootEntry$Generator {
}
}

declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $AttributeModifier } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $EquipmentSlot } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Modifier {
constructor(probability: float, attribute: $Attribute$$Type, operation: $AttributeModifier$Operation$$Type, amount: $NumberProvider$$Type, name: string, slots: $Function$$Type<$ItemStack$$Type, $EquipmentSlot[]>, uuid: $UUID$$Type)

public "createAttributeModifier"(context: $LootContext$$Type): $AttributeModifier
}
}

declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder" {
import { $LootItemFunction$Builder } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $AddAttributesFunction$Modifier$Builder$$Type } from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier$Builder"
import { $AddAttributesFunction } from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $AddAttributesFunction$Modifier$$Type } from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder {
constructor()

public "add"(modifier: $AddAttributesFunction$Modifier$$Type): $AddAttributesFunction$Builder
public "add"(attribute: $Attribute$$Type, amount: $NumberProvider$$Type, action: $Consumer$$Type<$AddAttributesFunction$Modifier$Builder$$Type>): $AddAttributesFunction$Builder
public "build"(): $AddAttributesFunction
public "forSlots"(probability: float, attribute: $Attribute$$Type, amount: $NumberProvider$$Type, slots: $EquipmentSlot$$Type[]): $AddAttributesFunction$Builder
public "forSlots"(attribute: $Attribute$$Type, amount: $NumberProvider$$Type, slots: $EquipmentSlot$$Type[]): $AddAttributesFunction$Builder
public "preserveDefaults"(flag: boolean): $AddAttributesFunction$Builder
public "simple"(probability: float, attribute: $Attribute$$Type, amount: $NumberProvider$$Type): $AddAttributesFunction$Builder
public "simple"(attribute: $Attribute$$Type, amount: $NumberProvider$$Type): $AddAttributesFunction$Builder
}
}

declare module "packages/com/almostreliable/lootjs/kube/$LootEntryWrapper" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $LootEntry } from "packages/com/almostreliable/lootjs/core/$LootEntry"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $LootEntryWrapper {
constructor()

public static "of"(in_: $ItemStack$$Type, count: integer, nbt: $CompoundTag$$Type): $LootEntry
public static "of"(in_: $ItemStack$$Type, nbt: $CompoundTag$$Type): $LootEntry
public static "of"(in_: $ItemStack$$Type, count: integer): $LootEntry
public static "of"(o: any): $LootEntry
public static "ofJson"(json: $JsonObject$$Type): $LootEntry
public static "withChance"(o: any, chance: integer): $LootEntry
}
}

declare module "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS" {
import { $AllOfCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$AllOfCondition$Builder"
import { $EntityPredicateBuilderJS$$Type } from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $AnyOfCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$AnyOfCondition$Builder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $DamageSourcePredicateBuilderJS implements $LootItemCondition$Builder {
constructor()

public "and"(builder0: $LootItemCondition$Builder$$Type): $AllOfCondition$Builder
public "anyType"(...names: string[]): $DamageSourcePredicateBuilderJS
public "invert"(): $LootItemCondition$Builder
public "is"(tag: $ResourceLocation$$Type): $DamageSourcePredicateBuilderJS
public "isNot"(tag: $ResourceLocation$$Type): $DamageSourcePredicateBuilderJS
public "matchDirectEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $DamageSourcePredicateBuilderJS
public "matchSourceEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $DamageSourcePredicateBuilderJS
public "or"(builder0: $LootItemCondition$Builder$$Type): $AnyOfCondition$Builder
}
}

declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier$Builder" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $AddAttributesFunction$Modifier } from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Modifier$Builder {
constructor(attribute: $Attribute$$Type, amount: $NumberProvider$$Type)

public "build"(): $AddAttributesFunction$Modifier
public "setName"(name: string): void
public "setOperation"(operation: $AttributeModifier$Operation$$Type): void
public "setProbability"(probability: float): void
public "setSlots"(slots: $EquipmentSlot$$Type[]): void
public "setUuid"(uuid: $UUID$$Type): void
set "name"(value: string)
set "operation"(value: $AttributeModifier$Operation$$Type)
set "probability"(value: float)
set "slots"(value: $EquipmentSlot$$Type[])
set "uuid"(value: $UUID$$Type)
}
}

declare module "packages/com/almostreliable/lootjs/loot/$LootActionsContainer" {
import { $ModifyLootAction$Callback$$Type } from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import { $ItemFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import { $Explosion$BlockInteraction$$Type } from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import { $LootEntry$$Type } from "packages/com/almostreliable/lootjs/core/$LootEntry"
import { $ILootAction$$Type } from "packages/com/almostreliable/lootjs/core/$ILootAction"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export interface $LootActionsContainer<A extends $LootActionsContainer<any>> {
"addAction"(iLootAction0: $ILootAction$$Type): A
"addAlternativesLoot"(...entries: $LootEntry$$Type[]): A
"addLoot"(...entries: $LootEntry$$Type[]): A
"addSequenceLoot"(...entries: $LootEntry$$Type[]): A
"addWeightedLoot"(numberProvider: $NumberProvider$$Type, poolEntries: $LootEntry$$Type[]): A
"addWeightedLoot"(poolEntries: $LootEntry$$Type[]): A
"addWeightedLoot"(numberProvider: $NumberProvider$$Type, allowDuplicateLoot: boolean, poolEntries: $LootEntry$$Type[]): A
"dropExperience"(amount: integer): A
"modifyLoot"(filter: $ItemFilter$$Type, callback: $ModifyLootAction$Callback$$Type): A
"removeLoot"(filter: $ItemFilter$$Type): A
"replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type, preserveCount: boolean): A
"replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type): A
"triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$$Type, fire: boolean): A
"triggerExplosion"(radius: float, destroy: boolean, fire: boolean): A
"triggerLightningStrike"(shouldDamage: boolean): A
}

export namespace $LootActionsContainer {
const probejs$$marker: never
}
export abstract class $LootActionsContainer$$Static<A extends $LootActionsContainer<any>> implements $LootActionsContainer<A> {
}
}

declare module "packages/com/almostreliable/lootjs/core/$ILootHandler" {
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootHandler {
"applyLootHandler"(lootContext0: $LootContext$$Type, list1: $List$$Type<$ItemStack$$Type>): boolean
}

export namespace $ILootHandler {
const probejs$$marker: never
}
export abstract class $ILootHandler$$Static implements $ILootHandler {
}
}

declare module "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS" {
import { $EntityPredicateBuilderJS$$Type } from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $LootConditionsContainer, $LootConditionsContainer$$Type } from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import { $AddAttributesFunction$Builder$$Type } from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Potion$$Type } from "packages/net/minecraft/world/item/alchemy/$Potion"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import { $Resolver$$Type } from "packages/com/almostreliable/lootjs/filters/$Resolver"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $LootActionsContainer } from "packages/com/almostreliable/lootjs/loot/$LootActionsContainer"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $ModifyLootAction$Callback$$Type } from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import { $LootItemFunction$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import { $LootFunctionsContainer, $LootFunctionsContainer$$Type } from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import { $DamageSourcePredicateBuilderJS$$Type } from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ILootCondition } from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $LootEntry$$Type } from "packages/com/almostreliable/lootjs/core/$LootEntry"
import { $DistancePredicateBuilder$$Type } from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $MinMaxBounds$Doubles$$Type } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import { $LootItemCondition$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import { $ItemFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import { $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Explosion$BlockInteraction$$Type } from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import { $LootContextJS$$Type } from "packages/com/almostreliable/lootjs/kube/$LootContextJS"
import { $GroupedLootBuilder$$Type } from "packages/com/almostreliable/lootjs/loot/$GroupedLootBuilder"
import { $Map$$Type } from "packages/java/util/$Map"

export class $LootActionsBuilderJS implements $LootConditionsContainer<$LootActionsBuilderJS>, $LootFunctionsContainer<$LootActionsBuilderJS>, $LootActionsContainer<$LootActionsBuilderJS> {
static readonly "DEPRECATED_MSG": string

constructor()

public "addAlternativesLoot"(...entries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "addAttributes"(action: $Consumer$$Type<$AddAttributesFunction$Builder$$Type>): $LootActionsBuilderJS
public "addCondition"(builder: $LootItemCondition$Builder$$Type): $LootActionsBuilderJS
public "addFunction"(builder: $LootItemFunction$Builder$$Type): $LootActionsBuilderJS
public "addLoot"(...entries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "addLore"(...components: $Component$$Type[]): $LootActionsBuilderJS
public "addNBT"(tag: $CompoundTag$$Type): $LootActionsBuilderJS
public "addNbt"(tag: $CompoundTag$$Type): $LootActionsBuilderJS
public "addPotion"(potion: $Potion$$Type): $LootActionsBuilderJS
public "addSequenceLoot"(...entries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$$Type, poolEntries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "addWeightedLoot"(poolEntries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$$Type, allowDuplicateLoot: boolean, poolEntries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "and"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$LootActionsBuilderJS$$Type>>): $LootActionsBuilderJS
public "anyBiome"(...resolvers: $Resolver$$Type[]): $LootActionsBuilderJS
public "anyDimension"(...dimensions: $ResourceLocation$$Type[]): $LootActionsBuilderJS
public "anyStructure"(idOrTags: string[], exact: boolean): $LootActionsBuilderJS
public "apply"(action: $Consumer$$Type<$LootContextJS$$Type>): $LootActionsBuilderJS
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$$Type, probability: float, n: integer): $LootActionsBuilderJS
public "applyBonus"(enchantment: $Enchantment$$Type, multiplier: integer): $LootActionsBuilderJS
public "applyLootingBonus"(numberProvider: $NumberProvider$$Type): $LootActionsBuilderJS
public "applyOreBonus"(enchantment: $Enchantment$$Type): $LootActionsBuilderJS
public "biome"(...resolvers: $Resolver$$Type[]): $LootActionsBuilderJS
public "blockEntityPredicate"(predicate: $Predicate$$Type<$BlockEntity$$Type>): $LootActionsBuilderJS
public "createConditions"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$LootActionsBuilderJS$$Type>>): $List<$ILootCondition>
public "customCondition"(json: $JsonObject$$Type): $LootActionsBuilderJS
public "customDistanceToPlayer"(action: $Consumer$$Type<$DistancePredicateBuilder$$Type>): $LootActionsBuilderJS
public "customFunction"(json: $JsonObject$$Type): $LootActionsBuilderJS
public "damage"(numberProvider: $NumberProvider$$Type): $LootActionsBuilderJS
public "directKillerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $LootActionsBuilderJS
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$$Type): $LootActionsBuilderJS
public "dropExperience"(amount: integer): $LootActionsBuilderJS
public "enchantRandomly"(): $LootActionsBuilderJS
public "enchantRandomly"(enchantments: $Enchantment$$Type[]): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type, allowTreasure: boolean): $LootActionsBuilderJS
public "entityPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $LootActionsBuilderJS
public "functions"(filter: $ItemFilter$$Type, action: $Consumer$$Type<$LootFunctionsContainer$$Type<$LootActionsBuilderJS$$Type>>): $LootActionsBuilderJS
public "getLogName"(alternative: string): string
public "group"(callback: $Consumer$$Type<$GroupedLootBuilder$$Type>): $LootActionsBuilderJS
public "hasAnyStage"(...stages: string[]): $LootActionsBuilderJS
public "killedByPlayer"(): $LootActionsBuilderJS
public "killerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $LootActionsBuilderJS
public "lightLevel"(min: integer, max: integer): $LootActionsBuilderJS
public "limitCount"(numberProvider: $NumberProvider$$Type): $LootActionsBuilderJS
public "limitCount"(numberProviderMin: $NumberProvider$$Type, numberProviderMax: $NumberProvider$$Type): $LootActionsBuilderJS
public "logName"(logName: string): $LootActionsBuilderJS
public "matchBlockState"(block: $Block$$Type, propertyMap: $Map$$Type<string, string>): $LootActionsBuilderJS
public "matchDamageSource"(action: $Consumer$$Type<$DamageSourcePredicateBuilderJS$$Type>): $LootActionsBuilderJS
public "matchDirectKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $LootActionsBuilderJS
public "matchEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $LootActionsBuilderJS
public "matchEquip"(slot: $EquipmentSlot$$Type, filter: $ItemFilter$$Type): $LootActionsBuilderJS
public "matchFluid"(resolver: $Resolver$$Type): $LootActionsBuilderJS
public "matchKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$$Type, exact: boolean): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$$Type): $LootActionsBuilderJS
public "matchMainHand"(filter: $ItemFilter$$Type): $LootActionsBuilderJS
public "matchOffHand"(filter: $ItemFilter$$Type): $LootActionsBuilderJS
public "matchPlayer"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $LootActionsBuilderJS
public "modifyLoot"(filter: $ItemFilter$$Type, callback: $ModifyLootAction$Callback$$Type): $LootActionsBuilderJS
public "not"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$LootActionsBuilderJS$$Type>>): $LootActionsBuilderJS
public "or"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$LootActionsBuilderJS$$Type>>): $LootActionsBuilderJS
public "playerAction"(action: $Consumer$$Type<$ServerPlayer$$Type>): $LootActionsBuilderJS
public "playerPredicate"(predicate: $Predicate$$Type<$ServerPlayer$$Type>): $LootActionsBuilderJS
public "pool"(callback: $Consumer$$Type<$GroupedLootBuilder$$Type>): $LootActionsBuilderJS
public "randomChance"(value: float): $LootActionsBuilderJS
public "randomChanceWithEnchantment"(enchantment: $Enchantment$$Type, chances: float[]): $LootActionsBuilderJS
public "randomChanceWithLooting"(value: float, looting: float): $LootActionsBuilderJS
public "randomTableBonus"(enchantment: $Enchantment$$Type, chances: float[]): $LootActionsBuilderJS
public "removeLoot"(filter: $ItemFilter$$Type): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type, preserveCount: boolean): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type): $LootActionsBuilderJS
public "replaceLore"(...components: $Component$$Type[]): $LootActionsBuilderJS
public "setName"(component: $Component$$Type): $LootActionsBuilderJS
public "simulateExplosionDecay"(): $LootActionsBuilderJS
public "smeltLoot"(): $LootActionsBuilderJS
public "survivesExplosion"(): $LootActionsBuilderJS
public "timeCheck"(min: integer, max: integer): $LootActionsBuilderJS
public "timeCheck"(period: long, min: integer, max: integer): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$$Type, fire: boolean): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $LootActionsBuilderJS
public "triggerLightningStrike"(shouldDamage: boolean): $LootActionsBuilderJS
public "weatherCheck"(map: $Map$$Type<string, boolean>): $LootActionsBuilderJS
set "name"(value: $Component$$Type)
}
}

declare module "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $LootItemFunction$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ItemFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootItemFunction$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import { $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $AddAttributesFunction$Builder$$Type } from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import { $Potion$$Type } from "packages/net/minecraft/world/item/alchemy/$Potion"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export interface $LootFunctionsContainer<F extends $LootFunctionsContainer<any>> {
"addAttributes"(action: $Consumer$$Type<$AddAttributesFunction$Builder$$Type>): F
"addFunction"(builder: $LootItemFunction$Builder$$Type): F
"addFunction"(lootItemFunction0: $LootItemFunction$$Type): F
"addLore"(...components: $Component$$Type[]): F
"addNBT"(tag: $CompoundTag$$Type): F
"addNbt"(tag: $CompoundTag$$Type): F
"addPotion"(potion: $Potion$$Type): F
"applyBinomialDistributionBonus"(enchantment: $Enchantment$$Type, probability: float, n: integer): F
"applyBonus"(enchantment: $Enchantment$$Type, multiplier: integer): F
"applyLootingBonus"(numberProvider: $NumberProvider$$Type): F
"applyOreBonus"(enchantment: $Enchantment$$Type): F
"customFunction"(json: $JsonObject$$Type): F
"damage"(numberProvider: $NumberProvider$$Type): F
"enchantRandomly"(): F
"enchantRandomly"(enchantments: $Enchantment$$Type[]): F
"enchantWithLevels"(numberProvider: $NumberProvider$$Type): F
"enchantWithLevels"(numberProvider: $NumberProvider$$Type, allowTreasure: boolean): F
"functions"(filter: $ItemFilter$$Type, action: $Consumer$$Type<$LootFunctionsContainer$$Type<F>>): F
"limitCount"(numberProvider: $NumberProvider$$Type): F
"limitCount"(numberProviderMin: $NumberProvider$$Type, numberProviderMax: $NumberProvider$$Type): F
"replaceLore"(...components: $Component$$Type[]): F
"setName"(component: $Component$$Type): F
"simulateExplosionDecay"(): F
"smeltLoot"(): F
set "name"(value: $Component$$Type)
}

export namespace $LootFunctionsContainer {
const probejs$$marker: never
}
export abstract class $LootFunctionsContainer$$Static<F extends $LootFunctionsContainer<any>> implements $LootFunctionsContainer<F> {
}
}

declare module "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter" {
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ResourceLocationFilter extends $Predicate<$ResourceLocation> {
"and"(predicate0: $Predicate$$Type<$ResourceLocation$$Type>): $Predicate<$ResourceLocation>
"negate"(): $Predicate<$ResourceLocation>
"or"(predicate0: $Predicate$$Type<$ResourceLocation$$Type>): $Predicate<$ResourceLocation>
"test"(resourceLocation0: $ResourceLocation$$Type): boolean
}

export namespace $ResourceLocationFilter {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ResourceLocationFilter$$Static implements $ResourceLocationFilter {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/com/almostreliable/lootjs/filters/$ItemFilter" {
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ResourceLocationFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemFilter extends $Predicate<$ItemStack> {
"and"(other: $ItemFilter$$Type): $ItemFilter
"and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"negate"(): $ItemFilter
"or"(other: $ItemFilter$$Type): $ItemFilter
"or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"test"(itemStack0: $ItemStack$$Type): boolean
}

export namespace $ItemFilter {
const ALWAYS_FALSE: $ItemFilter
const ALWAYS_TRUE: $ItemFilter
const ARMOR: $ItemFilter
const AXE: $ItemFilter
const BLOCK: $ItemFilter
const CHEST_ARMOR: $ItemFilter
const DAMAGEABLE: $ItemFilter
const DAMAGED: $ItemFilter
const ENCHANTABLE: $ItemFilter
const ENCHANTED: $ItemFilter
const FEET_ARMOR: $ItemFilter
const FOOD: $ItemFilter
const HAS_TIER: $ItemFilter
const HEAD_ARMOR: $ItemFilter
const HOE: $ItemFilter
const LEGS_ARMOR: $ItemFilter
const PICKAXE: $ItemFilter
const POTION: $ItemFilter
const PROJECTILE_WEAPON: $ItemFilter
const SHOVEL: $ItemFilter
const SWORD: $ItemFilter
const TOOL: $ItemFilter
const WEAPON: $ItemFilter
function and(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
function custom(predicate: $Predicate$$Type<$ItemStack$$Type>): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$$Type, min: integer, max: integer): $ItemFilter
function isEqual<T>(object0: any): $Predicate<T>
function not(itemFilter: $ItemFilter$$Type): $ItemFilter
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
function or(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
}
export abstract class $ItemFilter$$Static implements $ItemFilter {
static readonly "ALWAYS_FALSE": $ItemFilter
static readonly "ALWAYS_TRUE": $ItemFilter
static readonly "ARMOR": $ItemFilter
static readonly "AXE": $ItemFilter
static readonly "BLOCK": $ItemFilter
static readonly "CHEST_ARMOR": $ItemFilter
static readonly "DAMAGEABLE": $ItemFilter
static readonly "DAMAGED": $ItemFilter
static readonly "ENCHANTABLE": $ItemFilter
static readonly "ENCHANTED": $ItemFilter
static readonly "FEET_ARMOR": $ItemFilter
static readonly "FOOD": $ItemFilter
static readonly "HAS_TIER": $ItemFilter
static readonly "HEAD_ARMOR": $ItemFilter
static readonly "HOE": $ItemFilter
static readonly "LEGS_ARMOR": $ItemFilter
static readonly "PICKAXE": $ItemFilter
static readonly "POTION": $ItemFilter
static readonly "PROJECTILE_WEAPON": $ItemFilter
static readonly "SHOVEL": $ItemFilter
static readonly "SWORD": $ItemFilter
static readonly "TOOL": $ItemFilter
static readonly "WEAPON": $ItemFilter

static "and"(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
static "custom"(predicate: $Predicate$$Type<$ItemStack$$Type>): $ItemFilter
static "equipmentSlot"(slot: $EquipmentSlot$$Type): $ItemFilter
static "hasEnchantment"(filter: $ResourceLocationFilter$$Type): $ItemFilter
static "hasEnchantment"(filter: $ResourceLocationFilter$$Type, min: integer, max: integer): $ItemFilter
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"(itemFilter: $ItemFilter$$Type): $ItemFilter
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
static "or"(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
}
}

declare module "packages/com/almostreliable/lootjs/kube/wrapper/$IntervalJS" {
import { $MinMaxBounds$Ints } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import { $MinMaxBounds$Doubles } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $IntervalJS {
constructor()

public "between"(min: double, max: double): $IntervalJS
public "getVanillaDoubles"(): $MinMaxBounds$Doubles
public "getVanillaInt"(): $MinMaxBounds$Ints
public "matches"(value: double): boolean
public "matchesSqr"(value: double): boolean
public "max"(max: double): $IntervalJS
public "min"(min: double): $IntervalJS
public static "ofDoubles"(o: any): $MinMaxBounds$Doubles
public static "ofInt"(o: any): $MinMaxBounds$Ints
get "vanillaDoubles"(): $MinMaxBounds$Doubles
get "vanillaInt"(): $MinMaxBounds$Ints
}
}

declare module "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer" {
import { $EntityPredicateBuilderJS$$Type } from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $DamageSourcePredicateBuilderJS$$Type } from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ILootCondition, $ILootCondition$$Type } from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $DistancePredicateBuilder$$Type } from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $MinMaxBounds$Doubles$$Type } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $LootItemCondition$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import { $Resolver$$Type } from "packages/com/almostreliable/lootjs/filters/$Resolver"
import { $ItemFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $List } from "packages/java/util/$List"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $LootConditionsContainer<B extends $LootConditionsContainer<any>> {
"addCondition"(builder: $LootItemCondition$Builder$$Type): B
"addCondition"(iLootCondition0: $ILootCondition$$Type): B
"and"(action: $Consumer$$Type<$LootConditionsContainer$$Type<B>>): B
"anyBiome"(...resolvers: $Resolver$$Type[]): B
"anyDimension"(...dimensions: $ResourceLocation$$Type[]): B
"anyStructure"(idOrTags: string[], exact: boolean): B
"biome"(...resolvers: $Resolver$$Type[]): B
"blockEntityPredicate"(predicate: $Predicate$$Type<$BlockEntity$$Type>): B
"createConditions"(action: $Consumer$$Type<$LootConditionsContainer$$Type<B>>): $List<$ILootCondition>
"customCondition"(json: $JsonObject$$Type): B
"customDistanceToPlayer"(action: $Consumer$$Type<$DistancePredicateBuilder$$Type>): B
"directKillerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): B
"distanceToKiller"(bounds: $MinMaxBounds$Doubles$$Type): B
"entityPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): B
"hasAnyStage"(...stages: string[]): B
"killedByPlayer"(): B
"killerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): B
"lightLevel"(min: integer, max: integer): B
"matchBlockState"(block: $Block$$Type, propertyMap: $Map$$Type<string, string>): B
"matchDamageSource"(action: $Consumer$$Type<$DamageSourcePredicateBuilderJS$$Type>): B
"matchDirectKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): B
"matchEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): B
"matchEquip"(slot: $EquipmentSlot$$Type, filter: $ItemFilter$$Type): B
"matchFluid"(resolver: $Resolver$$Type): B
"matchKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): B
"matchLoot"(filter: $ItemFilter$$Type, exact: boolean): B
"matchLoot"(filter: $ItemFilter$$Type): B
"matchMainHand"(filter: $ItemFilter$$Type): B
"matchOffHand"(filter: $ItemFilter$$Type): B
"matchPlayer"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): B
"not"(action: $Consumer$$Type<$LootConditionsContainer$$Type<B>>): B
"or"(action: $Consumer$$Type<$LootConditionsContainer$$Type<B>>): B
"playerPredicate"(predicate: $Predicate$$Type<$ServerPlayer$$Type>): B
"randomChance"(value: float): B
"randomChanceWithEnchantment"(enchantment: $Enchantment$$Type, chances: float[]): B
"randomChanceWithLooting"(value: float, looting: float): B
"randomTableBonus"(enchantment: $Enchantment$$Type, chances: float[]): B
"survivesExplosion"(): B
"timeCheck"(min: integer, max: integer): B
"timeCheck"(period: long, min: integer, max: integer): B
"weatherCheck"(map: $Map$$Type<string, boolean>): B
}

export namespace $LootConditionsContainer {
const probejs$$marker: never
}
export abstract class $LootConditionsContainer$$Static<B extends $LootConditionsContainer<any>> implements $LootConditionsContainer<B> {
}
}

declare module "packages/com/almostreliable/lootjs/core/$ILootAction" {
import { $ILootHandler } from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootAction extends $ILootHandler {
"applyLootHandler"(lootContext0: $LootContext$$Type, list1: $List$$Type<$ItemStack$$Type>): boolean
}

export namespace $ILootAction {
const probejs$$marker: never
}
export abstract class $ILootAction$$Static implements $ILootAction {
}
}

declare module "packages/com/almostreliable/lootjs/core/$LootContextType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $LootContextType extends $Enum<$LootContextType> {
static readonly "ADVANCEMENT_ENTITY": $LootContextType
static readonly "ADVANCEMENT_REWARD": $LootContextType
static readonly "BLOCK": $LootContextType
static readonly "CHEST": $LootContextType
static readonly "ENTITY": $LootContextType
static readonly "FISHING": $LootContextType
static readonly "GIFT": $LootContextType
static readonly "PIGLIN_BARTER": $LootContextType
static readonly "UNKNOWN": $LootContextType

public static "valueOf"(name: string): $LootContextType
public static "values"(): $LootContextType[]
}
}

declare module "packages/com/almostreliable/lootjs/kube/$LootContextJS" {
import { $LootContext, $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $DamageSource } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $LootEntry$$Type } from "packages/com/almostreliable/lootjs/core/$LootEntry"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ItemFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootContextType } from "packages/com/almostreliable/lootjs/core/$LootContextType"
import { $List } from "packages/java/util/$List"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $ServerLevel } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Map } from "packages/java/util/$Map"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $LootContextJS {
constructor(context: $LootContext$$Type)

public "addLoot"(lootEntry: $LootEntry$$Type): void
public "cancel"(): void
public "findLoot"(itemFilter: $ItemFilter$$Type): $List<$ItemStack>
public "forEachLoot"(action: $Consumer$$Type<$ItemStack$$Type>): void
public "getBlockPos"(): $BlockPos
public "getCustomData"(): $Map<string, any>
public "getDamageSource"(): $DamageSource
public "getDestroyedBlock"(): $BlockContainerJS
public "getEntity"(): $Entity
public "getExplosionRadius"(): float
public "getKillerEntity"(): $Entity
public "getLevel"(): $ServerLevel
public "getLoot"(): $List<$ItemStack>
public "getLootTableId"(): $ResourceLocation
public "getLooting"(): integer
public "getLuck"(): float
public "getPlayer"(): $ServerPlayer
public "getPosition"(): $Vec3
public "getRandom"(): $RandomSource
public "getServer"(): $MinecraftServer
public "getTool"(): $ItemStack
public "getType"(): $LootContextType
public "getVanillaContext"(): $LootContext
public "hasLoot"(ingredient: $ItemFilter$$Type): boolean
public "isCanceled"(): boolean
public "isExploded"(): boolean
public "lootSize"(): integer
public "removeLoot"(itemFilter: $ItemFilter$$Type): void
get "blockPos"(): $BlockPos
get "customData"(): $Map<string, any>
get "damageSource"(): $DamageSource
get "destroyedBlock"(): $BlockContainerJS
get "entity"(): $Entity
get "explosionRadius"(): float
get "killerEntity"(): $Entity
get "level"(): $ServerLevel
get "loot"(): $List<$ItemStack>
get "lootTableId"(): $ResourceLocation
get "looting"(): integer
get "luck"(): float
get "player"(): $ServerPlayer
get "position"(): $Vec3
get "random"(): $RandomSource
get "server"(): $MinecraftServer
get "tool"(): $ItemStack
get "type"(): $LootContextType
get "vanillaContext"(): $LootContext
get "canceled"(): boolean
get "exploded"(): boolean
}
}

declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction" {
import { $LootContext, $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $LootItemFunction } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import { $LootItemFunctionType } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunctionType"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BiFunction, $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ValidationContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import { $Set } from "packages/java/util/$Set"
import { $List$$Type } from "packages/java/util/$List"
import { $AddAttributesFunction$Modifier$$Type } from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"

export class $AddAttributesFunction implements $LootItemFunction {
constructor(preserveDefaultModifier: boolean, modifiers: $List$$Type<$AddAttributesFunction$Modifier$$Type>)

public "andThen"<V>(function0: $Function$$Type<$ItemStack$$Type, V>): $BiFunction<$ItemStack, $LootContext, V>
public "apply"(itemStack: $ItemStack$$Type, context: $LootContext$$Type): $ItemStack
public static "decorate"(biFunction0: $BiFunction$$Type<$ItemStack$$Type, $LootContext$$Type, $ItemStack>, consumer1: $Consumer$$Type<$ItemStack$$Type>, lootContext2: $LootContext$$Type): $Consumer<$ItemStack>
public "getReferencedContextParams"(): $Set<$LootContextParam<any>>
public "getType"(): $LootItemFunctionType
public "preserveDefaultAttributes"(itemStack: $ItemStack$$Type, slot: $EquipmentSlot$$Type): void
public "validate"(validationContext0: $ValidationContext$$Type): void
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootItemFunctionType
}
}

declare module "packages/com/almostreliable/lootjs/core/$LootEntry" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $LootItemFunction$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $LootFunctionsContainer, $LootFunctionsContainer$$Type } from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import { $LootConditionsContainer$$Type } from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import { $AddAttributesFunction$Builder$$Type } from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Potion$$Type } from "packages/net/minecraft/world/item/alchemy/$Potion"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $ItemFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $LootEntry$Generator$$Type } from "packages/com/almostreliable/lootjs/core/$LootEntry$Generator"

export class $LootEntry implements $LootFunctionsContainer<$LootEntry> {
constructor(generator: $LootEntry$Generator$$Type)
constructor(itemStack: $ItemStack$$Type)
constructor(item: $Item$$Type)

public "addAttributes"(action: $Consumer$$Type<$AddAttributesFunction$Builder$$Type>): $LootEntry
public "addFunction"(builder: $LootItemFunction$Builder$$Type): $LootEntry
public "addLore"(...components: $Component$$Type[]): $LootEntry
public "addNBT"(tag: $CompoundTag$$Type): $LootEntry
public "addNbt"(tag: $CompoundTag$$Type): $LootEntry
public "addPotion"(potion: $Potion$$Type): $LootEntry
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$$Type, probability: float, n: integer): $LootEntry
public "applyBonus"(enchantment: $Enchantment$$Type, multiplier: integer): $LootEntry
public "applyLootingBonus"(numberProvider: $NumberProvider$$Type): $LootEntry
public "applyOreBonus"(enchantment: $Enchantment$$Type): $LootEntry
public "createItem"(context: $LootContext$$Type): $ItemStack
public "customFunction"(json: $JsonObject$$Type): $LootEntry
public "damage"(numberProvider: $NumberProvider$$Type): $LootEntry
public "enchantRandomly"(): $LootEntry
public "enchantRandomly"(enchantments: $Enchantment$$Type[]): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type, allowTreasure: boolean): $LootEntry
public "functions"(filter: $ItemFilter$$Type, action: $Consumer$$Type<$LootFunctionsContainer$$Type<$LootEntry$$Type>>): $LootEntry
public "getWeight"(): integer
public "hasWeight"(): boolean
public "limitCount"(numberProvider: $NumberProvider$$Type): $LootEntry
public "limitCount"(numberProviderMin: $NumberProvider$$Type, numberProviderMax: $NumberProvider$$Type): $LootEntry
public "matchesConditions"(context: $LootContext$$Type): boolean
public "replaceLore"(...components: $Component$$Type[]): $LootEntry
public "setName"(component: $Component$$Type): $LootEntry
public "simulateExplosionDecay"(): $LootEntry
public "smeltLoot"(): $LootEntry
public "when"(action: $Consumer$$Type<$LootConditionsContainer$$Type<any>>): $LootEntry
public "withChance"(chance: integer): $LootEntry
public "withWeight"(weight: integer): $LootEntry
get "weight"(): integer
set "name"(value: $Component$$Type)
}
}

declare module "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback" {
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ModifyLootAction$Callback {
"modify"(itemStack0: $ItemStack$$Type): $ItemStack
}

export namespace $ModifyLootAction$Callback {
const probejs$$marker: never
}
export abstract class $ModifyLootAction$Callback$$Static implements $ModifyLootAction$Callback {
}
}

declare module "packages/com/almostreliable/lootjs/filters/$Resolver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Resolver {
public static "of"(value: string): $Resolver
}
}

declare module "packages/com/almostreliable/lootjs/mixin/$LootItemConditionMixin" {
import { $LootContext, $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $ILootCondition } from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootItemConditionMixin extends $ILootCondition {
"and"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"applyLootHandler"(context: $LootContext$$Type, loot: $List$$Type<$ItemStack$$Type>): boolean
"negate"(): $Predicate<$LootContext>
"or"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"test"(lootContext0: $LootContext$$Type): boolean
}

export namespace $LootItemConditionMixin {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $LootItemConditionMixin$$Static implements $LootItemConditionMixin {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS" {
import { $Resolver$$Type } from "packages/com/almostreliable/lootjs/filters/$Resolver"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ItemFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $EntityPredicate } from "packages/net/minecraft/advancements/critereon/$EntityPredicate"
import { $ExtendedEntityFlagsPredicate$IBuilder } from "packages/com/almostreliable/lootjs/predicate/$ExtendedEntityFlagsPredicate$IBuilder"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $MobEffect$$Type } from "packages/net/minecraft/world/effect/$MobEffect"
import { $Map$$Type } from "packages/java/util/$Map"

export class $EntityPredicateBuilderJS implements $ExtendedEntityFlagsPredicate$IBuilder<$EntityPredicate> {
constructor()

public "anyType"(...resolvers: $Resolver$$Type[]): $EntityPredicateBuilderJS
public "build"(): $EntityPredicate
public "hasEffect"(effect: $MobEffect$$Type): $EntityPredicateBuilderJS
public "hasEffect"(effect: $MobEffect$$Type, amplifier: integer): $EntityPredicateBuilderJS
public "isArthropodMob"(flag: boolean): $EntityPredicateBuilderJS
public "isCrouching"(flag: boolean): $EntityPredicateBuilderJS
public "isInWater"(flag: boolean): $EntityPredicateBuilderJS
public "isOnFire"(flag: boolean): $EntityPredicateBuilderJS
public "isSwimming"(flag: boolean): $EntityPredicateBuilderJS
public "isUnderWater"(flag: boolean): $EntityPredicateBuilderJS
public "isWaterMob"(flag: boolean): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$$Type, propertyMap: $Map$$Type<string, string>): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$$Type): $EntityPredicateBuilderJS
public "matchFluid"(resolver: $Resolver$$Type): $EntityPredicateBuilderJS
public "matchMount"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $EntityPredicateBuilderJS
public "matchSlot"(slot: $EquipmentSlot$$Type, itemFilter: $ItemFilter$$Type): $EntityPredicateBuilderJS
public "matchTargetedEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $EntityPredicateBuilderJS
public "nbt"(nbt: $CompoundTag$$Type): $EntityPredicateBuilderJS
}
}

declare module "packages/com/almostreliable/lootjs/loot/$GroupedLootBuilder" {
import { $EntityPredicateBuilderJS$$Type } from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $GroupedLootAction } from "packages/com/almostreliable/lootjs/loot/action/$GroupedLootAction"
import { $LootConditionsContainer, $LootConditionsContainer$$Type } from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import { $AddAttributesFunction$Builder$$Type } from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ILootAction$$Type } from "packages/com/almostreliable/lootjs/core/$ILootAction"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Potion$$Type } from "packages/net/minecraft/world/item/alchemy/$Potion"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import { $Resolver$$Type } from "packages/com/almostreliable/lootjs/filters/$Resolver"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $LootActionsContainer } from "packages/com/almostreliable/lootjs/loot/$LootActionsContainer"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $ModifyLootAction$Callback$$Type } from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import { $LootItemFunction$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import { $LootFunctionsContainer, $LootFunctionsContainer$$Type } from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import { $DamageSourcePredicateBuilderJS$$Type } from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ILootCondition } from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $LootEntry$$Type } from "packages/com/almostreliable/lootjs/core/$LootEntry"
import { $DistancePredicateBuilder$$Type } from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $MinMaxBounds$Doubles$$Type } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import { $LootItemCondition$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import { $ItemFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import { $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Explosion$BlockInteraction$$Type } from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import { $Map$$Type } from "packages/java/util/$Map"

export class $GroupedLootBuilder implements $LootConditionsContainer<$GroupedLootBuilder>, $LootFunctionsContainer<$GroupedLootBuilder>, $LootActionsContainer<$GroupedLootBuilder> {
constructor()

public "addAction"(action: $ILootAction$$Type): $GroupedLootBuilder
public "addAlternativesLoot"(...entries: $LootEntry$$Type[]): $GroupedLootBuilder
public "addAttributes"(action: $Consumer$$Type<$AddAttributesFunction$Builder$$Type>): $GroupedLootBuilder
public "addCondition"(builder: $LootItemCondition$Builder$$Type): $GroupedLootBuilder
public "addFunction"(builder: $LootItemFunction$Builder$$Type): $GroupedLootBuilder
public "addLoot"(...entries: $LootEntry$$Type[]): $GroupedLootBuilder
public "addLore"(...components: $Component$$Type[]): $GroupedLootBuilder
public "addNBT"(tag: $CompoundTag$$Type): $GroupedLootBuilder
public "addNbt"(tag: $CompoundTag$$Type): $GroupedLootBuilder
public "addPotion"(potion: $Potion$$Type): $GroupedLootBuilder
public "addSequenceLoot"(...entries: $LootEntry$$Type[]): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$$Type, poolEntries: $LootEntry$$Type[]): $GroupedLootBuilder
public "addWeightedLoot"(poolEntries: $LootEntry$$Type[]): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$$Type, allowDuplicateLoot: boolean, poolEntries: $LootEntry$$Type[]): $GroupedLootBuilder
public "and"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$GroupedLootBuilder$$Type>>): $GroupedLootBuilder
public "anyBiome"(...resolvers: $Resolver$$Type[]): $GroupedLootBuilder
public "anyDimension"(...dimensions: $ResourceLocation$$Type[]): $GroupedLootBuilder
public "anyStructure"(idOrTags: string[], exact: boolean): $GroupedLootBuilder
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$$Type, probability: float, n: integer): $GroupedLootBuilder
public "applyBonus"(enchantment: $Enchantment$$Type, multiplier: integer): $GroupedLootBuilder
public "applyLootingBonus"(numberProvider: $NumberProvider$$Type): $GroupedLootBuilder
public "applyOreBonus"(enchantment: $Enchantment$$Type): $GroupedLootBuilder
public "biome"(...resolvers: $Resolver$$Type[]): $GroupedLootBuilder
public "blockEntityPredicate"(predicate: $Predicate$$Type<$BlockEntity$$Type>): $GroupedLootBuilder
public "build"(): $GroupedLootAction
public "createConditions"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$GroupedLootBuilder$$Type>>): $List<$ILootCondition>
public "customCondition"(json: $JsonObject$$Type): $GroupedLootBuilder
public "customDistanceToPlayer"(action: $Consumer$$Type<$DistancePredicateBuilder$$Type>): $GroupedLootBuilder
public "customFunction"(json: $JsonObject$$Type): $GroupedLootBuilder
public "damage"(numberProvider: $NumberProvider$$Type): $GroupedLootBuilder
public "directKillerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $GroupedLootBuilder
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$$Type): $GroupedLootBuilder
public "dropExperience"(amount: integer): $GroupedLootBuilder
public "enchantRandomly"(): $GroupedLootBuilder
public "enchantRandomly"(enchantments: $Enchantment$$Type[]): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type, allowTreasure: boolean): $GroupedLootBuilder
public "entityPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $GroupedLootBuilder
public "functions"(filter: $ItemFilter$$Type, action: $Consumer$$Type<$LootFunctionsContainer$$Type<$GroupedLootBuilder$$Type>>): $GroupedLootBuilder
public "hasAnyStage"(...stages: string[]): $GroupedLootBuilder
public "killedByPlayer"(): $GroupedLootBuilder
public "killerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $GroupedLootBuilder
public "lightLevel"(min: integer, max: integer): $GroupedLootBuilder
public "limitCount"(numberProvider: $NumberProvider$$Type): $GroupedLootBuilder
public "limitCount"(numberProviderMin: $NumberProvider$$Type, numberProviderMax: $NumberProvider$$Type): $GroupedLootBuilder
public "matchBlockState"(block: $Block$$Type, propertyMap: $Map$$Type<string, string>): $GroupedLootBuilder
public "matchDamageSource"(action: $Consumer$$Type<$DamageSourcePredicateBuilderJS$$Type>): $GroupedLootBuilder
public "matchDirectKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $GroupedLootBuilder
public "matchEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $GroupedLootBuilder
public "matchEquip"(slot: $EquipmentSlot$$Type, filter: $ItemFilter$$Type): $GroupedLootBuilder
public "matchFluid"(resolver: $Resolver$$Type): $GroupedLootBuilder
public "matchKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$$Type, exact: boolean): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$$Type): $GroupedLootBuilder
public "matchMainHand"(filter: $ItemFilter$$Type): $GroupedLootBuilder
public "matchOffHand"(filter: $ItemFilter$$Type): $GroupedLootBuilder
public "matchPlayer"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $GroupedLootBuilder
public "modifyLoot"(filter: $ItemFilter$$Type, callback: $ModifyLootAction$Callback$$Type): $GroupedLootBuilder
public "not"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$GroupedLootBuilder$$Type>>): $GroupedLootBuilder
public "or"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$GroupedLootBuilder$$Type>>): $GroupedLootBuilder
public "playerPredicate"(predicate: $Predicate$$Type<$ServerPlayer$$Type>): $GroupedLootBuilder
public "randomChance"(value: float): $GroupedLootBuilder
public "randomChanceWithEnchantment"(enchantment: $Enchantment$$Type, chances: float[]): $GroupedLootBuilder
public "randomChanceWithLooting"(value: float, looting: float): $GroupedLootBuilder
public "randomTableBonus"(enchantment: $Enchantment$$Type, chances: float[]): $GroupedLootBuilder
public "removeLoot"(filter: $ItemFilter$$Type): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type, preserveCount: boolean): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type): $GroupedLootBuilder
public "replaceLore"(...components: $Component$$Type[]): $GroupedLootBuilder
public "rolls"(numberProvider: $NumberProvider$$Type): $GroupedLootBuilder
public "setName"(component: $Component$$Type): $GroupedLootBuilder
public "simulateExplosionDecay"(): $GroupedLootBuilder
public "smeltLoot"(): $GroupedLootBuilder
public "survivesExplosion"(): $GroupedLootBuilder
public "timeCheck"(min: integer, max: integer): $GroupedLootBuilder
public "timeCheck"(period: long, min: integer, max: integer): $GroupedLootBuilder
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$$Type, fire: boolean): $GroupedLootBuilder
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $GroupedLootBuilder
public "triggerLightningStrike"(shouldDamage: boolean): $GroupedLootBuilder
public "weatherCheck"(map: $Map$$Type<string, boolean>): $GroupedLootBuilder
set "name"(value: $Component$$Type)
}
}

declare module "packages/com/almostreliable/lootjs/kube/$LootModificationEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $LootContextType$$Type } from "packages/com/almostreliable/lootjs/core/$LootContextType"
import { $LootActionsBuilderJS } from "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS"
import { $ResourceLocationFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"

export class $LootModificationEventJS extends $EventJS {
constructor()

public "addBlockLootModifier"(o: any): $LootActionsBuilderJS
public "addEntityLootModifier"(...entities: $EntityType$$Type<any>[]): $LootActionsBuilderJS
public "addLootTableModifier"(...filters: $ResourceLocationFilter$$Type[]): $LootActionsBuilderJS
public "addLootTypeModifier"(...types: $LootContextType$$Type[]): $LootActionsBuilderJS
public "disableCreeperHeadDrop"(): void
public "disableLootModification"(...filters: $ResourceLocationFilter$$Type[]): void
public "disableSkeletonHeadDrop"(): void
public "disableWitherStarDrop"(): void
public "disableZombieHeadDrop"(): void
public "enableLogging"(): void
}
}

declare module "packages/com/almostreliable/lootjs/predicate/$ExtendedEntityFlagsPredicate$IBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedEntityFlagsPredicate$IBuilder<T> {
"build"(): T
"isArthropodMob"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isBaby"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isCreature"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isCrouching"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isIllegarMob"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isInWater"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isMonster"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isOnFire"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isOnGround"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isSprinting"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isSwimming"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isUndeadMob"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isUnderWater"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isWaterMob"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
}

export namespace $ExtendedEntityFlagsPredicate$IBuilder {
const probejs$$marker: never
}
export abstract class $ExtendedEntityFlagsPredicate$IBuilder$$Static<T> implements $ExtendedEntityFlagsPredicate$IBuilder<T> {
}
}

