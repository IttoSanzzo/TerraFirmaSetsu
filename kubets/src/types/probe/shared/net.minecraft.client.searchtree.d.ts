declare module "packages/net/minecraft/client/searchtree/$SearchRegistry$TreeBuilderSupplier" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $RefreshableSearchTree, $RefreshableSearchTree$$Type } from "packages/net/minecraft/client/searchtree/$RefreshableSearchTree"
import { $List, $List$$Type } from "packages/java/util/$List"

export interface $SearchRegistry$TreeBuilderSupplier<T> extends $Function<$List<T>, $RefreshableSearchTree<T>> {
"andThen"<V>(function0: $Function$$Type<$RefreshableSearchTree$$Type<T>, V>): $Function<$List<T>, V>
"apply"(list0: $List$$Type<T>): $RefreshableSearchTree<T>
"compose"<V>(function0: $Function$$Type<V, $List<T>>): $Function<V, $RefreshableSearchTree<T>>
}

export namespace $SearchRegistry$TreeBuilderSupplier {
function identity<T>(): $Function<T, T>
}
export abstract class $SearchRegistry$TreeBuilderSupplier$$Static<T> implements $SearchRegistry$TreeBuilderSupplier<T> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/net/minecraft/client/searchtree/$SearchRegistry$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SearchRegistry$Key<T> {
constructor()

}
}

declare module "packages/net/minecraft/client/searchtree/$RefreshableSearchTree" {
import { $SearchTree } from "packages/net/minecraft/client/searchtree/$SearchTree"
import { $List } from "packages/java/util/$List"

export interface $RefreshableSearchTree<T> extends $SearchTree<T> {
"refresh"(): void
"search"(string0: string): $List<T>
}

export namespace $RefreshableSearchTree {
function empty<T>(): $RefreshableSearchTree<T>
}
export abstract class $RefreshableSearchTree$$Static<T> implements $RefreshableSearchTree<T> {
static "empty"<T>(): $RefreshableSearchTree<T>
}
}

declare module "packages/net/minecraft/client/searchtree/$SearchRegistry" {
import { $SearchTree } from "packages/net/minecraft/client/searchtree/$SearchTree"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $ResourceManagerReloadListener } from "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $SearchRegistry$TreeBuilderSupplier$$Type } from "packages/net/minecraft/client/searchtree/$SearchRegistry$TreeBuilderSupplier"
import { $SearchRegistry$Key, $SearchRegistry$Key$$Type } from "packages/net/minecraft/client/searchtree/$SearchRegistry$Key"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $RecipeCollection } from "packages/net/minecraft/client/gui/screens/recipebook/$RecipeCollection"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $List$$Type } from "packages/java/util/$List"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"

export class $SearchRegistry implements $ResourceManagerReloadListener {
static readonly "CREATIVE_NAMES": $SearchRegistry$Key<$ItemStack>
static readonly "CREATIVE_TAGS": $SearchRegistry$Key<$ItemStack>
static readonly "RECIPE_COLLECTIONS": $SearchRegistry$Key<$RecipeCollection>

constructor()

public "getName"(): string
public "getTree"<T>(key0: $SearchRegistry$Key$$Type<T>): $SearchTree<T>
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "populate"<T>(key0: $SearchRegistry$Key$$Type<T>, list1: $List$$Type<T>): void
public "register"<T>(key0: $SearchRegistry$Key$$Type<T>, treeBuilderSupplier1: $SearchRegistry$TreeBuilderSupplier$$Type<T>): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}
}

declare module "packages/net/minecraft/client/searchtree/$SearchTree" {
import { $List } from "packages/java/util/$List"

export interface $SearchTree<T> {
"search"(string0: string): $List<T>
}

export namespace $SearchTree {
const probejs$$marker: never
}
export abstract class $SearchTree$$Static<T> implements $SearchTree<T> {
}
}

