declare module "packages/net/minecraftforge/event/village/$WandererTradesEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type } from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"

export class $WandererTradesEvent extends $Event {
constructor()
constructor(list0: $List$$Type<$VillagerTrades$ItemListing$$Type>, list1: $List$$Type<$VillagerTrades$ItemListing$$Type>)

public "getGenericTrades"(): $List<$VillagerTrades$ItemListing>
public "getRareTrades"(): $List<$VillagerTrades$ItemListing>
get "genericTrades"(): $List<$VillagerTrades$ItemListing>
get "rareTrades"(): $List<$VillagerTrades$ItemListing>
}
}

declare module "packages/net/minecraftforge/event/village/$VillageSiegeEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $VillageSiege, $VillageSiege$$Type } from "packages/net/minecraft/world/entity/ai/village/$VillageSiege"

export class $VillageSiegeEvent extends $Event {
constructor()
constructor(villageSiege0: $VillageSiege$$Type, level1: $Level$$Type, player2: $Player$$Type, vec33: $Vec3$$Type)

public "getAttemptedSpawnPos"(): $Vec3
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getSiege"(): $VillageSiege
get "attemptedSpawnPos"(): $Vec3
get "level"(): $Level
get "player"(): $Player
get "siege"(): $VillageSiege
}
}

declare module "packages/net/minecraftforge/event/village/$VillagerTradesEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type } from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import { $Int2ObjectMap, $Int2ObjectMap$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import { $VillagerProfession, $VillagerProfession$$Type } from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $VillagerTradesEvent extends $Event {
constructor(int2ObjectMap0: $Int2ObjectMap$$Type<$List$$Type<$VillagerTrades$ItemListing$$Type>>, villagerProfession1: $VillagerProfession$$Type)
constructor()

public "getTrades"(): $Int2ObjectMap<$List<$VillagerTrades$ItemListing>>
public "getType"(): $VillagerProfession
get "trades"(): $Int2ObjectMap<$List<$VillagerTrades$ItemListing>>
get "type"(): $VillagerProfession
}
}

