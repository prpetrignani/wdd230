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





/* ---------- menu hamburger ---------- */
function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

//funzione apertura e chiusure menu hamburger
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;





/* ---------- funzione che mostra la data attuale ---------- */
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




/* ---------------- giorni dall'ultima visita----------------  */
let numVisits = document.querySelector('.ultimaVisita');

let numOfVisits = Number(window.localStorage.getItem('visits'));
let lastVisit= Number(window.localStorage.getItem('lastVisits'));

const FACTOR = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisit;

let numOfDays = Math.ceil(daysBetween / FACTOR);

localStorage.setItem('lastVisits', Date.now());

if (numOfVisits != 0) {

    numVisits.textContent = 'Days since your last visit: ' + numOfDays

} else {
    numVisits.textContent = 'This is your first visit.'
}

numOfVisits++;

//conserva la nuova data da cui far partire il calcolo alla prossima visualizzazione
localStorage.setItem("visits", numOfVisits);