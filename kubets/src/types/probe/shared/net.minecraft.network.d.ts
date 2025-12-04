declare module "packages/net/minecraft/network/$FriendlyByteBuf" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $IForgeRegistry$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry"
import { $Date, $Date$$Type } from "packages/java/util/$Date"
import { $PublicKey, $PublicKey$$Type } from "packages/java/security/$PublicKey"
import { $SectionPos, $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $Vector3f, $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $FluidStack, $FluidStack$$Type } from "packages/net/minecraftforge/fluids/$FluidStack"
import { $Property, $Property$$Type } from "packages/com/mojang/authlib/properties/$Property"
import { $IdMap$$Type } from "packages/net/minecraft/core/$IdMap"
import { $Either, $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BitSet, $BitSet$$Type } from "packages/java/util/$BitSet"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $FriendlyByteBuf$Reader$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import { $NbtAccounter$$Type } from "packages/net/minecraft/nbt/$NbtAccounter"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ByteBuf, $ByteBuf$$Type } from "packages/io/netty/buffer/$ByteBuf"
import { $List } from "packages/java/util/$List"
import { $BlockHitResult, $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FriendlyByteBuf$Writer$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Instant, $Instant$$Type } from "packages/java/time/$Instant"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $PropertyMap, $PropertyMap$$Type } from "packages/com/mojang/authlib/properties/$PropertyMap"
import { $Tag$$Type } from "packages/net/minecraft/nbt/$Tag"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $IForgeFriendlyByteBuf } from "packages/net/minecraftforge/common/extensions/$IForgeFriendlyByteBuf"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $EnumSet, $EnumSet$$Type } from "packages/java/util/$EnumSet"
import { $GlobalPos, $GlobalPos$$Type } from "packages/net/minecraft/core/$GlobalPos"
import { $IntFunction, $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $IntList, $IntList$$Type } from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $Quaternionf, $Quaternionf$$Type } from "packages/org/joml/$Quaternionf"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $FriendlyByteBuf extends $ByteBuf implements $IForgeFriendlyByteBuf {
static readonly "DEFAULT_NBT_QUOTA": integer
static readonly "MAX_COMPONENT_STRING_LENGTH": integer
static readonly "MAX_STRING_LENGTH": short

constructor(byteBuf0: $ByteBuf$$Type)

public "accessByteBufWithCorrectSize"(): byte[]
public static "getVarIntSize"(int0: integer): integer
public static "getVarLongSize"(long0: long): integer
public "handler$fig000$supp$sendCapsFromCreative"(stack: $ItemStack$$Type, useShareTag: boolean, cir: $CallbackInfoReturnable$$Type<any>): void
public static "limitValue"<T>(intFunction0: $IntFunction$$Type<T>, int1: integer): $IntFunction<T>
public "readAnySizeNbt"(): $CompoundTag
public "readBitSet"(): $BitSet
public "readBlockHitResult"(): $BlockHitResult
public "readBlockPos"(): $BlockPos
public "readById"<T>(idMap0: $IdMap$$Type<$Holder$$Type<T>>, reader1: $FriendlyByteBuf$Reader$$Type<T>): $Holder<T>
public "readById"<T>(idMap0: $IdMap$$Type<T>): T
public "readByteArray"(int0: integer): byte[]
public "readByteArray"(): byte[]
public "readChunkPos"(): $ChunkPos
public "readCollection"<T, C extends $Collection<T>>(intFunction0: $IntFunction$$Type<C>, reader1: $FriendlyByteBuf$Reader$$Type<T>): C
public "readComponent"(): $Component
public "readDate"(): $Date
public "readEither"<L, R>(reader0: $FriendlyByteBuf$Reader$$Type<L>, reader1: $FriendlyByteBuf$Reader$$Type<R>): $Either<L, R>
public "readEnum"<T extends $Enum<T>>(class0: $Class$$Type<T>): T
public "readEnumSet"<E extends $Enum<E>>(class0: $Class$$Type<E>): $EnumSet<E>
public "readFixedBitSet"(int0: integer): $BitSet
public "readFluidStack"(): $FluidStack
public "readGameProfile"(): $GameProfile
public "readGameProfileProperties"(): $PropertyMap
public "readGlobalPos"(): $GlobalPos
public "readInstant"(): $Instant
public "readIntIdList"(): $IntList
public "readItem"(): $ItemStack
public "readJsonWithCodec"<T>(codec0: $Codec$$Type<T>): T
public "readList"<T>(reader0: $FriendlyByteBuf$Reader$$Type<T>): $List<T>
public "readLongArray"(): long[]
public "readLongArray"(long0s: long[]): long[]
public "readLongArray"(long0s: long[], int1: integer): long[]
public "readMap"<K, V, M extends $Map<K, V>>(intFunction0: $IntFunction$$Type<M>, reader1: $FriendlyByteBuf$Reader$$Type<K>, reader2: $FriendlyByteBuf$Reader$$Type<V>): M
public "readMap"<K, V>(reader0: $FriendlyByteBuf$Reader$$Type<K>, reader1: $FriendlyByteBuf$Reader$$Type<V>): $Map<K, V>
public "readNbt"(nbtAccounter0: $NbtAccounter$$Type): $CompoundTag
public "readNbt"(): $CompoundTag
public "readNullable"<T>(reader0: $FriendlyByteBuf$Reader$$Type<T>): T
public "readOptional"<T>(reader0: $FriendlyByteBuf$Reader$$Type<T>): $Optional<T>
public "readProperty"(): $Property
public "readPublicKey"(): $PublicKey
public "readQuaternion"(): $Quaternionf
public "readRegistryId"<T>(): T
public "readRegistryIdSafe"<T>(class0: $Class$$Type<T>): T
public "readRegistryIdUnsafe"<T>(iForgeRegistry0: $IForgeRegistry$$Type<T>): T
public "readResourceKey"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $ResourceKey<T>
public "readResourceLocation"(): $ResourceLocation
public "readSectionPos"(): $SectionPos
public "readUUID"(): $UUID
public "readUtf"(int0: integer): string
public "readUtf"(): string
public "readVarInt"(): integer
public "readVarIntArray"(int0: integer): integer[]
public "readVarIntArray"(): integer[]
public "readVarLong"(): long
public "readVector3f"(): $Vector3f
/** @deprecated */
public "readWithCodec"<T>(dynamicOps0: $DynamicOps$$Type<$Tag$$Type>, codec1: $Codec$$Type<T>): T
public "readWithCount"(consumer0: $Consumer$$Type<$FriendlyByteBuf$$Type>): void
public "writeBitSet"(bitSet0: $BitSet$$Type): void
public "writeBlockHitResult"(blockHitResult0: $BlockHitResult$$Type): void
public "writeBlockPos"(blockPos0: $BlockPos$$Type): $FriendlyByteBuf
public "writeByteArray"(byte0s: byte[]): $FriendlyByteBuf
public "writeChunkPos"(chunkPos0: $ChunkPos$$Type): $FriendlyByteBuf
public "writeCollection"<T>(collection0: $Collection$$Type<T>, writer1: $FriendlyByteBuf$Writer$$Type<T>): void
public "writeComponent"(component0: $Component$$Type): $FriendlyByteBuf
public "writeDate"(date0: $Date$$Type): $FriendlyByteBuf
public "writeEither"<L, R>(either0: $Either$$Type<L, R>, writer1: $FriendlyByteBuf$Writer$$Type<L>, writer2: $FriendlyByteBuf$Writer$$Type<R>): void
public "writeEnum"(enum0: $Enum$$Type<any>): $FriendlyByteBuf
public "writeEnumSet"<E extends $Enum<E>>(enumSet0: $EnumSet$$Type<E>, class1: $Class$$Type<E>): void
public "writeFixedBitSet"(bitSet0: $BitSet$$Type, int1: integer): void
public "writeFluidStack"(fluidStack0: $FluidStack$$Type): void
public "writeGameProfile"(gameProfile0: $GameProfile$$Type): void
public "writeGameProfileProperties"(propertyMap0: $PropertyMap$$Type): void
public "writeGlobalPos"(globalPos0: $GlobalPos$$Type): void
public "writeId"<T>(idMap0: $IdMap$$Type<$Holder$$Type<T>>, holder1: $Holder$$Type<T>, writer2: $FriendlyByteBuf$Writer$$Type<T>): void
public "writeId"<T>(idMap0: $IdMap$$Type<T>, t1: T): void
public "writeInstant"(instant0: $Instant$$Type): void
public "writeIntIdList"(intList0: $IntList$$Type): void
public "writeItem"(itemStack0: $ItemStack$$Type): $FriendlyByteBuf
public "writeItemStack"(itemStack0: $ItemStack$$Type, boolean1: boolean): $FriendlyByteBuf
public "writeJsonWithCodec"<T>(codec0: $Codec$$Type<T>, t1: T): void
public "writeLongArray"(long0s: long[]): $FriendlyByteBuf
public "writeMap"<K, V>(map0: $Map$$Type<K, V>, writer1: $FriendlyByteBuf$Writer$$Type<K>, writer2: $FriendlyByteBuf$Writer$$Type<V>): void
public "writeNbt"(compoundTag0: $CompoundTag$$Type): $FriendlyByteBuf
public "writeNullable"<T>(t0: T, writer1: $FriendlyByteBuf$Writer$$Type<T>): void
public "writeOptional"<T>(optional0: $Optional$$Type<T>, writer1: $FriendlyByteBuf$Writer$$Type<T>): void
public "writeProperty"(property0: $Property$$Type): void
public "writePublicKey"(publicKey0: $PublicKey$$Type): $FriendlyByteBuf
public "writeQuaternion"(quaternionf0: $Quaternionf$$Type): void
public "writeRegistryId"<T>(iForgeRegistry0: $IForgeRegistry$$Type<T>, t1: T): void
public "writeRegistryIdUnsafe"(iForgeRegistry0: $IForgeRegistry$$Type<any>, resourceLocation1: $ResourceLocation$$Type): void
public "writeRegistryIdUnsafe"<T>(iForgeRegistry0: $IForgeRegistry$$Type<T>, t1: T): void
public "writeResourceKey"(resourceKey0: $ResourceKey$$Type<any>): void
public "writeResourceLocation"(resourceLocation0: $ResourceLocation$$Type): $FriendlyByteBuf
public "writeSectionPos"(sectionPos0: $SectionPos$$Type): $FriendlyByteBuf
public "writeUUID"(uUID0: $UUID$$Type): $FriendlyByteBuf
public "writeUtf"(string0: string, int1: integer): $FriendlyByteBuf
public "writeUtf"(string0: string): $FriendlyByteBuf
public "writeVarInt"(int0: integer): $FriendlyByteBuf
public "writeVarIntArray"(int0s: integer[]): $FriendlyByteBuf
public "writeVarLong"(long0: long): $FriendlyByteBuf
public "writeVector3f"(vector3f0: $Vector3f$$Type): void
/** @deprecated */
public "writeWithCodec"<T>(dynamicOps0: $DynamicOps$$Type<$Tag$$Type>, codec1: $Codec$$Type<T>, t2: T): void
}
}

declare module "packages/net/minecraft/network/$ConnectionProtocol" {
import { $BundlerInfo } from "packages/net/minecraft/network/protocol/$BundlerInfo"
import { $ConnectionProtocol$PacketSet } from "packages/net/minecraft/network/$ConnectionProtocol$PacketSet"
import { $Enum } from "packages/java/lang/$Enum"
import { $Packet, $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $BundlerInfo$Provider } from "packages/net/minecraft/network/protocol/$BundlerInfo$Provider"
import { $Class } from "packages/java/lang/$Class"
import { $Int2ObjectMap } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import { $PacketFlow, $PacketFlow$$Type } from "packages/net/minecraft/network/protocol/$PacketFlow"
import { $Map } from "packages/java/util/$Map"

export class $ConnectionProtocol extends $Enum<$ConnectionProtocol> implements $BundlerInfo$Provider {
static readonly "HANDSHAKING": $ConnectionProtocol
static readonly "LOGIN": $ConnectionProtocol
static readonly "NOT_REGISTERED": integer
static readonly "PLAY": $ConnectionProtocol
static readonly "STATUS": $ConnectionProtocol
readonly "flows": $Map<$PacketFlow, $ConnectionProtocol$PacketSet<any>>

public "createPacket"(packetFlow0: $PacketFlow$$Type, int1: integer, friendlyByteBuf2: $FriendlyByteBuf$$Type): $Packet<any>
public "getBundlerInfo"(packetFlow0: $PacketFlow$$Type): $BundlerInfo
public static "getById"(int0: integer): $ConnectionProtocol
public "getId"(): integer
public "getPacketId"(packetFlow0: $PacketFlow$$Type, packet1: $Packet$$Type<any>): integer
public "getPacketsByIds"(packetFlow0: $PacketFlow$$Type): $Int2ObjectMap<$Class<$Packet<any>>>
public static "getProtocolForPacket"(packet0: $Packet$$Type<any>): $ConnectionProtocol
public static "valueOf"(string0: string): $ConnectionProtocol
public static "values"(): $ConnectionProtocol[]
get "id"(): integer
}
}

declare module "packages/net/minecraft/network/$PacketListener" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"

export interface $PacketListener {
"isAcceptingMessages"(): boolean
"onDisconnect"(component0: $Component$$Type): void
"shouldPropagateHandlingExceptions"(): boolean
get "acceptingMessages"(): boolean
}

export namespace $PacketListener {
const probejs$$marker: never
}
export abstract class $PacketListener$$Static implements $PacketListener {
}
}

declare module "packages/net/minecraft/network/$ConnectionProtocol$PacketSet" {
import { $PacketListener } from "packages/net/minecraft/network/$PacketListener"
import { $BundlerInfo } from "packages/net/minecraft/network/protocol/$BundlerInfo"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BundlePacket, $BundlePacket$$Type } from "packages/net/minecraft/network/protocol/$BundlePacket"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Packet, $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Object2IntMap } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

export class $ConnectionProtocol$PacketSet<T extends $PacketListener> {
readonly "classToId": $Object2IntMap<$Class<$Packet<T>>>

public "addPacket"<P extends $Packet<T>>(class0: $Class$$Type<P>, function1: $Function$$Type<$FriendlyByteBuf$$Type, P>): $ConnectionProtocol$PacketSet<T>
public "bundlerInfo"(): $BundlerInfo
public "createPacket"(int0: integer, friendlyByteBuf1: $FriendlyByteBuf$$Type): $Packet<any>
public "getId"(class0: $Class$$Type<any>): integer
public "handler$zzg000$onAdd"(class0: $Class$$Type<any>, function1: $Function$$Type<any, any>, callbackInfoReturnable2: $CallbackInfoReturnable$$Type<any>): void
public "listAllPackets"(consumer0: $Consumer$$Type<$Class$$Type<$Packet$$Type<any>>>): void
public "withBundlePacket"<P extends $BundlePacket<T>>(class0: $Class$$Type<P>, function1: $Function$$Type<$Iterable$$Type<$Packet$$Type<T>>, P>): $ConnectionProtocol$PacketSet<T>
}
}

declare module "packages/net/minecraft/network/$Connection" {
import { $NioEventLoopGroup } from "packages/io/netty/channel/nio/$NioEventLoopGroup"
import { $ChannelPipeline$$Type } from "packages/io/netty/channel/$ChannelPipeline"
import { $LazyLoadedValue } from "packages/net/minecraft/util/$LazyLoadedValue"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Channel } from "packages/io/netty/channel/$Channel"
import { $ChannelHandlerContext$$Type } from "packages/io/netty/channel/$ChannelHandlerContext"
import { $Packet, $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $PacketSendListener$$Type } from "packages/net/minecraft/network/$PacketSendListener"
import { $Cipher$$Type } from "packages/javax/crypto/$Cipher"
import { $SimpleChannelInboundHandler } from "packages/io/netty/channel/$SimpleChannelInboundHandler"
import { $AttributeKey } from "packages/io/netty/util/$AttributeKey"
import { $EpollEventLoopGroup } from "packages/io/netty/channel/epoll/$EpollEventLoopGroup"
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $PacketListener, $PacketListener$$Type } from "packages/net/minecraft/network/$PacketListener"
import { $DefaultEventLoopGroup } from "packages/io/netty/channel/$DefaultEventLoopGroup"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $ConnectionProtocol, $ConnectionProtocol$$Type } from "packages/net/minecraft/network/$ConnectionProtocol"
import { $Marker } from "packages/org/slf4j/$Marker"
import { $PacketFlow, $PacketFlow$$Type } from "packages/net/minecraft/network/protocol/$PacketFlow"
import { $ChannelFuture } from "packages/io/netty/channel/$ChannelFuture"
import { $InetSocketAddress$$Type } from "packages/java/net/$InetSocketAddress"

export class $Connection extends $SimpleChannelInboundHandler<$Packet<any>> {
static readonly "ATTRIBUTE_PROTOCOL": $AttributeKey<$ConnectionProtocol>
static readonly "LOCAL_WORKER_GROUP": $LazyLoadedValue<$DefaultEventLoopGroup>
static readonly "NETWORK_EPOLL_WORKER_GROUP": $LazyLoadedValue<$EpollEventLoopGroup>
static readonly "NETWORK_WORKER_GROUP": $LazyLoadedValue<$NioEventLoopGroup>
static readonly "PACKET_MARKER": $Marker
static readonly "PACKET_RECEIVED_MARKER": $Marker
static readonly "PACKET_SENT_MARKER": $Marker
static readonly "ROOT_MARKER": $Marker

constructor(packetFlow0: $PacketFlow$$Type)

public "channel"(): $Channel
public static "configureSerialization"(channelPipeline0: $ChannelPipeline$$Type, packetFlow1: $PacketFlow$$Type): void
public static "connect"(inetSocketAddress0: $InetSocketAddress$$Type, boolean1: boolean, connection2: $Connection$$Type): $ChannelFuture
public static "connectToLocalServer"(socketAddress0: $SocketAddress$$Type): $Connection
public static "connectToServer"(inetSocketAddress0: $InetSocketAddress$$Type, boolean1: boolean): $Connection
public "disconnect"(component0: $Component$$Type): void
public "getAverageReceivedPackets"(): float
public "getAverageSentPackets"(): float
public "getDirection"(): $PacketFlow
public "getDisconnectedReason"(): $Component
public "getPacketListener"(): $PacketListener
public "getReceiving"(): $PacketFlow
public "getRemoteAddress"(): $SocketAddress
public "getSending"(): $PacketFlow
public "handleDisconnection"(): void
public "handler$zzf000$on"(channelHandlerContext0: $ChannelHandlerContext$$Type, throwable1: $Throwable$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "isConnected"(): boolean
public "isConnecting"(): boolean
public "isEncrypted"(): boolean
public "isMemoryConnection"(): boolean
public "send"(packet0: $Packet$$Type<any>, packetSendListener1: $PacketSendListener$$Type): void
public "send"(packet0: $Packet$$Type<any>): void
public "setEncryptionKey"(cipher0: $Cipher$$Type, cipher1: $Cipher$$Type): void
public "setListener"(packetListener0: $PacketListener$$Type): void
public "setProtocol"(connectionProtocol0: $ConnectionProtocol$$Type): void
public "setReadOnly"(): void
public "setupCompression"(int0: integer, boolean1: boolean): void
public "tick"(): void
get "averageReceivedPackets"(): float
get "averageSentPackets"(): float
get "direction"(): $PacketFlow
get "disconnectedReason"(): $Component
get "packetListener"(): $PacketListener
get "receiving"(): $PacketFlow
get "remoteAddress"(): $SocketAddress
get "sending"(): $PacketFlow
get "connected"(): boolean
get "connecting"(): boolean
get "encrypted"(): boolean
get "memoryConnection"(): boolean
set "listener"(value: $PacketListener$$Type)
set "protocol"(value: $ConnectionProtocol$$Type)
}
}

declare module "packages/net/minecraft/network/$TickablePacketListener" {
import { $PacketListener } from "packages/net/minecraft/network/$PacketListener"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"

export interface $TickablePacketListener extends $PacketListener {
"isAcceptingMessages"(): boolean
"onDisconnect"(component0: $Component$$Type): void
"shouldPropagateHandlingExceptions"(): boolean
"tick"(): void
get "acceptingMessages"(): boolean
}

export namespace $TickablePacketListener {
const probejs$$marker: never
}
export abstract class $TickablePacketListener$$Static implements $TickablePacketListener {
}
}

declare module "packages/net/minecraft/network/$FriendlyByteBuf$Reader" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Optional } from "packages/java/util/$Optional"

export interface $FriendlyByteBuf$Reader<T> extends $Function<$FriendlyByteBuf, T> {
"andThen"<V>(function0: $Function$$Type<T, V>): $Function<$FriendlyByteBuf, V>
"apply"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"asOptional"(): $FriendlyByteBuf$Reader<$Optional<T>>
"compose"<V>(function0: $Function$$Type<V, $FriendlyByteBuf>): $Function<V, T>
}

export namespace $FriendlyByteBuf$Reader {
function identity<T>(): $Function<T, T>
}
export abstract class $FriendlyByteBuf$Reader$$Static<T> implements $FriendlyByteBuf$Reader<T> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/net/minecraft/network/$FriendlyByteBuf$Writer" {
import { $BiConsumer, $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Optional } from "packages/java/util/$Optional"

export interface $FriendlyByteBuf$Writer<T> extends $BiConsumer<$FriendlyByteBuf, T> {
"accept"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
"andThen"(biConsumer0: $BiConsumer$$Type<$FriendlyByteBuf$$Type, T>): $BiConsumer<$FriendlyByteBuf, T>
"asOptional"(): $FriendlyByteBuf$Writer<$Optional<T>>
}

export namespace $FriendlyByteBuf$Writer {
const probejs$$marker: never
}
export abstract class $FriendlyByteBuf$Writer$$Static<T> implements $FriendlyByteBuf$Writer<T> {
}
}

declare module "packages/net/minecraft/network/$PacketSendListener" {
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export interface $PacketSendListener {
"onFailure"(): $Packet<any>
"onSuccess"(): void
}

export namespace $PacketSendListener {
function exceptionallySend(supplier0: $Supplier$$Type<$Packet<any>>): $PacketSendListener
function thenRun(runnable0: $Runnable$$Type): $PacketSendListener
}
export abstract class $PacketSendListener$$Static implements $PacketSendListener {
static "exceptionallySend"(supplier0: $Supplier$$Type<$Packet<any>>): $PacketSendListener
static "thenRun"(runnable0: $Runnable$$Type): $PacketSendListener
}
}

