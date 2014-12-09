function init () {
	var jarallax = new Jarallax();
	jarallax.setDefault('h2', {display:"none"});
	jarallax.addAnimation('.big_moon', [{progress: "0%", top: "120%"}, {progress: "100%", top: "-10%"}]);
	jarallax.addAnimation('.small_moon', [{progress: "0%", top: "70%"}, {progress: "100%", top: "20%"}]);
	jarallax.addAnimation('.background', [{progress: "0%", top: "0%"}, {progress: "100%", top: "-5%"}]);

	jarallax.addAnimation('h1', [{progress: "0", top: "20%", opacity: "1"}, {progress: "10", top: "0%", opacity: "0"}]);

	jarallax.addAnimation('h2', [
		{progress: "10", left: "-10%", display: "block"},
		{progress: "12", left: "10%", display: "block"},
		{progress: "24", left: "12%"}
	]);

	jarallax.addAnimation('h2', [
		{progress: "20", opacity: "1"},
		{progress: "24", opacity: "0"}
	]);
};