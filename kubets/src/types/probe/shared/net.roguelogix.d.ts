declare module "packages/net/roguelogix/quartz/$QuartzEvent$Startup" {
import { $QuartzEvent } from "packages/net/roguelogix/quartz/$QuartzEvent"

export class $QuartzEvent$Startup extends $QuartzEvent {
constructor()

}
}

declare module "packages/net/roguelogix/quartz/$QuartzEvent$ResourcesReloaded" {
import { $QuartzEvent$ResourcesLoaded } from "packages/net/roguelogix/quartz/$QuartzEvent$ResourcesLoaded"

export class $QuartzEvent$ResourcesReloaded extends $QuartzEvent$ResourcesLoaded {
constructor()

}
}

declare module "packages/net/roguelogix/phosphophyllite/mixin/helpers/$IPhosphophylliteLazyOptional" {
import { $LazyOptional$$Type } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $NonNullConsumer$$Type } from "packages/net/minecraftforge/common/util/$NonNullConsumer"

export interface $IPhosphophylliteLazyOptional<T> {
"removeListener"(nonNullConsumer0: $NonNullConsumer$$Type<$LazyOptional$$Type<T>>): void
}

export namespace $IPhosphophylliteLazyOptional {
const probejs$$marker: never
}
export abstract class $IPhosphophylliteLazyOptional$$Static<T> implements $IPhosphophylliteLazyOptional<T> {
}
}

declare module "packages/net/roguelogix/quartz/$QuartzEvent$Shutdown" {
import { $QuartzEvent } from "packages/net/roguelogix/quartz/$QuartzEvent"

export class $QuartzEvent$Shutdown extends $QuartzEvent {
constructor()

}
}

declare module "packages/net/roguelogix/quartz/$QuartzEvent$FrameStart" {
import { $QuartzEvent } from "packages/net/roguelogix/quartz/$QuartzEvent"

export class $QuartzEvent$FrameStart extends $QuartzEvent {
constructor()

}
}

declare module "packages/net/roguelogix/quartz/$QuartzEvent$ResourcesLoaded" {
import { $QuartzEvent } from "packages/net/roguelogix/quartz/$QuartzEvent"

export class $QuartzEvent$ResourcesLoaded extends $QuartzEvent {
constructor()

}
}

declare module "packages/net/roguelogix/phosphophyllite/event/$ReloadDataEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $ReloadDataEvent extends $Event {
constructor()

}
}

declare module "packages/net/roguelogix/quartz/$QuartzEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $QuartzEvent extends $Event {
constructor()

}
}

