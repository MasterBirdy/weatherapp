import EasyHTTP from "./EasyHTTP";
import DOMHandler from "./DOMHandler";
import "./style.css";
import "./background.jpg";

const easyHTTP = new EasyHTTP();
const domHandler = new DOMHandler();
const input = document.querySelector("input");
let randomData;

document.querySelector("button").addEventListener("click", () => {
  easyHTTP.httpGETCity(input.value)
    .then((data) => {
      domHandler.createCityData(data);
      return easyHTTP.httpGETPicture(data.weather[0].main);
    })
    .then((data) => {
      const photoNumber = Math.floor(Math.random() * (data.total_results < 15 ? data.total_results : 15));
      domHandler.createBackgroundPicture(data.photos[photoNumber].src.original, data.photos[photoNumber].photographer);
    })
    .catch((err) => domHandler.errorHandle(err));
});

easyHTTP.httpGETCity("Anaheim")
  .then((data) => {
    console.log(data);
    domHandler.createCityData(data);
    return easyHTTP.httpGETPicture(data.weather[0].main);
  })
  .then((data) => {
    console.log(data);
    const photoNumber = Math.floor(Math.random() * (data.total_results < 15 ? data.total_results : 15));
    domHandler.createBackgroundPicture(data.photos[photoNumber].src.original, data.photos[photoNumber].photographer);
  });

easyHTTP.httpGETJSON()
  .then((data) => {
    randomData = JSON.stringify(data);
  })
  .catch((err) => domHandler.errorHandle(err));

console.log(randomData.length);
