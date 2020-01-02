export default class TimeFormatter {
  static formatHours(hours) {
    if (hours === 0) {
      return 12;
    }
    if (hours >= 13) {
      return hours - 12;
    }

    return hours;
  }

  static formatMinutes(minutes) {
    if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  }
}
