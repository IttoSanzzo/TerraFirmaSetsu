declare module "packages/net/minecraft/world/level/block/entity/$TheEndPortalBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TheEndPortalBlockEntity$$Type = ($TheEndPortalBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TheEndPortalBlockEntity_ = $TheEndPortalBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity$CatalystListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SculkCatalystBlockEntity$CatalystListener$$Type = ($SculkCatalystBlockEntity$CatalystListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SculkCatalystBlockEntity$CatalystListener_ = $SculkCatalystBlockEntity$CatalystListener$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$JukeboxBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $JukeboxBlockEntity$$Type = ($JukeboxBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $JukeboxBlockEntity_ = $JukeboxBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SculkSensorBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SculkSensorBlockEntity$$Type = ($SculkSensorBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SculkSensorBlockEntity_ = $SculkSensorBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$DispenserBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DispenserBlockEntity$$Type = ($DispenserBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DispenserBlockEntity_ = $DispenserBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntity$$Type = ($BlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntity_ = $BlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityType$BlockEntitySupplier$$Type<T extends $BlockEntity> = ($BlockEntityType$BlockEntitySupplier<T> | ((arg0: $BlockPos, arg1: $BlockState) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityType$BlockEntitySupplier_<T extends $BlockEntity> = $BlockEntityType$BlockEntitySupplier$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BlockEntityType" {
import { $IRenderableEntity } from "packages/me/srrapero720/chloride/api/$IRenderableEntity"
import { $BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import { $ShulkerBoxBlockEntity } from "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockEntityTypeAccessor } from "packages/com/eerussianguy/beneath/mixin/$BlockEntityTypeAccessor"
import { $BeehiveBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity"
import { $ComparatorBlockEntity } from "packages/net/minecraft/world/level/block/entity/$ComparatorBlockEntity"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $DropperBlockEntity } from "packages/net/minecraft/world/level/block/entity/$DropperBlockEntity"
import { $BrewingStandBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BrewingStandBlockEntity"
import { $DaylightDetectorBlockEntity } from "packages/net/minecraft/world/level/block/entity/$DaylightDetectorBlockEntity"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $HangingSignBlockEntity } from "packages/net/minecraft/world/level/block/entity/$HangingSignBlockEntity"
import { $BlockEntityVisualizer, $BlockEntityVisualizer$$Type } from "packages/dev/engine_room/flywheel/api/visualization/$BlockEntityVisualizer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $BlockEntityTypeExtension } from "packages/dev/engine_room/flywheel/impl/extension/$BlockEntityTypeExtension"
import { $SignBlockEntity } from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import { $JukeboxBlockEntity } from "packages/net/minecraft/world/level/block/entity/$JukeboxBlockEntity"
import { $SculkShriekerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$SculkShriekerBlockEntity"
import { $EnchantmentTableBlockEntity } from "packages/net/minecraft/world/level/block/entity/$EnchantmentTableBlockEntity"
import { $Type$$Type } from "packages/com/mojang/datafixers/types/$Type"
import { $AccessorBlockEntityType } from "packages/com/railwayteam/railways/mixin/$AccessorBlockEntityType"
import { $CalibratedSculkSensorBlockEntity } from "packages/net/minecraft/world/level/block/entity/$CalibratedSculkSensorBlockEntity"
import { $ChiseledBookShelfBlockEntity } from "packages/net/minecraft/world/level/block/entity/$ChiseledBookShelfBlockEntity"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BrushableBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BrushableBlockEntity"
import { $DynamicLightHandlerHolder } from "packages/toni/sodiumdynamiclights/accessor/$DynamicLightHandlerHolder"
import { $FurnaceBlockEntity } from "packages/net/minecraft/world/level/block/entity/$FurnaceBlockEntity"
import { $DispenserBlockEntity } from "packages/net/minecraft/world/level/block/entity/$DispenserBlockEntity"
import { $EnderChestBlockEntity } from "packages/net/minecraft/world/level/block/entity/$EnderChestBlockEntity"
import { $SculkSensorBlockEntity } from "packages/net/minecraft/world/level/block/entity/$SculkSensorBlockEntity"
import { $DynamicLightHandler, $DynamicLightHandler$$Type } from "packages/dev/lambdaurora/lambdynlights/api/$DynamicLightHandler"
import { $BarrelBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BarrelBlockEntity"
import { $ChestBlockEntity } from "packages/net/minecraft/world/level/block/entity/$ChestBlockEntity"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $BannerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BannerBlockEntity"
import { $TheEndGatewayBlockEntity } from "packages/net/minecraft/world/level/block/entity/$TheEndGatewayBlockEntity"
import { $BellBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BellBlockEntity"
import { $CommandBlockEntity } from "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity"
import { $BlockEntityTypeAccessor as $BlockEntityTypeAccessor$0 } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$BlockEntityTypeAccessor"
import { $TrappedChestBlockEntity } from "packages/net/minecraft/world/level/block/entity/$TrappedChestBlockEntity"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $BlockEntityTypeAccessor as $BlockEntityTypeAccessor$1 } from "packages/com/vomiter/survivorsdelight/mixin/$BlockEntityTypeAccessor"
import { $BlastFurnaceBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlastFurnaceBlockEntity"
import { $DecoratedPotBlockEntity } from "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity"
import { $SmokerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$SmokerBlockEntity"
import { $PistonMovingBlockEntity } from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import { $HopperBlockEntity } from "packages/net/minecraft/world/level/block/entity/$HopperBlockEntity"
import { $TheEndPortalBlockEntity } from "packages/net/minecraft/world/level/block/entity/$TheEndPortalBlockEntity"
import { $BeaconBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $StructureBlockEntity } from "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity"
import { $SpawnerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$SpawnerBlockEntity"
import { $JigsawBlockEntity } from "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity"
import { $ConduitBlockEntity } from "packages/net/minecraft/world/level/block/entity/$ConduitBlockEntity"
import { $BedBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BedBlockEntity"
import { $BlockEntityTypeAccessor as $BlockEntityTypeAccessor$2 } from "packages/net/mrhitech/artisanal/mixin/$BlockEntityTypeAccessor"
import { $SculkCatalystBlockEntity } from "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $SkullBlockEntity } from "packages/net/minecraft/world/level/block/entity/$SkullBlockEntity"
import { $LecternBlockEntity } from "packages/net/minecraft/world/level/block/entity/$LecternBlockEntity"
import { $BETypeAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/$BETypeAccess"
import { $CampfireBlockEntity } from "packages/net/minecraft/world/level/block/entity/$CampfireBlockEntity"

export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeExtension<any>, $AccessorBlockEntityType, $DynamicLightHandlerHolder<any>, $BlockEntityTypeAccessor$1, $IRenderableEntity, $BlockEntityTypeAccessor, $BETypeAccess, $BlockEntityTypeAccessor$0, $BlockEntityTypeAccessor$2 {
static readonly "BANNER": $BlockEntityType<$BannerBlockEntity>
static readonly "BARREL": $BlockEntityType<$BarrelBlockEntity>
static readonly "BEACON": $BlockEntityType<$BeaconBlockEntity>
static readonly "BED": $BlockEntityType<$BedBlockEntity>
static readonly "BEEHIVE": $BlockEntityType<$BeehiveBlockEntity>
static readonly "BELL": $BlockEntityType<$BellBlockEntity>
static readonly "BLAST_FURNACE": $BlockEntityType<$BlastFurnaceBlockEntity>
static readonly "BREWING_STAND": $BlockEntityType<$BrewingStandBlockEntity>
static readonly "BRUSHABLE_BLOCK": $BlockEntityType<$BrushableBlockEntity>
static readonly "CALIBRATED_SCULK_SENSOR": $BlockEntityType<$CalibratedSculkSensorBlockEntity>
static readonly "CAMPFIRE": $BlockEntityType<$CampfireBlockEntity>
static readonly "CHEST": $BlockEntityType<$ChestBlockEntity>
static readonly "CHISELED_BOOKSHELF": $BlockEntityType<$ChiseledBookShelfBlockEntity>
static readonly "COMMAND_BLOCK": $BlockEntityType<$CommandBlockEntity>
static readonly "COMPARATOR": $BlockEntityType<$ComparatorBlockEntity>
static readonly "CONDUIT": $BlockEntityType<$ConduitBlockEntity>
static readonly "DAYLIGHT_DETECTOR": $BlockEntityType<$DaylightDetectorBlockEntity>
static readonly "DECORATED_POT": $BlockEntityType<$DecoratedPotBlockEntity>
static readonly "DISPENSER": $BlockEntityType<$DispenserBlockEntity>
static readonly "DROPPER": $BlockEntityType<$DropperBlockEntity>
static readonly "ENCHANTING_TABLE": $BlockEntityType<$EnchantmentTableBlockEntity>
static readonly "ENDER_CHEST": $BlockEntityType<$EnderChestBlockEntity>
static readonly "END_GATEWAY": $BlockEntityType<$TheEndGatewayBlockEntity>
static readonly "END_PORTAL": $BlockEntityType<$TheEndPortalBlockEntity>
static readonly "FURNACE": $BlockEntityType<$FurnaceBlockEntity>
static readonly "HANGING_SIGN": $BlockEntityType<$HangingSignBlockEntity>
static readonly "HOPPER": $BlockEntityType<$HopperBlockEntity>
static readonly "JIGSAW": $BlockEntityType<$JigsawBlockEntity>
static readonly "JUKEBOX": $BlockEntityType<$JukeboxBlockEntity>
static readonly "LECTERN": $BlockEntityType<$LecternBlockEntity>
static readonly "MOB_SPAWNER": $BlockEntityType<$SpawnerBlockEntity>
static readonly "PISTON": $BlockEntityType<$PistonMovingBlockEntity>
static readonly "SCULK_CATALYST": $BlockEntityType<$SculkCatalystBlockEntity>
static readonly "SCULK_SENSOR": $BlockEntityType<$SculkSensorBlockEntity>
static readonly "SCULK_SHRIEKER": $BlockEntityType<$SculkShriekerBlockEntity>
static readonly "SHULKER_BOX": $BlockEntityType<$ShulkerBoxBlockEntity>
static readonly "SIGN": $BlockEntityType<$SignBlockEntity>
static readonly "SKULL": $BlockEntityType<$SkullBlockEntity>
static readonly "SMOKER": $BlockEntityType<$SmokerBlockEntity>
static readonly "STRUCTURE_BLOCK": $BlockEntityType<$StructureBlockEntity>
static readonly "TRAPPED_CHEST": $BlockEntityType<$TrappedChestBlockEntity>

constructor(blockEntitySupplier0: $BlockEntityType$BlockEntitySupplier$$Type<T>, set1: $Set$$Type<$Block$$Type>, type2: $Type$$Type<any>)

public static "cast"<T extends $Entity>(entityType: $EntityType$$Type<T>): $DynamicLightHandlerHolder<T>
public static "cast"<T extends $BlockEntity>(entityType: $BlockEntityType$$Type<T>): $DynamicLightHandlerHolder<T>
public "chloride$whitelisted"(): boolean
public "create"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): T
public "flywheel$getVisualizer"(): $BlockEntityVisualizer<any>
public "flywheel$setVisualizer"(visualizer: $BlockEntityVisualizer$$Type<any>): void
public "getBlockEntity"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): T
public static "getKey"(blockEntityType0: $BlockEntityType$$Type<any>): $ResourceLocation
public "isValid"(blockState0: $BlockState$$Type): boolean
public "sodiumdynamiclights$getDynamicLightHandler"(): $DynamicLightHandler<any>
public "sodiumdynamiclights$getName"(): $Component
public "sodiumdynamiclights$getSetting"(): boolean
public "sodiumdynamiclights$setDynamicLightHandler"(handler: $DynamicLightHandler$$Type<any>): void
get "factory"(): $BlockEntityType$BlockEntitySupplier<T>
set "factory"(value: $BlockEntityType$BlockEntitySupplier$$Type<T>)
get "validBlocks"(): $Set<$Block>
set "validBlocks"(value: $Set$$Type<$Block$$Type>)
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.BlockEntityType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.BlockEntityTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityType$$Type<T extends $BlockEntity> = ($BlockEntityType<T> | Special.BlockEntityType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityType_<T extends $BlockEntity> = $BlockEntityType$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BaseContainerBlockEntity$$Type = ($BaseContainerBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BaseContainerBlockEntity_ = $BaseContainerBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ConduitBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConduitBlockEntity$$Type = ($ConduitBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConduitBlockEntity_ = $ConduitBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BedBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BedBlockEntity$$Type = ($BedBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BedBlockEntity_ = $BedBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ContainerOpenersCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ContainerOpenersCounter$$Type = ($ContainerOpenersCounter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ContainerOpenersCounter_ = $ContainerOpenersCounter$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$EnderChestBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnderChestBlockEntity$$Type = ($EnderChestBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnderChestBlockEntity_ = $EnderChestBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SkullBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SkullBlockEntity$$Type = ($SkullBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SkullBlockEntity_ = $SkullBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SculkShriekerBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SculkShriekerBlockEntity$$Type = ($SculkShriekerBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SculkShriekerBlockEntity_ = $SculkShriekerBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomizableContainerBlockEntity$$Type = ($RandomizableContainerBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomizableContainerBlockEntity_ = $RandomizableContainerBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity$JointType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $JigsawBlockEntity$JointType$$Type = ($JigsawBlockEntity$JointType | ("rollable" | "aligned"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $JigsawBlockEntity$JointType_ = $JigsawBlockEntity$JointType$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$LecternBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LecternBlockEntity$$Type = ($LecternBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LecternBlockEntity_ = $LecternBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommandBlockEntity$$Type = ($CommandBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommandBlockEntity_ = $CommandBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DecoratedPotBlockEntity$$Type = ($DecoratedPotBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DecoratedPotBlockEntity_ = $DecoratedPotBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$FurnaceBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FurnaceBlockEntity$$Type = ($FurnaceBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FurnaceBlockEntity_ = $FurnaceBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BarrelBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BarrelBlockEntity$$Type = ($BarrelBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BarrelBlockEntity_ = $BarrelBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BannerPattern" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $BannerPattern {
constructor(string0: string)

public static "byHash"(string0: string): $Holder<$BannerPattern>
public "getHashname"(): string
public static "location"(resourceKey0: $ResourceKey$$Type<$BannerPattern>, boolean1: boolean): $ResourceLocation
get "hashname"(): string
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.BannerPattern
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.BannerPatternTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BannerPattern$$Type = ($BannerPattern | Special.BannerPattern);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BannerPattern_ = $BannerPattern$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$HangingSignBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HangingSignBlockEntity$$Type = ($HangingSignBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HangingSignBlockEntity_ = $HangingSignBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StructureBlockEntity$$Type = ($StructureBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StructureBlockEntity_ = $StructureBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ChiseledBookShelfBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChiseledBookShelfBlockEntity$$Type = ($ChiseledBookShelfBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChiseledBookShelfBlockEntity_ = $ChiseledBookShelfBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$HopperBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HopperBlockEntity$$Type = ($HopperBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HopperBlockEntity_ = $HopperBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$Hopper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Hopper$$Type = ($Hopper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Hopper_ = $Hopper$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$EnchantmentTableBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnchantmentTableBlockEntity$$Type = ($EnchantmentTableBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnchantmentTableBlockEntity_ = $EnchantmentTableBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BellBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BellBlockEntity$$Type = ($BellBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BellBlockEntity_ = $BellBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ComparatorBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ComparatorBlockEntity$$Type = ($ComparatorBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ComparatorBlockEntity_ = $ComparatorBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SmokerBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SmokerBlockEntity$$Type = ($SmokerBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SmokerBlockEntity_ = $SmokerBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$LidBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LidBlockEntity$$Type = ($LidBlockEntity | ((arg0: float) => float));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LidBlockEntity_ = $LidBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BrushableBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BrushableBlockEntity$$Type = ($BrushableBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BrushableBlockEntity_ = $BrushableBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SignBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SignBlockEntity$$Type = ($SignBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SignBlockEntity_ = $SignBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$CampfireBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CampfireBlockEntity$$Type = ($CampfireBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CampfireBlockEntity_ = $CampfireBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity$UpdateType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StructureBlockEntity$UpdateType$$Type = ($StructureBlockEntity$UpdateType | ("update_data" | "save_area" | "load_area" | "scan_area"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StructureBlockEntity$UpdateType_ = $StructureBlockEntity$UpdateType$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$DropperBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DropperBlockEntity$$Type = ($DropperBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DropperBlockEntity_ = $DropperBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$DaylightDetectorBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DaylightDetectorBlockEntity$$Type = ($DaylightDetectorBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DaylightDetectorBlockEntity_ = $DaylightDetectorBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BannerBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BannerBlockEntity$$Type = ($BannerBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BannerBlockEntity_ = $BannerBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $JigsawBlockEntity$$Type = ($JigsawBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $JigsawBlockEntity_ = $JigsawBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity$BeeReleaseStatus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BeehiveBlockEntity$BeeReleaseStatus$$Type = ($BeehiveBlockEntity$BeeReleaseStatus | ("honey_delivered" | "bee_released" | "emergency"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BeehiveBlockEntity$BeeReleaseStatus_ = $BeehiveBlockEntity$BeeReleaseStatus$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BeehiveBlockEntity$$Type = ($BeehiveBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BeehiveBlockEntity_ = $BeehiveBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityTicker$$Type<T extends $BlockEntity> = ($BlockEntityTicker<T> | ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityTicker_<T extends $BlockEntity> = $BlockEntityTicker$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BrewingStandBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BrewingStandBlockEntity$$Type = ($BrewingStandBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BrewingStandBlockEntity_ = $BrewingStandBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TickingBlockEntity$$Type = ($TickingBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TickingBlockEntity_ = $TickingBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SpawnerBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpawnerBlockEntity$$Type = ($SpawnerBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpawnerBlockEntity_ = $SpawnerBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$AbstractFurnaceBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractFurnaceBlockEntity$$Type = ($AbstractFurnaceBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractFurnaceBlockEntity_ = $AbstractFurnaceBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ChestBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChestBlockEntity$$Type = ($ChestBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChestBlockEntity_ = $ChestBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BlastFurnaceBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlastFurnaceBlockEntity$$Type = ($BlastFurnaceBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlastFurnaceBlockEntity_ = $BlastFurnaceBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShulkerBoxBlockEntity$$Type = ($ShulkerBoxBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShulkerBoxBlockEntity_ = $ShulkerBoxBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$TheEndGatewayBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TheEndGatewayBlockEntity$$Type = ($TheEndGatewayBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TheEndGatewayBlockEntity_ = $TheEndGatewayBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity$AnimationStatus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShulkerBoxBlockEntity$AnimationStatus$$Type = ($ShulkerBoxBlockEntity$AnimationStatus | ("closed" | "opening" | "opened" | "closing"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShulkerBoxBlockEntity$AnimationStatus_ = $ShulkerBoxBlockEntity$AnimationStatus$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$TrappedChestBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TrappedChestBlockEntity$$Type = ($TrappedChestBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TrappedChestBlockEntity_ = $TrappedChestBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity$Decorations" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DecoratedPotBlockEntity$Decorations$$Type = ($DecoratedPotBlockEntity$Decorations);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DecoratedPotBlockEntity$Decorations_ = $DecoratedPotBlockEntity$Decorations$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity$Mode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommandBlockEntity$Mode$$Type = ($CommandBlockEntity$Mode | ("sequence" | "auto" | "redstone"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommandBlockEntity$Mode_ = $CommandBlockEntity$Mode$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$CalibratedSculkSensorBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CalibratedSculkSensorBlockEntity$$Type = ($CalibratedSculkSensorBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CalibratedSculkSensorBlockEntity_ = $CalibratedSculkSensorBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SculkCatalystBlockEntity$$Type = ($SculkCatalystBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SculkCatalystBlockEntity_ = $SculkCatalystBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BeaconBlockEntity$$Type = ($BeaconBlockEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BeaconBlockEntity_ = $BeaconBlockEntity$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity$BeaconBeamSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BeaconBlockEntity$BeaconBeamSection$$Type = ($BeaconBlockEntity$BeaconBeamSection);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BeaconBlockEntity$BeaconBeamSection_ = $BeaconBlockEntity$BeaconBeamSection$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SignText" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SignText$$Type = ($SignText);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SignText_ = $SignText$$Type;
}
}

