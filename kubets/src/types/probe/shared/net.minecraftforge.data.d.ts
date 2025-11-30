declare module "packages/net/minecraftforge/data/event/$GatherDataEvent" {
import { $Path } from "packages/java/nio/file/$Path"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ModContainer, $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $HolderLookup$Provider } from "packages/net/minecraft/core/$HolderLookup$Provider"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $GatherDataEvent$DataGeneratorConfig$$Type } from "packages/net/minecraftforge/data/event/$GatherDataEvent$DataGeneratorConfig"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $Collection } from "packages/java/util/$Collection"
import { $DataGenerator, $DataGenerator$$Type } from "packages/net/minecraft/data/$DataGenerator"
import { $ExistingFileHelper, $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"

export class $GatherDataEvent extends $Event implements $IModBusEvent {
constructor()
constructor(modContainer0: $ModContainer$$Type, dataGenerator1: $DataGenerator$$Type, dataGeneratorConfig2: $GatherDataEvent$DataGeneratorConfig$$Type, existingFileHelper3: $ExistingFileHelper$$Type)

public "getExistingFileHelper"(): $ExistingFileHelper
public "getGenerator"(): $DataGenerator
public "getInputs"(): $Collection<$Path>
public "getLookupProvider"(): $CompletableFuture<$HolderLookup$Provider>
public "getModContainer"(): $ModContainer
public "includeClient"(): boolean
public "includeDev"(): boolean
public "includeReports"(): boolean
public "includeServer"(): boolean
public "validate"(): boolean
get "existingFileHelper"(): $ExistingFileHelper
get "generator"(): $DataGenerator
get "inputs"(): $Collection<$Path>
get "lookupProvider"(): $CompletableFuture<$HolderLookup$Provider>
get "modContainer"(): $ModContainer
}
}

declare module "packages/net/minecraftforge/data/event/$GatherDataEvent$DataGeneratorConfig" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $HolderLookup$Provider$$Type } from "packages/net/minecraft/core/$HolderLookup$Provider"
import { $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $DataGenerator } from "packages/net/minecraft/data/$DataGenerator"

export class $GatherDataEvent$DataGeneratorConfig {
constructor(set0: $Set$$Type<string>, path1: $Path$$Type, collection2: $Collection$$Type<$Path$$Type>, completableFuture3: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, boolean4: boolean, boolean5: boolean, boolean6: boolean, boolean7: boolean, boolean8: boolean, boolean9: boolean)

public "getInputs"(): $Collection<$Path>
public "getMods"(): $Set<string>
public "isFlat"(): boolean
public "makeGenerator"(function0: $Function$$Type<$Path$$Type, $Path>, boolean1: boolean): $DataGenerator
public "runAll"(): void
get "inputs"(): $Collection<$Path>
get "mods"(): $Set<string>
get "flat"(): boolean
}
}

