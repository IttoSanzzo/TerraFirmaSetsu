declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$IPartyCreeper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPartyCreeper {
"supplementaries$isFestive"(): boolean
"supplementaries$setFestive"(boolean0: boolean): void
}

export namespace $IPartyCreeper {
const probejs$$marker: never
}
export abstract class $IPartyCreeper$$Static implements $IPartyCreeper {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/$SimpleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SimpleEvent {
}

export namespace $SimpleEvent {
const probejs$$marker: never
}
export abstract class $SimpleEvent$$Static implements $SimpleEvent {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/forge/$VillagerBrainEvent" {
import { $Villager, $Villager$$Type } from "packages/net/minecraft/world/entity/npc/$Villager"
import { $SensorType$$Type } from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import { $Sensor$$Type } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $Behavior, $Behavior$$Type } from "packages/net/minecraft/world/entity/ai/behavior/$Behavior"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ExpirableValue } from "packages/net/minecraft/world/entity/ai/memory/$ExpirableValue"
import { $Brain$$Type } from "packages/net/minecraft/world/entity/ai/$Brain"
import { $IVillagerBrainEvent } from "packages/net/mehvahdjukaar/moonlight/api/events/$IVillagerBrainEvent"
import { $Activity$$Type } from "packages/net/minecraft/world/entity/schedule/$Activity"
import { $ImmutableList$$Type } from "packages/com/google/common/collect/$ImmutableList"
import { $BehaviorControl$$Type } from "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl"
import { $VillagerBrainEventInternal } from "packages/net/mehvahdjukaar/moonlight/core/misc/$VillagerBrainEventInternal"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair, $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $MemoryModuleType } from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import { $Map } from "packages/java/util/$Map"

export class $VillagerBrainEvent extends $Event implements $IVillagerBrainEvent {
constructor()
constructor(brain: $Brain$$Type<$Villager$$Type>, villager: $Villager$$Type)

public "addOrReplaceActivity"(activity: $Activity$$Type, activityPackage: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<$Villager$$Type>>>): void
public "addSensor"(newSensor: $SensorType$$Type<$Sensor$$Type<$Villager$$Type>>): void
public "addTaskToActivity"<P extends $Pair<integer, $Behavior<$Villager>>>(activity: $Activity$$Type, task: P): boolean
public "getInternal"(): $VillagerBrainEventInternal
public "getMemories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
public "getVillager"(): $Villager
public "scheduleActivity"(activity: $Activity$$Type, startTime: integer, endTime: integer): void
get "internal"(): $VillagerBrainEventInternal
get "memories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
get "villager"(): $Villager
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/mixins/forge/$FireBlockAccessor" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $FireBlockAccessor {
"invokeTryCatchFire"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer, randomSource3: $RandomSource$$Type, int4: integer, direction5: $Direction$$Type): void
}

export namespace $FireBlockAccessor {
const probejs$$marker: never
}
export abstract class $FireBlockAccessor$$Static implements $FireBlockAccessor {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $CustomMapData$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import { $MapItemSavedData$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $CustomMapData<H extends $CustomMapData$DirtyCounter> {
"createDirtyCounter"(): H
"getType"(): $CustomMapData$Type<any>
"load"(compoundTag0: $CompoundTag$$Type): void
"loadUpdateTag"(compoundTag0: $CompoundTag$$Type): void
"onItemTooltip"(data: $MapItemSavedData$$Type, stack: $ItemStack$$Type): $Component
"onItemUpdate"(data: $MapItemSavedData$$Type, entity: $Entity$$Type): boolean
"persistOnCopyOrLock"(): boolean
"persistOnRescale"(): boolean
"save"(compoundTag0: $CompoundTag$$Type): void
"saveToUpdateTag"(compoundTag0: $CompoundTag$$Type, h1: H): void
"setDirty"(data: $MapItemSavedData$$Type, dirtySetter: $Consumer$$Type<H>): void
get "type"(): $CustomMapData$Type<any>
}

export namespace $CustomMapData {
const probejs$$marker: never
}
export abstract class $CustomMapData$$Static<H extends $CustomMapData$DirtyCounter> implements $CustomMapData<H> {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/forge/$LightningStruckBlockEvent" {
import { $LevelAccessor, $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $ILightningStruckBlockEvent } from "packages/net/mehvahdjukaar/moonlight/api/events/$ILightningStruckBlockEvent"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LightningBolt, $LightningBolt$$Type } from "packages/net/minecraft/world/entity/$LightningBolt"

export class $LightningStruckBlockEvent extends $BlockEvent implements $ILightningStruckBlockEvent {
constructor()
constructor(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type)

public static "create"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type): $ILightningStruckBlockEvent
public "getEntity"(): $LightningBolt
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "entity"(): $LightningBolt
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/client/$IModelPartExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IModelPartExtension {
"supp$getTextHeight"(): integer
"supp$getTextWidth"(): integer
"supp$setDimensions"(int0: integer, int1: integer): void
}

export namespace $IModelPartExtension {
const probejs$$marker: never
}
export abstract class $IModelPartExtension$$Static implements $IModelPartExtension {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType" {
import { $HolderSet } from "packages/net/minecraft/core/$HolderSet"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $CustomMapDecoration } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $MapBlockMarker } from "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker"
import { $Optional } from "packages/java/util/$Optional"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $MapDecorationType<D extends $CustomMapDecoration, M extends $MapBlockMarker<D>> {
"createEmptyMarker"(): M
"getAssociatedStructure"(): $Optional<$HolderSet<$Structure>>
"getCustomFactoryID"(): $ResourceLocation
"getDefaultMapColor"(): integer
"getWorldMarkerFromWorld"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): M
"isFromWorld"(): boolean
"loadDecorationFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): D
"loadMarkerFromNBT"(compoundTag0: $CompoundTag$$Type): M
get "associatedStructure"(): $Optional<$HolderSet<$Structure>>
get "customFactoryID"(): $ResourceLocation
get "defaultMapColor"(): integer
get "fromWorld"(): boolean
}

export namespace $MapDecorationType {
const probejs$$marker: never
}
export abstract class $MapDecorationType$$Static<D extends $CustomMapDecoration, M extends $MapBlockMarker<D>> implements $MapDecorationType<D, M> {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/misc/$CodecMapRegistry" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $MapCodec, $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $UnboundedMapCodec } from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import { $MapEncoder, $MapEncoder$$Type } from "packages/com/mojang/serialization/$MapEncoder"
import { $Encoder, $Encoder$$Type } from "packages/com/mojang/serialization/$Encoder"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Codec$ResultFunction$$Type } from "packages/com/mojang/serialization/$Codec$ResultFunction"
import { $MapRegistry } from "packages/net/mehvahdjukaar/moonlight/api/misc/$MapRegistry"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $List } from "packages/java/util/$List"
import { $Decoder, $Decoder$$Type } from "packages/com/mojang/serialization/$Decoder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $Keyable$$Type } from "packages/com/mojang/serialization/$Keyable"
import { $Decoder$Boxed, $Decoder$Boxed$$Type } from "packages/com/mojang/serialization/$Decoder$Boxed"
import { $MapDecoder$$Type } from "packages/com/mojang/serialization/$MapDecoder"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Decoder$Simple, $Decoder$Simple$$Type } from "packages/com/mojang/serialization/$Decoder$Simple"
import { $Decoder$Terminal, $Decoder$Terminal$$Type } from "packages/com/mojang/serialization/$Decoder$Terminal"
import { $SimpleMapCodec } from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"

export class $CodecMapRegistry<T> extends $MapRegistry<$Codec<T>> {
constructor(name: string)
/** @deprecated */
constructor()

public "boxed"(): $Decoder$Boxed<$Codec<T>>
public "byIdOrThrow"(int0: integer): $Codec<T>
public static "checkRange"<N extends (number & $Comparable<N>)>(n0: N, n1: N): $Function<N, $DataResult<N>>
public "comap"<B>(function0: $Function$$Type<B, $Codec<T>>): $Encoder<B>
public "comapFlatMap"<S>(function0: $Function$$Type<$Codec$$Type<T>, $DataResult<S>>, function1: $Function$$Type<S, $Codec<T>>): $Codec<S>
public static "compoundList"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $Codec<$List<$Pair<K, V>>>
public "decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<$Codec<T>, T>>
public "deprecated"(int0: integer): $Codec<$Codec<T>>
public "dispatch"<E>(function0: $Function$$Type<E, $Codec<T>>, function1: $Function$$Type<$Codec$$Type<T>, $Codec<E>>): $Codec<E>
public "dispatch"<E>(string0: string, function1: $Function$$Type<E, $Codec<T>>, function2: $Function$$Type<$Codec$$Type<T>, $Codec<E>>): $Codec<E>
public "dispatchMap"<E>(function0: $Function$$Type<E, $Codec<T>>, function1: $Function$$Type<$Codec$$Type<T>, $Codec<E>>): $MapCodec<E>
public "dispatchMap"<E>(string0: string, function1: $Function$$Type<E, $Codec<T>>, function2: $Function$$Type<$Codec$$Type<T>, $Codec<E>>): $MapCodec<E>
public "dispatchStable"<E>(function0: $Function$$Type<E, $Codec<T>>, function1: $Function$$Type<$Codec$$Type<T>, $Codec<E>>): $Codec<E>
public static "doubleRange"(double0: double, double1: double): $Codec<double>
public static "either"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Either<F, S>>
public static "empty"<A>(): $MapEncoder<A>
public "encodeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>, codec1: $Codec$$Type<T>): $DataResult<T>
public static "error"<A>(string0: string): $Encoder<A>
public "fieldOf"(string0: string): $MapCodec<$Codec<T>>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<$Codec<T>>>): $Encoder<B>
public "flatComapMap"<S>(function0: $Function$$Type<$Codec$$Type<T>, S>, function1: $Function$$Type<S, $DataResult<$Codec<T>>>): $Codec<S>
public "flatMap"<B>(function0: $Function$$Type<$Codec$$Type<T>, $DataResult<B>>): $Decoder<B>
public "flatXmap"<S>(function0: $Function$$Type<$Codec$$Type<T>, $DataResult<S>>, function1: $Function$$Type<S, $DataResult<$Codec<T>>>): $Codec<S>
public static "floatRange"(float0: float, float1: float): $Codec<float>
public "forEach"(consumer0: $Consumer$$Type<$Codec$$Type<T>>): void
public static "intRange"(int0: integer, int1: integer): $Codec<integer>
public static "list"<E>(codec0: $Codec$$Type<E>): $Codec<$List<E>>
public "listOf"(): $Codec<$List<$Codec<T>>>
public "map"<B>(function0: $Function$$Type<$Codec$$Type<T>, B>): $Decoder<B>
public static "mapEither"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Either<F, S>>
public static "mapPair"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Pair<F, S>>
public "mapResult"(resultFunction0: $Codec$ResultFunction$$Type<$Codec$$Type<T>>): $Codec<$Codec<T>>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>, supplier2: $Supplier$$Type<string>): $MapCodec<A>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>): $MapCodec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>, string2: string): $Codec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>): $Codec<A>
public static "ofBoxed"<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
public static "ofSimple"<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
public static "ofTerminal"<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
public static "optionalField"<F>(string0: string, codec1: $Codec$$Type<F>): $MapCodec<$Optional<F>>
public "optionalFieldOf"(string0: string, lifecycle1: $Lifecycle$$Type, codec2: $Codec$$Type<T>, lifecycle3: $Lifecycle$$Type): $MapCodec<$Codec<T>>
public "optionalFieldOf"(string0: string, codec1: $Codec$$Type<T>): $MapCodec<$Codec<T>>
public "optionalFieldOf"(string0: string, codec1: $Codec$$Type<T>, lifecycle2: $Lifecycle$$Type): $MapCodec<$Codec<T>>
public "optionalFieldOf"(string0: string): $MapCodec<$Optional<$Codec<T>>>
public "orElse"(unaryOperator0: $UnaryOperator$$Type<string>, codec1: $Codec$$Type<T>): $Codec<$Codec<T>>
public "orElse"(consumer0: $Consumer$$Type<string>, codec1: $Codec$$Type<T>): $Codec<$Codec<T>>
public "orElse"(codec0: $Codec$$Type<T>): $Codec<$Codec<T>>
public "orElseGet"(supplier0: $Supplier$$Type<$Codec<T>>): $Codec<$Codec<T>>
public "orElseGet"(unaryOperator0: $UnaryOperator$$Type<string>, supplier1: $Supplier$$Type<$Codec<T>>): $Codec<$Codec<T>>
public "orElseGet"(consumer0: $Consumer$$Type<string>, supplier1: $Supplier$$Type<$Codec<T>>): $Codec<$Codec<T>>
public static "pair"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Pair<F, S>>
public "parse"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Codec<T>>
public "parse"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$Codec<T>>
public "partialDispatch"<E>(string0: string, function1: $Function$$Type<E, $DataResult<$Codec<T>>>, function2: $Function$$Type<$Codec$$Type<T>, $DataResult<$Codec<E>>>): $Codec<E>
public "register"<B extends T>(name: string, value: $Codec$$Type<B>): $Codec<B>
public "register"<B extends T>(name: $ResourceLocation$$Type, value: $Codec$$Type<B>): $Codec<B>
public "simple"(): $Decoder$Simple<$Codec<T>>
public static "simpleMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>, keyable2: $Keyable$$Type): $SimpleMapCodec<K, V>
public "spliterator"(): $Spliterator<$Codec<T>>
public "stable"(): $Codec<$Codec<T>>
public "terminal"(): $Decoder$Terminal<$Codec<T>>
public static "unboundedMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $UnboundedMapCodec<K, V>
public static "unit"<A>(a0: A): $Codec<A>
public static "unit"<A>(supplier0: $Supplier$$Type<A>): $Codec<A>
public "withLifecycle"(lifecycle0: $Lifecycle$$Type): $Codec<$Codec<T>>
public "xmap"<S>(function0: $Function$$Type<$Codec$$Type<T>, S>, function1: $Function$$Type<S, $Codec<T>>): $Codec<S>
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$DispenserBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DispenserBlockAccessor {
}

export namespace $DispenserBlockAccessor {
const probejs$$marker: never
}
export abstract class $DispenserBlockAccessor$$Static implements $DispenserBlockAccessor {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$DispenserBlockEntityAccessor" {
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $DispenserBlockEntityAccessor {
"getItems"(): $NonNullList<$ItemStack>
get "items"(): $NonNullList<$ItemStack>
}

export namespace $DispenserBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $DispenserBlockEntityAccessor$$Static implements $DispenserBlockEntityAccessor {
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart/$ILevelEventRedirect" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $ILevelEventRedirect {
"supp$setRedirected"(boolean0: boolean, vec31: $Vec3$$Type): void
}

export namespace $ILevelEventRedirect {
function supp$tryRedirect(serverLevel: $ServerLevel$$Type, pPlayer: $Player$$Type, vec3: $Vec3$$Type, pType: integer, pPos: $BlockPos$$Type, pData: integer): boolean
}
export abstract class $ILevelEventRedirect$$Static implements $ILevelEventRedirect {
static "supp$tryRedirect"(serverLevel: $ServerLevel$$Type, pPlayer: $Player$$Type, vec3: $Vec3$$Type, pType: integer, pPos: $BlockPos$$Type, pData: integer): boolean
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedPistonTile" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $IExtendedPistonTile {
"tickMovedBlock"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
}

export namespace $IExtendedPistonTile {
const probejs$$marker: never
}
export abstract class $IExtendedPistonTile$$Static implements $IExtendedPistonTile {
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/block/$IConvertableHorse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IConvertableHorse {
"supp$isConverting"(): boolean
}

export namespace $IConvertableHorse {
const probejs$$marker: never
}
export abstract class $IConvertableHorse$$Static implements $IConvertableHorse {
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/block/$BoilingWaterCauldronBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BooleanProperty } from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Biome$Precipitation$$Type } from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Optional } from "packages/java/util/$Optional"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LayeredCauldronBlock } from "packages/net/minecraft/world/level/block/$LayeredCauldronBlock"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $CauldronInteraction$$Type } from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Set } from "packages/java/util/$Set"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $BoilingWaterCauldronBlock extends $LayeredCauldronBlock {
static readonly "BOILING": $BooleanProperty

constructor(properties: $BlockBehaviour$Properties$$Type, fillPredicate: $Predicate$$Type<$Biome$Precipitation$$Type>, interactions: $Map$$Type<$Item$$Type, $CauldronInteraction$$Type>)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "allowsTreasure"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getArcanaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlacklistedEnchantments"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Set<$Enchantment>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getBonusClues"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): integer
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public static "getWaterColor"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, i: integer): integer
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$IFluteParrot" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export interface $IFluteParrot {
"supplementaries$setPartyByFlute"(player0: $Player$$Type): void
}

export namespace $IFluteParrot {
const probejs$$marker: never
}
export abstract class $IFluteParrot$$Static implements $IFluteParrot {
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/mixins/forge/$MobBucketItemAccessor" {
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"

export interface $MobBucketItemAccessor {
"invokeGetFishType"(): $EntityType<any>
}

export namespace $MobBucketItemAccessor {
const probejs$$marker: never
}
export abstract class $MobBucketItemAccessor$$Static implements $MobBucketItemAccessor {
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$IBellConnection$Type" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $IBellConnection$Type extends $Enum<$IBellConnection$Type> implements $StringRepresentable {
static readonly "CHAIN": $IBellConnection$Type
static readonly "NONE": $IBellConnection$Type
static readonly "ROPE": $IBellConnection$Type

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "isChain"(): boolean
public "isEmpty"(): boolean
public "isRope"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(name: string): $IBellConnection$Type
public static "values"(): $IBellConnection$Type[]
get "serializedName"(): string
get "chain"(): boolean
get "empty"(): boolean
get "rope"(): boolean
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference$Empty" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $SlotReference, $SlotReference$$Type } from "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $IQuiverEntity$$Type } from "packages/net/mehvahdjukaar/supplementaries/api/$IQuiverEntity"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SlotReference$Empty extends $Record implements $SlotReference {
static readonly "CODEC": $Codec<$SlotReference$Empty>

constructor()

public static "decode"(buf: $FriendlyByteBuf$$Type): $SlotReference
public static "encode"(buf: $FriendlyByteBuf$$Type, slotReference: $SlotReference$$Type): void
public "get"(player: $LivingEntity$$Type): $ItemStack
public "getCodec"(): $Codec<$SlotReference$Empty>
public "getItem"(player: $LivingEntity$$Type): $Item
public static "hand"(pUsedHand: $InteractionHand$$Type): $SlotReference
public static "inv"(invSlot: integer): $SlotReference
public "isEmpty"(): boolean
public static "quiver"(e: $IQuiverEntity$$Type): $SlotReference
public static "slot"(equipmentSlot: $EquipmentSlot$$Type): $SlotReference
get "codec"(): $Codec<$SlotReference$Empty>
get "empty"(): boolean
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/block/$IBlockHolder" {
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IBlockHolder {
"getHeldBlock"(): $BlockState
"getHeldBlock"(int0: integer): $BlockState
"setHeldBlock"(blockState0: $BlockState$$Type, int1: integer): boolean
"setHeldBlock"(state: $BlockState$$Type): boolean
get "heldBlock"(): $BlockState
set "heldBlock"(value: $BlockState$$Type)
}

export namespace $IBlockHolder {
const probejs$$marker: never
}
export abstract class $IBlockHolder$$Static implements $IBlockHolder {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedItem" {
import { $AdditionalItemPlacement, $AdditionalItemPlacement$$Type } from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"

export interface $IExtendedItem {
"moonlight$addAdditionalBehavior"(additionalItemPlacement0: $AdditionalItemPlacement$$Type): void
"moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
"moonlight$getClientAnimationExtension"(): any
"moonlight$setClientAnimationExtension"(object0: any): void
}

export namespace $IExtendedItem {
const probejs$$marker: never
}
export abstract class $IExtendedItem$$Static implements $IExtendedItem {
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $SlotReference$Empty } from "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference$Empty"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $CodecMapRegistry } from "packages/net/mehvahdjukaar/moonlight/api/misc/$CodecMapRegistry"
import { $IQuiverEntity$$Type } from "packages/net/mehvahdjukaar/supplementaries/api/$IQuiverEntity"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $SlotReference {
"get"(livingEntity0: $LivingEntity$$Type): $ItemStack
"getCodec"(): $Codec<$SlotReference>
"getItem"(player: $LivingEntity$$Type): $Item
"isEmpty"(): boolean
get "codec"(): $Codec<$SlotReference>
get "empty"(): boolean
}

export namespace $SlotReference {
const EMPTY: $SlotReference$Empty
const REGISTRY: $CodecMapRegistry<$SlotReference>
const STREAM_CODEC: $Codec<$SlotReference>
function decode(buf: $FriendlyByteBuf$$Type): $SlotReference
function encode(buf: $FriendlyByteBuf$$Type, slotReference: $SlotReference$$Type): void
function hand(pUsedHand: $InteractionHand$$Type): $SlotReference
function inv(invSlot: integer): $SlotReference
function quiver(e: $IQuiverEntity$$Type): $SlotReference
function slot(equipmentSlot: $EquipmentSlot$$Type): $SlotReference
}
export abstract class $SlotReference$$Static implements $SlotReference {
static readonly "EMPTY": $SlotReference$Empty
static readonly "REGISTRY": $CodecMapRegistry<$SlotReference>
static readonly "STREAM_CODEC": $Codec<$SlotReference>

static "decode"(buf: $FriendlyByteBuf$$Type): $SlotReference
static "encode"(buf: $FriendlyByteBuf$$Type, slotReference: $SlotReference$$Type): void
static "hand"(pUsedHand: $InteractionHand$$Type): $SlotReference
static "inv"(invSlot: integer): $SlotReference
static "quiver"(e: $IQuiverEntity$$Type): $SlotReference
static "slot"(equipmentSlot: $EquipmentSlot$$Type): $SlotReference
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$VillagerBrainEventInternal" {
import { $Villager, $Villager$$Type } from "packages/net/minecraft/world/entity/npc/$Villager"
import { $SensorType$$Type } from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import { $Sensor$$Type } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $Behavior, $Behavior$$Type } from "packages/net/minecraft/world/entity/ai/behavior/$Behavior"
import { $ExpirableValue } from "packages/net/minecraft/world/entity/ai/memory/$ExpirableValue"
import { $Brain$$Type } from "packages/net/minecraft/world/entity/ai/$Brain"
import { $Activity$$Type } from "packages/net/minecraft/world/entity/schedule/$Activity"
import { $ImmutableList$$Type } from "packages/com/google/common/collect/$ImmutableList"
import { $BehaviorControl$$Type } from "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair, $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $MemoryModuleType } from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import { $Map } from "packages/java/util/$Map"

export class $VillagerBrainEventInternal {
constructor(brain: $Brain$$Type<$Villager$$Type>, villager: $Villager$$Type)

public "addOrReplaceActivity"(activity: $Activity$$Type, activityPackage: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<$Villager$$Type>>>): void
public "addSensor"(newSensor: $SensorType$$Type<$Sensor$$Type<$Villager$$Type>>): void
public "addTaskToActivity"<P extends $Pair<integer, $Behavior<$Villager>>>(activity: $Activity$$Type, task: P): boolean
public "getMemories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
public "getVillager"(): $Villager
public "scheduleActivity"(activity: $Activity$$Type, startTime: integer, endTime: integer): void
get "memories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
get "villager"(): $Villager
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type" {
import { $Record } from "packages/java/lang/$Record"
import { $MapItemSavedData$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import { $CustomMapData } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $CustomMapData$Type<T extends $CustomMapData<any>> extends $Record {
constructor(id: $ResourceLocation$$Type, factory: $Supplier$$Type<T>)

public "factory"(): $Supplier<T>
public "get"(mapData: $MapItemSavedData$$Type): T
public "id"(): $ResourceLocation
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/entity/$IVisualTransformationProvider" {
import { $Matrix4f } from "packages/org/joml/$Matrix4f"

export interface $IVisualTransformationProvider {
"amendments$getVisualTransformation"(float0: float): $Matrix4f
}

export namespace $IVisualTransformationProvider {
const probejs$$marker: never
}
export abstract class $IVisualTransformationProvider$$Static implements $IVisualTransformationProvider {
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/mixins/$AgeableListAccessor" {
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ModelPart } from "packages/net/minecraft/client/model/geom/$ModelPart"

export interface $AgeableListAccessor {
"invokeBodyParts"(): $Iterable<$ModelPart>
}

export namespace $AgeableListAccessor {
const probejs$$marker: never
}
export abstract class $AgeableListAccessor$$Static implements $AgeableListAccessor {
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/api/$IQuiverEntity" {
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $IQuiverEntity {
"supplementaries$getQuiver"(): $ItemStack
"supplementaries$hasQuiver"(): boolean
"supplementaries$setQuiver"(itemStack0: $ItemStack$$Type): void
}

export namespace $IQuiverEntity {
const probejs$$marker: never
}
export abstract class $IQuiverEntity$$Static implements $IQuiverEntity {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $MapDecorationType, $MapDecorationType$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType"

export class $CustomMapDecoration {
constructor(type: $MapDecorationType$$Type<any, any>, buffer: $FriendlyByteBuf$$Type)
constructor(type: $MapDecorationType$$Type<any, any>, x: byte, y: byte, rot: byte, displayName: $Component$$Type)

public "getDisplayName"(): $Component
public "getRot"(): byte
public "getType"(): $MapDecorationType<any, any>
public "getX"(): byte
public "getY"(): byte
public "saveToBuffer"(buffer: $FriendlyByteBuf$$Type): void
public "setDisplayName"(displayName: $Component$$Type): void
public "setRot"(rot: byte): void
public "setX"(x: byte): void
public "setY"(y: byte): void
get "displayName"(): $Component
get "rot"(): byte
get "type"(): $MapDecorationType<any, any>
get "x"(): byte
get "y"(): byte
set "displayName"(value: $Component$$Type)
set "rot"(value: byte)
set "x"(value: byte)
set "y"(value: byte)
}
}

declare module "packages/net/mehvahdjukaar/amendments/reg/$ModBlockProperties$PostType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $ModBlockProperties$PostType extends $Enum<$ModBlockProperties$PostType> implements $StringRepresentable {
static readonly "BEAM": $ModBlockProperties$PostType
static readonly "PALISADE": $ModBlockProperties$PostType
static readonly "POST": $ModBlockProperties$PostType
static readonly "WALL": $ModBlockProperties$PostType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "get"(state: $BlockState$$Type): $ModBlockProperties$PostType
public static "get"(state: $BlockState$$Type, needsFullHeight: boolean): $ModBlockProperties$PostType
public "getName"(): string
public "getOffset"(): float
public "getSerializedName"(): string
public "getWidth"(): integer
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(name: string): $ModBlockProperties$PostType
public static "values"(): $ModBlockProperties$PostType[]
get "name"(): string
get "offset"(): float
get "serializedName"(): string
get "width"(): integer
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IHoldingPlayerExtension" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $CustomMapData$Type$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import { $CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"

export interface $IHoldingPlayerExtension {
"moonlight$setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(type0: $CustomMapData$Type$$Type<any>, consumer1: $Consumer$$Type<H>): void
"moonlight$setCustomMarkersDirty"(): void
}

export namespace $IHoldingPlayerExtension {
const probejs$$marker: never
}
export abstract class $IHoldingPlayerExtension$$Static implements $IHoldingPlayerExtension {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomMapData$DirtyCounter {
"clearDirty"(): void
"isDirty"(): boolean
get "dirty"(): boolean
}

export namespace $CustomMapData$DirtyCounter {
const probejs$$marker: never
}
export abstract class $CustomMapData$DirtyCounter$$Static implements $CustomMapData$DirtyCounter {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$BlockPlacerItem" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $FoodBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$FoodBuilder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FoodProperties, $FoodProperties$$Type } from "packages/net/minecraft/world/food/$FoodProperties"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $EnchantmentInstance, $EnchantmentInstance$$Type } from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $BlockPlaceContext$$Type } from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $Multimap } from "packages/com/google/common/collect/$Multimap"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Item$Properties$$Type } from "packages/net/minecraft/world/item/$Item$Properties"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $MutableToolTier$$Type } from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import { $EnderMan$$Type } from "packages/net/minecraft/world/entity/monster/$EnderMan"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $BlockItem } from "packages/net/minecraft/world/item/$BlockItem"
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType$$Type } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $ICapabilityProvider } from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import { $AdditionalItemPlacement, $AdditionalItemPlacement$$Type } from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import { $AttributeModifier } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $Map } from "packages/java/util/$Map"

export class $BlockPlacerItem extends $BlockItem {
constructor(pBlock: $Block$$Type, pProperties: $Item$Properties$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "forciblyAllowsTableEnchantment"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public static "get"(): $BlockPlacerItem
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getLightColor"(player: $Player$$Type, stack: $ItemStack$$Type): $Vector3f
public "getLightEmission"(player: $Player$$Type, stack: $ItemStack$$Type): integer
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isTreasureAllowed"(itemStack0: $ItemStack$$Type, boolean1: boolean): boolean
public "m_40610_"(pContext: $BlockPlaceContext$$Type, pState: $BlockState$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "mimicGetPlacementState"(pContext: $BlockPlaceContext$$Type, toPlace: $Block$$Type): $BlockState
public "mimicPlace"(pContext: $BlockPlaceContext$$Type, toPlace: $Block$$Type, overrideSound: $SoundType$$Type): $InteractionResult
public "mimicUseOn"(pContext: $UseOnContext$$Type, toPlace: $Block$$Type, foodProperties: $FoodProperties$$Type): $InteractionResult
public "moonlight$addAdditionalBehavior"(additionalItemPlacement0: $AdditionalItemPlacement$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(object0: any): void
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEnchantment"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$EnchantmentInstance$$Type>): $ItemStack
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "selectEnchantments"(list0: $List$$Type<$EnchantmentInstance$$Type>, randomSource1: $RandomSource$$Type, itemStack2: $ItemStack$$Type, int3: integer, float4: float, float5: float, boolean6: boolean): $List<$EnchantmentInstance>
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/$IVillagerBrainEvent" {
import { $Villager, $Villager$$Type } from "packages/net/minecraft/world/entity/npc/$Villager"
import { $SensorType$$Type } from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import { $Sensor$$Type } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $Behavior, $Behavior$$Type } from "packages/net/minecraft/world/entity/ai/behavior/$Behavior"
import { $ExpirableValue } from "packages/net/minecraft/world/entity/ai/memory/$ExpirableValue"
import { $SimpleEvent } from "packages/net/mehvahdjukaar/moonlight/api/events/$SimpleEvent"
import { $Activity$$Type } from "packages/net/minecraft/world/entity/schedule/$Activity"
import { $ImmutableList$$Type } from "packages/com/google/common/collect/$ImmutableList"
import { $BehaviorControl$$Type } from "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl"
import { $VillagerBrainEventInternal } from "packages/net/mehvahdjukaar/moonlight/core/misc/$VillagerBrainEventInternal"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair, $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $MemoryModuleType } from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import { $Map } from "packages/java/util/$Map"

export interface $IVillagerBrainEvent extends $SimpleEvent {
"addOrReplaceActivity"(activity0: $Activity$$Type, immutableList1: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<$Villager$$Type>>>): void
"addSensor"(sensorType0: $SensorType$$Type<$Sensor$$Type<$Villager$$Type>>): void
"addTaskToActivity"<P extends $Pair<integer, $Behavior<$Villager>>>(activity0: $Activity$$Type, p1: P): boolean
"getInternal"(): $VillagerBrainEventInternal
"getMemories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
"getVillager"(): $Villager
"scheduleActivity"(activity0: $Activity$$Type, int1: integer, int2: integer): void
get "internal"(): $VillagerBrainEventInternal
get "memories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
get "villager"(): $Villager
}

export namespace $IVillagerBrainEvent {
const probejs$$marker: never
}
export abstract class $IVillagerBrainEvent$$Static implements $IVillagerBrainEvent {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/forge/$FireConsumeBlockEvent" {
import { $LevelAccessor } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $IFireConsumeBlockEvent } from "packages/net/mehvahdjukaar/moonlight/api/events/$IFireConsumeBlockEvent"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEvent } from "packages/net/minecraftforge/event/level/$BlockEvent"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $FireConsumeBlockEvent extends $BlockEvent implements $IFireConsumeBlockEvent {
constructor()
constructor(world: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type)

public static "create"(pos: $BlockPos$$Type, level: $Level$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type): $IFireConsumeBlockEvent
public "getAge"(): integer
public "getChance"(): integer
public "getFace"(): $Direction
public "getFinalState"(): $BlockState
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
public "getState"(): $BlockState
public "setFinalState"(state: $BlockState$$Type): void
get "age"(): integer
get "chance"(): integer
get "face"(): $Direction
get "finalState"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "state"(): $BlockState
set "finalState"(value: $BlockState$$Type)
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/mixins/$LivingEntityAccessor" {
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $LivingEntityAccessor {
"invokeShouldDropLoot"(): boolean
"setUseItem"(itemStack0: $ItemStack$$Type): void
set "useItem"(value: $ItemStack$$Type)
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement" {
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $BlockPlacerItem } from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$BlockPlacerItem"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $BlockPlaceContext, $BlockPlaceContext$$Type } from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import { $FoodProperties$$Type } from "packages/net/minecraft/world/food/$FoodProperties"

export class $AdditionalItemPlacement {
constructor(placeable: $Block$$Type)

public static "getBlockPlacer"(): $BlockPlacerItem
public "getPlacedBlock"(): $Block
public "overrideGetPlacementState"(pContext: $BlockPlaceContext$$Type): $BlockState
public "overridePlace"(pContext: $BlockPlaceContext$$Type): $InteractionResult
public "overrideUpdatePlacementContext"(context: $BlockPlaceContext$$Type): $BlockPlaceContext
public "overrideUseOn"(pContext: $UseOnContext$$Type, foodProperties: $FoodProperties$$Type): $InteractionResult
get "placedBlock"(): $Block
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/misc/$IMapDataPacketExtension" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $MapItemSavedData$MapPatch } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData$MapPatch"
import { $CustomMapDecoration$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"

export interface $IMapDataPacketExtension {
"moonlight$getColorPatch"(): $MapItemSavedData$MapPatch
"moonlight$getCustomMapDataTag"(): $CompoundTag
"moonlight$getDimension"(): $ResourceKey<$Level>
"moonlight$sendCustomDecorations"(collection0: $Collection$$Type<$CustomMapDecoration$$Type>): void
"moonlight$sendCustomMapDataTag"(compoundTag0: $CompoundTag$$Type): void
}

export namespace $IMapDataPacketExtension {
const probejs$$marker: never
}
export abstract class $IMapDataPacketExtension$$Static implements $IMapDataPacketExtension {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $CustomMapDecoration } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import { $MapItemSavedData$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MapDecorationType } from "packages/net/mehvahdjukaar/moonlight/api/map/type/$MapDecorationType"

export class $MapBlockMarker<D extends $CustomMapDecoration> {
static readonly "HAS_SMALL_TEXTURE_FLAG": integer

public "createDecorationFromMarker"(data: $MapItemSavedData$$Type): D
public "getFlags"(): integer
public "getMarkerId"(): string
public "getName"(): $Component
public "getPos"(): $BlockPos
public "getRotation"(): float
public "getType"(): $MapDecorationType<D, any>
public "getTypeId"(): string
public "hasFlag"(flag: integer): boolean
public "loadFromNBT"(compound: $CompoundTag$$Type): void
public "saveToNBT"(): $CompoundTag
/** @deprecated */
public "saveToNBT"(compound: $CompoundTag$$Type): $CompoundTag
public "setName"(name: $Component$$Type): void
public "setPersistent"(persistent: boolean): void
public "setPos"(pos: $BlockPos$$Type): void
public "setRotation"(rot: integer): void
public "shouldRefresh"(): boolean
public "shouldSave"(): boolean
get "flags"(): integer
get "markerId"(): string
get "name"(): $Component
get "pos"(): $BlockPos
get "rotation"(): float
get "type"(): $MapDecorationType<D, any>
get "typeId"(): string
set "name"(value: $Component$$Type)
set "persistent"(value: boolean)
set "pos"(value: $BlockPos$$Type)
set "rotation"(value: integer)
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/$ILightningStruckBlockEvent" {
import { $LevelAccessor, $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SimpleEvent } from "packages/net/mehvahdjukaar/moonlight/api/events/$SimpleEvent"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LightningBolt, $LightningBolt$$Type } from "packages/net/minecraft/world/entity/$LightningBolt"

export interface $ILightningStruckBlockEvent extends $SimpleEvent {
"getEntity"(): $LightningBolt
"getLevel"(): $LevelAccessor
"getPos"(): $BlockPos
"getState"(): $BlockState
get "entity"(): $LightningBolt
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "state"(): $BlockState
}

export namespace $ILightningStruckBlockEvent {
function create(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type): $ILightningStruckBlockEvent
}
export abstract class $ILightningStruckBlockEvent$$Static implements $ILightningStruckBlockEvent {
static "create"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type): $ILightningStruckBlockEvent
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/$IFireConsumeBlockEvent" {
import { $LevelAccessor } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $SimpleEvent } from "packages/net/mehvahdjukaar/moonlight/api/events/$SimpleEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $IFireConsumeBlockEvent extends $SimpleEvent {
"getAge"(): integer
"getChance"(): integer
"getFace"(): $Direction
"getFinalState"(): $BlockState
"getLevel"(): $LevelAccessor
"getPos"(): $BlockPos
"getState"(): $BlockState
"setFinalState"(blockState0: $BlockState$$Type): void
get "age"(): integer
get "chance"(): integer
get "face"(): $Direction
get "finalState"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "state"(): $BlockState
set "finalState"(value: $BlockState$$Type)
}

export namespace $IFireConsumeBlockEvent {
function create(pos: $BlockPos$$Type, level: $Level$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type): $IFireConsumeBlockEvent
}
export abstract class $IFireConsumeBlockEvent$$Static implements $IFireConsumeBlockEvent {
static "create"(pos: $BlockPos$$Type, level: $Level$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type): $IFireConsumeBlockEvent
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/accessor/$BrainAccessor" {
import { $Behavior } from "packages/net/minecraft/world/entity/ai/behavior/$Behavior"
import { $SensorType } from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import { $Sensor } from "packages/net/minecraft/world/entity/ai/sensing/$Sensor"
import { $Activity } from "packages/net/minecraft/world/entity/schedule/$Activity"
import { $Set } from "packages/java/util/$Set"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Map } from "packages/java/util/$Map"

export interface $BrainAccessor<E extends $LivingEntity> {
"getAvailableBehaviorsByPriority"(): $Map<integer, $Map<$Activity, $Set<$Behavior<E>>>>
"getSensors"(): $Map<$SensorType<$Sensor<E>>, $Sensor<E>>
get "availableBehaviorsByPriority"(): $Map<integer, $Map<$Activity, $Set<$Behavior<E>>>>
get "sensors"(): $Map<$SensorType<$Sensor<E>>, $Sensor<E>>
}

export namespace $BrainAccessor {
const probejs$$marker: never
}
export abstract class $BrainAccessor$$Static<E extends $LivingEntity> implements $BrainAccessor<E> {
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/tile/$HangingSignTileExtension" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ModBlockProperties$PostType } from "packages/net/mehvahdjukaar/amendments/reg/$ModBlockProperties$PostType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $SwingAnimation } from "packages/net/mehvahdjukaar/amendments/common/$SwingAnimation"

export class $HangingSignTileExtension {
constructor(state: $BlockState$$Type)

public "canSwing"(): boolean
public "clientTick"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): void
public "getBackItem"(): $ItemStack
public "getClientAnimation"(): $SwingAnimation
public "getFrontItem"(): $ItemStack
public "getLeftAttachment"(): $ModBlockProperties$PostType
public "getRightAttachment"(): $ModBlockProperties$PostType
public "load"(tag: $CompoundTag$$Type): void
public "saveAdditional"(tag: $CompoundTag$$Type): void
public "setBackItem"(backItem: $ItemStack$$Type): void
public "setFrontItem"(frontItem: $ItemStack$$Type): void
public "updateAttachments"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): void
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): void
get "backItem"(): $ItemStack
get "clientAnimation"(): $SwingAnimation
get "frontItem"(): $ItemStack
get "leftAttachment"(): $ModBlockProperties$PostType
get "rightAttachment"(): $ModBlockProperties$PostType
set "backItem"(value: $ItemStack$$Type)
set "frontItem"(value: $ItemStack$$Type)
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$ExtendedHangingSign" {
import { $SwingAnimation } from "packages/net/mehvahdjukaar/amendments/common/$SwingAnimation"
import { $HangingSignTileExtension } from "packages/net/mehvahdjukaar/amendments/common/tile/$HangingSignTileExtension"
import { $ISwingingTile } from "packages/net/mehvahdjukaar/amendments/common/$ISwingingTile"

export interface $ExtendedHangingSign extends $ISwingingTile {
"amendments$getAnimation"(): $SwingAnimation
"amendments$getExtension"(): $HangingSignTileExtension
}

export namespace $ExtendedHangingSign {
const probejs$$marker: never
}
export abstract class $ExtendedHangingSign$$Static implements $ExtendedHangingSign {
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/utils/$IQuiverPlayer" {
import { $SlotReference, $SlotReference$$Type } from "packages/net/mehvahdjukaar/supplementaries/common/utils/$SlotReference"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IQuiverEntity } from "packages/net/mehvahdjukaar/supplementaries/api/$IQuiverEntity"

export interface $IQuiverPlayer extends $IQuiverEntity {
"supplementaries$getQuiver"(): $ItemStack
"supplementaries$getQuiverSlot"(): $SlotReference
"supplementaries$hasQuiver"(): boolean
"supplementaries$setQuiver"(itemStack0: $ItemStack$$Type): void
"supplementaries$setQuiverSlot"(slotReference0: $SlotReference$$Type): void
}

export namespace $IQuiverPlayer {
const probejs$$marker: never
}
export abstract class $IQuiverPlayer$$Static implements $IQuiverPlayer {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/$IDropItemOnDeathEvent" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $SimpleEvent } from "packages/net/mehvahdjukaar/moonlight/api/events/$SimpleEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDropItemOnDeathEvent extends $SimpleEvent {
"getItemStack"(): $ItemStack
"getPlayer"(): $Player
"getReturnItemStack"(): $ItemStack
"isBeforeDrop"(): boolean
"isCanceled"(): boolean
"setCanceled"(boolean0: boolean): void
"setReturnItemStack"(itemStack0: $ItemStack$$Type): void
get "itemStack"(): $ItemStack
get "player"(): $Player
get "returnItemStack"(): $ItemStack
get "beforeDrop"(): boolean
get "canceled"(): boolean
set "canceled"(value: boolean)
set "returnItemStack"(value: $ItemStack$$Type)
}

export namespace $IDropItemOnDeathEvent {
function create(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean): $IDropItemOnDeathEvent
}
export abstract class $IDropItemOnDeathEvent$$Static implements $IDropItemOnDeathEvent {
static "create"(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean): $IDropItemOnDeathEvent
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/goals/$ISuppEvoker" {
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ISuppEvoker {
"supplementaries$getCustomWololoo"(): $LivingEntity
"supplementaries$setCustomWololoo"(livingEntity0: $LivingEntity$$Type): void
"supplementaries$setSpellCastingTime"(int0: integer): void
}

export namespace $ISuppEvoker {
const probejs$$marker: never
}
export abstract class $ISuppEvoker$$Static implements $ISuppEvoker {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/map/$ExpandedMapData" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $CustomMapDecoration } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapDecoration"
import { $MapItemSavedData } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import { $CustomMapData$Type$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$Type"
import { $MapBlockMarker, $MapBlockMarker$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/markers/$MapBlockMarker"
import { $CustomMapData } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$$Type } from "packages/net/mehvahdjukaar/moonlight/api/map/$CustomMapData$DirtyCounter"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Map } from "packages/java/util/$Map"

export interface $ExpandedMapData {
"addCustomMarker"<M extends $MapBlockMarker<any>>(m0: M): void
"copy"(): $MapItemSavedData
"getCustomData"(): $Map<$ResourceLocation, $CustomMapData<any>>
"getCustomDecorations"(): $Map<string, $CustomMapDecoration>
"getCustomMarkers"(): $Map<string, $MapBlockMarker<any>>
"getVanillaDecorationSize"(): integer
"removeCustomMarker"(string0: string): boolean
"resetCustomDecoration"(): void
"setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(type0: $CustomMapData$Type$$Type<any>, consumer1: $Consumer$$Type<H>): void
"setCustomDecorationsDirty"(): void
"toggleCustomDecoration"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): boolean
get "customData"(): $Map<$ResourceLocation, $CustomMapData<any>>
get "customDecorations"(): $Map<string, $CustomMapDecoration>
get "customMarkers"(): $Map<string, $MapBlockMarker<any>>
get "vanillaDecorationSize"(): integer
}

export namespace $ExpandedMapData {
const probejs$$marker: never
}
export abstract class $ExpandedMapData$$Static implements $ExpandedMapData {
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$ISwingingTile" {
import { $SwingAnimation } from "packages/net/mehvahdjukaar/amendments/common/$SwingAnimation"

export interface $ISwingingTile {
"amendments$getAnimation"(): $SwingAnimation
}

export namespace $ISwingingTile {
const probejs$$marker: never
}
export abstract class $ISwingingTile$$Static implements $ISwingingTile {
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/api/$IAntiqueTextProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAntiqueTextProvider {
"supp$hasAntiqueInk"(): boolean
"supp$setAntiqueInk"(boolean0: boolean): void
}

export namespace $IAntiqueTextProvider {
const probejs$$marker: never
}
export abstract class $IAntiqueTextProvider$$Static implements $IAntiqueTextProvider {
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$IBetterJukebox" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBetterJukebox {
"amendments$getRotation"(float0: float): float
}

export namespace $IBetterJukebox {
const probejs$$marker: never
}
export abstract class $IBetterJukebox$$Static implements $IBetterJukebox {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/misc/$MapRegistry" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $MapCodec, $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $UnboundedMapCodec } from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import { $MapEncoder, $MapEncoder$$Type } from "packages/com/mojang/serialization/$MapEncoder"
import { $Encoder, $Encoder$$Type } from "packages/com/mojang/serialization/$Encoder"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Codec$ResultFunction$$Type } from "packages/com/mojang/serialization/$Codec$ResultFunction"
import { $IdMap } from "packages/net/minecraft/core/$IdMap"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $List } from "packages/java/util/$List"
import { $Decoder, $Decoder$$Type } from "packages/com/mojang/serialization/$Decoder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $Keyable$$Type } from "packages/com/mojang/serialization/$Keyable"
import { $Decoder$Boxed, $Decoder$Boxed$$Type } from "packages/com/mojang/serialization/$Decoder$Boxed"
import { $MapDecoder$$Type } from "packages/com/mojang/serialization/$MapDecoder"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Set } from "packages/java/util/$Set"
import { $Decoder$Simple, $Decoder$Simple$$Type } from "packages/com/mojang/serialization/$Decoder$Simple"
import { $Decoder$Terminal, $Decoder$Terminal$$Type } from "packages/com/mojang/serialization/$Decoder$Terminal"
import { $SimpleMapCodec } from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $Iterator } from "packages/java/util/$Iterator"
import { $CodecMapRegistry } from "packages/net/mehvahdjukaar/moonlight/api/misc/$CodecMapRegistry"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export class $MapRegistry<T> implements $IdMap<T>, $Codec<T> {
constructor(name: string)

public "boxed"(): $Decoder$Boxed<T>
public "byId"(id: integer): T
public "byIdOrThrow"(int0: integer): T
public static "checkRange"<N extends (number & $Comparable<N>)>(n0: N, n1: N): $Function<N, $DataResult<N>>
public "clear"(): void
public "comap"<B>(function0: $Function$$Type<B, T>): $Encoder<B>
public "comapFlatMap"<S>(function0: $Function$$Type<T, $DataResult<S>>, function1: $Function$$Type<S, T>): $Codec<S>
public static "compoundList"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $Codec<$List<$Pair<K, V>>>
public "contains"(id: integer): boolean
public "containsKey"(name: $ResourceLocation$$Type): boolean
public "decode"<U>(ops: $DynamicOps$$Type<U>, json: U): $DataResult<$Pair<T, U>>
public "decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<T, T>>
public "deprecated"(int0: integer): $Codec<T>
public "dispatch"<E>(type: $Function$$Type<E, T>): $Codec<E>
public "dispatch"<E>(function0: $Function$$Type<E, T>, function1: $Function$$Type<T, $Codec<E>>): $Codec<E>
public "dispatch"<E>(string0: string, function1: $Function$$Type<E, T>, function2: $Function$$Type<T, $Codec<E>>): $Codec<E>
public "dispatchMap"<E>(function0: $Function$$Type<E, T>, function1: $Function$$Type<T, $Codec<E>>): $MapCodec<E>
public "dispatchMap"<E>(string0: string, function1: $Function$$Type<E, T>, function2: $Function$$Type<T, $Codec<E>>): $MapCodec<E>
public "dispatchStable"<E>(function0: $Function$$Type<E, T>, function1: $Function$$Type<T, $Codec<E>>): $Codec<E>
public static "doubleRange"(double0: double, double1: double): $Codec<double>
public static "either"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Either<F, S>>
public static "empty"<A>(): $MapEncoder<A>
public "encode"<U>(object: T, ops: $DynamicOps$$Type<U>, prefix: U): $DataResult<U>
public "encodeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<T>
public static "error"<A>(string0: string): $Encoder<A>
public "fieldOf"(string0: string): $MapCodec<T>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<T>>): $Encoder<B>
public "flatComapMap"<S>(function0: $Function$$Type<T, S>, function1: $Function$$Type<S, $DataResult<T>>): $Codec<S>
public "flatMap"<B>(function0: $Function$$Type<T, $DataResult<B>>): $Decoder<B>
public "flatXmap"<S>(function0: $Function$$Type<T, $DataResult<S>>, function1: $Function$$Type<S, $DataResult<T>>): $Codec<S>
public static "floatRange"(float0: float, float1: float): $Codec<float>
public "forEach"(consumer0: $Consumer$$Type<T>): void
public "getEntries"(): $Set<$Map$Entry<$ResourceLocation, T>>
public "getId"(value: T): integer
public "getKey"(value: T): $ResourceLocation
public "getValue"(name: string): T
public "getValue"(name: $ResourceLocation$$Type): T
public "getValueOrDefault"(parse: $ResourceLocation$$Type, defaultType: T): T
public "getValues"(): $Set<T>
public static "intRange"(int0: integer, int1: integer): $Codec<integer>
public "iterator"(): $Iterator<T>
public "keySet"(): $Set<$ResourceLocation>
public static "list"<E>(codec0: $Codec$$Type<E>): $Codec<$List<E>>
public "listOf"(): $Codec<$List<T>>
public "map"<B>(function0: $Function$$Type<T, B>): $Decoder<B>
public static "mapEither"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Either<F, S>>
public static "mapPair"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Pair<F, S>>
public "mapResult"(resultFunction0: $Codec$ResultFunction$$Type<T>): $Codec<T>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>, supplier2: $Supplier$$Type<string>): $MapCodec<A>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>): $MapCodec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>, string2: string): $Codec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>): $Codec<A>
public static "ofBoxed"<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
public static "ofCodec"<B>(): $CodecMapRegistry<B>
public static "ofCodec"<B>(name: string): $CodecMapRegistry<B>
public static "ofSimple"<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
public static "ofTerminal"<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
public static "optionalField"<F>(string0: string, codec1: $Codec$$Type<F>): $MapCodec<$Optional<F>>
public "optionalFieldOf"(string0: string, lifecycle1: $Lifecycle$$Type, t2: T, lifecycle3: $Lifecycle$$Type): $MapCodec<T>
public "optionalFieldOf"(string0: string, t1: T): $MapCodec<T>
public "optionalFieldOf"(string0: string, t1: T, lifecycle2: $Lifecycle$$Type): $MapCodec<T>
public "optionalFieldOf"(string0: string): $MapCodec<$Optional<T>>
public "orElse"(unaryOperator0: $UnaryOperator$$Type<string>, t1: T): $Codec<T>
public "orElse"(consumer0: $Consumer$$Type<string>, t1: T): $Codec<T>
public "orElse"(t0: T): $Codec<T>
public "orElseGet"(supplier0: $Supplier$$Type<T>): $Codec<T>
public "orElseGet"(unaryOperator0: $UnaryOperator$$Type<string>, supplier1: $Supplier$$Type<T>): $Codec<T>
public "orElseGet"(consumer0: $Consumer$$Type<string>, supplier1: $Supplier$$Type<T>): $Codec<T>
public static "pair"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Pair<F, S>>
public "parse"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<T>
public "parse"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<T>
public "partialDispatch"<E>(string0: string, function1: $Function$$Type<E, $DataResult<T>>, function2: $Function$$Type<T, $DataResult<$Codec<E>>>): $Codec<E>
public "register"<B extends T>(name: string, value: B): T
public "register"<B extends T>(name: $ResourceLocation$$Type, value: B): T
public "simple"(): $Decoder$Simple<T>
public static "simpleMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>, keyable2: $Keyable$$Type): $SimpleMapCodec<K, V>
public "size"(): integer
public "spliterator"(): $Spliterator<T>
public "stable"(): $Codec<T>
public "terminal"(): $Decoder$Terminal<T>
public static "unboundedMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $UnboundedMapCodec<K, V>
public static "unit"<A>(a0: A): $Codec<A>
public static "unit"<A>(supplier0: $Supplier$$Type<A>): $Codec<A>
public "withLifecycle"(lifecycle0: $Lifecycle$$Type): $Codec<T>
public "xmap"<S>(function0: $Function$$Type<T, S>, function1: $Function$$Type<S, T>): $Codec<S>
[Symbol.iterator](): IterableIterator<T>;
get "entries"(): $Set<$Map$Entry<$ResourceLocation, T>>
get "values"(): $Set<T>
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/items/forge/$ShulkerShellItem" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Equipable } from "packages/net/minecraft/world/item/$Equipable"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $FoodBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$FoodBuilder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FoodProperties } from "packages/net/minecraft/world/food/$FoodProperties"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $EnchantmentInstance, $EnchantmentInstance$$Type } from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $Multimap } from "packages/com/google/common/collect/$Multimap"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Item$Properties$$Type } from "packages/net/minecraft/world/item/$Item$Properties"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $MutableToolTier$$Type } from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import { $EnderMan$$Type } from "packages/net/minecraft/world/entity/monster/$EnderMan"
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $InteractionResultHolder } from "packages/net/minecraft/world/$InteractionResultHolder"
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $ICapabilityProvider } from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import { $ArmorItem } from "packages/net/minecraft/world/item/$ArmorItem"
import { $AttributeModifier } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $Map } from "packages/java/util/$Map"

export class $ShulkerShellItem extends $ArmorItem {
constructor(properties: $Item$Properties$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "forciblyAllowsTableEnchantment"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public static "get"(itemStack0: $ItemStack$$Type): $Equipable
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getLightColor"(player: $Player$$Type, stack: $ItemStack$$Type): $Vector3f
public "getLightEmission"(player: $Player$$Type, stack: $ItemStack$$Type): integer
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isTreasureAllowed"(itemStack0: $ItemStack$$Type, boolean1: boolean): boolean
public "kjs$getMutableAttributeMap"(): $Multimap<$Attribute, $AttributeModifier>
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEnchantment"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$EnchantmentInstance$$Type>): $ItemStack
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "selectEnchantments"(list0: $List$$Type<$EnchantmentInstance$$Type>, randomSource1: $RandomSource$$Type, itemStack2: $ItemStack$$Type, int3: integer, float4: float, float5: float, boolean6: boolean): $List<$EnchantmentInstance>
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
public "swapWithEquipmentSlot"(item0: $Item$$Type, level1: $Level$$Type, player2: $Player$$Type, interactionHand3: $InteractionHand$$Type): $InteractionResultHolder<$ItemStack>
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "packages/net/mehvahdjukaar/supplementaries/common/entities/$ISlimeable" {
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ISlimeable {
"supp$getSlimedTicks"(): integer
"supp$setSlimedTicks"(int0: integer, boolean1: boolean): void
}

export namespace $ISlimeable {
function getAlpha(le: $LivingEntity$$Type, partialTicks: float): float
function tickEntity(entity: $LivingEntity$$Type): void
}
export abstract class $ISlimeable$$Static implements $ISlimeable {
static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
static "tickEntity"(entity: $LivingEntity$$Type): void
}
}

declare module "packages/net/mehvahdjukaar/moonlight/core/mixins/forge/$ButtonAccessor" {
import { $Button$OnPress, $Button$OnPress$$Type } from "packages/net/minecraft/client/gui/components/$Button$OnPress"

export interface $ButtonAccessor {
"getOnPress"(): $Button$OnPress
"setOnPress"(onPress0: $Button$OnPress$$Type): void
get "onPress"(): $Button$OnPress
set "onPress"(value: $Button$OnPress$$Type)
}

export namespace $ButtonAccessor {
const probejs$$marker: never
}
export abstract class $ButtonAccessor$$Static implements $ButtonAccessor {
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$IBellConnection" {
import { $IBellConnection$Type, $IBellConnection$Type$$Type } from "packages/net/mehvahdjukaar/amendments/common/$IBellConnection$Type"

export interface $IBellConnection {
"amendments$getConnection"(): $IBellConnection$Type
"amendments$setConnected"(type0: $IBellConnection$Type$$Type): void
}

export namespace $IBellConnection {
const probejs$$marker: never
}
export abstract class $IBellConnection$$Static implements $IBellConnection {
}
}

declare module "packages/net/mehvahdjukaar/moonlight/api/events/forge/$DropItemOnDeathEvent" {
import { $IDropItemOnDeathEvent } from "packages/net/mehvahdjukaar/moonlight/api/events/$IDropItemOnDeathEvent"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $DropItemOnDeathEvent extends $Event implements $IDropItemOnDeathEvent {
constructor()
constructor(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean)

public static "create"(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean): $IDropItemOnDeathEvent
public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
public "getReturnItemStack"(): $ItemStack
public "isBeforeDrop"(): boolean
public "isCanceled"(): boolean
public "setCanceled"(boolean0: boolean): void
public "setReturnItemStack"(stack: $ItemStack$$Type): void
get "itemStack"(): $ItemStack
get "player"(): $Player
get "returnItemStack"(): $ItemStack
get "beforeDrop"(): boolean
get "canceled"(): boolean
set "canceled"(value: boolean)
set "returnItemStack"(value: $ItemStack$$Type)
}
}

declare module "packages/net/mehvahdjukaar/amendments/common/$SwingAnimation" {
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $SwingAnimation {
static "EMPTY": $SwingAnimation

public "getAngle"(float0: float): float
public "hitByEntity"(entity0: $Entity$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): boolean
public "reset"(): void
public "setAngle"(float0: float): void
public "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
set "angle"(value: float)
}
}

