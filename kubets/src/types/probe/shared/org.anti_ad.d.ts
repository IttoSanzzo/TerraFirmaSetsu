declare module "packages/org/anti_ad/mc/ipnext/mixinhelpers/$IMixinItemGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinItemGroup {
"getIPNPriorityIndex"(): integer
"setIPNPriorityIndex"(int0: integer): void
get "iPNPriorityIndex"(): integer
set "iPNPriorityIndex"(value: integer)
}

export namespace $IMixinItemGroup {
const probejs$$marker: never
}
export abstract class $IMixinItemGroup$$Static implements $IMixinItemGroup {
}
}

declare module "packages/org/anti_ad/mc/ipnext/mixinhelpers/$IMixinSerializedCapsAccessor" {
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IMixinSerializedCapsAccessor {
"IPN$serializeCaps"(): $CompoundTag
}

export namespace $IMixinSerializedCapsAccessor {
const probejs$$marker: never
}
export abstract class $IMixinSerializedCapsAccessor$$Static implements $IMixinSerializedCapsAccessor {
}
}

declare module "packages/org/anti_ad/mc/ipnext/mixin/$IMixinKeyBinding" {
import { $InputConstants$Key } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IMixinKeyBinding {
"getKeyCode"(): $InputConstants$Key
"getPressed"(): boolean
"getTimesPressed"(): integer
"setPressed"(boolean0: boolean): void
"setTimesPressed"(int0: integer): void
get "keyCode"(): $InputConstants$Key
get "pressed"(): boolean
get "timesPressed"(): integer
set "pressed"(value: boolean)
set "timesPressed"(value: integer)
}

export namespace $IMixinKeyBinding {
const probejs$$marker: never
}
export abstract class $IMixinKeyBinding$$Static implements $IMixinKeyBinding {
}
}

