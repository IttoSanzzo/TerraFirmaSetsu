declare module "packages/net/minecraftforge/entity/$PartEntity" {
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PartEntity$$Type<T extends $Entity> = ($PartEntity<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PartEntity_<T extends $Entity> = $PartEntity$$Type<T>;
}
}

declare module "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IEntityAdditionalSpawnData$$Type = ($IEntityAdditionalSpawnData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IEntityAdditionalSpawnData_ = $IEntityAdditionalSpawnData$$Type;
}
}

