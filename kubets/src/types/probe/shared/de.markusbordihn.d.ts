declare module "packages/de/markusbordihn/adaptiveperformancetweakscore/server/$ServerLoad$ServerLoadLevel" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ServerLoad$ServerLoadLevel extends $Enum<$ServerLoad$ServerLoadLevel> {
static readonly "HIGH": $ServerLoad$ServerLoadLevel
static readonly "LOW": $ServerLoad$ServerLoadLevel
static readonly "MEDIUM": $ServerLoad$ServerLoadLevel
static readonly "NORMAL": $ServerLoad$ServerLoadLevel
static readonly "VERY_HIGH": $ServerLoad$ServerLoadLevel
static readonly "VERY_LOW": $ServerLoad$ServerLoadLevel

public static "valueOf"(string0: string): $ServerLoad$ServerLoadLevel
public static "values"(): $ServerLoad$ServerLoadLevel[]
}
}

declare module "packages/de/markusbordihn/adaptiveperformancetweakscore/server/$OptimizationEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Dist$$Type } from "packages/net/minecraftforge/api/distmarker/$Dist"

export class $OptimizationEvent extends $Event {
constructor()
constructor(dist0: $Dist$$Type)

}
}

declare module "packages/de/markusbordihn/adaptiveperformancetweakscore/server/$ServerLevelLoadEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ServerLevelLoad$ServerLevelLoadLevel, $ServerLevelLoad$ServerLevelLoadLevel$$Type } from "packages/de/markusbordihn/adaptiveperformancetweakscore/server/$ServerLevelLoad$ServerLevelLoadLevel"
import { $Dist$$Type } from "packages/net/minecraftforge/api/distmarker/$Dist"

export class $ServerLevelLoadEvent extends $Event {
constructor()
constructor(serverLevel0: $ServerLevel$$Type, serverLevelLoadLevel1: $ServerLevelLoad$ServerLevelLoadLevel$$Type, serverLevelLoadLevel2: $ServerLevelLoad$ServerLevelLoadLevel$$Type, double3: double, double4: double, dist5: $Dist$$Type)

public "getServerLevelLoadLevel"(): $ServerLevelLoad$ServerLevelLoadLevel
public "getServerLevelName"(): string
public "hasChanged"(): boolean
get "serverLevelLoadLevel"(): $ServerLevelLoad$ServerLevelLoadLevel
get "serverLevelName"(): string
}
}

declare module "packages/de/markusbordihn/adaptiveperformancetweakscore/server/$ServerLevelLoad$ServerLevelLoadLevel" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ServerLevelLoad$ServerLevelLoadLevel extends $Enum<$ServerLevelLoad$ServerLevelLoadLevel> {
static readonly "HIGH": $ServerLevelLoad$ServerLevelLoadLevel
static readonly "LOW": $ServerLevelLoad$ServerLevelLoadLevel
static readonly "MEDIUM": $ServerLevelLoad$ServerLevelLoadLevel
static readonly "NORMAL": $ServerLevelLoad$ServerLevelLoadLevel
static readonly "VERY_HIGH": $ServerLevelLoad$ServerLevelLoadLevel
static readonly "VERY_LOW": $ServerLevelLoad$ServerLevelLoadLevel

public static "valueOf"(string0: string): $ServerLevelLoad$ServerLevelLoadLevel
public static "values"(): $ServerLevelLoad$ServerLevelLoadLevel[]
}
}

declare module "packages/de/markusbordihn/adaptiveperformancetweakscore/server/$ServerLoadEvent" {
import { $ServerLoad$ServerLoadLevel$$Type } from "packages/de/markusbordihn/adaptiveperformancetweakscore/server/$ServerLoad$ServerLoadLevel"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Dist$$Type } from "packages/net/minecraftforge/api/distmarker/$Dist"

export class $ServerLoadEvent extends $Event {
constructor()
constructor(serverLoadLevel0: $ServerLoad$ServerLoadLevel$$Type, serverLoadLevel1: $ServerLoad$ServerLoadLevel$$Type, double2: double, double3: double, dist4: $Dist$$Type)

public "hasChanged"(): boolean
public "hasHighServerLoad"(): boolean
public "hasLowServerLoad"(): boolean
public "hasNormalServerLoad"(): boolean
public "hasVeryHighServerLoad"(): boolean
}
}

