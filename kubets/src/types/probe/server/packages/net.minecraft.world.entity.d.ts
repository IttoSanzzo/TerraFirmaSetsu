declare module "packages/net/minecraft/world/entity/$SpawnPlacements$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpawnPlacements$Type$$Type = ($SpawnPlacements$Type | ("on_ground" | "in_water" | "no_restrictions" | "in_lava"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpawnPlacements$Type_ = $SpawnPlacements$Type$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$ItemDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$ItemDisplay$$Type = ($Display$ItemDisplay);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$ItemDisplay_ = $Display$ItemDisplay$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$ItemSteerable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemSteerable$$Type = ($ItemSteerable | (() => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemSteerable_ = $ItemSteerable$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Interaction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Interaction$$Type = ($Interaction);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Interaction_ = $Interaction$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$TextDisplay$TextRenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$TextDisplay$TextRenderState$$Type = ($Display$TextDisplay$TextRenderState);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$TextDisplay$TextRenderState_ = $Display$TextDisplay$TextRenderState$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Entity$RemovalReason" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Entity$RemovalReason$$Type = ($Entity$RemovalReason | ("killed" | "discarded" | "unloaded_to_chunk" | "unloaded_with_player" | "changed_dimension"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Entity$RemovalReason_ = $Entity$RemovalReason$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Targeting" {
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Targeting$$Type = ($Targeting | (() => $LivingEntity$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Targeting_ = $Targeting$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$MobType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MobType$$Type = ($MobType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MobType_ = $MobType$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$MobSpawnType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MobSpawnType$$Type = ($MobSpawnType | ("natural" | "chunk_generation" | "spawner" | "structure" | "breeding" | "mob_summoned" | "jockey" | "event" | "conversion" | "reinforcement" | "triggered" | "bucket" | "spawn_egg" | "command" | "dispenser" | "patrol"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MobSpawnType_ = $MobSpawnType$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$ExperienceOrb" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ExperienceOrb$$Type = ($ExperienceOrb);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ExperienceOrb_ = $ExperienceOrb$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Pose" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pose$$Type = ($Pose | ("standing" | "fall_flying" | "sleeping" | "swimming" | "spin_attack" | "crouching" | "long_jumping" | "dying" | "croaking" | "using_tongue" | "sitting" | "roaring" | "sniffing" | "emerging" | "digging" | "rolling" | "vaulting"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pose_ = $Pose$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$$Type = ($Display);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display_ = $Display$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$MobCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MobCategory$$Type = ($MobCategory | ("monster" | "creature" | "ambient" | "axolotls" | "underground_water_creature" | "water_creature" | "water_ambient" | "misc"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MobCategory_ = $MobCategory$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Entity$MoveFunction" {
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Entity$MoveFunction$$Type = ($Entity$MoveFunction | ((arg0: $Entity, arg1: double, arg2: double, arg3: double) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Entity$MoveFunction_ = $Entity$MoveFunction$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$NeutralMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NeutralMob$$Type = ($NeutralMob);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NeutralMob_ = $NeutralMob$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$PowerableMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PowerableMob$$Type = ($PowerableMob | (() => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PowerableMob_ = $PowerableMob$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$EntityType$EntityFactory" {
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityType$EntityFactory$$Type<T extends $Entity> = ($EntityType$EntityFactory<T> | ((arg0: $EntityType<T>, arg1: $Level) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityType$EntityFactory_<T extends $Entity> = $EntityType$EntityFactory$$Type<T>;
}
}

declare module "packages/net/minecraft/world/entity/$PlayerRideable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerRideable$$Type = ($PlayerRideable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerRideable_ = $PlayerRideable$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$WalkAnimationState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WalkAnimationState$$Type = ($WalkAnimationState);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WalkAnimationState_ = $WalkAnimationState$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$ReputationEventHandler" {
import { $ReputationEventType } from "packages/net/minecraft/world/entity/ai/village/$ReputationEventType"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReputationEventHandler$$Type = ($ReputationEventHandler | ((arg0: $ReputationEventType, arg1: $Entity) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReputationEventHandler_ = $ReputationEventHandler$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$VariantHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VariantHolder$$Type<T> = ($VariantHolder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VariantHolder_<T> = $VariantHolder$$Type<T>;
}
}

declare module "packages/net/minecraft/world/entity/$TraceableEntity" {
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TraceableEntity$$Type = ($TraceableEntity | (() => $Entity$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TraceableEntity_ = $TraceableEntity$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$LivingEntity$Fallsounds" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LivingEntity$Fallsounds$$Type = ($LivingEntity$Fallsounds);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LivingEntity$Fallsounds_ = $LivingEntity$Fallsounds$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$IntInterpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$IntInterpolator$$Type = ($Display$IntInterpolator | ((arg0: float) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$IntInterpolator_ = $Display$IntInterpolator$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$AgeableMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AgeableMob$$Type = ($AgeableMob);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AgeableMob_ = $AgeableMob$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$OwnableEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OwnableEntity$$Type = ($OwnableEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OwnableEntity_ = $OwnableEntity$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$RiderShieldingMount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RiderShieldingMount$$Type = ($RiderShieldingMount | (() => double));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RiderShieldingMount_ = $RiderShieldingMount$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$TextDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$TextDisplay$$Type = ($Display$TextDisplay);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$TextDisplay_ = $Display$TextDisplay$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$TamableAnimal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TamableAnimal$$Type = ($TamableAnimal);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TamableAnimal_ = $TamableAnimal$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$EquipmentSlot$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EquipmentSlot$Type$$Type = ($EquipmentSlot$Type | ("hand" | "armor"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EquipmentSlot$Type_ = $EquipmentSlot$Type$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$LightningBolt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LightningBolt$$Type = ($LightningBolt);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LightningBolt_ = $LightningBolt$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$MoverType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MoverType$$Type = ($MoverType | ("self" | "player" | "piston" | "shulker_box" | "shulker"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MoverType_ = $MoverType$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$HasCustomInventoryScreen" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HasCustomInventoryScreen$$Type = ($HasCustomInventoryScreen | ((arg0: $Player) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HasCustomInventoryScreen_ = $HasCustomInventoryScreen$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$RelativeMovement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RelativeMovement$$Type = ($RelativeMovement | ("x" | "y" | "z" | "y_rot" | "x_rot"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RelativeMovement_ = $RelativeMovement$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$EntityType" {
import { $GlowItemFrame } from "packages/net/minecraft/world/entity/decoration/$GlowItemFrame"
import { $Illusioner } from "packages/net/minecraft/world/entity/monster/$Illusioner"
import { $MagmaCube } from "packages/net/minecraft/world/entity/monster/$MagmaCube"
import { $Dolphin } from "packages/net/minecraft/world/entity/animal/$Dolphin"
import { $Pig } from "packages/net/minecraft/world/entity/animal/$Pig"
import { $FallingBlockEntity } from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import { $WanderingTrader } from "packages/net/minecraft/world/entity/npc/$WanderingTrader"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $GlowSquid } from "packages/net/minecraft/world/entity/$GlowSquid"
import { $IronGolem } from "packages/net/minecraft/world/entity/animal/$IronGolem"
import { $InjectedEntityTypeExtension } from "packages/dev/architectury/extensions/injected/$InjectedEntityTypeExtension"
import { $EvokerFangs } from "packages/net/minecraft/world/entity/projectile/$EvokerFangs"
import { $Vex } from "packages/net/minecraft/world/entity/monster/$Vex"
import { $Bee } from "packages/net/minecraft/world/entity/animal/$Bee"
import { $Mule } from "packages/net/minecraft/world/entity/animal/horse/$Mule"
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List$$Type } from "packages/java/util/$List"
import { $Cow } from "packages/net/minecraft/world/entity/animal/$Cow"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $AreaEffectCloud } from "packages/net/minecraft/world/entity/$AreaEffectCloud"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $DynamicLightHandlerHolder } from "packages/toni/sodiumdynamiclights/accessor/$DynamicLightHandlerHolder"
import { $Piglin } from "packages/net/minecraft/world/entity/monster/piglin/$Piglin"
import { $Minecart } from "packages/net/minecraft/world/entity/vehicle/$Minecart"
import { $TraderLlama } from "packages/net/minecraft/world/entity/animal/horse/$TraderLlama"
import { $LlamaSpit } from "packages/net/minecraft/world/entity/projectile/$LlamaSpit"
import { $ShulkerBullet } from "packages/net/minecraft/world/entity/projectile/$ShulkerBullet"
import { $Hoglin } from "packages/net/minecraft/world/entity/monster/hoglin/$Hoglin"
import { $Optional } from "packages/java/util/$Optional"
import { $ItemEntity } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $ThrownTrident } from "packages/net/minecraft/world/entity/projectile/$ThrownTrident"
import { $Spider } from "packages/net/minecraft/world/entity/monster/$Spider"
import { $MinecartHopper } from "packages/net/minecraft/world/entity/vehicle/$MinecartHopper"
import { $ArmorStand } from "packages/net/minecraft/world/entity/decoration/$ArmorStand"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ZombifiedPiglin } from "packages/net/minecraft/world/entity/monster/$ZombifiedPiglin"
import { $Fox } from "packages/net/minecraft/world/entity/animal/$Fox"
import { $MushroomCow } from "packages/net/minecraft/world/entity/animal/$MushroomCow"
import { $ChestBoat } from "packages/net/minecraft/world/entity/vehicle/$ChestBoat"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $EndCrystal } from "packages/net/minecraft/world/entity/boss/enderdragon/$EndCrystal"
import { $Cat } from "packages/net/minecraft/world/entity/animal/$Cat"
import { $WitherSkeleton } from "packages/net/minecraft/world/entity/monster/$WitherSkeleton"
import { $Marker } from "packages/net/minecraft/world/entity/$Marker"
import { $Panda } from "packages/net/minecraft/world/entity/animal/$Panda"
import { $Parrot } from "packages/net/minecraft/world/entity/animal/$Parrot"
import { $Chicken } from "packages/net/minecraft/world/entity/animal/$Chicken"
import { $Silverfish } from "packages/net/minecraft/world/entity/monster/$Silverfish"
import { $FeatureElement } from "packages/net/minecraft/world/flag/$FeatureElement"
import { $MinecartSpawner } from "packages/net/minecraft/world/entity/vehicle/$MinecartSpawner"
import { $Witch } from "packages/net/minecraft/world/entity/monster/$Witch"
import { $WitherBoss } from "packages/net/minecraft/world/entity/boss/wither/$WitherBoss"
import { $Display$TextDisplay } from "packages/net/minecraft/world/entity/$Display$TextDisplay"
import { $Tag$$Type } from "packages/net/minecraft/nbt/$Tag"
import { $SkeletonHorse } from "packages/net/minecraft/world/entity/animal/horse/$SkeletonHorse"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $EntityType$EntityFactory$$Type } from "packages/net/minecraft/world/entity/$EntityType$EntityFactory"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Arrow } from "packages/net/minecraft/world/entity/projectile/$Arrow"
import { $Salmon } from "packages/net/minecraft/world/entity/animal/$Salmon"
import { $EnderMan } from "packages/net/minecraft/world/entity/monster/$EnderMan"
import { $Interaction } from "packages/net/minecraft/world/entity/$Interaction"
import { $Slime } from "packages/net/minecraft/world/entity/monster/$Slime"
import { $ThrownEnderpearl } from "packages/net/minecraft/world/entity/projectile/$ThrownEnderpearl"
import { $Tadpole } from "packages/net/minecraft/world/entity/animal/frog/$Tadpole"
import { $Endermite } from "packages/net/minecraft/world/entity/monster/$Endermite"
import { $Allay } from "packages/net/minecraft/world/entity/animal/allay/$Allay"
import { $Blaze } from "packages/net/minecraft/world/entity/monster/$Blaze"
import { $Pufferfish } from "packages/net/minecraft/world/entity/animal/$Pufferfish"
import { $Horse } from "packages/net/minecraft/world/entity/animal/horse/$Horse"
import { $Rabbit } from "packages/net/minecraft/world/entity/animal/$Rabbit"
import { $TropicalFish } from "packages/net/minecraft/world/entity/animal/$TropicalFish"
import { $EntityTypeExtension } from "packages/dev/engine_room/flywheel/impl/extension/$EntityTypeExtension"
import { $ItemFrame } from "packages/net/minecraft/world/entity/decoration/$ItemFrame"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $IRenderableEntity } from "packages/me/srrapero720/chloride/api/$IRenderableEntity"
import { $ZombieVillager } from "packages/net/minecraft/world/entity/monster/$ZombieVillager"
import { $Drowned } from "packages/net/minecraft/world/entity/monster/$Drowned"
import { $SpectralArrow } from "packages/net/minecraft/world/entity/projectile/$SpectralArrow"
import { $MinecartCommandBlock } from "packages/net/minecraft/world/entity/vehicle/$MinecartCommandBlock"
import { $Frog } from "packages/net/minecraft/world/entity/animal/frog/$Frog"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $LeashFenceKnotEntity } from "packages/net/minecraft/world/entity/decoration/$LeashFenceKnotEntity"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $FireworkRocketEntity } from "packages/net/minecraft/world/entity/projectile/$FireworkRocketEntity"
import { $PiglinBrute } from "packages/net/minecraft/world/entity/monster/piglin/$PiglinBrute"
import { $Squid } from "packages/net/minecraft/world/entity/animal/$Squid"
import { $ThrownExperienceBottle } from "packages/net/minecraft/world/entity/projectile/$ThrownExperienceBottle"
import { $Creeper } from "packages/net/minecraft/world/entity/monster/$Creeper"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Pillager } from "packages/net/minecraft/world/entity/monster/$Pillager"
import { $EyeOfEnder } from "packages/net/minecraft/world/entity/projectile/$EyeOfEnder"
import { $EntityVisualizer, $EntityVisualizer$$Type } from "packages/dev/engine_room/flywheel/api/visualization/$EntityVisualizer"
import { $Turtle } from "packages/net/minecraft/world/entity/animal/$Turtle"
import { $Zoglin } from "packages/net/minecraft/world/entity/monster/$Zoglin"
import { $SmallFireball } from "packages/net/minecraft/world/entity/projectile/$SmallFireball"
import { $SnowGolem } from "packages/net/minecraft/world/entity/animal/$SnowGolem"
import { $EnderDragon } from "packages/net/minecraft/world/entity/boss/enderdragon/$EnderDragon"
import { $Guardian } from "packages/net/minecraft/world/entity/monster/$Guardian"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Warden } from "packages/net/minecraft/world/entity/monster/warden/$Warden"
import { $DragonFireball } from "packages/net/minecraft/world/entity/projectile/$DragonFireball"
import { $DynamicLightHandler, $DynamicLightHandler$$Type } from "packages/dev/lambdaurora/lambdynlights/api/$DynamicLightHandler"
import { $ThrownPotion } from "packages/net/minecraft/world/entity/projectile/$ThrownPotion"
import { $Vindicator } from "packages/net/minecraft/world/entity/monster/$Vindicator"
import { $Husk } from "packages/net/minecraft/world/entity/monster/$Husk"
import { $Giant } from "packages/net/minecraft/world/entity/monster/$Giant"
import { $PrimedTnt } from "packages/net/minecraft/world/entity/item/$PrimedTnt"
import { $EntityTypeTest } from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import { $ThrownEgg } from "packages/net/minecraft/world/entity/projectile/$ThrownEgg"
import { $Zombie } from "packages/net/minecraft/world/entity/monster/$Zombie"
import { $Sniffer } from "packages/net/minecraft/world/entity/animal/sniffer/$Sniffer"
import { $ZombieHorse } from "packages/net/minecraft/world/entity/animal/horse/$ZombieHorse"
import { $CaveSpider } from "packages/net/minecraft/world/entity/monster/$CaveSpider"
import { $Stray } from "packages/net/minecraft/world/entity/monster/$Stray"
import { $Bat } from "packages/net/minecraft/world/entity/ambient/$Bat"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Llama } from "packages/net/minecraft/world/entity/animal/horse/$Llama"
import { $MinecartTNT } from "packages/net/minecraft/world/entity/vehicle/$MinecartTNT"
import { $WitherSkull } from "packages/net/minecraft/world/entity/projectile/$WitherSkull"
import { $ImmutableSet$$Type } from "packages/com/google/common/collect/$ImmutableSet"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Painting } from "packages/net/minecraft/world/entity/decoration/$Painting"
import { $MinecartFurnace } from "packages/net/minecraft/world/entity/vehicle/$MinecartFurnace"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Boat } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $Goat } from "packages/net/minecraft/world/entity/animal/goat/$Goat"
import { $Strider } from "packages/net/minecraft/world/entity/monster/$Strider"
import { $Phantom } from "packages/net/minecraft/world/entity/monster/$Phantom"
import { $MobCategory, $MobCategory$$Type } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Skeleton } from "packages/net/minecraft/world/entity/monster/$Skeleton"
import { $PlayMessages$SpawnEntity$$Type } from "packages/net/minecraftforge/network/$PlayMessages$SpawnEntity"
import { $Axolotl } from "packages/net/minecraft/world/entity/animal/axolotl/$Axolotl"
import { $MinecartChest } from "packages/net/minecraft/world/entity/vehicle/$MinecartChest"
import { $Villager } from "packages/net/minecraft/world/entity/npc/$Villager"
import { $ToIntFunction$$Type } from "packages/java/util/function/$ToIntFunction"
import { $ExperienceOrb } from "packages/net/minecraft/world/entity/$ExperienceOrb"
import { $Shulker } from "packages/net/minecraft/world/entity/monster/$Shulker"
import { $FishingHook } from "packages/net/minecraft/world/entity/projectile/$FishingHook"
import { $Display$BlockDisplay } from "packages/net/minecraft/world/entity/$Display$BlockDisplay"
import { $Sheep } from "packages/net/minecraft/world/entity/animal/$Sheep"
import { $LargeFireball } from "packages/net/minecraft/world/entity/projectile/$LargeFireball"
import { $Cod } from "packages/net/minecraft/world/entity/animal/$Cod"
import { $Snowball } from "packages/net/minecraft/world/entity/projectile/$Snowball"
import { $ElderGuardian } from "packages/net/minecraft/world/entity/monster/$ElderGuardian"
import { $LightningBolt } from "packages/net/minecraft/world/entity/$LightningBolt"
import { $Ghast } from "packages/net/minecraft/world/entity/monster/$Ghast"
import { $Ocelot } from "packages/net/minecraft/world/entity/animal/$Ocelot"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Donkey } from "packages/net/minecraft/world/entity/animal/horse/$Donkey"
import { $Wolf } from "packages/net/minecraft/world/entity/animal/$Wolf"
import { $Display$ItemDisplay } from "packages/net/minecraft/world/entity/$Display$ItemDisplay"
import { $Ravager } from "packages/net/minecraft/world/entity/monster/$Ravager"
import { $Camel } from "packages/net/minecraft/world/entity/animal/camel/$Camel"
import { $PolarBear } from "packages/net/minecraft/world/entity/animal/$PolarBear"
import { $Evoker } from "packages/net/minecraft/world/entity/monster/$Evoker"
import { $EntityDimensions, $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $EntityType<T extends $Entity> implements $FeatureElement, $EntityTypeTest<$Entity, T>, $EntityTypeExtension<any>, $DynamicLightHandlerHolder<any>, $InjectedEntityTypeExtension, $IRenderableEntity {
static readonly "ALLAY": $EntityType<$Allay>
static readonly "AREA_EFFECT_CLOUD": $EntityType<$AreaEffectCloud>
static readonly "ARMOR_STAND": $EntityType<$ArmorStand>
static readonly "ARROW": $EntityType<$Arrow>
static readonly "AXOLOTL": $EntityType<$Axolotl>
static readonly "BAT": $EntityType<$Bat>
static readonly "BEE": $EntityType<$Bee>
static readonly "BLAZE": $EntityType<$Blaze>
static readonly "BLOCK_DISPLAY": $EntityType<$Display$BlockDisplay>
static readonly "BOAT": $EntityType<$Boat>
static readonly "CAMEL": $EntityType<$Camel>
static readonly "CAT": $EntityType<$Cat>
static readonly "CAVE_SPIDER": $EntityType<$CaveSpider>
static readonly "CHEST_BOAT": $EntityType<$ChestBoat>
static readonly "CHEST_MINECART": $EntityType<$MinecartChest>
static readonly "CHICKEN": $EntityType<$Chicken>
static readonly "COD": $EntityType<$Cod>
static readonly "COMMAND_BLOCK_MINECART": $EntityType<$MinecartCommandBlock>
static readonly "COW": $EntityType<$Cow>
static readonly "CREEPER": $EntityType<$Creeper>
static readonly "DOLPHIN": $EntityType<$Dolphin>
static readonly "DONKEY": $EntityType<$Donkey>
static readonly "DRAGON_FIREBALL": $EntityType<$DragonFireball>
static readonly "DROWNED": $EntityType<$Drowned>
static readonly "EGG": $EntityType<$ThrownEgg>
static readonly "ELDER_GUARDIAN": $EntityType<$ElderGuardian>
static readonly "ENDERMAN": $EntityType<$EnderMan>
static readonly "ENDERMITE": $EntityType<$Endermite>
static readonly "ENDER_DRAGON": $EntityType<$EnderDragon>
static readonly "ENDER_PEARL": $EntityType<$ThrownEnderpearl>
static readonly "END_CRYSTAL": $EntityType<$EndCrystal>
static readonly "ENTITY_TAG": string
static readonly "EVOKER": $EntityType<$Evoker>
static readonly "EVOKER_FANGS": $EntityType<$EvokerFangs>
static readonly "EXPERIENCE_BOTTLE": $EntityType<$ThrownExperienceBottle>
static readonly "EXPERIENCE_ORB": $EntityType<$ExperienceOrb>
static readonly "EYE_OF_ENDER": $EntityType<$EyeOfEnder>
static readonly "FALLING_BLOCK": $EntityType<$FallingBlockEntity>
static readonly "FIREBALL": $EntityType<$LargeFireball>
static readonly "FIREWORK_ROCKET": $EntityType<$FireworkRocketEntity>
static readonly "FISHING_BOBBER": $EntityType<$FishingHook>
static readonly "FOX": $EntityType<$Fox>
static readonly "FROG": $EntityType<$Frog>
static readonly "FURNACE_MINECART": $EntityType<$MinecartFurnace>
static readonly "GHAST": $EntityType<$Ghast>
static readonly "GIANT": $EntityType<$Giant>
static readonly "GLOW_ITEM_FRAME": $EntityType<$GlowItemFrame>
static readonly "GLOW_SQUID": $EntityType<$GlowSquid>
static readonly "GOAT": $EntityType<$Goat>
static readonly "GUARDIAN": $EntityType<$Guardian>
static readonly "HOGLIN": $EntityType<$Hoglin>
static readonly "HOPPER_MINECART": $EntityType<$MinecartHopper>
static readonly "HORSE": $EntityType<$Horse>
static readonly "HUSK": $EntityType<$Husk>
static readonly "ILLUSIONER": $EntityType<$Illusioner>
static readonly "INTERACTION": $EntityType<$Interaction>
static readonly "IRON_GOLEM": $EntityType<$IronGolem>
static readonly "ITEM": $EntityType<$ItemEntity>
static readonly "ITEM_DISPLAY": $EntityType<$Display$ItemDisplay>
static readonly "ITEM_FRAME": $EntityType<$ItemFrame>
static readonly "LEASH_KNOT": $EntityType<$LeashFenceKnotEntity>
static readonly "LIGHTNING_BOLT": $EntityType<$LightningBolt>
static readonly "LLAMA": $EntityType<$Llama>
static readonly "LLAMA_SPIT": $EntityType<$LlamaSpit>
static readonly "MAGMA_CUBE": $EntityType<$MagmaCube>
static readonly "MARKER": $EntityType<$Marker>
static readonly "MINECART": $EntityType<$Minecart>
static readonly "MOOSHROOM": $EntityType<$MushroomCow>
static readonly "MULE": $EntityType<$Mule>
static readonly "OCELOT": $EntityType<$Ocelot>
static readonly "PAINTING": $EntityType<$Painting>
static readonly "PANDA": $EntityType<$Panda>
static readonly "PARROT": $EntityType<$Parrot>
static readonly "PHANTOM": $EntityType<$Phantom>
static readonly "PIG": $EntityType<$Pig>
static readonly "PIGLIN": $EntityType<$Piglin>
static readonly "PIGLIN_BRUTE": $EntityType<$PiglinBrute>
static readonly "PILLAGER": $EntityType<$Pillager>
static readonly "PLAYER": $EntityType<$Player>
static readonly "POLAR_BEAR": $EntityType<$PolarBear>
static readonly "POTION": $EntityType<$ThrownPotion>
static readonly "PUFFERFISH": $EntityType<$Pufferfish>
static readonly "RABBIT": $EntityType<$Rabbit>
static readonly "RAVAGER": $EntityType<$Ravager>
static readonly "SALMON": $EntityType<$Salmon>
static readonly "SHEEP": $EntityType<$Sheep>
static readonly "SHULKER": $EntityType<$Shulker>
static readonly "SHULKER_BULLET": $EntityType<$ShulkerBullet>
static readonly "SILVERFISH": $EntityType<$Silverfish>
static readonly "SKELETON": $EntityType<$Skeleton>
static readonly "SKELETON_HORSE": $EntityType<$SkeletonHorse>
static readonly "SLIME": $EntityType<$Slime>
static readonly "SMALL_FIREBALL": $EntityType<$SmallFireball>
static readonly "SNIFFER": $EntityType<$Sniffer>
static readonly "SNOWBALL": $EntityType<$Snowball>
static readonly "SNOW_GOLEM": $EntityType<$SnowGolem>
static readonly "SPAWNER_MINECART": $EntityType<$MinecartSpawner>
static readonly "SPECTRAL_ARROW": $EntityType<$SpectralArrow>
static readonly "SPIDER": $EntityType<$Spider>
static readonly "SQUID": $EntityType<$Squid>
static readonly "STRAY": $EntityType<$Stray>
static readonly "STRIDER": $EntityType<$Strider>
static readonly "TADPOLE": $EntityType<$Tadpole>
static readonly "TEXT_DISPLAY": $EntityType<$Display$TextDisplay>
static readonly "TNT": $EntityType<$PrimedTnt>
static readonly "TNT_MINECART": $EntityType<$MinecartTNT>
static readonly "TRADER_LLAMA": $EntityType<$TraderLlama>
static readonly "TRIDENT": $EntityType<$ThrownTrident>
static readonly "TROPICAL_FISH": $EntityType<$TropicalFish>
static readonly "TURTLE": $EntityType<$Turtle>
static readonly "VEX": $EntityType<$Vex>
static readonly "VILLAGER": $EntityType<$Villager>
static readonly "VINDICATOR": $EntityType<$Vindicator>
static readonly "WANDERING_TRADER": $EntityType<$WanderingTrader>
static readonly "WARDEN": $EntityType<$Warden>
static readonly "WITCH": $EntityType<$Witch>
static readonly "WITHER": $EntityType<$WitherBoss>
static readonly "WITHER_SKELETON": $EntityType<$WitherSkeleton>
static readonly "WITHER_SKULL": $EntityType<$WitherSkull>
static readonly "WOLF": $EntityType<$Wolf>
static readonly "ZOGLIN": $EntityType<$Zoglin>
static readonly "ZOMBIE": $EntityType<$Zombie>
static readonly "ZOMBIE_HORSE": $EntityType<$ZombieHorse>
static readonly "ZOMBIE_VILLAGER": $EntityType<$ZombieVillager>
static readonly "ZOMBIFIED_PIGLIN": $EntityType<$ZombifiedPiglin>
readonly "clientTrackingRange": integer
"fireImmune": boolean
readonly "updateInterval": integer

constructor(entityFactory0: $EntityType$EntityFactory$$Type<T>, mobCategory1: $MobCategory$$Type, boolean2: boolean, boolean3: boolean, boolean4: boolean, boolean5: boolean, immutableSet6: $ImmutableSet$$Type<$Block$$Type>, entityDimensions7: $EntityDimensions$$Type, int8: integer, int9: integer, featureFlagSet10: $FeatureFlagSet$$Type)
constructor(entityFactory0: $EntityType$EntityFactory$$Type<T>, mobCategory1: $MobCategory$$Type, boolean2: boolean, boolean3: boolean, boolean4: boolean, boolean5: boolean, immutableSet6: $ImmutableSet$$Type<$Block$$Type>, entityDimensions7: $EntityDimensions$$Type, int8: integer, int9: integer, featureFlagSet10: $FeatureFlagSet$$Type, predicate11: $Predicate$$Type<$EntityType$$Type<any>>, toIntFunction12: $ToIntFunction$$Type<$EntityType$$Type<any>>, toIntFunction13: $ToIntFunction$$Type<$EntityType$$Type<any>>, biFunction14: $BiFunction$$Type<$PlayMessages$SpawnEntity$$Type, $Level$$Type, T>)

public static "appendCustomEntityStackConfig"<T extends $Entity>(consumer0: $Consumer$$Type<T>, serverLevel1: $ServerLevel$$Type, itemStack2: $ItemStack$$Type, player3: $Player$$Type): $Consumer<T>
public static "appendCustomNameConfig"<T extends $Entity>(consumer0: $Consumer$$Type<T>, itemStack1: $ItemStack$$Type): $Consumer<T>
public static "appendDefaultStackConfig"<T extends $Entity>(consumer0: $Consumer$$Type<T>, serverLevel1: $ServerLevel$$Type, itemStack2: $ItemStack$$Type, player3: $Player$$Type): $Consumer<T>
public "arch$holder"(): $Holder<$EntityType<any>>
public "arch$registryName"(): $ResourceLocation
/** @deprecated */
public "builtInRegistryHolder"(): $Holder$Reference<$EntityType<any>>
public static "by"(compoundTag0: $CompoundTag$$Type): $Optional<$EntityType<any>>
public static "byString"(string0: string): $Optional<$EntityType<any>>
public "canSerialize"(): boolean
public "canSpawnFarFromPlayer"(): boolean
public "canSummon"(): boolean
public static "cast"<T extends $Entity>(entityType: $EntityType$$Type<T>): $DynamicLightHandlerHolder<T>
public static "cast"<T extends $BlockEntity>(entityType: $BlockEntityType$$Type<T>): $DynamicLightHandlerHolder<T>
public "chloride$whitelisted"(): boolean
public "clientTrackingRange"(): integer
public "create"(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type, consumer2: $Consumer$$Type<T>, blockPos3: $BlockPos$$Type, mobSpawnType4: $MobSpawnType$$Type, boolean5: boolean, boolean6: boolean): T
public static "create"(compoundTag0: $CompoundTag$$Type, level1: $Level$$Type): $Optional<$Entity>
public "create"(level0: $Level$$Type): T
public static "createDefaultStackConfig"<T extends $Entity>(serverLevel0: $ServerLevel$$Type, itemStack1: $ItemStack$$Type, player2: $Player$$Type): $Consumer<T>
public "customClientSpawn"(spawnEntity0: $PlayMessages$SpawnEntity$$Type, level1: $Level$$Type): T
public "embPlus$resourceLocation"(): $ResourceLocation
public "fireImmune"(): boolean
public "flywheel$getVisualizer"(): $EntityVisualizer<any>
public "flywheel$setVisualizer"(visualizer: $EntityVisualizer$$Type<any>): void
public static "forClass"<B, T extends B>(class0: $Class$$Type<T>): $EntityTypeTest<B, T>
public "getAABB"(double0: double, double1: double, double2: double): $AABB
public "getBaseClass"(): $Class<$Entity>
public "getCategory"(): $MobCategory
public "getDefaultLootTable"(): $ResourceLocation
public "getDescription"(): $Component
public "getDescriptionId"(): string
public "getDimensions"(): $EntityDimensions
public "getHeight"(): float
public static "getKey"(entityType0: $EntityType$$Type<any>): $ResourceLocation
public "getTags"(): $Stream<$TagKey<$EntityType<any>>>
public "getWidth"(): float
public "is"(tagKey0: $TagKey$$Type<$EntityType$$Type<any>>): boolean
public "isBlockDangerous"(blockState0: $BlockState$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public static "loadEntitiesRecursive"(list0: $List$$Type<$Tag$$Type>, level1: $Level$$Type): $Stream<$Entity>
public static "loadEntityRecursive"(compoundTag0: $CompoundTag$$Type, level1: $Level$$Type, function2: $Function$$Type<$Entity$$Type, $Entity>): $Entity
public "requiredFeatures"(): $FeatureFlagSet
public "sodiumdynamiclights$getDynamicLightHandler"(): $DynamicLightHandler<any>
public "sodiumdynamiclights$getName"(): $Component
public "sodiumdynamiclights$getSetting"(): boolean
public "sodiumdynamiclights$setDynamicLightHandler"(handler: $DynamicLightHandler$$Type<any>): void
public "spawn"(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type, consumer2: $Consumer$$Type<T>, blockPos3: $BlockPos$$Type, mobSpawnType4: $MobSpawnType$$Type, boolean5: boolean, boolean6: boolean): T
public "spawn"(serverLevel0: $ServerLevel$$Type, itemStack1: $ItemStack$$Type, player2: $Player$$Type, blockPos3: $BlockPos$$Type, mobSpawnType4: $MobSpawnType$$Type, boolean5: boolean, boolean6: boolean): T
public "spawn"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, mobSpawnType2: $MobSpawnType$$Type): T
public "toShortString"(): string
public "trackDeltas"(): boolean
public "tryCast"(entity0: $Entity$$Type): T
public static "updateCustomEntityTag"(level0: $Level$$Type, player1: $Player$$Type, entity2: $Entity$$Type, compoundTag3: $CompoundTag$$Type): void
public "updateInterval"(): integer
get "baseClass"(): $Class<$Entity>
get "category"(): $MobCategory
get "defaultLootTable"(): $ResourceLocation
get "description"(): $Component
get "descriptionId"(): string
get "dimensions"(): $EntityDimensions
get "height"(): float
get "tags"(): $Stream<$TagKey<$EntityType<any>>>
get "width"(): float
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.EntityType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.EntityTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityType$$Type<T extends $Entity> = ($EntityType<T> | Special.EntityType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityType_<T extends $Entity> = $EntityType$$Type<T>;
}
}

declare module "packages/net/minecraft/world/entity/$FlyingMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FlyingMob$$Type = ($FlyingMob);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FlyingMob_ = $FlyingMob$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$ItemDisplay$ItemRenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$ItemDisplay$ItemRenderState$$Type = ($Display$ItemDisplay$ItemRenderState);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$ItemDisplay$ItemRenderState_ = $Display$ItemDisplay$ItemRenderState$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$AnimationState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationState$$Type = ($AnimationState);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationState_ = $AnimationState$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$AreaEffectCloud" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AreaEffectCloud$$Type = ($AreaEffectCloud);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AreaEffectCloud_ = $AreaEffectCloud$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$LivingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LivingEntity$$Type = ($LivingEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LivingEntity_ = $LivingEntity$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$SlotAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SlotAccess$$Type = ($SlotAccess);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SlotAccess_ = $SlotAccess$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$PathfinderMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PathfinderMob$$Type = ($PathfinderMob);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PathfinderMob_ = $PathfinderMob$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$TextDisplay$CachedInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$TextDisplay$CachedInfo$$Type = ($Display$TextDisplay$CachedInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$TextDisplay$CachedInfo_ = $Display$TextDisplay$CachedInfo$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$EquipmentSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EquipmentSlot$$Type = ($EquipmentSlot | ("mainhand" | "offhand" | "feet" | "legs" | "chest" | "head"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EquipmentSlot_ = $EquipmentSlot$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$EntityDimensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityDimensions$$Type = ($EntityDimensions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityDimensions_ = $EntityDimensions$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$TextDisplay$CachedLine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$TextDisplay$CachedLine$$Type = ($Display$TextDisplay$CachedLine);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$TextDisplay$CachedLine_ = $Display$TextDisplay$CachedLine$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$LerpingModel" {
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LerpingModel$$Type = ($LerpingModel | (() => $Map$$Type<string, $Vector3f$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LerpingModel_ = $LerpingModel$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$BlockDisplay$BlockRenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$BlockDisplay$BlockRenderState$$Type = ($Display$BlockDisplay$BlockRenderState);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$BlockDisplay$BlockRenderState_ = $Display$BlockDisplay$BlockRenderState$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Saddleable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Saddleable$$Type = ($Saddleable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Saddleable_ = $Saddleable$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$TextDisplay$Align" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$TextDisplay$Align$$Type = ($Display$TextDisplay$Align | ("center" | "left" | "right"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$TextDisplay$Align_ = $Display$TextDisplay$Align$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$EntityType$Builder" {
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityType$Builder$$Type<T extends $Entity> = ($EntityType$Builder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityType$Builder_<T extends $Entity> = $EntityType$Builder$$Type<T>;
}
}

declare module "packages/net/minecraft/world/entity/$Display$TextDisplay$LineSplitter" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Display$TextDisplay$CachedInfo$$Type } from "packages/net/minecraft/world/entity/$Display$TextDisplay$CachedInfo"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$TextDisplay$LineSplitter$$Type = ($Display$TextDisplay$LineSplitter | ((arg0: $Component, arg1: integer) => $Display$TextDisplay$CachedInfo$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$TextDisplay$LineSplitter_ = $Display$TextDisplay$LineSplitter$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Marker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Marker$$Type = ($Marker);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Marker_ = $Marker$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Mob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Mob$$Type = ($Mob);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Mob_ = $Mob$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$SpawnPlacements$SpawnPredicate" {
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"
import { $MobSpawnType } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevelAccessor } from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpawnPlacements$SpawnPredicate$$Type<T extends $Entity> = ($SpawnPlacements$SpawnPredicate<T> | ((arg0: $EntityType<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType, arg3: $BlockPos, arg4: $RandomSource) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpawnPlacements$SpawnPredicate_<T extends $Entity> = $SpawnPlacements$SpawnPredicate$$Type<T>;
}
}

declare module "packages/net/minecraft/world/entity/$Display$FloatInterpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$FloatInterpolator$$Type = ($Display$FloatInterpolator | ((arg0: float) => float));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$FloatInterpolator_ = $Display$FloatInterpolator$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Shearable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Shearable$$Type = ($Shearable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Shearable_ = $Shearable$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$RenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$RenderState$$Type = ($Display$RenderState);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$RenderState_ = $Display$RenderState$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$SpawnGroupData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpawnGroupData$$Type = ($SpawnGroupData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpawnGroupData_ = $SpawnGroupData$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$HumanoidArm" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HumanoidArm$$Type = ($HumanoidArm | ("left" | "right"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HumanoidArm_ = $HumanoidArm$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$PlayerRideableJumping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerRideableJumping$$Type = ($PlayerRideableJumping);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerRideableJumping_ = $PlayerRideableJumping$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$GlowSquid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GlowSquid$$Type = ($GlowSquid);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GlowSquid_ = $GlowSquid$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$GenericInterpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$GenericInterpolator$$Type<T> = ($Display$GenericInterpolator<T> | ((arg0: float) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$GenericInterpolator_<T> = $Display$GenericInterpolator$$Type<T>;
}
}

declare module "packages/net/minecraft/world/entity/$Display$BlockDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$BlockDisplay$$Type = ($Display$BlockDisplay);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$BlockDisplay_ = $Display$BlockDisplay$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Attackable" {
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Attackable$$Type = ($Attackable | (() => $LivingEntity$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Attackable_ = $Attackable$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Entity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Entity$$Type = ($Entity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Entity_ = $Entity$$Type;
}
}

declare module "packages/net/minecraft/world/entity/$Display$BillboardConstraints" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Display$BillboardConstraints$$Type = ($Display$BillboardConstraints | ("fixed" | "vertical" | "horizontal" | "center"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Display$BillboardConstraints_ = $Display$BillboardConstraints$$Type;
}
}

