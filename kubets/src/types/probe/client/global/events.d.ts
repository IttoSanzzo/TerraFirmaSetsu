import { $FoodEatenEventJS } from "packages/dev/latvian/mods/kubejs/item/$FoodEatenEventJS"
import { $BlockPlacedEventJS } from "packages/dev/latvian/mods/kubejs/block/$BlockPlacedEventJS"
import { $ItemEntityInteractedEventJS } from "packages/dev/latvian/mods/kubejs/item/$ItemEntityInteractedEventJS"
import { $LangEventJS } from "packages/dev/latvian/mods/kubejs/client/$LangEventJS"
import { $ExplosionEventJS$After } from "packages/dev/latvian/mods/kubejs/level/$ExplosionEventJS$After"
import { $PaintScreenEventJS } from "packages/dev/latvian/mods/kubejs/client/painter/screen/$PaintScreenEventJS"
import { $MenuType$$Type } from "packages/net/minecraft/world/inventory/$MenuType"
import { $ItemTooltipEventJS } from "packages/dev/latvian/mods/kubejs/item/$ItemTooltipEventJS"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $ItemDestroyedEventJS } from "packages/dev/latvian/mods/kubejs/item/forge/$ItemDestroyedEventJS"
import { $InventoryEventJS } from "packages/dev/latvian/mods/kubejs/player/$InventoryEventJS"
import { $ClientEventJS } from "packages/dev/latvian/mods/kubejs/client/$ClientEventJS"
import { $LivingEntityDeathEventJS } from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityDeathEventJS"
import { $AddGlobalEventJS } from "packages/zzzank/probejs/events/$AddGlobalEventJS"
import { $RemoveJEICategoriesEvent } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$RemoveJEICategoriesEvent"
import { $InformationJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$InformationJEIEventJS"
import { $BlockRightClickedEventJS } from "packages/dev/latvian/mods/kubejs/block/$BlockRightClickedEventJS"
import { $EntitySpawnedEventJS } from "packages/dev/latvian/mods/kubejs/entity/$EntitySpawnedEventJS"
import { $ItemClickedEventJS } from "packages/dev/latvian/mods/kubejs/item/$ItemClickedEventJS"
import { $TypingModificationEventJS } from "packages/zzzank/probejs/events/$TypingModificationEventJS"
import { $BlockLeftClickedEventJS } from "packages/dev/latvian/mods/kubejs/block/$BlockLeftClickedEventJS"
import { $CheckLivingEntitySpawnEventJS } from "packages/dev/latvian/mods/kubejs/entity/$CheckLivingEntitySpawnEventJS"
import { $BlockBrokenEventJS } from "packages/dev/latvian/mods/kubejs/block/$BlockBrokenEventJS"
import { $SimpleLevelEventJS } from "packages/dev/latvian/mods/kubejs/level/$SimpleLevelEventJS"
import { $ExplosionEventJS$Before } from "packages/dev/latvian/mods/kubejs/level/$ExplosionEventJS$Before"
import { $JEISubtypesEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$JEISubtypesEventJS"
import { $SnippetGenerationEventJS } from "packages/zzzank/probejs/events/$SnippetGenerationEventJS"
import { $ItemDroppedEventJS } from "packages/dev/latvian/mods/kubejs/item/$ItemDroppedEventJS"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $ItemSmeltedEventJS } from "packages/dev/latvian/mods/kubejs/item/$ItemSmeltedEventJS"
import { $DetectorBlockEventJS } from "packages/dev/latvian/mods/kubejs/block/$DetectorBlockEventJS"
import { $AddJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$AddJEIEventJS"
import { $AtlasSpriteRegistryEventJS } from "packages/dev/latvian/mods/kubejs/client/$AtlasSpriteRegistryEventJS"
import { $SimplePlayerEventJS } from "packages/dev/latvian/mods/kubejs/player/$SimplePlayerEventJS"
import { $InventoryChangedEventJS } from "packages/dev/latvian/mods/kubejs/player/$InventoryChangedEventJS"
import { $FarmlandTrampledEventJS } from "packages/dev/latvian/mods/kubejs/block/$FarmlandTrampledEventJS"
import { $ClickedInfoBadgeEventJS } from "packages/snownee/lychee/compat/kubejs/$ClickedInfoBadgeEventJS"
import { $LivingEntityHurtEventJS } from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityHurtEventJS"
import { $TypeAssignmentEventJS } from "packages/zzzank/probejs/events/$TypeAssignmentEventJS"
import { $NetworkEventJS } from "packages/dev/latvian/mods/kubejs/net/$NetworkEventJS"
import { $ChestEventJS } from "packages/dev/latvian/mods/kubejs/player/$ChestEventJS"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $ItemPickedUpEventJS } from "packages/dev/latvian/mods/kubejs/item/$ItemPickedUpEventJS"
import { $HideCustomJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideCustomJEIEventJS"
import { $DebugInfoEventJS } from "packages/dev/latvian/mods/kubejs/client/$DebugInfoEventJS"
import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS"
import { $ItemCraftedEventJS } from "packages/dev/latvian/mods/kubejs/item/$ItemCraftedEventJS"
import { $GenerateClientAssetsEventJS } from "packages/dev/latvian/mods/kubejs/client/$GenerateClientAssetsEventJS"
import { $LivingEntityDropsEventJS } from "packages/dev/latvian/mods/kubejs/entity/forge/$LivingEntityDropsEventJS"
import { $RemoveJEIRecipesEvent } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$RemoveJEIRecipesEvent"

declare global {
export namespace ProbeEvents {
function addGlobal(handler: ((event: $AddGlobalEventJS) => void)): void
function snippets(handler: ((event: $SnippetGenerationEventJS) => void)): void
function assignType(handler: ((event: $TypeAssignmentEventJS) => void)): void
function modifyClass(handler: ((event: $TypingModificationEventJS) => void)): void
}
export namespace NetworkEvents {
function dataReceived(extra: string, handler: ((event: $NetworkEventJS) => void)): void
}
export namespace LycheeEvents {
function clickedInfoBadge(extra: string, handler: ((event: $ClickedInfoBadgeEventJS) => void)): void
function clickedInfoBadge(handler: ((event: $ClickedInfoBadgeEventJS) => void)): void
}
export namespace JEIEvents {
function hideItems(handler: ((event: $HideJEIEventJS<any>) => void)): void
function addFluids(handler: ((event: $AddJEIEventJS<any>) => void)): void
function hideFluids(handler: ((event: $HideJEIEventJS<any>) => void)): void
function removeRecipes(handler: ((event: $RemoveJEIRecipesEvent) => void)): void
function removeCategories(handler: ((event: $RemoveJEICategoriesEvent) => void)): void
function information(handler: ((event: $InformationJEIEventJS) => void)): void
function hideCustom(handler: ((event: $HideCustomJEIEventJS) => void)): void
function subtypes(handler: ((event: $JEISubtypesEventJS) => void)): void
function addItems(handler: ((event: $AddJEIEventJS<any>) => void)): void
}
export namespace PlayerEvents {
function chestOpened(extra: $MenuType$$Type<any>, handler: ((event: $ChestEventJS) => void)): void
function chestOpened(handler: ((event: $ChestEventJS) => void)): void
function chestClosed(extra: $MenuType$$Type<any>, handler: ((event: $ChestEventJS) => void)): void
function chestClosed(handler: ((event: $ChestEventJS) => void)): void
function inventoryClosed(extra: $MenuType$$Type<any>, handler: ((event: $InventoryEventJS) => void)): void
function inventoryClosed(handler: ((event: $InventoryEventJS) => void)): void
function inventoryChanged(extra: $Item$$Type, handler: ((event: $InventoryChangedEventJS) => void)): void
function inventoryChanged(handler: ((event: $InventoryChangedEventJS) => void)): void
function inventoryOpened(extra: $MenuType$$Type<any>, handler: ((event: $InventoryEventJS) => void)): void
function inventoryOpened(handler: ((event: $InventoryEventJS) => void)): void
function tick(handler: ((event: $SimplePlayerEventJS) => void)): void
}
export namespace ItemEvents {
function rightClicked(extra: $Item$$Type, handler: ((event: $ItemClickedEventJS) => void)): void
function rightClicked(handler: ((event: $ItemClickedEventJS) => void)): void
function crafted(extra: $Item$$Type, handler: ((event: $ItemCraftedEventJS) => void)): void
function crafted(handler: ((event: $ItemCraftedEventJS) => void)): void
function dropped(extra: $Item$$Type, handler: ((event: $ItemDroppedEventJS) => void)): void
function dropped(handler: ((event: $ItemDroppedEventJS) => void)): void
function tooltip(handler: ((event: $ItemTooltipEventJS) => void)): void
function firstRightClicked(extra: $Item$$Type, handler: ((event: $ItemClickedEventJS) => void)): void
function firstRightClicked(handler: ((event: $ItemClickedEventJS) => void)): void
function pickedUp(extra: $Item$$Type, handler: ((event: $ItemPickedUpEventJS) => void)): void
function pickedUp(handler: ((event: $ItemPickedUpEventJS) => void)): void
function destroyed(extra: $Item$$Type, handler: ((event: $ItemDestroyedEventJS) => void)): void
function destroyed(handler: ((event: $ItemDestroyedEventJS) => void)): void
function entityInteracted(extra: $Item$$Type, handler: ((event: $ItemEntityInteractedEventJS) => void)): void
function entityInteracted(handler: ((event: $ItemEntityInteractedEventJS) => void)): void
function foodEaten(extra: $Item$$Type, handler: ((event: $FoodEatenEventJS) => void)): void
function foodEaten(handler: ((event: $FoodEatenEventJS) => void)): void
function firstLeftClicked(extra: $Item$$Type, handler: ((event: $ItemClickedEventJS) => void)): void
function firstLeftClicked(handler: ((event: $ItemClickedEventJS) => void)): void
function canPickUp(extra: $Item$$Type, handler: ((event: $ItemPickedUpEventJS) => void)): void
function canPickUp(handler: ((event: $ItemPickedUpEventJS) => void)): void
function smelted(extra: $Item$$Type, handler: ((event: $ItemSmeltedEventJS) => void)): void
function smelted(handler: ((event: $ItemSmeltedEventJS) => void)): void
}
export namespace LevelEvents {
function beforeExplosion(handler: ((event: $ExplosionEventJS$Before) => void)): void
function tick(extra: string, handler: ((event: $SimpleLevelEventJS) => void)): void
function tick(handler: ((event: $SimpleLevelEventJS) => void)): void
function afterExplosion(handler: ((event: $ExplosionEventJS$After) => void)): void
}
export namespace EntityEvents {
function spawned(extra: $EntityType$$Type<any>, handler: ((event: $EntitySpawnedEventJS) => void)): void
function spawned(handler: ((event: $EntitySpawnedEventJS) => void)): void
function drops(extra: $EntityType$$Type<any>, handler: ((event: $LivingEntityDropsEventJS) => void)): void
function drops(handler: ((event: $LivingEntityDropsEventJS) => void)): void
function checkSpawn(extra: $EntityType$$Type<any>, handler: ((event: $CheckLivingEntitySpawnEventJS) => void)): void
function checkSpawn(handler: ((event: $CheckLivingEntitySpawnEventJS) => void)): void
function death(extra: $EntityType$$Type<any>, handler: ((event: $LivingEntityDeathEventJS) => void)): void
function death(handler: ((event: $LivingEntityDeathEventJS) => void)): void
function hurt(extra: $EntityType$$Type<any>, handler: ((event: $LivingEntityHurtEventJS) => void)): void
function hurt(handler: ((event: $LivingEntityHurtEventJS) => void)): void
}
export namespace ClientEvents {
function rightDebugInfo(handler: ((event: $DebugInfoEventJS) => void)): void
function leftDebugInfo(handler: ((event: $DebugInfoEventJS) => void)): void
function loggedIn(handler: ((event: $ClientEventJS) => void)): void
function atlasSpriteRegistry(extra: string, handler: ((event: $AtlasSpriteRegistryEventJS) => void)): void
function loggedOut(handler: ((event: $ClientEventJS) => void)): void
function paintScreen(handler: ((event: $PaintScreenEventJS) => void)): void
function tick(handler: ((event: $ClientEventJS) => void)): void
function painterUpdated(handler: ((event: $ClientEventJS) => void)): void
function lang(extra: string, handler: ((event: $LangEventJS) => void)): void
function highPriorityAssets(handler: ((event: $GenerateClientAssetsEventJS) => void)): void
}
export namespace BlockEvents {
function broken(extra: $Block$$Type, handler: ((event: $BlockBrokenEventJS) => void)): void
function broken(handler: ((event: $BlockBrokenEventJS) => void)): void
function detectorPowered(extra: string, handler: ((event: $DetectorBlockEventJS) => void)): void
function detectorPowered(handler: ((event: $DetectorBlockEventJS) => void)): void
function farmlandTrampled(extra: $Block$$Type, handler: ((event: $FarmlandTrampledEventJS) => void)): void
function farmlandTrampled(handler: ((event: $FarmlandTrampledEventJS) => void)): void
function placed(extra: $Block$$Type, handler: ((event: $BlockPlacedEventJS) => void)): void
function placed(handler: ((event: $BlockPlacedEventJS) => void)): void
function detectorUnpowered(extra: string, handler: ((event: $DetectorBlockEventJS) => void)): void
function detectorUnpowered(handler: ((event: $DetectorBlockEventJS) => void)): void
function leftClicked(extra: $Block$$Type, handler: ((event: $BlockLeftClickedEventJS) => void)): void
function leftClicked(handler: ((event: $BlockLeftClickedEventJS) => void)): void
function rightClicked(extra: $Block$$Type, handler: ((event: $BlockRightClickedEventJS) => void)): void
function rightClicked(handler: ((event: $BlockRightClickedEventJS) => void)): void
function detectorChanged(extra: string, handler: ((event: $DetectorBlockEventJS) => void)): void
function detectorChanged(handler: ((event: $DetectorBlockEventJS) => void)): void
}
}
