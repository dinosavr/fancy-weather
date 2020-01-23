import { getVoice } from './api';
import { getCityWeather, reloadBackgroundImage, changeTypeTemperature, changeLanguage } from './actions';

export default function initListener() {
  document.addEventListener('click', (e) => {
    getCityWeather(e);
    reloadBackgroundImage(e);
    changeTypeTemperature(e);
    changeLanguage(e);
    getVoice(e);
  });

  document.addEventListener('keydown', (e) => {
    getCityWeather(e);
  });
}
