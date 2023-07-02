const url = 'data.json'

const display = document.getElementById("business1");


function displayDirectory(aziende) {
  let data = aziende.filter((p) => p.membershipLevel == "Gold" || p.membershipLevel == "Silver");
  let counter = data.length - 4;
  for (let i = 0; i <= counter; i++) {
    data.splice(Math.floor(Math.random() * data.length), 1);
  };

  let count = 1;
  data.forEach((business) => {
    let card = document.createElement("section");
    let name = document.createElement("name");
    let website = document.createElement("website");

    card.setAttribute("id", "member");
    name.innerHTML = `${business.name}`;;
    website.innerHTML = `${business.website}`;
    website.setAttribute("href", `${business.website}`);


    let portrait = document.createElement("img");
    portrait.setAttribute("src", `${business.imageurl}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', 'auto');
    portrait.setAttribute('height', '65');
    card.append(portrait);


    card.appendChild(name);
    card.appendChild(website);

    display.append(card);
    count = count + 1;
  });

}

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data.aziende);
    
  }
  
  getDirectoryData();