declare module "packages/net/minecraft/commands/$SharedSuggestionProvider$ElementSuggestionType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $SharedSuggestionProvider$ElementSuggestionType extends $Enum<$SharedSuggestionProvider$ElementSuggestionType> {
static readonly "ALL": $SharedSuggestionProvider$ElementSuggestionType
static readonly "ELEMENTS": $SharedSuggestionProvider$ElementSuggestionType
static readonly "TAGS": $SharedSuggestionProvider$ElementSuggestionType

public "shouldSuggestElements"(): boolean
public "shouldSuggestTags"(): boolean
public static "valueOf"(string0: string): $SharedSuggestionProvider$ElementSuggestionType
public static "values"(): $SharedSuggestionProvider$ElementSuggestionType[]
}
}

declare module "packages/net/minecraft/commands/arguments/$EntityArgument$Info" {
import { $EntityArgument, $EntityArgument$$Type } from "packages/net/minecraft/commands/arguments/$EntityArgument"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $EntityArgument$Info$Template, $EntityArgument$Info$Template$$Type } from "packages/net/minecraft/commands/arguments/$EntityArgument$Info$Template"

export class $EntityArgument$Info implements $ArgumentTypeInfo<$EntityArgument, $EntityArgument$Info$Template> {
constructor()

public "serializeToJson"(template0: $EntityArgument$Info$Template$$Type, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $EntityArgument$Info$Template$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(entityArgument0: $EntityArgument$$Type): $EntityArgument$Info$Template
}
}

declare module "packages/net/minecraft/commands/$CommandSigningContext" {
import { $PlayerChatMessage } from "packages/net/minecraft/network/chat/$PlayerChatMessage"

export interface $CommandSigningContext {
"getArgument"(string0: string): $PlayerChatMessage
}

export namespace $CommandSigningContext {
const ANONYMOUS: $CommandSigningContext
}
export abstract class $CommandSigningContext$$Static implements $CommandSigningContext {
static readonly "ANONYMOUS": $CommandSigningContext

}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceArgument$Info" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $ResourceArgument, $ResourceArgument$$Type } from "packages/net/minecraft/commands/arguments/$ResourceArgument"
import { $ResourceArgument$Info$Template, $ResourceArgument$Info$Template$$Type } from "packages/net/minecraft/commands/arguments/$ResourceArgument$Info$Template"

export class $ResourceArgument$Info<T> implements $ArgumentTypeInfo<$ResourceArgument<T>, $ResourceArgument$Info$Template<>> {
constructor()

public "serializeToJson"(template0: $ResourceArgument$Info$Template$$Type<>, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $ResourceArgument$Info$Template$$Type<>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(resourceArgument0: $ResourceArgument$$Type<T>): $ResourceArgument$Info$Template<>
}
}

declare module "packages/net/minecraft/commands/arguments/$ScoreHolderArgument" {
import { $Suggestions } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection } from "packages/java/util/$Collection"
import { $SuggestionProvider } from "packages/com/mojang/brigadier/suggestion/$SuggestionProvider"
import { $SuggestionsBuilder$$Type } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ArgumentType } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $ScoreHolderArgument$Result } from "packages/net/minecraft/commands/arguments/$ScoreHolderArgument$Result"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ScoreHolderArgument implements $ArgumentType<$ScoreHolderArgument$Result> {
static readonly "SUGGEST_SCORE_HOLDERS": $SuggestionProvider<$CommandSourceStack>

constructor(boolean0: boolean)

public "getExamples"(): $Collection<string>
public static "getName"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): string
public static "getNames"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string, supplier2: $Supplier$$Type<$Collection<string>>): $Collection<string>
public static "getNames"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<string>
public static "getNamesWithDefaultWildcard"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<string>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "scoreHolder"(): $ScoreHolderArgument
public static "scoreHolders"(): $ScoreHolderArgument
get "examples"(): $Collection<string>
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceKeyArgument$Info$Template" {
import { $ResourceKeyArgument } from "packages/net/minecraft/commands/arguments/$ResourceKeyArgument"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $ArgumentTypeInfo$Template } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $ResourceKeyArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceKeyArgument<T>> {
public "type"(): $ArgumentTypeInfo<$ResourceKeyArgument<T>, any>
}
}

declare module "packages/net/minecraft/commands/arguments/$EntityArgument$Info$Template" {
import { $EntityArgument } from "packages/net/minecraft/commands/arguments/$EntityArgument"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $ArgumentTypeInfo$Template } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $EntityArgument$Info$Template implements $ArgumentTypeInfo$Template<$EntityArgument> {
public "type"(): $ArgumentTypeInfo<$EntityArgument, any>
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceOrTagKeyArgument$Info" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $ResourceOrTagKeyArgument, $ResourceOrTagKeyArgument$$Type } from "packages/net/minecraft/commands/arguments/$ResourceOrTagKeyArgument"
import { $ResourceOrTagKeyArgument$Info$Template, $ResourceOrTagKeyArgument$Info$Template$$Type } from "packages/net/minecraft/commands/arguments/$ResourceOrTagKeyArgument$Info$Template"

export class $ResourceOrTagKeyArgument$Info<T> implements $ArgumentTypeInfo<$ResourceOrTagKeyArgument<T>, $ResourceOrTagKeyArgument$Info$Template<>> {
constructor()

public "serializeToJson"(template0: $ResourceOrTagKeyArgument$Info$Template$$Type<>, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $ResourceOrTagKeyArgument$Info$Template$$Type<>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(resourceOrTagKeyArgument0: $ResourceOrTagKeyArgument$$Type<T>): $ResourceOrTagKeyArgument$Info$Template<>
}
}

declare module "packages/net/minecraft/commands/$CommandSourceStack" {
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $ResultConsumer$$Type } from "packages/com/mojang/brigadier/$ResultConsumer"
import { $FeatureFlagSet } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $LazyComponentKJS$$Type } from "packages/dev/latvian/mods/kubejs/core/$LazyComponentKJS"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ClientLevel } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $BinaryOperator$$Type } from "packages/java/util/function/$BinaryOperator"
import { $CommandSigningContext, $CommandSigningContext$$Type } from "packages/net/minecraft/commands/$CommandSigningContext"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $SuggestionsBuilder$$Type } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Vec2, $Vec2$$Type } from "packages/net/minecraft/world/phys/$Vec2"
import { $Scoreboard } from "packages/net/minecraft/world/scores/$Scoreboard"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $RegistryAccess } from "packages/net/minecraft/core/$RegistryAccess"
import { $RecipeManager } from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import { $ClientCommandRegistrationEvent$ClientCommandSourceStack } from "packages/dev/architectury/event/events/client/$ClientCommandRegistrationEvent$ClientCommandSourceStack"
import { $SimpleCommandExceptionType } from "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType"
import { $IntConsumer, $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"
import { $OutgoingChatMessage$$Type } from "packages/net/minecraft/network/chat/$OutgoingChatMessage"
import { $SharedSuggestionProvider } from "packages/net/minecraft/commands/$SharedSuggestionProvider"
import { $XPClientCommandSource } from "packages/xaeroplus/commands/$XPClientCommandSource"
import { $EntityAnchorArgument$Anchor, $EntityAnchorArgument$Anchor$$Type } from "packages/net/minecraft/commands/arguments/$EntityAnchorArgument$Anchor"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Suggestions } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $IForgeCommandSourceStack } from "packages/net/minecraftforge/common/extensions/$IForgeCommandSourceStack"
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type } from "packages/net/minecraft/commands/$SharedSuggestionProvider$TextCoordinates"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Stream, $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $MinecraftServer, $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $SharedSuggestionProvider$ElementSuggestionType$$Type } from "packages/net/minecraft/commands/$SharedSuggestionProvider$ElementSuggestionType"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $CommandSource, $CommandSource$$Type } from "packages/net/minecraft/commands/$CommandSource"
import { $Advancement } from "packages/net/minecraft/advancements/$Advancement"
import { $TaskChainer, $TaskChainer$$Type } from "packages/net/minecraft/util/$TaskChainer"
import { $LocalPlayer } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $Set } from "packages/java/util/$Set"
import { $Message } from "packages/com/mojang/brigadier/$Message"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ChatType$Bound$$Type } from "packages/net/minecraft/network/chat/$ChatType$Bound"

export class $CommandSourceStack implements $SharedSuggestionProvider, $IForgeCommandSourceStack, $XPClientCommandSource, $ClientCommandRegistrationEvent$ClientCommandSourceStack {
static readonly "ERROR_NOT_ENTITY": $SimpleCommandExceptionType
static readonly "ERROR_NOT_PLAYER": $SimpleCommandExceptionType
readonly "source": $CommandSource

constructor(commandSource0: $CommandSource$$Type, vec31: $Vec3$$Type, vec22: $Vec2$$Type, serverLevel3: $ServerLevel$$Type, int4: integer, string5: string, component6: $Component$$Type, minecraftServer7: $MinecraftServer$$Type, entity8: $Entity$$Type)

public "arch$getLevel"(): $ClientLevel
public "arch$getPlayer"(): $LocalPlayer
public "arch$getPosition"(): $Vec3
public "arch$getRotation"(): $Vec2
public "arch$sendFailure"(message: $Component$$Type): void
public "arch$sendSuccess"(message: $Supplier$$Type<any>, broadcastToAdmins: boolean): void
public "customSuggestion"(commandContext0: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
public "enabledFeatures"(): $FeatureFlagSet
public "facing"(entity0: $Entity$$Type, anchor1: $EntityAnchorArgument$Anchor$$Type): $CommandSourceStack
public "facing"(vec30: $Vec3$$Type): $CommandSourceStack
public static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
public static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, function2: $Function$$Type<T, $ResourceLocation>, consumer3: $Consumer$$Type<T>): void
public "getAbsoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
public "getAdvancement"(resourceLocation0: $ResourceLocation$$Type): $Advancement
public "getAllTeams"(): $Collection<string>
public "getAnchor"(): $EntityAnchorArgument$Anchor
public "getAvailableSounds"(): $Stream<$ResourceLocation>
public "getChatMessageChainer"(): $TaskChainer
public "getCustomTabSugggestions"(): $Collection<string>
public "getDisplayName"(): $Component
public "getEntity"(): $Entity
public "getEntityOrException"(): $Entity
public "getLevel"(): $ServerLevel
public "getOnlinePlayerNames"(): $Collection<string>
public "getPlayer"(): $ServerPlayer
public "getPlayerOrException"(): $ServerPlayer
public "getPosition"(): $Vec3
public "getRecipeManager"(): $RecipeManager
public "getRecipeNames"(): $Stream<$ResourceLocation>
public "getRelevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
public "getReturnValueConsumer"(): $IntConsumer
public "getRotation"(): $Vec2
public "getScoreboard"(): $Scoreboard
public "getSelectedEntities"(): $Collection<string>
public "getServer"(): $MinecraftServer
public "getSigningContext"(): $CommandSigningContext
public "getTextName"(): string
public "getUnsidedLevel"(): $Level
public "hasPermission"(int0: integer): boolean
public "isPlayer"(): boolean
public "levels"(): $Set<$ResourceKey<$Level>>
public static "matchesSubStr"(string0: string, string1: string): boolean
public "onCommandComplete"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, boolean1: boolean, int2: integer): void
public "registryAccess"(): $RegistryAccess
public "sendChatMessage"(outgoingChatMessage0: $OutgoingChatMessage$$Type, boolean1: boolean, bound2: $ChatType$Bound$$Type): void
public "sendFailure"(component0: $Component$$Type): void
public "sendSuccess"(component: $Component$$Type, broadcastToAdmins: boolean): void
public "sendSuccessLazy"(component: $LazyComponentKJS$$Type, broadcastToAdmins: boolean): void
public "sendSystemMessage"(component0: $Component$$Type): void
public "shouldFilterMessageTo"(serverPlayer0: $ServerPlayer$$Type): boolean
public static "suggest"(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggest"(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest"(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggest2DCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
public static "suggestCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
public "suggestRegistryElements"(resourceKey0: $ResourceKey$$Type<$Registry<any>>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type, commandContext3: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
public "suggestRegistryElements"(registry0: $Registry$$Type<any>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type): void
public static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "suggestResource"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggestResource"<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
public static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
public static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
public static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public "withAnchor"(anchor0: $EntityAnchorArgument$Anchor$$Type): $CommandSourceStack
public "withCallback"(resultConsumer0: $ResultConsumer$$Type<$CommandSourceStack$$Type>): $CommandSourceStack
public "withCallback"(resultConsumer0: $ResultConsumer$$Type<$CommandSourceStack$$Type>, binaryOperator1: $BinaryOperator$$Type<$ResultConsumer$$Type<$CommandSourceStack$$Type>>): $CommandSourceStack
public "withChatMessageChainer"(taskChainer0: $TaskChainer$$Type): $CommandSourceStack
public "withEntity"(entity0: $Entity$$Type): $CommandSourceStack
public "withLevel"(serverLevel0: $ServerLevel$$Type): $CommandSourceStack
public "withMaximumPermission"(int0: integer): $CommandSourceStack
public "withPermission"(int0: integer): $CommandSourceStack
public "withPosition"(vec30: $Vec3$$Type): $CommandSourceStack
public "withReturnValueConsumer"(intConsumer0: $IntConsumer$$Type): $CommandSourceStack
public "withRotation"(vec20: $Vec2$$Type): $CommandSourceStack
public "withSigningContext"(commandSigningContext0: $CommandSigningContext$$Type): $CommandSourceStack
public "withSource"(commandSource0: $CommandSource$$Type): $CommandSourceStack
public "withSuppressedOutput"(): $CommandSourceStack
public "xaeroplus$sendFailure"(message: $Component$$Type): void
public "xaeroplus$sendSuccess"(message: $Component$$Type): void
get "absoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "allTeams"(): $Collection<string>
get "anchor"(): $EntityAnchorArgument$Anchor
get "availableSounds"(): $Stream<$ResourceLocation>
get "chatMessageChainer"(): $TaskChainer
get "customTabSugggestions"(): $Collection<string>
get "displayName"(): $Component
get "entity"(): $Entity
get "entityOrException"(): $Entity
get "level"(): $ServerLevel
get "onlinePlayerNames"(): $Collection<string>
get "player"(): $ServerPlayer
get "playerOrException"(): $ServerPlayer
get "position"(): $Vec3
get "recipeManager"(): $RecipeManager
get "recipeNames"(): $Stream<$ResourceLocation>
get "relevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "returnValueConsumer"(): $IntConsumer
get "rotation"(): $Vec2
get "scoreboard"(): $Scoreboard
get "selectedEntities"(): $Collection<string>
get "server"(): $MinecraftServer
get "signingContext"(): $CommandSigningContext
get "textName"(): string
get "unsidedLevel"(): $Level
get "player"(): boolean
}
}

declare module "packages/net/minecraft/commands/arguments/$TimeArgument" {
import { $Suggestions } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection } from "packages/java/util/$Collection"
import { $SuggestionsBuilder$$Type } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $ArgumentType } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"

export class $TimeArgument implements $ArgumentType<integer> {
public "getExamples"(): $Collection<string>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "time"(): $TimeArgument
public static "time"(int0: integer): $TimeArgument
get "examples"(): $Collection<string>
}
}

declare module "packages/net/minecraft/commands/$CommandFunction" {
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $List$$Type } from "packages/java/util/$List"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CommandDispatcher$$Type } from "packages/com/mojang/brigadier/$CommandDispatcher"
import { $CommandFunction$Entry, $CommandFunction$Entry$$Type } from "packages/net/minecraft/commands/$CommandFunction$Entry"

export class $CommandFunction {
constructor(resourceLocation0: $ResourceLocation$$Type, entry1s: $CommandFunction$Entry$$Type[])

public static "fromLines"(resourceLocation0: $ResourceLocation$$Type, commandDispatcher1: $CommandDispatcher$$Type<$CommandSourceStack$$Type>, commandSourceStack2: $CommandSourceStack$$Type, list3: $List$$Type<string>): $CommandFunction
public "getEntries"(): $CommandFunction$Entry[]
public "getId"(): $ResourceLocation
get "entries"(): $CommandFunction$Entry[]
get "id"(): $ResourceLocation
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceKeyArgument" {
import { $StructureTemplatePool } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructureTemplatePool"
import { $Suggestions } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection } from "packages/java/util/$Collection"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $ArgumentType } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $StringReader$$Type } from "packages/com/mojang/brigadier/$StringReader"
import { $ConfiguredFeature } from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import { $SuggestionsBuilder$$Type } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ResourceKeyArgument<T> implements $ArgumentType<$ResourceKey<T>> {
constructor(resourceKey0: $ResourceKey$$Type<$Registry<T>>)

public static "getConfiguredFeature"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$ConfiguredFeature<any, any>>
public "getExamples"(): $Collection<string>
public static "getStructure"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$Structure>
public static "getStructureTemplatePool"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$StructureTemplatePool>
public static "key"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $ResourceKeyArgument<T>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public "parse"(stringReader0: $StringReader$$Type): $ResourceKey<T>
get "examples"(): $Collection<string>
}
}

declare module "packages/net/minecraft/commands/arguments/selector/$EntitySelector" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $MinMaxBounds$Doubles$$Type } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import { $EntitySelectorMixin } from "packages/io/sedu/mc/parties/mixin/vanilla/$EntitySelectorMixin"
import { $BiConsumer, $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntitySelector implements $EntitySelectorMixin {
static readonly "INFINITE": integer
static readonly "ORDER_ARBITRARY": $BiConsumer<$Vec3, $List<$Entity>>
readonly "predicate": $Predicate<$Entity>

constructor(int0: integer, boolean1: boolean, boolean2: boolean, predicate3: $Predicate$$Type<$Entity$$Type>, doubles4: $MinMaxBounds$Doubles$$Type, function5: $Function$$Type<$Vec3$$Type, $Vec3>, aABB6: $AABB$$Type, biConsumer7: $BiConsumer$$Type<$Vec3$$Type, $List$$Type<$Entity$$Type>>, boolean8: boolean, string9: string, uUID10: $UUID$$Type, entityType11: $EntityType$$Type<any>, boolean12: boolean)

public "findEntities"(commandSourceStack0: $CommandSourceStack$$Type): $List<$Entity>
public "findPlayers"(commandSourceStack0: $CommandSourceStack$$Type): $List<$ServerPlayer>
public "findSingleEntity"(commandSourceStack0: $CommandSourceStack$$Type): $Entity
public "findSinglePlayer"(commandSourceStack0: $CommandSourceStack$$Type): $ServerPlayer
public "getMaxResults"(): integer
public "includesEntities"(): boolean
public "isSelfSelector"(): boolean
public "isWorldLimited"(): boolean
public static "joinNames"(list0: $List$$Type<$Entity$$Type>): $Component
public "usesSelector"(): boolean
get "maxResults"(): integer
get "selfSelector"(): boolean
get "worldLimited"(): boolean
}
}

declare module "packages/net/minecraft/commands/synchronization/$SingletonArgumentInfo" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $CommandBuildContext$$Type } from "packages/net/minecraft/commands/$CommandBuildContext"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ArgumentType, $ArgumentType$$Type } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $SingletonArgumentInfo$Template, $SingletonArgumentInfo$Template$$Type } from "packages/net/minecraft/commands/synchronization/$SingletonArgumentInfo$Template"

export class $SingletonArgumentInfo<A extends $ArgumentType<any>> implements $ArgumentTypeInfo<A, $SingletonArgumentInfo$Template<>> {
public static "contextAware"<T extends $ArgumentType<any>>(function0: $Function$$Type<$CommandBuildContext$$Type, T>): $SingletonArgumentInfo<T>
public static "contextFree"<T extends $ArgumentType<any>>(supplier0: $Supplier$$Type<T>): $SingletonArgumentInfo<T>
public "deserializeFromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $SingletonArgumentInfo$Template<>
public "serializeToJson"(template0: $SingletonArgumentInfo$Template$$Type<>, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $SingletonArgumentInfo$Template$$Type<>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
}
}

declare module "packages/net/minecraft/commands/arguments/$TimeArgument$Info" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $TimeArgument$Info$Template, $TimeArgument$Info$Template$$Type } from "packages/net/minecraft/commands/arguments/$TimeArgument$Info$Template"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $TimeArgument, $TimeArgument$$Type } from "packages/net/minecraft/commands/arguments/$TimeArgument"

export class $TimeArgument$Info implements $ArgumentTypeInfo<$TimeArgument, $TimeArgument$Info$Template> {
constructor()

public "serializeToJson"(template0: $TimeArgument$Info$Template$$Type, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $TimeArgument$Info$Template$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(timeArgument0: $TimeArgument$$Type): $TimeArgument$Info$Template
}
}

declare module "packages/net/minecraft/commands/$CommandFunction$Entry" {
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $Deque$$Type } from "packages/java/util/$Deque"
import { $ServerFunctionManager$QueuedCommand$$Type } from "packages/net/minecraft/server/$ServerFunctionManager$QueuedCommand"
import { $ServerFunctionManager$$Type } from "packages/net/minecraft/server/$ServerFunctionManager"
import { $ServerFunctionManager$TraceCallbacks$$Type } from "packages/net/minecraft/server/$ServerFunctionManager$TraceCallbacks"

export interface $CommandFunction$Entry {
"execute"(serverFunctionManager0: $ServerFunctionManager$$Type, commandSourceStack1: $CommandSourceStack$$Type, deque2: $Deque$$Type<$ServerFunctionManager$QueuedCommand$$Type>, int3: integer, int4: integer, traceCallbacks5: $ServerFunctionManager$TraceCallbacks$$Type): void
}

export namespace $CommandFunction$Entry {
const probejs$$marker: never
}
export abstract class $CommandFunction$Entry$$Static implements $CommandFunction$Entry {
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceArgument$Info$Template" {
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $ResourceArgument } from "packages/net/minecraft/commands/arguments/$ResourceArgument"
import { $ArgumentTypeInfo$Template } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $ResourceArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceArgument<T>> {
public "type"(): $ArgumentTypeInfo<$ResourceArgument<T>, any>
}
}

declare module "packages/net/minecraft/commands/arguments/$TimeArgument$Info$Template" {
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $TimeArgument } from "packages/net/minecraft/commands/arguments/$TimeArgument"
import { $ArgumentTypeInfo$Template } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $TimeArgument$Info$Template implements $ArgumentTypeInfo$Template<$TimeArgument> {
public "type"(): $ArgumentTypeInfo<$TimeArgument, any>
}
}

declare module "packages/net/minecraft/commands/arguments/$ArgumentSignatures$Entry" {
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $MessageSignature, $MessageSignature$$Type } from "packages/net/minecraft/network/chat/$MessageSignature"

export class $ArgumentSignatures$Entry extends $Record {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(string0: string, messageSignature1: $MessageSignature$$Type)

public "name"(): string
public "signature"(): $MessageSignature
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "packages/net/minecraft/commands/arguments/$EntityAnchorArgument$Anchor" {
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $Enum } from "packages/java/lang/$Enum"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityAnchorArgument$Anchor extends $Enum<$EntityAnchorArgument$Anchor> {
static readonly "EYES": $EntityAnchorArgument$Anchor
static readonly "FEET": $EntityAnchorArgument$Anchor

public "apply"(entity0: $Entity$$Type): $Vec3
public "apply"(commandSourceStack0: $CommandSourceStack$$Type): $Vec3
public static "getByName"(string0: string): $EntityAnchorArgument$Anchor
public static "valueOf"(string0: string): $EntityAnchorArgument$Anchor
public static "values"(): $EntityAnchorArgument$Anchor[]
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceOrTagKeyArgument$Result" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Optional } from "packages/java/util/$Optional"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $TagKey } from "packages/net/minecraft/tags/$TagKey"

export interface $ResourceOrTagKeyArgument$Result<T> extends $Predicate<$Holder<T>> {
"and"(predicate0: $Predicate$$Type<$Holder$$Type<T>>): $Predicate<$Holder<T>>
"asPrintable"(): string
"cast"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$ResourceOrTagKeyArgument$Result<E>>
"negate"(): $Predicate<$Holder<T>>
"or"(predicate0: $Predicate$$Type<$Holder$$Type<T>>): $Predicate<$Holder<T>>
"test"(holder0: $Holder$$Type<T>): boolean
"unwrap"(): $Either<$ResourceKey<T>, $TagKey<T>>
}

export namespace $ResourceOrTagKeyArgument$Result {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ResourceOrTagKeyArgument$Result$$Static<T> implements $ResourceOrTagKeyArgument$Result<T> {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/net/minecraft/commands/arguments/$ScoreHolderArgument$Result" {
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $Collection } from "packages/java/util/$Collection"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export interface $ScoreHolderArgument$Result {
"getNames"(commandSourceStack0: $CommandSourceStack$$Type, supplier1: $Supplier$$Type<$Collection<string>>): $Collection<string>
}

export namespace $ScoreHolderArgument$Result {
const probejs$$marker: never
}
export abstract class $ScoreHolderArgument$Result$$Static implements $ScoreHolderArgument$Result {
}
}

declare module "packages/net/minecraft/commands/arguments/$EntityArgument" {
import { $Suggestions } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection } from "packages/java/util/$Collection"
import { $ArgumentType } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $StringReader$$Type } from "packages/com/mojang/brigadier/$StringReader"
import { $SimpleCommandExceptionType } from "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType"
import { $SuggestionsBuilder$$Type } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"
import { $EntitySelector } from "packages/net/minecraft/commands/arguments/selector/$EntitySelector"

export class $EntityArgument implements $ArgumentType<$EntitySelector> {
static readonly "ERROR_NOT_SINGLE_ENTITY": $SimpleCommandExceptionType
static readonly "ERROR_NOT_SINGLE_PLAYER": $SimpleCommandExceptionType
static readonly "ERROR_ONLY_PLAYERS_ALLOWED": $SimpleCommandExceptionType
static readonly "ERROR_SELECTORS_NOT_ALLOWED": $SimpleCommandExceptionType
static readonly "NO_ENTITIES_FOUND": $SimpleCommandExceptionType
static readonly "NO_PLAYERS_FOUND": $SimpleCommandExceptionType

public static "entities"(): $EntityArgument
public static "entity"(): $EntityArgument
public static "getEntities"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<$Entity>
public static "getEntity"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Entity
public "getExamples"(): $Collection<string>
public static "getOptionalEntities"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<$Entity>
public static "getOptionalPlayers"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<$ServerPlayer>
public static "getPlayer"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $ServerPlayer
public static "getPlayers"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Collection<$ServerPlayer>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public "parse"(stringReader0: $StringReader$$Type): $EntitySelector
public static "player"(): $EntityArgument
public static "players"(): $EntityArgument
get "examples"(): $Collection<string>
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceOrTagArgument" {
import { $Suggestions } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection } from "packages/java/util/$Collection"
import { $ResourceOrTagArgument$Result } from "packages/net/minecraft/commands/arguments/$ResourceOrTagArgument$Result"
import { $CommandBuildContext$$Type } from "packages/net/minecraft/commands/$CommandBuildContext"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $SuggestionsBuilder$$Type } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ArgumentType } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ResourceOrTagArgument<T> implements $ArgumentType<$ResourceOrTagArgument$Result<T>> {
constructor(commandBuildContext0: $CommandBuildContext$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>)

public "getExamples"(): $Collection<string>
public static "getResourceOrTag"<T>(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string, resourceKey2: $ResourceKey$$Type<$Registry<T>>): $ResourceOrTagArgument$Result<T>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "resourceOrTag"<T>(commandBuildContext0: $CommandBuildContext$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>): $ResourceOrTagArgument<T>
get "examples"(): $Collection<string>
}
}

declare module "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template" {
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $CommandBuildContext$$Type } from "packages/net/minecraft/commands/$CommandBuildContext"
import { $ArgumentType } from "packages/com/mojang/brigadier/arguments/$ArgumentType"

export interface $ArgumentTypeInfo$Template<A extends $ArgumentType<any>> {
"instantiate"(commandBuildContext0: $CommandBuildContext$$Type): A
"type"(): $ArgumentTypeInfo<A, any>
}

export namespace $ArgumentTypeInfo$Template {
const probejs$$marker: never
}
export abstract class $ArgumentTypeInfo$Template$$Static<A extends $ArgumentType<any>> implements $ArgumentTypeInfo$Template<A> {
}
}

declare module "packages/net/minecraft/commands/$SharedSuggestionProvider$TextCoordinates" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SharedSuggestionProvider$TextCoordinates {
static readonly "DEFAULT_GLOBAL": $SharedSuggestionProvider$TextCoordinates
static readonly "DEFAULT_LOCAL": $SharedSuggestionProvider$TextCoordinates
readonly "x": string
readonly "y": string
readonly "z": string

constructor(string0: string, string1: string, string2: string)

}
}

declare module "packages/net/minecraft/commands/$Commands$CommandSelection" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Commands$CommandSelection extends $Enum<$Commands$CommandSelection> {
static readonly "ALL": $Commands$CommandSelection
static readonly "DEDICATED": $Commands$CommandSelection
static readonly "INTEGRATED": $Commands$CommandSelection
readonly "includeDedicated": boolean
readonly "includeIntegrated": boolean

public static "valueOf"(string0: string): $Commands$CommandSelection
public static "values"(): $Commands$CommandSelection[]
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceOrTagKeyArgument$Info$Template" {
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $ResourceOrTagKeyArgument } from "packages/net/minecraft/commands/arguments/$ResourceOrTagKeyArgument"
import { $ArgumentTypeInfo$Template } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $ResourceOrTagKeyArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceOrTagKeyArgument<T>> {
public "type"(): $ArgumentTypeInfo<$ResourceOrTagKeyArgument<T>, any>
}
}

declare module "packages/net/minecraft/commands/$CommandBuildContext$MissingTagAccessPolicy" {
import { $Enum } from "packages/java/lang/$Enum"

export class $CommandBuildContext$MissingTagAccessPolicy extends $Enum<$CommandBuildContext$MissingTagAccessPolicy> {
static readonly "CREATE_NEW": $CommandBuildContext$MissingTagAccessPolicy
static readonly "FAIL": $CommandBuildContext$MissingTagAccessPolicy

public static "valueOf"(string0: string): $CommandBuildContext$MissingTagAccessPolicy
public static "values"(): $CommandBuildContext$MissingTagAccessPolicy[]
}
}

declare module "packages/net/minecraft/commands/$CommandBuildContext" {
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $HolderLookup$Provider$$Type } from "packages/net/minecraft/core/$HolderLookup$Provider"
import { $CommandBuildContext$Configurable } from "packages/net/minecraft/commands/$CommandBuildContext$Configurable"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $HolderLookup } from "packages/net/minecraft/core/$HolderLookup"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export interface $CommandBuildContext {
"holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
}

export namespace $CommandBuildContext {
function configurable(registryAccess0: $RegistryAccess$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext$Configurable
function simple(provider0: $HolderLookup$Provider$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext
}
export abstract class $CommandBuildContext$$Static implements $CommandBuildContext {
static "configurable"(registryAccess0: $RegistryAccess$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext$Configurable
static "simple"(provider0: $HolderLookup$Provider$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext
}
}

declare module "packages/net/minecraft/commands/$CommandSource" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"

export interface $CommandSource {
"acceptsFailure"(): boolean
"acceptsSuccess"(): boolean
"alwaysAccepts"(): boolean
"sendSystemMessage"(component0: $Component$$Type): void
"shouldInformAdmins"(): boolean
}

export namespace $CommandSource {
const NULL: $CommandSource
}
export abstract class $CommandSource$$Static implements $CommandSource {
static readonly "NULL": $CommandSource

}
}

declare module "packages/net/minecraft/commands/$Commands" {
import { $HolderLookup$Provider$$Type } from "packages/net/minecraft/core/$HolderLookup$Provider"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $ParseResults, $ParseResults$$Type } from "packages/com/mojang/brigadier/$ParseResults"
import { $CommandSyntaxException } from "packages/com/mojang/brigadier/exceptions/$CommandSyntaxException"
import { $Commands$CommandSelection$$Type } from "packages/net/minecraft/commands/$Commands$CommandSelection"
import { $ArgumentType$$Type } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $RequiredArgumentBuilder } from "packages/com/mojang/brigadier/builder/$RequiredArgumentBuilder"
import { $LiteralArgumentBuilder } from "packages/com/mojang/brigadier/builder/$LiteralArgumentBuilder"
import { $Commands$ParseFunction$$Type } from "packages/net/minecraft/commands/$Commands$ParseFunction"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $CommandBuildContext, $CommandBuildContext$$Type } from "packages/net/minecraft/commands/$CommandBuildContext"
import { $CommandDispatcher } from "packages/com/mojang/brigadier/$CommandDispatcher"

export class $Commands {
static readonly "LEVEL_ADMINS": integer
static readonly "LEVEL_ALL": integer
static readonly "LEVEL_GAMEMASTERS": integer
static readonly "LEVEL_MODERATORS": integer
static readonly "LEVEL_OWNERS": integer

constructor(commandSelection0: $Commands$CommandSelection$$Type, commandBuildContext1: $CommandBuildContext$$Type)

public static "argument"<T>(string0: string, argumentType1: $ArgumentType$$Type<T>): $RequiredArgumentBuilder<$CommandSourceStack, T>
public static "createValidationContext"(provider0: $HolderLookup$Provider$$Type): $CommandBuildContext
public static "createValidator"(parseFunction0: $Commands$ParseFunction$$Type): $Predicate<string>
public "getDispatcher"(): $CommandDispatcher<$CommandSourceStack>
public static "getParseException"<S>(parseResults0: $ParseResults$$Type<S>): $CommandSyntaxException
public static "literal"(string0: string): $LiteralArgumentBuilder<$CommandSourceStack>
public static "mapSource"<S>(parseResults0: $ParseResults$$Type<S>, unaryOperator1: $UnaryOperator$$Type<S>): $ParseResults<S>
public "performCommand"(parseResults0: $ParseResults$$Type<$CommandSourceStack$$Type>, string1: string): integer
public "performPrefixedCommand"(commandSourceStack0: $CommandSourceStack$$Type, string1: string): integer
public "sendCommands"(serverPlayer0: $ServerPlayer$$Type): void
public static "validate"(): void
get "dispatcher"(): $CommandDispatcher<$CommandSourceStack>
}
}

declare module "packages/net/minecraft/commands/$Commands$ParseFunction" {
import { $StringReader$$Type } from "packages/com/mojang/brigadier/$StringReader"

export interface $Commands$ParseFunction {
"parse"(stringReader0: $StringReader$$Type): void
}

export namespace $Commands$ParseFunction {
const probejs$$marker: never
}
export abstract class $Commands$ParseFunction$$Static implements $Commands$ParseFunction {
}
}

declare module "packages/net/minecraft/commands/arguments/$ArgumentSignatures" {
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $MessageSignature } from "packages/net/minecraft/network/chat/$MessageSignature"
import { $ArgumentSignatures$Signer$$Type } from "packages/net/minecraft/commands/arguments/$ArgumentSignatures$Signer"
import { $ArgumentSignatures$Entry, $ArgumentSignatures$Entry$$Type } from "packages/net/minecraft/commands/arguments/$ArgumentSignatures$Entry"
import { $SignableCommand$$Type } from "packages/net/minecraft/network/chat/$SignableCommand"

export class $ArgumentSignatures extends $Record {
static readonly "EMPTY": $ArgumentSignatures

constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(list0: $List$$Type<$ArgumentSignatures$Entry$$Type>)

public "entries"(): $List<$ArgumentSignatures$Entry>
public "get"(string0: string): $MessageSignature
public static "signCommand"(signableCommand0: $SignableCommand$$Type<any>, signer1: $ArgumentSignatures$Signer$$Type): $ArgumentSignatures
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceOrTagArgument$Info$Template" {
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $ResourceOrTagArgument } from "packages/net/minecraft/commands/arguments/$ResourceOrTagArgument"
import { $ArgumentTypeInfo$Template } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $ResourceOrTagArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceOrTagArgument<T>> {
public "type"(): $ArgumentTypeInfo<$ResourceOrTagArgument<T>, any>
}
}

declare module "packages/net/minecraft/commands/arguments/$ScoreHolderArgument$Info$Template" {
import { $ScoreHolderArgument } from "packages/net/minecraft/commands/arguments/$ScoreHolderArgument"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $ArgumentTypeInfo$Template } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $ScoreHolderArgument$Info$Template implements $ArgumentTypeInfo$Template<$ScoreHolderArgument> {
public "type"(): $ArgumentTypeInfo<$ScoreHolderArgument, any>
}
}

declare module "packages/net/minecraft/commands/synchronization/$SingletonArgumentInfo$Template" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $CommandBuildContext$$Type } from "packages/net/minecraft/commands/$CommandBuildContext"
import { $SingletonArgumentInfo$$Type } from "packages/net/minecraft/commands/synchronization/$SingletonArgumentInfo"
import { $ArgumentType } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $ArgumentTypeInfo$Template } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $SingletonArgumentInfo$Template implements $ArgumentTypeInfo$Template<A> {
constructor(singletonArgumentInfo0: $SingletonArgumentInfo$$Type<any>, function1: $Function$$Type<any, any>)

public "instantiate"(commandBuildContext0: $CommandBuildContext$$Type): A
public "type"(): $ArgumentTypeInfo<A, any>
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceOrTagKeyArgument" {
import { $Suggestions } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection } from "packages/java/util/$Collection"
import { $ResourceOrTagKeyArgument$Result } from "packages/net/minecraft/commands/arguments/$ResourceOrTagKeyArgument$Result"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $SuggestionsBuilder$$Type } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ArgumentType } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $DynamicCommandExceptionType$$Type } from "packages/com/mojang/brigadier/exceptions/$DynamicCommandExceptionType"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ResourceOrTagKeyArgument<T> implements $ArgumentType<$ResourceOrTagKeyArgument$Result<T>> {
constructor(resourceKey0: $ResourceKey$$Type<$Registry<T>>)

public "getExamples"(): $Collection<string>
public static "getResourceOrTagKey"<T>(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string, resourceKey2: $ResourceKey$$Type<$Registry<T>>, dynamicCommandExceptionType3: $DynamicCommandExceptionType$$Type): $ResourceOrTagKeyArgument$Result<T>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public static "resourceOrTagKey"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $ResourceOrTagKeyArgument<T>
get "examples"(): $Collection<string>
}
}

declare module "packages/net/minecraft/commands/$SharedSuggestionProvider" {
import { $Suggestions } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type } from "packages/net/minecraft/commands/$SharedSuggestionProvider$TextCoordinates"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $FeatureFlagSet } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RegistryAccess } from "packages/net/minecraft/core/$RegistryAccess"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Message } from "packages/com/mojang/brigadier/$Message"
import { $Stream, $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $SuggestionsBuilder$$Type } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $SharedSuggestionProvider$ElementSuggestionType$$Type } from "packages/net/minecraft/commands/$SharedSuggestionProvider$ElementSuggestionType"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"

export interface $SharedSuggestionProvider {
"customSuggestion"(commandContext0: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
"enabledFeatures"(): $FeatureFlagSet
"getAbsoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
"getAllTeams"(): $Collection<string>
"getAvailableSounds"(): $Stream<$ResourceLocation>
"getCustomTabSugggestions"(): $Collection<string>
"getOnlinePlayerNames"(): $Collection<string>
"getRecipeNames"(): $Stream<$ResourceLocation>
"getRelevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
"getSelectedEntities"(): $Collection<string>
"hasPermission"(int0: integer): boolean
"levels"(): $Set<$ResourceKey<$Level>>
"registryAccess"(): $RegistryAccess
"suggestRegistryElements"(registry0: $Registry$$Type<any>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type): void
"suggestRegistryElements"(resourceKey0: $ResourceKey$$Type<$Registry<any>>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type, commandContext3: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
get "absoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "allTeams"(): $Collection<string>
get "availableSounds"(): $Stream<$ResourceLocation>
get "customTabSugggestions"(): $Collection<string>
get "onlinePlayerNames"(): $Collection<string>
get "recipeNames"(): $Stream<$ResourceLocation>
get "relevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "selectedEntities"(): $Collection<string>
}

export namespace $SharedSuggestionProvider {
function filterResources<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
function filterResources<T>(iterable0: $Iterable$$Type<T>, string1: string, function2: $Function$$Type<T, $ResourceLocation>, consumer3: $Consumer$$Type<T>): void
function matchesSubStr(string0: string, string1: string): boolean
function suggest(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
function suggest(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest2DCoordinates(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
function suggestCoordinates(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
function suggestResource(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggestResource<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
function suggestResource<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
function suggestResource(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
function suggestResource(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
function suggestResource(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
}
export abstract class $SharedSuggestionProvider$$Static implements $SharedSuggestionProvider {
static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, function2: $Function$$Type<T, $ResourceLocation>, consumer3: $Consumer$$Type<T>): void
static "matchesSubStr"(string0: string, string1: string): boolean
static "suggest"(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
static "suggest"(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest"(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest2DCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
static "suggestCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggestResource"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
static "suggestResource"<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceOrTagArgument$Info" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ResourceOrTagArgument$Info$Template, $ResourceOrTagArgument$Info$Template$$Type } from "packages/net/minecraft/commands/arguments/$ResourceOrTagArgument$Info$Template"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $ResourceOrTagArgument, $ResourceOrTagArgument$$Type } from "packages/net/minecraft/commands/arguments/$ResourceOrTagArgument"

export class $ResourceOrTagArgument$Info<T> implements $ArgumentTypeInfo<$ResourceOrTagArgument<T>, $ResourceOrTagArgument$Info$Template<>> {
constructor()

public "serializeToJson"(template0: $ResourceOrTagArgument$Info$Template$$Type<>, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $ResourceOrTagArgument$Info$Template$$Type<>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(resourceOrTagArgument0: $ResourceOrTagArgument$$Type<T>): $ResourceOrTagArgument$Info$Template<>
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceKeyArgument$Info" {
import { $ResourceKeyArgument, $ResourceKeyArgument$$Type } from "packages/net/minecraft/commands/arguments/$ResourceKeyArgument"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $ResourceKeyArgument$Info$Template, $ResourceKeyArgument$Info$Template$$Type } from "packages/net/minecraft/commands/arguments/$ResourceKeyArgument$Info$Template"

export class $ResourceKeyArgument$Info<T> implements $ArgumentTypeInfo<$ResourceKeyArgument<T>, $ResourceKeyArgument$Info$Template<>> {
constructor()

public "serializeToJson"(template0: $ResourceKeyArgument$Info$Template$$Type<>, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $ResourceKeyArgument$Info$Template$$Type<>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(resourceKeyArgument0: $ResourceKeyArgument$$Type<T>): $ResourceKeyArgument$Info$Template<>
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceArgument" {
import { $Dynamic2CommandExceptionType } from "packages/com/mojang/brigadier/exceptions/$Dynamic2CommandExceptionType"
import { $Suggestions } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection } from "packages/java/util/$Collection"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $ArgumentType } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $StringReader$$Type } from "packages/com/mojang/brigadier/$StringReader"
import { $ConfiguredFeature } from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $CommandBuildContext$$Type } from "packages/net/minecraft/commands/$CommandBuildContext"
import { $Attribute } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $Dynamic3CommandExceptionType } from "packages/com/mojang/brigadier/exceptions/$Dynamic3CommandExceptionType"
import { $SuggestionsBuilder$$Type } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $MobEffect } from "packages/net/minecraft/world/effect/$MobEffect"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ResourceArgument<T> implements $ArgumentType<$Holder$Reference<T>> {
static readonly "ERROR_INVALID_RESOURCE_TYPE": $Dynamic3CommandExceptionType
static readonly "ERROR_UNKNOWN_RESOURCE": $Dynamic2CommandExceptionType

constructor(commandBuildContext0: $CommandBuildContext$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>)

public static "getAttribute"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$Attribute>
public static "getConfiguredFeature"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$ConfiguredFeature<any, any>>
public static "getEnchantment"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$Enchantment>
public static "getEntityType"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$EntityType<any>>
public "getExamples"(): $Collection<string>
public static "getMobEffect"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$MobEffect>
public static "getResource"<T>(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string, resourceKey2: $ResourceKey$$Type<$Registry<T>>): $Holder$Reference<T>
public static "getStructure"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$Structure>
public static "getSummonableEntityType"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): $Holder$Reference<$EntityType<any>>
public "listSuggestions"<S>(commandContext0: $CommandContext$$Type<S>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
public "parse"(stringReader0: $StringReader$$Type): $Holder$Reference<T>
public static "resource"<T>(commandBuildContext0: $CommandBuildContext$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>): $ResourceArgument<T>
get "examples"(): $Collection<string>
}
}

declare module "packages/net/minecraft/commands/$CommandFunction$CacheableFunction" {
import { $CommandFunction, $CommandFunction$$Type } from "packages/net/minecraft/commands/$CommandFunction"
import { $Optional } from "packages/java/util/$Optional"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ServerFunctionManager$$Type } from "packages/net/minecraft/server/$ServerFunctionManager"

export class $CommandFunction$CacheableFunction {
static readonly "NONE": $CommandFunction$CacheableFunction

constructor(resourceLocation0: $ResourceLocation$$Type)
constructor(commandFunction0: $CommandFunction$$Type)

public "get"(serverFunctionManager0: $ServerFunctionManager$$Type): $Optional<$CommandFunction>
public "getId"(): $ResourceLocation
get "id"(): $ResourceLocation
}
}

declare module "packages/net/minecraft/commands/$CommandBuildContext$Configurable" {
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CommandBuildContext$MissingTagAccessPolicy$$Type } from "packages/net/minecraft/commands/$CommandBuildContext$MissingTagAccessPolicy"
import { $HolderLookup$Provider$$Type } from "packages/net/minecraft/core/$HolderLookup$Provider"
import { $CommandBuildContext } from "packages/net/minecraft/commands/$CommandBuildContext"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $HolderLookup } from "packages/net/minecraft/core/$HolderLookup"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export interface $CommandBuildContext$Configurable extends $CommandBuildContext {
"holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
"missingTagAccessPolicy"(missingTagAccessPolicy0: $CommandBuildContext$MissingTagAccessPolicy$$Type): void
}

export namespace $CommandBuildContext$Configurable {
function configurable(registryAccess0: $RegistryAccess$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext$Configurable
function simple(provider0: $HolderLookup$Provider$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext
}
export abstract class $CommandBuildContext$Configurable$$Static implements $CommandBuildContext$Configurable {
static "configurable"(registryAccess0: $RegistryAccess$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext$Configurable
static "simple"(provider0: $HolderLookup$Provider$$Type, featureFlagSet1: $FeatureFlagSet$$Type): $CommandBuildContext
}
}

declare module "packages/net/minecraft/commands/arguments/$ResourceOrTagArgument$Result" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Optional } from "packages/java/util/$Optional"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export interface $ResourceOrTagArgument$Result<T> extends $Predicate<$Holder<T>> {
"and"(predicate0: $Predicate$$Type<$Holder$$Type<T>>): $Predicate<$Holder<T>>
"asPrintable"(): string
"cast"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$ResourceOrTagArgument$Result<E>>
"negate"(): $Predicate<$Holder<T>>
"or"(predicate0: $Predicate$$Type<$Holder$$Type<T>>): $Predicate<$Holder<T>>
"test"(holder0: $Holder$$Type<T>): boolean
"unwrap"(): $Either<$Holder$Reference<T>, $HolderSet$Named<T>>
}

export namespace $ResourceOrTagArgument$Result {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ResourceOrTagArgument$Result$$Static<T> implements $ResourceOrTagArgument$Result<T> {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/net/minecraft/commands/arguments/$ScoreHolderArgument$Info" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ScoreHolderArgument, $ScoreHolderArgument$$Type } from "packages/net/minecraft/commands/arguments/$ScoreHolderArgument"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $ScoreHolderArgument$Info$Template, $ScoreHolderArgument$Info$Template$$Type } from "packages/net/minecraft/commands/arguments/$ScoreHolderArgument$Info$Template"

export class $ScoreHolderArgument$Info implements $ArgumentTypeInfo<$ScoreHolderArgument, $ScoreHolderArgument$Info$Template> {
constructor()

public "serializeToJson"(template0: $ScoreHolderArgument$Info$Template$$Type, jsonObject1: $JsonObject$$Type): void
public "serializeToNetwork"(template0: $ScoreHolderArgument$Info$Template$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "unpack"(scoreHolderArgument0: $ScoreHolderArgument$$Type): $ScoreHolderArgument$Info$Template
}
}

declare module "packages/net/minecraft/commands/arguments/$ArgumentSignatures$Signer" {
import { $MessageSignature } from "packages/net/minecraft/network/chat/$MessageSignature"

export interface $ArgumentSignatures$Signer {
"sign"(string0: string): $MessageSignature
}

export namespace $ArgumentSignatures$Signer {
const probejs$$marker: never
}
export abstract class $ArgumentSignatures$Signer$$Static implements $ArgumentSignatures$Signer {
}
}

