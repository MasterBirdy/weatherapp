import Temperature from "./temperature.js";
import TimeFormatter from "./timeFormatter.js";
import DirectionFormatter from "./DirectionFormatter.js";
import ColorSeverity from "./ColorSeverity.js";

export default class DOMHandler {
  createCityData(cityData) {
    const cityDiv = document.querySelector(".cityData");
    const oldFooter = document.querySelector("footer");
    if (cityDiv !== null) {
      cityDiv.remove();
    }
    if (oldFooter !== null) {
      oldFooter.remove();
    }
    const div = document.createElement("div");
    const sunRise = new Date(cityData.sys.sunrise * 1000);
    const sunSet = new Date(cityData.sys.sunset * 1000);
    div.className = "cityData";
    console.log(cityData.wind.deg);
    div.innerHTML = `
    <div class="searchDiv">
    <h1>${cityData.name}, ${cityData.sys.country}</h1>
    <h2>Temperature</h2>
    <span class="temp">${Temperature.convert(cityData.main.temp)}<span class="temp degree">°F</span></span>
    <img class="icon" src="https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png" alt="${cityData.weather[0].description}">
    </div>
    <div class="dataGrid">
      <div class="dataItem">
          <h3>Wind Speed</h3>
          <p class="${ColorSeverity.formatWind(cityData.wind.speed)}">${cityData.wind.speed}<span class="identifier">m/s</span></p>
      </div>
      <div class="dataItem">
          <h3>Wind Direction</h3>
          <p>${DirectionFormatter.formatDirection(parseInt(cityData.wind.deg, 10))}</p>
      </div>
      <div class="dataItem">
          <h3>Humidity</h3>
          <p class="${ColorSeverity.formatHumidity(cityData.main.humidity)}">${cityData.main.humidity}<span class="identifier">%</span></p>
      </div>
      <div class="dataItem">
          <h3>Cloudiness</h3>
          <p>${cityData.clouds.all}<span class="identifier">%</span></p>
      </div>
      <div class="dataItem">
          <h3>Sunrise</h3>
            <p>${TimeFormatter.formatHours(sunRise.getHours())}:${TimeFormatter.formatMinutes(sunRise.getMinutes())}<span class="identifier">am</span></p>
      </div>
      <div class="dataItem">
          <h3>Sunset</h3>
          <p>${TimeFormatter.formatHours(sunSet.getHours())}:${TimeFormatter.formatMinutes(sunSet.getMinutes())}<span class="identifier">pm</span></p>
      </div>
      </div>
      <div class="cityDataBackground">
      </div>`;
    document.querySelector(".container").appendChild(div);
    const footer = document.createElement("footer");
    footer.innerHTML = "<p>Image by <span class='photographer'>...</span>.</p>";
    document.querySelector(".container").appendChild(footer);
  }

  createBackgroundPicture(source, photographer) {
    const cityData = document.querySelector(".cityDataBackground");
    cityData.style.backgroundImage = `url(${source})`;
    document.querySelector(".photographer").textContent = photographer;
  }

  errorHandle(message) {
    const existingDiv = document.querySelector(".errorClass");
    if (existingDiv !== null) {
      existingDiv.remove();
    }
    const body = document.querySelector("body");
    const errorDiv = document.createElement("div");
    errorDiv.textContent = message;
    errorDiv.className = "errorClass";
    body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
  }
}
