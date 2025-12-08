declare module "packages/net/minecraft/client/color/block/$BlockColor" {
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $BlockColor {
"getColor"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): integer
}

export namespace $BlockColor {
const probejs$$marker: never
}
export abstract class $BlockColor$$Static implements $BlockColor {
}
}

declare module "packages/net/minecraft/client/color/item/$ItemColors" {
import { $AccessorItemColors } from "packages/org/violetmoon/zetaimplforge/mixin/mixins/client/$AccessorItemColors"
import { $BlockColors$$Type } from "packages/net/minecraft/client/color/block/$BlockColors"
import { $ItemColorsExtended } from "packages/me/jellysquid/mods/sodium/client/model/color/interop/$ItemColorsExtended"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $ItemColorsForgeAccessor } from "packages/fuzs/puzzleslib/mixin/client/accessor/$ItemColorsForgeAccessor"
import { $ItemColorsAccess } from "packages/snownee/kiwi/mixin/forge/$ItemColorsAccess"
import { $ItemColor, $ItemColor$$Type } from "packages/net/minecraft/client/color/item/$ItemColor"

export class $ItemColors implements $ItemColorsAccess, $AccessorItemColors, $ItemColorsForgeAccessor, $ItemColorsExtended {
constructor()

public static "createDefault"(blockColors0: $BlockColors$$Type): $ItemColors
public "getColor"(itemStack0: $ItemStack$$Type, int1: integer): integer
/** @deprecated */
public "register"(itemColor0: $ItemColor$$Type, ...itemLike1s: $ItemLike$$Type[]): void
public "sodium$getColorProvider"(itemStack0: $ItemStack$$Type): $ItemColor
}
}

declare module "packages/net/minecraft/client/color/item/$ItemColor" {
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemColor {
"getColor"(itemStack0: $ItemStack$$Type, int1: integer): integer
}

export namespace $ItemColor {
const probejs$$marker: never
}
export abstract class $ItemColor$$Static implements $ItemColor {
}
}

declare module "packages/net/minecraft/client/color/block/$BlockColors" {
import { $BlockColor, $BlockColor$$Type } from "packages/net/minecraft/client/color/block/$BlockColor"
import { $Reference2ReferenceMap } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceMap"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $AccessorBlockColors } from "packages/org/violetmoon/zetaimplforge/mixin/mixins/client/$AccessorBlockColors"
import { $ReferenceSet } from "packages/it/unimi/dsi/fastutil/objects/$ReferenceSet"
import { $BlockColorsAccess } from "packages/snownee/kiwi/mixin/forge/$BlockColorsAccess"
import { $Set } from "packages/java/util/$Set"
import { $Property } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $BlockColorsForgeAccessor } from "packages/fuzs/puzzleslib/mixin/client/accessor/$BlockColorsForgeAccessor"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $BlockColorsExtended } from "packages/me/jellysquid/mods/sodium/client/model/color/interop/$BlockColorsExtended"
import { $Map } from "packages/java/util/$Map"

export class $BlockColors implements $BlockColorsAccess, $AccessorBlockColors, $BlockColorsForgeAccessor, $BlockColorsExtended {
readonly "blockColors": $Map<$Holder$Reference<$Block>, $BlockColor>

constructor()

public static "createDefault"(): $BlockColors
public "embeddium$getOverridenVanillaBlocks"(): $ReferenceSet<any>
public "getColor"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): integer
public "getColor"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): integer
public "getColoringProperties"(block0: $Block$$Type): $Set<$Property<any>>
public static "getOverridenVanillaBlocks"(blockColors0: $BlockColors$$Type): $ReferenceSet<$Block>
public static "getProviders"(blockColors0: $BlockColors$$Type): $Reference2ReferenceMap<$Block, $BlockColor>
/** @deprecated */
public "register"(blockColor0: $BlockColor$$Type, ...block1s: $Block$$Type[]): void
public "sodium$getProviders"(): $Reference2ReferenceMap<any, any>
}
}

