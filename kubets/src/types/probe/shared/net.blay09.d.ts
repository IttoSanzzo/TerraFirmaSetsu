declare module "packages/net/blay09/mods/balm/api/event/$UseBlockEvent" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $BlockHitResult, $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $InteractionResult, $InteractionResult$$Type } from "packages/net/minecraft/world/$InteractionResult"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"

export class $UseBlockEvent extends $BalmEvent {
constructor()
constructor(player0: $Player$$Type, level1: $Level$$Type, interactionHand2: $InteractionHand$$Type, blockHitResult3: $BlockHitResult$$Type)

public "getHand"(): $InteractionHand
public "getHitResult"(): $BlockHitResult
public "getInteractionResult"(): $InteractionResult
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "setResult"(interactionResult0: $InteractionResult$$Type): void
get "hand"(): $InteractionHand
get "hitResult"(): $BlockHitResult
get "interactionResult"(): $InteractionResult
get "level"(): $Level
get "player"(): $Player
set "result"(value: $InteractionResult$$Type)
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$ItemTooltipEvent" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $TooltipFlag, $TooltipFlag$$Type } from "packages/net/minecraft/world/item/$TooltipFlag"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemTooltipEvent extends $BalmEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, player1: $Player$$Type, list2: $List$$Type<$Component$$Type>, tooltipFlag3: $TooltipFlag$$Type)

public "getFlags"(): $TooltipFlag
public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
public "getToolTip"(): $List<$Component>
get "flags"(): $TooltipFlag
get "itemStack"(): $ItemStack
get "player"(): $Player
get "toolTip"(): $List<$Component>
}
}

declare module "packages/net/blay09/mods/waystones/api/$IWaystone" {
import { $WaystoneOrigin } from "packages/net/blay09/mods/waystones/api/$WaystoneOrigin"
import { $UUID } from "packages/java/util/$UUID"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $TeleportDestination } from "packages/net/blay09/mods/waystones/api/$TeleportDestination"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IWaystone {
"getDimension"(): $ResourceKey<$Level>
"getName"(): string
"getOrigin"(): $WaystoneOrigin
"getOwnerUid"(): $UUID
"getPos"(): $BlockPos
"getWaystoneType"(): $ResourceLocation
"getWaystoneUid"(): $UUID
"hasName"(): boolean
"hasOwner"(): boolean
"isGlobal"(): boolean
"isOwner"(player0: $Player$$Type): boolean
"isValid"(): boolean
"isValidInLevel"(serverLevel0: $ServerLevel$$Type): boolean
"resolveDestination"(serverLevel0: $ServerLevel$$Type): $TeleportDestination
"wasGenerated"(): boolean
get "dimension"(): $ResourceKey<$Level>
get "name"(): string
get "origin"(): $WaystoneOrigin
get "ownerUid"(): $UUID
get "pos"(): $BlockPos
get "waystoneType"(): $ResourceLocation
get "waystoneUid"(): $UUID
get "global"(): boolean
get "valid"(): boolean
}

export namespace $IWaystone {
const probejs$$marker: never
}
export abstract class $IWaystone$$Static implements $IWaystone {
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigCategoryBuilder" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ConfigPropertyBuilder } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $ConfigCategoryImpl } from "packages/net/blay09/mods/balm/api/config/schema/impl/$ConfigCategoryImpl"
import { $PropertyHolderBuilder } from "packages/net/blay09/mods/balm/api/config/schema/builder/$PropertyHolderBuilder"

export interface $ConfigCategoryBuilder extends $PropertyHolderBuilder {
"comment"(string0: string): $ConfigCategoryImpl
"property"(string0: string): $ConfigPropertyBuilder
"via"<T>(function0: $Function$$Type<$ConfigCategoryBuilder$$Type, T>): T
}

export namespace $ConfigCategoryBuilder {
const probejs$$marker: never
}
export abstract class $ConfigCategoryBuilder$$Static implements $ConfigCategoryBuilder {
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenDrawEvent$Post" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ScreenDrawEvent } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenDrawEvent"

export class $ScreenDrawEvent$Post extends $ScreenDrawEvent {
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, float4: float)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Drag$Post" {
import { $ScreenMouseEvent$Drag } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Drag"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenMouseEvent$Drag$Post extends $ScreenMouseEvent$Drag {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer, double4: double, double5: double)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenInitEvent$Post" {
import { $ScreenInitEvent } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenInitEvent"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenInitEvent$Post extends $ScreenInitEvent {
constructor(screen0: $Screen$$Type)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/common/codec/$StreamCodec" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"

export interface $StreamCodec<TBuffer, TData> {
"decode"(tbuffer0: TBuffer): TData
"encode"(tbuffer0: TBuffer, tdata1: TData): void
"map"<TMappedData>(function0: $Function$$Type<TData, TMappedData>, function1: $Function$$Type<TMappedData, TData>): $StreamCodec<TBuffer, TMappedData>
}

export namespace $StreamCodec {
function of<TBuffer, TData>(biConsumer0: $BiConsumer$$Type<TBuffer, TData>, function1: $Function$$Type<TBuffer, TData>): $StreamCodec<TBuffer, TData>
}
export abstract class $StreamCodec$$Static<TBuffer, TData> implements $StreamCodec<TBuffer, TData> {
static "of"<TBuffer, TData>(biConsumer0: $BiConsumer$$Type<TBuffer, TData>, function1: $Function$$Type<TBuffer, TData>): $StreamCodec<TBuffer, TData>
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$NestedTypeHolder" {
import { $Class } from "packages/java/lang/$Class"

export interface $NestedTypeHolder<T> {
"nestedType"(): $Class<T>
}

export namespace $NestedTypeHolder {
const probejs$$marker: never
}
export abstract class $NestedTypeHolder$$Static<T> implements $NestedTypeHolder<T> {
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$GuiDrawEvent$Pre" {
import { $GuiDrawEvent$Element$$Type } from "packages/net/blay09/mods/balm/api/event/client/$GuiDrawEvent$Element"
import { $GuiDrawEvent } from "packages/net/blay09/mods/balm/api/event/client/$GuiDrawEvent"
import { $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $GuiDrawEvent$Pre extends $GuiDrawEvent {
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, element2: $GuiDrawEvent$Element$$Type)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/$LivingDamageEvent" {
import { $DamageSource, $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingDamageEvent extends $BalmEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, float2: float)

public "getDamageAmount"(): float
public "getDamageSource"(): $DamageSource
public "getEntity"(): $LivingEntity
public "setDamageAmount"(float0: float): void
get "damageAmount"(): float
get "damageSource"(): $DamageSource
get "entity"(): $LivingEntity
set "damageAmount"(value: float)
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredBoolean" {
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $ConfiguredBoolean extends $ConfiguredProperty<boolean> {
"category"(): string
"codec"(): $Codec<boolean>
"comment"(): string
"defaultValue"(): boolean
"get"(loadedConfig0: $LoadedConfig$$Type): boolean
"get"(): boolean
"getRaw"(loadedConfig0: $LoadedConfig$$Type): boolean
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(boolean0: boolean): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, boolean1: boolean): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, boolean1: boolean): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, boolean>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredBoolean {
const probejs$$marker: never
}
export abstract class $ConfiguredBoolean$$Static implements $ConfiguredBoolean {
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema" {
import { $ConfigCategory } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigCategory"
import { $Collection } from "packages/java/util/$Collection"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LoadedConfig } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $ConfigSchemaImpl } from "packages/net/blay09/mods/balm/api/config/schema/impl/$ConfigSchemaImpl"

export interface $BalmConfigSchema {
"categories"(): $Collection<$ConfigCategory>
"defaults"(): $LoadedConfig
"findProperty"(string0: string, string1: string): $ConfiguredProperty<any>
"findRootProperty"(string0: string): $ConfiguredProperty<any>
"identifier"(): $ResourceLocation
"rootProperties"(): $Collection<$ConfiguredProperty<any>>
}

export namespace $BalmConfigSchema {
function create(resourceLocation0: $ResourceLocation$$Type): $ConfigSchemaImpl
}
export abstract class $BalmConfigSchema$$Static implements $BalmConfigSchema {
static "create"(resourceLocation0: $ResourceLocation$$Type): $ConfigSchemaImpl
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder" {
import { $StringConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$StringConfigProperty"
import { $ResourceLocationConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ResourceLocationConfigProperty"
import { $SetConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$SetConfigProperty"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $FloatConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$FloatConfigProperty"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ConfigSchemaImpl$$Type } from "packages/net/blay09/mods/balm/api/config/schema/impl/$ConfigSchemaImpl"
import { $LongConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$LongConfigProperty"
import { $ListConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ListConfigProperty"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BooleanConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$BooleanConfigProperty"
import { $IntConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$IntConfigProperty"
import { $List$$Type } from "packages/java/util/$List"
import { $DoubleConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$DoubleConfigProperty"
import { $EnumConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$EnumConfigProperty"

export class $ConfigPropertyBuilder {
constructor(configSchemaImpl0: $ConfigSchemaImpl$$Type, string1: string)
constructor(configSchemaImpl0: $ConfigSchemaImpl$$Type, string1: string, string2: string)

public "boolOf"(boolean0: boolean): $BooleanConfigProperty
public "comment"(string0: string): $ConfigPropertyBuilder
public "doubleOf"(double0: double): $DoubleConfigProperty
public "enumOf"<T extends $Enum<T>>(t0: T): $EnumConfigProperty<T>
public "floatOf"(float0: float): $FloatConfigProperty
public "intOf"(int0: integer): $IntConfigProperty
public "listOf"<T>(class0: $Class$$Type<T>, list1: $List$$Type<T>): $ListConfigProperty<T>
public "longOf"(long0: long): $LongConfigProperty
public "resourceLocationOf"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocationConfigProperty
public "setOf"<T>(class0: $Class$$Type<T>, set1: $Set$$Type<T>): $SetConfigProperty<T>
public "stringOf"(string0: string): $StringConfigProperty
public "synced"(): $ConfigPropertyBuilder
}
}

declare module "packages/net/blay09/mods/balm/mixin/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {
"getMouseX"(): double
"getMouseY"(): double
get "mouseX"(): double
get "mouseY"(): double
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
export abstract class $MouseHandlerAccessor$$Static implements $MouseHandlerAccessor {
}
}

declare module "packages/net/blay09/mods/balm/api/event/$PlayerOpenMenuEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export class $PlayerOpenMenuEvent extends $BalmEvent {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, abstractContainerMenu1: $AbstractContainerMenu$$Type)

public "getMenu"(): $AbstractContainerMenu
public "getPlayer"(): $ServerPlayer
get "menu"(): $AbstractContainerMenu
get "player"(): $ServerPlayer
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenInitEvent" {
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $ScreenInitEvent extends $BalmEvent {
constructor()
constructor(screen0: $Screen$$Type)

public "getScreen"(): $Screen
get "screen"(): $Screen
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Release$Post" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenMouseEvent$Release } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Release"

export class $ScreenMouseEvent$Release$Post extends $ScreenMouseEvent$Release {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$GuiDrawEvent$Post" {
import { $GuiDrawEvent$Element$$Type } from "packages/net/blay09/mods/balm/api/event/client/$GuiDrawEvent$Element"
import { $GuiDrawEvent } from "packages/net/blay09/mods/balm/api/event/client/$GuiDrawEvent"
import { $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $GuiDrawEvent$Post extends $GuiDrawEvent {
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, element2: $GuiDrawEvent$Element$$Type)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent$Press$Post" {
import { $ScreenKeyEvent$Press } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent$Press"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenKeyEvent$Press$Post extends $ScreenKeyEvent$Press {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$ClientStartedEvent" {
import { $Minecraft, $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $ClientStartedEvent extends $BalmEvent {
constructor()
constructor(minecraft0: $Minecraft$$Type)

public "getMinecraft"(): $Minecraft
get "minecraft"(): $Minecraft
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredEnum" {
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $ConfiguredEnum<T extends $Enum<T>> extends $ConfiguredProperty<T> {
"category"(): string
"codec"(): $Codec<T>
"comment"(): string
"defaultValue"(): T
"get"(loadedConfig0: $LoadedConfig$$Type): T
"get"(): T
"getRaw"(loadedConfig0: $LoadedConfig$$Type): T
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(t0: T): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, T>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredEnum {
const probejs$$marker: never
}
export abstract class $ConfiguredEnum$$Static<T extends $Enum<T>> implements $ConfiguredEnum<T> {
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent" {
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $ScreenKeyEvent extends $BalmEvent {
constructor()
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)

public "getKey"(): integer
public "getModifiers"(): integer
public "getScanCode"(): integer
public "getScreen"(): $Screen
get "key"(): integer
get "modifiers"(): integer
get "scanCode"(): integer
get "screen"(): $Screen
}
}

declare module "packages/net/blay09/mods/balm/api/event/server/$ServerReloadFinishedEvent" {
import { $MinecraftServer, $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $ServerReloadFinishedEvent extends $BalmEvent {
constructor()
constructor(minecraftServer0: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
}

declare module "packages/net/blay09/mods/balm/api/event/$EntityAddedEvent" {
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityAddedEvent extends $BalmEvent {
constructor()
constructor(entity0: $Entity$$Type, level1: $Level$$Type)

public "getEntity"(): $Entity
public "getLevel"(): $Level
get "entity"(): $Entity
get "level"(): $Level
}
}

declare module "packages/net/blay09/mods/balm/api/event/$ConfigReloadedEvent" {
import { $BalmConfigSchema, $BalmConfigSchema$$Type } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $ConfigReloadedEvent extends $BalmEvent {
constructor()
constructor(balmConfigSchema0: $BalmConfigSchema$$Type)

public "getSchema"(): $BalmConfigSchema
get "schema"(): $BalmConfigSchema
}
}

declare module "packages/net/blay09/mods/balm/api/event/server/$ServerStartingEvent" {
import { $MinecraftServer, $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $ServerStartingEvent extends $BalmEvent {
constructor()
constructor(minecraftServer0: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$EnumConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $ConfiguredEnum } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredEnum"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $AbstractConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$AbstractConfigProperty"

export class $EnumConfigProperty<T extends $Enum<T>> extends $AbstractConfigProperty<T> implements $ConfiguredEnum<T> {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, t1: T)

public "codec"(): $Codec<T>
public "get"(loadedConfig0: $LoadedConfig$$Type): T
public "get"(): T
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): T
public "set"(t0: T): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, T>
public "type"(): $Class<T>
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Release" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenMouseEvent } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent"

export class $ScreenMouseEvent$Release extends $ScreenMouseEvent {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty" {
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $ConfiguredProperty<T> {
"category"(): string
"codec"(): $Codec<T>
"comment"(): string
"defaultValue"(): T
"getRaw"(loadedConfig0: $LoadedConfig$$Type): T
"name"(): string
"parentSchema"(): $BalmConfigSchema
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, T>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredProperty {
const probejs$$marker: never
}
export abstract class $ConfiguredProperty$$Static<T> implements $ConfiguredProperty<T> {
}
}

declare module "packages/net/blay09/mods/balm/api/event/$PlayerConnectedEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $PlayerConnectedEvent extends $BalmEvent {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent$Press" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenKeyEvent } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent"

export class $ScreenKeyEvent$Press extends $ScreenKeyEvent {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/mixin/$KeyMappingAccessor" {
import { $InputConstants$Key } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $KeyMappingAccessor {
"getKey"(): $InputConstants$Key
get "key"(): $InputConstants$Key
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
export abstract class $KeyMappingAccessor$$Static implements $KeyMappingAccessor {
}
}

declare module "packages/net/blay09/mods/balm/api/event/$PlayerAttackEvent" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $PlayerAttackEvent extends $BalmEvent {
constructor()
constructor(player0: $Player$$Type, entity1: $Entity$$Type)

public "getPlayer"(): $Player
public "getTarget"(): $Entity
get "player"(): $Player
get "target"(): $Entity
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$AbstractConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $ConfigSchemaImpl } from "packages/net/blay09/mods/balm/api/config/schema/impl/$ConfigSchemaImpl"

export class $AbstractConfigProperty<T> implements $ConfiguredProperty<T> {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type)

public "category"(): string
public "codec"(): $Codec<T>
public "comment"(): string
public "defaultValue"(): T
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): T
public "name"(): string
public "parentSchema"(): $ConfigSchemaImpl
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, t1: T): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, T>
public "synced"(): boolean
public "type"(): $Class<any>
}
}

declare module "packages/net/blay09/mods/waystones/api/$GenerateWaystoneNameEvent" {
import { $IWaystone, $IWaystone$$Type } from "packages/net/blay09/mods/waystones/api/$IWaystone"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $GenerateWaystoneNameEvent extends $BalmEvent {
constructor()
constructor(iWaystone0: $IWaystone$$Type, string1: string)

public "getName"(): string
public "getWaystone"(): $IWaystone
public "setName"(string0: string): void
get "name"(): string
get "waystone"(): $IWaystone
set "name"(value: string)
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredSet" {
import { $NestedTypeHolder } from "packages/net/blay09/mods/balm/api/config/schema/$NestedTypeHolder"
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $ConfiguredSet<T> extends $ConfiguredProperty<$Set<T>>, $NestedTypeHolder<T> {
"category"(): string
"codec"(): $Codec<$Set<T>>
"comment"(): string
"defaultValue"(): $Set<T>
"get"(loadedConfig0: $LoadedConfig$$Type): $Set<T>
"get"(): $Set<T>
"getRaw"(loadedConfig0: $LoadedConfig$$Type): $Set<T>
"name"(): string
"nestedType"(): $Class<T>
"parentSchema"(): $BalmConfigSchema
"set"(set0: $Set$$Type<T>): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, set1: $Set$$Type<T>): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, set1: $Set$$Type<T>): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, $Set<T>>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredSet {
const probejs$$marker: never
}
export abstract class $ConfiguredSet$$Static<T> implements $ConfiguredSet<T> {
}
}

declare module "packages/net/blay09/mods/balm/api/event/$BalmEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $BalmEvent extends $Event {
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/$PlayerChangedDimensionEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $PlayerChangedDimensionEvent extends $BalmEvent {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, resourceKey1: $ResourceKey$$Type<$Level>, resourceKey2: $ResourceKey$$Type<$Level>)

public "getFromDim"(): $ResourceKey<$Level>
public "getPlayer"(): $ServerPlayer
public "getToDim"(): $ResourceKey<$Level>
get "fromDim"(): $ResourceKey<$Level>
get "player"(): $ServerPlayer
get "toDim"(): $ResourceKey<$Level>
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/impl/$ConfigCategoryImpl" {
import { $ConfigCategoryBuilder, $ConfigCategoryBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigCategoryBuilder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ConfigCategory } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigCategory"
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $ConfigPropertyBuilder } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $List } from "packages/java/util/$List"
import { $ConfiguredProperty, $ConfiguredProperty$$Type } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $ConfigSchemaImpl$$Type } from "packages/net/blay09/mods/balm/api/config/schema/impl/$ConfigSchemaImpl"

export class $ConfigCategoryImpl implements $ConfigCategoryBuilder, $ConfigCategory {
constructor(configSchemaImpl0: $ConfigSchemaImpl$$Type, string1: string)

public "addProperty"<T extends $ConfiguredProperty<any>>(t0: T): void
public "comment"(): string
public "comment"(string0: string): $ConfigCategoryImpl
public "name"(): string
public "parentSchema"(): $BalmConfigSchema
public "properties"(): $List<$ConfiguredProperty<any>>
public "property"(string0: string): $ConfigPropertyBuilder
public "via"<T>(function0: $Function$$Type<$ConfigCategoryBuilder$$Type, T>): T
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$SetConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $ConfiguredSet } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredSet"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $AbstractConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$AbstractConfigProperty"

export class $SetConfigProperty<T> extends $AbstractConfigProperty<$Set<T>> implements $ConfiguredSet<T> {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, class1: $Class$$Type<T>, set2: $Set$$Type<T>)

public "codec"(): $Codec<$Set<T>>
public "get"(loadedConfig0: $LoadedConfig$$Type): $Set<T>
public "get"(): $Set<T>
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): $Set<T>
public "nestedType"(): $Class<T>
public "set"(set0: $Set$$Type<T>): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, set1: $Set$$Type<T>): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, set1: $Set$$Type<T>): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, $Set<T>>
}
}

declare module "packages/net/blay09/mods/balm/api/event/$ConfigLoadedEvent" {
import { $BalmConfigSchema, $BalmConfigSchema$$Type } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $ConfigLoadedEvent extends $BalmEvent {
constructor()
constructor(balmConfigSchema0: $BalmConfigSchema$$Type)

public "getSchema"(): $BalmConfigSchema
get "schema"(): $BalmConfigSchema
}
}

declare module "packages/net/blay09/mods/waystones/api/$WaystoneOrigin" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $WaystoneOrigin extends $Enum<$WaystoneOrigin> implements $StringRepresentable {
static readonly "DUNGEON": $WaystoneOrigin
static readonly "PLAYER": $WaystoneOrigin
static readonly "UNKNOWN": $WaystoneOrigin
static readonly "VILLAGE": $WaystoneOrigin
static readonly "WILDERNESS": $WaystoneOrigin

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $WaystoneOrigin
public static "values"(): $WaystoneOrigin[]
get "serializedName"(): string
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$ConnectedToServerEvent" {
import { $Minecraft, $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $ConnectedToServerEvent extends $BalmEvent {
constructor()
constructor(minecraft0: $Minecraft$$Type)

public "getClient"(): $Minecraft
get "client"(): $Minecraft
}
}

declare module "packages/net/blay09/mods/balm/api/event/$DigSpeedEvent" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $DigSpeedEvent extends $BalmEvent {
constructor(player0: $Player$$Type, blockState1: $BlockState$$Type, float2: float)
constructor()

public "getPlayer"(): $Player
public "getSpeed"(): float
public "getSpeedOverride"(): float
public "getState"(): $BlockState
public "setSpeedOverride"(float0: float): void
get "player"(): $Player
get "speed"(): float
get "speedOverride"(): float
get "state"(): $BlockState
set "speedOverride"(value: float)
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$StringConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ConfiguredString } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredString"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $AbstractConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$AbstractConfigProperty"

export class $StringConfigProperty extends $AbstractConfigProperty<string> implements $ConfiguredString {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, string1: string)

public "codec"(): $Codec<string>
public "get"(loadedConfig0: $LoadedConfig$$Type): string
public "get"(): string
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): string
public "set"(string0: string): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, string1: string): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, string1: string): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, string>
public "type"(): $Class<string>
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredResourceLocation" {
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $ConfiguredResourceLocation extends $ConfiguredProperty<$ResourceLocation> {
"category"(): string
"codec"(): $Codec<$ResourceLocation>
"comment"(): string
"defaultValue"(): $ResourceLocation
"get"(loadedConfig0: $LoadedConfig$$Type): $ResourceLocation
"get"(): $ResourceLocation
"getRaw"(loadedConfig0: $LoadedConfig$$Type): $ResourceLocation
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(resourceLocation0: $ResourceLocation$$Type): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, resourceLocation1: $ResourceLocation$$Type): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, resourceLocation1: $ResourceLocation$$Type): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, $ResourceLocation>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredResourceLocation {
const probejs$$marker: never
}
export abstract class $ConfiguredResourceLocation$$Static implements $ConfiguredResourceLocation {
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$DisconnectedFromServerEvent" {
import { $Minecraft, $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $DisconnectedFromServerEvent extends $BalmEvent {
constructor()
constructor(minecraft0: $Minecraft$$Type)

public "getClient"(): $Minecraft
get "client"(): $Minecraft
}
}

declare module "packages/net/blay09/mods/balm/api/event/$PlayerLoginEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $PlayerLoginEvent extends $BalmEvent {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigCategory" {
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $List } from "packages/java/util/$List"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"

export interface $ConfigCategory {
"comment"(): string
"name"(): string
"parentSchema"(): $BalmConfigSchema
"properties"(): $List<$ConfiguredProperty<any>>
}

export namespace $ConfigCategory {
const probejs$$marker: never
}
export abstract class $ConfigCategory$$Static implements $ConfigCategory {
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfigSchemaBuilder" {
import { $ConfigCategoryBuilder } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigCategoryBuilder"
import { $ConfigCategory } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigCategory"
import { $ConfigPropertyBuilder } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $Collection } from "packages/java/util/$Collection"
import { $PropertyHolderBuilder } from "packages/net/blay09/mods/balm/api/config/schema/builder/$PropertyHolderBuilder"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LoadedConfig } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $ConfigSchemaImpl } from "packages/net/blay09/mods/balm/api/config/schema/impl/$ConfigSchemaImpl"

export interface $ConfigSchemaBuilder extends $PropertyHolderBuilder, $BalmConfigSchema {
"categories"(): $Collection<$ConfigCategory>
"category"(string0: string): $ConfigCategoryBuilder
"defaults"(): $LoadedConfig
"findProperty"(string0: string, string1: string): $ConfiguredProperty<any>
"findRootProperty"(string0: string): $ConfiguredProperty<any>
"identifier"(): $ResourceLocation
"property"(string0: string): $ConfigPropertyBuilder
"rootProperties"(): $Collection<$ConfiguredProperty<any>>
}

export namespace $ConfigSchemaBuilder {
function create(resourceLocation0: $ResourceLocation$$Type): $ConfigSchemaImpl
}
export abstract class $ConfigSchemaBuilder$$Static implements $ConfigSchemaBuilder {
static "create"(resourceLocation0: $ResourceLocation$$Type): $ConfigSchemaImpl
}
}

declare module "packages/net/blay09/mods/balm/api/config/$LoadedConfig" {
import { $BalmConfigSchema$$Type } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $ConfiguredProperty$$Type } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $MutableLoadedConfig } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"

export interface $LoadedConfig {
"getRaw"<T>(configuredProperty0: $ConfiguredProperty$$Type<T>): T
"mutable"(balmConfigSchema0: $BalmConfigSchema$$Type): $MutableLoadedConfig
}

export namespace $LoadedConfig {
const probejs$$marker: never
}
export abstract class $LoadedConfig$$Static implements $LoadedConfig {
}
}

declare module "packages/net/blay09/mods/waystones/api/$WaystoneUpdateReceivedEvent" {
import { $IWaystone, $IWaystone$$Type } from "packages/net/blay09/mods/waystones/api/$IWaystone"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $WaystoneUpdateReceivedEvent extends $BalmEvent {
constructor()
constructor(iWaystone0: $IWaystone$$Type)

public "getWaystone"(): $IWaystone
get "waystone"(): $IWaystone
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent$Release$Pre" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenKeyEvent$Release } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent$Release"

export class $ScreenKeyEvent$Release$Pre extends $ScreenKeyEvent$Release {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ContainerScreenDrawEvent$Foreground" {
import { $ContainerScreenDrawEvent } from "packages/net/blay09/mods/balm/api/event/client/screen/$ContainerScreenDrawEvent"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ContainerScreenDrawEvent$Foreground extends $ContainerScreenDrawEvent {
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/kuma/mixin/$KeyMappingAccessor" {
import { $InputConstants$Key } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $KeyMappingAccessor {
"getKey"(): $InputConstants$Key
get "key"(): $InputConstants$Key
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
export abstract class $KeyMappingAccessor$$Static implements $KeyMappingAccessor {
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenDrawEvent" {
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $GuiGraphics, $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ScreenDrawEvent extends $BalmEvent {
constructor()
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, float4: float)

public "getGuiGraphics"(): $GuiGraphics
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getScreen"(): $Screen
public "getTickDelta"(): float
get "guiGraphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
get "screen"(): $Screen
get "tickDelta"(): float
}
}

declare module "packages/net/blay09/mods/waystones/mixin/$StructureTemplatePoolAccessor" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Pair, $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import { $ObjectArrayList, $ObjectArrayList$$Type } from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $StructureTemplatePoolAccessor {
"getRawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
"getTemplates"(): $ObjectArrayList<$StructurePoolElement>
"setRawTemplates"(list0: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>): void
"setTemplates"(objectArrayList0: $ObjectArrayList$$Type<$StructurePoolElement$$Type>): void
get "rawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
get "templates"(): $ObjectArrayList<$StructurePoolElement>
set "rawTemplates"(value: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>)
set "templates"(value: $ObjectArrayList$$Type<$StructurePoolElement$$Type>)
}

export namespace $StructureTemplatePoolAccessor {
const probejs$$marker: never
}
export abstract class $StructureTemplatePoolAccessor$$Static implements $StructureTemplatePoolAccessor {
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$BooleanConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredBoolean } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredBoolean"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $AbstractConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$AbstractConfigProperty"

export class $BooleanConfigProperty extends $AbstractConfigProperty<boolean> implements $ConfiguredBoolean {
static readonly "CODEC": $Codec<boolean>

constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, boolean1: boolean)

public "codec"(): $Codec<boolean>
public "defaultValue"(): boolean
public "get"(loadedConfig0: $LoadedConfig$$Type): boolean
public "get"(): boolean
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): boolean
public "set"(boolean0: boolean): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, boolean1: boolean): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, boolean1: boolean): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, boolean>
public "type"(): $Class<boolean>
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredFloat" {
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $ConfiguredFloat extends $ConfiguredProperty<float> {
"category"(): string
"codec"(): $Codec<float>
"comment"(): string
"defaultValue"(): float
"get"(loadedConfig0: $LoadedConfig$$Type): float
"get"(): float
"getRaw"(loadedConfig0: $LoadedConfig$$Type): float
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(float0: float): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, float1: float): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, float1: float): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, float>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredFloat {
const probejs$$marker: never
}
export abstract class $ConfiguredFloat$$Static implements $ConfiguredFloat {
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Drag$Pre" {
import { $ScreenMouseEvent$Drag } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Drag"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenMouseEvent$Drag$Pre extends $ScreenMouseEvent$Drag {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer, double4: double, double5: double)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/$LivingDeathEvent" {
import { $DamageSource, $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingDeathEvent extends $BalmEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type)

public "getDamageSource"(): $DamageSource
public "getEntity"(): $LivingEntity
get "damageSource"(): $DamageSource
get "entity"(): $LivingEntity
}
}

declare module "packages/net/blay09/mods/balm/api/entity/$BalmEntity" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"

export interface $BalmEntity {
"getFabricBalmData"(): $CompoundTag
"setFabricBalmData"(compoundTag0: $CompoundTag$$Type): void
get "fabricBalmData"(): $CompoundTag
set "fabricBalmData"(value: $CompoundTag$$Type)
}

export namespace $BalmEntity {
const probejs$$marker: never
}
export abstract class $BalmEntity$$Static implements $BalmEntity {
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$ResourceLocationConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $ConfiguredResourceLocation } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredResourceLocation"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $AbstractConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$AbstractConfigProperty"

export class $ResourceLocationConfigProperty extends $AbstractConfigProperty<$ResourceLocation> implements $ConfiguredResourceLocation {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, resourceLocation1: $ResourceLocation$$Type)

public "codec"(): $Codec<$ResourceLocation>
public "get"(loadedConfig0: $LoadedConfig$$Type): $ResourceLocation
public "get"(): $ResourceLocation
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): $ResourceLocation
public "set"(resourceLocation0: $ResourceLocation$$Type): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, $ResourceLocation>
public "type"(): $Class<$ResourceLocation>
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$FloatConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $ConfiguredFloat } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredFloat"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $AbstractConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$AbstractConfigProperty"

export class $FloatConfigProperty extends $AbstractConfigProperty<float> implements $ConfiguredFloat {
static readonly "CODEC": $Codec<float>

constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, float1: float)

public "codec"(): $Codec<float>
public "defaultValue"(): float
public "get"(loadedConfig0: $LoadedConfig$$Type): float
public "get"(): float
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): float
public "set"(float0: float): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, float1: float): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, float1: float): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, float>
public "type"(): $Class<float>
}
}

declare module "packages/net/blay09/mods/balm/api/event/$CropGrowEvent" {
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $CropGrowEvent extends $BalmEvent {
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

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Release$Pre" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenMouseEvent$Release } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Release"

export class $ScreenMouseEvent$Release$Pre extends $ScreenMouseEvent$Release {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenDrawEvent$Pre" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ScreenDrawEvent } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenDrawEvent"

export class $ScreenDrawEvent$Pre extends $ScreenDrawEvent {
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, float4: float)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig" {
import { $BalmConfigSchema$$Type } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $ConfiguredProperty$$Type } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $LoadedConfig, $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"

export interface $MutableLoadedConfig extends $LoadedConfig {
"applyFrom"(balmConfigSchema0: $BalmConfigSchema$$Type, loadedConfig1: $LoadedConfig$$Type): void
"applyFrom"(balmConfigSchema0: $BalmConfigSchema$$Type, loadedConfig1: $LoadedConfig$$Type, predicate2: $Predicate$$Type<$ConfiguredProperty$$Type<any>>): void
"copy"(): $MutableLoadedConfig
"getRaw"<T>(configuredProperty0: $ConfiguredProperty$$Type<T>): T
"mutable"(balmConfigSchema0: $BalmConfigSchema$$Type): $MutableLoadedConfig
"setRaw"<T>(configuredProperty0: $ConfiguredProperty$$Type<T>, t1: T): void
}

export namespace $MutableLoadedConfig {
const probejs$$marker: never
}
export abstract class $MutableLoadedConfig$$Static implements $MutableLoadedConfig {
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Click" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenMouseEvent } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent"

export class $ScreenMouseEvent$Click extends $ScreenMouseEvent {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$ListConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $ConfiguredList } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredList"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $AbstractConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$AbstractConfigProperty"

export class $ListConfigProperty<T> extends $AbstractConfigProperty<$List<T>> implements $ConfiguredList<T> {
constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, class1: $Class$$Type<T>, list2: $List$$Type<T>)

public "codec"(): $Codec<$List<T>>
public "get"(loadedConfig0: $LoadedConfig$$Type): $List<T>
public "get"(): $List<T>
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): $List<T>
public "nestedType"(): $Class<T>
public "set"(list0: $List$$Type<T>): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, list1: $List$$Type<T>): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, list1: $List$$Type<T>): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, $List<T>>
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent" {
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $ScreenMouseEvent extends $BalmEvent {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)

public "getButton"(): integer
public "getMouseX"(): double
public "getMouseY"(): double
public "getScreen"(): $Screen
get "button"(): integer
get "mouseX"(): double
get "mouseY"(): double
get "screen"(): $Screen
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent$Release$Post" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenKeyEvent$Release } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent$Release"

export class $ScreenKeyEvent$Release$Post extends $ScreenKeyEvent$Release {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/$CropGrowEvent$Pre" {
import { $CropGrowEvent } from "packages/net/blay09/mods/balm/api/event/$CropGrowEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $CropGrowEvent$Pre extends $CropGrowEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor()

}
}

declare module "packages/net/blay09/mods/waystones/api/$TeleportDestination" {
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"

export class $TeleportDestination {
constructor(serverLevel0: $ServerLevel$$Type, vec31: $Vec3$$Type, direction2: $Direction$$Type)

public "getDirection"(): $Direction
public "getLevel"(): $ServerLevel
public "getLocation"(): $Vec3
get "direction"(): $Direction
get "level"(): $ServerLevel
get "location"(): $Vec3
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$DoubleConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $ConfiguredDouble } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredDouble"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $AbstractConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$AbstractConfigProperty"

export class $DoubleConfigProperty extends $AbstractConfigProperty<double> implements $ConfiguredDouble {
static readonly "CODEC": $Codec<double>

constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, double1: double)

public "codec"(): $Codec<double>
public "defaultValue"(): double
public "get"(loadedConfig0: $LoadedConfig$$Type): double
public "get"(): double
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): double
public "set"(double0: double): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, double1: double): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, double1: double): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, double>
public "type"(): $Class<double>
}
}

declare module "packages/net/blay09/mods/waystones/api/$IWaystoneTeleportContext" {
import { $IWaystone, $IWaystone$$Type } from "packages/net/blay09/mods/waystones/api/$IWaystone"
import { $Mob } from "packages/net/minecraft/world/entity/$Mob"
import { $WarpMode, $WarpMode$$Type } from "packages/net/blay09/mods/waystones/core/$WarpMode"
import { $List } from "packages/java/util/$List"
import { $TeleportDestination, $TeleportDestination$$Type } from "packages/net/blay09/mods/waystones/api/$TeleportDestination"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $IWaystoneTeleportContext {
"addAdditionalEntity"(entity0: $Entity$$Type): void
"consumesWarpItem"(): boolean
"getAdditionalEntities"(): $List<$Entity>
"getCooldown"(): integer
"getDestination"(): $TeleportDestination
"getEntity"(): $Entity
"getFromWaystone"(): $IWaystone
"getLeashedEntities"(): $List<$Mob>
"getTargetWaystone"(): $IWaystone
"getWarpItem"(): $ItemStack
"getWarpMode"(): $WarpMode
"getXpCost"(): integer
"isDimensionalTeleport"(): boolean
"playsEffect"(): boolean
"playsSound"(): boolean
"setConsumesWarpItem"(boolean0: boolean): void
"setCooldown"(int0: integer): void
"setDestination"(teleportDestination0: $TeleportDestination$$Type): void
"setFromWaystone"(iWaystone0: $IWaystone$$Type): void
"setPlaysEffect"(boolean0: boolean): void
"setPlaysSound"(boolean0: boolean): void
"setWarpItem"(itemStack0: $ItemStack$$Type): void
"setWarpMode"(warpMode0: $WarpMode$$Type): void
"setXpCost"(int0: integer): void
get "additionalEntities"(): $List<$Entity>
get "cooldown"(): integer
get "destination"(): $TeleportDestination
get "entity"(): $Entity
get "fromWaystone"(): $IWaystone
get "leashedEntities"(): $List<$Mob>
get "targetWaystone"(): $IWaystone
get "warpItem"(): $ItemStack
get "warpMode"(): $WarpMode
get "xpCost"(): integer
get "dimensionalTeleport"(): boolean
set "cooldown"(value: integer)
set "destination"(value: $TeleportDestination$$Type)
set "fromWaystone"(value: $IWaystone$$Type)
set "warpItem"(value: $ItemStack$$Type)
set "warpMode"(value: $WarpMode$$Type)
set "xpCost"(value: integer)
}

export namespace $IWaystoneTeleportContext {
const probejs$$marker: never
}
export abstract class $IWaystoneTeleportContext$$Static implements $IWaystoneTeleportContext {
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredList" {
import { $NestedTypeHolder } from "packages/net/blay09/mods/balm/api/config/schema/$NestedTypeHolder"
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $ConfiguredList<T> extends $ConfiguredProperty<$List<T>>, $NestedTypeHolder<T> {
"category"(): string
"codec"(): $Codec<$List<T>>
"comment"(): string
"defaultValue"(): $List<T>
"get"(loadedConfig0: $LoadedConfig$$Type): $List<T>
"get"(): $List<T>
"getRaw"(loadedConfig0: $LoadedConfig$$Type): $List<T>
"name"(): string
"nestedType"(): $Class<T>
"parentSchema"(): $BalmConfigSchema
"set"(list0: $List$$Type<T>): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, list1: $List$$Type<T>): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, list1: $List$$Type<T>): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, $List<T>>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredList {
const probejs$$marker: never
}
export abstract class $ConfiguredList$$Static<T> implements $ConfiguredList<T> {
}
}

declare module "packages/net/blay09/mods/balm/api/event/$LivingHealEvent" {
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingHealEvent extends $BalmEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, float1: float)

public "getAmount"(): float
public "getEntity"(): $LivingEntity
get "amount"(): float
get "entity"(): $LivingEntity
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$RenderHandEvent" {
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $RenderHandEvent extends $BalmEvent {
constructor()
constructor(interactionHand0: $InteractionHand$$Type, itemStack1: $ItemStack$$Type, float2: float)

public "getHand"(): $InteractionHand
public "getItemStack"(): $ItemStack
public "getSwingProgress"(): float
get "hand"(): $InteractionHand
get "itemStack"(): $ItemStack
get "swingProgress"(): float
}
}

declare module "packages/net/blay09/mods/balm/mixin/$AbstractContainerScreenAccessor" {
import { $Slot, $Slot$$Type } from "packages/net/minecraft/world/inventory/$Slot"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $AbstractContainerScreenAccessor {
"callIsHovering"(slot0: $Slot$$Type, double1: double, double2: double): boolean
"callRenderSlot"(guiGraphics0: $GuiGraphics$$Type, slot1: $Slot$$Type): void
"getHoveredSlot"(): $Slot
"getImageHeight"(): integer
"getImageWidth"(): integer
"getLeftPos"(): integer
"getTopPos"(): integer
get "hoveredSlot"(): $Slot
get "imageHeight"(): integer
get "imageWidth"(): integer
get "leftPos"(): integer
get "topPos"(): integer
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerScreenAccessor$$Static implements $AbstractContainerScreenAccessor {
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$RecipesUpdatedEvent" {
import { $RegistryAccess, $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $RecipeManager, $RecipeManager$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

/** @deprecated */
export class $RecipesUpdatedEvent extends $BalmEvent {
constructor()
constructor(recipeManager0: $RecipeManager$$Type, registryAccess1: $RegistryAccess$$Type)

public "getRecipeManager"(): $RecipeManager
public "getRegistryAccess"(): $RegistryAccess
get "recipeManager"(): $RecipeManager
get "registryAccess"(): $RegistryAccess
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$FovUpdateEvent" {
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FovUpdateEvent extends $BalmEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type)

public "getEntity"(): $LivingEntity
public "getFov"(): float
public "setFov"(float0: float): void
get "entity"(): $LivingEntity
get "fov"(): float
set "fov"(value: float)
}
}

declare module "packages/net/blay09/mods/balm/api/event/$TossItemEvent" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $TossItemEvent extends $BalmEvent {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)

public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
get "itemStack"(): $ItemStack
get "player"(): $Player
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent$Press$Pre" {
import { $ScreenKeyEvent$Press } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent$Press"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenKeyEvent$Press$Pre extends $ScreenKeyEvent$Press {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$UseItemInputEvent" {
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $UseItemInputEvent extends $BalmEvent {
constructor()
constructor(interactionHand0: $InteractionHand$$Type)

public "getHand"(): $InteractionHand
get "hand"(): $InteractionHand
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$IntConfigProperty" {
import { $ConfiguredInt } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredInt"
import { $ConfigPropertyBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $AbstractConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$AbstractConfigProperty"

export class $IntConfigProperty extends $AbstractConfigProperty<integer> implements $ConfiguredInt {
static readonly "CODEC": $Codec<integer>

constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, int1: integer)

public "codec"(): $Codec<integer>
public "defaultValue"(): integer
public "get"(loadedConfig0: $LoadedConfig$$Type): integer
public "get"(): integer
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): integer
public "set"(int0: integer): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, int1: integer): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, integer1: integer): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, integer>
public "type"(): $Class<integer>
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent$Release" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenKeyEvent } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenKeyEvent"

export class $ScreenKeyEvent$Release extends $ScreenKeyEvent {
constructor(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/waystones/worldgen/$WaystoneStructurePoolElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WaystoneStructurePoolElement {
"waystones$isWaystone"(): boolean
"waystones$setIsWaystone"(boolean0: boolean): void
}

export namespace $WaystoneStructurePoolElement {
const probejs$$marker: never
}
export abstract class $WaystoneStructurePoolElement$$Static implements $WaystoneStructurePoolElement {
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredLong" {
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $ConfiguredLong extends $ConfiguredProperty<long> {
"category"(): string
"codec"(): $Codec<long>
"comment"(): string
"defaultValue"(): long
"get"(loadedConfig0: $LoadedConfig$$Type): long
"get"(): long
"getRaw"(loadedConfig0: $LoadedConfig$$Type): long
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(long0: long): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, long1: long): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, long1: long): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, long>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredLong {
const probejs$$marker: never
}
export abstract class $ConfiguredLong$$Static implements $ConfiguredLong {
}
}

declare module "packages/net/blay09/mods/balm/api/event/$PlayerLogoutEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $PlayerLogoutEvent extends $BalmEvent {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
}

declare module "packages/net/blay09/mods/balm/api/event/$ItemCraftedEvent" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"

export class $ItemCraftedEvent extends $BalmEvent {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type, container2: $Container$$Type)

public "getCraftMatrix"(): $Container
public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
get "craftMatrix"(): $Container
get "itemStack"(): $ItemStack
get "player"(): $Player
}
}

declare module "packages/net/blay09/mods/balm/api/event/server/$ServerStartedEvent" {
import { $MinecraftServer, $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $ServerStartedEvent extends $BalmEvent {
constructor()
constructor(minecraftServer0: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Click$Post" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenMouseEvent$Click } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Click"

export class $ScreenMouseEvent$Click$Post extends $ScreenMouseEvent$Click {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$OpenScreenEvent" {
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $OpenScreenEvent extends $BalmEvent {
constructor()
constructor(screen0: $Screen$$Type)

public "getNewScreen"(): $Screen
public "getScreen"(): $Screen
public "setScreen"(screen0: $Screen$$Type): void
get "newScreen"(): $Screen
get "screen"(): $Screen
set "screen"(value: $Screen$$Type)
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/impl/$ConfigSchemaImpl" {
import { $ConfigCategoryBuilder } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigCategoryBuilder"
import { $ConfigCategory } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigCategory"
import { $ConfigPropertyBuilder } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $Collection } from "packages/java/util/$Collection"
import { $ConfigSchemaBuilder } from "packages/net/blay09/mods/balm/api/config/schema/$ConfigSchemaBuilder"
import { $ConfiguredProperty, $ConfiguredProperty$$Type } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LoadedConfig } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"

export class $ConfigSchemaImpl implements $BalmConfigSchema, $ConfigSchemaBuilder {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "addAndReturn"<T extends $ConfiguredProperty<any>>(t0: T): T
public "categories"(): $Collection<$ConfigCategory>
public "category"(string0: string): $ConfigCategoryBuilder
public static "create"(resourceLocation0: $ResourceLocation$$Type): $ConfigSchemaImpl
public "defaults"(): $LoadedConfig
public "findProperty"(string0: string, string1: string): $ConfiguredProperty<any>
public "findRootProperty"(string0: string): $ConfiguredProperty<any>
public "identifier"(): $ResourceLocation
public "property"(string0: string): $ConfigPropertyBuilder
public "rootProperties"(): $Collection<$ConfiguredProperty<any>>
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ContainerScreenDrawEvent$Background" {
import { $ContainerScreenDrawEvent } from "packages/net/blay09/mods/balm/api/event/client/screen/$ContainerScreenDrawEvent"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ContainerScreenDrawEvent$Background extends $ContainerScreenDrawEvent {
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/waystones/api/$EventResult" {
import { $Enum } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $EventResult extends $Enum<$EventResult> {
static readonly "ALLOW": $EventResult
static readonly "DEFAULT": $EventResult
static readonly "DENY": $EventResult

public static "valueOf"(string0: string): $EventResult
public static "values"(): $EventResult[]
public "withDefault"(supplier0: $Supplier$$Type<boolean>): boolean
}
}

declare module "packages/net/blay09/mods/balm/mixin/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {
"setX"(int0: integer): void
"setY"(int0: integer): void
set "x"(value: integer)
set "y"(value: integer)
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
export abstract class $SlotAccessor$$Static implements $SlotAccessor {
}
}

declare module "packages/net/blay09/mods/waystones/api/$WaystoneTeleportEvent$Post" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $WaystoneTeleportEvent } from "packages/net/blay09/mods/waystones/api/$WaystoneTeleportEvent"
import { $IWaystoneTeleportContext, $IWaystoneTeleportContext$$Type } from "packages/net/blay09/mods/waystones/api/$IWaystoneTeleportContext"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $WaystoneTeleportEvent$Post extends $WaystoneTeleportEvent {
constructor()
constructor(iWaystoneTeleportContext0: $IWaystoneTeleportContext$$Type, list1: $List$$Type<$Entity$$Type>)

public "getContext"(): $IWaystoneTeleportContext
public "getTeleportedEntities"(): $List<$Entity>
get "context"(): $IWaystoneTeleportContext
get "teleportedEntities"(): $List<$Entity>
}
}

declare module "packages/net/blay09/mods/balm/api/event/$PlayerRespawnEvent" {
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $PlayerRespawnEvent extends $BalmEvent {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, serverPlayer1: $ServerPlayer$$Type)

public "getNewPlayer"(): $ServerPlayer
public "getOldPlayer"(): $ServerPlayer
get "newPlayer"(): $ServerPlayer
get "oldPlayer"(): $ServerPlayer
}
}

declare module "packages/net/blay09/mods/balm/mixin/$ScreenAccessor" {
import { $GuiEventListener } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $Renderable } from "packages/net/minecraft/client/gui/components/$Renderable"
import { $List } from "packages/java/util/$List"
import { $NarratableEntry } from "packages/net/minecraft/client/gui/narration/$NarratableEntry"

export interface $ScreenAccessor {
"balm_getChildren"(): $List<$GuiEventListener>
"balm_getNarratables"(): $List<$NarratableEntry>
"balm_getRenderables"(): $List<$Renderable>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export abstract class $ScreenAccessor$$Static implements $ScreenAccessor {
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$BlockHighlightDrawEvent" {
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $BlockHitResult, $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Camera, $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $BlockHighlightDrawEvent extends $BalmEvent {
constructor()
constructor(blockHitResult0: $BlockHitResult$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, camera3: $Camera$$Type)

public "getCamera"(): $Camera
public "getHitResult"(): $BlockHitResult
public "getMultiBufferSource"(): $MultiBufferSource
public "getPoseStack"(): $PoseStack
get "camera"(): $Camera
get "hitResult"(): $BlockHitResult
get "multiBufferSource"(): $MultiBufferSource
get "poseStack"(): $PoseStack
}
}

declare module "packages/net/blay09/mods/balm/api/event/$BreakBlockEvent" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BreakBlockEvent extends $BalmEvent {
constructor()
constructor(level0: $Level$$Type, player1: $Player$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockEntity4: $BlockEntity$$Type)

public "getBlockEntity"(): $BlockEntity
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "blockEntity"(): $BlockEntity
get "level"(): $Level
get "player"(): $Player
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenInitEvent$Pre" {
import { $ScreenInitEvent } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenInitEvent"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $ScreenInitEvent$Pre extends $ScreenInitEvent {
constructor(screen0: $Screen$$Type)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$GuiDrawEvent" {
import { $GuiDrawEvent$Element, $GuiDrawEvent$Element$$Type } from "packages/net/blay09/mods/balm/api/event/client/$GuiDrawEvent$Element"
import { $Window, $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $GuiGraphics, $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $GuiDrawEvent extends $BalmEvent {
constructor()
constructor(window0: $Window$$Type, guiGraphics1: $GuiGraphics$$Type, element2: $GuiDrawEvent$Element$$Type)

public "getElement"(): $GuiDrawEvent$Element
public "getGuiGraphics"(): $GuiGraphics
public "getWindow"(): $Window
get "element"(): $GuiDrawEvent$Element
get "guiGraphics"(): $GuiGraphics
get "window"(): $Window
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/$GuiDrawEvent$Element" {
import { $Enum } from "packages/java/lang/$Enum"

export class $GuiDrawEvent$Element extends $Enum<$GuiDrawEvent$Element> {
static readonly "ALL": $GuiDrawEvent$Element
static readonly "BOSS_INFO": $GuiDrawEvent$Element
static readonly "CHAT": $GuiDrawEvent$Element
static readonly "DEBUG": $GuiDrawEvent$Element
static readonly "HEALTH": $GuiDrawEvent$Element
static readonly "PLAYER_LIST": $GuiDrawEvent$Element

public static "valueOf"(string0: string): $GuiDrawEvent$Element
public static "values"(): $GuiDrawEvent$Element[]
}
}

declare module "packages/net/blay09/mods/waystones/api/$WaystoneTeleportEvent$Pre" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $WaystoneTeleportEvent } from "packages/net/blay09/mods/waystones/api/$WaystoneTeleportEvent"
import { $IWaystoneTeleportContext, $IWaystoneTeleportContext$$Type } from "packages/net/blay09/mods/waystones/api/$IWaystoneTeleportContext"
import { $EventResult, $EventResult$$Type } from "packages/net/blay09/mods/waystones/api/$EventResult"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $TeleportDestination } from "packages/net/blay09/mods/waystones/api/$TeleportDestination"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $WaystoneTeleportEvent$Pre extends $WaystoneTeleportEvent {
constructor()
constructor(iWaystoneTeleportContext0: $IWaystoneTeleportContext$$Type)

public "addAdditionalEntity"(entity0: $Entity$$Type): void
public "getConsumeItemResult"(): $EventResult
public "getContext"(): $IWaystoneTeleportContext
public "getCooldown"(): integer
public "getDestination"(): $TeleportDestination
public "getDimensionalTeleportResult"(): $EventResult
public "getXpCost"(): integer
public "setConsumeItemResult"(eventResult0: $EventResult$$Type): void
public "setCooldown"(int0: integer): void
public "setDestination"(serverLevel0: $ServerLevel$$Type, vec31: $Vec3$$Type, direction2: $Direction$$Type): void
public "setDimensionalTeleportResult"(eventResult0: $EventResult$$Type): void
public "setXpCost"(int0: integer): void
get "consumeItemResult"(): $EventResult
get "context"(): $IWaystoneTeleportContext
get "cooldown"(): integer
get "destination"(): $TeleportDestination
get "dimensionalTeleportResult"(): $EventResult
get "xpCost"(): integer
set "consumeItemResult"(value: $EventResult$$Type)
set "cooldown"(value: integer)
set "dimensionalTeleportResult"(value: $EventResult$$Type)
set "xpCost"(value: integer)
}
}

declare module "packages/net/blay09/mods/balm/api/event/$LivingFallEvent" {
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingFallEvent extends $BalmEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type)

public "getEntity"(): $LivingEntity
public "getFallDamageOverride"(): float
public "setFallDamageOverride"(float0: float): void
get "entity"(): $LivingEntity
get "fallDamageOverride"(): float
set "fallDamageOverride"(value: float)
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$LongConfigProperty" {
import { $ConfigPropertyBuilder$$Type } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredLong } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredLong"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $AbstractConfigProperty } from "packages/net/blay09/mods/balm/api/config/schema/builder/$AbstractConfigProperty"

export class $LongConfigProperty extends $AbstractConfigProperty<long> implements $ConfiguredLong {
static readonly "CODEC": $Codec<long>

constructor(configPropertyBuilder0: $ConfigPropertyBuilder$$Type, long1: long)

public "codec"(): $Codec<long>
public "defaultValue"(): long
public "get"(loadedConfig0: $LoadedConfig$$Type): long
public "get"(): long
public "getRaw"(loadedConfig0: $LoadedConfig$$Type): long
public "set"(long0: long): void
public "set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, long1: long): void
public "setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, long1: long): void
public "streamCodec"(): $StreamCodec<$FriendlyByteBuf, long>
public "type"(): $Class<long>
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredString" {
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $ConfiguredString extends $ConfiguredProperty<string> {
"category"(): string
"codec"(): $Codec<string>
"comment"(): string
"defaultValue"(): string
"get"(loadedConfig0: $LoadedConfig$$Type): string
"get"(): string
"getRaw"(loadedConfig0: $LoadedConfig$$Type): string
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(string0: string): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, string1: string): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, string1: string): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, string>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredString {
const probejs$$marker: never
}
export abstract class $ConfiguredString$$Static implements $ConfiguredString {
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Click$Pre" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenMouseEvent$Click } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Click"

export class $ScreenMouseEvent$Click$Pre extends $ScreenMouseEvent$Click {
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredInt" {
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $ConfiguredInt extends $ConfiguredProperty<integer> {
"category"(): string
"codec"(): $Codec<integer>
"comment"(): string
"defaultValue"(): integer
"get"(loadedConfig0: $LoadedConfig$$Type): integer
"get"(): integer
"getRaw"(loadedConfig0: $LoadedConfig$$Type): integer
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(int0: integer): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, int1: integer): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, integer1: integer): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, integer>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredInt {
const probejs$$marker: never
}
export abstract class $ConfiguredInt$$Static implements $ConfiguredInt {
}
}

declare module "packages/net/blay09/mods/balm/api/event/$CropGrowEvent$Post" {
import { $CropGrowEvent } from "packages/net/blay09/mods/balm/api/event/$CropGrowEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $CropGrowEvent$Post extends $CropGrowEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor()

}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/builder/$PropertyHolderBuilder" {
import { $ConfigPropertyBuilder } from "packages/net/blay09/mods/balm/api/config/schema/builder/$ConfigPropertyBuilder"

export interface $PropertyHolderBuilder {
"property"(string0: string): $ConfigPropertyBuilder
}

export namespace $PropertyHolderBuilder {
const probejs$$marker: never
}
export abstract class $PropertyHolderBuilder$$Static implements $PropertyHolderBuilder {
}
}

declare module "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredDouble" {
import { $BalmConfigSchema } from "packages/net/blay09/mods/balm/api/config/schema/$BalmConfigSchema"
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class } from "packages/java/lang/$Class"
import { $StreamCodec } from "packages/net/blay09/mods/balm/common/codec/$StreamCodec"
import { $MutableLoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$MutableLoadedConfig"
import { $ConfiguredProperty } from "packages/net/blay09/mods/balm/api/config/schema/$ConfiguredProperty"
import { $LoadedConfig$$Type } from "packages/net/blay09/mods/balm/api/config/$LoadedConfig"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $ConfiguredDouble extends $ConfiguredProperty<double> {
"category"(): string
"codec"(): $Codec<double>
"comment"(): string
"defaultValue"(): double
"get"(loadedConfig0: $LoadedConfig$$Type): double
"get"(): double
"getRaw"(loadedConfig0: $LoadedConfig$$Type): double
"name"(): string
"parentSchema"(): $BalmConfigSchema
"set"(double0: double): void
"set"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, double1: double): void
"setRaw"(mutableLoadedConfig0: $MutableLoadedConfig$$Type, double1: double): void
"streamCodec"(): $StreamCodec<$FriendlyByteBuf, double>
"synced"(): boolean
"type"(): $Class<any>
}

export namespace $ConfiguredDouble {
const probejs$$marker: never
}
export abstract class $ConfiguredDouble$$Static implements $ConfiguredDouble {
}
}

declare module "packages/net/blay09/mods/balm/api/event/$UseItemEvent" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $InteractionResult, $InteractionResult$$Type } from "packages/net/minecraft/world/$InteractionResult"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"

export class $UseItemEvent extends $BalmEvent {
constructor(player0: $Player$$Type, level1: $Level$$Type, interactionHand2: $InteractionHand$$Type)
constructor()

public "getHand"(): $InteractionHand
public "getInteractionResult"(): $InteractionResult
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "setResult"(interactionResult0: $InteractionResult$$Type): void
get "hand"(): $InteractionHand
get "interactionResult"(): $InteractionResult
get "level"(): $Level
get "player"(): $Player
set "result"(value: $InteractionResult$$Type)
}
}

declare module "packages/net/blay09/mods/waystones/api/$WaystoneActivatedEvent" {
import { $IWaystone, $IWaystone$$Type } from "packages/net/blay09/mods/waystones/api/$IWaystone"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $WaystoneActivatedEvent extends $BalmEvent {
constructor()
constructor(player0: $Player$$Type, iWaystone1: $IWaystone$$Type)

public "getPlayer"(): $Player
public "getWaystone"(): $IWaystone
get "player"(): $Player
get "waystone"(): $IWaystone
}
}

declare module "packages/net/blay09/mods/balm/api/event/server/$ServerReloadedEvent" {
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $ReloadableServerResources, $ReloadableServerResources$$Type } from "packages/net/minecraft/server/$ReloadableServerResources"

export class $ServerReloadedEvent extends $BalmEvent {
constructor()
constructor(reloadableServerResources0: $ReloadableServerResources$$Type)

public "getResources"(): $ReloadableServerResources
public "getServer"(): $MinecraftServer
get "resources"(): $ReloadableServerResources
get "server"(): $MinecraftServer
}
}

declare module "packages/net/blay09/mods/waystones/api/$KnownWaystonesEvent" {
import { $IWaystone, $IWaystone$$Type } from "packages/net/blay09/mods/waystones/api/$IWaystone"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $KnownWaystonesEvent extends $BalmEvent {
constructor()
constructor(list0: $List$$Type<$IWaystone$$Type>)

public "getWaystones"(): $List<$IWaystone>
get "waystones"(): $List<$IWaystone>
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ContainerScreenDrawEvent" {
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"
import { $GuiGraphics, $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ContainerScreenDrawEvent extends $BalmEvent {
constructor()
constructor(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer)

public "getGuiGraphics"(): $GuiGraphics
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getScreen"(): $Screen
get "guiGraphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
get "screen"(): $Screen
}
}

declare module "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent$Drag" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ScreenMouseEvent } from "packages/net/blay09/mods/balm/api/event/client/screen/$ScreenMouseEvent"

export class $ScreenMouseEvent$Drag extends $ScreenMouseEvent {
constructor()
constructor(screen0: $Screen$$Type, double1: double, double2: double, int3: integer, double4: double, double5: double)

public "getDragX"(): double
public "getDragY"(): double
get "dragX"(): double
get "dragY"(): double
}
}

declare module "packages/net/blay09/mods/waystones/core/$WarpMode" {
import { $IWaystone } from "packages/net/blay09/mods/waystones/api/$IWaystone"
import { $BiPredicate } from "packages/java/util/function/$BiPredicate"
import { $Enum } from "packages/java/lang/$Enum"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $WarpMode extends $Enum<$WarpMode> {
static readonly "BOUND_SCROLL": $WarpMode
static readonly "CUSTOM": $WarpMode
static readonly "INVENTORY_BUTTON": $WarpMode
static readonly "PORTSTONE_TO_WAYSTONE": $WarpMode
static readonly "RETURN_SCROLL": $WarpMode
static readonly "SHARESTONE_TO_SHARESTONE": $WarpMode
static readonly "WARP_PLATE": $WarpMode
static readonly "WARP_SCROLL": $WarpMode
static readonly "WARP_STONE": $WarpMode
static readonly "WAYSTONE_TO_WAYSTONE": $WarpMode
static "values": $WarpMode[]

public "consumesItem"(): boolean
public "getAllowTeleportPredicate"(): $BiPredicate<$Entity, $IWaystone>
public "getXpCostMultiplier"(): double
public static "valueOf"(string0: string): $WarpMode
public static "values"(): $WarpMode[]
get "allowTeleportPredicate"(): $BiPredicate<$Entity, $IWaystone>
get "xpCostMultiplier"(): double
}
}

declare module "packages/net/blay09/mods/waystones/api/$WaystoneTeleportEvent" {
import { $BalmEvent } from "packages/net/blay09/mods/balm/api/event/$BalmEvent"

export class $WaystoneTeleportEvent extends $BalmEvent {
constructor()

}
}

