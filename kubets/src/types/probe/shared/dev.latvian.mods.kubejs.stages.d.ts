declare module "packages/dev/latvian/mods/kubejs/stages/$Stages" {
import { $StageChangeEvent$$Type } from "packages/dev/latvian/mods/kubejs/stages/$StageChangeEvent"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $StageCreationEvent$$Type } from "packages/dev/latvian/mods/kubejs/stages/$StageCreationEvent"

export class $Stages {
readonly "player": $Player

constructor(p: $Player$$Type)

public "add"(stage: string): boolean
public "addNoUpdate"(string0: string): boolean
public static "added"(event: $Consumer$$Type<$StageChangeEvent$$Type>): void
public "clear"(): boolean
public static "create"(player: $Player$$Type): $Stages
public static "get"(player: $Player$$Type): $Stages
public "getAll"(): $Collection<string>
public "has"(stage: string): boolean
public static "invokeAdded"(stages: $Stages$$Type, stage: string): void
public static "invokeRemoved"(stages: $Stages$$Type, stage: string): void
public static "overrideCreation"(event: $Consumer$$Type<$StageCreationEvent$$Type>): void
public "remove"(stage: string): boolean
public "removeNoUpdate"(string0: string): boolean
public static "removed"(event: $Consumer$$Type<$StageChangeEvent$$Type>): void
public "replace"(stages: $Collection$$Type<string>): void
public "set"(stage: string, enabled: boolean): boolean
public "sync"(): void
public "toggle"(stage: string): boolean
get "all"(): $Collection<string>
}
}

declare module "packages/dev/latvian/mods/kubejs/stages/$StageChangeEvent" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $Stages } from "packages/dev/latvian/mods/kubejs/stages/$Stages"

export class $StageChangeEvent {
public "getPlayer"(): $Player
public "getPlayerStages"(): $Stages
public "getStage"(): string
get "player"(): $Player
get "playerStages"(): $Stages
get "stage"(): string
}
}

declare module "packages/dev/latvian/mods/kubejs/stages/$StageCreationEvent" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $Stages, $Stages$$Type } from "packages/dev/latvian/mods/kubejs/stages/$Stages"

export class $StageCreationEvent {
public "getPlayer"(): $Player
public "getPlayerStages"(): $Stages
public "setPlayerStages"(s: $Stages$$Type): void
get "player"(): $Player
get "playerStages"(): $Stages
set "playerStages"(value: $Stages$$Type)
}
}

