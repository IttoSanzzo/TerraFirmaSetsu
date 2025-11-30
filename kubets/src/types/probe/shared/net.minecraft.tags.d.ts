declare module "packages/net/minecraft/tags/$TagNetworkSerialization$NetworkPayload" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $TagNetworkSerialization$NetworkPayload {
public "isEmpty"(): boolean
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $TagNetworkSerialization$NetworkPayload
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/tags/$TagLoader$EntryWithSource" {
import { $Record } from "packages/java/lang/$Record"
import { $TagEntry, $TagEntry$$Type } from "packages/net/minecraft/tags/$TagEntry"

export class $TagLoader$EntryWithSource extends $Record {
constructor(tagEntry0: $TagEntry$$Type, string1: string)
constructor(entry: $TagEntry$$Type, source: string, remove: boolean)

public "entry"(): $TagEntry
public "remove"(): boolean
public "source"(): string
}
}

declare module "packages/net/minecraft/tags/$TagKey" {
import { $Record } from "packages/java/lang/$Record"
import { $Optional } from "packages/java/util/$Optional"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $TagKey<T> extends $Record {
/** @deprecated */
constructor(resourceKey0: $ResourceKey$$Type<$Registry<T>>, resourceLocation1: $ResourceLocation$$Type)

public "cast"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$TagKey<E>>
public static "codec"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Codec<$TagKey<T>>
public static "create"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, resourceLocation1: $ResourceLocation$$Type): $TagKey<T>
public static "hashedCodec"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Codec<$TagKey<T>>
public "isFor"(resourceKey0: $ResourceKey$$Type<$Registry<any>>): boolean
public "location"(): $ResourceLocation
public "registry"(): $ResourceKey<$Registry<T>>
}
}

declare module "packages/net/minecraft/tags/$TagManager$LoadResult" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Record } from "packages/java/lang/$Record"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $TagManager$LoadResult<T> extends $Record {
constructor(key: $ResourceKey$$Type<$Registry<T>>, tags: $Map$$Type<$ResourceLocation$$Type, $Collection$$Type<$Holder$$Type<T>>>)

public "key"(): $ResourceKey<$Registry<T>>
public "tags"(): $Map<$ResourceLocation, $Collection<$Holder<T>>>
}
}

declare module "packages/net/minecraft/tags/$TagEntry$Lookup" {
import { $Collection } from "packages/java/util/$Collection"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $TagEntry$Lookup<T> {
"element"(resourceLocation0: $ResourceLocation$$Type): T
"tag"(resourceLocation0: $ResourceLocation$$Type): $Collection<T>
}

export namespace $TagEntry$Lookup {
const probejs$$marker: never
}
export abstract class $TagEntry$Lookup$$Static<T> implements $TagEntry$Lookup<T> {
}
}

declare module "packages/net/minecraft/tags/$TagManager" {
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $TagManager$LoadResult } from "packages/net/minecraft/tags/$TagManager$LoadResult"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $List } from "packages/java/util/$List"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"

export class $TagManager implements $PreparableReloadListener {
constructor(registryAccess0: $RegistryAccess$$Type)

public "getName"(): string
public "getResult"(): $List<$TagManager$LoadResult<any>>
public static "getTagDir"(resourceKey0: $ResourceKey$$Type<$Registry<any>>): string
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
get "result"(): $List<$TagManager$LoadResult<any>>
}
}

declare module "packages/net/minecraft/tags/$TagBuilder" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $List } from "packages/java/util/$List"
import { $IForgeRawTagBuilder } from "packages/net/minecraftforge/common/extensions/$IForgeRawTagBuilder"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $TagEntry, $TagEntry$$Type } from "packages/net/minecraft/tags/$TagEntry"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $TagBuilder implements $IForgeRawTagBuilder {
readonly "entries": $List<$TagEntry>

constructor()

public "add"(tagEntry0: $TagEntry$$Type): $TagBuilder
public "addElement"(resourceLocation0: $ResourceLocation$$Type): $TagBuilder
public "addOptionalElement"(resourceLocation0: $ResourceLocation$$Type): $TagBuilder
public "addOptionalTag"(resourceLocation0: $ResourceLocation$$Type): $TagBuilder
public "addTag"(resourceLocation0: $ResourceLocation$$Type): $TagBuilder
public "build"(): $List<$TagEntry>
public static "create"(): $TagBuilder
public "getRawBuilder"(): $TagBuilder
public "getRemoveEntries"(): $Stream<$TagEntry>
public "isReplace"(): boolean
public "remove"(tagEntry0: $TagEntry$$Type): $TagBuilder
public "remove"(tagEntry0: $TagEntry$$Type, string1: string): $TagBuilder
public "removeElement"(resourceLocation0: $ResourceLocation$$Type, string1: string): $TagBuilder
public "removeTag"(resourceLocation0: $ResourceLocation$$Type, string1: string): $TagBuilder
public "replace"(): $TagBuilder
public "replace"(boolean0: boolean): $TagBuilder
/** @deprecated */
public "serializeTagAdditions"(jsonObject0: $JsonObject$$Type): void
get "rawBuilder"(): $TagBuilder
get "removeEntries"(): $Stream<$TagEntry>
}
}

declare module "packages/net/minecraft/tags/$TagEntry" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ExtraCodecs$TagOrElementLocation } from "packages/net/minecraft/util/$ExtraCodecs$TagOrElementLocation"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagEntry$Lookup$$Type } from "packages/net/minecraft/tags/$TagEntry$Lookup"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $TagEntry {
static "CODEC": $Codec<$TagEntry>
readonly "id": $ResourceLocation
readonly "required": boolean
readonly "tag": boolean

constructor(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean, boolean2: boolean)

public "build"<T>(lookup0: $TagEntry$Lookup$$Type<T>, consumer1: $Consumer$$Type<T>): boolean
public static "element"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public "elementOrTag"(): $ExtraCodecs$TagOrElementLocation
public "getId"(): $ResourceLocation
public "isRequired"(): boolean
public "isTag"(): boolean
public static "optionalElement"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public static "optionalTag"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public static "tag"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public "verifyIfPresent"(predicate0: $Predicate$$Type<$ResourceLocation$$Type>, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): boolean
public "visitOptionalDependencies"(consumer0: $Consumer$$Type<$ResourceLocation$$Type>): void
public "visitRequiredDependencies"(consumer0: $Consumer$$Type<$ResourceLocation$$Type>): void
}
}

