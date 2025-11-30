declare module "packages/net/minecraftforge/event/level/$NoteBlockEvent$Play" {
import { $NoteBlockInstrument, $NoteBlockInstrument$$Type } from "packages/net/minecraft/world/level/block/state/properties/$NoteBlockInstrument"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $NoteBlockEvent } from "packages/net/minecraftforge/event/level/$NoteBlockEvent"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $NoteBlockEvent$Play extends $NoteBlockEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, int3: integer, noteBlockInstrument4: $NoteBlockInstrument$$Type)

public "getInstrument"(): $NoteBlockInstrument
public "setInstrument"(noteBlockInstrument0: $NoteBlockInstrument$$Type): void
get "instrument"(): $NoteBlockInstrument
set "instrument"(value: $NoteBlockInstrument$$Type)
}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$FluidPlaceBlockEvent" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent$FluidPlaceBlockEvent extends $BlockEvent {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type)
constructor()

public "getLiquidPos"(): $BlockPos
public "getNewState"(): $BlockState
public "getOriginalState"(): $BlockState
public "setNewState"(blockState0: $BlockState$$Type): void
get "liquidPos"(): $BlockPos
get "newState"(): $BlockState
get "originalState"(): $BlockState
set "newState"(value: $BlockState$$Type)
}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$EntityPlaceEvent" {
import { $BlockSnapshot, $BlockSnapshot$$Type } from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $BlockEvent$EntityPlaceEvent extends $BlockEvent {
constructor(blockSnapshot0: $BlockSnapshot$$Type, blockState1: $BlockState$$Type, entity2: $Entity$$Type)
constructor()

public "getBlockSnapshot"(): $BlockSnapshot
public "getEntity"(): $Entity
public "getPlacedAgainst"(): $BlockState
public "getPlacedBlock"(): $BlockState
get "blockSnapshot"(): $BlockSnapshot
get "entity"(): $Entity
get "placedAgainst"(): $BlockState
get "placedBlock"(): $BlockState
}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$FarmlandTrampleEvent" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $BlockEvent$FarmlandTrampleEvent extends $BlockEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, float3: float, entity4: $Entity$$Type)

public "getEntity"(): $Entity
public "getFallDistance"(): float
get "entity"(): $Entity
get "fallDistance"(): float
}
}

declare module "packages/net/minecraftforge/event/level/$ChunkEvent" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $ChunkAccess, $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $LevelEvent } from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $ChunkEvent extends $LevelEvent {
constructor()
constructor(chunkAccess0: $ChunkAccess$$Type, levelAccessor1: $LevelAccessor$$Type)
constructor(chunkAccess0: $ChunkAccess$$Type)

public "getChunk"(): $ChunkAccess
get "chunk"(): $ChunkAccess
}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$CreateFluidSourceEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent$CreateFluidSourceEvent extends $Event {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "level"(): $Level
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "packages/net/minecraftforge/event/level/$PistonEvent" {
import { $PistonStructureResolver } from "packages/net/minecraft/world/level/block/piston/$PistonStructureResolver"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $PistonEvent$PistonMoveType, $PistonEvent$PistonMoveType$$Type } from "packages/net/minecraftforge/event/level/$PistonEvent$PistonMoveType"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $PistonEvent extends $BlockEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, pistonMoveType3: $PistonEvent$PistonMoveType$$Type)

public "getDirection"(): $Direction
public "getFaceOffsetPos"(): $BlockPos
public "getPistonMoveType"(): $PistonEvent$PistonMoveType
public "getStructureHelper"(): $PistonStructureResolver
get "direction"(): $Direction
get "faceOffsetPos"(): $BlockPos
get "pistonMoveType"(): $PistonEvent$PistonMoveType
get "structureHelper"(): $PistonStructureResolver
}
}

declare module "packages/net/minecraftforge/event/level/$LevelEvent" {
import { $LevelAccessor, $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $EventHandlerImplCommon$LevelEventAttachment } from "packages/dev/architectury/event/forge/$EventHandlerImplCommon$LevelEventAttachment"

export class $LevelEvent extends $Event implements $EventHandlerImplCommon$LevelEventAttachment {
constructor(levelAccessor0: $LevelAccessor$$Type)
constructor()

public "architectury$attachLevel"(level: $LevelAccessor$$Type): void
public "architectury$getAttachedLevel"(): $LevelAccessor
public "getLevel"(): $LevelAccessor
get "level"(): $LevelAccessor
}
}

declare module "packages/net/minecraftforge/event/level/$LevelEvent$CreateSpawnPosition" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $ServerLevelData, $ServerLevelData$$Type } from "packages/net/minecraft/world/level/storage/$ServerLevelData"
import { $LevelEvent } from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $LevelEvent$CreateSpawnPosition extends $LevelEvent {
constructor()
constructor(levelAccessor0: $LevelAccessor$$Type, serverLevelData1: $ServerLevelData$$Type)

public "getSettings"(): $ServerLevelData
get "settings"(): $ServerLevelData
}
}

declare module "packages/net/minecraftforge/event/level/$PistonEvent$Post" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $PistonEvent$PistonMoveType$$Type } from "packages/net/minecraftforge/event/level/$PistonEvent$PistonMoveType"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $PistonEvent } from "packages/net/minecraftforge/event/level/$PistonEvent"

export class $PistonEvent$Post extends $PistonEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, pistonMoveType3: $PistonEvent$PistonMoveType$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/event/level/$ChunkDataEvent" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $ChunkEvent } from "packages/net/minecraftforge/event/level/$ChunkEvent"

export class $ChunkDataEvent extends $ChunkEvent {
constructor()
constructor(chunkAccess0: $ChunkAccess$$Type, levelAccessor1: $LevelAccessor$$Type, compoundTag2: $CompoundTag$$Type)
constructor(chunkAccess0: $ChunkAccess$$Type, compoundTag1: $CompoundTag$$Type)

public "getData"(): $CompoundTag
get "data"(): $CompoundTag
}
}

declare module "packages/net/minecraftforge/event/level/$PistonEvent$Pre" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $PistonEvent$PistonMoveType$$Type } from "packages/net/minecraftforge/event/level/$PistonEvent$PistonMoveType"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $PistonEvent } from "packages/net/minecraftforge/event/level/$PistonEvent"

export class $PistonEvent$Pre extends $PistonEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, pistonMoveType3: $PistonEvent$PistonMoveType$$Type)

}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$BlockToolModificationEvent" {
import { $UseOnContext, $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $ToolAction, $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"

export class $BlockEvent$BlockToolModificationEvent extends $BlockEvent {
constructor()
constructor(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean)

public "getContext"(): $UseOnContext
public "getFinalState"(): $BlockState
public "getHeldItemStack"(): $ItemStack
public "getPlayer"(): $Player
public "getToolAction"(): $ToolAction
public "isSimulated"(): boolean
public "setFinalState"(blockState0: $BlockState$$Type): void
get "context"(): $UseOnContext
get "finalState"(): $BlockState
get "heldItemStack"(): $ItemStack
get "player"(): $Player
get "toolAction"(): $ToolAction
get "simulated"(): boolean
set "finalState"(value: $BlockState$$Type)
}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$CropGrowEvent" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent$CropGrowEvent extends $BlockEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$NeighborNotifyEvent" {
import { $EnumSet, $EnumSet$$Type } from "packages/java/util/$EnumSet"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent$NeighborNotifyEvent extends $BlockEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, enumSet3: $EnumSet$$Type<$Direction$$Type>, boolean4: boolean)

public "getForceRedstoneUpdate"(): boolean
public "getNotifiedSides"(): $EnumSet<$Direction>
get "forceRedstoneUpdate"(): boolean
get "notifiedSides"(): $EnumSet<$Direction>
}
}

declare module "packages/net/minecraftforge/event/level/$LevelEvent$Unload" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $LevelEvent } from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $LevelEvent$Unload extends $LevelEvent {
constructor(levelAccessor0: $LevelAccessor$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/event/level/$LevelEvent$PotentialSpawns" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import { $List } from "packages/java/util/$List"
import { $LevelEvent } from "packages/net/minecraftforge/event/level/$LevelEvent"
import { $MobCategory, $MobCategory$$Type } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $WeightedRandomList$$Type } from "packages/net/minecraft/util/random/$WeightedRandomList"

export class $LevelEvent$PotentialSpawns extends $LevelEvent {
constructor(levelAccessor0: $LevelAccessor$$Type, mobCategory1: $MobCategory$$Type, blockPos2: $BlockPos$$Type, weightedRandomList3: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>)
constructor()

public "addSpawnerData"(spawnerData0: $MobSpawnSettings$SpawnerData$$Type): void
public "getMobCategory"(): $MobCategory
public "getPos"(): $BlockPos
public "getSpawnerDataList"(): $List<$MobSpawnSettings$SpawnerData>
public "removeSpawnerData"(spawnerData0: $MobSpawnSettings$SpawnerData$$Type): boolean
get "mobCategory"(): $MobCategory
get "pos"(): $BlockPos
get "spawnerDataList"(): $List<$MobSpawnSettings$SpawnerData>
}
}

declare module "packages/net/minecraftforge/event/level/$ChunkEvent$Load" {
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $ChunkEvent } from "packages/net/minecraftforge/event/level/$ChunkEvent"

export class $ChunkEvent$Load extends $ChunkEvent {
constructor()
constructor(chunkAccess0: $ChunkAccess$$Type, boolean1: boolean)

public "isNewChunk"(): boolean
get "newChunk"(): boolean
}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$BreakEvent" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent$BreakEvent extends $BlockEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, player3: $Player$$Type)

public "getExpToDrop"(): integer
public "getPlayer"(): $Player
public "setExpToDrop"(int0: integer): void
get "expToDrop"(): integer
get "player"(): $Player
set "expToDrop"(value: integer)
}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$EntityMultiPlaceEvent" {
import { $BlockSnapshot, $BlockSnapshot$$Type } from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import { $BlockEvent$EntityPlaceEvent } from "packages/net/minecraftforge/event/level/$BlockEvent$EntityPlaceEvent"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $BlockEvent$EntityMultiPlaceEvent extends $BlockEvent$EntityPlaceEvent {
constructor()
constructor(list0: $List$$Type<$BlockSnapshot$$Type>, blockState1: $BlockState$$Type, entity2: $Entity$$Type)

public "getReplacedBlockSnapshots"(): $List<$BlockSnapshot>
get "replacedBlockSnapshots"(): $List<$BlockSnapshot>
}
}

declare module "packages/net/minecraftforge/event/level/$ChunkDataEvent$Load" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ChunkDataEvent } from "packages/net/minecraftforge/event/level/$ChunkDataEvent"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $ChunkStatus$ChunkType, $ChunkStatus$ChunkType$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus$ChunkType"

export class $ChunkDataEvent$Load extends $ChunkDataEvent {
constructor()
constructor(chunkAccess0: $ChunkAccess$$Type, compoundTag1: $CompoundTag$$Type, chunkType2: $ChunkStatus$ChunkType$$Type)

public "getStatus"(): $ChunkStatus$ChunkType
get "status"(): $ChunkStatus$ChunkType
}
}

declare module "packages/net/minecraftforge/event/level/$NoteBlockEvent$Note" {
import { $Enum } from "packages/java/lang/$Enum"

export class $NoteBlockEvent$Note extends $Enum<$NoteBlockEvent$Note> {
static readonly "A": $NoteBlockEvent$Note
static readonly "A_SHARP": $NoteBlockEvent$Note
static readonly "B": $NoteBlockEvent$Note
static readonly "C": $NoteBlockEvent$Note
static readonly "C_SHARP": $NoteBlockEvent$Note
static readonly "D": $NoteBlockEvent$Note
static readonly "D_SHARP": $NoteBlockEvent$Note
static readonly "E": $NoteBlockEvent$Note
static readonly "F": $NoteBlockEvent$Note
static readonly "F_SHARP": $NoteBlockEvent$Note
static readonly "G": $NoteBlockEvent$Note
static readonly "G_SHARP": $NoteBlockEvent$Note

public static "valueOf"(string0: string): $NoteBlockEvent$Note
public static "values"(): $NoteBlockEvent$Note[]
}
}

declare module "packages/net/minecraftforge/event/level/$ChunkWatchEvent" {
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"

export class $ChunkWatchEvent extends $Event {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, chunkPos1: $ChunkPos$$Type, serverLevel2: $ServerLevel$$Type)

public "getLevel"(): $ServerLevel
public "getPlayer"(): $ServerPlayer
public "getPos"(): $ChunkPos
get "level"(): $ServerLevel
get "player"(): $ServerPlayer
get "pos"(): $ChunkPos
}
}

declare module "packages/net/minecraftforge/event/level/$ChunkDataEvent$Save" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ChunkDataEvent } from "packages/net/minecraftforge/event/level/$ChunkDataEvent"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"

export class $ChunkDataEvent$Save extends $ChunkDataEvent {
constructor(chunkAccess0: $ChunkAccess$$Type, levelAccessor1: $LevelAccessor$$Type, compoundTag2: $CompoundTag$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/event/level/$LevelEvent$Save" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $LevelEvent } from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $LevelEvent$Save extends $LevelEvent {
constructor(levelAccessor0: $LevelAccessor$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/event/level/$NoteBlockEvent$Change" {
import { $NoteBlockEvent$Octave } from "packages/net/minecraftforge/event/level/$NoteBlockEvent$Octave"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $NoteBlockEvent$Note } from "packages/net/minecraftforge/event/level/$NoteBlockEvent$Note"
import { $NoteBlockEvent } from "packages/net/minecraftforge/event/level/$NoteBlockEvent"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $NoteBlockEvent$Change extends $NoteBlockEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, int3: integer, int4: integer)

public "getOldNote"(): $NoteBlockEvent$Note
public "getOldOctave"(): $NoteBlockEvent$Octave
get "oldNote"(): $NoteBlockEvent$Note
get "oldOctave"(): $NoteBlockEvent$Octave
}
}

declare module "packages/net/minecraftforge/event/level/$ExplosionEvent$Detonate" {
import { $ExplosionEvent } from "packages/net/minecraftforge/event/level/$ExplosionEvent"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ExplosionEvent$Detonate extends $ExplosionEvent {
constructor()
constructor(level0: $Level$$Type, explosion1: $Explosion$$Type, list2: $List$$Type<$Entity$$Type>)

public "getAffectedBlocks"(): $List<$BlockPos>
public "getAffectedEntities"(): $List<$Entity>
get "affectedBlocks"(): $List<$BlockPos>
get "affectedEntities"(): $List<$Entity>
}
}

declare module "packages/net/minecraftforge/event/level/$LevelEvent$Load" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $LevelEvent } from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $LevelEvent$Load extends $LevelEvent {
constructor(levelAccessor0: $LevelAccessor$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/event/level/$NoteBlockEvent" {
import { $NoteBlockEvent$Octave, $NoteBlockEvent$Octave$$Type } from "packages/net/minecraftforge/event/level/$NoteBlockEvent$Octave"
import { $NoteBlockEvent$Note, $NoteBlockEvent$Note$$Type } from "packages/net/minecraftforge/event/level/$NoteBlockEvent$Note"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"

export class $NoteBlockEvent extends $BlockEvent {
constructor()

public "getNote"(): $NoteBlockEvent$Note
public "getOctave"(): $NoteBlockEvent$Octave
public "getVanillaNoteId"(): integer
public "setNote"(note0: $NoteBlockEvent$Note$$Type, octave1: $NoteBlockEvent$Octave$$Type): void
get "note"(): $NoteBlockEvent$Note
get "octave"(): $NoteBlockEvent$Octave
get "vanillaNoteId"(): integer
}
}

declare module "packages/net/minecraftforge/event/level/$PistonEvent$PistonMoveType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $PistonEvent$PistonMoveType extends $Enum<$PistonEvent$PistonMoveType> {
static readonly "EXTEND": $PistonEvent$PistonMoveType
static readonly "RETRACT": $PistonEvent$PistonMoveType
readonly "isExtend": boolean

public static "valueOf"(string0: string): $PistonEvent$PistonMoveType
public static "values"(): $PistonEvent$PistonMoveType[]
}
}

declare module "packages/net/minecraftforge/event/level/$NoteBlockEvent$Octave" {
import { $Enum } from "packages/java/lang/$Enum"

export class $NoteBlockEvent$Octave extends $Enum<$NoteBlockEvent$Octave> {
static readonly "HIGH": $NoteBlockEvent$Octave
static readonly "LOW": $NoteBlockEvent$Octave
static readonly "MID": $NoteBlockEvent$Octave

public static "valueOf"(string0: string): $NoteBlockEvent$Octave
public static "values"(): $NoteBlockEvent$Octave[]
}
}

declare module "packages/net/minecraftforge/event/level/$ExplosionEvent$Start" {
import { $ExplosionEvent } from "packages/net/minecraftforge/event/level/$ExplosionEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"

export class $ExplosionEvent$Start extends $ExplosionEvent {
constructor()
constructor(level0: $Level$$Type, explosion1: $Explosion$$Type)

}
}

declare module "packages/net/minecraftforge/event/level/$ChunkEvent$Unload" {
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $ChunkEvent } from "packages/net/minecraftforge/event/level/$ChunkEvent"

export class $ChunkEvent$Unload extends $ChunkEvent {
constructor(chunkAccess0: $ChunkAccess$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/event/level/$ChunkWatchEvent$Watch" {
import { $ChunkWatchEvent } from "packages/net/minecraftforge/event/level/$ChunkWatchEvent"
import { $LevelChunk, $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"

export class $ChunkWatchEvent$Watch extends $ChunkWatchEvent {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, levelChunk1: $LevelChunk$$Type, serverLevel2: $ServerLevel$$Type)

public "getChunk"(): $LevelChunk
get "chunk"(): $LevelChunk
}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$CropGrowEvent$Pre" {
import { $BlockEvent$CropGrowEvent } from "packages/net/minecraftforge/event/level/$BlockEvent$CropGrowEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent$CropGrowEvent$Pre extends $BlockEvent$CropGrowEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

}
}

declare module "packages/net/minecraftforge/event/level/$AlterGroundEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $LevelSimulatedReader, $LevelSimulatedReader$$Type } from "packages/net/minecraft/world/level/$LevelSimulatedReader"
import { $RandomSource, $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $AlterGroundEvent extends $Event {
constructor()
constructor(levelSimulatedReader0: $LevelSimulatedReader$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type)

public "getLevel"(): $LevelSimulatedReader
public "getNewAlteredState"(): $BlockState
public "getOriginalAlteredState"(): $BlockState
public "getPos"(): $BlockPos
public "getRandom"(): $RandomSource
public "setNewAlteredState"(blockState0: $BlockState$$Type): void
get "level"(): $LevelSimulatedReader
get "newAlteredState"(): $BlockState
get "originalAlteredState"(): $BlockState
get "pos"(): $BlockPos
get "random"(): $RandomSource
set "newAlteredState"(value: $BlockState$$Type)
}
}

declare module "packages/net/minecraftforge/event/level/$SaplingGrowTreeEvent" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $ConfiguredFeature, $ConfiguredFeature$$Type } from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import { $RandomSource, $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $LevelEvent } from "packages/net/minecraftforge/event/level/$LevelEvent"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $SaplingGrowTreeEvent extends $LevelEvent {
constructor()
constructor(levelAccessor0: $LevelAccessor$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, holder3: $Holder$$Type<$ConfiguredFeature$$Type<any, any>>)

public "getFeature"(): $Holder<$ConfiguredFeature<any, any>>
public "getPos"(): $BlockPos
public "getRandomSource"(): $RandomSource
public "setFeature"(resourceKey0: $ResourceKey$$Type<$ConfiguredFeature<any, any>>): void
public "setFeature"(holder0: $Holder$$Type<$ConfiguredFeature$$Type<any, any>>): void
get "feature"(): $Holder<$ConfiguredFeature<any, any>>
get "pos"(): $BlockPos
get "randomSource"(): $RandomSource
set "feature"(value: $ResourceKey$$Type<$ConfiguredFeature<any, any>>)
set "feature"(value: $Holder$$Type<$ConfiguredFeature$$Type<any, any>>)
}
}

declare module "packages/net/minecraftforge/event/level/$ChunkWatchEvent$UnWatch" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ChunkWatchEvent } from "packages/net/minecraftforge/event/level/$ChunkWatchEvent"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"

export class $ChunkWatchEvent$UnWatch extends $ChunkWatchEvent {
constructor(serverPlayer0: $ServerPlayer$$Type, chunkPos1: $ChunkPos$$Type, serverLevel2: $ServerLevel$$Type)
constructor()

}
}

declare module "packages/net/minecraftforge/event/level/$SleepFinishedTimeEvent" {
import { $LevelEvent } from "packages/net/minecraftforge/event/level/$LevelEvent"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"

export class $SleepFinishedTimeEvent extends $LevelEvent {
constructor()
constructor(serverLevel0: $ServerLevel$$Type, long1: long, long2: long)

public "getNewTime"(): long
public "setTimeAddition"(long0: long): boolean
get "newTime"(): long
set "timeAddition"(value: long)
}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$CropGrowEvent$Post" {
import { $BlockEvent$CropGrowEvent } from "packages/net/minecraftforge/event/level/$BlockEvent$CropGrowEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent$CropGrowEvent$Post extends $BlockEvent$CropGrowEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type)

public "getOriginalState"(): $BlockState
get "originalState"(): $BlockState
}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent$PortalSpawnEvent" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $PortalShape, $PortalShape$$Type } from "packages/net/minecraft/world/level/portal/$PortalShape"

export class $BlockEvent$PortalSpawnEvent extends $BlockEvent {
constructor()
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, portalShape3: $PortalShape$$Type)

public "getPortalSize"(): $PortalShape
get "portalSize"(): $PortalShape
}
}

declare module "packages/net/minecraftforge/event/level/$ExplosionEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Explosion, $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"

export class $ExplosionEvent extends $Event {
constructor(level0: $Level$$Type, explosion1: $Explosion$$Type)
constructor()

public "getExplosion"(): $Explosion
public "getLevel"(): $Level
get "explosion"(): $Explosion
get "level"(): $Level
}
}

declare module "packages/net/minecraftforge/event/level/$ChunkTicketLevelUpdatedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ChunkHolder, $ChunkHolder$$Type } from "packages/net/minecraft/server/level/$ChunkHolder"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"

export class $ChunkTicketLevelUpdatedEvent extends $Event {
constructor()
constructor(serverLevel0: $ServerLevel$$Type, long1: long, int2: integer, int3: integer, chunkHolder4: $ChunkHolder$$Type)

public "getChunkHolder"(): $ChunkHolder
public "getChunkPos"(): long
public "getLevel"(): $ServerLevel
public "getNewTicketLevel"(): integer
public "getOldTicketLevel"(): integer
get "chunkHolder"(): $ChunkHolder
get "chunkPos"(): long
get "level"(): $ServerLevel
get "newTicketLevel"(): integer
get "oldTicketLevel"(): integer
}
}

declare module "packages/net/minecraftforge/event/level/$BlockEvent" {
import { $LevelAccessor, $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent extends $Event {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor()

public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

