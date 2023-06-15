const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    /*function getOrdinal(n) {
      let order = 'th';
    
      if (n % 10 == 1 && n % 100 != 11)
      {
        ord = 'st';
      }
      else if (n % 10 == 2 && n % 100 != 12)
      {
        ord = 'nd';
      }
      else if (n % 10 == 3 && n % 100 != 13)
      {
        ord = 'rd';
      }
    
      return order;
    }*/

  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let date = document.createElement('date');
      let place = document.createElement('place');
      let portrait = document.createElement('img');
      /*let order = document.createElement('order');
      let ordinal = getOrdinal(prophet.order);*/
       
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      date.textContent = `Birth: ${prophet.birthdate}`;
      place.textContent = `Place: ${prophet.birthplace}`;

      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('alt', `Birth ${prophet.birthdate}`);
      portrait.setAttribute('alt', `Place: ${prophet.birthplace}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(date);
      card.appendChild(place);
      card.appendChild(portrait);
      //card.appendChild(ordinal);//
      cards.appendChild(card);
    }) // end of forEach loop

  } // end of function expression