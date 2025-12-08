declare module "packages/net/minecraft/client/telemetry/$TelemetryEventInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TelemetryEventInstance$$Type = ($TelemetryEventInstance);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TelemetryEventInstance_ = $TelemetryEventInstance$$Type;
}
}

declare module "packages/net/minecraft/client/telemetry/$WorldSessionTelemetryManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldSessionTelemetryManager$$Type = ($WorldSessionTelemetryManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldSessionTelemetryManager_ = $WorldSessionTelemetryManager$$Type;
}
}

declare module "packages/net/minecraft/client/telemetry/$TelemetryProperty$GameMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TelemetryProperty$GameMode$$Type = ($TelemetryProperty$GameMode | ("survival" | "creative" | "adventure" | "spectator" | "hardcore"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TelemetryProperty$GameMode_ = $TelemetryProperty$GameMode$$Type;
}
}

declare module "packages/net/minecraft/client/telemetry/$TelemetryPropertyMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TelemetryPropertyMap$$Type = ($TelemetryPropertyMap);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TelemetryPropertyMap_ = $TelemetryPropertyMap$$Type;
}
}

declare module "packages/net/minecraft/client/telemetry/$ClientTelemetryManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClientTelemetryManager$$Type = ($ClientTelemetryManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClientTelemetryManager_ = $ClientTelemetryManager$$Type;
}
}

declare module "packages/net/minecraft/client/telemetry/$TelemetryProperty$Exporter" {
import { $TelemetryPropertyContainer } from "packages/com/mojang/authlib/minecraft/$TelemetryPropertyContainer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TelemetryProperty$Exporter$$Type<T> = ($TelemetryProperty$Exporter<T> | ((arg0: $TelemetryPropertyContainer, arg1: string, arg2: T) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TelemetryProperty$Exporter_<T> = $TelemetryProperty$Exporter$$Type<T>;
}
}

declare module "packages/net/minecraft/client/telemetry/events/$GameLoadTimesEvent$Measurement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GameLoadTimesEvent$Measurement$$Type = ($GameLoadTimesEvent$Measurement);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GameLoadTimesEvent$Measurement_ = $GameLoadTimesEvent$Measurement$$Type;
}
}

declare module "packages/net/minecraft/client/telemetry/$TelemetryProperty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TelemetryProperty$$Type<T> = ($TelemetryProperty<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TelemetryProperty_<T> = $TelemetryProperty$$Type<T>;
}
}

declare module "packages/net/minecraft/client/telemetry/$TelemetryEventType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TelemetryEventType$$Type = ($TelemetryEventType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TelemetryEventType_ = $TelemetryEventType$$Type;
}
}

declare module "packages/net/minecraft/client/telemetry/$TelemetryPropertyMap$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TelemetryPropertyMap$Builder$$Type = ($TelemetryPropertyMap$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TelemetryPropertyMap$Builder_ = $TelemetryPropertyMap$Builder$$Type;
}
}

declare module "packages/net/minecraft/client/telemetry/$TelemetryEventSender" {
import { $Consumer } from "packages/java/util/function/$Consumer"
import { $TelemetryPropertyMap$Builder } from "packages/net/minecraft/client/telemetry/$TelemetryPropertyMap$Builder"
import { $TelemetryEventType } from "packages/net/minecraft/client/telemetry/$TelemetryEventType"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TelemetryEventSender$$Type = ($TelemetryEventSender | ((arg0: $TelemetryEventType, arg1: $Consumer<$TelemetryPropertyMap$Builder>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TelemetryEventSender_ = $TelemetryEventSender$$Type;
}
}

declare module "packages/net/minecraft/client/telemetry/$TelemetryProperty$ServerType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TelemetryProperty$ServerType$$Type = ($TelemetryProperty$ServerType | ("realm" | "local" | "other"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TelemetryProperty$ServerType_ = $TelemetryProperty$ServerType$$Type;
}
}

declare module "packages/net/minecraft/client/telemetry/$TelemetryEventType$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TelemetryEventType$Builder$$Type = ($TelemetryEventType$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TelemetryEventType$Builder_ = $TelemetryEventType$Builder$$Type;
}
}

