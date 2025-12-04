declare module "packages/snownee/lychee/mixin/$LootParamsBuilderAccess" {
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $Map } from "packages/java/util/$Map"

export interface $LootParamsBuilderAccess {
"getParams"(): $Map<$LootContextParam<any>, any>
get "params"(): $Map<$LootContextParam<any>, any>
}

export namespace $LootParamsBuilderAccess {
const probejs$$marker: never
}
export abstract class $LootParamsBuilderAccess$$Static implements $LootParamsBuilderAccess {
}
}

declare module "packages/snownee/lychee/core/contextual/$CustomCondition$Test" {
import { $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $LycheeContext$$Type } from "packages/snownee/lychee/core/$LycheeContext"

export interface $CustomCondition$Test {
"test"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): integer
}

export namespace $CustomCondition$Test {
const probejs$$marker: never
}
export abstract class $CustomCondition$Test$$Static implements $CustomCondition$Test {
}
}

declare module "packages/snownee/lychee/core/recipe/$ILycheeRecipe" {
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Reference$$Type } from "packages/snownee/lychee/core/$Reference"
import { $ILycheeRecipe$NBTPatchContext } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe$NBTPatchContext"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $BlockPredicate } from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import { $IntList } from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import { $Stream, $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $JsonPointer, $JsonPointer$$Type } from "packages/snownee/lychee/util/json/$JsonPointer"
import { $ContextualHolder } from "packages/snownee/lychee/core/contextual/$ContextualHolder"
import { $LycheeContext, $LycheeContext$$Type } from "packages/snownee/lychee/core/$LycheeContext"
import { $PostAction, $PostAction$$Type } from "packages/snownee/lychee/core/post/$PostAction"
import { $Map } from "packages/java/util/$Map"

export interface $ILycheeRecipe<C extends $LycheeContext> {
"applyPostActions"(lycheeContext0: $LycheeContext$$Type, int1: integer): void
"defaultItemPointer"(): $JsonPointer
"getActionGroups"(): $Map<$JsonPointer, $List<$PostAction>>
"getAllActions"(): $Stream<$PostAction>
"getBlockInputs"(): $List<$BlockPredicate>
"getBlockOutputs"(): $List<$BlockPredicate>
"getComment"(): string
"getContextualHolder"(): $ContextualHolder
"getItemIndexes"(reference0: $Reference$$Type): $IntList
"getItemIndexes"(jsonPointer0: $JsonPointer$$Type): $IntList
"getPostActions"(): $Stream<$PostAction>
"isActionPath"(jsonPointer0: $JsonPointer$$Type): boolean
"lychee$getId"(): $ResourceLocation
"showInRecipeViewer"(): boolean
"showingActionsCount"(): integer
get "actionGroups"(): $Map<$JsonPointer, $List<$PostAction>>
get "allActions"(): $Stream<$PostAction>
get "blockInputs"(): $List<$BlockPredicate>
get "blockOutputs"(): $List<$BlockPredicate>
get "comment"(): string
get "contextualHolder"(): $ContextualHolder
get "postActions"(): $Stream<$PostAction>
}

export namespace $ILycheeRecipe {
const ITEM_IN: $JsonPointer
const ITEM_OUT: $JsonPointer
const POST: $JsonPointer
const RESULT: $JsonPointer
const patchContexts: $Map<$ResourceLocation, $ILycheeRecipe$NBTPatchContext>
function filterHidden(stream0: $Stream$$Type<$PostAction$$Type>): $Stream<$PostAction>
function processActionGroup(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonPointer1: $JsonPointer$$Type, list2: $List$$Type<$PostAction$$Type>, jsonObject3: $JsonObject$$Type): $JsonElement
function processActions(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonObject1: $JsonObject$$Type): void
}
export abstract class $ILycheeRecipe$$Static<C extends $LycheeContext> implements $ILycheeRecipe<C> {
static readonly "ITEM_IN": $JsonPointer
static readonly "ITEM_OUT": $JsonPointer
static readonly "POST": $JsonPointer
static readonly "RESULT": $JsonPointer
static readonly "patchContexts": $Map<$ResourceLocation, $ILycheeRecipe$NBTPatchContext>

static "filterHidden"(stream0: $Stream$$Type<$PostAction$$Type>): $Stream<$PostAction>
static "processActionGroup"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonPointer1: $JsonPointer$$Type, list2: $List$$Type<$PostAction$$Type>, jsonObject3: $JsonObject$$Type): $JsonElement
static "processActions"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonObject1: $JsonObject$$Type): void
}
}

declare module "packages/snownee/lychee/mixin/$ShapedRecipeAccess" {
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ShapedRecipeAccess {
"callMatches"(craftingContainer0: $CraftingContainer$$Type, int1: integer, int2: integer, boolean3: boolean): boolean
"getResult"(): $ItemStack
get "result"(): $ItemStack
}

export namespace $ShapedRecipeAccess {
const probejs$$marker: never
}
export abstract class $ShapedRecipeAccess$$Static implements $ShapedRecipeAccess {
}
}

declare module "packages/snownee/lychee/mixin/$IntsAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntsAccess {
}

export namespace $IntsAccess {
const probejs$$marker: never
}
export abstract class $IntsAccess$$Static implements $IntsAccess {
}
}

declare module "packages/snownee/lychee/mixin/$DoublesAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoublesAccess {
}

export namespace $DoublesAccess {
const probejs$$marker: never
}
export abstract class $DoublesAccess$$Static implements $DoublesAccess {
}
}

declare module "packages/snownee/lychee/core/contextual/$CustomCondition" {
import { $ContextualConditionType } from "packages/snownee/lychee/core/contextual/$ContextualConditionType"
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ContextualCondition } from "packages/snownee/lychee/core/contextual/$ContextualCondition"
import { $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $InteractionResult, $InteractionResult$$Type } from "packages/net/minecraft/world/$InteractionResult"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BiFunction, $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $MutableComponent, $MutableComponent$$Type } from "packages/net/minecraft/network/chat/$MutableComponent"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $CustomCondition$Test, $CustomCondition$Test$$Type } from "packages/snownee/lychee/core/contextual/$CustomCondition$Test"
import { $List$$Type } from "packages/java/util/$List"
import { $LycheeContext$$Type } from "packages/snownee/lychee/core/$LycheeContext"

export class $CustomCondition implements $ContextualCondition {
readonly "data": $JsonObject

constructor(jsonObject0: $JsonObject$$Type)

public "appendTooltips"(list0: $List$$Type<$Component$$Type>, level1: $Level$$Type, player2: $Player$$Type, int3: integer, boolean4: boolean): void
public static "desc"(list0: $List$$Type<$Component$$Type>, interactionResult1: $InteractionResult$$Type, int2: integer, mutableComponent3: $MutableComponent$$Type): void
public "getDescription"(boolean0: boolean): $MutableComponent
public "getType"(): $ContextualConditionType<any>
public "makeDescriptionId"(boolean0: boolean): string
public static "parse"(jsonObject0: $JsonObject$$Type): $ContextualCondition
public "showingCount"(): integer
public "test"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): integer
public "testInTooltips"(level0: $Level$$Type, player1: $Player$$Type): $InteractionResult
public "toJson"(): $JsonObject
get "testFunc"(): $CustomCondition$Test
set "testFunc"(value: $CustomCondition$Test$$Type)
get "testInTooltipsFunc"(): $BiFunction<$Level, $Player, $InteractionResult>
set "testInTooltipsFunc"(value: $BiFunction$$Type<$Level$$Type, $Player$$Type, $InteractionResult$$Type>)
get "type"(): $ContextualConditionType<any>
}
}

declare module "packages/snownee/lychee/core/$ActionRuntime" {
import { $LinkedList } from "packages/java/util/$LinkedList"
import { $Delay$LycheeMarker, $Delay$LycheeMarker$$Type } from "packages/snownee/lychee/core/post/$Delay$LycheeMarker"
import { $Job } from "packages/snownee/lychee/core/$Job"
import { $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $ActionRuntime$State, $ActionRuntime$State$$Type } from "packages/snownee/lychee/core/$ActionRuntime$State"
import { $LycheeContext$$Type } from "packages/snownee/lychee/core/$LycheeContext"

export class $ActionRuntime {
readonly "jobs": $LinkedList<$Job>

constructor()

public "run"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type): void
get "doDefault"(): boolean
set "doDefault"(value: boolean)
get "marker"(): $Delay$LycheeMarker
set "marker"(value: $Delay$LycheeMarker$$Type)
get "state"(): $ActionRuntime$State
set "state"(value: $ActionRuntime$State$$Type)
}
}

declare module "packages/snownee/lychee/core/$ActionRuntime$State" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ActionRuntime$State extends $Enum<$ActionRuntime$State> {
static readonly "PAUSED": $ActionRuntime$State
static readonly "RUNNING": $ActionRuntime$State
static readonly "STOPPED": $ActionRuntime$State

public static "valueOf"(string0: string): $ActionRuntime$State
public static "values"(): $ActionRuntime$State[]
}
}

declare module "packages/snownee/lychee/mixin/$CraftingMenuAccess" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $ContainerLevelAccess } from "packages/net/minecraft/world/inventory/$ContainerLevelAccess"

export interface $CraftingMenuAccess {
"getAccess"(): $ContainerLevelAccess
"getPlayer"(): $Player
get "access"(): $ContainerLevelAccess
get "player"(): $Player
}

export namespace $CraftingMenuAccess {
const probejs$$marker: never
}
export abstract class $CraftingMenuAccess$$Static implements $CraftingMenuAccess {
}
}

declare module "packages/snownee/lychee/compat/kubejs/$CustomActionEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $ILycheeRecipe, $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $ILycheeRecipe$NBTPatchContext, $ILycheeRecipe$NBTPatchContext$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe$NBTPatchContext"
import { $CustomAction, $CustomAction$$Type } from "packages/snownee/lychee/core/post/$CustomAction"
import { $Map } from "packages/java/util/$Map"

export class $CustomActionEventJS extends $EventJS {
readonly "action": $CustomAction
readonly "data": $Map<any, any>
readonly "id": string
readonly "patchContext": $ILycheeRecipe$NBTPatchContext
readonly "recipe": $ILycheeRecipe<any>

constructor(string0: string, customAction1: $CustomAction$$Type, iLycheeRecipe2: $ILycheeRecipe$$Type<any>, nBTPatchContext3: $ILycheeRecipe$NBTPatchContext$$Type)

}
}

declare module "packages/snownee/lychee/core/$EmptyContainer" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $List } from "packages/java/util/$List"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export class $EmptyContainer implements $Container {
constructor()

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "setChanged"(): void
public "setChanged"(): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/snownee/lychee/mixin/$PointedDripstoneBlockAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PointedDripstoneBlockAccess {
}

export namespace $PointedDripstoneBlockAccess {
const probejs$$marker: never
}
export abstract class $PointedDripstoneBlockAccess$$Static implements $PointedDripstoneBlockAccess {
}
}

declare module "packages/snownee/lychee/core/recipe/$ILycheeRecipe$NBTPatchContext" {
import { $Reference$$Type } from "packages/snownee/lychee/core/$Reference"
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $IntCollection, $IntCollection$$Type } from "packages/it/unimi/dsi/fastutil/ints/$IntCollection"
import { $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $Record } from "packages/java/lang/$Record"
import { $JsonPointer, $JsonPointer$$Type } from "packages/snownee/lychee/util/json/$JsonPointer"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Object2IntMap, $Object2IntMap$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"

export class $ILycheeRecipe$NBTPatchContext extends $Record {
constructor(template: $JsonObject$$Type, usedIndexes: $IntCollection$$Type, splits: $Object2IntMap$$Type<$JsonPointer$$Type>)

public "convertPath"(jsonPointer0: $JsonPointer$$Type, biFunction1: $BiFunction$$Type<string, string, string>): $JsonPointer
public "countTargets"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonPointer1: $JsonPointer$$Type): integer
public "countTargets"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, reference1: $Reference$$Type): integer
public "splits"(): $Object2IntMap<$JsonPointer>
public "template"(): $JsonObject
public "usedIndexes"(): $IntCollection
}
}

declare module "packages/snownee/lychee/core/post/$PostAction" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ILycheeRecipe$NBTPatchContext$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe$NBTPatchContext"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $List } from "packages/java/util/$List"
import { $BlockPredicate } from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import { $JsonPointer$$Type } from "packages/snownee/lychee/util/json/$JsonPointer"
import { $ContextualHolder } from "packages/snownee/lychee/core/contextual/$ContextualHolder"
import { $LycheeContext$$Type } from "packages/snownee/lychee/core/$LycheeContext"
import { $PostActionType } from "packages/snownee/lychee/core/post/$PostActionType"

export class $PostAction extends $ContextualHolder {
constructor()

public "canRepeat"(): boolean
public "doApply"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): void
public "getBlockOutputs"(): $List<$BlockPredicate>
public "getDisplayName"(): $Component
public "getItemOutputs"(): $List<$ItemStack>
public "getType"(): $PostActionType<any>
public "getUsedPointers"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, consumer1: $Consumer$$Type<$JsonPointer$$Type>): void
public "isHidden"(): boolean
public "onFailure"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): void
public static "parse"(jsonObject0: $JsonObject$$Type): $PostAction
public static "parseActions"(jsonElement0: $JsonElement$$Type, consumer1: $Consumer$$Type<$PostAction$$Type>): void
public "preApply"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, nBTPatchContext2: $ILycheeRecipe$NBTPatchContext$$Type): void
public "preventSync"(): boolean
public "provideJsonInfo"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonPointer1: $JsonPointer$$Type, jsonObject2: $JsonObject$$Type): $JsonElement
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $PostAction
public "toJson"(): $JsonObject
public "validate"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, nBTPatchContext1: $ILycheeRecipe$NBTPatchContext$$Type): void
get "path"(): string
set "path"(value: string)
get "blockOutputs"(): $List<$BlockPredicate>
get "displayName"(): $Component
get "itemOutputs"(): $List<$ItemStack>
get "type"(): $PostActionType<any>
get "hidden"(): boolean
}
}

declare module "packages/snownee/lychee/core/post/$Delay$LycheeMarker" {
import { $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $Marker } from "packages/net/minecraft/world/entity/$Marker"
import { $LycheeContext, $LycheeContext$$Type } from "packages/snownee/lychee/core/$LycheeContext"

export interface $Delay$LycheeMarker {
"getEntity"(): $Marker
"lychee$addDelay"(int0: integer): void
"lychee$getContext"(): $LycheeContext
"lychee$setContext"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type): void
get "entity"(): $Marker
}

export namespace $Delay$LycheeMarker {
const probejs$$marker: never
}
export abstract class $Delay$LycheeMarker$$Static implements $Delay$LycheeMarker {
}
}

declare module "packages/snownee/lychee/core/recipe/$LycheeCounter" {
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $LycheeCounter {
"lychee$getCount"(): integer
"lychee$getRecipeId"(): $ResourceLocation
"lychee$setCount"(int0: integer): void
"lychee$setRecipeId"(resourceLocation0: $ResourceLocation$$Type): void
"lychee$update"(resourceLocation0: $ResourceLocation$$Type, recipe1: $Recipe$$Type<any>): void
}

export namespace $LycheeCounter {
const probejs$$marker: never
}
export abstract class $LycheeCounter$$Static implements $LycheeCounter {
}
}

declare module "packages/snownee/lychee/mixin/$RecipeManagerAccess" {
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $Map } from "packages/java/util/$Map"

export interface $RecipeManagerAccess {
"callByType"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $Map<$ResourceLocation, $Recipe<C>>
}

export namespace $RecipeManagerAccess {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccess$$Static implements $RecipeManagerAccess {
}
}

declare module "packages/snownee/lychee/core/$Job" {
import { $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $LycheeContext$$Type } from "packages/snownee/lychee/core/$LycheeContext"
import { $PostAction, $PostAction$$Type } from "packages/snownee/lychee/core/post/$PostAction"

export class $Job {
constructor(postAction0: $PostAction$$Type, int1: integer)

public "apply"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type): void
get "action"(): $PostAction
set "action"(value: $PostAction$$Type)
get "times"(): integer
set "times"(value: integer)
}
}

declare module "packages/snownee/lychee/mixin/$ChunkMapAccess" {
import { $ChunkHolder } from "packages/net/minecraft/server/level/$ChunkHolder"
import { $Iterable } from "packages/java/lang/$Iterable"

export interface $ChunkMapAccess {
"callGetChunks"(): $Iterable<$ChunkHolder>
}

export namespace $ChunkMapAccess {
const probejs$$marker: never
}
export abstract class $ChunkMapAccess$$Static implements $ChunkMapAccess {
}
}

declare module "packages/snownee/lychee/random_block_ticking/$RandomlyTickable" {
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $RandomlyTickable {
"lychee$isTickable"(blockState0: $BlockState$$Type): boolean
"lychee$setTickable"(predicate0: $Predicate$$Type<$BlockState$$Type>): void
}

export namespace $RandomlyTickable {
const probejs$$marker: never
}
export abstract class $RandomlyTickable$$Static implements $RandomlyTickable {
}
}

declare module "packages/snownee/lychee/core/input/$ItemHolderCollection" {
import { $ItemHolder, $ItemHolder$$Type } from "packages/snownee/lychee/core/input/$ItemHolder"
import { $List } from "packages/java/util/$List"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BitSet } from "packages/java/util/$BitSet"

export class $ItemHolderCollection {
static readonly "EMPTY": $ItemHolderCollection
readonly "ignoreConsumptionFlags": $BitSet
readonly "tempList": $List<$ItemStack>

constructor(...itemHolder0s: $ItemHolder$$Type[])

public "get"(int0: integer): $ItemHolder
public "postApply"(boolean0: boolean, int1: integer): integer
public "replace"(int0: integer, itemStack1: $ItemStack$$Type): $ItemHolder
public "size"(): integer
public "split"(int0: integer, int1: integer): $ItemHolder
}
}

declare module "packages/snownee/lychee/core/post/$CustomAction" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $CustomAction$Apply, $CustomAction$Apply$$Type } from "packages/snownee/lychee/core/post/$CustomAction$Apply"
import { $PostAction } from "packages/snownee/lychee/core/post/$PostAction"

export class $CustomAction extends $PostAction {
readonly "data": $JsonObject

constructor(jsonObject0: $JsonObject$$Type)

get "applyFunc"(): $CustomAction$Apply
set "applyFunc"(value: $CustomAction$Apply$$Type)
get "canRepeat"(): boolean
set "canRepeat"(value: boolean)
}
}

declare module "packages/snownee/lychee/mixin/$BlockPredicateAccess" {
import { $Set } from "packages/java/util/$Set"
import { $StatePropertiesPredicate } from "packages/net/minecraft/advancements/critereon/$StatePropertiesPredicate"
import { $NbtPredicate } from "packages/net/minecraft/advancements/critereon/$NbtPredicate"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey } from "packages/net/minecraft/tags/$TagKey"

export interface $BlockPredicateAccess {
"getBlocks"(): $Set<$Block>
"getNbt"(): $NbtPredicate
"getProperties"(): $StatePropertiesPredicate
"getTag"(): $TagKey<$Block>
get "blocks"(): $Set<$Block>
get "nbt"(): $NbtPredicate
get "properties"(): $StatePropertiesPredicate
get "tag"(): $TagKey<$Block>
}

export namespace $BlockPredicateAccess {
const probejs$$marker: never
}
export abstract class $BlockPredicateAccess$$Static implements $BlockPredicateAccess {
}
}

declare module "packages/snownee/lychee/mixin/$StatePropertiesPredicateAccess" {
import { $StatePropertiesPredicate$PropertyMatcher } from "packages/net/minecraft/advancements/critereon/$StatePropertiesPredicate$PropertyMatcher"
import { $List } from "packages/java/util/$List"

export interface $StatePropertiesPredicateAccess {
"getProperties"(): $List<$StatePropertiesPredicate$PropertyMatcher>
get "properties"(): $List<$StatePropertiesPredicate$PropertyMatcher>
}

export namespace $StatePropertiesPredicateAccess {
const probejs$$marker: never
}
export abstract class $StatePropertiesPredicateAccess$$Static implements $StatePropertiesPredicateAccess {
}
}

declare module "packages/snownee/lychee/mixin/$ItemEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityAccess {
"setHealth"(int0: integer): void
set "health"(value: integer)
}

export namespace $ItemEntityAccess {
const probejs$$marker: never
}
export abstract class $ItemEntityAccess$$Static implements $ItemEntityAccess {
}
}

declare module "packages/snownee/lychee/core/$LycheeContext" {
import { $Delay$LycheeMarker$$Type } from "packages/snownee/lychee/core/post/$Delay$LycheeMarker"
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $LootContext } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ItemHolderCollection, $ItemHolderCollection$$Type } from "packages/snownee/lychee/core/input/$ItemHolderCollection"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $EmptyContainer } from "packages/snownee/lychee/core/$EmptyContainer"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $LootContextParam, $LootContextParam$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $ActionRuntime, $ActionRuntime$$Type } from "packages/snownee/lychee/core/$ActionRuntime"
import { $ServerLevel } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $PostAction$$Type } from "packages/snownee/lychee/core/post/$PostAction"
import { $Map } from "packages/java/util/$Map"

export class $LycheeContext extends $EmptyContainer {
public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "enqueueActions"(stream0: $Stream$$Type<$PostAction$$Type>, int1: integer, boolean2: boolean): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getLevel"(): $Level
public "getMaxStackSize"(): integer
public "getParam"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParamOrNull"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParams"(): $Map<$LootContextParam<any>, any>
public "getRandom"(): $RandomSource
public "getServerLevel"(): $ServerLevel
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasParam"(lootContextParam0: $LootContextParam$$Type<any>): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "lazyGetBlockEntity"(): void
public static "load"(jsonObject0: $JsonObject$$Type, lycheeMarker1: $Delay$LycheeMarker$$Type): $LycheeContext
public "removeParam"(lootContextParam0: $LootContextParam$$Type<any>): void
public "save"(): $JsonObject
public "setChanged"(): void
public "setParam"(lootContextParam0: $LootContextParam$$Type<any>, object1: any): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public "stopOpen"(player0: $Player$$Type): void
public "toLootContext"(): $LootContext
public static "tryClear"(object0: any): void
get "itemHolders"(): $ItemHolderCollection
set "itemHolders"(value: $ItemHolderCollection$$Type)
get "json"(): $JsonObject
set "json"(value: $JsonObject$$Type)
get "runtime"(): $ActionRuntime
set "runtime"(value: $ActionRuntime$$Type)
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "level"(): $Level
get "maxStackSize"(): integer
get "params"(): $Map<$LootContextParam<any>, any>
get "random"(): $RandomSource
get "serverLevel"(): $ServerLevel
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/snownee/lychee/util/$GsonContextImpl" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Gson$$Type } from "packages/com/google/gson/$Gson"
import { $JsonSerializationContext } from "packages/com/google/gson/$JsonSerializationContext"
import { $JsonDeserializationContext } from "packages/com/google/gson/$JsonDeserializationContext"
import { $Type$$Type } from "packages/java/lang/reflect/$Type"

export class $GsonContextImpl implements $JsonSerializationContext, $JsonDeserializationContext {
constructor(gson0: $Gson$$Type)

public "deserialize"<R>(jsonElement0: $JsonElement$$Type, type1: $Type$$Type): R
public "serialize"(object0: any, type1: $Type$$Type): $JsonElement
public "serialize"(object0: any): $JsonElement
}
}

declare module "packages/snownee/lychee/core/$Reference" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $JsonPointer } from "packages/snownee/lychee/util/json/$JsonPointer"

export class $Reference {
static readonly "DEFAULT": $Reference

constructor()

public static "create"(string0: string): $Reference
public static "fromJson"(jsonObject0: $JsonObject$$Type, string1: string): $Reference
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Reference
public "getPointer"(): $JsonPointer
public "isPointer"(): boolean
public static "toJson"(reference0: $Reference$$Type, jsonObject1: $JsonObject$$Type, string2: string): void
public static "toNetwork"(reference0: $Reference$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
get "pointer"(): $JsonPointer
get "pointer"(): boolean
}
}

declare module "packages/snownee/lychee/block_crushing/$LycheeFallingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LycheeFallingBlockEntity {
"lychee$anvilDamageChance"(float0: float): void
"lychee$cancelDrop"(): void
"lychee$matched"(): void
}

export namespace $LycheeFallingBlockEntity {
const probejs$$marker: never
}
export abstract class $LycheeFallingBlockEntity$$Static implements $LycheeFallingBlockEntity {
}
}

declare module "packages/snownee/lychee/compat/kubejs/$ClickedInfoBadgeEventJS" {
import { $ILycheeRecipe, $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $ClientEventJS } from "packages/dev/latvian/mods/kubejs/client/$ClientEventJS"

export class $ClickedInfoBadgeEventJS extends $ClientEventJS {
readonly "button": integer
readonly "recipe": $ILycheeRecipe<any>

constructor(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, int1: integer)

}
}

declare module "packages/snownee/lychee/core/contextual/$ContextualConditionType" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ContextualCondition, $ContextualCondition$$Type } from "packages/snownee/lychee/core/contextual/$ContextualCondition"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ContextualConditionType<T extends $ContextualCondition> {
constructor()

public "fromJson"(jsonObject0: $JsonObject$$Type): T
public "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
public "getRegistryName"(): $ResourceLocation
public "toJson"(t0: T, jsonObject1: $JsonObject$$Type): void
public "toNetwork"(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
get "registryName"(): $ResourceLocation
}
}

declare module "packages/snownee/lychee/core/post/$PostActionType" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PostAction, $PostAction$$Type } from "packages/snownee/lychee/core/post/$PostAction"

export class $PostActionType<T extends $PostAction> {
constructor()

public "fromJson"(jsonObject0: $JsonObject$$Type): T
public "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
public "getRegistryName"(): $ResourceLocation
public "toJson"(t0: T, jsonObject1: $JsonObject$$Type): void
public "toNetwork"(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
get "registryName"(): $ResourceLocation
}
}

declare module "packages/snownee/lychee/core/post/$CustomAction$Apply" {
import { $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $LycheeContext$$Type } from "packages/snownee/lychee/core/$LycheeContext"

export interface $CustomAction$Apply {
"apply"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): void
}

export namespace $CustomAction$Apply {
const probejs$$marker: never
}
export abstract class $CustomAction$Apply$$Static implements $CustomAction$Apply {
}
}

declare module "packages/snownee/lychee/util/json/$JsonPointer" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List, $List$$Type } from "packages/java/util/$List"

export class $JsonPointer {
readonly "tokens": $List<string>

constructor(collection0: $Collection$$Type<string>)
constructor(string0: string)

public "append"(string0: string): $JsonPointer
public "find"(jsonElement0: $JsonElement$$Type): $JsonElement
public "getInt"(int0: integer): integer
public "getString"(int0: integer): string
public "isRoot"(): boolean
public "isSelfOrParentOf"(list0: $List$$Type<string>): boolean
public "parent"(): $JsonPointer
public "size"(): integer
get "root"(): boolean
}
}

declare module "packages/snownee/lychee/compat/kubejs/$CustomConditionEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $CustomCondition, $CustomCondition$$Type } from "packages/snownee/lychee/core/contextual/$CustomCondition"
import { $Map } from "packages/java/util/$Map"

export class $CustomConditionEventJS extends $EventJS {
readonly "condition": $CustomCondition
readonly "data": $Map<any, any>
readonly "id": string

constructor(string0: string, customCondition1: $CustomCondition$$Type)

}
}

declare module "packages/snownee/lychee/core/contextual/$ContextualHolder" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ContextualCondition, $ContextualCondition$$Type } from "packages/snownee/lychee/core/contextual/$ContextualCondition"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $LycheeContext$$Type } from "packages/snownee/lychee/core/$LycheeContext"

export class $ContextualHolder {
constructor()

public "checkConditions"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): integer
public "conditionsFromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "conditionsToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "getConditionTooltips"(list0: $List$$Type<$Component$$Type>, int1: integer, level2: $Level$$Type, player3: $Player$$Type): void
public "getConditions"(): $List<$ContextualCondition>
public "isSecretCondition"(int0: integer): boolean
public "parseConditions"(jsonElement0: $JsonElement$$Type): void
public "rawConditionsToJson"(): $JsonElement
public "showingConditionsCount"(): integer
public "withCondition"(contextualCondition0: $ContextualCondition$$Type): void
get "conditions"(): $List<$ContextualCondition>
}
}

declare module "packages/snownee/lychee/core/contextual/$ContextualCondition" {
import { $ContextualConditionType } from "packages/snownee/lychee/core/contextual/$ContextualConditionType"
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Gson } from "packages/com/google/gson/$Gson"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ILycheeRecipe$$Type } from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import { $GsonContextImpl } from "packages/snownee/lychee/util/$GsonContextImpl"
import { $InteractionResult, $InteractionResult$$Type } from "packages/net/minecraft/world/$InteractionResult"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $MutableComponent, $MutableComponent$$Type } from "packages/net/minecraft/network/chat/$MutableComponent"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List$$Type } from "packages/java/util/$List"
import { $LycheeContext$$Type } from "packages/snownee/lychee/core/$LycheeContext"

export interface $ContextualCondition {
"appendTooltips"(list0: $List$$Type<$Component$$Type>, level1: $Level$$Type, player2: $Player$$Type, int3: integer, boolean4: boolean): void
"getDescription"(boolean0: boolean): $MutableComponent
"getType"(): $ContextualConditionType<$ContextualCondition>
"makeDescriptionId"(boolean0: boolean): string
"showingCount"(): integer
"test"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): integer
"testInTooltips"(level0: $Level$$Type, player1: $Player$$Type): $InteractionResult
"toJson"(): $JsonObject
get "type"(): $ContextualConditionType<$ContextualCondition>
}

export namespace $ContextualCondition {
const gsonContext: $GsonContextImpl
const predicateGson: $Gson
function desc(list0: $List$$Type<$Component$$Type>, interactionResult1: $InteractionResult$$Type, int2: integer, mutableComponent3: $MutableComponent$$Type): void
function parse(jsonObject0: $JsonObject$$Type): $ContextualCondition
}
export abstract class $ContextualCondition$$Static implements $ContextualCondition {
static readonly "gsonContext": $GsonContextImpl
static readonly "predicateGson": $Gson

static "desc"(list0: $List$$Type<$Component$$Type>, interactionResult1: $InteractionResult$$Type, int2: integer, mutableComponent3: $MutableComponent$$Type): void
static "parse"(jsonObject0: $JsonObject$$Type): $ContextualCondition
}
}

declare module "packages/snownee/lychee/core/input/$ItemHolder" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemHolder {
constructor()

public "get"(): $ItemStack
public "replace"(itemStack0: $ItemStack$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): $ItemHolder
public "split"(int0: integer, consumer1: $Consumer$$Type<$ItemStack$$Type>): $ItemHolder
}
}

declare module "packages/snownee/lychee/mixin/$NbtPredicateAccess" {
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"

export interface $NbtPredicateAccess {
"getTag"(): $CompoundTag
get "tag"(): $CompoundTag
}

export namespace $NbtPredicateAccess {
const probejs$$marker: never
}
export abstract class $NbtPredicateAccess$$Static implements $NbtPredicateAccess {
}
}

declare module "packages/snownee/lychee/mixin/$GameRendererAccess" {
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"

export interface $GameRendererAccess {
"callGetFov"(camera0: $Camera$$Type, float1: float, boolean2: boolean): double
}

export namespace $GameRendererAccess {
const probejs$$marker: never
}
export abstract class $GameRendererAccess$$Static implements $GameRendererAccess {
}
}

declare module "packages/snownee/lychee/$LycheeLootContextParams" {
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Map } from "packages/java/util/$Map"

export class $LycheeLootContextParams {
static readonly "ALL": $Map<string, $LootContextParam<any>>
static readonly "BLOCK_POS": $LootContextParam<$BlockPos>
static readonly "DIRECTION": $LootContextParam<$Direction>

constructor()

public static "init"(): void
public static "trimRL"(string0: string): string
public static "trimRL"(string0: string, string1: string): string
}
}

