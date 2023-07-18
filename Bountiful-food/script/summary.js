// Total numbers of drinks ordered
const drinksTotal = document.getElementById('summary');

let totalOrder = Number(window.localStorage.getItem("totalOrder"));

// drinksTotal.textContent = drinksMade
if (totalOrder !== 0){
    drinksTotal.textContent = `You made: ${totalOrder} order(s) so far.`}
    else{
        drinksTotal.textContent = `Click on the button to start creating your costum drinks`
    }