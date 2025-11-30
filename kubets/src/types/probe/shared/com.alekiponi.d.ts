declare module "packages/com/alekiponi/alekiships/mixins/accessors/$ExplosionAccessor" {
import { $ExplosionDamageCalculator } from "packages/net/minecraft/world/level/$ExplosionDamageCalculator"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $ObjectArrayList } from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"
import { $Map } from "packages/java/util/$Map"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export interface $ExplosionAccessor {
"getDamageCalculator"(): $ExplosionDamageCalculator
"getHitPlayers"(): $Map<$Player, $Vec3>
"getLevel"(): $Level
"getRadius"(): float
"getSource"(): $Entity
"getToBlow"(): $ObjectArrayList<$BlockPos>
"x"(): double
"y"(): double
"z"(): double
get "damageCalculator"(): $ExplosionDamageCalculator
get "hitPlayers"(): $Map<$Player, $Vec3>
get "level"(): $Level
get "radius"(): float
get "source"(): $Entity
get "toBlow"(): $ObjectArrayList<$BlockPos>
}

export namespace $ExplosionAccessor {
const probejs$$marker: never
}
export abstract class $ExplosionAccessor$$Static implements $ExplosionAccessor {
}
}

declare module "packages/com/alekiponi/alekiships/mixins/accessors/$ShulkerBoxMenuAccessor" {
import { $Container } from "packages/net/minecraft/world/$Container"

export interface $ShulkerBoxMenuAccessor {
"getContainer"(): $Container
get "container"(): $Container
}

export namespace $ShulkerBoxMenuAccessor {
const probejs$$marker: never
}
export abstract class $ShulkerBoxMenuAccessor$$Static implements $ShulkerBoxMenuAccessor {
}
}

