import { convertDMS } from './utils';
import { wordsLang } from './variables';

function clearBody() {
  const myNode = document.getElementById('body');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

}

function createSearchBlock(parent, info) {
  const searchBlock = document.createElement('div');
  searchBlock.id = 'searchTownBlock';
  searchBlock.className = 'search-town-block';
  parent.appendChild(searchBlock);

  const btnSendTownName = document.createElement('button');
  btnSendTownName.id = 'btnSendTownName';
  btnSendTownName.className = 'btnControls btnSendTownName';
  btnSendTownName.innerHTML = '<i class="material-icons">search</i>';
  searchBlock.appendChild(btnSendTownName);

  const inputNameTown = document.createElement('input');
  inputNameTown.id = 'inputNameTown';
  inputNameTown.type = 'text';
  inputNameTown.setAttribute('placeholder', wordsLang[info.currentLang].placeholder);
  inputNameTown.className = 'inputNameTown';
  searchBlock.appendChild(inputNameTown);

  const btnVoice = document.createElement('button');
  btnVoice.id = 'btnVoice';
  btnVoice.className = 'btnControls btnVoice';
  btnVoice.innerHTML = '<i class="material-icons">keyboard_voice</i>';
  searchBlock.appendChild(btnVoice);

  const clear = document.createElement('div');
  clear.className = 'clear clear-menu';
  searchBlock.insertAdjacentElement('beforebegin', clear);


}

export function createControlsBlock(parent, info) {

  const controlBlock = document.createElement('div');
  controlBlock.id = 'controlBlock';
  controlBlock.className = 'controlBlock';
  document.getElementById(parent).appendChild(controlBlock);

  const btnRefreshInfo = document.createElement('button');
  btnRefreshInfo.id = 'btnRefresh';
  btnRefreshInfo.className = 'btnControls btnRefresh';
  btnRefreshInfo.innerHTML = '<i class="material-icons">autorenew</i>';
  controlBlock.appendChild(btnRefreshInfo);

  const btnLangEn = document.createElement('button');
  btnLangEn.id = 'btnLangEn';
  btnLangEn.setAttribute('lang', 'EN');
  btnLangEn.innerText = 'EN';
  btnLangEn.className = 'btnControls btnChangeLang btnLangEn';
  if (info.currentLang === btnLangEn.getAttribute('lang')) btnLangEn.classList.add('active');
  else btnLangEn.classList.remove('active');

  controlBlock.appendChild(btnLangEn);

  const btnLangRu = document.createElement('button');
  btnLangRu.id = 'btnLangRu';
  btnLangRu.setAttribute('lang', 'RU');
  btnLangRu.innerText = 'RU';
  btnLangRu.className = 'btnControls btnChangeLang btnLangRu';
  if (info.currentLang === btnLangRu.getAttribute('lang')) btnLangRu.classList.add('active');
  else btnLangRu.classList.remove('active');
  controlBlock.appendChild(btnLangRu);

  const btnLangBe = document.createElement('button');
  btnLangBe.id = 'btnLangBe';
  btnLangBe.setAttribute('lang', 'BE');
  btnLangBe.innerText = 'BE';
  btnLangBe.className = 'btnControls btnChangeLang btnLangBe';
  if (info.currentLang === btnLangBe.getAttribute('lang')) btnLangBe.classList.add('active');
  else btnLangBe.classList.remove('active');
  controlBlock.appendChild(btnLangBe);

  const btnTempF = document.createElement('button');
  btnTempF.id = 'btnTempF';
  btnTempF.setAttribute('type', 'F');
  btnTempF.className = 'btnControls btnChangeTemp btnTempF';
  btnTempF.innerHTML = '&#8457;';
  if (info.currentTypeTemp === btnTempF.getAttribute('type')) btnTempF.classList.add('active');
  else btnTempF.classList.remove('active');
  controlBlock.appendChild(btnTempF);

  const btnTempC = document.createElement('button');
  btnTempC.id = 'btnTempC';
  btnTempC.setAttribute('type', 'C');
  btnTempC.className = 'btnControls btnChangeTemp btnTempC';
  btnTempC.innerHTML = '&#8451;';
  if (info.currentTypeTemp === btnTempC.getAttribute('type')) btnTempC.classList.add('active');
  else btnTempC.classList.remove('active');
  controlBlock.appendChild(btnTempC);

  const clear = document.createElement('div');
  clear.className = 'clear clear-typeTemp';
  btnTempF.insertAdjacentElement('beforebegin', clear);

  createSearchBlock(controlBlock, info);

}

function createWeatherBlockHeader(parent, info) {
  const weatherTodayBlockHeader = document.createElement('div');
  weatherTodayBlockHeader.id = 'weatherTodayBlockHeader';
  weatherTodayBlockHeader.className = 'weatherTodayBlockHeader';
  parent.appendChild(weatherTodayBlockHeader);

  const weatherTodayTitle = document.createElement('h1');
  weatherTodayTitle.id = 'weatherTodayTitle';
  weatherTodayTitle.className = 'weatherTodayTitle';
  if (typeof info !== 'undefined') weatherTodayTitle.innerHTML = `${info.city},<br/> ${info.nameCountry}`;
  weatherTodayBlockHeader.appendChild(weatherTodayTitle);

  const dateTodayTime = document.createElement('span');
  dateTodayTime.id = 'dateTodayTime';
  dateTodayTime.className = 'dateTodayTime';
  if (typeof info !== 'undefined') dateTodayTime.innerText = info.today;
  weatherTodayBlockHeader.appendChild(dateTodayTime);
}

function createWeatherBlockContent(parent, info) {
  const weatherTodayContent = document.createElement('div');
  weatherTodayContent.id = 'weatherTodayContent';
  weatherTodayContent.className = 'weatherTodayContent';
  parent.appendChild(weatherTodayContent);

  const currTemperature = document.createElement('span');
  currTemperature.id = 'currTemperature';
  currTemperature.className = 'currTemperature';
  currTemperature.innerHTML = '10&deg;';
  if (typeof info !== 'undefined') currTemperature.innerHTML = `${info.temp}&deg;`;
  weatherTodayContent.appendChild(currTemperature);

  const currWeatherIcon = document.createElement('i');
  currWeatherIcon.id = 'currWeatherIcon';
  if (typeof info !== 'undefined') currWeatherIcon.className = `currWeatherIcon owf owf-${info.weatherCodeIcon}`;
  weatherTodayContent.appendChild(currWeatherIcon);

  const weatherTodayDetails = document.createElement('div');
  weatherTodayDetails.id = 'weatherTodayDetails';
  weatherTodayDetails.className = 'weatherTodayDetails';
  if (typeof info !== 'undefined') weatherTodayDetails.innerHTML =
    `<span id = 'weatherTodayDetails__title' class='weatherTodayDetails__title'>${info.weather.toUpperCase()}</span><br/>
    <span id='feelLike' class='feelLike'>${wordsLang[info.currentLang].feelLike}</span>: <span id='feelLikeTemp' class='feelLikeTemp'>${info.feelLikeTemp}°</span><br/>
    <span id='wind' class='wind'>${wordsLang[info.currentLang].wind}</span>: ${info.windSpeed} <span id='windSpeedType' class='windSpeedType'>m/s</span> <br/>
    <span id='humidity' class='humidity'>${wordsLang[info.currentLang].humidity}</span>: ${info.humidity}%`;
  weatherTodayContent.appendChild(weatherTodayDetails);
}

function createNextDay(parent, temperature, codeIcon, dayWeek) {
  const nextWeatherWeekDayBlock = document.createElement('div');
  nextWeatherWeekDayBlock.className = 'nextWeatherWeekDayBlock';
  parent.appendChild(nextWeatherWeekDayBlock);

  const nextWeatherWeekDay = document.createElement('div');
  nextWeatherWeekDay.className = 'nextWeatherWeekDay';
  if (typeof dayWeek !== 'undefined') nextWeatherWeekDay.innerText = `${dayWeek}`;
  nextWeatherWeekDayBlock.appendChild(nextWeatherWeekDay);

  const nextTemperature = document.createElement('span');
  nextTemperature.id = `nextTemperature${document.getElementById('weatherNextThreeDays').childElementCount}`;
  nextTemperature.className = 'nextTemperature';
  if (typeof temperature !== 'undefined') nextTemperature.innerHTML = `${temperature}&deg;`;
  nextWeatherWeekDayBlock.appendChild(nextTemperature);

  const nextWeatherIcon = document.createElement('i');
  if (typeof codeIcon !== 'undefined') nextWeatherIcon.className = `nextWeatherIcon owf owf-${codeIcon}`;
  nextWeatherWeekDayBlock.appendChild(nextWeatherIcon);
}

function createNextThreeDays(parent, info) {
  const weatherNextThreeDays = document.createElement('div');
  weatherNextThreeDays.id = 'weatherNextThreeDays';
  weatherNextThreeDays.className = 'weatherNextThreeDays';
  parent.appendChild(weatherNextThreeDays);

  createNextDay(weatherNextThreeDays, info.nextTemp1, info.weatherCodeIcon1, info.nextDay1);
  createNextDay(weatherNextThreeDays, info.nextTemp2, info.weatherCodeIcon2, info.nextDay2);
  createNextDay(weatherNextThreeDays, info.nextTemp3, info.weatherCodeIcon3, info.nextDay3);
}

function createWeatherBlocks(parent, info) {

  const weatherTodayBlock = document.createElement('div');
  weatherTodayBlock.id = 'weatherTodayBlock';
  weatherTodayBlock.className = 'weatherTodayBlock';
  document.getElementById(parent).appendChild(weatherTodayBlock);

  createWeatherBlockHeader(weatherTodayBlock, info);
  createWeatherBlockContent(weatherTodayBlock, info);
  createNextThreeDays(weatherTodayBlock, info);
}

function createMapBlock(parent, info) {

  const map = document.createElement('div');
  map.id = 'map';
  map.className = 'map';
  document.getElementById(parent).appendChild(map);

  const mapCoordsBlock = document.createElement('div');
  mapCoordsBlock.id = 'mapCoordsBlock';
  mapCoordsBlock.className = 'mapCoordsBlock';
  document.getElementById(parent).appendChild(mapCoordsBlock);

  const coords = document.createElement('span');
  coords.className = 'coords';
  const coordsDms = convertDMS(info.latitude, info.longitude);
  if (typeof info !== 'undefined') coords.innerHTML = `${wordsLang[info.currentLang].latitude}: ${coordsDms.latitude}, ${wordsLang[info.currentLang].longitude}: ${coordsDms.longitude}`;
  mapCoordsBlock.append(coords);

}

function createWrapper(parent) {

  const wrapper = document.createElement('div');
  wrapper.id = 'wrapper';
  wrapper.className = 'wrapper';
  document.getElementById(parent).appendChild(wrapper);

}

function createErrorBlock(parent) {

  const outputError = document.createElement('div');
  outputError.id = 'outputError';
  outputError.className = 'outputError';
  outputError.innerText = '';
  document.getElementById(parent).appendChild(outputError);


  const hintBlock = document.createElement('div');
  hintBlock.id = 'hintBlock';
  hintBlock.className = 'hint';
  hintBlock.innerText = '';
  document.getElementById(parent).appendChild(outputError);
}

export function showData(info) {
  clearBody();
  createWrapper('body');
  createControlsBlock('wrapper', info);
  createWeatherBlocks('wrapper', info);
  createMapBlock('wrapper', info);
  createErrorBlock('wrapper');
}
