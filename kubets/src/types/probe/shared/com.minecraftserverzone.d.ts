declare module "packages/com/minecraftserverzone/weaponmaster/setup/playerdata/$PlayerData" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $PlayerData {
constructor()

public "getAllData"(): $PlayerData
public "tick"(player0: $Player$$Type): void
get "blacklist"(): string
set "blacklist"(value: string)
get "hideTick"(): integer
set "hideTick"(value: integer)
get "inventory"(): $ItemStack[]
set "inventory"(value: $ItemStack$$Type[])
get "lastMainhandHit"(): integer
set "lastMainhandHit"(value: integer)
get "lastOffhandHit"(): integer
set "lastOffhandHit"(value: integer)
get "mover"(): string
set "mover"(value: string)
get "positions"(): integer[]
set "positions"(value: integer[])
get "rotations"(): integer[]
set "rotations"(value: integer[])
get "scale"(): integer[]
set "scale"(value: integer[])
get "selectedSlot"(): integer
set "selectedSlot"(value: integer)
get "slotAttachments"(): string
set "slotAttachments"(value: string)
get "toggleSlots"(): integer[]
set "toggleSlots"(value: integer[])
get "uniqueItemDisplay"(): string
set "uniqueItemDisplay"(value: string)
get "whitelist"(): string
set "whitelist"(value: string)
get "allData"(): $PlayerData
}
}

declare module "packages/com/minecraftserverzone/weaponmaster/setup/playerdata/$IPlayerData" {
import { $PlayerData, $PlayerData$$Type } from "packages/com/minecraftserverzone/weaponmaster/setup/playerdata/$PlayerData"

export interface $IPlayerData {
"getPlayerData"(): $PlayerData
"setPlayerData"(playerData0: $PlayerData$$Type): void
get "playerData"(): $PlayerData
set "playerData"(value: $PlayerData$$Type)
}

export namespace $IPlayerData {
const probejs$$marker: never
}
export abstract class $IPlayerData$$Static implements $IPlayerData {
}
}

