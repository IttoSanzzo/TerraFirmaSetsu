declare module "packages/net/minecraft/world/level/lighting/$LayerLightSectionStorage$SectionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LayerLightSectionStorage$SectionType$$Type = ($LayerLightSectionStorage$SectionType | ("empty" | "light_only" | "light_and_data"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LayerLightSectionStorage$SectionType_ = $LayerLightSectionStorage$SectionType$$Type;
}
}

declare module "packages/net/minecraft/world/level/lighting/$LightEngine" {
import { $LayerLightSectionStorage, $LayerLightSectionStorage$$Type } from "packages/net/minecraft/world/level/lighting/$LayerLightSectionStorage"
import { $DataLayerStorageMap, $DataLayerStorageMap$$Type } from "packages/net/minecraft/world/level/lighting/$DataLayerStorageMap"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LightEngine$$Type<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> = ($LightEngine<M, S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LightEngine_<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> = $LightEngine$$Type<M, S>;
}
}

declare module "packages/net/minecraft/world/level/lighting/$LayerLightSectionStorage" {
import { $DataLayerStorageMap, $DataLayerStorageMap$$Type } from "packages/net/minecraft/world/level/lighting/$DataLayerStorageMap"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LayerLightSectionStorage$$Type<M extends $DataLayerStorageMap<M>> = ($LayerLightSectionStorage<M>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LayerLightSectionStorage_<M extends $DataLayerStorageMap<M>> = $LayerLightSectionStorage$$Type<M>;
}
}

declare module "packages/net/minecraft/world/level/lighting/$LevelLightEngine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelLightEngine$$Type = ($LevelLightEngine);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelLightEngine_ = $LevelLightEngine$$Type;
}
}

declare module "packages/net/minecraft/world/level/lighting/$LightEventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LightEventListener$$Type = ($LightEventListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LightEventListener_ = $LightEventListener$$Type;
}
}

declare module "packages/net/minecraft/world/level/lighting/$ChunkSkyLightSources" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkSkyLightSources$$Type = ($ChunkSkyLightSources);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkSkyLightSources_ = $ChunkSkyLightSources$$Type;
}
}

declare module "packages/net/minecraft/world/level/lighting/$DataLayerStorageMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataLayerStorageMap$$Type<M extends $DataLayerStorageMap<M>> = ($DataLayerStorageMap<M>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataLayerStorageMap_<M extends $DataLayerStorageMap<M>> = $DataLayerStorageMap$$Type<M>;
}
}

declare module "packages/net/minecraft/world/level/lighting/$LayerLightEventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LayerLightEventListener$$Type = ($LayerLightEventListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LayerLightEventListener_ = $LayerLightEventListener$$Type;
}
}

