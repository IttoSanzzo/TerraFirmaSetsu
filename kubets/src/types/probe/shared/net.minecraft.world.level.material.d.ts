declare module "packages/net/minecraft/world/level/material/$WaterFluid$Flowing" {
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $WaterFluid } from "packages/net/minecraft/world/level/material/$WaterFluid"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $WaterFluid$Flowing extends $WaterFluid {
constructor()

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

declare module "packages/net/minecraft/world/level/material/$WaterFluid" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $FlowingFluid } from "packages/net/minecraft/world/level/material/$FlowingFluid"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $WaterFluid extends $FlowingFluid {
constructor()

public "animateTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, randomSource3: $RandomSource$$Type): void
public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canBeReplacedWith"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluid3: $Fluid$$Type, direction4: $Direction$$Type): boolean
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "createLegacyBlock"(fluidState0: $FluidState$$Type): $BlockState
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getDripParticle"(): $ParticleOptions
public "getDropOff"(levelReader0: $LevelReader$$Type): integer
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getSlopeFindDistance"(levelReader0: $LevelReader$$Type): integer
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
get "dripParticle"(): $ParticleOptions
}
}

declare module "packages/net/minecraft/world/level/material/$LavaFluid" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $FlowingFluid } from "packages/net/minecraft/world/level/material/$FlowingFluid"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $LavaFluid extends $FlowingFluid {
static readonly "MIN_LEVEL_CUTOFF": float

constructor()

public "animateTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, randomSource3: $RandomSource$$Type): void
public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canBeReplacedWith"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluid3: $Fluid$$Type, direction4: $Direction$$Type): boolean
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "createLegacyBlock"(fluidState0: $FluidState$$Type): $BlockState
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getDripParticle"(): $ParticleOptions
public "getDropOff"(levelReader0: $LevelReader$$Type): integer
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getSlopeFindDistance"(levelReader0: $LevelReader$$Type): integer
public "getSpreadDelay"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, fluidState3: $FluidState$$Type): integer
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "randomTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, randomSource3: $RandomSource$$Type): void
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
get "dripParticle"(): $ParticleOptions
}
}

declare module "packages/net/minecraft/world/level/material/$FluidState" {
import { $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $StateHolder } from "packages/net/minecraft/world/level/block/state/$StateHolder"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $ImmutableMap$$Type } from "packages/com/google/common/collect/$ImmutableMap"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType } from "packages/net/minecraftforge/fluids/$FluidType"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $IForgeFluidState } from "packages/net/minecraftforge/common/extensions/$IForgeFluidState"
import { $VoxelShape } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"

export class $FluidState extends $StateHolder<$Fluid, $FluidState> implements $IForgeFluidState {
static readonly "AMOUNT_FULL": integer
static readonly "AMOUNT_MAX": integer
static readonly "CODEC": $Codec<$FluidState>

constructor(fluid0: $Fluid$$Type, immutableMap1: $ImmutableMap$$Type<$Property$$Type<any>, $Comparable$$Type<any>>, mapCodec2: $MapCodec$$Type<$FluidState$$Type>)

public "animateTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, randomSource2: $RandomSource$$Type): void
public "canBeReplacedWith"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, fluid2: $Fluid$$Type, direction3: $Direction$$Type): boolean
public "canConvertToSource"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
public "canExtinguish"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "canHydrate"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type): boolean
public "createLegacyBlock"(): $BlockState
public "getAdjacentBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type, blockPathTypes3: $BlockPathTypes$$Type): $BlockPathTypes
public "getAmount"(): integer
public "getBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type, boolean3: boolean): $BlockPathTypes
public "getDripParticle"(): $ParticleOptions
/** @deprecated */
public "getExplosionResistance"(): float
public "getExplosionResistance"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): float
public "getFlow"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Vec3
public "getFluidType"(): $FluidType
public "getHeight"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): float
public "getOwnHeight"(): float
public "getShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getTags"(): $Stream<$TagKey<$Fluid>>
public "getType"(): $Fluid
public "holder"(): $Holder<$Fluid>
public "is"(fluid0: $Fluid$$Type): boolean
public "is"(holderSet0: $HolderSet$$Type<$Fluid$$Type>): boolean
public "is"(tagKey0: $TagKey$$Type<$Fluid$$Type>): boolean
public "isEmpty"(): boolean
public "isRandomlyTicking"(): boolean
public "isSource"(): boolean
public "isSourceOfType"(fluid0: $Fluid$$Type): boolean
public "move"(livingEntity0: $LivingEntity$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "randomTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, randomSource2: $RandomSource$$Type): void
public "shouldRenderBackwardUpFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "shouldUpdateWhileBoating"(boat0: $Boat$$Type, entity1: $Entity$$Type): boolean
public "supportsBoating"(boat0: $Boat$$Type): boolean
public "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
get "amount"(): integer
get "dripParticle"(): $ParticleOptions
get "explosionResistance"(): float
get "fluidType"(): $FluidType
get "ownHeight"(): float
get "tags"(): $Stream<$TagKey<$Fluid>>
get "type"(): $Fluid
get "empty"(): boolean
get "randomlyTicking"(): boolean
get "source"(): boolean
}
}

declare module "packages/net/minecraft/world/level/material/$MapColor" {
import { $MapColor$Brightness$$Type } from "packages/net/minecraft/world/level/material/$MapColor$Brightness"

export class $MapColor {
static readonly "CLAY": $MapColor
static readonly "COLOR_BLACK": $MapColor
static readonly "COLOR_BLUE": $MapColor
static readonly "COLOR_BROWN": $MapColor
static readonly "COLOR_CYAN": $MapColor
static readonly "COLOR_GRAY": $MapColor
static readonly "COLOR_GREEN": $MapColor
static readonly "COLOR_LIGHT_BLUE": $MapColor
static readonly "COLOR_LIGHT_GRAY": $MapColor
static readonly "COLOR_LIGHT_GREEN": $MapColor
static readonly "COLOR_MAGENTA": $MapColor
static readonly "COLOR_ORANGE": $MapColor
static readonly "COLOR_PINK": $MapColor
static readonly "COLOR_PURPLE": $MapColor
static readonly "COLOR_RED": $MapColor
static readonly "COLOR_YELLOW": $MapColor
static readonly "CRIMSON_HYPHAE": $MapColor
static readonly "CRIMSON_NYLIUM": $MapColor
static readonly "CRIMSON_STEM": $MapColor
static readonly "DEEPSLATE": $MapColor
static readonly "DIAMOND": $MapColor
static readonly "DIRT": $MapColor
static readonly "EMERALD": $MapColor
static readonly "FIRE": $MapColor
static readonly "GLOW_LICHEN": $MapColor
static readonly "GOLD": $MapColor
static readonly "GRASS": $MapColor
static readonly "ICE": $MapColor
static readonly "LAPIS": $MapColor
static readonly "METAL": $MapColor
static readonly "NETHER": $MapColor
static readonly "NONE": $MapColor
static readonly "PLANT": $MapColor
static readonly "PODZOL": $MapColor
static readonly "QUARTZ": $MapColor
static readonly "RAW_IRON": $MapColor
static readonly "SAND": $MapColor
static readonly "SNOW": $MapColor
static readonly "STONE": $MapColor
static readonly "TERRACOTTA_BLACK": $MapColor
static readonly "TERRACOTTA_BLUE": $MapColor
static readonly "TERRACOTTA_BROWN": $MapColor
static readonly "TERRACOTTA_CYAN": $MapColor
static readonly "TERRACOTTA_GRAY": $MapColor
static readonly "TERRACOTTA_GREEN": $MapColor
static readonly "TERRACOTTA_LIGHT_BLUE": $MapColor
static readonly "TERRACOTTA_LIGHT_GRAY": $MapColor
static readonly "TERRACOTTA_LIGHT_GREEN": $MapColor
static readonly "TERRACOTTA_MAGENTA": $MapColor
static readonly "TERRACOTTA_ORANGE": $MapColor
static readonly "TERRACOTTA_PINK": $MapColor
static readonly "TERRACOTTA_PURPLE": $MapColor
static readonly "TERRACOTTA_RED": $MapColor
static readonly "TERRACOTTA_WHITE": $MapColor
static readonly "TERRACOTTA_YELLOW": $MapColor
static readonly "WARPED_HYPHAE": $MapColor
static readonly "WARPED_NYLIUM": $MapColor
static readonly "WARPED_STEM": $MapColor
static readonly "WARPED_WART_BLOCK": $MapColor
static readonly "WATER": $MapColor
static readonly "WOOD": $MapColor
static readonly "WOOL": $MapColor
readonly "col": integer
readonly "id": integer

public static "byId"(int0: integer): $MapColor
public "calculateRGBColor"(brightness0: $MapColor$Brightness$$Type): integer
public static "getColorFromPackedId"(int0: integer): integer
public "getPackedId"(brightness0: $MapColor$Brightness$$Type): byte
}
}

declare module "packages/net/minecraft/world/level/material/$LavaFluid$Flowing" {
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $LavaFluid } from "packages/net/minecraft/world/level/material/$LavaFluid"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $LavaFluid$Flowing extends $LavaFluid {
constructor()

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

declare module "packages/net/minecraft/world/level/material/$FogType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FogType extends $Enum<$FogType> {
static readonly "LAVA": $FogType
static readonly "NONE": $FogType
static readonly "POWDER_SNOW": $FogType
static readonly "WATER": $FogType

public static "valueOf"(string0: string): $FogType
public static "values"(): $FogType[]
}
}

declare module "packages/net/minecraft/world/level/material/$WaterFluid$Source" {
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $WaterFluid } from "packages/net/minecraft/world/level/material/$WaterFluid"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $WaterFluid$Source extends $WaterFluid {
constructor()

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

declare module "packages/net/minecraft/world/level/material/$PushReaction" {
import { $Enum } from "packages/java/lang/$Enum"

export class $PushReaction extends $Enum<$PushReaction> {
static readonly "BLOCK": $PushReaction
static readonly "DESTROY": $PushReaction
static readonly "IGNORE": $PushReaction
static readonly "NORMAL": $PushReaction
static readonly "PUSH_ONLY": $PushReaction

public static "valueOf"(string0: string): $PushReaction
public static "values"(): $PushReaction[]
}
}

declare module "packages/net/minecraft/world/level/material/$EmptyFluid" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EmptyFluid extends $Fluid {
constructor()

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canBeReplacedWith"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluid3: $Fluid$$Type, direction4: $Direction$$Type): boolean
public "canConvertToSource"(fluidState0: $FluidState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFlow"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type): $Vec3
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
}
}

declare module "packages/net/minecraft/world/level/material/$MapColor$Brightness" {
import { $Enum } from "packages/java/lang/$Enum"

export class $MapColor$Brightness extends $Enum<$MapColor$Brightness> {
static readonly "HIGH": $MapColor$Brightness
static readonly "LOW": $MapColor$Brightness
static readonly "LOWEST": $MapColor$Brightness
static readonly "NORMAL": $MapColor$Brightness
readonly "id": integer
readonly "modifier": integer

public static "byId"(int0: integer): $MapColor$Brightness
public static "valueOf"(string0: string): $MapColor$Brightness
public static "values"(): $MapColor$Brightness[]
}
}

declare module "packages/net/minecraft/world/level/material/$LavaFluid$Source" {
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $LavaFluid } from "packages/net/minecraft/world/level/material/$LavaFluid"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $LavaFluid$Source extends $LavaFluid {
constructor()

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

declare module "packages/net/minecraft/world/level/material/$FlowingFluid" {
import { $IntegerProperty } from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import { $FlowingFluidAccessor } from "packages/net/dries007/tfc/mixin/accessor/$FlowingFluidAccessor"
import { $FlowingFluidAccessor as $FlowingFluidAccessor$0 } from "packages/com/simibubi/create/foundation/mixin/accessor/$FlowingFluidAccessor"
import { $BooleanProperty } from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $FlowingFluidAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/$FlowingFluidAccess"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $FlowingFluid extends $Fluid implements $FlowingFluidAccessor, $FlowingFluidAccess, $FlowingFluidAccessor$0 {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFlow"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type): $Vec3
public "getFlowing"(int0: integer, boolean1: boolean): $FluidState
public "getFlowing"(): $Fluid
public "getSource"(boolean0: boolean): $FluidState
public "getSource"(): $Fluid
public "handler$cgc000$injectCanalSourceCreation"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, callbackInfoReturnable3: $CallbackInfoReturnable$$Type<any>): void
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type): void
get "flowing"(): $Fluid
get "source"(): $Fluid
}
}

