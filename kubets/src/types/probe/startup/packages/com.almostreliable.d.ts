declare module "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DistancePredicateBuilder$$Type = ($DistancePredicateBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DistancePredicateBuilder_ = $DistancePredicateBuilder$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/core/$ILootCondition" {
import { $LootContext } from "packages/net/minecraft/world/level/storage/loot/$LootContext"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ILootCondition$$Type = ($ILootCondition | ((arg0: $LootContext) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ILootCondition_ = $ILootCondition$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/loot/action/$CompositeLootAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CompositeLootAction$$Type = ($CompositeLootAction);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CompositeLootAction_ = $CompositeLootAction$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/forge/filters/$ForgeItemFilter" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeItemFilter$$Type = ($ForgeItemFilter | ((arg0: $ItemStack) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeItemFilter_ = $ForgeItemFilter$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/loot/action/$GroupedLootAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GroupedLootAction$$Type = ($GroupedLootAction);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GroupedLootAction_ = $GroupedLootAction$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/core/$LootEntry$Generator" {
import { $LootContext } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootEntry$Generator$$Type = ($LootEntry$Generator | ((arg0: $LootContext) => $ItemStack$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootEntry$Generator_ = $LootEntry$Generator$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AddAttributesFunction$Modifier$$Type = ($AddAttributesFunction$Modifier);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AddAttributesFunction$Modifier_ = $AddAttributesFunction$Modifier$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AddAttributesFunction$Builder$$Type = ($AddAttributesFunction$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AddAttributesFunction$Builder_ = $AddAttributesFunction$Builder$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/kube/$LootEntryWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootEntryWrapper$$Type = ($LootEntryWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootEntryWrapper_ = $LootEntryWrapper$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DamageSourcePredicateBuilderJS$$Type = ($DamageSourcePredicateBuilderJS);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DamageSourcePredicateBuilderJS_ = $DamageSourcePredicateBuilderJS$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AddAttributesFunction$Modifier$Builder$$Type = ($AddAttributesFunction$Modifier$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AddAttributesFunction$Modifier$Builder_ = $AddAttributesFunction$Modifier$Builder$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/loot/$LootActionsContainer" {
import { $ILootAction } from "packages/com/almostreliable/lootjs/core/$ILootAction"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootActionsContainer$$Type<A extends $LootActionsContainer<any>> = ($LootActionsContainer<A> | ((arg0: $ILootAction) => A));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootActionsContainer_<A extends $LootActionsContainer<any>> = $LootActionsContainer$$Type<A>;
}
}

declare module "packages/com/almostreliable/lootjs/core/$ILootHandler" {
import { $LootContext } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $List } from "packages/java/util/$List"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ILootHandler$$Type = ($ILootHandler | ((arg0: $LootContext, arg1: $List<$ItemStack>) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ILootHandler_ = $ILootHandler$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootActionsBuilderJS$$Type = ($LootActionsBuilderJS);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootActionsBuilderJS_ = $LootActionsBuilderJS$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer" {
import { $LootItemFunction } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootFunctionsContainer$$Type<F extends $LootFunctionsContainer<any>> = ($LootFunctionsContainer<F> | ((arg0: $LootItemFunction) => F));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootFunctionsContainer_<F extends $LootFunctionsContainer<any>> = $LootFunctionsContainer$$Type<F>;
}
}

declare module "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResourceLocationFilter$$Type = ($ResourceLocationFilter | ((arg0: $ResourceLocation) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResourceLocationFilter_ = $ResourceLocationFilter$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/filters/$ItemFilter" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemFilter$$Type = ($ItemFilter | ((arg0: $ItemStack) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemFilter_ = $ItemFilter$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/kube/wrapper/$IntervalJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntervalJS$$Type = ($IntervalJS);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntervalJS_ = $IntervalJS$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer" {
import { $ILootCondition } from "packages/com/almostreliable/lootjs/core/$ILootCondition"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootConditionsContainer$$Type<B extends $LootConditionsContainer<any>> = ($LootConditionsContainer<B> | ((arg0: $ILootCondition) => B));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootConditionsContainer_<B extends $LootConditionsContainer<any>> = $LootConditionsContainer$$Type<B>;
}
}

declare module "packages/com/almostreliable/lootjs/core/$ILootAction" {
import { $LootContext } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $List } from "packages/java/util/$List"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ILootAction$$Type = ($ILootAction | ((arg0: $LootContext, arg1: $List<$ItemStack>) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ILootAction_ = $ILootAction$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/core/$LootContextType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootContextType$$Type = ($LootContextType | ("unknown" | "block" | "entity" | "chest" | "fishing" | "gift" | "piglin_barter" | "advancement_entity" | "advancement_reward"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootContextType_ = $LootContextType$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/kube/$LootContextJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootContextJS$$Type = ($LootContextJS);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootContextJS_ = $LootContextJS$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AddAttributesFunction$$Type = ($AddAttributesFunction);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AddAttributesFunction_ = $AddAttributesFunction$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/core/$LootEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootEntry$$Type = ($LootEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootEntry_ = $LootEntry$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback" {
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModifyLootAction$Callback$$Type = ($ModifyLootAction$Callback | ((arg0: $ItemStack) => $ItemStack$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModifyLootAction$Callback_ = $ModifyLootAction$Callback$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/filters/$Resolver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Resolver$$Type = ($Resolver);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Resolver_ = $Resolver$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/mixin/$LootItemConditionMixin" {
import { $LootContext } from "packages/net/minecraft/world/level/storage/loot/$LootContext"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootItemConditionMixin$$Type = ($LootItemConditionMixin | ((arg0: $LootContext) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootItemConditionMixin_ = $LootItemConditionMixin$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityPredicateBuilderJS$$Type = ($EntityPredicateBuilderJS);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityPredicateBuilderJS_ = $EntityPredicateBuilderJS$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/loot/$GroupedLootBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GroupedLootBuilder$$Type = ($GroupedLootBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GroupedLootBuilder_ = $GroupedLootBuilder$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/kube/$LootModificationEventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootModificationEventJS$$Type = ($LootModificationEventJS);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootModificationEventJS_ = $LootModificationEventJS$$Type;
}
}

declare module "packages/com/almostreliable/lootjs/predicate/$ExtendedEntityFlagsPredicate$IBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ExtendedEntityFlagsPredicate$IBuilder$$Type<T> = ($ExtendedEntityFlagsPredicate$IBuilder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ExtendedEntityFlagsPredicate$IBuilder_<T> = $ExtendedEntityFlagsPredicate$IBuilder$$Type<T>;
}
}

