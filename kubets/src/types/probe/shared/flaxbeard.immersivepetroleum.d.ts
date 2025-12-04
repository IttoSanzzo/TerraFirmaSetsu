declare module "packages/flaxbeard/immersivepetroleum/api/event/$ProjectorEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Rotation, $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $MultiblockHandler$IMultiblock, $MultiblockHandler$IMultiblock$$Type } from "packages/blusunrize/immersiveengineering/api/multiblocks/$MultiblockHandler$IMultiblock"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ProjectorEvent extends $Event {
constructor()
constructor(iMultiblock0: $MultiblockHandler$IMultiblock$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, level3: $Level$$Type, blockPos4: $BlockPos$$Type, blockState5: $BlockState$$Type, rotation6: $Rotation$$Type)

public "getMultiblock"(): $MultiblockHandler$IMultiblock
public "getRotation"(): $Rotation
public "getState"(): $BlockState
public "getTemplatePos"(): $BlockPos
public "getTemplateState"(): $BlockState
public "getTemplateWorld"(): $Level
public "getWorld"(): $Level
public "getWorldPos"(): $BlockPos
get "multiblock"(): $MultiblockHandler$IMultiblock
get "rotation"(): $Rotation
get "state"(): $BlockState
get "templatePos"(): $BlockPos
get "templateState"(): $BlockState
get "templateWorld"(): $Level
get "world"(): $Level
get "worldPos"(): $BlockPos
}
}

declare module "packages/flaxbeard/immersivepetroleum/api/event/$ProjectorEvent$PlaceBlockPost" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $MultiblockHandler$IMultiblock$$Type } from "packages/blusunrize/immersiveengineering/api/multiblocks/$MultiblockHandler$IMultiblock"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ProjectorEvent } from "packages/flaxbeard/immersivepetroleum/api/event/$ProjectorEvent"

export class $ProjectorEvent$PlaceBlockPost extends $ProjectorEvent {
constructor()
constructor(iMultiblock0: $MultiblockHandler$IMultiblock$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, level3: $Level$$Type, blockPos4: $BlockPos$$Type, blockState5: $BlockState$$Type, rotation6: $Rotation$$Type)

}
}

declare module "packages/flaxbeard/immersivepetroleum/api/event/$ProjectorEvent$PlaceBlock" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $MultiblockHandler$IMultiblock$$Type } from "packages/blusunrize/immersiveengineering/api/multiblocks/$MultiblockHandler$IMultiblock"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ProjectorEvent } from "packages/flaxbeard/immersivepetroleum/api/event/$ProjectorEvent"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export class $ProjectorEvent$PlaceBlock extends $ProjectorEvent {
constructor()
constructor(iMultiblock0: $MultiblockHandler$IMultiblock$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, level3: $Level$$Type, blockPos4: $BlockPos$$Type, blockState5: $BlockState$$Type, rotation6: $Rotation$$Type)

public "setBlockState"(blockState0: $BlockState$$Type): void
public "setState"(block0: $Block$$Type): void
set "blockState"(value: $BlockState$$Type)
set "state"(value: $Block$$Type)
}
}

declare module "packages/flaxbeard/immersivepetroleum/api/event/$ProjectorEvent$RenderBlock" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $MultiblockHandler$IMultiblock$$Type } from "packages/blusunrize/immersiveengineering/api/multiblocks/$MultiblockHandler$IMultiblock"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ProjectorEvent } from "packages/flaxbeard/immersivepetroleum/api/event/$ProjectorEvent"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export class $ProjectorEvent$RenderBlock extends $ProjectorEvent {
constructor()
constructor(iMultiblock0: $MultiblockHandler$IMultiblock$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, level3: $Level$$Type, blockPos4: $BlockPos$$Type, blockState5: $BlockState$$Type, rotation6: $Rotation$$Type)

public "setState"(block0: $Block$$Type): void
public "setState"(blockState0: $BlockState$$Type): void
set "state"(value: $Block$$Type)
set "state"(value: $BlockState$$Type)
}
}

