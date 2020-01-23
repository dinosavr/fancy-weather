import { isoCountries, optionsDateToday, info } from './variables';

export const appStateService = {
  // eslint-disable-next-line no-unused-vars
  getCurrentLang: _ => localStorage.getItem('currentLang'),
  setCurrentLang: value => localStorage.setItem('currentLang', value),

  // eslint-disable-next-line no-unused-vars
  getCurrentTypeTemp: _ => localStorage.getItem('currentTypeTemp'),
  setCurrentTypeTemp: value => localStorage.setItem('currentTypeTemp', value),

  // eslint-disable-next-line no-unused-vars
  getSearchNameCity: _ => localStorage.getItem('searchNameCity'),
  setSearchNameCity: value => localStorage.setItem('searchNameCity', value),

  getFigureX: fId => localStorage.getItem(`figure${fId}X`),
  setFigureX: (fId, value) => localStorage.setItem(`figure${fId}X`, value),

  // populate state
  // appStateService.setCurrentColor("#ccc")
  // appStateService.setFigureX(1, 100)

  // get data from state
  // let currentColor = appStateService.getCurrentColor()
  // let firstFigureX = appStateService.getFigureX(1)
}

export function initDefaultValue() {

  info.currentLang = appStateService.getCurrentLang();
  if (appStateService.getCurrentLang() == null) appStateService.setCurrentLang('EN');

  info.currentTypeTemp = appStateService.getCurrentTypeTemp();
  if (appStateService.getCurrentTypeTemp() == null) appStateService.setCurrentTypeTemp('C');

  info.searchNameCity = appStateService.getSearchNameCity();
  if (appStateService.getSearchNameCity() == null) appStateService.setSearchNameCity('');

};

export function getTimesOfDay(hours) {
  let timesOfDay;
  if (hours < 5) timesOfDay = 'night';
  if ((hours >= 5) && (hours < 10)) timesOfDay = 'morning';
  if ((hours >= 10) && (hours < 19)) timesOfDay = 'day';
  if ((hours >= 19) && (hours < 24)) timesOfDay = 'evening';

  return timesOfDay;
}

export function getSeason(month) {

  let season = 'unknown';
  switch (month) {
    case 'dec':
    case 'december':
    case '12':
    case 'jan':
    case 'january':
    case '1':
    case 'feb':
    case 'february':
    case '2':
    case 1:
    case 2:
    case 12:
      season = 'winter';
      break;
    case 'mar':
    case 'march':
    case '3':
    case 'apr':
    case 'april':
    case '4':
    case 'may':
    case '5':
    case 3:
    case 4:
    case 5:
      season = 'spring';
      break;
    case 'jun':
    case 'june':
    case '6':
    case 'jul':
    case 'july':
    case '7':
    case 'aug':
    case 'august':
    case '8':
    case 6:
    case 7:
    case 8:
      season = 'summer';
      break;
    case 'sep':
    case 'september':
    case '9':
    case 'oct':
    case 'october':
    case '10':
    case 'nov':
    case 'november':
    case '11':
    case 9:
    case 10:
    case 11:
      season = 'autumn';
      break;
    default:
  }

  return season;

}

export function convertCountryCode(code) {
  return isoCountries[code].name;
}

export function farenheitToCelcius(fahrenheit) {
  const celcius = Math.round((fahrenheit - 32) * 5 / 9);
  return celcius;
}

export function milesPerHourToMetersPerSecond(milesPerHour) {

  const metersPerSecond = Math.round(milesPerHour * 1610.3 / 3600);

  return metersPerSecond;
}

export function timeConverter(unixTimeStamp) {

  const date = new Date(unixTimeStamp * 1000);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Hours part from the timestamp
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = date.getMinutes();
  // Seconds part from the timestamp
  const seconds = date.getSeconds();

  // Will display time in 10:30:23 format
  const formattedTime = `${day} : ${month} : ${year} : ${hours} : ${minutes.substr(-2)} : ${seconds.substr(-2)}`;
  return formattedTime;
}

export function timeReload() {
  setInterval(() => {
    const date = new Date();
    const n = date.toLocaleDateString(info.currLangQuery, optionsDateToday);;
    document.getElementById('dateTodayTime').innerText = n;
  }, 60000);
}

export function convertDMS(lat, lng) {

  const convertLat = Math.abs(lat);
  const LatDeg = Math.floor(convertLat);
  const LatMin = (Math.floor((convertLat - LatDeg) * 60));
  // const LatCardinal = ((lat > 0) ? "n" : "s");
  const LatCardinal = ((lat > 0) ? "" : "-");

  const convertLng = Math.abs(lng);
  const LngDeg = Math.floor(convertLng);
  const LngMin = (Math.floor((convertLng - LngDeg) * 60));
  // const LngCardinal = ((lng > 0) ? "e" : "w");
  const LngCardinal = ((lng > 0) ? "" : "-");

  const coordDms = { latitude: `${LatCardinal}${LatDeg}°${LatMin}'`, longitude: `${LngCardinal}${LngDeg}°${LngMin}'` }

  return coordDms;
}
