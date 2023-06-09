const temp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const wind = document.querySelector('#windSpeed')

const fonte = "https://api.openweathermap.org/data/2.5/weather?q=Verona&appid=491dc5e6a6b2f1b2d272564abc5f6dc3&units=metric"



async function apiFetch() {
    try {
      const response = await fetch(fonte);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      }

      else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function displayResults(weatherData) {
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    wind.innerHTML = `Wind Speed: ${weatherData.wind.speed.toFixed(0)} km/h`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
    let t = weatherData.main.temp.toFixed(0);
    let s = weatherData.wind.speed.toFixed(0);
    let w = "";

    if (t <= 10 && s > 4.8) {
        w = "Wind Chill: " + Math.round (
            13.12 +
            0.6215 * t -
            (11.37 *( s ** 0.16)) +
            (0.3965 * t * (s ** 0.16)) 
        );
        document.getElementById("windChill").innerHTML = w.toString();
    }

    else {
        w = "Wind Chill: N/A";
        document.getElementById("windChill").innerHTML = w.toString();
    }
  }

apiFetch();