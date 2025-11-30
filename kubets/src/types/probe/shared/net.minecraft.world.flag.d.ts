declare module "packages/net/minecraft/world/flag/$FeatureFlagSet" {
import { $UncappedFeatureFlagSet, $UncappedFeatureFlagSet$$Type } from "packages/com/sammy/malum/core/handlers/hiding/flags/$UncappedFeatureFlagSet"
import { $AccessorFeatureFlagSet } from "packages/com/sammy/malum/mixin/$AccessorFeatureFlagSet"
import { $FeatureFlagExpandedUniverseSet } from "packages/com/sammy/malum/core/handlers/hiding/flags/$FeatureFlagExpandedUniverseSet"
import { $FeatureFlag$$Type } from "packages/net/minecraft/world/flag/$FeatureFlag"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $FeatureFlagSet implements $AccessorFeatureFlagSet, $FeatureFlagExpandedUniverseSet {
static readonly "MAX_CONTAINER_SIZE": integer

public "contains"(featureFlag0: $FeatureFlag$$Type): boolean
public "isSubsetOf"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "join"(featureFlagSet0: $FeatureFlagSet$$Type): $FeatureFlagSet
public "malum$attachFeatureSet"(featureFlagSet0: $FeatureFlagSet$$Type): void
public "malum$attachFeatureSet"(uncappedFeatureFlagSet0: $UncappedFeatureFlagSet$$Type): void
public "malum$copyWithoutExpansion"(): $FeatureFlagSet
public "malum$getAttachedFeatureSet"(resourceLocation0: $ResourceLocation$$Type): $FeatureFlagSet
public "malum$getAttachedUncappedFeatureSet"(resourceLocation0: $ResourceLocation$$Type): $UncappedFeatureFlagSet
public static "of"(featureFlag0: $FeatureFlag$$Type): $FeatureFlagSet
public static "of"(): $FeatureFlagSet
public static "of"(featureFlag0: $FeatureFlag$$Type, ...featureFlag1s: $FeatureFlag$$Type[]): $FeatureFlagSet
}
}

declare module "packages/net/minecraft/world/flag/$FeatureFlagUniverse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FeatureFlagUniverse {
constructor(string0: string)

}
}

declare module "packages/net/minecraft/world/flag/$FeatureFlagRegistry" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FeatureFlag$$Type } from "packages/net/minecraft/world/flag/$FeatureFlag"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $FeatureFlagRegistry {
public "allFlags"(): $FeatureFlagSet
public "codec"(): $Codec<$FeatureFlagSet>
public "fromNames"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, consumer1: $Consumer$$Type<$ResourceLocation$$Type>): $FeatureFlagSet
public "fromNames"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>): $FeatureFlagSet
public "isSubset"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "subset"(...featureFlag0s: $FeatureFlag$$Type[]): $FeatureFlagSet
public "toNames"(featureFlagSet0: $FeatureFlagSet$$Type): $Set<$ResourceLocation>
}
}

declare module "packages/net/minecraft/world/flag/$FeatureElement" {
import { $Set } from "packages/java/util/$Set"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"

export interface $FeatureElement {
"isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
"requiredFeatures"(): $FeatureFlagSet
}

export namespace $FeatureElement {
const FILTERED_REGISTRIES: $Set<$ResourceKey<$Registry<$FeatureElement>>>
}
export abstract class $FeatureElement$$Static implements $FeatureElement {
static readonly "FILTERED_REGISTRIES": $Set<$ResourceKey<$Registry<$FeatureElement>>>

}
}

declare module "packages/net/minecraft/world/flag/$FeatureFlag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FeatureFlag {
}
}

