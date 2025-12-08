declare module "packages/dev/latvian/mods/kubejs/command/$CommandRegistryEventJS" {
import { JClass } from "packages/zzzank/probejs/docs/duck/JClass"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $LiteralCommandNode } from "packages/com/mojang/brigadier/tree/$LiteralCommandNode"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $LiteralArgumentBuilder$$Type } from "packages/com/mojang/brigadier/builder/$LiteralArgumentBuilder"
import { $ArgumentTypeWrappers } from "packages/dev/latvian/mods/kubejs/command/$ArgumentTypeWrappers"
import { $CommandBuildContext, $CommandBuildContext$$Type } from "packages/net/minecraft/commands/$CommandBuildContext"
import { $Commands$CommandSelection, $Commands$CommandSelection$$Type } from "packages/net/minecraft/commands/$Commands$CommandSelection"
import { $CommandDispatcher, $CommandDispatcher$$Type } from "packages/com/mojang/brigadier/$CommandDispatcher"
import { $Commands } from "packages/net/minecraft/commands/$Commands"
import { $SharedSuggestionProvider, $SharedSuggestionProvider$$Static } from "packages/net/minecraft/commands/$SharedSuggestionProvider"

export class $CommandRegistryEventJS extends $EventJS {
readonly "context": $CommandBuildContext
readonly "dispatcher": $CommandDispatcher<$CommandSourceStack>
readonly "selection": $Commands$CommandSelection

constructor(dispatcher: $CommandDispatcher$$Type<$CommandSourceStack$$Type>, context: $CommandBuildContext$$Type, selection: $Commands$CommandSelection$$Type)

public "getArguments"(): (JClass<$ArgumentTypeWrappers> & (typeof $ArgumentTypeWrappers))
public "getBuiltinSuggestions"(): (JClass<$SharedSuggestionProvider> & (typeof $SharedSuggestionProvider$$Static))
public "getCommands"(): (JClass<$Commands> & (typeof $Commands))
public "getRegistry"(): $CommandBuildContext
public "isForMultiPlayer"(): boolean
public "isForSinglePlayer"(): boolean
public "register"(command: $LiteralArgumentBuilder$$Type<$CommandSourceStack$$Type>): $LiteralCommandNode<$CommandSourceStack>
get "arguments"(): (JClass<$ArgumentTypeWrappers> & (typeof $ArgumentTypeWrappers))
get "builtinSuggestions"(): (JClass<$SharedSuggestionProvider> & (typeof $SharedSuggestionProvider$$Static))
get "commands"(): (JClass<$Commands> & (typeof $Commands))
get "registry"(): $CommandBuildContext
get "forMultiPlayer"(): boolean
get "forSinglePlayer"(): boolean
}
}

declare module "packages/dev/latvian/mods/kubejs/command/$ArgumentTypeWrappers" {
import { JClass } from "packages/zzzank/probejs/docs/duck/JClass"
import { $ArgumentTypeWrapper } from "packages/dev/latvian/mods/kubejs/command/$ArgumentTypeWrapper"
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $Enum } from "packages/java/lang/$Enum"
import { $CommandRegistryEventJS$$Type } from "packages/dev/latvian/mods/kubejs/command/$CommandRegistryEventJS"
import { $ArgumentType } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ArgumentTypeWrappers extends $Enum<$ArgumentTypeWrappers> implements $ArgumentTypeWrapper {
static readonly "ANGLE": $ArgumentTypeWrappers
static readonly "BLOCK_POS": $ArgumentTypeWrappers
static readonly "BLOCK_POS_LOADED": $ArgumentTypeWrappers
static readonly "BLOCK_PREDICATE": $ArgumentTypeWrappers
static readonly "BLOCK_STATE": $ArgumentTypeWrappers
static readonly "BOOLEAN": $ArgumentTypeWrappers
static readonly "COLOR": $ArgumentTypeWrappers
static readonly "COLUMN_POS": $ArgumentTypeWrappers
static readonly "COMPONENT": $ArgumentTypeWrappers
static readonly "DIMENSION": $ArgumentTypeWrappers
static readonly "DOUBLE": $ArgumentTypeWrappers
static readonly "ENTITIES": $ArgumentTypeWrappers
static readonly "ENTITY": $ArgumentTypeWrappers
static readonly "ENTITY_ANCHOR": $ArgumentTypeWrappers
static readonly "FLOAT": $ArgumentTypeWrappers
static readonly "FLOAT_RANGE": $ArgumentTypeWrappers
static readonly "GAME_PROFILE": $ArgumentTypeWrappers
static readonly "GREEDY_STRING": $ArgumentTypeWrappers
static readonly "INTEGER": $ArgumentTypeWrappers
static readonly "INT_RANGE": $ArgumentTypeWrappers
static readonly "ITEM_PREDICATE": $ArgumentTypeWrappers
static readonly "ITEM_SLOT": $ArgumentTypeWrappers
static readonly "ITEM_STACK": $ArgumentTypeWrappers
static readonly "LONG": $ArgumentTypeWrappers
static readonly "MESSAGE": $ArgumentTypeWrappers
static readonly "NBT_COMPOUND": $ArgumentTypeWrappers
static readonly "NBT_PATH": $ArgumentTypeWrappers
static readonly "NBT_TAG": $ArgumentTypeWrappers
static readonly "OBJECTIVE": $ArgumentTypeWrappers
static readonly "PARTICLE": $ArgumentTypeWrappers
static readonly "PLAYER": $ArgumentTypeWrappers
static readonly "PLAYERS": $ArgumentTypeWrappers
static readonly "RESOURCE_LOCATION": $ArgumentTypeWrappers
static readonly "ROTATION": $ArgumentTypeWrappers
static readonly "STRING": $ArgumentTypeWrappers
static readonly "SWIZZLE": $ArgumentTypeWrappers
static readonly "TIME": $ArgumentTypeWrappers
static readonly "UUID": $ArgumentTypeWrappers
static readonly "VEC2": $ArgumentTypeWrappers
static readonly "VEC2_CENTERED": $ArgumentTypeWrappers
static readonly "VEC3": $ArgumentTypeWrappers
static readonly "VEC3_CENTERED": $ArgumentTypeWrappers
static readonly "WORD": $ArgumentTypeWrappers

public static "byName"(name: $ResourceLocation$$Type): JClass<any>
public "create"(event: $CommandRegistryEventJS$$Type): $ArgumentType<any>
public "getResult"(context: $CommandContext$$Type<$CommandSourceStack$$Type>, input: string): any
public static "printAll"(): void
public static "registry"<T>(event: $CommandRegistryEventJS$$Type, reg: $ResourceLocation$$Type): $ArgumentTypeWrapper
public "time"(minRequired: integer): $ArgumentTypeWrapper
public static "valueOf"(name: string): $ArgumentTypeWrappers
public static "values"(): $ArgumentTypeWrappers[]
}
}

declare module "packages/dev/latvian/mods/kubejs/command/$ArgumentTypeWrapper" {
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $CommandRegistryEventJS$$Type } from "packages/dev/latvian/mods/kubejs/command/$CommandRegistryEventJS"
import { $ArgumentType } from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"

export interface $ArgumentTypeWrapper {
"create"(commandRegistryEventJS0: $CommandRegistryEventJS$$Type): $ArgumentType<any>
"getResult"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): any
}

export namespace $ArgumentTypeWrapper {
const probejs$$marker: never
}
export abstract class $ArgumentTypeWrapper$$Static implements $ArgumentTypeWrapper {
}
}

