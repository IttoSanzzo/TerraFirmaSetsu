declare module "packages/com/sammy/malum/mixin/client/$AccessorBakedGlyph" {
import { $GlyphRenderTypes } from "packages/net/minecraft/client/gui/font/$GlyphRenderTypes"

export interface $AccessorBakedGlyph {
"malum$getRenderTypes"(): $GlyphRenderTypes
}

export namespace $AccessorBakedGlyph {
const probejs$$marker: never
}
export abstract class $AccessorBakedGlyph$$Static implements $AccessorBakedGlyph {
}
}

declare module "packages/com/sammy/malum/common/events/$SetupMalumCodexEntriesEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $SetupMalumCodexEntriesEvent extends $Event {
constructor()

}
}

declare module "packages/com/sammy/malum/mixin/$AccessorFeatureFlagSet" {
import { $FeatureFlagUniverse } from "packages/net/minecraft/world/flag/$FeatureFlagUniverse"

export interface $AccessorFeatureFlagSet {
"malum$getUniverse"(): $FeatureFlagUniverse
}

export namespace $AccessorFeatureFlagSet {
const probejs$$marker: never
}
export abstract class $AccessorFeatureFlagSet$$Static implements $AccessorFeatureFlagSet {
}
}

declare module "packages/com/sammy/malum/core/handlers/hiding/flags/$UncappedFeatureFlagSet" {
import { $FeatureFlagUniverse, $FeatureFlagUniverse$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagUniverse"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $UncappedFeatureFlag$$Type } from "packages/com/sammy/malum/core/handlers/hiding/flags/$UncappedFeatureFlag"

export class $UncappedFeatureFlagSet {
public "contains"(uncappedFeatureFlag0: $UncappedFeatureFlag$$Type): boolean
public static "create"(featureFlagUniverse0: $FeatureFlagUniverse$$Type, collection1: $Collection$$Type<$UncappedFeatureFlag$$Type>): $UncappedFeatureFlagSet
public "getUniverse"(): $FeatureFlagUniverse
public "isSubsetOf"(uncappedFeatureFlagSet0: $UncappedFeatureFlagSet$$Type): boolean
public "join"(uncappedFeatureFlagSet0: $UncappedFeatureFlagSet$$Type): $UncappedFeatureFlagSet
public static "of"(): $UncappedFeatureFlagSet
public static "of"(uncappedFeatureFlag0: $UncappedFeatureFlag$$Type): $UncappedFeatureFlagSet
public static "of"(uncappedFeatureFlag0: $UncappedFeatureFlag$$Type, ...uncappedFeatureFlag1s: $UncappedFeatureFlag$$Type[]): $UncappedFeatureFlagSet
get "universe"(): $FeatureFlagUniverse
}
}

declare module "packages/com/sammy/malum/mixin/client/$AccessorFont" {
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FontSet } from "packages/net/minecraft/client/gui/font/$FontSet"

export interface $AccessorFont {
"malum$getFontSet"(resourceLocation0: $ResourceLocation$$Type): $FontSet
}

export namespace $AccessorFont {
const probejs$$marker: never
}
export abstract class $AccessorFont$$Static implements $AccessorFont {
}
}

declare module "packages/com/sammy/malum/core/handlers/hiding/flags/$UncappedFeatureFlag" {
import { $FeatureFlagUniverse, $FeatureFlagUniverse$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagUniverse"

export class $UncappedFeatureFlag {
readonly "maskBit": integer
readonly "universe": $FeatureFlagUniverse

constructor(featureFlagUniverse0: $FeatureFlagUniverse$$Type, int1: integer)

}
}

declare module "packages/com/sammy/malum/client/renderer/text/$SubtractiveTextGlyphRenderTypes" {
import { $RenderType } from "packages/net/minecraft/client/renderer/$RenderType"

export interface $SubtractiveTextGlyphRenderTypes {
"malum$getSubtractiveType"(): $RenderType
}

export namespace $SubtractiveTextGlyphRenderTypes {
const probejs$$marker: never
}
export abstract class $SubtractiveTextGlyphRenderTypes$$Static implements $SubtractiveTextGlyphRenderTypes {
}
}

declare module "packages/com/sammy/malum/core/handlers/hiding/flags/$FeatureFlagCacher" {
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FeatureFlagCacher {
"malum$cachedFeatureFlags"(): $Iterable<$ResourceLocation>
}

export namespace $FeatureFlagCacher {
const probejs$$marker: never
}
export abstract class $FeatureFlagCacher$$Static implements $FeatureFlagCacher {
}
}

declare module "packages/com/sammy/malum/core/handlers/hiding/flags/$FeatureFlagExpandedUniverseSet" {
import { $UncappedFeatureFlagSet, $UncappedFeatureFlagSet$$Type } from "packages/com/sammy/malum/core/handlers/hiding/flags/$UncappedFeatureFlagSet"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FeatureFlagExpandedUniverseSet {
"malum$attachFeatureSet"(uncappedFeatureFlagSet0: $UncappedFeatureFlagSet$$Type): void
"malum$attachFeatureSet"(featureFlagSet0: $FeatureFlagSet$$Type): void
"malum$copyWithoutExpansion"(): $FeatureFlagSet
"malum$getAttachedFeatureSet"(resourceLocation0: $ResourceLocation$$Type): $FeatureFlagSet
"malum$getAttachedUncappedFeatureSet"(resourceLocation0: $ResourceLocation$$Type): $UncappedFeatureFlagSet
}

export namespace $FeatureFlagExpandedUniverseSet {
const probejs$$marker: never
}
export abstract class $FeatureFlagExpandedUniverseSet$$Static implements $FeatureFlagExpandedUniverseSet {
}
}

