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
