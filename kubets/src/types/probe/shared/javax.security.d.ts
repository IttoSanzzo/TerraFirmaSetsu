declare module "packages/javax/security/auth/$Subject" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $PrivilegedAction$$Type } from "packages/java/security/$PrivilegedAction"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Principal, $Principal$$Type } from "packages/java/security/$Principal"
import { $PrivilegedExceptionAction$$Type } from "packages/java/security/$PrivilegedExceptionAction"
import { $AccessControlContext$$Type } from "packages/java/security/$AccessControlContext"

export class $Subject implements $Serializable {
constructor()
constructor(boolean0: boolean, set1: $Set$$Type<$Principal$$Type>, set2: $Set$$Type<any>, set3: $Set$$Type<any>)

public static "doAs"<T>(subject0: $Subject$$Type, privilegedExceptionAction1: $PrivilegedExceptionAction$$Type<T>): T
public static "doAs"<T>(subject0: $Subject$$Type, privilegedAction1: $PrivilegedAction$$Type<T>): T
/** @deprecated */
public static "doAsPrivileged"<T>(subject0: $Subject$$Type, privilegedExceptionAction1: $PrivilegedExceptionAction$$Type<T>, accessControlContext2: $AccessControlContext$$Type): T
/** @deprecated */
public static "doAsPrivileged"<T>(subject0: $Subject$$Type, privilegedAction1: $PrivilegedAction$$Type<T>, accessControlContext2: $AccessControlContext$$Type): T
public "getPrincipals"<T extends $Principal>(class0: $Class$$Type<T>): $Set<T>
public "getPrincipals"(): $Set<$Principal>
public "getPrivateCredentials"<T>(class0: $Class$$Type<T>): $Set<T>
public "getPrivateCredentials"(): $Set<any>
public "getPublicCredentials"(): $Set<any>
public "getPublicCredentials"<T>(class0: $Class$$Type<T>): $Set<T>
/** @deprecated */
public static "getSubject"(accessControlContext0: $AccessControlContext$$Type): $Subject
public "isReadOnly"(): boolean
public "setReadOnly"(): void
get "principals"(): $Set<$Principal>
get "privateCredentials"(): $Set<any>
get "publicCredentials"(): $Set<any>
get "readOnly"(): boolean
}
}

declare module "packages/javax/security/auth/$Destroyable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Destroyable {
"destroy"(): void
"isDestroyed"(): boolean
get "destroyed"(): boolean
}

export namespace $Destroyable {
const probejs$$marker: never
}
export abstract class $Destroyable$$Static implements $Destroyable {
}
}

