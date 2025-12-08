declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$ReplaceablePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReplaceablePredicate$$Type = ($ReplaceablePredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReplaceablePredicate_ = $ReplaceablePredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$SolidPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SolidPredicate$$Type = ($SolidPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SolidPredicate_ = $SolidPredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$CombiningPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CombiningPredicate$$Type = ($CombiningPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CombiningPredicate_ = $CombiningPredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$HasSturdyFacePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HasSturdyFacePredicate$$Type = ($HasSturdyFacePredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HasSturdyFacePredicate_ = $HasSturdyFacePredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$InsideWorldBoundsPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InsideWorldBoundsPredicate$$Type = ($InsideWorldBoundsPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InsideWorldBoundsPredicate_ = $InsideWorldBoundsPredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$AllOfPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AllOfPredicate$$Type = ($AllOfPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AllOfPredicate_ = $AllOfPredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$StateTestingPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StateTestingPredicate$$Type = ($StateTestingPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StateTestingPredicate_ = $StateTestingPredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicateType" {
import { $WouldSurvivePredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$WouldSurvivePredicate"
import { $MatchingBlockTagPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$MatchingBlockTagPredicate"
import { $ReplaceablePredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$ReplaceablePredicate"
import { $TrueBlockPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$TrueBlockPredicate"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $InsideWorldBoundsPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$InsideWorldBoundsPredicate"
import { $SolidPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$SolidPredicate"
import { $HasSturdyFacePredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$HasSturdyFacePredicate"
import { $NotPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$NotPredicate"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $MatchingBlocksPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$MatchingBlocksPredicate"
import { $AllOfPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$AllOfPredicate"
import { $MatchingFluidsPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$MatchingFluidsPredicate"
import { $AnyOfPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$AnyOfPredicate"

export interface $BlockPredicateType<P extends $BlockPredicate> {
"codec"(): $Codec<P>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.BlockPredicateType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.BlockPredicateTypeTag
}

export namespace $BlockPredicateType {
const ALL_OF: $BlockPredicateType<$AllOfPredicate>
const ANY_OF: $BlockPredicateType<$AnyOfPredicate>
const HAS_STURDY_FACE: $BlockPredicateType<$HasSturdyFacePredicate>
const INSIDE_WORLD_BOUNDS: $BlockPredicateType<$InsideWorldBoundsPredicate>
const MATCHING_BLOCKS: $BlockPredicateType<$MatchingBlocksPredicate>
const MATCHING_BLOCK_TAG: $BlockPredicateType<$MatchingBlockTagPredicate>
const MATCHING_FLUIDS: $BlockPredicateType<$MatchingFluidsPredicate>
const NOT: $BlockPredicateType<$NotPredicate>
const REPLACEABLE: $BlockPredicateType<$ReplaceablePredicate>
const SOLID: $BlockPredicateType<$SolidPredicate>
const TRUE: $BlockPredicateType<$TrueBlockPredicate>
const WOULD_SURVIVE: $BlockPredicateType<$WouldSurvivePredicate>
}
export abstract class $BlockPredicateType$$Static<P extends $BlockPredicate> implements $BlockPredicateType<P> {
static readonly "ALL_OF": $BlockPredicateType<$AllOfPredicate>
static readonly "ANY_OF": $BlockPredicateType<$AnyOfPredicate>
static readonly "HAS_STURDY_FACE": $BlockPredicateType<$HasSturdyFacePredicate>
static readonly "INSIDE_WORLD_BOUNDS": $BlockPredicateType<$InsideWorldBoundsPredicate>
static readonly "MATCHING_BLOCKS": $BlockPredicateType<$MatchingBlocksPredicate>
static readonly "MATCHING_BLOCK_TAG": $BlockPredicateType<$MatchingBlockTagPredicate>
static readonly "MATCHING_FLUIDS": $BlockPredicateType<$MatchingFluidsPredicate>
static readonly "NOT": $BlockPredicateType<$NotPredicate>
static readonly "REPLACEABLE": $BlockPredicateType<$ReplaceablePredicate>
static readonly "SOLID": $BlockPredicateType<$SolidPredicate>
static readonly "TRUE": $BlockPredicateType<$TrueBlockPredicate>
static readonly "WOULD_SURVIVE": $BlockPredicateType<$WouldSurvivePredicate>

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockPredicateType$$Type<P extends $BlockPredicate> = ($BlockPredicateType<P> | Special.BlockPredicateType | (() => $Codec$$Type<P>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockPredicateType_<P extends $BlockPredicate> = $BlockPredicateType$$Type<P>;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$MatchingBlocksPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MatchingBlocksPredicate$$Type = ($MatchingBlocksPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MatchingBlocksPredicate_ = $MatchingBlocksPredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockPredicate$$Type = ($BlockPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockPredicate_ = $BlockPredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$NotPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NotPredicate$$Type = ($NotPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NotPredicate_ = $NotPredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$MatchingBlockTagPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MatchingBlockTagPredicate$$Type = ($MatchingBlockTagPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MatchingBlockTagPredicate_ = $MatchingBlockTagPredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$AnyOfPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnyOfPredicate$$Type = ($AnyOfPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnyOfPredicate_ = $AnyOfPredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$TrueBlockPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TrueBlockPredicate$$Type = ($TrueBlockPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TrueBlockPredicate_ = $TrueBlockPredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$WouldSurvivePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WouldSurvivePredicate$$Type = ($WouldSurvivePredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WouldSurvivePredicate_ = $WouldSurvivePredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$MatchingFluidsPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MatchingFluidsPredicate$$Type = ($MatchingFluidsPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MatchingFluidsPredicate_ = $MatchingFluidsPredicate$$Type;
}
}

