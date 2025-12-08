declare module "packages/zzzank/probejs/lang/java/clazz/members/$MethodInfo$MethodAttributes" {
import { $Method$$Type } from "packages/java/lang/reflect/$Method"

export class $MethodInfo$MethodAttributes {
readonly "isAbstract": boolean
readonly "isDefault": boolean
readonly "isStatic": boolean

constructor(method: $Method$$Type)

}
}

declare module "packages/zzzank/probejs/lang/java/base/$AnnotationHolder" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"

export class $AnnotationHolder {
static readonly "NO_ANNOTATION": $Annotation[]
readonly "annotations": $Annotation[]

constructor(annotations: $Annotation$$Type[])

public "getAnnotation"<T extends $Annotation>(type: $Class$$Type<T>): T
public "getAnnotationOptional"<T extends $Annotation>(type: $Class$$Type<T>): $Optional<T>
public "getAnnotations"<T extends $Annotation>(type: $Class$$Type<T>): $List<T>
public "hasAnnotation"(annotation: $Class$$Type<$Annotation$$Type>): boolean
}
}

declare module "packages/zzzank/probejs/lang/java/clazz/members/$FieldInfo$FieldAttributes" {
import { $Field$$Type } from "packages/java/lang/reflect/$Field"

export class $FieldInfo$FieldAttributes {
readonly "isFinal": boolean
readonly "isStatic": boolean

constructor(field: $Field$$Type)

public "getStaticValue"(): any
get "staticValue"(): any
}
}

declare module "packages/zzzank/probejs/lang/java/clazz/$ClassPath" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Pattern } from "packages/java/util/regex/$Pattern"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $List } from "packages/java/util/$List"

export class $ClassPath implements $Comparable<$ClassPath> {
static readonly "EMPTY": $ClassPath
static readonly "SPLIT": $Pattern
static readonly "TS_PATH_PREFIX": string

public "compareTo"(another: $ClassPath$$Type): integer
public static "fromJava"(clazz: $Class$$Type<any>): $ClassPath
public static "fromRaw"(className: string): $ClassPath
public static "fromTS"(typeScriptPath: string): $ClassPath
public "getCommonPartsCount"(another: $ClassPath$$Type): integer
public "getConcatenated"(sep: string): string
public "getConcatenatedPackage"(sep: string): string
public "getDirectPath"(): string
public "getJavaName"(): string
public "getJavaPath"(): string
public "getJavaStylePath"(): string
public "getName"(): string
public "getPackage"(): $List<string>
public "getPart"(index: integer): string
public "getParts"(): $List<string>
public "getPartsCount"(): integer
public "getTSPath"(): string
get "directPath"(): string
get "javaName"(): string
get "javaPath"(): string
get "javaStylePath"(): string
get "name"(): string
get "package"(): $List<string>
get "parts"(): $List<string>
get "partsCount"(): integer
get "tSPath"(): string
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/utility/$CustomType" {
import { $ImportInfos } from "packages/zzzank/probejs/lang/typescript/refer/$ImportInfos"
import { $BaseType$FormatType, $BaseType$FormatType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $BaseType } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $Declaration, $Declaration$$Type } from "packages/zzzank/probejs/lang/typescript/$Declaration"
import { $BiFunction, $BiFunction$$Type } from "packages/java/util/function/$BiFunction"

export class $CustomType extends $BaseType {
readonly "formatter": $BiFunction<$Declaration, $BaseType$FormatType, string>
readonly "imports": $Function<$BaseType$FormatType, $ImportInfos>

constructor(formatter: $BiFunction$$Type<$Declaration$$Type, $BaseType$FormatType$$Type, string>, imports: $Function$$Type<$BaseType$FormatType$$Type, $ImportInfos>)

}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSLambdaType$Builder" {
import { $JSLambdaType$BuilderBase } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSLambdaType$BuilderBase"

export class $JSLambdaType$Builder extends $JSLambdaType$BuilderBase<$JSLambdaType$Builder> {
constructor()

}
}

declare module "packages/zzzank/probejs/lang/typescript/code/member/$ClassDecl$Builder" {
import { $ConstructorDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$ConstructorDecl"
import { $FieldDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$FieldDecl"
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $ClassDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$ClassDecl"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $TSVariableType, $TSVariableType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $ConstructorDecl$Builder$$Type } from "packages/zzzank/probejs/lang/typescript/code/member/$ConstructorDecl$Builder"
import { $MethodDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$MethodDecl"
import { $MethodDecl$Builder$$Type } from "packages/zzzank/probejs/lang/typescript/code/member/$MethodDecl$Builder"

export class $ClassDecl$Builder {
readonly "constructors": $List<$ConstructorDecl>
readonly "fields": $List<$FieldDecl>
readonly "interfaces": $List<$BaseType>
readonly "methods": $List<$MethodDecl>
readonly "name": string
"superClass": $BaseType
readonly "variableTypes": $List<$TSVariableType>

constructor(name: string)

public "abstractClass"(): $ClassDecl$Builder
public "build"(): $ClassDecl
public "ctor"(modifier: $Consumer$$Type<$ConstructorDecl$Builder$$Type>): $ClassDecl$Builder
public "field"(symbol: string, baseType: $BaseType$$Type, isStatic: boolean, isFinal: boolean): $ClassDecl$Builder
public "field"(symbol: string, baseType: $BaseType$$Type, isStatic: boolean): $ClassDecl$Builder
public "field"(symbol: string, baseType: $BaseType$$Type): $ClassDecl$Builder
public "interfaceClass"(): $ClassDecl$Builder
public "interfaces"(...interfaces: $BaseType$$Type[]): $ClassDecl$Builder
public "method"(name: string, modifier: $Consumer$$Type<$MethodDecl$Builder$$Type>): $ClassDecl$Builder
public "superClass"(superClass: $BaseType$$Type): $ClassDecl$Builder
public "typeVariables"(...symbols: string[]): $ClassDecl$Builder
public "typeVariables"(variableTypes: $Collection$$Type<$TSVariableType$$Type>): $ClassDecl$Builder
public "typeVariables"(...variableTypes: $TSVariableType$$Type[]): $ClassDecl$Builder
get "isAbstract"(): boolean
set "isAbstract"(value: boolean)
get "isInterface"(): boolean
set "isInterface"(value: boolean)
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/ts/$FunctionDeclaration$Builder" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $TSVariableType, $TSVariableType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType"
import { $List } from "packages/java/util/$List"
import { $ParamDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$ParamDecl"
import { $FunctionDeclaration } from "packages/zzzank/probejs/lang/typescript/code/ts/$FunctionDeclaration"

export class $FunctionDeclaration$Builder {
readonly "name": string
readonly "params": $List<$ParamDecl>
"returnType": $BaseType
readonly "variableTypes": $List<$TSVariableType>

constructor(name: string)

public "build"(): $FunctionDeclaration
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean, isVarArg: boolean): $FunctionDeclaration$Builder
public "param"(symbol: string, type: $BaseType$$Type): $FunctionDeclaration$Builder
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean): $FunctionDeclaration$Builder
public "returnType"(type: $BaseType$$Type): $FunctionDeclaration$Builder
public "variable"(...symbols: string[]): $FunctionDeclaration$Builder
public "variable"(...variableType: $TSVariableType$$Type[]): $FunctionDeclaration$Builder
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSLambdaType" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $BaseType$FormatType, $BaseType$FormatType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ParamDecl, $ParamDecl$$Type } from "packages/zzzank/probejs/lang/typescript/code/member/$ParamDecl"
import { $MethodDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$MethodDecl"

export class $JSLambdaType extends $BaseType {
readonly "params": $List<$ParamDecl>
readonly "returnType": $BaseType

constructor(params: $List$$Type<$ParamDecl$$Type>, returnType: $BaseType$$Type)

public "asMethod"(methodName: string): $MethodDecl
public static "paramFormatType"(formatType: $BaseType$FormatType$$Type): $BaseType$FormatType
}
}

declare module "packages/zzzank/probejs/lang/java/type/$TypeDescriptor" {
import { $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $VariableType$$Type } from "packages/zzzank/probejs/lang/java/type/impl/$VariableType"
import { $Collection } from "packages/java/util/$Collection"
import { $ClassProvider } from "packages/zzzank/probejs/lang/java/base/$ClassProvider"
import { $Class } from "packages/java/lang/$Class"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClassPath } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"
import { $AnnotationHolder } from "packages/zzzank/probejs/lang/java/base/$AnnotationHolder"
import { $Map$$Type } from "packages/java/util/$Map"

export class $TypeDescriptor extends $AnnotationHolder implements $ClassProvider {
constructor(annotations: $Annotation$$Type[])

public "asClass"(): $Class<any>
public "canConsolidate"(): boolean
public "consolidate"(mapping: $Map$$Type<$VariableType$$Type, $TypeDescriptor$$Type>): $TypeDescriptor
public "getClassPaths"(): $Collection<$ClassPath>
public "getClasses"(): $Collection<$Class<any>>
public "stream"(): $Stream<$TypeDescriptor>
get "classPaths"(): $Collection<$ClassPath>
get "classes"(): $Collection<$Class<any>>
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/member/$FieldDecl" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $CommentableCode } from "packages/zzzank/probejs/lang/typescript/code/$CommentableCode"
import { $VariableDeclaration } from "packages/zzzank/probejs/lang/typescript/code/ts/$VariableDeclaration"

export class $FieldDecl extends $CommentableCode {
constructor(name: string, type: $BaseType$$Type)

public "asVariableDecl"(): $VariableDeclaration
get "isFinal"(): boolean
set "isFinal"(value: boolean)
get "isStatic"(): boolean
set "isStatic"(value: boolean)
get "name"(): string
set "name"(value: string)
get "type"(): $BaseType
set "type"(value: $BaseType$$Type)
}
}

declare module "packages/zzzank/probejs/events/$TypingModificationEventJS" {
import { $RequestAwareFiles$$Type } from "packages/zzzank/probejs/lang/typescript/$RequestAwareFiles"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $TypeScriptFile, $TypeScriptFile$$Type } from "packages/zzzank/probejs/lang/typescript/$TypeScriptFile"
import { $ClassPath } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"
import { $ScriptEventJS } from "packages/zzzank/probejs/events/$ScriptEventJS"
import { $Map } from "packages/java/util/$Map"

export class $TypingModificationEventJS extends $ScriptEventJS {
constructor(files: $RequestAwareFiles$$Type)

public "modify"(clazz: $Class$$Type<any>, modifier: $Consumer$$Type<$TypeScriptFile$$Type>): void
public "viewGlobalFiles"(): $Map<$ClassPath, $TypeScriptFile>
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSObjectType" {
import { $JSParam$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSParam"
import { $JSMemberType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSMemberType"
import { $Collection$$Type } from "packages/java/util/$Collection"

export class $JSObjectType extends $JSMemberType {
constructor(members: $Collection$$Type<$JSParam$$Type>)

}
}

declare module "packages/zzzank/probejs/api/dump/$MultiDump" {
import { $TSDump, $TSDump$$Type } from "packages/zzzank/probejs/api/dump/$TSDump"
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $TSFileWriter } from "packages/zzzank/probejs/api/output/$TSFileWriter"

export class $MultiDump implements $TSDump {
constructor(base: $Path$$Type)

public "addChild"<T extends $TSDump>(relativePath: string, dump: $Function$$Type<$Path$$Type, T>): T
public "addChild"<T extends $TSDump>(dump: T): T
public "clearFiles"(): void
public "dump"(): void
public "dumps"(): $List<$TSDump>
public "ensureFolder"(): void
public "running"(): boolean
public "writeTo"(): $Path
public "writers"(): $Stream<$TSFileWriter>
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSClassType" {
import { $BaseType } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $ClassPath, $ClassPath$$Type } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"

export class $TSClassType extends $BaseType {
constructor(classPath: $ClassPath$$Type)

get "classPath"(): $ClassPath
set "classPath"(value: $ClassPath$$Type)
}
}

declare module "packages/zzzank/probejs/api/dump/$TSDumpBase" {
import { $TSDump } from "packages/zzzank/probejs/api/dump/$TSDump"
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $TSFileWriter, $TSFileWriter$$Type } from "packages/zzzank/probejs/api/output/$TSFileWriter"

export class $TSDumpBase implements $TSDump {
constructor(writer: $TSFileWriter$$Type, writeTo: $Path$$Type)

public "clearFiles"(): void
public "dump"(): void
public "ensureFolder"(): void
public "running"(): boolean
public "writeTo"(): $Path
public "writers"(): $Stream<$TSFileWriter>
}
}

declare module "packages/zzzank/probejs/lang/typescript/refer/$Reference" {
import { $ImportInfo, $ImportInfo$$Type } from "packages/zzzank/probejs/lang/typescript/refer/$ImportInfo"

export class $Reference {
readonly "deduped": string
readonly "info": $ImportInfo

constructor(info: $ImportInfo$$Type, deduped: string)

public "getImportStatement"(): string
public "getOriginalName"(): string
get "importStatement"(): string
get "originalName"(): string
}
}

declare module "packages/zzzank/probejs/mixins/$AccessTextureAtlas" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map } from "packages/java/util/$Map"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $AccessTextureAtlas {
"texturesByName"(): $Map<$ResourceLocation, $TextureAtlasSprite>
}

export namespace $AccessTextureAtlas {
const probejs$$marker: never
}
export abstract class $AccessTextureAtlas$$Static implements $AccessTextureAtlas {
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/utility/$ContextShield" {
import { $BaseType$FormatType, $BaseType$FormatType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType"
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"

export class $ContextShield<T extends $BaseType> extends $BaseType {
readonly "formatType": $BaseType$FormatType
readonly "inner": T

constructor(inner: T, formatType: $BaseType$FormatType$$Type)

}
}

declare module "packages/zzzank/probejs/lang/typescript/code/member/$MethodDecl" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $TSVariableType, $TSVariableType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ParamDecl, $ParamDecl$$Type } from "packages/zzzank/probejs/lang/typescript/code/member/$ParamDecl"
import { $FunctionDeclaration } from "packages/zzzank/probejs/lang/typescript/code/ts/$FunctionDeclaration"
import { $CommentableCode } from "packages/zzzank/probejs/lang/typescript/code/$CommentableCode"

export class $MethodDecl extends $CommentableCode {
constructor(name: string, variableTypes: $List$$Type<$TSVariableType$$Type>, params: $List$$Type<$ParamDecl$$Type>, returnType: $BaseType$$Type)

public "asFunctionDecl"(): $FunctionDeclaration
get "content"(): string
set "content"(value: string)
get "isAbstract"(): boolean
set "isAbstract"(value: boolean)
get "isInterface"(): boolean
set "isInterface"(value: boolean)
get "isStatic"(): boolean
set "isStatic"(value: boolean)
get "name"(): string
set "name"(value: string)
get "params"(): $List<$ParamDecl>
set "params"(value: $List$$Type<$ParamDecl$$Type>)
get "returnType"(): $BaseType
set "returnType"(value: $BaseType$$Type)
get "variableTypes"(): $List<$TSVariableType>
set "variableTypes"(value: $List$$Type<$TSVariableType$$Type>)
}
}

declare module "packages/zzzank/probejs/lang/java/clazz/members/$ParamInfo" {
import { $TypeDescriptor, $TypeDescriptor$$Type } from "packages/zzzank/probejs/lang/java/type/$TypeDescriptor"
import { $Parameter$$Type } from "packages/java/lang/reflect/$Parameter"
import { $AnnotationHolder } from "packages/zzzank/probejs/lang/java/base/$AnnotationHolder"

export class $ParamInfo extends $AnnotationHolder {
readonly "varArgs": boolean

constructor(parameter: $Parameter$$Type)

get "name"(): string
set "name"(value: string)
get "type"(): $TypeDescriptor
set "type"(value: $TypeDescriptor$$Type)
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSArrayType" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"

export class $TSArrayType extends $BaseType {
constructor(component: $BaseType$$Type)

get "component"(): $BaseType
set "component"(value: $BaseType$$Type)
}
}

declare module "packages/zzzank/probejs/api/output/$TSFileWriter" {
import { $UnsafeFunction$$Type } from "packages/zzzank/probejs/utils/$UnsafeFunction"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $TypeScriptFile$$Type } from "packages/zzzank/probejs/lang/typescript/$TypeScriptFile"
import { $Writer } from "packages/java/io/$Writer"
import { $IOException$$Type } from "packages/java/io/$IOException"

export interface $TSFileWriter {
"accept"(file: $TypeScriptFile$$Type): void
"countAcceptedFiles"(): integer
"countWrittenFiles"(): integer
"setFileSuffix"(suffix: string): $TSFileWriter
"setWithIndex"(withIndex: boolean): $TSFileWriter
"setWriteAsModule"(writeAsModule: boolean): $TSFileWriter
"setWriterProvider"(writerProvider: $UnsafeFunction$$Type<$Path$$Type, $Writer, $IOException$$Type>): $TSFileWriter
"write"(base: $Path$$Type): void
set "fileSuffix"(value: string)
set "withIndex"(value: boolean)
set "writeAsModule"(value: boolean)
set "writerProvider"(value: $UnsafeFunction$$Type<$Path$$Type, $Writer, $IOException$$Type>)
}

export namespace $TSFileWriter {
const D_TS_SUFFIX: string
const INDEX_FILE_NAME: string
const TS_SUFFIX: string
}
export abstract class $TSFileWriter$$Static implements $TSFileWriter {
static readonly "D_TS_SUFFIX": string
static readonly "INDEX_FILE_NAME": string
static readonly "TS_SUFFIX": string

}
}

declare module "packages/zzzank/probejs/lang/java/clazz/members/$FieldInfo" {
import { $TypeDescriptor } from "packages/zzzank/probejs/lang/java/type/$TypeDescriptor"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Field$$Type } from "packages/java/lang/reflect/$Field"
import { $FieldInfo$FieldAttributes } from "packages/zzzank/probejs/lang/java/clazz/members/$FieldInfo$FieldAttributes"
import { $AnnotationHolder } from "packages/zzzank/probejs/lang/java/base/$AnnotationHolder"

export class $FieldInfo extends $AnnotationHolder {
readonly "attributes": $FieldInfo$FieldAttributes
readonly "name": string
readonly "type": $TypeDescriptor

constructor(from: $Class$$Type<any>, field: $Field$$Type)
constructor(field: $Field$$Type, jsName: string)

}
}

declare module "packages/zzzank/probejs/lang/typescript/refer/$ImportInfos" {
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Code$$Type } from "packages/zzzank/probejs/lang/typescript/code/$Code"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $BaseType$FormatType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $ImportInfo, $ImportInfo$$Type } from "packages/zzzank/probejs/lang/typescript/refer/$ImportInfo"
import { $ClassPath } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Map } from "packages/java/util/$Map"

export class $ImportInfos implements $Iterable<$ImportInfo> {
public "add"(info: $ImportInfo$$Type): $ImportInfos
public "addAll"(infos: $Collection$$Type<$ImportInfo$$Type>): $ImportInfos
public "addAll"(infos: $Stream$$Type<$ImportInfo$$Type>): $ImportInfos
public "addAll"(other: $ImportInfos$$Type): $ImportInfos
public "forEach"(consumer0: $Consumer$$Type<$ImportInfo$$Type>): void
public "fromCode"(code: $BaseType$$Type, type: $BaseType$FormatType$$Type): $ImportInfos
public "fromCode"(code: $Code$$Type): $ImportInfos
public "fromCodes"(codes: $Collection$$Type<$BaseType$$Type>, type: $BaseType$FormatType$$Type): $ImportInfos
public "fromCodes"(codes: $Collection$$Type<$Code$$Type>): $ImportInfos
public "fromCodes"(codes: $Stream$$Type<$BaseType$$Type>, type: $BaseType$FormatType$$Type): $ImportInfos
public "fromCodes"(codes: $Stream$$Type<$Code$$Type>): $ImportInfos
public "getImports"(): $Collection<$ImportInfo>
public "getRaw"(): $Map<$ClassPath, $ImportInfo>
public "iterator"(): $Iterator<$ImportInfo>
public static "of"(infos: $Stream$$Type<$ImportInfo$$Type>): $ImportInfos
public static "of"(infos: $Collection$$Type<$ImportInfo$$Type>): $ImportInfos
public static "of"(toCopy: $ImportInfos$$Type): $ImportInfos
public static "of"(): $ImportInfos
public static "of"(info: $ImportInfo$$Type): $ImportInfos
public static "of"(...initial: $ImportInfo$$Type[]): $ImportInfos
public "spliterator"(): $Spliterator<$ImportInfo>
[Symbol.iterator](): IterableIterator<$ImportInfo>;
get "imports"(): $Collection<$ImportInfo>
get "raw"(): $Map<$ClassPath, $ImportInfo>
}
}

declare module "packages/zzzank/probejs/mixins/$AccessTextureManager" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map } from "packages/java/util/$Map"
import { $AbstractTexture } from "packages/net/minecraft/client/renderer/texture/$AbstractTexture"

export interface $AccessTextureManager {
"byPath"(): $Map<$ResourceLocation, $AbstractTexture>
}

export namespace $AccessTextureManager {
const probejs$$marker: never
}
export abstract class $AccessTextureManager$$Static implements $AccessTextureManager {
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/utility/$WithFormatType" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"

export class $WithFormatType extends $BaseType {
constructor(format: string, ...types: $BaseType$$Type[])

}
}

declare module "packages/zzzank/probejs/lang/typescript/refer/$ImportType" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $UnaryOperator, $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $List } from "packages/java/util/$List"

export class $ImportType implements $Comparable<$ImportType> {
static readonly "ALL": $List<$ImportType>
static readonly "ORIGINAL": $ImportType
static readonly "STATIC": $ImportType
static readonly "TYPE": $ImportType
readonly "formatter": $UnaryOperator<string>
readonly "name": string
readonly "ordinal": integer

public "compareTo"(o: $ImportType$$Type): integer
public "fmt"(s: string): string
public static "register"(name: string, formatter: $UnaryOperator$$Type<string>): $ImportType
}
}

declare module "packages/zzzank/probejs/lang/typescript/$ScriptDump" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Code$$Type } from "packages/zzzank/probejs/lang/typescript/code/$Code"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $ScriptType, $ScriptType$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $ScriptManager } from "packages/dev/latvian/mods/kubejs/script/$ScriptManager"
import { $SharedDump, $SharedDump$$Type } from "packages/zzzank/probejs/lang/typescript/$SharedDump"
import { $TSFilesDump } from "packages/zzzank/probejs/api/dump/$TSFilesDump"
import { $Function } from "packages/java/util/function/$Function"
import { $Transpiler } from "packages/zzzank/probejs/lang/transpiler/$Transpiler"
import { $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $MultiDump } from "packages/zzzank/probejs/api/dump/$MultiDump"
import { $Set } from "packages/java/util/$Set"
import { $ClassPath$$Type } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"
import { $Clazz, $Clazz$$Type } from "packages/zzzank/probejs/lang/java/clazz/$Clazz"
import { $TSGlobalDump } from "packages/zzzank/probejs/api/dump/$TSGlobalDump"

export class $ScriptDump extends $MultiDump {
static readonly "CLIENT_DUMP": $Function<$SharedDump, $ScriptDump>
static readonly "SERVER_DUMP": $Function<$SharedDump, $ScriptDump>
static readonly "STARTUP_DUMP": $Function<$SharedDump, $ScriptDump>
readonly "filesDump": $TSFilesDump
readonly "globalDump": $TSGlobalDump
readonly "manager": $ScriptManager
readonly "parent": $SharedDump
readonly "recordedClasses": $Set<$Clazz>
readonly "scriptPath": $Path
readonly "scriptType": $ScriptType
readonly "transpiler": $Transpiler

constructor(parent: $SharedDump$$Type, type: $ScriptType$$Type, scriptPath: $Path$$Type, classFilter: $Predicate$$Type<$Clazz$$Type>)

public "acceptClasses"(classes: $Collection$$Type<$Clazz$$Type>): void
public "addGlobal"(identifier: string, excludedNames: $Collection$$Type<string>, ...content: $Code$$Type[]): void
public "addGlobal"(identifier: string, ...content: $Code$$Type[]): void
public "assignType"(classPath: $ClassPath$$Type, name: string, type: $BaseType$$Type): void
public "assignType"(classPath: $Class$$Type<any>, type: $BaseType$$Type): void
public "assignType"(classPath: $ClassPath$$Type, type: $BaseType$$Type): void
public "assignType"(classPath: $Class$$Type<any>, name: string, type: $BaseType$$Type): void
public "clearFiles"(): void
public "ensureFolder"(): void
public "retrieveClasses"(): $Set<$Class<any>>
public "writeJSConfig"(path: $Path$$Type): void
}
}

declare module "packages/zzzank/probejs/lang/java/clazz/members/$MethodInfo" {
import { $ParamInfo } from "packages/zzzank/probejs/lang/java/clazz/members/$ParamInfo"
import { $VariableType$$Type } from "packages/zzzank/probejs/lang/java/type/impl/$VariableType"
import { $TypeDescriptor, $TypeDescriptor$$Type } from "packages/zzzank/probejs/lang/java/type/$TypeDescriptor"
import { $List } from "packages/java/util/$List"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Method$$Type } from "packages/java/lang/reflect/$Method"
import { $MethodInfo$MethodAttributes } from "packages/zzzank/probejs/lang/java/clazz/members/$MethodInfo$MethodAttributes"
import { $Map$$Type } from "packages/java/util/$Map"
import { $TypeVariableHolder } from "packages/zzzank/probejs/lang/java/base/$TypeVariableHolder"

export class $MethodInfo extends $TypeVariableHolder {
readonly "attributes": $MethodInfo$MethodAttributes
readonly "name": string
readonly "params": $List<$ParamInfo>

constructor(from: $Class$$Type<any>, method: $Method$$Type, typeRemapper: $Map$$Type<$VariableType$$Type, $TypeDescriptor$$Type>)
constructor(method: $Method$$Type, jsName: string, typeRemapper: $Map$$Type<$VariableType$$Type, $TypeDescriptor$$Type>)

get "returnType"(): $TypeDescriptor
set "returnType"(value: $TypeDescriptor$$Type)
}
}

declare module "packages/zzzank/probejs/api/dump/$TSDump" {
import { $Path } from "packages/java/nio/file/$Path"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $TSFileWriter } from "packages/zzzank/probejs/api/output/$TSFileWriter"

export interface $TSDump {
"clearFiles"(): void
"dump"(): void
"ensureFolder"(): void
"running"(): boolean
"writeTo"(): $Path
"writers"(): $Stream<$TSFileWriter>
}

export namespace $TSDump {
const probejs$$marker: never
}
export abstract class $TSDump$$Static implements $TSDump {
}
}

declare module "packages/zzzank/probejs/lang/java/type/impl/$VariableType" {
import { $TypeDescriptor } from "packages/zzzank/probejs/lang/java/type/$TypeDescriptor"
import { $List } from "packages/java/util/$List"
import { $AnnotatedTypeVariable$$Type } from "packages/java/lang/reflect/$AnnotatedTypeVariable"
import { $TypeVariable, $TypeVariable$$Type } from "packages/java/lang/reflect/$TypeVariable"

export class $VariableType extends $TypeDescriptor {
constructor(typeVariable: $TypeVariable$$Type<any>, checkBounds: boolean)
constructor(typeVariable: $AnnotatedTypeVariable$$Type, checkBounds: boolean)
constructor(typeVariable: $TypeVariable$$Type<any>)
constructor(typeVariable: $AnnotatedTypeVariable$$Type)

public "getDescriptors"(): $List<$TypeDescriptor>
public "getSymbol"(): string
public "raw"(): $TypeVariable<any>
get "descriptors"(): $List<$TypeDescriptor>
get "symbol"(): string
}
}

declare module "packages/zzzank/probejs/utils/$UnsafeFunction" {
import { $Throwable } from "packages/java/lang/$Throwable"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export interface $UnsafeFunction<I, O, E extends $Throwable> {
"andThen"<O2>(then: $UnsafeFunction$$Type<O, O2, E>): $UnsafeFunction<I, O2, E>
"apply"(i: I): O
"applySafe"(i: I): $Map$Entry<O, $Throwable>
}

export namespace $UnsafeFunction {
const probejs$$marker: never
}
export abstract class $UnsafeFunction$$Static<I, O, E extends $Throwable> implements $UnsafeFunction<I, O, E> {
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/$CommentableCode" {
import { $Declaration$$Type } from "packages/zzzank/probejs/lang/typescript/$Declaration"
import { $Code } from "packages/zzzank/probejs/lang/typescript/code/$Code"
import { $List } from "packages/java/util/$List"

export class $CommentableCode extends $Code {
readonly "comments": $List<string>

constructor()

public "addComment"(...comments: string[]): void
public "addCommentAtStart"(...comments: string[]): void
public "formatComments"(): $List<string>
public "formatRaw"(declaration: $Declaration$$Type): $List<string>
public "getTrimmedComments"(): $List<string>
public "linebreak"(): void
public "newline"(...comments: string[]): void
get "trimmedComments"(): $List<string>
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $BaseType$FormatType extends $Enum<$BaseType$FormatType> {
static readonly "INPUT": $BaseType$FormatType
static readonly "RETURN": $BaseType$FormatType
static readonly "VARIABLE": $BaseType$FormatType

public static "valueOf"(name: string): $BaseType$FormatType
public static "values"(): $BaseType$FormatType[]
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSOptionalType" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"

export class $TSOptionalType extends $BaseType {
constructor(component: $BaseType$$Type)

get "component"(): $BaseType
set "component"(value: $BaseType$$Type)
}
}

declare module "packages/zzzank/probejs/lang/java/clazz/$Clazz$ClassType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Clazz$ClassType extends $Enum<$Clazz$ClassType> {
static readonly "CLASS": $Clazz$ClassType
static readonly "ENUM": $Clazz$ClassType
static readonly "INTERFACE": $Clazz$ClassType
static readonly "RECORD": $Clazz$ClassType

public static "valueOf"(name: string): $Clazz$ClassType
public static "values"(): $Clazz$ClassType[]
}
}

declare module "packages/zzzank/probejs/lang/transpiler/redirect/$TypeRedirect" {
import { $BaseType } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $TypeConverter$$Type } from "packages/zzzank/probejs/lang/transpiler/$TypeConverter"
import { $TypeDescriptor$$Type } from "packages/zzzank/probejs/lang/java/type/$TypeDescriptor"

export interface $TypeRedirect {
"apply"(typeDescriptor: $TypeDescriptor$$Type, converter: $TypeConverter$$Type): $BaseType
"test"(typeDescriptor: $TypeDescriptor$$Type, converter: $TypeConverter$$Type): boolean
}

export namespace $TypeRedirect {
const probejs$$marker: never
}
export abstract class $TypeRedirect$$Static implements $TypeRedirect {
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/member/$ConstructorDecl$Builder" {
import { $ConstructorDecl$BuilderBase } from "packages/zzzank/probejs/lang/typescript/code/member/$ConstructorDecl$BuilderBase"

export class $ConstructorDecl$Builder extends $ConstructorDecl$BuilderBase<$ConstructorDecl$Builder> {
constructor()

}
}

declare module "packages/zzzank/probejs/lang/typescript/$TypeScriptFile" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $Code, $Code$$Type } from "packages/zzzank/probejs/lang/typescript/code/$Code"
import { $Declaration } from "packages/zzzank/probejs/lang/typescript/$Declaration"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $ClassPath, $ClassPath$$Type } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"
import { $Writer$$Type } from "packages/java/io/$Writer"

export class $TypeScriptFile {
readonly "codes": $List<$Code>
readonly "declaration": $Declaration
readonly "path": $ClassPath

constructor(self: $ClassPath$$Type)

public "addCode"(code: $Code$$Type): void
public "addCodes"(...codes: $Code$$Type[]): void
public "addCodes"(codes: $Collection$$Type<$Code$$Type>): void
public "excludeSymbol"(name: string): void
public "findCode"<T extends $Code>(type: $Class$$Type<T>): $Optional<T>
public "findCodeNullable"<T extends $Code>(type: $Class$$Type<T>): T
public "format"(): $List<string>
public "write"(writeTo: $Path$$Type): void
public "write"(writer: $Writer$$Type): void
}
}

declare module "packages/zzzank/probejs/lang/snippet/parts/$Variable" {
import { $Enum } from "packages/java/lang/$Enum"
import { $SnippetPart } from "packages/zzzank/probejs/lang/snippet/parts/$SnippetPart"

export class $Variable extends $Enum<$Variable> implements $SnippetPart {
static readonly "BLOCK_COMMENT_END": $Variable
static readonly "BLOCK_COMMENT_START": $Variable
static readonly "CLIPBOARD": $Variable
static readonly "CURRENT_DATE": $Variable
static readonly "CURRENT_DAY_NAME": $Variable
static readonly "CURRENT_DAY_NAME_SHORT": $Variable
static readonly "CURRENT_HOUR": $Variable
static readonly "CURRENT_MINUTE": $Variable
static readonly "CURRENT_MONTH": $Variable
static readonly "CURRENT_MONTH_NAME": $Variable
static readonly "CURRENT_MONTH_NAME_SHORT": $Variable
static readonly "CURRENT_SECOND": $Variable
static readonly "CURRENT_SECONDS_UNIX": $Variable
static readonly "CURRENT_TIMEZONE_OFFSET": $Variable
static readonly "CURRENT_YEAR": $Variable
static readonly "CURRENT_YEAR_SHORT": $Variable
static readonly "CURSOR_INDEX": $Variable
static readonly "CURSOR_NUMBER": $Variable
static readonly "LINE_COMMENT": $Variable
static readonly "RANDOM": $Variable
static readonly "RANDOM_HEX": $Variable
static readonly "RELATIVE_FILEPATH": $Variable
static readonly "TM_CURRENT_LINE": $Variable
static readonly "TM_CURRENT_WORD": $Variable
static readonly "TM_DIRECTORY": $Variable
static readonly "TM_FILENAME": $Variable
static readonly "TM_FILENAME_BASE": $Variable
static readonly "TM_FILEPATH": $Variable
static readonly "TM_LINE_INDEX": $Variable
static readonly "TM_LINE_NUMBER": $Variable
static readonly "TM_SELECTED_TEXT": $Variable
static readonly "UUID": $Variable
static readonly "WORKSPACE_FOLDER": $Variable
static readonly "WORKSPACE_NAME": $Variable

public "format"(): string
public static "valueOf"(name: string): $Variable
public static "values"(): $Variable[]
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSJoinedType$Intersection" {
import { $JSJoinedType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSJoinedType"
import { $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $Collection$$Type } from "packages/java/util/$Collection"

export class $JSJoinedType$Intersection extends $JSJoinedType {
constructor(types: $Collection$$Type<$BaseType$$Type>)

}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSObjectType$Builder" {
import { $JSMemberType$Builder } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSMemberType$Builder"
import { $JSObjectType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSObjectType"

export class $JSObjectType$Builder extends $JSMemberType$Builder<$JSObjectType$Builder, $JSObjectType> {
constructor()

public "build"(): $JSObjectType
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/member/$ConstructorDecl" {
import { $TSVariableType, $TSVariableType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ParamDecl, $ParamDecl$$Type } from "packages/zzzank/probejs/lang/typescript/code/member/$ParamDecl"
import { $CommentableCode } from "packages/zzzank/probejs/lang/typescript/code/$CommentableCode"

export class $ConstructorDecl extends $CommentableCode {
readonly "params": $List<$ParamDecl>
readonly "variableTypes": $List<$TSVariableType>

constructor(variableTypes: $List$$Type<$TSVariableType$$Type>, params: $List$$Type<$ParamDecl$$Type>)

get "content"(): string
set "content"(value: string)
}
}

declare module "packages/zzzank/probejs/api/dump/$TSGlobalDump" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $TSFileWriter$$Type } from "packages/zzzank/probejs/api/output/$TSFileWriter"
import { $TypeScriptFile } from "packages/zzzank/probejs/lang/typescript/$TypeScriptFile"
import { $TSDumpBase } from "packages/zzzank/probejs/api/dump/$TSDumpBase"
import { $Map } from "packages/java/util/$Map"

export class $TSGlobalDump extends $TSDumpBase {
readonly "globals": $Map<string, $TypeScriptFile>

constructor(writeTo: $Path$$Type)
constructor(writer: $TSFileWriter$$Type, writeTo: $Path$$Type)

public "clearFiles"(): void
public "ensureFolder"(): void
}
}

declare module "packages/zzzank/probejs/lang/java/clazz/$Clazz$ClassAttribute" {
import { $Clazz$ClassType } from "packages/zzzank/probejs/lang/java/clazz/$Clazz$ClassType"
import { $Class$$Type } from "packages/java/lang/$Class"

export class $Clazz$ClassAttribute {
readonly "modifiers": integer
readonly "type": $Clazz$ClassType

constructor(clazz: $Class$$Type<any>)

public "isAbstract"(): boolean
get "abstract"(): boolean
}
}

declare module "packages/zzzank/probejs/lang/snippet/$Snippet" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Variable$$Type } from "packages/zzzank/probejs/lang/snippet/parts/$Variable"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $Snippet {
readonly "name": string

constructor(name: string)

public "choices"(enumeration: integer, choices: $Collection$$Type<string>): $Snippet
public "choices"(choices: $Collection$$Type<string>): $Snippet
public "compile"(): $JsonObject
public "description"(description: string): $Snippet
public "getPrefixes"(): $List<string>
public "literal"(content: string): $Snippet
public "newline"(): $Snippet
public "prefix"(prefix: string): $Snippet
public "registry"<T>(key: $ResourceKey$$Type<$Registry<T>>): $Snippet
public "tabStop"(enumeration: integer, defaultValue: string): $Snippet
public "tabStop"(): $Snippet
public "tabStop"(enumeration: integer): $Snippet
public "variable"(variable: $Variable$$Type): $Snippet
get "prefixes"(): $List<string>
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSTypeOfType" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"

export class $JSTypeOfType extends $BaseType {
readonly "inner": $BaseType

constructor(inner: $BaseType$$Type)

}
}

declare module "packages/zzzank/probejs/lang/typescript/$Declaration" {
import { $Set } from "packages/java/util/$Set"
import { $Reference } from "packages/zzzank/probejs/lang/typescript/refer/$Reference"
import { $ImportInfo$$Type } from "packages/zzzank/probejs/lang/typescript/refer/$ImportInfo"
import { $ClassPath, $ClassPath$$Type } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"
import { $Map } from "packages/java/util/$Map"

export class $Declaration {
static readonly "UNIQUE_TEMPLATE": string
readonly "excludedNames": $Set<string>
readonly "references": $Map<$ClassPath, $Reference>
readonly "usedNames": $Set<string>

constructor()

public "addImport"(info: $ImportInfo$$Type): void
public "containsSymbol"(name: string): boolean
public "exclude"(name: string): void
public "getSymbol"(path: $ClassPath$$Type): string
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/member/$MethodDecl$Builder" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $MethodDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$MethodDecl"
import { $ConstructorDecl$BuilderBase } from "packages/zzzank/probejs/lang/typescript/code/member/$ConstructorDecl$BuilderBase"

export class $MethodDecl$Builder extends $ConstructorDecl$BuilderBase<$MethodDecl$Builder> {
readonly "name": string
"returnType": $BaseType

constructor(name: string)

public "abstractMethod"(): $MethodDecl$Builder
public "buildAsMethod"(): $MethodDecl
public "returnType"(type: $BaseType$$Type): $MethodDecl$Builder
public "staticMethod"(): $MethodDecl$Builder
get "isAbstract"(): boolean
set "isAbstract"(value: boolean)
get "isStatic"(): boolean
set "isStatic"(value: boolean)
}
}

declare module "packages/zzzank/probejs/lang/typescript/$SharedDump" {
import { $Transpiler } from "packages/zzzank/probejs/lang/transpiler/$Transpiler"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $Set } from "packages/java/util/$Set"
import { $ClassPath } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"
import { $TSFilesDump } from "packages/zzzank/probejs/api/dump/$TSFilesDump"

export class $SharedDump extends $TSFilesDump {
readonly "denied": $Set<$ClassPath>
readonly "transpiler": $Transpiler

constructor(writeTo: $Path$$Type)

public "clearFiles"(): void
public "ensureFolder"(): void
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSParam" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $BaseType$FormatType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Declaration$$Type } from "packages/zzzank/probejs/lang/typescript/$Declaration"

export class $JSParam {
constructor(name: string, optional: boolean, type: $BaseType$$Type)

public "format"(declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type, nameProcessor: $Function$$Type<string, string>): string
public "name"(): string
public "optional"(): boolean
public "type"(): $BaseType
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/utility/$StaticType" {
import { $ClassPath$$Type } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"
import { $TSClassType } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSClassType"

export class $StaticType extends $TSClassType {
constructor(classPath: $ClassPath$$Type)

}
}

declare module "packages/zzzank/probejs/utils/$ClassWrapperPJS" {
import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context"
import { $CustomJavaToJsWrapper } from "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Scriptable, $Scriptable$$Type } from "packages/dev/latvian/mods/rhino/$Scriptable"

export class $ClassWrapperPJS<T> implements $CustomJavaToJsWrapper {
constructor(type: $Class$$Type<T>)

public "convertJavaToJs"(cx: $Context$$Type, scope: $Scriptable$$Type, staticType: $Class$$Type<any>): $Scriptable
}
}

declare module "packages/zzzank/probejs/lang/java/clazz/members/$ConstructorInfo" {
import { $ParamInfo } from "packages/zzzank/probejs/lang/java/clazz/members/$ParamInfo"
import { $List } from "packages/java/util/$List"
import { $Constructor$$Type } from "packages/java/lang/reflect/$Constructor"
import { $TypeVariableHolder } from "packages/zzzank/probejs/lang/java/base/$TypeVariableHolder"

export class $ConstructorInfo extends $TypeVariableHolder {
readonly "params": $List<$ParamInfo>

constructor(constructor_: $Constructor$$Type<any>)

}
}

declare module "packages/zzzank/probejs/lang/typescript/code/member/$ClassDecl" {
import { $ConstructorDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$ConstructorDecl"
import { $FieldDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$FieldDecl"
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $TSVariableType, $TSVariableType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType"
import { $Code } from "packages/zzzank/probejs/lang/typescript/code/$Code"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $CommentableCode } from "packages/zzzank/probejs/lang/typescript/code/$CommentableCode"
import { $MethodDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$MethodDecl"
import { $Clazz, $Clazz$$Type } from "packages/zzzank/probejs/lang/java/clazz/$Clazz"

export class $ClassDecl extends $CommentableCode {
readonly "bodyCode": $List<$Code>
readonly "constructors": $List<$ConstructorDecl>
readonly "fields": $List<$FieldDecl>
readonly "interfaces": $List<$BaseType>
readonly "methods": $List<$MethodDecl>
readonly "name": string
readonly "variableTypes": $List<$TSVariableType>

constructor(name: string, superClass: $BaseType$$Type, interfaces: $List$$Type<$BaseType$$Type>, variableTypes: $List$$Type<$TSVariableType$$Type>)

get "isAbstract"(): boolean
set "isAbstract"(value: boolean)
get "nativeClazz"(): $Clazz
set "nativeClazz"(value: $Clazz$$Type)
get "superClass"(): $BaseType
set "superClass"(value: $BaseType$$Type)
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSTupleType$Builder" {
import { $JSTupleType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSTupleType"
import { $JSMemberType$Builder } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSMemberType$Builder"

export class $JSTupleType$Builder extends $JSMemberType$Builder<$JSTupleType$Builder, $JSTupleType> {
constructor()

public "build"(): $JSTupleType
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSParamType" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"

export class $TSParamType extends $BaseType {
readonly "baseType": $BaseType
readonly "params": $List<$BaseType>

constructor(baseType: $BaseType$$Type, params: $Collection$$Type<$BaseType$$Type>)

}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSPrimitiveType" {
import { $BaseType } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"

export class $JSPrimitiveType extends $BaseType {
readonly "content": string

constructor(content: string)

}
}

declare module "packages/zzzank/probejs/lang/typescript/code/ts/$Statements" {
import { $FunctionDeclaration$Builder } from "packages/zzzank/probejs/lang/typescript/code/ts/$FunctionDeclaration$Builder"
import { $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $TypeDecl$Builder } from "packages/zzzank/probejs/lang/typescript/code/member/$TypeDecl$Builder"
import { $ConstructorDecl$Builder } from "packages/zzzank/probejs/lang/typescript/code/member/$ConstructorDecl$Builder"
import { $ClassDecl$Builder } from "packages/zzzank/probejs/lang/typescript/code/member/$ClassDecl$Builder"
import { $MethodDecl$Builder } from "packages/zzzank/probejs/lang/typescript/code/member/$MethodDecl$Builder"

export interface $Statements {
}

export namespace $Statements {
function clazz(name: string): $ClassDecl$Builder
function ctor(): $ConstructorDecl$Builder
function func(name: string): $FunctionDeclaration$Builder
function method(name: string): $MethodDecl$Builder
function type(name: string, type: $BaseType$$Type): $TypeDecl$Builder
}
export abstract class $Statements$$Static implements $Statements {
static "clazz"(name: string): $ClassDecl$Builder
static "ctor"(): $ConstructorDecl$Builder
static "func"(name: string): $FunctionDeclaration$Builder
static "method"(name: string): $MethodDecl$Builder
static "type"(name: string, type: $BaseType$$Type): $TypeDecl$Builder
}
}

declare module "packages/zzzank/probejs/lang/transpiler/$Transpiler" {
import { $TypeConverter, $TypeConverter$$Type } from "packages/zzzank/probejs/lang/transpiler/$TypeConverter"
import { $Set } from "packages/java/util/$Set"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $TypeScriptFile } from "packages/zzzank/probejs/lang/typescript/$TypeScriptFile"
import { $ClassPath } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"
import { $Clazz$$Type } from "packages/zzzank/probejs/lang/java/clazz/$Clazz"
import { $Map } from "packages/java/util/$Map"

export class $Transpiler {
readonly "rejectedClasses": $Set<$ClassPath>
readonly "typeConverter": $TypeConverter

constructor()
constructor(typeConverter: $TypeConverter$$Type)

public "dump"(clazzes: $Collection$$Type<$Clazz$$Type>): $Map<$ClassPath, $TypeScriptFile>
public "init"(): void
public "isRejected"(clazz: $Clazz$$Type): boolean
public "reject"(clazz: $Class$$Type<any>): void
}
}

declare module "packages/zzzank/probejs/events/$ScriptEventJS" {
import { JClass } from "packages/zzzank/probejs/docs/duck/JClass"
import { $Statements, $Statements$$Static } from "packages/zzzank/probejs/lang/typescript/code/ts/$Statements"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Types, $Types$$Static } from "packages/zzzank/probejs/lang/typescript/code/type/$Types"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $TSUtilityType, $TSUtilityType$$Static } from "packages/zzzank/probejs/lang/typescript/code/type/utility/$TSUtilityType"
import { $ScriptDump, $ScriptDump$$Type } from "packages/zzzank/probejs/lang/typescript/$ScriptDump"

export class $ScriptEventJS extends $EventJS {
readonly "scriptDump": $ScriptDump

constructor(scriptDump: $ScriptDump$$Type)

public "getScriptType"(): $ScriptType
public "getStatements"(): (JClass<$Statements> & (typeof $Statements$$Static))
public "getTSUtilityTypes"(): (JClass<$TSUtilityType> & (typeof $TSUtilityType$$Static))
public "getTypes"(): (JClass<$Types> & (typeof $Types$$Static))
get "scriptType"(): $ScriptType
get "statements"(): (JClass<$Statements> & (typeof $Statements$$Static))
get "tSUtilityTypes"(): (JClass<$TSUtilityType> & (typeof $TSUtilityType$$Static))
get "types"(): (JClass<$Types> & (typeof $Types$$Static))
}
}

declare module "packages/zzzank/probejs/events/$TypeAssignmentEventJS" {
import { $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $ScriptEventJS } from "packages/zzzank/probejs/events/$ScriptEventJS"
import { $ScriptDump$$Type } from "packages/zzzank/probejs/lang/typescript/$ScriptDump"

export class $TypeAssignmentEventJS extends $ScriptEventJS {
constructor(scriptDump: $ScriptDump$$Type)

public "assignType"(clazz: $Class$$Type<any>, baseType: $BaseType$$Type): void
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/member/$TypeDecl$Builder" {
import { $TypeDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$TypeDecl"
import { $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $BaseType$FormatType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType"
import { $TSVariableType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType"
import { $List$$Type } from "packages/java/util/$List"

export class $TypeDecl$Builder {
constructor(symbol: string, type: $BaseType$$Type)

public "build"(): $TypeDecl
public "exportDecl"(exportDecl: boolean): $TypeDecl$Builder
public "symbolVariables"(symbolVariables: $List$$Type<$TSVariableType$$Type>): $TypeDecl$Builder
public "typeFormat"(typeFormat: $BaseType$FormatType$$Type): $TypeDecl$Builder
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/ts/$VariableDeclaration" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $BaseType$FormatType, $BaseType$FormatType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType"
import { $CommentableCode } from "packages/zzzank/probejs/lang/typescript/code/$CommentableCode"

export class $VariableDeclaration extends $CommentableCode {
constructor(symbol: string, type: $BaseType$$Type)

public "setTypeFormat"(typeFormat: $BaseType$FormatType$$Type): $VariableDeclaration
get "symbol"(): string
set "symbol"(value: string)
get "type"(): $BaseType
set "type"(value: $BaseType$$Type)
get "typeFormat"(): $BaseType$FormatType
set "typeFormat"(value: $BaseType$FormatType$$Type)
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSJoinedType$Union" {
import { $JSJoinedType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSJoinedType"
import { $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $Collection$$Type } from "packages/java/util/$Collection"

export class $JSJoinedType$Union extends $JSJoinedType {
constructor(types: $Collection$$Type<$BaseType$$Type>)

}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/$Types" {
import { $JSLambdaType$Builder } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSLambdaType$Builder"
import { $JSPrimitiveType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSPrimitiveType"
import { $ImportShield } from "packages/zzzank/probejs/lang/typescript/code/type/utility/$ImportShield"
import { $TSArrayType } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSArrayType"
import { $CustomType } from "packages/zzzank/probejs/lang/typescript/code/type/utility/$CustomType"
import { $TSClassType } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSClassType"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $TSParamType } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSParamType"
import { $TSOptionalType } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSOptionalType"
import { $ImportInfos, $ImportInfos$$Type } from "packages/zzzank/probejs/lang/typescript/refer/$ImportInfos"
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $BaseType$FormatType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $JSTupleType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSTupleType"
import { $WithFormatType } from "packages/zzzank/probejs/lang/typescript/code/type/utility/$WithFormatType"
import { $Declaration$$Type } from "packages/zzzank/probejs/lang/typescript/$Declaration"
import { $ContextShield } from "packages/zzzank/probejs/lang/typescript/code/type/utility/$ContextShield"
import { $JSObjectType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSObjectType"
import { $StaticType } from "packages/zzzank/probejs/lang/typescript/code/type/utility/$StaticType"
import { $JSObjectType$Builder } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSObjectType$Builder"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $JSTupleType$Builder } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSTupleType$Builder"
import { $JSJoinedType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSJoinedType"
import { $TSVariableType } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType"
import { $JSTypeOfType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSTypeOfType"
import { $ClassPath$$Type } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"

export interface $Types {
}

export namespace $Types {
const ANY: $JSPrimitiveType
const BOOLEAN: $JSPrimitiveType
const EMPTY_ARRAY: $JSTupleType
const EMPTY_OBJECT: $JSObjectType
const NEVER: $JSPrimitiveType
const NULL: $JSPrimitiveType
const NUMBER: $JSPrimitiveType
const OBJECT: $JSPrimitiveType
const STRING: $JSPrimitiveType
const THIS: $JSPrimitiveType
const UNDEFINED: $JSPrimitiveType
const UNKNOWN: $JSPrimitiveType
const VOID: $JSPrimitiveType
function and(...types: $BaseType$$Type[]): $BaseType
function and(types: $Collection$$Type<$BaseType$$Type>): $BaseType
function array(base: $BaseType$$Type): $TSArrayType
function contextShield<T extends $BaseType>(type: T, formatType: $BaseType$FormatType$$Type): $ContextShield<T>
function custom(formatter: $BiFunction$$Type<$Declaration$$Type, $BaseType$FormatType$$Type, string>, imports: $Function$$Type<$BaseType$FormatType$$Type, $ImportInfos>): $CustomType
function custom(formatter: $BiFunction$$Type<$Declaration$$Type, $BaseType$FormatType$$Type, string>): $CustomType
function filter(type: $BaseType$$Type, typePredicate: $Predicate$$Type<$BaseType$$Type>): $BaseType
function format(format: string, ...types: $BaseType$$Type[]): $WithFormatType
function generic(symbol: string, extendOn: $BaseType$$Type): $TSVariableType
function generic(symbol: string): $TSVariableType
function generic(symbol: string, extendOn: $BaseType$$Type, defaultTo: $BaseType$$Type): $TSVariableType
function importShield<T extends $BaseType>(type: T, imports: $ImportInfos$$Type): $ImportShield<T>
function join(delimiter: charseq, prefix: charseq, suffix: charseq, types: $Collection$$Type<$BaseType$$Type>): $JSJoinedType
function join(delimiter: charseq, prefix: charseq, suffix: charseq, ...types: $BaseType$$Type[]): $JSJoinedType
function join(delimiter: charseq, types: $Collection$$Type<$BaseType$$Type>): $JSJoinedType
function join(delimiter: charseq, ...types: $BaseType$$Type[]): $JSJoinedType
function lambda(): $JSLambdaType$Builder
function literal(content: any): $JSPrimitiveType
function object(): $JSObjectType$Builder
function optional(type: $BaseType$$Type): $TSOptionalType
function or(types: $Collection$$Type<$BaseType$$Type>): $BaseType
function or(...types: $BaseType$$Type[]): $BaseType
function parameterized(base: $BaseType$$Type, params: $Collection$$Type<$BaseType$$Type>): $TSParamType
function parameterized(base: $BaseType$$Type, ...params: $BaseType$$Type[]): $TSParamType
function primitive(type: string): $JSPrimitiveType
function staticType(path: $ClassPath$$Type): $StaticType
function templateLiteral(content: string): $JSPrimitiveType
function ternary(symbol: string, extend: $BaseType$$Type, ifTrue: $BaseType$$Type, ifFalse: $BaseType$$Type): $WithFormatType
function tuple(): $JSTupleType$Builder
function type(classPath: $ClassPath$$Type): $TSClassType
function type(clazz: $Class$$Type<any>): $TSClassType
function typeMaybeGeneric(clazz: $Class$$Type<any>): $BaseType
function typeOf(classPath: $ClassPath$$Type): $JSTypeOfType
function typeOf(classType: $BaseType$$Type): $JSTypeOfType
function typeOf(clazz: $Class$$Type<any>): $JSTypeOfType
function withComment(type: $BaseType$$Type, comment: string): $WithFormatType
}
export abstract class $Types$$Static implements $Types {
static readonly "ANY": $JSPrimitiveType
static readonly "BOOLEAN": $JSPrimitiveType
static readonly "EMPTY_ARRAY": $JSTupleType
static readonly "EMPTY_OBJECT": $JSObjectType
static readonly "NEVER": $JSPrimitiveType
static readonly "NULL": $JSPrimitiveType
static readonly "NUMBER": $JSPrimitiveType
static readonly "OBJECT": $JSPrimitiveType
static readonly "STRING": $JSPrimitiveType
static readonly "THIS": $JSPrimitiveType
static readonly "UNDEFINED": $JSPrimitiveType
static readonly "UNKNOWN": $JSPrimitiveType
static readonly "VOID": $JSPrimitiveType

static "and"(...types: $BaseType$$Type[]): $BaseType
static "and"(types: $Collection$$Type<$BaseType$$Type>): $BaseType
static "array"(base: $BaseType$$Type): $TSArrayType
static "contextShield"<T extends $BaseType>(type: T, formatType: $BaseType$FormatType$$Type): $ContextShield<T>
static "custom"(formatter: $BiFunction$$Type<$Declaration$$Type, $BaseType$FormatType$$Type, string>, imports: $Function$$Type<$BaseType$FormatType$$Type, $ImportInfos>): $CustomType
static "custom"(formatter: $BiFunction$$Type<$Declaration$$Type, $BaseType$FormatType$$Type, string>): $CustomType
static "filter"(type: $BaseType$$Type, typePredicate: $Predicate$$Type<$BaseType$$Type>): $BaseType
static "format"(format: string, ...types: $BaseType$$Type[]): $WithFormatType
static "generic"(symbol: string, extendOn: $BaseType$$Type): $TSVariableType
static "generic"(symbol: string): $TSVariableType
static "generic"(symbol: string, extendOn: $BaseType$$Type, defaultTo: $BaseType$$Type): $TSVariableType
static "importShield"<T extends $BaseType>(type: T, imports: $ImportInfos$$Type): $ImportShield<T>
static "join"(delimiter: charseq, prefix: charseq, suffix: charseq, types: $Collection$$Type<$BaseType$$Type>): $JSJoinedType
static "join"(delimiter: charseq, prefix: charseq, suffix: charseq, ...types: $BaseType$$Type[]): $JSJoinedType
static "join"(delimiter: charseq, types: $Collection$$Type<$BaseType$$Type>): $JSJoinedType
static "join"(delimiter: charseq, ...types: $BaseType$$Type[]): $JSJoinedType
static "lambda"(): $JSLambdaType$Builder
/** @deprecated */
static "literal"(content: any): $JSPrimitiveType
static "object"(): $JSObjectType$Builder
static "optional"(type: $BaseType$$Type): $TSOptionalType
static "or"(types: $Collection$$Type<$BaseType$$Type>): $BaseType
static "or"(...types: $BaseType$$Type[]): $BaseType
static "parameterized"(base: $BaseType$$Type, params: $Collection$$Type<$BaseType$$Type>): $TSParamType
static "parameterized"(base: $BaseType$$Type, ...params: $BaseType$$Type[]): $TSParamType
static "primitive"(type: string): $JSPrimitiveType
static "staticType"(path: $ClassPath$$Type): $StaticType
static "templateLiteral"(content: string): $JSPrimitiveType
static "ternary"(symbol: string, extend: $BaseType$$Type, ifTrue: $BaseType$$Type, ifFalse: $BaseType$$Type): $WithFormatType
static "tuple"(): $JSTupleType$Builder
static "type"(classPath: $ClassPath$$Type): $TSClassType
static "type"(clazz: $Class$$Type<any>): $TSClassType
static "typeMaybeGeneric"(clazz: $Class$$Type<any>): $BaseType
static "typeOf"(classPath: $ClassPath$$Type): $JSTypeOfType
static "typeOf"(classType: $BaseType$$Type): $JSTypeOfType
static "typeOf"(clazz: $Class$$Type<any>): $JSTypeOfType
static "withComment"(type: $BaseType$$Type, comment: string): $WithFormatType
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSJoinedType" {
import { $StringJoiner } from "packages/java/util/$StringJoiner"
import { $BaseType } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $List } from "packages/java/util/$List"

export class $JSJoinedType extends $BaseType {
readonly "types": $List<$BaseType>

public "createJoiner"(): $StringJoiner
}
}

declare module "packages/zzzank/probejs/lang/transpiler/$TypeConverter" {
import { $BaseType } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $TSVariableType } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType"
import { $VariableType$$Type } from "packages/zzzank/probejs/lang/java/type/impl/$VariableType"
import { $TypeDescriptor$$Type } from "packages/zzzank/probejs/lang/java/type/$TypeDescriptor"
import { $List } from "packages/java/util/$List"
import { $Type$$Type } from "packages/java/lang/reflect/$Type"
import { $TypeRedirect, $TypeRedirect$$Type } from "packages/zzzank/probejs/lang/transpiler/redirect/$TypeRedirect"

export class $TypeConverter {
readonly "typeRedirects": $List<$TypeRedirect>

constructor()

public "addTypeRedirect"(redirect: $TypeRedirect$$Type): void
public "convertType"(javaType: $Type$$Type): $BaseType
public "convertType"(descriptor: $TypeDescriptor$$Type): $BaseType
public "convertTypeBuiltin"(descriptor: $TypeDescriptor$$Type): $BaseType
public "convertTypeExcluding"(descriptor: $TypeDescriptor$$Type, excludedRedirect: $TypeRedirect$$Type): $BaseType
public "convertVariableType"(variableType: $VariableType$$Type): $TSVariableType
}
}

declare module "packages/zzzank/probejs/lang/snippet/$SnippetDump" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $Snippet } from "packages/zzzank/probejs/lang/snippet/$Snippet"
import { $List } from "packages/java/util/$List"

export class $SnippetDump {
readonly "snippets": $List<$Snippet>

constructor()

public "fromDocs"(): void
public "snippet"(name: string): $Snippet
public "writeTo"(path: $Path$$Type): void
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/$BaseType" {
import { $JSJoinedType$Intersection } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSJoinedType$Intersection"
import { $ImportShield } from "packages/zzzank/probejs/lang/typescript/code/type/utility/$ImportShield"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Code } from "packages/zzzank/probejs/lang/typescript/code/$Code"
import { $TSArrayType } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSArrayType"
import { $TSParamType } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSParamType"
import { $TSOptionalType } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSOptionalType"
import { $ImportInfos, $ImportInfos$$Type } from "packages/zzzank/probejs/lang/typescript/refer/$ImportInfos"
import { $BaseType$FormatType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType"
import { $JSJoinedType$Union } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSJoinedType$Union"
import { $WithFormatType } from "packages/zzzank/probejs/lang/typescript/code/type/utility/$WithFormatType"
import { $Declaration$$Type } from "packages/zzzank/probejs/lang/typescript/$Declaration"
import { $List } from "packages/java/util/$List"
import { $ContextShield } from "packages/zzzank/probejs/lang/typescript/code/type/utility/$ContextShield"

export class $BaseType extends $Code {
constructor()

public "and"(...types: $BaseType$$Type[]): $JSJoinedType$Intersection
public "asArray"(): $TSArrayType
public "comment"(comment: string): $WithFormatType
public "contextShield"(formatType: $BaseType$FormatType$$Type): $ContextShield<$BaseType>
public "format"(declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): $List<string>
public "getImportInfos"(type: $BaseType$FormatType$$Type): $ImportInfos
public "importShield"(imports: $ImportInfos$$Type): $ImportShield<$BaseType>
public "line"(declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): string
public "line"(declaration: $Declaration$$Type): string
public "optional"(): $TSOptionalType
public "or"(...types: $BaseType$$Type[]): $JSJoinedType$Union
public "withParams"(...params: $BaseType$$Type[]): $TSParamType
public "withParams"(...params: string[]): $TSParamType
public "withParams"(params: $Collection$$Type<$BaseType$$Type>): $TSParamType
public "withPossibleParams"(params: $Collection$$Type<$BaseType$$Type>): $BaseType
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSTupleType" {
import { $JSParam$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSParam"
import { $JSMemberType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSMemberType"
import { $Collection$$Type } from "packages/java/util/$Collection"

export class $JSTupleType extends $JSMemberType {
constructor(members: $Collection$$Type<$JSParam$$Type>)

}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/utility/$ImportShield" {
import { $ImportInfos$$Type } from "packages/zzzank/probejs/lang/typescript/refer/$ImportInfos"
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"

export class $ImportShield<T extends $BaseType> extends $BaseType {
readonly "inner": T

constructor(inner: T, imports: $ImportInfos$$Type)

}
}

declare module "packages/zzzank/probejs/lang/java/clazz/$MemberCollector" {
import { $ConstructorInfo } from "packages/zzzank/probejs/lang/java/clazz/members/$ConstructorInfo"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $FieldInfo } from "packages/zzzank/probejs/lang/java/clazz/members/$FieldInfo"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $MethodInfo } from "packages/zzzank/probejs/lang/java/clazz/members/$MethodInfo"

export interface $MemberCollector {
"accept"(clazz: $Class$$Type<any>): void
"constructors"(): $Stream<$ConstructorInfo>
"fields"(): $Stream<$FieldInfo>
"methods"(): $Stream<$MethodInfo>
}

export namespace $MemberCollector {
const probejs$$marker: never
}
export abstract class $MemberCollector$$Static implements $MemberCollector {
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/utility/$TSUtilityType" {
import { $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $TSParamType } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSParamType"

export interface $TSUtilityType {
}

export namespace $TSUtilityType {
function awaited(promise: $BaseType$$Type): $TSParamType
function capitalize(string: $BaseType$$Type): $TSParamType
function constructorParameters(type: $BaseType$$Type): $TSParamType
function exclude(type: $BaseType$$Type, excludeFilter: $BaseType$$Type): $TSParamType
function extract(type: $BaseType$$Type, extractFilter: $BaseType$$Type): $TSParamType
function instanceType(type: $BaseType$$Type): $TSParamType
function lowerCase(string: $BaseType$$Type): $TSParamType
function noInfer(type: $BaseType$$Type): $TSParamType
function nonNullable(type: $BaseType$$Type): $TSParamType
function omit(type: $BaseType$$Type, keys: $BaseType$$Type): $TSParamType
function omitThisParameter(type: $BaseType$$Type): $TSParamType
function parameters(function_: $BaseType$$Type): $TSParamType
function partial(type: $BaseType$$Type): $TSParamType
function pick(type: $BaseType$$Type, keys: $BaseType$$Type): $TSParamType
function readonly(promise: $BaseType$$Type): $TSParamType
function record(keys: $BaseType$$Type, type: $BaseType$$Type): $TSParamType
function required(type: $BaseType$$Type): $TSParamType
function returnType(type: $BaseType$$Type): $TSParamType
function thisParameterType(type: $BaseType$$Type): $TSParamType
function thisType(type: $BaseType$$Type): $TSParamType
function unCapitalize(string: $BaseType$$Type): $TSParamType
function upperCase(string: $BaseType$$Type): $TSParamType
}
export abstract class $TSUtilityType$$Static implements $TSUtilityType {
static "awaited"(promise: $BaseType$$Type): $TSParamType
static "capitalize"(string: $BaseType$$Type): $TSParamType
static "constructorParameters"(type: $BaseType$$Type): $TSParamType
static "exclude"(type: $BaseType$$Type, excludeFilter: $BaseType$$Type): $TSParamType
static "extract"(type: $BaseType$$Type, extractFilter: $BaseType$$Type): $TSParamType
static "instanceType"(type: $BaseType$$Type): $TSParamType
static "lowerCase"(string: $BaseType$$Type): $TSParamType
static "noInfer"(type: $BaseType$$Type): $TSParamType
static "nonNullable"(type: $BaseType$$Type): $TSParamType
static "omit"(type: $BaseType$$Type, keys: $BaseType$$Type): $TSParamType
static "omitThisParameter"(type: $BaseType$$Type): $TSParamType
static "parameters"(function_: $BaseType$$Type): $TSParamType
static "partial"(type: $BaseType$$Type): $TSParamType
static "pick"(type: $BaseType$$Type, keys: $BaseType$$Type): $TSParamType
static "readonly"(promise: $BaseType$$Type): $TSParamType
static "record"(keys: $BaseType$$Type, type: $BaseType$$Type): $TSParamType
static "required"(type: $BaseType$$Type): $TSParamType
static "returnType"(type: $BaseType$$Type): $TSParamType
static "thisParameterType"(type: $BaseType$$Type): $TSParamType
static "thisType"(type: $BaseType$$Type): $TSParamType
static "unCapitalize"(string: $BaseType$$Type): $TSParamType
static "upperCase"(string: $BaseType$$Type): $TSParamType
}
}

declare module "packages/zzzank/probejs/lang/java/base/$TypeVariableHolder" {
import { $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $VariableType } from "packages/zzzank/probejs/lang/java/type/impl/$VariableType"
import { $List } from "packages/java/util/$List"
import { $AnnotationHolder } from "packages/zzzank/probejs/lang/java/base/$AnnotationHolder"
import { $TypeVariable$$Type } from "packages/java/lang/reflect/$TypeVariable"

export class $TypeVariableHolder extends $AnnotationHolder {
readonly "variableTypes": $List<$VariableType>

constructor(variables: $TypeVariable$$Type<any>[], annotations: $Annotation$$Type[])

}
}

declare module "packages/zzzank/probejs/lang/typescript/code/ts/$FunctionDeclaration" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $TSVariableType, $TSVariableType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ParamDecl, $ParamDecl$$Type } from "packages/zzzank/probejs/lang/typescript/code/member/$ParamDecl"
import { $CommentableCode } from "packages/zzzank/probejs/lang/typescript/code/$CommentableCode"

export class $FunctionDeclaration extends $CommentableCode {
readonly "params": $List<$ParamDecl>
readonly "variableTypes": $List<$TSVariableType>

constructor(name: string, variableTypes: $List$$Type<$TSVariableType$$Type>, params: $List$$Type<$ParamDecl$$Type>, returnType: $BaseType$$Type)

get "name"(): string
set "name"(value: string)
get "returnType"(): $BaseType
set "returnType"(value: $BaseType$$Type)
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSMemberType" {
import { $JSParam, $JSParam$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSParam"
import { $BaseType } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"

export class $JSMemberType extends $BaseType {
readonly "members": $Collection<$JSParam>

constructor(members: $Collection$$Type<$JSParam$$Type>)

}
}

declare module "packages/zzzank/probejs/lang/typescript/code/$Code" {
import { $ImportInfos } from "packages/zzzank/probejs/lang/typescript/refer/$ImportInfos"
import { $Declaration$$Type } from "packages/zzzank/probejs/lang/typescript/$Declaration"
import { $List } from "packages/java/util/$List"

export class $Code {
constructor()

public "format"(declaration: $Declaration$$Type): $List<string>
public "getImportInfos"(): $ImportInfos
get "importInfos"(): $ImportInfos
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/member/$ConstructorDecl$BuilderBase" {
import { $ConstructorDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$ConstructorDecl"
import { $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $TSVariableType, $TSVariableType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $ParamDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$ParamDecl"

export class $ConstructorDecl$BuilderBase<SELF extends $ConstructorDecl$BuilderBase<SELF>> {
readonly "params": $List<$ParamDecl>
readonly "variableTypes": $List<$TSVariableType>

constructor()

public "buildAsConstructor"(): $ConstructorDecl
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean, isVarArg: boolean): SELF
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean): SELF
public "param"(symbol: string, type: $BaseType$$Type): SELF
public "typeVariables"(variableTypes: $Collection$$Type<$TSVariableType$$Type>): SELF
public "typeVariables"(...variableTypes: $TSVariableType$$Type[]): SELF
public "typeVariables"(...symbols: string[]): SELF
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/member/$TypeDecl" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $BaseType$FormatType, $BaseType$FormatType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType"
import { $TSVariableType, $TSVariableType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $CommentableCode } from "packages/zzzank/probejs/lang/typescript/code/$CommentableCode"

export class $TypeDecl extends $CommentableCode {
constructor(exportDecl: boolean, name: string, symbolVariables: $List$$Type<$TSVariableType$$Type>, type: $BaseType$$Type, typeFormat: $BaseType$FormatType$$Type)
constructor(name: string, symbolVariables: $List$$Type<$TSVariableType$$Type>, type: $BaseType$$Type)
constructor(name: string, type: $BaseType$$Type)

public "setTypeFormat"(typeFormat: $BaseType$FormatType$$Type): $TypeDecl
get "exportDecl"(): boolean
set "exportDecl"(value: boolean)
get "name"(): string
set "name"(value: string)
get "symbolVariables"(): $List<$TSVariableType>
set "symbolVariables"(value: $List$$Type<$TSVariableType$$Type>)
get "type"(): $BaseType
set "type"(value: $BaseType$$Type)
get "typeFormat"(): $BaseType$FormatType
set "typeFormat"(value: $BaseType$FormatType$$Type)
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSLambdaType$BuilderBase" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $List } from "packages/java/util/$List"
import { $ParamDecl } from "packages/zzzank/probejs/lang/typescript/code/member/$ParamDecl"
import { $JSLambdaType } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSLambdaType"

export class $JSLambdaType$BuilderBase<SELF extends $JSLambdaType$BuilderBase<SELF>> {
readonly "params": $List<$ParamDecl>
"returnType": $BaseType

constructor()

public "build"(): $JSLambdaType
public "param"(symbol: string, type: $BaseType$$Type): SELF
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean, isVarArg: boolean): SELF
public "param"(symbol: string, type: $BaseType$$Type, isOptional: boolean): SELF
public "returnType"(type: $BaseType$$Type): SELF
}
}

declare module "packages/zzzank/probejs/lang/java/base/$ClassProvider" {
import { $Collection } from "packages/java/util/$Collection"
import { $Class } from "packages/java/lang/$Class"

export interface $ClassProvider {
"getClasses"(): $Collection<$Class<any>>
get "classes"(): $Collection<$Class<any>>
}

export namespace $ClassProvider {
const probejs$$marker: never
}
export abstract class $ClassProvider$$Static implements $ClassProvider {
}
}

declare module "packages/zzzank/probejs/events/$AddGlobalEventJS" {
import { $Code$$Type } from "packages/zzzank/probejs/lang/typescript/code/$Code"
import { $ScriptEventJS } from "packages/zzzank/probejs/events/$ScriptEventJS"
import { $ScriptDump$$Type } from "packages/zzzank/probejs/lang/typescript/$ScriptDump"

export class $AddGlobalEventJS extends $ScriptEventJS {
constructor(scriptDump: $ScriptDump$$Type)

public "addGlobal"(identifier: string, ...content: $Code$$Type[]): void
public "addGlobal"(identifier: string, excludedNames: string[], ...content: $Code$$Type[]): void
}
}

declare module "packages/zzzank/probejs/api/dump/$TSFilesDump" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $TSFileWriter$$Type } from "packages/zzzank/probejs/api/output/$TSFileWriter"
import { $TypeScriptFile, $TypeScriptFile$$Type } from "packages/zzzank/probejs/lang/typescript/$TypeScriptFile"
import { $TSDumpBase } from "packages/zzzank/probejs/api/dump/$TSDumpBase"

export class $TSFilesDump extends $TSDumpBase {
readonly "modifiers": $List<$Predicate<$TypeScriptFile>>

constructor(writeTo: $Path$$Type)
constructor(writer: $TSFileWriter$$Type, writeTo: $Path$$Type)

public "clearFiles"(): void
public "ensureFolder"(): void
get "files"(): $Collection<$TypeScriptFile>
set "files"(value: $Collection$$Type<$TypeScriptFile$$Type>)
}
}

declare module "packages/zzzank/probejs/lang/snippet/parts/$SnippetPart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SnippetPart {
"format"(): string
}

export namespace $SnippetPart {
const probejs$$marker: never
}
export abstract class $SnippetPart$$Static implements $SnippetPart {
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/member/$ParamDecl" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $BaseType$FormatType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType$FormatType"
import { $Declaration$$Type } from "packages/zzzank/probejs/lang/typescript/$Declaration"
import { $List$$Type } from "packages/java/util/$List"

export class $ParamDecl {
constructor(name: string, type: $BaseType$$Type, varArg: boolean, optional: boolean)
constructor(name: string, type: $BaseType$$Type)

public "format"(i: integer, declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): string
public static "formatParams"(params: $List$$Type<$ParamDecl$$Type>, declaration: $Declaration$$Type): string
public static "formatParams"(params: $List$$Type<$ParamDecl$$Type>, declaration: $Declaration$$Type, formatType: $BaseType$FormatType$$Type): string
get "name"(): string
set "name"(value: string)
get "optional"(): boolean
set "optional"(value: boolean)
get "type"(): $BaseType
set "type"(value: $BaseType$$Type)
get "varArg"(): boolean
set "varArg"(value: boolean)
}
}

declare module "packages/zzzank/probejs/events/$SnippetGenerationEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $SnippetDump$$Type } from "packages/zzzank/probejs/lang/snippet/$SnippetDump"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Snippet$$Type } from "packages/zzzank/probejs/lang/snippet/$Snippet"

export class $SnippetGenerationEventJS extends $EventJS {
constructor(dump: $SnippetDump$$Type)

public "create"(name: string, handler: $Consumer$$Type<$Snippet$$Type>): void
}
}

declare module "packages/zzzank/probejs/lang/typescript/refer/$ImportInfo" {
import { $ImportType, $ImportType$$Type } from "packages/zzzank/probejs/lang/typescript/refer/$ImportType"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClassPath, $ClassPath$$Type } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"

export class $ImportInfo {
readonly "path": $ClassPath

public "addType"(type: $ImportType$$Type): $ImportInfo
public "addTypes"(...types: $ImportType$$Type[]): $ImportInfo
public "getTypes"(): $Stream<$ImportType>
public "mergeWith"(addition: $ImportInfo$$Type): $ImportInfo
public static "of"(path: $ClassPath$$Type): $ImportInfo
public static "ofDefault"(path: $ClassPath$$Type): $ImportInfo
public static "ofOriginal"(path: $ClassPath$$Type): $ImportInfo
public static "ofStatic"(path: $ClassPath$$Type): $ImportInfo
public static "ofType"(path: $ClassPath$$Type): $ImportInfo
get "imports"(): integer
set "imports"(value: integer)
get "types"(): $Stream<$ImportType>
}
}

declare module "packages/zzzank/probejs/lang/java/clazz/$Clazz" {
import { $Clazz$ClassAttribute } from "packages/zzzank/probejs/lang/java/clazz/$Clazz$ClassAttribute"
import { $ConstructorInfo } from "packages/zzzank/probejs/lang/java/clazz/members/$ConstructorInfo"
import { $TypeDescriptor } from "packages/zzzank/probejs/lang/java/type/$TypeDescriptor"
import { $List } from "packages/java/util/$List"
import { $FieldInfo } from "packages/zzzank/probejs/lang/java/clazz/members/$FieldInfo"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $MemberCollector$$Type } from "packages/zzzank/probejs/lang/java/clazz/$MemberCollector"
import { $MethodInfo } from "packages/zzzank/probejs/lang/java/clazz/members/$MethodInfo"
import { $ClassPath } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"
import { $TypeVariableHolder } from "packages/zzzank/probejs/lang/java/base/$TypeVariableHolder"

export class $Clazz extends $TypeVariableHolder {
readonly "attribute": $Clazz$ClassAttribute
readonly "classPath": $ClassPath
readonly "constructors": $List<$ConstructorInfo>
readonly "fields": $List<$FieldInfo>
readonly "interfaces": $List<$TypeDescriptor>
readonly "methods": $List<$MethodInfo>
readonly "superClass": $TypeDescriptor

constructor(clazz: $Class$$Type<any>, collector: $MemberCollector$$Type)

public "getOriginal"(): $Class<any>
public "isInterface"(): boolean
get "original"(): $Class<any>
get "interface"(): boolean
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/ts/$TSVariableType" {
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"

export class $TSVariableType extends $BaseType {
constructor(symbol: string, extend: $BaseType$$Type, defaultTo: $BaseType$$Type)

get "defaultTo"(): $BaseType
set "defaultTo"(value: $BaseType$$Type)
get "extend"(): $BaseType
set "extend"(value: $BaseType$$Type)
get "symbol"(): string
set "symbol"(value: string)
}
}

declare module "packages/zzzank/probejs/lang/typescript/$RequestAwareFiles" {
import { $Set } from "packages/java/util/$Set"
import { $Code, $Code$$Type } from "packages/zzzank/probejs/lang/typescript/code/$Code"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $TypeScriptFile, $TypeScriptFile$$Type } from "packages/zzzank/probejs/lang/typescript/$TypeScriptFile"
import { $ClassPath, $ClassPath$$Type } from "packages/zzzank/probejs/lang/java/clazz/$ClassPath"
import { $ScriptDump, $ScriptDump$$Type } from "packages/zzzank/probejs/lang/typescript/$ScriptDump"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $RequestAwareFiles {
constructor(globalFiles: $Map$$Type<$ClassPath$$Type, $TypeScriptFile$$Type>, scriptDump: $ScriptDump$$Type)

public "globalFiles"(): $Map<$ClassPath, $TypeScriptFile>
public "markRequested"(path: $ClassPath$$Type): void
public "request"(clazz: $Class$$Type<any>): $TypeScriptFile
public "request"(path: $ClassPath$$Type): $TypeScriptFile
public "requestCode"<T extends $Code>(clazz: $Class$$Type<any>, codeType: $Class$$Type<T>): T
public "requestOrCreate"(path: $ClassPath$$Type): $TypeScriptFile
public "requested"(): $Set<$ClassPath>
public "scriptDump"(): $ScriptDump
public "scriptType"(): $ScriptType
public "unRequest"(path: $ClassPath$$Type): void
}
}

declare module "packages/zzzank/probejs/lang/typescript/code/type/js/$JSMemberType$Builder" {
import { $JSParam, $JSParam$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/js/$JSParam"
import { $BaseType, $BaseType$$Type } from "packages/zzzank/probejs/lang/typescript/code/type/$BaseType"
import { $Collection } from "packages/java/util/$Collection"

export class $JSMemberType$Builder<SELF extends $JSMemberType$Builder<SELF, OUT>, OUT extends $BaseType> {
readonly "members": $Collection<$JSParam>

constructor()

public "build"(): OUT
public "literalMember"(name: string, optional: boolean, type: $BaseType$$Type): SELF
public "literalMember"(name: string, type: $BaseType$$Type): SELF
public "member"(name: string, optional: boolean, type: $BaseType$$Type): SELF
public "member"(param: $JSParam$$Type): SELF
public "member"(name: string, type: $BaseType$$Type): SELF
}
}

