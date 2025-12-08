declare module "packages/dev/latvian/mods/kubejs/loot/$LootEventJS" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootBuilder$$Type } from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $LootEventJS extends $EventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addJson"(id: $ResourceLocation$$Type, json: $JsonObject$$Type): void
public "getDirectory"(): string
public "getType"(): string
public "modify"(id: $ResourceLocation$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
public "removeAll"(): void
get "directory"(): string
get "type"(): string
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$FishingLootEventJS" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootBuilder$$Type } from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import { $LootEventJS } from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $FishingLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addFishing"(id: $ResourceLocation$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$LootBuilderPool" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ConditionalFunction$$Type } from "packages/dev/latvian/mods/kubejs/loot/$ConditionalFunction"
import { $ConditionContainer } from "packages/dev/latvian/mods/kubejs/loot/$ConditionContainer"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $JsonArray } from "packages/com/google/gson/$JsonArray"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FunctionContainer } from "packages/dev/latvian/mods/kubejs/loot/$FunctionContainer"
import { $CopyNameFunction$NameSource$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource"
import { $NumberProvider, $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import { $LootContext$EntityTarget$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import { $LootTableEntry } from "packages/dev/latvian/mods/kubejs/loot/$LootTableEntry"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Map$$Type } from "packages/java/util/$Map"

export class $LootBuilderPool implements $FunctionContainer, $ConditionContainer {
readonly "conditions": $JsonArray
readonly "entries": $JsonArray
readonly "functions": $JsonArray

constructor()

public "addCondition"(o: $JsonObject$$Type): $LootBuilderPool
public "addConditionalFunction"(func: $Consumer$$Type<$ConditionalFunction$$Type>): $FunctionContainer
public "addEmpty"(weight: integer): $LootTableEntry
public "addEntry"(json: $JsonObject$$Type): $LootTableEntry
public "addItem"(item: $ItemStack$$Type, weight: integer): $LootTableEntry
public "addItem"(item: $ItemStack$$Type): $LootTableEntry
public "addItem"(item: $ItemStack$$Type, weight: integer, count: $NumberProvider$$Type): $LootTableEntry
public "addLootTable"(table: $ResourceLocation$$Type): $LootTableEntry
public "addTag"(tag: string, expand: boolean): $LootTableEntry
public "copyName"(source: $CopyNameFunction$NameSource$$Type): $FunctionContainer
public "count"(count: $NumberProvider$$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$$Type): $FunctionContainer
public "enchantRandomly"(enchantments: $ResourceLocation$$Type[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$$Type, treasure: boolean): $FunctionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$$Type, properties: $JsonObject$$Type): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$$Type, scores: $Map$$Type<string, any>): $ConditionContainer
public "furnaceSmelt"(): $FunctionContainer
public "killedByPlayer"(): $ConditionContainer
public "lootTable"(table: $ResourceLocation$$Type, seed: long): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$$Type, limit: integer): $FunctionContainer
public "name"(name: $Component$$Type): $FunctionContainer
public "name"(name: $Component$$Type, entity: $LootContext$EntityTarget$$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$$Type): $FunctionContainer
public "randomChance"(chance: double): $ConditionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "setBinomialRolls"(n: integer, p: float): void
public "setUniformRolls"(min: float, max: float): void
public "survivesExplosion"(): $ConditionContainer
public "toJson"(): $JsonObject
get "bonusRolls"(): $NumberProvider
set "bonusRolls"(value: $NumberProvider$$Type)
get "rolls"(): $NumberProvider
set "rolls"(value: $NumberProvider$$Type)
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$GenericLootEventJS" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootBuilder$$Type } from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import { $LootEventJS } from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $GenericLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addGeneric"(id: $ResourceLocation$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$ChestLootEventJS" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootBuilder$$Type } from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import { $LootEventJS } from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $ChestLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addChest"(id: $ResourceLocation$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$ConditionalFunction" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ConditionContainer } from "packages/dev/latvian/mods/kubejs/loot/$ConditionContainer"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $JsonArray, $JsonArray$$Type } from "packages/com/google/gson/$JsonArray"
import { $FunctionContainer } from "packages/dev/latvian/mods/kubejs/loot/$FunctionContainer"
import { $CopyNameFunction$NameSource$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import { $LootContext$EntityTarget$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Map$$Type } from "packages/java/util/$Map"

export class $ConditionalFunction implements $FunctionContainer, $ConditionContainer {
constructor()

public "addConditionalFunction"(func: $Consumer$$Type<$ConditionalFunction$$Type>): $FunctionContainer
public "copyName"(source: $CopyNameFunction$NameSource$$Type): $FunctionContainer
public "count"(count: $NumberProvider$$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$$Type): $FunctionContainer
public "enchantRandomly"(enchantments: $ResourceLocation$$Type[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$$Type, treasure: boolean): $FunctionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$$Type, properties: $JsonObject$$Type): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$$Type, scores: $Map$$Type<string, any>): $ConditionContainer
public "furnaceSmelt"(): $FunctionContainer
public "killedByPlayer"(): $ConditionContainer
public "lootTable"(table: $ResourceLocation$$Type, seed: long): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$$Type, limit: integer): $FunctionContainer
public "name"(name: $Component$$Type): $FunctionContainer
public "name"(name: $Component$$Type, entity: $LootContext$EntityTarget$$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$$Type): $FunctionContainer
public "randomChance"(chance: double): $ConditionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "survivesExplosion"(): $ConditionContainer
get "conditions"(): $JsonArray
set "conditions"(value: $JsonArray$$Type)
get "function"(): $JsonObject
set "function"(value: $JsonObject$$Type)
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$FunctionContainer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $LootContext$EntityTarget$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ConditionalFunction$$Type } from "packages/dev/latvian/mods/kubejs/loot/$ConditionalFunction"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CopyNameFunction$NameSource$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export interface $FunctionContainer {
"addConditionalFunction"(func: $Consumer$$Type<$ConditionalFunction$$Type>): $FunctionContainer
"addFunction"(jsonObject0: $JsonObject$$Type): $FunctionContainer
"copyName"(source: $CopyNameFunction$NameSource$$Type): $FunctionContainer
"count"(count: $NumberProvider$$Type): $FunctionContainer
"damage"(damage: $NumberProvider$$Type): $FunctionContainer
"enchantRandomly"(enchantments: $ResourceLocation$$Type[]): $FunctionContainer
"enchantWithLevels"(levels: $NumberProvider$$Type, treasure: boolean): $FunctionContainer
"furnaceSmelt"(): $FunctionContainer
"lootTable"(table: $ResourceLocation$$Type, seed: long): $FunctionContainer
"lootingEnchant"(count: $NumberProvider$$Type, limit: integer): $FunctionContainer
"name"(name: $Component$$Type): $FunctionContainer
"name"(name: $Component$$Type, entity: $LootContext$EntityTarget$$Type): $FunctionContainer
"nbt"(tag: $CompoundTag$$Type): $FunctionContainer
}

export namespace $FunctionContainer {
const probejs$$marker: never
}
export abstract class $FunctionContainer$$Static implements $FunctionContainer {
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$LootTableEntry" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ConditionalFunction$$Type } from "packages/dev/latvian/mods/kubejs/loot/$ConditionalFunction"
import { $ConditionContainer } from "packages/dev/latvian/mods/kubejs/loot/$ConditionContainer"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FunctionContainer } from "packages/dev/latvian/mods/kubejs/loot/$FunctionContainer"
import { $CopyNameFunction$NameSource$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import { $LootContext$EntityTarget$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Map$$Type } from "packages/java/util/$Map"

export class $LootTableEntry implements $FunctionContainer, $ConditionContainer {
readonly "json": $JsonObject

constructor(o: $JsonObject$$Type)

public "addCondition"(o: $JsonObject$$Type): $LootTableEntry
public "addConditionalFunction"(func: $Consumer$$Type<$ConditionalFunction$$Type>): $FunctionContainer
public "copyName"(source: $CopyNameFunction$NameSource$$Type): $FunctionContainer
public "count"(count: $NumberProvider$$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$$Type): $FunctionContainer
public "enchantRandomly"(enchantments: $ResourceLocation$$Type[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$$Type, treasure: boolean): $FunctionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$$Type, properties: $JsonObject$$Type): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$$Type, scores: $Map$$Type<string, any>): $ConditionContainer
public "furnaceSmelt"(): $FunctionContainer
public "killedByPlayer"(): $ConditionContainer
public "lootTable"(table: $ResourceLocation$$Type, seed: long): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$$Type, limit: integer): $FunctionContainer
public "name"(name: $Component$$Type): $FunctionContainer
public "name"(name: $Component$$Type, entity: $LootContext$EntityTarget$$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$$Type): $FunctionContainer
public "quality"(quality: integer): $LootTableEntry
public "randomChance"(chance: double): $ConditionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "survivesExplosion"(): $ConditionContainer
public "weight"(weight: integer): $LootTableEntry
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$ConditionContainer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $LootContext$EntityTarget$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $ConditionContainer {
"addCondition"(jsonObject0: $JsonObject$$Type): $ConditionContainer
"entityProperties"(entity: $LootContext$EntityTarget$$Type, properties: $JsonObject$$Type): $ConditionContainer
"entityScores"(entity: $LootContext$EntityTarget$$Type, scores: $Map$$Type<string, any>): $ConditionContainer
"killedByPlayer"(): $ConditionContainer
"randomChance"(chance: double): $ConditionContainer
"randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
"survivesExplosion"(): $ConditionContainer
}

export namespace $ConditionContainer {
const probejs$$marker: never
}
export abstract class $ConditionContainer$$Static implements $ConditionContainer {
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$EntityLootEventJS" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootBuilder$$Type } from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import { $LootEventJS } from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $EntityLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addEntity"(type: $EntityType$$Type<any>, b: $Consumer$$Type<$LootBuilder$$Type>): void
public "modifyEntity"(type: $EntityType$$Type<any>, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$BlockLootEventJS" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootBuilder$$Type } from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import { $BlockStatePredicate$$Type } from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LootEventJS } from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $BlockLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addBlock"(blocks: $BlockStatePredicate$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
public "addSimpleBlock"(blocks: $BlockStatePredicate$$Type, item: $ItemStack$$Type): void
public "addSimpleBlock"(blocks: $BlockStatePredicate$$Type): void
public "build"(blocks: $BlockStatePredicate$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
public "modifyBlock"(blocks: $BlockStatePredicate$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$GiftLootEventJS" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootBuilder$$Type } from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import { $LootEventJS } from "packages/dev/latvian/mods/kubejs/loot/$LootEventJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $GiftLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addGift"(id: $ResourceLocation$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "packages/dev/latvian/mods/kubejs/loot/$LootBuilder" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ConditionalFunction$$Type } from "packages/dev/latvian/mods/kubejs/loot/$ConditionalFunction"
import { $LootBuilderPool$$Type } from "packages/dev/latvian/mods/kubejs/loot/$LootBuilderPool"
import { $ConditionContainer } from "packages/dev/latvian/mods/kubejs/loot/$ConditionContainer"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $JsonArray, $JsonArray$$Type } from "packages/com/google/gson/$JsonArray"
import { $FunctionContainer } from "packages/dev/latvian/mods/kubejs/loot/$FunctionContainer"
import { $CopyNameFunction$NameSource$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import { $LootContext$EntityTarget$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Map$$Type } from "packages/java/util/$Map"

export class $LootBuilder implements $FunctionContainer, $ConditionContainer {
constructor(prev: $JsonElement$$Type)

public "addConditionalFunction"(func: $Consumer$$Type<$ConditionalFunction$$Type>): $FunctionContainer
public "addPool"(p: $Consumer$$Type<$LootBuilderPool$$Type>): void
public "clearConditions"(): void
public "clearFunctions"(): void
public "clearPools"(): void
public "copyName"(source: $CopyNameFunction$NameSource$$Type): $FunctionContainer
public "count"(count: $NumberProvider$$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$$Type): $FunctionContainer
public "enchantRandomly"(enchantments: $ResourceLocation$$Type[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$$Type, treasure: boolean): $FunctionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$$Type, properties: $JsonObject$$Type): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$$Type, scores: $Map$$Type<string, any>): $ConditionContainer
public "furnaceSmelt"(): $FunctionContainer
public "killedByPlayer"(): $ConditionContainer
public "lootTable"(table: $ResourceLocation$$Type, seed: long): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$$Type, limit: integer): $FunctionContainer
public "name"(name: $Component$$Type): $FunctionContainer
public "name"(name: $Component$$Type, entity: $LootContext$EntityTarget$$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$$Type): $FunctionContainer
public "randomChance"(chance: double): $ConditionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "survivesExplosion"(): $ConditionContainer
public "toJson"(): $JsonObject
get "conditions"(): $JsonArray
set "conditions"(value: $JsonArray$$Type)
get "customId"(): $ResourceLocation
set "customId"(value: $ResourceLocation$$Type)
get "functions"(): $JsonArray
set "functions"(value: $JsonArray$$Type)
get "pools"(): $JsonArray
set "pools"(value: $JsonArray$$Type)
get "type"(): string
set "type"(value: string)
}
}

