import EasyHTTP from "./EasyHTTP";
import DOMHandler from "./DOMHandler";
import "./style.css";

const easyHTTP = new EasyHTTP();
const domHandler = new DOMHandler();
const input = document.querySelector("input");

document.querySelector("button").addEventListener("click", () => {
  easyHTTP.httpGETCity(input.value)
    .then((data) => {
      console.log(data);
      domHandler.createCityData(data);
    })
    .catch((err) => console.log(err));
});
