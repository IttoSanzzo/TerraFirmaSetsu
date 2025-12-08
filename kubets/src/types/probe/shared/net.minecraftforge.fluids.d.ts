declare module "packages/net/minecraftforge/fluids/$FluidStack" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $FluidStack {
static readonly "CODEC": $Codec<$FluidStack>
static readonly "EMPTY": $FluidStack

constructor(fluidStack0: $FluidStack$$Type, int1: integer)
constructor(fluid0: $Fluid$$Type, int1: integer, compoundTag2: $CompoundTag$$Type)
constructor(fluid0: $Fluid$$Type, int1: integer)

public static "areFluidStackTagsEqual"(fluidStack0: $FluidStack$$Type, fluidStack1: $FluidStack$$Type): boolean
public "containsFluid"(fluidStack0: $FluidStack$$Type): boolean
public "copy"(): $FluidStack
public "getAmount"(): integer
public "getChildTag"(string0: string): $CompoundTag
public "getDisplayName"(): $Component
public "getFluid"(): $Fluid
public "getOrCreateChildTag"(string0: string): $CompoundTag
public "getOrCreateTag"(): $CompoundTag
public "getRawFluid"(): $Fluid
public "getTag"(): $CompoundTag
public "getTranslationKey"(): string
public "grow"(int0: integer): void
public "hasTag"(): boolean
public "isEmpty"(): boolean
public "isFluidEqual"(fluidStack0: $FluidStack$$Type): boolean
public "isFluidEqual"(itemStack0: $ItemStack$$Type): boolean
public "isFluidStackIdentical"(fluidStack0: $FluidStack$$Type): boolean
public static "loadFluidStackFromNBT"(compoundTag0: $CompoundTag$$Type): $FluidStack
public static "readFromPacket"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $FluidStack
public "removeChildTag"(string0: string): void
public "setAmount"(int0: integer): void
public "setTag"(compoundTag0: $CompoundTag$$Type): void
public "shrink"(int0: integer): void
public "writeToNBT"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "writeToPacket"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "amount"(): integer
get "displayName"(): $Component
get "fluid"(): $Fluid
get "orCreateTag"(): $CompoundTag
get "rawFluid"(): $Fluid
get "tag"(): $CompoundTag
get "translationKey"(): string
get "empty"(): boolean
set "amount"(value: integer)
set "tag"(value: $CompoundTag$$Type)
}
}

declare module "packages/net/minecraftforge/fluids/$FluidType" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $FluidStack$$Type } from "packages/net/minecraftforge/fluids/$FluidStack"
import { $IClientFluidTypeExtensions$$Type } from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Lazy } from "packages/net/minecraftforge/common/util/$Lazy"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $FluidType$Properties$$Type } from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Rarity } from "packages/net/minecraft/world/item/$Rarity"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<integer>

constructor(properties0: $FluidType$Properties$$Type)

public "canBePlacedInLevel"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type): boolean
public "canBePlacedInLevel"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, fluidStack2: $FluidStack$$Type): boolean
public "canConvertToSource"(fluidStack0: $FluidStack$$Type): boolean
public "canConvertToSource"(fluidState0: $FluidState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "canDrownIn"(livingEntity0: $LivingEntity$$Type): boolean
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canExtinguish"(entity0: $Entity$$Type): boolean
public "canHydrate"(fluidStack0: $FluidStack$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canHydrate"(entity0: $Entity$$Type): boolean
public "canPushEntity"(entity0: $Entity$$Type): boolean
public "canRideVehicleUnder"(entity0: $Entity$$Type, entity1: $Entity$$Type): boolean
public "canSwim"(entity0: $Entity$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockForFluidState"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type): $BlockState
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getBucket"(fluidStack0: $FluidStack$$Type): $ItemStack
public "getDensity"(fluidStack0: $FluidStack$$Type): integer
public "getDensity"(fluidState0: $FluidState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getDensity"(): integer
public "getDescription"(fluidStack0: $FluidStack$$Type): $Component
public "getDescription"(): $Component
public "getDescriptionId"(): string
public "getDescriptionId"(fluidStack0: $FluidStack$$Type): string
public "getFallDistanceModifier"(entity0: $Entity$$Type): float
public "getLightLevel"(): integer
public "getLightLevel"(fluidState0: $FluidState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getLightLevel"(fluidStack0: $FluidStack$$Type): integer
public "getRarity"(fluidStack0: $FluidStack$$Type): $Rarity
public "getRarity"(): $Rarity
public "getRenderPropertiesInternal"(): any
public "getSound"(fluidStack0: $FluidStack$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSound"(entity0: $Entity$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSound"(soundAction0: $SoundAction$$Type): $SoundEvent
public "getSound"(player0: $Player$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, soundAction3: $SoundAction$$Type): $SoundEvent
public "getStateForPlacement"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, fluidStack2: $FluidStack$$Type): $FluidState
public "getTemperature"(fluidStack0: $FluidStack$$Type): integer
public "getTemperature"(): integer
public "getTemperature"(fluidState0: $FluidState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getViscosity"(fluidState0: $FluidState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getViscosity"(): integer
public "getViscosity"(fluidStack0: $FluidStack$$Type): integer
public "initializeClient"(consumer0: $Consumer$$Type<$IClientFluidTypeExtensions$$Type>): void
public "isAir"(): boolean
public "isLighterThanAir"(): boolean
public "isVanilla"(): boolean
public "isVaporizedOnPlacement"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluidStack2: $FluidStack$$Type): boolean
public "motionScale"(entity0: $Entity$$Type): double
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "onVaporize"(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, fluidStack3: $FluidStack$$Type): void
public "setItemMovement"(itemEntity0: $ItemEntity$$Type): void
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "supportsBoating"(boat0: $Boat$$Type): boolean
get "density"(): integer
get "description"(): $Component
get "descriptionId"(): string
get "lightLevel"(): integer
get "rarity"(): $Rarity
get "renderPropertiesInternal"(): any
get "temperature"(): integer
get "viscosity"(): integer
get "air"(): boolean
get "lighterThanAir"(): boolean
get "vanilla"(): boolean
set "itemMovement"(value: $ItemEntity$$Type)
}
}

declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $LiquidBlock } from "packages/net/minecraft/world/level/block/$LiquidBlock"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $FluidType } from "packages/net/minecraftforge/fluids/$FluidType"

export class $ForgeFlowingFluid$Properties {
constructor(supplier0: $Supplier$$Type<$FluidType>, supplier1: $Supplier$$Type<$Fluid>, supplier2: $Supplier$$Type<$Fluid>)

public "block"(supplier0: $Supplier$$Type<$LiquidBlock>): $ForgeFlowingFluid$Properties
public "bucket"(supplier0: $Supplier$$Type<$Item>): $ForgeFlowingFluid$Properties
public "explosionResistance"(float0: float): $ForgeFlowingFluid$Properties
public "levelDecreasePerBlock"(int0: integer): $ForgeFlowingFluid$Properties
public "slopeFindDistance"(int0: integer): $ForgeFlowingFluid$Properties
public "tickRate"(int0: integer): $ForgeFlowingFluid$Properties
}
}

declare module "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IFluidHandler$FluidAction extends $Enum<$IFluidHandler$FluidAction> {
static readonly "EXECUTE": $IFluidHandler$FluidAction
static readonly "SIMULATE": $IFluidHandler$FluidAction

public "execute"(): boolean
public "simulate"(): boolean
public static "valueOf"(string0: string): $IFluidHandler$FluidAction
public static "values"(): $IFluidHandler$FluidAction[]
}
}

declare module "packages/net/minecraftforge/fluids/$FluidType$Properties" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $Rarity$$Type } from "packages/net/minecraft/world/item/$Rarity"

export class $FluidType$Properties {
public "adjacentPathType"(blockPathTypes0: $BlockPathTypes$$Type): $FluidType$Properties
public "canConvertToSource"(boolean0: boolean): $FluidType$Properties
public "canDrown"(boolean0: boolean): $FluidType$Properties
public "canExtinguish"(boolean0: boolean): $FluidType$Properties
public "canHydrate"(boolean0: boolean): $FluidType$Properties
public "canPushEntity"(boolean0: boolean): $FluidType$Properties
public "canSwim"(boolean0: boolean): $FluidType$Properties
public static "create"(): $FluidType$Properties
public "density"(int0: integer): $FluidType$Properties
public "descriptionId"(string0: string): $FluidType$Properties
public "fallDistanceModifier"(float0: float): $FluidType$Properties
public "lightLevel"(int0: integer): $FluidType$Properties
public "motionScale"(double0: double): $FluidType$Properties
public "pathType"(blockPathTypes0: $BlockPathTypes$$Type): $FluidType$Properties
public "rarity"(rarity0: $Rarity$$Type): $FluidType$Properties
public "sound"(soundAction0: $SoundAction$$Type, soundEvent1: $SoundEvent$$Type): $FluidType$Properties
public "supportsBoating"(boolean0: boolean): $FluidType$Properties
public "temperature"(int0: integer): $FluidType$Properties
public "viscosity"(int0: integer): $FluidType$Properties
}
}

declare module "packages/net/minecraftforge/fluids/capability/$IFluidHandler" {
import { $FluidStack, $FluidStack$$Type } from "packages/net/minecraftforge/fluids/$FluidStack"
import { $IFluidHandler$FluidAction$$Type } from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export interface $IFluidHandler {
"drain"(int0: integer, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
"drain"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
"fill"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): integer
"getFluidInTank"(int0: integer): $FluidStack
"getTankCapacity"(int0: integer): integer
"getTanks"(): integer
"isFluidValid"(int0: integer, fluidStack1: $FluidStack$$Type): boolean
get "tanks"(): integer
}

export namespace $IFluidHandler {
const probejs$$marker: never
}
export abstract class $IFluidHandler$$Static implements $IFluidHandler {
}
}

declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing" {
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $ForgeFlowingFluid$Properties$$Type } from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $ForgeFlowingFluid } from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ForgeFlowingFluid$Flowing extends $ForgeFlowingFluid {
constructor(properties0: $ForgeFlowingFluid$Properties$$Type)

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
}
}

declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source" {
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $ForgeFlowingFluid$Properties$$Type } from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $ForgeFlowingFluid } from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ForgeFlowingFluid$Source extends $ForgeFlowingFluid {
constructor(properties0: $ForgeFlowingFluid$Properties$$Type)

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
}
}

declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid" {
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $FlowingFluid } from "packages/net/minecraft/world/level/material/$FlowingFluid"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ForgeFlowingFluid extends $FlowingFluid {
public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
}
}

