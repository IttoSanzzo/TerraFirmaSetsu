// priority: 198

function setSacksAndSuch(event) {
	event.remove({ id: "sns:crafting/pack_frame" });
	event.remove({ id: "sns:heating/pack_frame" });

	event.remove({ id: "sns:crafting/frame_pack" });
	addDamageShaped(event, `sns:frame_pack`, ["SCS", "SOS", " CN"], {
		S: "sns:bound_leather_strip",
		C: "sns:reinforced_fabric",
		O: "thermal:satchel",
		N: "tfc:bone_needle"
	});
}
