declare module "packages/net/minecraft/client/server/$IntegratedServer" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ChunkProgressListenerFactory$$Type } from "packages/net/minecraft/server/level/progress/$ChunkProgressListenerFactory"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ProcessorHandle, $ProcessorHandle$$Type } from "packages/net/minecraft/util/thread/$ProcessorHandle"
import { $TemporalAmount$$Type } from "packages/java/time/temporal/$TemporalAmount"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $WorldStem$$Type } from "packages/net/minecraft/server/$WorldStem"
import { $Thread$$Type } from "packages/java/lang/$Thread"
import { $TickTask } from "packages/net/minecraft/server/$TickTask"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $ServerLevel } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ScheduledEvents$Callback$$Type } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $Services$$Type } from "packages/net/minecraft/server/$Services"
import { $PackRepository$$Type } from "packages/net/minecraft/server/packs/repository/$PackRepository"
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $PlayerSelector$$Type } from "packages/dev/latvian/mods/kubejs/core/$PlayerSelector"
import { $AdvancementJS } from "packages/dev/latvian/mods/kubejs/player/$AdvancementJS"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Exception$$Type } from "packages/java/lang/$Exception"
import { $ScheduledEvents$ScheduledEvent } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"

export class $IntegratedServer extends $MinecraftServer {
constructor(thread0: $Thread$$Type, minecraft1: $Minecraft$$Type, levelStorageAccess2: $LevelStorageSource$LevelStorageAccess$$Type, packRepository3: $PackRepository$$Type, worldStem4: $WorldStem$$Type, services5: $Services$$Type, chunkProgressListenerFactory6: $ChunkProgressListenerFactory$$Type)

public "alwaysAccepts"(): boolean
public "ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, $TickTask>): $CompletableFuture<Source>
public "askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, $TickTask>): $CompletableFuture<Source>
public "getAdvancement"(id: $ResourceLocation$$Type): $AdvancementJS
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getLevel"(dimension: $ResourceLocation$$Type): $ServerLevel
public "getName"(): $Component
public "getPlayer"(selector: $PlayerSelector$$Type): $ServerPlayer
public "getPlayers"(): $EntityArrayList
public "handler$enh000$onInit"(thread0: $Thread$$Type, minecraft1: $Minecraft$$Type, levelStorageAccess2: $LevelStorageSource$LevelStorageAccess$$Type, packRepository3: $PackRepository$$Type, worldStem4: $WorldStem$$Type, services5: $Services$$Type, chunkProgressListenerFactory6: $ChunkProgressListenerFactory$$Type, callbackInfo7: $CallbackInfo$$Type): void
public "handler$zcp000$onTickPaused"(callbackInfo0: $CallbackInfo$$Type): void
public "initServer"(): boolean
public static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
public "resetGlobalTickLengthMs"(): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "self"(): $MinecraftServer
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "setStatusMessage"(message: $Component$$Type): void
public "setUUID"(uUID0: $UUID$$Type): void
public "tell"(message: $Component$$Type): void
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "name"(): $Component
get "players"(): $EntityArrayList
set "statusMessage"(value: $Component$$Type)
set "uUID"(value: $UUID$$Type)
}
}

