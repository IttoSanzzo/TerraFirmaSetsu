declare module "packages/dev/latvian/mods/kubejs/generator/$DataJsonGenerator" {
import { $ResourceGenerator } from "packages/dev/latvian/mods/kubejs/generator/$ResourceGenerator"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GeneratedData$$Type } from "packages/dev/latvian/mods/kubejs/script/data/$GeneratedData"
import { $Map$$Type } from "packages/java/util/$Map"

export class $DataJsonGenerator extends $ResourceGenerator {
constructor(m: $Map$$Type<$ResourceLocation$$Type, $GeneratedData$$Type>)

}
}

declare module "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $VariantBlockStateGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator"
import { $MultipartBlockStateGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$MultipartBlockStateGenerator"
import { $ResourceGenerator } from "packages/dev/latvian/mods/kubejs/generator/$ResourceGenerator"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GeneratedData$$Type } from "packages/dev/latvian/mods/kubejs/script/data/$GeneratedData"
import { $Map$$Type } from "packages/java/util/$Map"

export class $AssetJsonGenerator extends $ResourceGenerator {
constructor(m: $Map$$Type<$ResourceLocation$$Type, $GeneratedData$$Type>)

public static "asItemModelLocation"(id: $ResourceLocation$$Type): $ResourceLocation
public "blockModel"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$ModelGenerator$$Type>): void
public "blockState"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$VariantBlockStateGenerator$$Type>): void
public "itemModel"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$ModelGenerator$$Type>): void
public "multipartState"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$MultipartBlockStateGenerator$$Type>): void
public "stencil"(target: $ResourceLocation$$Type, stencil: string, colors: $JsonObject$$Type): void
}
}

declare module "packages/dev/latvian/mods/kubejs/generator/$ResourceGenerator" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GeneratedData$$Type } from "packages/dev/latvian/mods/kubejs/script/data/$GeneratedData"
import { $ConsoleJS$$Type } from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"
import { $Map$$Type } from "packages/java/util/$Map"

export class $ResourceGenerator {
constructor(c: $ConsoleJS$$Type, m: $Map$$Type<$ResourceLocation$$Type, $GeneratedData$$Type>)

public "add"(id: $ResourceLocation$$Type, data: $Supplier$$Type<byte[]>): void
public "add"(id: $ResourceLocation$$Type, data: $Supplier$$Type<byte[]>, alwaysForget: boolean): void
public "json"(id: $ResourceLocation$$Type, json: $JsonElement$$Type): void
}
}

