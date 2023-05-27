function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

const date = document.querySelector("#date");
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date.innerHTML = new Date().toLocaleDateString("en-UK", options);
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

let last = document.lastModified;
document.getElementById('lastMdf').innerHTML = last;

function showBanner () {

	var x = getElementById('banner');
	const weekday = new Date();
	const day = weekday.getDate();

	if (weekday === 1 || weekday === 2) {
		console.log(day);
	}

	else {
		display = "none";
	}
}

/*const giorno = document.querySelector("#banner");
if (giorno == 1 || giorno == 2) {
	x.style.display = "block";
}

else {
	x.style.display = "none";
}
*/
