declare module "packages/java/net/$Proxy" {
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $Proxy$Type, $Proxy$Type$$Type } from "packages/java/net/$Proxy$Type"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Proxy {
static readonly "NO_PROXY": $Proxy

constructor(type0: $Proxy$Type$$Type, socketAddress1: $SocketAddress$$Type)

public "address"(): $SocketAddress
public "type"(): $Proxy$Type
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Proxy$$Type = ($Proxy);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Proxy_ = $Proxy$$Type;
}
}

declare module "packages/java/net/$DatagramSocketImpl" {
import { $SocketOptions } from "packages/java/net/$SocketOptions"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramSocketImpl implements $SocketOptions {
constructor()

public "getOption"(int0: integer): any
public "setOption"(int0: integer, object1: any): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DatagramSocketImpl$$Type = ($DatagramSocketImpl);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DatagramSocketImpl_ = $DatagramSocketImpl$$Type;
}
}

declare module "packages/java/net/$SocketImpl" {
import { $SocketOptions } from "packages/java/net/$SocketOptions"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketImpl implements $SocketOptions {
constructor()

public "getOption"(int0: integer): any
public "setOption"(int0: integer, object1: any): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SocketImpl$$Type = ($SocketImpl);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SocketImpl_ = $SocketImpl$$Type;
}
}

declare module "packages/java/net/$SocketAddress" {
import { $Serializable } from "packages/java/io/$Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketAddress implements $Serializable {
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SocketAddress$$Type = ($SocketAddress);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SocketAddress_ = $SocketAddress$$Type;
}
}

declare module "packages/java/net/$InetSocketAddress" {
import { $SocketAddress } from "packages/java/net/$SocketAddress"
import { $InetAddress, $InetAddress$$Type } from "packages/java/net/$InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InetSocketAddress extends $SocketAddress {
constructor(inetAddress0: $InetAddress$$Type, int1: integer)
constructor(int0: integer)
constructor(string0: string, int1: integer)

public static "createUnresolved"(string0: string, int1: integer): $InetSocketAddress
public "getAddress"(): $InetAddress
public "getHostName"(): string
public "getHostString"(): string
public "getPort"(): integer
public "isUnresolved"(): boolean
get "address"(): $InetAddress
get "hostName"(): string
get "hostString"(): string
get "port"(): integer
get "unresolved"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InetSocketAddress$$Type = ($InetSocketAddress);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InetSocketAddress_ = $InetSocketAddress$$Type;
}
}

declare module "packages/java/net/$DatagramPacket" {
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $InetAddress, $InetAddress$$Type } from "packages/java/net/$InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramPacket {
constructor(byte0s: byte[], int1: integer, socketAddress2: $SocketAddress$$Type)
constructor(byte0s: byte[], int1: integer, inetAddress2: $InetAddress$$Type, int3: integer)
constructor(byte0s: byte[], int1: integer, int2: integer, socketAddress3: $SocketAddress$$Type)
constructor(byte0s: byte[], int1: integer, int2: integer)
constructor(byte0s: byte[], int1: integer)
constructor(byte0s: byte[], int1: integer, int2: integer, inetAddress3: $InetAddress$$Type, int4: integer)

public "getAddress"(): $InetAddress
public "getData"(): byte[]
public "getLength"(): integer
public "getOffset"(): integer
public "getPort"(): integer
public "getSocketAddress"(): $SocketAddress
public "setAddress"(inetAddress0: $InetAddress$$Type): void
public "setData"(byte0s: byte[]): void
public "setData"(byte0s: byte[], int1: integer, int2: integer): void
public "setLength"(int0: integer): void
public "setPort"(int0: integer): void
public "setSocketAddress"(socketAddress0: $SocketAddress$$Type): void
get "address"(): $InetAddress
get "data"(): byte[]
get "length"(): integer
get "offset"(): integer
get "port"(): integer
get "socketAddress"(): $SocketAddress
set "address"(value: $InetAddress$$Type)
set "data"(value: byte[])
set "length"(value: integer)
set "port"(value: integer)
set "socketAddress"(value: $SocketAddress$$Type)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DatagramPacket$$Type = ($DatagramPacket);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DatagramPacket_ = $DatagramPacket$$Type;
}
}

declare module "packages/java/net/$URLStreamHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URLStreamHandler {
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $URLStreamHandler$$Type = ($URLStreamHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $URLStreamHandler_ = $URLStreamHandler$$Type;
}
}

declare module "packages/java/net/$URLStreamHandlerFactory" {
import { $URLStreamHandler, $URLStreamHandler$$Type } from "packages/java/net/$URLStreamHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $URLStreamHandlerFactory {
"createURLStreamHandler"(string0: string): $URLStreamHandler
}

export namespace $URLStreamHandlerFactory {
const probejs$$marker: never
}
export abstract class $URLStreamHandlerFactory$$Static implements $URLStreamHandlerFactory {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $URLStreamHandlerFactory$$Type = ($URLStreamHandlerFactory | ((arg0: string) => $URLStreamHandler$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $URLStreamHandlerFactory_ = $URLStreamHandlerFactory$$Type;
}
}

declare module "packages/java/net/$DatagramSocketImplFactory" {
import { $DatagramSocketImpl, $DatagramSocketImpl$$Type } from "packages/java/net/$DatagramSocketImpl"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DatagramSocketImplFactory {
"createDatagramSocketImpl"(): $DatagramSocketImpl
}

export namespace $DatagramSocketImplFactory {
const probejs$$marker: never
}
export abstract class $DatagramSocketImplFactory$$Static implements $DatagramSocketImplFactory {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DatagramSocketImplFactory$$Type = ($DatagramSocketImplFactory | (() => $DatagramSocketImpl$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DatagramSocketImplFactory_ = $DatagramSocketImplFactory$$Type;
}
}

declare module "packages/java/net/$SocketOption" {
import { $Class } from "packages/java/lang/$Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SocketOption<T> {
"name"(): string
"type"(): $Class<T>
}

export namespace $SocketOption {
const probejs$$marker: never
}
export abstract class $SocketOption$$Static<T> implements $SocketOption<T> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SocketOption$$Type<T> = ($SocketOption<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SocketOption_<T> = $SocketOption$$Type<T>;
}
}

declare module "packages/java/net/$ContentHandlerFactory" {
import { $ContentHandler, $ContentHandler$$Type } from "packages/java/net/$ContentHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ContentHandlerFactory {
"createContentHandler"(string0: string): $ContentHandler
}

export namespace $ContentHandlerFactory {
const probejs$$marker: never
}
export abstract class $ContentHandlerFactory$$Static implements $ContentHandlerFactory {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ContentHandlerFactory$$Type = ($ContentHandlerFactory | ((arg0: string) => $ContentHandler$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ContentHandlerFactory_ = $ContentHandlerFactory$$Type;
}
}

declare module "packages/java/net/$NetworkInterface" {
import { $Enumeration } from "packages/java/util/$Enumeration"
import { $List } from "packages/java/util/$List"
import { $InterfaceAddress } from "packages/java/net/$InterfaceAddress"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $InetAddress, $InetAddress$$Type } from "packages/java/net/$InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NetworkInterface {
public static "getByIndex"(int0: integer): $NetworkInterface
public static "getByInetAddress"(inetAddress0: $InetAddress$$Type): $NetworkInterface
public static "getByName"(string0: string): $NetworkInterface
public "getDisplayName"(): string
public "getHardwareAddress"(): byte[]
public "getIndex"(): integer
public "getInetAddresses"(): $Enumeration<$InetAddress>
public "getInterfaceAddresses"(): $List<$InterfaceAddress>
public "getMTU"(): integer
public "getName"(): string
public static "getNetworkInterfaces"(): $Enumeration<$NetworkInterface>
public "getParent"(): $NetworkInterface
public "getSubInterfaces"(): $Enumeration<$NetworkInterface>
public "inetAddresses"(): $Stream<$InetAddress>
public "isLoopback"(): boolean
public "isPointToPoint"(): boolean
public "isUp"(): boolean
public "isVirtual"(): boolean
public static "networkInterfaces"(): $Stream<$NetworkInterface>
public "subInterfaces"(): $Stream<$NetworkInterface>
public "supportsMulticast"(): boolean
get "displayName"(): string
get "hardwareAddress"(): byte[]
get "index"(): integer
get "interfaceAddresses"(): $List<$InterfaceAddress>
get "mTU"(): integer
get "name"(): string
get "parent"(): $NetworkInterface
get "loopback"(): boolean
get "pointToPoint"(): boolean
get "up"(): boolean
get "virtual"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkInterface$$Type = ($NetworkInterface);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkInterface_ = $NetworkInterface$$Type;
}
}

declare module "packages/java/net/$ServerSocket" {
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $SocketImplFactory$$Type } from "packages/java/net/$SocketImplFactory"
import { $Closeable } from "packages/java/io/$Closeable"
import { $ServerSocketChannel } from "packages/java/nio/channels/$ServerSocketChannel"
import { $Set } from "packages/java/util/$Set"
import { $Socket } from "packages/java/net/$Socket"
import { $InetAddress, $InetAddress$$Type } from "packages/java/net/$InetAddress"
import { $SocketOption, $SocketOption$$Type } from "packages/java/net/$SocketOption"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ServerSocket implements $Closeable {
constructor(int0: integer, int1: integer, inetAddress2: $InetAddress$$Type)
constructor(int0: integer, int1: integer)
constructor(int0: integer)
constructor()

public "accept"(): $Socket
public "bind"(socketAddress0: $SocketAddress$$Type, int1: integer): void
public "bind"(socketAddress0: $SocketAddress$$Type): void
public "close"(): void
public "getChannel"(): $ServerSocketChannel
public "getInetAddress"(): $InetAddress
public "getLocalPort"(): integer
public "getLocalSocketAddress"(): $SocketAddress
public "getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
public "getReceiveBufferSize"(): integer
public "getReuseAddress"(): boolean
public "getSoTimeout"(): integer
public "isBound"(): boolean
public "isClosed"(): boolean
public "setOption"<T>(socketOption0: $SocketOption$$Type<T>, t1: T): $ServerSocket
public "setPerformancePreferences"(int0: integer, int1: integer, int2: integer): void
public "setReceiveBufferSize"(int0: integer): void
public "setReuseAddress"(boolean0: boolean): void
public "setSoTimeout"(int0: integer): void
/** @deprecated */
public static "setSocketFactory"(socketImplFactory0: $SocketImplFactory$$Type): void
public "supportedOptions"(): $Set<$SocketOption<any>>
get "channel"(): $ServerSocketChannel
get "inetAddress"(): $InetAddress
get "localPort"(): integer
get "localSocketAddress"(): $SocketAddress
get "receiveBufferSize"(): integer
get "reuseAddress"(): boolean
get "soTimeout"(): integer
get "bound"(): boolean
get "closed"(): boolean
set "receiveBufferSize"(value: integer)
set "reuseAddress"(value: boolean)
set "soTimeout"(value: integer)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerSocket$$Type = ($ServerSocket);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerSocket_ = $ServerSocket$$Type;
}
}

declare module "packages/java/net/$DatagramSocket" {
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $DatagramChannel } from "packages/java/nio/channels/$DatagramChannel"
import { $Closeable } from "packages/java/io/$Closeable"
import { $Set } from "packages/java/util/$Set"
import { $DatagramSocketImplFactory$$Type } from "packages/java/net/$DatagramSocketImplFactory"
import { $NetworkInterface$$Type } from "packages/java/net/$NetworkInterface"
import { $InetAddress, $InetAddress$$Type } from "packages/java/net/$InetAddress"
import { $SocketOption, $SocketOption$$Type } from "packages/java/net/$SocketOption"
import { $DatagramPacket$$Type } from "packages/java/net/$DatagramPacket"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramSocket implements $Closeable {
constructor(int0: integer, inetAddress1: $InetAddress$$Type)
constructor(socketAddress0: $SocketAddress$$Type)
constructor()
constructor(int0: integer)

public "bind"(socketAddress0: $SocketAddress$$Type): void
public "close"(): void
public "connect"(socketAddress0: $SocketAddress$$Type): void
public "connect"(inetAddress0: $InetAddress$$Type, int1: integer): void
public "disconnect"(): void
public "getBroadcast"(): boolean
public "getChannel"(): $DatagramChannel
public "getInetAddress"(): $InetAddress
public "getLocalAddress"(): $InetAddress
public "getLocalPort"(): integer
public "getLocalSocketAddress"(): $SocketAddress
public "getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
public "getPort"(): integer
public "getReceiveBufferSize"(): integer
public "getRemoteSocketAddress"(): $SocketAddress
public "getReuseAddress"(): boolean
public "getSendBufferSize"(): integer
public "getSoTimeout"(): integer
public "getTrafficClass"(): integer
public "isBound"(): boolean
public "isClosed"(): boolean
public "isConnected"(): boolean
public "joinGroup"(socketAddress0: $SocketAddress$$Type, networkInterface1: $NetworkInterface$$Type): void
public "leaveGroup"(socketAddress0: $SocketAddress$$Type, networkInterface1: $NetworkInterface$$Type): void
public "receive"(datagramPacket0: $DatagramPacket$$Type): void
public "send"(datagramPacket0: $DatagramPacket$$Type): void
public "setBroadcast"(boolean0: boolean): void
/** @deprecated */
public static "setDatagramSocketImplFactory"(datagramSocketImplFactory0: $DatagramSocketImplFactory$$Type): void
public "setOption"<T>(socketOption0: $SocketOption$$Type<T>, t1: T): $DatagramSocket
public "setReceiveBufferSize"(int0: integer): void
public "setReuseAddress"(boolean0: boolean): void
public "setSendBufferSize"(int0: integer): void
public "setSoTimeout"(int0: integer): void
public "setTrafficClass"(int0: integer): void
public "supportedOptions"(): $Set<$SocketOption<any>>
get "broadcast"(): boolean
get "channel"(): $DatagramChannel
get "inetAddress"(): $InetAddress
get "localAddress"(): $InetAddress
get "localPort"(): integer
get "localSocketAddress"(): $SocketAddress
get "port"(): integer
get "receiveBufferSize"(): integer
get "remoteSocketAddress"(): $SocketAddress
get "reuseAddress"(): boolean
get "sendBufferSize"(): integer
get "soTimeout"(): integer
get "trafficClass"(): integer
get "bound"(): boolean
get "closed"(): boolean
get "connected"(): boolean
set "broadcast"(value: boolean)
set "receiveBufferSize"(value: integer)
set "reuseAddress"(value: boolean)
set "sendBufferSize"(value: integer)
set "soTimeout"(value: integer)
set "trafficClass"(value: integer)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DatagramSocket$$Type = ($DatagramSocket);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DatagramSocket_ = $DatagramSocket$$Type;
}
}

declare module "packages/java/net/$Proxy$Type" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Proxy$Type extends $Enum<$Proxy$Type> {
static readonly "DIRECT": $Proxy$Type
static readonly "HTTP": $Proxy$Type
static readonly "SOCKS": $Proxy$Type

public static "valueOf"(string0: string): $Proxy$Type
public static "values"(): $Proxy$Type[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Proxy$Type$$Type = ($Proxy$Type | ("direct" | "http" | "socks"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Proxy$Type_ = $Proxy$Type$$Type;
}
}

declare module "packages/java/net/$URLConnection" {
import { $FileNameMap, $FileNameMap$$Type } from "packages/java/net/$FileNameMap"
import { $ContentHandlerFactory$$Type } from "packages/java/net/$ContentHandlerFactory"
import { $OutputStream } from "packages/java/io/$OutputStream"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $List } from "packages/java/util/$List"
import { $InputStream, $InputStream$$Type } from "packages/java/io/$InputStream"
import { $Permission } from "packages/java/security/$Permission"
import { $URL } from "packages/java/net/$URL"
import { $Map } from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URLConnection {
public "addRequestProperty"(string0: string, string1: string): void
public "connect"(): void
public "getAllowUserInteraction"(): boolean
public "getConnectTimeout"(): integer
public "getContent"(): any
public "getContent"(class0s: $Class$$Type<any>[]): any
public "getContentEncoding"(): string
public "getContentLength"(): integer
public "getContentLengthLong"(): long
public "getContentType"(): string
public "getDate"(): long
public static "getDefaultAllowUserInteraction"(): boolean
/** @deprecated */
public static "getDefaultRequestProperty"(string0: string): string
public "getDefaultUseCaches"(): boolean
public static "getDefaultUseCaches"(string0: string): boolean
public "getDoInput"(): boolean
public "getDoOutput"(): boolean
public "getExpiration"(): long
public static "getFileNameMap"(): $FileNameMap
public "getHeaderField"(int0: integer): string
public "getHeaderField"(string0: string): string
public "getHeaderFieldDate"(string0: string, long1: long): long
public "getHeaderFieldInt"(string0: string, int1: integer): integer
public "getHeaderFieldKey"(int0: integer): string
public "getHeaderFieldLong"(string0: string, long1: long): long
public "getHeaderFields"(): $Map<string, $List<string>>
public "getIfModifiedSince"(): long
public "getInputStream"(): $InputStream
public "getLastModified"(): long
public "getOutputStream"(): $OutputStream
public "getPermission"(): $Permission
public "getReadTimeout"(): integer
public "getRequestProperties"(): $Map<string, $List<string>>
public "getRequestProperty"(string0: string): string
public "getURL"(): $URL
public "getUseCaches"(): boolean
public static "guessContentTypeFromName"(string0: string): string
public static "guessContentTypeFromStream"(inputStream0: $InputStream$$Type): string
public "setAllowUserInteraction"(boolean0: boolean): void
public "setConnectTimeout"(int0: integer): void
public static "setContentHandlerFactory"(contentHandlerFactory0: $ContentHandlerFactory$$Type): void
public static "setDefaultAllowUserInteraction"(boolean0: boolean): void
/** @deprecated */
public static "setDefaultRequestProperty"(string0: string, string1: string): void
public static "setDefaultUseCaches"(string0: string, boolean1: boolean): void
public "setDefaultUseCaches"(boolean0: boolean): void
public "setDoInput"(boolean0: boolean): void
public "setDoOutput"(boolean0: boolean): void
public static "setFileNameMap"(fileNameMap0: $FileNameMap$$Type): void
public "setIfModifiedSince"(long0: long): void
public "setReadTimeout"(int0: integer): void
public "setRequestProperty"(string0: string, string1: string): void
public "setUseCaches"(boolean0: boolean): void
get "allowUserInteraction"(): boolean
get "connectTimeout"(): integer
get "content"(): any
get "contentEncoding"(): string
get "contentLength"(): integer
get "contentLengthLong"(): long
get "contentType"(): string
get "date"(): long
get "defaultUseCaches"(): boolean
get "doInput"(): boolean
get "doOutput"(): boolean
get "expiration"(): long
get "headerFields"(): $Map<string, $List<string>>
get "ifModifiedSince"(): long
get "inputStream"(): $InputStream
get "lastModified"(): long
get "outputStream"(): $OutputStream
get "permission"(): $Permission
get "readTimeout"(): integer
get "requestProperties"(): $Map<string, $List<string>>
get "uRL"(): $URL
get "useCaches"(): boolean
set "allowUserInteraction"(value: boolean)
set "connectTimeout"(value: integer)
set "defaultUseCaches"(value: boolean)
set "doInput"(value: boolean)
set "doOutput"(value: boolean)
set "ifModifiedSince"(value: long)
set "readTimeout"(value: integer)
set "useCaches"(value: boolean)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $URLConnection$$Type = ($URLConnection);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $URLConnection_ = $URLConnection$$Type;
}
}

declare module "packages/java/net/$URI" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Serializable } from "packages/java/io/$Serializable"
import { $URL } from "packages/java/net/$URL"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URI implements $Comparable<$URI>, $Serializable {
constructor(string0: string, string1: string, string2: string, string3: string, string4: string)
constructor(string0: string, string1: string, string2: string, string3: string)
constructor(string0: string, string1: string, string2: string)
constructor(string0: string)
constructor(string0: string, string1: string, string2: string, int3: integer, string4: string, string5: string, string6: string)

public "compareTo"(uRI0: $URI$$Type): integer
public static "create"(string0: string): $URI
public "getAuthority"(): string
public "getFragment"(): string
public "getHost"(): string
public "getPath"(): string
public "getPort"(): integer
public "getQuery"(): string
public "getRawAuthority"(): string
public "getRawFragment"(): string
public "getRawPath"(): string
public "getRawQuery"(): string
public "getRawSchemeSpecificPart"(): string
public "getRawUserInfo"(): string
public "getScheme"(): string
public "getSchemeSpecificPart"(): string
public "getUserInfo"(): string
public "isAbsolute"(): boolean
public "isOpaque"(): boolean
public "normalize"(): $URI
public "parseServerAuthority"(): $URI
public "relativize"(uRI0: $URI$$Type): $URI
public "resolve"(uRI0: $URI$$Type): $URI
public "resolve"(string0: string): $URI
public "toASCIIString"(): string
public "toURL"(): $URL
get "authority"(): string
get "fragment"(): string
get "host"(): string
get "path"(): string
get "port"(): integer
get "query"(): string
get "rawAuthority"(): string
get "rawFragment"(): string
get "rawPath"(): string
get "rawQuery"(): string
get "rawSchemeSpecificPart"(): string
get "rawUserInfo"(): string
get "scheme"(): string
get "schemeSpecificPart"(): string
get "userInfo"(): string
get "absolute"(): boolean
get "opaque"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $URI$$Type = ($URI);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $URI_ = $URI$$Type;
}
}

declare module "packages/java/net/$URL" {
import { $Proxy$$Type } from "packages/java/net/$Proxy"
import { $URLStreamHandler$$Type } from "packages/java/net/$URLStreamHandler"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $InputStream } from "packages/java/io/$InputStream"
import { $URI } from "packages/java/net/$URI"
import { $URLConnection } from "packages/java/net/$URLConnection"
import { $URLStreamHandlerFactory$$Type } from "packages/java/net/$URLStreamHandlerFactory"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $URL implements $Serializable {
constructor(uRL0: $URL$$Type, string1: string, uRLStreamHandler2: $URLStreamHandler$$Type)
constructor(uRL0: $URL$$Type, string1: string)
constructor(string0: string)
constructor(string0: string, string1: string, int2: integer, string3: string)
constructor(string0: string, string1: string, string2: string)
constructor(string0: string, string1: string, int2: integer, string3: string, uRLStreamHandler4: $URLStreamHandler$$Type)

public "getAuthority"(): string
public "getContent"(): any
public "getContent"(class0s: $Class$$Type<any>[]): any
public "getDefaultPort"(): integer
public "getFile"(): string
public "getHost"(): string
public "getPath"(): string
public "getPort"(): integer
public "getProtocol"(): string
public "getQuery"(): string
public "getRef"(): string
public "getUserInfo"(): string
public "openConnection"(proxy0: $Proxy$$Type): $URLConnection
public "openConnection"(): $URLConnection
public "openStream"(): $InputStream
public "sameFile"(uRL0: $URL$$Type): boolean
public static "setURLStreamHandlerFactory"(uRLStreamHandlerFactory0: $URLStreamHandlerFactory$$Type): void
public "toExternalForm"(): string
public "toURI"(): $URI
get "authority"(): string
get "content"(): any
get "defaultPort"(): integer
get "file"(): string
get "host"(): string
get "path"(): string
get "port"(): integer
get "protocol"(): string
get "query"(): string
get "ref"(): string
get "userInfo"(): string
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $URL$$Type = ($URL);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $URL_ = $URL$$Type;
}
}

declare module "packages/java/net/$SocketImplFactory" {
import { $SocketImpl, $SocketImpl$$Type } from "packages/java/net/$SocketImpl"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SocketImplFactory {
"createSocketImpl"(): $SocketImpl
}

export namespace $SocketImplFactory {
const probejs$$marker: never
}
export abstract class $SocketImplFactory$$Static implements $SocketImplFactory {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SocketImplFactory$$Type = ($SocketImplFactory | (() => $SocketImpl$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SocketImplFactory_ = $SocketImplFactory$$Type;
}
}

declare module "packages/java/net/$ContentHandler" {
import { $Class$$Type } from "packages/java/lang/$Class"
import { $URLConnection$$Type } from "packages/java/net/$URLConnection"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ContentHandler {
constructor()

public "getContent"(uRLConnection0: $URLConnection$$Type): any
public "getContent"(uRLConnection0: $URLConnection$$Type, class1s: $Class$$Type<any>[]): any
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ContentHandler$$Type = ($ContentHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ContentHandler_ = $ContentHandler$$Type;
}
}

declare module "packages/java/net/$Socket" {
import { $Proxy$$Type } from "packages/java/net/$Proxy"
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $SocketImplFactory$$Type } from "packages/java/net/$SocketImplFactory"
import { $Closeable } from "packages/java/io/$Closeable"
import { $OutputStream } from "packages/java/io/$OutputStream"
import { $Set } from "packages/java/util/$Set"
import { $InputStream } from "packages/java/io/$InputStream"
import { $SocketChannel } from "packages/java/nio/channels/$SocketChannel"
import { $InetAddress, $InetAddress$$Type } from "packages/java/net/$InetAddress"
import { $SocketOption, $SocketOption$$Type } from "packages/java/net/$SocketOption"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Socket implements $Closeable {
constructor(inetAddress0: $InetAddress$$Type, int1: integer)
constructor(string0: string, int1: integer, inetAddress2: $InetAddress$$Type, int3: integer)
constructor(inetAddress0: $InetAddress$$Type, int1: integer, inetAddress2: $InetAddress$$Type, int3: integer)
/** @deprecated */
constructor(string0: string, int1: integer, boolean2: boolean)
/** @deprecated */
constructor(inetAddress0: $InetAddress$$Type, int1: integer, boolean2: boolean)
constructor()
constructor(proxy0: $Proxy$$Type)
constructor(string0: string, int1: integer)

public "bind"(socketAddress0: $SocketAddress$$Type): void
public "close"(): void
public "connect"(socketAddress0: $SocketAddress$$Type): void
public "connect"(socketAddress0: $SocketAddress$$Type, int1: integer): void
public "getChannel"(): $SocketChannel
public "getInetAddress"(): $InetAddress
public "getInputStream"(): $InputStream
public "getKeepAlive"(): boolean
public "getLocalAddress"(): $InetAddress
public "getLocalPort"(): integer
public "getLocalSocketAddress"(): $SocketAddress
public "getOOBInline"(): boolean
public "getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
public "getOutputStream"(): $OutputStream
public "getPort"(): integer
public "getReceiveBufferSize"(): integer
public "getRemoteSocketAddress"(): $SocketAddress
public "getReuseAddress"(): boolean
public "getSendBufferSize"(): integer
public "getSoLinger"(): integer
public "getSoTimeout"(): integer
public "getTcpNoDelay"(): boolean
public "getTrafficClass"(): integer
public "isBound"(): boolean
public "isClosed"(): boolean
public "isConnected"(): boolean
public "isInputShutdown"(): boolean
public "isOutputShutdown"(): boolean
public "sendUrgentData"(int0: integer): void
public "setKeepAlive"(boolean0: boolean): void
public "setOOBInline"(boolean0: boolean): void
public "setOption"<T>(socketOption0: $SocketOption$$Type<T>, t1: T): $Socket
public "setPerformancePreferences"(int0: integer, int1: integer, int2: integer): void
public "setReceiveBufferSize"(int0: integer): void
public "setReuseAddress"(boolean0: boolean): void
public "setSendBufferSize"(int0: integer): void
public "setSoLinger"(boolean0: boolean, int1: integer): void
public "setSoTimeout"(int0: integer): void
/** @deprecated */
public static "setSocketImplFactory"(socketImplFactory0: $SocketImplFactory$$Type): void
public "setTcpNoDelay"(boolean0: boolean): void
public "setTrafficClass"(int0: integer): void
public "shutdownInput"(): void
public "shutdownOutput"(): void
public "supportedOptions"(): $Set<$SocketOption<any>>
get "channel"(): $SocketChannel
get "inetAddress"(): $InetAddress
get "inputStream"(): $InputStream
get "keepAlive"(): boolean
get "localAddress"(): $InetAddress
get "localPort"(): integer
get "localSocketAddress"(): $SocketAddress
get "oOBInline"(): boolean
get "outputStream"(): $OutputStream
get "port"(): integer
get "receiveBufferSize"(): integer
get "remoteSocketAddress"(): $SocketAddress
get "reuseAddress"(): boolean
get "sendBufferSize"(): integer
get "soLinger"(): integer
get "soTimeout"(): integer
get "tcpNoDelay"(): boolean
get "trafficClass"(): integer
get "bound"(): boolean
get "closed"(): boolean
get "connected"(): boolean
get "inputShutdown"(): boolean
get "outputShutdown"(): boolean
set "keepAlive"(value: boolean)
set "oOBInline"(value: boolean)
set "receiveBufferSize"(value: integer)
set "reuseAddress"(value: boolean)
set "sendBufferSize"(value: integer)
set "soTimeout"(value: integer)
set "tcpNoDelay"(value: boolean)
set "trafficClass"(value: integer)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Socket$$Type = ($Socket);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Socket_ = $Socket$$Type;
}
}

declare module "packages/java/net/$FileNameMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileNameMap {
"getContentTypeFor"(string0: string): string
}

export namespace $FileNameMap {
const probejs$$marker: never
}
export abstract class $FileNameMap$$Static implements $FileNameMap {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileNameMap$$Type = ($FileNameMap | ((arg0: string) => string));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileNameMap_ = $FileNameMap$$Type;
}
}

declare module "packages/java/net/$SocketOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SocketOptions {
"getOption"(int0: integer): any
"setOption"(int0: integer, object1: any): void
}

export namespace $SocketOptions {
const IP_MULTICAST_IF: integer
const IP_MULTICAST_IF2: integer
const IP_MULTICAST_LOOP: integer
const IP_TOS: integer
const SO_BINDADDR: integer
const SO_BROADCAST: integer
const SO_KEEPALIVE: integer
const SO_LINGER: integer
const SO_OOBINLINE: integer
const SO_RCVBUF: integer
const SO_REUSEADDR: integer
const SO_REUSEPORT: integer
const SO_SNDBUF: integer
const SO_TIMEOUT: integer
const TCP_NODELAY: integer
}
export abstract class $SocketOptions$$Static implements $SocketOptions {
static readonly "IP_MULTICAST_IF": integer
static readonly "IP_MULTICAST_IF2": integer
static readonly "IP_MULTICAST_LOOP": integer
static readonly "IP_TOS": integer
static readonly "SO_BINDADDR": integer
static readonly "SO_BROADCAST": integer
static readonly "SO_KEEPALIVE": integer
static readonly "SO_LINGER": integer
static readonly "SO_OOBINLINE": integer
static readonly "SO_RCVBUF": integer
static readonly "SO_REUSEADDR": integer
static readonly "SO_REUSEPORT": integer
static readonly "SO_SNDBUF": integer
static readonly "SO_TIMEOUT": integer
static readonly "TCP_NODELAY": integer

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SocketOptions$$Type = ($SocketOptions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SocketOptions_ = $SocketOptions$$Type;
}
}

declare module "packages/java/net/$ProtocolFamily" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProtocolFamily {
"name"(): string
}

export namespace $ProtocolFamily {
const probejs$$marker: never
}
export abstract class $ProtocolFamily$$Static implements $ProtocolFamily {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ProtocolFamily$$Type = ($ProtocolFamily | (() => string));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ProtocolFamily_ = $ProtocolFamily$$Type;
}
}

declare module "packages/java/net/$InterfaceAddress" {
import { $InetAddress } from "packages/java/net/$InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterfaceAddress {
public "getAddress"(): $InetAddress
public "getBroadcast"(): $InetAddress
public "getNetworkPrefixLength"(): short
get "address"(): $InetAddress
get "broadcast"(): $InetAddress
get "networkPrefixLength"(): short
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InterfaceAddress$$Type = ($InterfaceAddress);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InterfaceAddress_ = $InterfaceAddress$$Type;
}
}

declare module "packages/java/net/$InetAddress" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $NetworkInterface$$Type } from "packages/java/net/$NetworkInterface"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InetAddress implements $Serializable {
public "getAddress"(): byte[]
public static "getAllByName"(string0: string): $InetAddress[]
public static "getByAddress"(byte0s: byte[]): $InetAddress
public static "getByAddress"(string0: string, byte1s: byte[]): $InetAddress
public static "getByName"(string0: string): $InetAddress
public "getCanonicalHostName"(): string
public "getHostAddress"(): string
public "getHostName"(): string
public static "getLocalHost"(): $InetAddress
public static "getLoopbackAddress"(): $InetAddress
public "isAnyLocalAddress"(): boolean
public "isLinkLocalAddress"(): boolean
public "isLoopbackAddress"(): boolean
public "isMCGlobal"(): boolean
public "isMCLinkLocal"(): boolean
public "isMCNodeLocal"(): boolean
public "isMCOrgLocal"(): boolean
public "isMCSiteLocal"(): boolean
public "isMulticastAddress"(): boolean
public "isReachable"(int0: integer): boolean
public "isReachable"(networkInterface0: $NetworkInterface$$Type, int1: integer, int2: integer): boolean
public "isSiteLocalAddress"(): boolean
get "address"(): byte[]
get "canonicalHostName"(): string
get "hostAddress"(): string
get "hostName"(): string
get "anyLocalAddress"(): boolean
get "linkLocalAddress"(): boolean
get "loopbackAddress"(): boolean
get "mCGlobal"(): boolean
get "mCLinkLocal"(): boolean
get "mCNodeLocal"(): boolean
get "mCOrgLocal"(): boolean
get "mCSiteLocal"(): boolean
get "multicastAddress"(): boolean
get "siteLocalAddress"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InetAddress$$Type = ($InetAddress);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InetAddress_ = $InetAddress$$Type;
}
}

