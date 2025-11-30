declare module "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo" {
import { $Cancellable } from "packages/org/spongepowered/asm/mixin/injection/callback/$Cancellable"
import { $Type$$Type } from "packages/org/objectweb/asm/$Type"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CallbackInfo implements $Cancellable {
constructor(string0: string, boolean1: boolean)

public "cancel"(): void
public static "getCallInfoClassName"(type0: $Type$$Type): string
public "getId"(): string
public "isCancellable"(): boolean
public "isCancelled"(): boolean
get "id"(): string
get "cancellable"(): boolean
get "cancelled"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CallbackInfo$$Type = ($CallbackInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CallbackInfo_ = $CallbackInfo$$Type;
}
}

declare module "packages/org/spongepowered/asm/mixin/injection/callback/$Cancellable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Cancellable {
"cancel"(): void
"isCancellable"(): boolean
"isCancelled"(): boolean
get "cancellable"(): boolean
get "cancelled"(): boolean
}

export namespace $Cancellable {
const probejs$$marker: never
}
export abstract class $Cancellable$$Static implements $Cancellable {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Cancellable$$Type = ($Cancellable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Cancellable_ = $Cancellable$$Type;
}
}

declare module "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable" {
import { $CallbackInfo } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CallbackInfoReturnable<R> extends $CallbackInfo {
constructor(string0: string, boolean1: boolean, float2: float)
constructor(string0: string, boolean1: boolean, int2: integer)
constructor(string0: string, boolean1: boolean, long2: long)
constructor(string0: string, boolean1: boolean, short2: short)
constructor(string0: string, boolean1: boolean, boolean2: boolean)
constructor(string0: string, boolean1: boolean)
constructor(string0: string, boolean1: boolean, r2: R)
constructor(string0: string, boolean1: boolean, byte2: byte)
constructor(string0: string, boolean1: boolean, char2: character)
constructor(string0: string, boolean1: boolean, double2: double)

public "getReturnValue"(): R
public "getReturnValueB"(): byte
public "getReturnValueC"(): character
public "getReturnValueD"(): double
public "getReturnValueF"(): float
public "getReturnValueI"(): integer
public "getReturnValueJ"(): long
public "getReturnValueS"(): short
public "getReturnValueZ"(): boolean
public "setReturnValue"(r0: R): void
get "returnValue"(): R
get "returnValueB"(): byte
get "returnValueC"(): character
get "returnValueD"(): double
get "returnValueF"(): float
get "returnValueI"(): integer
get "returnValueJ"(): long
get "returnValueS"(): short
get "returnValueZ"(): boolean
set "returnValue"(value: R)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CallbackInfoReturnable$$Type<R> = ($CallbackInfoReturnable<R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CallbackInfoReturnable_<R> = $CallbackInfoReturnable$$Type<R>;
}
}

