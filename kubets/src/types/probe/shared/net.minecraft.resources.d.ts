declare module "packages/net/minecraft/resources/$RegistryOps$RegistryInfoLookup" {
import { $Optional } from "packages/java/util/$Optional"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $RegistryOps$RegistryInfo } from "packages/net/minecraft/resources/$RegistryOps$RegistryInfo"

export interface $RegistryOps$RegistryInfoLookup {
"lookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Optional<$RegistryOps$RegistryInfo<T>>
}

export namespace $RegistryOps$RegistryInfoLookup {
const probejs$$marker: never
}
export abstract class $RegistryOps$RegistryInfoLookup$$Static implements $RegistryOps$RegistryInfoLookup {
}
}

declare module "packages/net/minecraft/resources/$RegistryOps$RegistryInfo" {
import { $Lifecycle, $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $Record } from "packages/java/lang/$Record"
import { $HolderOwner, $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $HolderGetter, $HolderGetter$$Type } from "packages/net/minecraft/core/$HolderGetter"

export class $RegistryOps$RegistryInfo<T> extends $Record {
constructor(owner: $HolderOwner$$Type<T>, getter: $HolderGetter$$Type<T>, elementsLifecycle: $Lifecycle$$Type)

public "elementsLifecycle"(): $Lifecycle
public "getter"(): $HolderGetter<T>
public "owner"(): $HolderOwner<T>
get "ter"(): $HolderGetter<T>
}
}

declare module "packages/net/minecraft/resources/$ResourceKey" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $SpecialEquality } from "packages/dev/latvian/mods/rhino/util/$SpecialEquality"
import { $Optional } from "packages/java/util/$Optional"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ResourceKey<T> implements $Comparable<$ResourceKey<any>>, $SpecialEquality {
constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type)

public "cast"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$ResourceKey<E>>
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public static "codec"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Codec<$ResourceKey<T>>
public "compareTo"(resourceKey0: $ResourceKey$$Type<any>): integer
public static "create"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, resourceLocation1: $ResourceLocation$$Type): $ResourceKey<T>
public static "createRegistryKey"<T>(resourceLocation0: $ResourceLocation$$Type): $ResourceKey<$Registry<T>>
public "getNamespace"(): string
public "getPath"(): string
public "isFor"(resourceKey0: $ResourceKey$$Type<$Registry<any>>): boolean
public "location"(): $ResourceLocation
public "registry"(): $ResourceLocation
public "specialEquals"(o: any, shallow: boolean): boolean
get "namespace"(): string
get "path"(): string
}
}

declare module "packages/net/minecraft/resources/$FileToIdConverter" {
import { $List } from "packages/java/util/$List"
import { $Resource } from "packages/net/minecraft/server/packs/resources/$Resource"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Map } from "packages/java/util/$Map"

export class $FileToIdConverter {
constructor(string0: string, string1: string)

public "fileToId"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "idToFile"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public static "json"(string0: string): $FileToIdConverter
public "listMatchingResourceStacks"(resourceManager0: $ResourceManager$$Type): $Map<$ResourceLocation, $List<$Resource>>
public "listMatchingResources"(resourceManager0: $ResourceManager$$Type): $Map<$ResourceLocation, $Resource>
}
}

