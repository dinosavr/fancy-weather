import { info, infoUpdate, keyAccessUnsplash, keyAccessMapbox, isoCountries, optionsDateToday, optionsDateThreeDays, outputError, WeatherConditionCodes } from './variables';
import { farenheitToCelcius, milesPerHourToMetersPerSecond, getSeason, getTimesOfDay, appStateService } from './utils';


info.currentLang = appStateService.getCurrentLang();

if(info.currentLang == null) info.currentLang = 'EN';
let currLangQuery = '';

if (typeof info.currentLang !== 'undefined') currLangQuery = `${info.currentLang.toLowerCase()}-${info.currentLang.toUpperCase()}`;
else currLangQuery = 'en-EN';


if (info.currentLang == null) { currLangQuery = 'en-EN';}
else currLangQuery = `${info.currentLang.toLowerCase()}-${info.currentLang.toUpperCase()}`;
info.currLangQuery = currLangQuery;


// eslint-disable-next-line no-use-before-define, no-undef
const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// eslint-disable-next-line no-use-before-define, no-undef
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
// eslint-disable-next-line no-use-before-define, no-undef
const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

export const recognition = new SpeechRecognition();
//  recognition.continuous = false;

info.currLangQuery = currLangQuery;
recognition.lang = currLangQuery;
recognition.interimResults = false;
recognition.maxAlternatives = 1;


recognition.onresult = (event) => {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The [last] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object

  const last = event.results.length - 1;
  const textOfVoice = event.results[last][0].transcript;

  // diagnostic.textContent = 'Result received: ' + textOfVoice + '.';
  // console.log('Confidence: ' + event.results[0][0].confidence);
  // console.log('textOfVoice: ' + textOfVoice);

  document.getElementById('inputNameTown').value = textOfVoice;
}

recognition.onspeechend = () => {
  recognition.stop();
  document.getElementById('btnVoice').setAttribute('style', 'color: white');
}

/* recognition.onnomatch = function(event) {
  // diagnostic.textContent = "I didn't recognise that content.";
} */

/* recognition.onerror = function(event) {
  // diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
} */

export function getVoice(e) {

  const idCurr = e.target.id;
  const idParent = e.target.parentElement.id;
  const btnVoice = document.getElementById('btnVoice');

  const btnRefreshDetect = (idCurr === 'btnVoice') || (idParent === 'btnVoice');

  if (btnRefreshDetect) {
    recognition.start();
    btnVoice.setAttribute('style', 'color: red');
  }
}


const today = new Date();
let tomorrow = new Date(today)
let dayAfterTomorrow = new Date(today)
let afterTheDayAfterTomorrow = new Date(today)

info.currentLang = appStateService.getCurrentLang();
if(info.currentLang == null) info.currentLang = 'EN';
if (typeof info.currentLang !== 'undefined') currLangQuery = `${info.currentLang.toLowerCase()}-${info.currentLang.toUpperCase()}`;
else currLangQuery = 'en-EN';
info.currLangQuery = currLangQuery;
info.today = today.toLocaleDateString(currLangQuery, optionsDateToday);
info.todayOriginal = today;
info.userTimeZone = new Date().getTimezoneOffset();
info.season = getSeason(today.getMonth());
info.timeOfDay = getTimesOfDay(today.getHours());

tomorrow.setDate(tomorrow.getDate() + 1)
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
afterTheDayAfterTomorrow.setDate(afterTheDayAfterTomorrow.getDate() + 3)

function convertCountryCode(code) {
  return isoCountries[code].name;
}

export function getWeatherFiveDays(url) {

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => {
      info.error = error;
      outputError.innerHTML = `error: ${error}`;
    });
}

export function renderDataWeather(data) {

  const a = new Date(data.list[0].dt_txt);
  const hours = a.getHours();
  const stepToTomorrowForecast = Math.round((24 - hours + 12) / 3);

  info.city = data.city.name;
  info.latitude = data.city.coord.lat;
  info.longitude = data.city.coord.lon;

  info.weather = WeatherConditionCodes[data.list[0].weather[0].id].en;
  if (info.currentLang === 'EN') info.weather = WeatherConditionCodes[data.list[0].weather[0].id].en;
  if (info.currentLang === 'RU') info.weather = WeatherConditionCodes[data.list[0].weather[0].id].ru;
  if (info.currentLang === 'BE') info.weather = WeatherConditionCodes[data.list[0].weather[0].id].be;

  info.farenheitTemp = Math.round(data.list[0].main.temp);
  info.celciustTemp = farenheitToCelcius(data.list[0].main.temp);
  if (info.currentTypeTemp === 'C') info.temp = info.celciustTemp;
  else info.temp = info.farenheitTemp;

  info.farenheitFeelLikeTemp = Math.round(data.list[0].main.feels_like);
  info.celciusFeelLikeTemp = farenheitToCelcius(data.list[0].main.feels_like);
  if (info.currentTypeTemp === 'C') info.feelLikeTemp = info.celciusFeelLikeTemp;
  else info.feelLikeTemp = info.farenheitFeelLikeTemp;

  info.windSpeed = milesPerHourToMetersPerSecond(data.list[0].wind.speed);
  const { humidity } = data.list[0].main;
  info.humidity = humidity;
  info.weatherCodeIcon = data.list[0].weather[0].id;
  info.weatherCodeIcon1 = data.list[stepToTomorrowForecast].weather[0].id;
  info.weatherCodeIcon2 = data.list[stepToTomorrowForecast + 8].weather[0].id;
  info.weatherCodeIcon3 = data.list[stepToTomorrowForecast + 16].weather[0].id;

  info.farenheitNextTemp1 = Math.round(data.list[stepToTomorrowForecast].main.temp);
  info.farenheitNextTemp2 = Math.round(data.list[stepToTomorrowForecast + 8].main.temp);
  info.farenheitNextTemp3 = Math.round(data.list[stepToTomorrowForecast + 16].main.temp);

  info.celciusNextTemp1 = farenheitToCelcius(data.list[stepToTomorrowForecast].main.temp);
  info.celciusNextTemp2 = farenheitToCelcius(data.list[stepToTomorrowForecast + 8].main.temp);
  info.celciusNextTemp3 = farenheitToCelcius(data.list[stepToTomorrowForecast + 16].main.temp);

  info.weatherMain = data.list[0].weather[0].main;

  if (info.currentTypeTemp === 'C') {
    info.nextTemp1 = info.celciusNextTemp1;
    info.nextTemp2 = info.celciusNextTemp2;
    info.nextTemp3 = info.celciusNextTemp3;
  }
  else {
    info.nextTemp1 = info.farenheitNextTemp1;
    info.nextTemp2 = info.farenheitNextTemp2;
    info.nextTemp3 = info.farenheitNextTemp3;
  }

  info.nextDay1 = tomorrow.toLocaleDateString(info.currLangQuery, optionsDateThreeDays);
  info.nextDay2 = dayAfterTomorrow.toLocaleDateString(info.currLangQuery, optionsDateThreeDays);
  info.nextDay3 = afterTheDayAfterTomorrow.toLocaleDateString(info.currLangQuery, optionsDateThreeDays);
  return info;
}

export function getUserPosition(url) {

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const userPosition = { nameCity: data.city, nameCountry: convertCountryCode(data.country), codeCountry: data.country };

      info.city = data.city;
      info.nameCountry = convertCountryCode(data.country);
      info.codeCountry = data.country;

      return userPosition;
    })
    .catch((error) => {
      info.error = error;
      outputError.innerHTML = `error: ${error}`;
    });
}

export function getCityInfo(url, getValue) {

  fetch(url)
    .then((res) => res.json())
    .then((data) => {

      infoUpdate.city = data.results[0].components.city;
      infoUpdate.state = data.results[0].components.state;
      infoUpdate.nameCountry = data.results[0].components.country;

      info.currentLang = appStateService.getCurrentLang();
      if(info.currentLang == null) info.currLang = 'EN';
      if (info.currentLang == null) currLangQuery = 'en-EN';
      else currLangQuery = `${info.currentLang.toLowerCase()}-${info.currentLang.toUpperCase()}`;
      info.currLangQuery = currLangQuery;

      if (getValue !== 'cityNameLat') {

        infoUpdate.timeZone = parseInt(data.results[0].annotations.timezone.offset_string, 10) / 100;
        const d = new Date();
        const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        const nd = new Date(utc + (3600000 * infoUpdate.timeZone));

        info.today = nd.toLocaleDateString(currLangQuery, optionsDateToday);

        tomorrow = new Date(nd);
        dayAfterTomorrow = new Date(nd);
        afterTheDayAfterTomorrow = new Date(nd);

        tomorrow.setDate(tomorrow.getDate() + 1)
        dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
        afterTheDayAfterTomorrow.setDate(afterTheDayAfterTomorrow.getDate() + 3)

        info.nextDay1 = tomorrow.toLocaleDateString(currLangQuery, optionsDateThreeDays);
        info.nextDay2 = dayAfterTomorrow.toLocaleDateString(currLangQuery, optionsDateThreeDays);
        info.nextDay3 = afterTheDayAfterTomorrow.toLocaleDateString(currLangQuery, optionsDateThreeDays);

        info.season = getSeason(nd.getMonth());
        info.timeOfDay = getTimesOfDay(nd.getHours());
      }
      if (typeof infoUpdate.city === 'undefined') infoUpdate.city = infoUpdate.state;
      info.city = infoUpdate.city;
      if (getValue === 'cityNameLat') infoUpdate.cityNameLat = infoUpdate.city;
      info.nameCountry = infoUpdate.nameCountry;

      infoUpdate.flag = true;

      if (getValue === 'cityNameLat') return infoUpdate.city;
      return infoUpdate;
    })
    .catch((error) => {
      infoUpdate.flag = true;
      info.error = error;
      outputError.innerHTML = `error: ${error}`;
    });
}

export function getLinkToImage(town = 'London') {
  const url = `https://api.unsplash.com/photos/random?query=town,${encodeURIComponent(town)}&client_id=${keyAccessUnsplash}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      localStorage.setItem('imageUrl', img.src);
      if (img.src) { img.src = localStorage.getItem('imageUrl'); }
      else {
        img.src = data.urls.regular;
        localStorage.setItem('imageUrl', img.src);
        document.body.style.backgroundImage = `url('${img.src}')`;
      }
    })
    .catch((error) => {
      info.error = error;
      outputError.innerHTML = `error: ${error}`;
    });


}

export function getMapbox(longitude, latitude) {

  // eslint-disable-next-line no-undef
  mapboxgl.accessToken = keyAccessMapbox;
  // eslint-disable-next-line no-undef, no-unused-vars
  const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [longitude, latitude], // starting position [lng, lat]
    zoom: 9 // starting zoom
  });

}


