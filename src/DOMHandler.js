import Temperature from "./temperature.js"

export default class DOMHandler {
  createCityData(cityData) {
    const cityDiv = document.querySelector(".cityData");
    if (cityDiv !== null) {
      cityDiv.remove();
    }
    const div = document.createElement("div");
    div.innerHTML = `<div class="cityData">
    <h1>${cityData.name}, ${cityData.sys.country}</h1>
    <h2>Temperature</h2>
    <span class="temp">${Temperature.convert(cityData.main.temp)}°F</span>
    <img src="http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png">
    <div class="dataGrid">
      <div class="dataItem">
          <h3>Wind Speed</h3>
          <p>${cityData.wind.speed}<span class="identifier">m/s</span></p>
      </div>
      <div class="dataItem">
          <h3>Wind Direction</h3>
          <p>${cityData.wind.deg}<span class="identifier">°</span></p>
        </div>
        <div class="dataItem">
          <h3>Humidity</h3>
          <p>${cityData.main.humidity}<span class="identifier">%</span></p>
        </div>
        <div class="dataItem">
          <h3>Cloudiness</h3>
          <p>${cityData.clouds.all}<span class="identifier">%</span></p>
        </div>
        <div class="dataItem">
          <h3>Sunrise</h3>
          <p>7:00<span class="identifier">am</span></p>
        </div>
        <div class="dataItem">
          <h3>Sunset</h3>
          <p>5:00<span class="identifier">pm</span></p>
        </div>
      </div>
    </div>`;
    document.querySelector(".container").appendChild(div)
  }
}
