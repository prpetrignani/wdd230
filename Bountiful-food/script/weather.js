const temp0 = document.querySelector('#temp');
const temp1 = document.querySelector('#temp1');
const temp2 = document.querySelector('#temp2');
const temp3 = document.querySelector('#temp3');
const weatherIcon0 = document.querySelector('#weather-icon');
const captionDesc0 = document.querySelector('figcaption');
const umidita = document.querySelector('#umidita')

const fonte = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&cnt=4&appid=491dc5e6a6b2f1b2d272564abc5f6dc3&units=imperial"

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
    temp0.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
    temp1.innerHTML = `<strong>${weatherData.list[1].main.temp.toFixed(0)}</strong>`;
    temp2.innerHTML = `<strong>${weatherData.list[2].main.temp.toFixed(0)}</strong>`;
    temp3.innerHTML = `<strong>${weatherData.list[3].main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@4x.png`;
    const desc = weatherData.list[0].weather[0].description;
  
    weatherIcon0.setAttribute('src', iconsrc);
    weatherIcon0.setAttribute('alt', desc);
    captionDesc0.textContent = desc;
    umidita.innerHTML = `${weatherData.list[0].main.humidity}`;
    
  }
apiFetch();