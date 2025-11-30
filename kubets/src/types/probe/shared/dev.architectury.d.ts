declare module "packages/dev/architectury/utils/$OptionalSupplier" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export interface $OptionalSupplier<T> extends $Supplier<T> {
"get"(): T
"getOrNull"(): T
"ifPresent"(action: $Consumer$$Type<T>): void
"ifPresentOrElse"(action: $Consumer$$Type<T>, emptyAction: $Runnable$$Type): void
"isPresent"(): boolean
"orElse"(other: T): T
"orElseGet"(supplier: $Supplier$$Type<T>): T
"stream"(): $Stream<T>
"toOptional"(): $Optional<T>
get "orNull"(): T
get "present"(): boolean
}

export namespace $OptionalSupplier {
const probejs$$marker: never
}
export abstract class $OptionalSupplier$$Static<T> implements $OptionalSupplier<T> {
}
}

declare module "packages/dev/architectury/registry/registries/$RegistrarBuilder" {
import { $RegistrarOption$$Type } from "packages/dev/architectury/registry/registries/options/$RegistrarOption"
import { $Registrar } from "packages/dev/architectury/registry/registries/$Registrar"

export interface $RegistrarBuilder<T> {
"build"(): $Registrar<T>
"option"(registrarOption0: $RegistrarOption$$Type): $RegistrarBuilder<T>
"saveToDisc"(): $RegistrarBuilder<T>
"syncToClients"(): $RegistrarBuilder<T>
}

export namespace $RegistrarBuilder {
const probejs$$marker: never
}
export abstract class $RegistrarBuilder$$Static<T> implements $RegistrarBuilder<T> {
}
}

declare module "packages/dev/architectury/registry/registries/$RegistrarManager" {
import { $RegistrarBuilder } from "packages/dev/architectury/registry/registries/$RegistrarBuilder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Registrar, $Registrar$$Type } from "packages/dev/architectury/registry/registries/$Registrar"

export class $RegistrarManager {
public "builder"<T>(registryId: $ResourceLocation$$Type, ...typeGetter: T[]): $RegistrarBuilder<T>
public "forRegistry"<T>(key: $ResourceKey$$Type<$Registry<T>>, callback: $Consumer$$Type<$Registrar$$Type<T>>): void
/** @deprecated */
public "get"<T>(registry: $Registry$$Type<T>): $Registrar<T>
public static "get"(modId: string): $RegistrarManager
public "get"<T>(key: $ResourceKey$$Type<$Registry<T>>): $Registrar<T>
public static "getId"<T>(object: T, fallback: $ResourceKey$$Type<$Registry<T>>): $ResourceLocation
/** @deprecated */
public static "getId"<T>(object: T, fallback: $Registry$$Type<T>): $ResourceLocation
public "getModId"(): string
get "modId"(): string
}
}

declare module "packages/dev/architectury/registry/registries/$DeferredSupplier" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $OptionalSupplier } from "packages/dev/architectury/utils/$OptionalSupplier"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export interface $DeferredSupplier<T> extends $OptionalSupplier<T> {
"get"(): T
"getId"(): $ResourceLocation
"getKey"(): $ResourceKey<T>
"getOrNull"(): T
"getRegistryId"(): $ResourceLocation
"getRegistryKey"(): $ResourceKey<$Registry<T>>
"ifPresent"(action: $Consumer$$Type<T>): void
"ifPresentOrElse"(action: $Consumer$$Type<T>, emptyAction: $Runnable$$Type): void
"isPresent"(): boolean
"orElse"(other: T): T
"orElseGet"(supplier: $Supplier$$Type<T>): T
"stream"(): $Stream<T>
"toOptional"(): $Optional<T>
get "id"(): $ResourceLocation
get "key"(): $ResourceKey<T>
get "orNull"(): T
get "registryId"(): $ResourceLocation
get "registryKey"(): $ResourceKey<$Registry<T>>
get "present"(): boolean
}

export namespace $DeferredSupplier {
const probejs$$marker: never
}
export abstract class $DeferredSupplier$$Static<T> implements $DeferredSupplier<T> {
}
}

declare module "packages/dev/architectury/event/events/common/$CommandPerformEvent" {
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $Event } from "packages/dev/architectury/event/$Event"
import { $EventActor } from "packages/dev/architectury/event/$EventActor"
import { $ParseResults, $ParseResults$$Type } from "packages/com/mojang/brigadier/$ParseResults"

export class $CommandPerformEvent {
static readonly "EVENT": $Event<$EventActor<$CommandPerformEvent>>

constructor(results: $ParseResults$$Type<$CommandSourceStack$$Type>, throwable: $Throwable$$Type)

public "getResults"(): $ParseResults<$CommandSourceStack>
public "getThrowable"(): $Throwable
public "setResults"(results: $ParseResults$$Type<$CommandSourceStack$$Type>): void
public "setThrowable"(throwable: $Throwable$$Type): void
get "results"(): $ParseResults<$CommandSourceStack>
get "throwable"(): $Throwable
set "results"(value: $ParseResults$$Type<$CommandSourceStack$$Type>)
set "throwable"(value: $Throwable$$Type)
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedLiquidBlockExtension" {
import { $FlowingFluid } from "packages/net/minecraft/world/level/material/$FlowingFluid"

export interface $InjectedLiquidBlockExtension {
"arch$getFluid"(): $FlowingFluid
}

export namespace $InjectedLiquidBlockExtension {
const probejs$$marker: never
}
export abstract class $InjectedLiquidBlockExtension$$Static implements $InjectedLiquidBlockExtension {
}
}

declare module "packages/dev/architectury/hooks/level/biome/$SpawnProperties" {
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"
import { $MobSpawnSettings$SpawnerData } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import { $List } from "packages/java/util/$List"
import { $MobSpawnSettings$MobSpawnCost } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $Map } from "packages/java/util/$Map"

export interface $SpawnProperties {
"getCreatureProbability"(): float
"getMobSpawnCosts"(): $Map<$EntityType<any>, $MobSpawnSettings$MobSpawnCost>
"getSpawners"(): $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>
get "creatureProbability"(): float
get "mobSpawnCosts"(): $Map<$EntityType<any>, $MobSpawnSettings$MobSpawnCost>
get "spawners"(): $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>
}

export namespace $SpawnProperties {
const probejs$$marker: never
}
export abstract class $SpawnProperties$$Static implements $SpawnProperties {
}
}

declare module "packages/dev/architectury/fluid/$FluidStack" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $FluidStack {
public static "bucketAmount"(): long
public "copy"(): $FluidStack
public "copyWithAmount"(amount: long): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long, tag: $CompoundTag$$Type): $FluidStack
public static "create"(stack: $FluidStack$$Type, amount: long): $FluidStack
public static "create"(fluid: $Supplier$$Type<$Fluid>, amount: long, tag: $CompoundTag$$Type): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long): $FluidStack
public static "create"(fluid: $Supplier$$Type<$Fluid>, amount: long): $FluidStack
public static "empty"(): $FluidStack
public "getAmount"(): long
public "getChildTag"(childName: string): $CompoundTag
public "getFluid"(): $Fluid
public "getName"(): $Component
public "getOrCreateChildTag"(childName: string): $CompoundTag
public "getOrCreateTag"(): $CompoundTag
public "getRawFluid"(): $Fluid
public "getRawFluidSupplier"(): $Supplier<$Fluid>
public "getTag"(): $CompoundTag
public "getTranslationKey"(): string
public "grow"(amount: long): void
public "hasTag"(): boolean
public static "init"(): void
public "isEmpty"(): boolean
public "isFluidEqual"(other: $FluidStack$$Type): boolean
public "isFluidStackEqual"(other: $FluidStack$$Type): boolean
public "isTagEqual"(other: $FluidStack$$Type): boolean
public static "read"(tag: $CompoundTag$$Type): $FluidStack
public static "read"(buf: $FriendlyByteBuf$$Type): $FluidStack
public "removeChildTag"(childName: string): void
public "setAmount"(amount: long): void
public "setTag"(tag: $CompoundTag$$Type): void
public "shrink"(amount: long): void
public "write"(buf: $FriendlyByteBuf$$Type): void
public "write"(tag: $CompoundTag$$Type): $CompoundTag
get "amount"(): long
get "fluid"(): $Fluid
get "name"(): $Component
get "orCreateTag"(): $CompoundTag
get "rawFluid"(): $Fluid
get "rawFluidSupplier"(): $Supplier<$Fluid>
get "tag"(): $CompoundTag
get "translationKey"(): string
set "amount"(value: long)
set "tag"(value: $CompoundTag$$Type)
}
}

declare module "packages/dev/architectury/event/events/client/$ClientCommandRegistrationEvent$ClientCommandSourceStack" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Suggestions } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type } from "packages/net/minecraft/commands/$SharedSuggestionProvider$TextCoordinates"
import { $FeatureFlagSet } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ClientLevel } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Stream, $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $SuggestionsBuilder$$Type } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $SharedSuggestionProvider$ElementSuggestionType$$Type } from "packages/net/minecraft/commands/$SharedSuggestionProvider$ElementSuggestionType"
import { $CommandContext$$Type } from "packages/com/mojang/brigadier/context/$CommandContext"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Vec2 } from "packages/net/minecraft/world/phys/$Vec2"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $RegistryAccess } from "packages/net/minecraft/core/$RegistryAccess"
import { $LocalPlayer } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $Set } from "packages/java/util/$Set"
import { $Message } from "packages/com/mojang/brigadier/$Message"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $SharedSuggestionProvider } from "packages/net/minecraft/commands/$SharedSuggestionProvider"

export interface $ClientCommandRegistrationEvent$ClientCommandSourceStack extends $SharedSuggestionProvider {
"arch$getLevel"(): $ClientLevel
"arch$getPlayer"(): $LocalPlayer
"arch$getPosition"(): $Vec3
"arch$getRotation"(): $Vec2
"arch$sendFailure"(component0: $Component$$Type): void
"arch$sendSuccess"(supplier0: $Supplier$$Type<$Component>, boolean1: boolean): void
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
"suggestRegistryElements"(resourceKey0: $ResourceKey$$Type<$Registry<any>>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type, commandContext3: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
"suggestRegistryElements"(registry0: $Registry$$Type<any>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type): void
get "absoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "allTeams"(): $Collection<string>
get "availableSounds"(): $Stream<$ResourceLocation>
get "customTabSugggestions"(): $Collection<string>
get "onlinePlayerNames"(): $Collection<string>
get "recipeNames"(): $Stream<$ResourceLocation>
get "relevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "selectedEntities"(): $Collection<string>
}

export namespace $ClientCommandRegistrationEvent$ClientCommandSourceStack {
function filterResources<T>(iterable0: $Iterable$$Type<T>, string1: string, function2: $Function$$Type<T, $ResourceLocation>, consumer3: $Consumer$$Type<T>): void
function filterResources<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
function matchesSubStr(string0: string, string1: string): boolean
function suggest<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
function suggest(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest2DCoordinates(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
function suggestCoordinates(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
function suggestResource<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
function suggestResource<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
function suggestResource(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggestResource(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
function suggestResource(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
function suggestResource(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
}
export abstract class $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Static implements $ClientCommandRegistrationEvent$ClientCommandSourceStack {
static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, function2: $Function$$Type<T, $ResourceLocation>, consumer3: $Consumer$$Type<T>): void
static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
static "matchesSubStr"(string0: string, string1: string): boolean
static "suggest"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
static "suggest"(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest"(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest"(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest2DCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
static "suggestCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
static "suggestResource"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
static "suggestResource"<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
}
}

declare module "packages/dev/architectury/event/$CompoundEventResult" {
import { $InteractionResultHolder } from "packages/net/minecraft/world/$InteractionResultHolder"
import { $EventResult } from "packages/dev/architectury/event/$EventResult"

export class $CompoundEventResult<T> {
public "asMinecraft"(): $InteractionResultHolder<T>
public static "interrupt"<T>(value: boolean, object: T): $CompoundEventResult<T>
public static "interruptDefault"<T>(object: T): $CompoundEventResult<T>
public static "interruptFalse"<T>(object: T): $CompoundEventResult<T>
public static "interruptTrue"<T>(object: T): $CompoundEventResult<T>
public "interruptsFurtherEvaluation"(): boolean
public "isEmpty"(): boolean
public "isFalse"(): boolean
public "isPresent"(): boolean
public "isTrue"(): boolean
public "object"(): T
public static "pass"<T>(): $CompoundEventResult<T>
public "result"(): $EventResult
public "value"(): boolean
get "empty"(): boolean
get "false"(): boolean
get "present"(): boolean
get "true"(): boolean
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedGameEventExtension" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $GameEvent } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $InjectedRegistryEntryExtension } from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedGameEventExtension extends $InjectedRegistryEntryExtension<$GameEvent> {
"arch$holder"(): $Holder<$GameEvent>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedGameEventExtension {
const probejs$$marker: never
}
export abstract class $InjectedGameEventExtension$$Static implements $InjectedGameEventExtension {
}
}

declare module "packages/dev/architectury/registry/menu/$MenuRegistry$ScreenFactory" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Screen } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $MenuAccess } from "packages/net/minecraft/client/gui/screens/inventory/$MenuAccess"

export interface $MenuRegistry$ScreenFactory<H extends $AbstractContainerMenu, S extends ($Screen & $MenuAccess<H>)> {
"create"(h0: H, inventory1: $Inventory$$Type, component2: $Component$$Type): S
}

export namespace $MenuRegistry$ScreenFactory {
const probejs$$marker: never
}
export abstract class $MenuRegistry$ScreenFactory$$Static<H extends $AbstractContainerMenu, S extends ($Screen & $MenuAccess<H>)> implements $MenuRegistry$ScreenFactory<H, S> {
}
}

declare module "packages/dev/architectury/hooks/level/biome/$GenerationProperties" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $PlacedFeature } from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import { $GenerationStep$Decoration$$Type } from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import { $List } from "packages/java/util/$List"
import { $ConfiguredWorldCarver } from "packages/net/minecraft/world/level/levelgen/carver/$ConfiguredWorldCarver"
import { $GenerationStep$Carving$$Type } from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Carving"
import { $Iterable } from "packages/java/lang/$Iterable"

export interface $GenerationProperties {
"getCarvers"(carving0: $GenerationStep$Carving$$Type): $Iterable<$Holder<$ConfiguredWorldCarver<any>>>
"getFeatures"(decoration0: $GenerationStep$Decoration$$Type): $Iterable<$Holder<$PlacedFeature>>
"getFeatures"(): $List<$Iterable<$Holder<$PlacedFeature>>>
get "features"(): $List<$Iterable<$Holder<$PlacedFeature>>>
}

export namespace $GenerationProperties {
const probejs$$marker: never
}
export abstract class $GenerationProperties$$Static implements $GenerationProperties {
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedEntityTypeExtension" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"
import { $InjectedRegistryEntryExtension } from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedEntityTypeExtension extends $InjectedRegistryEntryExtension<$EntityType<any>> {
"arch$holder"(): $Holder<$EntityType<any>>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedEntityTypeExtension {
const probejs$$marker: never
}
export abstract class $InjectedEntityTypeExtension$$Static implements $InjectedEntityTypeExtension {
}
}

declare module "packages/dev/architectury/event/$EventResult" {
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"

export class $EventResult {
public "asMinecraft"(): $InteractionResult
public static "interrupt"(value: boolean): $EventResult
public static "interruptDefault"(): $EventResult
public static "interruptFalse"(): $EventResult
public static "interruptTrue"(): $EventResult
public "interruptsFurtherEvaluation"(): boolean
public "isEmpty"(): boolean
public "isFalse"(): boolean
public "isPresent"(): boolean
public "isTrue"(): boolean
public static "pass"(): $EventResult
public "value"(): boolean
get "empty"(): boolean
get "false"(): boolean
get "present"(): boolean
get "true"(): boolean
}
}

declare module "packages/dev/architectury/event/$Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Event<T> {
"clearListeners"(): void
"invoker"(): T
"isRegistered"(t0: T): boolean
"register"(t0: T): void
"unregister"(t0: T): void
}

export namespace $Event {
const probejs$$marker: never
}
export abstract class $Event$$Static<T> implements $Event<T> {
}
}

declare module "packages/dev/architectury/event/$EventActor" {
import { $EventResult } from "packages/dev/architectury/event/$EventResult"

export interface $EventActor<T> {
"act"(t0: T): $EventResult
}

export namespace $EventActor {
const probejs$$marker: never
}
export abstract class $EventActor$$Static<T> implements $EventActor<T> {
}
}

declare module "packages/dev/architectury/utils/value/$IntValue" {
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $IntConsumer, $IntConsumer$$Type } from "packages/it/unimi/dsi/fastutil/ints/$IntConsumer"
import { $Value } from "packages/dev/architectury/utils/value/$Value"
import { $IntSupplier } from "packages/java/util/function/$IntSupplier"

export interface $IntValue extends $Value<integer>, $IntSupplier, $IntConsumer {
/** @deprecated */
"accept"(integer0: integer): void
"accept"(int0: integer): void
/** @deprecated */
"andThen"(consumer0: $Consumer$$Type<integer>): $Consumer<integer>
"andThen"(intConsumer0: $IntConsumer$$Type): $IntConsumer
"get"(): integer
"getAsInt"(): integer
get "asInt"(): integer
}

export namespace $IntValue {
const probejs$$marker: never
}
export abstract class $IntValue$$Static implements $IntValue {
}
}

declare module "packages/dev/architectury/hooks/level/biome/$ClimateProperties" {
import { $Biome$TemperatureModifier } from "packages/net/minecraft/world/level/biome/$Biome$TemperatureModifier"

export interface $ClimateProperties {
"getDownfall"(): float
"getTemperature"(): float
"getTemperatureModifier"(): $Biome$TemperatureModifier
"hasPrecipitation"(): boolean
get "downfall"(): float
get "temperature"(): float
get "temperatureModifier"(): $Biome$TemperatureModifier
}

export namespace $ClimateProperties {
const probejs$$marker: never
}
export abstract class $ClimateProperties$$Static implements $ClimateProperties {
}
}

declare module "packages/dev/architectury/impl/$ItemPropertiesExtensionImpl" {
import { $CreativeModeTab } from "packages/net/minecraft/world/item/$CreativeModeTab"
import { $DeferredSupplier } from "packages/dev/architectury/registry/registries/$DeferredSupplier"

export interface $ItemPropertiesExtensionImpl {
"arch$getTab"(): $CreativeModeTab
"arch$getTabSupplier"(): $DeferredSupplier<$CreativeModeTab>
}

export namespace $ItemPropertiesExtensionImpl {
const probejs$$marker: never
}
export abstract class $ItemPropertiesExtensionImpl$$Static implements $ItemPropertiesExtensionImpl {
}
}

declare module "packages/dev/architectury/core/fluid/$ArchitecturyFluidAttributes" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $FluidStack$$Type } from "packages/dev/architectury/fluid/$FluidStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Rarity } from "packages/net/minecraft/world/item/$Rarity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $LiquidBlock } from "packages/net/minecraft/world/level/block/$LiquidBlock"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $ArchitecturyFluidAttributes {
"canConvertToSource"(): boolean
"getBlock"(): $LiquidBlock
"getBucketItem"(): $Item
/** @deprecated */
"getColor"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getColor"(): integer
"getColor"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): integer
"getColor"(stack: $FluidStack$$Type): integer
"getDensity"(stack: $FluidStack$$Type): integer
"getDensity"(): integer
"getDensity"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getDropOff"(levelReader0: $LevelReader$$Type): integer
"getDropOff"(): integer
"getEmptySound"(): $SoundEvent
"getEmptySound"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $SoundEvent
"getEmptySound"(stack: $FluidStack$$Type): $SoundEvent
"getExplosionResistance"(): float
"getFillSound"(stack: $FluidStack$$Type): $SoundEvent
"getFillSound"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $SoundEvent
"getFillSound"(): $SoundEvent
"getFlowingFluid"(): $Fluid
"getFlowingTexture"(): $ResourceLocation
"getFlowingTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
/** @deprecated */
"getFlowingTexture"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $ResourceLocation
"getFlowingTexture"(stack: $FluidStack$$Type): $ResourceLocation
"getLuminosity"(): integer
"getLuminosity"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getLuminosity"(stack: $FluidStack$$Type): integer
"getName"(): $Component
"getName"(stack: $FluidStack$$Type): $Component
"getOverlayTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
"getOverlayTexture"(): $ResourceLocation
"getOverlayTexture"(stack: $FluidStack$$Type): $ResourceLocation
"getRarity"(): $Rarity
"getRarity"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $Rarity
"getRarity"(stack: $FluidStack$$Type): $Rarity
"getSlopeFindDistance"(): integer
"getSlopeFindDistance"(levelReader0: $LevelReader$$Type): integer
"getSourceFluid"(): $Fluid
"getSourceTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
"getSourceTexture"(): $ResourceLocation
"getSourceTexture"(stack: $FluidStack$$Type): $ResourceLocation
/** @deprecated */
"getSourceTexture"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): $ResourceLocation
"getTemperature"(): integer
"getTemperature"(stack: $FluidStack$$Type): integer
"getTemperature"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getTickDelay"(levelReader0: $LevelReader$$Type): integer
"getTickDelay"(): integer
"getTranslationKey"(fluidStack0: $FluidStack$$Type): string
"getTranslationKey"(): string
"getViscosity"(): integer
"getViscosity"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getViscosity"(stack: $FluidStack$$Type): integer
"isLighterThanAir"(): boolean
"isLighterThanAir"(stack: $FluidStack$$Type): boolean
"isLighterThanAir"(fluidStack0: $FluidStack$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): boolean
get "block"(): $LiquidBlock
get "bucketItem"(): $Item
get "color"(): integer
get "density"(): integer
get "dropOff"(): integer
get "emptySound"(): $SoundEvent
get "explosionResistance"(): float
get "fillSound"(): $SoundEvent
get "flowingFluid"(): $Fluid
get "flowingTexture"(): $ResourceLocation
get "luminosity"(): integer
get "name"(): $Component
get "overlayTexture"(): $ResourceLocation
get "rarity"(): $Rarity
get "slopeFindDistance"(): integer
get "sourceFluid"(): $Fluid
get "sourceTexture"(): $ResourceLocation
get "temperature"(): integer
get "tickDelay"(): integer
get "translationKey"(): string
get "viscosity"(): integer
get "lighterThanAir"(): boolean
}

export namespace $ArchitecturyFluidAttributes {
const probejs$$marker: never
}
export abstract class $ArchitecturyFluidAttributes$$Static implements $ArchitecturyFluidAttributes {
}
}

declare module "packages/dev/architectury/registry/registries/$Registrar" {
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $RegistrySupplier, $RegistrySupplier$$Type } from "packages/dev/architectury/registry/registries/$RegistrySupplier"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export interface $Registrar<T> extends $Iterable<T> {
"byRawId"(int0: integer): T
"contains"(resourceLocation0: $ResourceLocation$$Type): boolean
"containsValue"(t0: T): boolean
"delegate"(resourceLocation0: $ResourceLocation$$Type): $RegistrySupplier<T>
"entrySet"(): $Set<$Map$Entry<$ResourceKey<T>, T>>
"forEach"(consumer0: $Consumer$$Type<T>): void
"get"(resourceLocation0: $ResourceLocation$$Type): T
"getId"(t0: T): $ResourceLocation
"getIds"(): $Set<$ResourceLocation>
"getKey"(t0: T): $Optional<$ResourceKey<T>>
"getRawId"(t0: T): integer
"iterator"(): $Iterator<T>
"key"(): $ResourceKey<$Registry<T>>
"listen"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<T>): void
"listen"<R extends T>(supplier: $RegistrySupplier$$Type<R>, callback: $Consumer$$Type<R>): void
"register"<E extends T>(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<E>): $RegistrySupplier<E>
"spliterator"(): $Spliterator<T>
"wrap"<R extends T>(obj: R): $RegistrySupplier<R>
[Symbol.iterator](): IterableIterator<T>;
get "ids"(): $Set<$ResourceLocation>
}

export namespace $Registrar {
const probejs$$marker: never
}
export abstract class $Registrar$$Static<T> implements $Registrar<T> {
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedFluidExtension" {
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $InjectedRegistryEntryExtension } from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedFluidExtension extends $InjectedRegistryEntryExtension<$Fluid> {
"arch$holder"(): $Holder<$Fluid>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedFluidExtension {
const probejs$$marker: never
}
export abstract class $InjectedFluidExtension$$Static implements $InjectedFluidExtension {
}
}

declare module "packages/dev/architectury/utils/value/$Value" {
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Supplier } from "packages/java/util/function/$Supplier"

export interface $Value<T> extends $Supplier<T>, $Consumer<T> {
"accept"(t0: T): void
"andThen"(consumer0: $Consumer$$Type<T>): $Consumer<T>
"get"(): T
}

export namespace $Value {
const probejs$$marker: never
}
export abstract class $Value$$Static<T> implements $Value<T> {
}
}

declare module "packages/dev/architectury/event/forge/$EventHandlerImplCommon$LevelEventAttachment" {
import { $LevelAccessor, $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"

export interface $EventHandlerImplCommon$LevelEventAttachment {
"architectury$attachLevel"(levelAccessor0: $LevelAccessor$$Type): void
"architectury$getAttachedLevel"(): $LevelAccessor
}

export namespace $EventHandlerImplCommon$LevelEventAttachment {
const probejs$$marker: never
}
export abstract class $EventHandlerImplCommon$LevelEventAttachment$$Static implements $EventHandlerImplCommon$LevelEventAttachment {
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedItemExtension" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $InjectedRegistryEntryExtension } from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedItemExtension extends $InjectedRegistryEntryExtension<$Item> {
"arch$holder"(): $Holder<$Item>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedItemExtension {
const probejs$$marker: never
}
export abstract class $InjectedItemExtension$$Static implements $InjectedItemExtension {
}
}

declare module "packages/dev/architectury/registry/registries/options/$RegistrarOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistrarOption {
}

export namespace $RegistrarOption {
const probejs$$marker: never
}
export abstract class $RegistrarOption$$Static implements $RegistrarOption {
}
}

declare module "packages/dev/architectury/hooks/level/biome/$BiomeProperties" {
import { $SpawnProperties } from "packages/dev/architectury/hooks/level/biome/$SpawnProperties"
import { $ClimateProperties } from "packages/dev/architectury/hooks/level/biome/$ClimateProperties"
import { $EffectsProperties } from "packages/dev/architectury/hooks/level/biome/$EffectsProperties"
import { $GenerationProperties } from "packages/dev/architectury/hooks/level/biome/$GenerationProperties"

export interface $BiomeProperties {
"getClimateProperties"(): $ClimateProperties
"getEffectsProperties"(): $EffectsProperties
"getGenerationProperties"(): $GenerationProperties
"getSpawnProperties"(): $SpawnProperties
get "climateProperties"(): $ClimateProperties
get "effectsProperties"(): $EffectsProperties
get "generationProperties"(): $GenerationProperties
get "spawnProperties"(): $SpawnProperties
}

export namespace $BiomeProperties {
const probejs$$marker: never
}
export abstract class $BiomeProperties$$Static implements $BiomeProperties {
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedBlockExtension" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $InjectedRegistryEntryExtension } from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export interface $InjectedBlockExtension extends $InjectedRegistryEntryExtension<$Block> {
"arch$holder"(): $Holder<$Block>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedBlockExtension {
const probejs$$marker: never
}
export abstract class $InjectedBlockExtension$$Static implements $InjectedBlockExtension {
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedBucketItemExtension" {
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"

export interface $InjectedBucketItemExtension {
"arch$getFluid"(): $Fluid
}

export namespace $InjectedBucketItemExtension {
const probejs$$marker: never
}
export abstract class $InjectedBucketItemExtension$$Static implements $InjectedBucketItemExtension {
}
}

declare module "packages/dev/architectury/event/events/common/$ChatEvent$ChatComponent" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"

export interface $ChatEvent$ChatComponent {
"get"(): $Component
"set"(component0: $Component$$Type): void
}

export namespace $ChatEvent$ChatComponent {
const probejs$$marker: never
}
export abstract class $ChatEvent$ChatComponent$$Static implements $ChatEvent$ChatComponent {
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedRegistryEntryExtension<T> {
"arch$holder"(): $Holder<T>
"arch$registryName"(): $ResourceLocation
}

export namespace $InjectedRegistryEntryExtension {
const probejs$$marker: never
}
export abstract class $InjectedRegistryEntryExtension$$Static<T> implements $InjectedRegistryEntryExtension<T> {
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedItemPropertiesExtension" {
import { $CreativeModeTab, $CreativeModeTab$$Type } from "packages/net/minecraft/world/item/$CreativeModeTab"
import { $Item$Properties } from "packages/net/minecraft/world/item/$Item$Properties"
import { $DeferredSupplier$$Type } from "packages/dev/architectury/registry/registries/$DeferredSupplier"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export interface $InjectedItemPropertiesExtension {
"arch$tab"(tab: $CreativeModeTab$$Type): $Item$Properties
"arch$tab"(tab: $DeferredSupplier$$Type<$CreativeModeTab$$Type>): $Item$Properties
"arch$tab"(tab: $ResourceKey$$Type<$CreativeModeTab>): $Item$Properties
}

export namespace $InjectedItemPropertiesExtension {
const probejs$$marker: never
}
export abstract class $InjectedItemPropertiesExtension$$Static implements $InjectedItemPropertiesExtension {
}
}

declare module "packages/dev/architectury/registry/level/biome/$BiomeModifications$BiomeContext" {
import { $BiomeProperties } from "packages/dev/architectury/hooks/level/biome/$BiomeProperties"
import { $Optional } from "packages/java/util/$Optional"
import { $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"

export interface $BiomeModifications$BiomeContext {
"getKey"(): $Optional<$ResourceLocation>
"getProperties"(): $BiomeProperties
"hasTag"(tagKey0: $TagKey$$Type<$Biome$$Type>): boolean
get "key"(): $Optional<$ResourceLocation>
get "properties"(): $BiomeProperties
}

export namespace $BiomeModifications$BiomeContext {
const probejs$$marker: never
}
export abstract class $BiomeModifications$BiomeContext$$Static implements $BiomeModifications$BiomeContext {
}
}

declare module "packages/dev/architectury/hooks/level/biome/$EffectsProperties" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Music } from "packages/net/minecraft/sounds/$Music"
import { $AmbientMoodSettings } from "packages/net/minecraft/world/level/biome/$AmbientMoodSettings"
import { $AmbientParticleSettings } from "packages/net/minecraft/world/level/biome/$AmbientParticleSettings"
import { $Optional } from "packages/java/util/$Optional"
import { $AmbientAdditionsSettings } from "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings"
import { $OptionalInt } from "packages/java/util/$OptionalInt"
import { $BiomeSpecialEffects$GrassColorModifier } from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$GrassColorModifier"

export interface $EffectsProperties {
"getAmbientAdditionsSound"(): $Optional<$AmbientAdditionsSettings>
"getAmbientLoopSound"(): $Optional<$Holder<$SoundEvent>>
"getAmbientMoodSound"(): $Optional<$AmbientMoodSettings>
"getAmbientParticle"(): $Optional<$AmbientParticleSettings>
"getBackgroundMusic"(): $Optional<$Music>
"getFogColor"(): integer
"getFoliageColorOverride"(): $OptionalInt
"getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
"getGrassColorOverride"(): $OptionalInt
"getSkyColor"(): integer
"getWaterColor"(): integer
"getWaterFogColor"(): integer
get "ambientAdditionsSound"(): $Optional<$AmbientAdditionsSettings>
get "ambientLoopSound"(): $Optional<$Holder<$SoundEvent>>
get "ambientMoodSound"(): $Optional<$AmbientMoodSettings>
get "ambientParticle"(): $Optional<$AmbientParticleSettings>
get "backgroundMusic"(): $Optional<$Music>
get "fogColor"(): integer
get "foliageColorOverride"(): $OptionalInt
get "grassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
get "grassColorOverride"(): $OptionalInt
get "skyColor"(): integer
get "waterColor"(): integer
get "waterFogColor"(): integer
}

export namespace $EffectsProperties {
const probejs$$marker: never
}
export abstract class $EffectsProperties$$Static implements $EffectsProperties {
}
}

declare module "packages/dev/architectury/registry/registries/$RegistrySupplier" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $RegistrarManager } from "packages/dev/architectury/registry/registries/$RegistrarManager"
import { $DeferredSupplier } from "packages/dev/architectury/registry/registries/$DeferredSupplier"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $Registrar } from "packages/dev/architectury/registry/registries/$Registrar"

export interface $RegistrySupplier<T> extends $DeferredSupplier<T> {
"get"(): T
"getId"(): $ResourceLocation
"getKey"(): $ResourceKey<T>
"getOrNull"(): T
"getRegistrar"(): $Registrar<T>
"getRegistrarManager"(): $RegistrarManager
"getRegistryId"(): $ResourceLocation
"getRegistryKey"(): $ResourceKey<$Registry<T>>
"ifPresent"(action: $Consumer$$Type<T>): void
"ifPresentOrElse"(action: $Consumer$$Type<T>, emptyAction: $Runnable$$Type): void
"isPresent"(): boolean
"listen"(callback: $Consumer$$Type<T>): void
"orElse"(other: T): T
"orElseGet"(supplier: $Supplier$$Type<T>): T
"stream"(): $Stream<T>
"toOptional"(): $Optional<T>
get "id"(): $ResourceLocation
get "key"(): $ResourceKey<T>
get "orNull"(): T
get "registrar"(): $Registrar<T>
get "registrarManager"(): $RegistrarManager
get "registryId"(): $ResourceLocation
get "registryKey"(): $ResourceKey<$Registry<T>>
get "present"(): boolean
}

export namespace $RegistrySupplier {
const probejs$$marker: never
}
export abstract class $RegistrySupplier$$Static<T> implements $RegistrySupplier<T> {
}
}

