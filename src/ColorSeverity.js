export default class ColorSeverity {
  static formatWind(speed) {
    if (speed < 13.9) {
      return "low";
    } if (speed < 20.7) {
      return "medium";
    }
    return "high";
  }

  static formatHumidity(percent) {
    if (percent < 40) {
      return "low";
    } if (percent < 70) {
      return "medium";
    }
    return "high";
  }
}
