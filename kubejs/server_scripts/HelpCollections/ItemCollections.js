//priority: 999

function ItemCollections() {
	const globalCol = {
		setVar(key, value) {
			this[key] = value;
		}
	};
	return (globalCol);
}
const ItemCol = ItemCollections();
ItemCol.setVar("tfcCrops", [
	"barley",
	"oat",
	"rye",
	"maize",
	"wheat",
	"rice",
	"beet",
	"cabbage",
	"carrot",
	"garlic",
	"green_bean",
	"potato",
	"onion",
	"soybean",
	"squash",
	"sugarcane",
	"tomato"
]);
ItemCol.setVar("tfcNonFoodSeeds", [
	"jute",
	"papyrus",
	"pumpkin",
	"melon",
	"red_bell_pepper",
	"yellow_bell_pepper"
]);
ItemCol.setVar("tfcAllCrops", [
	"barley",
	"oat",
	"rye",
	"maize",
	"wheat",
	"rice",
	"beet",
	"cabbage",
	"carrot",
	"garlic",
	"green_bean",
	"potato",
	"onion",
	"soybean",
	"squash",
	"sugarcane",
	"tomato",
	"jute",
	"papyrus",
	"pumpkin",
	"melon",
	"red_bell_pepper",
	"yellow_bell_pepper"
]);
ItemCol.setVar("allVanillaWoodTypes", [
	"oak",
	"spruce",
	"birch",
	"jungle",
	"acacia",
	"dark_oak",
	"mangrove",
	"cherry",
	"crimson",
	"warped"
]);
ItemCol.setVar("allVanillaWoodTypesBamboo", [
	"oak",
	"spruce",
	"birch",
	"jungle",
	"acacia",
	"dark_oak",
	"mangrove",
	"cherry",
	"crimson",
	"warped",
	"bamboo"
]);
ItemCol.setVar("tfcWoodTypes", [
	"acacia",
	"ash",
	"aspen",
	"birch",
	"blackwood",
	"chestnut",
	"douglas_fir",
	"hickory",
	"kapok",
	"mangrove",
	"maple",
	"oak",
	"palm",
	"pine",
	"rosewood",
	"sequoia",
	"spruce",
	"sycamore",
	"white_cedar",
	"willow"
]);
ItemCol.setVar("tfcWoodTypesWithNether", [
	"acacia",
	"ash",
	"aspen",
	"birch",
	"blackwood",
	"chestnut",
	"douglas_fir",
	"hickory",
	"kapok",
	"mangrove",
	"maple",
	"oak",
	"palm",
	"pine",
	"rosewood",
	"sequoia",
	"spruce",
	"sycamore",
	"white_cedar",
	"willow",
	"crimson",
	"warped"
]);
ItemCol.setVar("tfcFruitTypes", [
	"cherry",
	"green_apple",
	"orange",
	"lemon",
	"olive",
	"peach",
	"plum",
	"red_apple",
	"banana",
]);
ItemCol.setVar("tfcGrains", [
	"barley",
	"maize",
	"oat",
	"rye",
	"rice",
	"wheat"
]);
ItemCol.setVar("tfcDirtTypes", [
	"loam",
	"sandy_loam",
	"silt",
	"silty_loam"
]);
ItemCol.setVar("tfcStoneTypes", [
	"granite",
	"diorite",
	"gabbro",
	"shale",
	"claystone",
	"limestone",
	"conglomerate",
	"dolomite",
	"chert",
	"chalk",
	"rhyolite",
	"basalt",
	"andesite",
	"dacite",
	"quartzite",
	"slate",
	"phyllite",
	"schist",
	"gneiss",
	"marble"
]);
ItemCol.setVar("tfcMetals", [
	"copper",
	"bronze",
	"bismuth_bronze",
	"black_bronze",
	"wrought_iron",
	"steel",
	"black_steel",
	"blue_steel",
	"red_steel"
]);
ItemCol.setVar("tfcMetalOreTypes", [
	"native_copper",
	"native_gold",
	"native_silver",
	"hematite",
	"cassiterite",
	"bismuthinite",
	"garnierite",
	"malachite",
	"magnetite",
	"limonite",
	"sphalerite",
	"tetrahedrite",
]);
ItemCol.setVar("tfcMineralTypes", [
	// "kaolinite",
	"gypsum",
	"graphite",
	"sulfur",
	"cinnabar",
	"cryolite",
	"saltpeter",
	"sylvite",
	"borax",
	"halite"
]);
ItemCol.setVar("tfcGemTypes", [
	"amethyst",
	"diamond",
	"emerald",
	"lapis_lazuli",
	"opal",
	"pyrite",
	"ruby",
	"sapphire",
	"topaz"
]);
ItemCol.setVar("tfcStoneToolTypes", [
	"igneous_extrusive",
	"igneous_intrusive",
	"metamorphic",
	"sedimentary"
]);
ItemCol.setVar("tfcTools", [
	"pickaxe",
	"propick",
	"axe",
	"shovel",
	"hoe",
	"chisel",
	"hammer",
	"saw",
	"knife",
	"scythe",
	"javelin",
	"sword",
	"mace",
	"shears"
]);
ItemCol.setVar("tfcBerries", [
	"blackberry",
	"blueberry",
	"bunchberry",
	"cloudberry",
	"cranberry",
	"elderberry",
	"gooseberry",
	"raspberry",
	"snowberry",
	"strawberry",
	"wintergreen_berry",
]);
ItemCol.setVar("tfcBigFruits", [
	"red_apple",
	"green_apple",
	"peach",
	"orange",
	"banana",
	"plum",
	"olive",
	"lemon",
	"cherry"
]);
ItemCol.setVar("allDyes", [
	"white",
	"orange",
	"magenta",
	"light_blue",
	"yellow",
	"lime",
	"pink",
	"gray",
	"light_gray",
	"cyan",
	"purple",
	"blue",
	"brown",
	"green",
	"red",
	"black"
]);
ItemCol.setVar("waterBottleSources", [
	"minecraft:water",
	"tfc:fluid/spring_water",
	"tfc:fluid/river_water",
	"tfc:fluid/salt_water",
]);