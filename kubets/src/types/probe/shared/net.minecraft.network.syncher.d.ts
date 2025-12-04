declare module "packages/net/minecraft/network/syncher/$EntityDataAccessor" {
import { $EntityDataSerializer, $EntityDataSerializer$$Type } from "packages/net/minecraft/network/syncher/$EntityDataSerializer"

export class $EntityDataAccessor<T> {
constructor(int0: integer, entityDataSerializer1: $EntityDataSerializer$$Type<T>)

public "getId"(): integer
public "getSerializer"(): $EntityDataSerializer<T>
get "id"(): integer
set "id"(value: integer)
get "serializer"(): $EntityDataSerializer<T>
}
}

declare module "packages/net/minecraft/network/syncher/$SynchedEntityData$DataValue" {
import { $EntityDataSerializer, $EntityDataSerializer$$Type } from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $EntityDataAccessor$$Type } from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export class $SynchedEntityData$DataValue<T> extends $Record {
constructor(id: integer, serializer: $EntityDataSerializer$$Type<T>, value: T)

public static "create"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>, t1: T): $SynchedEntityData$DataValue<T>
public "id"(): integer
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type, int1: integer): $SynchedEntityData$DataValue<any>
public "serializer"(): $EntityDataSerializer<T>
public "value"(): T
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "packages/net/minecraft/network/syncher/$SynchedEntityData$DataItem" {
import { $EntityDataAccessor, $EntityDataAccessor$$Type } from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import { $SynchedEntityData$DataValue } from "packages/net/minecraft/network/syncher/$SynchedEntityData$DataValue"

export class $SynchedEntityData$DataItem<T> {
constructor(entityDataAccessor0: $EntityDataAccessor$$Type<T>, t1: T)

public "getAccessor"(): $EntityDataAccessor<T>
public "getValue"(): T
public "isDirty"(): boolean
public "isSetToDefault"(): boolean
public "setDirty"(boolean0: boolean): void
public "setValue"(t0: T): void
public "value"(): $SynchedEntityData$DataValue<T>
get "accessor"(): $EntityDataAccessor<T>
get "dirty"(): boolean
get "setToDefault"(): boolean
set "dirty"(value: boolean)
}
}

declare module "packages/net/minecraft/network/syncher/$EntityDataSerializer" {
import { $FriendlyByteBuf$Reader$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $IdMap$$Type } from "packages/net/minecraft/core/$IdMap"
import { $EntityDataAccessor } from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import { $FriendlyByteBuf$Writer$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"

export interface $EntityDataSerializer<T> {
"copy"(t0: T): T
"createAccessor"(int0: integer): $EntityDataAccessor<T>
"read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
}

export namespace $EntityDataSerializer {
function optional<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>): $EntityDataSerializer<$Optional<T>>
function simple<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>): $EntityDataSerializer<T>
function simpleEnum<T extends $Enum<T>>(class0: $Class$$Type<T>): $EntityDataSerializer<T>
function simpleId<T>(idMap0: $IdMap$$Type<T>): $EntityDataSerializer<T>
}
export abstract class $EntityDataSerializer$$Static<T> implements $EntityDataSerializer<T> {
static "optional"<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>): $EntityDataSerializer<$Optional<T>>
static "simple"<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>): $EntityDataSerializer<T>
static "simpleEnum"<T extends $Enum<T>>(class0: $Class$$Type<T>): $EntityDataSerializer<T>
static "simpleId"<T>(idMap0: $IdMap$$Type<T>): $EntityDataSerializer<T>
}
}

declare module "packages/net/minecraft/network/syncher/$SynchedEntityData" {
import { $EntityDataSerializer$$Type } from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import { $ReadWriteLock, $ReadWriteLock$$Type } from "packages/java/util/concurrent/locks/$ReadWriteLock"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $SynchedEntityData$DataItem } from "packages/net/minecraft/network/syncher/$SynchedEntityData$DataItem"
import { $Int2ObjectMap } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import { $EntityDataAccessor, $EntityDataAccessor$$Type } from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import { $Object2IntMap } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $SynchedEntityData$DataValue, $SynchedEntityData$DataValue$$Type } from "packages/net/minecraft/network/syncher/$SynchedEntityData$DataValue"

export class $SynchedEntityData {
static readonly "ENTITY_ID_POOL": $Object2IntMap<$Class<$Entity>>
readonly "itemsById": $Int2ObjectMap<$SynchedEntityData$DataItem<any>>

constructor(entity0: $Entity$$Type)

public "assignValues"(list0: $List$$Type<$SynchedEntityData$DataValue$$Type<any>>): void
public "define"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>, t1: T): void
public static "defineId"<T>(class0: $Class$$Type<$Entity$$Type>, entityDataSerializer1: $EntityDataSerializer$$Type<T>): $EntityDataAccessor<T>
public "get"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>): T
public "getNonDefaultValues"(): $List<$SynchedEntityData$DataValue<any>>
public "hasItem"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>): boolean
public "isDirty"(): boolean
public "isEmpty"(): boolean
public "packDirty"(): $List<$SynchedEntityData$DataValue<any>>
public "set"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>, t1: T, boolean2: boolean): void
public "set"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>, t1: T): void
get "lock"(): $ReadWriteLock
set "lock"(value: $ReadWriteLock$$Type)
get "nonDefaultValues"(): $List<$SynchedEntityData$DataValue<any>>
get "dirty"(): boolean
get "empty"(): boolean
}
}

