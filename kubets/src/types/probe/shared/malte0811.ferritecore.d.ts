declare module "packages/malte0811/ferritecore/mixin/dedupbakedquad/$BakedQuadAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BakedQuadAccess {
"setVertices"(int0s: integer[]): void
set "vertices"(value: integer[])
}

export namespace $BakedQuadAccess {
const probejs$$marker: never
}
export abstract class $BakedQuadAccess$$Static implements $BakedQuadAccess {
}
}

declare module "packages/malte0811/ferritecore/mixin/mrl/$ResourceLocationAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ResourceLocationAccess {
"setNamespace"(string0: string): void
"setPath"(string0: string): void
set "namespace"(value: string)
set "path"(value: string)
}

export namespace $ResourceLocationAccess {
const probejs$$marker: never
}
export abstract class $ResourceLocationAccess$$Static implements $ResourceLocationAccess {
}
}

declare module "packages/malte0811/ferritecore/mixin/blockstatecache/$DiscreteVSAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DiscreteVSAccess {
"getXSize"(): integer
"getYSize"(): integer
"getZSize"(): integer
get "xSize"(): integer
get "ySize"(): integer
get "zSize"(): integer
}

export namespace $DiscreteVSAccess {
const probejs$$marker: never
}
export abstract class $DiscreteVSAccess$$Static implements $DiscreteVSAccess {
}
}

declare module "packages/malte0811/ferritecore/mixin/blockstatecache/$VoxelShapeAccess" {
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $DiscreteVoxelShape, $DiscreteVoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"

export interface $VoxelShapeAccess {
"getFaces"(): $VoxelShape[]
"getShape"(): $DiscreteVoxelShape
"setFaces"(voxelShape0s: $VoxelShape$$Type[]): void
"setShape"(discreteVoxelShape0: $DiscreteVoxelShape$$Type): void
get "faces"(): $VoxelShape[]
get "shape"(): $DiscreteVoxelShape
set "faces"(value: $VoxelShape$$Type[])
set "shape"(value: $DiscreteVoxelShape$$Type)
}

export namespace $VoxelShapeAccess {
const probejs$$marker: never
}
export abstract class $VoxelShapeAccess$$Static implements $VoxelShapeAccess {
}
}

declare module "packages/malte0811/ferritecore/fastmap/$FastMap" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $ImmutableSet } from "packages/com/google/common/collect/$ImmutableSet"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Property, $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $FastMapKey } from "packages/malte0811/ferritecore/fastmap/$FastMapKey"
import { $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export class $FastMap<Value> {
constructor(collection0: $Collection$$Type<$Property$$Type<any>>, map1: $Map$$Type<$Map$$Type<$Property$$Type<any>, $Comparable$$Type<any>>, Value>, boolean2: boolean)

public "getEntry"(int0: integer, int1: integer): $Map$Entry<$Property<any>, $Comparable<any>>
public "getIndexOf"(map0: $Map$$Type<$Property$$Type<any>, $Comparable$$Type<any>>): integer
public "getKey"(int0: integer): $FastMapKey<any>
public "getPropertySet"(): $ImmutableSet<$Property<any>>
public "getValue"(int0: integer, object1: any): $Comparable<any>
public "getValue"<T extends $Comparable<T>>(int0: integer, property1: $Property$$Type<T>): T
public "isSingleState"(): boolean
public "numProperties"(): integer
public "with"<T extends $Comparable<T>>(int0: integer, property1: $Property$$Type<T>, t2: T): Value
public "withUnsafe"<T extends $Comparable<T>>(int0: integer, property1: $Property$$Type<T>, object2: any): Value
get "propertySet"(): $ImmutableSet<$Property<any>>
get "singleState"(): boolean
}
}

declare module "packages/malte0811/ferritecore/ducks/$FastMapStateHolder" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Table, $Table$$Type } from "packages/com/google/common/collect/$Table"
import { $Property, $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $FastMap, $FastMap$$Type } from "packages/malte0811/ferritecore/fastmap/$FastMap"
import { $ImmutableMap, $ImmutableMap$$Type } from "packages/com/google/common/collect/$ImmutableMap"

export interface $FastMapStateHolder<S> {
"getNeighborTable"(): $Table<$Property<any>, $Comparable<any>, S>
"getStateIndex"(): integer
"getStateMap"(): $FastMap<S>
"getVanillaPropertyMap"(): $ImmutableMap<$Property<any>, $Comparable<any>>
"replacePropertyMap"(immutableMap0: $ImmutableMap$$Type<$Property$$Type<any>, $Comparable$$Type<any>>): void
"setNeighborTable"(table0: $Table$$Type<$Property$$Type<any>, $Comparable$$Type<any>, S>): void
"setStateIndex"(int0: integer): void
"setStateMap"(fastMap0: $FastMap$$Type<S>): void
get "neighborTable"(): $Table<$Property<any>, $Comparable<any>, S>
get "stateIndex"(): integer
get "stateMap"(): $FastMap<S>
get "vanillaPropertyMap"(): $ImmutableMap<$Property<any>, $Comparable<any>>
set "neighborTable"(value: $Table$$Type<$Property$$Type<any>, $Comparable$$Type<any>, S>)
set "stateIndex"(value: integer)
set "stateMap"(value: $FastMap$$Type<S>)
}

export namespace $FastMapStateHolder {
const probejs$$marker: never
}
export abstract class $FastMapStateHolder$$Static<S> implements $FastMapStateHolder<S> {
}
}

declare module "packages/malte0811/ferritecore/fastmap/$FastMapKey" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Property } from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $FastMapKey<T extends $Comparable<T>> {
public "getProperty"(): $Property<T>
public "getValue"(int0: integer): T
public "numValues"(): integer
get "property"(): $Property<T>
}
}

