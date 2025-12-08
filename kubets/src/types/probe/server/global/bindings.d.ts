import { $NBTIOWrapper$$Static } from "packages/dev/latvian/mods/kubejs/util/$NBTIOWrapper"
import { $KMath } from "packages/dev/latvian/mods/kubejs/bindings/$KMath"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $ColorWrapper$$Static } from "packages/dev/latvian/mods/rhino/mod/wrapper/$ColorWrapper"
import { $Vec3i } from "packages/net/minecraft/core/$Vec3i"
import { $DamageSource } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $NBTUtils$$Static } from "packages/dev/latvian/mods/rhino/mod/util/$NBTUtils"
import { $PlatformWrapper } from "packages/dev/latvian/mods/kubejs/script/$PlatformWrapper"
import { $LootEntryWrapper } from "packages/com/almostreliable/lootjs/kube/$LootEntryWrapper"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Reference } from "packages/snownee/lychee/core/$Reference"
import { $LootContextType } from "packages/com/almostreliable/lootjs/core/$LootContextType"
import { $Blocks } from "packages/net/minecraft/world/level/block/$Blocks"
import { $NotificationBuilder } from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import { $BlockWrapper } from "packages/dev/latvian/mods/kubejs/bindings/$BlockWrapper"
import { $OutputItem } from "packages/dev/latvian/mods/kubejs/item/$OutputItem"
import { $TextWrapper } from "packages/dev/latvian/mods/kubejs/bindings/$TextWrapper"
import { $Items } from "packages/net/minecraft/world/item/$Items"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Matrix3f } from "packages/org/joml/$Matrix3f"
import { $Stats } from "packages/net/minecraft/stats/$Stats"
import { $LootContextParams } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParams"
import { $Math } from "packages/java/lang/$Math"
import { $ItemFilter$$Static } from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import { $ItemWrapper$$Static } from "packages/dev/latvian/mods/kubejs/bindings/$ItemWrapper"
import { $JavaWrapper } from "packages/dev/latvian/mods/kubejs/bindings/$JavaWrapper"
import { $Quaternionf } from "packages/org/joml/$Quaternionf"
import { $RotationAxis } from "packages/dev/latvian/mods/kubejs/util/$RotationAxis"
import { $Painter } from "packages/dev/latvian/mods/kubejs/client/painter/$Painter"
import { $FluidAmounts$$Static } from "packages/dev/latvian/mods/kubejs/util/$FluidAmounts"
import { $UtilsWrapper$$Static } from "packages/dev/latvian/mods/kubejs/bindings/$UtilsWrapper"
import { $Matrix4f } from "packages/org/joml/$Matrix4f"
import { $IngredientForgeHelper } from "packages/dev/latvian/mods/kubejs/platform/forge/$IngredientForgeHelper"
import { $FluidWrapper } from "packages/dev/latvian/mods/kubejs/fluid/$FluidWrapper"
import { $InputItem } from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import { $BlockStateProperties } from "packages/net/minecraft/world/level/block/state/properties/$BlockStateProperties"
import { $ForgeItemFilter$$Static } from "packages/com/almostreliable/lootjs/forge/filters/$ForgeItemFilter"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $LycheeLootContextParams } from "packages/snownee/lychee/$LycheeLootContextParams"
import { $UUIDWrapper$$Static } from "packages/dev/latvian/mods/rhino/mod/wrapper/$UUIDWrapper"
import { $Vector4f } from "packages/org/joml/$Vector4f"
import { $HashMap } from "packages/java/util/$HashMap"
import { $AABBWrapper$$Static } from "packages/dev/latvian/mods/rhino/mod/wrapper/$AABBWrapper"
import { $BlockStatePredicate$$Static } from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $IngredientWrapper$$Static } from "packages/dev/latvian/mods/kubejs/bindings/$IngredientWrapper"
import { $Duration } from "packages/java/time/$Duration"
import { $ConsoleJS } from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"
import { $IntervalJS } from "packages/com/almostreliable/lootjs/kube/wrapper/$IntervalJS"
import { $Minecraft } from "packages/net/minecraft/client/$Minecraft"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $TFCBindings } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$TFCBindings"
import { $JsonIO } from "packages/dev/latvian/mods/kubejs/util/$JsonIO"
import { $DirectionWrapper$$Static } from "packages/dev/latvian/mods/rhino/mod/wrapper/$DirectionWrapper"

declare global {
const AABB: (typeof $AABBWrapper$$Static)
const Block: (typeof $BlockWrapper)
const BlockPos: (typeof $BlockPos)
const BlockProperties: (typeof $BlockStateProperties)
const BlockStatePredicate: (typeof $BlockStatePredicate$$Static)
const Blocks: (typeof $Blocks)
const Client: $Minecraft
const Color: (typeof $ColorWrapper$$Static)
const Component: (typeof $TextWrapper)
const DamageSource: (typeof $DamageSource)
const Direction: (typeof $DirectionWrapper$$Static)
const Duration: (typeof $Duration)
const Facing: (typeof $DirectionWrapper$$Static)
const Fluid: (typeof $FluidWrapper)
const FluidAmounts: (typeof $FluidAmounts$$Static)
const ForgeItemFilter: (typeof $ForgeItemFilter$$Static)
const HOUR: double
const Ingredient: (typeof $IngredientWrapper$$Static)
const IngredientHelper: $IngredientForgeHelper
const InputItem: (typeof $InputItem)
const InteractionResult: (typeof $InteractionResult)
const Interval: $IntervalJS
const Item: (typeof $ItemWrapper$$Static)
const ItemFilter: (typeof $ItemFilter$$Static)
const Items: (typeof $Items)
const Java: $JavaWrapper
const JavaMath: (typeof $Math)
const JsonIO: (typeof $JsonIO)
const KMath: (typeof $KMath)
const LootContextParams: (typeof $LootContextParams)
const LootEntry: (typeof $LootEntryWrapper)
const LootType: (typeof $LootContextType)
const LycheeLootContextParams: (typeof $LycheeLootContextParams)
const LycheeReference: (typeof $Reference)
const MINUTE: double
const Matrix3f: (typeof $Matrix3f)
const Matrix4f: (typeof $Matrix4f)
const NBT: (typeof $NBTUtils$$Static)
const NBTIO: (typeof $NBTIOWrapper$$Static)
const Notification: (typeof $NotificationBuilder)
const OutputItem: (typeof $OutputItem)
const Painter: $Painter
const Platform: (typeof $PlatformWrapper)
const Quaternionf: (typeof $Quaternionf)
const ResourceLocation: (typeof $ResourceLocation)
const RotationAxis: (typeof $RotationAxis)
const SECOND: double
const SoundType: (typeof $SoundType)
const Stats: (typeof $Stats)
const TFC: (typeof $TFCBindings)
const Text: (typeof $TextWrapper)
const UUID: (typeof $UUIDWrapper$$Static)
const Utils: (typeof $UtilsWrapper$$Static)
const Vec3d: (typeof $Vec3)
const Vec3f: (typeof $Vector3f)
const Vec3i: (typeof $Vec3i)
const Vec4f: (typeof $Vector4f)
const clearInterval: ((...args: any[]) => any)
const clearTimeout: ((...args: any[]) => any)
const console: $ConsoleJS
const global: ($HashMap<any, any> & ProbeJS$$ResolvedGlobal)
const onEvent: ((...args: any[]) => any)
const setInterval: ((...args: any[]) => any)
const setTimeout: ((...args: any[]) => any)
const settings: ((...args: any[]) => any)
}
