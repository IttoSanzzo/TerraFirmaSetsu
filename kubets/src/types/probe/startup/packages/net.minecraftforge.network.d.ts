declare module "packages/net/minecraftforge/network/$ICustomPacket" {
import { $Packet, $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ICustomPacket$$Type<T extends $Packet<any>> = ($ICustomPacket<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ICustomPacket_<T extends $Packet<any>> = $ICustomPacket$$Type<T>;
}
}

declare module "packages/net/minecraftforge/network/$NetworkEvent$PacketDispatcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkEvent$PacketDispatcher$$Type = ($NetworkEvent$PacketDispatcher);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkEvent$PacketDispatcher_ = $NetworkEvent$PacketDispatcher$$Type;
}
}

declare module "packages/net/minecraftforge/network/$NetworkEvent$ServerCustomPayloadEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkEvent$ServerCustomPayloadEvent$$Type = ($NetworkEvent$ServerCustomPayloadEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkEvent$ServerCustomPayloadEvent_ = $NetworkEvent$ServerCustomPayloadEvent$$Type;
}
}

declare module "packages/net/minecraftforge/network/$NetworkEvent$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkEvent$Context$$Type = ($NetworkEvent$Context);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkEvent$Context_ = $NetworkEvent$Context$$Type;
}
}

declare module "packages/net/minecraftforge/network/$HandshakeMessages$LoginIndexedMessage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HandshakeMessages$LoginIndexedMessage$$Type = ($HandshakeMessages$LoginIndexedMessage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HandshakeMessages$LoginIndexedMessage_ = $HandshakeMessages$LoginIndexedMessage$$Type;
}
}

declare module "packages/net/minecraftforge/network/$NetworkDirection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkDirection$$Type = ($NetworkDirection | ("play_to_server" | "play_to_client" | "login_to_server" | "login_to_client"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkDirection_ = $NetworkDirection$$Type;
}
}

declare module "packages/net/minecraftforge/network/$HandshakeMessages$S2CRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HandshakeMessages$S2CRegistry$$Type = ($HandshakeMessages$S2CRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HandshakeMessages$S2CRegistry_ = $HandshakeMessages$S2CRegistry$$Type;
}
}

declare module "packages/net/minecraftforge/network/$IContainerFactory" {
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $Inventory } from "packages/net/minecraft/world/entity/player/$Inventory"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IContainerFactory$$Type<T extends $AbstractContainerMenu> = ($IContainerFactory<T> | ((arg0: integer, arg1: $Inventory, arg2: $FriendlyByteBuf) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IContainerFactory_<T extends $AbstractContainerMenu> = $IContainerFactory$$Type<T>;
}
}

declare module "packages/net/minecraftforge/network/$NetworkRegistry$LoginPayload" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkRegistry$LoginPayload$$Type = ($NetworkRegistry$LoginPayload);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkRegistry$LoginPayload_ = $NetworkRegistry$LoginPayload$$Type;
}
}

declare module "packages/net/minecraftforge/network/$ServerStatusPing$ChannelData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerStatusPing$ChannelData$$Type = ($ServerStatusPing$ChannelData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerStatusPing$ChannelData_ = $ServerStatusPing$ChannelData$$Type;
}
}

declare module "packages/net/minecraftforge/network/$NetworkEvent$ServerCustomPayloadLoginEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkEvent$ServerCustomPayloadLoginEvent$$Type = ($NetworkEvent$ServerCustomPayloadLoginEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkEvent$ServerCustomPayloadLoginEvent_ = $NetworkEvent$ServerCustomPayloadLoginEvent$$Type;
}
}

declare module "packages/net/minecraftforge/network/$NetworkEvent$RegistrationChangeType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkEvent$RegistrationChangeType$$Type = ($NetworkEvent$RegistrationChangeType | ("register" | "unregister"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkEvent$RegistrationChangeType_ = $NetworkEvent$RegistrationChangeType$$Type;
}
}

declare module "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PacketDistributor$PacketTarget$$Type = ($PacketDistributor$PacketTarget);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PacketDistributor$PacketTarget_ = $PacketDistributor$PacketTarget$$Type;
}
}

declare module "packages/net/minecraftforge/network/$ServerStatusPing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerStatusPing$$Type = ($ServerStatusPing);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerStatusPing_ = $ServerStatusPing$$Type;
}
}

declare module "packages/net/minecraftforge/network/$PlayMessages$SpawnEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayMessages$SpawnEntity$$Type = ($PlayMessages$SpawnEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayMessages$SpawnEntity_ = $PlayMessages$SpawnEntity$$Type;
}
}

declare module "packages/net/minecraftforge/network/$NetworkEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkEvent$$Type = ($NetworkEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkEvent_ = $NetworkEvent$$Type;
}
}

declare module "packages/net/minecraftforge/network/$NetworkEvent$ChannelRegistrationChangeEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkEvent$ChannelRegistrationChangeEvent$$Type = ($NetworkEvent$ChannelRegistrationChangeEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkEvent$ChannelRegistrationChangeEvent_ = $NetworkEvent$ChannelRegistrationChangeEvent$$Type;
}
}

declare module "packages/net/minecraftforge/network/$NetworkEvent$GatherLoginPayloadsEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkEvent$GatherLoginPayloadsEvent$$Type = ($NetworkEvent$GatherLoginPayloadsEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkEvent$GatherLoginPayloadsEvent_ = $NetworkEvent$GatherLoginPayloadsEvent$$Type;
}
}

declare module "packages/net/minecraftforge/network/$NetworkEvent$ClientCustomPayloadEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkEvent$ClientCustomPayloadEvent$$Type = ($NetworkEvent$ClientCustomPayloadEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkEvent$ClientCustomPayloadEvent_ = $NetworkEvent$ClientCustomPayloadEvent$$Type;
}
}

declare module "packages/net/minecraftforge/network/$NetworkEvent$LoginPayloadEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkEvent$LoginPayloadEvent$$Type = ($NetworkEvent$LoginPayloadEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkEvent$LoginPayloadEvent_ = $NetworkEvent$LoginPayloadEvent$$Type;
}
}

declare module "packages/net/minecraftforge/network/$NetworkEvent$ClientCustomPayloadLoginEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkEvent$ClientCustomPayloadLoginEvent$$Type = ($NetworkEvent$ClientCustomPayloadLoginEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkEvent$ClientCustomPayloadLoginEvent_ = $NetworkEvent$ClientCustomPayloadLoginEvent$$Type;
}
}

