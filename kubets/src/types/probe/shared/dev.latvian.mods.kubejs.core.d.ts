declare module "packages/dev/latvian/mods/kubejs/core/$ClientLevelKJS" {
import { $AttachedData } from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FireworksJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ExplosionJS } from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $LevelKJS } from "packages/dev/latvian/mods/kubejs/core/$LevelKJS"
import { $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"

export interface $ClientLevelKJS extends $LevelKJS {
"createEntity"(type: $EntityType$$Type<any>): $Entity
"createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
"createExplosion"(x: double, y: double, z: double): $ExplosionJS
"getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
"getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
"getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
"getData"(): $AttachedData<$Level>
"getDimension"(): $ResourceLocation
"getDisplayName"(): $Component
"getEntities"(): $EntityArrayList
"getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
"getName"(): $Component
"getPlayers"(): $EntityArrayList
"getSide"(): $ScriptType
"isOverworld"(): boolean
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setStatusMessage"(message: $Component$$Type): void
"spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
"spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
"tell"(message: $Component$$Type): void
get "data"(): $AttachedData<$Level>
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "name"(): $Component
get "players"(): $EntityArrayList
get "side"(): $ScriptType
get "overworld"(): boolean
set "statusMessage"(value: $Component$$Type)
}

export namespace $ClientLevelKJS {
const probejs$$marker: never
}
export abstract class $ClientLevelKJS$$Static implements $ClientLevelKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$MinecraftServerKJS" {
import { $AttachedData } from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID } from "packages/java/util/$UUID"
import { $MinecraftServer$ReloadableResources } from "packages/net/minecraft/server/$MinecraftServer$ReloadableResources"
import { $WithAttachedData } from "packages/dev/latvian/mods/kubejs/core/$WithAttachedData"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PlayerSelector$$Type } from "packages/dev/latvian/mods/kubejs/core/$PlayerSelector"
import { $DataSenderKJS } from "packages/dev/latvian/mods/kubejs/core/$DataSenderKJS"
import { $ScheduledEvents } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents"
import { $TemporalAmount$$Type } from "packages/java/time/temporal/$TemporalAmount"
import { $AdvancementJS } from "packages/dev/latvian/mods/kubejs/player/$AdvancementJS"
import { $MinecraftEnvironmentKJS } from "packages/dev/latvian/mods/kubejs/core/$MinecraftEnvironmentKJS"
import { $WithPersistentData } from "packages/dev/latvian/mods/kubejs/core/$WithPersistentData"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $ServerLevel } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ScheduledEvents$Callback$$Type } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback"
import { $ScheduledEvents$ScheduledEvent } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $Map } from "packages/java/util/$Map"

export interface $MinecraftServerKJS extends $WithAttachedData<$MinecraftServer>, $WithPersistentData, $DataSenderKJS, $MinecraftEnvironmentKJS {
"getAdvancement"(id: $ResourceLocation$$Type): $AdvancementJS
"getData"(): $AttachedData<$MinecraftServer>
"getDisplayName"(): $Component
"getEntities"(): $EntityArrayList
"getLevel"(dimension: $ResourceLocation$$Type): $ServerLevel
"getName"(): $Component
"getOverworld"(): $ServerLevel
"getPersistentData"(): $CompoundTag
"getPlayer"(selector: $PlayerSelector$$Type): $ServerPlayer
"getPlayers"(): $EntityArrayList
"getReloadableResources"(): $MinecraftServer$ReloadableResources
"getScheduledEvents"(): $ScheduledEvents
"restoreInventories"(): $Map<$UUID, $Map<integer, $ItemStack>>
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"self"(): $MinecraftServer
"sendData"(channel: string, data: $CompoundTag$$Type): void
"sendData"(channel: string): void
"setStatusMessage"(message: $Component$$Type): void
"tell"(message: $Component$$Type): void
get "data"(): $AttachedData<$MinecraftServer>
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "name"(): $Component
get "overworld"(): $ServerLevel
get "persistentData"(): $CompoundTag
get "players"(): $EntityArrayList
get "reloadableResources"(): $MinecraftServer$ReloadableResources
get "scheduledEvents"(): $ScheduledEvents
set "statusMessage"(value: $Component$$Type)
}

export namespace $MinecraftServerKJS {
const probejs$$marker: never
}
export abstract class $MinecraftServerKJS$$Static implements $MinecraftServerKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$ComponentKJS" {
import { $FormattedCharSequence } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $WrappedJS } from "packages/dev/latvian/mods/kubejs/util/$WrappedJS"
import { $DataSource$$Type } from "packages/net/minecraft/network/chat/contents/$DataSource"
import { $FormattedText$StyledContentConsumer$$Type } from "packages/net/minecraft/network/chat/$FormattedText$StyledContentConsumer"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Style, $Style$$Type } from "packages/net/minecraft/network/chat/$Style"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"
import { $FormattedText, $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ComponentContents } from "packages/net/minecraft/network/chat/$ComponentContents"
import { $Color$$Type } from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $FormattedText$ContentConsumer$$Type } from "packages/net/minecraft/network/chat/$FormattedText$ContentConsumer"
import { $JsonSerializable } from "packages/dev/latvian/mods/rhino/mod/util/$JsonSerializable"
import { $ClickEvent$$Type } from "packages/net/minecraft/network/chat/$ClickEvent"

export interface $ComponentKJS extends $Component, $JsonSerializable, $WrappedJS {
"aqua"(): $MutableComponent
"asIterable"(): $Iterable<$Component>
"black"(): $MutableComponent
"blue"(): $MutableComponent
"bold"(): $MutableComponent
"bold"(value: boolean): $MutableComponent
"click"(s: $ClickEvent$$Type): $MutableComponent
"clickChangePage"(page: string): $MutableComponent
"clickCopy"(text: string): $MutableComponent
"clickOpenFile"(path: string): $MutableComponent
"clickOpenUrl"(url: string): $MutableComponent
"clickRunCommand"(command: string): $MutableComponent
"clickSuggestCommand"(command: string): $MutableComponent
"color"(c: $Color$$Type): $MutableComponent
/** @deprecated */
"component"(): $Component
"contains"(component0: $Component$$Type): boolean
"copy"(): $MutableComponent
"darkAqua"(): $MutableComponent
"darkBlue"(): $MutableComponent
"darkGray"(): $MutableComponent
"darkGreen"(): $MutableComponent
"darkPurple"(): $MutableComponent
"darkRed"(): $MutableComponent
"font"(s: $ResourceLocation$$Type): $MutableComponent
"forEach"(action: $Consumer$$Type<$Component$$Type>): void
"getContents"(): $ComponentContents
"getSiblings"(): $List<$Component>
"getString"(): string
"getString"(int0: integer): string
"getStyle"(): $Style
"getVisualOrderText"(): $FormattedCharSequence
"gold"(): $MutableComponent
"gray"(): $MutableComponent
"green"(): $MutableComponent
"hasSiblings"(): boolean
"hasStyle"(): boolean
"hover"(s: $Component$$Type): $MutableComponent
"insertion"(s: string): $MutableComponent
"isEmpty"(): boolean
"italic"(value: boolean): $MutableComponent
"italic"(): $MutableComponent
"lightPurple"(): $MutableComponent
"noColor"(): $MutableComponent
"obfuscated"(): $MutableComponent
"obfuscated"(value: boolean): $MutableComponent
"plainCopy"(): $MutableComponent
/** @deprecated */
"rawComponent"(): $MutableComponent
/** @deprecated */
"rawCopy"(): $MutableComponent
"red"(): $MutableComponent
"self"(): $MutableComponent
"strikethrough"(value: boolean): $MutableComponent
"strikethrough"(): $MutableComponent
"toFlatList"(style0: $Style$$Type): $List<$Component>
"toFlatList"(): $List<$Component>
"toJson"(): $JsonElement
"underlined"(value: boolean): $MutableComponent
"underlined"(): $MutableComponent
"visit"<T>(styledContentConsumer0: $FormattedText$StyledContentConsumer$$Type<T>, style1: $Style$$Type): $Optional<T>
"visit"<T>(contentConsumer0: $FormattedText$ContentConsumer$$Type<T>): $Optional<T>
"white"(): $MutableComponent
"yellow"(): $MutableComponent
get "contents"(): $ComponentContents
get "siblings"(): $List<$Component>
get "string"(): string
get "style"(): $Style
get "visualOrderText"(): $FormattedCharSequence
}

export namespace $ComponentKJS {
function composite(...formattedText0s: $FormattedText$$Type[]): $FormattedText
function composite(list0: $List$$Type<$FormattedText$$Type>): $FormattedText
function empty(): $MutableComponent
function keybind(string0: string): $MutableComponent
function literal(string0: string): $MutableComponent
function nbt(string0: string, boolean1: boolean, optional2: $Optional$$Type<$Component$$Type>, dataSource3: $DataSource$$Type): $MutableComponent
function nullToEmpty(string0: string): $Component
function of(string0: string): $FormattedText
function of(string0: string, style1: $Style$$Type): $FormattedText
function score(string0: string, string1: string): $MutableComponent
function selector(string0: string, optional1: $Optional$$Type<$Component$$Type>): $MutableComponent
function translatable(string0: string): $MutableComponent
function translatable(string0: string, ...object1s: any[]): $MutableComponent
function translatableWithFallback(string0: string, string1: string): $MutableComponent
function translatableWithFallback(string0: string, string1: string, ...object2s: any[]): $MutableComponent
}
export abstract class $ComponentKJS$$Static implements $ComponentKJS {
static "composite"(...formattedText0s: $FormattedText$$Type[]): $FormattedText
static "composite"(list0: $List$$Type<$FormattedText$$Type>): $FormattedText
static "empty"(): $MutableComponent
static "keybind"(string0: string): $MutableComponent
static "literal"(string0: string): $MutableComponent
static "nbt"(string0: string, boolean1: boolean, optional2: $Optional$$Type<$Component$$Type>, dataSource3: $DataSource$$Type): $MutableComponent
static "nullToEmpty"(string0: string): $Component
static "of"(string0: string): $FormattedText
static "of"(string0: string, style1: $Style$$Type): $FormattedText
static "score"(string0: string, string1: string): $MutableComponent
static "selector"(string0: string, optional1: $Optional$$Type<$Component$$Type>): $MutableComponent
static "translatable"(string0: string): $MutableComponent
static "translatable"(string0: string, ...object1s: any[]): $MutableComponent
static "translatableWithFallback"(string0: string, string1: string): $MutableComponent
static "translatableWithFallback"(string0: string, string1: string, ...object2s: any[]): $MutableComponent
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$ItemKJS" {
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $IngredientSupplierKJS } from "packages/dev/latvian/mods/kubejs/core/$IngredientSupplierKJS"
import { $MutableToolTier$$Type } from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import { $FoodBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$FoodBuilder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Rarity$$Type } from "packages/net/minecraft/world/item/$Rarity"
import { $FoodProperties$$Type } from "packages/net/minecraft/world/food/$FoodProperties"
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $List } from "packages/java/util/$List"
import { $AttributeModifier } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $ItemBuilder, $ItemBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $ItemStackKey } from "packages/dev/latvian/mods/kubejs/item/$ItemStackKey"

export interface $ItemKJS extends $IngredientSupplierKJS {
"addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
"getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
"getCreativeTab"(): string
"getDigSpeed"(): float
"getId"(): string
"getIdLocation"(): $ResourceLocation
"getItemBuilder"(): $ItemBuilder
"getMod"(): string
"getTypeData"(): $CompoundTag
"getTypeItemStackKey"(): $ItemStackKey
"kjs$asIngredient"(): $Ingredient
"removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
"self"(): $Item
"setArmorKnockbackResistance"(knockbackResistance: double): void
"setArmorProtection"(armorProtection: double): void
"setArmorToughness"(armorToughness: double): void
"setAttackDamage"(attackDamage: double): void
"setAttackSpeed"(attackSpeed: double): void
"setBurnTime"(i: integer): void
"setCraftingRemainder"(i: $Item$$Type): void
"setDigSpeed"(speed: float): void
"setFireResistant"(b: boolean): void
"setFoodProperties"(properties: $FoodProperties$$Type): void
"setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
"setItemBuilder"(b: $ItemBuilder$$Type): void
"setMaxDamage"(i: integer): void
"setMaxStackSize"(i: integer): void
"setNameKey"(key: string): void
"setRarity"(r: $Rarity$$Type): void
"setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
get "creativeTab"(): string
get "digSpeed"(): float
get "id"(): string
get "idLocation"(): $ResourceLocation
get "itemBuilder"(): $ItemBuilder
get "mod"(): string
get "typeData"(): $CompoundTag
get "typeItemStackKey"(): $ItemStackKey
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "burnTime"(value: integer)
set "craftingRemainder"(value: $Item$$Type)
set "digSpeed"(value: float)
set "fireResistant"(value: boolean)
set "foodProperties"(value: $FoodProperties$$Type)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "itemBuilder"(value: $ItemBuilder$$Type)
set "maxDamage"(value: integer)
set "maxStackSize"(value: integer)
set "nameKey"(value: string)
set "rarity"(value: $Rarity$$Type)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}

export namespace $ItemKJS {
const probejs$$marker: never
}
export abstract class $ItemKJS$$Static implements $ItemKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$DataSenderKJS" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"

export interface $DataSenderKJS {
"sendData"(channel: string, data: $CompoundTag$$Type): void
"sendData"(channel: string): void
}

export namespace $DataSenderKJS {
const probejs$$marker: never
}
export abstract class $DataSenderKJS$$Static implements $DataSenderKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$BlockStateKJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockStateKJS {
"setDestroySpeed"(v: float): void
"setLightEmission"(v: integer): void
"setRequiresTool"(v: boolean): void
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}

export namespace $BlockStateKJS {
const probejs$$marker: never
}
export abstract class $BlockStateKJS$$Static implements $BlockStateKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$LivingEntityKJS" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $EntityKJS } from "packages/dev/latvian/mods/kubejs/core/$EntityKJS"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"
import { $UUID } from "packages/java/util/$UUID"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"

export interface $LivingEntityKJS extends $EntityKJS {
"attack"(hp: float): void
"canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
"damageEquipment"(slot: $EquipmentSlot$$Type): void
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageHeldItem"(): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
"foodEaten"(is: $ItemStack$$Type): void
"getAttributeBaseValue"(attribute: $Attribute$$Type): double
"getAttributeTotalValue"(attribute: $Attribute$$Type): double
"getBlock"(): $BlockContainerJS
"getChestArmorItem"(): $ItemStack
"getDefaultMovementSpeed"(): double
"getDisplayName"(): $Component
"getDistance"(x: double, y: double, z: double): double
"getDistance"(pos: $BlockPos$$Type): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
"getFacing"(): $Direction
"getFeetArmorItem"(): $ItemStack
"getHeadArmorItem"(): $ItemStack
"getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
"getItem"(): $ItemStack
"getLegsArmorItem"(): $ItemStack
"getLevel"(): $Level
"getMainHandItem"(): $ItemStack
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getName"(): $Component
"getNbt"(): $CompoundTag
"getOffHandItem"(): $ItemStack
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getPotionEffects"(): $EntityPotionEffectsJS
"getProfile"(): $GameProfile
"getReachDistance"(): double
"getScriptType"(): $ScriptType
"getServer"(): $MinecraftServer
"getTeamId"(): string
"getTotalMovementSpeed"(): double
"getType"(): string
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFrame"(): boolean
"isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
"isLiving"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isUndead"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(): $RayTraceResultJS
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"rayTrace"(distance: double): $RayTraceResultJS
"removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
"setChestArmorItem"(item: $ItemStack$$Type): void
"setDefaultMovementSpeed"(speed: double): void
"setDefaultMovementSpeedMultiplier"(speed: double): void
"setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
"setFeetArmorItem"(item: $ItemStack$$Type): void
"setHeadArmorItem"(item: $ItemStack$$Type): void
"setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
"setLegsArmorItem"(item: $ItemStack$$Type): void
"setMainHandItem"(item: $ItemStack$$Type): void
"setMaxHealth"(hp: float): void
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setMovementSpeedAddition"(speed: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setOffHandItem"(item: $ItemStack$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setStatusMessage"(message: $Component$$Type): void
"setTotalMovementSpeedMultiplier"(speed: double): void
"setX"(x: double): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"swing"(): void
"swing"(hand: $InteractionHand$$Type): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}

export namespace $LivingEntityKJS {
const KJS_PLAYER_CUSTOM_SPEED: $UUID
const KJS_PLAYER_CUSTOM_SPEED_NAME: string
}
export abstract class $LivingEntityKJS$$Static implements $LivingEntityKJS {
static readonly "KJS_PLAYER_CUSTOM_SPEED": $UUID
static readonly "KJS_PLAYER_CUSTOM_SPEED_NAME": string

}
}

declare module "packages/dev/latvian/mods/kubejs/core/$LootTablesKJS" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $LootDataId$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataId"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LootDataType$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataType"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $LootTablesKJS {
"kjs$completeReload"(parsedMap: $Map$$Type<$LootDataType$$Type<any>, $Map$$Type<$ResourceLocation$$Type, any>>, elements: $Map$$Type<$LootDataId$$Type<any>, any>): void
}

export namespace $LootTablesKJS {
function kjs$postLootEvents(map: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>): void
}
export abstract class $LootTablesKJS$$Static implements $LootTablesKJS {
static "kjs$postLootEvents"(map: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>): void
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$ServerLevelKJS" {
import { $AttachedData } from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FireworksJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $WithPersistentData } from "packages/dev/latvian/mods/kubejs/core/$WithPersistentData"
import { $ExplosionJS } from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $LevelKJS } from "packages/dev/latvian/mods/kubejs/core/$LevelKJS"
import { $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"

export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {
"createEntity"(type: $EntityType$$Type<any>): $Entity
"createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
"createExplosion"(x: double, y: double, z: double): $ExplosionJS
"getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
"getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
"getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
"getData"(): $AttachedData<$Level>
"getDimension"(): $ResourceLocation
"getDisplayName"(): $Component
"getEntities"(): $EntityArrayList
"getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
"getName"(): $Component
"getPersistentData"(): $CompoundTag
"getPlayers"(): $EntityArrayList
"getSide"(): $ScriptType
"isOverworld"(): boolean
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setStatusMessage"(message: $Component$$Type): void
"setTime"(time: long): void
"spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
"spawnLightning"(x: double, y: double, z: double, effectOnly: boolean, player: $ServerPlayer$$Type): void
"spawnLightning"(x: double, y: double, z: double, effectOnly: boolean): void
"spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
"tell"(message: $Component$$Type): void
get "data"(): $AttachedData<$Level>
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "name"(): $Component
get "persistentData"(): $CompoundTag
get "players"(): $EntityArrayList
get "side"(): $ScriptType
get "overworld"(): boolean
set "statusMessage"(value: $Component$$Type)
set "time"(value: long)
}

export namespace $ServerLevelKJS {
const probejs$$marker: never
}
export abstract class $ServerLevelKJS$$Static implements $ServerLevelKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/mixin/common/$EventHandlerInvoker" {
import { $EventJS$$Type } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $EventResult } from "packages/dev/latvian/mods/kubejs/event/$EventResult"
import { $EventHandler } from "packages/dev/latvian/mods/kubejs/event/$EventHandler"

export interface $EventHandlerInvoker {
"callHasResult"(): $EventHandler
"callPost"(eventJS0: $EventJS$$Type, object1: any): $EventResult
}

export namespace $EventHandlerInvoker {
const probejs$$marker: never
}
export abstract class $EventHandlerInvoker$$Static implements $EventHandlerInvoker {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$RecipeKJS" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $RecipeKJS {
"getGroup"(): string
"getMod"(): string
"getOrCreateId"(): $ResourceLocation
"getSchema"(): $RecipeSchema
"getType"(): $ResourceLocation
"hasInput"(match: $ReplacementMatch$$Type): boolean
"hasOutput"(match: $ReplacementMatch$$Type): boolean
"replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
"replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
"setGroup"(group: string): void
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
set "group"(value: string)
}

export namespace $RecipeKJS {
const probejs$$marker: never
}
export abstract class $RecipeKJS$$Static implements $RecipeKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$WindowKJS" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $InputStream, $InputStream$$Type } from "packages/java/io/$InputStream"
import { $IoSupplier, $IoSupplier$$Type } from "packages/net/minecraft/server/packs/resources/$IoSupplier"

export interface $WindowKJS {
"kjs$loadIcons"(original: $List$$Type<$IoSupplier$$Type<$InputStream$$Type>>): $List<$IoSupplier<$InputStream>>
}

export namespace $WindowKJS {
const probejs$$marker: never
}
export abstract class $WindowKJS$$Static implements $WindowKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$ItemStackKJS" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Collection } from "packages/java/util/$Collection"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $IngredientSupplierKJS } from "packages/dev/latvian/mods/kubejs/core/$IngredientSupplierKJS"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SpecialEquality } from "packages/dev/latvian/mods/rhino/util/$SpecialEquality"
import { $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $NBTSerializable } from "packages/dev/latvian/mods/rhino/mod/util/$NBTSerializable"
import { $JsonSerializable } from "packages/dev/latvian/mods/rhino/mod/util/$JsonSerializable"
import { $OutputItem } from "packages/dev/latvian/mods/kubejs/item/$OutputItem"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export interface $ItemStackKJS extends $SpecialEquality, $NBTSerializable, $JsonSerializable, $IngredientSupplierKJS {
"areItemsEqual"(other: $ItemStack$$Type): boolean
"asIngredient"(): $Ingredient
"enchant"(enchantment: $Enchantment$$Type, level: integer): $ItemStack
"enchant"(enchantments: $Map$$Type<any, any>): $ItemStack
"equalsIgnoringCount"(stack: $ItemStack$$Type): boolean
"getEnchantments"(): $Map<string, integer>
"getHarvestSpeed"(): float
"getHarvestSpeed"(block: $BlockContainerJS$$Type): float
"getId"(): string
"getIdLocation"(): $ResourceLocation
"getMod"(): string
"getNbtString"(): string
"getTags"(): $Collection<$ResourceLocation>
"getTypeData"(): $CompoundTag
"hasEnchantment"(enchantment: $Enchantment$$Type, level: integer): boolean
"hasTag"(tag: $ResourceLocation$$Type): boolean
/** @deprecated */
"ignoreNBT"(): $Ingredient
"isBlock"(): boolean
"isNBTEqual"(other: $ItemStack$$Type): boolean
"removeTag"(): void
"self"(): $ItemStack
"specialEquals"(o: any, shallow: boolean): boolean
"strongNBT"(): $Ingredient
"toItemString"(): string
"toNBT"(): $CompoundTag
"weakNBT"(): $Ingredient
"withChance"(chance: double): $OutputItem
"withCount"(c: integer): $ItemStack
"withLore"(text: $Component$$Type[]): $ItemStack
"withNBT"(nbt: $CompoundTag$$Type): $ItemStack
"withName"(displayName: $Component$$Type): $ItemStack
get "enchantments"(): $Map<string, integer>
get "harvestSpeed"(): float
get "id"(): string
get "idLocation"(): $ResourceLocation
get "mod"(): string
get "nbtString"(): string
get "tags"(): $Collection<$ResourceLocation>
get "typeData"(): $CompoundTag
get "block"(): boolean
}

export namespace $ItemStackKJS {
function checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean
}
export abstract class $ItemStackKJS$$Static implements $ItemStackKJS {
static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$MinecraftClientKJS" {
import { $ScheduledEvents } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents"
import { $TemporalAmount$$Type } from "packages/java/time/temporal/$TemporalAmount"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Minecraft } from "packages/net/minecraft/client/$Minecraft"
import { $MinecraftEnvironmentKJS } from "packages/dev/latvian/mods/kubejs/core/$MinecraftEnvironmentKJS"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScheduledEvents$Callback$$Type } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback"
import { $ScheduledEvents$ScheduledEvent } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"

export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
"getCurrentScreen"(): $Screen
"getCurrentWorldName"(): string
"getDisplayName"(): $Component
"getName"(): $Component
"getScheduledEvents"(): $ScheduledEvents
"isAltDown"(): boolean
"isCtrlDown"(): boolean
"isKeyDown"(key: integer): boolean
"isShiftDown"(): boolean
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"self"(): $Minecraft
"setCurrentScreen"(gui: $Screen$$Type): void
"setStatusMessage"(message: $Component$$Type): void
"setTitle"(t: string): void
"tell"(message: $Component$$Type): void
get "currentScreen"(): $Screen
get "currentWorldName"(): string
get "displayName"(): $Component
get "name"(): $Component
get "scheduledEvents"(): $ScheduledEvents
get "altDown"(): boolean
get "ctrlDown"(): boolean
get "shiftDown"(): boolean
set "currentScreen"(value: $Screen$$Type)
set "statusMessage"(value: $Component$$Type)
set "title"(value: string)
}

export namespace $MinecraftClientKJS {
const probejs$$marker: never
}
export abstract class $MinecraftClientKJS$$Static implements $MinecraftClientKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$ClientPlayerKJS" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $Stages } from "packages/dev/latvian/mods/kubejs/stages/$Stages"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $InventoryKJS } from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $NotificationBuilder$$Type } from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"
import { $AttachedData } from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import { $KubeJSInventoryListener } from "packages/dev/latvian/mods/kubejs/player/$KubeJSInventoryListener"
import { $PlayerStatsJS } from "packages/dev/latvian/mods/kubejs/player/$PlayerStatsJS"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $PlayerKJS } from "packages/dev/latvian/mods/kubejs/core/$PlayerKJS"

export interface $ClientPlayerKJS extends $PlayerKJS {
"addExhaustion"(exhaustion: float): void
"addFood"(f: integer, m: float): void
"addItemCooldown"(item: $Item$$Type, ticks: integer): void
"addXP"(xp: integer): void
"addXPLevels"(l: integer): void
"attack"(hp: float): void
"boostElytraFlight"(): void
"canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
"damageEquipment"(slot: $EquipmentSlot$$Type): void
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageHeldItem"(): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
"foodEaten"(is: $ItemStack$$Type): void
"getAttributeBaseValue"(attribute: $Attribute$$Type): double
"getAttributeTotalValue"(attribute: $Attribute$$Type): double
"getBlock"(): $BlockContainerJS
"getChestArmorItem"(): $ItemStack
"getCraftingGrid"(): $InventoryKJS
"getData"(): $AttachedData<$Player>
"getDefaultMovementSpeed"(): double
"getDisplayName"(): $Component
"getDistance"(x: double, y: double, z: double): double
"getDistance"(pos: $BlockPos$$Type): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
"getFacing"(): $Direction
"getFeetArmorItem"(): $ItemStack
"getFoodLevel"(): integer
"getHeadArmorItem"(): $ItemStack
"getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
"getInventory"(): $InventoryKJS
"getInventoryChangeListener"(): $KubeJSInventoryListener
"getItem"(): $ItemStack
"getLegsArmorItem"(): $ItemStack
"getLevel"(): $Level
"getMainHandItem"(): $ItemStack
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getMouseItem"(): $ItemStack
"getName"(): $Component
"getNbt"(): $CompoundTag
"getOffHandItem"(): $ItemStack
"getOpenInventory"(): $AbstractContainerMenu
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getPotionEffects"(): $EntityPotionEffectsJS
"getProfile"(): $GameProfile
"getReachDistance"(): double
"getSaturation"(): float
"getScriptType"(): $ScriptType
"getSelectedSlot"(): integer
"getServer"(): $MinecraftServer
"getStages"(): $Stages
"getStats"(): $PlayerStatsJS
"getTeamId"(): string
"getTotalMovementSpeed"(): double
"getType"(): string
"getXp"(): integer
"getXpLevel"(): integer
"give"(item: $ItemStack$$Type): void
"giveInHand"(item: $ItemStack$$Type): void
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFake"(): boolean
"isFrame"(): boolean
"isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
"isLiving"(): boolean
"isMiningBlock"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isSelf"(): boolean
"isUndead"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
"notify"(notification: $NotificationBuilder$$Type): void
"notify"(title: $Component$$Type, text: $Component$$Type): void
"paint"(tag: $CompoundTag$$Type): void
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(): $RayTraceResultJS
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"rayTrace"(distance: double): $RayTraceResultJS
"removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"sendData"(channel: string, data: $CompoundTag$$Type): void
"sendData"(channel: string): void
"sendInventoryUpdate"(): void
"setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
"setChestArmorItem"(item: $ItemStack$$Type): void
"setDefaultMovementSpeed"(speed: double): void
"setDefaultMovementSpeedMultiplier"(speed: double): void
"setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
"setFeetArmorItem"(item: $ItemStack$$Type): void
"setFoodLevel"(foodLevel: integer): void
"setHeadArmorItem"(item: $ItemStack$$Type): void
"setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
"setLegsArmorItem"(item: $ItemStack$$Type): void
"setMainHandItem"(item: $ItemStack$$Type): void
"setMaxHealth"(hp: float): void
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setMouseItem"(item: $ItemStack$$Type): void
"setMovementSpeedAddition"(speed: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setOffHandItem"(item: $ItemStack$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setSaturation"(saturation: float): void
"setSelectedSlot"(index: integer): void
"setStatusMessage"(message: $Component$$Type): void
"setTotalMovementSpeedMultiplier"(speed: double): void
"setX"(x: double): void
"setXp"(xp: integer): void
"setXpLevel"(l: integer): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"swing"(): void
"swing"(hand: $InteractionHand$$Type): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "craftingGrid"(): $InventoryKJS
get "data"(): $AttachedData<$Player>
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "inventory"(): $InventoryKJS
get "inventoryChangeListener"(): $KubeJSInventoryListener
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "stages"(): $Stages
get "stats"(): $PlayerStatsJS
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "self"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}

export namespace $ClientPlayerKJS {
const probejs$$marker: never
}
export abstract class $ClientPlayerKJS$$Static implements $ClientPlayerKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$MessageSenderKJS" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"

export interface $MessageSenderKJS {
"getDisplayName"(): $Component
"getName"(): $Component
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setStatusMessage"(message: $Component$$Type): void
"tell"(message: $Component$$Type): void
get "displayName"(): $Component
get "name"(): $Component
set "statusMessage"(value: $Component$$Type)
}

export namespace $MessageSenderKJS {
const probejs$$marker: never
}
export abstract class $MessageSenderKJS$$Static implements $MessageSenderKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$LevelKJS" {
import { $AttachedData } from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $ScriptTypeHolder } from "packages/dev/latvian/mods/kubejs/script/$ScriptTypeHolder"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $WithAttachedData } from "packages/dev/latvian/mods/kubejs/core/$WithAttachedData"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FireworksJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ExplosionJS } from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"

export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder {
"createEntity"(type: $EntityType$$Type<any>): $Entity
"createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
"createExplosion"(x: double, y: double, z: double): $ExplosionJS
"getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
"getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
"getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
"getData"(): $AttachedData<$Level>
"getDimension"(): $ResourceLocation
"getDisplayName"(): $Component
"getEntities"(): $EntityArrayList
"getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
"getName"(): $Component
"getPlayers"(): $EntityArrayList
"getSide"(): $ScriptType
"isOverworld"(): boolean
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"self"(): $Level
"setStatusMessage"(message: $Component$$Type): void
"spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
"spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
"tell"(message: $Component$$Type): void
get "data"(): $AttachedData<$Level>
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "name"(): $Component
get "players"(): $EntityArrayList
get "side"(): $ScriptType
get "overworld"(): boolean
set "statusMessage"(value: $Component$$Type)
}

export namespace $LevelKJS {
const probejs$$marker: never
}
export abstract class $LevelKJS$$Static implements $LevelKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$LazyComponentKJS" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Supplier } from "packages/java/util/function/$Supplier"

export interface $LazyComponentKJS extends $Supplier<$Component> {
"get"(): $Component
}

export namespace $LazyComponentKJS {
const probejs$$marker: never
}
export abstract class $LazyComponentKJS$$Static implements $LazyComponentKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$GameRulesKJS" {
import { $GameRules$Value } from "packages/net/minecraft/world/level/$GameRules$Value"

export interface $GameRulesKJS {
"kjs$get"(string0: string): $GameRules$Value<any>
"kjs$getBoolean"(rule: string): boolean
"kjs$getInt"(rule: string): integer
"kjs$getString"(rule: string): string
"kjs$set"(string0: string, string1: string): void
}

export namespace $GameRulesKJS {
const probejs$$marker: never
}
export abstract class $GameRulesKJS$$Static implements $GameRulesKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$EntityKJS" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $MessageSenderKJS } from "packages/dev/latvian/mods/kubejs/core/$MessageSenderKJS"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $ScriptTypeHolder } from "packages/dev/latvian/mods/kubejs/script/$ScriptTypeHolder"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $WithPersistentData } from "packages/dev/latvian/mods/kubejs/core/$WithPersistentData"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityKJS extends $WithPersistentData, $MessageSenderKJS, $ScriptTypeHolder {
"attack"(hp: float): void
"getBlock"(): $BlockContainerJS
"getDisplayName"(): $Component
"getDistance"(x: double, y: double, z: double): double
"getDistance"(pos: $BlockPos$$Type): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getFacing"(): $Direction
"getItem"(): $ItemStack
"getLevel"(): $Level
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getName"(): $Component
"getNbt"(): $CompoundTag
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getProfile"(): $GameProfile
"getScriptType"(): $ScriptType
"getServer"(): $MinecraftServer
"getTeamId"(): string
"getType"(): string
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFrame"(): boolean
"isLiving"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"rayTrace"(distance: double): $RayTraceResultJS
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"self"(): $Entity
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setStatusMessage"(message: $Component$$Type): void
"setX"(x: double): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}

export namespace $EntityKJS {
const probejs$$marker: never
}
export abstract class $EntityKJS$$Static implements $EntityKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$ItemEntityKJS" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $EntityKJS } from "packages/dev/latvian/mods/kubejs/core/$EntityKJS"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export interface $ItemEntityKJS extends $EntityKJS {
"attack"(hp: float): void
"getBlock"(): $BlockContainerJS
"getDisplayName"(): $Component
"getDistance"(x: double, y: double, z: double): double
"getDistance"(pos: $BlockPos$$Type): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getFacing"(): $Direction
"getItem"(): $ItemStack
"getLevel"(): $Level
"getLifespan"(): integer
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getName"(): $Component
"getNbt"(): $CompoundTag
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getProfile"(): $GameProfile
"getScriptType"(): $ScriptType
"getServer"(): $MinecraftServer
"getTeamId"(): string
"getTicksUntilDespawn"(): integer
"getType"(): string
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFrame"(): boolean
"isLiving"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"rayTrace"(distance: double): $RayTraceResultJS
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setDefaultPickUpDelay"(): void
"setInfinitePickUpDelay"(): void
"setLifespan"(lifespan: integer): void
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setNoDespawn"(): void
"setNoPickUpDelay"(): void
"setPosition"(x: double, y: double, z: double): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setStatusMessage"(message: $Component$$Type): void
"setTicksUntilDespawn"(ticks: integer): void
"setX"(x: double): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "lifespan"(): integer
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "teamId"(): string
get "ticksUntilDespawn"(): integer
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "lifespan"(value: integer)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "ticksUntilDespawn"(value: integer)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}

export namespace $ItemEntityKJS {
const probejs$$marker: never
}
export abstract class $ItemEntityKJS$$Static implements $ItemEntityKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$IngredientSupplierKJS" {
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $IngredientSupplierKJS {
"kjs$asIngredient"(): $Ingredient
}

export namespace $IngredientSupplierKJS {
const probejs$$marker: never
}
export abstract class $IngredientSupplierKJS$$Static implements $IngredientSupplierKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$MinecraftEnvironmentKJS" {
import { $ScheduledEvents } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents"
import { $TemporalAmount$$Type } from "packages/java/time/temporal/$TemporalAmount"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MessageSenderKJS } from "packages/dev/latvian/mods/kubejs/core/$MessageSenderKJS"
import { $ScheduledEvents$Callback$$Type } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback"
import { $ScheduledEvents$ScheduledEvent } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"

export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
"getDisplayName"(): $Component
"getName"(): $Component
"getScheduledEvents"(): $ScheduledEvents
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
"setStatusMessage"(message: $Component$$Type): void
"tell"(message: $Component$$Type): void
get "displayName"(): $Component
get "name"(): $Component
get "scheduledEvents"(): $ScheduledEvents
set "statusMessage"(value: $Component$$Type)
}

export namespace $MinecraftEnvironmentKJS {
const probejs$$marker: never
}
export abstract class $MinecraftEnvironmentKJS$$Static implements $MinecraftEnvironmentKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$PlayerSelector" {
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"

export interface $PlayerSelector {
"getPlayer"(minecraftServer0: $MinecraftServer$$Type): $ServerPlayer
"or"(fallback: $PlayerSelector$$Type): $PlayerSelector
}

export namespace $PlayerSelector {
function fuzzyName(name: string): $PlayerSelector
function identity(player: $ServerPlayer$$Type): $PlayerSelector
function name(name: string): $PlayerSelector
function of(o: any): $PlayerSelector
function uuid(uuid: $UUID$$Type): $PlayerSelector
}
export abstract class $PlayerSelector$$Static implements $PlayerSelector {
static "fuzzyName"(name: string): $PlayerSelector
static "identity"(player: $ServerPlayer$$Type): $PlayerSelector
static "name"(name: string): $PlayerSelector
static "of"(o: any): $PlayerSelector
static "uuid"(uuid: $UUID$$Type): $PlayerSelector
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$ItemFrameEntityKJS" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $EntityKJS } from "packages/dev/latvian/mods/kubejs/core/$EntityKJS"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export interface $ItemFrameEntityKJS extends $EntityKJS {
"attack"(hp: float): void
"getBlock"(): $BlockContainerJS
"getDisplayName"(): $Component
"getDistance"(x: double, y: double, z: double): double
"getDistance"(pos: $BlockPos$$Type): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getFacing"(): $Direction
"getItem"(): $ItemStack
"getLevel"(): $Level
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getName"(): $Component
"getNbt"(): $CompoundTag
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getProfile"(): $GameProfile
"getScriptType"(): $ScriptType
"getServer"(): $MinecraftServer
"getTeamId"(): string
"getType"(): string
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFrame"(): boolean
"isLiving"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"rayTrace"(distance: double): $RayTraceResultJS
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setStatusMessage"(message: $Component$$Type): void
"setX"(x: double): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}

export namespace $ItemFrameEntityKJS {
const probejs$$marker: never
}
export abstract class $ItemFrameEntityKJS$$Static implements $ItemFrameEntityKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$BlockBuilderProvider" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"

export interface $BlockBuilderProvider {
"getBlockBuilder"(): $BlockBuilder
get "blockBuilder"(): $BlockBuilder
}

export namespace $BlockBuilderProvider {
const probejs$$marker: never
}
export abstract class $BlockBuilderProvider$$Static implements $BlockBuilderProvider {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$ModifiableItemKJS" {
import { $Multimap, $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier, $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export interface $ModifiableItemKJS {
"kjs$getAttributeMap"(): $Multimap<$Attribute, $AttributeModifier>
"kjs$getMutableAttributeMap"(): $Multimap<$Attribute, $AttributeModifier>
"kjs$setAttributeMap"(attributes: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>): void
}

export namespace $ModifiableItemKJS {
const probejs$$marker: never
}
export abstract class $ModifiableItemKJS$$Static implements $ModifiableItemKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$PlayerKJS" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $Stages } from "packages/dev/latvian/mods/kubejs/stages/$Stages"
import { $WithAttachedData } from "packages/dev/latvian/mods/kubejs/core/$WithAttachedData"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $DataSenderKJS } from "packages/dev/latvian/mods/kubejs/core/$DataSenderKJS"
import { $InventoryKJS } from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $NotificationBuilder$$Type } from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LivingEntityKJS } from "packages/dev/latvian/mods/kubejs/core/$LivingEntityKJS"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"
import { $AttachedData } from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import { $KubeJSInventoryListener } from "packages/dev/latvian/mods/kubejs/player/$KubeJSInventoryListener"
import { $PlayerStatsJS } from "packages/dev/latvian/mods/kubejs/player/$PlayerStatsJS"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"

export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
"addExhaustion"(exhaustion: float): void
"addFood"(f: integer, m: float): void
"addItemCooldown"(item: $Item$$Type, ticks: integer): void
"addXP"(xp: integer): void
"addXPLevels"(l: integer): void
"attack"(hp: float): void
"boostElytraFlight"(): void
"canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
"damageEquipment"(slot: $EquipmentSlot$$Type): void
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageHeldItem"(): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
"foodEaten"(is: $ItemStack$$Type): void
"getAttributeBaseValue"(attribute: $Attribute$$Type): double
"getAttributeTotalValue"(attribute: $Attribute$$Type): double
"getBlock"(): $BlockContainerJS
"getChestArmorItem"(): $ItemStack
"getCraftingGrid"(): $InventoryKJS
"getData"(): $AttachedData<$Player>
"getDefaultMovementSpeed"(): double
"getDisplayName"(): $Component
"getDistance"(x: double, y: double, z: double): double
"getDistance"(pos: $BlockPos$$Type): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
"getFacing"(): $Direction
"getFeetArmorItem"(): $ItemStack
"getFoodLevel"(): integer
"getHeadArmorItem"(): $ItemStack
"getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
"getInventory"(): $InventoryKJS
"getInventoryChangeListener"(): $KubeJSInventoryListener
"getItem"(): $ItemStack
"getLegsArmorItem"(): $ItemStack
"getLevel"(): $Level
"getMainHandItem"(): $ItemStack
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getMouseItem"(): $ItemStack
"getName"(): $Component
"getNbt"(): $CompoundTag
"getOffHandItem"(): $ItemStack
"getOpenInventory"(): $AbstractContainerMenu
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getPotionEffects"(): $EntityPotionEffectsJS
"getProfile"(): $GameProfile
"getReachDistance"(): double
"getSaturation"(): float
"getScriptType"(): $ScriptType
"getSelectedSlot"(): integer
"getServer"(): $MinecraftServer
"getStages"(): $Stages
"getStats"(): $PlayerStatsJS
"getTeamId"(): string
"getTotalMovementSpeed"(): double
"getType"(): string
"getXp"(): integer
"getXpLevel"(): integer
"give"(item: $ItemStack$$Type): void
"giveInHand"(item: $ItemStack$$Type): void
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFake"(): boolean
"isFrame"(): boolean
"isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
"isLiving"(): boolean
"isMiningBlock"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isUndead"(): boolean
"isWaterCreature"(): boolean
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
"notify"(title: $Component$$Type, text: $Component$$Type): void
"notify"(builder: $NotificationBuilder$$Type): void
"paint"(renderer: $CompoundTag$$Type): void
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(): $RayTraceResultJS
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"rayTrace"(distance: double): $RayTraceResultJS
"removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"sendData"(channel: string, data: $CompoundTag$$Type): void
"sendData"(channel: string): void
"sendInventoryUpdate"(): void
"setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
"setChestArmorItem"(item: $ItemStack$$Type): void
"setDefaultMovementSpeed"(speed: double): void
"setDefaultMovementSpeedMultiplier"(speed: double): void
"setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
"setFeetArmorItem"(item: $ItemStack$$Type): void
"setFoodLevel"(foodLevel: integer): void
"setHeadArmorItem"(item: $ItemStack$$Type): void
"setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
"setLegsArmorItem"(item: $ItemStack$$Type): void
"setMainHandItem"(item: $ItemStack$$Type): void
"setMaxHealth"(hp: float): void
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setMouseItem"(item: $ItemStack$$Type): void
"setMovementSpeedAddition"(speed: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setOffHandItem"(item: $ItemStack$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setSaturation"(saturation: float): void
"setSelectedSlot"(index: integer): void
"setStatusMessage"(message: $Component$$Type): void
"setTotalMovementSpeedMultiplier"(speed: double): void
"setX"(x: double): void
"setXp"(xp: integer): void
"setXpLevel"(l: integer): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"swing"(): void
"swing"(hand: $InteractionHand$$Type): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "craftingGrid"(): $InventoryKJS
get "data"(): $AttachedData<$Player>
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "inventory"(): $InventoryKJS
get "inventoryChangeListener"(): $KubeJSInventoryListener
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "stages"(): $Stages
get "stats"(): $PlayerStatsJS
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}

export namespace $PlayerKJS {
const probejs$$marker: never
}
export abstract class $PlayerKJS$$Static implements $PlayerKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$WithAttachedData" {
import { $AttachedData } from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MessageSenderKJS } from "packages/dev/latvian/mods/kubejs/core/$MessageSenderKJS"

export interface $WithAttachedData<T> extends $MessageSenderKJS {
"getData"(): $AttachedData<T>
"getDisplayName"(): $Component
"getName"(): $Component
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setStatusMessage"(message: $Component$$Type): void
"tell"(message: $Component$$Type): void
get "data"(): $AttachedData<T>
get "displayName"(): $Component
get "name"(): $Component
set "statusMessage"(value: $Component$$Type)
}

export namespace $WithAttachedData {
const probejs$$marker: never
}
export abstract class $WithAttachedData$$Static<T> implements $WithAttachedData<T> {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$WithPersistentData" {
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MessageSenderKJS } from "packages/dev/latvian/mods/kubejs/core/$MessageSenderKJS"

export interface $WithPersistentData extends $MessageSenderKJS {
"getDisplayName"(): $Component
"getName"(): $Component
"getPersistentData"(): $CompoundTag
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"setStatusMessage"(message: $Component$$Type): void
"tell"(message: $Component$$Type): void
get "displayName"(): $Component
get "name"(): $Component
get "persistentData"(): $CompoundTag
set "statusMessage"(value: $Component$$Type)
}

export namespace $WithPersistentData {
const probejs$$marker: never
}
export abstract class $WithPersistentData$$Static implements $WithPersistentData {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$CreativeModeTabKJS" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $CreativeModeTabKJS {
"kjs$setDisplayName"(component0: $Component$$Type): void
"kjs$setIcon"(itemStack0: $ItemStack$$Type): void
}

export namespace $CreativeModeTabKJS {
const probejs$$marker: never
}
export abstract class $CreativeModeTabKJS$$Static implements $CreativeModeTabKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$BlockKJS" {
import { $BlockBuilder, $BlockBuilder$$Type } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $SoundType$$Type } from "packages/net/minecraft/world/level/block/$SoundType"
import { $List } from "packages/java/util/$List"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockBuilderProvider } from "packages/dev/latvian/mods/kubejs/core/$BlockBuilderProvider"
import { $RandomTickCallbackJS$$Type } from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"

export interface $BlockKJS extends $BlockBuilderProvider {
"getBlockBuilder"(): $BlockBuilder
"getBlockStates"(): $List<$BlockState>
"getId"(): string
"getIdLocation"(): $ResourceLocation
"getMod"(): string
"getTypeData"(): $CompoundTag
"setBlockBuilder"(b: $BlockBuilder$$Type): void
"setDestroySpeed"(v: float): void
"setExplosionResistance"(v: float): void
"setFriction"(v: float): void
"setHasCollision"(v: boolean): void
"setIsRandomlyTicking"(v: boolean): void
"setJumpFactor"(v: float): void
"setLightEmission"(v: integer): void
"setNameKey"(key: string): void
"setRandomTickCallback"(callback: $Consumer$$Type<$RandomTickCallbackJS$$Type>): void
"setRequiresTool"(v: boolean): void
"setSoundType"(v: $SoundType$$Type): void
"setSpeedFactor"(v: float): void
get "blockBuilder"(): $BlockBuilder
get "blockStates"(): $List<$BlockState>
get "id"(): string
get "idLocation"(): $ResourceLocation
get "mod"(): string
get "typeData"(): $CompoundTag
set "blockBuilder"(value: $BlockBuilder$$Type)
set "destroySpeed"(value: float)
set "explosionResistance"(value: float)
set "friction"(value: float)
set "hasCollision"(value: boolean)
set "isRandomlyTicking"(value: boolean)
set "jumpFactor"(value: float)
set "lightEmission"(value: integer)
set "nameKey"(value: string)
set "randomTickCallback"(value: $Consumer$$Type<$RandomTickCallbackJS$$Type>)
set "requiresTool"(value: boolean)
set "soundType"(value: $SoundType$$Type)
set "speedFactor"(value: float)
}

export namespace $BlockKJS {
const probejs$$marker: never
}
export abstract class $BlockKJS$$Static implements $BlockKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$CraftingContainerKJS" {
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $CraftingContainerKJS {
"getMenu"(): $AbstractContainerMenu
get "menu"(): $AbstractContainerMenu
}

export namespace $CraftingContainerKJS {
const probejs$$marker: never
}
export abstract class $CraftingContainerKJS$$Static implements $CraftingContainerKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$ServerPlayerKJS" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ChestMenuData$$Type } from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuData"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $Stages } from "packages/dev/latvian/mods/kubejs/stages/$Stages"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $InventoryKJS, $InventoryKJS$$Type } from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $NotificationBuilder$$Type } from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"
import { $AttachedData } from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import { $KubeJSInventoryListener } from "packages/dev/latvian/mods/kubejs/player/$KubeJSInventoryListener"
import { $KubeJSGUI$$Type } from "packages/dev/latvian/mods/kubejs/gui/$KubeJSGUI"
import { $PlayerStatsJS } from "packages/dev/latvian/mods/kubejs/player/$PlayerStatsJS"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $PlayerKJS } from "packages/dev/latvian/mods/kubejs/core/$PlayerKJS"

export interface $ServerPlayerKJS extends $PlayerKJS {
"addExhaustion"(exhaustion: float): void
"addFood"(f: integer, m: float): void
"addItemCooldown"(item: $Item$$Type, ticks: integer): void
"addXP"(xp: integer): void
"addXPLevels"(l: integer): void
"attack"(hp: float): void
"ban"(banner: string, reason: string, expiresInMillis: long): void
"boostElytraFlight"(): void
"canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
"captureInventory"(autoRestore: boolean): $Container
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
"damageEquipment"(slot: $EquipmentSlot$$Type): void
"damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
"damageHeldItem"(): void
"damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
"foodEaten"(is: $ItemStack$$Type): void
"getAttributeBaseValue"(attribute: $Attribute$$Type): double
"getAttributeTotalValue"(attribute: $Attribute$$Type): double
"getBlock"(): $BlockContainerJS
"getChestArmorItem"(): $ItemStack
"getCraftingGrid"(): $InventoryKJS
"getData"(): $AttachedData<$Player>
"getDefaultMovementSpeed"(): double
"getDisplayName"(): $Component
"getDistance"(x: double, y: double, z: double): double
"getDistance"(pos: $BlockPos$$Type): double
"getDistanceSq"(pos: $BlockPos$$Type): double
"getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
"getFacing"(): $Direction
"getFeetArmorItem"(): $ItemStack
"getFoodLevel"(): integer
"getHeadArmorItem"(): $ItemStack
"getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
"getInventory"(): $InventoryKJS
"getInventoryChangeListener"(): $KubeJSInventoryListener
"getItem"(): $ItemStack
"getLegsArmorItem"(): $ItemStack
"getLevel"(): $Level
"getMainHandItem"(): $ItemStack
"getMotionX"(): double
"getMotionY"(): double
"getMotionZ"(): double
"getMouseItem"(): $ItemStack
"getName"(): $Component
"getNbt"(): $CompoundTag
"getOffHandItem"(): $ItemStack
"getOpenInventory"(): $AbstractContainerMenu
"getPassengers"(): $EntityArrayList
"getPersistentData"(): $CompoundTag
"getPotionEffects"(): $EntityPotionEffectsJS
"getProfile"(): $GameProfile
"getReachDistance"(): double
"getSaturation"(): float
"getScriptType"(): $ScriptType
"getSelectedSlot"(): integer
"getServer"(): $MinecraftServer
"getSpawnLocation"(): $BlockContainerJS
"getStages"(): $Stages
"getStats"(): $PlayerStatsJS
"getTeamId"(): string
"getTotalMovementSpeed"(): double
"getType"(): string
"getXp"(): integer
"getXpLevel"(): integer
"give"(item: $ItemStack$$Type): void
"giveInHand"(item: $ItemStack$$Type): void
"isAdvancementDone"(id: $ResourceLocation$$Type): boolean
"isAmbientCreature"(): boolean
"isAnimal"(): boolean
"isFake"(): boolean
"isFrame"(): boolean
"isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
"isLiving"(): boolean
"isMiningBlock"(): boolean
"isMonster"(): boolean
"isOnScoreboardTeam"(teamId: string): boolean
"isOp"(): boolean
"isPeacefulCreature"(): boolean
"isPlayer"(): boolean
"isUndead"(): boolean
"isWaterCreature"(): boolean
"kick"(reason: $Component$$Type): void
"kick"(): void
"mergeNbt"(tag: $CompoundTag$$Type): $Entity
"modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
"notify"(builder: $NotificationBuilder$$Type): void
"notify"(title: $Component$$Type, text: $Component$$Type): void
"openChestGUI"(title: $Component$$Type, rows: integer, gui: $Consumer$$Type<$ChestMenuData$$Type>): void
"openGUI"(gui: $Consumer$$Type<$KubeJSGUI$$Type>): void
"openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type): void
"paint"(renderer: $CompoundTag$$Type): void
"playSound"(id: $SoundEvent$$Type): void
"playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
"rayTrace"(): $RayTraceResultJS
"rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
"rayTrace"(distance: double): $RayTraceResultJS
"removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
"revokeAdvancement"(id: $ResourceLocation$$Type): void
"runCommand"(command: string): integer
"runCommandSilent"(command: string): integer
"sendData"(channel: string, data: $CompoundTag$$Type): void
"sendData"(channel: string): void
"sendInventoryUpdate"(): void
"setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
"setChestArmorItem"(item: $ItemStack$$Type): void
"setCreativeMode"(mode: boolean): void
"setDefaultMovementSpeed"(speed: double): void
"setDefaultMovementSpeedMultiplier"(speed: double): void
"setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
"setFeetArmorItem"(item: $ItemStack$$Type): void
"setFoodLevel"(foodLevel: integer): void
"setHeadArmorItem"(item: $ItemStack$$Type): void
"setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
"setLegsArmorItem"(item: $ItemStack$$Type): void
"setMainHandItem"(item: $ItemStack$$Type): void
"setMaxHealth"(hp: float): void
"setMotionX"(x: double): void
"setMotionY"(y: double): void
"setMotionZ"(z: double): void
"setMouseItem"(item: $ItemStack$$Type): void
"setMovementSpeedAddition"(speed: double): void
"setNbt"(nbt: $CompoundTag$$Type): void
"setOffHandItem"(item: $ItemStack$$Type): void
"setPosition"(x: double, y: double, z: double): void
"setPosition"(block: $BlockContainerJS$$Type): void
"setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
"setRotation"(yaw: float, pitch: float): void
"setSaturation"(saturation: float): void
"setSelectedSlot"(index: integer): void
"setSpawnLocation"(c: $BlockContainerJS$$Type): void
"setStatusMessage"(message: $Component$$Type): void
"setTotalMovementSpeedMultiplier"(speed: double): void
"setX"(x: double): void
"setXp"(xp: integer): void
"setXpLevel"(l: integer): void
"setY"(y: double): void
"setZ"(z: double): void
"spawn"(): void
"swing"(): void
"swing"(hand: $InteractionHand$$Type): void
"teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
"tell"(message: $Component$$Type): void
"unlockAdvancement"(id: $ResourceLocation$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "craftingGrid"(): $InventoryKJS
get "data"(): $AttachedData<$Player>
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "inventory"(): $InventoryKJS
get "inventoryChangeListener"(): $KubeJSInventoryListener
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "passengers"(): $EntityArrayList
get "persistentData"(): $CompoundTag
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "spawnLocation"(): $BlockContainerJS
get "stages"(): $Stages
get "stats"(): $PlayerStatsJS
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "op"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "creativeMode"(value: boolean)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "spawnLocation"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}

export namespace $ServerPlayerKJS {
const probejs$$marker: never
}
export abstract class $ServerPlayerKJS$$Static implements $ServerPlayerKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$InventoryKJS" {
import { $List } from "packages/java/util/$List"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export interface $InventoryKJS {
"asContainer"(): $Container
"clear"(): void
"clear"(ingredient: $Ingredient$$Type): void
"count"(ingredient: $Ingredient$$Type): integer
"count"(): integer
"countNonEmpty"(): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
"find"(ingredient: $Ingredient$$Type): integer
"find"(): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getHeight"(): integer
"getSlotLimit"(slot: integer): integer
"getSlots"(): integer
"getStackInSlot"(slot: integer): $ItemStack
"getWidth"(): integer
"insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
"isMutable"(): boolean
"setChanged"(): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $InventoryKJS {
const probejs$$marker: never
}
export abstract class $InventoryKJS$$Static implements $InventoryKJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/mixin/forge/$RecipeManagerAccessor" {
import { $ICondition$IContext } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"

export interface $RecipeManagerAccessor {
"getContext"(): $ICondition$IContext
get "context"(): $ICondition$IContext
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccessor$$Static implements $RecipeManagerAccessor {
}
}

declare module "packages/dev/latvian/mods/kubejs/core/$FireworkRocketEntityKJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FireworkRocketEntityKJS {
"setLifetimeKJS"(int0: integer): void
set "lifetimeKJS"(value: integer)
}

export namespace $FireworkRocketEntityKJS {
const probejs$$marker: never
}
export abstract class $FireworkRocketEntityKJS$$Static implements $FireworkRocketEntityKJS {
}
}

