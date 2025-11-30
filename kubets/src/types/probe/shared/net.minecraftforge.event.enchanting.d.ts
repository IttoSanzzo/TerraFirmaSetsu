declare module "packages/net/minecraftforge/event/enchanting/$EnchantmentLevelSetEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $EnchantmentLevelSetEvent extends $Event {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer, itemStack4: $ItemStack$$Type, int5: integer)

public "getEnchantLevel"(): integer
public "getEnchantRow"(): integer
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getOriginalLevel"(): integer
public "getPos"(): $BlockPos
public "getPower"(): integer
public "setEnchantLevel"(int0: integer): void
get "enchantLevel"(): integer
get "enchantRow"(): integer
get "item"(): $ItemStack
get "level"(): $Level
get "originalLevel"(): integer
get "pos"(): $BlockPos
get "power"(): integer
set "enchantLevel"(value: integer)
}
}

