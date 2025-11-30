declare module "packages/net/minecraft/stats/$ServerStatsCounter" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $File$$Type } from "packages/java/io/$File"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $StatsCounter } from "packages/net/minecraft/stats/$StatsCounter"
import { $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"

export class $ServerStatsCounter extends $StatsCounter {
constructor(minecraftServer0: $MinecraftServer$$Type, file1: $File$$Type)

public "markAllDirty"(): void
public "parseLocal"(dataFixer0: $DataFixer$$Type, string1: string): void
public "save"(): void
public "sendStats"(serverPlayer0: $ServerPlayer$$Type): void
}
}

declare module "packages/net/minecraft/stats/$Stat" {
import { $StatType, $StatType$$Type } from "packages/net/minecraft/stats/$StatType"
import { $ObjectiveCriteria } from "packages/net/minecraft/world/scores/criteria/$ObjectiveCriteria"

export class $Stat<T> extends $ObjectiveCriteria {
public static "buildName"<T>(statType0: $StatType$$Type<T>, t1: T): string
public "format"(int0: integer): string
public "getType"(): $StatType<T>
public "getValue"(): T
get "type"(): $StatType<T>
get "value"(): T
}
}

declare module "packages/net/minecraft/stats/$StatFormatter" {
import { $DecimalFormat } from "packages/java/text/$DecimalFormat"

export interface $StatFormatter {
"format"(int0: integer): string
}

export namespace $StatFormatter {
const DECIMAL_FORMAT: $DecimalFormat
const DEFAULT: $StatFormatter
const DISTANCE: $StatFormatter
const DIVIDE_BY_TEN: $StatFormatter
const TIME: $StatFormatter
}
export abstract class $StatFormatter$$Static implements $StatFormatter {
static readonly "DECIMAL_FORMAT": $DecimalFormat
static readonly "DEFAULT": $StatFormatter
static readonly "DISTANCE": $StatFormatter
static readonly "DIVIDE_BY_TEN": $StatFormatter
static readonly "TIME": $StatFormatter

}
}

declare module "packages/net/minecraft/stats/$StatsCounter" {
import { $Stat$$Type } from "packages/net/minecraft/stats/$Stat"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $StatType$$Type } from "packages/net/minecraft/stats/$StatType"

export class $StatsCounter {
constructor()

public "getValue"(stat0: $Stat$$Type<any>): integer
public "getValue"<T>(statType0: $StatType$$Type<T>, t1: T): integer
public "increment"(player0: $Player$$Type, stat1: $Stat$$Type<any>, int2: integer): void
public "setValue"(player0: $Player$$Type, stat1: $Stat$$Type<any>, int2: integer): void
}
}

declare module "packages/net/minecraft/stats/$Stats" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"
import { $StatsAccessor } from "packages/vazkii/botania/mixin/$StatsAccessor"
import { $StatFormatter$$Type } from "packages/net/minecraft/stats/$StatFormatter"
import { $StatType } from "packages/net/minecraft/stats/$StatType"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $Stats implements $StatsAccessor {
static readonly "ANIMALS_BRED": $ResourceLocation
static readonly "AVIATE_ONE_CM": $ResourceLocation
static readonly "BELL_RING": $ResourceLocation
static readonly "BLOCK_MINED": $StatType<$Block>
static readonly "BOAT_ONE_CM": $ResourceLocation
static readonly "CLEAN_ARMOR": $ResourceLocation
static readonly "CLEAN_BANNER": $ResourceLocation
static readonly "CLEAN_SHULKER_BOX": $ResourceLocation
static readonly "CLIMB_ONE_CM": $ResourceLocation
static readonly "CROUCH_ONE_CM": $ResourceLocation
static readonly "CROUCH_TIME": $ResourceLocation
static readonly "CUSTOM": $StatType<$ResourceLocation>
static readonly "DAMAGE_ABSORBED": $ResourceLocation
static readonly "DAMAGE_BLOCKED_BY_SHIELD": $ResourceLocation
static readonly "DAMAGE_DEALT": $ResourceLocation
static readonly "DAMAGE_DEALT_ABSORBED": $ResourceLocation
static readonly "DAMAGE_DEALT_RESISTED": $ResourceLocation
static readonly "DAMAGE_RESISTED": $ResourceLocation
static readonly "DAMAGE_TAKEN": $ResourceLocation
static readonly "DEATHS": $ResourceLocation
static readonly "DROP": $ResourceLocation
static readonly "EAT_CAKE_SLICE": $ResourceLocation
static readonly "ENCHANT_ITEM": $ResourceLocation
static readonly "ENTITY_KILLED": $StatType<$EntityType<any>>
static readonly "ENTITY_KILLED_BY": $StatType<$EntityType<any>>
static readonly "FALL_ONE_CM": $ResourceLocation
static readonly "FILL_CAULDRON": $ResourceLocation
static readonly "FISH_CAUGHT": $ResourceLocation
static readonly "FLY_ONE_CM": $ResourceLocation
static readonly "HORSE_ONE_CM": $ResourceLocation
static readonly "INSPECT_DISPENSER": $ResourceLocation
static readonly "INSPECT_DROPPER": $ResourceLocation
static readonly "INSPECT_HOPPER": $ResourceLocation
static readonly "INTERACT_WITH_ANVIL": $ResourceLocation
static readonly "INTERACT_WITH_BEACON": $ResourceLocation
static readonly "INTERACT_WITH_BLAST_FURNACE": $ResourceLocation
static readonly "INTERACT_WITH_BREWINGSTAND": $ResourceLocation
static readonly "INTERACT_WITH_CAMPFIRE": $ResourceLocation
static readonly "INTERACT_WITH_CARTOGRAPHY_TABLE": $ResourceLocation
static readonly "INTERACT_WITH_CRAFTING_TABLE": $ResourceLocation
static readonly "INTERACT_WITH_FURNACE": $ResourceLocation
static readonly "INTERACT_WITH_GRINDSTONE": $ResourceLocation
static readonly "INTERACT_WITH_LECTERN": $ResourceLocation
static readonly "INTERACT_WITH_LOOM": $ResourceLocation
static readonly "INTERACT_WITH_SMITHING_TABLE": $ResourceLocation
static readonly "INTERACT_WITH_SMOKER": $ResourceLocation
static readonly "INTERACT_WITH_STONECUTTER": $ResourceLocation
static readonly "ITEM_BROKEN": $StatType<$Item>
static readonly "ITEM_CRAFTED": $StatType<$Item>
static readonly "ITEM_DROPPED": $StatType<$Item>
static readonly "ITEM_PICKED_UP": $StatType<$Item>
static readonly "ITEM_USED": $StatType<$Item>
static readonly "JUMP": $ResourceLocation
static readonly "LEAVE_GAME": $ResourceLocation
static readonly "MINECART_ONE_CM": $ResourceLocation
static readonly "MOB_KILLS": $ResourceLocation
static readonly "OPEN_BARREL": $ResourceLocation
static readonly "OPEN_CHEST": $ResourceLocation
static readonly "OPEN_ENDERCHEST": $ResourceLocation
static readonly "OPEN_SHULKER_BOX": $ResourceLocation
static readonly "PIG_ONE_CM": $ResourceLocation
static readonly "PLAYER_KILLS": $ResourceLocation
static readonly "PLAY_NOTEBLOCK": $ResourceLocation
static readonly "PLAY_RECORD": $ResourceLocation
static readonly "PLAY_TIME": $ResourceLocation
static readonly "POT_FLOWER": $ResourceLocation
static readonly "RAID_TRIGGER": $ResourceLocation
static readonly "RAID_WIN": $ResourceLocation
static readonly "SLEEP_IN_BED": $ResourceLocation
static readonly "SPRINT_ONE_CM": $ResourceLocation
static readonly "STRIDER_ONE_CM": $ResourceLocation
static readonly "SWIM_ONE_CM": $ResourceLocation
static readonly "TALKED_TO_VILLAGER": $ResourceLocation
static readonly "TARGET_HIT": $ResourceLocation
static readonly "TIME_SINCE_DEATH": $ResourceLocation
static readonly "TIME_SINCE_REST": $ResourceLocation
static readonly "TOTAL_WORLD_TIME": $ResourceLocation
static readonly "TRADED_WITH_VILLAGER": $ResourceLocation
static readonly "TRIGGER_TRAPPED_CHEST": $ResourceLocation
static readonly "TUNE_NOTEBLOCK": $ResourceLocation
static readonly "USE_CAULDRON": $ResourceLocation
static readonly "WALK_ONE_CM": $ResourceLocation
static readonly "WALK_ON_WATER_ONE_CM": $ResourceLocation
static readonly "WALK_UNDER_WATER_ONE_CM": $ResourceLocation

constructor()

public static "makeCustomStat"(string0: string, statFormatter1: $StatFormatter$$Type): $ResourceLocation
}
}

declare module "packages/net/minecraft/stats/$ServerRecipeBook" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $RecipeManager$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $RecipeBook } from "packages/net/minecraft/stats/$RecipeBook"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ServerRecipeBook extends $RecipeBook {
static readonly "RECIPE_BOOK_TAG": string

constructor()

public "addRecipes"(collection0: $Collection$$Type<$Recipe$$Type<any>>, serverPlayer1: $ServerPlayer$$Type): integer
public "fromNbt"(compoundTag0: $CompoundTag$$Type, recipeManager1: $RecipeManager$$Type): void
public "removeRecipes"(collection0: $Collection$$Type<$Recipe$$Type<any>>, serverPlayer1: $ServerPlayer$$Type): integer
public "sendInitialRecipeBook"(serverPlayer0: $ServerPlayer$$Type): void
public "toNbt"(): $CompoundTag
}
}

declare module "packages/net/minecraft/stats/$RecipeBook" {
import { $RecipeBookType$$Type } from "packages/net/minecraft/world/inventory/$RecipeBookType"
import { $RecipeBookSettings, $RecipeBookSettings$$Type } from "packages/net/minecraft/stats/$RecipeBookSettings"
import { $RecipeBookMenu$$Type } from "packages/net/minecraft/world/inventory/$RecipeBookMenu"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeBook {
constructor()

public "add"(recipe0: $Recipe$$Type<any>): void
public "addHighlight"(recipe0: $Recipe$$Type<any>): void
public "contains"(recipe0: $Recipe$$Type<any>): boolean
public "contains"(resourceLocation0: $ResourceLocation$$Type): boolean
public "copyOverData"(recipeBook0: $RecipeBook$$Type): void
public "getBookSettings"(): $RecipeBookSettings
public "isFiltering"(recipeBookMenu0: $RecipeBookMenu$$Type<any>): boolean
public "isFiltering"(recipeBookType0: $RecipeBookType$$Type): boolean
public "isOpen"(recipeBookType0: $RecipeBookType$$Type): boolean
public "remove"(recipe0: $Recipe$$Type<any>): void
public "removeHighlight"(recipe0: $Recipe$$Type<any>): void
public "setBookSetting"(recipeBookType0: $RecipeBookType$$Type, boolean1: boolean, boolean2: boolean): void
public "setBookSettings"(recipeBookSettings0: $RecipeBookSettings$$Type): void
public "setFiltering"(recipeBookType0: $RecipeBookType$$Type, boolean1: boolean): void
public "setOpen"(recipeBookType0: $RecipeBookType$$Type, boolean1: boolean): void
public "willHighlight"(recipe0: $Recipe$$Type<any>): boolean
get "bookSettings"(): $RecipeBookSettings
set "bookSettings"(value: $RecipeBookSettings$$Type)
}
}

declare module "packages/net/minecraft/stats/$RecipeBookSettings" {
import { $RecipeBookType$$Type } from "packages/net/minecraft/world/inventory/$RecipeBookType"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $RecipeBookSettings {
constructor()

public static "addTagsForType"(recipeBookType0: $RecipeBookType$$Type, string1: string, string2: string): void
public "copy"(): $RecipeBookSettings
public "isFiltering"(recipeBookType0: $RecipeBookType$$Type): boolean
public "isOpen"(recipeBookType0: $RecipeBookType$$Type): boolean
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $RecipeBookSettings
public static "read"(compoundTag0: $CompoundTag$$Type): $RecipeBookSettings
public "replaceFrom"(recipeBookSettings0: $RecipeBookSettings$$Type): void
public "setFiltering"(recipeBookType0: $RecipeBookType$$Type, boolean1: boolean): void
public "setOpen"(recipeBookType0: $RecipeBookType$$Type, boolean1: boolean): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "write"(compoundTag0: $CompoundTag$$Type): void
}
}

