//priority: 900

export const loginEvent = (event) => {
	event.server.runCommandSilent(
		`attribute ${event.player.username} apotheosis:crit_chance base set 1.0`
	);
	event.server.runCommandSilent(
		`attribute ${event.player.username} apotheosis:crit_damage base set 1.5`
	);
};
