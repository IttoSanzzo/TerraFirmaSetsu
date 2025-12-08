declare module "packages/net/minecraft/world/level/dimension/$DimensionType$MonsterSettings" {
import { $MapCodec } from "packages/com/mojang/serialization/$MapCodec"
import { $Record } from "packages/java/lang/$Record"
import { $IntProvider, $IntProvider$$Type } from "packages/net/minecraft/util/valueproviders/$IntProvider"

export class $DimensionType$MonsterSettings extends $Record {
static readonly "CODEC": $MapCodec<$DimensionType$MonsterSettings>

constructor(boolean0: boolean, boolean1: boolean, intProvider2: $IntProvider$$Type, int3: integer)

public "hasRaids"(): boolean
public "monsterSpawnBlockLightLimit"(): integer
public "monsterSpawnLightTest"(): $IntProvider
public "piglinSafe"(): boolean
}
}

declare module "packages/net/minecraft/world/level/dimension/end/$EndDragonFight$Data" {
import { $Record } from "packages/java/lang/$Record"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $EndDragonFight$Data extends $Record {
static readonly "CODEC": $Codec<$EndDragonFight$Data>
static readonly "DEFAULT": $EndDragonFight$Data

constructor(needsStateScanning: boolean, dragonKilled: boolean, previouslyKilled: boolean, isRespawning: boolean, dragonUUID: $Optional$$Type<$UUID$$Type>, exitPortalLocation: $Optional$$Type<$BlockPos$$Type>, gateways: $Optional$$Type<$List$$Type<integer>>)

public "dragonKilled"(): boolean
public "dragonUUID"(): $Optional<$UUID>
public "exitPortalLocation"(): $Optional<$BlockPos>
public "gateways"(): $Optional<$List<integer>>
public "isRespawning"(): boolean
public "needsStateScanning"(): boolean
public "previouslyKilled"(): boolean
get "respawning"(): boolean
}
}

declare module "packages/net/minecraft/world/level/dimension/$LevelStem" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Record } from "packages/java/lang/$Record"
import { $ChunkGenerator, $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $DimensionType, $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $LevelStem extends $Record {
static readonly "CODEC": $Codec<$LevelStem>
static readonly "END": $ResourceKey<$LevelStem>
static readonly "NETHER": $ResourceKey<$LevelStem>
static readonly "OVERWORLD": $ResourceKey<$LevelStem>

constructor(holder0: $Holder$$Type<$DimensionType$$Type>, chunkGenerator1: $ChunkGenerator$$Type)

public "generator"(): $ChunkGenerator
public "type"(): $Holder<$DimensionType>
}
}

declare module "packages/net/minecraft/world/level/dimension/end/$EndDragonFight" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID } from "packages/java/util/$UUID"
import { $EndDragonFight$Data, $EndDragonFight$Data$$Type } from "packages/net/minecraft/world/level/dimension/end/$EndDragonFight$Data"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $EnderDragon$$Type } from "packages/net/minecraft/world/entity/boss/enderdragon/$EnderDragon"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $EndCrystal$$Type } from "packages/net/minecraft/world/entity/boss/enderdragon/$EndCrystal"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $EndDragonFight {
static readonly "ARENA_TICKET_LEVEL": integer
static readonly "DRAGON_SPAWN_Y": integer
static readonly "TIME_BETWEEN_PLAYER_SCANS": integer

constructor(serverLevel0: $ServerLevel$$Type, long1: long, data2: $EndDragonFight$Data$$Type)
constructor(serverLevel0: $ServerLevel$$Type, long1: long, data2: $EndDragonFight$Data$$Type, blockPos3: $BlockPos$$Type)

public "addPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "getCrystalsAlive"(): integer
public "getDragonUUID"(): $UUID
public "hasPreviouslyKilledDragon"(): boolean
public "onCrystalDestroyed"(endCrystal0: $EndCrystal$$Type, damageSource1: $DamageSource$$Type): void
/** @deprecated */
public "removeAllGateways"(): void
public "removePlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "resetSpikeCrystals"(): void
public "saveData"(): $EndDragonFight$Data
public "setDragonKilled"(enderDragon0: $EnderDragon$$Type): void
/** @deprecated */
public "skipArenaLoadedCheck"(): void
public "tick"(): void
public "tryRespawn"(): void
public "updateDragon"(enderDragon0: $EnderDragon$$Type): void
get "crystalsAlive"(): integer
get "dragonUUID"(): $UUID
set "dragonKilled"(value: $EnderDragon$$Type)
}
}

