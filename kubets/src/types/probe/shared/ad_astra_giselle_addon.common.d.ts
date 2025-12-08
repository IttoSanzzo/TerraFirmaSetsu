declare module "packages/ad_astra_giselle_addon/common/content/proof/$ProofFunction" {
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $ProofFunction {
"provide"(entity0: $Entity$$Type): integer
}

export namespace $ProofFunction {
const probejs$$marker: never
}
export abstract class $ProofFunction$$Static implements $ProofFunction {
}
}

declare module "packages/ad_astra_giselle_addon/common/content/proof/$ProofAbstractUtils" {
import { $List } from "packages/java/util/$List"
import { $ProofFunction$$Type } from "packages/ad_astra_giselle_addon/common/content/proof/$ProofFunction"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ProofAbstractUtils {
static readonly "GENERAL_PROOF_INTERVAL": integer
static readonly "KEY_PROOF_DURATION": string
static readonly "OXYGEN_PROOF_INTERVAL": integer
static readonly "OXYGEN_PROOF_USING": long
static readonly "PROOFS": $List<$ProofAbstractUtils>

public "getDataKey"(): string
public "getId"(): $ResourceLocation
public "getProofDuration"(entity0: $Entity$$Type): integer
public "post"(entity0: $Entity$$Type): integer
public static "reduceProofDuration"(entity0: $Entity$$Type): void
public "register"(proofFunction0: $ProofFunction$$Type): void
public "setProofDuration"(entity0: $Entity$$Type, int1: integer): void
public "tryProvideProof"(entity0: $Entity$$Type): boolean
public "unregister"(proofFunction0: $ProofFunction$$Type): boolean
get "dataKey"(): string
get "id"(): $ResourceLocation
}
}

declare module "packages/ad_astra_giselle_addon/common/mixin/minecraft/$ShapedRecipeAccessor" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ShapedRecipeAccessor {
"getResult"(): $ItemStack
get "result"(): $ItemStack
}

export namespace $ShapedRecipeAccessor {
const probejs$$marker: never
}
export abstract class $ShapedRecipeAccessor$$Static implements $ShapedRecipeAccessor {
}
}

declare module "packages/ad_astra_giselle_addon/common/content/proof/$EntityProofDurationAccessor" {
import { $ProofAbstractUtils$$Type } from "packages/ad_astra_giselle_addon/common/content/proof/$ProofAbstractUtils"

export interface $EntityProofDurationAccessor {
"ad_astra_giselle_addon$getProofDuration"(proofAbstractUtils0: $ProofAbstractUtils$$Type): integer
"ad_astra_giselle_addon$setProofDuration"(proofAbstractUtils0: $ProofAbstractUtils$$Type, int1: integer): void
}

export namespace $EntityProofDurationAccessor {
const probejs$$marker: never
}
export abstract class $EntityProofDurationAccessor$$Static implements $EntityProofDurationAccessor {
}
}

declare module "packages/ad_astra_giselle_addon/common/entity/$ICustomDataHolder" {
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"

export interface $ICustomDataHolder {
"ad_astra_giselle_addon$getCustomData"(): $CompoundTag
}

export namespace $ICustomDataHolder {
const probejs$$marker: never
}
export abstract class $ICustomDataHolder$$Static implements $ICustomDataHolder {
}
}

