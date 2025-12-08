declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$RenderChunkAccess" {
import { $BufferBuilder$$Type } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"

export interface $RenderChunkAccess {
"invokeBeginLayer"(bufferBuilder0: $BufferBuilder$$Type): void
}

export namespace $RenderChunkAccess {
const probejs$$marker: never
}
export abstract class $RenderChunkAccess$$Static implements $RenderChunkAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$DamageSourcesAccess" {
import { $DamageType } from "packages/net/minecraft/world/damagesource/$DamageType"
import { $DamageSource } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $DamageSourcesAccess {
"invokeSource"(resourceKey0: $ResourceKey$$Type<$DamageType>, entity1: $Entity$$Type, entity2: $Entity$$Type): $DamageSource
}

export namespace $DamageSourcesAccess {
const probejs$$marker: never
}
export abstract class $DamageSourcesAccess$$Static implements $DamageSourcesAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$Connection$CatenaryData" {
import { $Record } from "packages/java/lang/$Record"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"

export class $Connection$CatenaryData extends $Record {
constructor(isVertical: boolean, offsetX: double, offsetY: double, scale: double, delta: $Vec3$$Type, horLength: double, vecA: $Vec3$$Type)

public "delta"(): $Vec3
public "getDeltaX"(): double
public "getDeltaY"(): double
public "getDeltaZ"(): double
public "getPoint"(double0: double): $Vec3
public "getRenderPoint"(int0: integer): $Vec3
public "getSlope"(double0: double): double
public "horLength"(): double
public "isVertical"(): boolean
public "offsetX"(): double
public "offsetY"(): double
public "reverse"(vec30: $Vec3$$Type): $Connection$CatenaryData
public "scale"(): double
public "vecA"(): $Vec3
get "deltaX"(): double
get "deltaY"(): double
get "deltaZ"(): double
get "vertical"(): boolean
}
}

declare module "packages/blusunrize/immersiveengineering/api/$TargetingInfo" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"

export class $TargetingInfo {
readonly "hitX": float
readonly "hitY": float
readonly "hitZ": float
readonly "side": $Direction

constructor(useOnContext0: $UseOnContext$$Type)
constructor(direction0: $Direction$$Type, float1: float, float2: float, float3: float)

public static "readFromNBT"(compoundTag0: $CompoundTag$$Type): $TargetingInfo
public "writeToNBT"(compoundTag0: $CompoundTag$$Type): void
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$ExplosionAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExplosionAccess {
}

export namespace $ExplosionAccess {
const probejs$$marker: never
}
export abstract class $ExplosionAccess$$Static implements $ExplosionAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$LocalNetworkHandler" {
import { $ConnectionPoint$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import { $GlobalWireNetwork$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork"
import { $ILocalHandlerConstructor$$Type } from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$ILocalHandlerConstructor"
import { $Connection$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import { $LocalWireNetwork$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IImmersiveConnectable$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"

export class $LocalNetworkHandler {
public static "createHandler"(resourceLocation0: $ResourceLocation$$Type, localWireNetwork1: $LocalWireNetwork$$Type, globalWireNetwork2: $GlobalWireNetwork$$Type): $LocalNetworkHandler
public "merge"(localNetworkHandler0: $LocalNetworkHandler$$Type): $LocalNetworkHandler
public "onConnectionAdded"(connection0: $Connection$$Type): void
public "onConnectionRemoved"(connection0: $Connection$$Type): void
public "onConnectorLoaded"(connectionPoint0: $ConnectionPoint$$Type, iImmersiveConnectable1: $IImmersiveConnectable$$Type): void
public "onConnectorRemoved"(blockPos0: $BlockPos$$Type, iImmersiveConnectable1: $IImmersiveConnectable$$Type): void
public "onConnectorUnloaded"(blockPos0: $BlockPos$$Type, iImmersiveConnectable1: $IImmersiveConnectable$$Type): void
public static "register"(resourceLocation0: $ResourceLocation$$Type, iLocalHandlerConstructor1: $ILocalHandlerConstructor$$Type): void
public "setLocalNet"(localWireNetwork0: $LocalWireNetwork$$Type): void
set "localNet"(value: $LocalWireNetwork$$Type)
}
}

declare module "packages/blusunrize/immersiveengineering/api/utils/$PlayerUtils$ConnectionAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerUtils$ConnectionAccess {
"setAboveGroundTickCount"(int0: integer): void
"setClientIsFloating"(boolean0: boolean): void
set "aboveGroundTickCount"(value: integer)
set "clientIsFloating"(value: boolean)
}

export namespace $PlayerUtils$ConnectionAccess {
const probejs$$marker: never
}
export abstract class $PlayerUtils$ConnectionAccess$$Static implements $PlayerUtils$ConnectionAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$FlowingFluidAccess" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $FlowingFluidAccess {
"callCanPassThroughWall"(direction0: $Direction$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type, blockState5: $BlockState$$Type): boolean
}

export namespace $FlowingFluidAccess {
const probejs$$marker: never
}
export abstract class $FlowingFluidAccess$$Static implements $FlowingFluidAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$TNTEntityAccess" {
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $TNTEntityAccess {
"setOwner"(livingEntity0: $LivingEntity$$Type): void
set "owner"(value: $LivingEntity$$Type)
}

export namespace $TNTEntityAccess {
const probejs$$marker: never
}
export abstract class $TNTEntityAccess$$Static implements $TNTEntityAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/proxy/$IICProxyProvider" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ConnectionPoint$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Connection$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IImmersiveConnectable, $IImmersiveConnectable$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"

export interface $IICProxyProvider {
"create"(blockPos0: $BlockPos$$Type, collection1: $Collection$$Type<$Connection$$Type>, collection2: $Collection$$Type<$ConnectionPoint$$Type>): $IImmersiveConnectable
"createFor"(iImmersiveConnectable0: $IImmersiveConnectable$$Type): $IImmersiveConnectable
"fromNBT"(compoundTag0: $CompoundTag$$Type): $IImmersiveConnectable
"toNBT"(iImmersiveConnectable0: $IImmersiveConnectable$$Type): $CompoundTag
}

export namespace $IICProxyProvider {
const probejs$$marker: never
}
export abstract class $IICProxyProvider$$Static implements $IICProxyProvider {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$Connection" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ConnectionPoint, $ConnectionPoint$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import { $GlobalWireNetwork$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork"
import { $Connection$CatenaryData } from "packages/blusunrize/immersiveengineering/api/wires/$Connection$CatenaryData"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $LocalWireNetwork } from "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork"
import { $WireType, $WireType$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $Connection {
static readonly "RENDER_POINTS_PER_WIRE": integer
readonly "type": $WireType

constructor(compoundTag0: $CompoundTag$$Type)
constructor(blockPos0: $BlockPos$$Type, int1: integer, int2: integer)
constructor(wireType0: $WireType$$Type, connectionPoint1: $ConnectionPoint$$Type, connectionPoint2: $ConnectionPoint$$Type, globalWireNetwork3: $GlobalWireNetwork$$Type)
constructor(wireType0: $WireType$$Type, connectionPoint1: $ConnectionPoint$$Type, connectionPoint2: $ConnectionPoint$$Type, vec33: $Vec3$$Type, vec34: $Vec3$$Type)

public "getCatenaryData"(): $Connection$CatenaryData
public "getContainingNet"(globalWireNetwork0: $GlobalWireNetwork$$Type): $LocalWireNetwork
public "getEndA"(): $ConnectionPoint
public "getEndAOffset"(): $Vec3
public "getEndB"(): $ConnectionPoint
public "getEndBOffset"(): $Vec3
public "getEndFor"(blockPos0: $BlockPos$$Type): $ConnectionPoint
public "getEnds"(): $ConnectionPoint[]
public "getLength"(): double
public "getOtherEnd"(connectionPoint0: $ConnectionPoint$$Type): $ConnectionPoint
public "getPoint"(double0: double, connectionPoint1: $ConnectionPoint$$Type): $Vec3
public "getSlope"(double0: double, connectionPoint1: $ConnectionPoint$$Type): double
public "isEnd"(connectionPoint0: $ConnectionPoint$$Type): boolean
public "isInternal"(): boolean
public "isPositiveEnd"(connectionPoint0: $ConnectionPoint$$Type): boolean
public static "makeCatenaryData"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, double2: double): $Connection$CatenaryData
public "toNBT"(): $CompoundTag
public "transformPosition"(double0: double, connectionPoint1: $ConnectionPoint$$Type): double
get "catenaryData"(): $Connection$CatenaryData
get "endA"(): $ConnectionPoint
get "endAOffset"(): $Vec3
get "endB"(): $ConnectionPoint
get "endBOffset"(): $Vec3
get "ends"(): $ConnectionPoint[]
get "length"(): double
get "internal"(): boolean
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$ConcretePowderBlockAccess" {
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $ConcretePowderBlockAccess {
"getConcrete"(): $BlockState
get "concrete"(): $BlockState
}

export namespace $ConcretePowderBlockAccess {
const probejs$$marker: never
}
export abstract class $ConcretePowderBlockAccess$$Static implements $ConcretePowderBlockAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$WorldRendererAccess" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $WorldRendererAccess {
"callRenderHitOutline"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, entity2: $Entity$$Type, double3: double, double4: double, double5: double, blockPos6: $BlockPos$$Type, blockState7: $BlockState$$Type): void
}

export namespace $WorldRendererAccess {
const probejs$$marker: never
}
export abstract class $WorldRendererAccess$$Static implements $WorldRendererAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable" {
import { $ConnectionPoint, $ConnectionPoint$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Collection } from "packages/java/util/$Collection"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $WireType$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Set } from "packages/java/util/$Set"
import { $TargetingInfo$$Type } from "packages/blusunrize/immersiveengineering/api/$TargetingInfo"
import { $Connection, $Connection$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import { $ILocalHandlerProvider } from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$ILocalHandlerProvider"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export interface $IImmersiveConnectable extends $ILocalHandlerProvider {
"canConnect"(): boolean
"canConnectCable"(wireType0: $WireType$$Type, connectionPoint1: $ConnectionPoint$$Type, vec3i2: $Vec3i$$Type): boolean
"connectCable"(wireType0: $WireType$$Type, connectionPoint1: $ConnectionPoint$$Type, iImmersiveConnectable2: $IImmersiveConnectable$$Type, connectionPoint3: $ConnectionPoint$$Type): void
"getConnectionMaster"(wireType0: $WireType$$Type, targetingInfo1: $TargetingInfo$$Type): $BlockPos
"getConnectionOffset"(connectionPoint0: $ConnectionPoint$$Type, connectionPoint1: $ConnectionPoint$$Type, wireType2: $WireType$$Type): $Vec3
"getConnectionPoints"(): $Collection<$ConnectionPoint>
"getIgnored"(iImmersiveConnectable0: $IImmersiveConnectable$$Type): $Set<$BlockPos>
"getInternalConnections"(): $Iterable<$Connection>
"getPosition"(): $BlockPos
"getRequestedHandlers"(): $Collection<$ResourceLocation>
"getTargetedPoint"(targetingInfo0: $TargetingInfo$$Type, vec3i1: $Vec3i$$Type): $ConnectionPoint
"isProxy"(): boolean
"removeCable"(connection0: $Connection$$Type, connectionPoint1: $ConnectionPoint$$Type): void
get "connectionPoints"(): $Collection<$ConnectionPoint>
get "internalConnections"(): $Iterable<$Connection>
get "position"(): $BlockPos
get "requestedHandlers"(): $Collection<$ResourceLocation>
get "proxy"(): boolean
}

export namespace $IImmersiveConnectable {
const probejs$$marker: never
}
export abstract class $IImmersiveConnectable$$Static implements $IImmersiveConnectable {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$ILocalHandlerProvider" {
import { $Collection } from "packages/java/util/$Collection"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ILocalHandlerProvider {
"getRequestedHandlers"(): $Collection<$ResourceLocation>
get "requestedHandlers"(): $Collection<$ResourceLocation>
}

export namespace $ILocalHandlerProvider {
const probejs$$marker: never
}
export abstract class $ILocalHandlerProvider$$Static implements $ILocalHandlerProvider {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ConnectionPoint, $ConnectionPoint$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import { $Collection } from "packages/java/util/$Collection"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $LocalNetworkHandler, $LocalNetworkHandler$$Type } from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$LocalNetworkHandler"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $IImmersiveConnectable } from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import { $IWorldTickable } from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$IWorldTickable"
import { $GlobalWireNetwork$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork"
import { $Connection } from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $LocalWireNetwork implements $IWorldTickable {
constructor(compoundTag0: $CompoundTag$$Type, globalWireNetwork1: $GlobalWireNetwork$$Type)
constructor(globalWireNetwork0: $GlobalWireNetwork$$Type)

public "addAsFutureTask"(runnable0: $Runnable$$Type): void
public "getAllHandlers"(): $Collection<$LocalNetworkHandler>
public "getConnectionPoints"(): $Collection<$ConnectionPoint>
public "getConnections"(blockPos0: $BlockPos$$Type): $Collection<$Connection>
public "getConnections"(connectionPoint0: $ConnectionPoint$$Type): $Collection<$Connection>
public "getConnector"(connectionPoint0: $ConnectionPoint$$Type): $IImmersiveConnectable
public "getConnector"(blockPos0: $BlockPos$$Type): $IImmersiveConnectable
public "getConnectors"(): $Collection<$BlockPos>
public "getHandler"<T extends $LocalNetworkHandler>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): T
public "getVersion"(): integer
public "isValid"(connectionPoint0: $ConnectionPoint$$Type): boolean
public "isValid"(): boolean
public "setInvalid"(): void
public "update"(level0: $Level$$Type): void
public "writeToNBT"(): $CompoundTag
get "allHandlers"(): $Collection<$LocalNetworkHandler>
get "connectionPoints"(): $Collection<$ConnectionPoint>
get "connectors"(): $Collection<$BlockPos>
get "version"(): integer
get "valid"(): boolean
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$CompiledChunkAccess" {
import { $Set } from "packages/java/util/$Set"
import { $RenderType } from "packages/net/minecraft/client/renderer/$RenderType"

export interface $CompiledChunkAccess {
"getHasBlocks"(): $Set<$RenderType>
get "hasBlocks"(): $Set<$RenderType>
}

export namespace $CompiledChunkAccess {
const probejs$$marker: never
}
export abstract class $CompiledChunkAccess$$Static implements $CompiledChunkAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$FontResourceManagerAccess" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FontSet } from "packages/net/minecraft/client/gui/font/$FontSet"
import { $Map } from "packages/java/util/$Map"

export interface $FontResourceManagerAccess {
"getFontSets"(): $Map<$ResourceLocation, $FontSet>
get "fontSets"(): $Map<$ResourceLocation, $FontSet>
}

export namespace $FontResourceManagerAccess {
const probejs$$marker: never
}
export abstract class $FontResourceManagerAccess$$Static implements $FontResourceManagerAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/multiblocks/$ClientMultiblocks$MultiblockManualData" {
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export interface $ClientMultiblocks$MultiblockManualData {
"canRenderFormedStructure"(): boolean
"getTotalMaterials"(): $NonNullList<$ItemStack>
"renderFormedStructure"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type): void
get "totalMaterials"(): $NonNullList<$ItemStack>
}

export namespace $ClientMultiblocks$MultiblockManualData {
const probejs$$marker: never
}
export abstract class $ClientMultiblocks$MultiblockManualData$$Static implements $ClientMultiblocks$MultiblockManualData {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$IConnectionTemplate$TemplateConnection" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Record } from "packages/java/lang/$Record"
import { $ConnectionPoint, $ConnectionPoint$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import { $WireType, $WireType$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$WireType"

export class $IConnectionTemplate$TemplateConnection extends $Record {
constructor(compoundTag0: $CompoundTag$$Type)
constructor(endA: $ConnectionPoint$$Type, endB: $ConnectionPoint$$Type, type: $WireType$$Type)

public "endA"(): $ConnectionPoint
public "endB"(): $ConnectionPoint
public "toNBT"(): $CompoundTag
public "type"(): $WireType
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$TemplateAccess" {
import { $StructureTemplate$Palette } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $List } from "packages/java/util/$List"

export interface $TemplateAccess {
"getPalettes"(): $List<$StructureTemplate$Palette>
"setSize"(vec3i0: $Vec3i$$Type): void
get "palettes"(): $List<$StructureTemplate$Palette>
set "size"(value: $Vec3i$$Type)
}

export namespace $TemplateAccess {
const probejs$$marker: never
}
export abstract class $TemplateAccess$$Static implements $TemplateAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$ServerPlayNetHandlerAccess" {
import { $PlayerUtils$ConnectionAccess } from "packages/blusunrize/immersiveengineering/api/utils/$PlayerUtils$ConnectionAccess"

export interface $ServerPlayNetHandlerAccess extends $PlayerUtils$ConnectionAccess {
"setAboveGroundTickCount"(int0: integer): void
"setClientIsFloating"(boolean0: boolean): void
set "aboveGroundTickCount"(value: integer)
set "clientIsFloating"(value: boolean)
}

export namespace $ServerPlayNetHandlerAccess {
const probejs$$marker: never
}
export abstract class $ServerPlayNetHandlerAccess$$Static implements $ServerPlayNetHandlerAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$RenderTypeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccess {
"getName"(): string
get "name"(): string
}

export namespace $RenderTypeAccess {
const probejs$$marker: never
}
export abstract class $RenderTypeAccess$$Static implements $RenderTypeAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$ILocalHandlerConstructor" {
import { $GlobalWireNetwork$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork"
import { $LocalNetworkHandler } from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$LocalNetworkHandler"
import { $LocalWireNetwork$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork"

export interface $ILocalHandlerConstructor {
"create"(localWireNetwork0: $LocalWireNetwork$$Type, globalWireNetwork1: $GlobalWireNetwork$$Type): $LocalNetworkHandler
}

export namespace $ILocalHandlerConstructor {
const probejs$$marker: never
}
export abstract class $ILocalHandlerConstructor$$Static implements $ILocalHandlerConstructor {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData$CollisionInfo" {
import { $Record } from "packages/java/lang/$Record"
import { $GlobalWireNetwork$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork"
import { $Connection, $Connection$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $LocalWireNetwork } from "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork"

export class $WireCollisionData$CollisionInfo extends $Record {
constructor(intersectA: $Vec3$$Type, intersectB: $Vec3$$Type, connection: $Connection$$Type, isInBlock: boolean)

public "connection"(): $Connection
public "getLocalNet"(globalWireNetwork0: $GlobalWireNetwork$$Type): $LocalWireNetwork
public "intersectA"(): $Vec3
public "intersectB"(): $Vec3
public "isInBlock"(): boolean
get "inBlock"(): boolean
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$ContainerAccess" {
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ContainerAccess {
"getLastSlots"(): $NonNullList<$ItemStack>
"getRemoteSlots"(): $NonNullList<$ItemStack>
get "lastSlots"(): $NonNullList<$ItemStack>
get "remoteSlots"(): $NonNullList<$ItemStack>
}

export namespace $ContainerAccess {
const probejs$$marker: never
}
export abstract class $ContainerAccess$$Static implements $ContainerAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $LevelEvent$Unload$$Type } from "packages/net/minecraftforge/event/level/$LevelEvent$Unload"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $BooleanSupplier } from "packages/java/util/function/$BooleanSupplier"
import { $ConnectionPoint, $ConnectionPoint$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import { $Collection } from "packages/java/util/$Collection"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $LocalWireNetwork } from "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork"
import { $IImmersiveConnectable, $IImmersiveConnectable$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import { $IWorldTickable } from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$IWorldTickable"
import { $IWireSyncManager$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$IWireSyncManager"
import { $IICProxyProvider, $IICProxyProvider$$Type } from "packages/blusunrize/immersiveengineering/api/wires/proxy/$IICProxyProvider"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Connection$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import { $WireCollisionData } from "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData"
import { $SetRestrictedField } from "packages/blusunrize/immersiveengineering/api/utils/$SetRestrictedField"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $GlobalWireNetwork implements $IWorldTickable {
static readonly "SANITIZE_CONNECTIONS": $SetRestrictedField<$BooleanSupplier>
static readonly "VALIDATE_CONNECTIONS": $SetRestrictedField<$BooleanSupplier>

constructor(boolean0: boolean, iICProxyProvider1: $IICProxyProvider$$Type, iWireSyncManager2: $IWireSyncManager$$Type)

public "addConnection"(connection0: $Connection$$Type): void
public "getAllConnectorsIn"(chunkPos0: $ChunkPos$$Type): $Collection<$ConnectionPoint>
public "getCollisionData"(): $WireCollisionData
public "getExistingConnector"(connectionPoint0: $ConnectionPoint$$Type): $IImmersiveConnectable
public "getLocalNet"(blockPos0: $BlockPos$$Type): $LocalWireNetwork
public "getLocalNet"(connectionPoint0: $ConnectionPoint$$Type): $LocalWireNetwork
public static "getNetwork"(level0: $Level$$Type): $GlobalWireNetwork
public "getNullableLocalNet"(connectionPoint0: $ConnectionPoint$$Type): $LocalWireNetwork
public "getNullableLocalNet"(blockPos0: $BlockPos$$Type): $LocalWireNetwork
public "getProxyProvider"(): $IICProxyProvider
public "onConnectorLoad"(iImmersiveConnectable0: $IImmersiveConnectable$$Type, level1: $Level$$Type): void
public "onConnectorLoad"(iImmersiveConnectable0: $IImmersiveConnectable$$Type, boolean1: boolean): void
public "onConnectorUnload"(iImmersiveConnectable0: $IImmersiveConnectable$$Type): void
public static "onWorldUnload"(unload0: $LevelEvent$Unload$$Type): void
public "readFromNBT"(compoundTag0: $CompoundTag$$Type): void
public "removeAllConnectionsAt"(iImmersiveConnectable0: $IImmersiveConnectable$$Type, consumer1: $Consumer$$Type<$Connection$$Type>): void
public "removeAllConnectionsAt"(connectionPoint0: $ConnectionPoint$$Type, consumer1: $Consumer$$Type<$Connection$$Type>): void
public "removeAndDropConnection"(connection0: $Connection$$Type, blockPos1: $BlockPos$$Type, level2: $Level$$Type): void
public "removeConnection"(connection0: $Connection$$Type): void
public "removeConnector"(iImmersiveConnectable0: $IImmersiveConnectable$$Type): void
public "removeInsertAndDropConnection"(connection0: $Connection$$Type, player1: $Player$$Type, level2: $Level$$Type): void
public "update"(level0: $Level$$Type): void
public "updateCatenaryData"(connection0: $Connection$$Type): void
public "writeToNBT"(): $CompoundTag
get "collisionData"(): $WireCollisionData
get "proxyProvider"(): $IICProxyProvider
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$IWorldTickable" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"

export interface $IWorldTickable {
"update"(level0: $Level$$Type): void
}

export namespace $IWorldTickable {
const probejs$$marker: never
}
export abstract class $IWorldTickable$$Static implements $IWorldTickable {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$MinecraftAccess" {
import { $FontManager } from "packages/net/minecraft/client/gui/font/$FontManager"

export interface $MinecraftAccess {
"getFontManager"(): $FontManager
get "fontManager"(): $FontManager
}

export namespace $MinecraftAccess {
const probejs$$marker: never
}
export abstract class $MinecraftAccess$$Static implements $MinecraftAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/multiblocks/$MultiblockHandler$MultiblockFormEvent" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PlayerEvent } from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import { $MultiblockHandler$IMultiblock, $MultiblockHandler$IMultiblock$$Type } from "packages/blusunrize/immersiveengineering/api/multiblocks/$MultiblockHandler$IMultiblock"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $MultiblockHandler$MultiblockFormEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, iMultiblock1: $MultiblockHandler$IMultiblock$$Type, blockPos2: $BlockPos$$Type, itemStack3: $ItemStack$$Type)

public "getClickedBlock"(): $BlockPos
public "getHammer"(): $ItemStack
public "getMultiblock"(): $MultiblockHandler$IMultiblock
get "clickedBlock"(): $BlockPos
get "hammer"(): $ItemStack
get "multiblock"(): $MultiblockHandler$IMultiblock
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$BETypeAccess" {
import { $Set } from "packages/java/util/$Set"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export interface $BETypeAccess {
"getValidBlocks"(): $Set<$Block>
get "validBlocks"(): $Set<$Block>
}

export namespace $BETypeAccess {
const probejs$$marker: never
}
export abstract class $BETypeAccess$$Static implements $BETypeAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$ChatComponentAccess" {
import { $GuiMessage } from "packages/net/minecraft/client/$GuiMessage"
import { $List } from "packages/java/util/$List"

export interface $ChatComponentAccess {
"getAllMessages"(): $List<$GuiMessage>
"invokeRefreshTrimmedMessage"(): void
get "allMessages"(): $List<$GuiMessage>
}

export namespace $ChatComponentAccess {
const probejs$$marker: never
}
export abstract class $ChatComponentAccess$$Static implements $ChatComponentAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$IConnectionTemplate" {
import { $List } from "packages/java/util/$List"
import { $IConnectionTemplate$TemplateConnection } from "packages/blusunrize/immersiveengineering/api/wires/$IConnectionTemplate$TemplateConnection"

export interface $IConnectionTemplate {
"getStoredConnections"(): $List<$IConnectionTemplate$TemplateConnection>
get "storedConnections"(): $List<$IConnectionTemplate$TemplateConnection>
}

export namespace $IConnectionTemplate {
const probejs$$marker: never
}
export abstract class $IConnectionTemplate$$Static implements $IConnectionTemplate {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$GuiSubtitleOverlayAccess" {
import { $SubtitleOverlay } from "packages/net/minecraft/client/gui/components/$SubtitleOverlay"

export interface $GuiSubtitleOverlayAccess {
"getSubtitleOverlay"(): $SubtitleOverlay
get "subtitleOverlay"(): $SubtitleOverlay
}

export namespace $GuiSubtitleOverlayAccess {
const probejs$$marker: never
}
export abstract class $GuiSubtitleOverlayAccess$$Static implements $GuiSubtitleOverlayAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$PlayerControllerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerControllerAccess {
"getDestroyProgress"(): float
get "destroyProgress"(): float
}

export namespace $PlayerControllerAccess {
const probejs$$marker: never
}
export abstract class $PlayerControllerAccess$$Static implements $PlayerControllerAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$IWireSyncManager" {
import { $Connection$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$Connection"

export interface $IWireSyncManager {
"onConnectionAdded"(connection0: $Connection$$Type): void
"onConnectionEndpointsChanged"(connection0: $Connection$$Type): void
"onConnectionRemoved"(connection0: $Connection$$Type): void
}

export namespace $IWireSyncManager {
const probejs$$marker: never
}
export abstract class $IWireSyncManager$$Static implements $IWireSyncManager {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$ItemEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityAccess {
"setAge"(int0: integer): void
set "age"(value: integer)
}

export namespace $ItemEntityAccess {
const probejs$$marker: never
}
export abstract class $ItemEntityAccess$$Static implements $ItemEntityAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData" {
import { $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $Collection } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $Connection$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import { $WireCollisionData$CollisionInfo } from "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData$CollisionInfo"
import { $WireCollisionData$ConnectionSegments } from "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData$ConnectionSegments"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $WireCollisionData {
public "addConnection"(connection0: $Connection$$Type): void
public "getCollisionInfo"(blockPos0: $BlockPos$$Type): $Collection<$WireCollisionData$CollisionInfo>
public "getWiresIn"(sectionPos0: $SectionPos$$Type): $List<$WireCollisionData$ConnectionSegments>
public "removeConnection"(connection0: $Connection$$Type): void
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$CropBlockAccess" {
import { $IntegerProperty } from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"

export interface $CropBlockAccess {
"invokeGetAgeProperty"(): $IntegerProperty
}

export namespace $CropBlockAccess {
const probejs$$marker: never
}
export abstract class $CropBlockAccess$$Static implements $CropBlockAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Record } from "packages/java/lang/$Record"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ConnectionPoint extends $Record implements $Comparable<$ConnectionPoint> {
constructor(compoundTag0: $CompoundTag$$Type)
constructor(position: $BlockPos$$Type, index: integer)

public "compareTo"(connectionPoint0: $ConnectionPoint$$Type): integer
public "createTag"(): $CompoundTag
public "getX"(): integer
public "getY"(): integer
public "getZ"(): integer
public "index"(): integer
public "position"(): $BlockPos
get "x"(): integer
get "y"(): integer
get "z"(): integer
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData$ConnectionSegments" {
import { $Record } from "packages/java/lang/$Record"
import { $Connection, $Connection$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$Connection"

export class $WireCollisionData$ConnectionSegments extends $Record {
constructor(connection: $Connection$$Type, firstPointToRender: integer, lastPointToRender: integer)

public "connection"(): $Connection
public "firstPointToRender"(): integer
public "lastPointToRender"(): integer
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$FurnaceTEAccess" {
import { $Container } from "packages/net/minecraft/world/$Container"
import { $AbstractCookingRecipe } from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import { $ContainerData } from "packages/net/minecraft/world/inventory/$ContainerData"
import { $RecipeManager$CachedCheck } from "packages/net/minecraft/world/item/crafting/$RecipeManager$CachedCheck"

export interface $FurnaceTEAccess {
"getDataAccess"(): $ContainerData
"getQuickCheck"(): $RecipeManager$CachedCheck<$Container, $AbstractCookingRecipe>
get "dataAccess"(): $ContainerData
get "quickCheck"(): $RecipeManager$CachedCheck<$Container, $AbstractCookingRecipe>
}

export namespace $FurnaceTEAccess {
const probejs$$marker: never
}
export abstract class $FurnaceTEAccess$$Static implements $FurnaceTEAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$PaletteAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PaletteAccess {
}

export namespace $PaletteAccess {
const probejs$$marker: never
}
export abstract class $PaletteAccess$$Static implements $PaletteAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$TemplatePoolAccess" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Pair, $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import { $ObjectArrayList } from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $TemplatePoolAccess {
"getRawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
"getTemplates"(): $ObjectArrayList<$StructurePoolElement>
"setRawTemplates"(list0: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>): void
get "rawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
get "templates"(): $ObjectArrayList<$StructurePoolElement>
set "rawTemplates"(value: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>)
}

export namespace $TemplatePoolAccess {
const probejs$$marker: never
}
export abstract class $TemplatePoolAccess$$Static implements $TemplatePoolAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/wires/$WireType" {
import { $LinkedHashSet } from "packages/java/util/$LinkedHashSet"
import { $Collection } from "packages/java/util/$Collection"
import { $Connection$$Type } from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import { $ILocalHandlerProvider } from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$ILocalHandlerProvider"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $WireType implements $ILocalHandlerProvider {
static "COPPER": $WireType
static "COPPER_INSULATED": $WireType
static "ELECTRUM": $WireType
static "ELECTRUM_INSULATED": $WireType
static readonly "HV_CATEGORY": string
static "INTERNAL_CONNECTION": $WireType
static readonly "LV_CATEGORY": string
static readonly "MV_CATEGORY": string
static "REDSTONE": $WireType
static readonly "REDSTONE_CATEGORY": string
static "STEEL": $WireType
static readonly "STRUCTURE_CATEGORY": string
static "STRUCTURE_ROPE": $WireType
static "STRUCTURE_STEEL": $WireType

constructor()

public "getCategory"(): string
public "getColour"(connection0: $Connection$$Type): integer
public static "getIEWireTypes"(): $Collection<$WireType>
public "getMaxLength"(): integer
public "getRenderDiameter"(): double
public "getRequestedHandlers"(): $Collection<$ResourceLocation>
public "getSlack"(): double
public "getUniqueName"(): string
public static "getValue"(string0: string): $WireType
public static "getValues"(): $LinkedHashSet<$WireType>
public "getWireCoil"(connection0: $Connection$$Type): $ItemStack
get "category"(): string
get "maxLength"(): integer
get "renderDiameter"(): double
get "requestedHandlers"(): $Collection<$ResourceLocation>
get "slack"(): double
get "uniqueName"(): string
}
}

declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$ParticleManagerAccess" {
import { $Particle } from "packages/net/minecraft/client/particle/$Particle"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $ParticleManagerAccess {
"invokeMakeParticle"<T extends $ParticleOptions>(t0: T, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): $Particle
}

export namespace $ParticleManagerAccess {
const probejs$$marker: never
}
export abstract class $ParticleManagerAccess$$Static implements $ParticleManagerAccess {
}
}

declare module "packages/blusunrize/immersiveengineering/api/utils/$SetRestrictedField" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SetRestrictedField<T> {
public static "client"<T>(): $SetRestrictedField<T>
public static "common"<T>(): $SetRestrictedField<T>
public "getValue"(): T
public "isInitialized"(): boolean
public static "lock"(boolean0: boolean): void
public "setValue"(t0: T): void
public static "startInitializing"(boolean0: boolean): void
get "value"(): T
get "initialized"(): boolean
set "value"(value: T)
}
}

declare module "packages/blusunrize/immersiveengineering/api/multiblocks/$MultiblockHandler$IMultiblock" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ClientMultiblocks$MultiblockManualData$$Type } from "packages/blusunrize/immersiveengineering/api/multiblocks/$ClientMultiblocks$MultiblockManualData"
import { $Vec3i } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $StructureTemplate$StructureBlockInfo } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $List } from "packages/java/util/$List"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $MultiblockHandler$IMultiblock {
"createStructure"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, player3: $Player$$Type): boolean
"disassemble"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean, direction3: $Direction$$Type): void
"getBlock"(): $Block
"getDisplayName"(): $Component
"getManualScale"(): float
"getSize"(level0: $Level$$Type): $Vec3i
"getStructure"(level0: $Level$$Type): $List<$StructureTemplate$StructureBlockInfo>
"getTriggerOffset"(): $BlockPos
"getUniqueName"(): $ResourceLocation
"initializeClient"(consumer0: $Consumer$$Type<$ClientMultiblocks$MultiblockManualData$$Type>): void
"isBlockTrigger"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, level2: $Level$$Type): boolean
get "block"(): $Block
get "displayName"(): $Component
get "manualScale"(): float
get "triggerOffset"(): $BlockPos
get "uniqueName"(): $ResourceLocation
}

export namespace $MultiblockHandler$IMultiblock {
const probejs$$marker: never
}
export abstract class $MultiblockHandler$IMultiblock$$Static implements $MultiblockHandler$IMultiblock {
}
}

