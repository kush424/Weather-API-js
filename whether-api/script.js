const API_KEY = "b1b3c4ce7bf4ac00d3ba51b9ff276f09";

const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");

const statusEl = document.getElementById("status");
const card = document.getElementById("result");

const cityNameEl = document.getElementById("cityName");
const descEl = document.getElementById("desc");
const iconEl = document.getElementById("icon");
const tempEl = document.getElementById("temp");
const feelsEl = document.getElementById("feels");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const city = cityInput.value.trim();

  if (city === "") {
    statusEl.innerText = "Please enter a city name";
    return;
  }

  statusEl.innerText = "Loading...";
  card.classList.add("hidden");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      statusEl.innerText = "City not found!";
      return;
    }

    cityNameEl.innerText = `${data.name}, ${data.sys.country}`;
    descEl.innerText = data.weather[0].description;

    iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    tempEl.innerText = Math.round(data.main.temp) + "°C";
    feelsEl.innerText = Math.round(data.main.feels_like) + "°C";
    humidityEl.innerText = data.main.humidity + "%";
    windEl.innerText = data.wind.speed + " m/s";

    statusEl.innerText = "Done ✔";
    card.classList.remove("hidden");

  } catch (err) {
    statusEl.innerText = "Network error! Try again";
  }
});
