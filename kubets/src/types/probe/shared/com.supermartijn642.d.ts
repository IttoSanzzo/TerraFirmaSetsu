declare module "packages/com/supermartijn642/core/render/$RenderWorldEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"

export class $RenderWorldEvent extends $Event {
constructor()
constructor(poseStack: $PoseStack$$Type, partialTicks: float)

public "getPartialTicks"(): float
public "getPoseStack"(): $PoseStack
get "partialTicks"(): float
get "poseStack"(): $PoseStack
}
}

declare module "packages/com/supermartijn642/core/mixin/$BlockPropertiesAccessor" {
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $BlockPropertiesAccessor {
"getLootTableSupplier"(): $Supplier<$ResourceLocation>
"setLootTableSupplier"(supplier: $Supplier$$Type<$ResourceLocation>): void
get "lootTableSupplier"(): $Supplier<$ResourceLocation>
set "lootTableSupplier"(value: $Supplier$$Type<$ResourceLocation>)
}

export namespace $BlockPropertiesAccessor {
const probejs$$marker: never
}
export abstract class $BlockPropertiesAccessor$$Static implements $BlockPropertiesAccessor {
}
}

