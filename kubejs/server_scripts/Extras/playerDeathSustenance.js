//priority: 900

function playerDeathSustenance() {
	PlayerEvents.respawned((event) => {
		let player = event.player;
		let pData = player.persistentData;
		pData.putInt("timeWhenOldestDeath", pData.getInt("timeWhenLatestDeath"));
		pData.putInt("timeWhenLatestDeath", player.stats.playTime);
		SustenanceRespawnSwitch(event.server, event.player);
	})

	function SustenanceRespawnSwitch(server, player) {
		server.scheduleInTicks(20, () => {
			if (
				player.persistentData.getInt("timeWhenOldestDeath") != 0 &&
				player.persistentData.getInt("timeWhenLatestDeath") -
				player.persistentData.getInt("timeWhenOldestDeath") <
				(600 * 20))
				updatePlayerSustenance(0, 4, 18, "Can't you even go without dying for 10 minutes?", server, player);
			else if (
				player.persistentData.getInt("timeWhenOldestDeath") != 0 &&
				player.persistentData.getInt("timeWhenLatestDeath") -
				player.persistentData.getInt("timeWhenOldestDeath") <
				(1800 * 20))
				updatePlayerSustenance(0, 8, 30, "You've been dying a little too much! So it feels pretty bad...", server, player);
			else if (
				player.persistentData.getInt("timeWhenOldestDeath") != 0 &&
				player.persistentData.getInt("timeWhenLatestDeath") -
				player.persistentData.getInt("timeWhenOldestDeath") <
				(3600 * 20))
				updatePlayerSustenance(0, 10, 50, "You've been dying too often and now you feel weak...", server, player);
			else if (
				player.persistentData.getInt("timeWhenOldestDeath") != 0 &&
				player.persistentData.getInt("timeWhenLatestDeath") -
				player.persistentData.getInt("timeWhenOldestDeath") <
				(3 * 3600 * 20))
				updatePlayerSustenance(0, 15, 75, "You've died and now you feel a little weak...", server, player);
			else
				updatePlayerSustenance(2, 20, 100, "You've died, but feels better now...", server, player);
		})
	}

	function updatePlayerSustenance(saturation, hunger, water, message, server, player) {
		player.tell(Text.red(message));
		const intervalId = setInterval(() => {
			if (!player.hasEffect("tombstone:ghostly_shape")) {
				server.runCommandSilent(`/tfc player ${player.username} set saturation ${saturation}`);
				server.runCommandSilent(`/tfc player ${player.username} set hunger ${hunger}`);
				server.runCommandSilent(`/tfc player ${player.username} set water ${water}`);
				clearInterval(intervalId);
			}
		}, 3000);
	}
}