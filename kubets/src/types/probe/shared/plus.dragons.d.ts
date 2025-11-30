declare module "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/critereon/$AbstractTrigger" {
import { $CriterionTrigger$Listener$$Type } from "packages/net/minecraft/advancements/$CriterionTrigger$Listener"
import { $PlayerAdvancements$$Type } from "packages/net/minecraft/server/$PlayerAdvancements"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $CriterionTrigger } from "packages/net/minecraft/advancements/$CriterionTrigger"
import { $AbstractTrigger$Instance } from "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/critereon/$AbstractTrigger$Instance"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $DeserializationContext$$Type } from "packages/net/minecraft/advancements/critereon/$DeserializationContext"

export class $AbstractTrigger<T extends $AbstractTrigger$Instance> implements $CriterionTrigger<T> {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "addPlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
public "createInstance"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): T
public "getId"(): $ResourceLocation
public "removePlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
public "removePlayerListeners"(playerAdvancements0: $PlayerAdvancements$$Type): void
get "id"(): $ResourceLocation
}
}

declare module "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/$CreateAdvancementAccess" {
import { $AdvancementHolder$$Type } from "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/$AdvancementHolder"

export interface $CreateAdvancementAccess {
"fromAdvancementHolder"(advancementHolder0: $AdvancementHolder$$Type): void
}

export namespace $CreateAdvancementAccess {
const probejs$$marker: never
}
export abstract class $CreateAdvancementAccess$$Static implements $CreateAdvancementAccess {
}
}

declare module "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/critereon/$AbstractTrigger$Instance" {
import { $AbstractCriterionTriggerInstance } from "packages/net/minecraft/advancements/critereon/$AbstractCriterionTriggerInstance"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ContextAwarePredicate$$Type } from "packages/net/minecraft/advancements/critereon/$ContextAwarePredicate"

export class $AbstractTrigger$Instance extends $AbstractCriterionTriggerInstance {
constructor(resourceLocation0: $ResourceLocation$$Type, contextAwarePredicate1: $ContextAwarePredicate$$Type)

}
}

declare module "packages/plus/dragons/createenchantmentindustry/foundation/mixin/dragonLibLegacy/$CreateAdvancementConstructor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CreateAdvancementConstructor {
}

export namespace $CreateAdvancementConstructor {
const probejs$$marker: never
}
export abstract class $CreateAdvancementConstructor$$Static implements $CreateAdvancementConstructor {
}
}

declare module "packages/plus/dragons/createenchantmentindustry/content/contraptions/enchanting/printer/$PrintEntry" {
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $PrintEntry {
"addToGoggleTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean, itemStack2: $ItemStack$$Type): void
"getDisplaySourceContent"(itemStack0: $ItemStack$$Type): $MutableComponent
"id"(): $ResourceLocation
"isTooExpensive"(itemStack0: $ItemStack$$Type, int1: integer): boolean
"match"(itemStack0: $ItemStack$$Type): boolean
"print"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): $ItemStack
"requiredInkAmount"(itemStack0: $ItemStack$$Type): integer
"requiredInkType"(itemStack0: $ItemStack$$Type): $Fluid
"valid"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
}

export namespace $PrintEntry {
const probejs$$marker: never
}
export abstract class $PrintEntry$$Static implements $PrintEntry {
}
}

declare module "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/$AdvancementHolder" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $SimpleTrigger } from "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/critereon/$SimpleTrigger"
import { $List } from "packages/java/util/$List"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CreateAdvancement } from "packages/com/simibubi/create/foundation/advancement/$CreateAdvancement"
import { $Advancement$$Type } from "packages/net/minecraft/advancements/$Advancement"
import { $Map } from "packages/java/util/$Map"

export class $AdvancementHolder {
static readonly "ENTRIES_MAP": $Map<string, $List<$AdvancementHolder>>

public "appendToLang"(jsonObject0: $JsonObject$$Type): void
public "asCreateAdvancement"(): $CreateAdvancement
public "awardTo"(player0: $Player$$Type): void
public "description"(): string
public "descriptionKey"(): string
public "getTrigger"(): $SimpleTrigger
public "id"(): $ResourceLocation
public "isAlreadyAwardedTo"(player0: $Player$$Type): boolean
public static "provideLangEntries"(string0: string): $JsonObject
public "save"(consumer0: $Consumer$$Type<$Advancement$$Type>): void
public "title"(): string
public "titleKey"(): string
get "trigger"(): $SimpleTrigger
}
}

declare module "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/critereon/$SimpleTrigger" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SimpleTrigger$Instance } from "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/critereon/$SimpleTrigger$Instance"
import { $AbstractTrigger } from "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/critereon/$AbstractTrigger"
import { $DeserializationContext$$Type } from "packages/net/minecraft/advancements/critereon/$DeserializationContext"

export class $SimpleTrigger extends $AbstractTrigger<$SimpleTrigger$Instance> {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "createInstance"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): $SimpleTrigger$Instance
public "instance"(): $SimpleTrigger$Instance
public "trigger"(serverPlayer0: $ServerPlayer$$Type): void
}
}

declare module "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/critereon/$SimpleTrigger$Instance" {
import { $AbstractTrigger$Instance } from "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/critereon/$AbstractTrigger$Instance"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $SimpleTrigger$Instance extends $AbstractTrigger$Instance {
constructor(resourceLocation0: $ResourceLocation$$Type)

}
}

declare module "packages/plus/dragons/createenchantmentindustry/content/contraptions/fluids/ink/$InkRenderingCamera" {
import { $ViewportEvent$ComputeFogColor$$Type } from "packages/net/minecraftforge/client/event/$ViewportEvent$ComputeFogColor"

export interface $InkRenderingCamera {
"isInInk"(): boolean
get "inInk"(): boolean
}

export namespace $InkRenderingCamera {
function handleInkFogColor(computeFogColor0: $ViewportEvent$ComputeFogColor$$Type): void
}
export abstract class $InkRenderingCamera$$Static implements $InkRenderingCamera {
static "handleInkFogColor"(computeFogColor0: $ViewportEvent$ComputeFogColor$$Type): void
}
}

declare module "packages/plus/dragons/createenchantmentindustry/api/$PrintEntryRegisterEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $PrintEntry$$Type } from "packages/plus/dragons/createenchantmentindustry/content/contraptions/enchanting/printer/$PrintEntry"

export class $PrintEntryRegisterEvent extends $Event {
constructor()

public "register"(printEntry0: $PrintEntry$$Type): void
}
}

