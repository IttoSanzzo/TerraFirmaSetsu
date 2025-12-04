declare module "packages/dev/latvian/mods/kubejs/bindings/$JavaWrapper" {
import { $ScriptManager$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptManager"
import { $ConsoleJS } from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"

/** Methods for working with Java classes. Reflection my beloved ♥ */
export class $JavaWrapper {
constructor(manager: $ScriptManager$$Type)

/** Creates a custom ConsoleJS instance for you to use to, well, log stuff */
public "createConsole"(name: string): $ConsoleJS
/**
 * Loads the specified class, and throws error if class it not found or allowed.
 * The returned object can have public static methods and fields accessed directly from it.
 * Constructors can be used with the new keyword.
 */
public "loadClass"<T extends ClassPath>(className: T): LoadClass<T>
/**
 * Loads the specified class, and returns null if class is not found or allowed.
 * The returned object can have public static methods and fields accessed directly from it.
 * Constructors can be used with the new keyword.
 */
public "tryLoadClass"<T extends ClassPath>(className: T): LoadClass<T>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $JavaWrapper$$Type = ($JavaWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $JavaWrapper_ = $JavaWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/bindings/$TextWrapper" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Tag$$Type } from "packages/net/minecraft/nbt/$Tag"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $ClickEvent } from "packages/net/minecraft/network/chat/$ClickEvent"
import { $MutableComponent, $MutableComponent$$Type } from "packages/net/minecraft/network/chat/$MutableComponent"

/** The hub for all things text components. Format text to your hearts content! */
export class $TextWrapper {
constructor()

/** Returns a component of the input, colored aqua */
public static "aqua"(text: any): $MutableComponent
/** Returns a component of the input, colored black */
public static "black"(text: any): $MutableComponent
/** Returns a component of the input, colored blue */
public static "blue"(text: any): $MutableComponent
/** Returns a ClickEvent of the input */
public static "clickEventOf"(o: any): $ClickEvent
/** Returns a component of the input, colored dark aqua */
public static "darkAqua"(text: any): $MutableComponent
/** Returns a component of the input, colored dark blue */
public static "darkBlue"(text: any): $MutableComponent
/** Returns a component of the input, colored dark gray */
public static "darkGray"(text: any): $MutableComponent
/** Returns a component of the input, colored dark green */
public static "darkGreen"(text: any): $MutableComponent
/** Returns a component of the input, colored dark purple */
public static "darkPurple"(text: any): $MutableComponent
/** Returns a component of the input, colored dark red */
public static "darkRed"(text: any): $MutableComponent
/** Returns an empty component */
public static "empty"(): $MutableComponent
/** Returns a component of the input, colored gold */
public static "gold"(text: any): $MutableComponent
/** Returns a component of the input, colored gray */
public static "gray"(text: any): $MutableComponent
/** Returns a component of the input, colored green */
public static "green"(text: any): $MutableComponent
/** Checks if the passed in component, and all its children are empty */
public static "isEmpty"(component: $Component$$Type): boolean
/** Joins all components in the list with the separator component */
public static "join"(separator: $MutableComponent$$Type, texts: $Iterable$$Type<$Component$$Type>): $MutableComponent
/** Joins all components */
public static "join"(...texts: $Component$$Type[]): $MutableComponent
/** Returns a keybinding component of the input keybinding descriptor */
public static "keybind"(keybind: string): $MutableComponent
/** Returns a component of the input, colored light purple */
public static "lightPurple"(text: any): $MutableComponent
/** Returns a plain component of the input */
public static "literal"(text: string): $MutableComponent
/** Returns a Component of the input */
public static "of"(o: $Component$$Type): $MutableComponent
/** Returns a plain component of the string, or empty if it is an empty string */
public static "ofString"(s: string): $MutableComponent
/** Returns a colorful representation of the input nbt. Useful for displaying NBT to the player */
public static "prettyPrintNbt"(tag: $Tag$$Type): $Component
/** Returns a component of the input, colored red */
public static "red"(text: any): $MutableComponent
/** Returns a score component of the input objective, for the provided selector */
public static "score"(selector: string, objective: string): $MutableComponent
/** Returns a component displaying all entities matching the input selector, with a custom separator */
public static "selector"(selector: string, separator: $Component$$Type): $MutableComponent
/** Returns a component displaying all entities matching the input selector */
public static "selector"(selector: string): $MutableComponent
/** Returns a plain component of the passed in string, even if empty */
public static "string"(text: string): $MutableComponent
/** Returns a translatable component of the input key, with args of the objects */
public static "translatable"(key: string, ...objects: any[]): $MutableComponent
/** Returns a translatable component of the input key */
public static "translatable"(key: string): $MutableComponent
/** Returns a translatable component of the input key */
public static "translate"(key: string): $MutableComponent
/** Returns a translatable component of the input key, with args of the objects */
public static "translate"(key: string, ...objects: any[]): $MutableComponent
/** Returns a component of the input, colored white */
public static "white"(text: any): $MutableComponent
/** Returns a component of the input, colored yellow */
public static "yellow"(text: any): $MutableComponent
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TextWrapper$$Type = ($TextWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TextWrapper_ = $TextWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/bindings/$KMath" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KMath$$Type = ($KMath);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KMath_ = $KMath$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/bindings/$IngredientWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IngredientWrapper$$Type = ($IngredientWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IngredientWrapper_ = $IngredientWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/bindings/$BlockWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockWrapper$$Type = ($BlockWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockWrapper_ = $BlockWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/bindings/$ItemWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemWrapper$$Type = ($ItemWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemWrapper_ = $ItemWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/bindings/$UtilsWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UtilsWrapper$$Type = ($UtilsWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UtilsWrapper_ = $UtilsWrapper$$Type;
}
}

