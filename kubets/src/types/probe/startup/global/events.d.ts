import { $RegisterInteractionsEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$RegisterInteractionsEventJS"
import { $RegisterClimateModelEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$RegisterClimateModelEventJS"
import { $ClientInitEventJS } from "packages/dev/latvian/mods/kubejs/client/$ClientInitEventJS"
import { $RegisterItemStackModifierEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$RegisterItemStackModifierEventJS"
import { $ItemModelPropertiesEventJS } from "packages/dev/latvian/mods/kubejs/item/$ItemModelPropertiesEventJS"
import { $RegisterFaunasEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$RegisterFaunasEventJS"
import { $AddWorldgenEventJS } from "packages/dev/latvian/mods/kubejs/level/gen/$AddWorldgenEventJS"
import { $ModifyDefaultWorldGenSettingsEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$ModifyDefaultWorldGenSettingsEventJS"
import { $CreativeTabEvent } from "packages/dev/latvian/mods/kubejs/item/creativetab/$CreativeTabEvent"
import { $RegisterFoodTraitEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$RegisterFoodTraitEventJS"
import { $ItemModificationEventJS } from "packages/dev/latvian/mods/kubejs/item/$ItemModificationEventJS"
import { $RegistryEventJS } from "packages/dev/latvian/mods/kubejs/registry/$RegistryEventJS"
import { $StartupEventJS } from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import { $BlockModificationEventJS } from "packages/dev/latvian/mods/kubejs/block/$BlockModificationEventJS"
import { $CreateGlassOperationsEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$CreateGlassOperationsEventJS"
import { $RockSettingsEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$RockSettingsEventJS"
import { $ItemArmorTierRegistryEventJS } from "packages/dev/latvian/mods/kubejs/item/custom/$ItemArmorTierRegistryEventJS"
import { $RegisterRepresentativeBlocksEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$RegisterRepresentativeBlocksEventJS"
import { $BirthdayEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$BirthdayEventJS"
import { $RecipeSchemaRegistryEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeSchemaRegistryEventJS"
import { $RemoveWorldgenEventJS } from "packages/dev/latvian/mods/kubejs/level/gen/$RemoveWorldgenEventJS"
import { $ItemToolTierRegistryEventJS } from "packages/dev/latvian/mods/kubejs/item/custom/$ItemToolTierRegistryEventJS"

declare global {
export namespace WorldgenEvents {
function add(handler: ((event: $AddWorldgenEventJS) => void)): void
function remove(handler: ((event: $RemoveWorldgenEventJS) => void)): void
}
export namespace ItemEvents {
function modelProperties(handler: ((event: $ItemModelPropertiesEventJS) => void)): void
function modification(handler: ((event: $ItemModificationEventJS) => void)): void
function toolTierRegistry(handler: ((event: $ItemToolTierRegistryEventJS) => void)): void
function armorTierRegistry(handler: ((event: $ItemArmorTierRegistryEventJS) => void)): void
}
export namespace ClientEvents {
function init(handler: ((event: $ClientInitEventJS) => void)): void
}
export namespace StartupEvents {
function init(handler: ((event: $StartupEventJS) => void)): void
function registry(extra: string, handler: ((event: $RegistryEventJS<any>) => void)): void
function modifyCreativeTab(extra: string, handler: ((event: $CreativeTabEvent) => void)): void
function recipeSchemaRegistry(handler: ((event: $RecipeSchemaRegistryEventJS) => void)): void
function postInit(handler: ((event: $StartupEventJS) => void)): void
}
export namespace BlockEvents {
function modification(handler: ((event: $BlockModificationEventJS) => void)): void
}
export namespace TFCEvents {
function prospectRepresentative(handler: ((event: $RegisterRepresentativeBlocksEventJS) => void)): void
function createGlassOperations(handler: ((event: $CreateGlassOperationsEventJS) => void)): void
function registerClimateModel(handler: ((event: $RegisterClimateModelEventJS) => void)): void
function registerItemStackModifierConverters(handler: ((event: $RegisterItemStackModifierEventJS) => void)): void
function registerInteractions(handler: ((event: $RegisterInteractionsEventJS) => void)): void
function rockSettings(handler: ((event: $RockSettingsEventJS) => void)): void
function registerFoodTrait(handler: ((event: $RegisterFoodTraitEventJS) => void)): void
function registerFaunas(handler: ((event: $RegisterFaunasEventJS) => void)): void
function defaultWorldSettings(handler: ((event: $ModifyDefaultWorldGenSettingsEventJS) => void)): void
function registerItemStackModifier(handler: ((event: $RegisterItemStackModifierEventJS) => void)): void
function birthdays(handler: ((event: $BirthdayEventJS) => void)): void
}
}
