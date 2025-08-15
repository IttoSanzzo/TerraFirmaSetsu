// priority: 198

function setRecipesTrottingWagons(event) {
	event.remove({ output: "trotting_wagons:wheel" })

	event.remove({ output: "trotting_wagons:armored_wagon" })
	event.shaped("trotting_wagons:armored_wagon", ["LLL", "MCM", "WOW"], {
		L: "#setsu:treated_lumber",
		M: "tfc:metal/sheet/wrought_iron",
		C: "tfc:brass_mechanisms",
		W: "#tfcastikorcarts:cart_wheel",
		O: "#tfcastikorcarts:animal_cart"
	}).id("setsu:trotting_wagons/armored_wagon");

	event.remove({ output: "trotting_wagons:royal_wagon" })
	event.shaped(Item.of('trotting_wagons:royal_wagon', '{color:0}'), ["LLL", "MCM", "WOW"], {
		L: "#setsu:treated_lumber",
		M: "#tfc:high_quality_cloth",
		C: "tfc:brass_mechanisms",
		W: "#tfcastikorcarts:cart_wheel",
		O: "#tfcastikorcarts:animal_cart"
	}).id("setsu:trotting_wagons/royal_wagon");

	event.remove({ output: "trotting_wagons:conestoga_wagon" })
	event.shaped(Item.of('trotting_wagons:conestoga_wagon', '{color:0}'), ["LLL", "MCM", "WOW"], {
		L: "#tfc:high_quality_cloth",
		M: "#tfcbarrels:barrels",
		C: "tfc:brass_mechanisms",
		W: "#tfcastikorcarts:cart_wheel",
		O: "#tfcastikorcarts:supply_cart"
	}).id("setsu:trotting_wagons/conestoga_wagon");
}
