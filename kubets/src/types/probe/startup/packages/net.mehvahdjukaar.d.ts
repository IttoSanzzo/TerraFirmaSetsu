declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$IPartyCreeper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPartyCreeper$$Type = ($IPartyCreeper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPartyCreeper_ = $IPartyCreeper$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/$SimpleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleEvent$$Type = ($SimpleEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleEvent_ = $SimpleEvent$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/forge/$VillagerBrainEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VillagerBrainEvent$$Type = ($VillagerBrainEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VillagerBrainEvent_ = $VillagerBrainEvent$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/mixins/forge/$FireBlockAccessor" {
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FireBlockAccessor$$Type = ($FireBlockAccessor | ((arg0: $Level, arg1: $BlockPos, arg2: integer, arg3: $RandomSource, arg4: integer, arg5: $Direction) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FireBlockAccessor_ = $FireBlockAccessor$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData" {
import { $CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomMapData$$Type<H extends $CustomMapData$DirtyCounter> = ($CustomMapData<H>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomMapData_<H extends $CustomMapData$DirtyCounter> = $CustomMapData$$Type<H>;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/forge/$LightningStruckBlockEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LightningStruckBlockEvent$$Type = ($LightningStruckBlockEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LightningStruckBlockEvent_ = $LightningStruckBlockEvent$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/client/$IModelPartExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModelPartExtension$$Type = ($IModelPartExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModelPartExtension_ = $IModelPartExtension$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType" {
import { $CustomMapDecoration, $CustomMapDecoration$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import { $MapBlockMarker, $MapBlockMarker$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapDecorationType$$Type<D extends $CustomMapDecoration, M extends $MapBlockMarker<D>> = ($MapDecorationType<D, M>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapDecorationType_<D extends $CustomMapDecoration, M extends $MapBlockMarker<D>> = $MapDecorationType$$Type<D, M>;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/misc/$CodecMapRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CodecMapRegistry$$Type<T> = ($CodecMapRegistry<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CodecMapRegistry_<T> = $CodecMapRegistry$$Type<T>;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$DispenserBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DispenserBlockAccessor$$Type = ($DispenserBlockAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DispenserBlockAccessor_ = $DispenserBlockAccessor$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$DispenserBlockEntityAccessor" {
import { $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DispenserBlockEntityAccessor$$Type = ($DispenserBlockEntityAccessor | (() => $NonNullList$$Type<$ItemStack$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DispenserBlockEntityAccessor_ = $DispenserBlockEntityAccessor$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart/$ILevelEventRedirect" {
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ILevelEventRedirect$$Type = ($ILevelEventRedirect | ((arg0: boolean, arg1: $Vec3) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ILevelEventRedirect_ = $ILevelEventRedirect$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedPistonTile" {
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IExtendedPistonTile$$Type = ($IExtendedPistonTile | ((arg0: $Level, arg1: $BlockPos) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IExtendedPistonTile_ = $IExtendedPistonTile$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$IConvertableHorse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IConvertableHorse$$Type = ($IConvertableHorse | (() => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IConvertableHorse_ = $IConvertableHorse$$Type;
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/block/$BoilingWaterCauldronBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BoilingWaterCauldronBlock$$Type = ($BoilingWaterCauldronBlock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BoilingWaterCauldronBlock_ = $BoilingWaterCauldronBlock$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$IFluteParrot" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IFluteParrot$$Type = ($IFluteParrot | ((arg0: $Player) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IFluteParrot_ = $IFluteParrot$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/mixins/forge/$MobBucketItemAccessor" {
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MobBucketItemAccessor$$Type = ($MobBucketItemAccessor | (() => $EntityType$$Type<any>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MobBucketItemAccessor_ = $MobBucketItemAccessor$$Type;
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$IBellConnection$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IBellConnection$Type$$Type = ($IBellConnection$Type | ("none" | "chain" | "rope"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IBellConnection$Type_ = $IBellConnection$Type$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference$Empty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SlotReference$Empty$$Type = ($SlotReference$Empty);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SlotReference$Empty_ = $SlotReference$Empty$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IBlockHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IBlockHolder$$Type = ($IBlockHolder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IBlockHolder_ = $IBlockHolder$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IExtendedItem$$Type = ($IExtendedItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IExtendedItem_ = $IExtendedItem$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SlotReference$$Type = ($SlotReference);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SlotReference_ = $SlotReference$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$VillagerBrainEventInternal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VillagerBrainEventInternal$$Type = ($VillagerBrainEventInternal);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VillagerBrainEventInternal_ = $VillagerBrainEventInternal$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type" {
import { $CustomMapData, $CustomMapData$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomMapData$Type$$Type<T extends $CustomMapData<any>> = ($CustomMapData$Type<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomMapData$Type_<T extends $CustomMapData<any>> = $CustomMapData$Type$$Type<T>;
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/entity/$IVisualTransformationProvider" {
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IVisualTransformationProvider$$Type = ($IVisualTransformationProvider | ((arg0: float) => $Matrix4f$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IVisualTransformationProvider_ = $IVisualTransformationProvider$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/mixins/$AgeableListAccessor" {
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AgeableListAccessor$$Type = ($AgeableListAccessor | (() => $Iterable$$Type<$ModelPart$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AgeableListAccessor_ = $AgeableListAccessor$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/api/$IQuiverEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IQuiverEntity$$Type = ($IQuiverEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IQuiverEntity_ = $IQuiverEntity$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomMapDecoration$$Type = ($CustomMapDecoration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomMapDecoration_ = $CustomMapDecoration$$Type;
}
}

declare module "packages/net/mehvahdjukaar/amendments/reg/$ModBlockProperties$PostType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModBlockProperties$PostType$$Type = ($ModBlockProperties$PostType | ("post" | "palisade" | "wall" | "beam"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModBlockProperties$PostType_ = $ModBlockProperties$PostType$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IHoldingPlayerExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IHoldingPlayerExtension$$Type = ($IHoldingPlayerExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IHoldingPlayerExtension_ = $IHoldingPlayerExtension$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomMapData$DirtyCounter$$Type = ($CustomMapData$DirtyCounter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomMapData$DirtyCounter_ = $CustomMapData$DirtyCounter$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$BlockPlacerItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockPlacerItem$$Type = ($BlockPlacerItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockPlacerItem_ = $BlockPlacerItem$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/$IVillagerBrainEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IVillagerBrainEvent$$Type = ($IVillagerBrainEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IVillagerBrainEvent_ = $IVillagerBrainEvent$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/forge/$FireConsumeBlockEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FireConsumeBlockEvent$$Type = ($FireConsumeBlockEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FireConsumeBlockEvent_ = $FireConsumeBlockEvent$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/mixins/$LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LivingEntityAccessor$$Type = ($LivingEntityAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AdditionalItemPlacement$$Type = ($AdditionalItemPlacement);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AdditionalItemPlacement_ = $AdditionalItemPlacement$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IMapDataPacketExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IMapDataPacketExtension$$Type = ($IMapDataPacketExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IMapDataPacketExtension_ = $IMapDataPacketExtension$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker" {
import { $CustomMapDecoration, $CustomMapDecoration$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapBlockMarker$$Type<D extends $CustomMapDecoration> = ($MapBlockMarker<D>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapBlockMarker_<D extends $CustomMapDecoration> = $MapBlockMarker$$Type<D>;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/$ILightningStruckBlockEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ILightningStruckBlockEvent$$Type = ($ILightningStruckBlockEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ILightningStruckBlockEvent_ = $ILightningStruckBlockEvent$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/$IFireConsumeBlockEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IFireConsumeBlockEvent$$Type = ($IFireConsumeBlockEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IFireConsumeBlockEvent_ = $IFireConsumeBlockEvent$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$BrainAccessor" {
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BrainAccessor$$Type<E extends $LivingEntity> = ($BrainAccessor<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BrainAccessor_<E extends $LivingEntity> = $BrainAccessor$$Type<E>;
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/tile/$HangingSignTileExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HangingSignTileExtension$$Type = ($HangingSignTileExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HangingSignTileExtension_ = $HangingSignTileExtension$$Type;
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$ExtendedHangingSign" {
import { $HangingSignTileExtension$$Type } from "packages/net/mehvahdjukaar/amendments/common/tile/$HangingSignTileExtension"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ExtendedHangingSign$$Type = ($ExtendedHangingSign | (() => $HangingSignTileExtension$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ExtendedHangingSign_ = $ExtendedHangingSign$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/utils/$IQuiverPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IQuiverPlayer$$Type = ($IQuiverPlayer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IQuiverPlayer_ = $IQuiverPlayer$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/$IDropItemOnDeathEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IDropItemOnDeathEvent$$Type = ($IDropItemOnDeathEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IDropItemOnDeathEvent_ = $IDropItemOnDeathEvent$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/goals/$ISuppEvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ISuppEvoker$$Type = ($ISuppEvoker);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ISuppEvoker_ = $ISuppEvoker$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/$ExpandedMapData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ExpandedMapData$$Type = ($ExpandedMapData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ExpandedMapData_ = $ExpandedMapData$$Type;
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$ISwingingTile" {
import { $SwingAnimation$$Type } from "packages/net/mehvahdjukaar/amendments/common/$SwingAnimation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ISwingingTile$$Type = ($ISwingingTile | (() => $SwingAnimation$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ISwingingTile_ = $ISwingingTile$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/api/$IAntiqueTextProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IAntiqueTextProvider$$Type = ($IAntiqueTextProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IAntiqueTextProvider_ = $IAntiqueTextProvider$$Type;
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$IBetterJukebox" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IBetterJukebox$$Type = ($IBetterJukebox | ((arg0: float) => float));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IBetterJukebox_ = $IBetterJukebox$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/misc/$MapRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapRegistry$$Type<T> = ($MapRegistry<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapRegistry_<T> = $MapRegistry$$Type<T>;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/items/forge/$ShulkerShellItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShulkerShellItem$$Type = ($ShulkerShellItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShulkerShellItem_ = $ShulkerShellItem$$Type;
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$ISlimeable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ISlimeable$$Type = ($ISlimeable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ISlimeable_ = $ISlimeable$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/forge/$ButtonAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ButtonAccessor$$Type = ($ButtonAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ButtonAccessor_ = $ButtonAccessor$$Type;
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$IBellConnection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IBellConnection$$Type = ($IBellConnection);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IBellConnection_ = $IBellConnection$$Type;
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/forge/$DropItemOnDeathEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DropItemOnDeathEvent$$Type = ($DropItemOnDeathEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DropItemOnDeathEvent_ = $DropItemOnDeathEvent$$Type;
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$SwingAnimation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SwingAnimation$$Type = ($SwingAnimation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SwingAnimation_ = $SwingAnimation$$Type;
}
}

