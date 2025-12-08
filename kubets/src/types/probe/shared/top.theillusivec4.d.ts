declare module "packages/top/theillusivec4/curios/api/event/$CurioDropsEvent" {
import { $LivingEvent } from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $DamageSource, $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ICuriosItemHandler, $ICuriosItemHandler$$Type } from "packages/top/theillusivec4/curios/api/type/capability/$ICuriosItemHandler"
import { $ItemEntity, $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CurioDropsEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, iCuriosItemHandler1: $ICuriosItemHandler$$Type, damageSource2: $DamageSource$$Type, collection3: $Collection$$Type<$ItemEntity$$Type>, int4: integer, boolean5: boolean)
constructor()

public "getCurioHandler"(): $ICuriosItemHandler
public "getDrops"(): $Collection<$ItemEntity>
public "getLootingLevel"(): integer
public "getSource"(): $DamageSource
public "isRecentlyHit"(): boolean
get "curioHandler"(): $ICuriosItemHandler
get "drops"(): $Collection<$ItemEntity>
get "lootingLevel"(): integer
get "source"(): $DamageSource
get "recentlyHit"(): boolean
}
}

declare module "packages/top/theillusivec4/curios/api/event/$CurioAttributeModifierEvent" {
import { $SlotContext, $SlotContext$$Type } from "packages/top/theillusivec4/curios/api/$SlotContext"
import { $Multimap, $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Collection } from "packages/java/util/$Collection"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier, $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $CurioAttributeModifierEvent extends $Event {
constructor(itemStack0: $ItemStack$$Type, slotContext1: $SlotContext$$Type, uUID2: $UUID$$Type, multimap3: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>)
constructor()

public "addModifier"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type): boolean
public "clearModifiers"(): void
public "getItemStack"(): $ItemStack
public "getModifiers"(): $Multimap<$Attribute, $AttributeModifier>
public "getOriginalModifiers"(): $Multimap<$Attribute, $AttributeModifier>
public "getSlotContext"(): $SlotContext
public "getUuid"(): $UUID
public "removeAttribute"(attribute0: $Attribute$$Type): $Collection<$AttributeModifier>
public "removeModifier"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type): boolean
get "itemStack"(): $ItemStack
get "modifiers"(): $Multimap<$Attribute, $AttributeModifier>
get "originalModifiers"(): $Multimap<$Attribute, $AttributeModifier>
get "slotContext"(): $SlotContext
get "uuid"(): $UUID
}
}

declare module "packages/top/theillusivec4/curios/api/$SlotContext" {
import { $Record } from "packages/java/lang/$Record"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SlotContext extends $Record {
constructor(identifier: string, entity: $LivingEntity$$Type, index: integer, cosmetic: boolean, visible: boolean)

public "cosmetic"(): boolean
public "entity"(): $LivingEntity
/** @deprecated */
public "getIdentifier"(): string
/** @deprecated */
public "getIndex"(): integer
/** @deprecated */
public "getWearer"(): $LivingEntity
public "identifier"(): string
public "index"(): integer
public "visible"(): boolean
get "wearer"(): $LivingEntity
}
}

declare module "packages/top/theillusivec4/curios/mixin/core/$AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity {
"getFirstTick"(): boolean
get "firstTick"(): boolean
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
export abstract class $AccessorEntity$$Static implements $AccessorEntity {
}
}

declare module "packages/top/theillusivec4/curios/api/event/$DropRulesEvent" {
import { $LivingEvent } from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import { $ICurio$DropRule, $ICurio$DropRule$$Type } from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $DamageSource, $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $Tuple } from "packages/net/minecraft/util/$Tuple"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ICuriosItemHandler, $ICuriosItemHandler$$Type } from "packages/top/theillusivec4/curios/api/type/capability/$ICuriosItemHandler"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $DropRulesEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, iCuriosItemHandler1: $ICuriosItemHandler$$Type, damageSource2: $DamageSource$$Type, int3: integer, boolean4: boolean)

public "addOverride"(predicate0: $Predicate$$Type<$ItemStack$$Type>, dropRule1: $ICurio$DropRule$$Type): void
public "getCurioHandler"(): $ICuriosItemHandler
public "getLootingLevel"(): integer
public "getOverrides"(): $ImmutableList<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>
public "getSource"(): $DamageSource
public "isRecentlyHit"(): boolean
get "curioHandler"(): $ICuriosItemHandler
get "lootingLevel"(): integer
get "overrides"(): $ImmutableList<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>
get "source"(): $DamageSource
get "recentlyHit"(): boolean
}
}

declare module "packages/top/theillusivec4/curios/api/event/$CurioEquipEvent" {
import { $SlotContext, $SlotContext$$Type } from "packages/top/theillusivec4/curios/api/$SlotContext"
import { $LivingEvent } from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $CurioEquipEvent extends $LivingEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, slotContext1: $SlotContext$$Type)

public "getSlotContext"(): $SlotContext
public "getStack"(): $ItemStack
get "slotContext"(): $SlotContext
get "stack"(): $ItemStack
}
}

declare module "packages/top/theillusivec4/curios/api/event/$CurioUnequipEvent" {
import { $SlotContext, $SlotContext$$Type } from "packages/top/theillusivec4/curios/api/$SlotContext"
import { $LivingEvent } from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $CurioUnequipEvent extends $LivingEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, slotContext1: $SlotContext$$Type)

public "getSlotContext"(): $SlotContext
public "getStack"(): $ItemStack
get "slotContext"(): $SlotContext
get "stack"(): $ItemStack
}
}

declare module "packages/top/theillusivec4/curios/api/$SlotResult" {
import { $SlotContext, $SlotContext$$Type } from "packages/top/theillusivec4/curios/api/$SlotContext"
import { $Record } from "packages/java/lang/$Record"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $SlotResult extends $Record {
constructor(slotContext: $SlotContext$$Type, stack: $ItemStack$$Type)

public "slotContext"(): $SlotContext
public "stack"(): $ItemStack
}
}

declare module "packages/top/theillusivec4/curios/api/type/inventory/$ICurioStacksHandler" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $IDynamicStackHandler } from "packages/top/theillusivec4/curios/api/type/inventory/$IDynamicStackHandler"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $Set } from "packages/java/util/$Set"
import { $ICurio$DropRule } from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import { $Collection } from "packages/java/util/$Collection"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $AttributeModifier, $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $Map } from "packages/java/util/$Map"

export interface $ICurioStacksHandler {
"addPermanentModifier"(attributeModifier0: $AttributeModifier$$Type): void
"addTransientModifier"(attributeModifier0: $AttributeModifier$$Type): void
"applySyncTag"(compoundTag0: $CompoundTag$$Type): void
"canToggleRendering"(): boolean
"clearCachedModifiers"(): void
"clearModifiers"(): void
"copyModifiers"(iCurioStacksHandler0: $ICurioStacksHandler$$Type): void
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"getCachedModifiers"(): $Set<$AttributeModifier>
"getCosmeticStacks"(): $IDynamicStackHandler
"getDropRule"(): $ICurio$DropRule
"getIdentifier"(): string
"getModifiers"(): $Map<$UUID, $AttributeModifier>
"getModifiersByOperation"(operation0: $AttributeModifier$Operation$$Type): $Collection<$AttributeModifier>
"getPermanentModifiers"(): $Set<$AttributeModifier>
"getRenders"(): $NonNullList<boolean>
/** @deprecated */
"getSizeShift"(): integer
"getSlots"(): integer
"getStacks"(): $IDynamicStackHandler
"getSyncTag"(): $CompoundTag
/** @deprecated */
"grow"(int0: integer): void
"hasCosmetic"(): boolean
"isVisible"(): boolean
"removeModifier"(uUID0: $UUID$$Type): void
"serializeNBT"(): $CompoundTag
/** @deprecated */
"shrink"(int0: integer): void
"update"(): void
get "cachedModifiers"(): $Set<$AttributeModifier>
get "cosmeticStacks"(): $IDynamicStackHandler
get "dropRule"(): $ICurio$DropRule
get "identifier"(): string
get "modifiers"(): $Map<$UUID, $AttributeModifier>
get "permanentModifiers"(): $Set<$AttributeModifier>
get "renders"(): $NonNullList<boolean>
get "sizeShift"(): integer
get "slots"(): integer
get "stacks"(): $IDynamicStackHandler
get "syncTag"(): $CompoundTag
get "visible"(): boolean
}

export namespace $ICurioStacksHandler {
const probejs$$marker: never
}
export abstract class $ICurioStacksHandler$$Static implements $ICurioStacksHandler {
}
}

declare module "packages/top/theillusivec4/curios/api/type/capability/$ICuriosItemHandler" {
import { $Multimap, $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $ListTag, $ListTag$$Type } from "packages/net/minecraft/nbt/$ListTag"
import { $Tag, $Tag$$Type } from "packages/net/minecraft/nbt/$Tag"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IItemHandlerModifiable } from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $SlotContext$$Type } from "packages/top/theillusivec4/curios/api/$SlotContext"
import { $Set } from "packages/java/util/$Set"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $List } from "packages/java/util/$List"
import { $AttributeModifier, $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $Optional } from "packages/java/util/$Optional"
import { $Logger } from "packages/org/slf4j/$Logger"
import { $ICurioStacksHandler, $ICurioStacksHandler$$Type } from "packages/top/theillusivec4/curios/api/type/inventory/$ICurioStacksHandler"
import { $Tuple$$Type } from "packages/net/minecraft/util/$Tuple"
import { $SlotResult } from "packages/top/theillusivec4/curios/api/$SlotResult"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export interface $ICuriosItemHandler {
"addPermanentSlotModifier"(string0: string, uUID1: $UUID$$Type, string2: string, double3: double, operation4: $AttributeModifier$Operation$$Type): void
"addPermanentSlotModifiers"(multimap0: $Multimap$$Type<string, $AttributeModifier$$Type>): void
"addTransientSlotModifier"(string0: string, uUID1: $UUID$$Type, string2: string, double3: double, operation4: $AttributeModifier$Operation$$Type): void
"addTransientSlotModifiers"(multimap0: $Multimap$$Type<string, $AttributeModifier$$Type>): void
"clearCachedSlotModifiers"(): void
"clearSlotModifiers"(): void
"findCurio"(string0: string, int1: integer): $Optional<$SlotResult>
"findCurios"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $List<$SlotResult>
"findCurios"(...string0s: string[]): $List<$SlotResult>
"findCurios"(item0: $Item$$Type): $List<$SlotResult>
"findFirstCurio"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Optional<$SlotResult>
"findFirstCurio"(item0: $Item$$Type): $Optional<$SlotResult>
"getCurios"(): $Map<string, $ICurioStacksHandler>
"getEquippedCurios"(): $IItemHandlerModifiable
/** @deprecated */
"getFortuneBonus"(): integer
"getFortuneLevel"(lootContext0: $LootContext$$Type): integer
/** @deprecated */
"getLockedSlots"(): $Set<string>
/** @deprecated */
"getLootingBonus"(): integer
"getLootingLevel"(damageSource0: $DamageSource$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): integer
"getModifiers"(): $Multimap<string, $AttributeModifier>
"getSlots"(): integer
"getStacksHandler"(string0: string): $Optional<$ICurioStacksHandler>
"getUpdatingInventories"(): $Set<$ICurioStacksHandler>
"getVisibleSlots"(): integer
"getWearer"(): $LivingEntity
/** @deprecated */
"growSlotType"(string0: string, int1: integer): void
"handleInvalidStacks"(): void
"isEquipped"(item0: $Item$$Type): boolean
"isEquipped"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
"loadInventory"(listTag0: $ListTag$$Type): void
/** @deprecated */
"lockSlotType"(string0: string): void
"loseInvalidStack"(itemStack0: $ItemStack$$Type): void
/** @deprecated */
"processSlots"(): void
"readTag"(tag0: $Tag$$Type): void
"removeSlotModifier"(string0: string, uUID1: $UUID$$Type): void
"removeSlotModifiers"(multimap0: $Multimap$$Type<string, $AttributeModifier$$Type>): void
"reset"(): void
"saveInventory"(boolean0: boolean, predicate1: $Predicate$$Type<$ItemStack$$Type>): $ListTag
"saveInventory"(boolean0: boolean, biPredicate1: $BiPredicate$$Type<$ItemStack$$Type, $SlotContext$$Type>): $ListTag
"saveInventory"(boolean0: boolean): $ListTag
"setCurios"(map0: $Map$$Type<string, $ICurioStacksHandler$$Type>): void
/** @deprecated */
"setEnchantmentBonuses"(tuple0: $Tuple$$Type<integer, integer>): void
"setEquippedCurio"(string0: string, int1: integer, itemStack2: $ItemStack$$Type): void
/** @deprecated */
"shrinkSlotType"(string0: string, int1: integer): void
/** @deprecated */
"unlockSlotType"(string0: string, int1: integer, boolean2: boolean, boolean3: boolean): void
"writeTag"(): $Tag
get "curios"(): $Map<string, $ICurioStacksHandler>
get "equippedCurios"(): $IItemHandlerModifiable
get "fortuneBonus"(): integer
get "lockedSlots"(): $Set<string>
get "lootingBonus"(): integer
get "modifiers"(): $Multimap<string, $AttributeModifier>
get "slots"(): integer
get "updatingInventories"(): $Set<$ICurioStacksHandler>
get "visibleSlots"(): integer
get "wearer"(): $LivingEntity
set "curios"(value: $Map$$Type<string, $ICurioStacksHandler$$Type>)
set "enchantmentBonuses"(value: $Tuple$$Type<integer, integer>)
}

export namespace $ICuriosItemHandler {
const LOGGER: $Logger
}
export abstract class $ICuriosItemHandler$$Static implements $ICuriosItemHandler {
static readonly "LOGGER": $Logger

}
}

declare module "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ICurio$DropRule extends $Enum<$ICurio$DropRule> {
static readonly "ALWAYS_DROP": $ICurio$DropRule
static readonly "ALWAYS_KEEP": $ICurio$DropRule
static readonly "DEFAULT": $ICurio$DropRule
static readonly "DESTROY": $ICurio$DropRule

public static "valueOf"(string0: string): $ICurio$DropRule
public static "values"(): $ICurio$DropRule[]
}
}

declare module "packages/top/theillusivec4/curios/api/type/inventory/$IDynamicStackHandler" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $List } from "packages/java/util/$List"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $IItemHandlerModifiable } from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import { $IItemHandler } from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
"asContainer"(): $Container
"clear"(ingredient: $Ingredient$$Type): void
"clear"(): void
"count"(ingredient: $Ingredient$$Type): integer
"count"(): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
"extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
"find"(ingredient: $Ingredient$$Type): integer
"find"(): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getHeight"(): integer
"getPreviousStackInSlot"(int0: integer): $ItemStack
"getSlotLimit"(i: integer): integer
"getSlotLimit"(int0: integer): integer
"getSlots"(): integer
"getSlots"(): integer
"getStackInSlot"(int0: integer): $ItemStack
"getStackInSlot"(i: integer): $ItemStack
"getWidth"(): integer
"grow"(int0: integer): void
"insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
"insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
"isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $IItemHandler
"serializeNBT"(): $CompoundTag
"setChanged"(): void
"setPreviousStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
"shrink"(int0: integer): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $IDynamicStackHandler {
const probejs$$marker: never
}
export abstract class $IDynamicStackHandler$$Static implements $IDynamicStackHandler {
}
}

declare module "packages/top/theillusivec4/curios/api/event/$SlotModifiersUpdatedEvent" {
import { $LivingEvent } from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SlotModifiersUpdatedEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, set1: $Set$$Type<string>)

public "getTypes"(): $Set<string>
get "types"(): $Set<string>
}
}

declare module "packages/top/theillusivec4/curios/api/event/$CurioChangeEvent" {
import { $LivingEvent } from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CurioChangeEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, string1: string, int2: integer, itemStack3: $ItemStack$$Type, itemStack4: $ItemStack$$Type)

public "getFrom"(): $ItemStack
public "getIdentifier"(): string
public "getSlotIndex"(): integer
public "getTo"(): $ItemStack
get "from"(): $ItemStack
get "identifier"(): string
get "slotIndex"(): integer
get "to"(): $ItemStack
}
}

