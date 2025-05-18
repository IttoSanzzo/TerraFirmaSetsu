// priority: 198

function setRecipesToolbelt(event) {
	event.remove({ id: "toolbelt:belt" });
	event.remove({ id: "toolbelt:pouch" });

	addDamageShaped(event, "toolbelt:belt", ["VSN", "BLB", " U "], {
		V: "#tfc:metal/shearss",
		S: "#forge:string",
		N: "tfc:bone_needle",
		L: "#tfc:leather_knapping",
		B: "toolbelt:pouch",
		U: "#forge:nuggets"
	});

	addDamageShaped(event, "toolbelt:pouch", ["VSN", "UL "], {
		V: "#tfc:metal/shearss",
		S: "#forge:string",
		N: "tfc:bone_needle",
		U: "#forge:nuggets",
		L: "#tfc:leather_knapping"
	});
}
