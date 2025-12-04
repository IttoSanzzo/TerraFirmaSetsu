declare module "packages/net/minecraft/world/level/saveddata/$SavedData" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $File$$Type } from "packages/java/io/$File"

export class $SavedData {
constructor()

public "isDirty"(): boolean
public "save"(file0: $File$$Type): void
public "save"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "setDirty"(): void
public "setDirty"(boolean0: boolean): void
get "dirty"(): boolean
set "dirty"(value: boolean)
}
}

declare module "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData$HoldingPlayer" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $IHoldingPlayerExtension } from "packages/net/mehvahdjukaar/moonlight/core/misc/$IHoldingPlayerExtension"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Packet, $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $MapItemSavedData$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import { $CustomMapData$Type$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

export class $MapItemSavedData$HoldingPlayer implements $IHoldingPlayerExtension {
readonly "player": $Player

public "handler$ekb000$checkLocked"(mapId: integer, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$ekb000$initializeDirty"(mapItemSavedData: $MapItemSavedData$$Type, player: $Player$$Type, ci: $CallbackInfo$$Type): void
public "handler$ekb000$lockData"(x: integer, z: integer, ci: $CallbackInfo$$Type): void
public "handler$ekb000$sanityCheck"(x: integer, z: integer, ci: $CallbackInfo$$Type): void
public "modifyReturnValue$ekb000$addExtraPacketData"(packet: $Packet$$Type<any>, mapId: integer): $Packet<any>
public "moonlight$setCustomDataDirty"(type: $CustomMapData$Type$$Type<any>, dirtySetter: $Consumer$$Type<any>): void
public "moonlight$setCustomMarkersDirty"(): void
get "step"(): integer
set "step"(value: integer)
}
}

declare module "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData$MapPatch" {
import { $MapItemSavedData$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"

export class $MapItemSavedData$MapPatch {
readonly "height": integer
readonly "mapColors": byte[]
readonly "startX": integer
readonly "startY": integer
readonly "width": integer

constructor(int0: integer, int1: integer, int2: integer, int3: integer, byte4s: byte[])

public "applyToMap"(mapItemSavedData0: $MapItemSavedData$$Type): void
}
}

declare module "packages/net/minecraft/world/level/saveddata/maps/$MapBanner" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $DyeColor, $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $MapDecoration$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $MapBanner {
constructor(blockPos0: $BlockPos$$Type, dyeColor1: $DyeColor$$Type, component2: $Component$$Type)

public static "fromWorld"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $MapBanner
public "getColor"(): $DyeColor
public "getDecoration"(): $MapDecoration$Type
public "getId"(): string
public "getName"(): $Component
public "getPos"(): $BlockPos
public static "load"(compoundTag0: $CompoundTag$$Type): $MapBanner
public "save"(): $CompoundTag
get "color"(): $DyeColor
get "decoration"(): $MapDecoration$Type
get "id"(): string
get "name"(): $Component
get "pos"(): $BlockPos
}
}

declare module "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $SavedData } from "packages/net/minecraft/world/level/saveddata/$SavedData"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MapBlockMarker$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $ExpandedMapData } from "packages/net/mehvahdjukaar/moonlight/api/map/$ExpandedMapData"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $StationBlockEntity$$Type } from "packages/com/simibubi/create/content/trains/station/$StationBlockEntity"
import { $StationMarker$$Type } from "packages/com/simibubi/create/content/trains/station/$StationMarker"
import { $List$$Type } from "packages/java/util/$List"
import { $CustomMapData$Type$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MapDecoration, $MapDecoration$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Collection } from "packages/java/util/$Collection"
import { $FramedItemFrameBlockEntity$MapMarkerRemover } from "packages/xfacthd/framedblocks/common/blockentity/special/$FramedItemFrameBlockEntity$MapMarkerRemover"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $MapItemSavedData$HoldingPlayer } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData$HoldingPlayer"
import { $MapDecoration$Type$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $StationMapData } from "packages/com/simibubi/create/content/trains/station/$StationMapData"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $MapBanner } from "packages/net/minecraft/world/level/saveddata/maps/$MapBanner"

export class $MapItemSavedData extends $SavedData implements $FramedItemFrameBlockEntity$MapMarkerRemover, $ExpandedMapData, $StationMapData {
static readonly "MAX_SCALE": integer
static readonly "TRACKED_DECORATION_LIMIT": integer
readonly "locked": boolean
readonly "moonlight$customData": $Map<any, any>
readonly "scale": byte

public "addClientSideDecorations"(list0: $List$$Type<$MapDecoration$$Type>): void
public "addCustomMarker"(marker: $MapBlockMarker$$Type<any>): void
public "addDecoration"(type0: $MapDecoration$Type$$Type, levelAccessor1: $LevelAccessor$$Type, string2: string, double3: double, double4: double, double5: double, component6: $Component$$Type): void
public "addStationMarker"(stationMarker0: $StationMarker$$Type): void
public static "addTargetDecoration"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, string2: string, type3: $MapDecoration$Type$$Type): void
public "checkBanners"(blockGetter0: $BlockGetter$$Type, int1: integer, int2: integer): void
public "copy"(): $MapItemSavedData
public static "createForClient"(byte0: byte, boolean1: boolean, resourceKey2: $ResourceKey$$Type<$Level>): $MapItemSavedData
public static "createFresh"(double0: double, double1: double, byte2: byte, boolean3: boolean, boolean4: boolean, resourceKey5: $ResourceKey$$Type<$Level>): $MapItemSavedData
public "framedblocks$removeMapMarker"(blockPos0: $BlockPos$$Type): void
public "getBanners"(): $Collection<$MapBanner>
public "getCustomData"(): $Map<any, any>
public "getCustomDecorations"(): $Map<any, any>
public "getCustomMarkers"(): $Map<any, any>
public "getDecorations"(): $Iterable<$MapDecoration>
public "getHoldingPlayer"(player0: $Player$$Type): $MapItemSavedData$HoldingPlayer
public "getUpdatePacket"(int0: integer, player1: $Player$$Type): $Packet<any>
public "getVanillaDecorationSize"(): integer
public "handler$ekg000$checkCustomDeco"(world: $BlockGetter$$Type, x: integer, z: integer, ci: $CallbackInfo$$Type): void
public "handler$ekg000$initCustomData"(i: integer, j: integer, b: byte, bl: boolean, bl2: boolean, bl3: boolean, resourceKey: $ResourceKey$$Type<any>, ci: $CallbackInfo$$Type): void
public "handler$ekg000$locked"(cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$ekg000$save"(tag: $CompoundTag$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$ekg000$scaled"(cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$ekg000$tickCarriedBy"(player: $Player$$Type, stack: $ItemStack$$Type, ci: $CallbackInfo$$Type): void
public "handler$gcc000$create$onCheckBanners"(blockGetter0: $BlockGetter$$Type, int1: integer, int2: integer, callbackInfo3: $CallbackInfo$$Type): void
public "handler$gcc000$create$onSave"(compoundTag0: $CompoundTag$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type<any>): void
public "isExplorationMap"(): boolean
public "isTrackedCountOverLimit"(int0: integer): boolean
public static "load"(compoundTag0: $CompoundTag$$Type): $MapItemSavedData
public "locked"(): $MapItemSavedData
public "removeCustomMarker"(key: string): boolean
public "removedFromFrame"(blockPos0: $BlockPos$$Type, int1: integer): void
public "resetCustomDecoration"(): void
public "scaled"(int0: integer): $MapItemSavedData
public "setColor"(int0: integer, int1: integer, byte2: byte): void
public "setCustomDataDirty"(type: $CustomMapData$Type$$Type<any>, dirtySetter: $Consumer$$Type<any>): void
public "setCustomDecorationsDirty"(): void
public "tickCarriedBy"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): void
public "toggleBanner"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): boolean
public "toggleCustomDecoration"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type): boolean
public "toggleStation"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, stationBlockEntity2: $StationBlockEntity$$Type): boolean
public "updateColor"(int0: integer, int1: integer, byte2: byte): boolean
get "centerX"(): integer
set "centerX"(value: integer)
get "centerZ"(): integer
set "centerZ"(value: integer)
get "colors"(): byte[]
set "colors"(value: byte[])
get "dimension"(): $ResourceKey<$Level>
set "dimension"(value: $ResourceKey$$Type<$Level$$Type>)
get "moonlight$customDecorations"(): $Map<any, any>
set "moonlight$customDecorations"(value: $Map$$Type<any, any>)
get "banners"(): $Collection<$MapBanner>
get "customData"(): $Map<any, any>
get "customDecorations"(): $Map<any, any>
get "customMarkers"(): $Map<any, any>
get "decorations"(): $Iterable<$MapDecoration>
get "vanillaDecorationSize"(): integer
get "explorationMap"(): boolean
}
}

declare module "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MapDecoration$Type, $MapDecoration$Type$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type"

export class $MapDecoration {
constructor(type0: $MapDecoration$Type$$Type, byte1: byte, byte2: byte, byte3: byte, component4: $Component$$Type)

public "getImage"(): byte
public "getName"(): $Component
public "getRot"(): byte
public "getType"(): $MapDecoration$Type
public "getX"(): byte
public "getY"(): byte
public "render"(int0: integer): boolean
public "renderOnFrame"(): boolean
get "image"(): byte
get "name"(): $Component
get "rot"(): byte
get "type"(): $MapDecoration$Type
get "x"(): byte
get "y"(): byte
}
}

declare module "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $MapDecoration$Type extends $Enum<$MapDecoration$Type> {
static readonly "BANNER_BLACK": $MapDecoration$Type
static readonly "BANNER_BLUE": $MapDecoration$Type
static readonly "BANNER_BROWN": $MapDecoration$Type
static readonly "BANNER_CYAN": $MapDecoration$Type
static readonly "BANNER_GRAY": $MapDecoration$Type
static readonly "BANNER_GREEN": $MapDecoration$Type
static readonly "BANNER_LIGHT_BLUE": $MapDecoration$Type
static readonly "BANNER_LIGHT_GRAY": $MapDecoration$Type
static readonly "BANNER_LIME": $MapDecoration$Type
static readonly "BANNER_MAGENTA": $MapDecoration$Type
static readonly "BANNER_ORANGE": $MapDecoration$Type
static readonly "BANNER_PINK": $MapDecoration$Type
static readonly "BANNER_PURPLE": $MapDecoration$Type
static readonly "BANNER_RED": $MapDecoration$Type
static readonly "BANNER_WHITE": $MapDecoration$Type
static readonly "BANNER_YELLOW": $MapDecoration$Type
static readonly "BLUE_MARKER": $MapDecoration$Type
static readonly "FRAME": $MapDecoration$Type
static readonly "MANSION": $MapDecoration$Type
static readonly "MONUMENT": $MapDecoration$Type
static readonly "PLAYER": $MapDecoration$Type
static readonly "PLAYER_OFF_LIMITS": $MapDecoration$Type
static readonly "PLAYER_OFF_MAP": $MapDecoration$Type
static readonly "RED_MARKER": $MapDecoration$Type
static readonly "RED_X": $MapDecoration$Type
static readonly "TARGET_POINT": $MapDecoration$Type
static readonly "TARGET_X": $MapDecoration$Type

public static "byIcon"(byte0: byte): $MapDecoration$Type
public "getIcon"(): byte
public "getMapColor"(): integer
public "hasMapColor"(): boolean
public "isRenderedOnFrame"(): boolean
public "shouldTrackCount"(): boolean
public static "valueOf"(string0: string): $MapDecoration$Type
public static "values"(): $MapDecoration$Type[]
get "icon"(): byte
get "mapColor"(): integer
get "renderedOnFrame"(): boolean
}
}

