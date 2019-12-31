export default class EasyHTTP {
  constructor() {
    this.appid = "85f239423b6b69d35a74b80a3b91cff8";
  }

  // make an HTTP GET request
  httpGETCity(city) {
    return new Promise((resolve, reject) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appid}`)
        .then((res) => (res.ok ? res.json() : reject("error")))
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
