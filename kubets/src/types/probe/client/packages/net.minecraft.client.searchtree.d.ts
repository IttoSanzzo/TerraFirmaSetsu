declare module "packages/net/minecraft/client/searchtree/$SearchRegistry$TreeBuilderSupplier" {
import { $RefreshableSearchTree$$Type } from "packages/net/minecraft/client/searchtree/$RefreshableSearchTree"
import { $List } from "packages/java/util/$List"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SearchRegistry$TreeBuilderSupplier$$Type<T> = ($SearchRegistry$TreeBuilderSupplier<T> | ((arg0: $List<T>) => $RefreshableSearchTree$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SearchRegistry$TreeBuilderSupplier_<T> = $SearchRegistry$TreeBuilderSupplier$$Type<T>;
}
}

declare module "packages/net/minecraft/client/searchtree/$SearchRegistry$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SearchRegistry$Key$$Type<T> = ($SearchRegistry$Key<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SearchRegistry$Key_<T> = $SearchRegistry$Key$$Type<T>;
}
}

declare module "packages/net/minecraft/client/searchtree/$RefreshableSearchTree" {
import { $List$$Type } from "packages/java/util/$List"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RefreshableSearchTree$$Type<T> = ($RefreshableSearchTree<T> | ((arg0: string) => $List$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RefreshableSearchTree_<T> = $RefreshableSearchTree$$Type<T>;
}
}

declare module "packages/net/minecraft/client/searchtree/$SearchRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SearchRegistry$$Type = ($SearchRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SearchRegistry_ = $SearchRegistry$$Type;
}
}

declare module "packages/net/minecraft/client/searchtree/$SearchTree" {
import { $List$$Type } from "packages/java/util/$List"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SearchTree$$Type<T> = ($SearchTree<T> | ((arg0: string) => $List$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SearchTree_<T> = $SearchTree$$Type<T>;
}
}

