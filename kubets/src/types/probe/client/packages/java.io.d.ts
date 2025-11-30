declare module "packages/java/io/$OutputStream" {
import { $Closeable } from "packages/java/io/$Closeable"
import { $Flushable } from "packages/java/io/$Flushable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $OutputStream implements $Closeable, $Flushable {
constructor()

public "close"(): void
public "flush"(): void
public static "nullOutputStream"(): $OutputStream
public "write"(byte0s: byte[]): void
public "write"(byte0s: byte[], int1: integer, int2: integer): void
public "write"(int0: integer): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OutputStream$$Type = ($OutputStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OutputStream_ = $OutputStream$$Type;
}
}

declare module "packages/java/io/$DataInput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DataInput {
"readBoolean"(): boolean
"readByte"(): byte
"readChar"(): character
"readDouble"(): double
"readFloat"(): float
"readFully"(byte0s: byte[]): void
"readFully"(byte0s: byte[], int1: integer, int2: integer): void
"readInt"(): integer
"readLine"(): string
"readLong"(): long
"readShort"(): short
"readUTF"(): string
"readUnsignedByte"(): integer
"readUnsignedShort"(): integer
"skipBytes"(int0: integer): integer
}

export namespace $DataInput {
const probejs$$marker: never
}
export abstract class $DataInput$$Static implements $DataInput {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataInput$$Type = ($DataInput);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataInput_ = $DataInput$$Type;
}
}

declare module "packages/java/io/$Flushable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Flushable {
"flush"(): void
}

export namespace $Flushable {
const probejs$$marker: never
}
export abstract class $Flushable$$Static implements $Flushable {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Flushable$$Type = ($Flushable | (() => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Flushable_ = $Flushable$$Type;
}
}

declare module "packages/java/io/$PrintStream" {
import { $Closeable } from "packages/java/io/$Closeable"
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $FilterOutputStream } from "packages/java/io/$FilterOutputStream"
import { $File$$Type } from "packages/java/io/$File"
import { $Appendable } from "packages/java/lang/$Appendable"
import { $Charset$$Type } from "packages/java/nio/charset/$Charset"
import { $Locale$$Type } from "packages/java/util/$Locale"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PrintStream extends $FilterOutputStream implements $Appendable, $Closeable {
constructor(string0: string, string1: string)
constructor(string0: string)
constructor(outputStream0: $OutputStream$$Type, boolean1: boolean, charset2: $Charset$$Type)
constructor(outputStream0: $OutputStream$$Type, boolean1: boolean, string2: string)
constructor(string0: string, charset1: $Charset$$Type)
constructor(file0: $File$$Type, string1: string)
constructor(file0: $File$$Type, charset1: $Charset$$Type)
constructor(file0: $File$$Type)
constructor(outputStream0: $OutputStream$$Type)
constructor(outputStream0: $OutputStream$$Type, boolean1: boolean)

public "checkError"(): boolean
public "format"(string0: string, ...object1s: any[]): $PrintStream
public "format"(locale0: $Locale$$Type, string1: string, ...object2s: any[]): $PrintStream
public "print"(boolean0: boolean): void
public "print"(string0: string): void
public "print"(char0s: character[]): void
public "print"(long0: long): void
public "print"(double0: double): void
public "print"(float0: float): void
public "print"(char0: character): void
public "print"(int0: integer): void
public "print"(object0: any): void
public "printf"(locale0: $Locale$$Type, string1: string, ...object2s: any[]): $PrintStream
public "printf"(string0: string, ...object1s: any[]): $PrintStream
public "println"(string0: string): void
public "println"(object0: any): void
public "println"(float0: float): void
public "println"(double0: double): void
public "println"(char0s: character[]): void
public "println"(boolean0: boolean): void
public "println"(): void
public "println"(char0: character): void
public "println"(int0: integer): void
public "println"(long0: long): void
public "writeBytes"(byte0s: byte[]): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PrintStream$$Type = ($PrintStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PrintStream_ = $PrintStream$$Type;
}
}

declare module "packages/java/io/$PrintWriter" {
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $File$$Type } from "packages/java/io/$File"
import { $Charset$$Type } from "packages/java/nio/charset/$Charset"
import { $Writer, $Writer$$Type } from "packages/java/io/$Writer"
import { $Locale$$Type } from "packages/java/util/$Locale"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PrintWriter extends $Writer {
constructor(string0: string)
constructor(string0: string, string1: string)
constructor(string0: string, charset1: $Charset$$Type)
constructor(file0: $File$$Type)
constructor(file0: $File$$Type, string1: string)
constructor(file0: $File$$Type, charset1: $Charset$$Type)
constructor(writer0: $Writer$$Type)
constructor(writer0: $Writer$$Type, boolean1: boolean)
constructor(outputStream0: $OutputStream$$Type, boolean1: boolean, charset2: $Charset$$Type)
constructor(outputStream0: $OutputStream$$Type, boolean1: boolean)
constructor(outputStream0: $OutputStream$$Type)

public "append"(charSequence0: charseq, int1: integer, int2: integer): $PrintWriter
public "append"(char0: character): $PrintWriter
public "append"(charSequence0: charseq): $PrintWriter
public "checkError"(): boolean
public "format"(string0: string, ...object1s: any[]): $PrintWriter
public "format"(locale0: $Locale$$Type, string1: string, ...object2s: any[]): $PrintWriter
public "print"(float0: float): void
public "print"(long0: long): void
public "print"(int0: integer): void
public "print"(char0: character): void
public "print"(boolean0: boolean): void
public "print"(object0: any): void
public "print"(string0: string): void
public "print"(char0s: character[]): void
public "print"(double0: double): void
public "printf"(string0: string, ...object1s: any[]): $PrintWriter
public "printf"(locale0: $Locale$$Type, string1: string, ...object2s: any[]): $PrintWriter
public "println"(char0s: character[]): void
public "println"(): void
public "println"(boolean0: boolean): void
public "println"(string0: string): void
public "println"(object0: any): void
public "println"(double0: double): void
public "println"(float0: float): void
public "println"(long0: long): void
public "println"(int0: integer): void
public "println"(char0: character): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PrintWriter$$Type = ($PrintWriter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PrintWriter_ = $PrintWriter$$Type;
}
}

declare module "packages/java/io/$ObjectOutput" {
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $DataOutput } from "packages/java/io/$DataOutput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ObjectOutput extends $DataOutput, $AutoCloseable {
"close"(): void
"flush"(): void
"write"(byte0s: byte[], int1: integer, int2: integer): void
"write"(byte0s: byte[]): void
"write"(int0: integer): void
"writeBoolean"(boolean0: boolean): void
"writeByte"(int0: integer): void
"writeBytes"(string0: string): void
"writeChar"(int0: integer): void
"writeChars"(string0: string): void
"writeDouble"(double0: double): void
"writeFloat"(float0: float): void
"writeInt"(int0: integer): void
"writeLong"(long0: long): void
"writeObject"(object0: any): void
"writeShort"(int0: integer): void
"writeUTF"(string0: string): void
}

export namespace $ObjectOutput {
const probejs$$marker: never
}
export abstract class $ObjectOutput$$Static implements $ObjectOutput {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ObjectOutput$$Type = ($ObjectOutput);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ObjectOutput_ = $ObjectOutput$$Type;
}
}

declare module "packages/java/io/$Serializable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Serializable$$Type = ($Serializable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Serializable_ = $Serializable$$Type;
}
}

declare module "packages/java/io/$File" {
import { $FileFilter$$Type } from "packages/java/io/$FileFilter"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Path } from "packages/java/nio/file/$Path"
import { $Serializable } from "packages/java/io/$Serializable"
import { $FilenameFilter$$Type } from "packages/java/io/$FilenameFilter"
import { $URI, $URI$$Type } from "packages/java/net/$URI"
import { $URL } from "packages/java/net/$URL"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $File implements $Serializable, $Comparable<$File> {
static readonly "pathSeparator": string
static readonly "pathSeparatorChar": character
static readonly "separator": string
static readonly "separatorChar": character

constructor(string0: string)
constructor(string0: string, string1: string)
constructor(uRI0: $URI$$Type)
constructor(file0: $File$$Type, string1: string)

public "canExecute"(): boolean
public "canRead"(): boolean
public "canWrite"(): boolean
public "compareTo"(file0: $File$$Type): integer
public "createNewFile"(): boolean
public static "createTempFile"(string0: string, string1: string): $File
public static "createTempFile"(string0: string, string1: string, file2: $File$$Type): $File
public "delete"(): boolean
public "deleteOnExit"(): void
public "exists"(): boolean
public "getAbsoluteFile"(): $File
public "getAbsolutePath"(): string
public "getCanonicalFile"(): $File
public "getCanonicalPath"(): string
public "getFreeSpace"(): long
public "getName"(): string
public "getParent"(): string
public "getParentFile"(): $File
public "getPath"(): string
public "getTotalSpace"(): long
public "getUsableSpace"(): long
public "isAbsolute"(): boolean
public "isDirectory"(): boolean
public "isFile"(): boolean
public "isHidden"(): boolean
public "lastModified"(): long
public "length"(): long
public "list"(): string[]
public "list"(filenameFilter0: $FilenameFilter$$Type): string[]
public "listFiles"(filenameFilter0: $FilenameFilter$$Type): $File[]
public "listFiles"(): $File[]
public "listFiles"(fileFilter0: $FileFilter$$Type): $File[]
public static "listRoots"(): $File[]
public "mkdir"(): boolean
public "mkdirs"(): boolean
public "renameTo"(file0: $File$$Type): boolean
public "setExecutable"(boolean0: boolean): boolean
public "setExecutable"(boolean0: boolean, boolean1: boolean): boolean
public "setLastModified"(long0: long): boolean
public "setReadOnly"(): boolean
public "setReadable"(boolean0: boolean, boolean1: boolean): boolean
public "setReadable"(boolean0: boolean): boolean
public "setWritable"(boolean0: boolean): boolean
public "setWritable"(boolean0: boolean, boolean1: boolean): boolean
public "toPath"(): $Path
public "toURI"(): $URI
/** @deprecated */
public "toURL"(): $URL
get "absoluteFile"(): $File
get "absolutePath"(): string
get "canonicalFile"(): $File
get "canonicalPath"(): string
get "freeSpace"(): long
get "name"(): string
get "parent"(): string
get "parentFile"(): $File
get "path"(): string
get "totalSpace"(): long
get "usableSpace"(): long
get "absolute"(): boolean
get "directory"(): boolean
get "file"(): boolean
get "hidden"(): boolean
set "executable"(value: boolean)
set "readable"(value: boolean)
set "writable"(value: boolean)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $File$$Type = ($File);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $File_ = $File$$Type;
}
}

declare module "packages/java/io/$InputStream" {
import { $Closeable } from "packages/java/io/$Closeable"
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InputStream implements $Closeable {
constructor()

public "available"(): integer
public "close"(): void
public "mark"(int0: integer): void
public "markSupported"(): boolean
public static "nullInputStream"(): $InputStream
public "read"(byte0s: byte[], int1: integer, int2: integer): integer
public "read"(byte0s: byte[]): integer
public "read"(): integer
public "readAllBytes"(): byte[]
public "readNBytes"(int0: integer): byte[]
public "readNBytes"(byte0s: byte[], int1: integer, int2: integer): integer
public "reset"(): void
public "skip"(long0: long): long
public "skipNBytes"(long0: long): void
public "transferTo"(outputStream0: $OutputStream$$Type): long
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InputStream$$Type = ($InputStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InputStream_ = $InputStream$$Type;
}
}

declare module "packages/java/io/$DataOutputStream" {
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $FilterOutputStream } from "packages/java/io/$FilterOutputStream"
import { $DataOutput } from "packages/java/io/$DataOutput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataOutputStream extends $FilterOutputStream implements $DataOutput {
constructor(outputStream0: $OutputStream$$Type)

public "size"(): integer
public "write"(byte0s: byte[]): void
public "writeBoolean"(boolean0: boolean): void
public "writeByte"(int0: integer): void
public "writeBytes"(string0: string): void
public "writeChar"(int0: integer): void
public "writeChars"(string0: string): void
public "writeDouble"(double0: double): void
public "writeFloat"(float0: float): void
public "writeInt"(int0: integer): void
public "writeLong"(long0: long): void
public "writeShort"(int0: integer): void
public "writeUTF"(string0: string): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataOutputStream$$Type = ($DataOutputStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataOutputStream_ = $DataOutputStream$$Type;
}
}

declare module "packages/java/io/$Closeable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Closeable$$Type = ($Closeable | (() => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Closeable_ = $Closeable$$Type;
}
}

declare module "packages/java/io/$FilterInputStream" {
import { $InputStream } from "packages/java/io/$InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FilterInputStream extends $InputStream {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FilterInputStream$$Type = ($FilterInputStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FilterInputStream_ = $FilterInputStream$$Type;
}
}

declare module "packages/java/io/$FilterOutputStream" {
import { $OutputStream, $OutputStream$$Type } from "packages/java/io/$OutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FilterOutputStream extends $OutputStream {
constructor(outputStream0: $OutputStream$$Type)

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FilterOutputStream$$Type = ($FilterOutputStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FilterOutputStream_ = $FilterOutputStream$$Type;
}
}

declare module "packages/java/io/$Writer" {
import { $Closeable } from "packages/java/io/$Closeable"
import { $Appendable } from "packages/java/lang/$Appendable"
import { $Flushable } from "packages/java/io/$Flushable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Writer implements $Appendable, $Closeable, $Flushable {
public "append"(charSequence0: charseq, int1: integer, int2: integer): $Writer
public "append"(char0: character): $Writer
public "close"(): void
public "flush"(): void
public static "nullWriter"(): $Writer
public "write"(string0: string, int1: integer, int2: integer): void
public "write"(int0: integer): void
public "write"(string0: string): void
public "write"(char0s: character[], int1: integer, int2: integer): void
public "write"(char0s: character[]): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Writer$$Type = ($Writer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Writer_ = $Writer$$Type;
}
}

declare module "packages/java/io/$Externalizable" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $ObjectOutput$$Type } from "packages/java/io/$ObjectOutput"
import { $ObjectInput$$Type } from "packages/java/io/$ObjectInput"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Externalizable extends $Serializable {
"readExternal"(objectInput0: $ObjectInput$$Type): void
"writeExternal"(objectOutput0: $ObjectOutput$$Type): void
}

export namespace $Externalizable {
const probejs$$marker: never
}
export abstract class $Externalizable$$Static implements $Externalizable {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Externalizable$$Type = ($Externalizable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Externalizable_ = $Externalizable$$Type;
}
}

declare module "packages/java/io/$FileFilter" {
import { $File, $File$$Type } from "packages/java/io/$File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileFilter {
"accept"(file0: $File$$Type): boolean
}

export namespace $FileFilter {
const probejs$$marker: never
}
export abstract class $FileFilter$$Static implements $FileFilter {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileFilter$$Type = ($FileFilter | ((arg0: $File) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileFilter_ = $FileFilter$$Type;
}
}

declare module "packages/java/io/$DataOutput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DataOutput {
"write"(byte0s: byte[], int1: integer, int2: integer): void
"write"(byte0s: byte[]): void
"write"(int0: integer): void
"writeBoolean"(boolean0: boolean): void
"writeByte"(int0: integer): void
"writeBytes"(string0: string): void
"writeChar"(int0: integer): void
"writeChars"(string0: string): void
"writeDouble"(double0: double): void
"writeFloat"(float0: float): void
"writeInt"(int0: integer): void
"writeLong"(long0: long): void
"writeShort"(int0: integer): void
"writeUTF"(string0: string): void
}

export namespace $DataOutput {
const probejs$$marker: never
}
export abstract class $DataOutput$$Static implements $DataOutput {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataOutput$$Type = ($DataOutput);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataOutput_ = $DataOutput$$Type;
}
}

declare module "packages/java/io/$DataInputStream" {
import { $DataInput, $DataInput$$Type } from "packages/java/io/$DataInput"
import { $InputStream$$Type } from "packages/java/io/$InputStream"
import { $FilterInputStream } from "packages/java/io/$FilterInputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataInputStream extends $FilterInputStream implements $DataInput {
constructor(inputStream0: $InputStream$$Type)

public "readBoolean"(): boolean
public "readByte"(): byte
public "readChar"(): character
public "readDouble"(): double
public "readFloat"(): float
public "readFully"(byte0s: byte[], int1: integer, int2: integer): void
public "readFully"(byte0s: byte[]): void
public "readInt"(): integer
/** @deprecated */
public "readLine"(): string
public "readLong"(): long
public "readShort"(): short
public static "readUTF"(dataInput0: $DataInput$$Type): string
public "readUTF"(): string
public "readUnsignedByte"(): integer
public "readUnsignedShort"(): integer
public "skipBytes"(int0: integer): integer
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataInputStream$$Type = ($DataInputStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataInputStream_ = $DataInputStream$$Type;
}
}

declare module "packages/java/io/$Reader" {
import { $Closeable } from "packages/java/io/$Closeable"
import { $CharBuffer$$Type } from "packages/java/nio/$CharBuffer"
import { $Writer$$Type } from "packages/java/io/$Writer"
import { $Readable } from "packages/java/lang/$Readable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Reader implements $Readable, $Closeable {
public "close"(): void
public "mark"(int0: integer): void
public "markSupported"(): boolean
public static "nullReader"(): $Reader
public "read"(char0s: character[]): integer
public "read"(char0s: character[], int1: integer, int2: integer): integer
public "read"(charBuffer0: $CharBuffer$$Type): integer
public "read"(): integer
public "ready"(): boolean
public "reset"(): void
public "skip"(long0: long): long
public "transferTo"(writer0: $Writer$$Type): long
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Reader$$Type = ($Reader);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Reader_ = $Reader$$Type;
}
}

declare module "packages/java/io/$FilenameFilter" {
import { $File, $File$$Type } from "packages/java/io/$File"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FilenameFilter {
"accept"(file0: $File$$Type, string1: string): boolean
}

export namespace $FilenameFilter {
const probejs$$marker: never
}
export abstract class $FilenameFilter$$Static implements $FilenameFilter {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FilenameFilter$$Type = ($FilenameFilter | ((arg0: $File, arg1: string) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FilenameFilter_ = $FilenameFilter$$Type;
}
}

declare module "packages/java/io/$ObjectInput" {
import { $DataInput } from "packages/java/io/$DataInput"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ObjectInput extends $DataInput, $AutoCloseable {
"available"(): integer
"close"(): void
"read"(byte0s: byte[], int1: integer, int2: integer): integer
"read"(byte0s: byte[]): integer
"read"(): integer
"readBoolean"(): boolean
"readByte"(): byte
"readChar"(): character
"readDouble"(): double
"readFloat"(): float
"readFully"(byte0s: byte[]): void
"readFully"(byte0s: byte[], int1: integer, int2: integer): void
"readInt"(): integer
"readLine"(): string
"readLong"(): long
"readObject"(): any
"readShort"(): short
"readUTF"(): string
"readUnsignedByte"(): integer
"readUnsignedShort"(): integer
"skip"(long0: long): long
"skipBytes"(int0: integer): integer
}

export namespace $ObjectInput {
const probejs$$marker: never
}
export abstract class $ObjectInput$$Static implements $ObjectInput {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ObjectInput$$Type = ($ObjectInput);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ObjectInput_ = $ObjectInput$$Type;
}
}

declare module "packages/java/io/$BufferedReader" {
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Reader, $Reader$$Type } from "packages/java/io/$Reader"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $BufferedReader extends $Reader {
constructor(reader0: $Reader$$Type, int1: integer)
constructor(reader0: $Reader$$Type)

public "lines"(): $Stream<string>
public "readLine"(): string
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BufferedReader$$Type = ($BufferedReader);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BufferedReader_ = $BufferedReader$$Type;
}
}

declare module "packages/java/io/$IOException" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Exception } from "packages/java/lang/$Exception"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IOException extends $Exception {
constructor(throwable0: $Throwable$$Type)
constructor(string0: string, throwable1: $Throwable$$Type)
constructor(string0: string)
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IOException$$Type = ($IOException);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IOException_ = $IOException$$Type;
}
}

