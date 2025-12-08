declare module "packages/net/minecraft/$SystemReport" {
import { $SystemReportAccessor } from "packages/com/simibubi/create/foundation/mixin/accessor/$SystemReportAccessor"
import { $StringBuilder$$Type } from "packages/java/lang/$StringBuilder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $SystemReport implements $SystemReportAccessor {
static readonly "BYTES_PER_MEBIBYTE": long

constructor()

public "appendToCrashReportString"(stringBuilder0: $StringBuilder$$Type): void
public "setDetail"(string0: string, supplier1: $Supplier$$Type<string>): void
public "setDetail"(string0: string, string1: string): void
public "toLineSeparatedString"(): string
}
}

declare module "packages/net/minecraft/$ReportedException" {
import { $RuntimeException } from "packages/java/lang/$RuntimeException"
import { $CrashReport, $CrashReport$$Type } from "packages/net/minecraft/$CrashReport"

export class $ReportedException extends $RuntimeException {
constructor(crashReport0: $CrashReport$$Type)

public "getReport"(): $CrashReport
get "report"(): $CrashReport
}
}

declare module "packages/net/minecraft/$WorldVersion" {
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $Date } from "packages/java/util/$Date"
import { $DataVersion } from "packages/net/minecraft/world/level/storage/$DataVersion"

export interface $WorldVersion {
"getBuildTime"(): $Date
"getDataVersion"(): $DataVersion
"getId"(): string
"getName"(): string
"getPackVersion"(packType0: $PackType$$Type): integer
"getProtocolVersion"(): integer
"isStable"(): boolean
get "buildTime"(): $Date
get "dataVersion"(): $DataVersion
get "id"(): string
get "name"(): string
get "protocolVersion"(): integer
get "stable"(): boolean
}

export namespace $WorldVersion {
const probejs$$marker: never
}
export abstract class $WorldVersion$$Static implements $WorldVersion {
}
}

declare module "packages/net/minecraft/$CrashReport" {
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $File, $File$$Type } from "packages/java/io/$File"
import { $StringBuilder$$Type } from "packages/java/lang/$StringBuilder"
import { $SystemReport } from "packages/net/minecraft/$SystemReport"
import { $CrashReportCategory } from "packages/net/minecraft/$CrashReportCategory"

export class $CrashReport {
constructor(string0: string, throwable1: $Throwable$$Type)

public "addCategory"(string0: string, int1: integer): $CrashReportCategory
public "addCategory"(string0: string): $CrashReportCategory
public static "forThrowable"(throwable0: $Throwable$$Type, string1: string): $CrashReport
public "getDetails"(): string
public "getDetails"(stringBuilder0: $StringBuilder$$Type): void
public "getException"(): $Throwable
public "getExceptionMessage"(): string
public "getFriendlyReport"(): string
public "getSaveFile"(): $File
public "getSystemReport"(): $SystemReport
public "getTitle"(): string
public static "preload"(): void
public "saveToFile"(file0: $File$$Type): boolean
get "details"(): string
get "exception"(): $Throwable
get "exceptionMessage"(): string
get "friendlyReport"(): string
get "saveFile"(): $File
get "systemReport"(): $SystemReport
get "title"(): string
}
}

declare module "packages/net/minecraft/$ChatFormatting" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Collection } from "packages/java/util/$Collection"
import { $Color } from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $TextColor } from "packages/net/minecraft/network/chat/$TextColor"

export class $ChatFormatting extends $Enum<$ChatFormatting> implements $StringRepresentable, $Color {
static readonly "AQUA": $ChatFormatting
static readonly "BLACK": $ChatFormatting
static readonly "BLUE": $ChatFormatting
static readonly "BOLD": $ChatFormatting
static readonly "CODEC": $Codec<$ChatFormatting>
static readonly "DARK_AQUA": $ChatFormatting
static readonly "DARK_BLUE": $ChatFormatting
static readonly "DARK_GRAY": $ChatFormatting
static readonly "DARK_GREEN": $ChatFormatting
static readonly "DARK_PURPLE": $ChatFormatting
static readonly "DARK_RED": $ChatFormatting
static readonly "GOLD": $ChatFormatting
static readonly "GRAY": $ChatFormatting
static readonly "GREEN": $ChatFormatting
static readonly "ITALIC": $ChatFormatting
static readonly "LIGHT_PURPLE": $ChatFormatting
static readonly "OBFUSCATED": $ChatFormatting
static readonly "PREFIX_CODE": character
static readonly "RED": $ChatFormatting
static readonly "RESET": $ChatFormatting
static readonly "STRIKETHROUGH": $ChatFormatting
static readonly "UNDERLINE": $ChatFormatting
static readonly "WHITE": $ChatFormatting
static readonly "YELLOW": $ChatFormatting

public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "createTextColorJS"(): $TextColor
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getArgbJS"(): integer
public static "getByCode"(char0: character): $ChatFormatting
public static "getById"(int0: integer): $ChatFormatting
public static "getByName"(string0: string): $ChatFormatting
public "getChar"(): character
public "getColor"(): integer
public "getFireworkColorJS"(): integer
public "getHexJS"(): string
public "getId"(): integer
public "getName"(): string
public static "getNames"(boolean0: boolean, boolean1: boolean): $Collection<string>
public "getRgbJS"(): integer
public "getSerializeJS"(): string
public "getSerializedName"(): string
public "isColor"(): boolean
public "isFormat"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "specialEquals"(o: any, shallow: boolean): boolean
public static "stripFormatting"(string0: string): string
public static "valueOf"(string0: string): $ChatFormatting
public static "values"(): $ChatFormatting[]
get "argbJS"(): integer
get "char"(): character
get "color"(): integer
get "fireworkColorJS"(): integer
get "hexJS"(): string
get "id"(): integer
get "name"(): string
get "rgbJS"(): integer
get "serializeJS"(): string
get "serializedName"(): string
get "color"(): boolean
get "format"(): boolean
}
}

declare module "packages/net/minecraft/$CrashReportCategory" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $StackTraceElement, $StackTraceElement$$Type } from "packages/java/lang/$StackTraceElement"
import { $CrashReportDetail$$Type } from "packages/net/minecraft/$CrashReportDetail"
import { $StringBuilder$$Type } from "packages/java/lang/$StringBuilder"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $CrashReportCategory {
constructor(string0: string)

public "applyStackTrace"(throwable0: $Throwable$$Type): void
public "fillInStackTrace"(int0: integer): integer
public static "formatLocation"(levelHeightAccessor0: $LevelHeightAccessor$$Type, double1: double, double2: double, double3: double): string
public static "formatLocation"(levelHeightAccessor0: $LevelHeightAccessor$$Type, int1: integer, int2: integer, int3: integer): string
public static "formatLocation"(levelHeightAccessor0: $LevelHeightAccessor$$Type, blockPos1: $BlockPos$$Type): string
public "getDetails"(stringBuilder0: $StringBuilder$$Type): void
public "getStacktrace"(): $StackTraceElement[]
public static "populateBlockDetails"(crashReportCategory0: $CrashReportCategory$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "setDetail"(string0: string, object1: any): $CrashReportCategory
public "setDetail"(string0: string, crashReportDetail1: $CrashReportDetail$$Type<string>): $CrashReportCategory
public "setDetailError"(string0: string, throwable1: $Throwable$$Type): void
public "trimStacktrace"(int0: integer): void
public "validateStackTrace"(stackTraceElement0: $StackTraceElement$$Type, stackTraceElement1: $StackTraceElement$$Type): boolean
get "stacktrace"(): $StackTraceElement[]
}
}

declare module "packages/net/minecraft/$CrashReportDetail" {
import { $Callable } from "packages/java/util/concurrent/$Callable"

export interface $CrashReportDetail<V> extends $Callable<V> {
"call"(): V
}

export namespace $CrashReportDetail {
const probejs$$marker: never
}
export abstract class $CrashReportDetail$$Static<V> implements $CrashReportDetail<V> {
}
}

declare module "packages/net/minecraft/$BlockUtil$FoundRectangle" {
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockUtil$FoundRectangle {
readonly "axis1Size": integer
readonly "axis2Size": integer
readonly "minCorner": $BlockPos

constructor(blockPos0: $BlockPos$$Type, int1: integer, int2: integer)

}
}

