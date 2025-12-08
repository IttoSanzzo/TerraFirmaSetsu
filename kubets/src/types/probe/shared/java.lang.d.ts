declare module "packages/java/lang/$Integer" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"
import { $Number } from "packages/java/lang/$Number"
import { $ConstantDesc } from "packages/java/lang/constant/$ConstantDesc"

export class $Integer extends $Number implements $Comparable<integer>, $Constable, $ConstantDesc {
static readonly "BYTES": integer
static readonly "MAX_VALUE": integer
static readonly "MIN_VALUE": integer
static readonly "SIZE": integer
static readonly "TYPE": $Class<integer>

/** @deprecated */
constructor(string0: string)
/** @deprecated */
constructor(int0: integer)

public static "bitCount"(int0: integer): integer
public static "compare"(int0: integer, int1: integer): integer
public "compareTo"(integer0: integer): integer
public static "compareUnsigned"(int0: integer, int1: integer): integer
public static "decode"(string0: string): integer
public "describeConstable"(): $Optional<integer>
public static "divideUnsigned"(int0: integer, int1: integer): integer
public static "getInteger"(string0: string, integer1: integer): integer
public static "getInteger"(string0: string): integer
public static "getInteger"(string0: string, int1: integer): integer
public static "hashCode"(int0: integer): integer
public static "highestOneBit"(int0: integer): integer
public static "lowestOneBit"(int0: integer): integer
public static "max"(int0: integer, int1: integer): integer
public static "min"(int0: integer, int1: integer): integer
public static "numberOfLeadingZeros"(int0: integer): integer
public static "numberOfTrailingZeros"(int0: integer): integer
public static "parseInt"(string0: string, int1: integer): integer
public static "parseInt"(charSequence0: charseq, int1: integer, int2: integer, int3: integer): integer
public static "parseInt"(string0: string): integer
public static "parseUnsignedInt"(string0: string, int1: integer): integer
public static "parseUnsignedInt"(charSequence0: charseq, int1: integer, int2: integer, int3: integer): integer
public static "parseUnsignedInt"(string0: string): integer
public static "remainderUnsigned"(int0: integer, int1: integer): integer
public static "reverse"(int0: integer): integer
public static "reverseBytes"(int0: integer): integer
public static "rotateLeft"(int0: integer, int1: integer): integer
public static "rotateRight"(int0: integer, int1: integer): integer
public static "signum"(int0: integer): integer
public static "sum"(int0: integer, int1: integer): integer
public static "toBinaryString"(int0: integer): string
public static "toHexString"(int0: integer): string
public static "toOctalString"(int0: integer): string
public static "toString"(int0: integer): string
public static "toString"(int0: integer, int1: integer): string
public static "toUnsignedLong"(int0: integer): long
public static "toUnsignedString"(int0: integer, int1: integer): string
public static "toUnsignedString"(int0: integer): string
public static "valueOf"(int0: integer): integer
public static "valueOf"(string0: string, int1: integer): integer
public static "valueOf"(string0: string): integer
}
}

declare module "packages/java/lang/$Long" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $MethodHandles$Lookup$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup"
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"
import { $Number } from "packages/java/lang/$Number"
import { $ConstantDesc } from "packages/java/lang/constant/$ConstantDesc"

export class $Long extends $Number implements $Comparable<long>, $Constable, $ConstantDesc {
static readonly "BYTES": integer
static readonly "MAX_VALUE": long
static readonly "MIN_VALUE": long
static readonly "SIZE": integer
static readonly "TYPE": $Class<long>

/** @deprecated */
constructor(string0: string)
/** @deprecated */
constructor(long0: long)

public static "bitCount"(long0: long): integer
public static "compare"(long0: long, long1: long): integer
public "compareTo"(long0: long): integer
public static "compareUnsigned"(long0: long, long1: long): integer
public static "decode"(string0: string): long
public "describeConstable"(): $Optional<long>
public static "divideUnsigned"(long0: long, long1: long): long
public static "getLong"(string0: string, long1: long): long
public static "getLong"(string0: string): long
public static "getLong"(string0: string, long1: long): long
public static "hashCode"(long0: long): integer
public static "highestOneBit"(long0: long): long
public static "lowestOneBit"(long0: long): long
public static "max"(long0: long, long1: long): long
public static "min"(long0: long, long1: long): long
public static "numberOfLeadingZeros"(long0: long): integer
public static "numberOfTrailingZeros"(long0: long): integer
public static "parseLong"(charSequence0: charseq, int1: integer, int2: integer, int3: integer): long
public static "parseLong"(string0: string): long
public static "parseLong"(string0: string, int1: integer): long
public static "parseUnsignedLong"(string0: string): long
public static "parseUnsignedLong"(string0: string, int1: integer): long
public static "parseUnsignedLong"(charSequence0: charseq, int1: integer, int2: integer, int3: integer): long
public static "remainderUnsigned"(long0: long, long1: long): long
public "resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): long
public static "reverse"(long0: long): long
public static "reverseBytes"(long0: long): long
public static "rotateLeft"(long0: long, int1: integer): long
public static "rotateRight"(long0: long, int1: integer): long
public static "signum"(long0: long): integer
public static "sum"(long0: long, long1: long): long
public static "toBinaryString"(long0: long): string
public static "toHexString"(long0: long): string
public static "toOctalString"(long0: long): string
public static "toString"(long0: long): string
public static "toString"(long0: long, int1: integer): string
public static "toUnsignedString"(long0: long, int1: integer): string
public static "toUnsignedString"(long0: long): string
public static "valueOf"(string0: string, int1: integer): long
public static "valueOf"(long0: long): long
public static "valueOf"(string0: string): long
}
}

declare module "packages/java/lang/$Runnable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Runnable {
"run"(): void
}

export namespace $Runnable {
const probejs$$marker: never
}
export abstract class $Runnable$$Static implements $Runnable {
}
}

declare module "packages/java/lang/$Short" {
import { $DynamicConstantDesc } from "packages/java/lang/constant/$DynamicConstantDesc"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"
import { $Number } from "packages/java/lang/$Number"

export class $Short extends $Number implements $Comparable<short>, $Constable {
static readonly "BYTES": integer
static readonly "MAX_VALUE": short
static readonly "MIN_VALUE": short
static readonly "SIZE": integer
static readonly "TYPE": $Class<short>

/** @deprecated */
constructor(short0: short)
/** @deprecated */
constructor(string0: string)

public static "compare"(short0: short, short1: short): integer
public "compareTo"(short0: short): integer
public static "compareUnsigned"(short0: short, short1: short): integer
public static "decode"(string0: string): short
public "describeConstable"(): $Optional<$DynamicConstantDesc<short>>
public static "hashCode"(short0: short): integer
public static "parseShort"(string0: string, int1: integer): short
public static "parseShort"(string0: string): short
public static "reverseBytes"(short0: short): short
public static "toString"(short0: short): string
public static "toUnsignedInt"(short0: short): integer
public static "toUnsignedLong"(short0: short): long
public static "valueOf"(string0: string): short
public static "valueOf"(string0: string, int1: integer): short
public static "valueOf"(short0: short): short
}
}

declare module "packages/java/lang/$AutoCloseable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AutoCloseable {
"close"(): void
}

export namespace $AutoCloseable {
const probejs$$marker: never
}
export abstract class $AutoCloseable$$Static implements $AutoCloseable {
}
}

declare module "packages/java/lang/$Number" {
import { $Serializable } from "packages/java/io/$Serializable"

export class $Number implements $Serializable {
constructor()

public "byteValue"(): byte
public "doubleValue"(): double
public "floatValue"(): float
public "intValue"(): integer
public "longValue"(): long
public "shortValue"(): short
}
}

declare module "packages/java/lang/$Boolean" {
import { $DynamicConstantDesc } from "packages/java/lang/constant/$DynamicConstantDesc"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"

export class $Boolean implements $Serializable, $Comparable<boolean>, $Constable {
static readonly "FALSE": boolean
static readonly "TRUE": boolean
static readonly "TYPE": $Class<boolean>

/** @deprecated */
constructor(boolean0: boolean)
/** @deprecated */
constructor(string0: string)

public "booleanValue"(): boolean
public static "compare"(boolean0: boolean, boolean1: boolean): integer
public "compareTo"(boolean0: boolean): integer
public "describeConstable"(): $Optional<$DynamicConstantDesc<boolean>>
public static "getBoolean"(string0: string): boolean
public static "hashCode"(boolean0: boolean): integer
public static "logicalAnd"(boolean0: boolean, boolean1: boolean): boolean
public static "logicalOr"(boolean0: boolean, boolean1: boolean): boolean
public static "logicalXor"(boolean0: boolean, boolean1: boolean): boolean
public static "parseBoolean"(string0: string): boolean
public static "toString"(boolean0: boolean): string
public static "valueOf"(string0: string): boolean
public static "valueOf"(boolean0: boolean): boolean
}
}

declare module "packages/java/lang/$Character" {
import { $DynamicConstantDesc } from "packages/java/lang/constant/$DynamicConstantDesc"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"

export class $Character implements $Serializable, $Comparable<character>, $Constable {
static readonly "BYTES": integer
static readonly "COMBINING_SPACING_MARK": byte
static readonly "CONNECTOR_PUNCTUATION": byte
static readonly "CONTROL": byte
static readonly "CURRENCY_SYMBOL": byte
static readonly "DASH_PUNCTUATION": byte
static readonly "DECIMAL_DIGIT_NUMBER": byte
static readonly "DIRECTIONALITY_ARABIC_NUMBER": byte
static readonly "DIRECTIONALITY_BOUNDARY_NEUTRAL": byte
static readonly "DIRECTIONALITY_COMMON_NUMBER_SEPARATOR": byte
static readonly "DIRECTIONALITY_EUROPEAN_NUMBER": byte
static readonly "DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR": byte
static readonly "DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR": byte
static readonly "DIRECTIONALITY_FIRST_STRONG_ISOLATE": byte
static readonly "DIRECTIONALITY_LEFT_TO_RIGHT": byte
static readonly "DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING": byte
static readonly "DIRECTIONALITY_LEFT_TO_RIGHT_ISOLATE": byte
static readonly "DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE": byte
static readonly "DIRECTIONALITY_NONSPACING_MARK": byte
static readonly "DIRECTIONALITY_OTHER_NEUTRALS": byte
static readonly "DIRECTIONALITY_PARAGRAPH_SEPARATOR": byte
static readonly "DIRECTIONALITY_POP_DIRECTIONAL_FORMAT": byte
static readonly "DIRECTIONALITY_POP_DIRECTIONAL_ISOLATE": byte
static readonly "DIRECTIONALITY_RIGHT_TO_LEFT": byte
static readonly "DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC": byte
static readonly "DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING": byte
static readonly "DIRECTIONALITY_RIGHT_TO_LEFT_ISOLATE": byte
static readonly "DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE": byte
static readonly "DIRECTIONALITY_SEGMENT_SEPARATOR": byte
static readonly "DIRECTIONALITY_UNDEFINED": byte
static readonly "DIRECTIONALITY_WHITESPACE": byte
static readonly "ENCLOSING_MARK": byte
static readonly "END_PUNCTUATION": byte
static readonly "FINAL_QUOTE_PUNCTUATION": byte
static readonly "FORMAT": byte
static readonly "INITIAL_QUOTE_PUNCTUATION": byte
static readonly "LETTER_NUMBER": byte
static readonly "LINE_SEPARATOR": byte
static readonly "LOWERCASE_LETTER": byte
static readonly "MATH_SYMBOL": byte
static readonly "MAX_CODE_POINT": integer
static readonly "MAX_HIGH_SURROGATE": character
static readonly "MAX_LOW_SURROGATE": character
static readonly "MAX_RADIX": integer
static readonly "MAX_SURROGATE": character
static readonly "MAX_VALUE": character
static readonly "MIN_CODE_POINT": integer
static readonly "MIN_HIGH_SURROGATE": character
static readonly "MIN_LOW_SURROGATE": character
static readonly "MIN_RADIX": integer
static readonly "MIN_SUPPLEMENTARY_CODE_POINT": integer
static readonly "MIN_SURROGATE": character
static readonly "MIN_VALUE": character
static readonly "MODIFIER_LETTER": byte
static readonly "MODIFIER_SYMBOL": byte
static readonly "NON_SPACING_MARK": byte
static readonly "OTHER_LETTER": byte
static readonly "OTHER_NUMBER": byte
static readonly "OTHER_PUNCTUATION": byte
static readonly "OTHER_SYMBOL": byte
static readonly "PARAGRAPH_SEPARATOR": byte
static readonly "PRIVATE_USE": byte
static readonly "SIZE": integer
static readonly "SPACE_SEPARATOR": byte
static readonly "START_PUNCTUATION": byte
static readonly "SURROGATE": byte
static readonly "TITLECASE_LETTER": byte
static readonly "TYPE": $Class<character>
static readonly "UNASSIGNED": byte
static readonly "UPPERCASE_LETTER": byte

/** @deprecated */
constructor(char0: character)

public static "charCount"(int0: integer): integer
public "charValue"(): character
public static "codePointAt"(char0s: character[], int1: integer): integer
public static "codePointAt"(char0s: character[], int1: integer, int2: integer): integer
public static "codePointAt"(charSequence0: charseq, int1: integer): integer
public static "codePointBefore"(charSequence0: charseq, int1: integer): integer
public static "codePointBefore"(char0s: character[], int1: integer): integer
public static "codePointBefore"(char0s: character[], int1: integer, int2: integer): integer
public static "codePointCount"(char0s: character[], int1: integer, int2: integer): integer
public static "codePointCount"(charSequence0: charseq, int1: integer, int2: integer): integer
public static "codePointOf"(string0: string): integer
public static "compare"(char0: character, char1: character): integer
public "compareTo"(character0: character): integer
public "describeConstable"(): $Optional<$DynamicConstantDesc<character>>
public static "digit"(int0: integer, int1: integer): integer
public static "digit"(char0: character, int1: integer): integer
public static "forDigit"(int0: integer, int1: integer): character
public static "getDirectionality"(char0: character): byte
public static "getDirectionality"(int0: integer): byte
public static "getName"(int0: integer): string
public static "getNumericValue"(int0: integer): integer
public static "getNumericValue"(char0: character): integer
public static "getType"(char0: character): integer
public static "getType"(int0: integer): integer
public static "hashCode"(char0: character): integer
public static "highSurrogate"(int0: integer): character
public static "isAlphabetic"(int0: integer): boolean
public static "isBmpCodePoint"(int0: integer): boolean
public static "isDefined"(int0: integer): boolean
public static "isDefined"(char0: character): boolean
public static "isDigit"(int0: integer): boolean
public static "isDigit"(char0: character): boolean
public static "isHighSurrogate"(char0: character): boolean
public static "isISOControl"(int0: integer): boolean
public static "isISOControl"(char0: character): boolean
public static "isIdentifierIgnorable"(char0: character): boolean
public static "isIdentifierIgnorable"(int0: integer): boolean
public static "isIdeographic"(int0: integer): boolean
public static "isJavaIdentifierPart"(char0: character): boolean
public static "isJavaIdentifierPart"(int0: integer): boolean
public static "isJavaIdentifierStart"(char0: character): boolean
public static "isJavaIdentifierStart"(int0: integer): boolean
/** @deprecated */
public static "isJavaLetter"(char0: character): boolean
/** @deprecated */
public static "isJavaLetterOrDigit"(char0: character): boolean
public static "isLetter"(char0: character): boolean
public static "isLetter"(int0: integer): boolean
public static "isLetterOrDigit"(int0: integer): boolean
public static "isLetterOrDigit"(char0: character): boolean
public static "isLowSurrogate"(char0: character): boolean
public static "isLowerCase"(int0: integer): boolean
public static "isLowerCase"(char0: character): boolean
public static "isMirrored"(int0: integer): boolean
public static "isMirrored"(char0: character): boolean
/** @deprecated */
public static "isSpace"(char0: character): boolean
public static "isSpaceChar"(char0: character): boolean
public static "isSpaceChar"(int0: integer): boolean
public static "isSupplementaryCodePoint"(int0: integer): boolean
public static "isSurrogate"(char0: character): boolean
public static "isSurrogatePair"(char0: character, char1: character): boolean
public static "isTitleCase"(int0: integer): boolean
public static "isTitleCase"(char0: character): boolean
public static "isUnicodeIdentifierPart"(char0: character): boolean
public static "isUnicodeIdentifierPart"(int0: integer): boolean
public static "isUnicodeIdentifierStart"(char0: character): boolean
public static "isUnicodeIdentifierStart"(int0: integer): boolean
public static "isUpperCase"(char0: character): boolean
public static "isUpperCase"(int0: integer): boolean
public static "isValidCodePoint"(int0: integer): boolean
public static "isWhitespace"(int0: integer): boolean
public static "isWhitespace"(char0: character): boolean
public static "lowSurrogate"(int0: integer): character
public static "offsetByCodePoints"(charSequence0: charseq, int1: integer, int2: integer): integer
public static "offsetByCodePoints"(char0s: character[], int1: integer, int2: integer, int3: integer, int4: integer): integer
public static "reverseBytes"(char0: character): character
public static "toChars"(int0: integer): character[]
public static "toChars"(int0: integer, char1s: character[], int2: integer): integer
public static "toCodePoint"(char0: character, char1: character): integer
public static "toLowerCase"(int0: integer): integer
public static "toLowerCase"(char0: character): character
public static "toString"(int0: integer): string
public static "toString"(char0: character): string
public static "toTitleCase"(char0: character): character
public static "toTitleCase"(int0: integer): integer
public static "toUpperCase"(char0: character): character
public static "toUpperCase"(int0: integer): integer
public static "valueOf"(char0: character): character
}
}

declare module "packages/java/lang/$Comparable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Comparable<T> {
"compareTo"(t0: T): integer
}

export namespace $Comparable {
const probejs$$marker: never
}
export abstract class $Comparable$$Static<T> implements $Comparable<T> {
}
}

declare module "packages/java/lang/$Package" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $NamedPackage } from "packages/java/lang/$NamedPackage"
import { $URL$$Type } from "packages/java/net/$URL"
import { $AnnotatedElement } from "packages/java/lang/reflect/$AnnotatedElement"

export class $Package extends $NamedPackage implements $AnnotatedElement {
public "getAnnotation"<A extends $Annotation>(class0: $Class$$Type<A>): A
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<A extends $Annotation>(class0: $Class$$Type<A>): A[]
public "getDeclaredAnnotation"<A extends $Annotation>(class0: $Class$$Type<A>): A
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<A extends $Annotation>(class0: $Class$$Type<A>): A[]
public "getImplementationTitle"(): string
public "getImplementationVendor"(): string
public "getImplementationVersion"(): string
public "getName"(): string
/** @deprecated */
public static "getPackage"(string0: string): $Package
public static "getPackages"(): $Package[]
public "getSpecificationTitle"(): string
public "getSpecificationVendor"(): string
public "getSpecificationVersion"(): string
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
public "isCompatibleWith"(string0: string): boolean
public "isSealed"(uRL0: $URL$$Type): boolean
public "isSealed"(): boolean
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "implementationTitle"(): string
get "implementationVendor"(): string
get "implementationVersion"(): string
get "name"(): string
get "specificationTitle"(): string
get "specificationVendor"(): string
get "specificationVersion"(): string
get "sealed"(): boolean
}
}

declare module "packages/java/lang/$Iterable" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export interface $Iterable<T> {
"forEach"(consumer0: $Consumer$$Type<T>): void
"iterator"(): $Iterator<T>
"spliterator"(): $Spliterator<T>
[Symbol.iterator](): IterableIterator<T>;
}

export namespace $Iterable {
const probejs$$marker: never
}
export abstract class $Iterable$$Static<T> implements $Iterable<T> {
}
}

declare module "packages/java/lang/$Double" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $MethodHandles$Lookup$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup"
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"
import { $Number } from "packages/java/lang/$Number"
import { $ConstantDesc } from "packages/java/lang/constant/$ConstantDesc"

export class $Double extends $Number implements $Comparable<double>, $Constable, $ConstantDesc {
static readonly "BYTES": integer
static readonly "MAX_EXPONENT": integer
static readonly "MAX_VALUE": double
static readonly "MIN_EXPONENT": integer
static readonly "MIN_NORMAL": double
static readonly "MIN_VALUE": double
static readonly "NEGATIVE_INFINITY": double
static readonly "NaN": double
static readonly "POSITIVE_INFINITY": double
static readonly "SIZE": integer
static readonly "TYPE": $Class<double>

/** @deprecated */
constructor(double0: double)
/** @deprecated */
constructor(string0: string)

public static "compare"(double0: double, double1: double): integer
public "compareTo"(double0: double): integer
public "describeConstable"(): $Optional<double>
public static "doubleToLongBits"(double0: double): long
public static "doubleToRawLongBits"(double0: double): long
public static "hashCode"(double0: double): integer
public static "isFinite"(double0: double): boolean
public static "isInfinite"(double0: double): boolean
public "isInfinite"(): boolean
public "isNaN"(): boolean
public static "isNaN"(double0: double): boolean
public static "longBitsToDouble"(long0: long): double
public static "max"(double0: double, double1: double): double
public static "min"(double0: double, double1: double): double
public static "parseDouble"(string0: string): double
public "resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): double
public static "sum"(double0: double, double1: double): double
public static "toHexString"(double0: double): string
public static "toString"(double0: double): string
public static "valueOf"(string0: string): double
public static "valueOf"(double0: double): double
get "infinite"(): boolean
get "naN"(): boolean
}
}

declare module "packages/java/lang/$Byte" {
import { $DynamicConstantDesc } from "packages/java/lang/constant/$DynamicConstantDesc"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"
import { $Number } from "packages/java/lang/$Number"

export class $Byte extends $Number implements $Comparable<byte>, $Constable {
static readonly "BYTES": integer
static readonly "MAX_VALUE": byte
static readonly "MIN_VALUE": byte
static readonly "SIZE": integer
static readonly "TYPE": $Class<byte>

/** @deprecated */
constructor(byte0: byte)
/** @deprecated */
constructor(string0: string)

public static "compare"(byte0: byte, byte1: byte): integer
public "compareTo"(byte0: byte): integer
public static "compareUnsigned"(byte0: byte, byte1: byte): integer
public static "decode"(string0: string): byte
public "describeConstable"(): $Optional<$DynamicConstantDesc<byte>>
public static "hashCode"(byte0: byte): integer
public static "parseByte"(string0: string): byte
public static "parseByte"(string0: string, int1: integer): byte
public static "toString"(byte0: byte): string
public static "toUnsignedInt"(byte0: byte): integer
public static "toUnsignedLong"(byte0: byte): long
public static "valueOf"(string0: string): byte
public static "valueOf"(byte0: byte): byte
public static "valueOf"(string0: string, int1: integer): byte
}
}

declare module "packages/java/lang/$Float" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $MethodHandles$Lookup$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup"
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"
import { $Number } from "packages/java/lang/$Number"
import { $ConstantDesc } from "packages/java/lang/constant/$ConstantDesc"

export class $Float extends $Number implements $Comparable<float>, $Constable, $ConstantDesc {
static readonly "BYTES": integer
static readonly "MAX_EXPONENT": integer
static readonly "MAX_VALUE": float
static readonly "MIN_EXPONENT": integer
static readonly "MIN_NORMAL": float
static readonly "MIN_VALUE": float
static readonly "NEGATIVE_INFINITY": float
static readonly "NaN": float
static readonly "POSITIVE_INFINITY": float
static readonly "SIZE": integer
static readonly "TYPE": $Class<float>

/** @deprecated */
constructor(string0: string)
/** @deprecated */
constructor(double0: double)
/** @deprecated */
constructor(float0: float)

public static "compare"(float0: float, float1: float): integer
public "compareTo"(float0: float): integer
public "describeConstable"(): $Optional<float>
public static "floatToIntBits"(float0: float): integer
public static "floatToRawIntBits"(float0: float): integer
public static "hashCode"(float0: float): integer
public static "intBitsToFloat"(int0: integer): float
public static "isFinite"(float0: float): boolean
public "isInfinite"(): boolean
public static "isInfinite"(float0: float): boolean
public "isNaN"(): boolean
public static "isNaN"(float0: float): boolean
public static "max"(float0: float, float1: float): float
public static "min"(float0: float, float1: float): float
public static "parseFloat"(string0: string): float
public "resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): float
public static "sum"(float0: float, float1: float): float
public static "toHexString"(float0: float): string
public static "toString"(float0: float): string
public static "valueOf"(string0: string): float
public static "valueOf"(float0: float): float
get "infinite"(): boolean
get "naN"(): boolean
}
}

declare module "packages/java/lang/$StringBuilder" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Serializable } from "packages/java/io/$Serializable"
import { $AbstractStringBuilder } from "packages/java/lang/$AbstractStringBuilder"

export class $StringBuilder extends $AbstractStringBuilder implements $Serializable, $Comparable<$StringBuilder>, charseq {
constructor(charSequence0: charseq)
constructor(string0: string)
constructor(int0: integer)
constructor()

public "appendCodePoint"(int0: integer): $StringBuilder
public static "compare"(charSequence0: charseq, charSequence1: charseq): integer
public "compareTo"(stringBuilder0: $StringBuilder$$Type): integer
public "deleteCharAt"(int0: integer): $StringBuilder
public "insert"(int0: integer, long1: long): $StringBuilder
public "insert"(int0: integer, int1: integer): $StringBuilder
public "insert"(int0: integer, charSequence1: charseq, int2: integer, int3: integer): $StringBuilder
public "insert"(int0: integer, charSequence1: charseq): $StringBuilder
public "insert"(int0: integer, char1s: character[]): $StringBuilder
public "insert"(int0: integer, boolean1: boolean): $StringBuilder
public "insert"(int0: integer, char1: character): $StringBuilder
public "isEmpty"(): boolean
get "empty"(): boolean
}
}

declare module "packages/java/lang/$CharSequence" {
import { $IntStream } from "packages/java/util/stream/$IntStream"

export interface $CharSequence {
"charAt"(int0: integer): character
"chars"(): $IntStream
"codePoints"(): $IntStream
"isEmpty"(): boolean
"length"(): integer
"subSequence"(int0: integer, int1: integer): charseq
"toString"(): string
get "empty"(): boolean
}

export namespace $CharSequence {
function compare(charSequence0: charseq, charSequence1: charseq): integer
}
export abstract class $CharSequence$$Static implements $CharSequence {
static "compare"(charSequence0: charseq, charSequence1: charseq): integer
}
}

declare module "packages/java/lang/$Appendable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Appendable {
"append"(charSequence0: charseq): $Appendable
"append"(charSequence0: charseq, int1: integer, int2: integer): $Appendable
"append"(char0: character): $Appendable
}

export namespace $Appendable {
const probejs$$marker: never
}
export abstract class $Appendable$$Static implements $Appendable {
}
}

