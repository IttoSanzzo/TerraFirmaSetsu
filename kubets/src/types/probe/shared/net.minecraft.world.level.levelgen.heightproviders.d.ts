declare module "packages/net/minecraft/world/level/levelgen/heightproviders/$VeryBiasedToBottomHeight" {
import { $HeightProvider } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $VerticalAnchor$$Type } from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $VeryBiasedToBottomHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$VeryBiasedToBottomHeight>

public static "of"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type, int2: integer): $VeryBiasedToBottomHeight
}
}

declare module "packages/net/minecraft/world/level/levelgen/heightproviders/$UniformHeight" {
import { $HeightProvider } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $VerticalAnchor$$Type } from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $UniformHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$UniformHeight>

public static "of"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type): $UniformHeight
}
}

declare module "packages/net/minecraft/world/level/levelgen/heightproviders/$WeightedListHeight" {
import { $SimpleWeightedRandomList$$Type } from "packages/net/minecraft/util/random/$SimpleWeightedRandomList"
import { $HeightProvider, $HeightProvider$$Type } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $WeightedListHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$WeightedListHeight>

constructor(simpleWeightedRandomList0: $SimpleWeightedRandomList$$Type<$HeightProvider$$Type>)

}
}

declare module "packages/net/minecraft/world/level/levelgen/heightproviders/$ConstantHeight" {
import { $HeightProvider } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $VerticalAnchor, $VerticalAnchor$$Type } from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ConstantHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$ConstantHeight>
static readonly "ZERO": $ConstantHeight

public "getValue"(): $VerticalAnchor
public static "of"(verticalAnchor0: $VerticalAnchor$$Type): $ConstantHeight
get "value"(): $VerticalAnchor
}
}

declare module "packages/net/minecraft/world/level/levelgen/heightproviders/$TrapezoidHeight" {
import { $HeightProvider } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $VerticalAnchor$$Type } from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $TrapezoidHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$TrapezoidHeight>

public static "of"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type, int2: integer): $TrapezoidHeight
public static "of"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type): $TrapezoidHeight
}
}

declare module "packages/net/minecraft/world/level/levelgen/heightproviders/$BiasedToBottomHeight" {
import { $HeightProvider } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $VerticalAnchor$$Type } from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BiasedToBottomHeight extends $HeightProvider {
static readonly "CODEC": $Codec<$BiasedToBottomHeight>

public static "of"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type, int2: integer): $BiasedToBottomHeight
}
}

declare module "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider" {
import { $HeightProviderType } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProviderType"
import { $WorldGenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldGenerationContext"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $HeightProvider {
static readonly "CODEC": $Codec<$HeightProvider>

constructor()

public "getType"(): $HeightProviderType<any>
public "sample"(randomSource0: $RandomSource$$Type, worldGenerationContext1: $WorldGenerationContext$$Type): integer
get "type"(): $HeightProviderType<any>
}
}

