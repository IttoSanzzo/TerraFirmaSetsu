declare module "packages/dev/latvian/mods/rhino/$Callable" {
import { $Context } from "packages/dev/latvian/mods/rhino/$Context"
import { $Scriptable } from "packages/dev/latvian/mods/rhino/$Scriptable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Callable$$Type = ($Callable | ((arg0: $Context, arg1: $Scriptable, arg2: $Scriptable, arg3: any[]) => any));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Callable_ = $Callable$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$ClassShutter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClassShutter$$Type = ($ClassShutter | ((arg0: string, arg1: integer) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClassShutter_ = $ClassShutter$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$SymbolScriptable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SymbolScriptable$$Type = ($SymbolScriptable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SymbolScriptable_ = $SymbolScriptable$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$WrapFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WrapFactory$$Type = ($WrapFactory);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WrapFactory_ = $WrapFactory$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/mod/wrapper/$DirectionWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DirectionWrapper$$Type = ($DirectionWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DirectionWrapper_ = $DirectionWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$IdEnumerationIterator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IdEnumerationIterator$$Type = ($IdEnumerationIterator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IdEnumerationIterator_ = $IdEnumerationIterator$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/mod/util/$NBTUtils" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NBTUtils$$Type = ($NBTUtils);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NBTUtils_ = $NBTUtils$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/mod/util/$NBTSerializable" {
import { $Tag$$Type } from "packages/net/minecraft/nbt/$Tag"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NBTSerializable$$Type = ($NBTSerializable | (() => $Tag$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NBTSerializable_ = $NBTSerializable$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/mod/wrapper/$UUIDWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UUIDWrapper$$Type = ($UUIDWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UUIDWrapper_ = $UUIDWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$MemberType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MemberType$$Type = ($MemberType | ("undefined" | "object" | "function" | "symbol" | "string" | "number" | "boolean"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MemberType_ = $MemberType$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapperProvider" {
import { $CustomJavaToJsWrapper$$Type } from "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomJavaToJsWrapperProvider$$Type<T> = ($CustomJavaToJsWrapperProvider<T> | ((arg0: T) => $CustomJavaToJsWrapper$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomJavaToJsWrapperProvider_<T> = $CustomJavaToJsWrapperProvider$$Type<T>;
}
}

declare module "packages/dev/latvian/mods/rhino/mod/util/$CountingMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CountingMap$$Type = ($CountingMap);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CountingMap_ = $CountingMap$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$IdScriptableObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IdScriptableObject$$Type = ($IdScriptableObject);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IdScriptableObject_ = $IdScriptableObject$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/util/$ValueUnwrapper" {
import { $Context } from "packages/dev/latvian/mods/rhino/$Context"
import { $Scriptable } from "packages/dev/latvian/mods/rhino/$Scriptable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ValueUnwrapper$$Type = ($ValueUnwrapper | ((arg0: $Context, arg1: $Scriptable, arg2: any) => any));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ValueUnwrapper_ = $ValueUnwrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$WrappedExecutable" {
import { $Context } from "packages/dev/latvian/mods/rhino/$Context"
import { $Scriptable } from "packages/dev/latvian/mods/rhino/$Scriptable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WrappedExecutable$$Type = ($WrappedExecutable | ((arg0: $Context, arg1: $Scriptable, arg2: any, arg3: any[]) => any));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WrappedExecutable_ = $WrappedExecutable$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrapperFactory" {
import { $Context } from "packages/dev/latvian/mods/rhino/$Context"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypeWrapperFactory$$Type<T> = ($TypeWrapperFactory<T> | ((arg0: $Context, arg1: any) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypeWrapperFactory_<T> = $TypeWrapperFactory$$Type<T>;
}
}

declare module "packages/dev/latvian/mods/rhino/$Script" {
import { $Context } from "packages/dev/latvian/mods/rhino/$Context"
import { $Scriptable } from "packages/dev/latvian/mods/rhino/$Scriptable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Script$$Type = ($Script | ((arg0: $Context, arg1: $Scriptable) => any));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Script_ = $Script$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$GeneratedClassLoader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeneratedClassLoader$$Type = ($GeneratedClassLoader);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeneratedClassLoader_ = $GeneratedClassLoader$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Context$$Type = ($Context);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Context_ = $Context$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/mod/util/$OrderedCompoundTag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OrderedCompoundTag$$Type = ($OrderedCompoundTag);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OrderedCompoundTag_ = $OrderedCompoundTag$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/util/$SpecialEquality" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpecialEquality$$Type = ($SpecialEquality);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpecialEquality_ = $SpecialEquality$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$ScriptableObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScriptableObject$$Type = ($ScriptableObject);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScriptableObject_ = $ScriptableObject$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$ScriptStackElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScriptStackElement$$Type = ($ScriptStackElement);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScriptStackElement_ = $ScriptStackElement$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$ErrorReporter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ErrorReporter$$Type = ($ErrorReporter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ErrorReporter_ = $ErrorReporter$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$Function" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function$$Type = ($Function);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function_ = $Function$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/mod/wrapper/$ColorWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ColorWrapper$$Type = ($ColorWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ColorWrapper_ = $ColorWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper" {
import { $Context } from "packages/dev/latvian/mods/rhino/$Context"
import { $Class } from "packages/java/lang/$Class"
import { $Scriptable, $Scriptable$$Type } from "packages/dev/latvian/mods/rhino/$Scriptable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomJavaToJsWrapper$$Type = ($CustomJavaToJsWrapper | ((arg0: $Context, arg1: $Scriptable, arg2: $Class<any>) => $Scriptable$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomJavaToJsWrapper_ = $CustomJavaToJsWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$NativeJavaObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NativeJavaObject$$Type = ($NativeJavaObject);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NativeJavaObject_ = $NativeJavaObject$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/mod/util/$JsonSerializable" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $JsonSerializable$$Type = ($JsonSerializable | (() => $JsonElement$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $JsonSerializable_ = $JsonSerializable$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$CustomProperty" {
import { $Context } from "packages/dev/latvian/mods/rhino/$Context"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomProperty$$Type = ($CustomProperty | ((arg0: $Context) => any));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomProperty_ = $CustomProperty$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrappers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypeWrappers$$Type = ($TypeWrappers);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypeWrappers_ = $TypeWrappers$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/mod/util/$Object2LongEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Object2LongEntry$$Type = ($Object2LongEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Object2LongEntry_ = $Object2LongEntry$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$NativeJavaClass" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NativeJavaClass$$Type = ($NativeJavaClass);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NativeJavaClass_ = $NativeJavaClass$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/mod/wrapper/$AABBWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AABBWrapper$$Type = ($AABBWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AABBWrapper_ = $AABBWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$IdFunctionObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IdFunctionObject$$Type = ($IdFunctionObject);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IdFunctionObject_ = $IdFunctionObject$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$Wrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Wrapper$$Type = ($Wrapper | (() => any));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Wrapper_ = $Wrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$RhinoException" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RhinoException$$Type = ($RhinoException);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RhinoException_ = $RhinoException$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$IdFunctionCall" {
import { $Context } from "packages/dev/latvian/mods/rhino/$Context"
import { $IdFunctionObject } from "packages/dev/latvian/mods/rhino/$IdFunctionObject"
import { $Scriptable } from "packages/dev/latvian/mods/rhino/$Scriptable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IdFunctionCall$$Type = ($IdFunctionCall | ((arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: any[]) => any));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IdFunctionCall_ = $IdFunctionCall$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrapperFactory$Simple" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypeWrapperFactory$Simple$$Type<T> = ($TypeWrapperFactory$Simple<T> | ((arg0: any) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypeWrapperFactory$Simple_<T> = $TypeWrapperFactory$Simple$$Type<T>;
}
}

declare module "packages/dev/latvian/mods/rhino/$ExternalArrayData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ExternalArrayData$$Type = ($ExternalArrayData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ExternalArrayData_ = $ExternalArrayData$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$ConstProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConstProperties$$Type = ($ConstProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConstProperties_ = $ConstProperties$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/regexp/$RegExp" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegExp$$Type = ($RegExp);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegExp_ = $RegExp$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$BaseFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BaseFunction$$Type = ($BaseFunction);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BaseFunction_ = $BaseFunction$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/mod/util/color/$Color" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Color$$Type = ($Color | ("" | "light_blue_dye" | "blue_dye" | "purple_dye" | "dark_red" | "lightgraydye" | "dark_aqua" | "none" | "green_dye" | "blackdye" | "dark_blue" | "red" | "pink_dye" | "aqua" | "white" | "white_dye" | "dark_gray" | "light_purple" | "brown_dye" | "black" | "darkpurple" | "lightbluedye" | "limedye" | "magenta_dye" | "-" | "lime_dye" | "yellowdye" | "graydye" | "purpledye" | "dark_purple" | "orange_dye" | "darkgray" | "browndye" | "yellow" | "bluedye" | "pinkdye" | "cyandye" | "gold" | "gray" | "blue" | "darkblue" | "transparent" | "red_dye" | "darkred" | "greendye" | "reddye" | "gray_dye" | "orangedye" | "yellow_dye" | "black_dye" | "magentadye" | "green" | "light_gray_dye" | "darkgreen" | "dark_green" | "lightpurple" | "darkaqua" | "cyan_dye" | "whitedye") | `#${string}` | integer | (() => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Color_ = $Color$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/util/$Remapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Remapper$$Type = ($Remapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Remapper_ = $Remapper$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$EvaluatorException" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EvaluatorException$$Type = ($EvaluatorException);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EvaluatorException_ = $EvaluatorException$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$Scriptable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Scriptable$$Type = ($Scriptable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Scriptable_ = $Scriptable$$Type;
}
}

declare module "packages/dev/latvian/mods/rhino/$Symbol" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Symbol$$Type = ($Symbol);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Symbol_ = $Symbol$$Type;
}
}

