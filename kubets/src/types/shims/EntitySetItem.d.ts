import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack";

declare module "packages/net/minecraft/world/entity/$Entity" {
	interface $Entity {
		setItem(item: string | $ItemStack): void;
	}
}
