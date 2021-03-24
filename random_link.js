/*******************Random Video Button***********************/

var randomLinkButton = document.getElementById("random");

randomLinkButton.addEventListener("click", function(){
	const random = Math.round(Math.random()*9);
	const links = [
	"https://youtu.be/gsGujOfkixc",
	"https://youtu.be/MItpz6Vehow",
	"https://youtu.be/K8N5Hm6IGGs",
	"https://youtu.be/LVNpW5SSTuk",
	"https://youtu.be/psNEie5HKDg",
	"https://youtu.be/qAL-UKGbDbI",
	"https://youtu.be/XU2d6wQBBHQ",
	"https://youtu.be/9L8LO3a_gGI",
	"https://youtu.be/9YOJrwVFMN0",
	"https://youtu.be/VLOD0B6QDP0",
	];

	for (let i = 0; i < links.length; i++) {
		if (random === i) {
			window.location = links[i];
		}

	}
});





	

