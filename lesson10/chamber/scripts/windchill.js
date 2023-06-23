const iconaMeteo = document.querySelector('#iconaMeteo');
const captionDesc = document.querySelector('figcaption');
const temp = document.querySelector('#temp');

const fonte = "https://api.openweathermap.org/data/2.5/weather?q=Verona&appid=491dc5e6a6b2f1b2d272564abc5f6dc3&units=metric"

async function apiFetch() {
    try {
      const response = await fetch(fonte);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function displayResults(weatherData) {
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  
  }
  apiFetch();


function myFunction (t, s) {
    
    if (t <= 10 && s > 4.8) {
        return "Wind Chill: " + Math.round (
            35.74 +
            0.6215 * t -
            (35.75 * s) ** 0.16 +
            (0.3965 * t) ** 0.16 
        );
    }

    else {
        return "Wind Chill: N/A";
    }
}

let w = myFunction(temp, wind);
document.getElementById("chill").innerHTML = w.toString();