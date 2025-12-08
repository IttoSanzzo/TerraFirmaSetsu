declare module "packages/toni/sodiumoptionsapi/api/$ExtendedOptionGroup" {
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $OptionIdentifier$$Type } from "packages/toni/sodiumoptionsapi/api/$OptionIdentifier"
import { $OptionGroup$Builder } from "packages/me/jellysquid/mods/sodium/client/gui/options/$OptionGroup$Builder"

export interface $ExtendedOptionGroup {
"sodiumOptionsAPI$setId"(optionIdentifier0: $OptionIdentifier$$Type<void>): $OptionGroup$Builder
"sodiumOptionsAPI$setId"(resourceLocation0: $ResourceLocation$$Type): $OptionGroup$Builder
}

export namespace $ExtendedOptionGroup {
function createBuilder(id: $ResourceLocation$$Type): $OptionGroup$Builder
function createBuilder(id: $OptionIdentifier$$Type<void>): $OptionGroup$Builder
}
export abstract class $ExtendedOptionGroup$$Static implements $ExtendedOptionGroup {
static "createBuilder"(id: $ResourceLocation$$Type): $OptionGroup$Builder
static "createBuilder"(id: $OptionIdentifier$$Type<void>): $OptionGroup$Builder
}
}

declare module "packages/toni/sodiumoptionsapi/api/$OptionIdentifier" {
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $OptionIdentifier<T> {
static readonly "EMPTY": $OptionIdentifier<void>

constructor(modId: string, path: string, clz: $Class$$Type<T>)

public static "create"<T>(location: $ResourceLocation$$Type, clz: $Class$$Type<T>): $OptionIdentifier<T>
public static "create"(location: $ResourceLocation$$Type): $OptionIdentifier<void>
public static "create"<T>(modId: string, path: string, clz: $Class$$Type<T>): $OptionIdentifier<T>
public static "create"(modId: string, path: string): $OptionIdentifier<void>
public "getModId"(): string
public "getPath"(): string
public "getType"(): $Class<T>
public static "isPresent"(id: $OptionIdentifier$$Type<any>): boolean
public "matches"(other: $ResourceLocation$$Type): boolean
public "matches"(other: $OptionIdentifier$$Type<any>): boolean
get "modId"(): string
get "path"(): string
get "type"(): $Class<T>
}
}

declare module "packages/toni/sodiumoptionsapi/util/$IOptionGroupIdAccessor" {
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $OptionIdentifier, $OptionIdentifier$$Type } from "packages/toni/sodiumoptionsapi/api/$OptionIdentifier"

export interface $IOptionGroupIdAccessor {
"sodiumOptionsAPI$getId"(): $OptionIdentifier<void>
"sodiumOptionsAPI$setId"(optionIdentifier0: $OptionIdentifier$$Type<void>): void
"sodiumOptionsAPI$setId"(resourceLocation0: $ResourceLocation$$Type): void
}

export namespace $IOptionGroupIdAccessor {
const probejs$$marker: never
}
export abstract class $IOptionGroupIdAccessor$$Static implements $IOptionGroupIdAccessor {
}
}

