declare module "packages/net/minecraft/nbt/$TagVisitor" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $IntArrayTag$$Type } from "packages/net/minecraft/nbt/$IntArrayTag"
import { $ListTag$$Type } from "packages/net/minecraft/nbt/$ListTag"
import { $IntTag$$Type } from "packages/net/minecraft/nbt/$IntTag"
import { $FloatTag$$Type } from "packages/net/minecraft/nbt/$FloatTag"
import { $ByteArrayTag$$Type } from "packages/net/minecraft/nbt/$ByteArrayTag"
import { $ShortTag$$Type } from "packages/net/minecraft/nbt/$ShortTag"
import { $LongArrayTag$$Type } from "packages/net/minecraft/nbt/$LongArrayTag"
import { $LongTag$$Type } from "packages/net/minecraft/nbt/$LongTag"
import { $EndTag$$Type } from "packages/net/minecraft/nbt/$EndTag"
import { $StringTag$$Type } from "packages/net/minecraft/nbt/$StringTag"
import { $ByteTag$$Type } from "packages/net/minecraft/nbt/$ByteTag"
import { $DoubleTag$$Type } from "packages/net/minecraft/nbt/$DoubleTag"

export interface $TagVisitor {
"visitByte"(byteTag0: $ByteTag$$Type): void
"visitByteArray"(byteArrayTag0: $ByteArrayTag$$Type): void
"visitCompound"(compoundTag0: $CompoundTag$$Type): void
"visitDouble"(doubleTag0: $DoubleTag$$Type): void
"visitEnd"(endTag0: $EndTag$$Type): void
"visitFloat"(floatTag0: $FloatTag$$Type): void
"visitInt"(intTag0: $IntTag$$Type): void
"visitIntArray"(intArrayTag0: $IntArrayTag$$Type): void
"visitList"(listTag0: $ListTag$$Type): void
"visitLong"(longTag0: $LongTag$$Type): void
"visitLongArray"(longArrayTag0: $LongArrayTag$$Type): void
"visitShort"(shortTag0: $ShortTag$$Type): void
"visitString"(stringTag0: $StringTag$$Type): void
}

export namespace $TagVisitor {
const probejs$$marker: never
}
export abstract class $TagVisitor$$Static implements $TagVisitor {
}
}

declare module "packages/net/minecraft/nbt/$EndTag" {
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $Tag } from "packages/net/minecraft/nbt/$Tag"
import { $StreamTagVisitor$ValueResult } from "packages/net/minecraft/nbt/$StreamTagVisitor$ValueResult"
import { $TagVisitor$$Type } from "packages/net/minecraft/nbt/$TagVisitor"
import { $DataOutput$$Type } from "packages/java/io/$DataOutput"

export class $EndTag implements $Tag {
static readonly "INSTANCE": $EndTag
static readonly "TYPE": $TagType<$EndTag>

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "copy"(): $EndTag
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$EndTag>
public "sizeInBytes"(): integer
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$EndTag>
}
}

declare module "packages/net/minecraft/nbt/$DoubleTag" {
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $NumericTag } from "packages/net/minecraft/nbt/$NumericTag"

export class $DoubleTag extends $NumericTag {
static readonly "TYPE": $TagType<$DoubleTag>
static readonly "ZERO": $DoubleTag

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getAsString"(): string
public "getType"(): $TagType<$DoubleTag>
public static "valueOf"(double0: double): $DoubleTag
get "asString"(): string
get "type"(): $TagType<$DoubleTag>
}
}

declare module "packages/net/minecraft/nbt/$TagType" {
import { $DataInput$$Type } from "packages/java/io/$DataInput"
import { $NbtAccounter$$Type } from "packages/net/minecraft/nbt/$NbtAccounter"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $Tag } from "packages/net/minecraft/nbt/$Tag"
import { $StreamTagVisitor$ValueResult } from "packages/net/minecraft/nbt/$StreamTagVisitor$ValueResult"
import { $EndTag } from "packages/net/minecraft/nbt/$EndTag"

export interface $TagType<T extends $Tag> {
"getName"(): string
"getPrettyName"(): string
"isValue"(): boolean
"load"(dataInput0: $DataInput$$Type, int1: integer, nbtAccounter2: $NbtAccounter$$Type): T
"parse"(dataInput0: $DataInput$$Type, streamTagVisitor1: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
"parseRoot"(dataInput0: $DataInput$$Type, streamTagVisitor1: $StreamTagVisitor$$Type): void
"skip"(dataInput0: $DataInput$$Type): void
"skip"(dataInput0: $DataInput$$Type, int1: integer): void
get "name"(): string
get "prettyName"(): string
get "value"(): boolean
}

export namespace $TagType {
function createInvalid(int0: integer): $TagType<$EndTag>
}
export abstract class $TagType$$Static<T extends $Tag> implements $TagType<T> {
static "createInvalid"(int0: integer): $TagType<$EndTag>
}
}

declare module "packages/net/minecraft/nbt/$IntArrayTag" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $CollectionTag } from "packages/net/minecraft/nbt/$CollectionTag"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntTag, $IntTag$$Type } from "packages/net/minecraft/nbt/$IntTag"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"

export class $IntArrayTag extends $CollectionTag<$IntTag> {
static readonly "TYPE": $TagType<$IntArrayTag>

constructor(int0s: integer[])
constructor(list0: $List$$Type<integer>)

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "add"(int0: integer, intTag1: $IntTag$$Type): void
public "addAll"(collection0: $Collection$$Type<$IntTag$$Type>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public "copy"(): $IntArrayTag
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<$IntTag$$Type>): void
public "getAsIntArray"(): integer[]
public "getAsString"(): string
public "getType"(): $TagType<$IntArrayTag>
public "isEmpty"(): boolean
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public "parallelStream"(): $Stream<$IntTag>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$IntTag$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$IntTag$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, intTag1: $IntTag$$Type): $IntTag
public "sort"(comparator0: $Comparator$$Type<$IntTag$$Type>): void
public "spliterator"(): $Spliterator<$IntTag>
public "stream"(): $Stream<$IntTag>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "asIntArray"(): integer[]
get "asString"(): string
get "type"(): $TagType<$IntArrayTag>
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/nbt/$Tag" {
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $StreamTagVisitor$ValueResult } from "packages/net/minecraft/nbt/$StreamTagVisitor$ValueResult"
import { $TagVisitor$$Type } from "packages/net/minecraft/nbt/$TagVisitor"
import { $DataOutput$$Type } from "packages/java/io/$DataOutput"

export interface $Tag {
"accept"(tagVisitor0: $TagVisitor$$Type): void
"accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
"acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
"copy"(): $Tag
"getAsString"(): string
"getId"(): byte
"getType"(): $TagType<any>
"sizeInBytes"(): integer
"toString"(): string
"write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<any>
}

export namespace $Tag {
const ARRAY_HEADER: integer
const MAX_DEPTH: integer
const OBJECT_HEADER: integer
const OBJECT_REFERENCE: integer
const STRING_SIZE: integer
const TAG_ANY_NUMERIC: byte
const TAG_BYTE: byte
const TAG_BYTE_ARRAY: byte
const TAG_COMPOUND: byte
const TAG_DOUBLE: byte
const TAG_END: byte
const TAG_FLOAT: byte
const TAG_INT: byte
const TAG_INT_ARRAY: byte
const TAG_LIST: byte
const TAG_LONG: byte
const TAG_LONG_ARRAY: byte
const TAG_SHORT: byte
const TAG_STRING: byte
}
export abstract class $Tag$$Static implements $Tag {
static readonly "ARRAY_HEADER": integer
static readonly "MAX_DEPTH": integer
static readonly "OBJECT_HEADER": integer
static readonly "OBJECT_REFERENCE": integer
static readonly "STRING_SIZE": integer
static readonly "TAG_ANY_NUMERIC": byte
static readonly "TAG_BYTE": byte
static readonly "TAG_BYTE_ARRAY": byte
static readonly "TAG_COMPOUND": byte
static readonly "TAG_DOUBLE": byte
static readonly "TAG_END": byte
static readonly "TAG_FLOAT": byte
static readonly "TAG_INT": byte
static readonly "TAG_INT_ARRAY": byte
static readonly "TAG_LIST": byte
static readonly "TAG_LONG": byte
static readonly "TAG_LONG_ARRAY": byte
static readonly "TAG_SHORT": byte
static readonly "TAG_STRING": byte

}
}

declare module "packages/net/minecraft/nbt/$StringTag" {
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $DataInput$$Type } from "packages/java/io/$DataInput"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $SpecialEquality } from "packages/dev/latvian/mods/rhino/util/$SpecialEquality"
import { $Tag } from "packages/net/minecraft/nbt/$Tag"
import { $StreamTagVisitor$ValueResult } from "packages/net/minecraft/nbt/$StreamTagVisitor$ValueResult"
import { $TagVisitor$$Type } from "packages/net/minecraft/nbt/$TagVisitor"
import { $DataOutput$$Type } from "packages/java/io/$DataOutput"

export class $StringTag implements $Tag, $SpecialEquality {
static readonly "TYPE": $TagType<$StringTag>

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "copy"(): $StringTag
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$StringTag>
public static "quoteAndEscape"(string0: string): string
public "sizeInBytes"(): integer
public static "skipString"(dataInput0: $DataInput$$Type): void
public "specialEquals"(o: any, shallow: boolean): boolean
public static "valueOf"(string0: string): $StringTag
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$StringTag>
}
}

declare module "packages/net/minecraft/nbt/$LongArrayTag" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $CollectionTag } from "packages/net/minecraft/nbt/$CollectionTag"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $LongSet$$Type } from "packages/it/unimi/dsi/fastutil/longs/$LongSet"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $LongTag, $LongTag$$Type } from "packages/net/minecraft/nbt/$LongTag"
import { $Stream } from "packages/java/util/stream/$Stream"

export class $LongArrayTag extends $CollectionTag<$LongTag> {
static readonly "TYPE": $TagType<$LongArrayTag>

constructor(list0: $List$$Type<long>)
constructor(longSet0: $LongSet$$Type)
constructor(long0s: long[])

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "add"(int0: integer, longTag1: $LongTag$$Type): void
public "addAll"(collection0: $Collection$$Type<$LongTag$$Type>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<$LongTag$$Type>): void
public "get"(int0: integer): $LongTag
public "getAsLongArray"(): long[]
public "getAsString"(): string
public "getType"(): $TagType<$LongArrayTag>
public "isEmpty"(): boolean
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public "parallelStream"(): $Stream<$LongTag>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$LongTag$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$LongTag$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, longTag1: $LongTag$$Type): $LongTag
public "sort"(comparator0: $Comparator$$Type<$LongTag$$Type>): void
public "spliterator"(): $Spliterator<$LongTag>
public "stream"(): $Stream<$LongTag>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "asLongArray"(): long[]
get "asString"(): string
get "type"(): $TagType<$LongArrayTag>
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/nbt/$IntTag" {
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $NumericTag } from "packages/net/minecraft/nbt/$NumericTag"

export class $IntTag extends $NumericTag {
static readonly "TYPE": $TagType<$IntTag>

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getAsString"(): string
public "getType"(): $TagType<$IntTag>
public static "valueOf"(int0: integer): $IntTag
get "asString"(): string
get "type"(): $TagType<$IntTag>
}
}

declare module "packages/net/minecraft/nbt/$ShortTag" {
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $NumericTag } from "packages/net/minecraft/nbt/$NumericTag"

export class $ShortTag extends $NumericTag {
static readonly "TYPE": $TagType<$ShortTag>

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getAsString"(): string
public "getType"(): $TagType<$ShortTag>
public static "valueOf"(short0: short): $ShortTag
get "asString"(): string
get "type"(): $TagType<$ShortTag>
}
}

declare module "packages/net/minecraft/nbt/$CompoundTag" {
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Tag, $Tag$$Type } from "packages/net/minecraft/nbt/$Tag"
import { $ListTag } from "packages/net/minecraft/nbt/$ListTag"
import { $TagVisitor$$Type } from "packages/net/minecraft/nbt/$TagVisitor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $DataOutput$$Type } from "packages/java/io/$DataOutput"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $Set } from "packages/java/util/$Set"
import { $StreamTagVisitor$ValueResult } from "packages/net/minecraft/nbt/$StreamTagVisitor$ValueResult"
import { $List$$Type } from "packages/java/util/$List"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $CompoundTag implements $Tag {
static readonly "CODEC": $Codec<$CompoundTag>
static readonly "TYPE": $TagType<$CompoundTag>
readonly "tags": $Map<string, $Tag>

constructor(map0: $Map$$Type<string, $Tag$$Type>)
constructor()

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "contains"(string0: string): boolean
public "contains"(string0: string, int1: integer): boolean
public "get"(string0: string): $Tag
public "getAllKeys"(): $Set<string>
public "getAsString"(): string
public "getBoolean"(string0: string): boolean
public "getByte"(string0: string): byte
public "getByteArray"(string0: string): byte[]
public "getCompound"(string0: string): $CompoundTag
public "getDouble"(string0: string): double
public "getFloat"(string0: string): float
public "getId"(): byte
public "getInt"(string0: string): integer
public "getIntArray"(string0: string): integer[]
public "getList"(string0: string, int1: integer): $ListTag
public "getLong"(string0: string): long
public "getLongArray"(string0: string): long[]
public "getShort"(string0: string): short
public "getString"(string0: string): string
public "getTagType"(string0: string): byte
public "getType"(): $TagType<$CompoundTag>
public "getUUID"(string0: string): $UUID
public "hasUUID"(string0: string): boolean
public "isEmpty"(): boolean
public "merge"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "put"(string0: string, tag1: $Tag$$Type): $Tag
public "putBoolean"(string0: string, boolean1: boolean): void
public "putByte"(string0: string, byte1: byte): void
public "putByteArray"(string0: string, list1: $List$$Type<byte>): void
public "putByteArray"(string0: string, byte1s: byte[]): void
public "putDouble"(string0: string, double1: double): void
public "putFloat"(string0: string, float1: float): void
public "putInt"(string0: string, int1: integer): void
public "putIntArray"(string0: string, list1: $List$$Type<integer>): void
public "putIntArray"(string0: string, int1s: integer[]): void
public "putLong"(string0: string, long1: long): void
public "putLongArray"(string0: string, list1: $List$$Type<long>): void
public "putLongArray"(string0: string, long1s: long[]): void
public "putShort"(string0: string, short1: short): void
public "putString"(string0: string, string1: string): void
public "putUUID"(string0: string, uUID1: $UUID$$Type): void
public "remove"(string0: string): void
public "size"(): integer
public "sizeInBytes"(): integer
public "write"(dataOutput0: $DataOutput$$Type): void
get "allKeys"(): $Set<string>
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$CompoundTag>
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/nbt/$ByteTag" {
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $NumericTag } from "packages/net/minecraft/nbt/$NumericTag"

export class $ByteTag extends $NumericTag {
static readonly "ONE": $ByteTag
static readonly "TYPE": $TagType<$ByteTag>
static readonly "ZERO": $ByteTag

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getAsString"(): string
public "getType"(): $TagType<$ByteTag>
public static "valueOf"(byte0: byte): $ByteTag
public static "valueOf"(boolean0: boolean): $ByteTag
get "asString"(): string
get "type"(): $TagType<$ByteTag>
}
}

declare module "packages/net/minecraft/nbt/$ByteArrayTag" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $CollectionTag } from "packages/net/minecraft/nbt/$CollectionTag"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ByteTag, $ByteTag$$Type } from "packages/net/minecraft/nbt/$ByteTag"

export class $ByteArrayTag extends $CollectionTag<$ByteTag> {
static readonly "TYPE": $TagType<$ByteArrayTag>

constructor(byte0s: byte[])
constructor(list0: $List$$Type<byte>)

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "add"(int0: integer, byteTag1: $ByteTag$$Type): void
public "addAll"(collection0: $Collection$$Type<$ByteTag$$Type>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<$ByteTag$$Type>): void
public "get"(int0: integer): $ByteTag
public "getAsByteArray"(): byte[]
public "getAsString"(): string
public "getType"(): $TagType<$ByteArrayTag>
public "isEmpty"(): boolean
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public "parallelStream"(): $Stream<$ByteTag>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$ByteTag$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$ByteTag$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, byteTag1: $ByteTag$$Type): $ByteTag
public "sort"(comparator0: $Comparator$$Type<$ByteTag$$Type>): void
public "spliterator"(): $Spliterator<$ByteTag>
public "stream"(): $Stream<$ByteTag>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "asByteArray"(): byte[]
get "asString"(): string
get "type"(): $TagType<$ByteArrayTag>
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/nbt/$NumericTag" {
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $SpecialEquality } from "packages/dev/latvian/mods/rhino/util/$SpecialEquality"
import { $Tag } from "packages/net/minecraft/nbt/$Tag"
import { $StreamTagVisitor$ValueResult } from "packages/net/minecraft/nbt/$StreamTagVisitor$ValueResult"
import { $TagVisitor$$Type } from "packages/net/minecraft/nbt/$TagVisitor"
import { $DataOutput$$Type } from "packages/java/io/$DataOutput"

export class $NumericTag implements $Tag, $SpecialEquality {
public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "copy"(): $Tag
public "getAsByte"(): byte
public "getAsDouble"(): double
public "getAsFloat"(): float
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsNumber"(): number
public "getAsShort"(): short
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<any>
public "sizeInBytes"(): integer
public "specialEquals"(o: any, shallow: boolean): boolean
public "write"(dataOutput0: $DataOutput$$Type): void
get "asByte"(): byte
get "asDouble"(): double
get "asFloat"(): float
get "asInt"(): integer
get "asLong"(): long
get "asNumber"(): number
get "asShort"(): short
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<any>
}
}

declare module "packages/net/minecraft/nbt/$CollectionTag" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $Tag, $Tag$$Type } from "packages/net/minecraft/nbt/$Tag"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $AbstractList } from "packages/java/util/$AbstractList"
import { $TagVisitor$$Type } from "packages/net/minecraft/nbt/$TagVisitor"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $DataOutput$$Type } from "packages/java/io/$DataOutput"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $StreamTagVisitor$ValueResult } from "packages/net/minecraft/nbt/$StreamTagVisitor$ValueResult"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"

export class $CollectionTag<T extends $Tag> extends $AbstractList<T> implements $Tag {
constructor()

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "add"(int0: integer, t1: T): void
public "addAll"(collection0: $Collection$$Type<T>): boolean
public "addTag"(int0: integer, tag1: $Tag$$Type): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public "copy"(): $Tag
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<T>): void
public "getAsString"(): string
public "getElementType"(): byte
public "getId"(): byte
public "getType"(): $TagType<any>
public "isEmpty"(): boolean
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public "parallelStream"(): $Stream<T>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<T>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<T>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, t1: T): T
public "setTag"(int0: integer, tag1: $Tag$$Type): boolean
public "size"(): integer
public "sizeInBytes"(): integer
public "sort"(comparator0: $Comparator$$Type<T>): void
public "spliterator"(): $Spliterator<T>
public "stream"(): $Stream<T>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "toString"(): string
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "elementType"(): byte
get "id"(): byte
get "type"(): $TagType<any>
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/nbt/$ListTag" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $CollectionTag } from "packages/net/minecraft/nbt/$CollectionTag"
import { $Tag, $Tag$$Type } from "packages/net/minecraft/nbt/$Tag"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"

export class $ListTag extends $CollectionTag<$Tag> {
static readonly "TYPE": $TagType<$ListTag>

constructor()

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "addAll"(collection0: $Collection$$Type<$Tag$$Type>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<$Tag$$Type>): void
public "get"(int0: integer): $Tag
public "getAsString"(): string
public "getCompound"(int0: integer): $CompoundTag
public "getDouble"(int0: integer): double
public "getFloat"(int0: integer): float
public "getInt"(int0: integer): integer
public "getIntArray"(int0: integer): integer[]
public "getList"(int0: integer): $ListTag
public "getLongArray"(int0: integer): long[]
public "getShort"(int0: integer): short
public "getString"(int0: integer): string
public "getType"(): $TagType<$ListTag>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public "parallelStream"(): $Stream<$Tag>
public "remove"(int0: integer): $Tag
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$Tag$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$Tag$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, tag1: $Tag$$Type): $Tag
public "sort"(comparator0: $Comparator$$Type<$Tag$$Type>): void
public "spliterator"(): $Spliterator<$Tag>
public "stream"(): $Stream<$Tag>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "asString"(): string
get "type"(): $TagType<$ListTag>
}
}

declare module "packages/net/minecraft/nbt/$NbtAccounter" {
import { $NbtAccounterAccessor } from "packages/com/simibubi/create/foundation/mixin/accessor/$NbtAccounterAccessor"
import { $IModifyAbleNbtAccounter } from "packages/com/connectivity/networkstats/$IModifyAbleNbtAccounter"

export class $NbtAccounter implements $IModifyAbleNbtAccounter, $NbtAccounterAccessor {
static readonly "UNLIMITED": $NbtAccounter

constructor(long0: long)

public "accountBytes"(long0: long): void
public "getOriginalQuota"(): long
public "getUsage"(): long
public "readUTF"(string0: string): string
public "setQuota"(long0: long): void
get "quota"(): long
set "quota"(value: long)
get "originalQuota"(): long
get "usage"(): long
}
}

declare module "packages/net/minecraft/nbt/$LongTag" {
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $NumericTag } from "packages/net/minecraft/nbt/$NumericTag"

export class $LongTag extends $NumericTag {
static readonly "TYPE": $TagType<$LongTag>

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getAsString"(): string
public "getType"(): $TagType<$LongTag>
public static "valueOf"(long0: long): $LongTag
get "asString"(): string
get "type"(): $TagType<$LongTag>
}
}

declare module "packages/net/minecraft/nbt/$StreamTagVisitor$ValueResult" {
import { $Enum } from "packages/java/lang/$Enum"

export class $StreamTagVisitor$ValueResult extends $Enum<$StreamTagVisitor$ValueResult> {
static readonly "BREAK": $StreamTagVisitor$ValueResult
static readonly "CONTINUE": $StreamTagVisitor$ValueResult
static readonly "HALT": $StreamTagVisitor$ValueResult

public static "valueOf"(string0: string): $StreamTagVisitor$ValueResult
public static "values"(): $StreamTagVisitor$ValueResult[]
}
}

declare module "packages/net/minecraft/nbt/$StreamTagVisitor$EntryResult" {
import { $Enum } from "packages/java/lang/$Enum"

export class $StreamTagVisitor$EntryResult extends $Enum<$StreamTagVisitor$EntryResult> {
static readonly "BREAK": $StreamTagVisitor$EntryResult
static readonly "ENTER": $StreamTagVisitor$EntryResult
static readonly "HALT": $StreamTagVisitor$EntryResult
static readonly "SKIP": $StreamTagVisitor$EntryResult

public static "valueOf"(string0: string): $StreamTagVisitor$EntryResult
public static "values"(): $StreamTagVisitor$EntryResult[]
}
}

declare module "packages/net/minecraft/nbt/$StreamTagVisitor" {
import { $TagType$$Type } from "packages/net/minecraft/nbt/$TagType"
import { $StreamTagVisitor$ValueResult } from "packages/net/minecraft/nbt/$StreamTagVisitor$ValueResult"
import { $StreamTagVisitor$EntryResult } from "packages/net/minecraft/nbt/$StreamTagVisitor$EntryResult"

export interface $StreamTagVisitor {
"visit"(float0: float): $StreamTagVisitor$ValueResult
"visit"(int0: integer): $StreamTagVisitor$ValueResult
"visit"(short0: short): $StreamTagVisitor$ValueResult
"visit"(double0: double): $StreamTagVisitor$ValueResult
"visit"(long0: long): $StreamTagVisitor$ValueResult
"visit"(byte0: byte): $StreamTagVisitor$ValueResult
"visit"(int0s: integer[]): $StreamTagVisitor$ValueResult
"visit"(string0: string): $StreamTagVisitor$ValueResult
"visit"(byte0s: byte[]): $StreamTagVisitor$ValueResult
"visit"(long0s: long[]): $StreamTagVisitor$ValueResult
"visitContainerEnd"(): $StreamTagVisitor$ValueResult
"visitElement"(tagType0: $TagType$$Type<any>, int1: integer): $StreamTagVisitor$EntryResult
"visitEnd"(): $StreamTagVisitor$ValueResult
"visitEntry"(tagType0: $TagType$$Type<any>, string1: string): $StreamTagVisitor$EntryResult
"visitEntry"(tagType0: $TagType$$Type<any>): $StreamTagVisitor$EntryResult
"visitList"(tagType0: $TagType$$Type<any>, int1: integer): $StreamTagVisitor$ValueResult
"visitRootEntry"(tagType0: $TagType$$Type<any>): $StreamTagVisitor$ValueResult
}

export namespace $StreamTagVisitor {
const probejs$$marker: never
}
export abstract class $StreamTagVisitor$$Static implements $StreamTagVisitor {
}
}

declare module "packages/net/minecraft/nbt/$FloatTag" {
import { $TagType } from "packages/net/minecraft/nbt/$TagType"
import { $StreamTagVisitor$$Type } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $NumericTag } from "packages/net/minecraft/nbt/$NumericTag"

export class $FloatTag extends $NumericTag {
static readonly "TYPE": $TagType<$FloatTag>
static readonly "ZERO": $FloatTag

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getAsString"(): string
public "getType"(): $TagType<$FloatTag>
public static "valueOf"(float0: float): $FloatTag
get "asString"(): string
get "type"(): $TagType<$FloatTag>
}
}

