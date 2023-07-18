let totalOrder = Number(window.localStorage.getItem("totalOrder"));

const fruitURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let fruits = [];

async function getFruits(fruitUrl){
    const response = await fetch(fruitURL);
    const data = await response.json();
    fruits = data;
    displayResults(data)
}

function displayResults(fruitData) {
    const fruitLabelEle1 = document.createElement('label'),
    fruitLabelEle2 = document.createElement('label'),
    fruitLabelEle3 = document.createElement('label'),
    fruitsSelectEle1 = document.createElement('select'),
    fruitsSelectEle2 = document.createElement('select'),
    fruitsSelectEle3 = document.createElement('select');

    fruitData.forEach(fruit => {
        fruitsSelectEle1.setAttribute('name', 'fruits');
        fruitsSelectEle1.classList.add('fruits-select');
        fruitsSelectEle1.classList.add('input');
    
        const fruitOptionEle = document.createElement('option');
        fruitOptionEle.setAttribute('value', fruit.name);
        fruitOptionEle.textContent = fruit.name;

        fruitsSelectEle1.appendChild(fruitOptionEle);
        // fruitLabelEle.appendChild(fruitsSelect1);
        });

        fruitData.forEach(fruit => {
            fruitsSelectEle2.setAttribute('name', 'fruits');
            fruitsSelectEle2.classList.add('fruits-select');
            fruitsSelectEle2.classList.add('input');       

            const fruitOptionEle = document.createElement('option');
            fruitOptionEle.setAttribute('value', fruit.name);
            fruitOptionEle.textContent = fruit.name;
            
            fruitsSelectEle2.appendChild(fruitOptionEle);
            // fruitLabelEle.appendChild(fruitsSelect2);
        });

        fruitData.forEach(fruit => {
            fruitsSelectEle3.setAttribute('name', 'fruits');
            fruitsSelectEle3.classList.add('fruits-select');
            fruitsSelectEle3.classList.add('input');

            const fruitOptionEle = document.createElement('option');
            fruitOptionEle.setAttribute('value', fruit.name);
            fruitOptionEle.textContent = fruit.name;
            
            fruitsSelectEle3.appendChild(fruitOptionEle);
            // fruitLabelEle.appendChild(fruitsSelect3);
        });
        
    // Document object Manipulation Section
    const domFruitId = document.getElementById('fruit-selector');

    fruitsSelectEle1.setAttribute('id', 'fruits1');
    fruitsSelectEle1.setAttribute('name', 'fruits1');
    fruitLabelEle1.innerHTML = `Fruit 1 `
    fruitLabelEle1.appendChild(fruitsSelectEle1);
    domFruitId.appendChild(fruitLabelEle1); 

    fruitsSelectEle2.setAttribute('id', 'fruits2');
    fruitsSelectEle2.setAttribute('name', 'fruits2');
    // fruitsSelectEle2.innerHTML = `<option value="Pick a Fruit">Pick a Fruit<option>`;
    fruitLabelEle2.innerHTML = `Fruit 2 `
    fruitLabelEle2.appendChild(fruitsSelectEle2);
    domFruitId.appendChild(fruitLabelEle2);

    fruitsSelectEle3.setAttribute('id', 'fruits3');
    fruitsSelectEle3.setAttribute('name', 'fruits3');
    fruitLabelEle3.innerHTML = `Fruit 3 `
    fruitLabelEle3.appendChild(fruitsSelectEle3);
    domFruitId.appendChild(fruitLabelEle3);
     

};


function displayOutput(list = fruits){
    const dOutput = document.getElementById('output');
    dOutput.innerHTML = '';
    let carbohydrates = 0;
    let protein = 0;
    let fat = 0;
    let calories = 0;
    let sugar = 0;

    const fruit1 = document.getElementById('fruits1').value;
    const fruit2 = document.getElementById('fruits2').value;
    const fruit3 = document.getElementById('fruits3').value;

    fruits.forEach(fruit => {
        if(fruit.name == fruit1 || fruit.name == fruit2 || fruit.name == fruit3){
            carbohydrates += fruit.nutritions.carbohydrates;
            protein += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            calories += fruit.nutritions.calories;
            sugar += fruit.nutritions.sugar;
        }
        else{
            console.log('')
        }
    });

    // Get all other form input values
    const orderDate = document.getElementById('date');
    orderDate.value = getDate();
    const oDate = orderDate.value;
    const firstName = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;

    //Create DOM Elements
    const personInfo = document.createElement('h3'),
    nameEle = document.createElement('p'),
    emailEle = document.createElement('p'),
    phoneEle = document.createElement('p'),
    specialInstructEle = document.createElement('p'),

    // Fruits Chosen
    choiceFruit = document.createElement('h3'),
    fruit1Ele = document.createElement('p'),
    fruit2Ele = document.createElement('p'),
    fruit3Ele = document.createElement('p'),

    //fruit nutrients
    nutrients = document.createElement('h3'),
    carbohydrateEle = document.createElement('p'),
    proteinEle = document.createElement('p'),
    fatEle = document.createElement('p'),
    sugarEle = document.createElement('p'),
    caloriesEle = document.createElement('p'),
   
    // Order Date
    dateEle = document.createElement('p'),
    
    // Thank You message
    hr = document.createElement('hr')
    thanksMessage = document.createElement('p');
    
    personInfo.innerHTML = `Your Data:`
    nameEle.innerHTML = `First Name: ${firstName}`;
    emailEle.innerHTML = `Email: ${email}`;
    phoneEle.innerHTML = `Phone Number: ${phone}`;
    specialInstructEle.innerHTML = `Additional Information: ${description}`;
    const lineBreak1 = document.createElement('br');

    choiceFruit.innerHTML = `Your Choice:`
    fruit1Ele.innerHTML = `First Fruit: ${fruit1}`;
    fruit2Ele.innerHTML = `Second Fruit: ${fruit2}`;
    fruit3Ele.innerHTML = `Third Fruit: ${fruit3}`;
    const lineBreak2 = document.createElement('br');
    
    nutrients.innerHTML =`Nutritional Value:`
    carbohydrateEle.innerHTML = `Carbohydrates: ${carbohydrates}g`;
    proteinEle.innerHTML = `Protein: ${protein}g`;
    fatEle.innerHTML = `Fat: ${fat}g`;
    caloriesEle.innerHTML = `Calories: ${calories}`;
    sugarEle.innerHTML = `Sugar: ${sugar}g`;
    
    const lineBreak3 = document.createElement('br');
    dateEle.innerHTML = `Order Date: ${getDate()}`;
    
    const elementList = [personInfo, nameEle, emailEle, phoneEle, specialInstructEle, lineBreak1, choiceFruit, fruit1Ele, fruit2Ele, fruit3Ele, lineBreak2, nutrients, carbohydrateEle, proteinEle, fatEle, sugarEle, caloriesEle, lineBreak3, dateEle, lineBreak3, hr, thanksMessage];
    elementList.forEach(element => {
        dOutput.appendChild(element);
    }); 
    totalOrder ++;

    document.getElementById("frituSelect").reset();
}

function fruitMixCounter(){
    localStorage.setItem("totalOrder", totalOrder);
}

function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
  
    if(dd<10) {
        dd = '0'+dd
    } 
  
    if(mm<10) {
        mm = '0'+mm
    } 
  
    today = yyyy + '-' + mm + '-' + dd;
    return today;
 };
const form = document.getElementById('frituSelect');
const formSection = document.querySelector('.fruit-section');
form.addEventListener("change", () => {
    if (form.checkValidity()) {
      document.getElementById('required').style = 'display:none;';
      document.getElementById('btn').disabled = !form.checkValidity();
    }
    else if (!form.checkValidity()) {
      document.getElementById('required').style = 'display:block;';
      document.getElementById('submitBtn').disabled = form.checkValidity();
    }
  });
 document.getElementById('btn').addEventListener('click', () => {
    if (form.checkValidity()){
        displayOutput();
    }
 });
 document.getElementById('btn').addEventListener('click', fruitMixCounter);
 getFruits(fruitURL); 