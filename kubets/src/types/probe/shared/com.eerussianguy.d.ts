declare module "packages/com/eerussianguy/beneath/misc/$LostPage$Punishment" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $LostPage$Punishment extends $Enum<$LostPage$Punishment> implements $StringRepresentable {
static readonly "BLAZE_INFERNO": $LostPage$Punishment
static readonly "DRUNKENNESS": $LostPage$Punishment
static readonly "INFESTATION": $LostPage$Punishment
static readonly "LEVITATION": $LostPage$Punishment
static readonly "NONE": $LostPage$Punishment
static readonly "SLIME": $LostPage$Punishment
static readonly "UNKNOWN": $LostPage$Punishment
static readonly "WITHERING": $LostPage$Punishment

public "administer"(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): void
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $LostPage$Punishment
public static "valueOf"(int0: integer): $LostPage$Punishment
public static "values"(): $LostPage$Punishment[]
get "serializedName"(): string
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$SearchTargeting" {
import { $Enum } from "packages/java/lang/$Enum"

export class $SearchTargeting extends $Enum<$SearchTargeting> {
static readonly "HIT": $SearchTargeting
static readonly "MISS": $SearchTargeting
static readonly "NONE": $SearchTargeting

public "color"(): integer
public "color"(int0: integer): integer
public static "valueOf"(string0: string): $SearchTargeting
public static "values"(): $SearchTargeting[]
}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$IStorageAccess" {
import { $MinecraftStreams$Input } from "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Input"
import { $MinecraftStreams$Output } from "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Output"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IStorageAccess {
"exists"(resourceLocation0: $ResourceLocation$$Type): boolean
"exists"(resourceLocation0: $ResourceLocation$$Type, string1: string): boolean
"move"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): void
"move"(resourceLocation0: $ResourceLocation$$Type, string1: string, string2: string): void
"read"(resourceLocation0: $ResourceLocation$$Type, string1: string): $MinecraftStreams$Input
"read"(resourceLocation0: $ResourceLocation$$Type): $MinecraftStreams$Input
"write"(resourceLocation0: $ResourceLocation$$Type): $MinecraftStreams$Output
"write"(resourceLocation0: $ResourceLocation$$Type, string1: string): $MinecraftStreams$Output
}

export namespace $IStorageAccess {
const probejs$$marker: never
}
export abstract class $IStorageAccess$$Static implements $IStorageAccess {
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$Producer" {
import { $DataType } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $MasterDatum } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export interface $Producer {
"getOutputID"(): $BlazeRegistry$Key<$DataType<$MasterDatum>>
get "outputID"(): $BlazeRegistry$Key<$DataType<$MasterDatum>>
}

export namespace $Producer {
const probejs$$marker: never
}
export abstract class $Producer$$Static implements $Producer {
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$ServerPipelineInitEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $IStorageAccess, $IStorageAccess$$Type } from "packages/com/eerussianguy/blazemap/api/util/$IStorageAccess"
import { $MasterDataDispatcher, $MasterDataDispatcher$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDataDispatcher"

export class $ServerPipelineInitEvent extends $Event {
readonly "dimension": $ResourceKey<$Level>
readonly "dimensionStorage": $IStorageAccess

constructor(resourceKey0: $ResourceKey$$Type<$Level>, iStorageAccess1: $IStorageAccess$$Type, masterDataDispatcher2: $MasterDataDispatcher$$Type)
constructor()

public "getDispatcher"(): $MasterDataDispatcher
public "setDispatcher"(masterDataDispatcher0: $MasterDataDispatcher$$Type): void
get "dispatcher"(): $MasterDataDispatcher
set "dispatcher"(value: $MasterDataDispatcher$$Type)
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$TransformerRegistryEvent" {
import { $MasterDatum } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $Transformer } from "packages/com/eerussianguy/blazemap/api/pipeline/$Transformer"
import { $BlazeRegistryEvent } from "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent"

export class $BlazeRegistryEvent$TransformerRegistryEvent extends $BlazeRegistryEvent<$Transformer<$MasterDatum>> {
constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key" {
import { $BlazeRegistry$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $BlazeRegistry$Key<T> {
readonly "location": $ResourceLocation

constructor(blazeRegistry0: $BlazeRegistry$$Type<T>, resourceLocation1: $ResourceLocation$$Type)
constructor(blazeRegistry0: $BlazeRegistry$$Type<T>, string1: string, string2: string)
constructor(blazeRegistry0: $BlazeRegistry$$Type<T>, string1: string)

public "value"(): T
}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$TileResolution" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TileResolution extends $Enum<$TileResolution> {
static readonly "EIGHTH": $TileResolution
static readonly "FULL": $TileResolution
static readonly "HALF": $TileResolution
static readonly "QUARTER": $TileResolution
readonly "cacheTime": integer
readonly "chunkWidth": integer
readonly "pixelWidth": integer
readonly "regionSizeKb": integer
readonly "regionWidth": integer
readonly "zoom": double

public static "byZoom"(double0: double): $TileResolution
public static "valueOf"(string0: string): $TileResolution
public static "values"(): $TileResolution[]
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$ObjectRendererRegistryEvent" {
import { $ObjectRenderer } from "packages/com/eerussianguy/blazemap/api/markers/$ObjectRenderer"
import { $BlazeRegistryEvent } from "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent"

export class $BlazeRegistryEvent$ObjectRendererRegistryEvent extends $BlazeRegistryEvent<$ObjectRenderer<any>> {
constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$PipelineComponent" {
import { $PipelineType$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$PipelineType"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export interface $PipelineComponent {
"shouldExecuteIn"(resourceKey0: $ResourceKey$$Type<$Level>, pipelineType1: $PipelineType$$Type): boolean
}

export namespace $PipelineComponent {
const probejs$$marker: never
}
export abstract class $PipelineComponent$$Static implements $PipelineComponent {
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$WaypointEvent$Removed" {
import { $WaypointEvent } from "packages/com/eerussianguy/blazemap/api/event/$WaypointEvent"
import { $Waypoint$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$Waypoint"

export class $WaypointEvent$Removed extends $WaypointEvent {
constructor(waypoint0: $Waypoint$$Type)
constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapLabelEvent$Created" {
import { $MapLabelEvent } from "packages/com/eerussianguy/blazemap/api/event/$MapLabelEvent"
import { $MapLabel$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$MapLabel"

export class $MapLabelEvent$Created extends $MapLabelEvent {
constructor(mapLabel0: $MapLabel$$Type)
constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$MapTypeRegistryEvent" {
import { $BlazeRegistryEvent } from "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent"
import { $MapType } from "packages/com/eerussianguy/blazemap/api/maps/$MapType"

export class $BlazeRegistryEvent$MapTypeRegistryEvent extends $BlazeRegistryEvent<$MapType> {
constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$LayerRegion" {
import { $RegionPos, $RegionPos$$Type } from "packages/com/eerussianguy/blazemap/api/util/$RegionPos"
import { $Layer, $Layer$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$Layer"
import { $BlazeRegistry$Key, $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export class $LayerRegion {
readonly "layer": $BlazeRegistry$Key<$Layer>
readonly "region": $RegionPos

constructor(key0: $BlazeRegistry$Key$$Type<$Layer$$Type>, regionPos1: $RegionPos$$Type)

}
}

declare module "packages/com/eerussianguy/blazemap/api/debug/$MDInspectionController" {
import { $MasterDatum, $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $MDInspectionController<MD extends $MasterDatum> {
"getGridName"(md0: MD, int1: integer): string
"getIcon"(md0: MD, int1: integer, int2: integer, int3: integer): $ResourceLocation
"getLine"(md0: MD, int1: integer): string
"getNumGrids"(md0: MD): integer
"getNumLines"(md0: MD): integer
"getTint"(md0: MD, int1: integer, int2: integer, int3: integer): integer
"getTooltip"(md0: MD, int1: integer, int2: integer, int3: integer): string
}

export namespace $MDInspectionController {
const probejs$$marker: never
}
export abstract class $MDInspectionController$$Static<MD extends $MasterDatum> implements $MDInspectionController<MD> {
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$WaypointEvent$Created" {
import { $WaypointEvent } from "packages/com/eerussianguy/blazemap/api/event/$WaypointEvent"
import { $Waypoint$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$Waypoint"

export class $WaypointEvent$Created extends $WaypointEvent {
constructor(waypoint0: $Waypoint$$Type)
constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$ServerJoinedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IMarkerStorage, $IMarkerStorage$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$IMarkerStorage"
import { $IStorageFactory, $IStorageFactory$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$IStorageFactory"
import { $Waypoint, $Waypoint$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$Waypoint"
import { $IStorageAccess, $IStorageAccess$$Type } from "packages/com/eerussianguy/blazemap/api/util/$IStorageAccess"

export class $ServerJoinedEvent extends $Event {
readonly "serverHasBlazeMap": boolean
readonly "serverID": string
readonly "serverStorage": $IStorageAccess

constructor()
constructor(string0: string, iStorageAccess1: $IStorageAccess$$Type, boolean2: boolean)

public "getWaypointStorageFactory"(): $IStorageFactory<$IMarkerStorage<$Waypoint>>
public "setWaypointStorageFactory"(iStorageFactory0: $IStorageFactory$$Type<$IMarkerStorage$$Type<$Waypoint$$Type>>): void
get "waypointStorageFactory"(): $IStorageFactory<$IMarkerStorage<$Waypoint>>
set "waypointStorageFactory"(value: $IStorageFactory$$Type<$IMarkerStorage$$Type<$Waypoint$$Type>>)
}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$IClientComponent" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $BlazeRegistry$RegistryEntry } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$RegistryEntry"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export interface $IClientComponent extends $BlazeRegistry$RegistryEntry {
"getID"(): $BlazeRegistry$Key<any>
"getIcon"(): $ResourceLocation
"getName"(): $Component
"shouldRenderInDimension"(resourceKey0: $ResourceKey$$Type<$Level>): boolean
get "iD"(): $BlazeRegistry$Key<any>
get "icon"(): $ResourceLocation
get "name"(): $Component
}

export namespace $IClientComponent {
const probejs$$marker: never
}
export abstract class $IClientComponent$$Static implements $IClientComponent {
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$CollectorRegistryEvent" {
import { $Collector } from "packages/com/eerussianguy/blazemap/api/pipeline/$Collector"
import { $MasterDatum } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $BlazeRegistryEvent } from "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent"

export class $BlazeRegistryEvent$CollectorRegistryEvent extends $BlazeRegistryEvent<$Collector<$MasterDatum>> {
constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$RegistryEntry" {
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export interface $BlazeRegistry$RegistryEntry {
"getID"(): $BlazeRegistry$Key<any>
get "iD"(): $BlazeRegistry$Key<any>
}

export namespace $BlazeRegistry$RegistryEntry {
const probejs$$marker: never
}
export abstract class $BlazeRegistry$RegistryEntry$$Static implements $BlazeRegistry$RegistryEntry {
}
}

declare module "packages/com/eerussianguy/blazemap/api/$BlazeRegistry" {
import { $List } from "packages/java/util/$List"
import { $BlazeRegistry$RegistryEntry$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$RegistryEntry"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlazeRegistry$Key, $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export class $BlazeRegistry<T> {
constructor()

public "exists"(key0: $BlazeRegistry$Key$$Type<T>): boolean
public "findOrCreate"(string0: string): $BlazeRegistry$Key<T>
public "findOrCreate"(resourceLocation0: $ResourceLocation$$Type): $BlazeRegistry$Key<T>
public "freeze"(): void
public "get"(key0: $BlazeRegistry$Key$$Type<T>): T
public "isFrozen"(): boolean
public "keys"(): $List<$BlazeRegistry$Key<T>>
public "register"(registryEntry0: $BlazeRegistry$RegistryEntry$$Type): void
public "replace"(registryEntry0: $BlazeRegistry$RegistryEntry$$Type): void
get "frozen"(): boolean
}
}

declare module "packages/com/eerussianguy/beneath/mixin/$BlockEntityTypeAccessor" {
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockEntityTypeAccessor {
"accessor$getValidBlocks"(): $Set<$Block>
"accessor$setValidBlocks"(set0: $Set$$Type<$Block$$Type>): void
}

export namespace $BlockEntityTypeAccessor {
const probejs$$marker: never
}
export abstract class $BlockEntityTypeAccessor$$Static implements $BlockEntityTypeAccessor {
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$Collector" {
import { $PipelineType$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$PipelineType"
import { $DataType, $DataType$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $PipelineComponent } from "packages/com/eerussianguy/blazemap/api/pipeline/$PipelineComponent"
import { $MasterDatum, $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $Producer } from "packages/com/eerussianguy/blazemap/api/pipeline/$Producer"
import { $BlazeRegistry$RegistryEntry } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$RegistryEntry"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlazeRegistry$Key, $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export class $Collector<T extends $MasterDatum> implements $BlazeRegistry$RegistryEntry, $PipelineComponent, $Producer {
constructor(key0: $BlazeRegistry$Key$$Type<$Collector$$Type<$MasterDatum$$Type>>, key1: $BlazeRegistry$Key$$Type<$DataType$$Type<$MasterDatum$$Type>>)

public "collect"(level0: $Level$$Type, int1: integer, int2: integer, int3: integer, int4: integer): T
public "getID"(): $BlazeRegistry$Key<$Collector<$MasterDatum>>
public "getOutputID"(): $BlazeRegistry$Key<$DataType<$MasterDatum>>
public "shouldExecuteIn"(resourceKey0: $ResourceKey$$Type<$Level>, pipelineType1: $PipelineType$$Type): boolean
get "iD"(): $BlazeRegistry$Key<$Collector<$MasterDatum>>
get "outputID"(): $BlazeRegistry$Key<$DataType<$MasterDatum>>
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$Waypoint" {
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Marker } from "packages/com/eerussianguy/blazemap/api/markers/$Marker"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $Waypoint extends $Marker<$Waypoint> {
constructor(resourceLocation0: $ResourceLocation$$Type, resourceKey1: $ResourceKey$$Type<$Level>, blockPos2: $BlockPos$$Type, string3: string, resourceLocation4: $ResourceLocation$$Type, int5: integer, float6: float)
constructor(resourceLocation0: $ResourceLocation$$Type, resourceKey1: $ResourceKey$$Type<$Level>, blockPos2: $BlockPos$$Type, string3: string, resourceLocation4: $ResourceLocation$$Type, int5: integer)
constructor(resourceLocation0: $ResourceLocation$$Type, resourceKey1: $ResourceKey$$Type<$Level>, blockPos2: $BlockPos$$Type, string3: string, resourceLocation4: $ResourceLocation$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, resourceKey1: $ResourceKey$$Type<$Level>, blockPos2: $BlockPos$$Type, string3: string)

public "getName"(): string
public "setName"(string0: string): $Waypoint
get "name"(): string
set "name"(value: string)
}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Input" {
import { $ChunkPos } from "packages/net/minecraft/world/level/$ChunkPos"
import { $RegionPos } from "packages/com/eerussianguy/blazemap/api/util/$RegionPos"
import { $DataInputStream } from "packages/java/io/$DataInputStream"
import { $InputStream$$Type } from "packages/java/io/$InputStream"
import { $BlazeRegistry$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export class $MinecraftStreams$Input extends $DataInputStream {
constructor(inputStream0: $InputStream$$Type)

public "readBlockPos"(): $BlockPos
public "readChunkPos"(): $ChunkPos
public "readDimensionKey"(): $ResourceKey<$Level>
public "readKey"<T>(blazeRegistry0: $BlazeRegistry$$Type<T>): $BlazeRegistry$Key<T>
public "readRegionPos"(): $RegionPos
public "readResourceLocation"(): $ResourceLocation
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$Marker" {
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$MutableBlockPos$$Type } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $Marker<T extends $Marker<T>> {
public "getColor"(): integer
public "getDimension"(): $ResourceKey<$Level>
public "getID"(): $ResourceLocation
public "getIcon"(): $ResourceLocation
public "getPosition"(): $BlockPos
public "getRotation"(): float
public "randomizeColor"(): T
public "setColor"(int0: integer): T
public "setIcon"(resourceLocation0: $ResourceLocation$$Type): T
public "setPosition"(blockPos0: $BlockPos$$Type): T
public "setPositionObject"(mutableBlockPos0: $BlockPos$MutableBlockPos$$Type): T
public "setRotation"(float0: float): T
get "color"(): integer
get "dimension"(): $ResourceKey<$Level>
get "iD"(): $ResourceLocation
get "icon"(): $ResourceLocation
get "position"(): $BlockPos
get "rotation"(): float
set "color"(value: integer)
set "icon"(value: $ResourceLocation$$Type)
set "position"(value: $BlockPos$$Type)
set "positionObject"(value: $BlockPos$MutableBlockPos$$Type)
set "rotation"(value: float)
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$LayerRegistryEvent" {
import { $Layer } from "packages/com/eerussianguy/blazemap/api/maps/$Layer"
import { $BlazeRegistryEvent } from "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent"

export class $BlazeRegistryEvent$LayerRegistryEvent extends $BlazeRegistryEvent<$Layer> {
constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$MapLabel" {
import { $ObjectRenderer, $ObjectRenderer$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$ObjectRenderer"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Layer, $Layer$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$Layer"
import { $Marker } from "packages/com/eerussianguy/blazemap/api/markers/$Marker"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlazeRegistry$Key, $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export class $MapLabel extends $Marker<$MapLabel> {
constructor(resourceLocation0: $ResourceLocation$$Type, resourceKey1: $ResourceKey$$Type<$Level>, blockPos2: $BlockPos$$Type, key3: $BlazeRegistry$Key$$Type<$Layer$$Type>, resourceLocation4: $ResourceLocation$$Type, int5: integer, int6: integer, int7: integer, float8: float, boolean9: boolean, set10: $Set$$Type<string>)
constructor(resourceLocation0: $ResourceLocation$$Type, resourceKey1: $ResourceKey$$Type<$Level>, blockPos2: $BlockPos$$Type, key3: $BlazeRegistry$Key$$Type<$Layer$$Type>, resourceLocation4: $ResourceLocation$$Type, int5: integer, int6: integer)
constructor(resourceLocation0: $ResourceLocation$$Type, resourceKey1: $ResourceKey$$Type<$Level>, blockPos2: $BlockPos$$Type, key3: $BlazeRegistry$Key$$Type<$Layer$$Type>)

public "getHeight"(): integer
public "getLayerID"(): $BlazeRegistry$Key<$Layer>
public "getRenderer"(): $BlazeRegistry$Key<$ObjectRenderer<any>>
public "getTags"(): $Set<string>
public "getUsesZoom"(): boolean
public "getWidth"(): integer
public "setRenderer"(key0: $BlazeRegistry$Key$$Type<$ObjectRenderer$$Type<any>>): $MapLabel
public "setSize"(int0: integer, int1: integer): $MapLabel
public "setUsesZoom"(boolean0: boolean): $MapLabel
get "height"(): integer
get "layerID"(): $BlazeRegistry$Key<$Layer>
get "renderer"(): $BlazeRegistry$Key<$ObjectRenderer<any>>
get "tags"(): $Set<string>
get "usesZoom"(): boolean
get "width"(): integer
set "renderer"(value: $BlazeRegistry$Key$$Type<$ObjectRenderer$$Type<any>>)
set "usesZoom"(value: boolean)
}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$IOSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IOSupplier<T> {
"get"(): T
}

export namespace $IOSupplier {
const probejs$$marker: never
}
export abstract class $IOSupplier$$Static<T> implements $IOSupplier<T> {
}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$IDataSource" {
import { $DataType$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $MasterDatum, $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export interface $IDataSource {
"get"<T extends $MasterDatum>(key0: $BlazeRegistry$Key$$Type<$DataType$$Type<T>>): T
}

export namespace $IDataSource {
const probejs$$marker: never
}
export abstract class $IDataSource$$Static implements $IDataSource {
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$WaypointEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Waypoint } from "packages/com/eerussianguy/blazemap/api/markers/$Waypoint"

export class $WaypointEvent extends $Event {
readonly "waypoint": $Waypoint

constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapLabelEvent$Removed" {
import { $MapLabelEvent } from "packages/com/eerussianguy/blazemap/api/event/$MapLabelEvent"
import { $MapLabel$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$MapLabel"

export class $MapLabelEvent$Removed extends $MapLabelEvent {
constructor(mapLabel0: $MapLabel$$Type)
constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$ExecutionMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ExecutionMode extends $Enum<$ExecutionMode> {
static readonly "DIFFERENTIAL": $ExecutionMode
static readonly "DIRECT": $ExecutionMode

public static "valueOf"(string0: string): $ExecutionMode
public static "values"(): $ExecutionMode[]
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$ProcessorRegistryEvent" {
import { $Processor } from "packages/com/eerussianguy/blazemap/api/pipeline/$Processor"
import { $BlazeRegistryEvent } from "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent"

export class $BlazeRegistryEvent$ProcessorRegistryEvent extends $BlazeRegistryEvent<$Processor> {
constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDataDispatcher" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $DataType$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $Set$$Type } from "packages/java/util/$Set"
import { $List$$Type } from "packages/java/util/$List"
import { $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export interface $MasterDataDispatcher {
"dispatch"(resourceKey0: $ResourceKey$$Type<$Level>, chunkPos1: $ChunkPos$$Type, list2: $List$$Type<$MasterDatum$$Type>, set3: $Set$$Type<$BlazeRegistry$Key$$Type<$DataType$$Type<$MasterDatum$$Type>>>, string4: string, levelChunk5: $LevelChunk$$Type): void
}

export namespace $MasterDataDispatcher {
const probejs$$marker: never
}
export abstract class $MasterDataDispatcher$$Static implements $MasterDataDispatcher {
}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$DimensionTileStorage" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $RegionPos$$Type } from "packages/com/eerussianguy/blazemap/api/util/$RegionPos"
import { $TileResolution$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$TileResolution"
import { $Layer$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$Layer"
import { $NativeImage$$Type } from "packages/com/mojang/blaze3d/platform/$NativeImage"
import { $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export interface $DimensionTileStorage {
"consumeTile"(key0: $BlazeRegistry$Key$$Type<$Layer$$Type>, regionPos1: $RegionPos$$Type, tileResolution2: $TileResolution$$Type, consumer3: $Consumer$$Type<$NativeImage$$Type>): void
}

export namespace $DimensionTileStorage {
const probejs$$marker: never
}
export abstract class $DimensionTileStorage$$Static implements $DimensionTileStorage {
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$DataType" {
import { $MinecraftStreams$Input$$Type } from "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Input"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $MinecraftStreams$Output$$Type } from "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Output"
import { $MasterDatum, $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $MDInspectionController } from "packages/com/eerussianguy/blazemap/api/debug/$MDInspectionController"
import { $BlazeRegistry$RegistryEntry } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$RegistryEntry"
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export interface $DataType<T extends $MasterDatum> extends $BlazeRegistry$RegistryEntry {
"deserialize"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"deserialize"(input0: $MinecraftStreams$Input$$Type): T
"getID"(): $BlazeRegistry$Key<any>
"getInspectionController"(): $MDInspectionController<T>
"serialize"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
"serialize"(output0: $MinecraftStreams$Output$$Type, t1: T): void
get "iD"(): $BlazeRegistry$Key<any>
get "inspectionController"(): $MDInspectionController<T>
}

export namespace $DataType {
const probejs$$marker: never
}
export abstract class $DataType$$Static<T extends $MasterDatum> implements $DataType<T> {
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$ObjectRenderer" {
import { $BlazeRegistry$RegistryEntry } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$RegistryEntry"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $SearchTargeting$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$SearchTargeting"
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export interface $ObjectRenderer<T> extends $BlazeRegistry$RegistryEntry {
"getID"(): $BlazeRegistry$Key<$ObjectRenderer<any>>
"render"(t0: T, guiGraphics1: $GuiGraphics$$Type, double2: double, searchTargeting3: $SearchTargeting$$Type): void
get "iD"(): $BlazeRegistry$Key<$ObjectRenderer<any>>
}

export namespace $ObjectRenderer {
const probejs$$marker: never
}
export abstract class $ObjectRenderer$$Static<T> implements $ObjectRenderer<T> {
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapMenuSetupEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $MapMenuSetupEvent$MenuFolder, $MapMenuSetupEvent$MenuFolder$$Type } from "packages/com/eerussianguy/blazemap/api/event/$MapMenuSetupEvent$MenuFolder"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Layer, $Layer$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$Layer"
import { $BlazeRegistry$Key, $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export class $MapMenuSetupEvent extends $Event {
readonly "blockPosX": integer
readonly "blockPosZ": integer
readonly "chunkPosX": integer
readonly "chunkPosZ": integer
readonly "layers": $List<$BlazeRegistry$Key<$Layer>>
readonly "regionPosX": integer
readonly "regionPosZ": integer
readonly "root": $MapMenuSetupEvent$MenuFolder

constructor()
constructor(menuFolder0: $MapMenuSetupEvent$MenuFolder$$Type, list1: $List$$Type<$BlazeRegistry$Key$$Type<$Layer$$Type>>, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer)

}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$Layer" {
import { $Consumer } from "packages/com/eerussianguy/blazemap/api/pipeline/$Consumer"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MasterDatum, $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $TileResolution$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$TileResolution"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $NativeImage$$Type } from "packages/com/mojang/blaze3d/platform/$NativeImage"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlazeRegistry$Key, $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"
import { $IDataSource$$Type } from "packages/com/eerussianguy/blazemap/api/util/$IDataSource"
import { $DataType, $DataType$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $Set } from "packages/java/util/$Set"
import { $Renderable } from "packages/net/minecraft/client/gui/components/$Renderable"
import { $BlazeRegistry$RegistryEntry } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$RegistryEntry"
import { $IClientComponent } from "packages/com/eerussianguy/blazemap/api/maps/$IClientComponent"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $Layer implements $BlazeRegistry$RegistryEntry, $Consumer, $IClientComponent {
constructor(key0: $BlazeRegistry$Key$$Type<$Layer$$Type>, component1: $Component$$Type, ...key2s: $BlazeRegistry$Key$$Type<$DataType$$Type<$MasterDatum$$Type>>[])
constructor(key0: $BlazeRegistry$Key$$Type<$Layer$$Type>, component1: $Component$$Type, resourceLocation2: $ResourceLocation$$Type, ...key3s: $BlazeRegistry$Key$$Type<$DataType$$Type<$MasterDatum$$Type>>[])

public "getID"(): $BlazeRegistry$Key<$Layer>
public "getIcon"(): $ResourceLocation
public "getInputIDs"(): $Set<$BlazeRegistry$Key<$DataType<$MasterDatum>>>
public "getLegendWidget"(): $Renderable
public "getName"(): $Component
public "isOpaque"(): boolean
public "renderTile"(nativeImage0: $NativeImage$$Type, tileResolution1: $TileResolution$$Type, iDataSource2: $IDataSource$$Type, int3: integer, int4: integer): boolean
public "shouldRenderInDimension"(resourceKey0: $ResourceKey$$Type<$Level>): boolean
get "iD"(): $BlazeRegistry$Key<$Layer>
get "icon"(): $ResourceLocation
get "inputIDs"(): $Set<$BlazeRegistry$Key<$DataType<$MasterDatum>>>
get "legendWidget"(): $Renderable
get "name"(): $Component
get "opaque"(): boolean
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$Processor" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Consumer } from "packages/com/eerussianguy/blazemap/api/pipeline/$Consumer"
import { $MasterDatum } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"
import { $IDataSource$$Type } from "packages/com/eerussianguy/blazemap/api/util/$IDataSource"
import { $PipelineType$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$PipelineType"
import { $DataType } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $PipelineComponent } from "packages/com/eerussianguy/blazemap/api/pipeline/$PipelineComponent"
import { $RegionPos$$Type } from "packages/com/eerussianguy/blazemap/api/util/$RegionPos"
import { $Set } from "packages/java/util/$Set"
import { $BlazeRegistry$RegistryEntry } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$RegistryEntry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ExecutionMode } from "packages/com/eerussianguy/blazemap/api/pipeline/$ExecutionMode"

export class $Processor implements $BlazeRegistry$RegistryEntry, $PipelineComponent, $Consumer {
readonly "executionMode": $ExecutionMode

public "execute"(resourceKey0: $ResourceKey$$Type<$Level>, regionPos1: $RegionPos$$Type, chunkPos2: $ChunkPos$$Type, iDataSource3: $IDataSource$$Type): void
public "execute"(resourceKey0: $ResourceKey$$Type<$Level>, regionPos1: $RegionPos$$Type, chunkPos2: $ChunkPos$$Type, iDataSource3: $IDataSource$$Type, iDataSource4: $IDataSource$$Type): void
public "getID"(): $BlazeRegistry$Key<$Processor>
public "getInputIDs"(): $Set<$BlazeRegistry$Key<$DataType<$MasterDatum>>>
public "shouldExecuteIn"(resourceKey0: $ResourceKey$$Type<$Level>, pipelineType1: $PipelineType$$Type): boolean
get "iD"(): $BlazeRegistry$Key<$Processor>
get "inputIDs"(): $Set<$BlazeRegistry$Key<$DataType<$MasterDatum>>>
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$IMarkerStorage" {
import { $Collection } from "packages/java/util/$Collection"
import { $Marker, $Marker$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$Marker"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IMarkerStorage<T extends $Marker<T>> {
"add"(t0: T): void
"getAll"(): $Collection<T>
"has"(t0: T): boolean
"has"(resourceLocation0: $ResourceLocation$$Type): boolean
"remove"(t0: T): void
"remove"(resourceLocation0: $ResourceLocation$$Type): void
get "all"(): $Collection<T>
}

export namespace $IMarkerStorage {
const probejs$$marker: never
}
export abstract class $IMarkerStorage$$Static<T extends $Marker<T>> implements $IMarkerStorage<T> {
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$IStorageFactory" {
import { $IMarkerStorage } from "packages/com/eerussianguy/blazemap/api/markers/$IMarkerStorage"
import { $MinecraftStreams$Input } from "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Input"
import { $MinecraftStreams$Output } from "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Output"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $IOSupplier$$Type } from "packages/com/eerussianguy/blazemap/api/util/$IOSupplier"

export interface $IStorageFactory<T extends $IMarkerStorage<any>> {
"create"(iOSupplier0: $IOSupplier$$Type<$MinecraftStreams$Input>, iOSupplier1: $IOSupplier$$Type<$MinecraftStreams$Output>, supplier2: $Supplier$$Type<boolean>): T
}

export namespace $IStorageFactory {
const probejs$$marker: never
}
export abstract class $IStorageFactory$$Static<T extends $IMarkerStorage<any>> implements $IStorageFactory<T> {
}
}

declare module "packages/com/eerussianguy/firmalife/common/blocks/greenhouse/$PlanterType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $PlanterType extends $Enum<$PlanterType> {
static readonly "BONSAI": $PlanterType
static readonly "HANGING": $PlanterType
static readonly "HYDROPONIC": $PlanterType
static readonly "LARGE": $PlanterType
static readonly "QUAD": $PlanterType
static readonly "TRELLIS": $PlanterType

public static "valueOf"(string0: string): $PlanterType
public static "values"(): $PlanterType[]
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapMenuSetupEvent$MenuItem" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MapMenuSetupEvent$MenuItem {
readonly "icon": $ResourceLocation
readonly "iconColor": integer
readonly "id": $ResourceLocation
readonly "text": $Component

}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$MapType" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Set } from "packages/java/util/$Set"
import { $BlazeRegistry$RegistryEntry } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$RegistryEntry"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $IClientComponent } from "packages/com/eerussianguy/blazemap/api/maps/$IClientComponent"
import { $Layer, $Layer$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$Layer"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlazeRegistry$Key, $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export class $MapType implements $BlazeRegistry$RegistryEntry, $IClientComponent {
constructor(key0: $BlazeRegistry$Key$$Type<$MapType$$Type>, component1: $Component$$Type, resourceLocation2: $ResourceLocation$$Type, ...key3s: $BlazeRegistry$Key$$Type<$Layer$$Type>[])

public "getID"(): $BlazeRegistry$Key<$MapType>
public "getIcon"(): $ResourceLocation
public "getLayers"(): $Set<$BlazeRegistry$Key<$Layer>>
public "getName"(): $Component
public "shouldRenderInDimension"(resourceKey0: $ResourceKey$$Type<$Level>): boolean
get "iD"(): $BlazeRegistry$Key<$MapType>
get "icon"(): $ResourceLocation
get "layers"(): $Set<$BlazeRegistry$Key<$Layer>>
get "name"(): $Component
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$MasterDataRegistryEvent" {
import { $DataType } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $MasterDatum } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $BlazeRegistryEvent } from "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent"

export class $BlazeRegistryEvent$MasterDataRegistryEvent extends $BlazeRegistryEvent<$DataType<$MasterDatum>> {
constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapMenuSetupEvent$MenuFolder" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $MapMenuSetupEvent$MenuItem, $MapMenuSetupEvent$MenuItem$$Type } from "packages/com/eerussianguy/blazemap/api/event/$MapMenuSetupEvent$MenuItem"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MapMenuSetupEvent$MenuFolder extends $MapMenuSetupEvent$MenuItem {
constructor(resourceLocation0: $ResourceLocation$$Type, component1: $Component$$Type, ...menuItem2s: $MapMenuSetupEvent$MenuItem$$Type[])
constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, component2: $Component$$Type, ...menuItem3s: $MapMenuSetupEvent$MenuItem$$Type[])
constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, int2: integer, component3: $Component$$Type, ...menuItem4s: $MapMenuSetupEvent$MenuItem$$Type[])

public "add"(menuItem0: $MapMenuSetupEvent$MenuItem$$Type): void
public "consume"(consumer0: $Consumer$$Type<$MapMenuSetupEvent$MenuItem$$Type>): void
public "size"(): integer
}
}

declare module "packages/com/eerussianguy/blazemap/api/debug/$ModAnnouncementEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Set$$Type } from "packages/java/util/$Set"

export class $ModAnnouncementEvent extends $Event {
constructor()
constructor(set0: $Set$$Type<string>)

public "announce"(string0: string): void
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $BlazeRegistry } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry"

export class $BlazeRegistryEvent<T> extends $Event {
readonly "registry": $BlazeRegistry<T>

constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$DimensionTileNotifications" {
import { $LayerRegion$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$LayerRegion"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"

export interface $DimensionTileNotifications {
"addUpdateListener"(consumer0: $Consumer$$Type<$LayerRegion$$Type>): void
}

export namespace $DimensionTileNotifications {
const probejs$$marker: never
}
export abstract class $DimensionTileNotifications$$Static implements $DimensionTileNotifications {
}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Output" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $RegionPos$$Type } from "packages/com/eerussianguy/blazemap/api/util/$RegionPos"
import { $DataOutputStream } from "packages/java/io/$DataOutputStream"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export class $MinecraftStreams$Output extends $DataOutputStream {
constructor(outputStream0: $OutputStream$$Type)

public "write"(byte0s: byte[]): void
public "writeBlockPos"(blockPos0: $BlockPos$$Type): void
public "writeChunkPos"(chunkPos0: $ChunkPos$$Type): void
public "writeDimensionKey"(resourceKey0: $ResourceKey$$Type<$Level>): void
public "writeKey"<T>(key0: $BlazeRegistry$Key$$Type<T>): void
public "writeRegionPos"(regionPos0: $RegionPos$$Type): void
public "writeResourceLocation"(resourceLocation0: $ResourceLocation$$Type): void
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$PipelineType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $PipelineType extends $Enum<$PipelineType> {
static readonly "CLIENT_AND_SERVER": $PipelineType
static readonly "CLIENT_STANDALONE": $PipelineType
static readonly "SERVER": $PipelineType
readonly "hasRemote": boolean
readonly "isClient": boolean
readonly "isServer": boolean
readonly "isStandalone": boolean

public static "valueOf"(string0: string): $PipelineType
public static "values"(): $PipelineType[]
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum" {
import { $DataType } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export class $MasterDatum {
constructor()

public "equalsMD"(masterDatum0: $MasterDatum$$Type): boolean
public "getID"(): $BlazeRegistry$Key<$DataType<$MasterDatum>>
get "iD"(): $BlazeRegistry$Key<$DataType<$MasterDatum>>
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$Transformer" {
import { $Consumer } from "packages/com/eerussianguy/blazemap/api/pipeline/$Consumer"
import { $MasterDatum, $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlazeRegistry$Key, $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"
import { $IDataSource$$Type } from "packages/com/eerussianguy/blazemap/api/util/$IDataSource"
import { $PipelineType$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$PipelineType"
import { $DataType, $DataType$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $PipelineComponent } from "packages/com/eerussianguy/blazemap/api/pipeline/$PipelineComponent"
import { $Set } from "packages/java/util/$Set"
import { $Producer } from "packages/com/eerussianguy/blazemap/api/pipeline/$Producer"
import { $BlazeRegistry$RegistryEntry } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$RegistryEntry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $Transformer<T extends $MasterDatum> implements $BlazeRegistry$RegistryEntry, $PipelineComponent, $Producer, $Consumer {
constructor(key0: $BlazeRegistry$Key$$Type<$Transformer$$Type<$MasterDatum$$Type>>, key1: $BlazeRegistry$Key$$Type<$DataType$$Type<$MasterDatum$$Type>>, ...key2s: $BlazeRegistry$Key$$Type<$DataType$$Type<$MasterDatum$$Type>>[])

public "getID"(): $BlazeRegistry$Key<$Transformer<$MasterDatum>>
public "getInputIDs"(): $Set<$BlazeRegistry$Key<$DataType<$MasterDatum>>>
public "getOutputID"(): $BlazeRegistry$Key<$DataType<$MasterDatum>>
public "shouldExecuteIn"(resourceKey0: $ResourceKey$$Type<$Level>, pipelineType1: $PipelineType$$Type): boolean
public "transform"(iDataSource0: $IDataSource$$Type): T
get "iD"(): $BlazeRegistry$Key<$Transformer<$MasterDatum>>
get "inputIDs"(): $Set<$BlazeRegistry$Key<$DataType<$MasterDatum>>>
get "outputID"(): $BlazeRegistry$Key<$DataType<$MasterDatum>>
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$DimensionChangedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $DimensionTileNotifications, $DimensionTileNotifications$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$DimensionTileNotifications"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Layer, $Layer$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$Layer"
import { $IMarkerStorage$Layered, $IMarkerStorage$Layered$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$IMarkerStorage$Layered"
import { $DimensionTileStorage, $DimensionTileStorage$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$DimensionTileStorage"
import { $MapLabel, $MapLabel$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$MapLabel"
import { $BlazeRegistry$Key, $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"
import { $MapType, $MapType$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$MapType"
import { $IMarkerStorage, $IMarkerStorage$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$IMarkerStorage"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Waypoint, $Waypoint$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$Waypoint"
import { $IStorageAccess, $IStorageAccess$$Type } from "packages/com/eerussianguy/blazemap/api/util/$IStorageAccess"

export class $DimensionChangedEvent extends $Event {
readonly "availableLayers": $Set<$BlazeRegistry$Key<$Layer>>
readonly "availableMapTypes": $Set<$BlazeRegistry$Key<$MapType>>
readonly "dimension": $ResourceKey<$Level>
readonly "dimensionStorage": $IStorageAccess
readonly "labels": $IMarkerStorage$Layered<$MapLabel>
readonly "tileNotifications": $DimensionTileNotifications
readonly "tileStorage": $DimensionTileStorage
readonly "waypoints": $IMarkerStorage<$Waypoint>

constructor()
constructor(resourceKey0: $ResourceKey$$Type<$Level>, set1: $Set$$Type<$BlazeRegistry$Key$$Type<$MapType$$Type>>, set2: $Set$$Type<$BlazeRegistry$Key$$Type<$Layer$$Type>>, dimensionTileNotifications3: $DimensionTileNotifications$$Type, dimensionTileStorage4: $DimensionTileStorage$$Type, layered5: $IMarkerStorage$Layered$$Type<$MapLabel$$Type>, iMarkerStorage6: $IMarkerStorage$$Type<$Waypoint$$Type>, iStorageAccess7: $IStorageAccess$$Type)

}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$RegionPos" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $RegionPos {
static readonly "ORIGIN": $RegionPos
readonly "x": integer
readonly "z": integer

constructor(int0: integer, int1: integer)
constructor(chunkPos0: $ChunkPos$$Type)
constructor(blockPos0: $BlockPos$$Type)

public "containsSquare"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "distanceSquared"(regionPos0: $RegionPos$$Type): integer
public "offset"(int0: integer, int1: integer): $RegionPos
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapLabelEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $MapLabel } from "packages/com/eerussianguy/blazemap/api/markers/$MapLabel"

export class $MapLabelEvent extends $Event {
readonly "label": $MapLabel

constructor()

}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$Consumer" {
import { $DataType } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $Set } from "packages/java/util/$Set"
import { $MasterDatum } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export interface $Consumer {
"getInputIDs"(): $Set<$BlazeRegistry$Key<$DataType<$MasterDatum>>>
get "inputIDs"(): $Set<$BlazeRegistry$Key<$DataType<$MasterDatum>>>
}

export namespace $Consumer {
const probejs$$marker: never
}
export abstract class $Consumer$$Static implements $Consumer {
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$IMarkerStorage$Layered" {
import { $IMarkerStorage } from "packages/com/eerussianguy/blazemap/api/markers/$IMarkerStorage"
import { $Collection } from "packages/java/util/$Collection"
import { $Marker, $Marker$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$Marker"
import { $Layer$$Type } from "packages/com/eerussianguy/blazemap/api/maps/$Layer"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

export interface $IMarkerStorage$Layered<T extends $Marker<T>> extends $IMarkerStorage<T> {
"add"(t0: T): void
"getAll"(): $Collection<T>
"getInLayer"(key0: $BlazeRegistry$Key$$Type<$Layer$$Type>): $Collection<T>
"has"(t0: T): boolean
"has"(resourceLocation0: $ResourceLocation$$Type): boolean
"remove"(resourceLocation0: $ResourceLocation$$Type, key1: $BlazeRegistry$Key$$Type<$Layer$$Type>): void
"remove"(t0: T): void
"remove"(resourceLocation0: $ResourceLocation$$Type): void
get "all"(): $Collection<T>
}

export namespace $IMarkerStorage$Layered {
const probejs$$marker: never
}
export abstract class $IMarkerStorage$Layered$$Static<T extends $Marker<T>> implements $IMarkerStorage$Layered<T> {
}
}

