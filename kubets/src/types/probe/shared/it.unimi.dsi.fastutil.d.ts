declare module "packages/it/unimi/dsi/fastutil/$Hash" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Hash {
}

export namespace $Hash {
const DEFAULT_GROWTH_FACTOR: integer
const DEFAULT_INITIAL_SIZE: integer
const DEFAULT_LOAD_FACTOR: float
const FAST_LOAD_FACTOR: float
const FREE: byte
const OCCUPIED: byte
const PRIMES: integer[]
const REMOVED: byte
const VERY_FAST_LOAD_FACTOR: float
}
export abstract class $Hash$$Static implements $Hash {
/** @deprecated */
static readonly "DEFAULT_GROWTH_FACTOR": integer
static readonly "DEFAULT_INITIAL_SIZE": integer
static readonly "DEFAULT_LOAD_FACTOR": float
static readonly "FAST_LOAD_FACTOR": float
/** @deprecated */
static readonly "FREE": byte
/** @deprecated */
static readonly "OCCUPIED": byte
/** @deprecated */
static readonly "PRIMES": integer[]
/** @deprecated */
static readonly "REMOVED": byte
static readonly "VERY_FAST_LOAD_FACTOR": float

}
}

declare module "packages/it/unimi/dsi/fastutil/$Stack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Stack<K> {
"isEmpty"(): boolean
"peek"(int0: integer): K
"pop"(): K
"push"(k0: K): void
"top"(): K
get "empty"(): boolean
}

export namespace $Stack {
const probejs$$marker: never
}
export abstract class $Stack$$Static<K> implements $Stack<K> {
}
}

declare module "packages/it/unimi/dsi/fastutil/$BidirectionalIterator" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Iterator } from "packages/java/util/$Iterator"

export interface $BidirectionalIterator<K> extends $Iterator<K> {
"forEachRemaining"(consumer0: $Consumer$$Type<K>): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"next"(): K
"previous"(): K
"remove"(): void
}

export namespace $BidirectionalIterator {
const probejs$$marker: never
}
export abstract class $BidirectionalIterator$$Static<K> implements $BidirectionalIterator<K> {
}
}

declare module "packages/it/unimi/dsi/fastutil/$Hash$Strategy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Hash$Strategy<K> {
"equals"(k0: K, k1: K): boolean
"hashCode"(k0: K): integer
}

export namespace $Hash$Strategy {
const probejs$$marker: never
}
export abstract class $Hash$Strategy$$Static<K> implements $Hash$Strategy<K> {
}
}

declare module "packages/it/unimi/dsi/fastutil/$Function" {
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "packages/java/util/function/$Function"

export interface $Function<K, V> extends $Function$0<K, V> {
"andThen"<V>(function0: $Function$0$$Type<V, V>): $Function$0<K, V>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$0$$Type<V, K>): $Function$0<V, V>
"containsKey"(object0: any): boolean
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"put"(k0: K, v1: V): V
"remove"(object0: any): V
"size"(): integer
}

export namespace $Function {
function identity<T>(): $Function$0<T, T>
}
export abstract class $Function$$Static<K, V> implements $Function<K, V> {
static "identity"<T>(): $Function$0<T, T>
}
}

