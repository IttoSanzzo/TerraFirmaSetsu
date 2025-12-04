declare module "packages/net/minecraft/resources/$RegistryOps$RegistryInfoLookup" {
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $RegistryOps$RegistryInfo$$Type } from "packages/net/minecraft/resources/$RegistryOps$RegistryInfo"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryOps$RegistryInfoLookup$$Type = ($RegistryOps$RegistryInfoLookup | ((arg0: $ResourceKey<$Registry<T>>) => $Optional$$Type<$RegistryOps$RegistryInfo$$Type<T>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryOps$RegistryInfoLookup_ = $RegistryOps$RegistryInfoLookup$$Type;
}
}

declare module "packages/net/minecraft/resources/$RegistryOps$RegistryInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryOps$RegistryInfo$$Type<T> = ($RegistryOps$RegistryInfo<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryOps$RegistryInfo_<T> = $RegistryOps$RegistryInfo$$Type<T>;
}
}

declare module "packages/net/minecraft/resources/$ResourceKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResourceKey$$Type<T> = ($ResourceKey<T> | Special.LiteralOf<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResourceKey_<T> = $ResourceKey$$Type<T>;
}
}

declare module "packages/net/minecraft/resources/$ResourceLocation" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $ResourceLocationAccess } from "packages/malte0811/ferritecore/mixin/mrl/$ResourceLocationAccess"
import { $ResourceLocationAccessor } from "packages/com/github/exopandora/shouldersurfing/mixins/$ResourceLocationAccessor"
import { $SpecialEquality } from "packages/dev/latvian/mods/rhino/util/$SpecialEquality"
import { $StringReader$$Type } from "packages/com/mojang/brigadier/$StringReader"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ResourceLocation implements $Comparable<$ResourceLocation>, $ResourceLocationAccessor, $ResourceLocationAccess, $SpecialEquality {
static readonly "CODEC": $Codec<$ResourceLocation>
static readonly "DEFAULT_NAMESPACE": string
static readonly "NAMESPACE_SEPARATOR": character
static readonly "REALMS_NAMESPACE": string

/** @deprecated */
constructor(string0: string)
/** @deprecated */
constructor(string0: string, string1: string)

public static "bySeparator"(string0: string, char1: character): $ResourceLocation
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "compareNamespaced"(resourceLocation0: $ResourceLocation$$Type): integer
public "compareTo"(resourceLocation0: $ResourceLocation$$Type): integer
public static "decompose"(string0: string, char1: character): string[]
public static "fromNamespaceAndPath"(string0: string, string1: string): $ResourceLocation
public "getNamespace"(): string
public "getPath"(): string
public static "isAllowedInResourceLocation"(char0: character): boolean
public static "isValidNamespace"(string0: string): boolean
public static "isValidPath"(string0: string): boolean
public static "isValidResourceLocation"(string0: string): boolean
/** @deprecated */
public static "of"(string0: string, char1: character): $ResourceLocation
public static "parse"(string0: string): $ResourceLocation
public static "read"(stringReader0: $StringReader$$Type): $ResourceLocation
public static "read"(string0: string): $DataResult<$ResourceLocation>
public "specialEquals"(o: any, shallow: boolean): boolean
public "toDebugFileName"(): string
public "toLanguageKey"(string0: string): string
public "toLanguageKey"(string0: string, string1: string): string
public "toLanguageKey"(): string
public "toShortLanguageKey"(): string
public static "tryBuild"(string0: string, string1: string): $ResourceLocation
public static "tryBySeparator"(string0: string, char1: character): $ResourceLocation
public static "tryParse"(string0: string): $ResourceLocation
public static "validNamespaceChar"(char0: character): boolean
public static "validPathChar"(char0: character): boolean
public static "withDefaultNamespace"(string0: string): $ResourceLocation
public "withPath"(string0: string): $ResourceLocation
public "withPath"(unaryOperator0: $UnaryOperator$$Type<string>): $ResourceLocation
public "withPrefix"(string0: string): $ResourceLocation
public "withSuffix"(string0: string): $ResourceLocation
get "namespace"(): string
get "path"(): string
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.CustomStat
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.CustomStatTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResourceLocation$$Type = ($ResourceLocation | Special.CustomStat | string);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResourceLocation_ = $ResourceLocation$$Type;
}
}

declare module "packages/net/minecraft/resources/$FileToIdConverter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileToIdConverter$$Type = ($FileToIdConverter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileToIdConverter_ = $FileToIdConverter$$Type;
}
}

