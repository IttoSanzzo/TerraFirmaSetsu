declare module "packages/net/minecraftforge/forgespi/language/$IConfigurable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IConfigurable$$Type = ($IConfigurable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IConfigurable_ = $IConfigurable$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModInfo$$Type = ($IModInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModInfo_ = $IModInfo$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/locating/$ForgeFeature$Bound" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeFeature$Bound$$Type = ($ForgeFeature$Bound);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeFeature$Bound_ = $ForgeFeature$Bound$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModLanguageProvider$$Type = ($IModLanguageProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModLanguageProvider_ = $IModLanguageProvider$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider$IModLanguageLoader" {
import { $IModInfo } from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import { $ModuleLayer } from "packages/java/lang/$ModuleLayer"
import { $ModFileScanData } from "packages/net/minecraftforge/forgespi/language/$ModFileScanData"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModLanguageProvider$IModLanguageLoader$$Type = ($IModLanguageProvider$IModLanguageLoader | ((arg0: $IModInfo, arg1: $ModFileScanData, arg2: $ModuleLayer) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModLanguageProvider$IModLanguageLoader_ = $IModLanguageProvider$IModLanguageLoader$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/locating/$IModFile$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModFile$Type$$Type = ($IModFile$Type | ("mod" | "library" | "langprovider" | "gamelibrary"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModFile$Type_ = $IModFile$Type$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModFileScanData$$Type = ($ModFileScanData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModFileScanData_ = $ModFileScanData$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$ILifecycleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ILifecycleEvent$$Type<R extends $ILifecycleEvent<any>> = ($ILifecycleEvent<R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ILifecycleEvent_<R extends $ILifecycleEvent<any>> = $ILifecycleEvent$$Type<R>;
}
}

declare module "packages/net/minecraftforge/forgespi/locating/$IModFile" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModFile$$Type = ($IModFile);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModFile_ = $IModFile$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModFileInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModFileInfo$$Type = ($IModFileInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModFileInfo_ = $IModFileInfo$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData$AnnotationData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModFileScanData$AnnotationData$$Type = ($ModFileScanData$AnnotationData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModFileScanData$AnnotationData_ = $ModFileScanData$AnnotationData$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModInfo$DependencySide" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModInfo$DependencySide$$Type = ($IModInfo$DependencySide | ("client" | "server" | "both"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModInfo$DependencySide_ = $IModInfo$DependencySide$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData$ClassData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModFileScanData$ClassData$$Type = ($ModFileScanData$ClassData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModFileScanData$ClassData_ = $ModFileScanData$ClassData$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModInfo$Ordering" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModInfo$Ordering$$Type = ($IModInfo$Ordering | ("before" | "after" | "none"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModInfo$Ordering_ = $IModInfo$Ordering$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModInfo$ModVersion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModInfo$ModVersion$$Type = ($IModInfo$ModVersion);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModInfo$ModVersion_ = $IModInfo$ModVersion$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/language/$IModFileInfo$LanguageSpec" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModFileInfo$LanguageSpec$$Type = ($IModFileInfo$LanguageSpec);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModFileInfo$LanguageSpec_ = $IModFileInfo$LanguageSpec$$Type;
}
}

declare module "packages/net/minecraftforge/forgespi/locating/$IModProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModProvider$$Type = ($IModProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModProvider_ = $IModProvider$$Type;
}
}

