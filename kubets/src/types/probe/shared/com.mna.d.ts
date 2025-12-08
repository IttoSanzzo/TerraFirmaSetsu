declare module "packages/com/mna/api/cantrips/$ICantrip" {
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $List } from "packages/java/util/$List"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICantrip {
"dynamicItem"(item0: $Item$$Type): $ICantrip
"getDefaultCombination"(): $List<$ResourceLocation>
"getDefaultStack"(): $ItemStack
"getDelay"(): integer
"getIcon"(): $ResourceLocation
"getId"(): $ResourceLocation
"getRequiredAdvancement"(): $ResourceLocation
"getSound"(): $SoundEvent
"getTier"(): integer
"getValidDynamicItem"(): $Item
"isStackLocked"(): boolean
"setDelay"(int0: integer): $ICantrip
"setIcon"(resourceLocation0: $ResourceLocation$$Type): $ICantrip
"setRequiredAdvancement"(resourceLocation0: $ResourceLocation$$Type): $ICantrip
"setSound"(soundEvent0: $SoundEvent$$Type): $ICantrip
get "defaultCombination"(): $List<$ResourceLocation>
get "defaultStack"(): $ItemStack
get "delay"(): integer
get "icon"(): $ResourceLocation
get "id"(): $ResourceLocation
get "requiredAdvancement"(): $ResourceLocation
get "sound"(): $SoundEvent
get "tier"(): integer
get "validDynamicItem"(): $Item
get "stackLocked"(): boolean
set "delay"(value: integer)
set "icon"(value: $ResourceLocation$$Type)
set "requiredAdvancement"(value: $ResourceLocation$$Type)
set "sound"(value: $SoundEvent$$Type)
}

export namespace $ICantrip {
const probejs$$marker: never
}
export abstract class $ICantrip$$Static implements $ICantrip {
}
}

declare module "packages/com/mna/api/events/construct/$ConstructEatItemEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IConstruct, $IConstruct$$Type } from "packages/com/mna/api/entities/construct/$IConstruct"

export class $ConstructEatItemEvent extends $Event {
constructor()
constructor(iConstruct0: $IConstruct$$Type<any>, itemStack1: $ItemStack$$Type)

public "getConstruct"(): $IConstruct<any>
public "getStack"(): $ItemStack
get "construct"(): $IConstruct<any>
get "stack"(): $ItemStack
}
}

declare module "packages/com/mna/api/events/$EldrinPowerTransferredEvent" {
import { $Affinity$$Type } from "packages/com/mna/api/affinity/$Affinity"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"

export class $EldrinPowerTransferredEvent extends $Event {
constructor()
constructor(affinity0: $Affinity$$Type, float1: float, vec32: $Vec3$$Type, vec33: $Vec3$$Type)

}
}

declare module "packages/com/mna/api/faction/$IFaction" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Attribute$$Type } from "packages/com/mna/api/spells/attributes/$Attribute"
import { $List } from "packages/java/util/$List"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ChatFormatting } from "packages/net/minecraft/$ChatFormatting"

export interface $IFaction {
"getAlliedFactions"(): $List<$IFaction>
"getCastingResource"(player0: $Player$$Type): $ResourceLocation
"getCastingResources"(): $ResourceLocation[]
"getEnemyFactions"(): $List<$IFaction>
"getFactionGrimoire"(): $ItemStack
"getFactionIcon"(): $ResourceLocation
"getFactionIconTextureSize"(): integer
"getHornSound"(): $SoundEvent
"getManaweaveRGB"(): integer[]
"getMaxModifierBonus"(attribute0: $Attribute$$Type): float
"getMinModifierBonus"(attribute0: $Attribute$$Type): float
"getOcculusTaskPrompt"(int0: integer): $Component
"getRaidSound"(): $SoundEvent
"getSanctumStructure"(): $ResourceLocation
"getTokenItem"(): $Item
"getTornJournalPageFactionColor"(): $ChatFormatting
"is"(resourceLocation0: $ResourceLocation$$Type): boolean
"isAlliedTo"(iFaction0: $IFaction$$Type): boolean
get "alliedFactions"(): $List<$IFaction>
get "castingResources"(): $ResourceLocation[]
get "enemyFactions"(): $List<$IFaction>
get "factionGrimoire"(): $ItemStack
get "factionIcon"(): $ResourceLocation
get "factionIconTextureSize"(): integer
get "hornSound"(): $SoundEvent
get "manaweaveRGB"(): integer[]
get "raidSound"(): $SoundEvent
get "sanctumStructure"(): $ResourceLocation
get "tokenItem"(): $Item
get "tornJournalPageFactionColor"(): $ChatFormatting
}

export namespace $IFaction {
const probejs$$marker: never
}
export abstract class $IFaction$$Static implements $IFaction {
}
}

declare module "packages/com/mna/api/events/$SpellCraftedEvent" {
import { $ISpellDefinition, $ISpellDefinition$$Type } from "packages/com/mna/api/spells/base/$ISpellDefinition"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $SpellCraftedEvent extends $Event {
constructor()
constructor(iSpellDefinition0: $ISpellDefinition$$Type, player1: $Player$$Type)

public "getCrafter"(): $Player
public "getSpellRecipe"(): $ISpellDefinition
get "crafter"(): $Player
get "spellRecipe"(): $ISpellDefinition
}
}

declare module "packages/com/mna/api/events/$EnderfeatherCharmUsedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $EnderfeatherCharmUsedEvent extends $Event {
constructor()
constructor(player0: $Player$$Type)

public "getPlayer"(): $Player
get "player"(): $Player
}
}

declare module "packages/com/mna/api/recipes/$IRunescribeRecipe" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $IMARecipe } from "packages/com/mna/api/recipes/$IMARecipe"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IRunescribeRecipe extends $IMARecipe {
"getGuiRepresentationStack"(): $ItemStack
"getHMutex"(): long
"getRegistryId"(): $ResourceLocation
"getResultItem"(): $ItemStack
"getTier"(): integer
"getVMutex"(): long
get "guiRepresentationStack"(): $ItemStack
get "hMutex"(): long
get "registryId"(): $ResourceLocation
get "resultItem"(): $ItemStack
get "tier"(): integer
get "vMutex"(): long
}

export namespace $IRunescribeRecipe {
const probejs$$marker: never
}
export abstract class $IRunescribeRecipe$$Static implements $IRunescribeRecipe {
}
}

declare module "packages/com/mna/api/particles/$MAParticleType" {
import { $IParticleMoveType, $IParticleMoveType$$Type } from "packages/com/mna/api/particles/$IParticleMoveType"
import { $ParticleInt } from "packages/com/mna/api/particles/parameters/$ParticleInt"
import { $ParticleType, $ParticleType$$Type } from "packages/net/minecraft/core/particles/$ParticleType"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Affinity$$Type } from "packages/com/mna/api/affinity/$Affinity"
import { $ParticleItemStack } from "packages/com/mna/api/particles/parameters/$ParticleItemStack"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ParticleColor } from "packages/com/mna/api/particles/parameters/$ParticleColor"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $ParticleFloat } from "packages/com/mna/api/particles/parameters/$ParticleFloat"
import { $ParticleBoolean } from "packages/com/mna/api/particles/parameters/$ParticleBoolean"

export class $MAParticleType extends $ParticleType<$MAParticleType> implements $ParticleOptions {
static readonly "CODEC": $Codec<$MAParticleType>

constructor(particleType0: $ParticleType$$Type<$MAParticleType$$Type>)
constructor()

public "codec"(): $Codec<$MAParticleType>
public "getColor"(): $ParticleColor
public "getGravity"(): $ParticleFloat
public "getLife"(): $ParticleInt
public "getLifePadding"(): $ParticleInt
public "getMover"(): $IParticleMoveType
public "getPhysics"(): $ParticleBoolean
public "getScale"(): $ParticleFloat
public "getStack"(): $ParticleItemStack
public "getType"(): $ParticleType<$MAParticleType>
public "setAgePadding"(int0: integer): $MAParticleType
public "setColor"(int0: integer): $MAParticleType
public "setColor"(int0: integer, int1: integer, int2: integer): $MAParticleType
public "setColor"(double0: double, double1: double, double2: double): $MAParticleType
public "setColor"(int0: integer, int1: integer, int2: integer, int3: integer): $MAParticleType
public "setColor"(affinity0: $Affinity$$Type): $MAParticleType
public "setColor"(float0: float, float1: float, float2: float, float3: float): $MAParticleType
public "setColor"(float0: float, float1: float, float2: float): $MAParticleType
public "setColor"(double0: double, double1: double, double2: double, double3: double): $MAParticleType
public "setGravity"(float0: float): $MAParticleType
public "setMaxAge"(int0: integer): $MAParticleType
public "setMover"(iParticleMoveType0: $IParticleMoveType$$Type): $MAParticleType
public "setPhysics"(boolean0: boolean): $MAParticleType
public "setScale"(float0: float): $MAParticleType
public "setStack"(itemStack0: $ItemStack$$Type): $MAParticleType
public "writeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "writeToString"(): string
get "disableDepthTest"(): boolean
set "disableDepthTest"(value: boolean)
get "color"(): $ParticleColor
get "gravity"(): $ParticleFloat
get "life"(): $ParticleInt
get "lifePadding"(): $ParticleInt
get "mover"(): $IParticleMoveType
get "physics"(): $ParticleBoolean
get "scale"(): $ParticleFloat
get "stack"(): $ParticleItemStack
get "type"(): $ParticleType<$MAParticleType>
set "agePadding"(value: integer)
set "color"(value: integer)
set "color"(value: $Affinity$$Type)
set "gravity"(value: float)
set "maxAge"(value: integer)
set "mover"(value: $IParticleMoveType$$Type)
set "physics"(value: boolean)
set "scale"(value: float)
set "stack"(value: $ItemStack$$Type)
}
}

declare module "packages/com/mna/api/particles/$IParticleMoveType" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $TextureSheetParticle$$Type } from "packages/net/minecraft/client/particle/$TextureSheetParticle"

export interface $IParticleMoveType {
"configureParticle"(textureSheetParticle0: $TextureSheetParticle$$Type): void
"deserialize"(string0: string): void
"deserialize"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $IParticleMoveType
"getId"(): integer
"serialize"(): string
"serialize"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "id"(): integer
}

export namespace $IParticleMoveType {
const probejs$$marker: never
}
export abstract class $IParticleMoveType$$Static implements $IParticleMoveType {
}
}

declare module "packages/com/mna/api/spells/targeting/$SpellContext" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ISpellDefinition, $ISpellDefinition$$Type } from "packages/com/mna/api/spells/base/$ISpellDefinition"
import { $List$$Type } from "packages/java/util/$List"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ServerLevel } from "packages/net/minecraft/server/level/$ServerLevel"
import { $SpellEffect$$Type } from "packages/com/mna/api/spells/parts/$SpellEffect"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $SpellContext {
constructor(level0: $Level$$Type, iSpellDefinition1: $ISpellDefinition$$Type)
constructor(level0: $Level$$Type, iSpellDefinition1: $ISpellDefinition$$Type, entity2: $Entity$$Type)

public "addAffectedBlock"(spellEffect0: $SpellEffect$$Type, blockPos1: $BlockPos$$Type): void
public "addAffectedEntity"(spellEffect0: $SpellEffect$$Type, entity1: $Entity$$Type): void
public "countAffectedBlocks"(spellEffect0: $SpellEffect$$Type): integer
public "countAffectedEntities"(spellEffect0: $SpellEffect$$Type): integer
public "getLevel"(): $Level
public "getMeta"(): $CompoundTag
public "getServerLevel"(): $ServerLevel
public "getSpawnedTargetEntity"(): $Entity
public "getSpell"(): $ISpellDefinition
public "hasBlockBeenAffected"(spellEffect0: $SpellEffect$$Type, blockPos1: $BlockPos$$Type): boolean
public "hasEntityBeenAffected"(spellEffect0: $SpellEffect$$Type, entity1: $Entity$$Type): boolean
public "isClientSide"(): boolean
public "isReagentMissing"(item0: $Item$$Type): boolean
public "isReagentMissing"(resourceLocation0: $ResourceLocation$$Type): boolean
public "setMissingReagents"(list0: $List$$Type<$Item$$Type>): void
get "level"(): $Level
get "meta"(): $CompoundTag
get "serverLevel"(): $ServerLevel
get "spawnedTargetEntity"(): $Entity
get "spell"(): $ISpellDefinition
get "clientSide"(): boolean
set "missingReagents"(value: $List$$Type<$Item$$Type>)
}
}

declare module "packages/com/mna/api/particles/parameters/$ParticleFloat" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ParticleFloat {
constructor(float0: float)

public static "deserialize"(string0: string): $ParticleFloat
public static "deserialize"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $ParticleFloat
public "serialize"(): string
public static "serialize"(particleFloat0: $ParticleFloat$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "value"(): float
}
}

declare module "packages/com/mna/api/spells/base/$SpellBlacklistResult" {
import { $Enum } from "packages/java/lang/$Enum"

export class $SpellBlacklistResult extends $Enum<$SpellBlacklistResult> {
static readonly "ALLOWED": $SpellBlacklistResult
static readonly "BIOME_BLOCKED": $SpellBlacklistResult
static readonly "DIMENSION_BLOCKED": $SpellBlacklistResult

public "getMessageTranslationKey"(): string
public static "valueOf"(string0: string): $SpellBlacklistResult
public static "values"(): $SpellBlacklistResult[]
get "messageTranslationKey"(): string
}
}

declare module "packages/com/mna/api/rituals/$RitualBlockPos" {
import { $IRitualReagent, $IRitualReagent$$Type } from "packages/com/mna/api/rituals/$IRitualReagent"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $RitualBlockPos {
constructor(int0: integer, int1: integer, blockPos2: $BlockPos$$Type, iRitualReagent3: $IRitualReagent$$Type)

public "getBlockPos"(): $BlockPos
public "getDisplayIndex"(): integer
public "getIndex"(): integer
public "getReagent"(): $IRitualReagent
public "isPresent"(): boolean
get "blockPos"(): $BlockPos
get "displayIndex"(): integer
get "index"(): integer
get "reagent"(): $IRitualReagent
get "present"(): boolean
}
}

declare module "packages/com/mna/api/capabilities/resource/$ICastingResourceGuiProvider" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICastingResourceGuiProvider {
"getBadgeItem"(): $ItemStack
"getBadgeItemOffsetX"(): integer
"getBadgeItemOffsetY"(): integer
"getBadgeSize"(): integer
"getBarColor"(): integer
"getBarManaCostEstimateColor"(): integer
"getFillHeight"(): integer
"getFillStartX"(): integer
"getFillStartY"(): integer
"getFillWidth"(): integer
"getFrameHeight"(): integer
"getFrameU"(): integer
"getFrameV"(): integer
"getFrameWidth"(): integer
"getLevelDisplayX"(): integer
"getLevelDisplayY"(): integer
"getLowChargeOffsetY"(): integer
"getResourceNumericOffsetX"(): integer
"getResourceNumericOffsetY"(): integer
"getResourceNumericTextColor"(): integer
"getTexture"(): $ResourceLocation
"getXPBarColor"(): integer
"getXPBarHeight"(): integer
"getXPBarOffsetX"(): integer
"getXPBarOffsetY"(): integer
get "badgeItem"(): $ItemStack
get "badgeItemOffsetX"(): integer
get "badgeItemOffsetY"(): integer
get "badgeSize"(): integer
get "barColor"(): integer
get "barManaCostEstimateColor"(): integer
get "fillHeight"(): integer
get "fillStartX"(): integer
get "fillStartY"(): integer
get "fillWidth"(): integer
get "frameHeight"(): integer
get "frameU"(): integer
get "frameV"(): integer
get "frameWidth"(): integer
get "levelDisplayX"(): integer
get "levelDisplayY"(): integer
get "lowChargeOffsetY"(): integer
get "resourceNumericOffsetX"(): integer
get "resourceNumericOffsetY"(): integer
get "resourceNumericTextColor"(): integer
get "texture"(): $ResourceLocation
get "xPBarColor"(): integer
get "xPBarHeight"(): integer
get "xPBarOffsetX"(): integer
get "xPBarOffsetY"(): integer
}

export namespace $ICastingResourceGuiProvider {
const probejs$$marker: never
}
export abstract class $ICastingResourceGuiProvider$$Static implements $ICastingResourceGuiProvider {
}
}

declare module "packages/com/mna/api/capabilities/$CodexBreadcrumb" {
import { $CodexBreadcrumb$Type, $CodexBreadcrumb$Type$$Type } from "packages/com/mna/api/capabilities/$CodexBreadcrumb$Type"

export class $CodexBreadcrumb {
readonly "Key": string
readonly "Metadata": string[]
readonly "Page": integer
readonly "Type": $CodexBreadcrumb$Type

constructor(type0: $CodexBreadcrumb$Type$$Type, string1: string, int2: integer, ...string3s: string[])

}
}

declare module "packages/com/mna/api/guidebook/$RegisterGuidebooksEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IGuideBookRegistry, $IGuideBookRegistry$$Type } from "packages/com/mna/api/guidebook/$IGuideBookRegistry"

export class $RegisterGuidebooksEvent extends $Event {
constructor()
constructor(iGuideBookRegistry0: $IGuideBookRegistry$$Type)

public "getRegistry"(): $IGuideBookRegistry
get "registry"(): $IGuideBookRegistry
}
}

declare module "packages/com/mna/api/events/construct/$ConstructSprayEffectEvent" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ConstructSprayEffectEvent extends $Event {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type, fluid2: $Fluid$$Type, boolean3: boolean, boolean4: boolean)

public "getConstruct"(): $LivingEntity
public "getFluid"(): $Fluid
public "getTarget"(): $LivingEntity
public "isTargetFriendly"(): boolean
public "isTargetOwner"(): boolean
get "construct"(): $LivingEntity
get "fluid"(): $Fluid
get "target"(): $LivingEntity
get "targetFriendly"(): boolean
get "targetOwner"(): boolean
}
}

declare module "packages/com/mna/api/entities/construct/$ItemConstructPart" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $TieredItem } from "packages/com/mna/api/items/$TieredItem"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $FoodBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$FoodBuilder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FoodProperties } from "packages/net/minecraft/world/food/$FoodProperties"
import { $ConstructSlot, $ConstructSlot$$Type } from "packages/com/mna/api/entities/construct/$ConstructSlot"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $EnchantmentInstance, $EnchantmentInstance$$Type } from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $ConstructMaterial, $ConstructMaterial$$Type } from "packages/com/mna/api/entities/construct/$ConstructMaterial"
import { $Multimap } from "packages/com/google/common/collect/$Multimap"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $ConstructCapability, $ConstructCapability$$Type } from "packages/com/mna/api/entities/construct/$ConstructCapability"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $MutableToolTier$$Type } from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import { $EnderMan$$Type } from "packages/net/minecraft/world/entity/monster/$EnderMan"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $ICapabilityProvider } from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import { $AttributeModifier } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $Map } from "packages/java/util/$Map"

export class $ItemConstructPart extends $TieredItem {
constructor(constructMaterial0: $ConstructMaterial$$Type, constructSlot1: $ConstructSlot$$Type, int2: integer)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canBeInLoot"(lootContext0: $LootContext$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "forciblyAllowsTableEnchantment"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "getActionSpeed"(constructCapability0: $ConstructCapability$$Type): float
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmor"(): integer
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttackDamage"(): float
public "getAttackSpeedModifier"(): integer
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBackpackCapacityBoost"(): integer
public "getBonusSpeed"(): float
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnabledCapabilities"(): $ConstructCapability[]
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFluidCapacity"(): integer
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getIntelligenceBonus"(): integer
public "getInventorySizeBonus"(): integer
public "getKnockbackBonus"(): float
public "getLightColor"(player: $Player$$Type, stack: $ItemStack$$Type): $Vector3f
public "getLightEmission"(player: $Player$$Type, stack: $ItemStack$$Type): integer
public "getManaCapacity"(): integer
public "getMaterial"(): $ConstructMaterial
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getModelTypeMutex"(): integer
public "getPerceptionDistanceBonus"(): integer
public "getRangedAttackDamage"(): float
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSlot"(): $ConstructSlot
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getTier"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): integer
public "getToughness"(): integer
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isMutex"(int0: integer): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isTreasureAllowed"(itemStack0: $ItemStack$$Type, boolean1: boolean): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEnchantment"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$EnchantmentInstance$$Type>): $ItemStack
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "resolveTier"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): integer
public "selectEnchantments"(list0: $List$$Type<$EnchantmentInstance$$Type>, randomSource1: $RandomSource$$Type, itemStack2: $ItemStack$$Type, int3: integer, float4: float, float5: float, boolean6: boolean): $List<$EnchantmentInstance>
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "armor"(): integer
get "attackDamage"(): float
get "attackSpeedModifier"(): integer
get "backpackCapacityBoost"(): integer
get "bonusSpeed"(): float
get "creativeTab"(): string
get "digSpeed"(): float
get "enabledCapabilities"(): $ConstructCapability[]
get "fluidCapacity"(): integer
get "intelligenceBonus"(): integer
get "inventorySizeBonus"(): integer
get "knockbackBonus"(): float
get "manaCapacity"(): integer
get "material"(): $ConstructMaterial
get "mod"(): string
get "modelTypeMutex"(): integer
get "perceptionDistanceBonus"(): integer
get "rangedAttackDamage"(): float
get "slot"(): $ConstructSlot
get "toughness"(): integer
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "packages/com/mna/api/guidebook/$IGuideBookRegistry" {
import { $RecipeRendererBase$$Type } from "packages/com/mna/api/guidebook/$RecipeRendererBase"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IGuideBookRegistry {
/** Client only, do not use in server scripts */
"addGuidebookPath"(resourceLocation0: $ResourceLocation$$Type): void
/** Client only, do not use in server scripts */
"registerGuidebookCategory"(string0: string, resourceLocation1: $ResourceLocation$$Type): void
/** Client only, do not use in server scripts */
"registerRecipeRenderer"(string0: string, class1: $Class$$Type<$RecipeRendererBase$$Type>): void
}

export namespace $IGuideBookRegistry {
const probejs$$marker: never
}
export abstract class $IGuideBookRegistry$$Static implements $IGuideBookRegistry {
}
}

declare module "packages/com/mna/api/rituals/$RitualEffect" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IRitualContext$$Type } from "packages/com/mna/api/rituals/$IRitualContext"

export class $RitualEffect {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "applyStartCheckInCreative"(): boolean
public "canRitualStart"(iRitualContext0: $IRitualContext$$Type): $Component
public "getDynamicReagents"(itemStack0: $ItemStack$$Type, iRitualContext1: $IRitualContext$$Type): boolean
public "getLoopSound"(iRitualContext0: $IRitualContext$$Type): $SoundEvent
public "getRitualCompleteDelay"(iRitualContext0: $IRitualContext$$Type): integer
public "handlesRitual"(resourceLocation0: $ResourceLocation$$Type): boolean
public "matchRitual"(resourceLocation0: $ResourceLocation$$Type): boolean
public "onRitualCompleted"(iRitualContext0: $IRitualContext$$Type): boolean
/** Client only, do not use in server scripts */
public "spawnRitualParticles"(iRitualContext0: $IRitualContext$$Type): boolean
}
}

declare module "packages/com/mna/api/entities/construct/$IConstructConstruction" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ConstructMaterial, $ConstructMaterial$$Type } from "packages/com/mna/api/entities/construct/$ConstructMaterial"
import { $Affinity, $Affinity$$Type } from "packages/com/mna/api/affinity/$Affinity"
import { $ISpellDefinition } from "packages/com/mna/api/spells/base/$ISpellDefinition"
import { $ConstructSlot$$Type } from "packages/com/mna/api/entities/construct/$ConstructSlot"
import { $List } from "packages/java/util/$List"
import { $ConstructCapability, $ConstructCapability$$Type } from "packages/com/mna/api/entities/construct/$ConstructCapability"
import { $Optional } from "packages/java/util/$Optional"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ItemConstructPart } from "packages/com/mna/api/entities/construct/$ItemConstructPart"

export interface $IConstructConstruction {
"ReadNBT"(compoundTag0: $CompoundTag$$Type): void
"WriteNBT"(compoundTag0: $CompoundTag$$Type): void
"areCapabilitiesEnabled"(...constructCapability0s: $ConstructCapability$$Type[]): boolean
"calculateArmor"(): integer
"calculateAttackRate"(): integer
"calculateBuoyancy"(): float
"calculateDamage"(): float
"calculateExplosionResistance"(): float
"calculateFluidCapacity"(): integer
"calculateIntelligence"(): integer
"calculateInventorySize"(): integer
"calculateInventoryStackLimit"(): integer
"calculateKnockback"(): float
"calculateKnockbackResistance"(): float
"calculateMana"(): float
"calculateMaxHealth"(): integer
"calculatePerception"(): integer
"calculateRangedDamage"(): float
"calculateSpeed"(): float
"calculateToughness"(): integer
"copy"(): $IConstructConstruction
"getAffinityScore"(affinity0: $Affinity$$Type): integer
"getBanner"(): $ItemStack
"getCastableSpell"(constructSlot0: $ConstructSlot$$Type): $ISpellDefinition
"getCastableSpells"(): $ISpellDefinition[]
"getComposition"(): $List<$ConstructMaterial>
"getEnabledCapabilities"(): $ConstructCapability[]
"getHat"(): $ItemStack
"getHighestMatieralForCapability"(constructCapability0: $ConstructCapability$$Type): $ConstructMaterial
"getLowestMaterialCooldownMultiplierForCapability"(constructCapability0: $ConstructCapability$$Type): $ConstructMaterial
"getMaximumTier"(): integer
"getPart"(constructSlot0: $ConstructSlot$$Type): $Optional<$ItemConstructPart>
"getPartsForMaterial"(constructMaterial0: $ConstructMaterial$$Type): $List<$ItemConstructPart>
"getRandomContainedAffinity"(): $Affinity
"getSlotMaterial"(constructSlot0: $ConstructSlot$$Type): $ConstructMaterial
"isAnyCapabilityEnabled"(...constructCapability0s: $ConstructCapability$$Type[]): boolean
"isCapabilityEnabled"(constructCapability0: $ConstructCapability$$Type): boolean
"isComplete"(): boolean
"isEmpty"(): boolean
"removePart"(constructSlot0: $ConstructSlot$$Type): $ItemStack
"resetParts"(): void
"setAffinityScore"(affinity0: $Affinity$$Type, int1: integer): void
"setBanner"(itemStack0: $ItemStack$$Type): void
"setHat"(itemStack0: $ItemStack$$Type): void
"setPart"(itemStack0: $ItemStack$$Type): $ItemStack
"setPart"(itemStack0: $ItemStack$$Type, boolean1: boolean): $ItemStack
get "banner"(): $ItemStack
get "castableSpells"(): $ISpellDefinition[]
get "composition"(): $List<$ConstructMaterial>
get "enabledCapabilities"(): $ConstructCapability[]
get "hat"(): $ItemStack
get "maximumTier"(): integer
get "randomContainedAffinity"(): $Affinity
get "complete"(): boolean
get "empty"(): boolean
set "banner"(value: $ItemStack$$Type)
set "hat"(value: $ItemStack$$Type)
set "part"(value: $ItemStack$$Type)
}

export namespace $IConstructConstruction {
const probejs$$marker: never
}
export abstract class $IConstructConstruction$$Static implements $IConstructConstruction {
}
}

declare module "packages/com/mna/api/entities/construct/$Animations" {
import { $Enum } from "packages/java/lang/$Enum"
import { $RawAnimation } from "packages/software/bernie/geckolib/core/animation/$RawAnimation"

export class $Animations extends $Enum<$Animations> {
static readonly "ADVENTURE_LEAVE": $Animations
static readonly "ADVENTURE_RETURN": $Animations
static readonly "CHANNEL_LEFT": $Animations
static readonly "CHANNEL_RIGHT": $Animations
static readonly "DEFEATED": $Animations
static readonly "DEFEATED_EXIT": $Animations
static readonly "DRILL_ENTER": $Animations
static readonly "DRILL_EXIT": $Animations
static readonly "EAT_LEFT": $Animations
static readonly "EAT_RIGHT": $Animations
static readonly "FISHING_LEFT": $Animations
static readonly "FISHING_RIGHT": $Animations
static readonly "FLY_IDLE": $Animations
static readonly "FLY_MOVING": $Animations
static readonly "IDLE": $Animations
static readonly "LEAPING": $Animations
static readonly "LEAP_LAND": $Animations
static readonly "READING": $Animations
static readonly "RUMMAGE": $Animations
static readonly "RUMMAGE_THROW_LEFT": $Animations
static readonly "RUMMAGE_THROW_RIGHT": $Animations
static readonly "RUN": $Animations
static readonly "RUN_HAPPY": $Animations
static readonly "SHOOT_DUAL": $Animations
static readonly "SHOOT_LEFT": $Animations
static readonly "SHOOT_RIGHT": $Animations
static readonly "SPRAY_DUAL": $Animations
static readonly "SPRAY_LEFT": $Animations
static readonly "SPRAY_RIGHT": $Animations
static readonly "SPRINKLER": $Animations
static readonly "SPRINT": $Animations
static readonly "SWIM_IDLE": $Animations
static readonly "SWIM_MOVING": $Animations
static readonly "SWING_DUAL": $Animations
static readonly "SWING_LEFT": $Animations
static readonly "SWING_RIGHT": $Animations
static readonly "WALK": $Animations

public "play"(): $RawAnimation
public static "valueOf"(string0: string): $Animations
public static "values"(): $Animations[]
}
}

declare module "packages/com/mna/api/entities/construct/$ConstructCapability" {
import { $Enum } from "packages/java/lang/$Enum"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"

export class $ConstructCapability extends $Enum<$ConstructCapability> {
static readonly "ADVENTURE": $ConstructCapability
static readonly "BLOCK": $ConstructCapability
static readonly "CARRY": $ConstructCapability
static readonly "CARRY_PLAYER": $ConstructCapability
static readonly "CAST_SPELL": $ConstructCapability
static readonly "CHOP_WOOD": $ConstructCapability
static readonly "CRAFT": $ConstructCapability
static readonly "FISH": $ConstructCapability
static readonly "FLUID_DISPENSE": $ConstructCapability
static readonly "FLUID_STORE": $ConstructCapability
static readonly "FLY": $ConstructCapability
static readonly "HARVEST": $ConstructCapability
static readonly "ITEM_STORAGE": $ConstructCapability
static readonly "MELEE_ATTACK": $ConstructCapability
static readonly "MINE": $ConstructCapability
static readonly "PLANT": $ConstructCapability
static readonly "RANGED_ATTACK": $ConstructCapability
static readonly "SHEAR": $ConstructCapability
static readonly "SMITH": $ConstructCapability
static readonly "STORE_MANA": $ConstructCapability
static readonly "TAUNT": $ConstructCapability
static readonly "TELEPORT": $ConstructCapability

public "getIconCoords"(): $Pair<integer, integer>
public static "valueOf"(string0: string): $ConstructCapability
public static "values"(): $ConstructCapability[]
get "iconCoords"(): $Pair<integer, integer>
}
}

declare module "packages/com/mna/api/events/$AuraEvent$Numerics" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $AuraEvent } from "packages/com/mna/api/events/$AuraEvent"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AuraEvent$Numerics extends $AuraEvent {
constructor()
constructor(enchantment0: $Enchantment$$Type, player1: $Player$$Type, livingEntity2: $LivingEntity$$Type, double3: double, int4: integer, float5: float, boolean6: boolean)

public "getAffecting"(): $LivingEntity
public "getMagnitude"(): integer
public "getManaCost"(): float
public "getRadius"(): double
public "getSource"(): $Player
public "hasSelfishBelt"(): boolean
public "setMagnitude"(int0: integer): void
public "setManaCost"(float0: float): void
get "affecting"(): $LivingEntity
get "magnitude"(): integer
get "manaCost"(): float
get "radius"(): double
get "source"(): $Player
set "magnitude"(value: integer)
set "manaCost"(value: float)
}
}

declare module "packages/com/mna/api/spells/base/$ISpellComponent" {
import { $Attribute$$Type } from "packages/com/mna/api/spells/attributes/$Attribute"
import { $SpellTarget$$Type } from "packages/com/mna/api/spells/targeting/$SpellTarget"
import { $SpellCraftingContext$$Type } from "packages/com/mna/api/spells/$SpellCraftingContext"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $IFaction } from "packages/com/mna/api/faction/$IFaction"
import { $AttributeValuePair$$Type } from "packages/com/mna/api/spells/attributes/$AttributeValuePair"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SpellBlacklistResult } from "packages/com/mna/api/spells/base/$SpellBlacklistResult"
import { $SpellSource$$Type } from "packages/com/mna/api/spells/targeting/$SpellSource"
import { $SpellPartTags } from "packages/com/mna/api/spells/$SpellPartTags"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $ISpellComponent {
"canBeCastAt"(level0: $Level$$Type, vec31: $Vec3$$Type): $SpellBlacklistResult
"canBeOnRandomStaff"(): boolean
"getAddingModName"(): string
"getDescriptionTooltip"(attribute0: $Attribute$$Type): string
"getFactionRequirement"(): $IFaction
"getGuiIcon"(): $ResourceLocation
"getRegistryName"(): $ResourceLocation
"getTier"(level0: $Level$$Type): integer
"getUseTag"(): $SpellPartTags
"initializeConfigs"(...attributeValuePair0s: $AttributeValuePair$$Type[]): void
"ire"(): float
"isBaseMna"(): boolean
"isCraftable"(spellCraftingContext0: $SpellCraftingContext$$Type): boolean
"isSilverSpell"(): boolean
"isTargetFriendlyToCaster"(spellSource0: $SpellSource$$Type, entity1: $Entity$$Type): boolean
"isUseableByPlayers"(): boolean
"magnitudeHealthCheck"(spellSource0: $SpellSource$$Type, spellTarget1: $SpellTarget$$Type, int2: integer, int3: integer): boolean
"onRegistered"(): void
"replacesHeldItem"(): boolean
"requiredXPForRote"(): integer
get "addingModName"(): string
get "factionRequirement"(): $IFaction
get "guiIcon"(): $ResourceLocation
get "registryName"(): $ResourceLocation
get "useTag"(): $SpellPartTags
get "baseMna"(): boolean
get "silverSpell"(): boolean
get "useableByPlayers"(): boolean
}

export namespace $ISpellComponent {
const probejs$$marker: never
}
export abstract class $ISpellComponent$$Static implements $ISpellComponent {
}
}

declare module "packages/com/mna/api/events/$PlayerMagicLevelUpEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $PlayerMagicLevelUpEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, int1: integer)

public "getMagicLevel"(): integer
public "getPlayer"(): $Player
get "magicLevel"(): integer
get "player"(): $Player
}
}

declare module "packages/com/mna/api/events/$GenericProgressionEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $GenericProgressionEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, resourceLocation1: $ResourceLocation$$Type)

public "getEventType"(): $ResourceLocation
public "getPlayer"(): $Player
get "eventType"(): $ResourceLocation
get "player"(): $Player
}
}

declare module "packages/com/mna/api/events/$WanderingWizardSelectingTradesEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type } from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import { $Merchant, $Merchant$$Type } from "packages/net/minecraft/world/item/trading/$Merchant"
import { $MerchantOffers, $MerchantOffers$$Type } from "packages/net/minecraft/world/item/trading/$MerchantOffers"

export class $WanderingWizardSelectingTradesEvent extends $Event {
constructor()
constructor(merchant0: $Merchant$$Type, merchantOffers1: $MerchantOffers$$Type, itemListing2s: $VillagerTrades$ItemListing$$Type[], int3: integer)

public "getMaxNumbers"(): integer
public "getNewTrades"(): $VillagerTrades$ItemListing[]
public "getOffers"(): $MerchantOffers
public "getWanderingWizard"(): $Merchant
get "maxNumbers"(): integer
get "newTrades"(): $VillagerTrades$ItemListing[]
get "offers"(): $MerchantOffers
get "wanderingWizard"(): $Merchant
}
}

declare module "packages/com/mna/api/guidebook/$RecipeRendererBase" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $IFaction$$Type } from "packages/com/mna/api/faction/$IFaction"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $RecipeRendererBase extends $AbstractWidget {
constructor(int0: integer, int1: integer)
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "charTyped"(char0: character, int1: integer): boolean
public "clone"(int0: integer, int1: integer, boolean2: boolean): $RecipeRendererBase
public "disablePaperBackground"(): void
public "getCurrentFocusPath"(): $ComponentPath
public "getRecipeIds"(): $ResourceLocation[]
public "getRegistryName"(): $ResourceLocation
public "getTier"(): integer
public "getTooltipFunction"(): $Consumer<$List<$Component>>
public "init"(resourceLocation0s: $ResourceLocation$$Type[]): void
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "m_87963_"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "renderFactionIcon"(guiGraphics0: $GuiGraphics$$Type, iFaction1: $IFaction$$Type, int2: integer, int3: integer): void
public "setPosition"(int0: integer, int1: integer): void
public "setScale"(float0: float): void
public "setTooltipFunction"(consumer0: $Consumer$$Type<$List$$Type<$Component$$Type>>): void
get "lockIndex"(): integer
set "lockIndex"(value: integer)
get "currentFocusPath"(): $ComponentPath
get "recipeIds"(): $ResourceLocation[]
get "registryName"(): $ResourceLocation
get "tier"(): integer
get "tooltipFunction"(): $Consumer<$List<$Component>>
set "scale"(value: float)
set "tooltipFunction"(value: $Consumer$$Type<$List$$Type<$Component$$Type>>)
}
}

declare module "packages/com/mna/api/events/$CastingResourceGuiRegistrationEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ICastingResourceGuiRegistry, $ICastingResourceGuiRegistry$$Type } from "packages/com/mna/api/capabilities/resource/$ICastingResourceGuiRegistry"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"

/** @deprecated */
export class $CastingResourceGuiRegistrationEvent extends $Event implements $IModBusEvent {
constructor()
constructor(iCastingResourceGuiRegistry0: $ICastingResourceGuiRegistry$$Type)

public "getRegistry"(): $ICastingResourceGuiRegistry
get "registry"(): $ICastingResourceGuiRegistry
}
}

declare module "packages/com/mna/api/events/$ManaweaveCraftingEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $IManaweavingRecipe, $IManaweavingRecipe$$Type } from "packages/com/mna/api/recipes/$IManaweavingRecipe"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ManaweaveCraftingEvent extends $Event {
constructor()
constructor(iManaweavingRecipe0: $IManaweavingRecipe$$Type, itemStack1: $ItemStack$$Type, player2: $Player$$Type)

public "getCrafter"(): $Player
public "getOutput"(): $ItemStack
public "getRecipe"(): $IManaweavingRecipe
get "crafter"(): $Player
get "output"(): $ItemStack
get "recipe"(): $IManaweavingRecipe
}
}

declare module "packages/com/mna/api/recipes/$IRuneforgeRecipe" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $IMARecipe } from "packages/com/mna/api/recipes/$IMARecipe"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IRuneforgeRecipe extends $IMARecipe {
"getGuiRepresentationStack"(): $ItemStack
"getRegistryId"(): $ResourceLocation
"getResultItem"(): $ItemStack
"getTier"(): integer
get "guiRepresentationStack"(): $ItemStack
get "registryId"(): $ResourceLocation
get "resultItem"(): $ItemStack
get "tier"(): integer
}

export namespace $IRuneforgeRecipe {
const probejs$$marker: never
}
export abstract class $IRuneforgeRecipe$$Static implements $IRuneforgeRecipe {
}
}

declare module "packages/com/mna/api/events/$AuraEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"

export class $AuraEvent extends $Event {
constructor()
constructor(enchantment0: $Enchantment$$Type)

public "getAura"(): $Enchantment
get "aura"(): $Enchantment
}
}

declare module "packages/com/mna/api/entities/construct/ai/parameter/$ConstructParameterTypes" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ConstructParameterTypes extends $Enum<$ConstructParameterTypes> {
static readonly "AREA": $ConstructParameterTypes
static readonly "BOOLEAN": $ConstructParameterTypes
static readonly "FILTER": $ConstructParameterTypes
static readonly "INTEGER": $ConstructParameterTypes
static readonly "ITEMSTACK": $ConstructParameterTypes
static readonly "POINT": $ConstructParameterTypes

public static "valueOf"(string0: string): $ConstructParameterTypes
public static "values"(): $ConstructParameterTypes[]
}
}

declare module "packages/com/mna/api/events/$RoteProgressGainedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ISpellComponent, $ISpellComponent$$Type } from "packages/com/mna/api/spells/base/$ISpellComponent"

export class $RoteProgressGainedEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, iSpellComponent1: $ISpellComponent$$Type, float2: float)

public "getAmount"(): float
public "getPart"(): $ISpellComponent
public "getPlayer"(): $Player
public "setAmount"(float0: float): void
get "amount"(): float
get "part"(): $ISpellComponent
get "player"(): $Player
set "amount"(value: float)
}
}

declare module "packages/com/mna/api/items/$DynamicItemFilter" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $NonNullList, $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $DynamicItemFilter {
constructor()

public "clear"(): void
public "copyFrom"(dynamicItemFilter0: $DynamicItemFilter$$Type): void
public "getBlackList"(): $NonNullList<$ItemStack>
public "getBlacklistMatchDurability"(): boolean
public "getBlacklistMatchTag"(): boolean
public "getTag"(): $CompoundTag
public "getWhiteList"(): $NonNullList<$ItemStack>
public "getWhitelistMatchDurability"(): boolean
public "getWhitelistMatchTag"(): boolean
public "hashStack"(itemStack0: $ItemStack$$Type): integer
public "isBlacklistEmpty"(): boolean
public "isEmpty"(): boolean
public "isWhitelistEmpty"(): boolean
public "loadFromTag"(compoundTag0: $CompoundTag$$Type): void
public "matches"(itemStack0: $ItemStack$$Type): boolean
public "setBlacklist"(nonNullList0: $NonNullList$$Type<$ItemStack$$Type>, boolean1: boolean, boolean2: boolean): void
public "setWhitelist"(nonNullList0: $NonNullList$$Type<$ItemStack$$Type>, boolean1: boolean, boolean2: boolean): void
get "blackList"(): $NonNullList<$ItemStack>
get "blacklistMatchDurability"(): boolean
get "blacklistMatchTag"(): boolean
get "tag"(): $CompoundTag
get "whiteList"(): $NonNullList<$ItemStack>
get "whitelistMatchDurability"(): boolean
get "whitelistMatchTag"(): boolean
get "blacklistEmpty"(): boolean
get "empty"(): boolean
get "whitelistEmpty"(): boolean
}
}

declare module "packages/com/mna/api/spells/base/$ISpellDefinition" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $IModifiedSpellPart, $IModifiedSpellPart$$Type } from "packages/com/mna/api/spells/base/$IModifiedSpellPart"
import { $MAParticleType, $MAParticleType$$Type } from "packages/com/mna/api/particles/$MAParticleType"
import { $HashMap } from "packages/java/util/$HashMap"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $SpellCastingResult$$Type } from "packages/com/mna/api/spells/$SpellCastingResult"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IFaction$$Type } from "packages/com/mna/api/faction/$IFaction"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $IPlayerProgression$$Type } from "packages/com/mna/api/capabilities/$IPlayerProgression"
import { $Affinity, $Affinity$$Type } from "packages/com/mna/api/affinity/$Affinity"
import { $Shape } from "packages/com/mna/api/spells/parts/$Shape"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $SpellReagent } from "packages/com/mna/api/spells/$SpellReagent"
import { $Modifier } from "packages/com/mna/api/spells/parts/$Modifier"
import { $SpellEffect, $SpellEffect$$Type } from "packages/com/mna/api/spells/parts/$SpellEffect"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $ISpellDefinition {
"addItemTooltip"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, list2: $List$$Type<$Component$$Type>, player3: $Player$$Type): void
"canFactionCraft"(iPlayerProgression0: $IPlayerProgression$$Type): boolean
"clearComponents"(): void
"colorParticle"(mAParticleType0: $MAParticleType$$Type, entity1: $Entity$$Type): $MAParticleType
"consumeCharges"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): void
"containsPart"(resourceLocation0: $ResourceLocation$$Type): boolean
"countComponents"(): integer
"countModifiers"(): integer
"findComponent"(spellEffect0: $SpellEffect$$Type): integer
"getAffinity"(): $HashMap<$Affinity, float>
"getComplexity"(): float
"getComponent"(int0: integer): $IModifiedSpellPart<$SpellEffect>
"getComponents"(): $List<$IModifiedSpellPart<$SpellEffect>>
"getCooldown"(livingEntity0: $LivingEntity$$Type): integer
"getHighestAffinity"(): $Affinity
"getManaCost"(): float
"getModifier"(int0: integer): $Modifier
"getModifiers"(): $List<$Modifier>
"getParticleColorOverride"(): integer
"getReagents"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, spellCastingResult2: $SpellCastingResult$$Type): $List<$SpellReagent>
"getShape"(): $IModifiedSpellPart<$Shape>
"getTier"(level0: $Level$$Type): integer
"isChanneled"(): boolean
"isChargedSpell"(itemStack0: $ItemStack$$Type): boolean
"isFactionSpell"(iFaction0: $IFaction$$Type): boolean
"isHarmful"(): boolean
"isMysterious"(): boolean
"isSame"(iSpellDefinition0: $ISpellDefinition$$Type, boolean1: boolean, boolean2: boolean, boolean3: boolean): boolean
"isValid"(): boolean
"iterateComponents"(consumer0: $Consumer$$Type<$IModifiedSpellPart$$Type<$SpellEffect$$Type>>): void
"setManaCost"(float0: float): void
"setOverrideAffinity"(affinity0: $Affinity$$Type): void
"setParticleColorOverride"(int0: integer): void
"writeToNBT"(compoundTag0: $CompoundTag$$Type): void
get "affinity"(): $HashMap<$Affinity, float>
get "complexity"(): float
get "components"(): $List<$IModifiedSpellPart<$SpellEffect>>
get "highestAffinity"(): $Affinity
get "manaCost"(): float
get "modifiers"(): $List<$Modifier>
get "particleColorOverride"(): integer
get "shape"(): $IModifiedSpellPart<$Shape>
get "channeled"(): boolean
get "harmful"(): boolean
get "mysterious"(): boolean
get "valid"(): boolean
set "manaCost"(value: float)
set "overrideAffinity"(value: $Affinity$$Type)
set "particleColorOverride"(value: integer)
}

export namespace $ISpellDefinition {
const EMPTY: $ISpellDefinition
}
export abstract class $ISpellDefinition$$Static implements $ISpellDefinition {
static readonly "EMPTY": $ISpellDefinition

}
}

declare module "packages/com/mna/api/events/$CoalfeatherCharmUsedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $CoalfeatherCharmUsedEvent extends $Event {
constructor()
constructor(player0: $Player$$Type)

public "getPlayer"(): $Player
get "player"(): $Player
}
}

declare module "packages/com/mna/api/events/$RuneforgeCraftingEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $IRuneforgeRecipe, $IRuneforgeRecipe$$Type } from "packages/com/mna/api/recipes/$IRuneforgeRecipe"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $RuneforgeCraftingEvent extends $Event {
constructor()
constructor(iRuneforgeRecipe0: $IRuneforgeRecipe$$Type, itemStack1: $ItemStack$$Type, player2: $Player$$Type)

public "getCrafter"(): $Player
public "getOutput"(): $ItemStack
public "getRecipe"(): $IRuneforgeRecipe
get "crafter"(): $Player
get "output"(): $ItemStack
get "recipe"(): $IRuneforgeRecipe
}
}

declare module "packages/com/mna/api/entities/construct/ai/$ConstructAITask" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $UUID } from "packages/java/util/$UUID"
import { $ListTag, $ListTag$$Type } from "packages/net/minecraft/nbt/$ListTag"
import { $ConstructCapability, $ConstructCapability$$Type } from "packages/com/mna/api/entities/construct/$ConstructCapability"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $AbstractGolem } from "packages/net/minecraft/world/entity/animal/$AbstractGolem"
import { $Goal } from "packages/net/minecraft/world/entity/ai/goal/$Goal"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $IMutexManager, $IMutexManager$$Type } from "packages/com/mna/api/entities/construct/ai/$IMutexManager"
import { $ConstructTask } from "packages/com/mna/api/entities/construct/ai/$ConstructTask"
import { $List } from "packages/java/util/$List"
import { $ConstructAITaskParameter } from "packages/com/mna/api/entities/construct/ai/parameter/$ConstructAITaskParameter"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IConstruct, $IConstruct$$Type } from "packages/com/mna/api/entities/construct/$IConstruct"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ConstructAITask<T extends $ConstructAITask<any>> extends $Goal {
static readonly "MELEE_ATTACK_DIST": integer
static readonly "MELEE_ATTACK_TIME": integer
static readonly "SWING_BUFFER_TIME": integer

constructor(iConstruct0: $IConstruct$$Type<any>, resourceLocation1: $ResourceLocation$$Type)

public "allowSteeringMountedConstructsDuringTask"(): boolean
public "areCapabilitiesMet"(): boolean
public "clearMoveTarget"(): void
public "confuseConstructCapsMissing"(): void
public "confuseConstructLowIntelligence"(): void
public "copyConnections"(constructAITask0: $ConstructAITask$$Type<any>): void
public "copyFrom"(constructAITask0: $ConstructAITask$$Type<any>): T
public "doMove"(): boolean
public "doMove"(float0: float): boolean
public "duplicate"(): T
public "forceFail"(): void
public "getConnectedIDs"(): $List<string>
public "getConnectionForResultCode"(int0: integer): string
public "getConstruct"(): $IConstruct<any>
public "getConstructAsEntity"(): $AbstractGolem
public "getHeldItems"(): $List<$ItemStack>
public "getId"(): string
public "getInteractTime"(constructCapability0: $ConstructCapability$$Type): integer
public "getInteractTime"(constructCapability0: $ConstructCapability$$Type, int1: integer): integer
public "getMoveBlockTarget"(): $BlockPos
public "getMoveEntityTarget"(): $Entity
public "getMutexManager"(): $IMutexManager
public "getNextTask"(): string
public "getOneOffFollowTarget"(): $UUID
public "getParameters"(): $List<$ConstructAITaskParameter>
public "getRequiredIntelligence"(): integer
public "getType"(): $ResourceLocation
public static "getTypeFromNBT"(compoundTag0: $CompoundTag$$Type): $ConstructTask
public "hasMoveTarget"(): boolean
public "hasStarted"(): boolean
public "inflateParameters"(): void
public "insertOrDiscardItem"(itemStack0: $ItemStack$$Type): void
public "insertOrDropItem"(itemStack0: $ItemStack$$Type): void
public "isFinished"(): boolean
public "isFullyConfigured"(): boolean
public "isOneOff"(): boolean
public "isStart"(): boolean
public "isSuccess"(): boolean
public "loadConnections"(listTag0: $ListTag$$Type): void
public "loadParameterData"(listTag0: $ListTag$$Type): void
public "onTaskSet"(): void
public "pushDiagnosticMessage"(component0: $Component$$Type): void
public "pushDiagnosticMessage"(string0: string): void
public "readNBT"(compoundTag0: $CompoundTag$$Type): void
public "releaseMutexes"(): void
public "requiredCapabilities"(): $ConstructCapability[]
public "saveParameterData"(): $ListTag
public "setConstruct"(iConstruct0: $IConstruct$$Type<any>): void
public "setIdAndIsStart"(string0: string, boolean1: boolean): void
public "setMoveTarget"(blockPos0: $BlockPos$$Type): void
public "setMoveTarget"(entity0: $Entity$$Type): void
public "setMutexManager"(iMutexManager0: $IMutexManager$$Type): void
public "setOneOff"(player0: $Player$$Type): void
public "setSuccessCode"(): void
public "writeNBT"(): $CompoundTag
get "connectedIDs"(): $List<string>
get "construct"(): $IConstruct<any>
get "constructAsEntity"(): $AbstractGolem
get "heldItems"(): $List<$ItemStack>
get "id"(): string
get "moveBlockTarget"(): $BlockPos
get "moveEntityTarget"(): $Entity
get "mutexManager"(): $IMutexManager
get "nextTask"(): string
get "oneOffFollowTarget"(): $UUID
get "parameters"(): $List<$ConstructAITaskParameter>
get "requiredIntelligence"(): integer
get "type"(): $ResourceLocation
get "finished"(): boolean
get "fullyConfigured"(): boolean
get "oneOff"(): boolean
get "start"(): boolean
get "success"(): boolean
set "construct"(value: $IConstruct$$Type<any>)
set "moveTarget"(value: $BlockPos$$Type)
set "moveTarget"(value: $Entity$$Type)
set "mutexManager"(value: $IMutexManager$$Type)
set "oneOff"(value: $Player$$Type)
}
}

declare module "packages/com/mna/api/spells/attributes/$AttributeValuePair" {
import { $Attribute, $Attribute$$Type } from "packages/com/mna/api/spells/attributes/$Attribute"
import { $ImmutableList, $ImmutableList$$Type } from "packages/com/google/common/collect/$ImmutableList"
import { $ISpellComponent$$Type } from "packages/com/mna/api/spells/base/$ISpellComponent"

export class $AttributeValuePair {
constructor(attribute0: $Attribute$$Type, float1: float, float2: float, float3: float, float4: float)
constructor(attribute0: $Attribute$$Type, float1: float, float2: float, float3: float, float4: float, float5: float)

public "deepCopy"(): $AttributeValuePair
public static "deepCopy"(immutableList0: $ImmutableList$$Type<$AttributeValuePair$$Type>): $ImmutableList<$AttributeValuePair>
public "getAttribute"(): $Attribute
public "getDefaultValue"(): float
public "getMaximum"(): float
public "getMinimum"(): float
public "getMultiplier"(): float
public "getStep"(): float
public "getStepComplexity"(): float
public "getValue"(): float
public "getValueWithoutMultipliers"(): float
public "lookupConfig"(iSpellComponent0: $ISpellComponent$$Type): void
public "setMultiplier"(float0: float): void
public "setValue"(float0: float): void
public "stepDown"(float0: float): float
public "stepDown"(): float
public "stepUp"(): float
public "stepUp"(float0: float): float
public "stepUpIgnoreMax"(): float
get "attribute"(): $Attribute
get "defaultValue"(): float
get "maximum"(): float
get "minimum"(): float
get "multiplier"(): float
get "step"(): float
get "stepComplexity"(): float
get "value"(): float
get "valueWithoutMultipliers"(): float
set "multiplier"(value: float)
set "value"(value: float)
}
}

declare module "packages/com/mna/api/faction/$FactionDifficultyStats" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $IFactionEnemy$$Type } from "packages/com/mna/api/entities/$IFactionEnemy"

export class $FactionDifficultyStats {
constructor()

public "adjustFactionEnemy"(iFactionEnemy0: $IFactionEnemy$$Type<any>): void
public "onFactionKilledPlayer"(): void
public "onFactionMobDespawnDueToDistance"(): void
public "onFactionMobKilled"(damageSource0: $DamageSource$$Type): void
public "readFromNBT"(compoundTag0: $CompoundTag$$Type): void
public "writeToNBT"(): $CompoundTag
}
}

declare module "packages/com/mna/api/events/$RunicAnvilItemUsedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $RunicAnvilItemUsedEvent extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, player3: $Player$$Type)

public "getPlayer"(): $Player
get "catalyst"(): $ItemStack
set "catalyst"(value: $ItemStack$$Type)
get "material"(): $ItemStack
set "material"(value: $ItemStack$$Type)
get "pattern"(): $ItemStack
set "pattern"(value: $ItemStack$$Type)
get "player"(): $Player
}
}

declare module "packages/com/mna/api/events/$AuraEvent$Radius" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $AuraEvent } from "packages/com/mna/api/events/$AuraEvent"

export class $AuraEvent$Radius extends $AuraEvent {
constructor()
constructor(enchantment0: $Enchantment$$Type, player1: $Player$$Type, double2: double)

public "getRadius"(): double
public "getSource"(): $Player
public "setRadius"(double0: double): void
get "radius"(): double
get "source"(): $Player
set "radius"(value: double)
}
}

declare module "packages/com/mna/api/particles/parameters/$ParticleColor" {
import { $Random$$Type } from "packages/java/util/$Random"

export class $ParticleColor {
constructor(float0: float, float1: float, float2: float)
constructor(float0: float, float1: float, float2: float, float3: float)
constructor(int0: integer, int1: integer, int2: integer, int3: integer)
constructor(int0: integer, int1: integer, int2: integer)

public static "deserialize"(string0: string): $ParticleColor
public static "fromInt"(int0: integer): $ParticleColor
public "getAlpha"(): float
public "getBlue"(): float
public "getColor"(): integer
public "getGreen"(): float
public "getRed"(): float
public static "makeRandomColor"(int0: integer, int1: integer, int2: integer, random3: $Random$$Type): $ParticleColor
public "serialize"(): string
get "alpha"(): float
get "blue"(): float
get "color"(): integer
get "green"(): float
get "red"(): float
}
}

declare module "packages/com/mna/api/events/$BoundItemDismissedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $BoundItemDismissedEvent extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type)

public "getBoundStack"(): $ItemStack
public "getRestoredStack"(): $ItemStack
get "boundStack"(): $ItemStack
get "restoredStack"(): $ItemStack
}
}

declare module "packages/com/mna/api/spells/base/$IModifiedSpellPart" {
import { $Attribute, $Attribute$$Type } from "packages/com/mna/api/spells/attributes/$Attribute"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $ISpellComponent } from "packages/com/mna/api/spells/base/$ISpellComponent"
import { $IModifiable } from "packages/com/mna/api/spells/base/$IModifiable"

export interface $IModifiedSpellPart<T extends ($ISpellComponent & $IModifiable<T>)> {
"getContainedAttributes"(): $ImmutableList<$Attribute>
"getDefaultValue"(attribute0: $Attribute$$Type): float
"getMaximumValue"(attribute0: $Attribute$$Type): float
"getMinimumValue"(attribute0: $Attribute$$Type): float
"getMultiplier"(attribute0: $Attribute$$Type): float
"getPart"(): T
"getStep"(attribute0: $Attribute$$Type): float
"getStepComplexity"(attribute0: $Attribute$$Type): float
"getValue"(attribute0: $Attribute$$Type): float
"getValueWithoutMultipliers"(attribute0: $Attribute$$Type): float
"isSame"(iModifiedSpellPart0: $IModifiedSpellPart$$Type<T>): boolean
"resetMultiplier"(attribute0: $Attribute$$Type): boolean
"resetValueToDefault"(attribute0: $Attribute$$Type): void
"setMultiplier"(attribute0: $Attribute$$Type, float1: float): boolean
"setValue"(attribute0: $Attribute$$Type, float1: float): boolean
"stepDown"(attribute0: $Attribute$$Type, float1: float): float
"stepUp"(attribute0: $Attribute$$Type, float1: float): float
"stepUpIgnoreMax"(attribute0: $Attribute$$Type): float
get "containedAttributes"(): $ImmutableList<$Attribute>
get "part"(): T
}

export namespace $IModifiedSpellPart {
const probejs$$marker: never
}
export abstract class $IModifiedSpellPart$$Static<T extends ($ISpellComponent & $IModifiable<T>)> implements $IModifiedSpellPart<T> {
}
}

declare module "packages/com/mna/api/events/$EldrinCraftingEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $IMARecipe, $IMARecipe$$Type } from "packages/com/mna/api/recipes/$IMARecipe"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $EldrinCraftingEvent extends $Event {
constructor()
constructor(iMARecipe0: $IMARecipe$$Type, itemStack1: $ItemStack$$Type, player2: $Player$$Type)

public "getCrafter"(): $Player
public "getOutput"(): $ItemStack
public "getRecipe"(): $IMARecipe
get "crafter"(): $Player
get "output"(): $ItemStack
get "recipe"(): $IMARecipe
}
}

declare module "packages/com/mna/api/capabilities/$IPlayerProgression" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $CodexBreadcrumb } from "packages/com/mna/api/capabilities/$CodexBreadcrumb"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $IFaction, $IFaction$$Type } from "packages/com/mna/api/faction/$IFaction"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CodexBreadcrumb$Type$$Type } from "packages/com/mna/api/capabilities/$CodexBreadcrumb$Type"
import { $FactionDifficultyStats } from "packages/com/mna/api/faction/$FactionDifficultyStats"

export interface $IPlayerProgression {
"addTierProgressionComplete"(resourceLocation0: $ResourceLocation$$Type): void
"breadcrumbLength"(): integer
"canBeRaided"(iFaction0: $IFaction$$Type, player1: $Player$$Type): boolean
"canBeRaided"(player0: $Player$$Type): boolean
"clearCodexEntryHistory"(): void
"clearForceRaid"(): void
"clearSyncFlag"(): void
"copyFrom"(iPlayerProgression0: $IPlayerProgression$$Type, player1: $Player$$Type): void
"getAlliedFaction"(): $IFaction
"getAllyCooldown"(): integer
"getCompletedProgressionSteps"(): $List<$ResourceLocation>
"getFactionDifficultyStats"(iFaction0: $IFaction$$Type): $FactionDifficultyStats
"getFactionStanding"(): integer
"getForceRaid"(): $IFaction
"getRaidChance"(iFaction0: $IFaction$$Type): double
"getRelativeRaidStrength"(iFaction0: $IFaction$$Type, player1: $Player$$Type): integer
"getTier"(): integer
"getTierMaxComplexity"(): integer
"getTierProgress"(level0: $Level$$Type): float
"hasAlliedFaction"(): boolean
"hasForceRaid"(): boolean
"increaseFactionStanding"(int0: integer): void
"incrementFactionAggro"(iFaction0: $IFaction$$Type, float1: float, float2: float): void
"isCodexEntryRead"(long0: long): boolean
"isCodexEntryUnlocked"(long0: long): boolean
"loadCodexUnlocks"(compoundTag0: $CompoundTag$$Type): void
"loadCodexUnlocks"(long0s: long[], byte1s: byte[]): void
"needsSync"(): boolean
"peekCodexBreadcrumb"(): $CodexBreadcrumb
"performedInitialSync"(): boolean
"popCodexBreadcrumb"(): $CodexBreadcrumb
"pushCodexBreadcrumb"(type0: $CodexBreadcrumb$Type$$Type, string1: string, int2: integer, ...string3s: string[]): void
"raidImmediate"(iFaction0: $IFaction$$Type): void
"resetCodexUnlocks"(): void
"saveCodexUnlocks"(): $CompoundTag
"setAlliedFaction"(iFaction0: $IFaction$$Type, player1: $Player$$Type): void
"setAllyCooldown"(int0: integer): void
"setCodexEntryRead"(long0: long): boolean
"setCodexEntryUnlocked"(long0: long): void
"setDirty"(): void
"setEntriesUnlocked"(long0s: long[]): void
"setFactionStanding"(int0: integer): void
"setHasSynced"(): void
"setRaidChance"(iFaction0: $IFaction$$Type, double1: double): void
"setTier"(int0: integer, player1: $Player$$Type): void
"setTier"(int0: integer, player1: $Player$$Type, boolean2: boolean): void
"setTierProgression"(list0: $List$$Type<$ResourceLocation$$Type>): void
"summonRandomAlly"(player0: $Player$$Type): void
"tickClassicRaids"(player0: $Player$$Type): void
"unlockedEntryCount"(): integer
get "alliedFaction"(): $IFaction
get "allyCooldown"(): integer
get "completedProgressionSteps"(): $List<$ResourceLocation>
get "factionStanding"(): integer
get "forceRaid"(): $IFaction
get "tier"(): integer
get "tierMaxComplexity"(): integer
set "allyCooldown"(value: integer)
set "codexEntryRead"(value: long)
set "codexEntryUnlocked"(value: long)
set "entriesUnlocked"(value: long[])
set "factionStanding"(value: integer)
set "tierProgression"(value: $List$$Type<$ResourceLocation$$Type>)
}

export namespace $IPlayerProgression {
const Tier_Health_Boost_IDs: string[]
}
export abstract class $IPlayerProgression$$Static implements $IPlayerProgression {
static readonly "Tier_Health_Boost_IDs": string[]

}
}

declare module "packages/com/mna/api/events/$BrokerSelectingTradesEvent" {
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ImmutableList, $ImmutableList$$Type } from "packages/com/google/common/collect/$ImmutableList"
import { $VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type } from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import { $Merchant, $Merchant$$Type } from "packages/net/minecraft/world/item/trading/$Merchant"
import { $MerchantOffers, $MerchantOffers$$Type } from "packages/net/minecraft/world/item/trading/$MerchantOffers"

export class $BrokerSelectingTradesEvent extends $Event {
constructor()
constructor(merchant0: $Merchant$$Type, merchantOffers1: $MerchantOffers$$Type, itemListing2s: $VillagerTrades$ItemListing$$Type[], int3: integer, immutableList4: $ImmutableList$$Type<$Item$$Type>)

public "getAllFactionItems"(): $ImmutableList<$Item>
public "getBroker"(): $Merchant
public "getMaxNumbers"(): integer
public "getNewTrades"(): $VillagerTrades$ItemListing[]
public "getOffers"(): $MerchantOffers
get "allFactionItems"(): $ImmutableList<$Item>
get "broker"(): $Merchant
get "maxNumbers"(): integer
get "newTrades"(): $VillagerTrades$ItemListing[]
get "offers"(): $MerchantOffers
}
}

declare module "packages/com/mna/api/particles/parameters/$ParticleInt" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ParticleInt {
constructor(int0: integer)

public static "deserialize"(string0: string): $ParticleInt
public static "deserialize"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $ParticleInt
public "serialize"(): string
public static "serialize"(particleInt0: $ParticleInt$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "value"(): integer
}
}

declare module "packages/com/mna/api/events/$SpellCastEvent" {
import { $ISpellDefinition, $ISpellDefinition$$Type } from "packages/com/mna/api/spells/base/$ISpellDefinition"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $SpellSource, $SpellSource$$Type } from "packages/com/mna/api/spells/targeting/$SpellSource"
import { $SpellContext, $SpellContext$$Type } from "packages/com/mna/api/spells/targeting/$SpellContext"

export class $SpellCastEvent extends $Event {
constructor()
constructor(iSpellDefinition0: $ISpellDefinition$$Type, spellSource1: $SpellSource$$Type, itemStack2: $ItemStack$$Type, spellContext3: $SpellContext$$Type)

/** @deprecated */
public "getCaster"(): $Player
public "getContext"(): $SpellContext
public "getSource"(): $SpellSource
public "getSpell"(): $ISpellDefinition
public "getStack"(): $ItemStack
get "caster"(): $Player
get "context"(): $SpellContext
get "source"(): $SpellSource
get "spell"(): $ISpellDefinition
get "stack"(): $ItemStack
}
}

declare module "packages/com/mna/api/entities/construct/ai/$ConstructTask" {
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $List } from "packages/java/util/$List"
import { $ConstructAITaskParameter } from "packages/com/mna/api/entities/construct/ai/parameter/$ConstructAITaskParameter"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ConstructAITask, $ConstructAITask$$Type } from "packages/com/mna/api/entities/construct/ai/$ConstructAITask"
import { $IConstruct$$Type } from "packages/com/mna/api/entities/construct/$IConstruct"

export class $ConstructTask {
constructor(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<$ConstructAITask$$Type<any>>, boolean2: boolean, boolean3: boolean, boolean4: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<$ConstructAITask$$Type<any>>, boolean2: boolean, boolean3: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<$ConstructAITask$$Type<any>>, int2: integer, boolean3: boolean, boolean4: boolean, boolean5: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<$ConstructAITask$$Type<any>>, int2: integer, boolean3: boolean, boolean4: boolean)

public "getAIClass"(): $Class<$ConstructAITask<any>>
public "getIconTexture"(): $ResourceLocation
public "getOutputs"(): integer
public "getParameters"(): $List<$ConstructAITaskParameter>
public "instantiateTask"(iConstruct0: $IConstruct$$Type<any>): $ConstructAITask<any>
public "isCondition"(): boolean
public "isLodestarAssignable"(): boolean
public "isLowTierAssignable"(): boolean
get "aIClass"(): $Class<$ConstructAITask<any>>
get "iconTexture"(): $ResourceLocation
get "outputs"(): integer
get "parameters"(): $List<$ConstructAITaskParameter>
get "condition"(): boolean
get "lodestarAssignable"(): boolean
get "lowTierAssignable"(): boolean
}
}

declare module "packages/com/mna/api/spells/parts/$Shape" {
import { $IModifiedSpellPart$$Type } from "packages/com/mna/api/spells/base/$IModifiedSpellPart"
import { $ISpellDefinition$$Type } from "packages/com/mna/api/spells/base/$ISpellDefinition"
import { $SpellTarget, $SpellTarget$$Type } from "packages/com/mna/api/spells/targeting/$SpellTarget"
import { $Attribute$$Type } from "packages/com/mna/api/spells/attributes/$Attribute"
import { $ISpellComponent } from "packages/com/mna/api/spells/base/$ISpellComponent"
import { $SpellCraftingContext$$Type } from "packages/com/mna/api/spells/$SpellCraftingContext"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $AttributeValuePair, $AttributeValuePair$$Type } from "packages/com/mna/api/spells/attributes/$AttributeValuePair"
import { $IFaction } from "packages/com/mna/api/faction/$IFaction"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SpellBlacklistResult } from "packages/com/mna/api/spells/base/$SpellBlacklistResult"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $List } from "packages/java/util/$List"
import { $SpellReagent } from "packages/com/mna/api/spells/$SpellReagent"
import { $IModifiable } from "packages/com/mna/api/spells/base/$IModifiable"
import { $SpellSource$$Type } from "packages/com/mna/api/spells/targeting/$SpellSource"
import { $SpellPartTags } from "packages/com/mna/api/spells/$SpellPartTags"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $Shape implements $IModifiable<$Shape>, $ISpellComponent {
constructor(resourceLocation0: $ResourceLocation$$Type, ...attributeValuePair1s: $AttributeValuePair$$Type[])

public "Target"(spellSource0: $SpellSource$$Type, level1: $Level$$Type, iModifiedSpellPart2: $IModifiedSpellPart$$Type<$Shape$$Type>, iSpellDefinition3: $ISpellDefinition$$Type): $List<$SpellTarget>
public "TargetNPCCast"(spellSource0: $SpellSource$$Type, level1: $Level$$Type, iModifiedSpellPart2: $IModifiedSpellPart$$Type<$Shape$$Type>, iSpellDefinition3: $ISpellDefinition$$Type, spellTarget4: $SpellTarget$$Type): $List<$SpellTarget>
public "affectsCaster"(): boolean
public "allowChanneledComponents"(): boolean
public "baselineCooldown"(): integer
public "canBeCastAt"(level0: $Level$$Type, vec31: $Vec3$$Type): $SpellBlacklistResult
public "canBeOnRandomStaff"(): boolean
public "getAddingModName"(): string
public "getDescriptionTooltip"(attribute0: $Attribute$$Type): string
public "getFactionRequirement"(): $IFaction
public "getGuiIcon"(): $ResourceLocation
public "getModifiableAttributes"(): $ImmutableList<$AttributeValuePair>
public "getRegistryName"(): $ResourceLocation
public "getRequiredReagents"(player0: $Player$$Type): $List<$SpellReagent>
public "getTier"(level0: $Level$$Type): integer
public "getUseTag"(): $SpellPartTags
public "grantComponentRoteXP"(): boolean
public "initialComplexity"(): float
public "initializeConfigs"(...attributeValuePair0s: $AttributeValuePair$$Type[]): void
public "ire"(): float
public "isBaseMna"(): boolean
public "isChanneled"(): boolean
public "isCraftable"(spellCraftingContext0: $SpellCraftingContext$$Type): boolean
public "isSilverSpell"(): boolean
public "isTargetFriendlyToCaster"(spellSource0: $SpellSource$$Type, entity1: $Entity$$Type): boolean
public "isUseableByPlayers"(): boolean
public "lookupAttributeConfig"(): void
public "magnitudeHealthCheck"(spellSource0: $SpellSource$$Type, spellTarget1: $SpellTarget$$Type, int2: integer, int3: integer): boolean
public "maxChannelTime"(iModifiedSpellPart0: $IModifiedSpellPart$$Type<$Shape$$Type>): integer
public "onRegistered"(): void
public "replacesHeldItem"(): boolean
public "requiredXPForRote"(): integer
public "spawnsTargetEntity"(): boolean
get "addingModName"(): string
get "factionRequirement"(): $IFaction
get "guiIcon"(): $ResourceLocation
get "modifiableAttributes"(): $ImmutableList<$AttributeValuePair>
get "registryName"(): $ResourceLocation
get "useTag"(): $SpellPartTags
get "baseMna"(): boolean
get "channeled"(): boolean
get "silverSpell"(): boolean
get "useableByPlayers"(): boolean
}
}

declare module "packages/com/mna/api/events/$AirCastLimitEvent" {
import { $ISpellDefinition, $ISpellDefinition$$Type } from "packages/com/mna/api/spells/base/$ISpellDefinition"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $AirCastLimitEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, iSpellDefinition1: $ISpellDefinition$$Type, int2: integer, int3: integer)

public "getCount"(): integer
public "getLimit"(): integer
public "getPlayer"(): $Player
public "getSpell"(): $ISpellDefinition
public "setLimit"(int0: integer): void
get "count"(): integer
get "limit"(): integer
get "player"(): $Player
get "spell"(): $ISpellDefinition
set "limit"(value: integer)
}
}

declare module "packages/com/mna/api/items/$TieredItem" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $FoodBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$FoodBuilder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FoodProperties } from "packages/net/minecraft/world/food/$FoodProperties"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $EnchantmentInstance, $EnchantmentInstance$$Type } from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $Multimap } from "packages/com/google/common/collect/$Multimap"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Item$Properties$$Type } from "packages/net/minecraft/world/item/$Item$Properties"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $MutableToolTier$$Type } from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import { $EnderMan$$Type } from "packages/net/minecraft/world/entity/monster/$EnderMan"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $ICapabilityProvider } from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import { $ITieredItem } from "packages/com/mna/api/items/$ITieredItem"
import { $AttributeModifier } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $Map } from "packages/java/util/$Map"

export class $TieredItem extends $Item implements $ITieredItem<$TieredItem> {
constructor(properties0: $Item$Properties$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "forciblyAllowsTableEnchantment"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCachedTier"(): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getLightColor"(player: $Player$$Type, stack: $ItemStack$$Type): $Vector3f
public "getLightEmission"(player: $Player$$Type, stack: $ItemStack$$Type): integer
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getTier"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): integer
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isTreasureAllowed"(itemStack0: $ItemStack$$Type, boolean1: boolean): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEnchantment"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$EnchantmentInstance$$Type>): $ItemStack
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "resolveTier"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): integer
public "selectEnchantments"(list0: $List$$Type<$EnchantmentInstance$$Type>, randomSource1: $RandomSource$$Type, itemStack2: $ItemStack$$Type, int3: integer, float4: float, float5: float, boolean6: boolean): $List<$EnchantmentInstance>
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setCachedTier"(int0: integer): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setSneakBypass"(): $TieredItem
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "cachedTier"(): integer
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "cachedTier"(value: integer)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "packages/com/mna/api/capabilities/resource/$ICastingResource" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $SyncStatus } from "packages/com/mna/api/capabilities/resource/$SyncStatus"
import { $HashMap } from "packages/java/util/$HashMap"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ICastingResource {
"addModifier"(string0: string, float1: float): void
"addRegenerationModifier"(string0: string, float1: float): void
"artificialRestore"(): boolean
"canRechargeFrom"(itemStack0: $ItemStack$$Type): boolean
"clearModifiers"(): void
"clearRegenerationModifiers"(): void
"clearSyncStatus"(): void
"consume"(livingEntity0: $LivingEntity$$Type, float1: float): void
"copyFrom"(iCastingResource0: $ICastingResource$$Type): void
"getAmount"(): float
"getMaxAmount"(): float
"getMaxAmountBaseline"(): float
"getModifiers"(): $HashMap<string, float>
"getRegenerationModifier"(livingEntity0: $LivingEntity$$Type): float
"getRegenerationModifiers"(): $HashMap<string, float>
"getRegenerationRate"(livingEntity0: $LivingEntity$$Type): integer
"getRegistryName"(): $ResourceLocation
"getSyncStatus"(): $SyncStatus
"hasEnough"(livingEntity0: $LivingEntity$$Type, float1: float): boolean
"hasEnoughAbsolute"(livingEntity0: $LivingEntity$$Type, float1: float): boolean
"hungerAffectsRegenRate"(): boolean
"readNBT"(compoundTag0: $CompoundTag$$Type): void
"removeModifier"(string0: string): void
"removeRegenerationModifier"(string0: string): void
"restore"(float0: float): void
"setAmount"(float0: float): void
"setMaxAmount"(float0: float): void
"setMaxAmountByLevel"(int0: integer): void
"setNeedsSync"(): void
"setRegenerationRate"(int0: integer): void
"writeNBT"(compoundTag0: $CompoundTag$$Type): void
get "amount"(): float
get "maxAmount"(): float
get "maxAmountBaseline"(): float
get "modifiers"(): $HashMap<string, float>
get "regenerationModifiers"(): $HashMap<string, float>
get "registryName"(): $ResourceLocation
get "syncStatus"(): $SyncStatus
set "amount"(value: float)
set "maxAmount"(value: float)
set "maxAmountByLevel"(value: integer)
set "regenerationRate"(value: integer)
}

export namespace $ICastingResource {
const probejs$$marker: never
}
export abstract class $ICastingResource$$Static implements $ICastingResource {
}
}

declare module "packages/com/mna/api/entities/construct/ai/$IMutexManager" {
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ConstructAITask$$Type } from "packages/com/mna/api/entities/construct/ai/$ConstructAITask"
import { $IConstruct$$Type } from "packages/com/mna/api/entities/construct/$IConstruct"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $IMutexManager {
"claimMutex"(entity0: $Entity$$Type, iConstruct1: $IConstruct$$Type<any>, constructAITask2: $ConstructAITask$$Type<any>): boolean
"claimMutex"(blockPos0: $BlockPos$$Type, iConstruct1: $IConstruct$$Type<any>, constructAITask2: $ConstructAITask$$Type<any>): boolean
"releaseAllMutexes"(iConstruct0: $IConstruct$$Type<any>, constructAITask1: $ConstructAITask$$Type<any>): void
"releaseMutex"(blockPos0: $BlockPos$$Type, iConstruct1: $IConstruct$$Type<any>, constructAITask2: $ConstructAITask$$Type<any>): void
"releaseMutex"(entity0: $Entity$$Type, iConstruct1: $IConstruct$$Type<any>, constructAITask2: $ConstructAITask$$Type<any>): void
}

export namespace $IMutexManager {
const probejs$$marker: never
}
export abstract class $IMutexManager$$Static implements $IMutexManager {
}
}

declare module "packages/com/mna/api/recipes/$IRitualRecipe" {
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $List$$Type } from "packages/java/util/$List"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $IRitualReagent } from "packages/com/mna/api/rituals/$IRitualReagent"
import { $IMARecipe } from "packages/com/mna/api/recipes/$IMARecipe"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IRitualRecipe extends $IMARecipe {
"countRunes"(): integer
"getCommand"(): string
"getGuiRepresentationStack"(): $ItemStack
"getLowerBound"(): integer
"getManaweavePatterns"(): string[]
"getMatchedDirection"(list0: $List$$Type<$BlockPos$$Type>, blockPos1: $BlockPos$$Type): $Direction
"getMatchedDirection"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $Direction
"getMatchedDirection"(list0: $List$$Type<$BlockPos$$Type>): $Direction
"getPattern"(): integer[][]
"getReagents"(): $IRitualReagent[][]
"getRegistryId"(): $ResourceLocation
"getResultItem"(): $ItemStack
"getTier"(): integer
"hasCommand"(): boolean
"isValid"(): boolean
get "command"(): string
get "guiRepresentationStack"(): $ItemStack
get "lowerBound"(): integer
get "manaweavePatterns"(): string[]
get "pattern"(): integer[][]
get "reagents"(): $IRitualReagent[][]
get "registryId"(): $ResourceLocation
get "resultItem"(): $ItemStack
get "tier"(): integer
get "valid"(): boolean
}

export namespace $IRitualRecipe {
const probejs$$marker: never
}
export abstract class $IRitualRecipe$$Static implements $IRitualRecipe {
}
}

declare module "packages/com/mna/api/events/$BonefeatherCharmUsedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $BonefeatherCharmUsedEvent extends $Event {
constructor()
constructor(player0: $Player$$Type)

public "getPlayer"(): $Player
get "player"(): $Player
}
}

declare module "packages/com/mna/api/spells/$SpellCastingResult" {
import { $HashMap$$Type } from "packages/java/util/$HashMap"
import { $ComponentApplicationResult, $ComponentApplicationResult$$Type } from "packages/com/mna/api/spells/$ComponentApplicationResult"
import { $SpellEffect$$Type } from "packages/com/mna/api/spells/parts/$SpellEffect"
import { $SpellCastingResultCode, $SpellCastingResultCode$$Type } from "packages/com/mna/api/spells/$SpellCastingResultCode"

export class $SpellCastingResult {
constructor(spellCastingResultCode0: $SpellCastingResultCode$$Type, hashMap1: $HashMap$$Type<$SpellEffect$$Type, $ComponentApplicationResult$$Type>)

public "getCode"(): $SpellCastingResultCode
public "getResultFor"(spellEffect0: $SpellEffect$$Type): $ComponentApplicationResult
get "code"(): $SpellCastingResultCode
}
}

declare module "packages/com/mna/api/spells/$SpellPartTags" {
import { $Enum } from "packages/java/lang/$Enum"

export class $SpellPartTags extends $Enum<$SpellPartTags> {
static readonly "DONOTUSE": $SpellPartTags
static readonly "FRIENDLY": $SpellPartTags
static readonly "HARMFUL": $SpellPartTags
static readonly "NEUTRAL": $SpellPartTags
static readonly "SELF": $SpellPartTags
static readonly "UTILITY": $SpellPartTags

public static "valueOf"(string0: string): $SpellPartTags
public static "values"(): $SpellPartTags[]
}
}

declare module "packages/com/mna/api/events/$MagicXPGainedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $MagicXPGainedEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, int1: integer)

public "getAmount"(): integer
public "getPlayer"(): $Player
public "setAmount"(int0: integer): void
get "amount"(): integer
get "player"(): $Player
set "amount"(value: integer)
}
}

declare module "packages/com/mna/api/entities/construct/$IConstructDiagnostics" {
import { $IConstructDiagnostics$Status$$Type } from "packages/com/mna/api/entities/construct/$IConstructDiagnostics$Status"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"

export interface $IConstructDiagnostics {
"needsUpdate"(): boolean
"pushDiagnosticMessage"(string0: string, resourceLocation1: $ResourceLocation$$Type, boolean2: boolean): void
"pushTaskUpdate"(string0: string, resourceLocation1: $ResourceLocation$$Type, status2: $IConstructDiagnostics$Status$$Type, int3: integer): void
"pushTaskUpdate"(string0: string, resourceLocation1: $ResourceLocation$$Type, status2: $IConstructDiagnostics$Status$$Type, aABB3: $AABB$$Type): void
"pushTaskUpdate"(string0: string, resourceLocation1: $ResourceLocation$$Type, status2: $IConstructDiagnostics$Status$$Type, vec33: $Vec3$$Type): void
"setMovePos"(vec30: $Vec3$$Type): void
set "movePos"(value: $Vec3$$Type)
}

export namespace $IConstructDiagnostics {
const probejs$$marker: never
}
export abstract class $IConstructDiagnostics$$Static implements $IConstructDiagnostics {
}
}

declare module "packages/com/mna/api/events/construct/$ConstructDiagnosticMessageLoggedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IConstruct, $IConstruct$$Type } from "packages/com/mna/api/entities/construct/$IConstruct"

export class $ConstructDiagnosticMessageLoggedEvent extends $Event {
constructor()
constructor(iConstruct0: $IConstruct$$Type<any>, string1: string)

public "getConstruct"(): $IConstruct<any>
public "getMessage"(): string
public "setMessage"(string0: string): void
get "construct"(): $IConstruct<any>
get "message"(): string
set "message"(value: string)
}
}

declare module "packages/com/mna/api/recipes/$IManaweavePattern" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $IMARecipe } from "packages/com/mna/api/recipes/$IMARecipe"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IManaweavePattern extends $IMARecipe {
"copy"(): $IManaweavePattern
"get"(): byte[][]
"getGuiRepresentationStack"(): $ItemStack
"getRegistryId"(): $ResourceLocation
"getResultItem"(): $ItemStack
"getTier"(): integer
get "guiRepresentationStack"(): $ItemStack
get "registryId"(): $ResourceLocation
get "resultItem"(): $ItemStack
get "tier"(): integer
}

export namespace $IManaweavePattern {
const probejs$$marker: never
}
export abstract class $IManaweavePattern$$Static implements $IManaweavePattern {
}
}

declare module "packages/com/mna/api/events/$RunescribeCraftingEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IRunescribeRecipe, $IRunescribeRecipe$$Type } from "packages/com/mna/api/recipes/$IRunescribeRecipe"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $RunescribeCraftingEvent extends $Event {
constructor()
constructor(iRunescribeRecipe0: $IRunescribeRecipe$$Type, itemStack1: $ItemStack$$Type, player2: $Player$$Type)

public "getCrafter"(): $Player
public "getOutput"(): $ItemStack
public "getRecipe"(): $IRunescribeRecipe
get "crafter"(): $Player
get "output"(): $ItemStack
get "recipe"(): $IRunescribeRecipe
}
}

declare module "packages/com/mna/api/entities/construct/$FluidParameterRegistry" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $FluidParameterRegistry$FluidParameter, $FluidParameterRegistry$FluidParameter$$Type } from "packages/com/mna/api/entities/construct/$FluidParameterRegistry$FluidParameter"
import { $FMLLoadCompleteEvent$$Type } from "packages/net/minecraftforge/fml/event/lifecycle/$FMLLoadCompleteEvent"

export class $FluidParameterRegistry {
static readonly "INSTANCE": $FluidParameterRegistry

constructor()

public "forFluid"(fluid0: $Fluid$$Type): $FluidParameterRegistry$FluidParameter
public static "onLoadComplete"(fMLLoadCompleteEvent0: $FMLLoadCompleteEvent$$Type): void
public "register"(fluidParameter0: $FluidParameterRegistry$FluidParameter$$Type): void
public "registerDefaults"(): void
}
}

declare module "packages/com/mna/api/particles/parameters/$ParticleItemStack" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ParticleItemStack {
constructor(itemStack0: $ItemStack$$Type)
constructor()

public static "deserialize"(string0: string): $ParticleItemStack
public static "deserialize"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $ParticleItemStack
public static "serialize"(particleItemStack0: $ParticleItemStack$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "serialize"(): string
public "value"(): $ItemStack
}
}

declare module "packages/com/mna/api/events/$RitualCompleteEvent" {
import { $RitualEffect, $RitualEffect$$Type } from "packages/com/mna/api/rituals/$RitualEffect"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $NonNullList, $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $IRitualRecipe, $IRitualRecipe$$Type } from "packages/com/mna/api/recipes/$IRitualRecipe"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $RitualCompleteEvent extends $Event {
constructor()
constructor(iRitualRecipe0: $IRitualRecipe$$Type, nonNullList1: $NonNullList$$Type<$RitualEffect$$Type>, blockPos2: $BlockPos$$Type, player3: $Player$$Type, list4: $List$$Type<$ItemStack$$Type>)

public "getCaster"(): $Player
public "getCenter"(): $BlockPos
public "getCollectedReagents"(): $List<$ItemStack>
public "getHandlers"(): $NonNullList<$RitualEffect>
public "getRitual"(): $IRitualRecipe
get "caster"(): $Player
get "center"(): $BlockPos
get "collectedReagents"(): $List<$ItemStack>
get "handlers"(): $NonNullList<$RitualEffect>
get "ritual"(): $IRitualRecipe
}
}

declare module "packages/com/mna/api/entities/construct/$IConstructDiagnostics$Status" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IConstructDiagnostics$Status extends $Enum<$IConstructDiagnostics$Status> {
static readonly "FAILURE": $IConstructDiagnostics$Status
static readonly "RUNNING": $IConstructDiagnostics$Status
static readonly "SUCCESS": $IConstructDiagnostics$Status

public static "valueOf"(string0: string): $IConstructDiagnostics$Status
public static "values"(): $IConstructDiagnostics$Status[]
}
}

declare module "packages/com/mna/api/events/$ManaweavePatternDrawnEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IManaweavePattern, $IManaweavePattern$$Type } from "packages/com/mna/api/recipes/$IManaweavePattern"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ManaweavePatternDrawnEvent extends $Event {
constructor()
constructor(iManaweavePattern0: $IManaweavePattern$$Type, livingEntity1: $LivingEntity$$Type)

public "getCrafter"(): $LivingEntity
public "getPattern"(): $IManaweavePattern
get "crafter"(): $LivingEntity
get "pattern"(): $IManaweavePattern
}
}

declare module "packages/com/mna/api/capabilities/resource/$SyncStatus" {
import { $Enum } from "packages/java/lang/$Enum"

export class $SyncStatus extends $Enum<$SyncStatus> {
static readonly "IMMEDIATE": $SyncStatus
static readonly "LAZY": $SyncStatus
static readonly "NOT_NEEDED": $SyncStatus

public static "valueOf"(string0: string): $SyncStatus
public static "values"(): $SyncStatus[]
}
}

declare module "packages/com/mna/api/spells/base/$IModifiable" {
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $ISpellComponent } from "packages/com/mna/api/spells/base/$ISpellComponent"
import { $AttributeValuePair } from "packages/com/mna/api/spells/attributes/$AttributeValuePair"

export interface $IModifiable<T extends $ISpellComponent> {
"getModifiableAttributes"(): $ImmutableList<$AttributeValuePair>
get "modifiableAttributes"(): $ImmutableList<$AttributeValuePair>
}

export namespace $IModifiable {
const probejs$$marker: never
}
export abstract class $IModifiable$$Static<T extends $ISpellComponent> implements $IModifiable<T> {
}
}

declare module "packages/com/mna/api/events/$RuneforgeEnchantEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $RuneforgeEnchantEvent extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type, player1: $Player$$Type)

public "getCrafter"(): $Player
public "getOutput"(): $ItemStack
get "crafter"(): $Player
get "output"(): $ItemStack
}
}

declare module "packages/com/mna/api/items/$ITieredItem" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITieredItem<T extends $Item> {
"getCachedTier"(): integer
"getTier"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): integer
"resolveTier"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): integer
"setCachedTier"(int0: integer): void
get "cachedTier"(): integer
set "cachedTier"(value: integer)
}

export namespace $ITieredItem {
const TAG_HIDE_TIER_IN_TOOLTIP: string
const TIER_NOT_CHECKED: integer
const TIER_NO_RECIPE: integer
}
export abstract class $ITieredItem$$Static<T extends $Item> implements $ITieredItem<T> {
static readonly "TAG_HIDE_TIER_IN_TOOLTIP": string
static readonly "TIER_NOT_CHECKED": integer
static readonly "TIER_NO_RECIPE": integer

}
}

declare module "packages/com/mna/api/spells/$SpellReagent" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IFaction$$Type } from "packages/com/mna/api/faction/$IFaction"
import { $SpellEffect, $SpellEffect$$Type } from "packages/com/mna/api/spells/parts/$SpellEffect"

export class $SpellReagent {
constructor(spellEffect0: $SpellEffect$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean, boolean3: boolean, boolean4: boolean, boolean5: boolean, ...iFaction6s: $IFaction$$Type[])
constructor(spellEffect0: $SpellEffect$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean, boolean3: boolean, boolean4: boolean, ...iFaction5s: $IFaction$$Type[])
constructor(spellEffect0: $SpellEffect$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean, boolean3: boolean, boolean4: boolean)

public "getAddedBy"(): $SpellEffect
public "getCompareNBT"(): boolean
public "getConsume"(): boolean
public "getIgnoreDurability"(): boolean
public "getOptional"(): boolean
public "getReagentStack"(): $ItemStack
public "isIgnoredBy"(player0: $Player$$Type): boolean
get "addedBy"(): $SpellEffect
get "compareNBT"(): boolean
get "consume"(): boolean
get "ignoreDurability"(): boolean
get "optional"(): boolean
get "reagentStack"(): $ItemStack
}
}

declare module "packages/com/mna/api/spells/parts/$Modifier" {
import { $Attribute, $Attribute$$Type } from "packages/com/mna/api/spells/attributes/$Attribute"
import { $SpellTarget$$Type } from "packages/com/mna/api/spells/targeting/$SpellTarget"
import { $ISpellComponent } from "packages/com/mna/api/spells/base/$ISpellComponent"
import { $SpellCraftingContext$$Type } from "packages/com/mna/api/spells/$SpellCraftingContext"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $IFaction } from "packages/com/mna/api/faction/$IFaction"
import { $AttributeValuePair$$Type } from "packages/com/mna/api/spells/attributes/$AttributeValuePair"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SpellBlacklistResult } from "packages/com/mna/api/spells/base/$SpellBlacklistResult"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $SpellSource$$Type } from "packages/com/mna/api/spells/targeting/$SpellSource"
import { $SpellPartTags } from "packages/com/mna/api/spells/$SpellPartTags"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $Modifier implements $ISpellComponent {
constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer, ...attribute2s: $Attribute$$Type[])

public "canBeCastAt"(level0: $Level$$Type, vec31: $Vec3$$Type): $SpellBlacklistResult
public "canBeOnRandomStaff"(): boolean
public "getAddingModName"(): string
public "getDescriptionTooltip"(attribute0: $Attribute$$Type): string
public "getFactionRequirement"(): $IFaction
public "getGuiIcon"(): $ResourceLocation
public "getModifiedAttributes"(): $ImmutableList<$Attribute>
public "getRegistryName"(): $ResourceLocation
public "getTier"(level0: $Level$$Type): integer
public "getUseTag"(): $SpellPartTags
public "initializeConfigs"(...attributeValuePair0s: $AttributeValuePair$$Type[]): void
public "ire"(): float
public "isBaseMna"(): boolean
public "isCraftable"(spellCraftingContext0: $SpellCraftingContext$$Type): boolean
public "isSilverSpell"(): boolean
public "isTargetFriendlyToCaster"(spellSource0: $SpellSource$$Type, entity1: $Entity$$Type): boolean
public "isUseableByPlayers"(): boolean
public "magnitudeHealthCheck"(spellSource0: $SpellSource$$Type, spellTarget1: $SpellTarget$$Type, int2: integer, int3: integer): boolean
public "modifiesType"(attribute0: $Attribute$$Type): boolean
public "onRegistered"(): void
public "replacesHeldItem"(): boolean
public "requiredXPForRote"(): integer
get "addingModName"(): string
get "factionRequirement"(): $IFaction
get "guiIcon"(): $ResourceLocation
get "modifiedAttributes"(): $ImmutableList<$Attribute>
get "registryName"(): $ResourceLocation
get "useTag"(): $SpellPartTags
get "baseMna"(): boolean
get "silverSpell"(): boolean
get "useableByPlayers"(): boolean
}
}

declare module "packages/com/mna/api/events/$MasteryGainedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ISpellComponent, $ISpellComponent$$Type } from "packages/com/mna/api/spells/base/$ISpellComponent"

export class $MasteryGainedEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, iSpellComponent1: $ISpellComponent$$Type, float2: float)

public "getAmount"(): float
public "getPart"(): $ISpellComponent
public "getPlayer"(): $Player
public "setAmount"(float0: float): void
get "amount"(): float
get "part"(): $ISpellComponent
get "player"(): $Player
set "amount"(value: float)
}
}

declare module "packages/com/mna/api/events/construct/$ConstructSprayTargetingEvent" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IConstruct, $IConstruct$$Type } from "packages/com/mna/api/entities/construct/$IConstruct"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ConstructSprayTargetingEvent extends $Event {
constructor()
constructor(iConstruct0: $IConstruct$$Type<any>, entity1: $Entity$$Type, fluid2: $Fluid$$Type, boolean3: boolean, boolean4: boolean)

public "getConstruct"(): $IConstruct<any>
public "getFluid"(): $Fluid
public "getTarget"(): $Entity
public "isTargetFriendly"(): boolean
public "isTargetOwner"(): boolean
get "construct"(): $IConstruct<any>
get "fluid"(): $Fluid
get "target"(): $Entity
get "targetFriendly"(): boolean
get "targetOwner"(): boolean
}
}

declare module "packages/com/mna/api/events/$CastingResourceRegistrationEvent" {
import { $ICastingResourceRegistry, $ICastingResourceRegistry$$Type } from "packages/com/mna/api/capabilities/resource/$ICastingResourceRegistry"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

/** @deprecated */
export class $CastingResourceRegistrationEvent extends $Event {
constructor()
constructor(iCastingResourceRegistry0: $ICastingResourceRegistry$$Type)

public "getRegistry"(): $ICastingResourceRegistry
get "registry"(): $ICastingResourceRegistry
}
}

declare module "packages/com/mna/api/rituals/$IRitualContext" {
import { $RitualBlockPos } from "packages/com/mna/api/rituals/$RitualBlockPos"
import { $NonNullList, $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $List } from "packages/java/util/$List"
import { $IRitualRecipe } from "packages/com/mna/api/recipes/$IRitualRecipe"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export interface $IRitualContext {
"appendPatterns"(nonNullList0: $NonNullList$$Type<$ResourceLocation$$Type>): void
"getAllPositions"(): $NonNullList<$RitualBlockPos>
"getCaster"(): $Player
"getCenter"(): $BlockPos
"getCollectedPatterns"(predicate0: $Predicate$$Type<$ResourceLocation$$Type>): $List<$ResourceLocation>
"getCollectedPatterns"(): $List<$ResourceLocation>
"getCollectedReagents"(): $List<$ItemStack>
"getCollectedReagents"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $List<$ItemStack>
"getIndexedPositions"(): $NonNullList<$RitualBlockPos>
"getLevel"(): $Level
"getRecipe"(): $IRitualRecipe
"replacePatterns"(nonNullList0: $NonNullList$$Type<$ResourceLocation$$Type>): void
"replaceReagents"(resourceLocation0: $ResourceLocation$$Type, nonNullList1: $NonNullList$$Type<$ResourceLocation$$Type>): void
"replaceReagents"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): void
get "allPositions"(): $NonNullList<$RitualBlockPos>
get "caster"(): $Player
get "center"(): $BlockPos
get "collectedPatterns"(): $List<$ResourceLocation>
get "collectedReagents"(): $List<$ItemStack>
get "indexedPositions"(): $NonNullList<$RitualBlockPos>
get "level"(): $Level
get "recipe"(): $IRitualRecipe
}

export namespace $IRitualContext {
const probejs$$marker: never
}
export abstract class $IRitualContext$$Static implements $IRitualContext {
}
}

declare module "packages/com/mna/api/entities/construct/$ConstructSlot" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ConstructSlot extends $Enum<$ConstructSlot> {
static readonly "HEAD": $ConstructSlot
static readonly "LEFT_ARM": $ConstructSlot
static readonly "LEGS": $ConstructSlot
static readonly "RIGHT_ARM": $ConstructSlot
static readonly "TORSO": $ConstructSlot

public static "valueOf"(string0: string): $ConstructSlot
public static "values"(): $ConstructSlot[]
}
}

declare module "packages/com/mna/api/events/construct/$FluidParameterRegistrationEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $FluidParameterRegistry, $FluidParameterRegistry$$Type } from "packages/com/mna/api/entities/construct/$FluidParameterRegistry"

export class $FluidParameterRegistrationEvent extends $Event {
constructor()
constructor(fluidParameterRegistry0: $FluidParameterRegistry$$Type)

public "registry"(): $FluidParameterRegistry
}
}

declare module "packages/com/mna/api/capabilities/resource/$ICastingResourceGuiRegistry" {
import { $ICastingResourceGuiProvider$$Type } from "packages/com/mna/api/capabilities/resource/$ICastingResourceGuiProvider"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICastingResourceGuiRegistry {
"registerResourceGui"(resourceLocation0: $ResourceLocation$$Type, iCastingResourceGuiProvider1: $ICastingResourceGuiProvider$$Type): void
}

export namespace $ICastingResourceGuiRegistry {
const probejs$$marker: never
}
export abstract class $ICastingResourceGuiRegistry$$Static implements $ICastingResourceGuiRegistry {
}
}

declare module "packages/com/mna/api/events/$RunicAnvilShouldActivateEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $RunicAnvilShouldActivateEvent extends $Event {
readonly "material": $ItemStack
readonly "pattern": $ItemStack

constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type)

}
}

declare module "packages/com/mna/api/events/$ComponentApplyingEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $SpellTarget, $SpellTarget$$Type } from "packages/com/mna/api/spells/targeting/$SpellTarget"
import { $SpellSource, $SpellSource$$Type } from "packages/com/mna/api/spells/targeting/$SpellSource"
import { $SpellEffect, $SpellEffect$$Type } from "packages/com/mna/api/spells/parts/$SpellEffect"
import { $SpellContext, $SpellContext$$Type } from "packages/com/mna/api/spells/targeting/$SpellContext"

export class $ComponentApplyingEvent extends $Event {
constructor()
constructor(spellSource0: $SpellSource$$Type, spellContext1: $SpellContext$$Type, spellTarget2: $SpellTarget$$Type, spellEffect3: $SpellEffect$$Type)

public "getComponent"(): $SpellEffect
public "getContext"(): $SpellContext
public "getSource"(): $SpellSource
public "getTarget"(): $SpellTarget
get "component"(): $SpellEffect
get "context"(): $SpellContext
get "source"(): $SpellSource
get "target"(): $SpellTarget
}
}

declare module "packages/com/mna/api/entities/construct/$ConstructMaterial" {
import { $ConstructSlot$$Type } from "packages/com/mna/api/entities/construct/$ConstructSlot"
import { $List } from "packages/java/util/$List"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ConstructCapability$$Type } from "packages/com/mna/api/entities/construct/$ConstructCapability"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Tier } from "packages/net/minecraft/world/item/$Tier"
import { $IConstruct$$Type } from "packages/com/mna/api/entities/construct/$IConstruct"

export class $ConstructMaterial {
static "ALL_MATERIALS": $List<$ConstructMaterial>
static "BONE": $ConstructMaterial
static "DIAMOND": $ConstructMaterial
static "GOLD": $ConstructMaterial
static "IRON": $ConstructMaterial
static "OBSIDIAN": $ConstructMaterial
static "STONE": $ConstructMaterial
static "UNKNOWN": $ConstructMaterial
static "WICKERWOOD": $ConstructMaterial
static "WOOD": $ConstructMaterial

constructor()

public "getArmorBonus"(constructSlot0: $ConstructSlot$$Type): integer
public "getBackpackCapacityBoost"(): integer
public "getBuoyancy"(): float
public "getCastingTierEquivalent"(): integer
public "getCooldownMultiplierFor"(constructCapability0: $ConstructCapability$$Type): float
public "getDamageBonus"(): float
public "getDeathLootMaterialDrops"(iConstruct0: $IConstruct$$Type<any>, damageSource1: $DamageSource$$Type): $List<$ItemStack>
public "getEquivalentTier"(): $Tier
public "getExplosionResistance"(): float
public "getHealth"(): integer
public "getId"(): $ResourceLocation
public "getIntelligenceBonus"(): integer
public "getKnockbackResistance"(): float
public "getManaStorage"(): integer
public "getRangedDamageBonus"(): float
public "getRangedManaCost"(): float
public "getSpeed"(): float
public "getTexture"(): $ResourceLocation
public "getToughnessBonus"(constructSlot0: $ConstructSlot$$Type): integer
get "backpackCapacityBoost"(): integer
get "buoyancy"(): float
get "castingTierEquivalent"(): integer
get "damageBonus"(): float
get "equivalentTier"(): $Tier
get "explosionResistance"(): float
get "health"(): integer
get "id"(): $ResourceLocation
get "intelligenceBonus"(): integer
get "knockbackResistance"(): float
get "manaStorage"(): integer
get "rangedDamageBonus"(): float
get "rangedManaCost"(): float
get "speed"(): float
get "texture"(): $ResourceLocation
}
}

declare module "packages/com/mna/api/capabilities/$CodexBreadcrumb$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $CodexBreadcrumb$Type extends $Enum<$CodexBreadcrumb$Type> {
static readonly "CATEGORY": $CodexBreadcrumb$Type
static readonly "ENTRY": $CodexBreadcrumb$Type
static readonly "INDEX": $CodexBreadcrumb$Type
static readonly "RECIPE": $CodexBreadcrumb$Type
static readonly "SEARCH": $CodexBreadcrumb$Type

public static "valueOf"(string0: string): $CodexBreadcrumb$Type
public static "values"(): $CodexBreadcrumb$Type[]
}
}

declare module "packages/com/mna/api/recipes/$IItemAndPatternRecipe" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $IMARecipe } from "packages/com/mna/api/recipes/$IMARecipe"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IItemAndPatternRecipe extends $IMARecipe {
"getGuiRepresentationStack"(): $ItemStack
"getRegistryId"(): $ResourceLocation
"getRequiredItems"(): $ResourceLocation[]
"getRequiredPatterns"(): $ResourceLocation[]
"getResultItem"(): $ItemStack
"getTier"(): integer
get "guiRepresentationStack"(): $ItemStack
get "registryId"(): $ResourceLocation
get "requiredItems"(): $ResourceLocation[]
get "requiredPatterns"(): $ResourceLocation[]
get "resultItem"(): $ItemStack
get "tier"(): integer
}

export namespace $IItemAndPatternRecipe {
const probejs$$marker: never
}
export abstract class $IItemAndPatternRecipe$$Static implements $IItemAndPatternRecipe {
}
}

declare module "packages/com/mna/api/spells/$SpellCastingResultCode" {
import { $HashMap$$Type } from "packages/java/util/$HashMap"
import { $Enum } from "packages/java/lang/$Enum"
import { $ComponentApplicationResult$$Type } from "packages/com/mna/api/spells/$ComponentApplicationResult"
import { $SpellCastingResult } from "packages/com/mna/api/spells/$SpellCastingResult"
import { $SpellEffect$$Type } from "packages/com/mna/api/spells/parts/$SpellEffect"

export class $SpellCastingResultCode extends $Enum<$SpellCastingResultCode> {
static readonly "BLOCKED_BY_CONFIG": $SpellCastingResultCode
static readonly "CANCELED_BY_EVENT": $SpellCastingResultCode
static readonly "CAPABILITY_MISSING": $SpellCastingResultCode
static readonly "CHANNEL": $SpellCastingResultCode
static readonly "EXCEPTION_THROWN": $SpellCastingResultCode
static readonly "FACTION_DENIED": $SpellCastingResultCode
static readonly "INSUFFICIENT_TIER": $SpellCastingResultCode
static readonly "INVALID_RECIPE": $SpellCastingResultCode
static readonly "MISSING_REAGENTS": $SpellCastingResultCode
static readonly "NOT_ENOUGH_MANA": $SpellCastingResultCode
static readonly "NOT_UNLOCKED_MAGIC": $SpellCastingResultCode
static readonly "NO_TARGET": $SpellCastingResultCode
static readonly "NPC_CAST_HANDLER_NOT_IMPLEMENTED": $SpellCastingResultCode
static readonly "SILENCED": $SpellCastingResultCode
static readonly "SPELL_INTERACTIBLE_BLOCK_HIT": $SpellCastingResultCode
static readonly "SPELL_INTERACTIBLE_ENTITY_HIT": $SpellCastingResultCode
static readonly "SUCCESS": $SpellCastingResultCode
static readonly "TOO_COMPLEX": $SpellCastingResultCode
static readonly "WORLD_CLIENT": $SpellCastingResultCode

public "createResult"(hashMap0: $HashMap$$Type<$SpellEffect$$Type, $ComponentApplicationResult$$Type>): $SpellCastingResult
public "createResult"(): $SpellCastingResult
public "isConsideredSuccess"(): boolean
public static "valueOf"(string0: string): $SpellCastingResultCode
public static "values"(): $SpellCastingResultCode[]
get "consideredSuccess"(): boolean
}
}

declare module "packages/com/mna/api/spells/targeting/$SpellTarget" {
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $SpellEffect$$Type } from "packages/com/mna/api/spells/parts/$SpellEffect"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $SpellTarget {
static "NONE": $SpellTarget
static "NPC_CAST_ASSIST_NOT_IMPLEMENTED": $SpellTarget

constructor(entity0: $Entity$$Type)
constructor(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type)

public "doNotOffsetFace"(): $SpellTarget
public "getBlock"(): $BlockPos
public "getBlockFace"(spellEffect0: $SpellEffect$$Type): $Direction
public "getEntity"(): $Entity
public "getLivingEntity"(): $LivingEntity
public "getPosition"(): $Vec3
public "isBlock"(): boolean
public "isEntity"(): boolean
public "isLivingEntity"(): boolean
public "offsetFace"(): boolean
public "overrideSpellTarget"(entity0: $Entity$$Type): void
public "overrideSpellTarget"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): void
get "block"(): $BlockPos
get "entity"(): $Entity
get "livingEntity"(): $LivingEntity
get "position"(): $Vec3
get "block"(): boolean
get "entity"(): boolean
get "livingEntity"(): boolean
}
}

declare module "packages/com/mna/api/recipes/$IManaweavingRecipe" {
import { $IFaction } from "packages/com/mna/api/faction/$IFaction"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IItemAndPatternRecipe } from "packages/com/mna/api/recipes/$IItemAndPatternRecipe"

export interface $IManaweavingRecipe extends $IItemAndPatternRecipe {
"getCopyNBT"(): boolean
"getEnchantment"(): $ResourceLocation
"getEnchantmentMagnitude"(): integer
"getFactionRequirement"(): $IFaction
"getGuiRepresentationStack"(): $ItemStack
"getRegistryId"(): $ResourceLocation
"getRequiredItems"(): $ResourceLocation[]
"getRequiredPatterns"(): $ResourceLocation[]
"getResultItem"(): $ItemStack
"getTier"(): integer
"isEnchantment"(): boolean
get "copyNBT"(): boolean
get "enchantment"(): $ResourceLocation
get "enchantmentMagnitude"(): integer
get "factionRequirement"(): $IFaction
get "guiRepresentationStack"(): $ItemStack
get "registryId"(): $ResourceLocation
get "requiredItems"(): $ResourceLocation[]
get "requiredPatterns"(): $ResourceLocation[]
get "resultItem"(): $ItemStack
get "tier"(): integer
get "enchantment"(): boolean
}

export namespace $IManaweavingRecipe {
const probejs$$marker: never
}
export abstract class $IManaweavingRecipe$$Static implements $IManaweavingRecipe {
}
}

declare module "packages/com/mna/api/events/$BoundItemSummonedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $BoundItemSummonedEvent extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type)

public "getBoundItemStack"(): $ItemStack
get "boundItemStack"(): $ItemStack
}
}

declare module "packages/com/mna/api/events/$CantripCastEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ICantrip, $ICantrip$$Type } from "packages/com/mna/api/cantrips/$ICantrip"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $CantripCastEvent extends $Event {
constructor()
constructor(iCantrip0: $ICantrip$$Type, player1: $Player$$Type)

public "getCantrip"(): $ICantrip
public "getCrafter"(): $Player
get "cantrip"(): $ICantrip
get "crafter"(): $Player
}
}

declare module "packages/com/mna/api/events/$AuraEvent$Tick" {
import { $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $AuraEvent } from "packages/com/mna/api/events/$AuraEvent"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AuraEvent$Tick extends $AuraEvent {
constructor()
constructor(enchantment0: $Enchantment$$Type, livingEntity1: $LivingEntity$$Type)

public "getWearer"(): $LivingEntity
get "wearer"(): $LivingEntity
}
}

declare module "packages/com/mna/api/events/$AuraEvent$Compatibility" {
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $AuraEvent } from "packages/com/mna/api/events/$AuraEvent"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AuraEvent$Compatibility extends $AuraEvent {
constructor()
constructor(enchantment0: $Enchantment$$Type, enchantment1: $Enchantment$$Type, itemStack2: $ItemStack$$Type, livingEntity3: $LivingEntity$$Type)

public "getEnchanter"(): $LivingEntity
public "getOtherEnchantment"(): $Enchantment
public "getPlacedOn"(): $ItemStack
get "enchanter"(): $LivingEntity
get "otherEnchantment"(): $Enchantment
get "placedOn"(): $ItemStack
}
}

declare module "packages/com/mna/api/spells/$SpellCraftingContext" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $SpellCraftingContext {
constructor(player0: $Player$$Type)

public "getPlayer"(): $Player
get "player"(): $Player
}
}

declare module "packages/com/mna/api/entities/construct/$FluidParameterRegistry$FluidParameter" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $TriFunction$$Type } from "packages/org/apache/commons/lang3/function/$TriFunction"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $IConstruct$$Type } from "packages/com/mna/api/entities/construct/$IConstruct"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $FluidParameterRegistry$FluidParameter {
constructor(fluid0: $Fluid$$Type, boolean1: boolean, boolean2: boolean, soundEvent3: $SoundEvent$$Type, particleOptions4: $ParticleOptions$$Type, float5: float, int6: integer, triFunction7: $TriFunction$$Type<$Entity$$Type, boolean, $IConstruct$$Type<any>, boolean>, function8: $Function$$Type<$Vec3$$Type, $Vec3>)

public "adjustVelocity"(vec30: $Vec3$$Type): $Vec3
public "checkPredicate"(entity0: $Entity$$Type, boolean1: boolean, iConstruct2: $IConstruct$$Type<any>): boolean
public "fluid"(): $Fluid
public "getParticleQuantity"(): integer
public "getParticleVelocityScale"(): float
public "particle"(): $ParticleOptions
public "spraySound"(): $SoundEvent
public "targetsFriendly"(): boolean
public "targetsHostile"(): boolean
get "particleQuantity"(): integer
get "particleVelocityScale"(): float
}
}

declare module "packages/com/mna/api/events/$ReedfeatherCharmUsedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $ReedfeatherCharmUsedEvent extends $Event {
constructor()
constructor(player0: $Player$$Type)

public "getPlayer"(): $Player
get "player"(): $Player
}
}

declare module "packages/com/mna/api/capabilities/resource/$ICastingResourceRegistry" {
import { $Class$$Type } from "packages/java/lang/$Class"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ICastingResource$$Type } from "packages/com/mna/api/capabilities/resource/$ICastingResource"

export interface $ICastingResourceRegistry {
"register"(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<$ICastingResource$$Type>): void
}

export namespace $ICastingResourceRegistry {
const probejs$$marker: never
}
export abstract class $ICastingResourceRegistry$$Static implements $ICastingResourceRegistry {
}
}

declare module "packages/com/mna/api/rituals/$IRitualReagent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IRitualReagent {
"getResourceLocation"(): $ResourceLocation
"isDynamic"(): boolean
"isDynamicSource"(): boolean
"isEmpty"(): boolean
"isManualReturn"(): boolean
"isOptional"(): boolean
"setResourceLocation"(resourceLocation0: $ResourceLocation$$Type): void
"shouldConsumeReagent"(): boolean
get "resourceLocation"(): $ResourceLocation
get "dynamic"(): boolean
get "dynamicSource"(): boolean
get "empty"(): boolean
get "manualReturn"(): boolean
get "optional"(): boolean
set "resourceLocation"(value: $ResourceLocation$$Type)
}

export namespace $IRitualReagent {
const probejs$$marker: never
}
export abstract class $IRitualReagent$$Static implements $IRitualReagent {
}
}

declare module "packages/com/mna/api/entities/construct/ai/parameter/$ConstructAITaskParameter" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ConstructParameterTypes, $ConstructParameterTypes$$Type } from "packages/com/mna/api/entities/construct/ai/parameter/$ConstructParameterTypes"

export class $ConstructAITaskParameter {
constructor(string0: string, constructParameterTypes1: $ConstructParameterTypes$$Type)

public "getId"(): string
public "getTooltip"(): $Component
public "getTypeID"(): $ConstructParameterTypes
public "loadData"(compoundTag0: $CompoundTag$$Type): void
public "saveData"(): $CompoundTag
get "id"(): string
get "tooltip"(): $Component
get "typeID"(): $ConstructParameterTypes
}
}

declare module "packages/com/mna/api/spells/parts/$SpellEffect$BlockPlaceResult" {
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $SpellEffect$$Type } from "packages/com/mna/api/spells/parts/$SpellEffect"

export class $SpellEffect$BlockPlaceResult {
readonly "placedAgainst": $Direction
readonly "position": $BlockPos
readonly "success": boolean

constructor(spellEffect0: $SpellEffect$$Type, boolean1: boolean, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type)

}
}

declare module "packages/com/mna/api/events/construct/$ConstructCraftedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $IConstruct, $IConstruct$$Type } from "packages/com/mna/api/entities/construct/$IConstruct"

export class $ConstructCraftedEvent extends $Event {
constructor()
constructor(iConstruct0: $IConstruct$$Type<any>, player1: $Player$$Type)

public "getConstruct"(): $IConstruct<any>
public "getCrafter"(): $Player
get "construct"(): $IConstruct<any>
get "crafter"(): $Player
}
}

declare module "packages/com/mna/api/spells/targeting/$SpellSource" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SpellSource {
constructor(livingEntity0: $LivingEntity$$Type, interactionHand1: $InteractionHand$$Type)
constructor(livingEntity0: $LivingEntity$$Type, interactionHand1: $InteractionHand$$Type, vec32: $Vec3$$Type, vec33: $Vec3$$Type)

public "getBoundingBox"(): $AABB
public "getCaster"(): $LivingEntity
public "getForward"(): $Vec3
public "getHand"(): $InteractionHand
public "getOrigin"(): $Vec3
public "getPlayer"(): $Player
public "hasCasterReference"(): boolean
public "isPlayerCaster"(): boolean
get "boundingBox"(): $AABB
get "caster"(): $LivingEntity
get "forward"(): $Vec3
get "hand"(): $InteractionHand
get "origin"(): $Vec3
get "player"(): $Player
get "playerCaster"(): boolean
}
}

declare module "packages/com/mna/api/entities/$IFactionEnemy" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $HashMap } from "packages/java/util/$HashMap"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $IFaction } from "packages/com/mna/api/faction/$IFaction"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Monster$$Type } from "packages/net/minecraft/world/entity/monster/$Monster"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevelAccessor$$Type } from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $IFactionEnemy<T extends $LivingEntity> {
"applyDamageResists"(damageSource0: $DamageSource$$Type, float1: float): float
"applyInitialSpawnTier"(levelAccessor0: $LevelAccessor$$Type): void
"factionTargetHelpPredicate"(livingEntity0: $LivingEntity$$Type): boolean
"factionTargetPlayerPredicate"(livingEntity0: $LivingEntity$$Type): boolean
"getDamageResists"(): $HashMap<string, integer>
"getFaction"(): $IFaction
"getRaidTarget"(): $Player
"getTier"(): integer
"getTierMax"(): integer
"getTierWeight"(float0: float, float1: float, float2: float): double
"onDespawnDueToDistance"(): void
"onDespawnDueToTargetDeath"(): void
"onKilled"(damageSource0: $DamageSource$$Type): void
"raidTargetDespawn"(): void
"readFactionData"(compoundTag0: $CompoundTag$$Type): void
"setDamageResists"(string0: string, int1: integer): void
"setRaidTarget"(player0: $Player$$Type): void
"setTier"(int0: integer): void
"writeFactionData"(compoundTag0: $CompoundTag$$Type): void
get "damageResists"(): $HashMap<string, integer>
get "faction"(): $IFaction
get "raidTarget"(): $Player
get "tier"(): integer
get "tierMax"(): integer
set "raidTarget"(value: $Player$$Type)
set "tier"(value: integer)
}

export namespace $IFactionEnemy {
function canMnASpawn(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean): boolean
function canMnASpawn(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): boolean
function checkMonsterSpawnRules(entityType0: $EntityType$$Type<$Monster$$Type>, serverLevelAccessor1: $ServerLevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
}
export abstract class $IFactionEnemy$$Static<T extends $LivingEntity> implements $IFactionEnemy<T> {
static "canMnASpawn"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean): boolean
static "canMnASpawn"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): boolean
static "checkMonsterSpawnRules"(entityType0: $EntityType$$Type<$Monster$$Type>, serverLevelAccessor1: $ServerLevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
}
}

declare module "packages/com/mna/api/events/$FactionAllegianceEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $List$$Type } from "packages/java/util/$List"
import { $ArrayList } from "packages/java/util/$ArrayList"
import { $IFaction, $IFaction$$Type } from "packages/com/mna/api/faction/$IFaction"

export class $FactionAllegianceEvent extends $Event {
constructor()
constructor(iFaction0: $IFaction$$Type, list1: $List$$Type<$IFaction$$Type>)

public "getAllegiances"(): $ArrayList<$IFaction>
public "getFaction"(): $IFaction
get "allegiances"(): $ArrayList<$IFaction>
get "faction"(): $IFaction
}
}

declare module "packages/com/mna/api/spells/parts/$SpellEffect" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $SpellTarget$$Type } from "packages/com/mna/api/spells/targeting/$SpellTarget"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $SpellEffect$BlockPlaceResult } from "packages/com/mna/api/spells/parts/$SpellEffect$BlockPlaceResult"
import { $AttributeValuePair, $AttributeValuePair$$Type } from "packages/com/mna/api/spells/attributes/$AttributeValuePair"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SpellContext$$Type } from "packages/com/mna/api/spells/targeting/$SpellContext"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SpellBlacklistResult } from "packages/com/mna/api/spells/base/$SpellBlacklistResult"
import { $Affinity } from "packages/com/mna/api/affinity/$Affinity"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $SpellReagent, $SpellReagent$$Type } from "packages/com/mna/api/spells/$SpellReagent"
import { $IModifiable } from "packages/com/mna/api/spells/base/$IModifiable"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $TriPredicate$$Type } from "packages/net/minecraftforge/common/util/$TriPredicate"
import { $IModifiedSpellPart$$Type } from "packages/com/mna/api/spells/base/$IModifiedSpellPart"
import { $ISpellDefinition$$Type } from "packages/com/mna/api/spells/base/$ISpellDefinition"
import { $Attribute$$Type } from "packages/com/mna/api/spells/attributes/$Attribute"
import { $ComponentApplicationResult } from "packages/com/mna/api/spells/$ComponentApplicationResult"
import { $ISpellComponent } from "packages/com/mna/api/spells/base/$ISpellComponent"
import { $SpellCraftingContext$$Type } from "packages/com/mna/api/spells/$SpellCraftingContext"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $IFaction, $IFaction$$Type } from "packages/com/mna/api/faction/$IFaction"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $SpellSource$$Type } from "packages/com/mna/api/spells/targeting/$SpellSource"
import { $SpellPartTags } from "packages/com/mna/api/spells/$SpellPartTags"

export class $SpellEffect implements $IModifiable<$SpellEffect>, $ISpellComponent {
constructor(resourceLocation0: $ResourceLocation$$Type, ...attributeValuePair1s: $AttributeValuePair$$Type[])

public "ApplyEffect"(spellSource0: $SpellSource$$Type, spellTarget1: $SpellTarget$$Type, iModifiedSpellPart2: $IModifiedSpellPart$$Type<$SpellEffect$$Type>, spellContext3: $SpellContext$$Type): $ComponentApplicationResult
public "SoundEffect"(): $SoundEvent
/** Client only, do not use in server scripts */
public "SpawnParticles"(level0: $Level$$Type, vec31: $Vec3$$Type, int2: integer, player3: $Player$$Type, iSpellDefinition4: $ISpellDefinition$$Type): void
/** Client only, do not use in server scripts */
public "SpawnParticles"(level0: $Level$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type, int3: integer, livingEntity4: $LivingEntity$$Type, iSpellDefinition5: $ISpellDefinition$$Type): void
public "addOptionalReagent"(itemStack0: $ItemStack$$Type, boolean1: boolean, boolean2: boolean, boolean3: boolean, ...iFaction4s: $IFaction$$Type[]): void
public "addOptionalReagent"(itemStack0: $ItemStack$$Type, ...iFaction1s: $IFaction$$Type[]): void
public "addReagent"(itemStack0: $ItemStack$$Type, ...iFaction1s: $IFaction$$Type[]): void
public "addReagent"(itemStack0: $ItemStack$$Type, boolean1: boolean, boolean2: boolean, boolean3: boolean, ...iFaction4s: $IFaction$$Type[]): void
public "addReagentTooltip"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, list2: $List$$Type<$Component$$Type>, spellReagent3: $SpellReagent$$Type): void
public "applyAtChanneledEntityPos"(boolean0: boolean): boolean
public "autoConsumeReagents"(): boolean
public "baselineCooldown"(): integer
public "canBeCastAt"(level0: $Level$$Type, vec31: $Vec3$$Type): $SpellBlacklistResult
public "canBeChanneled"(): boolean
public "canBeOnRandomStaff"(): boolean
public "defaultBlockFace"(): $Direction
public "getAddingModName"(): string
public "getAffinity"(): $Affinity
public "getDescriptionTooltip"(attribute0: $Attribute$$Type): string
public "getFactionRequirement"(): $IFaction
public "getGuiIcon"(): $ResourceLocation
public "getModifiableAttributes"(): $ImmutableList<$AttributeValuePair>
public "getRegistryName"(): $ResourceLocation
public "getRequiredReagents"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type): $List<$SpellReagent>
public "getSoundVolume"(): float
public "getTier"(level0: $Level$$Type): integer
public "getUseTag"(): $SpellPartTags
public "getValidTinkerAffinities"(): $List<$Affinity>
public "initialComplexity"(): float
public "initializeConfigs"(...attributeValuePair0s: $AttributeValuePair$$Type[]): void
public "ire"(): float
public "isBaseMna"(): boolean
public "isCraftable"(spellCraftingContext0: $SpellCraftingContext$$Type): boolean
public "isHellfireBoosted"(attribute0: $Attribute$$Type): boolean
public "isSilverSpell"(): boolean
public "isTargetFriendlyToCaster"(spellSource0: $SpellSource$$Type, entity1: $Entity$$Type): boolean
public "isUseableByPlayers"(): boolean
public "lookupAttributeConfig"(): void
public "magnitudeHealthCheck"(spellSource0: $SpellSource$$Type, spellTarget1: $SpellTarget$$Type, int2: integer, int3: integer): boolean
public "onRegistered"(): void
public "replacesHeldItem"(): boolean
public "requiredXPForRote"(): integer
public "targetsBlocks"(): boolean
public "targetsEntities"(): boolean
public "tryPlaceBlock"(player0: $Player$$Type, serverLevel1: $ServerLevel$$Type, block2: $Block$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type, boolean5: boolean): $SpellEffect$BlockPlaceResult
public "tryPlaceBlock"(player0: $Player$$Type, serverLevel1: $ServerLevel$$Type, block2: $Block$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type, boolean5: boolean, triPredicate6: $TriPredicate$$Type<$Level$$Type, $BlockPos$$Type, $BlockPos$$Type>, biFunction7: $BiFunction$$Type<$BlockPos$$Type, $BlockState$$Type, $BlockState>): $SpellEffect$BlockPlaceResult
public "tryPlaceBlock"(player0: $Player$$Type, serverLevel1: $ServerLevel$$Type, block2: $Block$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type, boolean5: boolean, triPredicate6: $TriPredicate$$Type<$Level$$Type, $BlockPos$$Type, $BlockPos$$Type>): $SpellEffect$BlockPlaceResult
public "tryPlaceBlock"(player0: $Player$$Type, serverLevel1: $ServerLevel$$Type, block2: $Block$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type, boolean5: boolean, biFunction6: $BiFunction$$Type<$BlockPos$$Type, $BlockState$$Type, $BlockState>): $SpellEffect$BlockPlaceResult
get "addingModName"(): string
get "affinity"(): $Affinity
get "factionRequirement"(): $IFaction
get "guiIcon"(): $ResourceLocation
get "modifiableAttributes"(): $ImmutableList<$AttributeValuePair>
get "registryName"(): $ResourceLocation
get "soundVolume"(): float
get "useTag"(): $SpellPartTags
get "validTinkerAffinities"(): $List<$Affinity>
get "baseMna"(): boolean
get "silverSpell"(): boolean
get "useableByPlayers"(): boolean
}
}

declare module "packages/com/mna/api/events/$CalculatingManaCostEvent" {
import { $ISpellDefinition, $ISpellDefinition$$Type } from "packages/com/mna/api/spells/base/$ISpellDefinition"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CalculatingManaCostEvent extends $Event {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, iSpellDefinition1: $ISpellDefinition$$Type, float2: float)

public "getCaster"(): $LivingEntity
public "getManaCost"(): float
public "getSpell"(): $ISpellDefinition
public "setManaCost"(float0: float): void
get "caster"(): $LivingEntity
get "manaCost"(): float
get "spell"(): $ISpellDefinition
set "manaCost"(value: float)
}
}

declare module "packages/com/mna/api/entities/construct/$IConstruct" {
import { $IFluidHandler } from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $SpellTarget$$Type } from "packages/com/mna/api/spells/targeting/$SpellTarget"
import { $Animations$$Type } from "packages/com/mna/api/entities/construct/$Animations"
import { $FluidStack, $FluidStack$$Type } from "packages/net/minecraftforge/fluids/$FluidStack"
import { $DynamicItemFilter$$Type } from "packages/com/mna/api/items/$DynamicItemFilter"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $IItemHandlerModifiable } from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ConstructAITask, $ConstructAITask$$Type } from "packages/com/mna/api/entities/construct/ai/$ConstructAITask"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $AbstractGolem } from "packages/net/minecraft/world/entity/animal/$AbstractGolem"
import { $ConstructSlot$$Type } from "packages/com/mna/api/entities/construct/$ConstructSlot"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List } from "packages/java/util/$List"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ISpellDefinition } from "packages/com/mna/api/spells/base/$ISpellDefinition"
import { $UUID } from "packages/java/util/$UUID"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ConstructCapability$$Type } from "packages/com/mna/api/entities/construct/$ConstructCapability"
import { $IFluidHandler$FluidAction$$Type } from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $IFaction } from "packages/com/mna/api/faction/$IFaction"
import { $IItemHandler } from "packages/net/minecraftforge/items/$IItemHandler"
import { $Tier } from "packages/net/minecraft/world/item/$Tier"
import { $EntityGetter } from "packages/net/minecraft/world/level/$EntityGetter"
import { $OwnableEntity } from "packages/net/minecraft/world/entity/$OwnableEntity"
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Optional } from "packages/java/util/$Optional"
import { $IConstructDiagnostics } from "packages/com/mna/api/entities/construct/$IConstructDiagnostics"
import { $IConstructConstruction } from "packages/com/mna/api/entities/construct/$IConstructConstruction"

export interface $IConstruct<T extends $AbstractGolem> extends $IFluidHandler, $IItemHandlerModifiable, $OwnableEntity {
"asContainer"(): $Container
"asEntity"(): $AbstractGolem
"canDualSweep"(): boolean
"canFluidSpray"(): boolean
"canManaCannonAttack"(): boolean
"canSpellCast"(): boolean
"clear"(ingredient: $Ingredient$$Type): void
"clear"(): void
"clearForcedAnimation"(): void
"count"(ingredient: $Ingredient$$Type): integer
"count"(): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"drain"(int0: integer, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
"drain"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
"dropAllItems"(): void
"expandFluidRange"(): boolean
"extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
"extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
"fill"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): integer
"find"(ingredient: $Ingredient$$Type): integer
"find"(): integer
"forceAnimation"(animations0: $Animations$$Type, boolean1: boolean): void
"getAllItems"(): $List<$ItemStack>
"getAttackDelay"(): integer
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getBlockHarvestLevel"(constructCapability0: $ConstructCapability$$Type): $Tier
"getCarrySize"(): integer
"getCarryingHands"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $InteractionHand[]
"getCarryingHands"(dynamicItemFilter0: $DynamicItemFilter$$Type): $InteractionHand[]
"getCarryingHands"(): $InteractionHand[]
"getCastableSpell"(constructSlot0: $ConstructSlot$$Type): $ISpellDefinition
"getCastableSpells"(): $ISpellDefinition[]
"getConstructData"(): $IConstructConstruction
"getCurrentCommand"(): $ConstructAITask<any>
"getDiagnostics"(): $IConstructDiagnostics
"getDualCannonTarget"(): $Optional<$LivingEntity>
"getEmptyHands"(): $InteractionHand[]
"getEquivalentTier"(): integer
"getFaction"(): $IFaction
"getFluidInTank"(int0: integer): $FluidStack
"getFluidPct"(): float
"getHandWithCapability"(constructCapability0: $ConstructCapability$$Type): $Optional<$InteractionHand>
"getHeight"(): integer
"getIntelligence"(): integer
"getMana"(): float
"getManaPct"(): float
"getMaxMana"(): float
"getOwner"(): $Player
"getOwnerId"(): $UUID
"getOwnerUUID"(): $UUID
"getSlotLimit"(i: integer): integer
"getSlotLimit"(int0: integer): integer
"getSlots"(): integer
"getSlots"(): integer
"getStackInSlot"(i: integer): $ItemStack
"getStackInSlot"(int0: integer): $ItemStack
"getStoredFluidAmount"(): integer
"getTankCapacity"(int0: integer): integer
"getTanks"(): integer
"getTeleportCooldown"(): integer
"getValidAttackTargets"(livingEntity0: $LivingEntity$$Type): $List<$LivingEntity>
"getValidAttackTargets"(): $List<$LivingEntity>
"getWidth"(): integer
"hasItem"(itemStack0: $ItemStack$$Type, boolean1: boolean, boolean2: boolean): boolean
"hasItem"(dynamicItemFilter0: $DynamicItemFilter$$Type): boolean
"hasItem"(resourceLocation0: $ResourceLocation$$Type, int1: integer): boolean
"insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
"insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isDefeated"(): boolean
"isDueling"(): boolean
"isEmpty"(): boolean
"isFishing"(): boolean
"isFluidValid"(int0: integer, fluidStack1: $FluidStack$$Type): boolean
"isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
"isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"isMutable"(): boolean
"isRangedAttacking"(): boolean
"kjs$self"(): $IItemHandler
"level"(): $EntityGetter
"lookTowards"(vec30: $Vec3$$Type): void
"lookTowards"(vec30: $Vec3$$Type, float1: float): void
"performRangedAttack"(livingEntity0: $LivingEntity$$Type): boolean
"pushDiagnosticMessage"(string0: string, resourceLocation1: $ResourceLocation$$Type, boolean2: boolean): void
"pushDiagnosticMessage"(component0: $Component$$Type, resourceLocation1: $ResourceLocation$$Type, boolean2: boolean): void
"pushDiagnosticMessage"(component0: $Component$$Type, resourceLocation1: $ResourceLocation$$Type): void
"pushDiagnosticMessage"(string0: string, resourceLocation1: $ResourceLocation$$Type): void
"resetActions"(): void
"resetSpellCast"(): void
"setAdventuring"(boolean0: boolean): void
"setAngry"(int0: integer): void
"setBanner"(itemStack0: $ItemStack$$Type): void
"setChanged"(): void
"setConcerned"(int0: integer): void
"setConfused"(int0: integer): void
"setCurrentCommand"(player0: $Player$$Type, constructAITask1: $ConstructAITask$$Type<any>): boolean
"setDefeated"(int0: integer): void
"setDualSweeping"(): void
"setEating"(interactionHand0: $InteractionHand$$Type): void
"setFishing"(blockPos0: $BlockPos$$Type): void
"setHappy"(int0: integer): void
"setHat"(itemStack0: $ItemStack$$Type): void
"setHunting"(boolean0: boolean): void
"setMining"(boolean0: boolean): void
"setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
"setTeleportCooldown"(int0: integer): void
"setUnimpressed"(int0: integer): void
"setWatering"(): void
"setupSpellCast"(constructSlot0: $ConstructSlot$$Type): boolean
/** @deprecated */
"setupSpellCast"(boolean0: boolean): boolean
"startSpellCast"(spellTarget0: $SpellTarget$$Type): boolean
"stopFishing"(): void
"tickSpellCast"(): boolean
"validateFriendlyTarget"(livingEntity0: $LivingEntity$$Type): boolean
get "allItems"(): $List<$ItemStack>
get "attackDelay"(): integer
get "carrySize"(): integer
get "carryingHands"(): $InteractionHand[]
get "castableSpells"(): $ISpellDefinition[]
get "constructData"(): $IConstructConstruction
get "currentCommand"(): $ConstructAITask<any>
get "diagnostics"(): $IConstructDiagnostics
get "dualCannonTarget"(): $Optional<$LivingEntity>
get "emptyHands"(): $InteractionHand[]
get "equivalentTier"(): integer
get "faction"(): $IFaction
get "fluidPct"(): float
get "height"(): integer
get "intelligence"(): integer
get "mana"(): float
get "manaPct"(): float
get "maxMana"(): float
get "owner"(): $Player
get "ownerId"(): $UUID
get "ownerUUID"(): $UUID
get "slots"(): integer
get "slots"(): integer
get "storedFluidAmount"(): integer
get "tanks"(): integer
get "teleportCooldown"(): integer
get "validAttackTargets"(): $List<$LivingEntity>
get "width"(): integer
get "defeated"(): boolean
get "dueling"(): boolean
get "empty"(): boolean
get "fishing"(): boolean
get "mutable"(): boolean
get "rangedAttacking"(): boolean
set "adventuring"(value: boolean)
set "angry"(value: integer)
set "banner"(value: $ItemStack$$Type)
set "concerned"(value: integer)
set "confused"(value: integer)
set "defeated"(value: integer)
set "eating"(value: $InteractionHand$$Type)
set "fishing"(value: $BlockPos$$Type)
set "happy"(value: integer)
set "hat"(value: $ItemStack$$Type)
set "hunting"(value: boolean)
set "mining"(value: boolean)
set "teleportCooldown"(value: integer)
set "unimpressed"(value: integer)
set "upSpellCast"(value: $ConstructSlot$$Type)
set "upSpellCast"(value: boolean)
}

export namespace $IConstruct {
const probejs$$marker: never
}
export abstract class $IConstruct$$Static<T extends $AbstractGolem> implements $IConstruct<T> {
}
}

declare module "packages/com/mna/api/spells/$ComponentApplicationResult" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ComponentApplicationResult extends $Enum<$ComponentApplicationResult> {
static readonly "DELAYED": $ComponentApplicationResult
static readonly "FAIL": $ComponentApplicationResult
static readonly "NOT_PRESENT": $ComponentApplicationResult
static readonly "SUCCESS": $ComponentApplicationResult
static readonly "TARGET_ENTITY_SPAWNED": $ComponentApplicationResult
readonly "is_success": boolean

public static "fromBoolean"(boolean0: boolean): $ComponentApplicationResult
public "mergeWith"(componentApplicationResult0: $ComponentApplicationResult$$Type): $ComponentApplicationResult
public static "valueOf"(string0: string): $ComponentApplicationResult
public static "values"(): $ComponentApplicationResult[]
}
}

declare module "packages/com/mna/api/events/$SpellCooldownCalculatingEvent" {
import { $ISpellDefinition, $ISpellDefinition$$Type } from "packages/com/mna/api/spells/base/$ISpellDefinition"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $SpellCooldownCalculatingEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, iSpellDefinition1: $ISpellDefinition$$Type, int2: integer)

public "getCaster"(): $Player
public "getCooldown"(): integer
public "getSpell"(): $ISpellDefinition
public "setCooldown"(int0: integer): void
get "caster"(): $Player
get "cooldown"(): integer
get "spell"(): $ISpellDefinition
set "cooldown"(value: integer)
}
}

declare module "packages/com/mna/api/events/$SpellReagentsEvent" {
import { $ISpellDefinition, $ISpellDefinition$$Type } from "packages/com/mna/api/spells/base/$ISpellDefinition"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ArrayList, $ArrayList$$Type } from "packages/java/util/$ArrayList"
import { $SpellReagent, $SpellReagent$$Type } from "packages/com/mna/api/spells/$SpellReagent"

export class $SpellReagentsEvent extends $Event {
constructor()
constructor(iSpellDefinition0: $ISpellDefinition$$Type, player1: $Player$$Type, arrayList2: $ArrayList$$Type<$SpellReagent$$Type>)

public "getCaster"(): $Player
public "getRequiredReagents"(): $ArrayList<$SpellReagent>
public "getSpell"(): $ISpellDefinition
get "caster"(): $Player
get "requiredReagents"(): $ArrayList<$SpellReagent>
get "spell"(): $ISpellDefinition
}
}

declare module "packages/com/mna/api/spells/attributes/$Attribute" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Attribute extends $Enum<$Attribute> {
static readonly "DAMAGE": $Attribute
static readonly "DELAY": $Attribute
static readonly "DEPTH": $Attribute
static readonly "DURATION": $Attribute
static readonly "HEIGHT": $Attribute
static readonly "LESSER_MAGNITUDE": $Attribute
static readonly "MAGNITUDE": $Attribute
static readonly "PRECISION": $Attribute
static readonly "RADIUS": $Attribute
static readonly "RANGE": $Attribute
static readonly "SPEED": $Attribute
static readonly "WIDTH": $Attribute

public "getLocaleKey"(): string
public static "valueOf"(string0: string): $Attribute
public static "values"(): $Attribute[]
get "localeKey"(): string
}
}

declare module "packages/com/mna/api/recipes/$IMARecipe" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IMARecipe {
"getGuiRepresentationStack"(): $ItemStack
"getRegistryId"(): $ResourceLocation
"getResultItem"(): $ItemStack
"getTier"(): integer
get "guiRepresentationStack"(): $ItemStack
get "registryId"(): $ResourceLocation
get "resultItem"(): $ItemStack
get "tier"(): integer
}

export namespace $IMARecipe {
const probejs$$marker: never
}
export abstract class $IMARecipe$$Static implements $IMARecipe {
}
}

declare module "packages/com/mna/api/particles/parameters/$ParticleBoolean" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ParticleBoolean {
constructor(boolean0: boolean)

public static "deserialize"(string0: string): $ParticleBoolean
public static "deserialize"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $ParticleBoolean
public "serialize"(): string
public static "serialize"(particleBoolean0: $ParticleBoolean$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "value"(): boolean
}
}

declare module "packages/com/mna/api/events/$AffinityChangedEvent" {
import { $Affinity, $Affinity$$Type } from "packages/com/mna/api/affinity/$Affinity"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $AffinityChangedEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, affinity1: $Affinity$$Type, float2: float, float3: float)

public "getAffinity"(): $Affinity
public "getCurrentAmount"(): float
public "getPlayer"(): $Player
public "getShift"(): float
public "setShift"(float0: float): void
get "affinity"(): $Affinity
get "currentAmount"(): float
get "player"(): $Player
get "shift"(): float
set "shift"(value: float)
}
}

declare module "packages/com/mna/api/affinity/$Affinity" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Affinity extends $Enum<$Affinity> {
static readonly "ARCANE": $Affinity
static readonly "BLOOD": $Affinity
static readonly "EARTH": $Affinity
static readonly "ENDER": $Affinity
static readonly "FIRE": $Affinity
static readonly "HELLFIRE": $Affinity
static readonly "ICE": $Affinity
static readonly "LIGHTNING": $Affinity
static readonly "UNKNOWN": $Affinity
static readonly "WATER": $Affinity
static readonly "WIND": $Affinity

public static "CoreSix"(): $Affinity[]
public "getAdjacentLeft"(): $Affinity
public "getAdjacentRight"(): $Affinity
public "getColor"(): integer[]
public "getOpposite"(): $Affinity
public "getSecondaryColor"(): integer[]
public "getShiftAffinity"(): $Affinity
public static "valueOf"(string0: string): $Affinity
public static "values"(): $Affinity[]
get "adjacentLeft"(): $Affinity
get "adjacentRight"(): $Affinity
get "color"(): integer[]
get "opposite"(): $Affinity
get "secondaryColor"(): integer[]
get "shiftAffinity"(): $Affinity
}
}

