declare module "packages/net/minecraft/client/quickplay/$QuickPlayLog$Type" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $QuickPlayLog$Type extends $Enum<$QuickPlayLog$Type> implements $StringRepresentable {
static readonly "MULTIPLAYER": $QuickPlayLog$Type
static readonly "REALMS": $QuickPlayLog$Type
static readonly "SINGLEPLAYER": $QuickPlayLog$Type

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $QuickPlayLog$Type
public static "values"(): $QuickPlayLog$Type[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/client/quickplay/$QuickPlayLog" {
import { $QuickPlayLog$Type$$Type } from "packages/net/minecraft/client/quickplay/$QuickPlayLog$Type"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"

export class $QuickPlayLog {
public "log"(minecraft0: $Minecraft$$Type): void
public static "of"(string0: string): $QuickPlayLog
public "setWorldData"(type0: $QuickPlayLog$Type$$Type, string1: string, string2: string): void
}
}

