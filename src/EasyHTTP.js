export default class EasyHTTP {
  constructor() {
    this.appidWeather = "85f239423b6b69d35a74b80a3b91cff8";
    this.appidPicture = "563492ad6f91700001000001eb7a41ead3f049018ceb18915d19b9ce";
  }

  // make an HTTP GET request
  httpGETCity(city) {
    return new Promise((resolve, reject) => {
      let newCity = city;
      if (city.includes(",")) {
        newCity = city.split(",")[0];
      }
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${this.appidWeather}`)
        .then((res) => (res.ok ? res.json() : reject("Error! City was not found!")))
        .then((data) => resolve(data))
        .catch(() => reject("Error! City was not found!"));
    });
  }

  httpGETPicture(text) {
    return new Promise((resolve, reject) => {
      let weatherText = text;
      if (text === "Clear") {
        weatherText += " skies";
      } else if (text === "Drizzle") {
        weatherText = "Rain";
      }
      fetch(`https://api.pexels.com/v1/search?query=${weatherText}`, {
        method: "GET",
        headers: {
          authorization: this.appidPicture
        }
      })
        .then((res) => (res.ok ? res.json() : reject("Picture not found!")))
        .then((data) => resolve(data))
        .catch(() => reject("Error! Picture did not load."));
    });
  }
}
