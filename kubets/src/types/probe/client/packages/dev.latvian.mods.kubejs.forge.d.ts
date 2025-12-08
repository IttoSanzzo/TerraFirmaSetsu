declare module "packages/dev/latvian/mods/kubejs/forge/$GenericForgeEventConsumer" {
import { $GenericEvent } from "packages/net/minecraftforge/eventbus/api/$GenericEvent"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GenericForgeEventConsumer$$Type = ($GenericForgeEventConsumer | ((arg0: $GenericEvent<any>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GenericForgeEventConsumer_ = $GenericForgeEventConsumer$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/forge/$ForgeEventConsumer" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeEventConsumer$$Type = ($ForgeEventConsumer | ((arg0: $Event) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeEventConsumer_ = $ForgeEventConsumer$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/forge/$ForgeEventWrapper" {
import { $IEventBus, $IEventBus$$Type } from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import { $GenericForgeEventConsumer$$Type } from "packages/dev/latvian/mods/kubejs/forge/$GenericForgeEventConsumer"
import { JClass, JClass$$Type } from "packages/zzzank/probejs/docs/duck/JClass"
import { $ForgeEventConsumer$$Type } from "packages/dev/latvian/mods/kubejs/forge/$ForgeEventConsumer"
import { $Event, $Event$$Type } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Record } from "packages/java/lang/$Record"
import { $GenericEvent, $GenericEvent$$Type } from "packages/net/minecraftforge/eventbus/api/$GenericEvent"

export class $ForgeEventWrapper extends $Record {
constructor(name: string, eventBus: $IEventBus$$Type)

public "eventBus"(): $IEventBus
public "name"(): string
public "onEvent"<T extends $Event>(eventClass: JClass$$Type<T>, consumer: ((event: T) => void)): any
public "onGenericEvent"<T extends $GenericEvent<any>>(eventClass: JClass$$Type<T>, genericClass: JClass$$Type<any>, consumer: ((event: T) => void)): any
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeEventWrapper$$Type = ($ForgeEventWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeEventWrapper_ = $ForgeEventWrapper$$Type;
}
}

