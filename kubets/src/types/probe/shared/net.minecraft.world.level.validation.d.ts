declare module "packages/net/minecraft/world/level/validation/$PathAllowList$ConfigEntry" {
import { $FileSystem$$Type } from "packages/java/nio/file/$FileSystem"
import { $Record } from "packages/java/lang/$Record"
import { $PathMatcher } from "packages/java/nio/file/$PathMatcher"
import { $PathAllowList$EntryType, $PathAllowList$EntryType$$Type } from "packages/net/minecraft/world/level/validation/$PathAllowList$EntryType"

export class $PathAllowList$ConfigEntry extends $Record {
constructor(entryType0: $PathAllowList$EntryType$$Type, string1: string)

public "compile"(fileSystem0: $FileSystem$$Type): $PathMatcher
public "pattern"(): string
public "type"(): $PathAllowList$EntryType
}
}

declare module "packages/net/minecraft/world/level/validation/$PathAllowList" {
import { $FileSystem$$Type } from "packages/java/nio/file/$FileSystem"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $List$$Type } from "packages/java/util/$List"
import { $BufferedReader$$Type } from "packages/java/io/$BufferedReader"
import { $PathAllowList$ConfigEntry$$Type } from "packages/net/minecraft/world/level/validation/$PathAllowList$ConfigEntry"
import { $PathMatcher } from "packages/java/nio/file/$PathMatcher"

export class $PathAllowList implements $PathMatcher {
constructor(list0: $List$$Type<$PathAllowList$ConfigEntry$$Type>)

public "getForFileSystem"(fileSystem0: $FileSystem$$Type): $PathMatcher
public "matches"(path0: $Path$$Type): boolean
public static "readPlain"(bufferedReader0: $BufferedReader$$Type): $PathAllowList
}
}

declare module "packages/net/minecraft/world/level/validation/$ForbiddenSymlinkInfo" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $Record } from "packages/java/lang/$Record"

export class $ForbiddenSymlinkInfo extends $Record {
constructor(path0: $Path$$Type, path1: $Path$$Type)

public "link"(): $Path
public "target"(): $Path
}
}

declare module "packages/net/minecraft/world/level/validation/$PathAllowList$EntryType" {
import { $FileSystem$$Type } from "packages/java/nio/file/$FileSystem"
import { $PathMatcher } from "packages/java/nio/file/$PathMatcher"

export interface $PathAllowList$EntryType {
"compile"(fileSystem0: $FileSystem$$Type, string1: string): $PathMatcher
}

export namespace $PathAllowList$EntryType {
const FILESYSTEM: $PathAllowList$EntryType
const PREFIX: $PathAllowList$EntryType
}
export abstract class $PathAllowList$EntryType$$Static implements $PathAllowList$EntryType {
static readonly "FILESYSTEM": $PathAllowList$EntryType
static readonly "PREFIX": $PathAllowList$EntryType

}
}

declare module "packages/net/minecraft/world/level/validation/$DirectoryValidator" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ForbiddenSymlinkInfo, $ForbiddenSymlinkInfo$$Type } from "packages/net/minecraft/world/level/validation/$ForbiddenSymlinkInfo"
import { $PathAllowList$$Type } from "packages/net/minecraft/world/level/validation/$PathAllowList"

export class $DirectoryValidator {
constructor(pathAllowList0: $PathAllowList$$Type)

public "validateSave"(path0: $Path$$Type, boolean1: boolean): $List<$ForbiddenSymlinkInfo>
public "validateSymlink"(path0: $Path$$Type, list1: $List$$Type<$ForbiddenSymlinkInfo$$Type>): void
}
}

