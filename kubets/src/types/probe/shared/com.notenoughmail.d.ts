declare module "packages/com/notenoughmail/kubejs_tfc/recipe/$ISupportProviderOutput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISupportProviderOutput {
}

export namespace $ISupportProviderOutput {
const probejs$$marker: never
}
export abstract class $ISupportProviderOutput$$Static implements $ISupportProviderOutput {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$AqueductBlockBuilder$AqueductModelPart" {
import { $Enum } from "packages/java/lang/$Enum"

export class $AqueductBlockBuilder$AqueductModelPart extends $Enum<$AqueductBlockBuilder$AqueductModelPart> {
static readonly "BASE": $AqueductBlockBuilder$AqueductModelPart
static readonly "EAST": $AqueductBlockBuilder$AqueductModelPart
static readonly "NORTH": $AqueductBlockBuilder$AqueductModelPart
static readonly "SOUTH": $AqueductBlockBuilder$AqueductModelPart
static readonly "VALUES": $AqueductBlockBuilder$AqueductModelPart[]
static readonly "WEST": $AqueductBlockBuilder$AqueductModelPart

public "base"(): boolean
public "east"(): boolean
public "north"(): boolean
public "south"(): boolean
public static "valueOf"(name: string): $AqueductBlockBuilder$AqueductModelPart
public static "values"(): $AqueductBlockBuilder$AqueductModelPart[]
public "west"(): boolean
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/internal/$AbstractCropBlockBuilder" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $DeadCropBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$DeadCropBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $SeedItemBuilder$$Type } from "packages/dev/latvian/mods/kubejs/block/$SeedItemBuilder"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $AbstractCropBlockBuilder$Type$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$AbstractCropBlockBuilder$Type"
import { $ItemBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $FarmlandBlockEntity$NutrientType$$Type } from "packages/net/dries007/tfc/common/blockentities/$FarmlandBlockEntity$NutrientType"

export class $AbstractCropBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type, type: $AbstractCropBlockBuilder$Type$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/** Modifies the crop's dead block */
public "deadBlock"(deadCrop: $Consumer$$Type<$DeadCropBlockBuilder$$Type>): $AbstractCropBlockBuilder
/** Sets the crop's 'product' item to be an existing item */
public "existingProductItem"(productItem: $ResourceLocation$$Type): $AbstractCropBlockBuilder
/** sets the expiry modifier of the crop, a higher value means it takes longer for the crop to die */
public "expiryModifier"(mod: double): $AbstractCropBlockBuilder
/** Sets the expiry modifier supplier of the crop, a higher value means it takes longer for the crop to die */
public "expiryModifierSupplier"(mod: $Supplier$$Type<double>): $AbstractCropBlockBuilder
/** Sets the growth modifier of the crop, a higher value means it takes longer to grow */
public "growthModifier"(mod: double): $AbstractCropBlockBuilder
/** Sets the growth modifier supplier of the crop, a higher value means it takes longer to grow */
public "growthModifierSupplier"(mod: $Supplier$$Type<double>): $AbstractCropBlockBuilder
/** Sets the model for all growth stages */
public "model"(m: string): $AbstractCropBlockBuilder
/** Sets the model for a specific growth stage */
public "model"(stage: integer, model: string): $AbstractCropBlockBuilder
/** Sets the nutrient the crop uses as fertilizer, defaults to nitrogen */
public "nutrient"(nutrient: $FarmlandBlockEntity$NutrientType$$Type): $AbstractCropBlockBuilder
/** Modifies the crop's 'product' item */
public "productItem"(productItem: $Consumer$$Type<$ItemBuilder$$Type>): $AbstractCropBlockBuilder
/** Modifies the crop's seed item */
public "seedItem"(seedItem: $Consumer$$Type<$SeedItemBuilder$$Type>): $AbstractCropBlockBuilder
/** Sets the model for a specific growth stage */
public "setModel"(stage: integer, gen: $Consumer$$Type<$ModelGenerator$$Type>): $AbstractCropBlockBuilder
/** Sets the model for all growth stages */
public "setModel"(gen: $Consumer$$Type<$ModelGenerator$$Type>): $AbstractCropBlockBuilder
/** Sets how many growth stages the crop will have */
public "stages"(i: integer): $AbstractCropBlockBuilder
/** Texture the block for all growth stages */
public "texture"(texture: string): $AbstractCropBlockBuilder
/** Texture a specific key for all growth stages */
public "textureAll"(id: string, tex: string): $AbstractCropBlockBuilder
/** Textures the block for the given growth stage */
public "textureAt"(stage: integer, texture: string): $AbstractCropBlockBuilder
/** Textures a specific key for the given stage */
public "textureAt"(stage: integer, id: string, texture: string): $AbstractCropBlockBuilder
/** Sets the textures for the given growth stage */
public "textures"(stage: integer, textures: $JsonObject$$Type): $AbstractCropBlockBuilder
/** Sets the textures for all growth stages */
public "textures"(textures: $JsonObject$$Type): $AbstractCropBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildClimateRangeData" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"

export class $BuildClimateRangeData {
constructor()

/** Sets the wiggle range when determining if the hydration fits the hydration bounds, defaults to 0 */
public "hydrationWiggle"(i: integer): $BuildClimateRangeData
/** Sets the maximum hydration of the climate range */
public "maxHydration"(i: integer): $BuildClimateRangeData
/** Sets the maximum temperature of the climate range */
public "maxTemperature"(f: float): $BuildClimateRangeData
/** Sets the minimum hydration of the climate range */
public "minHydration"(i: integer): $BuildClimateRangeData
/** Sets the minimum temperature of the climate range */
public "minTemperature"(f: float): $BuildClimateRangeData
/** Sets the wiggle range when determining if the temperature fits the temperature bounds, defaults to 0 */
public "temperatureWiggle"(f: float): $BuildClimateRangeData
public "toJson"(): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties$MapColorFunction" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $ISupportExtendedProperties$MapColorFunction extends $Function<$BlockState, $MapColor> {
"andThen"<V>(function0: $Function$$Type<$MapColor$$Type, V>): $Function<$BlockState, V>
"apply"(state: $BlockState$$Type): $MapColor
"compose"<V>(function0: $Function$$Type<V, $BlockState>): $Function<V, $MapColor>
}

export namespace $ISupportExtendedProperties$MapColorFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $ISupportExtendedProperties$MapColorFunction$$Static implements $ISupportExtendedProperties$MapColorFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$WildCropBlockBuilder" {
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $WildCropBlockBuilder$Type$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$WildCropBlockBuilder$Type"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $WildCropBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Block
public "createProperties"(): $BlockBehaviour$Properties
/** Specifies the model to use when the crop is dead/immature, also see doubleDeadModels and spreadingDeadModels */
public "deadModel"(model: string): $WildCropBlockBuilder
/**
 * Specifies the models to use when the crop is dead/immature. Additionally sets the type tot `double`. Also see deadModel and spreadingDeadModels
 * 
 * @param topModel - The model for the top block state when the crop is dead
 * @param bottomModel - The model for the bottom block state when the crop is dead
 */
public "doubleDeadModels"(topModel: string, bottomModel: string): $WildCropBlockBuilder
/** Sets the food item that the crop drops when broken */
public "food"(foodItem: $ResourceLocation$$Type): $WildCropBlockBuilder
/** Sets the seeds that the crop drops when broken */
public "seeds"(seedItem: $ResourceLocation$$Type): $WildCropBlockBuilder
/**
 * Specifies the models to use when the crop is dead/immature. Additionally sets the type to `spreading`. Also see deadModel and doubleDeadModels
 * 
 * @param coreModel - The model for the non-sided state when the crop is dead
 * @param sideModel - The model for the side block state when the crop is dead
 */
public "spreadingDeadModels"(coreModel: string, sideModel: string): $WildCropBlockBuilder
/** Sets the block to use as the crop's fruit block, only applicable to the spreading type */
public "spreadingFruitBlock"(fruitBlock: $ResourceLocation$$Type): $WildCropBlockBuilder
/** Sets the type of wild crop being made, may be 'default', 'double', 'flooded', or 'spreading' */
public "type"(type: $WildCropBlockBuilder$Type$$Type): $WildCropBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCProviderRecipeJS" {
import { $TFCRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCRecipeJS"
import { $ISupportProviderOutput } from "packages/com/notenoughmail/kubejs_tfc/recipe/$ISupportProviderOutput"

export class $TFCProviderRecipeJS extends $TFCRecipeJS implements $ISupportProviderOutput {
constructor()

public "getMod"(): string
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$RegisterFoodTraitEventJS" {
import { $StartupEventJS } from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

/** Used to register custom food traits */
export class $RegisterFoodTraitEventJS extends $StartupEventJS {
constructor()

/**
 * registers a new food trait
 * 
 * @param decayModifier - The decay modifier of the trait, a higher values means the food rots faster
 * @param id - The registry id of the food trait
 */
public "registerTrait"(decayModifier: float, id: $ResourceLocation$$Type): void
/**
 * registers a new food trait with a tooltip
 * 
 * @param decayModifier - The decay modifier of the trait, a higher values means the food rots faster
 * @param id - The registry id of the food trait
 */
public "registerTraitWithTooltip"(decayModifier: float, id: $ResourceLocation$$Type): void
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$RegisterItemStackModifierEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $KubeJSItemStackModifier$ModifierApplicator$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$KubeJSItemStackModifier$ModifierApplicator"
import { $KubeJSItemStackModifier$WithInventoryApplicator$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$KubeJSItemStackModifier$WithInventoryApplicator"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $KubeJSItemStackModifier$SimpleApplicator$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$KubeJSItemStackModifier$SimpleApplicator"

/** Used to register custom stack modifiers which can be used with item stack providers */
export class $RegisterItemStackModifierEventJS extends $EventJS {
constructor()

/**
 * Creates a new item stack modifier with the given id and function
 * 
 * @param id - The registry name of the modifier
 * @param applicator - The function that will be applied to the stack when the modifier is called
 */
public "simple"(id: $ResourceLocation$$Type, applicator: $KubeJSItemStackModifier$SimpleApplicator$$Type): void
/**
 * Creates a new item stack modifier with the given id and function. Depends on the input item
 * 
 * @param id - The registry name of the modifier
 * @param applicator - The function that will be applied to the stack when the modifier is called
 */
public "withInput"(id: $ResourceLocation$$Type, applicator: $KubeJSItemStackModifier$ModifierApplicator$$Type): void
/**
 * Creates a new item stack modifier with the given id and function. Depends on the input item. The inventory may be empty if the recipe type does not support it
 * 
 * @param id - The registry name of the modifier
 * @param applicator - The function that will be applied to the stack when the modifier is called
 */
public "withInventory"(id: $ResourceLocation$$Type, applicator: $KubeJSItemStackModifier$WithInventoryApplicator$$Type): void
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$GroundCoverBlockBuilder" {
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $GroundCoverBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type)

/** Makes the block collide with entities */
public "collision"(): $GroundCoverBlockBuilder
public "createProperties"(): $BlockBehaviour$Properties
/**
 * Set's the block's parent model
 * 
 * Sets the parent model to 'kubejs_tfc:block/ground_cover/' + the given string
 */
public "groundCoverModelShape"(s: string): $GroundCoverBlockBuilder
/**
 * Invalid method, do not use
 * 
 * @deprecated
 */
public "notAxisAligned"(): $GroundCoverBlockBuilder
/** Sets the block to have the same bounding box as TFC's ore pieces */
public "ore"(): $GroundCoverBlockBuilder
/** Sets the block to have the same bounding box as TFC's twigs */
public "twig"(): $GroundCoverBlockBuilder
/** Sets the 'block item' of this block to an existing item */
public "withPreexistingItem"(item: $ResourceLocation$$Type): $GroundCoverBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$AxleBlockBuilder" {
import { $GearBoxBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$GearBoxBlockBuilder"
import { $WaterWheelBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$WaterWheelBlockBuilder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ClutchBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$ClutchBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $BladedAxleBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$BladedAxleBlockBuilder"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $WindmillBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$WindmillBlockBuilder"

export class $AxleBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type)

/** Sets the texture used for the axle */
public "axleTexture"(texture: $ResourceLocation$$Type): $AxleBlockBuilder
/** Creates and sets the properties of the axle's bladed axle block */
public "bladedAxle"(bladed: $Consumer$$Type<$BladedAxleBlockBuilder$$Type>): $AxleBlockBuilder
/** Creates and sets the properties of the axle's clutch block */
public "clutch"(clutch: $Consumer$$Type<$ClutchBlockBuilder$$Type>): $AxleBlockBuilder
public "createObject"(): $Block
public "createProperties"(): $BlockBehaviour$Properties
/** Creates and sets the properties of the axle's gear box block */
public "gearBox"(gearBox: $Consumer$$Type<$GearBoxBlockBuilder$$Type>): $AxleBlockBuilder
/** Creates and sets the properties of the axle's water wheel block */
public "waterWheel"(waterWheel: $Consumer$$Type<$WaterWheelBlockBuilder$$Type>): $AxleBlockBuilder
/** Sets the properties of the axle's windmill block */
public "windmill"(windmill: $Consumer$$Type<$WindmillBlockBuilder$$Type>): $AxleBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$LogBlockBuilder$UnStripped" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $LogBlockBuilder, $LogBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$LogBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $LogBlockBuilder$UnStripped extends $LogBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/** Sets the properties of the log's stripped variant */
public "stripped"(builder: $Consumer$$Type<$LogBlockBuilder$$Type>): $LogBlockBuilder$UnStripped
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$DeadTorchBuilder" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $TFCTorchBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$TFCTorchBlockBuilder"

export class $DeadTorchBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $TFCTorchBlockBuilder$$Type)

public "createObject"(): $Block
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$ConnectedGrassBlockBuilder" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $TFCDirtBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$TFCDirtBlockBuilder"
import { $ConnectedGrassBlockBuilder$GrassModelPart$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$ConnectedGrassBlockBuilder$GrassModelPart"
import { $MultipartShapedBlockBuilder } from "packages/dev/latvian/mods/kubejs/block/custom/$MultipartShapedBlockBuilder"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ConnectedGrassBlockBuilder extends $MultipartShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $TFCDirtBlockBuilder$$Type)

/**
 * Sets the model generation of the grass block, accepts a `BiConsumer` of a `GrassModelPart` and a model generator.
 * The generator is unique for each part.
 * 
 * There are 5 parts: `BOTTOM`, `TOP`, `SNOWY_TOP`, `SIDE`, and `SNOWY_SIDE`. These have 4 boolean properties
 * which can be used to logically determine the part currently in operation. The properties are `.bottom`,
 * `.top`, `.side`, and `.snowy`.
 */
public "models"(models: $BiConsumer$$Type<$ConnectedGrassBlockBuilder$GrassModelPart$$Type, $ModelGenerator$$Type>): $ConnectedGrassBlockBuilder
/** Makes the grass block use a unique texture for the dirt part of its texture, by default uses the texture of its parent dirt block */
public "uniqueDirtTexture"(): $ConnectedGrassBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IFirmaLifeISPExtensions" {
import { $ItemStackProviderJS } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS"

export interface $IFirmaLifeISPExtensions {
/** Adds a 'firmalife:add_pie_pan' modifier to the ISP */
"firmaLifeAddPiePan"(): $ItemStackProviderJS
/** Adds a 'firmalife:copy_dynamic_food' modifier to the ISP */
"firmaLifeCopyDynamicFood"(): $ItemStackProviderJS
/** Adds a 'firmalife:empty_pan' modifier to the ISP */
"firmaLifeEmptyPan"(): $ItemStackProviderJS
}

export namespace $IFirmaLifeISPExtensions {
const probejs$$marker: never
}
export abstract class $IFirmaLifeISPExtensions$$Static implements $IFirmaLifeISPExtensions {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties$Cluster" {
import { $BuildVeinProperties } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties"
import { $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToWeightedBlockStateMapEntry"

export class $BuildVeinProperties$Cluster extends $BuildVeinProperties {
constructor(blocks: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], rarity: integer, density: float, minY: integer, maxY: integer, randomName: string, size: integer)

}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$LoomRecipeJS" {
import { $TFCProviderRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCProviderRecipeJS"

export class $LoomRecipeJS extends $TFCProviderRecipeJS {
constructor()

public "getMod"(): string
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS" {
import { $BuildFaunaData$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildFaunaData"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $FluidIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidIngredient"
import { $IFirmaLifeDataExtension } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IFirmaLifeDataExtension"
import { $BuildClimateRangeData$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildClimateRangeData"
import { $IBeneathDataExtension } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IBeneathDataExtension"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Weight$$Type } from "packages/net/dries007/tfc/common/capabilities/size/$Weight"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IDataConstructor } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IDataConstructor"
import { $BuildDrinkableData$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildDrinkableData"
import { $PlanterType$$Type } from "packages/com/eerussianguy/firmalife/common/blocks/greenhouse/$PlanterType"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $BuildFoodItemData$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildFoodItemData"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $BlockIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$BlockIngredient"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Size$$Type } from "packages/net/dries007/tfc/common/capabilities/size/$Size"
import { $DataPackEventJS$$Type } from "packages/dev/latvian/mods/kubejs/script/data/$DataPackEventJS"
import { $LostPage$Punishment$$Type } from "packages/com/eerussianguy/beneath/misc/$LostPage$Punishment"
import { $PlacedFeatureProperties$Climate$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties$Climate"
import { $FarmlandBlockEntity$NutrientType$$Type } from "packages/net/dries007/tfc/common/blockentities/$FarmlandBlockEntity$NutrientType"

export class $TFCDataEventJS extends $EventJS implements $IDataConstructor, $IBeneathDataExtension, $IFirmaLifeDataExtension {
constructor(wrapped: $DataPackEventJS$$Type)

/**
 * Defines a new lost page
 * 
 * @param cost - The item required for this ritual
 * @param reward - The item reward for this ritual
 * @param costs - The number of `cost` items that are required, will be randomly selected from when the page is initialized
 * @param rewards - The number of `reward` items that will be resultant from a ritual, will be selected from when the page is initialized
 * @param punishments - Possible punishments for this ritual, will be randomly selected from when the page is initialized
 * @param langKey - A custom lang key to use for the ingredient in the lost page screen
 * @param name - The name of the lost page definition
 */
public "beneathLostPage"(cost: $Ingredient$$Type, reward: $Item$$Type, costs: integer[], rewards: integer[], punishments: $LostPage$Punishment$$Type[], langKey: string, name: $ResourceLocation$$Type): void
/**
 * Defines a new lost page
 * 
 * @param cost - The item required for this ritual
 * @param reward - The item reward for this ritual
 * @param costs - The number of `cost` items that are required, will be randomly selected from when the page is initialized
 * @param rewards - The number of `reward` items that will be resultant from a ritual, will be selected from when the page is initialized
 * @param punishments - Possible punishments for this ritual, will be randomly selected from when the page is initialized
 * @param langKey - A custom lang key to use for the ingredient in the lost page screen
 */
public "beneathLostPage"(cost: $Ingredient$$Type, reward: $Item$$Type, costs: integer[], rewards: integer[], punishments: $LostPage$Punishment$$Type[], langKey: string): void
/**
 * Defines a new nether fertilizer
 * 
 * @param ingredient - The ingredient for the nether fertilizer
 * @param death - The death value of the fertilizer, may be null, defaults to 0
 * @param destruction - The destruction value of the fertilizer, may be null, defaults to 0
 * @param decay - The decay value of the fertilizer, may be null, defaults to 0
 * @param sorrow - The sorrow value of the fertilizer, may be null, defaults to 0
 * @param flame - The flame value of the fertilizer, may be null, defaults to 0
 */
public "beneathNetherFertilizer"(ingredient: $Ingredient$$Type, death: float, destruction: float, decay: float, sorrow: float, flame: float): void
/**
 * Defines a new nether fertilizer
 * 
 * @param ingredient - The ingredient for the nether fertilizer
 * @param death - The death value of the fertilizer, may be null, defaults to 0
 * @param destruction - The destruction value of the fertilizer, may be null, defaults to 0
 * @param decay - The decay value of the fertilizer, may be null, defaults to 0
 * @param sorrow - The sorrow value of the fertilizer, may be null, defaults to 0
 * @param flame - The flame value of the fertilizer, may be null, defaults to 0
 * @param name - The name of the nether fertilizer
 */
public "beneathNetherFertilizer"(ingredient: $Ingredient$$Type, death: float, destruction: float, decay: float, sorrow: float, flame: float, name: $ResourceLocation$$Type): void
/**
 * Specifies the climate range data of the given name
 * 
 * @param climateRange - Climate range properties for the given climate range
 * @param name - The name of the climate range
 */
public "climateRange"(climateRange: $Consumer$$Type<$BuildClimateRangeData$$Type>, name: $ResourceLocation$$Type): void
/**
 * Defines that a fluid is directly drinkable
 * 
 * @param fluidIngredient - The fluids this drinkable applies to
 * @param drinkableData - The drinkable properties that are applied to the fluid ingredient
 */
public "drinkable"(fluidIngredient: $FluidIngredient$$Type, drinkableData: $Consumer$$Type<$BuildDrinkableData$$Type>): void
/**
 * Defines that a fluid is directly drinkable
 * 
 * @param fluidIngredient - The fluids this drinkable applies to
 * @param drinkableData - The drinkable properties that are applied to the fluid ingredient
 * @param name - The name of the drinkable data
 */
public "drinkable"(fluidIngredient: $FluidIngredient$$Type, drinkableData: $Consumer$$Type<$BuildDrinkableData$$Type>, name: $ResourceLocation$$Type): void
/**
 * Adds an entity damage resistance to the specified entity tag
 * 
 * @param entityTag - The entity tag to apply the damage resistances to
 * @param piercing - The piercing value of this resistance, may be null to not specify a value
 * @param slashing - The slashing value of this resistance, may be null to not specify a value
 * @param crushing - the crushing value of this resistance, may be null to not specify a value
 */
public "entityDamageResistance"(entityTag: string, piercing: integer, slashing: integer, crushing: integer): void
/**
 * Adds an entity damage resistance to the specified entity tag
 * 
 * @param entityTag - The entity tag to apply the damage resistances to
 * @param piercing - The piercing value of this resistance, may be null to not specify a value
 * @param slashing - The slashing value of this resistance, may be null to not specify a value
 * @param crushing - the crushing value of this resistance, may be null to not specify a value
 * @param name - The name of the damage resistance
 */
public "entityDamageResistance"(entityTag: string, piercing: integer, slashing: integer, crushing: integer, name: $ResourceLocation$$Type): void
/**
 * Specifies the fauna data of the given name
 * 
 * @param climate - The fauna's climate requirements
 * @param fauna - Additional fauna properties for the given fauna
 * @param name - The name of the fauna definition
 */
public "fauna"(climate: $Consumer$$Type<$PlacedFeatureProperties$Climate$$Type>, fauna: $Consumer$$Type<$BuildFaunaData$$Type>, name: $ResourceLocation$$Type): void
/**
 * Adds a fertilizer definition to the specified ingredient
 * 
 * @param ingredient - The ingredient the fertilizer data applies to
 * @param nitrogen - The nitrogen value of the fertilizer, may be null to not define a value, defaults to 0
 * @param phosphorous - The phosphorous value of the fertilizer, may be null to not define a value, defaults to 0
 * @param potassium - The potassium value of the fertilizer, amy be null to not define a value, defaults to 0
 * @param name - The name of the fertilizer data
 */
public "fertilizer"(ingredient: $Ingredient$$Type, nitrogen: number, phosphorous: number, potassium: number, name: $ResourceLocation$$Type): void
/**
 * Adds a fertilizer definition to the specified ingredient
 * 
 * @param ingredient - The ingredient the fertilizer data applies to
 * @param nitrogen - The nitrogen value of the fertilizer, may be null to not define a value, defaults to 0
 * @param phosphorous - The phosphorous value of the fertilizer, may be null to not define a value, defaults to 0
 * @param potassium - The potassium value of the fertilizer, amy be null to not define a value, defaults to 0
 */
public "fertilizer"(ingredient: $Ingredient$$Type, nitrogen: number, phosphorous: number, potassium: number): void
/**
 * Defines a new greenhouse type
 * 
 * @param ingredient - The blocks that make up the greenhouse type
 * @param tier - The tier of the greenhouse
 * @param name - The name of the greenhouse type
 */
public "firmalifeGreenhouseType"(ingredient: $BlockIngredient$$Type, tier: integer, name: $ResourceLocation$$Type): void
/**
 * Defines a new greenhouse type
 * 
 * @param ingredient - The blocks that make up the greenhouse type
 * @param tier - The tier of the greenhouse
 */
public "firmalifeGreenhouseType"(ingredient: $BlockIngredient$$Type, tier: integer): void
/**
 * Defines a new plantable definition
 * 
 * @param ingredient - The seed items to be used for this plantable definition
 * @param planterType - The planter type to use, may be null to default to 'quad'
 * @param tier - The greenhouse type tier the plantable requires to function, defaults to 0
 * @param stages - How many stages the planter has, one less than the number of textures the planter must cycle through, may be null for 'trellis', and 'bonsai' planter types
 * @param extraSeedChance - A number, in the range [0, 1], that determines the chance of getting an extra seed back when the planter grows, may be null to default to 0.5
 * @param seed - The seed returned by the planter when finished growing, if null no seed will be dropped
 * @param crop - The product of the crop, will always be returned
 * @param nutrient - The nutrient he plant consumes, may be null to default to 'nitrogen'
 * @param textures - An array of strings, corresponding to the textures the planter uses
 * 
 * Usage:
 * For planter types `large`, `quad`, `hydroponic`, and `hanging`: Order the textures the same as the growth order
 * For planter type `trellis`: Order the textures in the order growing, dry, flowering, fruiting
 * For planter type `bonsai`: Order the textures in the order fruiting. dry. flowering, branch, leaves
 * @param special - A string, the extra texture used by hanging planter types
 * 
 * Usage:
 * For planter types `large`, `quad`, `hydroponic`, `trellis`, and `bonsai`: Pass in null
 * For planter type `hanging`: Pass the fruit texture
 * @param name - The name of the plantable definition
 */
public "firmalifePlantable"(ingredient: $Ingredient$$Type, planterType: $PlanterType$$Type, tier: integer, stages: integer, extraSeedChance: float, seed: $ItemStack$$Type, crop: $ItemStack$$Type, nutrient: $FarmlandBlockEntity$NutrientType$$Type, textures: string[], special: string, name: $ResourceLocation$$Type): void
/**
 * Defines a new plantable definition
 * 
 * @param ingredient - The seed items to be used for this plantable definition
 * @param planterType - The planter type to use, may be null to default to 'quad'
 * @param tier - The greenhouse type tier the plantable requires to function, defaults to 0
 * @param stages - How many stages the planter has, one less than the number of textures the planter must cycle through, may be null for 'trellis', and 'bonsai' planter types
 * @param extraSeedChance - A number, in the range [0, 1], that determines the chance of getting an extra seed back when the planter grows, may be null to default to 0.5
 * @param seed - The seed returned by the planter when finished growing, if null no seed will be dropped
 * @param crop - The product of the crop, will always be returned
 * @param nutrient - The nutrient he plant consumes, may be null to default to 'nitrogen'
 * @param textures - An array of strings, corresponding to the textures the planter uses
 * 
 * Usage:
 * For planter types `large`, `quad`, `hydroponic`, and `hanging`: Order the textures the same as the growth order
 * For planter type `trellis`: Order the textures in the order growing, dry, flowering, fruiting
 * For planter type `bonsai`: Order the textures in the order fruiting. dry. flowering, branch, leaves
 * @param special - A string, the extra texture used by hanging planter types
 * 
 * Usage:
 * For planter types `large`, `quad`, `hydroponic`, `trellis`, and `bonsai`: Pass in null
 * For planter type `hanging`: Pass the fruit texture
 */
public "firmalifePlantable"(ingredient: $Ingredient$$Type, planterType: $PlanterType$$Type, tier: integer, stages: integer, extraSeedChance: float, seed: $ItemStack$$Type, crop: $ItemStack$$Type, nutrient: $FarmlandBlockEntity$NutrientType$$Type, textures: string[], special: string): void
/**
 * Adds a food definition to the specified ingredient
 * 
 * @param ingredient - The ingredient the food definition applies to
 * @param foodItemData - The food item properties that are applied to the ingredient
 */
public "foodItem"(ingredient: $Ingredient$$Type, foodItemData: $Consumer$$Type<$BuildFoodItemData$$Type>): void
/**
 * Adds a food definition to the specified ingredient
 * 
 * @param ingredient - The ingredient the food definition applies to
 * @param foodItemData - The food item properties that are applied to the ingredient
 * @param name - The name of the food item data
 */
public "foodItem"(ingredient: $Ingredient$$Type, foodItemData: $Consumer$$Type<$BuildFoodItemData$$Type>, name: $ResourceLocation$$Type): void
/**
 * Adds a fuel definition to the specified ingredient
 * 
 * @param ingredient - The ingredient the fuel definition applies to
 * @param temperature - The temperature °C that the fuel burns at
 * @param duration - The number of ticks the fuel burns for
 * @param purity - The purity of the fuel, may be null to not specify a value
 * @param name - The name of the fuel definition
 */
public "fuel"(ingredient: $Ingredient$$Type, temperature: float, duration: integer, purity: float, name: $ResourceLocation$$Type): void
/**
 * Adds a fuel definition to the specified ingredient
 * 
 * @param ingredient - The ingredient the fuel definition applies to
 * @param temperature - The temperature °C that the fuel burns at
 * @param duration - The number of ticks the fuel burns for
 * @param purity - The purity of the fuel, may be null to not specify a value
 */
public "fuel"(ingredient: $Ingredient$$Type, temperature: float, duration: integer, purity: float): void
/**
 * Adds an item damage resistance to the specified ingredient
 * 
 * @param ingredient - The ingredient this resistance applies to
 * @param piercing - The piercing value of this resistance, may be null to not specify a value
 * @param slashing - The slashing value of this resistance, may be null to not specify a value
 * @param crushing - the crushing value of this resistance, may be null to not specify a value
 */
public "itemDamageResistance"(ingredient: $Ingredient$$Type, piercing: integer, slashing: integer, crushing: integer): void
/**
 * Adds an item damage resistance to the specified ingredient
 * 
 * @param ingredient - The ingredient this resistance applies to
 * @param piercing - The piercing value of this resistance, may be null to not specify a value
 * @param slashing - The slashing value of this resistance, may be null to not specify a value
 * @param crushing - the crushing value of this resistance, may be null to not specify a value
 * @param name - The name of the damage resistance
 */
public "itemDamageResistance"(ingredient: $Ingredient$$Type, piercing: integer, slashing: integer, crushing: integer, name: $ResourceLocation$$Type): void
/**
 * Adds a heat definition to the specified ingredient
 * 
 * @param ingredient - The ingredient the heat definition applies to
 * @param heatCapacity - Specifies how fast the ingredient heats up relative to others. Measured in Energy / °C
 * @param forgingTemperature - Specifies the temperature °C required to work the ingredient. May be null to allow working at any temperature
 * @param weldingTemperature - Specifies the temperature °C required to weld the ingredient. May be null to allow welding at any temperature
 */
public "itemHeat"(ingredient: $Ingredient$$Type, heatCapacity: float, forgingTemperature: float, weldingTemperature: float): void
/**
 * Adds a heat definition to the specified ingredient
 * 
 * @param ingredient - The ingredient the heat definition applies to
 * @param heatCapacity - Specifies how fast the ingredient heats up relative to others. Measured in Energy / °C
 * @param forgingTemperature - Specifies the temperature °C required to work the ingredient. May be null to allow working at any temperature
 * @param weldingTemperature - Specifies the temperature °C required to weld the ingredient. May be null to allow welding at any temperature
 * @param name - The name of the heat definition
 */
public "itemHeat"(ingredient: $Ingredient$$Type, heatCapacity: float, forgingTemperature: float, weldingTemperature: float, name: $ResourceLocation$$Type): void
/**
 * Adds an item size definition tot he specified ingredient
 * 
 * @param ingredient - The ingredient this item size definition applies to
 * @param size - Sets the size of the definition, may be 'tiny', 'very_small', 'small', 'normal', 'large', 'very_large', 'huge', or null to not specify a size
 * @param weight - Sets the weight of the definition, may be 'very_light', 'light', 'medium', 'heavy', 'very_heavy', or null to not specify a weight
 */
public "itemSize"(ingredient: $Ingredient$$Type, size: $Size$$Type, weight: $Weight$$Type): void
/**
 * Adds an item size definition to the specified ingredient
 * 
 * @param ingredient - The ingredient this item size definition applies to
 * @param size - Sets the size of the definition, may be 'tiny', 'very_small', 'small', 'normal', 'large', 'very_large', 'huge', or null to default to 'medium'
 * @param weight - Sets the weight of the definition, may be 'very_light', 'light', 'medium', 'heavy', 'very_heavy', or null to default to 'medium'
 * @param name - The name of the item size definition
 */
public "itemSize"(ingredient: $Ingredient$$Type, size: $Size$$Type, weight: $Weight$$Type, name: $ResourceLocation$$Type): void
/**
 * Defines a knapping type
 * 
 * @param ingredient - The ingredient of the knapping type's item stack ingredient
 * @param ingredientCount - The count of the knapping type's item stack ingredient
 * @param amountToConsume - The amount of items that get used by the recipe
 * @param clickSound - The registry name of a sound that plays when knapping occurs
 * @param consumeAfterComplete - If items should be consumed as soon as a square is clicked, or when the result is removed from the slot
 * @param useDisabledTexture - If true, a clicked slot will show a different texture rather than nothing at all
 * @param spawnsParticles - if true, the screen will show particles when knapping
 * @param jeiIconItem - An item stack, used as the category icon in the auto-generated jei category
 * @param name - The name of the knapping type
 */
public "knappingType"(ingredient: $Ingredient$$Type, ingredientCount: integer, amountToConsume: integer, clickSound: $ResourceLocation$$Type, consumeAfterComplete: boolean, useDisabledTexture: boolean, spawnsParticles: boolean, jeiIconItem: $ItemStack$$Type, name: $ResourceLocation$$Type): void
/**
 * Defines a lamp fuel
 * 
 * @param fluidIngredient - The fluid ingredient which determines which fluids the the lamp fuel applies to
 * @param blockIngredient - The block ingredient which determines what (lamp) blocks are valid for this fuel
 * @param burnRate - How fast the lamp consumes fuel, in ticks per mB
 */
public "lampFuel"(fluidIngredient: $FluidIngredient$$Type, blockIngredient: $BlockIngredient$$Type, burnRate: integer): void
/**
 * Defines a lamp fuel
 * 
 * @param fluidIngredient - The fluid ingredient which determines which fluids the the lamp fuel applies to
 * @param blockIngredient - The block ingredient which determines what (lamp) blocks are valid for this fuel
 * @param burnRate - How fast the lamp consumes fuel, in ticks per mB
 * @param name - The name of the lamp fuel
 */
public "lampFuel"(fluidIngredient: $FluidIngredient$$Type, blockIngredient: $BlockIngredient$$Type, burnRate: integer, name: $ResourceLocation$$Type): void
/**
 * Defines a metal
 * 
 * @param fluid - The fluid the metal is based on
 * @param meltTemperature - The melting temperature °C of the metal
 * @param heatCapacity - Specifies how fast the metal heats up relative to others. Measured in Energy / (mB x °C)
 * @param ingot - The ingredient which specifies the metal's ingots, may be null
 * @param doubleIngot - The ingredient which specifies the metal's double ingots, may be null
 * @param sheet - The ingredient which specifies the metal's sheets, may be null
 * @param tier - The tier of the metal
 */
public "metal"(fluid: $Fluid$$Type, meltTemperature: float, heatCapacity: float, ingot: $Ingredient$$Type, doubleIngot: $Ingredient$$Type, sheet: $Ingredient$$Type, tier: integer): void
/**
 * Defines a metal
 * 
 * @param fluid - The fluid the metal is based on
 * @param meltTemperature - The melting temperature °C of the metal
 * @param heatCapacity - Specifies how fast the metal heats up relative to others. Measured in Energy / (mB x °C)
 * @param ingot - The ingredient which specifies the metal's ingots, may be null
 * @param doubleIngot - The ingredient which specifies the metal's double ingots, may be null
 * @param sheet - The ingredient which specifies the metal's sheets, may be null
 * @param tier - The tier of the metal
 * @param name - The name of the metal
 */
public "metal"(fluid: $Fluid$$Type, meltTemperature: float, heatCapacity: float, ingot: $Ingredient$$Type, doubleIngot: $Ingredient$$Type, sheet: $Ingredient$$Type, tier: integer, name: $ResourceLocation$$Type): void
/**
 * Adds a panning definition to the block ingredient
 * 
 * @param blockIngredient - The block ingredient the definition applies to
 * @param lootTable - The location of a loot table to be dropped by the ingredient
 * @param models - A list of model locations to be iterated through as panning progresses
 */
public "panning"(blockIngredient: $BlockIngredient$$Type, lootTable: string, models: string[]): void
/**
 * Adds a panning definition to the block ingredient
 * 
 * @param blockIngredient - The block ingredient the definition applies to
 * @param lootTable - The location of a loot table to be dropped by the ingredient
 * @param models - A list of model locations to be iterated through as panning progresses
 * @param name - The name of the panning definition
 */
public "panning"(blockIngredient: $BlockIngredient$$Type, lootTable: string, models: string[], name: $ResourceLocation$$Type): void
/**
 * Adds a sluicing definition to the ingredient
 * 
 * @param ingredient - The ingredient the sluicing definition applies to
 * @param lootTable - The location of a loot table to be dropped for this item
 */
public "sluicing"(ingredient: $Ingredient$$Type, lootTable: string): void
/**
 * Adds a sluicing definition to the ingredient
 * 
 * @param ingredient - The ingredient the sluicing definition applies to
 * @param lootTable - The location of a loot table to be dropped for this item
 * @param name - The name of the sluicing definition
 */
public "sluicing"(ingredient: $Ingredient$$Type, lootTable: string, name: $ResourceLocation$$Type): void
/**
 * Defines a support definition
 * 
 * @param blockIngredient - The block ingredient that defines what blocks the definition applies to
 * @param up - The number of blocks upwards the block supports
 * @param down - The number og blocks downwards the block supports
 * @param horizontal - The number of blocks horizontally the block supports
 * @param name - The name of the support definition
 */
public "support"(blockIngredient: $BlockIngredient$$Type, up: integer, down: integer, horizontal: integer, name: $ResourceLocation$$Type): void
/**
 * Defines a support definition
 * 
 * @param blockIngredient - The block ingredient that defines what blocks the definition applies to
 * @param up - The number of blocks upwards the block supports
 * @param down - The number og blocks downwards the block supports
 * @param horizontal - The number of blocks horizontally the block supports
 */
public "support"(blockIngredient: $BlockIngredient$$Type, up: integer, down: integer, horizontal: integer): void
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ISupportExtendedProperties$ExtendedPropertiesJS$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties$ExtendedPropertiesJS"

export interface $ISupportExtendedProperties {
"createProperties"(): $BlockBehaviour$Properties
/** Allows for editing of TFC's extended block properties */
"extendedProperties"(extendedProperties: $Consumer$$Type<$ISupportExtendedProperties$ExtendedPropertiesJS$$Type>): $BlockBuilder
}

export namespace $ISupportExtendedProperties {
const probejs$$marker: never
}
export abstract class $ISupportExtendedProperties$$Static implements $ISupportExtendedProperties {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$Builder" {
import { $OpenSimplex2D$$Type } from "packages/net/dries007/tfc/world/noise/$OpenSimplex2D"
import { $KubeJSClimateModel$LevelPosLong2FloatCallback, $KubeJSClimateModel$LevelPosLong2FloatCallback$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$LevelPosLong2FloatCallback"
import { $Vec2 } from "packages/net/minecraft/world/phys/$Vec2"
import { $KubeJSClimateModel$WindVectorCallback, $KubeJSClimateModel$WindVectorCallback$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$WindVectorCallback"
import { $Noise2D } from "packages/net/dries007/tfc/world/noise/$Noise2D"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $KubeJSClimateModel$LevelPos2FloatCallback, $KubeJSClimateModel$LevelPos2FloatCallback$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$LevelPos2FloatCallback"
import { $KubeJSClimateModel$OnChunkLoadCallback, $KubeJSClimateModel$OnChunkLoadCallback$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$OnChunkLoadCallback"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $KubeJSClimateModel$TemperatureCallback, $KubeJSClimateModel$TemperatureCallback$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$TemperatureCallback"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $KubeJSClimateModel$Builder {
constructor(name: $ResourceLocation$$Type)

/** A getter for the model's average rainfall */
public "averageRainfall"(level: $LevelReader$$Type, pos: $BlockPos$$Type): float
/** A getter for the model's average temperature */
public "averageTemperature"(level: $LevelReader$$Type, pos: $BlockPos$$Type): float
/** A getter for the model's current temperature */
public "currentTemperature"(level: $LevelReader$$Type, pos: $BlockPos$$Type, calendarTicks: long): float
/** Returns the climate seed being used */
public "getClimateSeed"(): long
/** Gets the rainfall scale of the dimension, defaults to 20000 if it does not have a TFC-like chunk generator */
public "getRainfallScale"(): float
/** Gets the temperature scale of the dimension, defaults to 20000 if it does not have a TFC-like chunk generator */
public "getTemperatureScale"(): float
/** Returns the callback used by TFC for its air fog */
public "getTfcAirFog"(): $KubeJSClimateModel$LevelPosLong2FloatCallback
/** Returns the callback used by TFC for its average rainfall */
public "getTfcAverageRainfall"(): $KubeJSClimateModel$LevelPos2FloatCallback
/** Returns the callback used by TFC for its average temperature */
public "getTfcAverageTemperature"(): $KubeJSClimateModel$LevelPos2FloatCallback
/** Returns the callback used by TFC for its chunk loading */
public "getTfcChunkLoad"(): $KubeJSClimateModel$OnChunkLoadCallback
/** Returns the callback used by TFC for its current temperature */
public "getTfcCurrentTemperature"(): $KubeJSClimateModel$TemperatureCallback
/** Returns the callback used by TFC for its water fog */
public "getTfcWaterFog"(): $KubeJSClimateModel$LevelPosLong2FloatCallback
/** Returns the callback used by TFC for its wind */
public "getTfcWind"(): $KubeJSClimateModel$WindVectorCallback
/** Adds a new Noise2D to the model, which can be retrieved later via the returned index */
public "newNoise"(builder: $Function$$Type<$OpenSimplex2D$$Type, $Noise2D>): integer
/** Gets the noise at the specified index */
public "noise"(index: integer): $Noise2D
/** Sets how the model will determine the fogginess at a given position and time */
public "setAirFog"(callback: $KubeJSClimateModel$LevelPosLong2FloatCallback$$Type): void
/** Sets how the model will determine the average rainfall at a given position */
public "setAverageRainfallCalculation"(callback: $KubeJSClimateModel$LevelPos2FloatCallback$$Type): void
/** Sets how the model will determine the average temperature at a given position */
public "setAverageTemperatureCalculation"(callback: $KubeJSClimateModel$LevelPos2FloatCallback$$Type): void
/** Sets how the model will determine the current temperature at a given position and time */
public "setCurrentTemperatureCalculation"(callback: $KubeJSClimateModel$TemperatureCallback$$Type): void
/** Sets the model's behavior on chunk load */
public "setOnChunkLoad"(callback: $KubeJSClimateModel$OnChunkLoadCallback$$Type): void
/** Sets the model's behavior when loading into a world */
public "setOnWorldLoad"(callback: $Consumer$$Type<$ServerLevel$$Type>): void
/** Sets how the model will determine the fogginess in water at a given position and time */
public "setWaterFog"(callback: $KubeJSClimateModel$LevelPosLong2FloatCallback$$Type): void
/** Sets how the model will determine the wind strength at the given position and time */
public "setWindVector"(callback: $KubeJSClimateModel$WindVectorCallback$$Type): void
/** Creates a new vector for use in wind calculations */
public "vector"(x: float, z: float): $Vec2
get "climateSeed"(): long
get "rainfallScale"(): float
get "temperatureScale"(): float
get "tfcAirFog"(): $KubeJSClimateModel$LevelPosLong2FloatCallback
get "tfcAverageRainfall"(): $KubeJSClimateModel$LevelPos2FloatCallback
get "tfcAverageTemperature"(): $KubeJSClimateModel$LevelPos2FloatCallback
get "tfcChunkLoad"(): $KubeJSClimateModel$OnChunkLoadCallback
get "tfcCurrentTemperature"(): $KubeJSClimateModel$TemperatureCallback
get "tfcWaterFog"(): $KubeJSClimateModel$LevelPosLong2FloatCallback
get "tfcWind"(): $KubeJSClimateModel$WindVectorCallback
set "airFog"(value: $KubeJSClimateModel$LevelPosLong2FloatCallback$$Type)
set "averageRainfallCalculation"(value: $KubeJSClimateModel$LevelPos2FloatCallback$$Type)
set "averageTemperatureCalculation"(value: $KubeJSClimateModel$LevelPos2FloatCallback$$Type)
set "currentTemperatureCalculation"(value: $KubeJSClimateModel$TemperatureCallback$$Type)
set "onChunkLoad"(value: $KubeJSClimateModel$OnChunkLoadCallback$$Type)
set "onWorldLoad"(value: $Consumer$$Type<$ServerLevel$$Type>)
set "waterFog"(value: $KubeJSClimateModel$LevelPosLong2FloatCallback$$Type)
set "windVector"(value: $KubeJSClimateModel$WindVectorCallback$$Type)
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$MiscBindings" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Metaballs3D } from "packages/net/dries007/tfc/world/noise/$Metaballs3D"
import { $OpenSimplex2D } from "packages/net/dries007/tfc/world/noise/$OpenSimplex2D"
import { $FastNoiseLite, $FastNoiseLite$$Type } from "packages/net/dries007/tfc/world/noise/$FastNoiseLite"
import { $LayeredArea } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/$LayeredArea"
import { $Noise2D, $Noise2D$$Type } from "packages/net/dries007/tfc/world/noise/$Noise2D"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $LampFuel } from "packages/net/dries007/tfc/util/$LampFuel"
import { $DoubleToIntFunction$$Type } from "packages/java/util/function/$DoubleToIntFunction"
import { $Metal } from "packages/net/dries007/tfc/util/$Metal"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Support$SupportRange } from "packages/net/dries007/tfc/util/$Support$SupportRange"
import { $SourceLayer$$Type } from "packages/net/dries007/tfc/world/layer/framework/$SourceLayer"
import { $Cellular3D } from "packages/net/dries007/tfc/world/noise/$Cellular3D"
import { $FoodTrait, $FoodTrait$$Type } from "packages/net/dries007/tfc/common/capabilities/food/$FoodTrait"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Fuel } from "packages/net/dries007/tfc/util/$Fuel"
import { $Enum } from "packages/java/lang/$Enum"
import { $RegistryRock } from "packages/net/dries007/tfc/util/registry/$RegistryRock"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Cellular2D } from "packages/net/dries007/tfc/world/noise/$Cellular2D"
import { $RockData } from "packages/net/dries007/tfc/world/chunkdata/$RockData"
import { $NamedRegistryMetal } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$NamedRegistryMetal"
import { $Weight } from "packages/net/dries007/tfc/common/capabilities/size/$Weight"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Drinkable } from "packages/net/dries007/tfc/util/$Drinkable"
import { $Size } from "packages/net/dries007/tfc/common/capabilities/size/$Size"
import { $Heat } from "packages/net/dries007/tfc/common/capabilities/heat/$Heat"
import { $ForestType } from "packages/net/dries007/tfc/world/chunkdata/$ForestType"
import { $Support } from "packages/net/dries007/tfc/util/$Support"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $RockSettings } from "packages/net/dries007/tfc/world/settings/$RockSettings"
import { $IHeat } from "packages/net/dries007/tfc/common/capabilities/heat/$IHeat"
import { $Metaballs2D } from "packages/net/dries007/tfc/world/noise/$Metaballs2D"
import { $ChunkData } from "packages/net/dries007/tfc/world/chunkdata/$ChunkData"
import { $OpenSimplex3D } from "packages/net/dries007/tfc/world/noise/$OpenSimplex3D"
import { $Fertilizer } from "packages/net/dries007/tfc/util/$Fertilizer"
import { $Noise3D, $Noise3D$$Type } from "packages/net/dries007/tfc/world/noise/$Noise3D"
import { $Pannable } from "packages/net/dries007/tfc/util/$Pannable"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Sluiceable } from "packages/net/dries007/tfc/util/$Sluiceable"
import { $Set } from "packages/java/util/$Set"
import { $IFood } from "packages/net/dries007/tfc/common/capabilities/food/$IFood"
import { $LerpFloatLayer } from "packages/net/dries007/tfc/world/chunkdata/$LerpFloatLayer"
import { $Map } from "packages/java/util/$Map"
import { $NamedRegistryWood } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$NamedRegistryWood"

export class $MiscBindings extends $Enum<$MiscBindings> {
static readonly "INSTANCE": $MiscBindings
/** A map associating the name of a heat level to its Heat */
readonly "heatLevels": $Map<string, $Heat>

/**
 * Applies the given food trait to the stack
 * 
 * @param stack - The stack to add the trait to. **Important**: This stack *will* be modified
 * @param trait - the id of the trait to be added
 */
public "applyFoodTrait"(stack: $ItemStack$$Type, trait: $ResourceLocation$$Type): void
/**
 * Returns true if the given block can start a collapse
 * 
 * @param level - The level to check in
 * @param pos - The position to check at
 */
public "canStartCollapse"(level: $LevelAccessor$$Type, pos: $BlockPos$$Type): boolean
/** Creates a new `Cellular2D` noise */
public "cellular2D"(seed: long): $Cellular2D
/** Creates a new `Cellular3D` noise */
public "cellular3D"(seed: long): $Cellular3D
/** Casts a JS callback into a full Noise2D object */
public "customNoise2D"(func: $Noise2D$$Type): $Noise2D
/** Casts a JS callback into a full Noise3D object */
public "customNoise3D"(func: $Noise3D$$Type): $Noise3D
/**
 * Finds and returns all positions in the given area that are unsupported
 * 
 * @param level - The level to check in
 * @param from - The minimum corner to check
 * @param to - The maximum corner to check
 */
public "findUnsupportedPositions"(level: $BlockGetter$$Type, from: $BlockPos$$Type, to: $BlockPos$$Type): $Set<$BlockPos>
/**
 * Finds and returns all positions in the given area that are unsupported
 * 
 * @param level - The level to check in
 * @param center - The center position
 * @param horizontal - The horizontal distance to check from the center
 * @param up - The upwards distance to check from the center
 * @param down - The downwards distance to check from the center
 */
public "findUnsupportedPositions"(level: $BlockGetter$$Type, center: $BlockPos$$Type, horizontal: integer, up: integer, down: integer): $Set<$BlockPos>
/** Creates a new `FastNoiseLite` object, which TFC uses for several of its noises */
public "fnl"(seed: long): $FastNoiseLite
/** Converts a `FastNoiseLite` object into a `Noise2D` object */
public "fnl2Noise2D"(fnl: $FastNoiseLite$$Type): $Noise2D
/** Converts a `FastNoiseLite` object into a `Noise3D` object */
public "fnl2Noise3D"(fnl: $FastNoiseLite$$Type): $Noise3D
/**
 * Forces a collapse to happen at a position, returns true if any blocks started collapsing
 * 
 * @param level - The level to collapse in
 * @param pos - The center position of the collapse
 */
public "forceCollapse"(level: $Level$$Type, pos: $BlockPos$$Type): boolean
/**
 * Returns TFC's `ChunkData` object for the given level and position
 * 
 * @param level - The level to get the data from
 * @param pos - The position to get the data from
 */
public "getChunkData"(level: $LevelReader$$Type, pos: $BlockPos$$Type): $ChunkData
/** Returns the first `Drinkable` that matches the given fluid, may be null */
public "getDrinkable"(fluid: $Fluid$$Type): $Drinkable
/** Returns the first `Fertilizer` that matches the given stack, may be null */
public "getFertilizer"(stack: $ItemStack$$Type): $Fertilizer
/** Returns the stack's `IFood` capability if present, else null */
public "getFood"(stack: $ItemStack$$Type): $IFood
/** Returns the `FoodTrait` with the given registry name if it exists, else null */
public "getFoodTrait"(id: $ResourceLocation$$Type): $FoodTrait
/** Returns the registry name of the given food trait */
public "getFoodTraitId"(trait: $FoodTrait$$Type): $ResourceLocation
/**
 * Returns the forest type at the given level and position
 * 
 * @param level - The level to get the type from
 * @param pos - The position to get the type from
 */
public "getForestType"(level: $LevelReader$$Type, pos: $BlockPos$$Type): $ForestType
/** Returns the first `Fuel` that matches the given stack, may be null */
public "getFuel"(stack: $ItemStack$$Type): $Fuel
/** Returns the stack's `IHeat` capability if present, else null */
public "getHeat"(stack: $ItemStack$$Type): $IHeat
/** Returns the `Heat` that describes the given temperature. Returns null for temperatures less than 1°C */
public "getHeatLevel"(temperature: float): $Heat
/**
 * Returns a number, in the range [0, 100], an expression of how hydrated the soil is
 * 
 * @param level - The level to get the hydration from
 * @param pos - THe position to get the hydration from
 */
public "getHydration"(level: $LevelAccessor$$Type, pos: $BlockPos$$Type): integer
/** Returns the first `LampFuel` that matches the given fluid and state, may be null */
public "getLampFuel"(fluid: $Fluid$$Type, state: $BlockState$$Type): $LampFuel
/** Returns an iterable of all positions that could possibly be supported around the min and max points */
public "getMaximumSupportedAreaAround"(minPoint: $BlockPos$$Type, maxPoint: $BlockPos$$Type): $Iterable<$BlockPos>
/** Returns the `Metal` associated with the given fluid, may be null */
public "getMetal"(fluid: $Fluid$$Type): $Metal
/** A map associating the name of a metal to its `NamedRegistryMetal` */
public "getMetal"(): $Map<string, $NamedRegistryMetal>
/** Returns the first `Metal` whose ingots match the given stack, may be null */
public "getMetalFromIngot"(ingot: $ItemStack$$Type): $Metal
/** Returns the first `Metal` whose sheets match the given stack, may be null */
public "getMetalFromSheet"(sheet: $ItemStack$$Type): $Metal
/** Returns the first `Pannable` that matches the given state, may be null */
public "getPannable"(state: $BlockState$$Type): $Pannable
/** A map associating the name of a rock to its `RegistryRock` */
public "getRock"(): $Map<string, $RegistryRock>
/**
 * Returns TFC's `RockData` object for the given level and position, may be null
 * 
 * @param level - The level to get the data from
 * @param pos - The position to get the data from
 */
public "getRockData"(level: $LevelReader$$Type, pos: $BlockPos$$Type): $RockData
/**
 * Gets the `RockSettings` of the given block in the given level
 * 
 * @param level - The level to check in
 * @param block - the block to check
 */
public static "getRockSettings"(level: $LevelAccessor$$Type, block: $Block$$Type): $RockSettings
/**
 * Returns TFC's `RockSettings` object for the given level and position, may be null
 * 
 * @param level - The level to get the settings from
 * @param pos - The position to get the settings from
 */
public "getRockSettings"(level: $LevelReader$$Type, pos: $BlockPos$$Type): $RockSettings
/** Returns the `Size` value of the provided stack */
public "getSize"(stack: $ItemStack$$Type): $Size
/** Returns the first `Sluiceable` that matches the given stack, may be null */
public "getSluiceable"(stack: $ItemStack$$Type): $Sluiceable
/** Gets the support from the block, or null if it is not a supporting block */
public "getSupport"(level: $BlockGetter$$Type, pos: $BlockPos$$Type): $Support
/** Gets the support from the block, or null if it is not a supporting block */
public "getSupport"(state: $BlockState$$Type): $Support
/** Gets the `SupportRange` that is used as a maximum for checking if an area is supported */
public "getSupportCheckRange"(): $Support$SupportRange
/** Returns the `Weight` value of the provided stack */
public "getWeight"(stack: $ItemStack$$Type): $Weight
/** A map associating the name of a wood to its `NamedRegistryWood` */
public "getWood"(): $Map<string, $NamedRegistryWood>
/** Returns true if the stack does have an IFood capability */
public "hasFood"(stack: $ItemStack$$Type): boolean
/** Returns true if the stack does have an `IHeat` capability */
public "hasHeat"(stack: $ItemStack$$Type): boolean
/** Returns true if the position is supported */
public "isSupported"(level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
/** Creates a new layered area from the SourceLayer */
public "layeredArea"(source: $SourceLayer$$Type, seed: long): $LayeredArea
/** Creates a new layered area from a Noise2D object */
public "layeredAreaFromNoise"(noise: $Noise2D$$Type, rounder: $DoubleToIntFunction$$Type, seed: long): $LayeredArea
/** Creates a new layered area from a Noise2D object */
public "layeredAreaFromNoise"(noise: $Noise2D$$Type, seed: long): $LayeredArea
/**
 * Creates a `LerpFloatLayer`, an interpolated square of numbers which are known at the corners and interpolated between for intermediate values
 * 
 * @param value00 - The value at the [low x, low z] corner
 * @param value01 - The value at the [low x, high z] corner
 * @param value10 - The value at the [high x, low z] corner
 * @param value11 - The value at the [high x, high z] corner
 */
public "lerpFloatLayer"(value00: float, value01: float, value10: float, value11: float): $LerpFloatLayer
/**
 * Creates a new `Metaballs2D`, TFC's 2D implementation of Metaballs
 * 
 * @param random - The random source used by the balls to create variance between instances
 * @param minBalls - The minimum number of individual balls
 * @param maxBalls - The maximum number of individual balls
 * @param minSize - The minimum size of the Metaballs
 * @param maxSize - The maximum size of the Metaballs
 * @param radius - The maximum radius of an individual ball
 */
public "newMetaballs2D"(random: $RandomSource$$Type, minBalls: integer, maxBalls: integer, minSize: double, maxSize: double, radius: double): $Metaballs2D
/**
 * Creates a new `Metaballs3D`, TFC's 3D implementation of Metaballs
 * 
 * @param random - The random source used by the balls to create variance between instances
 * @param minBalls - The minimum number of individual balls
 * @param maxBalls - The maximum number of individual balls
 * @param minSize - The minimum size of the Metaballs
 * @param maxSize - The maximum size of the Metaballs
 * @param radius - The maximum radius of an individual ball
 */
public "newMetaballs3D"(random: $RandomSource$$Type, minBalls: integer, maxBalls: integer, minSize: double, maxSize: double, radius: double): $Metaballs3D
/** Creates a new `OpenSimplex2D` noise, the implementation of 2D noise TFC uses for its worldgen */
public "newOpenSimplex2D"(seed: long): $OpenSimplex2D
/** Creates a new `OpenSimplex3D` noise, the implementation of 3D noise TFC uses for its worldgen */
public "newOpenSimplex3D"(seed: long): $OpenSimplex3D
/** Adds a 2D noise to a list to be inspected via a command. Only works if KubeJS's debug mode is enabled */
public "register2DNoiseForInspection"(name: string, noise: $Noise2D$$Type): void
/** Adds a 3D noise to a list to be inspected vai a command. Only works if KubeJS's debug mode is enabled */
public "register3DNoiseForInspection"(name: string, noise: $Noise3D$$Type): void
/**
 * Removes the given food trait from the stack
 * 
 * @param stack - The stack to take the trait from. **Important**: This stack *will* be modified
 * @param trait - the id of the trait to be removed
 */
public "removeFoodTrait"(stack: $ItemStack$$Type, trait: $ResourceLocation$$Type): void
/** Sets the provided stack to never expires if possible */
public "setNeverExpires"(stack: $ItemStack$$Type): void
/** Makes the provided stack rotten if possible and returns it */
public "setRotten"(stack: $ItemStack$$Type): $ItemStack
/**
 * Attempts to trigger a collapse, returns false if no collapse or a fake collapse occurred
 * 
 * @param level - The level to attempt collapse in
 * @param pos - The center position of the attempted collapse
 */
public "tryCollapse"(level: $Level$$Type, pos: $BlockPos$$Type): boolean
/** Creates a new layered area with values uniformly distributed across the 32 bit signed integer range */
public "uniformLayeredArea"(seed: long): $LayeredArea
public static "valueOf"(name: string): $MiscBindings
public static "values"(): $MiscBindings[]
get "metal"(): $Map<string, $NamedRegistryMetal>
get "rock"(): $Map<string, $RegistryRock>
get "supportCheckRange"(): $Support$SupportRange
get "wood"(): $Map<string, $NamedRegistryWood>
set "neverExpires"(value: $ItemStack$$Type)
set "rotten"(value: $ItemStack$$Type)
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$LampBlockBuilder$LampModelType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $LampBlockBuilder$LampModelType extends $Enum<$LampBlockBuilder$LampModelType> {
static readonly "HANGING_OFF": $LampBlockBuilder$LampModelType
static readonly "HANGING_ON": $LampBlockBuilder$LampModelType
static readonly "OFF": $LampBlockBuilder$LampModelType
static readonly "ON": $LampBlockBuilder$LampModelType
static readonly "VALUES": $LampBlockBuilder$LampModelType[]
readonly "hanging": boolean
readonly "on": boolean

public static "valueOf"(name: string): $LampBlockBuilder$LampModelType
public static "values"(): $LampBlockBuilder$LampModelType[]
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$DeadCropBlockBuilder$DeadModelVariant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DeadCropBlockBuilder$DeadModelVariant {
/** If the mature state property is true for this variant */
"mature"(): boolean
/** The variant selector representing the block state this model is used for */
"variant"(): string
}

export namespace $DeadCropBlockBuilder$DeadModelVariant {
const probejs$$marker: never
}
export abstract class $DeadCropBlockBuilder$DeadModelVariant$$Static implements $DeadCropBlockBuilder$DeadModelVariant {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$TFCIngredientBindings" {
import { $Enum } from "packages/java/lang/$Enum"
import { $FluidStackIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidStackIngredient"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $TFCIngredientBindings extends $Enum<$TFCIngredientBindings> {
static readonly "INSTANCE": $TFCIngredientBindings

/**
 * Creates an ingredient of type 'tfc:fluid_item'
 * 
 * @param fluid - The fluid stack ingredient of the ingredient
 */
public "fluid"(fluid: $FluidStackIngredient$$Type): $Ingredient
/**
 * Creates an ingredient of type 'tfc:fluid_item'
 * 
 * @param delegate - The sub-ingredient of the fluid item ingredient
 * @param fluid - The fluid stack ingredient of the ingredient
 */
public "fluid"(delegate: $Ingredient$$Type, fluid: $FluidStackIngredient$$Type): $Ingredient
/**
 * Creates an ingredient of type 'tfc:has_trait'
 * 
 * @param delegate - The sub-ingredient of the has trait ingredient
 * @param trait - The name of the trait that must be present
 */
public "hasTrait"(delegate: $Ingredient$$Type, trait: $ResourceLocation$$Type): $Ingredient
/**
 * Creates an ingredient of type 'tfc:has_trait'
 * 
 * @param trait - The name of the trait that must be present
 */
public "hasTrait"(trait: $ResourceLocation$$Type): $Ingredient
/**
 * Creates an ingredient of type 'tfc:heatable'
 * 
 * @param min - The minimum temperature °C of the ingredient, may be null to not have a minimum temperature
 * @param max - The maximum temperature °C of the ingredient, may be null to not have a maximum temperature
 */
public "heatable"(min: integer, max: integer): $Ingredient
/**
 * Creates an ingredient of type 'tfc:heatable'
 * 
 * @param delegate - The sub-ingredient of the heatable ingredient
 * @param min - The minimum temperature °C of the ingredient, may be null to not have a minimum temperature
 * @param max - The maximum temperature °C of the ingredient, may be null to not have a maximum temperature
 */
public "heatable"(delegate: $Ingredient$$Type, min: integer, max: integer): $Ingredient
/**
 * Creates an ingredient of type 'tfc:lacks_trait'
 * 
 * @param delegate - The sub-ingredient of the lacks trait ingredient
 * @param trait - The name of the trait that must not be present
 */
public "lacksTrait"(delegate: $Ingredient$$Type, trait: $ResourceLocation$$Type): $Ingredient
/**
 * Creates an ingredient of type 'tfc:lacks_trait
 * 
 * @param trait - The name of the trait that must not be present
 */
public "lacksTrait"(trait: $ResourceLocation$$Type): $Ingredient
/** Creates an ingredient of type 'tfc:not' */
public "not"(): $Ingredient
/**
 * Creates an ingredient of type 'tfc:not'
 * 
 * @param delegate - The sub-ingredient of the not ingredient
 */
public "not"(delegate: $Ingredient$$Type): $Ingredient
/** Creates an ingredient of type 'tfc:not_rotten' */
public "notRotten"(): $Ingredient
/**
 * Creates an ingredient of type 'tfc:not_rotten'
 * 
 * @param delegate - The sub-ingredient of the not rotten ingredient
 */
public "notRotten"(delegate: $Ingredient$$Type): $Ingredient
public static "valueOf"(name: string): $TFCIngredientBindings
public static "values"(): $TFCIngredientBindings[]
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/schema/$AdvancedCraftingSchema$AdvancedCraftingRecipeJS" {
import { $TFCProviderRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCProviderRecipeJS"

export class $AdvancedCraftingSchema$AdvancedCraftingRecipeJS extends $TFCProviderRecipeJS {
constructor(shaped: boolean, base: boolean)

public "getMod"(): string
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$BarrelRecipeJS" {
import { $TFCProviderRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCProviderRecipeJS"

export class $BarrelRecipeJS extends $TFCProviderRecipeJS {
constructor()

public "getMod"(): string
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$GlassBottleItemBuilder" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ItemBuilder } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $GlassBottleItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

/** Sets the break chance, in the range [0, 1], of the bottle */
public "breakChance"(chance: double): $GlassBottleItemBuilder
/** Sets the break chance, in the range [0, 1], supplier of the bottle */
public "breakChanceSupplier"(chance: $Supplier$$Type<double>): $GlassBottleItemBuilder
/** Sets the capacity, in mB, of the bottle */
public "capacity"(capacity: integer): $GlassBottleItemBuilder
/** Sets the capacity, in mB, supplier of the bottle */
public "capacitySupplier"(capacity: $Supplier$$Type<integer>): $GlassBottleItemBuilder
/** Sets the display name to used when a fluid is in the bottle */
public "filledDisplayName"(c: $Component$$Type): $GlassBottleItemBuilder
/** Sets the fluid tag that the bottle is allowed to hold */
public "fluidTagAccept"(tag: $ResourceLocation$$Type): $GlassBottleItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToWeightedBlockStateMapEntry"

export class $BuildVeinProperties {
constructor(blocks: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], rarity: integer, density: float, minY: integer, maxY: integer, randomName: string)

/**
 * Determines which biomes the vein may spawn in
 * 
 * @param biomeTag - The biome tag the vein may spawn in
 */
public "biomes"(biomeTag: string): $BuildVeinProperties
/**
 * Adds the 'indicator' property to the vein
 * 
 * @param depth - Defines how many blocks above the top of the vein the indicators may spawn
 * @param rarity - Sets the rarity of the indicator blocks
 * @param undergroundRarity - Sets the rarity of the indicator blocks when underground
 * @param indicators - A list of string representations of weighted block states, the blocks to be used as indicators
 */
public "indicator"(depth: integer, rarity: integer, undergroundRarity: integer, indicators: integer, indicators: string[]): $BuildVeinProperties
/** Determines if the vein should be near lava in order to spawn */
public "nearLava"(b: boolean): $BuildVeinProperties
/** Determines if the vein should project itself to the surface, defaults to false */
public "project"(b: boolean): $BuildVeinProperties
/** Determines if the projection of the vein should be offset in the x and z directions, defaults to false */
public "projectOffset"(b: boolean): $BuildVeinProperties
public "toJson"(): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$TFCRootedDirtBlockBuilder" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $TFCDirtBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$TFCDirtBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $TFCRootedDirtBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $TFCDirtBlockBuilder$$Type)

public "createObject"(): $Block
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$CalendarBindings" {
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Month, $Month$$Type } from "packages/net/dries007/tfc/util/calendar/$Month"
import { $Enum } from "packages/java/lang/$Enum"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ICalendar } from "packages/net/dries007/tfc/util/calendar/$ICalendar"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $CalendarBindings extends $Enum<$CalendarBindings> {
readonly "HOURS_IN_DAY": integer
static readonly "INSTANCE": $CalendarBindings
readonly "MONTHS_IN_YEAR": integer
readonly "TICKS_IN_DAY": integer
readonly "TICKS_IN_HOUR": integer
readonly "TICKS_IN_MINUTE": float

/** Returns the best guess on the appropriate calendar */
public "getCalendar"(): $ICalendar
/** Returns the calendar of the block entity's level or the best guess on the calendar if it does not have a level */
public "getCalendar"(blockEntity: $BlockEntity$$Type): $ICalendar
/** Returns the calendar of the entity's level */
public "getCalendar"(entity: $Entity$$Type): $ICalendar
/** Returns the level's calendar */
public "getCalendar"(level: $LevelReader$$Type): $ICalendar
/**
 * Returns the client or server calendar based on the provided boolean
 * 
 * @param isClientSide - If the calendar is client or server
 */
public "getCalendar"(isClientSide: boolean): $ICalendar
/** Returns the number of calendar ticks in a month based on the number of days in a month */
public "getCalendarTicksInMonth"(daysInMonth: integer): long
/** Returns the number of calendar ticks in a year based on the number of days in a month */
public "getCalendarTicksInYear"(daysInMonth: integer): long
/**
 * Returns the day of the month for the given number of ticks and days in a month
 * 
 * @param time - The number of ticks
 * @param daysInMonth - The number of days in a month
 */
public "getDayOfMonth"(time: long, daysInMonth: long): integer
/**
 * Returns the fraction of the month for the provided number of ticks and days in a month
 * 
 * @param time - The number of ticks
 * @param daysInMonth - The number of days in a month
 */
public "getFractionOfMonth"(time: long, daysInMonth: long): float
/**
 * Returns ths fraction of the year for the provided number of ticks and days in a month
 * 
 * @param time - The number of ticks
 * @param daysInMonth - The number of days in a month
 */
public "getFractionOfYear"(time: long, daysInMonth: long): float
/** Returns the hour of the day for the given number of ticks */
public "getHourOfDay"(time: long): integer
/** Returns the minute of the hour for the given number of ticks */
public "getMinuteOfHour"(time: long): integer
/**
 * Returns the month of the year for the provided number of ticks and days in a month
 * 
 * @param time - The number of ticks
 * @param daysInMonth - Th number of days in a month
 */
public "getMonthOfYear"(time: long, daysInMonth: long): $Month
/**
 * Returns a text component describing the given number of ticks and days in a month
 * 
 * @param time - The number of ticks
 * @param daysInMonth - The number of days in a month
 */
public "getTimeAndDate"(time: long, daysInMonth: long): $MutableComponent
/**
 * Returns a text component describing the given hour, minute, month, day, and year
 * 
 * @param hour - The number of hours
 * @param minute - The number of minutes
 * @param month - The month
 * @param day - The day of the month
 * @param years - The number of years
 */
public "getTimeAndDate"(hour: integer, minute: integer, month: $Month$$Type, day: integer, years: long): $MutableComponent
/**
 * Returns a text component describing the time delta of the given number of ticks and number of days in a month
 * 
 * @param ticks - The number of ticks
 * @param daysInMonth - The number of days in a month
 */
public "getTimeDelta"(ticks: long, daysInMonth: integer): $MutableComponent
/** Returns the number of days for the provided number of ticks */
public "getTotalDays"(time: long): long
/** Returns the number of hours for the provided number of ticks */
public "getTotalHours"(time: long): long
/** Returns the number of minutes for the provided number of ticks */
public "getTotalMinutes"(time: long): float
/**
 * Returns the number months for the provided number of ticks and number of days in a month
 * 
 * @param time - The number of ticks
 * @param daysInMonth - The number of days in a month
 */
public "getTotalMonths"(time: long, daysInMonth: long): long
/**
 * Returns the number of years for the provided number of ticks and number of days in a month
 * 
 * @param time - The number of ticks
 * @param daysInMonth - The number of days in a month
 */
public "getTotalYears"(time: long, daysInMonth: long): long
public static "valueOf"(name: string): $CalendarBindings
public static "values"(): $CalendarBindings[]
get "calendar"(): $ICalendar
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/addons/precpros/item/$MineralProspectorItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PropickItemBuilder } from "packages/com/notenoughmail/kubejs_tfc/item/$PropickItemBuilder"

export class $MineralProspectorItemBuilder extends $PropickItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/internal/$AbstractCropBlockBuilder$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $AbstractCropBlockBuilder$Type extends $Enum<$AbstractCropBlockBuilder$Type> {
static readonly "DEFAULT": $AbstractCropBlockBuilder$Type
static readonly "DOUBLE": $AbstractCropBlockBuilder$Type
static readonly "FLOODED": $AbstractCropBlockBuilder$Type
static readonly "PICKABLE": $AbstractCropBlockBuilder$Type
static readonly "SPREADING": $AbstractCropBlockBuilder$Type

public static "valueOf"(name: string): $AbstractCropBlockBuilder$Type
public static "values"(): $AbstractCropBlockBuilder$Type[]
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$TFCSaplingBlockBuilder" {
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $TFCSaplingBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/** Sets the normal and old growth configured features of the sapling to the same feature */
public "features"(trees: $ResourceLocation$$Type): $TFCSaplingBlockBuilder
/** Sets the normal and old growth configured features of the sapling */
public "features"(normal: $ResourceLocation$$Type, oldGrowth: $ResourceLocation$$Type): $TFCSaplingBlockBuilder
/** Sets the number of days it takes for the sapling to grow */
public "growthDays"(i: integer): $TFCSaplingBlockBuilder
/** Sets the number of days, via a supplier, it takes for the sapling to grow */
public "growthDaysSupplier"(days: $Supplier$$Type<integer>): $TFCSaplingBlockBuilder
/** Makes it so the sapling can be placed on sand */
public "placeableOnSand"(): $TFCSaplingBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/moss/$MossSpreadingSlabBuilder" {
import { $SlabBlockBuilder } from "packages/dev/latvian/mods/kubejs/block/custom/$SlabBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MossSpreadingSlabBuilder extends $SlabBlockBuilder {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$CreateChunkDataProviderEventJS$AquiferMaker" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Aquifer, $Aquifer$$Type } from "packages/net/minecraft/world/level/levelgen/$Aquifer"
import { $ChunkAccess, $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"

export interface $CreateChunkDataProviderEventJS$AquiferMaker extends $Function<$ChunkAccess, $Aquifer> {
"andThen"<V>(function0: $Function$$Type<$Aquifer$$Type, V>): $Function<$ChunkAccess, V>
"apply"(access: $ChunkAccess$$Type): $Aquifer
"compose"<V>(function0: $Function$$Type<V, $ChunkAccess>): $Function<V, $Aquifer>
}

export namespace $CreateChunkDataProviderEventJS$AquiferMaker {
function identity<T>(): $Function<T, T>
}
export abstract class $CreateChunkDataProviderEventJS$AquiferMaker$$Static implements $CreateChunkDataProviderEventJS$AquiferMaker {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$TFCFarmlandBlockBuilder" {
import { $TFCDirtBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$TFCDirtBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $TFCFarmlandBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $TFCDirtBlockBuilder$$Type)

public "createObject"(): $Block
public "createProperties"(): $BlockBehaviour$Properties
/** Makes the farmland block use a unique texture for the dirt part of its texture, by default uses the texture of its parent dirt block */
public "uniqueDirtTexture"(): $TFCFarmlandBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$SpreadingCaneBlockBuilder" {
import { $SpreadingBushBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$SpreadingBushBlockBuilder"
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $StationaryBerryBushBlockBuilder$BushModelsCreator$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$StationaryBerryBushBlockBuilder$BushModelsCreator"
import { $StationaryBerryBushBlockBuilder$ModelFunc$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$StationaryBerryBushBlockBuilder$ModelFunc"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Lifecycle$$Type } from "packages/net/dries007/tfc/common/blocks/plant/fruit/$Lifecycle"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $SpreadingCaneBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type, bush: $SpreadingBushBlockBuilder$$Type)

/**
 * Deprecated, please use `#models` and its new syntax
 * 
 * @deprecated
 */
public "allModels"(modelsCreator: $StationaryBerryBushBlockBuilder$BushModelsCreator$$Type): $SpreadingCaneBlockBuilder
public "createObject"(): $Block
/** Sets the model for the given lifecycle and stage */
public "model"(lifecycle: $Lifecycle$$Type, stage: integer, modelGenerator: $Consumer$$Type<$ModelGenerator$$Type>): $SpreadingCaneBlockBuilder
/**
 * Sets the model generation of the cane block, accepts a `TriConsumer` of a `Lifecycle`, an integer in the
 * range [0, 2] representing the growth stage, and a model generator.
 * The generator is unique for each lifecycle & stage combination.
 */
public "models"(models: $StationaryBerryBushBlockBuilder$ModelFunc$$Type): $SpreadingCaneBlockBuilder
/** Sets the cane texture for the given lifecycle and stage */
public "texture"(lifecycle: $Lifecycle$$Type, stage: integer, tex: string): $SpreadingCaneBlockBuilder
/** Sets the cane and bush texture for the given lifecycle and stage */
public "texture"(lifecycle: $Lifecycle$$Type, stage: integer, caneTexture: string, bushTexture: string): $SpreadingCaneBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$WindMillBladeItemBuilder" {
import { $Color$$Type } from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import { $ItemBuilder } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $WindMillBladeItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

/** Sets the color of the windmill blade's sail */
public "bladeColor"(color: $Color$$Type): $WindMillBladeItemBuilder
/** Sets the texture of the whole windmill blade, defaults to `tfc:textures/entity/misc/windmill_blade.png` */
public "bladeTexture"(texture: $ResourceLocation$$Type): $WindMillBladeItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/moss/$MossSpreadingWallBlockBuilder" {
import { $WallBlockBuilder } from "packages/dev/latvian/mods/kubejs/block/custom/$WallBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MossSpreadingWallBlockBuilder extends $WallBlockBuilder {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$JugItemBuilder" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ItemBuilder } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $JugItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

/** Sets the capacity, in mB, of the jug */
public "capacity"(capacity: integer): $JugItemBuilder
/** Sets the capacity, in mB, supplier of the jug */
public "capacitySupplier"(capacity: $Supplier$$Type<integer>): $JugItemBuilder
public "createObject"(): $Item
/** Sets the display name to use when the jug is filled */
public "filledDisplayName"(c: $Component$$Type): $JugItemBuilder
/** Sets the fluid tag that the jug is allowed to hold */
public "fluidTagAccept"(tag: $ResourceLocation$$Type): $JugItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$AnvilBlockBuilder" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $AnvilBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Block
public "createProperties"(): $BlockBehaviour$Properties
/** Sets the default name of the anvil screen */
public "defaultName"(name: $Component$$Type): $AnvilBlockBuilder
/** Sets the tier of recipes the anvil can perform */
public "tier"(i: integer): $AnvilBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$GlassworkingToolItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $ToolItemBuilder } from "packages/com/notenoughmail/kubejs_tfc/item/$ToolItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GlassOperation$$Type } from "packages/net/dries007/tfc/common/capabilities/glass/$GlassOperation"

export class $GlassworkingToolItemBuilder extends $ToolItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
/** Sets the glassworking operation type this item is capable of doing */
public "operation"(operation: $GlassOperation$$Type): $GlassworkingToolItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$TFCWallTorchBuilder" {
import { $ExtendedPropertiesShapedBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesShapedBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TFCTorchBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$TFCTorchBlockBuilder"

export class $TFCWallTorchBuilder extends $ExtendedPropertiesShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $TFCTorchBlockBuilder$$Type)

public "createProperties"(): $BlockBehaviour$Properties
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildDrinkableData" {
import { $BuildFoodItemData$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildFoodItemData"
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $FluidIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidIngredient"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BuildEffectData$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildEffectData"

export class $BuildDrinkableData {
constructor(fluidIngredient: $FluidIngredient$$Type)

/** Sets the chance to consume the source block when drinking from a source block, in the range [0, 1]. Defaults to 0 */
public "consumeChance"(f: float): $BuildDrinkableData
/**
 * Adds an effect to the drinkable
 * 
 * @param effect - The name of the effect
 * @param effectData - The effect properties that are applied to the effect
 */
public "effect"(effect: string, effectData: $Consumer$$Type<$BuildEffectData$$Type>): $BuildDrinkableData
/** Adds the specified effect to the drinkable with default duration, amplifier, and chance */
public "effect"(effect: string): $BuildDrinkableData
/** Adds food data to the drinkable */
public "food"(foodData: $Consumer$$Type<$BuildFoodItemData$$Type>): $BuildDrinkableData
/** The number of ticks the player will be intoxicated from, per 25mB drank. Defaults to 0 */
public "intoxication"(i: integer): $BuildDrinkableData
/** Sets the thirst the drinkable consumes, per 25mB drank, in the range [0, 100]. Defaults to 0 */
public "thirst"(i: integer): $BuildDrinkableData
public "toJson"(): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/addons/precpros/item/$ProsDrillItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PropickItemBuilder } from "packages/com/notenoughmail/kubejs_tfc/item/$PropickItemBuilder"

export class $ProsDrillItemBuilder extends $PropickItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$TFCHoeItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $TFCHoeItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
public "createObject"(): $Item
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToBlockStateMapEntry" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Record } from "packages/java/lang/$Record"

export class $WorldGenUtils$BlockToBlockStateMapEntry extends $Record {
constructor(block: string, state: string)

public "block"(): string
public "state"(): string
public static "toJson"(obj: $JsonObject$$Type, key: string, entries: $WorldGenUtils$BlockToBlockStateMapEntry$$Type[]): void
public "toJson"(): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$ITFCCCMoldItemBuilderExtensions" {
import { $MoldItemBuilder } from "packages/com/notenoughmail/kubejs_tfc/item/$MoldItemBuilder"

export interface $ITFCCCMoldItemBuilderExtensions {
/** Allows the mold item to be placed in a TFC Casting With Channels mold table */
"tfcccAllowedInMoldTable"(): $MoldItemBuilder
/**
 * Allows the mold item to be placed in a TFC Casting With Channels mold table
 * 
 * @param model - A list of 14 strings, each 14 chars long, creates the default model for the item when in the mold table
 */
"tfcccAllowedInMoldTable"(model: string[]): $MoldItemBuilder
}

export namespace $ITFCCCMoldItemBuilderExtensions {
const probejs$$marker: never
}
export abstract class $ITFCCCMoldItemBuilderExtensions$$Static implements $ITFCCCMoldItemBuilderExtensions {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCRecipeJS" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $List } from "packages/java/util/$List"
import { $RecipeJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TFCRecipeJS extends $RecipeJS {
constructor()

public "getMod"(): string
public static "of"(originalIngredientGetter: $Function$$Type<$Recipe$$Type<any>, $List<$Ingredient>>): $TFCRecipeJS
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$CustomGlassOperations$StackSupplier" {
import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $CustomGlassOperations$StackSupplier {
"get"(): $ItemStack
}

export namespace $CustomGlassOperations$StackSupplier {
function wrap(ctx: $Context$$Type, o: any): $CustomGlassOperations$StackSupplier
}
export abstract class $CustomGlassOperations$StackSupplier$$Static implements $CustomGlassOperations$StackSupplier {
static "wrap"(ctx: $Context$$Type, o: any): $CustomGlassOperations$StackSupplier
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$Noise2DExtension" {
import { $Noise2D } from "packages/net/dries007/tfc/world/noise/$Noise2D"

export interface $Noise2DExtension {
/** Rotates the coordinate grid by the given angle (in degrees) */
"rotate"(angle: double): $Noise2D
/** Swaps the x and z coordinate */
"transpose"(): $Noise2D
}

export namespace $Noise2DExtension {
const probejs$$marker: never
}
export abstract class $Noise2DExtension$$Static implements $Noise2DExtension {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$LooseRockBlockBuilder" {
import { $LooseRockBlock } from "packages/net/dries007/tfc/common/blocks/rock/$LooseRockBlock"
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $LooseRockBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type)

/** Makes the block collide with entities */
public "collision"(): $LooseRockBlockBuilder
public "createObject"(): $LooseRockBlock
/** Sets the item's texture (layer0). */
public "itemTexture"(tex: string): $LooseRockBlockBuilder
/** Sets the item's texture by given key. */
public "itemTexture"(key: string, tex: string): $LooseRockBlockBuilder
/** Directly set the item's texture json. */
public "itemTextureJson"(json: $JsonObject$$Type): $LooseRockBlockBuilder
/** sets the rock type the block model should use, may be 'igneous_extrusive', 'igneous_intrusive', 'metamorphic', or 'sedimentary' */
public "rockTypeModel"(s: string): $LooseRockBlockBuilder
/** Rotates the models by the given amount */
public "rotateModel"(i: integer): $LooseRockBlockBuilder
get "itemTextures"(): $JsonObject
set "itemTextures"(value: $JsonObject$$Type)
get "rockType"(): string
set "rockType"(value: string)
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$AnvilWorkingRecipeJS" {
import { $TFCProviderRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCProviderRecipeJS"

export class $AnvilWorkingRecipeJS extends $TFCProviderRecipeJS {
constructor()

/** Determines if the recipe should grant a forging bonus or not */
public "bonus"(applyBonus: boolean): $AnvilWorkingRecipeJS
public "getMod"(): string
/** Sets the minimum tier of anvil the recipe requires to perform */
public "tier"(tier: integer): $AnvilWorkingRecipeJS
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$RegisterFaunasEventJS" {
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Used to register one or more fauna definitions for an entity type */
export class $RegisterFaunasEventJS extends $EventJS {
constructor()

/**
 * Registers a new fauna definition for the given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. ANDs any spawn conditions the entity previously had with the fauna restrictions
 * 
 * @param entityType - The entity type to register the fauna for
 * @param suffix - The suffix to apply to the fauna's id, may be null
 * @param placementType - The placement type to use for spawning
 * @param heightmap - The heightmap to use for spawning
 */
public "and"(entityType: $EntityType$$Type<$Entity$$Type>, suffix: string, placementType: $SpawnPlacements$Type$$Type, heightmap: $Heightmap$Types$$Type): void
/**
 * Registers a new fauna definition for the given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. ANDs any spawn conditions the entity previously had with the fauna restrictions
 * 
 * @param entityType - The entity type to register the fauna for
 * @param placementType - The placement type to use for spawning
 * @param heightmap - The heightmap to use for spawning
 */
public "and"(entityType: $EntityType$$Type<$Entity$$Type>, placementType: $SpawnPlacements$Type$$Type, heightmap: $Heightmap$Types$$Type): void
/**
 * Registers a new fauna definition for teh given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. ORs any spawn conditions the entity previously had with the fauna restrictions
 * 
 * @param entityType - The entity type to register the fauna for
 * @param placementType - The placement type to use for spawning
 * @param heightmap - The heightmap to use for spawning
 */
public "or"(entityType: $EntityType$$Type<$Entity$$Type>, placementType: $SpawnPlacements$Type$$Type, heightmap: $Heightmap$Types$$Type): void
/**
 * Registers a new fauna definition for teh given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. ORs any spawn conditions the entity previously had with the fauna restrictions
 * 
 * @param entityType - The entity type to register the fauna for
 * @param suffix - The suffix to apply to the fauna's id, may be null
 * @param placementType - The placement type to use for spawning
 * @param heightmap - The heightmap to use for spawning
 */
public "or"(entityType: $EntityType$$Type<$Entity$$Type>, suffix: string, placementType: $SpawnPlacements$Type$$Type, heightmap: $Heightmap$Types$$Type): void
/**
 * Registers a new fauna definition for the given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. Completely replaces the spawn conditions for the entity
 * 
 * @param entityType - The entity type to register the fauna for
 * @param suffix - The suffix to apply to the fauna's id, may be null
 * @param placementType - The placement type to use for spawning
 * @param heightmap - The heightmap to use for spawning
 */
public "replace"(entityType: $EntityType$$Type<$Entity$$Type>, suffix: string, placementType: $SpawnPlacements$Type$$Type, heightmap: $Heightmap$Types$$Type): void
/**
 * Registers a new fauna definition for the given entity type, does not set the fauna values, use the `TFCEvents.data` server event to do so. Completely replaces the spawn conditions for the entity
 * 
 * @param entityType - The entity type to register the fauna for
 * @param placementType - The placement type to use for spawning
 * @param heightmap - The heightmap to use for spawning
 */
public "replace"(entityType: $EntityType$$Type<$Entity$$Type>, placementType: $SpawnPlacements$Type$$Type, heightmap: $Heightmap$Types$$Type): void
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$CreateChunkDataProviderEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $CreateChunkDataProviderEventJS$ChunkDataFiller$$Type } from "packages/com/notenoughmail/kubejs_tfc/event/$CreateChunkDataProviderEventJS$ChunkDataFiller"
import { $CreateChunkDataProviderEventJS$AquiferMaker$$Type } from "packages/com/notenoughmail/kubejs_tfc/event/$CreateChunkDataProviderEventJS$AquiferMaker"
import { $Settings, $Settings$$Type } from "packages/net/dries007/tfc/world/settings/$Settings"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $RandomState$$Type } from "packages/net/minecraft/world/level/levelgen/$RandomState"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CreateChunkDataProviderEventJS$RocksGetter$$Type } from "packages/com/notenoughmail/kubejs_tfc/event/$CreateChunkDataProviderEventJS$RocksGetter"
import { $NormalNoise } from "packages/net/minecraft/world/level/levelgen/synth/$NormalNoise"

export class $CreateChunkDataProviderEventJS extends $EventJS {
constructor(seed: long, rs: $RandomState$$Type, settings: $Settings$$Type)

/**
 * Sets the aquifer used in the chunk generator. Does not affect world generation without intervention, but some TFC features (erosion) may use it.
 * 
 * Defaults to creating an aquifer filled with air at -2^31
 */
public "erosionalAquifer"(maker: $CreateChunkDataProviderEventJS$AquiferMaker$$Type): void
/**
 * Sets the full calculation for a chunk's `ChunkData`.
 * 
 * `ChunkData#generateFull` should be called here.
 * 
 * Heightmap access is available here.
 * 
 * Defaults to filling `surfaceHeight` with the `OCEAN_FLOOR_WG` heightmap and `aquiferSurfaceHeight` with values 20 less than the average height of the quart.
 * 
 * For a full explanation, see the wiki.
 */
public "full"(gen: $CreateChunkDataProviderEventJS$ChunkDataFiller$$Type): void
/** Returns the normal noise defined by the noise parameters with the given id */
public "getNormalNoise"(id: $ResourceLocation$$Type): $NormalNoise
/** Returns a random source seeded by the hashed name and spawn coordinates */
public "getRandomSource"(hashedName: $ResourceLocation$$Type): $RandomSource
/** Get the settings as defined in json */
public "getSettings"(): $Settings
/** Returns the seed for the world the chunk data provider is being applied to */
public "getWorldSeed"(): long
/**
 * Sets the partial calculation for a chunk's `ChunkData`.
 * 
 * `ChunkData#generatePartial` should be called here.
 * 
 * `ChunkData#generateFull` may be called here, but heightmap access is not guaranteed during this callback.
 * 
 * Defaults to filling the chunk with 0s.
 * 
 * For a full explanation, see the wiki.
 */
public "partial"(gen: $CreateChunkDataProviderEventJS$ChunkDataFiller$$Type): void
/**
 * Sets the rock settings generator. Does not affect world generation without intervention, but some TFC features (boulders, erosion, fissure) may use this for selecting blocks.
 * 
 * Defaults to returning an empty `RockSettings` made entirely of air
 */
public "rocks"(rocksGetter: $CreateChunkDataProviderEventJS$RocksGetter$$Type): void
get "settings"(): $Settings
get "worldSeed"(): long
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$TemperatureCallback" {
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

/** A callback which takes a LevelReader, a BlockPos, a number, and a number and returns a number */
export interface $KubeJSClimateModel$TemperatureCallback {
/**
 * @param level - The LevelReader
 * @param pos - The position
 * @param calendarTicks - The calendar tick during which the calculation is being made
 * @param daysInMonth - The number of days in a month
 */
"getValue"(level: $LevelReader$$Type, pos: $BlockPos$$Type, calendarTicks: long, daysInMonth: integer): float
}

export namespace $KubeJSClimateModel$TemperatureCallback {
const probejs$$marker: never
}
export abstract class $KubeJSClimateModel$TemperatureCallback$$Static implements $KubeJSClimateModel$TemperatureCallback {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$KubeJSItemStackModifier$ModifierApplicator" {
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $KubeJSItemStackModifier$ModifierApplicator {
/**
 * Applies the modifier to the stack
 * 
 * @param stack - The current output stack, may be modified. A no-op modifier would just return this stack
 * @param input - The provided input stack. Do not modify this stack
 */
"apply"(stack: $ItemStack$$Type, input: $ItemStack$$Type): $ItemStack
}

export namespace $KubeJSItemStackModifier$ModifierApplicator {
const probejs$$marker: never
}
export abstract class $KubeJSItemStackModifier$ModifierApplicator$$Static implements $KubeJSItemStackModifier$ModifierApplicator {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$MoldItemBuilder" {
import { $ITFCCCMoldItemBuilderExtensions } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$ITFCCCMoldItemBuilderExtensions"
import { $ItemBuilder } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MoldItemBuilder extends $ItemBuilder implements $ITFCCCMoldItemBuilderExtensions {
constructor(i: $ResourceLocation$$Type)

/** Sets the capacity, in mB, of the mold */
public "capacity"(capacity: integer): $MoldItemBuilder
/** Sets the capacity, in mB, supplier of the mold */
public "capacitySupplier"(capacity: $Supplier$$Type<integer>): $MoldItemBuilder
/** Sets the fluid tag that the mold item is allowed to hold */
public "fluidTagAccept"(fluidTag: $ResourceLocation$$Type): $MoldItemBuilder
public "tfcccAllowedInMoldTable"(): $MoldItemBuilder
public "tfcccAllowedInMoldTable"(model: string[]): $MoldItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$MossGrowingCallback" {
import { $BiPredicate } from "packages/java/util/function/$BiPredicate"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export interface $MossGrowingCallback {
"convertToMossy"(container: $BlockContainerJS$$Type, needsWater: boolean): boolean
}

export namespace $MossGrowingCallback {
const ADJACENT: $MossGrowingCallback
const IS_ADJACENT_TO_WATER: $BiPredicate<$Level, $BlockPos>
const WATER_LOGGED: $MossGrowingCallback
}
export abstract class $MossGrowingCallback$$Static implements $MossGrowingCallback {
static readonly "ADJACENT": $MossGrowingCallback
static readonly "IS_ADJACENT_TO_WATER": $BiPredicate<$Level, $BlockPos>
static readonly "WATER_LOGGED": $MossGrowingCallback

}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$GlassworkingItemBuilder" {
import { $ItemBuilder } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GlassOperation$$Type } from "packages/net/dries007/tfc/common/capabilities/glass/$GlassOperation"

export class $GlassworkingItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

/** Sets the glassworking operation type this item is capable of doing */
public "operation"(operation: $GlassOperation$$Type): $GlassworkingItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$MaceItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MaceItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
public "createObject"(): $Item
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$SpreadingCropBlockBuilder" {
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $AbstractCropBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$AbstractCropBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpreadingCropBlockBuilder extends $AbstractCropBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/** Sets the block that will be used as the block's fruit, defaults to honey blocks */
public "fruitBlock"(fruitBlock: $ResourceLocation$$Type): $SpreadingCropBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IArtisanalISPExtensions" {
import { $ItemStackProviderJS } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS"
import { $FluidStackJS$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"

export interface $IArtisanalISPExtensions {
/**
 * Adds a 'artisanal:cap_heat' modifier to the stack
 * 
 * @param max - The max heat the stack may be
 */
"artisanalCapHeat"(max: float): $ItemStackProviderJS
/** Adds a 'artisanal:copy_dynamic_food' modifier to the stack */
"artisanalCopyDynamicFood"(): $ItemStackProviderJS
/** Adds a 'artisanal:copy_dynamic_food_never_expires' modifier to the stack */
"artisanalCopyDynamicFoodNeverExpires"(): $ItemStackProviderJS
/** Adds a 'artisanal:empty_bowl' modifier to the stack */
"artisanalEmptyBowl"(): $ItemStackProviderJS
/** Adds a 'artisanal:extract_canned_food' modifier to the stack */
"artisanalExtractCannedFood"(): $ItemStackProviderJS
/** Adds a 'artisanal:homogeneous_ingredients' modifier to the stack */
"artisanalHomogenousIngredients"(): $ItemStackProviderJS
/**
 * Adds a 'artisanal:inherit_decay' modifier to the stack
 * 
 * @param decayModifier - A multiplier on the decay to apply when the decay in inherited
 */
"artisanalInheritDecay"(decayModifier: float): $ItemStackProviderJS
/**
 * Adds a 'artisanal:modify_fluid' modifier to the stack
 * 
 * @param fluid - The fluid to insert into the item
 */
"artisanalModifyFluid"(fluid: $FluidStackJS$$Type): $ItemStackProviderJS
/** Adds a 'artisanal:only_if_generic_animal_fat' modifier to the stack */
"artisanalOnlyIfGenericAnimalFat"(): $ItemStackProviderJS
/** Adds a 'artisanal:remove_butter' modifier to the the stack */
"artisanalRemoveButter"(): $ItemStackProviderJS
}

export namespace $IArtisanalISPExtensions {
const probejs$$marker: never
}
export abstract class $IArtisanalISPExtensions$$Static implements $IArtisanalISPExtensions {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/moss/$MossSpreadingBlockBuilder" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $MossSpreadingBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Block
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$BloomeryRecipeJS" {
import { $TFCProviderRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCProviderRecipeJS"

export class $BloomeryRecipeJS extends $TFCProviderRecipeJS {
constructor()

public "getMod"(): string
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesMultipartShapedBlockBuilder" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ISupportExtendedProperties$ExtendedPropertiesJS$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties$ExtendedPropertiesJS"
import { $MultipartShapedBlockBuilder } from "packages/dev/latvian/mods/kubejs/block/custom/$MultipartShapedBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ISupportExtendedProperties } from "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties"

export class $ExtendedPropertiesMultipartShapedBlockBuilder extends $MultipartShapedBlockBuilder implements $ISupportExtendedProperties {
constructor(i: $ResourceLocation$$Type)

public "createProperties"(): $BlockBehaviour$Properties
public "extendedProperties"(extendedProperties: $Consumer$$Type<$ISupportExtendedProperties$ExtendedPropertiesJS$$Type>): $BlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$PotRecipeJS" {
import { $TFCRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCRecipeJS"

export class $PotRecipeJS extends $TFCRecipeJS {
constructor()

public "getMod"(): string
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildFaunaData" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $PlacedFeatureProperties$Climate$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties$Climate"

export class $BuildFaunaData {
constructor(climate: $PlacedFeatureProperties$Climate$$Type)

/** Sets the chance in 1/N chunks that something will spawn */
public "chance"(i: integer): $BuildFaunaData
/** Sets the distance below sea level something must spawn, should only be set for underwater creatures */
public "distanceBelowSeaLevel"(i: integer): $BuildFaunaData
/** Sets the maximum brightness the mob may spawn at */
public "maxBrightness"(i: integer): $BuildFaunaData
/** If the mob is required to spawn on a block tagged 'minecraft:valid_spawn', defaults to false */
public "solidGround"(b: boolean): $BuildFaunaData
public "toJson"(): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/moss/$MossGrowingSlabBlockBuilder" {
import { $SlabBlockBuilder } from "packages/dev/latvian/mods/kubejs/block/custom/$SlabBlockBuilder"
import { $MossGrowingCallback, $MossGrowingCallback$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$MossGrowingCallback"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MossGrowingSlabBlockBuilder extends $SlabBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "mossyConversion"(callback: $MossGrowingCallback$$Type): $MossGrowingSlabBlockBuilder
public "mossyConversionFull"(callback: $MossGrowingCallback$$Type): $MossGrowingSlabBlockBuilder
public "mossyConversionHalf"(callback: $MossGrowingCallback$$Type): $MossGrowingSlabBlockBuilder
public "mossySlab"(block: $ResourceLocation$$Type): $MossGrowingSlabBlockBuilder
get "mossGrowthFull"(): $MossGrowingCallback
set "mossGrowthFull"(value: $MossGrowingCallback$$Type)
get "mossGrowthHalf"(): $MossGrowingCallback
set "mossGrowthHalf"(value: $MossGrowingCallback$$Type)
get "mossyBlock"(): $ResourceLocation
set "mossyBlock"(value: $ResourceLocation$$Type)
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$HorizontalSupportBlockBuilder" {
import { $ExtendedPropertiesMultipartShapedBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesMultipartShapedBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $SupportBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$SupportBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $HorizontalSupportBlockBuilder extends $ExtendedPropertiesMultipartShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $SupportBlockBuilder$$Type)

public "createProperties"(): $BlockBehaviour$Properties
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/addons/firmalife/recipe/js/$MixingBowlRecipeJS" {
import { $OutputFluid$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid"
import { $TFCRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCRecipeJS"
import { $InputItem$$Type } from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import { $FluidStackIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidStackIngredient"
import { $OutputItem$$Type } from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export class $MixingBowlRecipeJS extends $TFCRecipeJS {
constructor()

public "fluidIngredient"(fluidIngredient: $FluidStackIngredient$$Type): $MixingBowlRecipeJS
public "getMod"(): string
public "ingredients"(ingredients: $InputItem$$Type[], fluidIngredient: $FluidStackIngredient$$Type): $MixingBowlRecipeJS
public "itemIngredients"(ingredients: $InputItem$$Type[]): $MixingBowlRecipeJS
public "outputFluid"(outputFluid: $OutputFluid$$Type): $MixingBowlRecipeJS
public "outputItem"(outputItem: $OutputItem$$Type): $MixingBowlRecipeJS
public "outputs"(outputItem: $OutputItem$$Type, outputFluid: $OutputFluid$$Type): $MixingBowlRecipeJS
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/moss/$MossGrowingStairBlockBuilder" {
import { $StairBlockBuilder } from "packages/dev/latvian/mods/kubejs/block/custom/$StairBlockBuilder"
import { $MossGrowingCallback, $MossGrowingCallback$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$MossGrowingCallback"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MossGrowingStairBlockBuilder extends $StairBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "mossyConversion"(callback: $MossGrowingCallback$$Type): $MossGrowingStairBlockBuilder
public "mossyStair"(block: $ResourceLocation$$Type): $MossGrowingStairBlockBuilder
get "mossGrowth"(): $MossGrowingCallback
set "mossGrowth"(value: $MossGrowingCallback$$Type)
get "mossyBlock"(): $ResourceLocation
set "mossyBlock"(value: $ResourceLocation$$Type)
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$LampBlockBuilder" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LampBlockBuilder$LampModelType$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$LampBlockBuilder$LampModelType"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $LampBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/** Sets the light level the lamp gives off when it is lit */
public "lightLevel"(i: integer): $LampBlockBuilder
/**
 * Sets the model generation of he lamp block, accepts a `BiConsumer` of a `LampModelType` and a model generator.
 * The generator is unique for each type.
 * 
 * There are 4 types: `OFF`, HANGING_OFF`, `ON`, and `HANGING_ON`. There have 2 boolean properties which can
 * be used to determine the type currently in operation. The properties are `.on` and `.hanging`.
 */
public "models"(models: $BiConsumer$$Type<$LampBlockBuilder$LampModelType$$Type, $ModelGenerator$$Type>): $LampBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/component/$AlloyPartComponent$AlloyPart" {
import { $InputReplacement, $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $InputReplacementTransformer$Replacement } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement"
import { $Record } from "packages/java/lang/$Record"
import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import { $InputReplacementTransformer$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import { $ReplacementMatch, $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

export class $AlloyPartComponent$AlloyPart extends $Record implements $ReplacementMatch, $InputReplacement {
constructor(metal: string, min: double, max: double, keepOriginalBounds: boolean)

public static "fromJson"(json: $JsonObject$$Type): $AlloyPartComponent$AlloyPart
public "keepOriginalBounds"(): boolean
public "max"(): double
public "metal"(): string
public "min"(): double
public static "of"(o: any): $ReplacementMatch
public "replaceInput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $InputReplacement$$Type): any
public "toJson"(): $JsonObject
public "transform"(transformer: $InputReplacementTransformer$$Type): $InputReplacementTransformer$Replacement
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/world/$WrappedChunkGenerator" {
import { $ChunkDataProvider } from "packages/net/dries007/tfc/world/chunkdata/$ChunkDataProvider"
import { $ChunkGenerator, $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $RockLayerSettings } from "packages/net/dries007/tfc/world/settings/$RockLayerSettings"
import { $ChunkGeneratorStructureState$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGeneratorStructureState"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $ChunkMap$$Type } from "packages/net/minecraft/server/level/$ChunkMap"
import { $ChunkGeneratorExtension } from "packages/net/dries007/tfc/world/$ChunkGeneratorExtension"
import { $Settings, $Settings$$Type } from "packages/net/dries007/tfc/world/settings/$Settings"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $Aquifer } from "packages/net/minecraft/world/level/levelgen/$Aquifer"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export class $WrappedChunkGenerator extends $ChunkGenerator implements $ChunkGeneratorExtension {
static readonly "CODEC": $Codec<$WrappedChunkGenerator>

constructor(wrapped: $ChunkGenerator$$Type, key: string, settings: $Settings$$Type)

public "applySettings"(settings: $UnaryOperator$$Type<$Settings$$Type>): void
public "chunkDataProvider"(): $ChunkDataProvider
public "findSpawnBiome"(random: $RandomSource$$Type): $BlockPos
public static "getFromStructureState"(chunkGeneratorStructureState0: $ChunkGeneratorStructureState$$Type): $ChunkGeneratorExtension
public "getOrCreateAquifer"(chunk: $ChunkAccess$$Type): $Aquifer
public "getWrapped"(): $ChunkGenerator
public static "getWrapper"(gen: $ChunkGenerator$$Type): $ChunkGenerator
public "initRandomState"(chunkMap: $ChunkMap$$Type, level: $ServerLevel$$Type): void
public "rockLayerSettings"(): $RockLayerSettings
public "self"(): $ChunkGenerator
public "settings"(): $Settings
get "wrapped"(): $ChunkGenerator
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$ForestTypesMapEntry" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Record } from "packages/java/lang/$Record"
import { $ForestType, $ForestType$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ForestType"
import { $IntProvider, $IntProvider$$Type } from "packages/net/minecraft/util/valueproviders/$IntProvider"

export class $WorldGenUtils$ForestTypesMapEntry extends $Record {
constructor(type: $ForestType$$Type, treeCount: $IntProvider$$Type, groundcoverCount: $IntProvider$$Type, perChunkChance: float, bushCount: $IntProvider$$Type, hasSpoilerOldGrowth: boolean, allowsOldGrowth: boolean, leafPileCount: $IntProvider$$Type)

public "allowsOldGrowth"(): boolean
public "bushCount"(): $IntProvider
public "groundcoverCount"(): $IntProvider
public "hasSpoilerOldGrowth"(): boolean
public "leafPileCount"(): $IntProvider
public "perChunkChance"(): float
public "toJson"(obj: $JsonObject$$Type): void
public "treeCount"(): $IntProvider
public "type"(): $ForestType
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/addons/firmalife/block/$CheeseWheelBlockBuilder" {
import { $ExtendedPropertiesMultipartShapedBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesMultipartShapedBlockBuilder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ItemBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $CheeseWheelBlockBuilder extends $ExtendedPropertiesMultipartShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

/** Sets the inside texture for the aged state */
public "agedInsideTexture"(tex: string): $CheeseWheelBlockBuilder
/** Sets the model to use for the rack */
public "barrelRackModel"(model: string): $CheeseWheelBlockBuilder
public "createProperties"(): $BlockBehaviour$Properties
/** Sets the inside texture for the fresh state */
public "freshInsideTexture"(tex: string): $CheeseWheelBlockBuilder
/** Modifies the block's slice item */
public "sliceItem"(slice: $Consumer$$Type<$ItemBuilder$$Type>): $CheeseWheelBlockBuilder
/** Sets the inside texture for the vintage state */
public "vintageInsideTexture"(tex: string): $CheeseWheelBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/fluid/$HotWaterFluidBuilder" {
import { $FluidBuilder } from "packages/dev/latvian/mods/kubejs/fluid/$FluidBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $HotWaterFluidBuilder extends $FluidBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 * Sets the liquid's bubble particle
 * 
 * @param particle - The registry name of the particle type, may be null
 */
public "bubbleParticle"(particle: $ResourceLocation$$Type): $HotWaterFluidBuilder
/**
 * Deprecated, please pass `null` to `#bubbleParticle` to disable bubble particles instead
 * 
 * @deprecated
 */
public "hasBubbles"(b: boolean): $HotWaterFluidBuilder
/**
 * Deprecated, please pass `null` to `#steamParticle` to disable steam particles instead
 * 
 * @deprecated
 */
public "hasSteam"(b: boolean): $HotWaterFluidBuilder
/** Sets the amount of health the liquid heals while a living entity is in it */
public "healingAmount"(healing: float): $HotWaterFluidBuilder
/**
 * Sets the liquid's steam particle
 * 
 * @param particle - The registry name of the particle type, may be null
 */
public "steamParticle"(particle: $ResourceLocation$$Type): $HotWaterFluidBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$DeadCropBlockBuilder" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $DeadCropBlockBuilder$DeadModelVariant$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$DeadCropBlockBuilder$DeadModelVariant"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $AbstractCropBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$AbstractCropBlockBuilder"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $DeadCropBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type, alive: $AbstractCropBlockBuilder$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/**
 * Sets the model generation of the dead crop block, accepts a `BiConsumer` of a model generator and a `DeadModelVariant`.
 * The generator is unique for each variant.
 * 
 * For non-double crops, the variant has two methods: `.variant()`, which returns a string of the model
 * variant used in the block state file; and `.mature()`, which returns a boolean--if the variant represents a mature state.
 * 
 * For double crops, the above mentioned methods are available in addition to: `.bottom()`, which returns a boolean for if the
 * variant represents a bottom state; and `.stick()`, which returns a boolean for if the variant represents a stick state.
 * `.stick()` will always return false for double crops that do not require sticks.
 */
public "models"(models: $BiConsumer$$Type<$DeadCropBlockBuilder$DeadModelVariant$$Type, $ModelGenerator$$Type>): $DeadCropBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$NamedRegistryMetal" {
import { $Metal$ItemType$$Type } from "packages/net/dries007/tfc/util/$Metal$ItemType"
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $MapColor } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Metal$Default$$Type } from "packages/net/dries007/tfc/util/$Metal$Default"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $Rarity } from "packages/net/minecraft/world/item/$Rarity"
import { $Tier } from "packages/net/minecraft/world/item/$Tier"
import { $RegistryMetal, $RegistryMetal$$Type } from "packages/net/dries007/tfc/util/registry/$RegistryMetal"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Metal$Tier } from "packages/net/dries007/tfc/util/$Metal$Tier"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Metal$BlockType$$Type } from "packages/net/dries007/tfc/util/$Metal$BlockType"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $ArmorMaterial } from "packages/net/minecraft/world/item/$ArmorMaterial"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $NamedRegistryMetal implements $RegistryMetal {
constructor(metal: $RegistryMetal$$Type, mod: string, blocks: $Function$$Type<$Metal$BlockType$$Type, $Supplier<$Block>>, items: $Function$$Type<$Metal$ItemType$$Type, $Supplier<$Item>>, fluid: $Supplier$$Type<$Fluid>)

public "armorTier"(): $ArmorMaterial
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "fromTFC"(metal: $Metal$Default$$Type): $NamedRegistryMetal
public "getBlock"(type: $Metal$BlockType$$Type): $Supplier<$Block>
public "getFluid"(): $Supplier<$Fluid>
public "getFullBlock"(): $Supplier<$Block>
public "getItem"(type: $Metal$ItemType$$Type): $Supplier<$Item>
public "getMod"(): string
public "getRarity"(): $Rarity
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "mapColor"(): $MapColor
public "metalTier"(): $Metal$Tier
public "toolTier"(): $Tier
get "fluid"(): $Supplier<$Fluid>
get "fullBlock"(): $Supplier<$Block>
get "mod"(): string
get "rarity"(): $Rarity
get "serializedName"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$BirthdayEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Month$$Type } from "packages/net/dries007/tfc/util/calendar/$Month"

/** Add and remove birthdays from the in-game calendar */
export class $BirthdayEventJS extends $EventJS {
constructor()

/** Adds a new birthday */
public "add"(month: $Month$$Type, day: integer, name: string): void
/** Removes the birthday from the given month and day */
public "remove"(month: $Month$$Type, day: integer): void
/** Removes all birthdays */
public "removeAll"(): void
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$ProspectedEventJS" {
import { $PlayerEventJS } from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import { $ProspectedEvent$$Type } from "packages/net/dries007/tfc/util/events/$ProspectedEvent"
import { $ProspectResult } from "packages/net/dries007/tfc/common/items/$ProspectResult"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

/** Fired when a prospecting event is fired and is purely informational */
export class $ProspectedEventJS extends $PlayerEventJS {
constructor(event: $ProspectedEvent$$Type)

public "getBlock"(): $Block
public "getProspectResult"(): $ProspectResult
get "block"(): $Block
get "prospectResult"(): $ProspectResult
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/moss/$MossGrowingWallBlockBuilder" {
import { $WallBlockBuilder } from "packages/dev/latvian/mods/kubejs/block/custom/$WallBlockBuilder"
import { $MossGrowingCallback, $MossGrowingCallback$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$MossGrowingCallback"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MossGrowingWallBlockBuilder extends $WallBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "mossyConversion"(callback: $MossGrowingCallback$$Type): $MossGrowingWallBlockBuilder
public "mossyWall"(block: $ResourceLocation$$Type): $MossGrowingWallBlockBuilder
get "mossGrowth"(): $MossGrowingCallback
set "mossGrowth"(value: $MossGrowingCallback$$Type)
get "mossyBlock"(): $ResourceLocation
set "mossyBlock"(value: $ResourceLocation$$Type)
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$RockSpikeBlockBuilder" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $RockSpikeBlockBuilder$SpikeModelType$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$RockSpikeBlockBuilder$SpikeModelType"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $RockSpikeBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 * Sets the model generation of the spike, accepts a `BiConsumer` of a `SpikeModelPart` and a model generator.
 * The generator is unique for each type.
 * 
 * There are 3 parts: `BASE`, `MIDDLE`, and `TIP` all with `.base()`, `.middle()`, and `.tip()` methods which
 * return true if the type is in operation is the one indicated by the method.
 */
public "models"(models: $BiConsumer$$Type<$RockSpikeBlockBuilder$SpikeModelType$$Type, $ModelGenerator$$Type>): $RockSpikeBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$DoubleCropBlockBuilder" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $AbstractCropBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$AbstractCropBlockBuilder"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $DoubleCropBlockBuilder extends $AbstractCropBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Block
public "createProperties"(): $BlockBehaviour$Properties
/** Sets how many stages the crop has in its top state */
public "doubleStages"(i: integer): $DoubleCropBlockBuilder
/** Determines if the crop needs a stick to grow */
public "requiresStick"(requiresStick: boolean): $DoubleCropBlockBuilder
/** Sets the model for a specific stick state */
public "setStickModel"(stage: integer, gen: $Consumer$$Type<$ModelGenerator$$Type>): $DoubleCropBlockBuilder
/** Sets the model for all stick states */
public "setStickModel"(gen: $Consumer$$Type<$ModelGenerator$$Type>): $DoubleCropBlockBuilder
/** Sets the model for a specific top state */
public "setTopModel"(stage: integer, gen: $Consumer$$Type<$ModelGenerator$$Type>): $DoubleCropBlockBuilder
/** Sets the model for all top states */
public "setTopModel"(gen: $Consumer$$Type<$ModelGenerator$$Type>): $DoubleCropBlockBuilder
/** Sets how many stages the crop has in its bottom state */
public "stages"(i: integer): $DoubleCropBlockBuilder
/** Sets the model for a specific stick state */
public "stickModel"(stage: integer, model: string): $DoubleCropBlockBuilder
/** Sets the texture of a specific stick state */
public "stickTexture"(stage: integer, texture: string): $DoubleCropBlockBuilder
/** Textures a specific key for the given stick state */
public "stickTexture"(stage: integer, key: string, texture: string): $DoubleCropBlockBuilder
/** Sets the textures for a specific stick state */
public "stickTextures"(stage: integer, textures: $JsonObject$$Type): $DoubleCropBlockBuilder
/** Sets the textures for all stick states */
public "stickTextures"(textures: $JsonObject$$Type): $DoubleCropBlockBuilder
/** Sets the model for a specific top state */
public "topModel"(stage: integer, model: string): $DoubleCropBlockBuilder
/** Textures a specific key for the given top state */
public "topTexture"(stage: integer, key: string, texture: string): $DoubleCropBlockBuilder
/** Sets the texture of a specific top state */
public "topTexture"(stage: integer, texture: string): $DoubleCropBlockBuilder
/** Sets the textures for all top states */
public "topTextures"(textures: $JsonObject$$Type): $DoubleCropBlockBuilder
/** Sets the textures for a specific stick state */
public "topTextures"(stage: integer, textures: $JsonObject$$Type): $DoubleCropBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$GearBoxBlockBuilder" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $GearBoxBlockBuilder$GearBoxModelType$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$GearBoxBlockBuilder$GearBoxModelType"
import { $ExtendedPropertiesMultipartShapedBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesMultipartShapedBlockBuilder"
import { $AxleBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$AxleBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $GearBoxBlockBuilder extends $ExtendedPropertiesMultipartShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $AxleBlockBuilder$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/**
 * Sets the model generation of the gear box, accepts a `BiConsumer` of a `GearBoxModelType` and a model generator.
 * The generator is unique for each part.
 * 
 * There are 2 parts: `PORT` and `FACE` with a `.port()` method which returns a boolean; true if the part in
 * operation is `PORT`.
 */
public "models"(models: $BiConsumer$$Type<$GearBoxBlockBuilder$GearBoxModelType$$Type, $ModelGenerator$$Type>): $GearBoxBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$WindmillBlockBuilder" {
import { $AxleBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$AxleBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $WindmillBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $AxleBlockBuilder$$Type)

public "createProperties"(): $BlockBehaviour$Properties
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IFirmaLifeDataExtension" {
import { $BlockIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$BlockIngredient"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FarmlandBlockEntity$NutrientType$$Type } from "packages/net/dries007/tfc/common/blockentities/$FarmlandBlockEntity$NutrientType"
import { $IDataConstructor } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IDataConstructor"
import { $PlanterType$$Type } from "packages/com/eerussianguy/firmalife/common/blocks/greenhouse/$PlanterType"

export interface $IFirmaLifeDataExtension extends $IDataConstructor {
/**
 * Defines a new greenhouse type
 * 
 * @param ingredient - The blocks that make up the greenhouse type
 * @param tier - The tier of the greenhouse
 * @param name - The name of the greenhouse type
 */
"firmalifeGreenhouseType"(ingredient: $BlockIngredient$$Type, tier: integer, name: $ResourceLocation$$Type): void
/**
 * Defines a new greenhouse type
 * 
 * @param ingredient - The blocks that make up the greenhouse type
 * @param tier - The tier of the greenhouse
 */
"firmalifeGreenhouseType"(ingredient: $BlockIngredient$$Type, tier: integer): void
/**
 * Defines a new plantable definition
 * 
 * @param ingredient - The seed items to be used for this plantable definition
 * @param planterType - The planter type to use, may be null to default to 'quad'
 * @param tier - The greenhouse type tier the plantable requires to function, defaults to 0
 * @param stages - How many stages the planter has, one less than the number of textures the planter must cycle through, may be null for 'trellis', and 'bonsai' planter types
 * @param extraSeedChance - A number, in the range [0, 1], that determines the chance of getting an extra seed back when the planter grows, may be null to default to 0.5
 * @param seed - The seed returned by the planter when finished growing, if null no seed will be dropped
 * @param crop - The product of the crop, will always be returned
 * @param nutrient - The nutrient he plant consumes, may be null to default to 'nitrogen'
 * @param textures - An array of strings, corresponding to the textures the planter uses
 * 
 * Usage:
 * For planter types `large`, `quad`, `hydroponic`, and `hanging`: Order the textures the same as the growth order
 * For planter type `trellis`: Order the textures in the order growing, dry, flowering, fruiting
 * For planter type `bonsai`: Order the textures in the order fruiting. dry. flowering, branch, leaves
 * @param special - A string, the extra texture used by hanging planter types
 * 
 * Usage:
 * For planter types `large`, `quad`, `hydroponic`, `trellis`, and `bonsai`: Pass in null
 * For planter type `hanging`: Pass the fruit texture
 * @param name - The name of the plantable definition
 */
"firmalifePlantable"(ingredient: $Ingredient$$Type, planterType: $PlanterType$$Type, tier: integer, stages: integer, extraSeedChance: float, seed: $ItemStack$$Type, crop: $ItemStack$$Type, nutrient: $FarmlandBlockEntity$NutrientType$$Type, textures: string[], special: string, name: $ResourceLocation$$Type): void
/**
 * Defines a new plantable definition
 * 
 * @param ingredient - The seed items to be used for this plantable definition
 * @param planterType - The planter type to use, may be null to default to 'quad'
 * @param tier - The greenhouse type tier the plantable requires to function, defaults to 0
 * @param stages - How many stages the planter has, one less than the number of textures the planter must cycle through, may be null for 'trellis', and 'bonsai' planter types
 * @param extraSeedChance - A number, in the range [0, 1], that determines the chance of getting an extra seed back when the planter grows, may be null to default to 0.5
 * @param seed - The seed returned by the planter when finished growing, if null no seed will be dropped
 * @param crop - The product of the crop, will always be returned
 * @param nutrient - The nutrient he plant consumes, may be null to default to 'nitrogen'
 * @param textures - An array of strings, corresponding to the textures the planter uses
 * 
 * Usage:
 * For planter types `large`, `quad`, `hydroponic`, and `hanging`: Order the textures the same as the growth order
 * For planter type `trellis`: Order the textures in the order growing, dry, flowering, fruiting
 * For planter type `bonsai`: Order the textures in the order fruiting. dry. flowering, branch, leaves
 * @param special - A string, the extra texture used by hanging planter types
 * 
 * Usage:
 * For planter types `large`, `quad`, `hydroponic`, `trellis`, and `bonsai`: Pass in null
 * For planter type `hanging`: Pass the fruit texture
 */
"firmalifePlantable"(ingredient: $Ingredient$$Type, planterType: $PlanterType$$Type, tier: integer, stages: integer, extraSeedChance: float, seed: $ItemStack$$Type, crop: $ItemStack$$Type, nutrient: $FarmlandBlockEntity$NutrientType$$Type, textures: string[], special: string): void
}

export namespace $IFirmaLifeDataExtension {
const probejs$$marker: never
}
export abstract class $IFirmaLifeDataExtension$$Static implements $IFirmaLifeDataExtension {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$TreePlacement" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $TreePlacementConfig$GroundType, $TreePlacementConfig$GroundType$$Type } from "packages/net/dries007/tfc/world/feature/tree/$TreePlacementConfig$GroundType"
import { $Record } from "packages/java/lang/$Record"

export class $WorldGenUtils$TreePlacement extends $Record {
constructor(width: integer, height: integer, groundType: $TreePlacementConfig$GroundType$$Type)

public "groundType"(): $TreePlacementConfig$GroundType
public "height"(): integer
public "toJson"(): $JsonObject
public "width"(): integer
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$FallenLeavesBlockBuilder" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $TFCLeavesBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$TFCLeavesBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ILeafBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ILeafBuilder"
import { $FallenLeavesBlockBuilder$FallenLeafModelType$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$FallenLeavesBlockBuilder$FallenLeafModelType"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $FallenLeavesBlockBuilder extends $ExtendedPropertiesBlockBuilder implements $ILeafBuilder {
constructor(i: $ResourceLocation$$Type, parent: $TFCLeavesBlockBuilder$$Type)

public "createProperties"(): $BlockBehaviour$Properties
public "get"(): $Block
/**
 * Sets the model generation of the fallen leaves block, accepts a `BiConsumer` of a model generator and a `FallenLeafModelType`.
 * The generator is unique for each type.
 * 
 * There are 8 types and all have two properties named `.layer` and `.height`, the value of the `layer` state property and the height
 * of the hitbox in pixels, respectively.
 */
public "models"(models: $BiConsumer$$Type<$FallenLeavesBlockBuilder$FallenLeafModelType$$Type, $ModelGenerator$$Type>): $FallenLeavesBlockBuilder
public "noDynamicTinting"(): $ILeafBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$CreateChunkDataProviderEventJS$ChunkDataFiller" {
import { $BiConsumer, $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $ChunkData, $ChunkData$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ChunkData"
import { $ChunkAccess, $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"

export interface $CreateChunkDataProviderEventJS$ChunkDataFiller extends $BiConsumer<$ChunkData, $ChunkAccess> {
"accept"(chunkData: $ChunkData$$Type, access: $ChunkAccess$$Type): void
"andThen"(biConsumer0: $BiConsumer$$Type<$ChunkData$$Type, $ChunkAccess$$Type>): $BiConsumer<$ChunkData, $ChunkAccess>
}

export namespace $CreateChunkDataProviderEventJS$ChunkDataFiller {
const probejs$$marker: never
}
export abstract class $CreateChunkDataProviderEventJS$ChunkDataFiller$$Static implements $CreateChunkDataProviderEventJS$ChunkDataFiller {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$StationaryBerryBushBlockBuilder$BushModelsCreator" {
import { $Consumer } from "packages/java/util/function/$Consumer"
import { $StationaryBerryBushBlockBuilder$ModelFunc } from "packages/com/notenoughmail/kubejs_tfc/block/$StationaryBerryBushBlockBuilder$ModelFunc"
import { $ModelGenerator } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $Lifecycle$$Type } from "packages/net/dries007/tfc/common/blocks/plant/fruit/$Lifecycle"

/** @deprecated */
export interface $StationaryBerryBushBlockBuilder$BushModelsCreator {
"getFor"(lifecycle: $Lifecycle$$Type, stage: integer): $Consumer<$ModelGenerator>
"upgrade"(): $StationaryBerryBushBlockBuilder$ModelFunc
}

export namespace $StationaryBerryBushBlockBuilder$BushModelsCreator {
const probejs$$marker: never
}
export abstract class $StationaryBerryBushBlockBuilder$BushModelsCreator$$Static implements $StationaryBerryBushBlockBuilder$BushModelsCreator {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ISupportExtendedProperties$ExtendedPropertiesJS$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties$ExtendedPropertiesJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ISupportExtendedProperties } from "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties"

export class $ExtendedPropertiesBlockBuilder extends $BlockBuilder implements $ISupportExtendedProperties {
constructor(i: $ResourceLocation$$Type)

public "createProperties"(): $BlockBehaviour$Properties
public "extendedProperties"(extendedProperties: $Consumer$$Type<$ISupportExtendedProperties$ExtendedPropertiesJS$$Type>): $BlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$EncasedAxleBlockBuilder" {
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $EncasedAxleBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createProperties"(): $BlockBehaviour$Properties
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties$Pipe" {
import { $BuildVeinProperties } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties"
import { $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToWeightedBlockStateMapEntry"

export class $BuildVeinProperties$Pipe extends $BuildVeinProperties {
constructor(blocks: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], rarity: integer, density: float, minY: integer, maxY: integer, randomName: string, height: integer, radius: integer, minSkew: integer, maxSkew: integer, minSlant: integer, maxSlant: integer, sign: float)

}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToBlockStatesMapEntry" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Record } from "packages/java/lang/$Record"

export class $WorldGenUtils$BlockToBlockStatesMapEntry extends $Record {
constructor(block: string, blockStates: string[])

public "block"(): string
public "blockStates"(): string[]
public static "toJson"(obj: $JsonObject$$Type, key: string, blockKey: string, entries: $WorldGenUtils$BlockToBlockStatesMapEntry$$Type[]): void
public "toJson"(blockKey: string): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$StationaryBerryBushBlockBuilder" {
import { $Month$$Type } from "packages/net/dries007/tfc/util/calendar/$Month"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ItemBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $StationaryBerryBushBlockBuilder$BushModelsCreator$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$StationaryBerryBushBlockBuilder$BushModelsCreator"
import { $StationaryBerryBushBlockBuilder$ModelFunc$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$StationaryBerryBushBlockBuilder$ModelFunc"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $Lifecycle, $Lifecycle$$Type } from "packages/net/dries007/tfc/common/blocks/plant/fruit/$Lifecycle"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $StationaryBerryBushBlockBuilder extends $ExtendedPropertiesBlockBuilder {
static readonly "LC_VALUES": $Lifecycle[]

constructor(i: $ResourceLocation$$Type)

/**
 * Deprecated, please use `#models` and its new syntax
 * 
 * @deprecated
 */
public "allModels"(modelsCreator: $StationaryBerryBushBlockBuilder$BushModelsCreator$$Type): $StationaryBerryBushBlockBuilder
public "createProperties"(): $BlockBehaviour$Properties
/**
 * Sets the bush's lifecycle for the given month
 * 
 * @param month - The month that the bush will have the given life cycle
 * @param lifecycle - The lifecycle the bush will have for the given month
 */
public "lifecycle"(month: $Month$$Type, lifecycle: $Lifecycle$$Type): $StationaryBerryBushBlockBuilder
/** Sets the model for the given lifecycle and stage */
public "model"(lifecycle: $Lifecycle$$Type, stage: integer, modelGenerator: $Consumer$$Type<$ModelGenerator$$Type>): $StationaryBerryBushBlockBuilder
/**
 * Sets the model generation of the berry block, accepts a `TriConsumer` of a `Lifecycle`, an integer in the
 * range [0, 2] representing the growth stage, and a model generator.
 * The generator is unique for each lifecycle & stage combination.
 */
public "models"(models: $StationaryBerryBushBlockBuilder$ModelFunc$$Type): $StationaryBerryBushBlockBuilder
/** Modifies the bush's product item */
public "productItem"(productItem: $Consumer$$Type<$ItemBuilder$$Type>): $StationaryBerryBushBlockBuilder
/** Sets the bush's product item to be an existing item, will prevent the customizable product item from being created */
public "productItem"(productId: $ResourceLocation$$Type): $StationaryBerryBushBlockBuilder
/** Sets the texture for the given lifecycle and stage */
public "texture"(lifecycle: $Lifecycle$$Type, stage: integer, tex: string): $StationaryBerryBushBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildPortionData" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $BuildPortionData {
constructor()

/** Sets the ingredient this portion corresponds to */
public "ingredient"(ingredient: $Ingredient$$Type): $BuildPortionData
/** Multiplies the nutrition from the food using this portion, defaults to 1 */
public "nutrientModifier"(mod: float): $BuildPortionData
/** Multiplies the saturation from the food using this portion, defaults to 1 */
public "saturationModifier"(mod: float): $BuildPortionData
public "toJson"(): $JsonObject
/** Multiplies the water from the food using this portion, defaults to 1 */
public "waterModifier"(mod: float): $BuildPortionData
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $IFirmaLifeISPExtensions } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IFirmaLifeISPExtensions"
import { $IArtisanalISPExtensions } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IArtisanalISPExtensions"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $JsonArray, $JsonArray$$Type } from "packages/com/google/gson/$JsonArray"
import { $BuildFoodItemData$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildFoodItemData"
import { $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Record } from "packages/java/lang/$Record"
import { $ItemStackProvider } from "packages/net/dries007/tfc/common/recipes/outputs/$ItemStackProvider"
import { $List } from "packages/java/util/$List"
import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import { $OutputReplacementTransformer$Replacement } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer$Replacement"
import { $BuildPortionData$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildPortionData"
import { $FluidStackJS$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"
import { $ReplacementMatch, $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacementTransformer$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer"
import { $OutputReplacement, $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ItemStackProviderJS extends $Record implements $OutputReplacement, $ReplacementMatch, $IArtisanalISPExtensions, $IFirmaLifeISPExtensions {
static readonly "EMPTY": $ItemStackProviderJS

constructor(stack: $ItemStack$$Type, modifiers: $JsonArray$$Type)

/** Adds a 'tfc:add_bait_to_rod' modifier to the ISP */
public "addBait"(): $ItemStackProviderJS
/** Adds a 'tfc:add_glass' modifier to the ISP, used as part of glassworking recipes */
public "addGlass"(): $ItemStackProviderJS
/**
 * Adds a 'tfc:add_heat' modifier to the ISP
 * 
 * @param temperature - The °C to add to the item
 */
public "addHeat"(temperature: float): $ItemStackProviderJS
/** Adds a 'tfc:add_powder' modifier to the ISP */
public "addPowder"(): $ItemStackProviderJS
/**
 * Adds a 'tfc:add_trait' modifier to the ISP
 * 
 * @param trait - The food trait to be added
 */
public "addTrait"(trait: string): $ItemStackProviderJS
public "artisanalCapHeat"(max: float): $ItemStackProviderJS
public "artisanalCopyDynamicFood"(): $ItemStackProviderJS
public "artisanalCopyDynamicFoodNeverExpires"(): $ItemStackProviderJS
public "artisanalEmptyBowl"(): $ItemStackProviderJS
public "artisanalExtractCannedFood"(): $ItemStackProviderJS
public "artisanalHomogenousIngredients"(): $ItemStackProviderJS
public "artisanalInheritDecay"(decayModifier: float): $ItemStackProviderJS
public "artisanalModifyFluid"(fluid: $FluidStackJS$$Type): $ItemStackProviderJS
public "artisanalOnlyIfGenericAnimalFat"(): $ItemStackProviderJS
public "artisanalRemoveButter"(): $ItemStackProviderJS
/** Returns an object of the canon ItemStackProvider class matching the ISP this ItemStackProviderJS represents */
public "asCanonClass"(): $ItemStackProvider
/** Returns a copy of the ISP */
public "copy"(): $ItemStackProviderJS
/** Adds a 'tfc:copy_food' modifier to the ISP */
public "copyFood"(): $ItemStackProviderJS
/** Adds a 'tfc:copy_forging_bonus' modifier to the ISP */
public "copyForgingBonus"(): $ItemStackProviderJS
/** Adds a 'tfc:copy_heat' modifier to the ISP */
public "copyHeat"(): $ItemStackProviderJS
/** Adds a 'tfc:copy_input' modifier to the ISP */
public "copyInput"(): $ItemStackProviderJS
/** Adds a 'tfc:copy_oldest_food' modifier to the ISP */
public "copyOldestFood"(): $ItemStackProviderJS
/** Returns true if the ISP depends on a recipe's input */
public "dependsOnInput"(): boolean
/** Adds a 'tfc:dye_leather' modifier to the ISP with the provided color */
public "dyeLeather"(color: $DyeColor$$Type): $ItemStackProviderJS
/** Adds a 'tfc:empty_bowl' modifier to the ISP. This is supported by soup items */
public "emptyBowl"(): $ItemStackProviderJS
public "firmaLifeAddPiePan"(): $ItemStackProviderJS
public "firmaLifeCopyDynamicFood"(): $ItemStackProviderJS
public "firmaLifeEmptyPan"(): $ItemStackProviderJS
public static "fromJson"(json: $JsonObject$$Type): $ItemStackProviderJS
/** Returns the ISP's count, will return 0 if its item stack is empty */
public "getCount"(): integer
/** Returns the json representation of the ISP's item stack */
public "getJsonStack"(): $JsonObject
/** Returns a list of JsonObjects consisting of the applied modifiers which match the requested type */
public "getModifiersOfType"(type: string): $List<$JsonObject>
/** Returns the item stack's `CompoundTag`, may be null */
public "getTag"(): $CompoundTag
/** Returns true if this ISP's stack is empty and the modifier list is empty */
public "isEmpty"(): boolean
/** Returns true if the modifier list is empty */
public "isSimple"(): boolean
/** Adds the provided JsonObject to the modifier list */
public "jsonModifier"(json: $JsonObject$$Type): $ItemStackProviderJS
public "jsonModifier"(type: string, json: $Consumer$$Type<$JsonObject$$Type>): $ItemStackProviderJS
/**
 * Adds a 'tfc:meal' modifier to the ISP
 * 
 * @param food - The base food data values for the meal modifier
 */
public "meal"(food: $Consumer$$Type<$BuildFoodItemData$$Type>): $ItemStackProviderJS
/**
 * Adds a 'tfc:meal' modifier to the ISP
 * 
 * @param food - The base food data values for the meal modifier
 * @param portions - The portion data values for the meal modifier
 */
public "meal"(food: $Consumer$$Type<$BuildFoodItemData$$Type>, portions: $Consumer$$Type<$BuildPortionData$$Type>[]): $ItemStackProviderJS
/** Merges the provided CompoundTag into item stack's CompoundTag */
public "mergeTag"(tag: $CompoundTag$$Type): $ItemStackProviderJS
public "modifiers"(): $JsonArray
public static "of"(stack: $ItemStack$$Type, b: any): $ItemStackProviderJS
public static "of"(o: any): $ItemStackProviderJS
public static "ofCanon"(o: any): $ItemStackProvider
/**
 * Adds a 'tfc:remove_trait' modifier to the ISP
 * 
 * @param trait - The food trait to be removed
 */
public "removeTrait"(trait: string): $ItemStackProviderJS
public "replaceOutput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $OutputReplacement$$Type): any
/** Adds a 'tfc:reset_food' modifier to the ISP */
public "resetFood"(): $ItemStackProviderJS
/** Sets the item stack's `CompoundTag` */
public "setTag"(tag: $CompoundTag$$Type): $ItemStackProviderJS
/** Adds a simple modifier to the ISP with the type defined by the provided string */
public "simpleModifier"(s: string): $ItemStackProviderJS
public "stack"(): $ItemStack
/** Returns the json representation of this ISP */
public "toJson"(): $JsonObject
/** Returns the ISP as an `ItemStack` with all of its modifier applied, requires an input stack for any modifiers that require inputs */
public "toStack"(input: $ItemStack$$Type): $ItemStack
/** Returns the ISP as an `ItemStack` with all of its modifiers applied, will error if any of the modifiers are dependent on the input stack */
public "toStack"(): $ItemStack
public "trait"(isAddingTrait: boolean, foodTrait: string): $ItemStackProviderJS
public "transform"(transformer: $OutputReplacementTransformer$$Type): $OutputReplacementTransformer$Replacement
/** Sets the ISP's count */
public "withCount"(count: integer): $ItemStackProviderJS
get "count"(): integer
get "jsonStack"(): $JsonObject
get "tag"(): $CompoundTag
get "empty"(): boolean
get "simple"(): boolean
set "tag"(value: $CompoundTag$$Type)
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$FluidContainerItemBuilder" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ItemBuilder } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $FluidContainerItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

/** Determines if the item can place fluids in world */
public "canPlaceLiquid"(b: boolean): $FluidContainerItemBuilder
/** Determines if the item can place source blocks when placing fluid blocks in world */
public "canPlaceLiquidSource"(b: boolean): $FluidContainerItemBuilder
/** Sets the capacity, in mB, of the fluid container */
public "capacity"(i: integer): $FluidContainerItemBuilder
/** Sets the capacity, in mB, supplier of the fluid container */
public "capacitySupplier"(capacity: $Supplier$$Type<integer>): $FluidContainerItemBuilder
public "createObject"(): $Item
/**
 * Sets the display name for this object when filled
 * 
 * This will be overridden by a lang file if it exists
 */
public "filledDisplayName"(c: $Component$$Type): $FluidContainerItemBuilder
/** Sets the fluid tag that the item is allowed to hold */
public "fluidTagAccept"(tag: $ResourceLocation$$Type): $FluidContainerItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildEffectData" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"

export class $BuildEffectData {
constructor(type: string)

/** Sets the level of the potion effect, defaults to 0 */
public "amplifier"(i: integer): $BuildEffectData
/** Sets the chance, per 25mB drank, the effect will be applied, in the range [0, 1]. Defaults to 1 */
public "chance"(f: float): $BuildEffectData
/** Sets the number of ticks the effect is applied for, defaults to 20 */
public "duration"(i: integer): $BuildEffectData
public "toJson"(): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$SpreadingBushBlockBuilder" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $SpreadingCaneBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$SpreadingCaneBlockBuilder"
import { $StationaryBerryBushBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/$StationaryBerryBushBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpreadingBushBlockBuilder extends $StationaryBerryBushBlockBuilder {
constructor(i: $ResourceLocation$$Type)

/** Sets the properties of the cane block */
public "cane"(cane: $Consumer$$Type<$SpreadingCaneBlockBuilder$$Type>): $SpreadingBushBlockBuilder
public "createProperties"(): $BlockBehaviour$Properties
/** Sets the maximum height this bush can grow to, defaults to 3 */
public "maxHeight"(i: integer): $SpreadingBushBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$Root" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $WorldGenUtils$BlockToWeightedBlockStateMapEntry, $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToWeightedBlockStateMapEntry"
import { $Record } from "packages/java/lang/$Record"

export class $WorldGenUtils$Root extends $Record {
constructor(blocks: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], width: integer, height: integer, tries: integer, specialPlacerSkewChance: float, required: boolean)

public "blocks"(): $WorldGenUtils$BlockToWeightedBlockStateMapEntry[]
public "height"(): integer
public "required"(): boolean
public "specialPlacerSkewChance"(): float
public "toJson"(): $JsonObject
public "tries"(): integer
public "width"(): integer
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$RegisterInteractionsEventJS" {
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $InteractionManager$OnItemUseAction$$Type } from "packages/net/dries007/tfc/util/$InteractionManager$OnItemUseAction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

/** Used to register custom item-block interactions that go through TFC's interaction pipeline */
export class $RegisterInteractionsEventJS extends $EventJS {
constructor()

public static "addBlockItemPlacement"(item: $Supplier$$Type<$Item>, block: $Supplier$$Type<$Block>): void
/**
 * Registers a default block placement interaction
 * 
 * @param item - The item
 * @param block - The block to be placed
 */
public "blockItemPlacement"(item: $Item$$Type, block: $Block$$Type): void
/**
 * Registers an interaction, targeting blocks, but not air, by default
 * 
 * @param ingredient - The items this interactions applies to
 * @param action - A callback for the action to perform, requires an `InteractionResult` be returned
 */
public "interaction"(ingredient: $Ingredient$$Type, action: $InteractionManager$OnItemUseAction$$Type): void
/**
 * Registers an interaction, targeting blocks by default
 * 
 * @param ingredient - The items this interactions applies to
 * @param targetAir - If the interaction should register when clicking in the air
 * @param action - A callback for the action to perform, requires an `InteractionResult` be returned
 */
public "interaction"(ingredient: $Ingredient$$Type, targetAir: boolean, action: $InteractionManager$OnItemUseAction$$Type): void
/**
 * Registers an interaction
 * 
 * @param ingredient - The items this interactions applies to
 * @param targetBlocks - If blocks should be targeted in the interaction
 * @param targetAir - If the interaction should register when clicking in the air
 * @param action - A callback for the action to perform, requires an `InteractionResult` be returned
 */
public "interaction"(ingredient: $Ingredient$$Type, targetBlocks: boolean, targetAir: boolean, action: $InteractionManager$OnItemUseAction$$Type): void
public static "registerCustomPlacements"(): void
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$OnChunkLoadCallback" {
import { $ChunkData$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ChunkData"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"

export interface $KubeJSClimateModel$OnChunkLoadCallback {
/**
 * @param level - The level
 * @param chunk - The chunk being loaded
 * @param chunkData - Additional TFC data about the chunk, will be invalid if the level does not have a TFC-like generator
 */
"apply"(level: $WorldGenLevel$$Type, chunk: $ChunkAccess$$Type, chunkData: $ChunkData$$Type): void
}

export namespace $KubeJSClimateModel$OnChunkLoadCallback {
const probejs$$marker: never
}
export abstract class $KubeJSClimateModel$OnChunkLoadCallback$$Static implements $KubeJSClimateModel$OnChunkLoadCallback {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$PickableCropBlockBuilder" {
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $AbstractCropBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$AbstractCropBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $PickableCropBlockBuilder extends $AbstractCropBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/** Sets the item to be given to the player when they pick the block */
public "fruit"(fruit: $ResourceLocation$$Type): $PickableCropBlockBuilder
/** Sets the item to be given to the player when the pick the block and the crop is mature, defaults to 'minecraft:apple' */
public "matureFruit"(matureFruit: $ResourceLocation$$Type): $PickableCropBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$ModifyDefaultWorldGenSettingsEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $MapCodec$ResultFunction } from "packages/com/mojang/serialization/$MapCodec$ResultFunction"
import { $Settings, $Settings$$Type } from "packages/net/dries007/tfc/world/settings/$Settings"
import { $Set } from "packages/java/util/$Set"
import { $List } from "packages/java/util/$List"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RockSettings, $RockSettings$$Type } from "packages/net/dries007/tfc/world/settings/$RockSettings"
import { $Map$$Type } from "packages/java/util/$Map"

/**
 * Allows for editing of TFC's worldgen values after the `overworld.json` file is read
 * and before players are able to edit values on TFC's worldgen configuration screen
 * 
 * Note: this event may fire for already existing worlds, but any changes made will not effect them
 */
export class $ModifyDefaultWorldGenSettingsEventJS extends $EventJS {
static readonly "SETTINGS_TRANSFORMER": $MapCodec$ResultFunction<$Settings>

constructor(settings: $Settings$$Type)

/** Adds the given layer to the 'land' layer type */
public "addLandLayer"(name: string): void
/** Adds the given layer to the 'ocean_floor' layer type */
public "addOceanFloorLayer"(name: string): void
/**
 * Adds the given rock to the generator's pool of available rocks
 * 
 * @param rock - the `RockSettings` to add
 * @param name - The name which the rock can be referenced by
 * @param bottom - If the rock should be added as a 'bottom' layer rock
 */
public "addRock"(rock: $RockSettings$$Type, name: string, bottom: boolean): void
/**
 * Adds the given rock to the generator's pool of available rocks
 * 
 * @param id - The registered id of the `RockSettings` to add
 * @param name - The name which the rock can be referenced by
 * @param bottom - If the rock should be added as a 'bottom' layer rock
 */
public "addRockFromId"(id: $ResourceLocation$$Type, name: string, bottom: boolean): void
/** Adds the given rock to the bottom layer */
public "addToBottom"(name: string): void
/** Adds the given layer to the 'uplift' layer type */
public "addUpliftLayer"(name: string): void
/** Adds the given layer to the 'volcanic' layer type */
public "addVolcanicLayer"(name: string): void
/** Removes all rocks and rock layers from the generator */
public "cleanSlate"(): void
/**
 * Defines a new rock layer
 * 
 * @param id - The name of the layer to add
 * @param rockMap - A map of rock names to layer names, associates a rock with the layer that will generate underneath it
 */
public "defineLayer"(id: string, rockMap: $Map$$Type<string, string>): void
/** Sets flat bedrock to true */
public "flatBedrock"(): void
/** Sets if the world should have flat bedrock, defaults to false */
public "flatBedrock"(b: boolean): void
/** Gets the layers that are currently in the 'land' layer type */
public "getLandLayers"(): $List<string>
/** Gets the names of all layers currently in the generator's pool of layers */
public "getLayerIds"(): $List<string>
/** Gets the layers that are currently in the 'ocean_floor' layer type */
public "getOceanFloorLayers"(): $List<string>
/** Gets the `RockSettings` with the given name */
public "getRock"(name: string): $RockSettings
/** Gets the names of all rocks currently in the generator's pool of rocks */
public "getRockNames"(): $Set<string>
/** Gets the layers that are currently in the 'uplift' layer type */
public "getUpliftLayers"(): $List<string>
/** Gets the layers that are currently in the 'volcanic' layer type */
public "getVolcanicLayers"(): $List<string>
/** Removes the given rock from the bottom layer */
public "removeFromBottom"(name: string): void
/** Removes the given layer from the 'land' layer type */
public "removeLandLayer"(name: string): void
/** Removes the given layer from the generator */
public "removeLayer"(layerId: string): void
/** Removes the given layer from the 'ocean_floor' layer type */
public "removeOceanFloorLayer"(name: string): void
/** Removes the given rock from the generator */
public "removeRock"(name: string): void
/** Removes the given layer from the 'uplift' layer type */
public "removeUpliftLayer"(name: string): void
/** Removes the given layer from the 'volcanic' layer type */
public "removeVolcanicLayer"(name: string): void
/** Sets the proportion of the world that is land instead of water, defaults to 0.5 */
public "setContinentalness"(continentalness: float): void
/** Sets the grass density of the world, defaults to 0.5 */
public "setGrassDensity"(density: float): void
/** Sets the relative constant temperature of the world, defaults to 0 */
public "setRainfallConstant"(constant: float): void
/** Sets the rainfall scale of the world, the distance between peaks in intensity, defaults to 20000 */
public "setRainfallScale"(scale: integer): void
/** Sets the spawn center on the x-coordinate */
public "setSpawnCenterX"(xCenter: integer): void
/** Sets the spawn center on the z-coordinate */
public "setSpawnCenterZ"(zCenter: integer): void
/** Sets the distance from the spawn center that players may spawn */
public "setSpawnDistance"(distance: integer): void
/** Sets the relative constant temperature of the world, defaults to 0 */
public "setTemperatureConstant"(constant: float): void
/** Sets the temperature scale of the world, the distance from pole to pole, defaults to 20000 */
public "setTemperatureScale"(scale: integer): void
get "landLayers"(): $List<string>
get "layerIds"(): $List<string>
get "oceanFloorLayers"(): $List<string>
get "rockNames"(): $Set<string>
get "upliftLayers"(): $List<string>
get "volcanicLayers"(): $List<string>
set "continentalness"(value: float)
set "grassDensity"(value: float)
set "rainfallConstant"(value: float)
set "rainfallScale"(value: integer)
set "spawnCenterX"(value: integer)
set "spawnCenterZ"(value: integer)
set "spawnDistance"(value: integer)
set "temperatureConstant"(value: float)
set "temperatureScale"(value: integer)
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$InstantBarrelRecipeJS" {
import { $OutputFluid$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid"
import { $InputItem$$Type } from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import { $BarrelRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$BarrelRecipeJS"
import { $FluidStackIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidStackIngredient"
import { $ItemStackProviderJS$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS"

export class $InstantBarrelRecipeJS extends $BarrelRecipeJS {
constructor()

public "getMod"(): string
/** Sets the recipe's input FluidStackIngredient */
public "inputFluid"(inputFluid: $FluidStackIngredient$$Type): $InstantBarrelRecipeJS
/** Sets the recipe's input item ingredient ingredient */
public "inputItem"(inputItem: $InputItem$$Type): $InstantBarrelRecipeJS
/** Sets the recipe's input item ingredient and FluidStackIngredient */
public "inputs"(inputItem: $InputItem$$Type, inputFluid: $FluidStackIngredient$$Type): $InstantBarrelRecipeJS
/** Sets the recipe's output fluid */
public "outputFluid"(outputFluid: $OutputFluid$$Type): $InstantBarrelRecipeJS
/** Sets the recipe's output ItemStackProvider */
public "outputItem"(outputItem: $ItemStackProviderJS$$Type): $InstantBarrelRecipeJS
/** Sets the recipe's output ItemStackProvider and fluid */
public "outputs"(outputItem: $ItemStackProviderJS$$Type, outputFluid: $OutputFluid$$Type): $InstantBarrelRecipeJS
/**
 * Sets the sound event the barrel will play when the recipe finishes
 * 
 * Use '/kubejs dump_registry minecraft:sound_event' in-game to get a full list of possible values
 */
public "sound"(sound: string): $InstantBarrelRecipeJS
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$ClutchBlockBuilder$ClutchModelType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ClutchBlockBuilder$ClutchModelType extends $Enum<$ClutchBlockBuilder$ClutchModelType> {
static readonly "POWERED": $ClutchBlockBuilder$ClutchModelType
static readonly "UNPOWERED": $ClutchBlockBuilder$ClutchModelType
static readonly "VALUES": $ClutchBlockBuilder$ClutchModelType[]

public "powered"(): boolean
public static "valueOf"(name: string): $ClutchBlockBuilder$ClutchModelType
public static "values"(): $ClutchBlockBuilder$ClutchModelType[]
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$CollapseEventJS" {
import { $List } from "packages/java/util/$List"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $LevelEventJS } from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"
import { $CollapseEvent$$Type } from "packages/net/dries007/tfc/util/events/$CollapseEvent"

/** Fires whenever a collapse happens for both real and fake collapses */
export class $CollapseEventJS extends $LevelEventJS {
constructor(event: $CollapseEvent$$Type)

public "getCenterBlock"(): $BlockContainerJS
public "getCenterPos"(): $BlockPos
/** Returns the maximum distance from the center block of collapsing blocks, or 0 if the collapse is fake */
public "getRadiusSquared"(): double
/** Returns a list of `BlockPos`es where a block collapses or, if the collapse is fake, particles spawn */
public "getSecondaryPositions"(): $List<$BlockPos>
public "isFake"(): boolean
get "centerBlock"(): $BlockContainerJS
get "centerPos"(): $BlockPos
get "radiusSquared"(): double
get "secondaryPositions"(): $List<$BlockPos>
get "fake"(): boolean
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/$IChunkGenWrapper" {
import { $WrappedChunkGenerator, $WrappedChunkGenerator$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/world/$WrappedChunkGenerator"

export interface $IChunkGenWrapper {
"kubejs_tfc$SetWrapper"(gen: $WrappedChunkGenerator$$Type): void
"kubejs_tfc$getWrapper"(): $WrappedChunkGenerator
}

export namespace $IChunkGenWrapper {
const probejs$$marker: never
}
export abstract class $IChunkGenWrapper$$Static implements $IChunkGenWrapper {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$WildCropBlockBuilder$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $WildCropBlockBuilder$Type extends $Enum<$WildCropBlockBuilder$Type> {
static readonly "DEFAULT": $WildCropBlockBuilder$Type
static readonly "DOUBLE": $WildCropBlockBuilder$Type
static readonly "FLOODED": $WildCropBlockBuilder$Type
static readonly "SPREADING": $WildCropBlockBuilder$Type

public static "valueOf"(name: string): $WildCropBlockBuilder$Type
public static "values"(): $WildCropBlockBuilder$Type[]
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$TreeLayer" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Record } from "packages/java/lang/$Record"

export class $WorldGenUtils$TreeLayer extends $Record {
constructor(templates: string[], minCount: integer, maxCount: integer)

public "maxCount"(): integer
public "minCount"(): integer
public "templates"(): string[]
public "toJson"(): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/addons/artisanal/recipe/js/$DistilleryRecipeJS" {
import { $OutputFluid$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid"
import { $InputItem$$Type } from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import { $FluidStackIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidStackIngredient"
import { $ItemStackProviderJS$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS"
import { $TFCProviderRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCProviderRecipeJS"

export class $DistilleryRecipeJS extends $TFCProviderRecipeJS {
constructor()

public "getMod"(): string
public "inputFluid"(fluidIngredient: $FluidStackIngredient$$Type): $DistilleryRecipeJS
public "inputItem"(ingredient: $InputItem$$Type): $DistilleryRecipeJS
public "inputs"(ingredient: $InputItem$$Type, fluidIngredient: $FluidStackIngredient$$Type): $DistilleryRecipeJS
public "leftoverFluid"(leftoverFluid: $OutputFluid$$Type): $DistilleryRecipeJS
public "leftoverItem"(leftoverItem: $ItemStackProviderJS$$Type): $DistilleryRecipeJS
public "leftovers"(leftoverItem: $ItemStackProviderJS$$Type, leftoverFluid: $OutputFluid$$Type): $DistilleryRecipeJS
public "resultFluid"(resultFluid: $OutputFluid$$Type): $DistilleryRecipeJS
public "resultItem"(resultItem: $ItemStackProviderJS$$Type): $DistilleryRecipeJS
public "results"(resultItem: $ItemStackProviderJS$$Type, resultFluid: $OutputFluid$$Type): $DistilleryRecipeJS
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$TFCTorchBlockBuilder" {
import { $ExtendedPropertiesShapedBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesShapedBlockBuilder"
import { $DeadWallTorchBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$DeadWallTorchBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $TFCWallTorchBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$TFCWallTorchBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ItemBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $DeadTorchBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$DeadTorchBuilder"

export class $TFCTorchBlockBuilder extends $ExtendedPropertiesShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/** Sets the properties for the dead block */
public "dead"(dead: $Consumer$$Type<$DeadTorchBuilder$$Type>): $TFCTorchBlockBuilder
/** Sets the properties for the dead item, may be null to remove */
public "deadItem"(item: $Consumer$$Type<$ItemBuilder$$Type>): $TFCTorchBlockBuilder
/** Sets the model for the dead block */
public "deadModel"(model: string): $TFCTorchBlockBuilder
/** Sets the properties for the dead wall block */
public "deadWall"(deadWall: $Consumer$$Type<$DeadWallTorchBuilder$$Type>): $TFCTorchBlockBuilder
/** Sets the time, in ticks, the torch will burn for */
public "decayLength"(length: integer): $TFCTorchBlockBuilder
/** Sets the supplier for the time, in ticks, the torch will burn for */
public "decayLengthSupplier"(length: $Supplier$$Type<integer>): $TFCTorchBlockBuilder
/** Sets the torch's flame particle, may be null to not have one */
public "flameParticle"(particle: $ResourceLocation$$Type): $TFCTorchBlockBuilder
public static "randomTick"(level: $ServerLevel$$Type, pos: $BlockPos$$Type, place: $BlockState$$Type, decayLength: $Supplier$$Type<integer>): void
/** Sets the torch's smoke particle, may be null to not have one */
public "smokeParticle"(particle: $ResourceLocation$$Type): $TFCTorchBlockBuilder
/** Sets the properties for the wall block */
public "wall"(wall: $Consumer$$Type<$TFCWallTorchBuilder$$Type>): $TFCTorchBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$KnappingRecipeJS" {
import { $TFCRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCRecipeJS"
import { $InputItem$$Type } from "packages/dev/latvian/mods/kubejs/item/$InputItem"

export class $KnappingRecipeJS extends $TFCRecipeJS {
constructor()

public "getMod"(): string
/** Sets the recipe's ingredient, must match the item clicked, use to restrict recipes beyond the knapping type's ingredient */
public "ingredient"(ingredient: $InputItem$$Type): $KnappingRecipeJS
/** Determines if slots outside the grid of defined pattern should be required to be filled or not */
public "outsideSlotRequired"(required: boolean): $KnappingRecipeJS
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$FallenLeavesBlockBuilder$FallenLeafModelType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FallenLeavesBlockBuilder$FallenLeafModelType extends $Enum<$FallenLeavesBlockBuilder$FallenLeafModelType> {
static readonly "EIGHT": $FallenLeavesBlockBuilder$FallenLeafModelType
static readonly "FOUR": $FallenLeavesBlockBuilder$FallenLeafModelType
static readonly "FOURTEEN": $FallenLeavesBlockBuilder$FallenLeafModelType
static readonly "SIX": $FallenLeavesBlockBuilder$FallenLeafModelType
static readonly "SIXTEEN": $FallenLeavesBlockBuilder$FallenLeafModelType
static readonly "TEN": $FallenLeavesBlockBuilder$FallenLeafModelType
static readonly "TWELVE": $FallenLeavesBlockBuilder$FallenLeafModelType
static readonly "TWO": $FallenLeavesBlockBuilder$FallenLeafModelType
static readonly "VALUES": $FallenLeavesBlockBuilder$FallenLeafModelType[]
readonly "height": integer
readonly "layers": integer

public static "valueOf"(name: string): $FallenLeavesBlockBuilder$FallenLeafModelType
public static "values"(): $FallenLeavesBlockBuilder$FallenLeafModelType[]
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$StationaryBerryBushBlockBuilder$ModelFunc" {
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $Lifecycle$$Type } from "packages/net/dries007/tfc/common/blocks/plant/fruit/$Lifecycle"

export interface $StationaryBerryBushBlockBuilder$ModelFunc {
"andThen"(func: $StationaryBerryBushBlockBuilder$ModelFunc$$Type): $StationaryBerryBushBlockBuilder$ModelFunc
"apply"(lifecycle: $Lifecycle$$Type, stage: integer, generator: $ModelGenerator$$Type): void
}

export namespace $StationaryBerryBushBlockBuilder$ModelFunc {
const probejs$$marker: never
}
export abstract class $StationaryBerryBushBlockBuilder$ModelFunc$$Static implements $StationaryBerryBushBlockBuilder$ModelFunc {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties$Flatness" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"

export class $PlacedFeatureProperties$Flatness {
constructor()

/** Sets the required flatness of the surrounding area, in the range [0, 1]. Defaults to 0.5 */
public "flatness"(f: float): $PlacedFeatureProperties$Flatness
/** How deep from the initial position the decorator should search, defaults to 4 */
public "maxDepth"(i: integer): $PlacedFeatureProperties$Flatness
/** The radius around the initial position the area is checked for when calculation flatness, defaults to 2 */
public "radius"(i: integer): $PlacedFeatureProperties$Flatness
public "toJson"(): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$SupportBlockBuilder" {
import { $ExtendedPropertiesMultipartShapedBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesMultipartShapedBlockBuilder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $HorizontalSupportBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$HorizontalSupportBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $SupportBlockBuilder extends $ExtendedPropertiesMultipartShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

/** Sets the model used by this and the horizontal block for sideways connections */
public "connectionModel"(model: string): $SupportBlockBuilder
public "createProperties"(): $BlockBehaviour$Properties
/** Sets the properties of the horizontal support block */
public "horizontal"(horizontalSupport: $Consumer$$Type<$HorizontalSupportBlockBuilder$$Type>): $SupportBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$JavelinItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $ItemDisplayContext$$Type } from "packages/net/minecraft/world/item/$ItemDisplayContext"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $JavelinItemBuilder extends $HandheldItemBuilder {
"thrownDamage": float

constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
/** Sets the model to be used for the 'none', 'fixed', 'ground', and 'gui' display contexts */
public "guiModel"(model: string): $JavelinItemBuilder
/**
 * Sets the model to use at the specified display context
 * 
 * @param perspective - The display context which the specified model should be shown
 * @param model - The model to use with the given perspective
 */
public "modelAtPerspective"(perspective: $ItemDisplayContext$$Type, model: string): $JavelinItemBuilder
/** Adds this to the 'tfc:skeleton_weapons' tag */
public "skeletonWeapon"(): $JavelinItemBuilder
/** Sets the model used when throwing */
public "throwingModel"(model: string): $JavelinItemBuilder
/** Sets the javelin's thrown damage */
public "thrownDamage"(damage: float): $JavelinItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/addons/precpros/item/$ProsHammerItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PropickItemBuilder } from "packages/com/notenoughmail/kubejs_tfc/item/$PropickItemBuilder"

export class $ProsHammerItemBuilder extends $PropickItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties$ExtendedPropertiesJS" {
import { $ExtendedProperties$$Type } from "packages/net/dries007/tfc/common/blocks/$ExtendedProperties"
import { $ToIntFunction$$Type } from "packages/java/util/function/$ToIntFunction"
import { $BlockBehaviour$OffsetType$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$OffsetType"
import { $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $NoteBlockInstrument$$Type } from "packages/net/minecraft/world/level/block/state/properties/$NoteBlockInstrument"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ISupportExtendedProperties$MapColorFunction$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties$MapColorFunction"
import { $PushReaction$$Type } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $Record } from "packages/java/lang/$Record"
import { $SoundType$$Type } from "packages/net/minecraft/world/level/block/$SoundType"
import { $BlockBehaviour$StatePredicate$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StatePredicate"
import { $ISupportExtendedProperties$BlockSupplier$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties$BlockSupplier"
import { $ToDoubleFunction$$Type } from "packages/java/util/function/$ToDoubleFunction"
import { $BlockBehaviour$StateArgumentPredicate$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StateArgumentPredicate"

export class $ISupportExtendedProperties$ExtendedPropertiesJS extends $Record {
constructor(delegate: $ExtendedProperties$$Type)

/**
 * Sets the pathing type for adjacent bocks
 * 
 * @param pathType - The path type of adjacent blocks
 */
public "adjacentPathType"(pathType: $BlockPathTypes$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "air"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "alwaysEmissive"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "alwaysIsRedstoneConductor"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "alwaysPostProcess"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "alwaysSuffocating"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "alwaysViewBlocking"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "defaultInstrument"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "destroyTime"(destroyTime: float): $ISupportExtendedProperties$ExtendedPropertiesJS
public "dropsLike"(block: $ISupportExtendedProperties$BlockSupplier$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "dynamicShape"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "emissiveRendering"(emissiveRendering: $BlockBehaviour$StatePredicate$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
/**
 * Sets the enchantment power of the block
 * 
 * @param power - The enchantment power
 */
public "enchantPower"(power: float): $ISupportExtendedProperties$ExtendedPropertiesJS
/**
 * Sets the enchantment power of the block based off of its block state
 * 
 * @param function - A BlockState to number function
 */
public "enchantPowerFunction"(function_: $ToDoubleFunction$$Type<$BlockState$$Type>): $ISupportExtendedProperties$ExtendedPropertiesJS
public "explosionResistance"(explosionResistance: float): $ISupportExtendedProperties$ExtendedPropertiesJS
/**
 * Sets the flammability and fire spread speed of the block
 * 
 * @param flammability - The flammability of the block
 * @param fireSpreadSpeed - The fire spread speed of the block
 */
public "flammable"(flammability: integer, fireSpreadSpeed: integer): $ISupportExtendedProperties$ExtendedPropertiesJS
public "forceSolidOff"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "forceSolidOn"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "friction"(friction: float): $ISupportExtendedProperties$ExtendedPropertiesJS
public "hasPostProcess"(hasPostProcess: $BlockBehaviour$StatePredicate$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "ignitedByLava"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "instabreak"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "instrument"(inst: $NoteBlockInstrument$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "isRedstoneConductor"(isRedstoneConductor: $BlockBehaviour$StatePredicate$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "isSuffocating"(isSuffocating: $BlockBehaviour$StatePredicate$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "isValidSpawn"(isValidSpawn: $BlockBehaviour$StateArgumentPredicate$$Type<$EntityType$$Type<any>>): $ISupportExtendedProperties$ExtendedPropertiesJS
public "isViewBlocking"(isViewBlocking: $BlockBehaviour$StatePredicate$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "jumpFactor"(jumpFactor: float): $ISupportExtendedProperties$ExtendedPropertiesJS
public "lightLevel"(lightLevel: $ToIntFunction$$Type<$BlockState$$Type>): $ISupportExtendedProperties$ExtendedPropertiesJS
public "mapColor"(mapColor: $ISupportExtendedProperties$MapColorFunction$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "mapColor"(color: $MapColor$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "mapColor"(color: $DyeColor$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "neverEmissive"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "neverIsRedstoneConductor"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "neverPostProcess"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "neverSuffocating"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "neverViewBlocking"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "noCollision"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "noLootTable"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "noOcclusion"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "noParticlesOnBreak"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "offsetType"(type: $BlockBehaviour$OffsetType$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
/**
 * Sets the pathing type of the block
 * 
 * @param pathType - The path type of the block
 */
public "pathType"(pathType: $BlockPathTypes$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "pushReaction"(reaction: $PushReaction$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "randomTicks"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "replaceable"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "requiresCorrectToolForDrops"(): $ISupportExtendedProperties$ExtendedPropertiesJS
public "sound"(sound: $SoundType$$Type): $ISupportExtendedProperties$ExtendedPropertiesJS
public "speedFactor"(speedFactor: float): $ISupportExtendedProperties$ExtendedPropertiesJS
public "strength"(strength: float): $ISupportExtendedProperties$ExtendedPropertiesJS
public "strength"(destroyTime: float, explosionResistance: float): $ISupportExtendedProperties$ExtendedPropertiesJS
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/addons/firmalife/recipe/js/$VatRecipeJS" {
import { $OutputFluid$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid"
import { $InputItem$$Type } from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import { $FluidStackIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidStackIngredient"
import { $ItemStackProviderJS$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS"
import { $TFCProviderRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCProviderRecipeJS"
import { $OutputItem$$Type } from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export class $VatRecipeJS extends $TFCProviderRecipeJS {
constructor()

public "getMod"(): string
public "inputFluid"(inputFluid: $FluidStackIngredient$$Type): $VatRecipeJS
public "inputItem"(inputItem: $InputItem$$Type): $VatRecipeJS
public "inputs"(inputItem: $InputItem$$Type, inputFluid: $FluidStackIngredient$$Type): $VatRecipeJS
public "jar"(outputItem: $OutputItem$$Type): $VatRecipeJS
public "length"(length: integer): $VatRecipeJS
public "outputFluid"(outputFluid: $OutputFluid$$Type): $VatRecipeJS
public "outputItem"(outputProvider: $ItemStackProviderJS$$Type): $VatRecipeJS
public "outputs"(itemOutput: $ItemStackProviderJS$$Type, outputFluid: $OutputFluid$$Type): $VatRecipeJS
public "temperature"(temperature: float): $VatRecipeJS
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$AnimalProductEventJS" {
import { $TFCAnimalProperties } from "packages/net/dries007/tfc/common/entities/livestock/$TFCAnimalProperties"
import { $PlayerEventJS } from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import { $AnimalProductEvent$$Type } from "packages/net/dries007/tfc/util/events/$AnimalProductEvent"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FluidStackJS, $FluidStackJS$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

/**
 * This event is fired whenever a TFC cow is milked or sheep is sheared.
 * Cancelling this event prevents the default behaviour, which is controlled
 * by the entity's implementation
 */
export class $AnimalProductEventJS extends $PlayerEventJS {
constructor(event: $AnimalProductEvent$$Type)

/** Returns the animal the product comes from */
public "getAnimal"(): $Entity
/** Returns TFC animal properties of the animal */
public "getAnimalProperties"(): $TFCAnimalProperties
public "getBlock"(): $BlockContainerJS
/** Returns the fluid product of the event, may be empty if the product is an item */
public "getFluidProduct"(): $FluidStackJS
/** Returns the item product of the event, may be empty if the product is a fluid */
public "getItemProduct"(): $ItemStack
/** Returns the 'too' used to get a product, either a bucket or shears */
public "getTool"(): $ItemStack
/** How much 'wear' the animal will take from the event */
public "getUses"(): integer
/** Returns true if the event's product is an item and not a fluid */
public "isItemProduct"(): boolean
/** Sets the fluid product, attempting to use this on an event originally producing an item will void the product */
public "setFluidProduct"(fluid: $FluidStackJS$$Type): void
/** Sets the item product, attempting to use this on an event originally producing a fluid will void the product */
public "setItemProduct"(item: $ItemStack$$Type): void
/** Sets how much 'wear' the animal will take from the event */
public "setUses"(uses: integer): void
get "animal"(): $Entity
get "animalProperties"(): $TFCAnimalProperties
get "block"(): $BlockContainerJS
get "fluidProduct"(): $FluidStackJS
get "itemProduct"(): $ItemStack
get "tool"(): $ItemStack
get "uses"(): integer
get "itemProduct"(): boolean
set "fluidProduct"(value: $FluidStackJS$$Type)
set "itemProduct"(value: $ItemStack$$Type)
set "uses"(value: integer)
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$ToolItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ToolItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
public "createObject"(): $Item
/** Adds this item to the `tfc:knives` tag and sets its mineable blocks tag to `tfc:mineable_with_knife` */
public "knife"(): $ToolItemBuilder
/** sets the block tag that the tool can properly dig at full speed */
public "mineableBlocksTag"(blockTag: $ResourceLocation$$Type): $ToolItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IDataConstructor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDataConstructor {
}

export namespace $IDataConstructor {
const probejs$$marker: never
}
export abstract class $IDataConstructor$$Static implements $IDataConstructor {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$DefaultCropBlockBuilder" {
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $AbstractCropBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$AbstractCropBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $DefaultCropBlockBuilder extends $AbstractCropBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Block
public "createProperties"(): $BlockBehaviour$Properties
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$StartFireEventJS" {
import { $PlayerEventJS } from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $StartFireEvent$$Type } from "packages/net/dries007/tfc/util/events/$StartFireEvent"

/** This event is used for lighting things with fire. It can be cancelled to handle lighting of an external device or source */
export class $StartFireEventJS extends $PlayerEventJS {
constructor(event: $StartFireEvent$$Type)

/** Returns the level and position of the event */
public "getBlock"(): $BlockContainerJS
/** Returns the item used to start the fire */
public "getItem"(): $ItemStack
/** Returns the targeted face of the event */
public "getTargetedFace"(): $Direction
/** Returns true if fire created is considered 'strong' */
public "isStrong"(): boolean
get "block"(): $BlockContainerJS
get "item"(): $ItemStack
get "targetedFace"(): $Direction
get "strong"(): boolean
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$Noise3DExtension" {
import { $Noise2D, $Noise2D$$Type } from "packages/net/dries007/tfc/world/noise/$Noise2D"
import { $Noise3D } from "packages/net/dries007/tfc/world/noise/$Noise3D"

export interface $Noise3DExtension {
/** Dissolves this `Noise3D` to a `Noise2D` by using the provided `Noise2D` as the y-value */
"dissolve"(yNoise: $Noise2D$$Type): $Noise2D
/** Rotate this noise around the x-axis */
"rotateX"(angle: double): $Noise3D
/** Rotate this noise around the y-axis */
"rotateY"(angle: double): $Noise3D
/** Rotate this noise around the z-axis */
"rotateZ"(angle: double): $Noise3D
/** Swap the x and y coordinates */
"transposeXY"(): $Noise3D
/** Swap the x and z coordinates */
"transposeXZ"(): $Noise3D
/** Swap the y and z coordinates */
"transposeYZ"(): $Noise3D
}

export namespace $Noise3DExtension {
const probejs$$marker: never
}
export abstract class $Noise3DExtension$$Static implements $Noise3DExtension {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$LogBlockBuilder" {
import { $ExtendedPropertiesShapedBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesShapedBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $LogBlockBuilder extends $ExtendedPropertiesShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type, stripped: $LogBlockBuilder$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/** If the item model should default to the block model, like vanilla logs */
public "useFullBlockForItemModel"(): $LogBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$GearBoxBlockBuilder$GearBoxModelType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $GearBoxBlockBuilder$GearBoxModelType extends $Enum<$GearBoxBlockBuilder$GearBoxModelType> {
static readonly "FACE": $GearBoxBlockBuilder$GearBoxModelType
static readonly "PORT": $GearBoxBlockBuilder$GearBoxModelType
static readonly "VALUES": $GearBoxBlockBuilder$GearBoxModelType[]

public "port"(): boolean
public static "valueOf"(name: string): $GearBoxBlockBuilder$GearBoxModelType
public static "values"(): $GearBoxBlockBuilder$GearBoxModelType[]
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$PropickItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $PropickItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
public "createObject"(): $Item
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$ItemStackProviderBindings" {
import { $Enum } from "packages/java/lang/$Enum"
import { $ItemStackProviderJS } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackProviderBindings extends $Enum<$ItemStackProviderBindings> {
static readonly "INSTANCE": $ItemStackProviderBindings

/** Creates an empty item stack provider with the 'tfc:copy_input' modifier automatically applied */
public "copyInput"(): $ItemStackProviderJS
/** Creates an empty item stack provider with the given item stack modifiers and with the 'tfc:copy_input' modifier automatically applied */
public "copyInput"(modifiers: any): $ItemStackProviderJS
/** Creates an empty item stack provider with the given item stack modifiers */
public "empty"(modifiers: any): $ItemStackProviderJS
/** Creates an empty item stack provider */
public "empty"(): $ItemStackProviderJS
/** Creates an item stack provider based on the provided item stack */
public "of"(itemStack: $ItemStack$$Type): $ItemStackProviderJS
/**
 * Creates an item stack provider based on the provided item stack and item stack modifiers
 * 
 * @param itemStack - The item stack
 * @param modifiers - The item stack modifiers to be applied to the item stack
 */
public "of"(itemStack: $ItemStack$$Type, modifiers: any): $ItemStackProviderJS
public static "valueOf"(name: string): $ItemStackProviderBindings
public static "values"(): $ItemStackProviderBindings[]
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$CreateGlassOperationsEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $CustomGlassOperations$StackSupplier$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$CustomGlassOperations$StackSupplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $GlassOperation } from "packages/net/dries007/tfc/common/capabilities/glass/$GlassOperation"

/**
 * Fired early on in loading to add new glass operations to the game
 * 
 * Important: operations must be added in the same order and with the same names for client
 * and server, otherwise the connection will be refused
 */
export class $CreateGlassOperationsEventJS extends $EventJS {
constructor(startingIndex: integer, invoker: $BiFunction$$Type<string, integer, $GlassOperation>)

/**
 * Creates a new glass operation
 * 
 * @param name - The name of the operation, will be prepended with 'KUBEJS_'
 * @param displayStack - A supplier for an item stack that will be used to represent the operation in JEI
 * @param customSound - The registry id of a sound to play, defaults to 'minecraft:block.anvil.use'
 */
public "create"(name: string, displayStack: $CustomGlassOperations$StackSupplier$$Type, customSound: $ResourceLocation$$Type): void
/**
 * Creates a new glass operation
 * 
 * @param name - The name of the operation, will be prepended with 'KUBEJS_'
 * @param displayStack - A supplier for an item stack that will be used to represent the operation in JEI
 */
public "create"(name: string, displayStack: $CustomGlassOperations$StackSupplier$$Type): void
/**
 * Creates a new glass operation
 * 
 * @param name - The name of the operation, will be prepended with 'KUBEJS_'
 * @param displayStack - A supplier for an item stack that will be used to represent the operation in JEI
 * @param customSound - The registry id of a sound to play, defaults to 'minecraft:block.anvil.use'
 * @param minHeat - The minimum temperature required for the operation to be enacted, defaults to 480°C
 */
public "create"(name: string, displayStack: $CustomGlassOperations$StackSupplier$$Type, customSound: $ResourceLocation$$Type, minHeat: float): void
/**
 * Creates a new glass operation
 * 
 * @param name - The name of the operation, will be prepended with 'KUBEJS_'
 */
public "create"(name: string): void
/**
 * Creates a new glass operation and associates it with an item for use in powder bowls and the add powder ISP modifier
 * 
 * @param powderItemId - The registry id of the powder item to associate with the created operation. Requires the `tfc:powders` tag in order to be put into a bowl
 * @param name - The name of the operation, will be prepended with 'KUBEJS_'
 * @param customSound - The registry id of a sound to play, defaults to 'minecraft:block.anvil.use'
 * @param minHeat - The minimum temperature required for the operation to be enacted, defaults to 480°C
 */
public "createPowder"(powderItemId: $ResourceLocation$$Type, name: string, customSound: $ResourceLocation$$Type, minHeat: float): void
/**
 * Creates a new glass operation and associates it with an item for use in powder bowls and the add powder ISP modifier
 * 
 * @param powderItemId - The registry id of the powder item to associate with the created operation. Requires the `tfc:powders` tag in order to be put into a bowl
 * @param name - The name of the operation, will be prepended with 'KUBEJS_'
 */
public "createPowder"(powderItemId: $ResourceLocation$$Type, name: string): void
/**
 * Creates a new glass operation and associates it with an item for use in powder bowls and the add powder ISP modifier
 * 
 * @param powderItemId - The registry id of the powder item to associate with the created operation. Requires the `tfc:powders` tag in order to be put into a bowl
 * @param name - The name of the operation, will be prepended with 'KUBEJS_'
 * @param customSound - The registry id of a sound to play, defaults to 'minecraft:block.anvil.use'
 */
public "createPowder"(powderItemId: $ResourceLocation$$Type, name: string, customSound: $ResourceLocation$$Type): void
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/$LayeredArea" {
import { $SourceLayer$$Type } from "packages/net/dries007/tfc/world/layer/framework/$SourceLayer"
import { $MergeLayer$$Type } from "packages/net/dries007/tfc/world/layer/framework/$MergeLayer"
import { $AdjacentTransformLayer$$Type } from "packages/net/dries007/tfc/world/layer/framework/$AdjacentTransformLayer"
import { $AreaFactory$$Type } from "packages/net/dries007/tfc/world/layer/framework/$AreaFactory"
import { $TransformLayer$$Type } from "packages/net/dries007/tfc/world/layer/framework/$TransformLayer"
import { $MutableObject$$Type } from "packages/org/apache/commons/lang3/mutable/$MutableObject"
import { $ConcurrentArea } from "packages/net/dries007/tfc/world/layer/framework/$ConcurrentArea"

export class $LayeredArea extends $ConcurrentArea<integer> {
constructor(source: $SourceLayer$$Type, seed: long)
constructor(factory: $MutableObject$$Type<$AreaFactory$$Type>)

/**
 * Applies an arbitrary transform layer to this area
 * 
 * @param transformer - The transformer function, has access to the values of adjacent area values, but not the area itself
 * @param seed - The seed to use
 */
public "adjacentTransform"(transformer: $AdjacentTransformLayer$$Type, seed: long): $LayeredArea
/** Gets the value at the given x-z point */
public "getAt"(x: integer, z: integer): integer
/**
 * Merges this LayeredArea with the other LayeredArea using the provided merge function
 * 
 * @param merger - The merging function
 * @param otherLayeredArea - The LayeredArea to merge with this one
 * @param seed - The seed to use
 */
public "merge"(merger: $MergeLayer$$Type, otherLayeredArea: $LayeredArea$$Type, seed: long): $LayeredArea
/** Applies a smoothing layer to this area */
public "smooth"(seed: long): $LayeredArea
/**
 * Applies an arbitrary transform layer to this area
 * 
 * @param transformer - The transformer function
 * @param The seed to use - 
 */
public "transform"(transformer: $TransformLayer$$Type, arg1: long): $LayeredArea
/**
 * Applies a zoom layer to this area, effectively doubling the 'resolution'
 * 
 * @param fuzzy - If the zoom should be fuzzy (smooth boundaries)
 * @param seed - The seed to use
 */
public "zoom"(fuzzy: boolean, seed: long): $LayeredArea
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$NamedRegistryWood" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $WoodType } from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import { $MapColor } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $TFCTreeGrower } from "packages/net/dries007/tfc/world/feature/tree/$TFCTreeGrower"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Wood$BlockType$$Type } from "packages/net/dries007/tfc/common/blocks/wood/$Wood$BlockType"
import { $RegistryWood, $RegistryWood$$Type } from "packages/net/dries007/tfc/util/registry/$RegistryWood"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockSetType } from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $NamedRegistryWood implements $RegistryWood {
constructor(mod: string, parent: $RegistryWood$$Type)

/** The vertical coordinate (from 0-255) on the foliage_fall colormap for this wood type's leaves. */
public "autumnIndex"(): integer
/** The MapColor of the wood's bark */
public "barkColor"(): $MapColor
/** The number of days it takes for the wood's sapling to grow */
public "daysToGrow"(): integer
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
/** A block of this wood, of the provided type */
public "getBlock"(type: $Wood$BlockType$$Type): $Supplier<$Block>
/** The BlockSetType this wood uses */
public "getBlockSet"(): $BlockSetType
/** The mod this wood originates from */
public "getMod"(): string
public "getSerializedName"(): string
/** The WoodType the wood uses */
public "getVanillaWoodType"(): $WoodType
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
/** The TFCTreeGrower of the wood */
public "tree"(): $TFCTreeGrower
/** The MapColor of the wood */
public "woodColor"(): $MapColor
get "blockSet"(): $BlockSetType
get "mod"(): string
get "serializedName"(): string
get "vanillaWoodType"(): $WoodType
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $PlacedFeatureProperties$Climate, $PlacedFeatureProperties$Climate$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties$Climate"
import { $PlacedFeatureProperties$Flatness$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties$Flatness"

export class $PlacedFeatureProperties {
constructor(name: string)

public static "buildClimate"(c: $Consumer$$Type<$PlacedFeatureProperties$Climate$$Type>): $PlacedFeatureProperties$Climate
/**
 * Adds a 'tfc:climate' placement modifier
 * 
 * @param climate - The climate placement properties
 */
public "climate"(climate: $Consumer$$Type<$PlacedFeatureProperties$Climate$$Type>): $PlacedFeatureProperties
/**
 * Adds a 'tfc:flat_enough' placement modifier
 * 
 * @param flatness - The flatness placement properties
 */
public "flatEnough"(flatness: $Consumer$$Type<$PlacedFeatureProperties$Flatness$$Type>): $PlacedFeatureProperties
/**
 * Adds a 'minecraft:heightmap' placement modifier
 * 
 * @param heightMap - Sets the 'heightmap' property of the modifier
 */
public "heightMap"(heightMap: $Heightmap$Types$$Type): $PlacedFeatureProperties
/** Adds a 'minecraft:in_square' placement modifier */
public "inSquare"(): $PlacedFeatureProperties
/** Adds the provided json object to the list of placement modifiers */
public "jsonPlacement"(json: $JsonObject$$Type): $PlacedFeatureProperties
/**
 * Adds a 'tfc:near_water' placement modifier
 * 
 * @param radius - The 'radius' property of the modifier
 */
public "nearWater"(radius: integer): $PlacedFeatureProperties
/**
 * Adds a 'minecraft:rarity_filter' placement modifier
 * 
 * @param chance - Sets the 'chance' property of the modifier
 */
public "rarityFilter"(chance: integer): $PlacedFeatureProperties
/**
 * Adds a 'tfc:shallow_water' placement modifier
 * 
 * @param depth - the 'max_depth' property of the modifier
 */
public "shallowWater"(depth: integer): $PlacedFeatureProperties
/** Adds a placement with the provided type and no extra arguments */
public "simplePlacement"(type: string): $PlacedFeatureProperties
/** Adds the 'tfc:biome' placement modifier */
public "tfcBiome"(): $PlacedFeatureProperties
public "toJson"(): $JsonObject
/** Adds a 'tfc:underground' placement modifier */
public "underground"(): $PlacedFeatureProperties
/**
 * Adds a 'tfc:volcano' placement modifier
 * 
 * @param center - If true, the feature will be placed at the exact center of the volcano and disregard the 'distance' property
 * @param distance - Sets the distance, in the range [0, 1], from the center of a volcano needed to generate
 */
public "volcano"(center: boolean, distance: float): $PlacedFeatureProperties
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/addons/precpros/item/$ProspectorItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ProspectorItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
public "cooldown"(cooldown: integer): $ProspectorItemBuilder
public "displacement"(supplier: $Supplier$$Type<integer>): $ProspectorItemBuilder
public "displacement"(i: integer): $ProspectorItemBuilder
public "primaryRadius"(i: integer): $ProspectorItemBuilder
public "primaryRadius"(supplier: $Supplier$$Type<integer>): $ProspectorItemBuilder
public "prospectTag"(blockTag: $ResourceLocation$$Type): $ProspectorItemBuilder
public "secondaryRadius"(i: integer): $ProspectorItemBuilder
public "secondaryRadius"(supplier: $Supplier$$Type<integer>): $ProspectorItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$RawRockBlockBuilder" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ShapedBlockBuilder } from "packages/dev/latvian/mods/kubejs/block/custom/$ShapedBlockBuilder"

export class $RawRockBlockBuilder extends $ShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

/** Sets the rock type component to that of felsic igneous extrusive rocks */
public "felsicIgneousExtrusive"(): $RawRockBlockBuilder
/** Sets the rock type component to that of felsic igneous intrusive */
public "felsicIgneousIntrusive"(): $RawRockBlockBuilder
/** Sets the rock type component to that of intermediate igneous extrusive rocks */
public "intermediateIgneousExtrusive"(): $RawRockBlockBuilder
/** Sets the rock type component to that of intermediate igneous intrusive rocks */
public "intermediateIgneousIntrusive"(): $RawRockBlockBuilder
/** Sets the rock type component to that of mafic igneous extrusive rocks */
public "maficIgneousExtrusive"(): $RawRockBlockBuilder
/** Sets the rock type component to that of mafic igneous intrusive rocks */
public "maficIgneousIntrusive"(): $RawRockBlockBuilder
/** Sets the rock type component to that of metamorphic rocks */
public "metamorphic"(): $RawRockBlockBuilder
/** Determines if the block is considered to be naturally supported for the purposes of spawning particles indicating unsupported regions */
public "naturallySupported"(supported: boolean): $RawRockBlockBuilder
/** Sets the tooltip component indicating the block's rock type */
public "rockTypeTooltip"(comp: $Component$$Type): $RawRockBlockBuilder
/** Sets the rock type component to that of sedimentary rocks */
public "sedimentary"(): $RawRockBlockBuilder
public "textureAll"(tex: string): $RawRockBlockBuilder
/** Makes the default model generator use the 'side' and 'end' textures instead of just the 'end' */
public "uniqueSideTextures"(): $RawRockBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$KubeJSItemStackModifier$WithInventoryApplicator" {
import { $KubeJSItemStackModifier$ModifierApplicator } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$KubeJSItemStackModifier$ModifierApplicator"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"

export interface $KubeJSItemStackModifier$WithInventoryApplicator extends $KubeJSItemStackModifier$ModifierApplicator {
/**
 * Applies a modifier to the stack
 * 
 * @param stack - The current output stack, may be modified. A no-op modifier would just return this stack
 * @param input - The provided input stack. Do not modify this stack
 * @param inventory - An iterable view of the inventory's items
 */
"apply"(stack: $ItemStack$$Type, input: $ItemStack$$Type, inventory: $Iterable$$Type<$ItemStack$$Type>): $ItemStack
"apply"(output: $ItemStack$$Type, input: $ItemStack$$Type): $ItemStack
}

export namespace $KubeJSItemStackModifier$WithInventoryApplicator {
const probejs$$marker: never
}
export abstract class $KubeJSItemStackModifier$WithInventoryApplicator$$Static implements $KubeJSItemStackModifier$WithInventoryApplicator {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$FissureDecoration" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $WorldGenUtils$BlockToWeightedBlockStateMapEntry, $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToWeightedBlockStateMapEntry"
import { $Record } from "packages/java/lang/$Record"

export class $WorldGenUtils$FissureDecoration extends $Record {
constructor(blocks: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], rarity: integer, radius: integer, count: integer)

public "blocks"(): $WorldGenUtils$BlockToWeightedBlockStateMapEntry[]
public "count"(): integer
public "radius"(): integer
public "rarity"(): integer
public "toJson"(): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties$Climate" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $ForestType$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ForestType"

export class $PlacedFeatureProperties$Climate {
constructor()

/** Determines if the temperature and rainfall requirements will be probabilistic relative to the center point */
public "fuzzy"(b: boolean): $PlacedFeatureProperties$Climate
/** Sets the maximum forest type of the climate decorator. Accepts 'none', 'sparse', 'edge', 'normal', and 'old_growth' */
public "maxForest"(type: $ForestType$$Type): $PlacedFeatureProperties$Climate
/** Sets the maximum rainfall of the climate decorator */
public "maxRain"(f: float): $PlacedFeatureProperties$Climate
/** Sets the maximum temperature of the climate decorator */
public "maxTemp"(f: float): $PlacedFeatureProperties$Climate
/** Sets the minimum forest type of the climate decorator. Accepts 'none', 'sparse', 'edge', 'normal', and 'old_growth' */
public "minForest"(type: $ForestType$$Type): $PlacedFeatureProperties$Climate
/** Sets the minimum rainfall of the climate decorator */
public "minRain"(f: float): $PlacedFeatureProperties$Climate
/** Sets the minimum temperature of the climate decorator */
public "minTemp"(f: float): $PlacedFeatureProperties$Climate
public "toJson"(): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$DeadWallTorchBuilder" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $TFCTorchBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$TFCTorchBlockBuilder"

export class $DeadWallTorchBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $TFCTorchBlockBuilder$$Type)

public "createObject"(): $Block
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$SimplePotRecipeJS" {
import { $OutputFluid$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid"
import { $ItemStackProviderJS$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS"
import { $ISupportProviderOutput } from "packages/com/notenoughmail/kubejs_tfc/recipe/$ISupportProviderOutput"
import { $PotRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$PotRecipeJS"

export class $SimplePotRecipeJS extends $PotRecipeJS implements $ISupportProviderOutput {
constructor()

/** Sets the recipe's output fluid */
public "fluidOutput"(fluidOutput: $OutputFluid$$Type): $SimplePotRecipeJS
public "getMod"(): string
/** Sets the items that should be left in the pot after the recipe completes, accepts up to 5 */
public "itemOutput"(itemOutput: $ItemStackProviderJS$$Type[]): $SimplePotRecipeJS
/** Sets the recipe's output items and fluid */
public "outputs"(itemOutput: $ItemStackProviderJS$$Type[], fluidOutput: $OutputFluid$$Type): $SimplePotRecipeJS
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$TFCPathBlockBuilder" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $TFCDirtBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$TFCDirtBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $TFCPathBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $TFCDirtBlockBuilder$$Type)

/** Makes the path block use a unique texture for the dirt part of its texture, by default uses the texture of its parent dirt block */
public "uniqueDirtTexture"(): $TFCPathBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$KubeJSItemStackModifier$SimpleApplicator" {
import { $KubeJSItemStackModifier$ModifierApplicator } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$KubeJSItemStackModifier$ModifierApplicator"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $KubeJSItemStackModifier$SimpleApplicator extends $KubeJSItemStackModifier$ModifierApplicator {
/**
 * Applies a modifier to the stack
 * 
 * @param stack - The current output stack, may be modified. A no-op modifier would just return this stack
 */
"apply"(stack: $ItemStack$$Type): $ItemStack
"apply"(output: $ItemStack$$Type, input: $ItemStack$$Type): $ItemStack
}

export namespace $KubeJSItemStackModifier$SimpleApplicator {
const probejs$$marker: never
}
export abstract class $KubeJSItemStackModifier$SimpleApplicator$$Static implements $KubeJSItemStackModifier$SimpleApplicator {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/moss/$MossSpreadingStairBuilder" {
import { $StairBlockBuilder } from "packages/dev/latvian/mods/kubejs/block/custom/$StairBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MossSpreadingStairBuilder extends $StairBlockBuilder {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/internal/$ILeafBuilder" {
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export interface $ILeafBuilder extends $Supplier<$Block> {
"get"(): $Block
"noDynamicTinting"(): $ILeafBuilder
}

export namespace $ILeafBuilder {
const probejs$$marker: never
}
export abstract class $ILeafBuilder$$Static implements $ILeafBuilder {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildFoodItemData" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $BuildFoodItemData {
constructor(ingredient: $Ingredient$$Type)

public static "create"(ingredient: $Ingredient$$Type, consumer: $Consumer$$Type<$BuildFoodItemData$$Type>): $JsonObject
/** Sets how much dairy nutrient this food restores, defaults to 0 */
public "dairy"(dairy: float): $BuildFoodItemData
/** Sets how quickly this food decays, defaults to 1. A higher number indicates a faster decay value */
public "decayModifier"(modifier: float): $BuildFoodItemData
/** Sets how much fruit nutrient this food restores, defaults to 0 */
public "fruit"(fruit: float): $BuildFoodItemData
/** Sets how much grain nutrient this food restores, defaults to 0 */
public "grain"(grain: float): $BuildFoodItemData
/** Sets how much hunger this food restores, defaults to 4. A full hunger bar is equal to 20 */
public "hunger"(hunger: integer): $BuildFoodItemData
/** Sets how much protein nutrient this food restores, defaults to 0 */
public "protein"(protein: float): $BuildFoodItemData
/** Sets how much saturation this food restores, defaults to 0 */
public "saturation"(saturation: float): $BuildFoodItemData
public "toJson"(): $JsonObject
/** Sets the food definition to be a special type, either 'dynamic', or 'dynamic_bowl'. If set, none of the other values should be set */
public "type"(type: string): $BuildFoodItemData
/** Sets how much vegetables nutrient this food restores, defaults to 0 */
public "vegetables"(vegetables: float): $BuildFoodItemData
/** Sets how much water this food restores, defaults to 0. A full water bar is equal to 100 */
public "water"(water: float): $BuildFoodItemData
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$TFCLeavesBlockBuilder" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $FallenLeavesBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$FallenLeavesBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ILeafBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ILeafBuilder"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $TFCLeavesBlockBuilder extends $ExtendedPropertiesBlockBuilder implements $ILeafBuilder {
constructor(i: $ResourceLocation$$Type)

/** Sets the vertical coordinate, in the range [0, 255], on TFC's `foliage_fall` colormap for the leaves */
public "autumnIndex"(index: integer): $TFCLeavesBlockBuilder
public "createObject"(): $Block
public "createProperties"(): $BlockBehaviour$Properties
/** Sets the properties of the fallen leaves block. May be null to not have fallen leaves */
public "fallenLeaves"(fallenLeaves: $Consumer$$Type<$FallenLeavesBlockBuilder$$Type>): $TFCLeavesBlockBuilder
public "get"(): $Block
public "noDynamicTinting"(): $ILeafBuilder
/** Determines if the tint of the leaves should change seasonally */
public "seasonalColors"(seasonalColors: boolean): $TFCLeavesBlockBuilder
/** Sets the twig block to be placed when a natural leaf is broken */
public "twig"(twigId: $ResourceLocation$$Type): $TFCLeavesBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToWeightedBlockStateMapEntry" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Record } from "packages/java/lang/$Record"

export class $WorldGenUtils$BlockToWeightedBlockStateMapEntry extends $Record {
constructor(blocks: string[], blockStates: string[])

public "blockStates"(): string[]
public "blocks"(): string[]
public static "toJson"(obj: $JsonObject$$Type, key: string, entries: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[]): void
public "toJson"(): $JsonObject
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$RockSpikeBlockBuilder$SpikeModelType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $RockSpikeBlockBuilder$SpikeModelType extends $Enum<$RockSpikeBlockBuilder$SpikeModelType> {
static readonly "BASE": $RockSpikeBlockBuilder$SpikeModelType
static readonly "MIDDLE": $RockSpikeBlockBuilder$SpikeModelType
static readonly "TIP": $RockSpikeBlockBuilder$SpikeModelType
static readonly "VALUES": $RockSpikeBlockBuilder$SpikeModelType[]

public "base"(): boolean
public "middle"(): boolean
public "tip"(): boolean
public static "valueOf"(name: string): $RockSpikeBlockBuilder$SpikeModelType
public static "values"(): $RockSpikeBlockBuilder$SpikeModelType[]
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$ClutchBlockBuilder" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $ClutchBlockBuilder$ClutchModelType$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$ClutchBlockBuilder$ClutchModelType"
import { $AxleBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$AxleBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClutchBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $AxleBlockBuilder$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/**
 * Sets the model generation of the clutch block, accepts a `BiConsumer` of a `ClutchModelType` and a model generator.
 * The generator is unique for each type.
 * 
 * There are 2 types: `POWERED` and `UNPOWERED` with a `.powered()` method which returns a boolean; true if the
 * type in operation is `POWERED`.
 */
public "models"(models: $BiConsumer$$Type<$ClutchBlockBuilder$ClutchModelType$$Type, $ModelGenerator$$Type>): $ClutchBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$Trunk" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Record } from "packages/java/lang/$Record"

export class $WorldGenUtils$Trunk extends $Record {
constructor(state: string, minHeight: integer, maxHeight: integer, wide: boolean)

public "maxHeight"(): integer
public "minHeight"(): integer
public "state"(): string
public "toJson"(): $JsonObject
public "wide"(): boolean
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$JarItemBuilder" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $ItemBuilder } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $JarItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Item
/** Sets the model to be used when this jar item is placed in a jar shelf */
public "placedModel"(id: $ResourceLocation$$Type): $JarItemBuilder
/** Sets the jar to not have a crafting remainder */
public "withoutCraftingRemainder"(): $JarItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$RegisterRepresentativeBlocksEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

/**
 * When prospecting, TFC uses representative blocks to group similar
 * blocks together to get a better count of what's nearby
 * 
 * This allows new representatives to be registered
 */
export class $RegisterRepresentativeBlocksEventJS extends $EventJS {
constructor()

/**
 * Registers a new representative block
 * 
 * @param representative - The registry name of a block, the representative
 * @param blocks - A list of block registry names, the blocks to be represented
 */
public "registerRepresentative"(representative: $Block$$Type, ...blocks: $Block$$Type[]): void
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$SealedBarrelRecipeJS" {
import { $OutputFluid$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid"
import { $InputItem$$Type } from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import { $BarrelRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$BarrelRecipeJS"
import { $FluidStackIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidStackIngredient"
import { $ItemStackProviderJS$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS"

export class $SealedBarrelRecipeJS extends $BarrelRecipeJS {
constructor()

public "getMod"(): string
/** Sets the recipe's input FluidStackIngredient */
public "inputFluid"(inputFluid: $FluidStackIngredient$$Type): $SealedBarrelRecipeJS
/** Sets the recipe's input ingredient */
public "inputItem"(inputItem: $InputItem$$Type): $SealedBarrelRecipeJS
/** Sets the recipe's input ingredient and FluidStackIngredient */
public "inputs"(inputItem: $InputItem$$Type, inputFluid: $FluidStackIngredient$$Type): $SealedBarrelRecipeJS
/**
 * Sets the ItemStackProvider which will be applied whenever the barrel is sealed
 * 
 * Can be used to apply special effects to the item in the barrel while sealed
 */
public "onSeal"(onSeal: $ItemStackProviderJS$$Type): $SealedBarrelRecipeJS
/**
 * Sets the ItemStackProvider which will be applied whenever the barrel is unsealed
 * 
 * Can be used to remove special effects from the item in the barrel while sealed
 */
public "onUnseal"(onUnseal: $ItemStackProviderJS$$Type): $SealedBarrelRecipeJS
/** Sets the recipe's output fluid */
public "outputFluid"(outputFluid: $OutputFluid$$Type): $SealedBarrelRecipeJS
/** Sets the recipe's output ItemStackProvider */
public "outputItem"(outputItem: $ItemStackProviderJS$$Type): $SealedBarrelRecipeJS
/** Sets the recipe's output ItemStackProvider and fluid */
public "outputs"(outputItem: $ItemStackProviderJS$$Type, outputFluid: $OutputFluid$$Type): $SealedBarrelRecipeJS
/** Sets the recipe's onSeal and onUnseal ItemStackProviders */
public "seal"(onSeal: $ItemStackProviderJS$$Type, onUnseal: $ItemStackProviderJS$$Type): $SealedBarrelRecipeJS
/**
 * Sets the sound event the barrel will play when the recipe finishes
 * 
 * Use '/kubejs dump_registry minecraft:sound_event' in-game to get a full list of possible values
 */
public "sound"(sound: string): $SealedBarrelRecipeJS
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$HeatingRecipeJS" {
import { $OutputFluid$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid"
import { $ItemStackProviderJS$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS"
import { $TFCProviderRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCProviderRecipeJS"

export class $HeatingRecipeJS extends $TFCProviderRecipeJS {
constructor()

/** Sets the item output's chance */
public "chance"(chance: float): $HeatingRecipeJS
public "getMod"(): string
/** Sets the recipe's output fluid */
public "resultFluid"(resultFluid: $OutputFluid$$Type): $HeatingRecipeJS
/** Sets the recipe's output ItemStackProvider, implicitly has the 'tfc:copy_heat' modifier added */
public "resultItem"(resultItem: $ItemStackProviderJS$$Type): $HeatingRecipeJS
/** Sets the recipe's output ItemStackProvider and fluid */
public "results"(resultItem: $ItemStackProviderJS$$Type, resultFluid: $OutputFluid$$Type): $HeatingRecipeJS
/** Determines if the recipe will consider the durability of an item when melting into a fluid */
public "useDurability"(useDurability: boolean): $HeatingRecipeJS
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$AqueductBlockBuilder" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $AqueductBlockBuilder$AqueductModelPart$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$AqueductBlockBuilder$AqueductModelPart"
import { $MultipartShapedBlockBuilder } from "packages/dev/latvian/mods/kubejs/block/custom/$MultipartShapedBlockBuilder"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $AqueductBlockBuilder extends $MultipartShapedBlockBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 * Sets the fluids that the aqueduct may hold
 * 
 * @param fluids - The registry names of fluids the aqueduct can hold. Two liquids with different namespaces but same paths will not be accepted, `minecraft:empty` will automatically be added
 */
public "allowedFluids"(fluids: $ResourceLocation$$Type[]): $AqueductBlockBuilder
public "createObject"(): $Block
/**
 * Sets the model generation of the aqueduct, accepts a `BiConsumer` of a `AqueductModelPart` and a model generator.
 * The generator is unique for each part.
 * 
 * There are 5 parts: `BASE`, `NORTH`, `SOUTH`, `EAST`, and `WEST` all with `.base()`, `.north()`, `.south()`,
 * `.east()`, and `.west()` methods which return true if the part in operation is the one indicated by the method.
 */
public "models"(models: $BiConsumer$$Type<$AqueductBlockBuilder$AqueductModelPart$$Type, $ModelGenerator$$Type>): $AqueductBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$ConnectedGrassBlockBuilder$GrassModelPart" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ConnectedGrassBlockBuilder$GrassModelPart extends $Enum<$ConnectedGrassBlockBuilder$GrassModelPart> {
static readonly "BOTTOM": $ConnectedGrassBlockBuilder$GrassModelPart
static readonly "SIDE": $ConnectedGrassBlockBuilder$GrassModelPart
static readonly "SNOWY_SIDE": $ConnectedGrassBlockBuilder$GrassModelPart
static readonly "SNOWY_TOP": $ConnectedGrassBlockBuilder$GrassModelPart
static readonly "TOP": $ConnectedGrassBlockBuilder$GrassModelPart
static readonly "VALUES": $ConnectedGrassBlockBuilder$GrassModelPart[]
readonly "bottom": boolean
readonly "side": boolean
readonly "snowy": boolean
readonly "top": boolean

public static "valueOf"(name: string): $ConnectedGrassBlockBuilder$GrassModelPart
public static "values"(): $ConnectedGrassBlockBuilder$GrassModelPart[]
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/moss/$MossGrowingBlockBuilder" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $MossGrowingCallback, $MossGrowingCallback$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$MossGrowingCallback"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MossGrowingBlockBuilder extends $BlockBuilder {
"mossyBlock": $ResourceLocation

constructor(i: $ResourceLocation$$Type)

public "mossyBlock"(block: $ResourceLocation$$Type): $MossGrowingBlockBuilder
public "mossyConversion"(callback: $MossGrowingCallback$$Type): $MossGrowingBlockBuilder
get "mossGrowth"(): $MossGrowingCallback
set "mossGrowth"(value: $MossGrowingCallback$$Type)
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$LevelPosLong2FloatCallback" {
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $KubeJSClimateModel$LevelPosLong2FloatCallback {
/**
 * @param level - The levelReader
 * @param pos - The position
 * @param calendarTicks - The calendar tick during which the calculation is being made
 */
"getValue"(level: $LevelReader$$Type, pos: $BlockPos$$Type, calendarTicks: long): float
}

export namespace $KubeJSClimateModel$LevelPosLong2FloatCallback {
const probejs$$marker: never
}
export abstract class $KubeJSClimateModel$LevelPosLong2FloatCallback$$Static implements $KubeJSClimateModel$LevelPosLong2FloatCallback {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$RockSettingsEventJS" {
import { $StartupEventJS } from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RockSettings } from "packages/net/dries007/tfc/world/settings/$RockSettings"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

/** Define new rocks which can be referenced in a world preset json */
export class $RockSettingsEventJS extends $StartupEventJS {
constructor()

/**
 * Registers a new rock layer with the given blocks to TFC. Does not add it to the world. This can be used to override existing layers
 * 
 * @param id - The name of the the rock layer
 * @param raw - The registry name of the raw block of the rock layer
 * @param hardened - The registry name of the hardened block of the rock layer
 * @param gravel - The registry name of the gravel block of the rock layer
 * @param cobble - The registry name of the cobble block of the rock layer
 * @param sand - The registry name of the sand block of the rock layer
 * @param sandstone - The registry name of the sandstone block of the rock layer
 * @param spike - The registry name of the spike block of the rock layer, may be null to indicate no spike block
 * @param loose - The registry name of the loose block of the rock layer, may be null to indicate no loose block
 * @param mossyLoose - The registry name of the mossy loose block of the rock layer, may be null to indicate no mossy loose block
 */
public "defineRock"(id: $ResourceLocation$$Type, raw: $Block$$Type, hardened: $Block$$Type, gravel: $Block$$Type, cobble: $Block$$Type, sand: $Block$$Type, sandstone: $Block$$Type, spike: $Block$$Type, loose: $Block$$Type, mossyLoose: $Block$$Type): $RockSettings
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$TFCDirtBlockBuilder" {
import { $TFCPathBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$TFCPathBlockBuilder"
import { $BlockBuilder, $BlockBuilder$$Type } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $TFCFarmlandBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$TFCFarmlandBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ConnectedGrassBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$ConnectedGrassBlockBuilder"
import { $TFCRootedDirtBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/sub/$TFCRootedDirtBlockBuilder"

export class $TFCDirtBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type)

/** Creates and sets the properties of the dirt's farmland block */
public "farmland"(farmland: $Consumer$$Type<$TFCFarmlandBlockBuilder$$Type>): $TFCDirtBlockBuilder
/** Sets the properties of the dirt's grass block */
public "grass"(grass: $Consumer$$Type<$ConnectedGrassBlockBuilder$$Type>): $TFCDirtBlockBuilder
/** Creates and sets the properties of the dirt's mud block */
public "mud"(mud: $Consumer$$Type<$BlockBuilder$$Type>): $TFCDirtBlockBuilder
/** Creates and sets the properties of the dirt's path block */
public "path"(path: $Consumer$$Type<$TFCPathBlockBuilder$$Type>): $TFCDirtBlockBuilder
/** Creates and sets the properties of the dirt's rooted dirt block */
public "rooted"(rooted: $Consumer$$Type<$TFCRootedDirtBlockBuilder$$Type>): $TFCDirtBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$LevelPos2FloatCallback" {
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

/** A callback which takes a LevelReader and a BlockPos and returns a number */
export interface $KubeJSClimateModel$LevelPos2FloatCallback {
/**
 * @param level - The LevelReader
 * @param pos - The position
 */
"getValue"(level: $LevelReader$$Type, pos: $BlockPos$$Type): float
}

export namespace $KubeJSClimateModel$LevelPos2FloatCallback {
const probejs$$marker: never
}
export abstract class $KubeJSClimateModel$LevelPos2FloatCallback$$Static implements $KubeJSClimateModel$LevelPos2FloatCallback {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$HammerItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $HammerItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
/** Sets the texture location used when the hammer is in a trip hammer */
public "metalTexture"(texture: $ResourceLocation$$Type): $HammerItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$CreateChunkDataProviderEventJS$RocksGetter" {
import { $ChunkRockDataCache$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ChunkRockDataCache"
import { $RockLayerSettings$$Type } from "packages/net/dries007/tfc/world/settings/$RockLayerSettings"
import { $RockSettings } from "packages/net/dries007/tfc/world/settings/$RockSettings"

export interface $CreateChunkDataProviderEventJS$RocksGetter {
/**
 * @param x - The x coordinate
 * @param y - The y coordinate
 * @param z - The z coordinate
 * @param surfaceY - The y value of the surface
 * @param cache - A nullable cache of rock layer elevations
 * @param rockLayers - The rock settings defined in the generator
 */
"generate"(x: integer, y: integer, z: integer, surfaceY: integer, cache: $ChunkRockDataCache$$Type, rockLayers: $RockLayerSettings$$Type): $RockSettings
}

export namespace $CreateChunkDataProviderEventJS$RocksGetter {
const probejs$$marker: never
}
export abstract class $CreateChunkDataProviderEventJS$RocksGetter$$Static implements $CreateChunkDataProviderEventJS$RocksGetter {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$SelectClimateModelEventJS" {
import { $ClimateModel, $ClimateModel$$Type } from "packages/net/dries007/tfc/util/climate/$ClimateModel"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SelectClimateModelEvent$$Type } from "packages/net/dries007/tfc/util/events/$SelectClimateModelEvent"
import { $LevelEventJS } from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"

/**
 * An event which is posted while a world is loading or selecting its climate model
 * This provides access to the level, and is fired during world load
 * It is only fired on server, and the climate model will to synced to client automatically
 */
export class $SelectClimateModelEventJS extends $LevelEventJS {
constructor(event: $SelectClimateModelEvent$$Type)

/** The event's climate model */
public "getModel"(): $ClimateModel
/** Returns the name of the event's current model */
public "getModelName"(): $ResourceLocation
/** Sets the event's climate model */
public "setModel"(model: $ClimateModel$$Type): void
get "model"(): $ClimateModel
get "modelName"(): $ResourceLocation
set "model"(value: $ClimateModel$$Type)
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$TFCWorldgenDataEventJS" {
import { $WorldGenUtils$BlockToBlockStatesMapEntry, $WorldGenUtils$BlockToBlockStatesMapEntry$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToBlockStatesMapEntry"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $WorldGenUtils$ForestTypesMapEntry, $WorldGenUtils$ForestTypesMapEntry$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$ForestTypesMapEntry"
import { $WorldGenUtils$TreeLayer, $WorldGenUtils$TreeLayer$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$TreeLayer"
import { $WorldGenUtils$BlockToBlockStateMapEntry, $WorldGenUtils$BlockToBlockStateMapEntry$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToBlockStateMapEntry"
import { $WorldGenUtils$FissureDecoration, $WorldGenUtils$FissureDecoration$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$FissureDecoration"
import { $PlacedFeatureProperties$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties"
import { $BuildVeinProperties$Cluster$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties$Cluster"
import { $WorldGenUtils$TreePlacement, $WorldGenUtils$TreePlacement$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$TreePlacement"
import { $WorldGenUtils$Root, $WorldGenUtils$Root$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$Root"
import { $IDataConstructor } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IDataConstructor"
import { $BuildVeinProperties$Disc$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties$Disc"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $TreePlacementConfig$GroundType$$Type } from "packages/net/dries007/tfc/world/feature/tree/$TreePlacementConfig$GroundType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $WorldGenUtils$BlockToWeightedBlockStateMapEntry, $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToWeightedBlockStateMapEntry"
import { $ForestType$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ForestType"
import { $IntProvider$$Type } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $WorldGenUtils$Trunk, $WorldGenUtils$Trunk$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$Trunk"
import { $DataPackEventJS$$Type } from "packages/dev/latvian/mods/kubejs/script/data/$DataPackEventJS"
import { $PlacedFeatureProperties$Climate$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties$Climate"
import { $BuildVeinProperties$Pipe$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties$Pipe"

export class $TFCWorldgenDataEventJS extends $EventJS implements $IDataConstructor {
constructor(wrapped: $DataPackEventJS$$Type)

/**
 * Creates a baby boulder configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param states - A list of {Block -> BlockState[]} objects in string form that define the baby boulder's state property
 * @param placement - The placement properties
 */
public "babyBoulder"(name: string, states: $WorldGenUtils$BlockToBlockStatesMapEntry$$Type[], placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a new block to block state map entry for use in soil disc configured features
 * 
 * @param block - The registry name of a block to be replaced
 * @param state - A string representation of a block state
 */
public "blockToBlockState"(block: string, state: string): $WorldGenUtils$BlockToBlockStateMapEntry
/**
 * Creates a new block list to weighted block state list map entry for use several configured features
 * 
 * @param blocks - A list of strings, the registry names of blocks to be replaced
 * @param blockStates - A list of string representations of weighted block states
 */
public "blockToWeightedBlockState"(blocks: string[], blockStates: string[]): $WorldGenUtils$BlockToWeightedBlockStateMapEntry
/**
 * Creates a boulder configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param states - A list of {Block -> BlockState[]} objects in string form that define the boulder's state property
 * @param placement - The placement properties
 */
public "boulder"(name: string, states: $WorldGenUtils$BlockToBlockStatesMapEntry$$Type[], placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a new block to block state list map entry for use in boulder configured features
 * 
 * @param block - The registry name of a block to be replaced
 * @param blockStates - A list of string representations of a block state
 */
public "boulderState"(block: string, blockStates: string[]): $WorldGenUtils$BlockToBlockStatesMapEntry
/**
 * Creates a 'tfc:cluster_vein' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param replacementMap - A list of {Block[] -> WeightedBlockState[]} objects in string form that define the vein's replacement map
 * @param rarity - Sets the 'rarity' value of the vein
 * @param density - Sets the 'density' value of the vein
 * @param minY - Sets the 'min_y' value of the vein
 * @param maxY - Sets the 'max_y' value of the vein
 * @param size - Sets the 'size' value of the vein
 * @param optionals - Sets the optional values of the vein through a consumer
 * @param placement - The placement properties
 */
public "clusterVein"(name: string, replacementMap: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], rarity: integer, density: float, minY: integer, maxY: integer, size: integer, optionals: $Consumer$$Type<$BuildVeinProperties$Cluster$$Type>, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:cluster_vein' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param replacementMap - A list of {Block[] -> WeightedBlockState[]} objects in string form that define the vein's replacement map
 * @param rarity - Sets the 'rarity' value of the vein
 * @param density - Sets the 'density' value of the vein
 * @param minY - Sets the 'min_y' value of the vein
 * @param maxY - Sets the 'max_y' value of the vein
 * @param size - Sets the 'size' value of the vein
 * @param height - Sets the 'height' value of the vein
 * @param optionals - Sets the optional values of the vein through a consumer
 * @param placement - The placement properties
 */
public "discVein"(name: string, replacementMap: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], rarity: integer, density: float, minY: integer, maxY: integer, size: integer, height: integer, optionals: $Consumer$$Type<$BuildVeinProperties$Disc$$Type>, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:fissure' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param wallState - The blockstate to use for the wall of the fissure, may be null to use the raw rock at the bottom of the world
 * @param fluidState - The blockstate of the fluid to fill the fissure with
 * @param count - The number of fissures to place. May be null, defaults to 5
 * @param radius - The radius around the target position to attempt to place fissures. May be null, defaults to 12
 * @param minDepth - A `VerticalAnchor`, the minimum depth of the fissure. May be null, defaults to 16 above bottom
 * @param minPieces - The minimum number of pieces that makes up a fissure. May be null, defaults to 10
 * @param maxPieces - The maximum number of pieces that make up a fissure. May be null, defaults to 24
 * @param maxPieceLength - The maximum length and individual piece of a fissure may be. May be null, defaults to 6
 * @param fissureDecoration - A fissure decoration object, may be null to not have one present
 * @param placement - The placement properties
 */
public "fissure"(name: string, wallState: string, fluidState: string, count: integer, radius: integer, minDepth: $JsonObject$$Type, minPieces: integer, maxPieces: integer, maxPieceLength: integer, fissureDecoration: $WorldGenUtils$FissureDecoration$$Type, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a new fissure decoration object
 * 
 * @param replacementMap - A list of {block[] -> weighted blockstate[]} objects, the additional 'ores' that should spawn around the fissure
 * @param rarity - The rarity that blocks should be replaced with decoration blocks
 * @param radius - The radius around the fissure that blocks should be replaced
 * @param count - The number of blocks that should be placed, actual amount will be `count / rarity`
 */
public "fissureDecoration"(replacementMap: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], rarity: integer, radius: integer, count: integer): $WorldGenUtils$FissureDecoration
/**
 * Creates a 'tfc:forest' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param entriesTag - A configured feature tag, the entries that will be placed. All values of the tag must be of the type 'tfc:forest_entry'
 * @param types - A list of {ForestType -> ForestTypeConfig} objects
 * @param useWeirdness - If weirdness should be considered. May be null, defaults to true
 * @param placement - The placement properties
 */
public "forest"(name: string, entriesTag: string, types: $WorldGenUtils$ForestTypesMapEntry$$Type[], useWeirdness: boolean, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:forest_entry' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is specified
 * @param climate - The climate restrictions
 * @param bushLog - The log block to place for bushes. May be null to not have bushes
 * @param bushLeaves - The leaves block to place for bushes. Mau be null to not have bushes
 * @param fallenLog - The log block to place for fallen trees. May be null to not have fallen trees
 * @param fallenLeaves - The leaf block to place for leaf litter. May be null to not have leaf litter
 * @param groundCover - A list of weighted block states for other ground cover. May be null to not have any ground cover
 * @param normalTreeFeature - The feature to place for normal trees
 * @param deadTreeFeature - The feature to place for dead trees
 * @param oldGrowthTreeFeature - The feature to place for old growth trees. May be null to place the normal trees in place of old growth trees
 * @param krummholzFeature - The feature to place for krummkolz. May be null to not have krummholz
 * @param oldGrowthChance - The chance that a placed tree will be an old growth tree. Higher values are more rare. May be null to default to 6
 * @param spoilerOldGrowthChance - The chance that a placed tree will be an old growth tree during spoiler selection. Higher values are more rare. Mau be null to default to 200
 * @param fallenTreeChance - The chance that fallen trees will be placed. Higher values are more rare. May be null, defaults to 14
 * @param deadChance - The chance that dead trees will be placed. Higher values are more rare. May be null, defaults to 75
 * @param floating - Sets the placement height to be world surface instead of ocean floor. May be null
 * @param placement - The placement properties
 */
public "forestEntry"(name: string, climate: $Consumer$$Type<$PlacedFeatureProperties$Climate$$Type>, bushLog: string, bushLeaves: string, fallenLog: string, fallenLeaves: string, groundCover: string[], normalTreeFeature: string, deadTreeFeature: string, oldGrowthTreeFeature: string, krummholzFeature: string, oldGrowthChance: integer, spoilerOldGrowthChance: integer, fallenTreeChance: integer, deadChance: integer, floating: boolean, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a new forest types map entry for use with forest features
 * 
 * @param type - The `ForestType` and the key of this entry
 * @param treeCount - The tree count, may be null
 * @param groundcoverCount - The groundcover count, may be null
 * @param perChunkChance - The chance, in the range [0, 1], per chunk, that forests will spawn
 * @param bushCount - The bush count, may be null
 * @param hasSpoilerOldGrowth - If this entry has old growth spoilers. May be null to default to false
 * @param allowsOldGrowth - If this entry has old growth trees. May be null to default to false
 * @param leafPileCount - The leaf pile count, may be null
 */
public "forestTypesMapEntry"(type: $ForestType$$Type, treeCount: $IntProvider$$Type, groundcoverCount: $IntProvider$$Type, perChunkChance: float, bushCount: $IntProvider$$Type, hasSpoilerOldGrowth: boolean, allowsOldGrowth: boolean, leafPileCount: $IntProvider$$Type): $WorldGenUtils$ForestTypesMapEntry
/**
 * Creates a configured feature of the given type with the given config and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param type - The type of configured feature to create
 * @param featureConfig - The config json object for the feature
 * @param placement - The placement properties
 */
public "generic"(name: string, type: string, featureConfig: $JsonObject$$Type, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a geode configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param outer - Sets the outer block state of the geode
 * @param middle - Sets the middle block state of the geode
 * @param innerValues - A list of weight block state in string form, sets the inner state of the geode
 * @param placement - The placement properties
 */
public "geode"(name: string, outer: string, middle: string, innerValues: string[], placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:hot_spring' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param wallState - The block state to use for the hot spring, may be null to use the lowest rock layer rock
 * @param fluidState - The fluid to fill the spring with, may be air
 * @param radius - The approximate radius of the hot spring, in the range [1, 16]
 * @param allowUnderwater - If the hot spring can generate underwater
 * @param replacesOnFluidContact - A list of {block[] -> weighted blockstate[]} objects, the blocks to place if placed underwater, may be null
 * @param decoration - A fissure decoration object, may be null to not have one present
 * @param placement - The placement properties
 */
public "hotSpring"(name: string, wallState: string, fluidState: string, radius: integer, allowUnderwater: boolean, replacesOnFluidContact: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], decoration: $WorldGenUtils$FissureDecoration$$Type, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:if_then' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param if_ - A placed feature id, that will always try to place
 * @param then - A placed feature id, that will only place if the first feature is placed
 * @param placement - The placement properties
 */
public "ifThen"(name: string, if_: string, then: string, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:krummholz' configured feature and matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param block - The block to place
 * @param height - The height the krummholz may be
 * @param spawnsOnStone - If the krummholz may spawn on stone. May be null to default to false
 * @param spawnsOnGravel - If the krummholz may spawn on gravel. May be null to default to false
 * @param placement - The placement Properties
 */
public "krummholz"(name: string, block: string, height: $IntProvider$$Type, spawnsOnStone: boolean, spawnsOnGravel: boolean, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:overlay_tree' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param baseStructure - The base structure to place
 * @param overlayStructure - The structure to overlay on top of the base structure
 * @param trunk - The trunk of the tree, may be null
 * @param overlayIntegrity - The % of overlay blocks to 'rot', in the range [0, 1]. May be null to default to 0.5
 * @param treePlacement - The tree placement properties
 * @param rootSystem - The root properties, maye be null
 * @param placement - The placement properties
 */
public "overlayTree"(name: string, baseStructure: string, overlayStructure: string, trunk: $WorldGenUtils$Trunk$$Type, overlayIntegrity: float, treePlacement: $WorldGenUtils$TreePlacement$$Type, rootSystem: $WorldGenUtils$Root$$Type, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:pipe_vein' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param replacementMap - A list of {Block[] -> WeightedBlockState[]} objects in string form that define the vein's replacement map
 * @param rarity - Sets the 'rarity' value of the vein
 * @param density - Sets the 'density' value of the vein
 * @param minY - Sets the 'min_y' value of the vein
 * @param maxY - Sets the 'max_y' value of the vein
 * @param height - Sets the 'height' value of the vein
 * @param radius - Sets the 'radius' value of the vein
 * @param minSkew - Sets the 'min_skew' value of the vein
 * @param maxSkew - Sets the 'max_skew' value of the vein
 * @param minSlant - Sets the 'min_slant' value of the vein
 * @param maxSlant - Sets the 'max_slant' value of the vein
 * @param sign - Sets the 'sign' value of the vein
 * @param optionals - Sets the optional values of the vein through a consumer
 * @param placement - The placement properties
 */
public "pipeVein"(name: string, replacementMap: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], rarity: integer, density: float, minY: integer, maxY: integer, height: integer, radius: integer, minSkew: integer, maxSkew: integer, minSlant: integer, maxSlant: integer, sign: float, optionals: $Consumer$$Type<$BuildVeinProperties$Pipe$$Type>, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'minecraft:random_patch' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param tries - How many times the feature should attempt to place, may be null to default to 128
 * @param xzSpread - The horizontal spread of the patch, may be null to default to 7
 * @param ySpread - The vertical spread of the patch, may be null to default to 3
 * @param feature - The feature to attempt to place for the patch
 * @param placement - The placement properties
 */
public "randomPatch"(name: string, tries: integer, xzSpread: integer, ySpread: integer, feature: string, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:random_tree' configured feature and matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param structures - A list of Structures that could be placed
 * @param trunk - THe trunk of the tree, may be null
 * @param treePlacement - The tree placement properties
 * @param rootSystem - The root properties, may be null
 * @param placement - The placement properties
 */
public "randomTree"(name: string, structures: string[], trunk: $WorldGenUtils$Trunk$$Type, treePlacement: $WorldGenUtils$TreePlacement$$Type, rootSystem: $WorldGenUtils$Root$$Type, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a new tree root object for use with tree features
 * 
 * @param blocks - A list of {Block[] -> BlockState[]} objects, the replacement map for root blocks
 * @param width - The horizontal distance to attempt to place roots. May be null to default to 4
 * @param height - The vertical distance to attempt to place roots. May be null to default to 3
 * @param tries - The number of attempts to place roots that should be made. May be null to default to 5
 * @param specialPlacerSkewChance - The chance, in the range [0, 1], for extra roots to be placed. May be null
 * @param required - If roots must be placed
 */
public "root"(blocks: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], width: integer, height: integer, tries: integer, specialPlacerSkewChance: float, required: boolean): $WorldGenUtils$Root
/**
 * Creates a 'minecraft:simple_block' configured feature and the matching placed feature, uses a SimpleStateProvider
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param blockState - The string representation of a block state, the state to be placed
 * @param placement - The placement properties
 */
public "simpleBlockState"(name: string, blockState: string, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:soil_disc' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param replacementMap - A list of {block -> block state} objects in string form the define the disc's replacement map
 * @param minRadius - The minimum radius of the soil disc
 * @param maxRadius - The maximum radius of the soil disc
 * @param height - How tall the soil disc should be
 * @param integrity - A number, in the range [0, 1], the specifies the probability of any given block will place, may be null to specify the default value of 1
 * @param placement - The placement properties
 */
public "soilDisc"(name: string, replacementMap: $WorldGenUtils$BlockToBlockStateMapEntry$$Type[], minRadius: integer, maxRadius: integer, height: integer, integrity: float, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:spreading_bush' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param block - The block to placed, must be an instanceof SpreadingBushBlock
 * @param placement - The placement properties
 */
public "spreadingBush"(name: string, block: string, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:spreading_crop' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param block - The block to placed, must be an instanceof WildSpreadingCropBlock
 * @param placement - The placement properties
 */
public "spreadingCrop"(name: string, block: string, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:stacked_tree' configured feature and matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param layers - A list of tree layers
 * @param trunk - The trunk of the tree
 * @param treePlacement - The tree placement properties
 * @param rootSystem - The root properties, may be null
 * @param placement - The placement properties
 */
public "stackedTree"(name: string, layers: $WorldGenUtils$TreeLayer$$Type[], trunk: $WorldGenUtils$Trunk$$Type, treePlacement: $WorldGenUtils$TreePlacement$$Type, rootSystem: $WorldGenUtils$Root$$Type, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a 'tfc:tall_wild_crop' configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param block - The block to placed, must be an instanceof WildDoubleCropBlock
 * @param placement - The placement properties
 */
public "tallWildCrop"(name: string, block: string, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a thin spike configured feature and the matching placed feature
 * 
 * @param name - The name of the feature, the namespace will default to 'kubejs_tfc' if none is provided
 * @param state - Sets the 'state' property of the modifier
 * @param radius - Sets the 'radius' property of the modifier
 * @param tries - Sets the 'tries' property of the modifier
 * @param minHeight - Sets the 'min_height' property of the modifier
 * @param maxHeight - Sets the 'max_height' property of the modifier
 * @param placement - The placement properties
 */
public "thinSpike"(name: string, state: string, radius: integer, tries: integer, minHeight: integer, maxHeight: integer, placement: $Consumer$$Type<$PlacedFeatureProperties$$Type>): void
/**
 * Creates a new tree layer object for use with layer tree features
 * 
 * @param templates - A list of structures to place
 * @param minCount - The minimum number of structures to place
 * @param maxCount - The maximum number of structures to place
 */
public "treeLayer"(templates: string[], minCount: integer, maxCount: integer): $WorldGenUtils$TreeLayer
/**
 * Creates a new tree placement object for use with tree features
 * 
 * @param width - The horizontal distance to check
 * @param height - The vertical distance to check
 * @param groundType - The type of ground the tree can place in. May be null to default to 'normal'
 */
public "treePlacement"(width: integer, height: integer, groundType: $TreePlacementConfig$GroundType$$Type): $WorldGenUtils$TreePlacement
/**
 * Creates a new tree trunk object for use with tree features
 * 
 * @param state - The block state to place
 * @param minHeight - The minimum height the trunk may be
 * @param maxHeight - The maximum height the trunk may be
 * @param wide - If the trunk is 2x2
 */
public "trunk"(state: string, minHeight: integer, maxHeight: integer, wide: boolean): $WorldGenUtils$Trunk
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$LoggingEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $LoggingEvent$$Type } from "packages/net/dries007/tfc/util/events/$LoggingEvent"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Fires when a tree is about to be felled by an axe. Cancelling causes the block itself to drop with no side effects */
export class $LoggingEventJS extends $EventJS {
constructor(level: $Level$$Type, event: $LoggingEvent$$Type)

public "getAxe"(): $ItemStack
public "getBlock"(): $BlockContainerJS
public "getLevel"(): $Level
public "getPos"(): $BlockPos
get "axe"(): $ItemStack
get "block"(): $BlockContainerJS
get "level"(): $Level
get "pos"(): $BlockPos
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$WaterWheelBlockBuilder" {
import { $AxleBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$AxleBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $WaterWheelBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $AxleBlockBuilder$$Type)

public "createProperties"(): $BlockBehaviour$Properties
/** Sets the texture that will be used for the water wheel, the path will be relative to the `/textures/entity/water_wheel/` subdirectory */
public "texture"(tex: $ResourceLocation$$Type): $WaterWheelBlockBuilder
/** sets the texture that will be used for the water wheel, the path is relative to the `/textures/` subdirectory */
public "textureRaw"(tex: $ResourceLocation$$Type): $WaterWheelBlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IBeneathDataExtension" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $LostPage$Punishment$$Type } from "packages/com/eerussianguy/beneath/misc/$LostPage$Punishment"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IDataConstructor } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IDataConstructor"

export interface $IBeneathDataExtension extends $IDataConstructor {
/**
 * Defines a new lost page
 * 
 * @param cost - The item required for this ritual
 * @param reward - The item reward for this ritual
 * @param costs - The number of `cost` items that are required, will be randomly selected from when the page is initialized
 * @param rewards - The number of `reward` items that will be resultant from a ritual, will be selected from when the page is initialized
 * @param punishments - Possible punishments for this ritual, will be randomly selected from when the page is initialized
 * @param langKey - A custom lang key to use for the ingredient in the lost page screen
 * @param name - The name of the lost page definition
 */
"beneathLostPage"(cost: $Ingredient$$Type, reward: $Item$$Type, costs: integer[], rewards: integer[], punishments: $LostPage$Punishment$$Type[], langKey: string, name: $ResourceLocation$$Type): void
/**
 * Defines a new lost page
 * 
 * @param cost - The item required for this ritual
 * @param reward - The item reward for this ritual
 * @param costs - The number of `cost` items that are required, will be randomly selected from when the page is initialized
 * @param rewards - The number of `reward` items that will be resultant from a ritual, will be selected from when the page is initialized
 * @param punishments - Possible punishments for this ritual, will be randomly selected from when the page is initialized
 * @param langKey - A custom lang key to use for the ingredient in the lost page screen
 */
"beneathLostPage"(cost: $Ingredient$$Type, reward: $Item$$Type, costs: integer[], rewards: integer[], punishments: $LostPage$Punishment$$Type[], langKey: string): void
/**
 * Defines a new nether fertilizer
 * 
 * @param ingredient - The ingredient for the nether fertilizer
 * @param death - The death value of the fertilizer, may be null, defaults to 0
 * @param destruction - The destruction value of the fertilizer, may be null, defaults to 0
 * @param decay - The decay value of the fertilizer, may be null, defaults to 0
 * @param sorrow - The sorrow value of the fertilizer, may be null, defaults to 0
 * @param flame - The flame value of the fertilizer, may be null, defaults to 0
 */
"beneathNetherFertilizer"(ingredient: $Ingredient$$Type, death: float, destruction: float, decay: float, sorrow: float, flame: float): void
/**
 * Defines a new nether fertilizer
 * 
 * @param ingredient - The ingredient for the nether fertilizer
 * @param death - The death value of the fertilizer, may be null, defaults to 0
 * @param destruction - The destruction value of the fertilizer, may be null, defaults to 0
 * @param decay - The decay value of the fertilizer, may be null, defaults to 0
 * @param sorrow - The sorrow value of the fertilizer, may be null, defaults to 0
 * @param flame - The flame value of the fertilizer, may be null, defaults to 0
 * @param name - The name of the nether fertilizer
 */
"beneathNetherFertilizer"(ingredient: $Ingredient$$Type, death: float, destruction: float, decay: float, sorrow: float, flame: float, name: $ResourceLocation$$Type): void
}

export namespace $IBeneathDataExtension {
const probejs$$marker: never
}
export abstract class $IBeneathDataExtension$$Static implements $IBeneathDataExtension {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$FloodedCropBlockBuilder" {
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $AbstractCropBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$AbstractCropBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $FloodedCropBlockBuilder extends $AbstractCropBlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Block
public "createProperties"(): $BlockBehaviour$Properties
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/sub/$BladedAxleBlockBuilder" {
import { $AxleBlockBuilder$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$AxleBlockBuilder"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ExtendedPropertiesBlockBuilder } from "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesBlockBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $BladedAxleBlockBuilder extends $ExtendedPropertiesBlockBuilder {
constructor(i: $ResourceLocation$$Type, parent: $AxleBlockBuilder$$Type)

public "createProperties"(): $BlockBehaviour$Properties
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/internal/$ExtendedPropertiesShapedBlockBuilder" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockBehaviour$Properties } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $ISupportExtendedProperties$ExtendedPropertiesJS$$Type } from "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties$ExtendedPropertiesJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ISupportExtendedProperties } from "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties"
import { $ShapedBlockBuilder } from "packages/dev/latvian/mods/kubejs/block/custom/$ShapedBlockBuilder"

export class $ExtendedPropertiesShapedBlockBuilder extends $ShapedBlockBuilder implements $ISupportExtendedProperties {
constructor(i: $ResourceLocation$$Type)

public "createProperties"(): $BlockBehaviour$Properties
public "extendedProperties"(extendedProperties: $Consumer$$Type<$ISupportExtendedProperties$ExtendedPropertiesJS$$Type>): $BlockBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$ContainerLimiterEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Size$$Type } from "packages/net/dries007/tfc/common/capabilities/size/$Size"
import { $List$$Type } from "packages/java/util/$List"
import { $Slot$$Type } from "packages/net/minecraft/world/inventory/$Slot"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

/**
 * This event is fired whenever a player closes a menu that is not the player's own inventory
 * 
 * A full list of valid menus can be obtained by running the command `/kubejs dump_registry minecraft:menu`
 * 
 * The implementation of this event is based on Oversized Item in Storage area, a 1.12 addon. It is licensed under the BSD License
 */
export class $ContainerLimiterEventJS extends $EventJS {
constructor(slotsToLimit: $List$$Type<$Slot$$Type>, level: $Level$$Type, spawnPos: $BlockPos$$Type)

/**
 * Limits the given slot range to the provided size
 * 
 * @param size - The size the slots are limited to
 * @param min - The index of the start of the slots to be limited
 * @param max - The index of the end of the lots to be limited
 * @param allowsEqual - If items with a size equal to the provided `size` should be allowed
 */
public "limit"(size: $Size$$Type, min: integer, max: integer, allowsEqual: boolean): void
/**
 * Limits the given slot range to the provided size, disallowing items with a size greater than the given size
 * 
 * @param size - The size the slots are limited to
 * @param min - The index of the start of the slots to be limited
 * @param max - The index of the end of the lots to be limited
 */
public "limit"(size: $Size$$Type, min: integer, max: integer): void
/**
 * Limits the entire container to the given size
 * 
 * @param size - The size which the container is limited to
 * @param allowsEqual - If items with a size equal to the provided `size` should be allowed
 */
public "limit"(size: $Size$$Type, allowsEqual: boolean): void
/** Limits the entire container to the given size, disallowing items with a size greater than the given size */
public "limit"(size: $Size$$Type): void
/**
 * Limits items in the container to a size
 * 
 * @param size - The minimum size items in the container may be
 * @param allowsEqual - If items with a size equal to the provided `size` should be allowed
 */
public "lowerLimit"(size: $Size$$Type, allowsEqual: boolean): void
/** Limits items in the container to a size equal to or greater than the provided size */
public "lowerLimit"(size: $Size$$Type): void
/**
 * Limits items in the provided slot range to a size greater than the provided size
 * 
 * @param size - The minimum size items in the container may be
 * @param min - The index of the start of the slots to be limited
 * @param max - The index of the end of the lots to be limited
 * @param allowsEqual - If items with a size equal to the provided `size` should be allowed
 */
public "lowerLimit"(size: $Size$$Type, min: integer, max: integer, allowsEqual: boolean): void
/**
 * Limits items in the provided slot range to a size equal to or greater than the provided size
 * 
 * @param size - The minimum size items in the container may be
 * @param min - The index of the start of the slots to be limited
 * @param max - The index of the end of the lots to be limited
 */
public "lowerLimit"(size: $Size$$Type, min: integer, max: integer): void
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/recipe/js/$ChiselRecipeJS" {
import { $InputItem$$Type } from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import { $ItemStackProviderJS$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS"
import { $TFCProviderRecipeJS } from "packages/com/notenoughmail/kubejs_tfc/recipe/js/$TFCProviderRecipeJS"

export class $ChiselRecipeJS extends $TFCProviderRecipeJS {
constructor()

/** Sets an extra item to be dropped upon chiseling */
public "extraDrop"(extraDrop: $ItemStackProviderJS$$Type): $ChiselRecipeJS
public "getMod"(): string
/** Specifies the chisel for the recipe, must be tagged 'tfc:chisels' */
public "itemIngredient"(itemIngredient: $InputItem$$Type): $ChiselRecipeJS
get "mod"(): string
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$TFCBindings" {
import { $ItemStackProviderBindings } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$ItemStackProviderBindings"
import { $BlockIngredient, $BlockIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$BlockIngredient"
import { $FluidIngredient, $FluidIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidIngredient"
import { $MiscBindings } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$MiscBindings"
import { $AlloyPartComponent$AlloyPart } from "packages/com/notenoughmail/kubejs_tfc/recipe/component/$AlloyPartComponent$AlloyPart"
import { $TFCIngredientBindings } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$TFCIngredientBindings"
import { $FluidStackIngredient, $FluidStackIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidStackIngredient"
import { $CalendarBindings } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$CalendarBindings"
import { $ClimateBindings } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$ClimateBindings"

/** All of KubeJS TFC's bindings */
export class $TFCBindings {
/** Provides access to all calendar bindings */
static readonly "calendar": $CalendarBindings
/** Provides access to all climate bindings */
static readonly "climate": $ClimateBindings
/** Provides access to all ingredient bindings */
static readonly "ingredient": $TFCIngredientBindings
/** Provides access to all item stack provider bindings */
static readonly "isp": $ItemStackProviderBindings
/** Provides access to all item stack provider bindings */
static readonly "itemStackProvider": $ItemStackProviderBindings
/** A collection of various un-categorized features and utilities */
static readonly "misc": $MiscBindings

constructor()

/** Creates an alloy part, used in creating alloying recipes */
public static "alloyPart"(metal: string, min: double, max: double, keepOriginalBounds: boolean): $AlloyPartComponent$AlloyPart
/** Creates an alloy part, used in creating alloying recipes */
public static "alloyPart"(metal: string, min: double, max: double): $AlloyPartComponent$AlloyPart
/** Explicitly creates a block ingredient */
public static "blockIngredient"(blockIngredient: $BlockIngredient$$Type): $BlockIngredient
/** Explicitly creates a fluid ingredient */
public static "fluidIngredient"(fluidIngredient: $FluidIngredient$$Type): $FluidIngredient
/** Explicitly creates a fluid stack ingredient */
public static "fluidStackIngredient"(fluidIngredient: $FluidIngredient$$Type, amount: integer): $FluidStackIngredient
/** Explicitly creates a fluid stack ingredient */
public static "fluidStackIngredient"(fluidStackIngredient: $FluidStackIngredient$$Type): $FluidStackIngredient
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/$IKubeJSTFCHandHeldItemBuilderExtension" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"

export interface $IKubeJSTFCHandHeldItemBuilderExtension {
/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
"attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
}

export namespace $IKubeJSTFCHandHeldItemBuilderExtension {
const probejs$$marker: never
}
export abstract class $IKubeJSTFCHandHeldItemBuilderExtension$$Static implements $IKubeJSTFCHandHeldItemBuilderExtension {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$DouseFireEventJS" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $DouseFireEvent$$Type } from "packages/net/dries007/tfc/util/events/$DouseFireEvent"
import { $LevelEventJS } from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"

/** Fired whenever an attempt is made to douse a fire, can be cancelled to prevent the dousing action */
export class $DouseFireEventJS extends $LevelEventJS {
constructor(event: $DouseFireEvent$$Type)

public "getBlock"(): $BlockContainerJS
/** Returns the bounds of the dousing action */
public "getBounds"(): $AABB
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
get "block"(): $BlockContainerJS
get "bounds"(): $AABB
get "player"(): $Player
get "pos"(): $BlockPos
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$ChiselItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ChiselItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
public "createObject"(): $Item
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/addons/firmalife/item/$WateringCanItemBuilder" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $ItemBuilder } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $WateringCanItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Item
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties$Disc" {
import { $BuildVeinProperties } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties"
import { $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToWeightedBlockStateMapEntry"

export class $BuildVeinProperties$Disc extends $BuildVeinProperties {
constructor(blocks: $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type[], rarity: integer, density: float, minY: integer, maxY: integer, randomName: string, size: integer, height: integer)

}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$TFCFishingRodItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $TFCFishingRodItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
/** Sets the rod's model when cast */
public "castModel"(model: string): $TFCFishingRodItemBuilder
/** Sets the texture used when the rod is cast */
public "castTexture"(tex: string): $TFCFishingRodItemBuilder
/** Sets the rod's fishing strength, defaults the a value based on the speed of the rod's tier */
public "fishingStrength"(f: float): $TFCFishingRodItemBuilder
/** Allows this rod to hold large fishing bait by adding it the correct tag */
public "largeBait"(): $TFCFishingRodItemBuilder
/** Allows this rod to hold small fishing bait by adding it to the correct tag */
public "smallBait"(): $TFCFishingRodItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$WindVectorCallback" {
import { $Vec2 } from "packages/net/minecraft/world/phys/$Vec2"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $KubeJSClimateModel$WindVectorCallback {
/**
 * @param level - The level
 * @param pos - The position
 * @param calendarTicks - The calendar tick during which the calculation is being made
 */
"getValue"(level: $Level$$Type, pos: $BlockPos$$Type, calendarTicks: long): $Vec2
}

export namespace $KubeJSClimateModel$WindVectorCallback {
const probejs$$marker: never
}
export abstract class $KubeJSClimateModel$WindVectorCallback$$Static implements $KubeJSClimateModel$WindVectorCallback {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/item/$ScytheItemBuilder" {
import { $HandheldItemBuilder } from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ScytheItemBuilder extends $HandheldItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 *    Sets the tool's attack damage baseline using TFC's calculations.
 * 
 *    Note: This uses the tool's tier to calculate the value, set this after setting the tier
 * 
 *    See: attackDamageBaseline
 */
public "attackDamageBaselineTFC"(f: float): $HandheldItemBuilder
/** sets the block tag that the scythe can properly dig at full speed */
public "mineableBlocksTag"(blockTag: $ResourceLocation$$Type): $ScytheItemBuilder
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/event/$RegisterClimateModelEventJS" {
import { $KubeJSClimateModel$Builder$$Type } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$Builder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $StartupEventJS } from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

/** Used to register/create new climate models which can be used during climate model selection */
export class $RegisterClimateModelEventJS extends $StartupEventJS {
constructor()

/**
 * Creates a new climate model with the given name and properties
 * 
 * @param name - The name of the climate model
 * @param model - A consumer for a model builder
 */
public "register"(name: $ResourceLocation$$Type, model: $Consumer$$Type<$KubeJSClimateModel$Builder$$Type>): void
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$ISupportExtendedProperties$BlockSupplier" {
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export interface $ISupportExtendedProperties$BlockSupplier extends $Supplier<$Block> {
"get"(): $Block
}

export namespace $ISupportExtendedProperties$BlockSupplier {
const probejs$$marker: never
}
export abstract class $ISupportExtendedProperties$BlockSupplier$$Static implements $ISupportExtendedProperties$BlockSupplier {
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$ClimateBindings" {
import { $Enum } from "packages/java/lang/$Enum"
import { $Vec2 } from "packages/net/minecraft/world/phys/$Vec2"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClimateModel, $ClimateModel$$Type } from "packages/net/dries007/tfc/util/climate/$ClimateModel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClimateBindings extends $Enum<$ClimateBindings> {
static readonly "INSTANCE": $ClimateBindings

/**
 * Returns the yearly average rainfall at the given level and position
 * 
 * @param level - The level
 * @param pos - The position
 */
public "getAverageRainfall"(level: $Level$$Type, pos: $BlockPos$$Type): float
/**
 * Returns the yearly average rainfall at the given level and position
 * 
 * @param level - The level
 * @param x - The x position
 * @param y - The y position
 * @param z - The z position
 */
public "getAverageRainfall"(level: $Level$$Type, x: integer, y: integer, z: integer): float
/**
 * Returns the yearly average temperature at the given level and position
 * 
 * @param level - The level
 * @param pos - The position
 */
public "getAverageTemperature"(level: $Level$$Type, pos: $BlockPos$$Type): float
/**
 * Returns the yearly average temperature at the given level and position
 * 
 * @param level - The level
 * @param x - The x position
 * @param y - The y position
 * @param z - The z position
 */
public "getAverageTemperature"(level: $Level$$Type, x: integer, y: integer, z: integer): float
/**
 * Returns the current temperature at the current level and position
 * 
 * @param level - The level
 * @param pos - The position
 */
public "getCurrentTemperature"(level: $Level$$Type, pos: $BlockPos$$Type): float
/**
 * Returns the current temperature at the current level and position
 * 
 * @param level - The level
 * @param x - The x position
 * @param y - The y position
 * @param z - The z position
 */
public "getCurrentTemperature"(level: $Level$$Type, x: integer, y: integer, z: integer): float
/**
 * Returns the current fogginess, in the range [0, 1], at the given level and position
 * 
 * @param level - The level
 * @param x - The x position
 * @param y - The y position
 * @param z - The z position
 */
public "getFogginess"(level: $Level$$Type, x: integer, y: integer, z: integer): float
/**
 * Returns the current fogginess, in the range [0, 1], at the given level and position
 * 
 * @param level - The level
 * @param pos - The position
 */
public "getFogginess"(level: $Level$$Type, pos: $BlockPos$$Type): float
/** Tries to get the climate model of the provided object. Returns null if it cannot do so */
public "getModel"(o: any): $ClimateModel
/** Returns the name of the provided climate model */
public "getName"(model: $ClimateModel$$Type): $ResourceLocation
/**
 * Returns the temperature at the given level, position, and tick
 * 
 * @param level - The level
 * @param x - The x position
 * @param y - The y position
 * @param z - The z position
 * @param calendarTicks - The calendar ticks
 */
public "getTemperature"(level: $Level$$Type, x: integer, y: integer, z: integer, calendarTicks: long): float
/**
 * Returns the temperature at the given level, position, and tick
 * 
 * @param level - The level
 * @param pos - The position
 * @param calendarTick - The calendar tick
 */
public "getTemperature"(level: $Level$$Type, pos: $BlockPos$$Type, calendarTick: long): float
/**
 * Returns the current water fogginess, in the range [0, 1], at the given level and position
 * 
 * @param level - The level
 * @param pos - The position
 */
public "getWaterFogginess"(level: $Level$$Type, pos: $BlockPos$$Type): float
/**
 * Returns the current water fogginess, in the range [0, 1], at the given level and position
 * 
 * @param level - The level
 * @param x - The x position
 * @param y - The y position
 * @param z - The z position
 */
public "getWaterFogginess"(level: $Level$$Type, x: integer, y: integer, z: integer): float
/**
 * Returns the Vec2 wind vector at the given level and position
 * 
 * @param level - The level
 * @param pos - The position
 */
public "getWindVector"(level: $Level$$Type, pos: $BlockPos$$Type): $Vec2
/**
 * Returns the Vec2 wind vector at the given level and position
 * 
 * @param level - The level
 * @param x - The x position
 * @param y - The y position
 * @param z - The z position
 */
public "getWindVector"(level: $Level$$Type, x: integer, y: integer, z: integer): $Vec2
/**
 * Returns true if the it is warm enough to rain at the given level and position
 * 
 * @param level - The level
 * @param pos - The position
 */
public "isWarmEnoughToRain"(level: $Level$$Type, pos: $BlockPos$$Type): boolean
/**
 * Returns true if the it is warm enough to rain at the given level and position
 * 
 * @param level - The level
 * @param x - The x position
 * @param y - The y position
 * @param z - The z position
 */
public "isWarmEnoughToRain"(level: $Level$$Type, x: integer, y: integer, z: integer): boolean
public static "valueOf"(name: string): $ClimateBindings
public static "values"(): $ClimateBindings[]
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/block/$ThinSpikeBlockBuilder" {
import { $BlockBuilder } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $ThinSpikeBlock } from "packages/net/dries007/tfc/common/blocks/$ThinSpikeBlock"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidStackJS$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS"

export class $ThinSpikeBlockBuilder extends $BlockBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $ThinSpikeBlock
/** Sets the chance, in the range [0, 1], the block will drip per tick */
public "dripChance"(chance: float): $ThinSpikeBlockBuilder
/** The registry name of a particle that will drip from the block */
public "dripParticle"(particle: $ResourceLocation$$Type): $ThinSpikeBlockBuilder
/** Sets the temperature above which the block must be to begin dripping */
public "dripTemp"(temp: float): $ThinSpikeBlockBuilder
/**
 * Deprecated, please use `#dripParticle` to make the block drip and have specify the drip particle
 * 
 * @deprecated
 */
public "drips"(): $ThinSpikeBlockBuilder
/** Sets the chance, in the range [0, 1], that the block will drip per random tick */
public "meltChance"(chance: float): $ThinSpikeBlockBuilder
/** The fluid the block melts into */
public "meltFluid"(fluid: $FluidStackJS$$Type): $ThinSpikeBlockBuilder
/** Sets the temperature above which the block can melt */
public "meltTemp"(temp: float): $ThinSpikeBlockBuilder
/** Allows the block to melt under certain situations */
public "melts"(): $ThinSpikeBlockBuilder
/** Sets the model of the tip state */
public "tipModel"(s: string): $ThinSpikeBlockBuilder
}
}

