declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$ReplaceablePredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $StateTestingPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$StateTestingPredicate"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ReplaceablePredicate extends $StateTestingPredicate {
static readonly "CODEC": $Codec<$ReplaceablePredicate>

constructor(vec3i0: $Vec3i$$Type)

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$SolidPredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $StateTestingPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$StateTestingPredicate"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

/** @deprecated */
export class $SolidPredicate extends $StateTestingPredicate {
static readonly "CODEC": $Codec<$SolidPredicate>

constructor(vec3i0: $Vec3i$$Type)

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$CombiningPredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPredicateType } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicateType"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $CombiningPredicate implements $BlockPredicate {
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "codec"<T extends $CombiningPredicate>(function0: $Function$$Type<$List$$Type<$BlockPredicate$$Type>, T>): $Codec<T>
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$HasSturdyFacePredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPredicateType } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicateType"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $HasSturdyFacePredicate implements $BlockPredicate {
static readonly "CODEC": $Codec<$HasSturdyFacePredicate>

constructor(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type)

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$InsideWorldBoundsPredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPredicateType } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicateType"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $InsideWorldBoundsPredicate implements $BlockPredicate {
static readonly "CODEC": $Codec<$InsideWorldBoundsPredicate>

constructor(vec3i0: $Vec3i$$Type)

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$AllOfPredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $CombiningPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$CombiningPredicate"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $AllOfPredicate extends $CombiningPredicate {
static readonly "CODEC": $Codec<$AllOfPredicate>

constructor(list0: $List$$Type<$BlockPredicate$$Type>)

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$StateTestingPredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPredicateType } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicateType"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $StateTestingPredicate implements $BlockPredicate {
public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$MatchingBlocksPredicate" {
import { $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $StateTestingPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$StateTestingPredicate"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $MatchingBlocksPredicate extends $StateTestingPredicate {
static readonly "CODEC": $Codec<$MatchingBlocksPredicate>

constructor(vec3i0: $Vec3i$$Type, holderSet1: $HolderSet$$Type<$Block$$Type>)

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPredicateType } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicateType"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $BlockPredicate extends $BiPredicate<$WorldGenLevel, $BlockPos> {
"and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
"negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
"or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
"test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
"type"(): $BlockPredicateType<any>
}

export namespace $BlockPredicate {
const CODEC: $Codec<$BlockPredicate>
const ONLY_IN_AIR_OR_WATER_PREDICATE: $BlockPredicate
const ONLY_IN_AIR_PREDICATE: $BlockPredicate
function allOf(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
function allOf(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
function allOf(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
function alwaysTrue(): $BlockPredicate
function anyOf(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
function anyOf(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
function anyOf(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
function hasSturdyFace(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
function hasSturdyFace(direction0: $Direction$$Type): $BlockPredicate
function insideWorld(vec3i0: $Vec3i$$Type): $BlockPredicate
function matchesBlocks(list0: $List$$Type<$Block$$Type>): $BlockPredicate
function matchesBlocks(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
function matchesBlocks(...block0s: $Block$$Type[]): $BlockPredicate
function matchesBlocks(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
function matchesFluids(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
function matchesFluids(...fluid0s: $Fluid$$Type[]): $BlockPredicate
function matchesFluids(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
function matchesTag(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
function matchesTag(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
function noFluid(vec3i0: $Vec3i$$Type): $BlockPredicate
function noFluid(): $BlockPredicate
function not(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
function replaceable(): $BlockPredicate
function replaceable(vec3i0: $Vec3i$$Type): $BlockPredicate
function solid(vec3i0: $Vec3i$$Type): $BlockPredicate
function solid(): $BlockPredicate
function wouldSurvive(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
export abstract class $BlockPredicate$$Static implements $BlockPredicate {
static readonly "CODEC": $Codec<$BlockPredicate>
static readonly "ONLY_IN_AIR_OR_WATER_PREDICATE": $BlockPredicate
static readonly "ONLY_IN_AIR_PREDICATE": $BlockPredicate

static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
static "alwaysTrue"(): $BlockPredicate
static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
static "noFluid"(): $BlockPredicate
static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
static "replaceable"(): $BlockPredicate
static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
static "solid"(): $BlockPredicate
static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$NotPredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPredicateType } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicateType"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $NotPredicate implements $BlockPredicate {
static readonly "CODEC": $Codec<$NotPredicate>

constructor(blockPredicate0: $BlockPredicate$$Type)

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$MatchingBlockTagPredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $StateTestingPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$StateTestingPredicate"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $MatchingBlockTagPredicate extends $StateTestingPredicate {
static readonly "CODEC": $Codec<$MatchingBlockTagPredicate>

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$AnyOfPredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $CombiningPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$CombiningPredicate"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $AnyOfPredicate extends $CombiningPredicate {
static readonly "CODEC": $Codec<$AnyOfPredicate>

constructor(list0: $List$$Type<$BlockPredicate$$Type>)

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$TrueBlockPredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPredicateType } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicateType"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $TrueBlockPredicate implements $BlockPredicate {
static readonly "CODEC": $Codec<$TrueBlockPredicate>
static "INSTANCE": $TrueBlockPredicate

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$WouldSurvivePredicate" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPredicateType } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicateType"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $WouldSurvivePredicate implements $BlockPredicate {
static readonly "CODEC": $Codec<$WouldSurvivePredicate>

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public "test"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "type"(): $BlockPredicateType<any>
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

declare module "packages/net/minecraft/world/level/levelgen/blockpredicates/$MatchingFluidsPredicate" {
import { $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $StateTestingPredicate } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$StateTestingPredicate"
import { $BlockPredicate, $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $MatchingFluidsPredicate extends $StateTestingPredicate {
static readonly "CODEC": $Codec<$MatchingFluidsPredicate>

constructor(vec3i0: $Vec3i$$Type, holderSet1: $HolderSet$$Type<$Fluid$$Type>)

public static "allOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "allOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "allOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "alwaysTrue"(): $BlockPredicate
public "and"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "anyOf"(...blockPredicate0s: $BlockPredicate$$Type[]): $BlockPredicate
public static "anyOf"(blockPredicate0: $BlockPredicate$$Type, blockPredicate1: $BlockPredicate$$Type): $BlockPredicate
public static "anyOf"(list0: $List$$Type<$BlockPredicate$$Type>): $BlockPredicate
public static "hasSturdyFace"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPredicate
public static "hasSturdyFace"(direction0: $Direction$$Type): $BlockPredicate
public static "insideWorld"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "matchesBlocks"(list0: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, ...block1s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(...block0s: $Block$$Type[]): $BlockPredicate
public static "matchesBlocks"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Block$$Type>): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, list1: $List$$Type<$Fluid$$Type>): $BlockPredicate
public static "matchesFluids"(...fluid0s: $Fluid$$Type[]): $BlockPredicate
public static "matchesFluids"(vec3i0: $Vec3i$$Type, ...fluid1s: $Fluid$$Type[]): $BlockPredicate
public static "matchesTag"(vec3i0: $Vec3i$$Type, tagKey1: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public static "matchesTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $BlockPredicate
public "negate"(): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "noFluid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "noFluid"(): $BlockPredicate
public static "not"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicate
public "or"(biPredicate0: $BiPredicate$$Type<$WorldGenLevel$$Type, $BlockPos$$Type>): $BiPredicate<$WorldGenLevel, $BlockPos>
public static "replaceable"(): $BlockPredicate
public static "replaceable"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(vec3i0: $Vec3i$$Type): $BlockPredicate
public static "solid"(): $BlockPredicate
public static "wouldSurvive"(blockState0: $BlockState$$Type, vec3i1: $Vec3i$$Type): $BlockPredicate
}
}

