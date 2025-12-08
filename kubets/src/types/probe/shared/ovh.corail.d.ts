declare module "packages/ovh/corail/tombstone/mixin/accessor/$ShapedRecipeAccessor" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ShapedRecipeAccessor {
"getResult"(): $ItemStack
get "result"(): $ItemStack
}

export namespace $ShapedRecipeAccessor {
const probejs$$marker: never
}
export abstract class $ShapedRecipeAccessor$$Static implements $ShapedRecipeAccessor {
}
}

declare module "packages/ovh/corail/tombstone/mixin/accessor/$ShapelessRecipeAccessor" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ShapelessRecipeAccessor {
"getResult"(): $ItemStack
get "result"(): $ItemStack
}

export namespace $ShapelessRecipeAccessor {
const probejs$$marker: never
}
export abstract class $ShapelessRecipeAccessor$$Static implements $ShapelessRecipeAccessor {
}
}

declare module "packages/ovh/corail/tombstone/api/event/$PhantomSpawnerEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $PhantomSpawnerEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, int1: integer)

public "getPlayer"(): $Player
public "getTimeForCheck"(): integer
get "player"(): $Player
get "timeForCheck"(): integer
}
}

declare module "packages/ovh/corail/tombstone/api/event/$PhantomSpawnerEvent$TimeForCheck" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PhantomSpawnerEvent } from "packages/ovh/corail/tombstone/api/event/$PhantomSpawnerEvent"

export class $PhantomSpawnerEvent$TimeForCheck extends $PhantomSpawnerEvent {
constructor()
constructor(player0: $Player$$Type, int1: integer)

public "modifyTimeForCheck"(int0: integer): void
}
}

declare module "packages/ovh/corail/tombstone/api/event/$MerchantOffersEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Merchant, $Merchant$$Type } from "packages/net/minecraft/world/item/trading/$Merchant"
import { $MerchantOffers, $MerchantOffers$$Type } from "packages/net/minecraft/world/item/trading/$MerchantOffers"

export class $MerchantOffersEvent extends $Event {
constructor()
constructor(merchant0: $Merchant$$Type, int1: integer, merchantOffers2: $MerchantOffers$$Type)

public "getMerchant"(): $Merchant
public "getMerchantLevel"(): integer
public "getMerchantOffers"(): $MerchantOffers
get "merchant"(): $Merchant
get "merchantLevel"(): integer
get "merchantOffers"(): $MerchantOffers
}
}

declare module "packages/ovh/corail/tombstone/api/event/$CaptureSoulEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CaptureSoulEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, livingEntity1: $LivingEntity$$Type)

public "getCapturedEntity"(): $LivingEntity
public "getPlayer"(): $Player
get "capturedEntity"(): $LivingEntity
get "player"(): $Player
}
}

declare module "packages/ovh/corail/tombstone/api/event/$PhantomSpawnerEvent$CheckPhantomSpawn" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PhantomSpawnerEvent } from "packages/ovh/corail/tombstone/api/event/$PhantomSpawnerEvent"

export class $PhantomSpawnerEvent$CheckPhantomSpawn extends $PhantomSpawnerEvent {
constructor()
constructor(player0: $Player$$Type, int1: integer, int2: integer)

public "getTimeSinceRest"(): integer
get "timeSinceRest"(): integer
}
}

declare module "packages/ovh/corail/tombstone/api/event/$RestoreInventoryEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IItemHandler, $IItemHandler$$Type } from "packages/net/minecraftforge/items/$IItemHandler"

export class $RestoreInventoryEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, blockPos1: $BlockPos$$Type, iItemHandler2: $IItemHandler$$Type, string3: string, long4: long)

public "getGravePos"(): $BlockPos
public "getInventory"(): $IItemHandler
public "getOwnerDeathTime"(): long
public "getOwnerName"(): string
public "getPlayer"(): $Player
get "gravePos"(): $BlockPos
get "inventory"(): $IItemHandler
get "ownerDeathTime"(): long
get "ownerName"(): string
get "player"(): $Player
}
}

declare module "packages/ovh/corail/tombstone/api/event/$VillageSiegeEvent$Start" {
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $VillageSiegeEvent } from "packages/ovh/corail/tombstone/api/event/$VillageSiegeEvent"

export class $VillageSiegeEvent$Start extends $VillageSiegeEvent {
constructor()
constructor(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type)

public "getSpawnPos"(): $BlockPos
get "spawnPos"(): $BlockPos
}
}

declare module "packages/ovh/corail/tombstone/api/event/$VillageSiegeEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"

export class $VillageSiegeEvent extends $Event {
constructor()
constructor(serverLevel0: $ServerLevel$$Type)

public "getLevel"(): $ServerLevel
get "level"(): $ServerLevel
}
}

declare module "packages/ovh/corail/tombstone/mixin/accessor/$VillagerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VillagerAccessor {
"callIncreaseMerchantCareer"(): void
}

export namespace $VillagerAccessor {
const probejs$$marker: never
}
export abstract class $VillagerAccessor$$Static implements $VillagerAccessor {
}
}

declare module "packages/ovh/corail/tombstone/api/event/$VillageSiegeEvent$SpawnZombie" {
import { $Zombie, $Zombie$$Type } from "packages/net/minecraft/world/entity/monster/$Zombie"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $VillageSiegeEvent } from "packages/ovh/corail/tombstone/api/event/$VillageSiegeEvent"

export class $VillageSiegeEvent$SpawnZombie extends $VillageSiegeEvent {
constructor()
constructor(serverLevel0: $ServerLevel$$Type, zombie1: $Zombie$$Type)

public "getZombie"(): $Zombie
get "zombie"(): $Zombie
}
}

