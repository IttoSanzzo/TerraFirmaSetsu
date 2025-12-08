declare module "packages/net/minecraftforge/server/permission/nodes/$PermissionDynamicContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PermissionDynamicContext$$Type<T> = ($PermissionDynamicContext<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PermissionDynamicContext_<T> = $PermissionDynamicContext$$Type<T>;
}
}

declare module "packages/net/minecraftforge/server/permission/events/$PermissionGatherEvent$Handler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PermissionGatherEvent$Handler$$Type = ($PermissionGatherEvent$Handler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PermissionGatherEvent$Handler_ = $PermissionGatherEvent$Handler$$Type;
}
}

declare module "packages/net/minecraftforge/server/permission/handler/$IPermissionHandlerFactory" {
import { $Collection } from "packages/java/util/$Collection"
import { $PermissionNode } from "packages/net/minecraftforge/server/permission/nodes/$PermissionNode"
import { $IPermissionHandler$$Type } from "packages/net/minecraftforge/server/permission/handler/$IPermissionHandler"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPermissionHandlerFactory$$Type = ($IPermissionHandlerFactory | ((arg0: $Collection<$PermissionNode<any>>) => $IPermissionHandler$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPermissionHandlerFactory_ = $IPermissionHandlerFactory$$Type;
}
}

declare module "packages/net/minecraftforge/server/permission/nodes/$PermissionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PermissionType$$Type<T> = ($PermissionType<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PermissionType_<T> = $PermissionType$$Type<T>;
}
}

declare module "packages/net/minecraftforge/server/permission/nodes/$PermissionDynamicContextKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PermissionDynamicContextKey$$Type<T> = ($PermissionDynamicContextKey<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PermissionDynamicContextKey_<T> = $PermissionDynamicContextKey$$Type<T>;
}
}

declare module "packages/net/minecraftforge/server/permission/events/$PermissionGatherEvent$Nodes" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PermissionGatherEvent$Nodes$$Type = ($PermissionGatherEvent$Nodes);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PermissionGatherEvent$Nodes_ = $PermissionGatherEvent$Nodes$$Type;
}
}

declare module "packages/net/minecraftforge/server/permission/nodes/$PermissionNode$PermissionResolver" {
import { $PermissionDynamicContext } from "packages/net/minecraftforge/server/permission/nodes/$PermissionDynamicContext"
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID } from "packages/java/util/$UUID"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PermissionNode$PermissionResolver$$Type<T> = ($PermissionNode$PermissionResolver<T> | ((arg0: $ServerPlayer, arg1: $UUID, ...arg2: $PermissionDynamicContext<any>[]) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PermissionNode$PermissionResolver_<T> = $PermissionNode$PermissionResolver$$Type<T>;
}
}

declare module "packages/net/minecraftforge/server/permission/events/$PermissionGatherEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PermissionGatherEvent$$Type = ($PermissionGatherEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PermissionGatherEvent_ = $PermissionGatherEvent$$Type;
}
}

declare module "packages/net/minecraftforge/server/permission/handler/$IPermissionHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPermissionHandler$$Type = ($IPermissionHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPermissionHandler_ = $IPermissionHandler$$Type;
}
}

declare module "packages/net/minecraftforge/server/permission/nodes/$PermissionNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PermissionNode$$Type<T> = ($PermissionNode<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PermissionNode_<T> = $PermissionNode$$Type<T>;
}
}

