declare module "packages/io/sedu/mc/parties/mixin/$LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor {
"invokeShouldDropLoot"(): boolean
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "packages/io/sedu/mc/parties/api/events/$PartyEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $UUID } from "packages/java/util/$UUID"

export class $PartyEvent extends $Event {
constructor()

public "getPartyId"(): $UUID
public "getPlayerId"(): $UUID
get "partyId"(): $UUID
get "playerId"(): $UUID
}
}

declare module "packages/io/sedu/mc/parties/api/events/$PartyEvent$Leave" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $PartyEvent } from "packages/io/sedu/mc/parties/api/events/$PartyEvent"

export class $PartyEvent$Leave extends $PartyEvent {
constructor(uUID0: $UUID$$Type, uUID1: $UUID$$Type)
constructor()

}
}

declare module "packages/io/sedu/mc/parties/util/$TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<T, U, V> {
"accept"(t0: T, u1: U, v2: V): void
"andThen"(triConsumer0: $TriConsumer$$Type<T, U, V>): $TriConsumer<T, U, V>
}

export namespace $TriConsumer {
const probejs$$marker: never
}
export abstract class $TriConsumer$$Static<T, U, V> implements $TriConsumer<T, U, V> {
}
}

declare module "packages/io/sedu/mc/parties/mixin/$MobAccessor" {
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"

export interface $MobAccessor {
"invokeDropCustomDeathLoot"(damageSource0: $DamageSource$$Type, int1: integer, boolean2: boolean): void
"invokeDropFromLootTable"(damageSource0: $DamageSource$$Type, boolean1: boolean): void
}

export namespace $MobAccessor {
const probejs$$marker: never
}
export abstract class $MobAccessor$$Static implements $MobAccessor {
}
}

declare module "packages/io/sedu/mc/parties/mixin/vanilla/$EntitySelectorMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntitySelectorMixin {
"getPlayerName"(): string
get "playerName"(): string
}

export namespace $EntitySelectorMixin {
const probejs$$marker: never
}
export abstract class $EntitySelectorMixin$$Static implements $EntitySelectorMixin {
}
}

declare module "packages/io/sedu/mc/parties/accessors/$TrimmedMessagesAccessor" {
import { $List } from "packages/java/util/$List"
import { $GuiMessage$Line } from "packages/net/minecraft/client/$GuiMessage$Line"

export interface $TrimmedMessagesAccessor {
"getTrimmedMessages"(): $List<$GuiMessage$Line>
get "trimmedMessages"(): $List<$GuiMessage$Line>
}

export namespace $TrimmedMessagesAccessor {
const probejs$$marker: never
}
export abstract class $TrimmedMessagesAccessor$$Static implements $TrimmedMessagesAccessor {
}
}

declare module "packages/io/sedu/mc/parties/api/events/$PartyEvent$Create" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $PartyEvent } from "packages/io/sedu/mc/parties/api/events/$PartyEvent"

export class $PartyEvent$Create extends $PartyEvent {
constructor(uUID0: $UUID$$Type, uUID1: $UUID$$Type)
constructor()

}
}

declare module "packages/io/sedu/mc/parties/client/overlay/gui/$GUIRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GUIRenderer {
"isRenderingUI"(): boolean
"setRenderMode"(boolean0: boolean): void
get "renderingUI"(): boolean
set "renderMode"(value: boolean)
}

export namespace $GUIRenderer {
const probejs$$marker: never
}
export abstract class $GUIRenderer$$Static implements $GUIRenderer {
}
}

declare module "packages/io/sedu/mc/parties/api/events/$PartyEvent$Online" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $TriConsumer$$Type } from "packages/io/sedu/mc/parties/util/$TriConsumer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PartyEvent } from "packages/io/sedu/mc/parties/api/events/$PartyEvent"

export class $PartyEvent$Online extends $PartyEvent {
constructor()
constructor(uUID0: $UUID$$Type, uUID1: $UUID$$Type)

public "forTrackersAndSelf"(triConsumer0: $TriConsumer$$Type<$UUID$$Type, $UUID$$Type, $Player$$Type>): void
public "forTrackersAndSelf"(biConsumer0: $BiConsumer$$Type<$UUID$$Type, $UUID$$Type>): void
}
}

declare module "packages/io/sedu/mc/parties/api/events/$PartyEvent$Disband" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $PartyEvent } from "packages/io/sedu/mc/parties/api/events/$PartyEvent"

export class $PartyEvent$Disband extends $PartyEvent {
constructor(uUID0: $UUID$$Type, uUID1: $UUID$$Type)
constructor()

}
}

declare module "packages/io/sedu/mc/parties/api/events/$PartyEvent$Join" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $PartyEvent } from "packages/io/sedu/mc/parties/api/events/$PartyEvent"

export class $PartyEvent$Join extends $PartyEvent {
constructor(uUID0: $UUID$$Type, uUID1: $UUID$$Type)
constructor()

}
}

