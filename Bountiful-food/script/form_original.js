const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const fruit = await response.json();
        console.log(fruit); // this is for testing the call
        displayfruits(fruit);
      }

      else {
          throw Error(await response.text());
      }
    }
    
    catch (error) {
        console.log(error);
    }
}

  const displayfruits = (fruit) => {
    const display = document.querySelector('input.display'); // select the output container element
  
    fruit.forEach((frutto) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
	  let name = document.createElement('name');
    /*let carbohydrates = document.createElement('carbohydrates');
    let protein = document.createElement('protein');
    let fat = document.createElement('fat');
    let calories = document.createElement('calories');
	  let sugar = document.createElement('sugar');*/

	  name.innerHTML = `${frutto.name}`;
    /*carbohydrates.innerHTML = `Carbohydrates: ${frutto.nutritions.carbohydrates}`;
    protein.innerHTML = `Protein: ${frutto.nutritions.protein}`;
	  fat.innerHTML = `Fat: ${frutto.nutritions.fat}`;
	  calories.innerHTML = `Calories: ${frutto.nutritions.calories}`;
    sugar.innerHTML = `Sugar: ${frutto.nutritions.sugar}`;*/

    // Append the section(card) with the created elements
    card.appendChild(name);
    /*
    card.appendChild(carbohydrates);
    card.appendChild(protein);
	  card.appendChild(fat);
	  card.appendChild(calories);
	  card.appendChild(sugar);*/
    display.appendChild(card);
    }) // end of forEach loop

  } // end of function expression

apiFetch ();


function ordine () {
  const mostra = document.querySelector('div.recap');

  foreach ((ordine) => {
    let drink = document.createElement('drink');
    let composizione = document.createElement('composizione');
    let totCarbo = document.createElement('totCarbo');
    let totPro = document.createElement('totPro');
    let TotFat = document.createElement('TotFat');
    let totCal = document.createElement('totCal');
	  let TotSugar = document.createElement('TotSugar');

  })
}