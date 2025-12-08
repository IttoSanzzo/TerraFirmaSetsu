declare module "packages/net/minecraft/network/$FriendlyByteBuf" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FriendlyByteBuf$$Type = ($FriendlyByteBuf);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FriendlyByteBuf_ = $FriendlyByteBuf$$Type;
}
}

declare module "packages/net/minecraft/network/$ConnectionProtocol" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConnectionProtocol$$Type = ($ConnectionProtocol | ("handshaking" | "play" | "status" | "login"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConnectionProtocol_ = $ConnectionProtocol$$Type;
}
}

declare module "packages/net/minecraft/network/$PacketListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PacketListener$$Type = ($PacketListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PacketListener_ = $PacketListener$$Type;
}
}

declare module "packages/net/minecraft/network/$ConnectionProtocol$PacketSet" {
import { $PacketListener, $PacketListener$$Type } from "packages/net/minecraft/network/$PacketListener"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConnectionProtocol$PacketSet$$Type<T extends $PacketListener> = ($ConnectionProtocol$PacketSet<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConnectionProtocol$PacketSet_<T extends $PacketListener> = $ConnectionProtocol$PacketSet$$Type<T>;
}
}

declare module "packages/net/minecraft/network/$Connection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Connection$$Type = ($Connection);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Connection_ = $Connection$$Type;
}
}

declare module "packages/net/minecraft/network/$TickablePacketListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TickablePacketListener$$Type = ($TickablePacketListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TickablePacketListener_ = $TickablePacketListener$$Type;
}
}

declare module "packages/net/minecraft/network/$FriendlyByteBuf$Reader" {
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FriendlyByteBuf$Reader$$Type<T> = ($FriendlyByteBuf$Reader<T> | ((arg0: $FriendlyByteBuf) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FriendlyByteBuf$Reader_<T> = $FriendlyByteBuf$Reader$$Type<T>;
}
}

declare module "packages/net/minecraft/network/$FriendlyByteBuf$Writer" {
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FriendlyByteBuf$Writer$$Type<T> = ($FriendlyByteBuf$Writer<T> | ((arg0: $FriendlyByteBuf, arg1: T) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FriendlyByteBuf$Writer_<T> = $FriendlyByteBuf$Writer$$Type<T>;
}
}

declare module "packages/net/minecraft/network/$PacketSendListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PacketSendListener$$Type = ($PacketSendListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PacketSendListener_ = $PacketSendListener$$Type;
}
}

