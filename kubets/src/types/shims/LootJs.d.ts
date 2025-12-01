import { $ItemFilter } from "packages/com/almostreliable/lootjs/filters/$ItemFilter";
import { $ResourceLocationFilter$$Type } from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter";
import {
	$ItemFilter$$Type,
	$LootEntry$$Type,
	$LootActionsBuilderJS,
} from "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS";

declare module "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS" {
	interface $LootActionsBuilderJS {
		hasEnchantment(filter: string | $ResourceLocationFilter$$Type): $ItemFilter;
		addLoot(...entries: string[] | $LootEntry$$Type[]): $LootActionsBuilderJS;
		replaceLoot(
			filter: string | $ItemFilter$$Type,
			lootEntry: $LootEntry$$Type,
			preserveCount: boolean
		): $LootActionsBuilderJS;
		replaceLoot(
			filter: string | $ItemFilter$$Type,
			lootEntry: $LootEntry$$Type
		): $LootActionsBuilderJS;
		removeLoot(filter: $ItemFilter$$Type): $LootActionsBuilderJS;
	}
}
