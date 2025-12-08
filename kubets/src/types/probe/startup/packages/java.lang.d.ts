declare module "packages/java/lang/$ClassLoader" {
import { $Package } from "packages/java/lang/$Package"
import { $Module } from "packages/java/lang/$Module"
import { $Enumeration } from "packages/java/util/$Enumeration"
import { $Class } from "packages/java/lang/$Class"
import { $InputStream } from "packages/java/io/$InputStream"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $URL } from "packages/java/net/$URL"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ClassLoader {
public "clearAssertionStatus"(): void
public "getDefinedPackage"(string0: string): $Package
public "getDefinedPackages"(): $Package[]
public "getName"(): string
public "getParent"(): $ClassLoader
public static "getPlatformClassLoader"(): $ClassLoader
public "getResource"(string0: string): $URL
public "getResourceAsStream"(string0: string): $InputStream
public "getResources"(string0: string): $Enumeration<$URL>
public static "getSystemClassLoader"(): $ClassLoader
public static "getSystemResource"(string0: string): $URL
public static "getSystemResourceAsStream"(string0: string): $InputStream
public static "getSystemResources"(string0: string): $Enumeration<$URL>
public "getUnnamedModule"(): $Module
public "isRegisteredAsParallelCapable"(): boolean
public "loadClass"(string0: string): $Class<any>
public "resources"(string0: string): $Stream<$URL>
public "setClassAssertionStatus"(string0: string, boolean1: boolean): void
public "setDefaultAssertionStatus"(boolean0: boolean): void
public "setPackageAssertionStatus"(string0: string, boolean1: boolean): void
get "definedPackages"(): $Package[]
get "name"(): string
get "parent"(): $ClassLoader
get "unnamedModule"(): $Module
get "registeredAsParallelCapable"(): boolean
set "defaultAssertionStatus"(value: boolean)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClassLoader$$Type = ($ClassLoader);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClassLoader_ = $ClassLoader$$Type;
}
}

declare module "packages/java/lang/reflect/$Parameter" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Type } from "packages/java/lang/reflect/$Type"
import { $AnnotatedType } from "packages/java/lang/reflect/$AnnotatedType"
import { $AnnotatedElement } from "packages/java/lang/reflect/$AnnotatedElement"
import { $Executable } from "packages/java/lang/reflect/$Executable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Parameter implements $AnnotatedElement {
public "getAnnotatedType"(): $AnnotatedType
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaringExecutable"(): $Executable
public "getModifiers"(): integer
public "getName"(): string
public "getParameterizedType"(): $Type
public "getType"(): $Class<any>
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
public "isImplicit"(): boolean
public "isNamePresent"(): boolean
public "isSynthetic"(): boolean
public "isVarArgs"(): boolean
get "annotatedType"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "declaringExecutable"(): $Executable
get "modifiers"(): integer
get "name"(): string
get "parameterizedType"(): $Type
get "type"(): $Class<any>
get "implicit"(): boolean
get "namePresent"(): boolean
get "synthetic"(): boolean
get "varArgs"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Parameter$$Type = ($Parameter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Parameter_ = $Parameter$$Type;
}
}

declare module "packages/java/lang/module/$ResolvedModule" {
import { $Set } from "packages/java/util/$Set"
import { $Configuration } from "packages/java/lang/module/$Configuration"
import { $ModuleReference } from "packages/java/lang/module/$ModuleReference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ResolvedModule {
public "configuration"(): $Configuration
public "name"(): string
public "reads"(): $Set<$ResolvedModule>
public "reference"(): $ModuleReference
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResolvedModule$$Type = ($ResolvedModule);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResolvedModule_ = $ResolvedModule$$Type;
}
}

declare module "packages/java/lang/invoke/$TypeDescriptor$OfField" {
import { $TypeDescriptor } from "packages/java/lang/invoke/$TypeDescriptor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor$OfField<F extends $TypeDescriptor$OfField<F>> extends $TypeDescriptor {
"arrayType"(): F
"componentType"(): F
"descriptorString"(): string
"isArray"(): boolean
"isPrimitive"(): boolean
get "array"(): boolean
get "primitive"(): boolean
}

export namespace $TypeDescriptor$OfField {
const probejs$$marker: never
}
export abstract class $TypeDescriptor$OfField$$Static<F extends $TypeDescriptor$OfField<F>> implements $TypeDescriptor$OfField<F> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypeDescriptor$OfField$$Type<F extends $TypeDescriptor$OfField<F>> = ($TypeDescriptor$OfField<F>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypeDescriptor$OfField_<F extends $TypeDescriptor$OfField<F>> = $TypeDescriptor$OfField$$Type<F>;
}
}

declare module "packages/java/lang/$Integer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Integer$$Type = ($Integer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Integer_ = $Integer$$Type;
}
}

declare module "packages/java/lang/reflect/$AnnotatedType" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Type } from "packages/java/lang/reflect/$Type"
import { $AnnotatedElement } from "packages/java/lang/reflect/$AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AnnotatedType extends $AnnotatedElement {
"getAnnotatedOwnerType"(): $AnnotatedType
"getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getAnnotations"(): $Annotation[]
"getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getDeclaredAnnotations"(): $Annotation[]
"getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getType"(): $Type
"isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "annotatedOwnerType"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "type"(): $Type
}

export namespace $AnnotatedType {
const probejs$$marker: never
}
export abstract class $AnnotatedType$$Static implements $AnnotatedType {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnnotatedType$$Type = ($AnnotatedType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnnotatedType_ = $AnnotatedType$$Type;
}
}

declare module "packages/java/lang/$Exception" {
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Exception extends $Throwable {
constructor(throwable0: $Throwable$$Type)
constructor(string0: string, throwable1: $Throwable$$Type)
constructor(string0: string)
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Exception$$Type = ($Exception);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Exception_ = $Exception$$Type;
}
}

declare module "packages/java/lang/ref/$WeakReference" {
import { $Reference } from "packages/java/lang/ref/$Reference"
import { $ReferenceQueue$$Type } from "packages/java/lang/ref/$ReferenceQueue"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $WeakReference<T> extends $Reference<T> {
constructor(t0: T)
constructor(t0: T, referenceQueue1: $ReferenceQueue$$Type<T>)

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WeakReference$$Type<T> = ($WeakReference<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WeakReference_<T> = $WeakReference$$Type<T>;
}
}

declare module "packages/java/lang/$Thread$UncaughtExceptionHandler" {
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Thread, $Thread$$Type } from "packages/java/lang/$Thread"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Thread$UncaughtExceptionHandler {
"uncaughtException"(thread0: $Thread$$Type, throwable1: $Throwable$$Type): void
}

export namespace $Thread$UncaughtExceptionHandler {
const probejs$$marker: never
}
export abstract class $Thread$UncaughtExceptionHandler$$Static implements $Thread$UncaughtExceptionHandler {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Thread$UncaughtExceptionHandler$$Type = ($Thread$UncaughtExceptionHandler | ((arg0: $Thread, arg1: $Throwable) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Thread$UncaughtExceptionHandler_ = $Thread$UncaughtExceptionHandler$$Type;
}
}

declare module "packages/java/lang/$ThreadGroup" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Thread$$Type } from "packages/java/lang/$Thread"
import { $Thread$UncaughtExceptionHandler } from "packages/java/lang/$Thread$UncaughtExceptionHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ThreadGroup implements $Thread$UncaughtExceptionHandler {
constructor(string0: string)
constructor(threadGroup0: $ThreadGroup$$Type, string1: string)

public "activeCount"(): integer
public "activeGroupCount"(): integer
/** @deprecated */
public "allowThreadSuspension"(boolean0: boolean): boolean
/** @deprecated */
public "checkAccess"(): void
/** @deprecated */
public "destroy"(): void
public "enumerate"(threadGroup0s: $ThreadGroup$$Type[], boolean1: boolean): integer
public "enumerate"(thread0s: $Thread$$Type[], boolean1: boolean): integer
public "enumerate"(threadGroup0s: $ThreadGroup$$Type[]): integer
public "enumerate"(thread0s: $Thread$$Type[]): integer
public "getMaxPriority"(): integer
public "getName"(): string
public "getParent"(): $ThreadGroup
public "interrupt"(): void
/** @deprecated */
public "isDaemon"(): boolean
/** @deprecated */
public "isDestroyed"(): boolean
public "list"(): void
public "parentOf"(threadGroup0: $ThreadGroup$$Type): boolean
/** @deprecated */
public "resume"(): void
/** @deprecated */
public "setDaemon"(boolean0: boolean): void
public "setMaxPriority"(int0: integer): void
/** @deprecated */
public "stop"(): void
/** @deprecated */
public "suspend"(): void
public "uncaughtException"(thread0: $Thread$$Type, throwable1: $Throwable$$Type): void
get "maxPriority"(): integer
get "name"(): string
get "parent"(): $ThreadGroup
get "daemon"(): boolean
get "destroyed"(): boolean
set "daemon"(value: boolean)
set "maxPriority"(value: integer)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ThreadGroup$$Type = ($ThreadGroup);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ThreadGroup_ = $ThreadGroup$$Type;
}
}

declare module "packages/java/lang/$Module" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $ModuleDescriptor } from "packages/java/lang/module/$ModuleDescriptor"
import { $Set } from "packages/java/util/$Set"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $ClassLoader } from "packages/java/lang/$ClassLoader"
import { $InputStream } from "packages/java/io/$InputStream"
import { $AnnotatedElement } from "packages/java/lang/reflect/$AnnotatedElement"
import { $ModuleLayer } from "packages/java/lang/$ModuleLayer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Module implements $AnnotatedElement {
public "addExports"(string0: string, module1: $Module$$Type): $Module
public "addOpens"(string0: string, module1: $Module$$Type): $Module
public "addReads"(module0: $Module$$Type): $Module
public "addUses"(class0: $Class$$Type<any>): $Module
public "canRead"(module0: $Module$$Type): boolean
public "canUse"(class0: $Class$$Type<any>): boolean
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getClassLoader"(): $ClassLoader
public "getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDescriptor"(): $ModuleDescriptor
public "getLayer"(): $ModuleLayer
public "getName"(): string
public "getPackages"(): $Set<string>
public "getResourceAsStream"(string0: string): $InputStream
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
public "isExported"(string0: string): boolean
public "isExported"(string0: string, module1: $Module$$Type): boolean
public "isNamed"(): boolean
public "isOpen"(string0: string): boolean
public "isOpen"(string0: string, module1: $Module$$Type): boolean
get "annotations"(): $Annotation[]
get "classLoader"(): $ClassLoader
get "declaredAnnotations"(): $Annotation[]
get "descriptor"(): $ModuleDescriptor
get "layer"(): $ModuleLayer
get "name"(): string
get "packages"(): $Set<string>
get "named"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Module$$Type = ($Module);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Module_ = $Module$$Type;
}
}

declare module "packages/java/lang/reflect/$RecordComponent" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Type } from "packages/java/lang/reflect/$Type"
import { $Method } from "packages/java/lang/reflect/$Method"
import { $AnnotatedType } from "packages/java/lang/reflect/$AnnotatedType"
import { $AnnotatedElement } from "packages/java/lang/reflect/$AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $RecordComponent implements $AnnotatedElement {
public "getAccessor"(): $Method
public "getAnnotatedType"(): $AnnotatedType
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaringRecord"(): $Class<any>
public "getGenericSignature"(): string
public "getGenericType"(): $Type
public "getName"(): string
public "getType"(): $Class<any>
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "accessor"(): $Method
get "annotatedType"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "declaringRecord"(): $Class<any>
get "genericSignature"(): string
get "genericType"(): $Type
get "name"(): string
get "type"(): $Class<any>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecordComponent$$Type = ($RecordComponent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecordComponent_ = $RecordComponent$$Type;
}
}

declare module "packages/java/lang/$NamedPackage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NamedPackage {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NamedPackage$$Type = ($NamedPackage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NamedPackage_ = $NamedPackage$$Type;
}
}

declare module "packages/java/lang/ref/$ReferenceQueue" {
import { $Reference } from "packages/java/lang/ref/$Reference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ReferenceQueue<T> {
constructor()

public "poll"(): $Reference<T>
public "remove"(long0: long): $Reference<T>
public "remove"(): $Reference<T>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReferenceQueue$$Type<T> = ($ReferenceQueue<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReferenceQueue_<T> = $ReferenceQueue$$Type<T>;
}
}

declare module "packages/java/lang/$Long" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Long$$Type = ($Long);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Long_ = $Long$$Type;
}
}

declare module "packages/java/lang/$StackTraceElement" {
import { $Serializable } from "packages/java/io/$Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $StackTraceElement implements $Serializable {
constructor(string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, int6: integer)
constructor(string0: string, string1: string, string2: string, int3: integer)

public "getClassLoaderName"(): string
public "getClassName"(): string
public "getFileName"(): string
public "getLineNumber"(): integer
public "getMethodName"(): string
public "getModuleName"(): string
public "getModuleVersion"(): string
public "isNativeMethod"(): boolean
get "classLoaderName"(): string
get "className"(): string
get "fileName"(): string
get "lineNumber"(): integer
get "methodName"(): string
get "moduleName"(): string
get "moduleVersion"(): string
get "nativeMethod"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StackTraceElement$$Type = ($StackTraceElement);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StackTraceElement_ = $StackTraceElement$$Type;
}
}

declare module "packages/java/lang/invoke/$TypeDescriptor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor {
"descriptorString"(): string
}

export namespace $TypeDescriptor {
const probejs$$marker: never
}
export abstract class $TypeDescriptor$$Static implements $TypeDescriptor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypeDescriptor$$Type = ($TypeDescriptor | (() => string));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypeDescriptor_ = $TypeDescriptor$$Type;
}
}

declare module "packages/java/lang/$Math" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Math {
static readonly "E": double
static readonly "PI": double

public static "IEEEremainder"(double0: double, double1: double): double
public static "abs"(int0: integer): integer
public static "abs"(long0: long): long
public static "abs"(float0: float): float
public static "abs"(double0: double): double
public static "absExact"(long0: long): long
public static "absExact"(int0: integer): integer
public static "acos"(double0: double): double
public static "addExact"(int0: integer, int1: integer): integer
public static "addExact"(long0: long, long1: long): long
public static "asin"(double0: double): double
public static "atan"(double0: double): double
public static "atan2"(double0: double, double1: double): double
public static "cbrt"(double0: double): double
public static "ceil"(double0: double): double
public static "copySign"(float0: float, float1: float): float
public static "copySign"(double0: double, double1: double): double
public static "cos"(double0: double): double
public static "cosh"(double0: double): double
public static "decrementExact"(long0: long): long
public static "decrementExact"(int0: integer): integer
public static "exp"(double0: double): double
public static "expm1"(double0: double): double
public static "floor"(double0: double): double
public static "floorDiv"(long0: long, long1: long): long
public static "floorDiv"(long0: long, int1: integer): long
public static "floorDiv"(int0: integer, int1: integer): integer
public static "floorMod"(long0: long, int1: integer): integer
public static "floorMod"(long0: long, long1: long): long
public static "floorMod"(int0: integer, int1: integer): integer
public static "fma"(double0: double, double1: double, double2: double): double
public static "fma"(float0: float, float1: float, float2: float): float
public static "getExponent"(float0: float): integer
public static "getExponent"(double0: double): integer
public static "hypot"(double0: double, double1: double): double
public static "incrementExact"(int0: integer): integer
public static "incrementExact"(long0: long): long
public static "log"(double0: double): double
public static "log10"(double0: double): double
public static "log1p"(double0: double): double
public static "max"(int0: integer, int1: integer): integer
public static "max"(float0: float, float1: float): float
public static "max"(long0: long, long1: long): long
public static "max"(double0: double, double1: double): double
public static "min"(int0: integer, int1: integer): integer
public static "min"(float0: float, float1: float): float
public static "min"(long0: long, long1: long): long
public static "min"(double0: double, double1: double): double
public static "multiplyExact"(int0: integer, int1: integer): integer
public static "multiplyExact"(long0: long, long1: long): long
public static "multiplyExact"(long0: long, int1: integer): long
public static "multiplyFull"(int0: integer, int1: integer): long
public static "multiplyHigh"(long0: long, long1: long): long
public static "negateExact"(long0: long): long
public static "negateExact"(int0: integer): integer
public static "nextAfter"(double0: double, double1: double): double
public static "nextAfter"(float0: float, double1: double): float
public static "nextDown"(float0: float): float
public static "nextDown"(double0: double): double
public static "nextUp"(double0: double): double
public static "nextUp"(float0: float): float
public static "pow"(double0: double, double1: double): double
public static "random"(): double
public static "rint"(double0: double): double
public static "round"(float0: float): integer
public static "round"(double0: double): long
public static "scalb"(double0: double, int1: integer): double
public static "scalb"(float0: float, int1: integer): float
public static "signum"(float0: float): float
public static "signum"(double0: double): double
public static "sin"(double0: double): double
public static "sinh"(double0: double): double
public static "sqrt"(double0: double): double
public static "subtractExact"(int0: integer, int1: integer): integer
public static "subtractExact"(long0: long, long1: long): long
public static "tan"(double0: double): double
public static "tanh"(double0: double): double
public static "toDegrees"(double0: double): double
public static "toIntExact"(long0: long): integer
public static "toRadians"(double0: double): double
public static "ulp"(float0: float): float
public static "ulp"(double0: double): double
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Math$$Type = ($Math);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Math_ = $Math$$Type;
}
}

declare module "packages/java/lang/module/$ModuleDescriptor$Version" {
import { $Comparable } from "packages/java/lang/$Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Version implements $Comparable<$ModuleDescriptor$Version> {
public "compareTo"(version0: $ModuleDescriptor$Version$$Type): integer
public static "parse"(string0: string): $ModuleDescriptor$Version
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleDescriptor$Version$$Type = ($ModuleDescriptor$Version);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleDescriptor$Version_ = $ModuleDescriptor$Version$$Type;
}
}

declare module "packages/java/lang/$Runnable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Runnable$$Type = ($Runnable | (() => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Runnable_ = $Runnable$$Type;
}
}

declare module "packages/java/lang/module/$ModuleDescriptor$Builder" {
import { $ModuleDescriptor } from "packages/java/lang/module/$ModuleDescriptor"
import { $ModuleDescriptor$Provides$$Type } from "packages/java/lang/module/$ModuleDescriptor$Provides"
import { $ModuleDescriptor$Version$$Type } from "packages/java/lang/module/$ModuleDescriptor$Version"
import { $ModuleDescriptor$Exports$Modifier$$Type } from "packages/java/lang/module/$ModuleDescriptor$Exports$Modifier"
import { $ModuleDescriptor$Requires$$Type } from "packages/java/lang/module/$ModuleDescriptor$Requires"
import { $ModuleDescriptor$Exports$$Type } from "packages/java/lang/module/$ModuleDescriptor$Exports"
import { $Set$$Type } from "packages/java/util/$Set"
import { $ModuleDescriptor$Opens$Modifier$$Type } from "packages/java/lang/module/$ModuleDescriptor$Opens$Modifier"
import { $List$$Type } from "packages/java/util/$List"
import { $ModuleDescriptor$Requires$Modifier$$Type } from "packages/java/lang/module/$ModuleDescriptor$Requires$Modifier"
import { $ModuleDescriptor$Opens$$Type } from "packages/java/lang/module/$ModuleDescriptor$Opens"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Builder {
public "build"(): $ModuleDescriptor
public "exports"(string0: string): $ModuleDescriptor$Builder
public "exports"(set0: $Set$$Type<$ModuleDescriptor$Exports$Modifier$$Type>, string1: string, set2: $Set$$Type<string>): $ModuleDescriptor$Builder
public "exports"(string0: string, set1: $Set$$Type<string>): $ModuleDescriptor$Builder
public "exports"(set0: $Set$$Type<$ModuleDescriptor$Exports$Modifier$$Type>, string1: string): $ModuleDescriptor$Builder
public "exports"(exports0: $ModuleDescriptor$Exports$$Type): $ModuleDescriptor$Builder
public "mainClass"(string0: string): $ModuleDescriptor$Builder
public "opens"(string0: string): $ModuleDescriptor$Builder
public "opens"(set0: $Set$$Type<$ModuleDescriptor$Opens$Modifier$$Type>, string1: string, set2: $Set$$Type<string>): $ModuleDescriptor$Builder
public "opens"(string0: string, set1: $Set$$Type<string>): $ModuleDescriptor$Builder
public "opens"(opens0: $ModuleDescriptor$Opens$$Type): $ModuleDescriptor$Builder
public "opens"(set0: $Set$$Type<$ModuleDescriptor$Opens$Modifier$$Type>, string1: string): $ModuleDescriptor$Builder
public "packages"(set0: $Set$$Type<string>): $ModuleDescriptor$Builder
public "provides"(provides0: $ModuleDescriptor$Provides$$Type): $ModuleDescriptor$Builder
public "provides"(string0: string, list1: $List$$Type<string>): $ModuleDescriptor$Builder
public "requires"(requires0: $ModuleDescriptor$Requires$$Type): $ModuleDescriptor$Builder
public "requires"(set0: $Set$$Type<$ModuleDescriptor$Requires$Modifier$$Type>, string1: string, version2: $ModuleDescriptor$Version$$Type): $ModuleDescriptor$Builder
public "requires"(string0: string): $ModuleDescriptor$Builder
public "requires"(set0: $Set$$Type<$ModuleDescriptor$Requires$Modifier$$Type>, string1: string): $ModuleDescriptor$Builder
public "uses"(string0: string): $ModuleDescriptor$Builder
public "version"(string0: string): $ModuleDescriptor$Builder
public "version"(version0: $ModuleDescriptor$Version$$Type): $ModuleDescriptor$Builder
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleDescriptor$Builder$$Type = ($ModuleDescriptor$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleDescriptor$Builder_ = $ModuleDescriptor$Builder$$Type;
}
}

declare module "packages/java/lang/$Readable" {
import { $CharBuffer, $CharBuffer$$Type } from "packages/java/nio/$CharBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Readable {
"read"(charBuffer0: $CharBuffer$$Type): integer
}

export namespace $Readable {
const probejs$$marker: never
}
export abstract class $Readable$$Static implements $Readable {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Readable$$Type = ($Readable | ((arg0: $CharBuffer) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Readable_ = $Readable$$Type;
}
}

declare module "packages/java/lang/reflect/$AnnotatedElement" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class$$Type } from "packages/java/lang/$Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AnnotatedElement {
"getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getAnnotations"(): $Annotation[]
"getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getDeclaredAnnotations"(): $Annotation[]
"getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
}

export namespace $AnnotatedElement {
const probejs$$marker: never
}
export abstract class $AnnotatedElement$$Static implements $AnnotatedElement {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnnotatedElement$$Type = ($AnnotatedElement);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnnotatedElement_ = $AnnotatedElement$$Type;
}
}

declare module "packages/java/lang/constant/$MethodHandleDesc" {
import { $MethodHandles$Lookup$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup"
import { $DirectMethodHandleDesc$Kind$$Type } from "packages/java/lang/constant/$DirectMethodHandleDesc$Kind"
import { $ClassDesc$$Type } from "packages/java/lang/constant/$ClassDesc"
import { $MethodTypeDesc, $MethodTypeDesc$$Type } from "packages/java/lang/constant/$MethodTypeDesc"
import { $ConstantDesc } from "packages/java/lang/constant/$ConstantDesc"
import { $DirectMethodHandleDesc } from "packages/java/lang/constant/$DirectMethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodHandleDesc extends $ConstantDesc {
"asType"(methodTypeDesc0: $MethodTypeDesc$$Type): $MethodHandleDesc
"equals"(object0: any): boolean
"invocationType"(): $MethodTypeDesc
"resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): any
}

export namespace $MethodHandleDesc {
function of(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, string3: string): $DirectMethodHandleDesc
function ofConstructor(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $DirectMethodHandleDesc
function ofField(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, classDesc3: $ClassDesc$$Type): $DirectMethodHandleDesc
function ofMethod(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, methodTypeDesc3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
}
export abstract class $MethodHandleDesc$$Static implements $MethodHandleDesc {
static "of"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, string3: string): $DirectMethodHandleDesc
static "ofConstructor"(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $DirectMethodHandleDesc
static "ofField"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, classDesc3: $ClassDesc$$Type): $DirectMethodHandleDesc
static "ofMethod"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, methodTypeDesc3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MethodHandleDesc$$Type = ($MethodHandleDesc);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MethodHandleDesc_ = $MethodHandleDesc$$Type;
}
}

declare module "packages/java/lang/module/$ModuleDescriptor$Modifier" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Modifier extends $Enum<$ModuleDescriptor$Modifier> {
static readonly "AUTOMATIC": $ModuleDescriptor$Modifier
static readonly "MANDATED": $ModuleDescriptor$Modifier
static readonly "OPEN": $ModuleDescriptor$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Modifier

public static "valueOf"(string0: string): $ModuleDescriptor$Modifier
public static "values"(): $ModuleDescriptor$Modifier[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleDescriptor$Modifier$$Type = ($ModuleDescriptor$Modifier | ("open" | "automatic" | "synthetic" | "mandated"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleDescriptor$Modifier_ = $ModuleDescriptor$Modifier$$Type;
}
}

declare module "packages/java/lang/reflect/$GenericDeclaration" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $AnnotatedElement } from "packages/java/lang/reflect/$AnnotatedElement"
import { $TypeVariable } from "packages/java/lang/reflect/$TypeVariable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GenericDeclaration extends $AnnotatedElement {
"getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getAnnotations"(): $Annotation[]
"getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getDeclaredAnnotations"(): $Annotation[]
"getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getTypeParameters"(): $TypeVariable<any>[]
"isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "typeParameters"(): $TypeVariable<any>[]
}

export namespace $GenericDeclaration {
const probejs$$marker: never
}
export abstract class $GenericDeclaration$$Static implements $GenericDeclaration {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GenericDeclaration$$Type = ($GenericDeclaration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GenericDeclaration_ = $GenericDeclaration$$Type;
}
}

declare module "packages/java/lang/module/$Configuration" {
import { $ResolvedModule } from "packages/java/lang/module/$ResolvedModule"
import { $Set } from "packages/java/util/$Set"
import { $ModuleFinder$$Type } from "packages/java/lang/module/$ModuleFinder"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Configuration {
public static "empty"(): $Configuration
public "findModule"(string0: string): $Optional<$ResolvedModule>
public "modules"(): $Set<$ResolvedModule>
public "parents"(): $List<$Configuration>
public "resolve"(moduleFinder0: $ModuleFinder$$Type, moduleFinder1: $ModuleFinder$$Type, collection2: $Collection$$Type<string>): $Configuration
public static "resolve"(moduleFinder0: $ModuleFinder$$Type, list1: $List$$Type<$Configuration$$Type>, moduleFinder2: $ModuleFinder$$Type, collection3: $Collection$$Type<string>): $Configuration
public static "resolveAndBind"(moduleFinder0: $ModuleFinder$$Type, list1: $List$$Type<$Configuration$$Type>, moduleFinder2: $ModuleFinder$$Type, collection3: $Collection$$Type<string>): $Configuration
public "resolveAndBind"(moduleFinder0: $ModuleFinder$$Type, moduleFinder1: $ModuleFinder$$Type, collection2: $Collection$$Type<string>): $Configuration
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Configuration$$Type = ($Configuration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Configuration_ = $Configuration$$Type;
}
}

declare module "packages/java/lang/$Short" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Short$$Type = ($Short);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Short_ = $Short$$Type;
}
}

declare module "packages/java/lang/$AutoCloseable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AutoCloseable$$Type = ($AutoCloseable | (() => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AutoCloseable_ = $AutoCloseable$$Type;
}
}

declare module "packages/java/lang/module/$ModuleDescriptor" {
import { $ModuleDescriptor$Provides } from "packages/java/lang/module/$ModuleDescriptor$Provides"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $ModuleDescriptor$Builder } from "packages/java/lang/module/$ModuleDescriptor$Builder"
import { $ModuleDescriptor$Opens } from "packages/java/lang/module/$ModuleDescriptor$Opens"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $ModuleDescriptor$Version } from "packages/java/lang/module/$ModuleDescriptor$Version"
import { $ModuleDescriptor$Requires } from "packages/java/lang/module/$ModuleDescriptor$Requires"
import { $ModuleDescriptor$Exports } from "packages/java/lang/module/$ModuleDescriptor$Exports"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $InputStream$$Type } from "packages/java/io/$InputStream"
import { $ModuleDescriptor$Modifier, $ModuleDescriptor$Modifier$$Type } from "packages/java/lang/module/$ModuleDescriptor$Modifier"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor implements $Comparable<$ModuleDescriptor> {
public "compareTo"(moduleDescriptor0: $ModuleDescriptor$$Type): integer
public "exports"(): $Set<$ModuleDescriptor$Exports>
public "isAutomatic"(): boolean
public "isOpen"(): boolean
public "mainClass"(): $Optional<string>
public "modifiers"(): $Set<$ModuleDescriptor$Modifier>
public "name"(): string
public static "newAutomaticModule"(string0: string): $ModuleDescriptor$Builder
public static "newModule"(string0: string, set1: $Set$$Type<$ModuleDescriptor$Modifier$$Type>): $ModuleDescriptor$Builder
public static "newModule"(string0: string): $ModuleDescriptor$Builder
public static "newOpenModule"(string0: string): $ModuleDescriptor$Builder
public "opens"(): $Set<$ModuleDescriptor$Opens>
public "packages"(): $Set<string>
public "provides"(): $Set<$ModuleDescriptor$Provides>
public "rawVersion"(): $Optional<string>
public static "read"(inputStream0: $InputStream$$Type): $ModuleDescriptor
public static "read"(inputStream0: $InputStream$$Type, supplier1: $Supplier$$Type<$Set<string>>): $ModuleDescriptor
public static "read"(byteBuffer0: $ByteBuffer$$Type): $ModuleDescriptor
public static "read"(byteBuffer0: $ByteBuffer$$Type, supplier1: $Supplier$$Type<$Set<string>>): $ModuleDescriptor
public "requires"(): $Set<$ModuleDescriptor$Requires>
public "toNameAndVersion"(): string
public "uses"(): $Set<string>
public "version"(): $Optional<$ModuleDescriptor$Version>
get "automatic"(): boolean
get "open"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleDescriptor$$Type = ($ModuleDescriptor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleDescriptor_ = $ModuleDescriptor$$Type;
}
}

declare module "packages/java/lang/constant/$MethodTypeDesc" {
import { $MethodHandles$Lookup$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup"
import { $ClassDesc, $ClassDesc$$Type } from "packages/java/lang/constant/$ClassDesc"
import { $List } from "packages/java/util/$List"
import { $TypeDescriptor$OfMethod } from "packages/java/lang/invoke/$TypeDescriptor$OfMethod"
import { $ConstantDesc } from "packages/java/lang/constant/$ConstantDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodTypeDesc extends $ConstantDesc, $TypeDescriptor$OfMethod<$ClassDesc, $MethodTypeDesc> {
"changeParameterType"(int0: integer, classDesc1: $ClassDesc$$Type): $MethodTypeDesc
"changeReturnType"(classDesc0: $ClassDesc$$Type): $MethodTypeDesc
"descriptorString"(): string
"displayDescriptor"(): string
"dropParameterTypes"(int0: integer, int1: integer): $MethodTypeDesc
"equals"(object0: any): boolean
"insertParameterTypes"(int0: integer, ...classDesc1s: $ClassDesc$$Type[]): $MethodTypeDesc
"parameterArray"(): $ClassDesc[]
"parameterCount"(): integer
"parameterList"(): $List<$ClassDesc>
"resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): any
"returnType"(): $ClassDesc
}

export namespace $MethodTypeDesc {
function of(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $MethodTypeDesc
function ofDescriptor(string0: string): $MethodTypeDesc
}
export abstract class $MethodTypeDesc$$Static implements $MethodTypeDesc {
static "of"(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $MethodTypeDesc
static "ofDescriptor"(string0: string): $MethodTypeDesc
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MethodTypeDesc$$Type = ($MethodTypeDesc);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MethodTypeDesc_ = $MethodTypeDesc$$Type;
}
}

declare module "packages/java/lang/invoke/$MethodHandles$Lookup$ClassOption" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandles$Lookup$ClassOption extends $Enum<$MethodHandles$Lookup$ClassOption> {
static readonly "NESTMATE": $MethodHandles$Lookup$ClassOption
static readonly "STRONG": $MethodHandles$Lookup$ClassOption

public static "valueOf"(string0: string): $MethodHandles$Lookup$ClassOption
public static "values"(): $MethodHandles$Lookup$ClassOption[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MethodHandles$Lookup$ClassOption$$Type = ($MethodHandles$Lookup$ClassOption | ("nestmate" | "strong"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MethodHandles$Lookup$ClassOption_ = $MethodHandles$Lookup$ClassOption$$Type;
}
}

declare module "packages/java/lang/reflect/$Executable" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Member } from "packages/java/lang/reflect/$Member"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Type } from "packages/java/lang/reflect/$Type"
import { $AnnotatedType } from "packages/java/lang/reflect/$AnnotatedType"
import { $Parameter } from "packages/java/lang/reflect/$Parameter"
import { $TypeVariable } from "packages/java/lang/reflect/$TypeVariable"
import { $GenericDeclaration } from "packages/java/lang/reflect/$GenericDeclaration"
import { $AccessibleObject } from "packages/java/lang/reflect/$AccessibleObject"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Executable extends $AccessibleObject implements $Member, $GenericDeclaration {
public "getAnnotatedExceptionTypes"(): $AnnotatedType[]
public "getAnnotatedParameterTypes"(): $AnnotatedType[]
public "getAnnotatedReceiverType"(): $AnnotatedType
public "getAnnotatedReturnType"(): $AnnotatedType
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaringClass"(): $Class<any>
public "getExceptionTypes"(): $Class<any>[]
public "getGenericExceptionTypes"(): $Type[]
public "getGenericParameterTypes"(): $Type[]
public "getModifiers"(): integer
public "getName"(): string
public "getParameterAnnotations"(): $Annotation[][]
public "getParameterCount"(): integer
public "getParameterTypes"(): $Class<any>[]
public "getParameters"(): $Parameter[]
public "getTypeParameters"(): $TypeVariable<any>[]
public "isSynthetic"(): boolean
public "isVarArgs"(): boolean
public "toGenericString"(): string
get "annotatedExceptionTypes"(): $AnnotatedType[]
get "annotatedParameterTypes"(): $AnnotatedType[]
get "annotatedReceiverType"(): $AnnotatedType
get "annotatedReturnType"(): $AnnotatedType
get "declaringClass"(): $Class<any>
get "exceptionTypes"(): $Class<any>[]
get "genericExceptionTypes"(): $Type[]
get "genericParameterTypes"(): $Type[]
get "modifiers"(): integer
get "name"(): string
get "parameterAnnotations"(): $Annotation[][]
get "parameterCount"(): integer
get "parameterTypes"(): $Class<any>[]
get "parameters"(): $Parameter[]
get "typeParameters"(): $TypeVariable<any>[]
get "synthetic"(): boolean
get "varArgs"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Executable$$Type = ($Executable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Executable_ = $Executable$$Type;
}
}

declare module "packages/java/lang/$Number" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Number$$Type = ($Number);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Number_ = $Number$$Type;
}
}

declare module "packages/java/lang/constant/$Constable" {
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $ConstantDesc, $ConstantDesc$$Type } from "packages/java/lang/constant/$ConstantDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Constable {
"describeConstable"(): $Optional<$ConstantDesc>
}

export namespace $Constable {
const probejs$$marker: never
}
export abstract class $Constable$$Static implements $Constable {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Constable$$Type = ($Constable | (() => $Optional$$Type<$ConstantDesc$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Constable_ = $Constable$$Type;
}
}

declare module "packages/java/lang/reflect/$Member" {
import { $Class } from "packages/java/lang/$Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Member {
"getDeclaringClass"(): $Class<any>
"getModifiers"(): integer
"getName"(): string
"isSynthetic"(): boolean
get "declaringClass"(): $Class<any>
get "modifiers"(): integer
get "name"(): string
get "synthetic"(): boolean
}

export namespace $Member {
const DECLARED: integer
const PUBLIC: integer
}
export abstract class $Member$$Static implements $Member {
static readonly "DECLARED": integer
static readonly "PUBLIC": integer

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Member$$Type = ($Member);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Member_ = $Member$$Type;
}
}

declare module "packages/java/lang/$Boolean" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Boolean$$Type = ($Boolean);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Boolean_ = $Boolean$$Type;
}
}

declare module "packages/java/lang/$Thread" {
import { $StackTraceElement } from "packages/java/lang/$StackTraceElement"
import { $Thread$State } from "packages/java/lang/$Thread$State"
import { $ClassLoader, $ClassLoader$$Type } from "packages/java/lang/$ClassLoader"
import { $Thread$UncaughtExceptionHandler, $Thread$UncaughtExceptionHandler$$Type } from "packages/java/lang/$Thread$UncaughtExceptionHandler"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ThreadGroup, $ThreadGroup$$Type } from "packages/java/lang/$ThreadGroup"
import { $Map } from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Thread implements $Runnable {
static readonly "MAX_PRIORITY": integer
static readonly "MIN_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor(threadGroup0: $ThreadGroup$$Type, runnable1: $Runnable$$Type)
constructor(string0: string)
constructor(threadGroup0: $ThreadGroup$$Type, string1: string)
constructor()
constructor(runnable0: $Runnable$$Type)
constructor(threadGroup0: $ThreadGroup$$Type, runnable1: $Runnable$$Type, string2: string, long3: long, boolean4: boolean)
constructor(threadGroup0: $ThreadGroup$$Type, runnable1: $Runnable$$Type, string2: string, long3: long)
constructor(threadGroup0: $ThreadGroup$$Type, runnable1: $Runnable$$Type, string2: string)
constructor(runnable0: $Runnable$$Type, string1: string)

public static "activeCount"(): integer
/** @deprecated */
public "checkAccess"(): void
/** @deprecated */
public "countStackFrames"(): integer
public static "currentThread"(): $Thread
public static "dumpStack"(): void
public static "enumerate"(thread0s: $Thread$$Type[]): integer
public static "getAllStackTraces"(): $Map<$Thread, $StackTraceElement[]>
public "getContextClassLoader"(): $ClassLoader
public static "getDefaultUncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
public "getId"(): long
public "getName"(): string
public "getPriority"(): integer
public "getStackTrace"(): $StackTraceElement[]
public "getState"(): $Thread$State
public "getThreadGroup"(): $ThreadGroup
public "getUncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
public static "holdsLock"(object0: any): boolean
public "interrupt"(): void
public static "interrupted"(): boolean
public "isAlive"(): boolean
public "isDaemon"(): boolean
public "isInterrupted"(): boolean
public "join"(long0: long): void
public "join"(): void
public "join"(long0: long, int1: integer): void
public static "onSpinWait"(): void
/** @deprecated */
public "resume"(): void
public "run"(): void
public "setContextClassLoader"(classLoader0: $ClassLoader$$Type): void
public "setDaemon"(boolean0: boolean): void
public static "setDefaultUncaughtExceptionHandler"(uncaughtExceptionHandler0: $Thread$UncaughtExceptionHandler$$Type): void
public "setName"(string0: string): void
public "setPriority"(int0: integer): void
public "setUncaughtExceptionHandler"(uncaughtExceptionHandler0: $Thread$UncaughtExceptionHandler$$Type): void
public static "sleep"(long0: long): void
public static "sleep"(long0: long, int1: integer): void
public "start"(): void
/** @deprecated */
public "stop"(): void
/** @deprecated */
public "suspend"(): void
public static "yield"(): void
get "contextClassLoader"(): $ClassLoader
get "id"(): long
get "name"(): string
get "priority"(): integer
get "stackTrace"(): $StackTraceElement[]
get "state"(): $Thread$State
get "threadGroup"(): $ThreadGroup
get "uncaughtExceptionHandler"(): $Thread$UncaughtExceptionHandler
get "alive"(): boolean
get "daemon"(): boolean
set "contextClassLoader"(value: $ClassLoader$$Type)
set "daemon"(value: boolean)
set "name"(value: string)
set "priority"(value: integer)
set "uncaughtExceptionHandler"(value: $Thread$UncaughtExceptionHandler$$Type)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Thread$$Type = ($Thread);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Thread_ = $Thread$$Type;
}
}

declare module "packages/java/lang/module/$ModuleReference" {
import { $ModuleDescriptor } from "packages/java/lang/module/$ModuleDescriptor"
import { $Optional } from "packages/java/util/$Optional"
import { $URI } from "packages/java/net/$URI"
import { $ModuleReader } from "packages/java/lang/module/$ModuleReader"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleReference {
public "descriptor"(): $ModuleDescriptor
public "location"(): $Optional<$URI>
public "open"(): $ModuleReader
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleReference$$Type = ($ModuleReference);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleReference_ = $ModuleReference$$Type;
}
}

declare module "packages/java/lang/invoke/$VarHandle$VarHandleDesc" {
import { $DynamicConstantDesc } from "packages/java/lang/constant/$DynamicConstantDesc"
import { $VarHandle } from "packages/java/lang/invoke/$VarHandle"
import { $ClassDesc, $ClassDesc$$Type } from "packages/java/lang/constant/$ClassDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle$VarHandleDesc extends $DynamicConstantDesc<$VarHandle> {
public static "ofArray"(classDesc0: $ClassDesc$$Type): $VarHandle$VarHandleDesc
public static "ofField"(classDesc0: $ClassDesc$$Type, string1: string, classDesc2: $ClassDesc$$Type): $VarHandle$VarHandleDesc
public static "ofStaticField"(classDesc0: $ClassDesc$$Type, string1: string, classDesc2: $ClassDesc$$Type): $VarHandle$VarHandleDesc
public "varType"(): $ClassDesc
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VarHandle$VarHandleDesc$$Type = ($VarHandle$VarHandleDesc);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VarHandle$VarHandleDesc_ = $VarHandle$VarHandleDesc$$Type;
}
}

declare module "packages/java/lang/$ThreadLocal" {
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ThreadLocal<T> {
constructor()

public "get"(): T
public "remove"(): void
public "set"(t0: T): void
public static "withInitial"<S>(supplier0: $Supplier$$Type<S>): $ThreadLocal<S>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ThreadLocal$$Type<T> = ($ThreadLocal<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ThreadLocal_<T> = $ThreadLocal$$Type<T>;
}
}

declare module "packages/java/lang/annotation/$ElementType" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ElementType extends $Enum<$ElementType> {
static readonly "ANNOTATION_TYPE": $ElementType
static readonly "CONSTRUCTOR": $ElementType
static readonly "FIELD": $ElementType
static readonly "LOCAL_VARIABLE": $ElementType
static readonly "METHOD": $ElementType
static readonly "MODULE": $ElementType
static readonly "PACKAGE": $ElementType
static readonly "PARAMETER": $ElementType
static readonly "RECORD_COMPONENT": $ElementType
static readonly "TYPE": $ElementType
static readonly "TYPE_PARAMETER": $ElementType
static readonly "TYPE_USE": $ElementType

public static "valueOf"(string0: string): $ElementType
public static "values"(): $ElementType[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ElementType$$Type = ($ElementType | ("type" | "field" | "method" | "parameter" | "constructor" | "local_variable" | "annotation_type" | "package" | "type_parameter" | "type_use" | "module" | "record_component"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ElementType_ = $ElementType$$Type;
}
}

declare module "packages/java/lang/constant/$ClassDesc" {
import { $MethodHandles$Lookup$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup"
import { $ConstantDesc } from "packages/java/lang/constant/$ConstantDesc"
import { $TypeDescriptor$OfField } from "packages/java/lang/invoke/$TypeDescriptor$OfField"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ClassDesc extends $ConstantDesc, $TypeDescriptor$OfField<$ClassDesc> {
"arrayType"(int0: integer): $ClassDesc
"arrayType"(): $ClassDesc
"descriptorString"(): string
"displayName"(): string
"equals"(object0: any): boolean
"isArray"(): boolean
"isClassOrInterface"(): boolean
"isPrimitive"(): boolean
"nested"(string0: string): $ClassDesc
"nested"(string0: string, ...string1s: string[]): $ClassDesc
"packageName"(): string
"resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): any
get "array"(): boolean
get "classOrInterface"(): boolean
get "primitive"(): boolean
}

export namespace $ClassDesc {
function of(string0: string): $ClassDesc
function of(string0: string, string1: string): $ClassDesc
function ofDescriptor(string0: string): $ClassDesc
}
export abstract class $ClassDesc$$Static implements $ClassDesc {
static "of"(string0: string): $ClassDesc
static "of"(string0: string, string1: string): $ClassDesc
static "ofDescriptor"(string0: string): $ClassDesc
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClassDesc$$Type = ($ClassDesc);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClassDesc_ = $ClassDesc$$Type;
}
}

declare module "packages/java/lang/$Enum$EnumDesc" {
import { $DynamicConstantDesc } from "packages/java/lang/constant/$DynamicConstantDesc"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $ClassDesc$$Type } from "packages/java/lang/constant/$ClassDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Enum$EnumDesc<E extends $Enum<E>> extends $DynamicConstantDesc<E> {
public static "of"<E extends $Enum<E>>(classDesc0: $ClassDesc$$Type, string1: string): $Enum$EnumDesc<E>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Enum$EnumDesc$$Type<E extends $Enum<E>> = ($Enum$EnumDesc<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Enum$EnumDesc_<E extends $Enum<E>> = $Enum$EnumDesc$$Type<E>;
}
}

declare module "packages/java/lang/$Character" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Character$$Type = ($Character);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Character_ = $Character$$Type;
}
}

declare module "packages/java/lang/constant/$DirectMethodHandleDesc" {
import { $MethodHandles$Lookup$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup"
import { $DirectMethodHandleDesc$Kind, $DirectMethodHandleDesc$Kind$$Type } from "packages/java/lang/constant/$DirectMethodHandleDesc$Kind"
import { $ClassDesc, $ClassDesc$$Type } from "packages/java/lang/constant/$ClassDesc"
import { $MethodTypeDesc, $MethodTypeDesc$$Type } from "packages/java/lang/constant/$MethodTypeDesc"
import { $MethodHandleDesc } from "packages/java/lang/constant/$MethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectMethodHandleDesc extends $MethodHandleDesc {
"asType"(methodTypeDesc0: $MethodTypeDesc$$Type): $MethodHandleDesc
"equals"(object0: any): boolean
"invocationType"(): $MethodTypeDesc
"isOwnerInterface"(): boolean
"kind"(): $DirectMethodHandleDesc$Kind
"lookupDescriptor"(): string
"methodName"(): string
"owner"(): $ClassDesc
"refKind"(): integer
"resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): any
get "ownerInterface"(): boolean
}

export namespace $DirectMethodHandleDesc {
function of(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, string3: string): $DirectMethodHandleDesc
function ofConstructor(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $DirectMethodHandleDesc
function ofField(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, classDesc3: $ClassDesc$$Type): $DirectMethodHandleDesc
function ofMethod(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, methodTypeDesc3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
}
export abstract class $DirectMethodHandleDesc$$Static implements $DirectMethodHandleDesc {
static "of"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, string3: string): $DirectMethodHandleDesc
static "ofConstructor"(classDesc0: $ClassDesc$$Type, ...classDesc1s: $ClassDesc$$Type[]): $DirectMethodHandleDesc
static "ofField"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, classDesc3: $ClassDesc$$Type): $DirectMethodHandleDesc
static "ofMethod"(kind0: $DirectMethodHandleDesc$Kind$$Type, classDesc1: $ClassDesc$$Type, string2: string, methodTypeDesc3: $MethodTypeDesc$$Type): $DirectMethodHandleDesc
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DirectMethodHandleDesc$$Type = ($DirectMethodHandleDesc);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DirectMethodHandleDesc_ = $DirectMethodHandleDesc$$Type;
}
}

declare module "packages/java/lang/constant/$ConstantDesc" {
import { $MethodHandles$Lookup, $MethodHandles$Lookup$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ConstantDesc {
"resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): any
}

export namespace $ConstantDesc {
const probejs$$marker: never
}
export abstract class $ConstantDesc$$Static implements $ConstantDesc {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConstantDesc$$Type = ($ConstantDesc | ((arg0: $MethodHandles$Lookup) => any));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConstantDesc_ = $ConstantDesc$$Type;
}
}

declare module "packages/java/lang/$Cloneable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Cloneable {
}

export namespace $Cloneable {
const probejs$$marker: never
}
export abstract class $Cloneable$$Static implements $Cloneable {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Cloneable$$Type = ($Cloneable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Cloneable_ = $Cloneable$$Type;
}
}

declare module "packages/java/lang/reflect/$Method" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Type } from "packages/java/lang/reflect/$Type"
import { $Executable } from "packages/java/lang/reflect/$Executable"
import { $TypeVariable } from "packages/java/lang/reflect/$TypeVariable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Method extends $Executable {
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDefaultValue"(): any
public "getGenericReturnType"(): $Type
public "getReturnType"(): $Class<any>
public "getTypeParameters"(): $TypeVariable<$Method>[]
public "invoke"(object0: any, ...object1s: any[]): any
public "isBridge"(): boolean
public "isDefault"(): boolean
get "defaultValue"(): any
get "genericReturnType"(): $Type
get "returnType"(): $Class<any>
get "typeParameters"(): $TypeVariable<$Method>[]
get "bridge"(): boolean
get "default"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Method$$Type = ($Method);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Method_ = $Method$$Type;
}
}

declare module "packages/java/lang/$Enum" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Enum$EnumDesc } from "packages/java/lang/$Enum$EnumDesc"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Enum<E extends $Enum<E>> implements $Constable, $Comparable<E>, $Serializable {
public "compareTo"(e0: E): integer
public "describeConstable"(): $Optional<$Enum$EnumDesc<E>>
public "getDeclaringClass"(): $Class<E>
public "name"(): string
public "ordinal"(): integer
public static "valueOf"<T extends $Enum<T>>(class0: $Class$$Type<T>, string1: string): T
get "declaringClass"(): $Class<E>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Enum$$Type<E extends $Enum<E>> = ($Enum<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Enum_<E extends $Enum<E>> = $Enum$$Type<E>;
}
}

declare module "packages/java/lang/$Comparable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Comparable$$Type<T> = ($Comparable<T> | ((arg0: T) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Comparable_<T> = $Comparable$$Type<T>;
}
}

declare module "packages/java/lang/invoke/$MethodHandles$Lookup" {
import { $VarHandle } from "packages/java/lang/invoke/$VarHandle"
import { $MethodHandle, $MethodHandle$$Type } from "packages/java/lang/invoke/$MethodHandle"
import { $MethodHandles$Lookup$ClassOption$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup$ClassOption"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $MethodType$$Type } from "packages/java/lang/invoke/$MethodType"
import { $Field$$Type } from "packages/java/lang/reflect/$Field"
import { $Method$$Type } from "packages/java/lang/reflect/$Method"
import { $Constructor$$Type } from "packages/java/lang/reflect/$Constructor"
import { $MethodHandleInfo } from "packages/java/lang/invoke/$MethodHandleInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandles$Lookup {
static readonly "MODULE": integer
static readonly "ORIGINAL": integer
static readonly "PACKAGE": integer
static readonly "PRIVATE": integer
static readonly "PROTECTED": integer
static readonly "PUBLIC": integer
static readonly "UNCONDITIONAL": integer

public "accessClass"(class0: $Class$$Type<any>): $Class<any>
public "bind"(object0: any, string1: string, methodType2: $MethodType$$Type): $MethodHandle
public "defineClass"(byte0s: byte[]): $Class<any>
public "defineHiddenClass"(byte0s: byte[], boolean1: boolean, ...classOption2s: $MethodHandles$Lookup$ClassOption$$Type[]): $MethodHandles$Lookup
public "defineHiddenClassWithClassData"(byte0s: byte[], object1: any, boolean2: boolean, ...classOption3s: $MethodHandles$Lookup$ClassOption$$Type[]): $MethodHandles$Lookup
public "dropLookupMode"(int0: integer): $MethodHandles$Lookup
public "ensureInitialized"(class0: $Class$$Type<any>): $Class<any>
public "findClass"(string0: string): $Class<any>
public "findConstructor"(class0: $Class$$Type<any>, methodType1: $MethodType$$Type): $MethodHandle
public "findGetter"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $MethodHandle
public "findSetter"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $MethodHandle
public "findSpecial"(class0: $Class$$Type<any>, string1: string, methodType2: $MethodType$$Type, class3: $Class$$Type<any>): $MethodHandle
public "findStatic"(class0: $Class$$Type<any>, string1: string, methodType2: $MethodType$$Type): $MethodHandle
public "findStaticGetter"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $MethodHandle
public "findStaticSetter"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $MethodHandle
public "findStaticVarHandle"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $VarHandle
public "findVarHandle"(class0: $Class$$Type<any>, string1: string, class2: $Class$$Type<any>): $VarHandle
public "findVirtual"(class0: $Class$$Type<any>, string1: string, methodType2: $MethodType$$Type): $MethodHandle
public "hasFullPrivilegeAccess"(): boolean
/** @deprecated */
public "hasPrivateAccess"(): boolean
public "in"(class0: $Class$$Type<any>): $MethodHandles$Lookup
public "lookupClass"(): $Class<any>
public "lookupModes"(): integer
public "previousLookupClass"(): $Class<any>
public "revealDirect"(methodHandle0: $MethodHandle$$Type): $MethodHandleInfo
public "unreflect"(method0: $Method$$Type): $MethodHandle
public "unreflectConstructor"(constructor0: $Constructor$$Type<any>): $MethodHandle
public "unreflectGetter"(field0: $Field$$Type): $MethodHandle
public "unreflectSetter"(field0: $Field$$Type): $MethodHandle
public "unreflectSpecial"(method0: $Method$$Type, class1: $Class$$Type<any>): $MethodHandle
public "unreflectVarHandle"(field0: $Field$$Type): $VarHandle
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MethodHandles$Lookup$$Type = ($MethodHandles$Lookup);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MethodHandles$Lookup_ = $MethodHandles$Lookup$$Type;
}
}

declare module "packages/java/lang/$ModuleLayer" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Module } from "packages/java/lang/$Module"
import { $ModuleLayer$Controller } from "packages/java/lang/$ModuleLayer$Controller"
import { $Set } from "packages/java/util/$Set"
import { $Configuration, $Configuration$$Type } from "packages/java/lang/module/$Configuration"
import { $ClassLoader, $ClassLoader$$Type } from "packages/java/lang/$ClassLoader"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleLayer {
public static "boot"(): $ModuleLayer
public "configuration"(): $Configuration
public "defineModules"(configuration0: $Configuration$$Type, function1: $Function$$Type<string, $ClassLoader>): $ModuleLayer
public static "defineModules"(configuration0: $Configuration$$Type, list1: $List$$Type<$ModuleLayer$$Type>, function2: $Function$$Type<string, $ClassLoader>): $ModuleLayer$Controller
public static "defineModulesWithManyLoaders"(configuration0: $Configuration$$Type, list1: $List$$Type<$ModuleLayer$$Type>, classLoader2: $ClassLoader$$Type): $ModuleLayer$Controller
public "defineModulesWithManyLoaders"(configuration0: $Configuration$$Type, classLoader1: $ClassLoader$$Type): $ModuleLayer
public static "defineModulesWithOneLoader"(configuration0: $Configuration$$Type, list1: $List$$Type<$ModuleLayer$$Type>, classLoader2: $ClassLoader$$Type): $ModuleLayer$Controller
public "defineModulesWithOneLoader"(configuration0: $Configuration$$Type, classLoader1: $ClassLoader$$Type): $ModuleLayer
public static "empty"(): $ModuleLayer
public "findLoader"(string0: string): $ClassLoader
public "findModule"(string0: string): $Optional<$Module>
public "modules"(): $Set<$Module>
public "parents"(): $List<$ModuleLayer>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleLayer$$Type = ($ModuleLayer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleLayer_ = $ModuleLayer$$Type;
}
}

declare module "packages/java/lang/invoke/$VarHandle$AccessMode" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle$AccessMode extends $Enum<$VarHandle$AccessMode> {
static readonly "COMPARE_AND_EXCHANGE": $VarHandle$AccessMode
static readonly "COMPARE_AND_EXCHANGE_ACQUIRE": $VarHandle$AccessMode
static readonly "COMPARE_AND_EXCHANGE_RELEASE": $VarHandle$AccessMode
static readonly "COMPARE_AND_SET": $VarHandle$AccessMode
static readonly "GET": $VarHandle$AccessMode
static readonly "GET_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_ADD": $VarHandle$AccessMode
static readonly "GET_AND_ADD_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_ADD_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_AND_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_OR_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_BITWISE_XOR_RELEASE": $VarHandle$AccessMode
static readonly "GET_AND_SET": $VarHandle$AccessMode
static readonly "GET_AND_SET_ACQUIRE": $VarHandle$AccessMode
static readonly "GET_AND_SET_RELEASE": $VarHandle$AccessMode
static readonly "GET_OPAQUE": $VarHandle$AccessMode
static readonly "GET_VOLATILE": $VarHandle$AccessMode
static readonly "SET": $VarHandle$AccessMode
static readonly "SET_OPAQUE": $VarHandle$AccessMode
static readonly "SET_RELEASE": $VarHandle$AccessMode
static readonly "SET_VOLATILE": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_ACQUIRE": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_PLAIN": $VarHandle$AccessMode
static readonly "WEAK_COMPARE_AND_SET_RELEASE": $VarHandle$AccessMode

public "methodName"(): string
public static "valueFromMethodName"(string0: string): $VarHandle$AccessMode
public static "valueOf"(string0: string): $VarHandle$AccessMode
public static "values"(): $VarHandle$AccessMode[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VarHandle$AccessMode$$Type = ($VarHandle$AccessMode | ("get" | "set" | "get_volatile" | "set_volatile" | "get_acquire" | "set_release" | "get_opaque" | "set_opaque" | "compare_and_set" | "compare_and_exchange" | "compare_and_exchange_acquire" | "compare_and_exchange_release" | "weak_compare_and_set_plain" | "weak_compare_and_set" | "weak_compare_and_set_acquire" | "weak_compare_and_set_release" | "get_and_set" | "get_and_set_acquire" | "get_and_set_release" | "get_and_add" | "get_and_add_acquire" | "get_and_add_release" | "get_and_bitwise_or" | "get_and_bitwise_or_release" | "get_and_bitwise_or_acquire" | "get_and_bitwise_and" | "get_and_bitwise_and_release" | "get_and_bitwise_and_acquire" | "get_and_bitwise_xor" | "get_and_bitwise_xor_release" | "get_and_bitwise_xor_acquire"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VarHandle$AccessMode_ = $VarHandle$AccessMode$$Type;
}
}

declare module "packages/java/lang/invoke/$MethodHandleInfo" {
import { $Member, $Member$$Type } from "packages/java/lang/reflect/$Member"
import { $MethodHandles$Lookup$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $MethodType, $MethodType$$Type } from "packages/java/lang/invoke/$MethodType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MethodHandleInfo {
"getDeclaringClass"(): $Class<any>
"getMethodType"(): $MethodType
"getModifiers"(): integer
"getName"(): string
"getReferenceKind"(): integer
"isVarArgs"(): boolean
"reflectAs"<T extends $Member>(class0: $Class$$Type<T>, lookup1: $MethodHandles$Lookup$$Type): T
get "declaringClass"(): $Class<any>
get "methodType"(): $MethodType
get "modifiers"(): integer
get "name"(): string
get "referenceKind"(): integer
get "varArgs"(): boolean
}

export namespace $MethodHandleInfo {
const REF_getField: integer
const REF_getStatic: integer
const REF_invokeInterface: integer
const REF_invokeSpecial: integer
const REF_invokeStatic: integer
const REF_invokeVirtual: integer
const REF_newInvokeSpecial: integer
const REF_putField: integer
const REF_putStatic: integer
function referenceKindToString(int0: integer): string
function toString(int0: integer, class1: $Class$$Type<any>, string2: string, methodType3: $MethodType$$Type): string
}
export abstract class $MethodHandleInfo$$Static implements $MethodHandleInfo {
static readonly "REF_getField": integer
static readonly "REF_getStatic": integer
static readonly "REF_invokeInterface": integer
static readonly "REF_invokeSpecial": integer
static readonly "REF_invokeStatic": integer
static readonly "REF_invokeVirtual": integer
static readonly "REF_newInvokeSpecial": integer
static readonly "REF_putField": integer
static readonly "REF_putStatic": integer

static "referenceKindToString"(int0: integer): string
static "toString"(int0: integer, class1: $Class$$Type<any>, string2: string, methodType3: $MethodType$$Type): string
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MethodHandleInfo$$Type = ($MethodHandleInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MethodHandleInfo_ = $MethodHandleInfo$$Type;
}
}

declare module "packages/java/lang/$Package" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Package$$Type = ($Package);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Package_ = $Package$$Type;
}
}

declare module "packages/java/lang/$Iterable" {
import { $Iterator$$Type } from "packages/java/util/$Iterator"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Iterable$$Type<T> = ($Iterable<T> | T[] | (() => $Iterator$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Iterable_<T> = $Iterable$$Type<T>;
}
}

declare module "packages/java/lang/reflect/$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Type {
"getTypeName"(): string
get "typeName"(): string
}

export namespace $Type {
const probejs$$marker: never
}
export abstract class $Type$$Static implements $Type {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Type$$Type = ($Type);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Type_ = $Type$$Type;
}
}

declare module "packages/java/lang/$StringBuffer" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Serializable } from "packages/java/io/$Serializable"
import { $AbstractStringBuilder } from "packages/java/lang/$AbstractStringBuilder"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $StringBuffer extends $AbstractStringBuilder implements $Serializable, $Comparable<$StringBuffer>, charseq {
constructor(charSequence0: charseq)
constructor(string0: string)
constructor(int0: integer)
constructor()

public "append"(int0: integer): $StringBuffer
public "append"(long0: long): $StringBuffer
public "append"(float0: float): $StringBuffer
public "append"(char0s: character[], int1: integer, int2: integer): $StringBuffer
public "append"(boolean0: boolean): $StringBuffer
public "append"(char0: character): $StringBuffer
public static "compare"(charSequence0: charseq, charSequence1: charseq): integer
public "compareTo"(stringBuffer0: $StringBuffer$$Type): integer
public "deleteCharAt"(int0: integer): $StringBuffer
public "isEmpty"(): boolean
public "reverse"(): $StringBuffer
get "empty"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StringBuffer$$Type = ($StringBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StringBuffer_ = $StringBuffer$$Type;
}
}

declare module "packages/java/lang/reflect/$TypeVariable" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Type } from "packages/java/lang/reflect/$Type"
import { $AnnotatedType } from "packages/java/lang/reflect/$AnnotatedType"
import { $AnnotatedElement } from "packages/java/lang/reflect/$AnnotatedElement"
import { $GenericDeclaration, $GenericDeclaration$$Type } from "packages/java/lang/reflect/$GenericDeclaration"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeVariable<D extends $GenericDeclaration> extends $Type, $AnnotatedElement {
"getAnnotatedBounds"(): $AnnotatedType[]
"getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getAnnotations"(): $Annotation[]
"getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getBounds"(): $Type[]
"getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getDeclaredAnnotations"(): $Annotation[]
"getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getGenericDeclaration"(): D
"getName"(): string
"getTypeName"(): string
"isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "annotatedBounds"(): $AnnotatedType[]
get "annotations"(): $Annotation[]
get "bounds"(): $Type[]
get "declaredAnnotations"(): $Annotation[]
get "genericDeclaration"(): D
get "name"(): string
get "typeName"(): string
}

export namespace $TypeVariable {
const probejs$$marker: never
}
export abstract class $TypeVariable$$Static<D extends $GenericDeclaration> implements $TypeVariable<D> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypeVariable$$Type<D extends $GenericDeclaration> = ($TypeVariable<D>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypeVariable_<D extends $GenericDeclaration> = $TypeVariable$$Type<D>;
}
}

declare module "packages/java/lang/$Throwable" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $StackTraceElement, $StackTraceElement$$Type } from "packages/java/lang/$StackTraceElement"
import { $PrintWriter$$Type } from "packages/java/io/$PrintWriter"
import { $PrintStream$$Type } from "packages/java/io/$PrintStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Throwable implements $Serializable {
constructor(throwable0: $Throwable$$Type)
constructor(string0: string, throwable1: $Throwable$$Type)
constructor(string0: string)
constructor()

public "addSuppressed"(throwable0: $Throwable$$Type): void
public "fillInStackTrace"(): $Throwable
public "getCause"(): $Throwable
public "getLocalizedMessage"(): string
public "getMessage"(): string
public "getStackTrace"(): $StackTraceElement[]
public "getSuppressed"(): $Throwable[]
public "initCause"(throwable0: $Throwable$$Type): $Throwable
public "printStackTrace"(): void
public "printStackTrace"(printWriter0: $PrintWriter$$Type): void
public "printStackTrace"(printStream0: $PrintStream$$Type): void
public "setStackTrace"(stackTraceElement0s: $StackTraceElement$$Type[]): void
get "cause"(): $Throwable
get "localizedMessage"(): string
get "message"(): string
get "stackTrace"(): $StackTraceElement[]
get "suppressed"(): $Throwable[]
set "stackTrace"(value: $StackTraceElement$$Type[])
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Throwable$$Type = ($Throwable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Throwable_ = $Throwable$$Type;
}
}

declare module "packages/java/lang/$IllegalStateException" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $RuntimeException } from "packages/java/lang/$RuntimeException"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IllegalStateException extends $RuntimeException {
constructor(throwable0: $Throwable$$Type)
constructor(string0: string, throwable1: $Throwable$$Type)
constructor(string0: string)
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IllegalStateException$$Type = ($IllegalStateException);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IllegalStateException_ = $IllegalStateException$$Type;
}
}

declare module "packages/java/lang/module/$ModuleDescriptor$Opens$Modifier" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Opens$Modifier extends $Enum<$ModuleDescriptor$Opens$Modifier> {
static readonly "MANDATED": $ModuleDescriptor$Opens$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Opens$Modifier

public static "valueOf"(string0: string): $ModuleDescriptor$Opens$Modifier
public static "values"(): $ModuleDescriptor$Opens$Modifier[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleDescriptor$Opens$Modifier$$Type = ($ModuleDescriptor$Opens$Modifier | ("synthetic" | "mandated"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleDescriptor$Opens$Modifier_ = $ModuleDescriptor$Opens$Modifier$$Type;
}
}

declare module "packages/java/lang/$Double" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Double$$Type = ($Double);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Double_ = $Double$$Type;
}
}

declare module "packages/java/lang/$String" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Serializable } from "packages/java/io/$Serializable"
import { $MethodHandles$Lookup$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Charset$$Type } from "packages/java/nio/charset/$Charset"
import { $Locale$$Type } from "packages/java/util/$Locale"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $StringBuffer$$Type } from "packages/java/lang/$StringBuffer"
import { $StringBuilder$$Type } from "packages/java/lang/$StringBuilder"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Constable } from "packages/java/lang/constant/$Constable"
import { $ConstantDesc } from "packages/java/lang/constant/$ConstantDesc"

export class $String implements $Serializable, $Comparable<string>, charseq, $Constable, $ConstantDesc {
static readonly "CASE_INSENSITIVE_ORDER": $Comparator<string>

constructor(stringBuffer0: $StringBuffer$$Type)
constructor(stringBuilder0: $StringBuilder$$Type)
constructor(byte0s: byte[], int1: integer, int2: integer, charset3: $Charset$$Type)
constructor(byte0s: byte[], string1: string)
constructor(byte0s: byte[], charset1: $Charset$$Type)
constructor(byte0s: byte[], int1: integer, int2: integer)
constructor(byte0s: byte[])
constructor(char0s: character[], int1: integer, int2: integer)
constructor(char0s: character[])
constructor(string0: string)
constructor()
constructor(byte0s: byte[], int1: integer, int2: integer, string3: string)
/** @deprecated */
constructor(byte0s: byte[], int1: integer)
/** @deprecated */
constructor(byte0s: byte[], int1: integer, int2: integer, int3: integer)
constructor(int0s: integer[], int1: integer, int2: integer)

public "charAt"(int0: integer): character
public "chars"(): $IntStream
public "codePointAt"(int0: integer): integer
public "codePointBefore"(int0: integer): integer
public "codePointCount"(int0: integer, int1: integer): integer
public "codePoints"(): $IntStream
public static "compare"(charSequence0: charseq, charSequence1: charseq): integer
public "compareTo"(string0: string): integer
public "compareToIgnoreCase"(string0: string): integer
public "concat"(string0: string): string
public "contains"(charSequence0: charseq): boolean
public "contentEquals"(charSequence0: charseq): boolean
public "contentEquals"(stringBuffer0: $StringBuffer$$Type): boolean
public static "copyValueOf"(char0s: character[]): string
public static "copyValueOf"(char0s: character[], int1: integer, int2: integer): string
public "describeConstable"(): $Optional<string>
public "endsWith"(string0: string): boolean
public "equalsIgnoreCase"(string0: string): boolean
public static "format"(locale0: $Locale$$Type, string1: string, ...object2s: any[]): string
public static "format"(string0: string, ...object1s: any[]): string
public "formatted"(...object0s: any[]): string
public "getBytes"(charset0: $Charset$$Type): byte[]
/** @deprecated */
public "getBytes"(int0: integer, int1: integer, byte2s: byte[], int3: integer): void
public "getBytes"(): byte[]
public "getBytes"(string0: string): byte[]
public "getChars"(int0: integer, int1: integer, char2s: character[], int3: integer): void
public "indent"(int0: integer): string
public "indexOf"(string0: string): integer
public "indexOf"(int0: integer): integer
public "indexOf"(int0: integer, int1: integer): integer
public "indexOf"(string0: string, int1: integer): integer
public "intern"(): string
public "isBlank"(): boolean
public "isEmpty"(): boolean
public static "join"(charSequence0: charseq, iterable1: $Iterable$$Type<charseq>): string
public static "join"(charSequence0: charseq, ...charSequence1s: charseq[]): string
public "lastIndexOf"(int0: integer): integer
public "lastIndexOf"(string0: string, int1: integer): integer
public "lastIndexOf"(string0: string): integer
public "lastIndexOf"(int0: integer, int1: integer): integer
public "length"(): integer
public "lines"(): $Stream<string>
public "matches"(string0: string): boolean
public "offsetByCodePoints"(int0: integer, int1: integer): integer
public "regionMatches"(int0: integer, string1: string, int2: integer, int3: integer): boolean
public "regionMatches"(boolean0: boolean, int1: integer, string2: string, int3: integer, int4: integer): boolean
public "repeat"(int0: integer): string
public "replace"(charSequence0: charseq, charSequence1: charseq): string
public "replace"(char0: character, char1: character): string
public "replaceAll"(string0: string, string1: string): string
public "replaceFirst"(string0: string, string1: string): string
public "resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): string
public "split"(string0: string, int1: integer): string[]
public "split"(string0: string): string[]
public "startsWith"(string0: string): boolean
public "startsWith"(string0: string, int1: integer): boolean
public "strip"(): string
public "stripIndent"(): string
public "stripLeading"(): string
public "stripTrailing"(): string
public "subSequence"(int0: integer, int1: integer): charseq
public "substring"(int0: integer, int1: integer): string
public "substring"(int0: integer): string
public "toCharArray"(): character[]
public "toLowerCase"(locale0: $Locale$$Type): string
public "toLowerCase"(): string
public "toUpperCase"(locale0: $Locale$$Type): string
public "toUpperCase"(): string
public "transform"<R>(function0: $Function$$Type<string, R>): R
public "translateEscapes"(): string
public "trim"(): string
public static "valueOf"(long0: long): string
public static "valueOf"(int0: integer): string
public static "valueOf"(char0s: character[]): string
public static "valueOf"(object0: any): string
public static "valueOf"(char0: character): string
public static "valueOf"(boolean0: boolean): string
public static "valueOf"(double0: double): string
public static "valueOf"(float0: float): string
public static "valueOf"(char0s: character[], int1: integer, int2: integer): string
get "bytes"(): byte[]
get "blank"(): boolean
get "empty"(): boolean
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.DecoratedPotPatterns
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.DecoratedPotPatternsTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $String$$Type = ($String | Special.DecoratedPotPatterns);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $String_ = $String$$Type;
}
}

declare module "packages/java/lang/module/$ModuleDescriptor$Requires" {
import { $ModuleDescriptor$Version } from "packages/java/lang/module/$ModuleDescriptor$Version"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Set } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $ModuleDescriptor$Requires$Modifier } from "packages/java/lang/module/$ModuleDescriptor$Requires$Modifier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Requires implements $Comparable<$ModuleDescriptor$Requires> {
public "compareTo"(requires0: $ModuleDescriptor$Requires$$Type): integer
public "compiledVersion"(): $Optional<$ModuleDescriptor$Version>
public "modifiers"(): $Set<$ModuleDescriptor$Requires$Modifier>
public "name"(): string
public "rawCompiledVersion"(): $Optional<string>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleDescriptor$Requires$$Type = ($ModuleDescriptor$Requires);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleDescriptor$Requires_ = $ModuleDescriptor$Requires$$Type;
}
}

declare module "packages/java/lang/$Thread$State" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Thread$State extends $Enum<$Thread$State> {
static readonly "BLOCKED": $Thread$State
static readonly "NEW": $Thread$State
static readonly "RUNNABLE": $Thread$State
static readonly "TERMINATED": $Thread$State
static readonly "TIMED_WAITING": $Thread$State
static readonly "WAITING": $Thread$State

public static "valueOf"(string0: string): $Thread$State
public static "values"(): $Thread$State[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Thread$State$$Type = ($Thread$State | ("new" | "runnable" | "blocked" | "waiting" | "timed_waiting" | "terminated"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Thread$State_ = $Thread$State$$Type;
}
}

declare module "packages/java/lang/$Byte" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Byte$$Type = ($Byte);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Byte_ = $Byte$$Type;
}
}

declare module "packages/java/lang/$Float" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Float$$Type = ($Float);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Float_ = $Float$$Type;
}
}

declare module "packages/java/lang/$RuntimeException" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Exception } from "packages/java/lang/$Exception"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $RuntimeException extends $Exception {
constructor(throwable0: $Throwable$$Type)
constructor(string0: string, throwable1: $Throwable$$Type)
constructor(string0: string)
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RuntimeException$$Type = ($RuntimeException);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RuntimeException_ = $RuntimeException$$Type;
}
}

declare module "packages/java/lang/reflect/$Field" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Member } from "packages/java/lang/reflect/$Member"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Type } from "packages/java/lang/reflect/$Type"
import { $AnnotatedType } from "packages/java/lang/reflect/$AnnotatedType"
import { $AccessibleObject } from "packages/java/lang/reflect/$AccessibleObject"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Field extends $AccessibleObject implements $Member {
public "get"(object0: any): any
public "getAnnotatedType"(): $AnnotatedType
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getBoolean"(object0: any): boolean
public "getByte"(object0: any): byte
public "getChar"(object0: any): character
public "getDeclaringClass"(): $Class<any>
public "getDouble"(object0: any): double
public "getFloat"(object0: any): float
public "getGenericType"(): $Type
public "getInt"(object0: any): integer
public "getLong"(object0: any): long
public "getModifiers"(): integer
public "getName"(): string
public "getShort"(object0: any): short
public "getType"(): $Class<any>
public "isEnumConstant"(): boolean
public "isSynthetic"(): boolean
public "set"(object0: any, object1: any): void
public "setBoolean"(object0: any, boolean1: boolean): void
public "setByte"(object0: any, byte1: byte): void
public "setChar"(object0: any, char1: character): void
public "setDouble"(object0: any, double1: double): void
public "setFloat"(object0: any, float1: float): void
public "setInt"(object0: any, int1: integer): void
public "setLong"(object0: any, long1: long): void
public "setShort"(object0: any, short1: short): void
public "toGenericString"(): string
get "annotatedType"(): $AnnotatedType
get "declaringClass"(): $Class<any>
get "genericType"(): $Type
get "modifiers"(): integer
get "name"(): string
get "type"(): $Class<any>
get "enumConstant"(): boolean
get "synthetic"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Field$$Type = ($Field);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Field_ = $Field$$Type;
}
}

declare module "packages/java/lang/$StringBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StringBuilder$$Type = ($StringBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StringBuilder_ = $StringBuilder$$Type;
}
}

declare module "packages/java/lang/invoke/$VarHandle" {
import { $MethodHandle } from "packages/java/lang/invoke/$MethodHandle"
import { $VarHandle$VarHandleDesc } from "packages/java/lang/invoke/$VarHandle$VarHandleDesc"
import { $MethodType } from "packages/java/lang/invoke/$MethodType"
import { $List } from "packages/java/util/$List"
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"
import { $VarHandle$AccessMode$$Type } from "packages/java/lang/invoke/$VarHandle$AccessMode"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VarHandle implements $Constable {
public "accessModeType"(accessMode0: $VarHandle$AccessMode$$Type): $MethodType
public static "acquireFence"(): void
public "compareAndExchange"(...object0s: any[]): any
public "compareAndExchangeAcquire"(...object0s: any[]): any
public "compareAndExchangeRelease"(...object0s: any[]): any
public "compareAndSet"(...object0s: any[]): boolean
public "coordinateTypes"(): $List<$Class<any>>
public "describeConstable"(): $Optional<$VarHandle$VarHandleDesc>
public static "fullFence"(): void
public "get"(...object0s: any[]): any
public "getAcquire"(...object0s: any[]): any
public "getAndAdd"(...object0s: any[]): any
public "getAndAddAcquire"(...object0s: any[]): any
public "getAndAddRelease"(...object0s: any[]): any
public "getAndBitwiseAnd"(...object0s: any[]): any
public "getAndBitwiseAndAcquire"(...object0s: any[]): any
public "getAndBitwiseAndRelease"(...object0s: any[]): any
public "getAndBitwiseOr"(...object0s: any[]): any
public "getAndBitwiseOrAcquire"(...object0s: any[]): any
public "getAndBitwiseOrRelease"(...object0s: any[]): any
public "getAndBitwiseXor"(...object0s: any[]): any
public "getAndBitwiseXorAcquire"(...object0s: any[]): any
public "getAndBitwiseXorRelease"(...object0s: any[]): any
public "getAndSet"(...object0s: any[]): any
public "getAndSetAcquire"(...object0s: any[]): any
public "getAndSetRelease"(...object0s: any[]): any
public "getOpaque"(...object0s: any[]): any
public "getVolatile"(...object0s: any[]): any
public "hasInvokeExactBehavior"(): boolean
public "isAccessModeSupported"(accessMode0: $VarHandle$AccessMode$$Type): boolean
public static "loadLoadFence"(): void
public static "releaseFence"(): void
public "set"(...object0s: any[]): void
public "setOpaque"(...object0s: any[]): void
public "setRelease"(...object0s: any[]): void
public "setVolatile"(...object0s: any[]): void
public static "storeStoreFence"(): void
public "toMethodHandle"(accessMode0: $VarHandle$AccessMode$$Type): $MethodHandle
public "varType"(): $Class<any>
public "weakCompareAndSet"(...object0s: any[]): boolean
public "weakCompareAndSetAcquire"(...object0s: any[]): boolean
public "weakCompareAndSetPlain"(...object0s: any[]): boolean
public "weakCompareAndSetRelease"(...object0s: any[]): boolean
public "withInvokeBehavior"(): $VarHandle
public "withInvokeExactBehavior"(): $VarHandle
set "opaque"(value: any[])
set "release"(value: any[])
set "volatile"(value: any[])
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VarHandle$$Type = ($VarHandle);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VarHandle_ = $VarHandle$$Type;
}
}

declare module "packages/java/lang/reflect/$Constructor" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Executable } from "packages/java/lang/reflect/$Executable"
import { $TypeVariable } from "packages/java/lang/reflect/$TypeVariable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Constructor<T> extends $Executable {
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDeclaringClass"(): $Class<T>
public "getTypeParameters"(): $TypeVariable<$Constructor<T>>[]
public "newInstance"(...object0s: any[]): T
get "declaringClass"(): $Class<T>
get "typeParameters"(): $TypeVariable<$Constructor<T>>[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Constructor$$Type<T> = ($Constructor<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Constructor_<T> = $Constructor$$Type<T>;
}
}

declare module "packages/java/lang/invoke/$MethodType" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $MethodTypeDesc } from "packages/java/lang/constant/$MethodTypeDesc"
import { $ClassLoader$$Type } from "packages/java/lang/$ClassLoader"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"
import { $TypeDescriptor$OfMethod } from "packages/java/lang/invoke/$TypeDescriptor$OfMethod"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodType implements $Constable, $TypeDescriptor$OfMethod<$Class<any>, $MethodType>, $Serializable {
public "appendParameterTypes"(list0: $List$$Type<$Class$$Type<any>>): $MethodType
public "appendParameterTypes"(...class0s: $Class$$Type<any>[]): $MethodType
public "changeParameterType"(int0: integer, class1: $Class$$Type<any>): $MethodType
public "changeReturnType"(class0: $Class$$Type<any>): $MethodType
public "describeConstable"(): $Optional<$MethodTypeDesc>
public "descriptorString"(): string
public "erase"(): $MethodType
public static "fromMethodDescriptorString"(string0: string, classLoader1: $ClassLoader$$Type): $MethodType
public "generic"(): $MethodType
public static "genericMethodType"(int0: integer): $MethodType
public static "genericMethodType"(int0: integer, boolean1: boolean): $MethodType
public "hasPrimitives"(): boolean
public "hasWrappers"(): boolean
public "insertParameterTypes"(int0: integer, ...class1s: $Class$$Type<any>[]): $MethodType
public "insertParameterTypes"(int0: integer, list1: $List$$Type<$Class$$Type<any>>): $MethodType
public "lastParameterType"(): $Class<any>
public static "methodType"(class0: $Class$$Type<any>, class1s: $Class$$Type<any>[]): $MethodType
public static "methodType"(class0: $Class$$Type<any>, list1: $List$$Type<$Class$$Type<any>>): $MethodType
public static "methodType"(class0: $Class$$Type<any>, class1: $Class$$Type<any>): $MethodType
public static "methodType"(class0: $Class$$Type<any>, class1: $Class$$Type<any>, ...class2s: $Class$$Type<any>[]): $MethodType
public static "methodType"(class0: $Class$$Type<any>, methodType1: $MethodType$$Type): $MethodType
public static "methodType"(class0: $Class$$Type<any>): $MethodType
public "parameterArray"(): $Class<any>[]
public "parameterCount"(): integer
public "parameterList"(): $List<$Class<any>>
public "parameterType"(int0: integer): $Class<any>
public "returnType"(): $Class<any>
public "toMethodDescriptorString"(): string
public "unwrap"(): $MethodType
public "wrap"(): $MethodType
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MethodType$$Type = ($MethodType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MethodType_ = $MethodType$$Type;
}
}

declare module "packages/java/lang/$CharSequence" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CharSequence$$Type = ($CharSequence);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CharSequence_ = $CharSequence$$Type;
}
}

declare module "packages/java/lang/module/$ModuleDescriptor$Provides" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $List } from "packages/java/util/$List"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Provides implements $Comparable<$ModuleDescriptor$Provides> {
public "compareTo"(provides0: $ModuleDescriptor$Provides$$Type): integer
public "providers"(): $List<string>
public "service"(): string
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleDescriptor$Provides$$Type = ($ModuleDescriptor$Provides);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleDescriptor$Provides_ = $ModuleDescriptor$Provides$$Type;
}
}

declare module "packages/java/lang/$Record" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Record {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Record$$Type = ($Record);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Record_ = $Record$$Type;
}
}

declare module "packages/java/lang/invoke/$TypeDescriptor$OfMethod" {
import { $List } from "packages/java/util/$List"
import { $TypeDescriptor } from "packages/java/lang/invoke/$TypeDescriptor"
import { $TypeDescriptor$OfField, $TypeDescriptor$OfField$$Type } from "packages/java/lang/invoke/$TypeDescriptor$OfField"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $TypeDescriptor$OfMethod<F extends $TypeDescriptor$OfField<F>, M extends $TypeDescriptor$OfMethod<F, M>> extends $TypeDescriptor {
"changeParameterType"(int0: integer, f1: F): M
"changeReturnType"(f0: F): M
"descriptorString"(): string
"dropParameterTypes"(int0: integer, int1: integer): M
"insertParameterTypes"(int0: integer, ...f1s: F[]): M
"parameterArray"(): F[]
"parameterCount"(): integer
"parameterList"(): $List<F>
"parameterType"(int0: integer): F
"returnType"(): F
}

export namespace $TypeDescriptor$OfMethod {
const probejs$$marker: never
}
export abstract class $TypeDescriptor$OfMethod$$Static<F extends $TypeDescriptor$OfField<F>, M extends $TypeDescriptor$OfMethod<F, M>> implements $TypeDescriptor$OfMethod<F, M> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypeDescriptor$OfMethod$$Type<F extends $TypeDescriptor$OfField<F>, M extends $TypeDescriptor$OfMethod<F, M>> = ($TypeDescriptor$OfMethod<F, M>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypeDescriptor$OfMethod_<F extends $TypeDescriptor$OfField<F>, M extends $TypeDescriptor$OfMethod<F, M>> = $TypeDescriptor$OfMethod$$Type<F, M>;
}
}

declare module "packages/java/lang/invoke/$MethodHandle" {
import { $Class$$Type } from "packages/java/lang/$Class"
import { $MethodType, $MethodType$$Type } from "packages/java/lang/invoke/$MethodType"
import { $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $Constable } from "packages/java/lang/constant/$Constable"
import { $MethodHandleDesc } from "packages/java/lang/constant/$MethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MethodHandle implements $Constable {
public "asCollector"(int0: integer, class1: $Class$$Type<any>, int2: integer): $MethodHandle
public "asCollector"(class0: $Class$$Type<any>, int1: integer): $MethodHandle
public "asFixedArity"(): $MethodHandle
public "asSpreader"(int0: integer, class1: $Class$$Type<any>, int2: integer): $MethodHandle
public "asSpreader"(class0: $Class$$Type<any>, int1: integer): $MethodHandle
public "asType"(methodType0: $MethodType$$Type): $MethodHandle
public "asVarargsCollector"(class0: $Class$$Type<any>): $MethodHandle
public "bindTo"(object0: any): $MethodHandle
public "describeConstable"(): $Optional<$MethodHandleDesc>
public "invoke"(...object0s: any[]): any
public "invokeExact"(...object0s: any[]): any
public "invokeWithArguments"(list0: $List$$Type<any>): any
public "invokeWithArguments"(...object0s: any[]): any
public "isVarargsCollector"(): boolean
public "type"(): $MethodType
public "withVarargs"(boolean0: boolean): $MethodHandle
get "varargsCollector"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MethodHandle$$Type = ($MethodHandle);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MethodHandle_ = $MethodHandle$$Type;
}
}

declare module "packages/java/lang/annotation/$Annotation" {
import { $Class } from "packages/java/lang/$Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Annotation {
"annotationType"(): $Class<$Annotation>
"equals"(object0: any): boolean
"hashCode"(): integer
"toString"(): string
}

export namespace $Annotation {
const probejs$$marker: never
}
export abstract class $Annotation$$Static implements $Annotation {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Annotation$$Type = ($Annotation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Annotation_ = $Annotation$$Type;
}
}

declare module "packages/java/lang/module/$ModuleReader" {
import { $Closeable } from "packages/java/io/$Closeable"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $InputStream } from "packages/java/io/$InputStream"
import { $URI } from "packages/java/net/$URI"
import { $ByteBuffer, $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ModuleReader extends $Closeable {
"close"(): void
"find"(string0: string): $Optional<$URI>
"list"(): $Stream<string>
"open"(string0: string): $Optional<$InputStream>
"read"(string0: string): $Optional<$ByteBuffer>
"release"(byteBuffer0: $ByteBuffer$$Type): void
}

export namespace $ModuleReader {
const probejs$$marker: never
}
export abstract class $ModuleReader$$Static implements $ModuleReader {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleReader$$Type = ($ModuleReader);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleReader_ = $ModuleReader$$Type;
}
}

declare module "packages/java/lang/$Class" {
import { $Package } from "packages/java/lang/$Package"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Module, $Module$$Type } from "packages/java/lang/$Module"
import { $RecordComponent } from "packages/java/lang/reflect/$RecordComponent"
import { $ClassDesc } from "packages/java/lang/constant/$ClassDesc"
import { $ClassLoader, $ClassLoader$$Type } from "packages/java/lang/$ClassLoader"
import { $Field } from "packages/java/lang/reflect/$Field"
import { $Constructor } from "packages/java/lang/reflect/$Constructor"
import { $Method } from "packages/java/lang/reflect/$Method"
import { $ProtectionDomain } from "packages/java/security/$ProtectionDomain"
import { $TypeVariable } from "packages/java/lang/reflect/$TypeVariable"
import { $TypeDescriptor$OfField } from "packages/java/lang/invoke/$TypeDescriptor$OfField"
import { $GenericDeclaration } from "packages/java/lang/reflect/$GenericDeclaration"
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { JClass$$Type } from "packages/zzzank/probejs/docs/duck/JClass"
import { $Optional } from "packages/java/util/$Optional"
import { $InputStream } from "packages/java/io/$InputStream"
import { $Type } from "packages/java/lang/reflect/$Type"
import { $URL } from "packages/java/net/$URL"
import { $Constable } from "packages/java/lang/constant/$Constable"
import { $AnnotatedType } from "packages/java/lang/reflect/$AnnotatedType"
import { $AnnotatedElement } from "packages/java/lang/reflect/$AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Class<T> implements $Serializable, $GenericDeclaration, $Type, $AnnotatedElement, $TypeDescriptor$OfField<$Class<any>>, $Constable {
public "asSubclass"<U>(class0: $Class$$Type<U>): $Class<U>
public "cast"(object0: any): T
public "componentType"(): $Class<any>
public "describeConstable"(): $Optional<$ClassDesc>
public "descriptorString"(): string
public "desiredAssertionStatus"(): boolean
public static "forName"(string0: string, boolean1: boolean, classLoader2: $ClassLoader$$Type): $Class<any>
public static "forName"(string0: string): $Class<any>
public static "forName"(module0: $Module$$Type, string1: string): $Class<any>
public "getAnnotatedInterfaces"(): $AnnotatedType[]
public "getAnnotatedSuperclass"(): $AnnotatedType
public "getAnnotation"<A extends $Annotation>(class0: $Class$$Type<A>): A
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<A extends $Annotation>(class0: $Class$$Type<A>): A[]
public "getCanonicalName"(): string
public "getClassLoader"(): $ClassLoader
public "getClasses"(): $Class<any>[]
public "getComponentType"(): $Class<any>
public "getConstructor"(...class0s: $Class$$Type<any>[]): $Constructor<T>
public "getConstructors"(): $Constructor<any>[]
public "getDeclaredAnnotation"<A extends $Annotation>(class0: $Class$$Type<A>): A
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<A extends $Annotation>(class0: $Class$$Type<A>): A[]
public "getDeclaredClasses"(): $Class<any>[]
public "getDeclaredConstructor"(...class0s: $Class$$Type<any>[]): $Constructor<T>
public "getDeclaredConstructors"(): $Constructor<any>[]
public "getDeclaredField"(string0: string): $Field
public "getDeclaredFields"(): $Field[]
public "getDeclaredMethod"(string0: string, ...class1s: $Class$$Type<any>[]): $Method
public "getDeclaredMethods"(): $Method[]
public "getDeclaringClass"(): $Class<any>
public "getEnclosingClass"(): $Class<any>
public "getEnclosingConstructor"(): $Constructor<any>
public "getEnclosingMethod"(): $Method
public "getEnumConstants"(): T[]
public "getField"(string0: string): $Field
public "getFields"(): $Field[]
public "getGenericInterfaces"(): $Type[]
public "getGenericSuperclass"(): $Type
public "getInterfaces"(): $Class<any>[]
public "getMethod"(string0: string, ...class1s: $Class$$Type<any>[]): $Method
public "getMethods"(): $Method[]
public "getModifiers"(): integer
public "getModule"(): $Module
public "getName"(): string
public "getNestHost"(): $Class<any>
public "getNestMembers"(): $Class<any>[]
public "getPackage"(): $Package
public "getPackageName"(): string
public "getPermittedSubclasses"(): $Class<any>[]
public "getProtectionDomain"(): $ProtectionDomain
public "getRecordComponents"(): $RecordComponent[]
public "getResource"(string0: string): $URL
public "getResourceAsStream"(string0: string): $InputStream
public "getSigners"(): any[]
public "getSimpleName"(): string
public "getSuperclass"(): $Class<T>
public "getTypeName"(): string
public "getTypeParameters"(): $TypeVariable<$Class<T>>[]
public "isAnnotation"(): boolean
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
public "isAnonymousClass"(): boolean
public "isArray"(): boolean
public "isAssignableFrom"(class0: $Class$$Type<any>): boolean
public "isEnum"(): boolean
public "isHidden"(): boolean
public "isInstance"(object0: any): boolean
public "isInterface"(): boolean
public "isLocalClass"(): boolean
public "isMemberClass"(): boolean
public "isNestmateOf"(class0: $Class$$Type<any>): boolean
public "isPrimitive"(): boolean
public "isRecord"(): boolean
public "isSealed"(): boolean
public "isSynthetic"(): boolean
/** @deprecated */
public "newInstance"(): T
public "toGenericString"(): string
get "annotatedInterfaces"(): $AnnotatedType[]
get "annotatedSuperclass"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "canonicalName"(): string
get "classLoader"(): $ClassLoader
get "classes"(): $Class<any>[]
get "constructors"(): $Constructor<any>[]
get "declaredAnnotations"(): $Annotation[]
get "declaredClasses"(): $Class<any>[]
get "declaredConstructors"(): $Constructor<any>[]
get "declaredFields"(): $Field[]
get "declaredMethods"(): $Method[]
get "declaringClass"(): $Class<any>
get "enclosingClass"(): $Class<any>
get "enclosingConstructor"(): $Constructor<any>
get "enclosingMethod"(): $Method
get "enumConstants"(): T[]
get "fields"(): $Field[]
get "genericInterfaces"(): $Type[]
get "genericSuperclass"(): $Type
get "interfaces"(): $Class<any>[]
get "methods"(): $Method[]
get "modifiers"(): integer
get "module"(): $Module
get "name"(): string
get "nestHost"(): $Class<any>
get "nestMembers"(): $Class<any>[]
get "package"(): $Package
get "packageName"(): string
get "permittedSubclasses"(): $Class<any>[]
get "protectionDomain"(): $ProtectionDomain
get "recordComponents"(): $RecordComponent[]
get "signers"(): any[]
get "simpleName"(): string
get "superclass"(): $Class<T>
get "typeName"(): string
get "typeParameters"(): $TypeVariable<$Class<T>>[]
get "annotation"(): boolean
get "anonymousClass"(): boolean
get "array"(): boolean
get "enum"(): boolean
get "hidden"(): boolean
get "interface"(): boolean
get "localClass"(): boolean
get "memberClass"(): boolean
get "primitive"(): boolean
get "record"(): boolean
get "sealed"(): boolean
get "synthetic"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Class$$Type<T> = ($Class<T> | JClass$$Type<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Class_<T> = $Class$$Type<T>;
}
}

declare module "packages/java/lang/$Appendable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Appendable$$Type = ($Appendable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Appendable_ = $Appendable$$Type;
}
}

declare module "packages/java/lang/reflect/$AccessibleObject" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $AnnotatedElement } from "packages/java/lang/reflect/$AnnotatedElement"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessibleObject implements $AnnotatedElement {
public "canAccess"(object0: any): boolean
public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
/** @deprecated */
public "isAccessible"(): boolean
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
public "setAccessible"(boolean0: boolean): void
public static "setAccessible"(accessibleObject0s: $AccessibleObject$$Type[], boolean1: boolean): void
public "trySetAccessible"(): boolean
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "accessible"(): boolean
set "accessible"(value: boolean)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessibleObject$$Type = ($AccessibleObject);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessibleObject_ = $AccessibleObject$$Type;
}
}

declare module "packages/java/lang/$ModuleLayer$Controller" {
import { $Module$$Type } from "packages/java/lang/$Module"
import { $ModuleLayer } from "packages/java/lang/$ModuleLayer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleLayer$Controller {
public "addExports"(module0: $Module$$Type, string1: string, module2: $Module$$Type): $ModuleLayer$Controller
public "addOpens"(module0: $Module$$Type, string1: string, module2: $Module$$Type): $ModuleLayer$Controller
public "addReads"(module0: $Module$$Type, module1: $Module$$Type): $ModuleLayer$Controller
public "layer"(): $ModuleLayer
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleLayer$Controller$$Type = ($ModuleLayer$Controller);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleLayer$Controller_ = $ModuleLayer$Controller$$Type;
}
}

declare module "packages/java/lang/module/$ModuleDescriptor$Requires$Modifier" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Requires$Modifier extends $Enum<$ModuleDescriptor$Requires$Modifier> {
static readonly "MANDATED": $ModuleDescriptor$Requires$Modifier
static readonly "STATIC": $ModuleDescriptor$Requires$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Requires$Modifier
static readonly "TRANSITIVE": $ModuleDescriptor$Requires$Modifier

public static "valueOf"(string0: string): $ModuleDescriptor$Requires$Modifier
public static "values"(): $ModuleDescriptor$Requires$Modifier[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleDescriptor$Requires$Modifier$$Type = ($ModuleDescriptor$Requires$Modifier | ("transitive" | "static" | "synthetic" | "mandated"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleDescriptor$Requires$Modifier_ = $ModuleDescriptor$Requires$Modifier$$Type;
}
}

declare module "packages/java/lang/module/$ModuleDescriptor$Exports$Modifier" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Exports$Modifier extends $Enum<$ModuleDescriptor$Exports$Modifier> {
static readonly "MANDATED": $ModuleDescriptor$Exports$Modifier
static readonly "SYNTHETIC": $ModuleDescriptor$Exports$Modifier

public static "valueOf"(string0: string): $ModuleDescriptor$Exports$Modifier
public static "values"(): $ModuleDescriptor$Exports$Modifier[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleDescriptor$Exports$Modifier$$Type = ($ModuleDescriptor$Exports$Modifier | ("synthetic" | "mandated"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleDescriptor$Exports$Modifier_ = $ModuleDescriptor$Exports$Modifier$$Type;
}
}

declare module "packages/java/lang/module/$ModuleDescriptor$Opens" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Set } from "packages/java/util/$Set"
import { $ModuleDescriptor$Opens$Modifier } from "packages/java/lang/module/$ModuleDescriptor$Opens$Modifier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Opens implements $Comparable<$ModuleDescriptor$Opens> {
public "compareTo"(opens0: $ModuleDescriptor$Opens$$Type): integer
public "isQualified"(): boolean
public "modifiers"(): $Set<$ModuleDescriptor$Opens$Modifier>
public "source"(): string
public "targets"(): $Set<string>
get "qualified"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleDescriptor$Opens$$Type = ($ModuleDescriptor$Opens);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleDescriptor$Opens_ = $ModuleDescriptor$Opens$$Type;
}
}

declare module "packages/java/lang/constant/$DirectMethodHandleDesc$Kind" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DirectMethodHandleDesc$Kind extends $Enum<$DirectMethodHandleDesc$Kind> {
static readonly "CONSTRUCTOR": $DirectMethodHandleDesc$Kind
static readonly "GETTER": $DirectMethodHandleDesc$Kind
static readonly "INTERFACE_SPECIAL": $DirectMethodHandleDesc$Kind
static readonly "INTERFACE_STATIC": $DirectMethodHandleDesc$Kind
static readonly "INTERFACE_VIRTUAL": $DirectMethodHandleDesc$Kind
static readonly "SETTER": $DirectMethodHandleDesc$Kind
static readonly "SPECIAL": $DirectMethodHandleDesc$Kind
static readonly "STATIC": $DirectMethodHandleDesc$Kind
static readonly "STATIC_GETTER": $DirectMethodHandleDesc$Kind
static readonly "STATIC_SETTER": $DirectMethodHandleDesc$Kind
static readonly "VIRTUAL": $DirectMethodHandleDesc$Kind
readonly "isInterface": boolean
readonly "refKind": integer

public static "valueOf"(int0: integer, boolean1: boolean): $DirectMethodHandleDesc$Kind
public static "valueOf"(string0: string): $DirectMethodHandleDesc$Kind
public static "valueOf"(int0: integer): $DirectMethodHandleDesc$Kind
public static "values"(): $DirectMethodHandleDesc$Kind[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DirectMethodHandleDesc$Kind$$Type = ($DirectMethodHandleDesc$Kind | ("static" | "interface_static" | "virtual" | "interface_virtual" | "special" | "interface_special" | "constructor" | "getter" | "setter" | "static_getter" | "static_setter"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DirectMethodHandleDesc$Kind_ = $DirectMethodHandleDesc$Kind$$Type;
}
}

declare module "packages/java/lang/module/$ModuleFinder" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $Set } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $ModuleReference } from "packages/java/lang/module/$ModuleReference"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ModuleFinder {
"find"(string0: string): $Optional<$ModuleReference>
"findAll"(): $Set<$ModuleReference>
}

export namespace $ModuleFinder {
function compose(...moduleFinder0s: $ModuleFinder$$Type[]): $ModuleFinder
function of(...path0s: $Path$$Type[]): $ModuleFinder
function ofSystem(): $ModuleFinder
}
export abstract class $ModuleFinder$$Static implements $ModuleFinder {
static "compose"(...moduleFinder0s: $ModuleFinder$$Type[]): $ModuleFinder
static "of"(...path0s: $Path$$Type[]): $ModuleFinder
static "ofSystem"(): $ModuleFinder
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleFinder$$Type = ($ModuleFinder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleFinder_ = $ModuleFinder$$Type;
}
}

declare module "packages/java/lang/constant/$DynamicConstantDesc" {
import { $MethodHandles$Lookup$$Type } from "packages/java/lang/invoke/$MethodHandles$Lookup"
import { $ClassDesc, $ClassDesc$$Type } from "packages/java/lang/constant/$ClassDesc"
import { $List } from "packages/java/util/$List"
import { $ConstantDesc, $ConstantDesc$$Type } from "packages/java/lang/constant/$ConstantDesc"
import { $DirectMethodHandleDesc, $DirectMethodHandleDesc$$Type } from "packages/java/lang/constant/$DirectMethodHandleDesc"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DynamicConstantDesc<T> implements $ConstantDesc {
public "bootstrapArgs"(): $ConstantDesc[]
public "bootstrapArgsList"(): $List<$ConstantDesc>
public "bootstrapMethod"(): $DirectMethodHandleDesc
public "constantName"(): string
public "constantType"(): $ClassDesc
public static "of"<T>(directMethodHandleDesc0: $DirectMethodHandleDesc$$Type, ...constantDesc1s: $ConstantDesc$$Type[]): $DynamicConstantDesc<T>
public static "of"<T>(directMethodHandleDesc0: $DirectMethodHandleDesc$$Type): $DynamicConstantDesc<T>
public static "ofCanonical"<T>(directMethodHandleDesc0: $DirectMethodHandleDesc$$Type, string1: string, classDesc2: $ClassDesc$$Type, constantDesc3s: $ConstantDesc$$Type[]): $ConstantDesc
public static "ofNamed"<T>(directMethodHandleDesc0: $DirectMethodHandleDesc$$Type, string1: string, classDesc2: $ClassDesc$$Type, ...constantDesc3s: $ConstantDesc$$Type[]): $DynamicConstantDesc<T>
public "resolveConstantDesc"(lookup0: $MethodHandles$Lookup$$Type): T
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicConstantDesc$$Type<T> = ($DynamicConstantDesc<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicConstantDesc_<T> = $DynamicConstantDesc$$Type<T>;
}
}

declare module "packages/java/lang/module/$ModuleDescriptor$Exports" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $ModuleDescriptor$Exports$Modifier } from "packages/java/lang/module/$ModuleDescriptor$Exports$Modifier"
import { $Set } from "packages/java/util/$Set"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModuleDescriptor$Exports implements $Comparable<$ModuleDescriptor$Exports> {
public "compareTo"(exports0: $ModuleDescriptor$Exports$$Type): integer
public "isQualified"(): boolean
public "modifiers"(): $Set<$ModuleDescriptor$Exports$Modifier>
public "source"(): string
public "targets"(): $Set<string>
get "qualified"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleDescriptor$Exports$$Type = ($ModuleDescriptor$Exports);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleDescriptor$Exports_ = $ModuleDescriptor$Exports$$Type;
}
}

declare module "packages/java/lang/ref/$Reference" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Reference<T> {
public "clear"(): void
public "enqueue"(): boolean
public "get"(): T
/** @deprecated */
public "isEnqueued"(): boolean
public static "reachabilityFence"(object0: any): void
public "refersTo"(t0: T): boolean
get "enqueued"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Reference$$Type<T> = ($Reference<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Reference_<T> = $Reference$$Type<T>;
}
}

declare module "packages/java/lang/reflect/$AnnotatedTypeVariable" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Type } from "packages/java/lang/reflect/$Type"
import { $AnnotatedType } from "packages/java/lang/reflect/$AnnotatedType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AnnotatedTypeVariable extends $AnnotatedType {
"getAnnotatedBounds"(): $AnnotatedType[]
"getAnnotatedOwnerType"(): $AnnotatedType
"getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getAnnotations"(): $Annotation[]
"getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
"getDeclaredAnnotations"(): $Annotation[]
"getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
"getType"(): $Type
"isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "annotatedBounds"(): $AnnotatedType[]
get "annotatedOwnerType"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "type"(): $Type
}

export namespace $AnnotatedTypeVariable {
const probejs$$marker: never
}
export abstract class $AnnotatedTypeVariable$$Static implements $AnnotatedTypeVariable {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnnotatedTypeVariable$$Type = ($AnnotatedTypeVariable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnnotatedTypeVariable_ = $AnnotatedTypeVariable$$Type;
}
}

declare module "packages/java/lang/$AbstractStringBuilder" {
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $StringBuffer$$Type } from "packages/java/lang/$StringBuffer"
import { $Appendable } from "packages/java/lang/$Appendable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractStringBuilder implements $Appendable, charseq {
public "append"(charSequence0: charseq): $AbstractStringBuilder
public "append"(charSequence0: charseq, int1: integer, int2: integer): $AbstractStringBuilder
public "append"(char0s: character[]): $AbstractStringBuilder
public "append"(object0: any): $AbstractStringBuilder
public "append"(stringBuffer0: $StringBuffer$$Type): $AbstractStringBuilder
public "append"(string0: string): $AbstractStringBuilder
public "append"(int0: integer): $AbstractStringBuilder
public "append"(long0: long): $AbstractStringBuilder
public "append"(float0: float): $AbstractStringBuilder
public "append"(double0: double): $AbstractStringBuilder
public "append"(char0: character): $AbstractStringBuilder
public "append"(boolean0: boolean): $AbstractStringBuilder
public "append"(char0s: character[], int1: integer, int2: integer): $AbstractStringBuilder
public "appendCodePoint"(int0: integer): $AbstractStringBuilder
public "capacity"(): integer
public "charAt"(int0: integer): character
public "chars"(): $IntStream
public "codePointAt"(int0: integer): integer
public "codePointBefore"(int0: integer): integer
public "codePointCount"(int0: integer, int1: integer): integer
public "codePoints"(): $IntStream
public static "compare"(charSequence0: charseq, charSequence1: charseq): integer
public "delete"(int0: integer, int1: integer): $AbstractStringBuilder
public "deleteCharAt"(int0: integer): $AbstractStringBuilder
public "ensureCapacity"(int0: integer): void
public "getChars"(int0: integer, int1: integer, char2s: character[], int3: integer): void
public "indexOf"(string0: string): integer
public "indexOf"(string0: string, int1: integer): integer
public "insert"(int0: integer, string1: string): $AbstractStringBuilder
public "insert"(int0: integer, charSequence1: charseq): $AbstractStringBuilder
public "insert"(int0: integer, char1s: character[]): $AbstractStringBuilder
public "insert"(int0: integer, object1: any): $AbstractStringBuilder
public "insert"(int0: integer, char1s: character[], int2: integer, int3: integer): $AbstractStringBuilder
public "insert"(int0: integer, boolean1: boolean): $AbstractStringBuilder
public "insert"(int0: integer, float1: float): $AbstractStringBuilder
public "insert"(int0: integer, double1: double): $AbstractStringBuilder
public "insert"(int0: integer, long1: long): $AbstractStringBuilder
public "insert"(int0: integer, charSequence1: charseq, int2: integer, int3: integer): $AbstractStringBuilder
public "insert"(int0: integer, int1: integer): $AbstractStringBuilder
public "insert"(int0: integer, char1: character): $AbstractStringBuilder
public "isEmpty"(): boolean
public "lastIndexOf"(string0: string): integer
public "lastIndexOf"(string0: string, int1: integer): integer
public "length"(): integer
public "offsetByCodePoints"(int0: integer, int1: integer): integer
public "replace"(int0: integer, int1: integer, string2: string): $AbstractStringBuilder
public "reverse"(): $AbstractStringBuilder
public "setCharAt"(int0: integer, char1: character): void
public "setLength"(int0: integer): void
public "subSequence"(int0: integer, int1: integer): charseq
public "substring"(int0: integer): string
public "substring"(int0: integer, int1: integer): string
public "trimToSize"(): void
get "empty"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractStringBuilder$$Type = ($AbstractStringBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractStringBuilder_ = $AbstractStringBuilder$$Type;
}
}

