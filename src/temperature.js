export default class Temperature {
  static convert(kelvin) {
    return ((parseFloat(kelvin) - 273.15) * (9 / 5) + 32).toFixed(1);
  }
}
