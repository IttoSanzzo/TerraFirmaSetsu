declare module "packages/dev/latvian/mods/kubejs/forge/$GenericForgeEventConsumer" {
import { $GenericEvent, $GenericEvent$$Type } from "packages/net/minecraftforge/eventbus/api/$GenericEvent"
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"

export interface $GenericForgeEventConsumer extends $Consumer<$GenericEvent<any>> {
"accept"(genericEvent0: $GenericEvent$$Type<any>): void
"andThen"(consumer0: $Consumer$$Type<$GenericEvent$$Type<any>>): $Consumer<$GenericEvent<any>>
}

export namespace $GenericForgeEventConsumer {
const probejs$$marker: never
}
export abstract class $GenericForgeEventConsumer$$Static implements $GenericForgeEventConsumer {
}
}

declare module "packages/dev/latvian/mods/kubejs/forge/$ForgeEventConsumer" {
import { $Event, $Event$$Type } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"

export interface $ForgeEventConsumer extends $Consumer<$Event> {
"accept"(event0: $Event$$Type): void
"andThen"(consumer0: $Consumer$$Type<$Event$$Type>): $Consumer<$Event>
}

export namespace $ForgeEventConsumer {
const probejs$$marker: never
}
export abstract class $ForgeEventConsumer$$Static implements $ForgeEventConsumer {
}
}

