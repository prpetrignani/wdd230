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


/*Discover page*/

//carica tutte le immagini che hanno l'attriubto data-src all'interno del tag img di tutto il documento
let imagesToLoad = document.querySelectorAll("img[data-src]");


//parametri opzionali che impostano la sezione IntersectionalObserver 
const imgOptions = {
	threshold: 0,
	rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
	image.setAttribute('src', image.getAttribute('data-src'));
	image.onload = () => {image.removeAttribute('data-src');};
};

//per primo controlla se l'interezione Observ è supportata
if('IntersectionObserver' in window) {
	const imgObserver = new IntersectionObserver((items, observer) => {
	items.forEach((item) => {
        if (item.isIntersecting) {
	        loadImages(item.target);
	        observer.unobserve(item.target);
        }
	});
    }, imgOptions);

// Fai il loop con tutte le imagini nello momento del check e carciale se necessario
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}

// nel caso il codice non sia supportato carica tutte le immagini
else {
	imagesToLoad.forEach((img) => {
		loadImages(img);
	});
}

//giorni dall'ultima visita
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








/*localStorage.setItem('lastVisit', '06-03-2023');

function displayDaysSinceLastVisit() {
  const visitsDisplay = document.querySelector('#ultimaVisita');

  const lastVisit = localStorage.getItem('lastVisit');

  const lastVisitDate = Date.parse(lastVisit);
  
  if (!lastVisitDate) {
    // Stored date is not a valid format
    return;
  }

  const currentDate = new Date();

  const difference = currentDate - lastVisitDate;
  const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  visitsDisplay.innerText = "Days since last visit: " + differenceInDays;
}

displayDaysSinceLastVisit();*/