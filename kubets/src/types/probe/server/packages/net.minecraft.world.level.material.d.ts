declare module "packages/net/minecraft/world/level/material/$WaterFluid$Flowing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaterFluid$Flowing$$Type = ($WaterFluid$Flowing);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaterFluid$Flowing_ = $WaterFluid$Flowing$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$WaterFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaterFluid$$Type = ($WaterFluid);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaterFluid_ = $WaterFluid$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$Fluid" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $InjectedFluidExtension } from "packages/dev/architectury/extensions/injected/$InjectedFluidExtension"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $IdMapper } from "packages/net/minecraft/core/$IdMapper"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $IForgeFluid } from "packages/net/minecraftforge/common/extensions/$IForgeFluid"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $VoxelShape } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $StateDefinition } from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import { $Optional } from "packages/java/util/$Optional"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"

export class $Fluid implements $IForgeFluid, $InjectedFluidExtension {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<$FluidState>

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
/** @deprecated */
public "builtInRegistryHolder"(): $Holder$Reference<$Fluid>
public "canConvertToSource"(fluidState0: $FluidState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "defaultFluidState"(): $FluidState
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAmount"(fluidState0: $FluidState$$Type): integer
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getBucket"(): $Item
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFluidType"(): $FluidType
public "getHeight"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): float
public "getOwnHeight"(fluidState0: $FluidState$$Type): float
public "getPickupSound"(): $Optional<$SoundEvent>
public "getShape"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $VoxelShape
public "getStateDefinition"(): $StateDefinition<$Fluid, $FluidState>
public "getTickDelay"(levelReader0: $LevelReader$$Type): integer
/** @deprecated */
public "is"(tagKey0: $TagKey$$Type<$Fluid$$Type>): boolean
public "isSame"(fluid0: $Fluid$$Type): boolean
public "isSource"(fluidState0: $FluidState$$Type): boolean
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
get "bucket"(): $Item
get "fluidType"(): $FluidType
get "pickupSound"(): $Optional<$SoundEvent>
get "stateDefinition"(): $StateDefinition<$Fluid, $FluidState>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Fluid
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.FluidTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Fluid$$Type = ($Fluid | Special.Fluid);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Fluid_ = $Fluid$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$LavaFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LavaFluid$$Type = ($LavaFluid);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LavaFluid_ = $LavaFluid$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$FluidState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FluidState$$Type = ($FluidState);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FluidState_ = $FluidState$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$MapColor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapColor$$Type = ($MapColor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapColor_ = $MapColor$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$LavaFluid$Flowing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LavaFluid$Flowing$$Type = ($LavaFluid$Flowing);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LavaFluid$Flowing_ = $LavaFluid$Flowing$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$FogType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FogType$$Type = ($FogType | ("lava" | "water" | "powder_snow" | "none"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FogType_ = $FogType$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$WaterFluid$Source" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaterFluid$Source$$Type = ($WaterFluid$Source);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaterFluid$Source_ = $WaterFluid$Source$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$PushReaction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PushReaction$$Type = ($PushReaction | ("normal" | "destroy" | "block" | "ignore" | "push_only"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PushReaction_ = $PushReaction$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$EmptyFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EmptyFluid$$Type = ($EmptyFluid);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EmptyFluid_ = $EmptyFluid$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$MapColor$Brightness" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapColor$Brightness$$Type = ($MapColor$Brightness | ("low" | "normal" | "high" | "lowest"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapColor$Brightness_ = $MapColor$Brightness$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$LavaFluid$Source" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LavaFluid$Source$$Type = ($LavaFluid$Source);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LavaFluid$Source_ = $LavaFluid$Source$$Type;
}
}

declare module "packages/net/minecraft/world/level/material/$FlowingFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FlowingFluid$$Type = ($FlowingFluid);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FlowingFluid_ = $FlowingFluid$$Type;
}
}

