declare module "packages/net/minecraftforge/forgespi/language/$IConfigurable" {
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"

export interface $IConfigurable {
"getConfigElement"<T>(...string0s: string[]): $Optional<T>
"getConfigList"(...string0s: string[]): $List<$IConfigurable>
}

export namespace $IConfigurable {
const probejs$$marker: never
}
export abstract class $IConfigurable$$Static implements $IConfigurable {
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModInfo" {
import { $VersionRange } from "packages/org/apache/maven/artifact/versioning/$VersionRange"
import { $IModInfo$ModVersion } from "packages/net/minecraftforge/forgespi/language/$IModInfo$ModVersion"
import { $IConfigurable } from "packages/net/minecraftforge/forgespi/language/$IConfigurable"
import { $ArtifactVersion } from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $URL } from "packages/java/net/$URL"
import { $ForgeFeature$Bound } from "packages/net/minecraftforge/forgespi/locating/$ForgeFeature$Bound"
import { $Map } from "packages/java/util/$Map"
import { $IModFileInfo } from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"

export interface $IModInfo {
"getConfig"(): $IConfigurable
"getDependencies"(): $List<$IModInfo$ModVersion>
"getDescription"(): string
"getDisplayName"(): string
"getForgeFeatures"(): $List<$ForgeFeature$Bound>
"getLogoBlur"(): boolean
"getLogoFile"(): $Optional<string>
"getModId"(): string
"getModProperties"(): $Map<string, any>
"getModURL"(): $Optional<$URL>
"getNamespace"(): string
"getOwningFile"(): $IModFileInfo
"getUpdateURL"(): $Optional<$URL>
"getVersion"(): $ArtifactVersion
get "config"(): $IConfigurable
get "dependencies"(): $List<$IModInfo$ModVersion>
get "description"(): string
get "displayName"(): string
get "forgeFeatures"(): $List<$ForgeFeature$Bound>
get "logoBlur"(): boolean
get "logoFile"(): $Optional<string>
get "modId"(): string
get "modProperties"(): $Map<string, any>
get "modURL"(): $Optional<$URL>
get "namespace"(): string
get "owningFile"(): $IModFileInfo
get "updateURL"(): $Optional<$URL>
get "version"(): $ArtifactVersion
}

export namespace $IModInfo {
const UNBOUNDED: $VersionRange
}
export abstract class $IModInfo$$Static implements $IModInfo {
static readonly "UNBOUNDED": $VersionRange

}
}

declare module "packages/net/minecraftforge/forgespi/locating/$ForgeFeature$Bound" {
import { $Record } from "packages/java/lang/$Record"
import { $IModInfo, $IModInfo$$Type } from "packages/net/minecraftforge/forgespi/language/$IModInfo"

export class $ForgeFeature$Bound extends $Record {
constructor(featureName: string, featureBound: string, modInfo: $IModInfo$$Type)

public "bound"<T>(): T
public "featureBound"(): string
public "featureName"(): string
public "modInfo"(): $IModInfo
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider" {
import { $ILifecycleEvent, $ILifecycleEvent$$Type } from "packages/net/minecraftforge/forgespi/language/$ILifecycleEvent"
import { $Consumer } from "packages/java/util/function/$Consumer"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ModFileScanData } from "packages/net/minecraftforge/forgespi/language/$ModFileScanData"

export interface $IModLanguageProvider {
"consumeLifecycleEvent"<R extends $ILifecycleEvent<R>>(supplier0: $Supplier$$Type<R>): void
"getFileVisitor"(): $Consumer<$ModFileScanData>
"name"(): string
get "fileVisitor"(): $Consumer<$ModFileScanData>
}

export namespace $IModLanguageProvider {
const probejs$$marker: never
}
export abstract class $IModLanguageProvider$$Static implements $IModLanguageProvider {
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider$IModLanguageLoader" {
import { $IModInfo$$Type } from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import { $ModuleLayer$$Type } from "packages/java/lang/$ModuleLayer"
import { $ModFileScanData$$Type } from "packages/net/minecraftforge/forgespi/language/$ModFileScanData"

export interface $IModLanguageProvider$IModLanguageLoader {
"loadMod"<T>(iModInfo0: $IModInfo$$Type, modFileScanData1: $ModFileScanData$$Type, moduleLayer2: $ModuleLayer$$Type): T
}

export namespace $IModLanguageProvider$IModLanguageLoader {
const probejs$$marker: never
}
export abstract class $IModLanguageProvider$IModLanguageLoader$$Static implements $IModLanguageProvider$IModLanguageLoader {
}
}

declare module "packages/net/minecraftforge/forgespi/locating/$IModFile$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IModFile$Type extends $Enum<$IModFile$Type> {
static readonly "GAMELIBRARY": $IModFile$Type
static readonly "LANGPROVIDER": $IModFile$Type
static readonly "LIBRARY": $IModFile$Type
static readonly "MOD": $IModFile$Type

public static "valueOf"(string0: string): $IModFile$Type
public static "values"(): $IModFile$Type[]
}
}

declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData" {
import { $Set } from "packages/java/util/$Set"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $List } from "packages/java/util/$List"
import { $ModFileScanData$AnnotationData } from "packages/net/minecraftforge/forgespi/language/$ModFileScanData$AnnotationData"
import { $Type } from "packages/org/objectweb/asm/$Type"
import { $ModFileScanData$ClassData } from "packages/net/minecraftforge/forgespi/language/$ModFileScanData$ClassData"
import { $IModLanguageProvider$IModLanguageLoader, $IModLanguageProvider$IModLanguageLoader$$Type } from "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider$IModLanguageLoader"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $IModFileInfo, $IModFileInfo$$Type } from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"

export class $ModFileScanData {
constructor()

public "addLanguageLoader"(map0: $Map$$Type<string, $IModLanguageProvider$IModLanguageLoader$$Type>): void
public "addModFileInfo"(iModFileInfo0: $IModFileInfo$$Type): void
public "getAnnotations"(): $Set<$ModFileScanData$AnnotationData>
public "getClasses"(): $Set<$ModFileScanData$ClassData>
public "getIModInfoData"(): $List<$IModFileInfo>
public "getTargets"(): $Map<string, $IModLanguageProvider$IModLanguageLoader>
public static "interestingAnnotations"(): $Predicate<$Type>
get "annotations"(): $Set<$ModFileScanData$AnnotationData>
get "classes"(): $Set<$ModFileScanData$ClassData>
get "iModInfoData"(): $List<$IModFileInfo>
get "targets"(): $Map<string, $IModLanguageProvider$IModLanguageLoader>
}
}

declare module "packages/net/minecraftforge/forgespi/language/$ILifecycleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILifecycleEvent<R extends $ILifecycleEvent<any>> {
"concrete"(): R
}

export namespace $ILifecycleEvent {
const probejs$$marker: never
}
export abstract class $ILifecycleEvent$$Static<R extends $ILifecycleEvent<any>> implements $ILifecycleEvent<R> {
}
}

declare module "packages/net/minecraftforge/forgespi/locating/$IModFile" {
import { $SecureJar } from "packages/cpw/mods/jarhandling/$SecureJar"
import { $Path } from "packages/java/nio/file/$Path"
import { $IModFileInfo } from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"
import { $ModFileScanData } from "packages/net/minecraftforge/forgespi/language/$ModFileScanData"
import { $IModFile$Type } from "packages/net/minecraftforge/forgespi/locating/$IModFile$Type"
import { $IModLanguageProvider } from "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider"
import { $IModInfo } from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import { $List } from "packages/java/util/$List"
import { $IModProvider } from "packages/net/minecraftforge/forgespi/locating/$IModProvider"
import { $SecureJar$Status$$Type } from "packages/cpw/mods/jarhandling/$SecureJar$Status"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $Map } from "packages/java/util/$Map"

export interface $IModFile {
"findResource"(...string0s: string[]): $Path
"getFileName"(): string
"getFilePath"(): $Path
"getLoaders"(): $List<$IModLanguageProvider>
"getModFileInfo"(): $IModFileInfo
"getModInfos"(): $List<$IModInfo>
"getProvider"(): $IModProvider
"getScanResult"(): $ModFileScanData
"getSecureJar"(): $SecureJar
"getSubstitutionMap"(): $Supplier<$Map<string, any>>
"getType"(): $IModFile$Type
"setSecurityStatus"(status0: $SecureJar$Status$$Type): void
get "fileName"(): string
get "filePath"(): $Path
get "loaders"(): $List<$IModLanguageProvider>
get "modFileInfo"(): $IModFileInfo
get "modInfos"(): $List<$IModInfo>
get "provider"(): $IModProvider
get "scanResult"(): $ModFileScanData
get "secureJar"(): $SecureJar
get "substitutionMap"(): $Supplier<$Map<string, any>>
get "type"(): $IModFile$Type
set "securityStatus"(value: $SecureJar$Status$$Type)
}

export namespace $IModFile {
const probejs$$marker: never
}
export abstract class $IModFile$$Static implements $IModFile {
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModFileInfo" {
import { $IConfigurable } from "packages/net/minecraftforge/forgespi/language/$IConfigurable"
import { $IModInfo } from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import { $List } from "packages/java/util/$List"
import { $IModFileInfo$LanguageSpec } from "packages/net/minecraftforge/forgespi/language/$IModFileInfo$LanguageSpec"
import { $IModFile } from "packages/net/minecraftforge/forgespi/locating/$IModFile"
import { $Map } from "packages/java/util/$Map"

export interface $IModFileInfo {
"getConfig"(): $IConfigurable
"getFile"(): $IModFile
"getFileProperties"(): $Map<string, any>
"getLicense"(): string
"getMods"(): $List<$IModInfo>
"moduleName"(): string
"requiredLanguageLoaders"(): $List<$IModFileInfo$LanguageSpec>
"showAsResourcePack"(): boolean
"usesServices"(): $List<string>
"versionString"(): string
get "config"(): $IConfigurable
get "file"(): $IModFile
get "fileProperties"(): $Map<string, any>
get "license"(): string
get "mods"(): $List<$IModInfo>
}

export namespace $IModFileInfo {
const probejs$$marker: never
}
export abstract class $IModFileInfo$$Static implements $IModFileInfo {
}
}

declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData$AnnotationData" {
import { $Record } from "packages/java/lang/$Record"
import { $ElementType, $ElementType$$Type } from "packages/java/lang/annotation/$ElementType"
import { $Type, $Type$$Type } from "packages/org/objectweb/asm/$Type"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $ModFileScanData$AnnotationData extends $Record {
constructor(annotationType: $Type$$Type, targetType: $ElementType$$Type, clazz: $Type$$Type, memberName: string, annotationData: $Map$$Type<string, any>)

public "annotationData"(): $Map<string, any>
public "annotationType"(): $Type
public "clazz"(): $Type
public "memberName"(): string
public "targetType"(): $ElementType
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModInfo$DependencySide" {
import { $Enum } from "packages/java/lang/$Enum"
import { $Dist$$Type } from "packages/net/minecraftforge/api/distmarker/$Dist"

export class $IModInfo$DependencySide extends $Enum<$IModInfo$DependencySide> {
static readonly "BOTH": $IModInfo$DependencySide
static readonly "CLIENT": $IModInfo$DependencySide
static readonly "SERVER": $IModInfo$DependencySide

public "isContained"(dist0: $Dist$$Type): boolean
public "isCorrectSide"(): boolean
public static "valueOf"(string0: string): $IModInfo$DependencySide
public static "values"(): $IModInfo$DependencySide[]
get "correctSide"(): boolean
}
}

declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData$ClassData" {
import { $Record } from "packages/java/lang/$Record"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Type, $Type$$Type } from "packages/org/objectweb/asm/$Type"

export class $ModFileScanData$ClassData extends $Record {
constructor(clazz: $Type$$Type, parent: $Type$$Type, interfaces: $Set$$Type<$Type$$Type>)

public "clazz"(): $Type
public "interfaces"(): $Set<$Type>
public "parent"(): $Type
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModInfo$Ordering" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IModInfo$Ordering extends $Enum<$IModInfo$Ordering> {
static readonly "AFTER": $IModInfo$Ordering
static readonly "BEFORE": $IModInfo$Ordering
static readonly "NONE": $IModInfo$Ordering

public static "valueOf"(string0: string): $IModInfo$Ordering
public static "values"(): $IModInfo$Ordering[]
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModInfo$ModVersion" {
import { $VersionRange } from "packages/org/apache/maven/artifact/versioning/$VersionRange"
import { $IModInfo$Ordering } from "packages/net/minecraftforge/forgespi/language/$IModInfo$Ordering"
import { $IModInfo, $IModInfo$$Type } from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import { $Optional } from "packages/java/util/$Optional"
import { $IModInfo$DependencySide } from "packages/net/minecraftforge/forgespi/language/$IModInfo$DependencySide"
import { $URL } from "packages/java/net/$URL"

export interface $IModInfo$ModVersion {
"getModId"(): string
"getOrdering"(): $IModInfo$Ordering
"getOwner"(): $IModInfo
"getReferralURL"(): $Optional<$URL>
"getSide"(): $IModInfo$DependencySide
"getVersionRange"(): $VersionRange
"isMandatory"(): boolean
"setOwner"(iModInfo0: $IModInfo$$Type): void
get "modId"(): string
get "ordering"(): $IModInfo$Ordering
get "owner"(): $IModInfo
get "referralURL"(): $Optional<$URL>
get "side"(): $IModInfo$DependencySide
get "versionRange"(): $VersionRange
get "mandatory"(): boolean
set "owner"(value: $IModInfo$$Type)
}

export namespace $IModInfo$ModVersion {
const probejs$$marker: never
}
export abstract class $IModInfo$ModVersion$$Static implements $IModInfo$ModVersion {
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModFileInfo$LanguageSpec" {
import { $VersionRange, $VersionRange$$Type } from "packages/org/apache/maven/artifact/versioning/$VersionRange"
import { $Record } from "packages/java/lang/$Record"

export class $IModFileInfo$LanguageSpec extends $Record {
constructor(languageName: string, acceptedVersions: $VersionRange$$Type)

public "acceptedVersions"(): $VersionRange
public "languageName"(): string
}
}

declare module "packages/net/minecraftforge/forgespi/locating/$IModProvider" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $IModFile$$Type } from "packages/net/minecraftforge/forgespi/locating/$IModFile"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $IModProvider {
"initArguments"(map0: $Map$$Type<string, any>): void
"isValid"(iModFile0: $IModFile$$Type): boolean
"name"(): string
"scanFile"(iModFile0: $IModFile$$Type, consumer1: $Consumer$$Type<$Path$$Type>): void
}

export namespace $IModProvider {
const probejs$$marker: never
}
export abstract class $IModProvider$$Static implements $IModProvider {
}
}

