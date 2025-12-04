declare module "packages/java/net/$Proxy" {
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $Proxy$Type, $Proxy$Type$$Type } from "packages/java/net/$Proxy$Type"

export class $Proxy {
static readonly "NO_PROXY": $Proxy

constructor(type0: $Proxy$Type$$Type, socketAddress1: $SocketAddress$$Type)

public "address"(): $SocketAddress
public "type"(): $Proxy$Type
}
}

declare module "packages/java/net/$SocketImpl" {
import { $SocketOptions } from "packages/java/net/$SocketOptions"

export class $SocketImpl implements $SocketOptions {
constructor()

public "getOption"(int0: integer): any
public "setOption"(int0: integer, object1: any): void
}
}

declare module "packages/java/net/$InterfaceAddress" {
import { $InetAddress } from "packages/java/net/$InetAddress"

export class $InterfaceAddress {
public "getAddress"(): $InetAddress
public "getBroadcast"(): $InetAddress
public "getNetworkPrefixLength"(): short
get "address"(): $InetAddress
get "broadcast"(): $InetAddress
get "networkPrefixLength"(): short
}
}

