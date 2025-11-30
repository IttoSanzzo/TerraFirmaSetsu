declare module "packages/net/minecraft/world/level/levelgen/synth/$BlendedNoise" {
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $StringBuilder$$Type } from "packages/java/lang/$StringBuilder"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $DensityFunction$SimpleFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$SimpleFunction"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export class $BlendedNoise implements $DensityFunction$SimpleFunction {
static readonly "CODEC": $KeyDispatchDataCodec<$BlendedNoise>

constructor(randomSource0: $RandomSource$$Type, double1: double, double2: double, double3: double, double4: double, double5: double)

public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public static "createUnseeded"(double0: double, double1: double, double2: double, double3: double, double4: double): $BlendedNoise
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "parityConfigString"(stringBuilder0: $StringBuilder$$Type): void
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "withNewRandom"(randomSource0: $RandomSource$$Type): $BlendedNoise
}
}

declare module "packages/net/minecraft/world/level/levelgen/synth/$NormalNoise" {
import { $StringBuilder$$Type } from "packages/java/lang/$StringBuilder"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters$$Type } from "packages/net/minecraft/world/level/levelgen/synth/$NormalNoise$NoiseParameters"

export class $NormalNoise {
public static "create"(randomSource0: $RandomSource$$Type, noiseParameters1: $NormalNoise$NoiseParameters$$Type): $NormalNoise
public static "create"(randomSource0: $RandomSource$$Type, int1: integer, ...double2s: double[]): $NormalNoise
/** @deprecated */
public static "createLegacyNetherBiome"(randomSource0: $RandomSource$$Type, noiseParameters1: $NormalNoise$NoiseParameters$$Type): $NormalNoise
public "getValue"(double0: double, double1: double, double2: double): double
public "maxValue"(): double
public "parameters"(): $NormalNoise$NoiseParameters
public "parityConfigString"(stringBuilder0: $StringBuilder$$Type): void
}
}

declare module "packages/net/minecraft/world/level/levelgen/synth/$PerlinSimplexNoise" {
import { $List$$Type } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"

export class $PerlinSimplexNoise {
constructor(randomSource0: $RandomSource$$Type, list1: $List$$Type<integer>)

public "getValue"(double0: double, double1: double, boolean2: boolean): double
}
}

