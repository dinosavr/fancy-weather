import { info, infoUpdate, urlWeatherFiveDaysShort, keyAccessOpencagedata, body } from './variables';
import { getWeatherFiveDays, renderDataWeather, getMapbox, getCityInfo, getLinkToImage } from './api';
import { appStateService } from './utils';
import { showData } from './view';

function getWeatherGo() {
  infoUpdate.flag = false;

  getWeatherFiveDays(`${urlWeatherFiveDaysShort}&q=${encodeURIComponent(infoUpdate.cityNameLat)}&lang=${info.currentLang}}`)
    .then((dataWeather) => {

      // console.log(info.searchNameCity);
      // console.log(info);

      const urlOpencagedataTemp = `https://api.opencagedata.com/geocode/v1/json?key=${keyAccessOpencagedata}&q=${info.searchNameCity}&language=${info.currentLang.toLowerCase()}&pretty=1`;
      getCityInfo(urlOpencagedataTemp);

      return dataWeather;

    })
    .then((data) => {

      const dataWeather = renderDataWeather(data);

      function checkFlag() {
        if (infoUpdate.flag === false) {
          window.setTimeout(checkFlag, 100);
        } else {
          showData(dataWeather);
          getMapbox(info.longitude, info.latitude);
        }
      }
      checkFlag();
    })
    .catch((error) => {
      body.innerHTML = `error: ${error} <br/> ${body.innerHTML}`;
    });
}

export function checkFlagName() {
  if (infoUpdate.flag === false) {
    window.setTimeout(checkFlagName, 100);
  } else {
    getWeatherGo();
  }
}



export function getCityWeather(e) {
  const inputNameTownTemp = document.getElementById('inputNameTown');

  const idCurr = e.target.id;
  const idParent = e.target.parentElement.id;

  const btnSendCityNameDetect = (idCurr === 'btnSendTownName') || (idParent === 'btnSendTownName');
  const inputEnterDetect = (e.key === "Enter") && (idCurr === 'inputNameTown');

  if (btnSendCityNameDetect || inputEnterDetect) {

    info.searchNameCity = inputNameTownTemp.value;
    infoUpdate.flag = false;

    // console.log('getCityWeather');
    // console.log(info);

    const urlOpencagedataTemp = `https://api.opencagedata.com/geocode/v1/json?key=${keyAccessOpencagedata}&q=${encodeURIComponent(info.searchNameCity)}&language=${info.currentLang.toLowerCase}&pretty=1`;
    getCityInfo(urlOpencagedataTemp, 'cityNameLat');

    checkFlagName();

    appStateService.setSearchNameCity(info.searchNameCity);
  }

}

export function reloadBackgroundImage(e) {

  const idCurr = e.target.id;
  const idParent = e.target.parentElement.id;

  const btnRefreshDetect = (idCurr === 'btnRefresh') || (idParent === 'btnRefresh');

  if (btnRefreshDetect) {
    const keyWordsQuery = `${info.season},${info.timeOfDay},${info.weatherMain}`;
    getLinkToImage(keyWordsQuery);
  }

}

export function changeTypeTemperature(e) {

  const btnTempF = document.getElementById('btnTempF');
  const btnTempC = document.getElementById('btnTempC');
  const currTemperature = document.getElementById('currTemperature');
  const nextTemperature1 = document.getElementById('nextTemperature1');
  const nextTemperature2 = document.getElementById('nextTemperature2');
  const nextTemperature3 = document.getElementById('nextTemperature3');

  const idCurr = e.target.id;
  // const idParent = e.target.parentElement.id;

  const btnTypeTemperatureDetect = (idCurr === 'btnTempF') || (idCurr === 'btnTempC');

  if (btnTypeTemperatureDetect) {

    btnTempC.classList.remove('active');
    btnTempF.classList.remove('active');
    e.target.classList.add('active');

    if (idCurr === 'btnTempF') {
      currTemperature.innerHTML = `${info.farenheitTemp}&deg;`;
      nextTemperature1.innerHTML = `${info.farenheitNextTemp1}&deg;`;
      nextTemperature2.innerHTML = `${info.farenheitNextTemp2}&deg;`;
      nextTemperature3.innerHTML = `${info.farenheitNextTemp3}&deg;`;
      appStateService.setCurrentTypeTemp('F');
    }
    if (idCurr === 'btnTempC') {
      currTemperature.innerHTML = `${info.celciustTemp}&deg;`;
      nextTemperature1.innerHTML = `${info.celciusNextTemp1}&deg;`;
      nextTemperature2.innerHTML = `${info.celciusNextTemp2}&deg;`;
      nextTemperature3.innerHTML = `${info.celciusNextTemp3}&deg;`;
      appStateService.setCurrentTypeTemp('C');
    }


    location.reload();
  }

}


function setLanguageValue(lang) {

  appStateService.setCurrentLang(lang.toUpperCase());
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

export function changeLanguage(e) {

  const btnLangEn = document.getElementById('btnLangEn');
  const btnLangRu = document.getElementById('btnLangRu');
  const btnLangBe = document.getElementById('btnLangBe');

  const idCurr = e.target.id;
  // const idParent = e.target.parentElement.id;

  const btnTypeTemperatureDetect = (idCurr === 'btnLangEn') || (idCurr === 'btnLangRu') || (idCurr === 'btnLangBe');

  if (btnTypeTemperatureDetect) {
    btnLangEn.classList.remove('active');
    btnLangRu.classList.remove('active');
    btnLangBe.classList.remove('active');
    e.target.classList.add('active');


    if (idCurr === 'btnLangEn') info.currentLang = 'EN';
    if (idCurr === 'btnLangRu') info.currentLang = 'RU';
    if (idCurr === 'btnLangBe') info.currentLang = 'BE';

// eslint-disable-next-line no-restricted-globals
    setLanguageValue(info.currentLang);
  }


}
