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
      
       
      // Build the h2 content out to show the prophet's full name - finish the template string
      name.textContent = `${azienda.name}`;
      address.textContent = `${azienda.address}`;
      state.textContent = `${azienda.state}`;
	  phone.textContent = `${azienda.phone}`;
	  email.textContent = `${azienda.email}`;
	  website.textContent = `${azienda.website}`;

      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', azienda.imageurl);
	  portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '100');
      portrait.setAttribute('height', 'auto');
      portrait.setAttribute('alt', `${azienda.name}`);
      portrait.setAttribute('alt', `${azienda.address}`);
      portrait.setAttribute('alt', `${azienda.state}`);
	  portrait.setAttribute('alt', `${azienda.phone}`);
	  portrait.setAttribute('alt', `${azienda.email}`);
	  portrait.setAttribute('alt', `${azienda.website}`);
    
  
      // Append the section(card) with the created elements
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(state);
	  card.appendChild(phone);
	  card.appendChild(email);
	  card.appendChild(website);
      card.appendChild(portrait);
      busiPart.appendChild(card);
    }) // end of forEach loop

  } // end of function expression