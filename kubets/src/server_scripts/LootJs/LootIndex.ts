//priority: 300

import { $LootModificationEventJS } from "packages/com/almostreliable/lootjs/kube/$LootModificationEventJS";
import { setLootMinecraft } from "./Tables/Minecraft";
import { setLootFarmersDelight } from "./Tables/FarmersDelight";

export function setLoot(event: $LootModificationEventJS) {
	console.log("Setsu Loot Start!");
	setLootMinecraft(event);
	setLootFarmersDelight(event);
	console.log("Setsu Loot End!");
}
