declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$AcaciaFoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AcaciaFoliagePlacer$$Type = ($AcaciaFoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AcaciaFoliagePlacer_ = $AcaciaFoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/featuresize/$FeatureSize" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FeatureSize$$Type = ($FeatureSize);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FeatureSize_ = $FeatureSize$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HugeMushroomFeatureConfiguration$$Type = ($HugeMushroomFeatureConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HugeMushroomFeatureConfiguration_ = $HugeMushroomFeatureConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$BendingTrunkPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BendingTrunkPlacer$$Type = ($BendingTrunkPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BendingTrunkPlacer_ = $BendingTrunkPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$RotatedBlockProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RotatedBlockProvider$$Type = ($RotatedBlockProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RotatedBlockProvider_ = $RotatedBlockProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$TrunkPlacerType" {
import { $ForkingTrunkPlacer } from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$ForkingTrunkPlacer"
import { $UpwardsBranchingTrunkPlacer } from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$UpwardsBranchingTrunkPlacer"
import { $MegaJungleTrunkPlacer } from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$MegaJungleTrunkPlacer"
import { $StraightTrunkPlacer } from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$StraightTrunkPlacer"
import { $BendingTrunkPlacer } from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$BendingTrunkPlacer"
import { $CherryTrunkPlacer } from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$CherryTrunkPlacer"
import { $GiantTrunkPlacer } from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$GiantTrunkPlacer"
import { $TrunkPlacer, $TrunkPlacer$$Type } from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$TrunkPlacer"
import { $DarkOakTrunkPlacer } from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$DarkOakTrunkPlacer"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $FancyTrunkPlacer } from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$FancyTrunkPlacer"

export class $TrunkPlacerType<P extends $TrunkPlacer> {
static readonly "BENDING_TRUNK_PLACER": $TrunkPlacerType<$BendingTrunkPlacer>
static readonly "CHERRY_TRUNK_PLACER": $TrunkPlacerType<$CherryTrunkPlacer>
static readonly "DARK_OAK_TRUNK_PLACER": $TrunkPlacerType<$DarkOakTrunkPlacer>
static readonly "FANCY_TRUNK_PLACER": $TrunkPlacerType<$FancyTrunkPlacer>
static readonly "FORKING_TRUNK_PLACER": $TrunkPlacerType<$ForkingTrunkPlacer>
static readonly "GIANT_TRUNK_PLACER": $TrunkPlacerType<$GiantTrunkPlacer>
static readonly "MEGA_JUNGLE_TRUNK_PLACER": $TrunkPlacerType<$MegaJungleTrunkPlacer>
static readonly "STRAIGHT_TRUNK_PLACER": $TrunkPlacerType<$StraightTrunkPlacer>
static readonly "UPWARDS_BRANCHING_TRUNK_PLACER": $TrunkPlacerType<$UpwardsBranchingTrunkPlacer>

constructor(codec0: $Codec$$Type<P>)

public "codec"(): $Codec<P>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenTrunkPlacerType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenTrunkPlacerTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TrunkPlacerType$$Type<P extends $TrunkPlacer> = ($TrunkPlacerType<P> | Special.WorldgenTrunkPlacerType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TrunkPlacerType_<P extends $TrunkPlacer> = $TrunkPlacerType$$Type<P>;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomPatchConfiguration$$Type = ($RandomPatchConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomPatchConfiguration_ = $RandomPatchConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$AbstractHugeMushroomFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractHugeMushroomFeature$$Type = ($AbstractHugeMushroomFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractHugeMushroomFeature_ = $AbstractHugeMushroomFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$RandomSpreadFoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomSpreadFoliagePlacer$$Type = ($RandomSpreadFoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomSpreadFoliagePlacer_ = $RandomSpreadFoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$VegetationPatchFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VegetationPatchFeature$$Type = ($VegetationPatchFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VegetationPatchFeature_ = $VegetationPatchFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpikeConfiguration$$Type = ($SpikeConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpikeConfiguration_ = $SpikeConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FossilFeatureConfiguration$$Type = ($FossilFeatureConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FossilFeatureConfiguration_ = $FossilFeatureConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$PineFoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PineFoliagePlacer$$Type = ($PineFoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PineFoliagePlacer_ = $PineFoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$AlterGroundDecorator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AlterGroundDecorator$$Type = ($AlterGroundDecorator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AlterGroundDecorator_ = $AlterGroundDecorator$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$ReplaceBlockFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReplaceBlockFeature$$Type = ($ReplaceBlockFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReplaceBlockFeature_ = $ReplaceBlockFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$FancyFoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FancyFoliagePlacer$$Type = ($FancyFoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FancyFoliagePlacer_ = $FancyFoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$BlockPileFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockPileFeature$$Type = ($BlockPileFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockPileFeature_ = $BlockPileFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeodeConfiguration$$Type = ($GeodeConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeodeConfiguration_ = $GeodeConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$SpringFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpringFeature$$Type = ($SpringFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpringFeature_ = $SpringFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReplaceSphereConfiguration$$Type = ($ReplaceSphereConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReplaceSphereConfiguration_ = $ReplaceSphereConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$ReplaceBlobsFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReplaceBlobsFeature$$Type = ($ReplaceBlobsFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReplaceBlobsFeature_ = $ReplaceBlobsFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$TreeDecoratorType" {
import { $AlterGroundDecorator } from "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$AlterGroundDecorator"
import { $CocoaDecorator } from "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$CocoaDecorator"
import { $TreeDecorator, $TreeDecorator$$Type } from "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$TreeDecorator"
import { $BeehiveDecorator } from "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$BeehiveDecorator"
import { $AttachedToLeavesDecorator } from "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$AttachedToLeavesDecorator"
import { $TrunkVineDecorator } from "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$TrunkVineDecorator"
import { $LeaveVineDecorator } from "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$LeaveVineDecorator"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $TreeDecoratorType<P extends $TreeDecorator> {
static readonly "ALTER_GROUND": $TreeDecoratorType<$AlterGroundDecorator>
static readonly "ATTACHED_TO_LEAVES": $TreeDecoratorType<$AttachedToLeavesDecorator>
static readonly "BEEHIVE": $TreeDecoratorType<$BeehiveDecorator>
static readonly "COCOA": $TreeDecoratorType<$CocoaDecorator>
static readonly "LEAVE_VINE": $TreeDecoratorType<$LeaveVineDecorator>
static readonly "TRUNK_VINE": $TreeDecoratorType<$TrunkVineDecorator>

constructor(codec0: $Codec$$Type<P>)

public "codec"(): $Codec<P>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenTreeDecoratorType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenTreeDecoratorTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TreeDecoratorType$$Type<P extends $TreeDecorator> = ($TreeDecoratorType<P> | Special.WorldgenTreeDecoratorType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TreeDecoratorType_<P extends $TreeDecorator> = $TreeDecoratorType$$Type<P>;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$PointedDripstoneFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PointedDripstoneFeature$$Type = ($PointedDripstoneFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PointedDripstoneFeature_ = $PointedDripstoneFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$MultifaceGrowthFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MultifaceGrowthFeature$$Type = ($MultifaceGrowthFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MultifaceGrowthFeature_ = $MultifaceGrowthFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FeatureConfiguration$$Type = ($FeatureConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FeatureConfiguration_ = $FeatureConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$ChorusPlantFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChorusPlantFeature$$Type = ($ChorusPlantFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChorusPlantFeature_ = $ChorusPlantFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$SeaPickleFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SeaPickleFeature$$Type = ($SeaPickleFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SeaPickleFeature_ = $SeaPickleFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$SpruceFoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpruceFoliagePlacer$$Type = ($SpruceFoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpruceFoliagePlacer_ = $SpruceFoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$GlowstoneFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GlowstoneFeature$$Type = ($GlowstoneFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GlowstoneFeature_ = $GlowstoneFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$HugeBrownMushroomFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HugeBrownMushroomFeature$$Type = ($HugeBrownMushroomFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HugeBrownMushroomFeature_ = $HugeBrownMushroomFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$FoliagePlacer$FoliageSetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FoliagePlacer$FoliageSetter$$Type = ($FoliagePlacer$FoliageSetter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FoliagePlacer$FoliageSetter_ = $FoliagePlacer$FoliageSetter$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$VinesFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VinesFeature$$Type = ($VinesFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VinesFeature_ = $VinesFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NoneFeatureConfiguration$$Type = ($NoneFeatureConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NoneFeatureConfiguration_ = $NoneFeatureConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$DualNoiseProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DualNoiseProvider$$Type = ($DualNoiseProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DualNoiseProvider_ = $DualNoiseProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$RuleBasedBlockStateProvider$Rule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RuleBasedBlockStateProvider$Rule$$Type = ($RuleBasedBlockStateProvider$Rule);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RuleBasedBlockStateProvider$Rule_ = $RuleBasedBlockStateProvider$Rule$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockStateConfiguration$$Type = ($BlockStateConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockStateConfiguration_ = $BlockStateConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$IceSpikeFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IceSpikeFeature$$Type = ($IceSpikeFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IceSpikeFeature_ = $IceSpikeFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$SimpleBlockFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleBlockFeature$$Type = ($SimpleBlockFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleBlockFeature_ = $SimpleBlockFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/featuresize/$FeatureSizeType" {
import { $TwoLayersFeatureSize } from "packages/net/minecraft/world/level/levelgen/feature/featuresize/$TwoLayersFeatureSize"
import { $FeatureSize, $FeatureSize$$Type } from "packages/net/minecraft/world/level/levelgen/feature/featuresize/$FeatureSize"
import { $ThreeLayersFeatureSize } from "packages/net/minecraft/world/level/levelgen/feature/featuresize/$ThreeLayersFeatureSize"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $FeatureSizeType<P extends $FeatureSize> {
static readonly "THREE_LAYERS_FEATURE_SIZE": $FeatureSizeType<$ThreeLayersFeatureSize>
static readonly "TWO_LAYERS_FEATURE_SIZE": $FeatureSizeType<$TwoLayersFeatureSize>

constructor(codec0: $Codec$$Type<P>)

public "codec"(): $Codec<P>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenFeatureSizeType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenFeatureSizeTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FeatureSizeType$$Type<P extends $FeatureSize> = ($FeatureSizeType<P> | Special.WorldgenFeatureSizeType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FeatureSizeType_<P extends $FeatureSize> = $FeatureSizeType$$Type<P>;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$WeepingVinesFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WeepingVinesFeature$$Type = ($WeepingVinesFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WeepingVinesFeature_ = $WeepingVinesFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ColumnFeatureConfiguration$$Type = ($ColumnFeatureConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ColumnFeatureConfiguration_ = $ColumnFeatureConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$FillLayerFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FillLayerFeature$$Type = ($FillLayerFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FillLayerFeature_ = $FillLayerFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$DarkOakFoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DarkOakFoliagePlacer$$Type = ($DarkOakFoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DarkOakFoliagePlacer_ = $DarkOakFoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$MonsterRoomFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MonsterRoomFeature$$Type = ($MonsterRoomFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MonsterRoomFeature_ = $MonsterRoomFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CountConfiguration$$Type = ($CountConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CountConfiguration_ = $CountConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MultifaceGrowthConfiguration$$Type = ($MultifaceGrowthConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MultifaceGrowthConfiguration_ = $MultifaceGrowthConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$KelpFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KelpFeature$$Type = ($KelpFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KelpFeature_ = $KelpFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EndGatewayConfiguration$$Type = ($EndGatewayConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EndGatewayConfiguration_ = $EndGatewayConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$TreeDecorator$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TreeDecorator$Context$$Type = ($TreeDecorator$Context);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TreeDecorator$Context_ = $TreeDecorator$Context$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VegetationPatchConfiguration$$Type = ($VegetationPatchConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VegetationPatchConfiguration_ = $VegetationPatchConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LayerConfiguration$$Type = ($LayerConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LayerConfiguration_ = $LayerConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$GiantTrunkPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GiantTrunkPlacer$$Type = ($GiantTrunkPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GiantTrunkPlacer_ = $GiantTrunkPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$WeightedPlacedFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WeightedPlacedFeature$$Type = ($WeightedPlacedFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WeightedPlacedFeature_ = $WeightedPlacedFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TwistingVinesConfig$$Type = ($TwistingVinesConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TwistingVinesConfig_ = $TwistingVinesConfig$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$CherryTrunkPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CherryTrunkPlacer$$Type = ($CherryTrunkPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CherryTrunkPlacer_ = $CherryTrunkPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpringConfiguration$$Type = ($SpringConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpringConfiguration_ = $SpringConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$BlockBlobFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockBlobFeature$$Type = ($BlockBlobFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockBlobFeature_ = $BlockBlobFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HugeFungusConfiguration$$Type = ($HugeFungusConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HugeFungusConfiguration_ = $HugeFungusConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$IcebergFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IcebergFeature$$Type = ($IcebergFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IcebergFeature_ = $IcebergFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$MegaPineFoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MegaPineFoliagePlacer$$Type = ($MegaPineFoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MegaPineFoliagePlacer_ = $MegaPineFoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$SimpleStateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleStateProvider$$Type = ($SimpleStateProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleStateProvider_ = $SimpleStateProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$RandomSelectorFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomSelectorFeature$$Type = ($RandomSelectorFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomSelectorFeature_ = $RandomSelectorFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$BasaltColumnsFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BasaltColumnsFeature$$Type = ($BasaltColumnsFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BasaltColumnsFeature_ = $BasaltColumnsFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$RuleBasedBlockStateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RuleBasedBlockStateProvider$$Type = ($RuleBasedBlockStateProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RuleBasedBlockStateProvider_ = $RuleBasedBlockStateProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$NetherForestVegetationFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetherForestVegetationFeature$$Type = ($NetherForestVegetationFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetherForestVegetationFeature_ = $NetherForestVegetationFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$CoralFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CoralFeature$$Type = ($CoralFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CoralFeature_ = $CoralFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$OreFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OreFeature$$Type = ($OreFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OreFeature_ = $OreFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$FoliagePlacerType" {
import { $PineFoliagePlacer } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$PineFoliagePlacer"
import { $MegaJungleFoliagePlacer } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$MegaJungleFoliagePlacer"
import { $SpruceFoliagePlacer } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$SpruceFoliagePlacer"
import { $BushFoliagePlacer } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$BushFoliagePlacer"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $RandomSpreadFoliagePlacer } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$RandomSpreadFoliagePlacer"
import { $DarkOakFoliagePlacer } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$DarkOakFoliagePlacer"
import { $FancyFoliagePlacer } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$FancyFoliagePlacer"
import { $AcaciaFoliagePlacer } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$AcaciaFoliagePlacer"
import { $FoliagePlacer, $FoliagePlacer$$Type } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$FoliagePlacer"
import { $BlobFoliagePlacer } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$BlobFoliagePlacer"
import { $MegaPineFoliagePlacer } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$MegaPineFoliagePlacer"
import { $CherryFoliagePlacer } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$CherryFoliagePlacer"

export class $FoliagePlacerType<P extends $FoliagePlacer> {
static readonly "ACACIA_FOLIAGE_PLACER": $FoliagePlacerType<$AcaciaFoliagePlacer>
static readonly "BLOB_FOLIAGE_PLACER": $FoliagePlacerType<$BlobFoliagePlacer>
static readonly "BUSH_FOLIAGE_PLACER": $FoliagePlacerType<$BushFoliagePlacer>
static readonly "CHERRY_FOLIAGE_PLACER": $FoliagePlacerType<$CherryFoliagePlacer>
static readonly "DARK_OAK_FOLIAGE_PLACER": $FoliagePlacerType<$DarkOakFoliagePlacer>
static readonly "FANCY_FOLIAGE_PLACER": $FoliagePlacerType<$FancyFoliagePlacer>
static readonly "MEGA_JUNGLE_FOLIAGE_PLACER": $FoliagePlacerType<$MegaJungleFoliagePlacer>
static readonly "MEGA_PINE_FOLIAGE_PLACER": $FoliagePlacerType<$MegaPineFoliagePlacer>
static readonly "PINE_FOLIAGE_PLACER": $FoliagePlacerType<$PineFoliagePlacer>
static readonly "RANDOM_SPREAD_FOLIAGE_PLACER": $FoliagePlacerType<$RandomSpreadFoliagePlacer>
static readonly "SPRUCE_FOLIAGE_PLACER": $FoliagePlacerType<$SpruceFoliagePlacer>

constructor(codec0: $Codec$$Type<P>)

public "codec"(): $Codec<P>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenFoliagePlacerType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenFoliagePlacerTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FoliagePlacerType$$Type<P extends $FoliagePlacer> = ($FoliagePlacerType<P> | Special.WorldgenFoliagePlacerType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FoliagePlacerType_<P extends $FoliagePlacer> = $FoliagePlacerType$$Type<P>;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BonusChestFeature$$Type = ($BonusChestFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BonusChestFeature_ = $BonusChestFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TreeConfiguration$$Type = ($TreeConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TreeConfiguration_ = $TreeConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$BushFoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BushFoliagePlacer$$Type = ($BushFoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BushFoliagePlacer_ = $BushFoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$NoOpFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NoOpFeature$$Type = ($NoOpFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NoOpFeature_ = $NoOpFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$FossilFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FossilFeature$$Type = ($FossilFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FossilFeature_ = $FossilFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SeagrassFeature$$Type = ($SeagrassFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SeagrassFeature_ = $SeagrassFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$TreeFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TreeFeature$$Type = ($TreeFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TreeFeature_ = $TreeFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockPileConfiguration$$Type = ($BlockPileConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockPileConfiguration_ = $BlockPileConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration$Layer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockColumnConfiguration$Layer$$Type = ($BlockColumnConfiguration$Layer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockColumnConfiguration$Layer_ = $BlockColumnConfiguration$Layer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/rootplacers/$MangroveRootPlacement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MangroveRootPlacement$$Type = ($MangroveRootPlacement);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MangroveRootPlacement_ = $MangroveRootPlacement$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$BeehiveDecorator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BeehiveDecorator$$Type = ($BeehiveDecorator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BeehiveDecorator_ = $BeehiveDecorator$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/rootplacers/$RootPlacerType" {
import { $RootPlacer, $RootPlacer$$Type } from "packages/net/minecraft/world/level/levelgen/feature/rootplacers/$RootPlacer"
import { $MangroveRootPlacer } from "packages/net/minecraft/world/level/levelgen/feature/rootplacers/$MangroveRootPlacer"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $RootPlacerType<P extends $RootPlacer> {
static readonly "MANGROVE_ROOT_PLACER": $RootPlacerType<$MangroveRootPlacer>

constructor(codec0: $Codec$$Type<P>)

public "codec"(): $Codec<P>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenRootPlacerType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenRootPlacerTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RootPlacerType$$Type<P extends $RootPlacer> = ($RootPlacerType<P> | Special.WorldgenRootPlacerType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RootPlacerType_<P extends $RootPlacer> = $RootPlacerType$$Type<P>;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature" {
import { $HolderSet } from "packages/net/minecraft/core/$HolderSet"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Record } from "packages/java/lang/$Record"
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $FeatureConfiguration, $FeatureConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import { $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Feature, $Feature$$Type } from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ConfiguredFeature<FC extends $FeatureConfiguration, F extends $Feature<FC>> extends $Record {
static readonly "CODEC": $Codec<$Holder<$ConfiguredFeature<any, any>>>
static readonly "DIRECT_CODEC": $Codec<$ConfiguredFeature<any, any>>
static readonly "LIST_CODEC": $Codec<$HolderSet<$ConfiguredFeature<any, any>>>

constructor(f0: F, fc1: FC)

public "config"(): FC
public "feature"(): F
public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "place"(worldGenLevel0: $WorldGenLevel$$Type, chunkGenerator1: $ChunkGenerator$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type): boolean
get "features"(): $Stream<$ConfiguredFeature<any, any>>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenConfiguredFeature
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenConfiguredFeatureTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfiguredFeature$$Type<FC extends $FeatureConfiguration, F extends $Feature<FC>> = ($ConfiguredFeature<FC, F> | Special.WorldgenConfiguredFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfiguredFeature_<FC extends $FeatureConfiguration, F extends $Feature<FC>> = $ConfiguredFeature$$Type<FC, F>;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$LeaveVineDecorator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LeaveVineDecorator$$Type = ($LeaveVineDecorator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LeaveVineDecorator_ = $LeaveVineDecorator$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$ForkingTrunkPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForkingTrunkPlacer$$Type = ($ForkingTrunkPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForkingTrunkPlacer_ = $ForkingTrunkPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$FancyTrunkPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FancyTrunkPlacer$$Type = ($FancyTrunkPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FancyTrunkPlacer_ = $FancyTrunkPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$RandomizedIntStateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomizedIntStateProvider$$Type = ($RandomizedIntStateProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomizedIntStateProvider_ = $RandomizedIntStateProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$SnowAndFreezeFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SnowAndFreezeFeature$$Type = ($SnowAndFreezeFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SnowAndFreezeFeature_ = $SnowAndFreezeFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$DeltaFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DeltaFeature$$Type = ($DeltaFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DeltaFeature_ = $DeltaFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$WaterloggedVegetationPatchFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaterloggedVegetationPatchFeature$$Type = ($WaterloggedVegetationPatchFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaterloggedVegetationPatchFeature_ = $WaterloggedVegetationPatchFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$TrunkVineDecorator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TrunkVineDecorator$$Type = ($TrunkVineDecorator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TrunkVineDecorator_ = $TrunkVineDecorator$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleRandomFeatureConfiguration$$Type = ($SimpleRandomFeatureConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleRandomFeatureConfiguration_ = $SimpleRandomFeatureConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$GeodeFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeodeFeature$$Type = ($GeodeFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeodeFeature_ = $GeodeFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$DesertWellFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DesertWellFeature$$Type = ($DesertWellFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DesertWellFeature_ = $DesertWellFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$EndGatewayFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EndGatewayFeature$$Type = ($EndGatewayFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EndGatewayFeature_ = $EndGatewayFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomFeatureConfiguration$$Type = ($RandomFeatureConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomFeatureConfiguration_ = $RandomFeatureConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomBooleanFeatureConfiguration$$Type = ($RandomBooleanFeatureConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomBooleanFeatureConfiguration_ = $RandomBooleanFeatureConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DeltaFeatureConfiguration$$Type = ($DeltaFeatureConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DeltaFeatureConfiguration_ = $DeltaFeatureConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$BlueIceFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlueIceFeature$$Type = ($BlueIceFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlueIceFeature_ = $BlueIceFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$DarkOakTrunkPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DarkOakTrunkPlacer$$Type = ($DarkOakTrunkPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DarkOakTrunkPlacer_ = $DarkOakTrunkPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RootSystemConfiguration$$Type = ($RootSystemConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RootSystemConfiguration_ = $RootSystemConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$VoidStartPlatformFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VoidStartPlatformFeature$$Type = ($VoidStartPlatformFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VoidStartPlatformFeature_ = $VoidStartPlatformFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$TrunkPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TrunkPlacer$$Type = ($TrunkPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TrunkPlacer_ = $TrunkPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$NoiseProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NoiseProvider$$Type = ($NoiseProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NoiseProvider_ = $NoiseProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$SpikeFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpikeFeature$$Type = ($SpikeFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpikeFeature_ = $SpikeFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UnderwaterMagmaConfiguration$$Type = ($UnderwaterMagmaConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UnderwaterMagmaConfiguration_ = $UnderwaterMagmaConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$StraightTrunkPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StraightTrunkPlacer$$Type = ($StraightTrunkPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StraightTrunkPlacer_ = $StraightTrunkPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$ScatteredOreFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScatteredOreFeature$$Type = ($ScatteredOreFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScatteredOreFeature_ = $ScatteredOreFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$EndIslandFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EndIslandFeature$$Type = ($EndIslandFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EndIslandFeature_ = $EndIslandFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$NoiseBasedStateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NoiseBasedStateProvider$$Type = ($NoiseBasedStateProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NoiseBasedStateProvider_ = $NoiseBasedStateProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DiskConfiguration$$Type = ($DiskConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DiskConfiguration_ = $DiskConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/rootplacers/$MangroveRootPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MangroveRootPlacer$$Type = ($MangroveRootPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MangroveRootPlacer_ = $MangroveRootPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$BlobFoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlobFoliagePlacer$$Type = ($BlobFoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlobFoliagePlacer_ = $BlobFoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PointedDripstoneConfiguration$$Type = ($PointedDripstoneConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PointedDripstoneConfiguration_ = $PointedDripstoneConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$RandomBooleanSelectorFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomBooleanSelectorFeature$$Type = ($RandomBooleanSelectorFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomBooleanSelectorFeature_ = $RandomBooleanSelectorFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$WeightedStateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WeightedStateProvider$$Type = ($WeightedStateProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WeightedStateProvider_ = $WeightedStateProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$CoralTreeFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CoralTreeFeature$$Type = ($CoralTreeFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CoralTreeFeature_ = $CoralTreeFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$Feature" {
import { $RandomFeatureConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import { $SpikeConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import { $MultifaceGrowthConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import { $RootSystemConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import { $UnderwaterMagmaConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import { $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $TwistingVinesConfig } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import { $FeaturePlaceContext$$Type } from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import { $HugeMushroomFeatureConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $HugeFungusConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import { $DeltaFeatureConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import { $FossilFeatureConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import { $BlockPileConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import { $OreConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $SculkPatchConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import { $GeodeConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import { $NetherForestVegetationConfig } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import { $ConfiguredFeature } from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import { $RandomBooleanFeatureConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import { $ColumnFeatureConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import { $CountConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import { $VegetationPatchConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import { $BonusChestFeature } from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $LakeFeature$Configuration } from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import { $BlockColumnConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import { $RandomPatchConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $ProbabilityFeatureConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $TreeConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $DripstoneClusterConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import { $LayerConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import { $ReplaceBlockConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import { $BlockStateConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import { $SimpleBlockConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import { $DiskConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import { $SeagrassFeature } from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import { $ReplaceSphereConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $PointedDripstoneConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import { $SpringConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $FeatureConfiguration, $FeatureConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import { $SimpleRandomFeatureConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import { $LargeDripstoneConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import { $LevelSimulatedReader$$Type } from "packages/net/minecraft/world/level/$LevelSimulatedReader"
import { $NoneFeatureConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import { $EndGatewayConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $Feature<FC extends $FeatureConfiguration> {
static readonly "BAMBOO": $Feature<$ProbabilityFeatureConfiguration>
static readonly "BASALT_COLUMNS": $Feature<$ColumnFeatureConfiguration>
static readonly "BASALT_PILLAR": $Feature<$NoneFeatureConfiguration>
static readonly "BLOCK_COLUMN": $Feature<$BlockColumnConfiguration>
static readonly "BLOCK_PILE": $Feature<$BlockPileConfiguration>
static readonly "BLUE_ICE": $Feature<$NoneFeatureConfiguration>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "CHORUS_PLANT": $Feature<$NoneFeatureConfiguration>
static readonly "CORAL_CLAW": $Feature<$NoneFeatureConfiguration>
static readonly "CORAL_MUSHROOM": $Feature<$NoneFeatureConfiguration>
static readonly "CORAL_TREE": $Feature<$NoneFeatureConfiguration>
static readonly "DELTA_FEATURE": $Feature<$DeltaFeatureConfiguration>
static readonly "DESERT_WELL": $Feature<$NoneFeatureConfiguration>
static readonly "DISK": $Feature<$DiskConfiguration>
static readonly "DRIPSTONE_CLUSTER": $Feature<$DripstoneClusterConfiguration>
static readonly "END_GATEWAY": $Feature<$EndGatewayConfiguration>
static readonly "END_ISLAND": $Feature<$NoneFeatureConfiguration>
static readonly "END_SPIKE": $Feature<$SpikeConfiguration>
static readonly "FILL_LAYER": $Feature<$LayerConfiguration>
static readonly "FLOWER": $Feature<$RandomPatchConfiguration>
static readonly "FOREST_ROCK": $Feature<$BlockStateConfiguration>
static readonly "FOSSIL": $Feature<$FossilFeatureConfiguration>
static readonly "FREEZE_TOP_LAYER": $Feature<$NoneFeatureConfiguration>
static readonly "GEODE": $Feature<$GeodeConfiguration>
static readonly "GLOWSTONE_BLOB": $Feature<$NoneFeatureConfiguration>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<$HugeMushroomFeatureConfiguration>
static readonly "HUGE_FUNGUS": $Feature<$HugeFungusConfiguration>
static readonly "HUGE_RED_MUSHROOM": $Feature<$HugeMushroomFeatureConfiguration>
static readonly "ICEBERG": $Feature<$BlockStateConfiguration>
static readonly "ICE_SPIKE": $Feature<$NoneFeatureConfiguration>
static readonly "KELP": $Feature<$NoneFeatureConfiguration>
static readonly "LAKE": $Feature<$LakeFeature$Configuration>
static readonly "LARGE_DRIPSTONE": $Feature<$LargeDripstoneConfiguration>
static readonly "MONSTER_ROOM": $Feature<$NoneFeatureConfiguration>
static readonly "MULTIFACE_GROWTH": $Feature<$MultifaceGrowthConfiguration>
static readonly "NETHER_FOREST_VEGETATION": $Feature<$NetherForestVegetationConfig>
static readonly "NO_BONEMEAL_FLOWER": $Feature<$RandomPatchConfiguration>
static readonly "NO_OP": $Feature<$NoneFeatureConfiguration>
static readonly "ORE": $Feature<$OreConfiguration>
static readonly "POINTED_DRIPSTONE": $Feature<$PointedDripstoneConfiguration>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<$RandomBooleanFeatureConfiguration>
static readonly "RANDOM_PATCH": $Feature<$RandomPatchConfiguration>
static readonly "RANDOM_SELECTOR": $Feature<$RandomFeatureConfiguration>
static readonly "REPLACE_BLOBS": $Feature<$ReplaceSphereConfiguration>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<$ReplaceBlockConfiguration>
static readonly "ROOT_SYSTEM": $Feature<$RootSystemConfiguration>
static readonly "SCATTERED_ORE": $Feature<$OreConfiguration>
static readonly "SCULK_PATCH": $Feature<$SculkPatchConfiguration>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "SEA_PICKLE": $Feature<$CountConfiguration>
static readonly "SIMPLE_BLOCK": $Feature<$SimpleBlockConfiguration>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<$SimpleRandomFeatureConfiguration>
static readonly "SPRING": $Feature<$SpringConfiguration>
static readonly "TREE": $Feature<$TreeConfiguration>
static readonly "TWISTING_VINES": $Feature<$TwistingVinesConfig>
static readonly "UNDERWATER_MAGMA": $Feature<$UnderwaterMagmaConfiguration>
static readonly "VEGETATION_PATCH": $Feature<$VegetationPatchConfiguration>
static readonly "VINES": $Feature<$NoneFeatureConfiguration>
static readonly "VOID_START_PLATFORM": $Feature<$NoneFeatureConfiguration>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<$VegetationPatchConfiguration>
static readonly "WEEPING_VINES": $Feature<$NoneFeatureConfiguration>

constructor(codec0: $Codec$$Type<FC>)

public static "checkNeighbors"(function0: $Function$$Type<$BlockPos$$Type, $BlockState>, blockPos1: $BlockPos$$Type, predicate2: $Predicate$$Type<$BlockState$$Type>): boolean
public "configuredCodec"(): $Codec<$ConfiguredFeature<FC, $Feature<FC>>>
public static "isAdjacentToAir"(function0: $Function$$Type<$BlockPos$$Type, $BlockState>, blockPos1: $BlockPos$$Type): boolean
public static "isDirt"(blockState0: $BlockState$$Type): boolean
public static "isGrassOrDirt"(levelSimulatedReader0: $LevelSimulatedReader$$Type, blockPos1: $BlockPos$$Type): boolean
public static "isReplaceable"(tagKey0: $TagKey$$Type<$Block$$Type>): $Predicate<$BlockState>
public "place"(featurePlaceContext0: $FeaturePlaceContext$$Type<FC>): boolean
public "place"(fc0: FC, worldGenLevel1: $WorldGenLevel$$Type, chunkGenerator2: $ChunkGenerator$$Type, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type): boolean
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenFeature
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenFeatureTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Feature$$Type<FC extends $FeatureConfiguration> = ($Feature<FC> | Special.WorldgenFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Feature_<FC extends $FeatureConfiguration> = $Feature$$Type<FC>;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration$TargetBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OreConfiguration$TargetBlockState$$Type = ($OreConfiguration$TargetBlockState);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OreConfiguration$TargetBlockState_ = $OreConfiguration$TargetBlockState$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$UnderwaterMagmaFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UnderwaterMagmaFeature$$Type = ($UnderwaterMagmaFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UnderwaterMagmaFeature_ = $UnderwaterMagmaFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$FoliagePlacer$FoliageAttachment" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FoliagePlacer$FoliageAttachment$$Type = ($FoliagePlacer$FoliageAttachment);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FoliagePlacer$FoliageAttachment_ = $FoliagePlacer$FoliageAttachment$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/featuresize/$ThreeLayersFeatureSize" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ThreeLayersFeatureSize$$Type = ($ThreeLayersFeatureSize);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ThreeLayersFeatureSize_ = $ThreeLayersFeatureSize$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$AttachedToLeavesDecorator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttachedToLeavesDecorator$$Type = ($AttachedToLeavesDecorator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttachedToLeavesDecorator_ = $AttachedToLeavesDecorator$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$UpwardsBranchingTrunkPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UpwardsBranchingTrunkPlacer$$Type = ($UpwardsBranchingTrunkPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UpwardsBranchingTrunkPlacer_ = $UpwardsBranchingTrunkPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$TwistingVinesFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TwistingVinesFeature$$Type = ($TwistingVinesFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TwistingVinesFeature_ = $TwistingVinesFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$BasaltPillarFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BasaltPillarFeature$$Type = ($BasaltPillarFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BasaltPillarFeature_ = $BasaltPillarFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$BlockColumnFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockColumnFeature$$Type = ($BlockColumnFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockColumnFeature_ = $BlockColumnFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$SpikeFeature$EndSpike" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpikeFeature$EndSpike$$Type = ($SpikeFeature$EndSpike);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpikeFeature$EndSpike_ = $SpikeFeature$EndSpike$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$DripstoneClusterFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DripstoneClusterFeature$$Type = ($DripstoneClusterFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DripstoneClusterFeature_ = $DripstoneClusterFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LargeDripstoneConfiguration$$Type = ($LargeDripstoneConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LargeDripstoneConfiguration_ = $LargeDripstoneConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$RandomPatchFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomPatchFeature$$Type = ($RandomPatchFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomPatchFeature_ = $RandomPatchFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OreConfiguration$$Type = ($OreConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OreConfiguration_ = $OreConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/rootplacers/$RootPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RootPlacer$$Type = ($RootPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RootPlacer_ = $RootPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$CocoaDecorator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CocoaDecorator$$Type = ($CocoaDecorator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CocoaDecorator_ = $CocoaDecorator$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/rootplacers/$AboveRootPlacement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AboveRootPlacement$$Type = ($AboveRootPlacement);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AboveRootPlacement_ = $AboveRootPlacement$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/featuresize/$TwoLayersFeatureSize" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TwoLayersFeatureSize$$Type = ($TwoLayersFeatureSize);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TwoLayersFeatureSize_ = $TwoLayersFeatureSize$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockColumnConfiguration$$Type = ($BlockColumnConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockColumnConfiguration_ = $BlockColumnConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$TreeDecorator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TreeDecorator$$Type = ($TreeDecorator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TreeDecorator_ = $TreeDecorator$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext" {
import { $FeatureConfiguration, $FeatureConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FeaturePlaceContext$$Type<FC extends $FeatureConfiguration> = ($FeaturePlaceContext<FC>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FeaturePlaceContext_<FC extends $FeatureConfiguration> = $FeaturePlaceContext$$Type<FC>;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LakeFeature$Configuration$$Type = ($LakeFeature$Configuration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LakeFeature$Configuration_ = $LakeFeature$Configuration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$MegaJungleTrunkPlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MegaJungleTrunkPlacer$$Type = ($MegaJungleTrunkPlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MegaJungleTrunkPlacer_ = $MegaJungleTrunkPlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LakeFeature$$Type = ($LakeFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LakeFeature_ = $LakeFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$MegaJungleFoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MegaJungleFoliagePlacer$$Type = ($MegaJungleFoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MegaJungleFoliagePlacer_ = $MegaJungleFoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$CoralClawFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CoralClawFeature$$Type = ($CoralClawFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CoralClawFeature_ = $CoralClawFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ProbabilityFeatureConfiguration$$Type = ($ProbabilityFeatureConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ProbabilityFeatureConfiguration_ = $ProbabilityFeatureConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$NoiseThresholdProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NoiseThresholdProvider$$Type = ($NoiseThresholdProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NoiseThresholdProvider_ = $NoiseThresholdProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$CherryFoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CherryFoliagePlacer$$Type = ($CherryFoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CherryFoliagePlacer_ = $CherryFoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DripstoneClusterConfiguration$$Type = ($DripstoneClusterConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DripstoneClusterConfiguration_ = $DripstoneClusterConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReplaceBlockConfiguration$$Type = ($ReplaceBlockConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReplaceBlockConfiguration_ = $ReplaceBlockConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockStateProvider$$Type = ($BlockStateProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockStateProvider_ = $BlockStateProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$RootSystemFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RootSystemFeature$$Type = ($RootSystemFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RootSystemFeature_ = $RootSystemFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$LargeDripstoneFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LargeDripstoneFeature$$Type = ($LargeDripstoneFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LargeDripstoneFeature_ = $LargeDripstoneFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$SimpleRandomSelectorFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleRandomSelectorFeature$$Type = ($SimpleRandomSelectorFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleRandomSelectorFeature_ = $SimpleRandomSelectorFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetherForestVegetationConfig$$Type = ($NetherForestVegetationConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetherForestVegetationConfig_ = $NetherForestVegetationConfig$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$BambooFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BambooFeature$$Type = ($BambooFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BambooFeature_ = $BambooFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$DiskFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DiskFeature$$Type = ($DiskFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DiskFeature_ = $DiskFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleBlockConfiguration$$Type = ($SimpleBlockConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleBlockConfiguration_ = $SimpleBlockConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$SculkPatchFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SculkPatchFeature$$Type = ($SculkPatchFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SculkPatchFeature_ = $SculkPatchFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$CoralMushroomFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CoralMushroomFeature$$Type = ($CoralMushroomFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CoralMushroomFeature_ = $CoralMushroomFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SculkPatchConfiguration$$Type = ($SculkPatchConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SculkPatchConfiguration_ = $SculkPatchConfiguration$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$FoliagePlacer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FoliagePlacer$$Type = ($FoliagePlacer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FoliagePlacer_ = $FoliagePlacer$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$HugeRedMushroomFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HugeRedMushroomFeature$$Type = ($HugeRedMushroomFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HugeRedMushroomFeature_ = $HugeRedMushroomFeature$$Type;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProviderType" {
import { $NoiseThresholdProvider } from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$NoiseThresholdProvider"
import { $RotatedBlockProvider } from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$RotatedBlockProvider"
import { $BlockStateProvider, $BlockStateProvider$$Type } from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import { $DualNoiseProvider } from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$DualNoiseProvider"
import { $RandomizedIntStateProvider } from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$RandomizedIntStateProvider"
import { $SimpleStateProvider } from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$SimpleStateProvider"
import { $WeightedStateProvider } from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$WeightedStateProvider"
import { $NoiseProvider } from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$NoiseProvider"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $BlockStateProviderType<P extends $BlockStateProvider> {
static readonly "DUAL_NOISE_PROVIDER": $BlockStateProviderType<$DualNoiseProvider>
static readonly "NOISE_PROVIDER": $BlockStateProviderType<$NoiseProvider>
static readonly "NOISE_THRESHOLD_PROVIDER": $BlockStateProviderType<$NoiseThresholdProvider>
static readonly "RANDOMIZED_INT_STATE_PROVIDER": $BlockStateProviderType<$RandomizedIntStateProvider>
static readonly "ROTATED_BLOCK_PROVIDER": $BlockStateProviderType<$RotatedBlockProvider>
static readonly "SIMPLE_STATE_PROVIDER": $BlockStateProviderType<$SimpleStateProvider>
static readonly "WEIGHTED_STATE_PROVIDER": $BlockStateProviderType<$WeightedStateProvider>

constructor(codec0: $Codec$$Type<P>)

public "codec"(): $Codec<P>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenBlockStateProviderType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenBlockStateProviderTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockStateProviderType$$Type<P extends $BlockStateProvider> = ($BlockStateProviderType<P> | Special.WorldgenBlockStateProviderType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockStateProviderType_<P extends $BlockStateProvider> = $BlockStateProviderType$$Type<P>;
}
}

declare module "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HugeFungusFeature$$Type = ($HugeFungusFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HugeFungusFeature_ = $HugeFungusFeature$$Type;
}
}

