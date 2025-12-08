declare module "packages/net/minecraft/client/model/geom/$ModelPart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModelPart$$Type = ($ModelPart);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModelPart_ = $ModelPart$$Type;
}
}

declare module "packages/net/minecraft/client/model/$AgeableListModel" {
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AgeableListModel$$Type<E extends $Entity> = ($AgeableListModel<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AgeableListModel_<E extends $Entity> = $AgeableListModel$$Type<E>;
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$CubeListBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CubeListBuilder$$Type = ($CubeListBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CubeListBuilder_ = $CubeListBuilder$$Type;
}
}

declare module "packages/net/minecraft/client/model/$EntityModel" {
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityModel$$Type<T extends $Entity> = ($EntityModel<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityModel_<T extends $Entity> = $EntityModel$$Type<T>;
}
}

declare module "packages/net/minecraft/client/model/geom/$ModelPart$Visitor" {
import { $PoseStack$Pose } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $ModelPart$Cube } from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModelPart$Visitor$$Type = ($ModelPart$Visitor | ((arg0: $PoseStack$Pose, arg1: string, arg2: integer, arg3: $ModelPart$Cube) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModelPart$Visitor_ = $ModelPart$Visitor$$Type;
}
}

declare module "packages/net/minecraft/client/model/geom/$EntityModelSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityModelSet$$Type = ($EntityModelSet);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityModelSet_ = $EntityModelSet$$Type;
}
}

declare module "packages/net/minecraft/client/model/$Model" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Model$$Type = ($Model);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Model_ = $Model$$Type;
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$CubeDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CubeDefinition$$Type = ($CubeDefinition);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CubeDefinition_ = $CubeDefinition$$Type;
}
}

declare module "packages/net/minecraft/client/model/$HeadedModel" {
import { $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HeadedModel$$Type = ($HeadedModel | (() => $ModelPart$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HeadedModel_ = $HeadedModel$$Type;
}
}

declare module "packages/net/minecraft/client/model/geom/$ModelLayerLocation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModelLayerLocation$$Type = ($ModelLayerLocation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModelLayerLocation_ = $ModelLayerLocation$$Type;
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$MeshDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MeshDefinition$$Type = ($MeshDefinition);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MeshDefinition_ = $MeshDefinition$$Type;
}
}

declare module "packages/net/minecraft/client/model/geom/$PartPose" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PartPose$$Type = ($PartPose);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PartPose_ = $PartPose$$Type;
}
}

declare module "packages/net/minecraft/client/model/$ArmedModel" {
import { $HumanoidArm } from "packages/net/minecraft/world/entity/$HumanoidArm"
import { $PoseStack } from "packages/com/mojang/blaze3d/vertex/$PoseStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArmedModel$$Type = ($ArmedModel | ((arg0: $HumanoidArm, arg1: $PoseStack) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArmedModel_ = $ArmedModel$$Type;
}
}

declare module "packages/net/minecraft/client/model/$TridentModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TridentModel$$Type = ($TridentModel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TridentModel_ = $TridentModel$$Type;
}
}

declare module "packages/net/minecraft/client/model/$HumanoidModel$ArmPose" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HumanoidModel$ArmPose$$Type = ($HumanoidModel$ArmPose | ("empty" | "item" | "block" | "bow_and_arrow" | "throw_spear" | "crossbow_charge" | "crossbow_hold" | "spyglass" | "toot_horn" | "brush"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HumanoidModel$ArmPose_ = $HumanoidModel$ArmPose$$Type;
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$CubeDeformation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CubeDeformation$$Type = ($CubeDeformation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CubeDeformation_ = $CubeDeformation$$Type;
}
}

declare module "packages/net/minecraft/client/model/$SkullModelBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SkullModelBase$$Type = ($SkullModelBase);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SkullModelBase_ = $SkullModelBase$$Type;
}
}

declare module "packages/net/minecraft/client/model/geom/$ModelPart$Cube" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModelPart$Cube$$Type = ($ModelPart$Cube);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModelPart$Cube_ = $ModelPart$Cube$$Type;
}
}

declare module "packages/net/minecraft/client/model/$HumanoidModel" {
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HumanoidModel$$Type<T extends $LivingEntity> = ($HumanoidModel<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HumanoidModel_<T extends $LivingEntity> = $HumanoidModel$$Type<T>;
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$LayerDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LayerDefinition$$Type = ($LayerDefinition);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LayerDefinition_ = $LayerDefinition$$Type;
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$PartDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PartDefinition$$Type = ($PartDefinition);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PartDefinition_ = $PartDefinition$$Type;
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$MaterialDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MaterialDefinition$$Type = ($MaterialDefinition);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MaterialDefinition_ = $MaterialDefinition$$Type;
}
}

declare module "packages/net/minecraft/client/model/$PlayerModel" {
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerModel$$Type<T extends $LivingEntity> = ($PlayerModel<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerModel_<T extends $LivingEntity> = $PlayerModel$$Type<T>;
}
}

