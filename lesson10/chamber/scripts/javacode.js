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


/*Meteo Section*/

const temp = document.querySelector('#temp');
const iconaMeteo = document.querySelector('#iconaMeteo');
const captionDesc = document.querySelector('figcaption');

const fonte = "https://api.openweathermap.org/data/2.5/weather?q=Verona&appid=491dc5e6a6b2f1b2d272564abc5f6dc3&units=imperial"

async function apiFetch() {
    try {
      const response = await fetch(fonte);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function displayResults(condizioniMeteo) {
	const iconsrc = `https://openweathermap.org/img/w/${condizioniMeteo.weather[0].icon}.png`;
	const desc = weatherData.weather[0].description;
	currentTemp.innerHTML = `<strong>${condizioniMeteo.main.temp.toFixed(0)}</strong>`;
  
	
  
	weatherIcon.setAttribute('src', iconsrc);
	weatherIcon.setAttribute('alt', desc);
	captionDesc.textContent = desc;
  
  }
  
  displayResults();




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





/* ---------- Discover page ---------- */

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



//Business Directory Page

const url = 'https://raw.githubusercontent.com/prpetrignani/wdd230/master/chamber/data.json'

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data.aziende);
  }
  
  getDirectoryData();

  const displayDirectory = (aziende) => {
    const busiPart = document.querySelector('div.busiPart'); // select the output container element
  
    aziende.forEach((azienda) => {
      // Create elements to add to the div.cards element
	  let portrait = document.createElement('img');
      let card = document.createElement('section');
      let name = document.createElement('name');
      let address = document.createElement('address');
      let state = document.createElement('state');
	  let phone = document.createElement('phone');
	  let email = document.createElement('email');
	  let website = document.createElement('website');
	  let membershipLevel = document.createElement('membershipLevel')

	  name.textContent = `${azienda.name}`;
      address.innerHTML = `${azienda.address}`;
      state.innerHTML = `${azienda.state}`;
	  phone.innerHTML = `${azienda.phone}`;
	  email.innerHTML = `${azienda.email}`;
	  website.textContent = `${azienda.website}`;
	  membershipLevel.textContent = `${azienda.membershipLevel}`;

      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', azienda.imageurl);
	  portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', 'auto');
      portrait.setAttribute('height', '65');

      // Append the section(card) with the created elements
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(state);
	  card.appendChild(phone);
	  card.appendChild(email);
	  card.appendChild(website);
      card.appendChild(portrait);
	  card.appendChild(membershipLevel);
      busiPart.appendChild(card);
    }) // end of forEach loop

  } // end of function expression

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".busiPart");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

showList()