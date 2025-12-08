declare module "packages/fuzs/puzzleslib/mixin/accessor/$ForgeRegistryForgeAccessor" {
import { $IForgeRegistry$AddCallback, $IForgeRegistry$AddCallback$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback"

export interface $ForgeRegistryForgeAccessor<V> {
"puzzleslib$getAdd"(): $IForgeRegistry$AddCallback<V>
"puzzleslib$setAdd"(addCallback0: $IForgeRegistry$AddCallback$$Type<V>): void
}

export namespace $ForgeRegistryForgeAccessor {
const probejs$$marker: never
}
export abstract class $ForgeRegistryForgeAccessor$$Static<V> implements $ForgeRegistryForgeAccessor<V> {
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$BlockAccessor" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"

export interface $BlockAccessor {
"puzzleslib$setItem"(item0: $Item$$Type): void
}

export namespace $BlockAccessor {
const probejs$$marker: never
}
export abstract class $BlockAccessor$$Static implements $BlockAccessor {
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$AbstractContainerMenuAccessor" {
import { $Slot, $Slot$$Type } from "packages/net/minecraft/world/inventory/$Slot"

export interface $AbstractContainerMenuAccessor {
"puzzleslib$callAddSlot"(slot0: $Slot$$Type): $Slot
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerMenuAccessor$$Static implements $AbstractContainerMenuAccessor {
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$BlockItemAccessor" {
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockItemAccessor {
"puzzleslib$setBlock"(block0: $Block$$Type): void
}

export namespace $BlockItemAccessor {
const probejs$$marker: never
}
export abstract class $BlockItemAccessor$$Static implements $BlockItemAccessor {
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$FireBlockForgeAccessor" {
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export interface $FireBlockForgeAccessor {
"puzzleslib$setFlammable"(block0: $Block$$Type, int1: integer, int2: integer): void
}

export namespace $FireBlockForgeAccessor {
const probejs$$marker: never
}
export abstract class $FireBlockForgeAccessor$$Static implements $FireBlockForgeAccessor {
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$LootTableForgeAccessor" {
import { $List } from "packages/java/util/$List"
import { $LootPool } from "packages/net/minecraft/world/level/storage/loot/$LootPool"

export interface $LootTableForgeAccessor {
"puzzleslib$getPools"(): $List<$LootPool>
}

export namespace $LootTableForgeAccessor {
const probejs$$marker: never
}
export abstract class $LootTableForgeAccessor$$Static implements $LootTableForgeAccessor {
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$BiomeSpecialEffectsBuilderForgeAccessor" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Music$$Type } from "packages/net/minecraft/sounds/$Music"
import { $AmbientMoodSettings$$Type } from "packages/net/minecraft/world/level/biome/$AmbientMoodSettings"
import { $AmbientParticleSettings$$Type } from "packages/net/minecraft/world/level/biome/$AmbientParticleSettings"
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $AmbientAdditionsSettings$$Type } from "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings"

export interface $BiomeSpecialEffectsBuilderForgeAccessor {
"puzzleslib$setAmbientAdditionsSettings"(optional0: $Optional$$Type<$AmbientAdditionsSettings$$Type>): void
"puzzleslib$setAmbientLoopSoundEvent"(optional0: $Optional$$Type<$Holder$$Type<$SoundEvent$$Type>>): void
"puzzleslib$setAmbientMoodSettings"(optional0: $Optional$$Type<$AmbientMoodSettings$$Type>): void
"puzzleslib$setAmbientParticle"(optional0: $Optional$$Type<$AmbientParticleSettings$$Type>): void
"puzzleslib$setBackgroundMusic"(optional0: $Optional$$Type<$Music$$Type>): void
"puzzleslib$setFoliageColorOverride"(optional0: $Optional$$Type<integer>): void
"puzzleslib$setGrassColorOverride"(optional0: $Optional$$Type<integer>): void
}

export namespace $BiomeSpecialEffectsBuilderForgeAccessor {
const probejs$$marker: never
}
export abstract class $BiomeSpecialEffectsBuilderForgeAccessor$$Static implements $BiomeSpecialEffectsBuilderForgeAccessor {
}
}

declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ModelBakeryAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModelBakeryAccessor {
}

export namespace $ModelBakeryAccessor {
const probejs$$marker: never
}
export abstract class $ModelBakeryAccessor$$Static implements $ModelBakeryAccessor {
}
}

declare module "packages/fuzs/puzzleslib/impl/data/$FileHelperDataProvider" {
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"

export interface $FileHelperDataProvider {
"puzzleslib$setExistingFileHelper"(existingFileHelper0: $ExistingFileHelper$$Type): void
}

export namespace $FileHelperDataProvider {
const probejs$$marker: never
}
export abstract class $FileHelperDataProvider$$Static implements $FileHelperDataProvider {
}
}

declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$TooltipAccessor" {
import { $FormattedCharSequence$$Type } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $List$$Type } from "packages/java/util/$List"

export interface $TooltipAccessor {
"puzzleslib$setCachedTooltip"(list0: $List$$Type<$FormattedCharSequence$$Type>): void
}

export namespace $TooltipAccessor {
const probejs$$marker: never
}
export abstract class $TooltipAccessor$$Static implements $TooltipAccessor {
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$MobSpawnSettingsBuilderForgeAccessor" {
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"
import { $MobSpawnSettings$MobSpawnCost } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import { $Map } from "packages/java/util/$Map"

export interface $MobSpawnSettingsBuilderForgeAccessor {
"puzzleslib$getMobSpawnCosts"(): $Map<$EntityType<any>, $MobSpawnSettings$MobSpawnCost>
}

export namespace $MobSpawnSettingsBuilderForgeAccessor {
const probejs$$marker: never
}
export abstract class $MobSpawnSettingsBuilderForgeAccessor$$Static implements $MobSpawnSettingsBuilderForgeAccessor {
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$SimpleContainerAccessor" {
import { $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $SimpleContainerAccessor {
"puzzleslib$setItems"(nonNullList0: $NonNullList$$Type<$ItemStack$$Type>): void
"puzzleslib$setSize"(int0: integer): void
}

export namespace $SimpleContainerAccessor {
const probejs$$marker: never
}
export abstract class $SimpleContainerAccessor$$Static implements $SimpleContainerAccessor {
}
}

declare module "packages/fuzs/puzzleslib/impl/event/$LootTableModifyEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $LootPool$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootPool"
import { $LootDataManager, $LootDataManager$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LootTable$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootTable"

export class $LootTableModifyEvent extends $Event {
constructor()
constructor(lootDataManager0: $LootDataManager$$Type, resourceLocation1: $ResourceLocation$$Type, lootTable2: $LootTable$$Type)

public "addPool"(lootPool0: $LootPool$$Type): void
public "getIdentifier"(): $ResourceLocation
public "getLootDataManager"(): $LootDataManager
public "removePool"(int0: integer): boolean
get "identifier"(): $ResourceLocation
get "lootDataManager"(): $LootDataManager
}
}

declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$BlockColorsForgeAccessor" {
import { $BlockColor } from "packages/net/minecraft/client/color/block/$BlockColor"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $Map } from "packages/java/util/$Map"

export interface $BlockColorsForgeAccessor {
"puzzleslib$getBlockColors"(): $Map<$Holder$Reference<$Block>, $BlockColor>
}

export namespace $BlockColorsForgeAccessor {
const probejs$$marker: never
}
export abstract class $BlockColorsForgeAccessor$$Static implements $BlockColorsForgeAccessor {
}
}

declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ItemForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemForgeAccessor {
"puzzleslib$getRenderProperties"(): any
"puzzleslib$setRenderProperties"(object0: any): void
}

export namespace $ItemForgeAccessor {
const probejs$$marker: never
}
export abstract class $ItemForgeAccessor$$Static implements $ItemForgeAccessor {
}
}

declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ItemColorsForgeAccessor" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $ItemColor } from "packages/net/minecraft/client/color/item/$ItemColor"
import { $Map } from "packages/java/util/$Map"

export interface $ItemColorsForgeAccessor {
"puzzleslib$getItemColors"(): $Map<$Holder$Reference<$Item>, $ItemColor>
}

export namespace $ItemColorsForgeAccessor {
const probejs$$marker: never
}
export abstract class $ItemColorsForgeAccessor$$Static implements $ItemColorsForgeAccessor {
}
}

