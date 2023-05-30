function showBanner () {

	const weekday = new Date();
	const day = weekday.getDay();

	if (day === 1 || day === 2) {
		document.getElementById('banner').style.display = 'block';
	}

	else {
		document.getElementById('banner').style.display = 'none';
	}
}

showBanner();

//menu hamburger
function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

//funzione apertura e chiusure menu hamburger
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

//funzione che mostra la data attuale
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

//funzione che mostra la data dell'ultima modifica apportara alle pagine
let last = document.lastModified;
document.getElementById('lastMdf').innerHTML = last;







/*const giorno = document.querySelector("#banner");
if (giorno == 1 || giorno == 2) {
	x.style.display = "block";
}

else {
	x.style.display = "none";
}
*/
