declare module "packages/net/minecraft/world/level/block/entity/$TheEndPortalBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $TheEndPortalBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "shouldRenderFace"(direction0: $Direction$$Type): boolean
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity$CatalystListener" {
import { $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $GameEventListener$DeliveryMode } from "packages/net/minecraft/world/level/gameevent/$GameEventListener$DeliveryMode"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $PositionSource, $PositionSource$$Type } from "packages/net/minecraft/world/level/gameevent/$PositionSource"
import { $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import { $SculkSpreader } from "packages/net/minecraft/world/level/block/$SculkSpreader"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
static readonly "PULSE_TICKS": integer

constructor(blockState0: $BlockState$$Type, positionSource1: $PositionSource$$Type)

public "getDeliveryMode"(): $GameEventListener$DeliveryMode
public "getListenerRadius"(): integer
public "getListenerSource"(): $PositionSource
public "getSculkSpreader"(): $SculkSpreader
public "handleGameEvent"(serverLevel0: $ServerLevel$$Type, gameEvent1: $GameEvent$$Type, context2: $GameEvent$Context$$Type, vec33: $Vec3$$Type): boolean
get "deliveryMode"(): $GameEventListener$DeliveryMode
get "listenerRadius"(): integer
get "listenerSource"(): $PositionSource
get "sculkSpreader"(): $SculkSpreader
}
}

declare module "packages/net/minecraft/world/level/block/entity/$JukeboxBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Clearable } from "packages/net/minecraft/world/$Clearable"
import { $ContainerSingleItem } from "packages/net/minecraft/world/ticks/$ContainerSingleItem"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $IBetterJukebox } from "packages/net/mehvahdjukaar/amendments/common/$IBetterJukebox"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Set$$Type } from "packages/java/util/$Set"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"

export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem, $IBetterJukebox {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "amendments$getRotation"(partialTicks: float): float
public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getFirstItem"(): $ItemStack
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getUpdatePacket"(): $Packet<any>
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "handler$fgn002$load"(compoundTag0: $CompoundTag$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fnn000$amendments$fixItemSync"(tag: $CompoundTag$$Type, ci: $CallbackInfo$$Type): void
public "handler$fnn000$amendments$tickAnimation"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, ci: $CallbackInfo$$Type): void
public "handler$fnn000$notifyAddedItem"(slot: integer, stack: $ItemStack$$Type, ci: $CallbackInfo$$Type): void
public "handler$fnn000$notifyRemovedItem"(slot: integer, amount: integer, cir: $CallbackInfoReturnable$$Type<any>): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "isRecordPlaying"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public static "playRecordTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, jukeboxBlockEntity3: $JukeboxBlockEntity$$Type): void
public "popOutRecord"(): void
public "removeFirstItem"(): $ItemStack
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setFirstItem"(itemStack0: $ItemStack$$Type): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setRecordWithoutPlaying"(itemStack0: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "startPlaying"(): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "firstItem"(): $ItemStack
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "updatePacket"(): $Packet<any>
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
get "recordPlaying"(): boolean
set "firstItem"(value: $ItemStack$$Type)
set "recordWithoutPlaying"(value: $ItemStack$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SculkSensorBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $GameEventListener$Holder } from "packages/net/minecraft/world/level/gameevent/$GameEventListener$Holder"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $VibrationSystem$Data } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$Data"
import { $GameEvent, $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $VibrationSystem$User } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$User"
import { $VibrationSystem$Listener } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$Listener"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $VibrationSystem } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Holder<$VibrationSystem$Listener>, $VibrationSystem {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "createVibrationUser"(): $VibrationSystem$User
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public static "getGameEventFrequency"(gameEvent0: $GameEvent$$Type): integer
public "getLastVibrationFrequency"(): integer
public "getListener"(): $VibrationSystem$Listener
public "getModelData"(): $ModelData
public static "getRedstoneStrengthForDistance"(float0: float, int1: integer): integer
public "getRenderBoundingBox"(): $AABB
public static "getResonanceEventByFrequency"(int0: integer): $GameEvent
public "getVibrationData"(): $VibrationSystem$Data
public "getVibrationUser"(): $VibrationSystem$User
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setLastVibrationFrequency"(int0: integer): void
get "lastVibrationFrequency"(): integer
get "listener"(): $VibrationSystem$Listener
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "vibrationData"(): $VibrationSystem$Data
get "vibrationUser"(): $VibrationSystem$User
set "lastVibrationFrequency"(value: integer)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$DispenserBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $DispenserBlockEntityAccessor } from "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$DispenserBlockEntityAccessor"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $RandomizableContainerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity"

export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $DispenserBlockEntityAccessor {
static readonly "CONTAINER_SIZE": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "addItem"(itemStack0: $ItemStack$$Type): integer
public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRandomSlot"(randomSource0: $RandomSource$$Type): integer
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BlockEntity" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $IForgeBlockEntity } from "packages/net/minecraftforge/common/extensions/$IForgeBlockEntity"
import { $BlockEntityType, $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $ClientGamePacketListener } from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $CapabilityProvider } from "packages/net/minecraftforge/common/capabilities/$CapabilityProvider"
import { $AccessorBlockEntity } from "packages/com/railwayteam/railways/mixin/$AccessorBlockEntity"
import { $BlockEntityAccessor } from "packages/com/nmagpie/tfc_ie_addon/mixin/accessor/$BlockEntityAccessor"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $CrashReportCategory$$Type } from "packages/net/minecraft/$CrashReportCategory"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $DynamicLightSource } from "packages/toni/sodiumdynamiclights/$DynamicLightSource"

export class $BlockEntity extends $CapabilityProvider<$BlockEntity> implements $IForgeBlockEntity, $AccessorBlockEntity, $DynamicLightSource, $BlockEntityAccessor {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public static "addEntityType"(compoundTag0: $CompoundTag$$Type, blockEntityType1: $BlockEntityType$$Type<any>): void
public "clearRemoved"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type): void
public "getBlockPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getLevel"(): $Level
public "getModelData"(): $ModelData
public "getPersistentData"(): $CompoundTag
public static "getPosFromTag"(compoundTag0: $CompoundTag$$Type): $BlockPos
public "getRenderBoundingBox"(): $AABB
public "getType"(): $BlockEntityType<any>
public "getUpdatePacket"(): $Packet<$ClientGamePacketListener>
public "getUpdateTag"(): $CompoundTag
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasLevel"(): boolean
public "isRemoved"(): boolean
public "load"(compoundTag0: $CompoundTag$$Type): void
public static "loadStatic"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, compoundTag2: $CompoundTag$$Type): $BlockEntity
public "onChunkUnloaded"(): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "onlyOpCanSetNbt"(): boolean
public "requestModelDataUpdate"(): void
public "saveToItem"(itemStack0: $ItemStack$$Type): void
public "saveWithFullMetadata"(): $CompoundTag
public "saveWithId"(): $CompoundTag
public "saveWithoutMetadata"(): $CompoundTag
public "sdl$dynamicLightTick"(): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$getLuminance"(): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
/** @deprecated */
public "setBlockState"(blockState0: $BlockState$$Type): void
public "setChanged"(): void
public "setLevel"(level0: $Level$$Type): void
public "setRemoved"(): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(renderer: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(renderer: $LevelRenderer$$Type): boolean
public "triggerEvent"(int0: integer, int1: integer): boolean
get "blockState"(): $BlockState
set "blockState"(value: $BlockState$$Type)
get "level"(): $Level
set "level"(value: $Level$$Type)
get "worldPosition"(): $BlockPos
set "worldPosition"(value: $BlockPos$$Type)
get "blockPos"(): $BlockPos
get "modelData"(): $ModelData
get "persistentData"(): $CompoundTag
get "renderBoundingBox"(): $AABB
get "type"(): $BlockEntityType<any>
get "updatePacket"(): $Packet<$ClientGamePacketListener>
get "updateTag"(): $CompoundTag
get "removed"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier" {
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
"create"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): T
}

export namespace $BlockEntityType$BlockEntitySupplier {
const probejs$$marker: never
}
export abstract class $BlockEntityType$BlockEntitySupplier$$Static<T extends $BlockEntity> implements $BlockEntityType$BlockEntitySupplier<T> {
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $LockCode, $LockCode$$Type } from "packages/net/minecraft/world/$LockCode"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Set$$Type } from "packages/java/util/$Set"
import { $MenuProvider } from "packages/net/minecraft/world/$MenuProvider"
import { $Nameable } from "packages/net/minecraft/world/$Nameable"

export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable {
public "asContainer"(): $Container
public "canOpen"(player0: $Player$$Type): boolean
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "canUnlock"(player0: $Player$$Type, lockCode1: $LockCode$$Type, component2: $Component$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getCustomName"(): $Component
public "getDisplayName"(): $Component
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getName"(): $Component
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setCustomName"(component0: $Component$$Type): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "lockKey"(): $LockCode
set "lockKey"(value: $LockCode$$Type)
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "customName"(): $Component
get "displayName"(): $Component
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "name"(): $Component
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
set "customName"(value: $Component$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ConduitBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $ConduitBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "clientTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, conduitBlockEntity3: $ConduitBlockEntity$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getActiveRotation"(float0: float): float
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isActive"(): boolean
public "isHunting"(): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, conduitBlockEntity3: $ConduitBlockEntity$$Type): void
get "tickCount"(): integer
set "tickCount"(value: integer)
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "active"(): boolean
get "hunting"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BedBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $DyeColor, $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $BedBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, dyeColor2: $DyeColor$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getColor"(): $DyeColor
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setColor"(dyeColor0: $DyeColor$$Type): void
get "color"(): $DyeColor
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "updatePacket"(): $ClientboundBlockEntityDataPacket
set "color"(value: $DyeColor$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ContainerOpenersCounter" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ContainerOpenersCounter {
constructor()

public "decrementOpeners"(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "getOpenerCount"(): integer
public "incrementOpeners"(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "recheckOpeners"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
get "openerCount"(): integer
}
}

declare module "packages/net/minecraft/world/level/block/entity/$EnderChestBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $LidBlockEntity } from "packages/net/minecraft/world/level/block/entity/$LidBlockEntity"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getOpenNess"(float0: float): float
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "lidAnimateTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, enderChestBlockEntity3: $EnderChestBlockEntity$$Type): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "recheckOpen"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SkullBlockEntity" {
import { $Services$$Type } from "packages/net/minecraft/server/$Services"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $SkullSettings } from "packages/dev/tr7zw/skinlayers/accessor/$SkullSettings"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Mesh, $Mesh$$Type } from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $SkullBlockEntity extends $BlockEntity implements $SkullSettings {
static readonly "TAG_NOTE_BLOCK_SOUND": string
static readonly "TAG_SKULL_OWNER": string

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "animation"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, skullBlockEntity3: $SkullBlockEntity$$Type): void
public static "clear"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getAnimation"(float0: float): float
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeadLayers"(): $Mesh
public "getLastTexture"(): $ResourceLocation
public "getMesh"(): $Mesh
public "getModelData"(): $ModelData
public "getNoteBlockSound"(): $ResourceLocation
public "getOwnerProfile"(): $GameProfile
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "initialized"(): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setInitialized"(initialized: boolean): void
public "setLastTexture"(texture: $ResourceLocation$$Type): void
public "setOwner"(gameProfile0: $GameProfile$$Type): void
public static "setup"(services0: $Services$$Type, executor1: $Executor$$Type): void
public "setupHeadLayers"(box: $Mesh$$Type): void
public static "updateGameprofile"(gameProfile0: $GameProfile$$Type, consumer1: $Consumer$$Type<$GameProfile$$Type>): void
get "headLayers"(): $Mesh
get "lastTexture"(): $ResourceLocation
get "mesh"(): $Mesh
get "modelData"(): $ModelData
get "noteBlockSound"(): $ResourceLocation
get "ownerProfile"(): $GameProfile
set "lastTexture"(value: $ResourceLocation$$Type)
set "owner"(value: $GameProfile$$Type)
set "upHeadLayers"(value: $Mesh$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SculkShriekerBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $GameEventListener$Holder } from "packages/net/minecraft/world/level/gameevent/$GameEventListener$Holder"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $VibrationSystem$Data } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$Data"
import { $GameEvent, $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $VibrationSystem$User } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$User"
import { $VibrationSystem$Listener } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$Listener"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $VibrationSystem } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Holder<$VibrationSystem$Listener>, $VibrationSystem {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public static "getGameEventFrequency"(gameEvent0: $GameEvent$$Type): integer
public "getListener"(): $VibrationSystem$Listener
public "getModelData"(): $ModelData
public static "getRedstoneStrengthForDistance"(float0: float, int1: integer): integer
public "getRenderBoundingBox"(): $AABB
public static "getResonanceEventByFrequency"(int0: integer): $GameEvent
public "getVibrationData"(): $VibrationSystem$Data
public "getVibrationUser"(): $VibrationSystem$User
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "tryGetPlayer"(entity0: $Entity$$Type): $ServerPlayer
public "tryRespond"(serverLevel0: $ServerLevel$$Type): void
public "tryShriek"(serverLevel0: $ServerLevel$$Type, serverPlayer1: $ServerPlayer$$Type): void
get "listener"(): $VibrationSystem$Listener
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "vibrationData"(): $VibrationSystem$Data
get "vibrationUser"(): $VibrationSystem$User
}
}

declare module "packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $RandomizableContainerBlockEntityAccessor } from "packages/vazkii/botania/mixin/$RandomizableContainerBlockEntityAccessor"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BaseContainerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity"

export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainerBlockEntityAccessor {
static readonly "LOOT_TABLE_SEED_TAG": string
static readonly "LOOT_TABLE_TAG": string

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public static "setLootTable"(blockGetter0: $BlockGetter$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "setLootTable"(resourceLocation0: $ResourceLocation$$Type, long1: long): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
public "unpackLootTable"(player0: $Player$$Type): void
get "lootTable"(): $ResourceLocation
set "lootTable"(value: $ResourceLocation$$Type)
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity$JointType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Optional } from "packages/java/util/$Optional"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
static readonly "ALIGNED": $JigsawBlockEntity$JointType
static readonly "ROLLABLE": $JigsawBlockEntity$JointType

public static "byName"(string0: string): $Optional<$JigsawBlockEntity$JointType>
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "getTranslatedName"(): $Component
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $JigsawBlockEntity$JointType
public static "values"(): $JigsawBlockEntity$JointType[]
get "serializedName"(): string
get "translatedName"(): $Component
}
}

declare module "packages/net/minecraft/world/level/block/entity/$LecternBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Clearable } from "packages/net/minecraft/world/$Clearable"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Set$$Type } from "packages/java/util/$Set"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $MenuProvider } from "packages/net/minecraft/world/$MenuProvider"

export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider, $Container {
static readonly "DATA_PAGE": integer
static readonly "NUM_DATA": integer
static readonly "NUM_SLOTS": integer
static readonly "SLOT_BOOK": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(index: integer, stack: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getBook"(): $ItemStack
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getDisplayName"(): $Component
public "getHeight"(): integer
public "getItem"(slot: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getPage"(): integer
public "getRedstoneSignal"(): integer
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getUpdatePacket"(): $Packet<any>
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "handler$foa000$createEditMenu"(i: integer, inventory: $Inventory$$Type, player: $Player$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$foa000$setPage"(page: integer, ci: $CallbackInfo$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasBook"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeItem"(slot: integer, amount: integer): $ItemStack
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setBook"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): void
public "setBook"(itemStack0: $ItemStack$$Type): void
public "setChanged"(): void
public "setItem"(slot: integer, stack: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "book"(): $ItemStack
get "containerSize"(): integer
get "displayName"(): $Component
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "page"(): integer
get "redstoneSignal"(): integer
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "updatePacket"(): $Packet<any>
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
set "book"(value: $ItemStack$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $CommandBlockEntity$Mode } from "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity$Mode"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BaseCommandBlock } from "packages/net/minecraft/world/level/$BaseCommandBlock"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $CommandBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCommandBlock"(): $BaseCommandBlock
public "getMode"(): $CommandBlockEntity$Mode
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAutomatic"(): boolean
public "isConditional"(): boolean
public "isPowered"(): boolean
public "markConditionMet"(): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "onModeSwitch"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setAutomatic"(boolean0: boolean): void
public "setPowered"(boolean0: boolean): void
public "wasConditionMet"(): boolean
get "commandBlock"(): $BaseCommandBlock
get "mode"(): $CommandBlockEntity$Mode
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "automatic"(): boolean
get "conditional"(): boolean
get "powered"(): boolean
set "automatic"(value: boolean)
set "powered"(value: boolean)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $DecoratedPotBlockEntity$Decorations } from "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity$Decorations"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $DecoratedPotBlockEntity extends $BlockEntity {
static readonly "TAG_SHERDS": string

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getDecorations"(): $DecoratedPotBlockEntity$Decorations
public "getDirection"(): $Direction
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setFromItem"(itemStack0: $ItemStack$$Type): void
get "decorations"(): $DecoratedPotBlockEntity$Decorations
get "direction"(): $Direction
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
set "fromItem"(value: $ItemStack$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$FurnaceBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $AbstractFurnaceBlockEntity } from "packages/net/minecraft/world/level/block/entity/$AbstractFurnaceBlockEntity"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setRecipeUsed"(level0: $Level$$Type, serverPlayer1: $ServerPlayer$$Type, recipe2: $Recipe$$Type<any>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BarrelBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $RandomizableContainerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity"

export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "recheckOpen"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$HangingSignBlockEntity" {
import { $SignBlockEntity } from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ExtendedHangingSign } from "packages/net/mehvahdjukaar/amendments/common/$ExtendedHangingSign"
import { $SwingAnimation } from "packages/net/mehvahdjukaar/amendments/common/$SwingAnimation"
import { $HangingSignTileExtension } from "packages/net/mehvahdjukaar/amendments/common/tile/$HangingSignTileExtension"

export class $HangingSignBlockEntity extends $SignBlockEntity implements $ExtendedHangingSign {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "amendments$getAnimation"(): $SwingAnimation
public "amendments$getExtension"(): $HangingSignTileExtension
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
get "modelData"(): $ModelData
}
}

declare module "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Vec3i, $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Mirror, $Mirror$$Type } from "packages/net/minecraft/world/level/block/$Mirror"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $StructureTemplate$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"
import { $StructureMode, $StructureMode$$Type } from "packages/net/minecraft/world/level/block/state/properties/$StructureMode"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $Rotation, $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $StructureBlockEntity extends $BlockEntity {
static readonly "AUTHOR_TAG": string
static readonly "MAX_OFFSET_PER_AXIS": integer
static readonly "MAX_SIZE_PER_AXIS": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "createRandom"(long0: long): $RandomSource
public "createdBy"(livingEntity0: $LivingEntity$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "detectSize"(): boolean
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getIntegrity"(): float
public "getMetaData"(): string
public "getMirror"(): $Mirror
public "getMode"(): $StructureMode
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getRotation"(): $Rotation
public "getSeed"(): long
public "getShowAir"(): boolean
public "getShowBoundingBox"(): boolean
public "getStructureName"(): string
public "getStructurePath"(): string
public "getStructurePos"(): $BlockPos
public "getStructureSize"(): $Vec3i
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasStructureName"(): boolean
public "isIgnoreEntities"(): boolean
public "isPowered"(): boolean
public "isStructureLoadable"(): boolean
public "loadStructure"(serverLevel0: $ServerLevel$$Type, boolean1: boolean): boolean
public "loadStructure"(serverLevel0: $ServerLevel$$Type): boolean
public "loadStructure"(serverLevel0: $ServerLevel$$Type, boolean1: boolean, structureTemplate2: $StructureTemplate$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "saveStructure"(boolean0: boolean): boolean
public "saveStructure"(): boolean
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setIgnoreEntities"(boolean0: boolean): void
public "setIntegrity"(float0: float): void
public "setMetaData"(string0: string): void
public "setMirror"(mirror0: $Mirror$$Type): void
public "setMode"(structureMode0: $StructureMode$$Type): void
public "setPowered"(boolean0: boolean): void
public "setRotation"(rotation0: $Rotation$$Type): void
public "setSeed"(long0: long): void
public "setShowAir"(boolean0: boolean): void
public "setShowBoundingBox"(boolean0: boolean): void
public "setStructureName"(string0: string): void
public "setStructureName"(resourceLocation0: $ResourceLocation$$Type): void
public "setStructurePos"(blockPos0: $BlockPos$$Type): void
public "setStructureSize"(vec3i0: $Vec3i$$Type): void
public "unloadStructure"(): void
public "usedBy"(player0: $Player$$Type): boolean
get "integrity"(): float
get "metaData"(): string
get "mirror"(): $Mirror
get "mode"(): $StructureMode
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "rotation"(): $Rotation
get "seed"(): long
get "showAir"(): boolean
get "showBoundingBox"(): boolean
get "structureName"(): string
get "structurePath"(): string
get "structurePos"(): $BlockPos
get "structureSize"(): $Vec3i
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "ignoreEntities"(): boolean
get "powered"(): boolean
get "structureLoadable"(): boolean
set "ignoreEntities"(value: boolean)
set "integrity"(value: float)
set "metaData"(value: string)
set "mirror"(value: $Mirror$$Type)
set "mode"(value: $StructureMode$$Type)
set "powered"(value: boolean)
set "rotation"(value: $Rotation$$Type)
set "seed"(value: long)
set "showAir"(value: boolean)
set "showBoundingBox"(value: boolean)
set "structureName"(value: string)
set "structureName"(value: $ResourceLocation$$Type)
set "structurePos"(value: $BlockPos$$Type)
set "structureSize"(value: $Vec3i$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ChiseledBookShelfBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container {
static readonly "MAX_BOOKS_IN_STORAGE": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getLastInteractedSlot"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "height"(): integer
get "lastInteractedSlot"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$HopperBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Hopper, $Hopper$$Type } from "packages/net/minecraft/world/level/block/entity/$Hopper"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $RandomizableContainerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $VoxelShape } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Set$$Type } from "packages/java/util/$Set"
import { $HopperBlockEntityAccessor } from "packages/vazkii/botania/mixin/$HopperBlockEntityAccessor"
import { $ItemEntity, $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper, $HopperBlockEntityAccessor {
static readonly "HOPPER_CONTAINER_SIZE": integer
static readonly "MOVE_ITEM_SPEED": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "addItem"(container0: $Container$$Type, container1: $Container$$Type, itemStack2: $ItemStack$$Type, direction3: $Direction$$Type): $ItemStack
public static "addItem"(container0: $Container$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public static "entityInside"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, entity3: $Entity$$Type, hopperBlockEntity4: $HopperBlockEntity$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public static "getContainerAt"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $Container
public "getHeight"(): integer
public static "getItemsAtAndAbove"(level0: $Level$$Type, hopper1: $Hopper$$Type): $List<$ItemEntity>
public "getLastUpdateTime"(): long
public "getLevelX"(): double
public "getLevelY"(): double
public "getLevelZ"(): double
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getSuckShape"(): $VoxelShape
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "isOnCustomCooldown"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public static "pushItemsTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, hopperBlockEntity3: $HopperBlockEntity$$Type): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setCooldown"(int0: integer): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "suckInItems"(level0: $Level$$Type, hopper1: $Hopper$$Type): boolean
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "lastUpdateTime"(): long
get "levelX"(): double
get "levelY"(): double
get "levelZ"(): double
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "suckShape"(): $VoxelShape
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
get "onCustomCooldown"(): boolean
set "cooldown"(value: integer)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$Hopper" {
import { $VoxelShape } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"

export interface $Hopper extends $Container {
"asContainer"(): $Container
"canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
"clear"(): void
"clear"(ingredient: $Ingredient$$Type): void
"clearContent"(): void
"count"(ingredient: $Ingredient$$Type): integer
"count"(): integer
"countItem"(item0: $Item$$Type): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
"find"(ingredient: $Ingredient$$Type): integer
"find"(): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getContainerSize"(): integer
"getHeight"(): integer
"getItem"(int0: integer): $ItemStack
"getLevelX"(): double
"getLevelY"(): double
"getLevelZ"(): double
"getMaxStackSize"(): integer
"getSlotLimit"(slot: integer): integer
"getSlots"(): integer
"getStackInSlot"(slot: integer): $ItemStack
"getSuckShape"(): $VoxelShape
"getWidth"(): integer
"hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
"hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
"insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isEmpty"(): boolean
"isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $Container
"removeItem"(int0: integer, int1: integer): $ItemStack
"removeItemNoUpdate"(int0: integer): $ItemStack
"setChanged"(): void
"setChanged"(): void
"setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
"startOpen"(player0: $Player$$Type): void
"stillValid"(player0: $Player$$Type): boolean
"stopOpen"(player0: $Player$$Type): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "height"(): integer
get "levelX"(): double
get "levelY"(): double
get "levelZ"(): double
get "maxStackSize"(): integer
get "slots"(): integer
get "suckShape"(): $VoxelShape
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $Hopper {
const ABOVE: $VoxelShape
const INSIDE: $VoxelShape
const SUCK: $VoxelShape
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
function tryClear(object0: any): void
}
export abstract class $Hopper$$Static implements $Hopper {
static readonly "ABOVE": $VoxelShape
static readonly "INSIDE": $VoxelShape
static readonly "SUCK": $VoxelShape

static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
static "tryClear"(object0: any): void
}
}

declare module "packages/net/minecraft/world/level/block/entity/$EnchantmentTableBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Nameable } from "packages/net/minecraft/world/$Nameable"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $EnchantmentTableBlockEntity extends $BlockEntity implements $Nameable {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "bookAnimationTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, enchantmentTableBlockEntity3: $EnchantmentTableBlockEntity$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCustomName"(): $Component
public "getDisplayName"(): $Component
public "getModelData"(): $ModelData
public "getName"(): $Component
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setCustomName"(component0: $Component$$Type): void
get "flip"(): float
set "flip"(value: float)
get "flipA"(): float
set "flipA"(value: float)
get "flipT"(): float
set "flipT"(value: float)
get "oFlip"(): float
set "oFlip"(value: float)
get "oOpen"(): float
set "oOpen"(value: float)
get "oRot"(): float
set "oRot"(value: float)
get "open"(): float
set "open"(value: float)
get "rot"(): float
set "rot"(value: float)
get "tRot"(): float
set "tRot"(value: float)
get "time"(): integer
set "time"(value: integer)
get "customName"(): $Component
get "displayName"(): $Component
get "modelData"(): $ModelData
get "name"(): $Component
get "renderBoundingBox"(): $AABB
set "customName"(value: $Component$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BellBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $IBellConnection$Type, $IBellConnection$Type$$Type } from "packages/net/mehvahdjukaar/amendments/common/$IBellConnection$Type"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $IBellConnection } from "packages/net/mehvahdjukaar/amendments/common/$IBellConnection"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BellBlockEntity extends $BlockEntity implements $IBellConnection {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "amendments$getConnection"(): $IBellConnection$Type
public "amendments$setConnected"(con: $IBellConnection$Type$$Type): void
public static "clientTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, bellBlockEntity3: $BellBlockEntity$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "m_183515_"(compound: $CompoundTag$$Type): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onHit"(direction0: $Direction$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, bellBlockEntity3: $BellBlockEntity$$Type): void
get "amendments$connection"(): $IBellConnection$Type
set "amendments$connection"(value: $IBellConnection$Type$$Type)
get "clickDirection"(): $Direction
set "clickDirection"(value: $Direction$$Type)
get "shaking"(): boolean
set "shaking"(value: boolean)
get "ticks"(): integer
set "ticks"(value: integer)
get "modelData"(): $ModelData
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ComparatorBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $ComparatorBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getOutputSignal"(): integer
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setOutputSignal"(int0: integer): void
get "modelData"(): $ModelData
get "outputSignal"(): integer
get "renderBoundingBox"(): $AABB
set "outputSignal"(value: integer)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SmokerBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $AbstractFurnaceBlockEntity } from "packages/net/minecraft/world/level/block/entity/$AbstractFurnaceBlockEntity"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setRecipeUsed"(level0: $Level$$Type, serverPlayer1: $ServerPlayer$$Type, recipe2: $Recipe$$Type<any>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$LidBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LidBlockEntity {
"getOpenNess"(float0: float): float
}

export namespace $LidBlockEntity {
const probejs$$marker: never
}
export abstract class $LidBlockEntity$$Static implements $LidBlockEntity {
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BrushableBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $BrushableBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "brush"(long0: long, player1: $Player$$Type, direction2: $Direction$$Type): boolean
public "checkReset"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHitDirection"(): $Direction
public "getItem"(): $ItemStack
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setLootTable"(resourceLocation0: $ResourceLocation$$Type, long1: long): void
public "unpackLootTable"(player0: $Player$$Type): void
get "hitDirection"(): $Direction
get "item"(): $ItemStack
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SignBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $CommandSourceStack } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $FilteredText$$Type } from "packages/net/minecraft/server/network/$FilteredText"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $SignText, $SignText$$Type } from "packages/net/minecraft/world/level/block/entity/$SignText"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $SignBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "canExecuteClickCommands"(boolean0: boolean, player1: $Player$$Type): boolean
public static "createCommandSourceStack"(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): $CommandSourceStack
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "executeClickCommandsIfPresent"(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, boolean3: boolean): boolean
public "getBackText"(): $SignText
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getFrontText"(): $SignText
public "getMaxTextLineWidth"(): integer
public "getModelData"(): $ModelData
public "getPlayerWhoMayEdit"(): $UUID
public "getText"(boolean0: boolean): $SignText
public "getTextFacingPlayer"(player0: $Player$$Type): $SignText
public "getTextLineHeight"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isFacingFrontText"(player0: $Player$$Type): boolean
public "isWaxed"(): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "playerIsTooFarAwayToEdit"(uUID0: $UUID$$Type): boolean
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setAllowedPlayerEditor"(uUID0: $UUID$$Type): void
public "setText"(signText0: $SignText$$Type, boolean1: boolean): boolean
public "setWaxed"(boolean0: boolean): boolean
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, signBlockEntity3: $SignBlockEntity$$Type): void
public "updateSignText"(player0: $Player$$Type, boolean1: boolean, list2: $List$$Type<$FilteredText$$Type>): void
public "updateText"(unaryOperator0: $UnaryOperator$$Type<$SignText$$Type>, boolean1: boolean): boolean
get "backText"(): $SignText
get "frontText"(): $SignText
get "maxTextLineWidth"(): integer
get "modelData"(): $ModelData
get "playerWhoMayEdit"(): $UUID
get "textLineHeight"(): integer
get "waxed"(): boolean
set "allowedPlayerEditor"(value: $UUID$$Type)
set "waxed"(value: boolean)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$CampfireBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $Clearable } from "packages/net/minecraft/world/$Clearable"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $CampfireCookingRecipe } from "packages/net/minecraft/world/item/crafting/$CampfireCookingRecipe"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Optional } from "packages/java/util/$Optional"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $CampfireBlockEntity extends $BlockEntity implements $Clearable {
readonly "cookingProgress": integer[]
readonly "cookingTime": integer[]

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "clearContent"(): void
public static "cookTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, campfireBlockEntity3: $CampfireBlockEntity$$Type): void
public static "cooldownTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, campfireBlockEntity3: $CampfireBlockEntity$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "dowse"(): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCookableRecipe"(itemStack0: $ItemStack$$Type): $Optional<$CampfireCookingRecipe>
public "getItems"(): $NonNullList<$ItemStack>
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public static "particleTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, campfireBlockEntity3: $CampfireBlockEntity$$Type): void
public "placeFood"(entity0: $Entity$$Type, itemStack1: $ItemStack$$Type, int2: integer): boolean
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "tryClear"(object0: any): void
get "items"(): $NonNullList<$ItemStack>
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
}

declare module "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity$UpdateType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
static readonly "LOAD_AREA": $StructureBlockEntity$UpdateType
static readonly "SAVE_AREA": $StructureBlockEntity$UpdateType
static readonly "SCAN_AREA": $StructureBlockEntity$UpdateType
static readonly "UPDATE_DATA": $StructureBlockEntity$UpdateType

public static "valueOf"(string0: string): $StructureBlockEntity$UpdateType
public static "values"(): $StructureBlockEntity$UpdateType[]
}
}

declare module "packages/net/minecraft/world/level/block/entity/$DropperBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $DispenserBlockEntity } from "packages/net/minecraft/world/level/block/entity/$DispenserBlockEntity"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $DropperBlockEntity extends $DispenserBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$DaylightDetectorBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $DaylightDetectorBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BannerBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $ListTag, $ListTag$$Type } from "packages/net/minecraft/nbt/$ListTag"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BannerPattern } from "packages/net/minecraft/world/level/block/entity/$BannerPattern"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $DyeColor, $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Nameable } from "packages/net/minecraft/world/$Nameable"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $BannerBlockEntity extends $BlockEntity implements $Nameable {
static readonly "MAX_PATTERNS": integer
static readonly "TAG_COLOR": string
static readonly "TAG_PATTERN": string
static readonly "TAG_PATTERNS": string

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, dyeColor2: $DyeColor$$Type)

public static "createPatterns"(dyeColor0: $DyeColor$$Type, listTag1: $ListTag$$Type): $List<$Pair<$Holder<$BannerPattern>, $DyeColor>>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "fromItem"(itemStack0: $ItemStack$$Type): void
public "fromItem"(itemStack0: $ItemStack$$Type, dyeColor1: $DyeColor$$Type): void
public "getBaseColor"(): $DyeColor
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCustomName"(): $Component
public "getDisplayName"(): $Component
public "getItem"(): $ItemStack
public static "getItemPatterns"(itemStack0: $ItemStack$$Type): $ListTag
public "getModelData"(): $ModelData
public "getName"(): $Component
public static "getPatternCount"(itemStack0: $ItemStack$$Type): integer
public "getPatterns"(): $List<$Pair<$Holder<$BannerPattern>, $DyeColor>>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public static "removeLastPattern"(itemStack0: $ItemStack$$Type): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setCustomName"(component0: $Component$$Type): void
get "baseColor"(): $DyeColor
get "customName"(): $Component
get "displayName"(): $Component
get "item"(): $ItemStack
get "modelData"(): $ModelData
get "name"(): $Component
get "patterns"(): $List<$Pair<$Holder<$BannerPattern>, $DyeColor>>
get "renderBoundingBox"(): $AABB
set "customName"(value: $Component$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $StructureTemplatePool } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructureTemplatePool"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $JigsawBlockEntity$JointType, $JigsawBlockEntity$JointType$$Type } from "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity$JointType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $JigsawBlockEntity extends $BlockEntity {
static readonly "FINAL_STATE": string
static readonly "JOINT": string
static readonly "NAME": string
static readonly "POOL": string
static readonly "TARGET": string

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "generate"(serverLevel0: $ServerLevel$$Type, int1: integer, boolean2: boolean): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getFinalState"(): string
public "getJoint"(): $JigsawBlockEntity$JointType
public "getModelData"(): $ModelData
public "getName"(): $ResourceLocation
public "getPool"(): $ResourceKey<$StructureTemplatePool>
public "getRenderBoundingBox"(): $AABB
public "getTarget"(): $ResourceLocation
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setFinalState"(string0: string): void
public "setJoint"(jointType0: $JigsawBlockEntity$JointType$$Type): void
public "setName"(resourceLocation0: $ResourceLocation$$Type): void
public "setPool"(resourceKey0: $ResourceKey$$Type<$StructureTemplatePool>): void
public "setTarget"(resourceLocation0: $ResourceLocation$$Type): void
get "finalState"(): string
get "joint"(): $JigsawBlockEntity$JointType
get "modelData"(): $ModelData
get "name"(): $ResourceLocation
get "pool"(): $ResourceKey<$StructureTemplatePool>
get "renderBoundingBox"(): $AABB
get "target"(): $ResourceLocation
get "updatePacket"(): $ClientboundBlockEntityDataPacket
set "finalState"(value: string)
set "joint"(value: $JigsawBlockEntity$JointType$$Type)
set "name"(value: $ResourceLocation$$Type)
set "pool"(value: $ResourceKey$$Type<$StructureTemplatePool>)
set "target"(value: $ResourceLocation$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity$BeeReleaseStatus" {
import { $Enum } from "packages/java/lang/$Enum"

export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
static readonly "BEE_RELEASED": $BeehiveBlockEntity$BeeReleaseStatus
static readonly "EMERGENCY": $BeehiveBlockEntity$BeeReleaseStatus
static readonly "HONEY_DELIVERED": $BeehiveBlockEntity$BeeReleaseStatus

public static "valueOf"(string0: string): $BeehiveBlockEntity$BeeReleaseStatus
public static "values"(): $BeehiveBlockEntity$BeeReleaseStatus[]
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $ListTag } from "packages/net/minecraft/nbt/$ListTag"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BeehiveBlockEntity$BeeReleaseStatus$$Type } from "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity$BeeReleaseStatus"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $BeehiveBlockEntity extends $BlockEntity {
static readonly "BEES": string
static readonly "ENTITY_DATA": string
static readonly "HAS_NECTAR": string
static readonly "MAX_OCCUPANTS": integer
static readonly "MIN_OCCUPATION_TICKS": string
static readonly "MIN_OCCUPATION_TICKS_NECTARLESS": integer
static readonly "TAG_FLOWER_POS": string
static readonly "TICKS_IN_HIVE": string

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "addOccupant"(entity0: $Entity$$Type, boolean1: boolean): void
public "addOccupantWithPresetTicks"(entity0: $Entity$$Type, boolean1: boolean, int2: integer): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "emptyAllLivingFromHive"(player0: $Player$$Type, blockState1: $BlockState$$Type, beeReleaseStatus2: $BeehiveBlockEntity$BeeReleaseStatus$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public static "getHoneyLevel"(blockState0: $BlockState$$Type): integer
public "getModelData"(): $ModelData
public "getOccupantCount"(): integer
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isEmpty"(): boolean
public "isFireNearby"(): boolean
public "isFull"(): boolean
public "isSedated"(): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, beehiveBlockEntity3: $BeehiveBlockEntity$$Type): void
public "storeBee"(compoundTag0: $CompoundTag$$Type, int1: integer, boolean2: boolean): void
public "writeBees"(): $ListTag
get "modelData"(): $ModelData
get "occupantCount"(): integer
get "renderBoundingBox"(): $AABB
get "empty"(): boolean
get "fireNearby"(): boolean
get "full"(): boolean
get "sedated"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $BlockEntityTicker<T extends $BlockEntity> {
"tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, t3: T): void
}

export namespace $BlockEntityTicker {
const probejs$$marker: never
}
export abstract class $BlockEntityTicker$$Static<T extends $BlockEntity> implements $BlockEntityTicker<T> {
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BrewingStandBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $WorldlyContainer } from "packages/net/minecraft/world/$WorldlyContainer"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Set$$Type } from "packages/java/util/$Set"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $BaseContainerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity"

export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer {
static readonly "DATA_BREW_TIME": integer
static readonly "DATA_FUEL_USES": integer
static readonly "FUEL_USES": integer
static readonly "NUM_DATA_VALUES": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "canTakeItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSlotsForFace"(direction0: $Direction$$Type): integer[]
public "getStackInSlot"(slot: integer): $ItemStack
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "handler$fng000$amendments$refreshModel"(tag: $CompoundTag$$Type, ci: $CallbackInfo$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, brewingStandBlockEntity3: $BrewingStandBlockEntity$$Type): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "brewTime"(): integer
set "brewTime"(value: integer)
get "fuel"(): integer
set "fuel"(value: integer)
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity" {
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export interface $TickingBlockEntity {
"getPos"(): $BlockPos
"getType"(): string
"isRemoved"(): boolean
"tick"(): void
get "pos"(): $BlockPos
get "type"(): string
get "removed"(): boolean
}

export namespace $TickingBlockEntity {
const probejs$$marker: never
}
export abstract class $TickingBlockEntity$$Static implements $TickingBlockEntity {
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SpawnerBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BaseSpawner, $BaseSpawner$$Type } from "packages/net/minecraft/world/level/$BaseSpawner"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $SpawnerBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "clientTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, spawnerBlockEntity3: $SpawnerBlockEntity$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSpawner"(): $BaseSpawner
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, spawnerBlockEntity3: $SpawnerBlockEntity$$Type): void
public "setEntityId"(entityType0: $EntityType$$Type<any>, randomSource1: $RandomSource$$Type): void
get "spawner"(): $BaseSpawner
set "spawner"(value: $BaseSpawner$$Type)
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
}

declare module "packages/net/minecraft/world/level/block/entity/$AbstractFurnaceBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $AbstractFurnaceBlockEntityAccessor } from "packages/vazkii/botania/mixin/$AbstractFurnaceBlockEntityAccessor"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $FurnaceTEAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/$FurnaceTEAccess"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $StackedContents$$Type } from "packages/net/minecraft/world/entity/player/$StackedContents"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AbstractFurnaceBlockEntityForgeAccessor } from "packages/vazkii/botania/forge/mixin/$AbstractFurnaceBlockEntityForgeAccessor"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $AccessorAbstractFurnaceBlockEntity } from "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorAbstractFurnaceBlockEntity"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $WorldlyContainer } from "packages/net/minecraft/world/$WorldlyContainer"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $RecipeHolder } from "packages/net/minecraft/world/inventory/$RecipeHolder"
import { $StackedContentsCompatible } from "packages/net/minecraft/world/inventory/$StackedContentsCompatible"
import { $Set$$Type } from "packages/java/util/$Set"
import { $Map } from "packages/java/util/$Map"
import { $BaseContainerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity"

export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeHolder, $StackedContentsCompatible, $AbstractFurnaceBlockEntityAccessor, $AbstractFurnaceBlockEntityForgeAccessor, $AccessorAbstractFurnaceBlockEntity, $FurnaceTEAccess {
static readonly "BURN_COOL_SPEED": integer
static readonly "BURN_TIME_STANDARD": integer
static readonly "DATA_COOKING_PROGRESS": integer
static readonly "DATA_COOKING_TOTAL_TIME": integer
static readonly "DATA_LIT_DURATION": integer
static readonly "DATA_LIT_TIME": integer
static readonly "NUM_DATA_VALUES": integer

public "asContainer"(): $Container
public "awardUsedRecipes"(player0: $Player$$Type, list1: $List$$Type<$ItemStack$$Type>): void
public "awardUsedRecipesAndPopExperience"(serverPlayer0: $ServerPlayer$$Type): void
public "canPlaceItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "canTakeItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fillStackedContents"(stackedContents0: $StackedContents$$Type): void
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
/** @deprecated */
public static "getFuel"(): $Map<$Item, integer>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRecipeUsed"(): $Recipe<any>
public "getRecipesToAwardAndPopExperience"(serverLevel0: $ServerLevel$$Type, vec31: $Vec3$$Type): $List<$Recipe<any>>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSlotsForFace"(direction0: $Direction$$Type): integer[]
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public static "isFuel"(itemStack0: $ItemStack$$Type): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isLit"(): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, abstractFurnaceBlockEntity3: $AbstractFurnaceBlockEntity$$Type): void
public "setChanged"(): void
public "setChanged"(): void
public "setRecipeUsed"(recipe0: $Recipe$$Type<any>): void
public "setRecipeUsed"(level0: $Level$$Type, serverPlayer1: $ServerPlayer$$Type, recipe2: $Recipe$$Type<any>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "cookingProgress"(): integer
set "cookingProgress"(value: integer)
get "cookingTotalTime"(): integer
set "cookingTotalTime"(value: integer)
get "litTime"(): integer
set "litTime"(value: integer)
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "recipeUsed"(): $Recipe<any>
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "lit"(): boolean
get "mutable"(): boolean
set "recipeUsed"(value: $Recipe$$Type<any>)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ChestBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $RandomizableContainerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity"
import { $ContainerOpenersCounter, $ContainerOpenersCounter$$Type } from "packages/net/minecraft/world/level/block/entity/$ContainerOpenersCounter"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $LidBlockEntity } from "packages/net/minecraft/world/level/block/entity/$LidBlockEntity"
import { $Set$$Type } from "packages/java/util/$Set"

export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOpenCount"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): integer
public "getOpenNess"(float0: float): float
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "lidAnimateTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, chestBlockEntity3: $ChestBlockEntity$$Type): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "recheckOpen"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "swapContents"(chestBlockEntity0: $ChestBlockEntity$$Type, chestBlockEntity1: $ChestBlockEntity$$Type): void
public static "tryClear"(object0: any): void
get "openersCounter"(): $ContainerOpenersCounter
set "openersCounter"(value: $ContainerOpenersCounter$$Type)
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BlastFurnaceBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $AbstractFurnaceBlockEntity } from "packages/net/minecraft/world/level/block/entity/$AbstractFurnaceBlockEntity"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setRecipeUsed"(level0: $Level$$Type, serverPlayer1: $ServerPlayer$$Type, recipe2: $Recipe$$Type<any>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $DyeColor, $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ShulkerBoxBlockEntity$AnimationStatus } from "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity$AnimationStatus"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $RandomizableContainerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $WorldlyContainer } from "packages/net/minecraft/world/$WorldlyContainer"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Set$$Type } from "packages/java/util/$Set"

export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer {
static readonly "COLUMNS": integer
static readonly "CONTAINER_SIZE": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "ITEMS_TAG": string
static readonly "MAX_LID_HEIGHT": float
static readonly "MAX_LID_ROTATION": float
static readonly "OPENING_TICK_LENGTH": integer
static readonly "ROWS": integer

constructor(dyeColor0: $DyeColor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canPlaceItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "canTakeItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getAnimationStatus"(): $ShulkerBoxBlockEntity$AnimationStatus
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getBoundingBox"(blockState0: $BlockState$$Type): $AABB
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getColor"(): $DyeColor
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getProgress"(float0: float): float
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSlotsForFace"(direction0: $Direction$$Type): integer[]
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "handler$fkd000$canInsertItem"(index: integer, itemStackIn: $ItemStack$$Type, direction: $Direction$$Type, info: $CallbackInfoReturnable$$Type<any>): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isClosed"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "loadFromTag"(compoundTag0: $CompoundTag$$Type): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, shulkerBoxBlockEntity3: $ShulkerBoxBlockEntity$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animationStatus"(): $ShulkerBoxBlockEntity$AnimationStatus
get "color"(): $DyeColor
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "closed"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$TheEndGatewayBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $TheEndPortalBlockEntity } from "packages/net/minecraft/world/level/block/entity/$TheEndPortalBlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "beamAnimationTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, theEndGatewayBlockEntity3: $TheEndGatewayBlockEntity$$Type): void
public static "canEntityTeleport"(entity0: $Entity$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCooldownPercent"(float0: float): float
public "getModelData"(): $ModelData
public "getParticleAmount"(): integer
public "getRenderBoundingBox"(): $AABB
public "getSpawnPercent"(float0: float): float
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isCoolingDown"(): boolean
public "isSpawning"(): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setExitPosition"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
public static "teleportEntity"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, entity3: $Entity$$Type, theEndGatewayBlockEntity4: $TheEndGatewayBlockEntity$$Type): void
public static "teleportTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, theEndGatewayBlockEntity3: $TheEndGatewayBlockEntity$$Type): void
get "modelData"(): $ModelData
get "particleAmount"(): integer
get "renderBoundingBox"(): $AABB
get "coolingDown"(): boolean
get "spawning"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity$AnimationStatus" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
static readonly "CLOSED": $ShulkerBoxBlockEntity$AnimationStatus
static readonly "CLOSING": $ShulkerBoxBlockEntity$AnimationStatus
static readonly "OPENED": $ShulkerBoxBlockEntity$AnimationStatus
static readonly "OPENING": $ShulkerBoxBlockEntity$AnimationStatus

public static "valueOf"(string0: string): $ShulkerBoxBlockEntity$AnimationStatus
public static "values"(): $ShulkerBoxBlockEntity$AnimationStatus[]
}
}

declare module "packages/net/minecraft/world/level/block/entity/$TrappedChestBlockEntity" {
import { $ChestBlockEntity } from "packages/net/minecraft/world/level/block/entity/$ChestBlockEntity"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $TrappedChestBlockEntity extends $ChestBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity$Decorations" {
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Record } from "packages/java/lang/$Record"
import { $Stream } from "packages/java/util/stream/$Stream"

export class $DecoratedPotBlockEntity$Decorations extends $Record {
static readonly "EMPTY": $DecoratedPotBlockEntity$Decorations

constructor(item0: $Item$$Type, item1: $Item$$Type, item2: $Item$$Type, item3: $Item$$Type)

public "back"(): $Item
public "front"(): $Item
public "left"(): $Item
public static "load"(compoundTag0: $CompoundTag$$Type): $DecoratedPotBlockEntity$Decorations
public "right"(): $Item
public "save"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "sorted"(): $Stream<$Item>
}
}

declare module "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity$Mode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
static readonly "AUTO": $CommandBlockEntity$Mode
static readonly "REDSTONE": $CommandBlockEntity$Mode
static readonly "SEQUENCE": $CommandBlockEntity$Mode

public static "valueOf"(string0: string): $CommandBlockEntity$Mode
public static "values"(): $CommandBlockEntity$Mode[]
}
}

declare module "packages/net/minecraft/world/level/block/entity/$CalibratedSculkSensorBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $SculkSensorBlockEntity } from "packages/net/minecraft/world/level/block/entity/$SculkSensorBlockEntity"
import { $GameEvent, $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public static "getGameEventFrequency"(gameEvent0: $GameEvent$$Type): integer
public "getModelData"(): $ModelData
public static "getRedstoneStrengthForDistance"(float0: float, int1: integer): integer
public "getRenderBoundingBox"(): $AABB
public static "getResonanceEventByFrequency"(int0: integer): $GameEvent
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $GameEventListener$Holder } from "packages/net/minecraft/world/level/gameevent/$GameEventListener$Holder"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $SculkCatalystBlockEntity$CatalystListener } from "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity$CatalystListener"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Holder<$SculkCatalystBlockEntity$CatalystListener> {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getListener"(): $SculkCatalystBlockEntity$CatalystListener
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, sculkCatalystBlockEntity3: $SculkCatalystBlockEntity$$Type): void
get "listener"(): $SculkCatalystBlockEntity$CatalystListener
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BeaconBlockEntity$BeaconBeamSection, $BeaconBlockEntity$BeaconBeamSection$$Type } from "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity$BeaconBeamSection"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $MenuProvider } from "packages/net/minecraft/world/$MenuProvider"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $Nameable } from "packages/net/minecraft/world/$Nameable"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $MobEffect } from "packages/net/minecraft/world/effect/$MobEffect"

export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable {
static readonly "BEACON_EFFECTS": $MobEffect[][]
static readonly "DATA_LEVELS": integer
static readonly "DATA_PRIMARY": integer
static readonly "DATA_SECONDARY": integer
static readonly "NUM_DATA_VALUES": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBeamSections"(): $List<$BeaconBlockEntity$BeaconBeamSection>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCustomName"(): $Component
public "getDisplayName"(): $Component
public "getModelData"(): $ModelData
public "getName"(): $Component
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public static "playSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setCustomName"(component0: $Component$$Type): void
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, beaconBlockEntity3: $BeaconBlockEntity$$Type): void
get "beamSections"(): $List<$BeaconBlockEntity$BeaconBeamSection>
set "beamSections"(value: $List$$Type<$BeaconBlockEntity$BeaconBeamSection$$Type>)
get "checkingBeamSections"(): $List<$BeaconBlockEntity$BeaconBeamSection>
set "checkingBeamSections"(value: $List$$Type<$BeaconBlockEntity$BeaconBeamSection$$Type>)
get "lastCheckY"(): integer
set "lastCheckY"(value: integer)
get "name"(): $Component
set "name"(value: $Component$$Type)
get "customName"(): $Component
get "displayName"(): $Component
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
set "customName"(value: $Component$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity$BeaconBeamSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BeaconBlockEntity$BeaconBeamSection {
constructor(float0s: float[])

public "getColor"(): float[]
public "getHeight"(): integer
get "height"(): integer
set "height"(value: integer)
get "color"(): float[]
}
}

declare module "packages/net/minecraft/world/level/block/entity/$SignText" {
import { $FormattedCharSequence } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $DyeColor, $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $SignText {
static readonly "DIRECT_CODEC": $Codec<$SignText>
static readonly "LINES": integer

constructor()
constructor(component0s: $Component$$Type[], component1s: $Component$$Type[], dyeColor2: $DyeColor$$Type, boolean3: boolean)

public "getColor"(): $DyeColor
public "getMessage"(int0: integer, boolean1: boolean): $Component
public "getMessages"(boolean0: boolean): $Component[]
public "getRenderMessages"(boolean0: boolean, function1: $Function$$Type<$Component$$Type, $FormattedCharSequence>): $FormattedCharSequence[]
public "hasAnyClickCommands"(player0: $Player$$Type): boolean
public "hasGlowingText"(): boolean
public "hasMessage"(player0: $Player$$Type): boolean
public "setColor"(dyeColor0: $DyeColor$$Type): $SignText
public "setHasGlowingText"(boolean0: boolean): $SignText
public "setMessage"(int0: integer, component1: $Component$$Type, component2: $Component$$Type): $SignText
public "setMessage"(int0: integer, component1: $Component$$Type): $SignText
get "color"(): $DyeColor
set "color"(value: $DyeColor$$Type)
}
}

