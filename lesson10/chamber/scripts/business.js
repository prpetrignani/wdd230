//Business Directory Page

const url = './data.json'

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
	  let membershipLevel = document.createElement('membershipLevel');

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