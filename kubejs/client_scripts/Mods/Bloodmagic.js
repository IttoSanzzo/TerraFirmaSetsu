//priority: 10

const setJeiBloodMagic = (event) => {
	event.hide(/bloodmagic:.*telepos.*/);
	event.hide("bloodmagic:reagentsuppression");
	event.hide("bloodmagic:sigilofsuppression");
}
