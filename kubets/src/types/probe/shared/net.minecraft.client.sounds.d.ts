declare module "packages/net/minecraft/client/sounds/$ChannelAccess$ChannelHandle" {
import { $ChannelAccess$$Type } from "packages/net/minecraft/client/sounds/$ChannelAccess"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Channel$$Type } from "packages/com/mojang/blaze3d/audio/$Channel"

export class $ChannelAccess$ChannelHandle {
constructor(channelAccess0: $ChannelAccess$$Type, channel1: $Channel$$Type)

public "execute"(consumer0: $Consumer$$Type<$Channel$$Type>): void
public "isStopped"(): boolean
public "release"(): void
get "stopped"(): boolean
}
}

declare module "packages/net/minecraft/client/sounds/$ChannelAccess" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Channel$$Type } from "packages/com/mojang/blaze3d/audio/$Channel"
import { $Library$Pool$$Type } from "packages/com/mojang/blaze3d/audio/$Library$Pool"
import { $Library$$Type } from "packages/com/mojang/blaze3d/audio/$Library"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ChannelAccess$ChannelHandle } from "packages/net/minecraft/client/sounds/$ChannelAccess$ChannelHandle"

export class $ChannelAccess {
constructor(library0: $Library$$Type, executor1: $Executor$$Type)

public "clear"(): void
public "createHandle"(pool0: $Library$Pool$$Type): $CompletableFuture<$ChannelAccess$ChannelHandle>
public "executeOnChannels"(consumer0: $Consumer$$Type<$Stream$$Type<$Channel$$Type>>): void
public "scheduleTick"(): void
}
}

declare module "packages/net/minecraft/client/sounds/$AudioStream" {
import { $AudioFormat } from "packages/javax/sound/sampled/$AudioFormat"
import { $Closeable } from "packages/java/io/$Closeable"
import { $ByteBuffer } from "packages/java/nio/$ByteBuffer"

export interface $AudioStream extends $Closeable {
"close"(): void
"getFormat"(): $AudioFormat
"read"(int0: integer): $ByteBuffer
get "format"(): $AudioFormat
}

export namespace $AudioStream {
const probejs$$marker: never
}
export abstract class $AudioStream$$Static implements $AudioStream {
}
}

declare module "packages/net/minecraft/client/sounds/$SoundEventListener" {
import { $SoundInstance$$Type } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import { $WeighedSoundEvents$$Type } from "packages/net/minecraft/client/sounds/$WeighedSoundEvents"

export interface $SoundEventListener {
"onPlaySound"(soundInstance0: $SoundInstance$$Type, weighedSoundEvents1: $WeighedSoundEvents$$Type): void
}

export namespace $SoundEventListener {
const probejs$$marker: never
}
export abstract class $SoundEventListener$$Static implements $SoundEventListener {
}
}

declare module "packages/net/minecraft/client/sounds/$WeighedSoundEvents" {
import { $Sound, $Sound$$Type } from "packages/net/minecraft/client/resources/sounds/$Sound"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Weighted, $Weighted$$Type } from "packages/net/minecraft/client/sounds/$Weighted"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SoundEngine$$Type } from "packages/net/minecraft/client/sounds/$SoundEngine"

export class $WeighedSoundEvents implements $Weighted<$Sound> {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string)

public "addSound"(weighted0: $Weighted$$Type<$Sound$$Type>): void
public "getSound"(randomSource0: $RandomSource$$Type): $Sound
public "getSubtitle"(): $Component
public "getWeight"(): integer
public "preloadIfRequired"(soundEngine0: $SoundEngine$$Type): void
get "subtitle"(): $Component
get "weight"(): integer
}
}

declare module "packages/net/minecraft/client/sounds/$Weighted" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $SoundEngine$$Type } from "packages/net/minecraft/client/sounds/$SoundEngine"

export interface $Weighted<T> {
"getSound"(randomSource0: $RandomSource$$Type): T
"getWeight"(): integer
"preloadIfRequired"(soundEngine0: $SoundEngine$$Type): void
get "weight"(): integer
}

export namespace $Weighted {
const probejs$$marker: never
}
export abstract class $Weighted$$Static<T> implements $Weighted<T> {
}
}

declare module "packages/net/minecraft/client/sounds/$SoundBufferLibrary" {
import { $Sound$$Type } from "packages/net/minecraft/client/resources/sounds/$Sound"
import { $ResourceProvider$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $SoundBuffer } from "packages/com/mojang/blaze3d/audio/$SoundBuffer"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $AudioStream } from "packages/net/minecraft/client/sounds/$AudioStream"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SoundBufferLibraryAccessor } from "packages/team/creative/ambientsounds/mixin/$SoundBufferLibraryAccessor"

export class $SoundBufferLibrary implements $SoundBufferLibraryAccessor {
constructor(resourceProvider0: $ResourceProvider$$Type)

public "clear"(): void
public "getCompleteBuffer"(resourceLocation0: $ResourceLocation$$Type): $CompletableFuture<$SoundBuffer>
public "getStream"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $CompletableFuture<$AudioStream>
public "preload"(collection0: $Collection$$Type<$Sound$$Type>): $CompletableFuture<any>
}
}

declare module "packages/net/minecraft/client/sounds/$SoundManager" {
import { $TickableSoundInstance$$Type } from "packages/net/minecraft/client/resources/sounds/$TickableSoundInstance"
import { $SoundManagerAccessor } from "packages/earth/terrarium/adastra/mixins/client/$SoundManagerAccessor"
import { $SoundInstance$$Type } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import { $Collection } from "packages/java/util/$Collection"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $WeighedSoundEvents } from "packages/net/minecraft/client/sounds/$WeighedSoundEvents"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SimplePreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$SimplePreparableReloadListener"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $Sound } from "packages/net/minecraft/client/resources/sounds/$Sound"
import { $Options$$Type } from "packages/net/minecraft/client/$Options"
import { $List } from "packages/java/util/$List"
import { $SoundEventListener$$Type } from "packages/net/minecraft/client/sounds/$SoundEventListener"
import { $SoundManager$Preparations } from "packages/net/minecraft/client/sounds/$SoundManager$Preparations"

export class $SoundManager extends $SimplePreparableReloadListener<$SoundManager$Preparations> implements $SoundManagerAccessor {
static readonly "EMPTY_SOUND": $Sound
static readonly "INTENTIONALLY_EMPTY_SOUND": $Sound
static readonly "INTENTIONALLY_EMPTY_SOUND_EVENT": $WeighedSoundEvents
static readonly "INTENTIONALLY_EMPTY_SOUND_LOCATION": $ResourceLocation

constructor(options0: $Options$$Type)

public "addListener"(soundEventListener0: $SoundEventListener$$Type): void
public "destroy"(): void
public "getAvailableSoundDevices"(): $List<string>
public "getAvailableSounds"(): $Collection<$ResourceLocation>
public "getDebugString"(): string
public "getName"(): string
public "getSoundEvent"(resourceLocation0: $ResourceLocation$$Type): $WeighedSoundEvents
public "isActive"(soundInstance0: $SoundInstance$$Type): boolean
public "pause"(): void
public "play"(soundInstance0: $SoundInstance$$Type): void
public "playDelayed"(soundInstance0: $SoundInstance$$Type, int1: integer): void
public "queueTickingSound"(tickableSoundInstance0: $TickableSoundInstance$$Type): void
public "reload"(): void
public "removeListener"(soundEventListener0: $SoundEventListener$$Type): void
public "resume"(): void
public "stop"(soundInstance0: $SoundInstance$$Type): void
public "stop"(): void
public "stop"(resourceLocation0: $ResourceLocation$$Type, soundSource1: $SoundSource$$Type): void
public "tick"(boolean0: boolean): void
public "updateSource"(camera0: $Camera$$Type): void
public "updateSourceVolume"(soundSource0: $SoundSource$$Type, float1: float): void
get "availableSoundDevices"(): $List<string>
get "availableSounds"(): $Collection<$ResourceLocation>
get "debugString"(): string
get "name"(): string
}
}

declare module "packages/net/minecraft/client/sounds/$MusicManager" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $Music$$Type } from "packages/net/minecraft/sounds/$Music"
import { $MusicTrackerAccessor } from "packages/immersive_melodies/mixin/$MusicTrackerAccessor"

export class $MusicManager implements $MusicTrackerAccessor {
constructor(minecraft0: $Minecraft$$Type)

public "isPlayingMusic"(music0: $Music$$Type): boolean
public "startPlaying"(music0: $Music$$Type): void
public "stopPlaying"(): void
public "stopPlaying"(music0: $Music$$Type): void
public "tick"(): void
}
}

declare module "packages/net/minecraft/client/sounds/$SoundEngine" {
import { $TickableSoundInstance$$Type } from "packages/net/minecraft/client/resources/sounds/$TickableSoundInstance"
import { $SoundInstance$$Type } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $Sound$$Type } from "packages/net/minecraft/client/resources/sounds/$Sound"
import { $Options$$Type } from "packages/net/minecraft/client/$Options"
import { $ResourceProvider$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $SoundEngineAccessor } from "packages/earth/terrarium/adastra/mixins/client/$SoundEngineAccessor"
import { $SoundManager, $SoundManager$$Type } from "packages/net/minecraft/client/sounds/$SoundManager"
import { $List } from "packages/java/util/$List"
import { $SoundEventListener$$Type } from "packages/net/minecraft/client/sounds/$SoundEventListener"

export class $SoundEngine implements $SoundEngineAccessor {
static readonly "MISSING_SOUND": string
static readonly "OPEN_AL_SOFT_PREFIX": string
static readonly "OPEN_AL_SOFT_PREFIX_LENGTH": integer
readonly "soundManager": $SoundManager

constructor(soundManager0: $SoundManager$$Type, options1: $Options$$Type, resourceProvider2: $ResourceProvider$$Type)

public "addEventListener"(soundEventListener0: $SoundEventListener$$Type): void
public "destroy"(): void
public "getAvailableSoundDevices"(): $List<string>
public "getDebugString"(): string
public "isActive"(soundInstance0: $SoundInstance$$Type): boolean
public "pause"(): void
public "play"(soundInstance0: $SoundInstance$$Type): void
public "playDelayed"(soundInstance0: $SoundInstance$$Type, int1: integer): void
public "queueTickingSound"(tickableSoundInstance0: $TickableSoundInstance$$Type): void
public "reload"(): void
public "removeEventListener"(soundEventListener0: $SoundEventListener$$Type): void
public "requestPreload"(sound0: $Sound$$Type): void
public "resume"(): void
public "stop"(soundInstance0: $SoundInstance$$Type): void
public "stop"(resourceLocation0: $ResourceLocation$$Type, soundSource1: $SoundSource$$Type): void
public "stopAll"(): void
public "tick"(boolean0: boolean): void
public "updateCategoryVolume"(soundSource0: $SoundSource$$Type, float1: float): void
public "updateSource"(camera0: $Camera$$Type): void
get "availableSoundDevices"(): $List<string>
get "debugString"(): string
}
}

declare module "packages/net/minecraft/client/sounds/$SoundManager$Preparations" {
import { $WeighedSoundEvents$$Type } from "packages/net/minecraft/client/sounds/$WeighedSoundEvents"
import { $Resource$$Type } from "packages/net/minecraft/server/packs/resources/$Resource"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SoundEngine$$Type } from "packages/net/minecraft/client/sounds/$SoundEngine"
import { $Map$$Type } from "packages/java/util/$Map"

export class $SoundManager$Preparations {
public "apply"(map0: $Map$$Type<$ResourceLocation$$Type, $WeighedSoundEvents$$Type>, map1: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>, soundEngine2: $SoundEngine$$Type): void
}
}

