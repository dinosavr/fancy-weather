import '../css/style.css';
import '../css/owfont-regular.css';
import { info, urlIpInfo, infoUpdate, keyAccessOpencagedata} from './variables';
import { getUserPosition, getLinkToImage, getVoice, getCityInfo} from './api';
import { timeReload, initDefaultValue, appStateService} from './utils';
import { checkFlagName} from './actions';
import initListener from './listeners';


function init() {
  initDefaultValue();
  getUserPosition(urlIpInfo)
    .then((userPosition) => {

      info.searchNameCity = userPosition.nameCity;
      infoUpdate.flag = false;

      const urlOpencagedataTemp = `https://api.opencagedata.com/geocode/v1/json?key=${keyAccessOpencagedata}&q=${encodeURIComponent(userPosition.nameCity)}&language=en&pretty=1`;
      getCityInfo(urlOpencagedataTemp, 'cityNameLat');

      appStateService.setSearchNameCity(userPosition.nameCity);

      checkFlagName();

      const keyWordsQuery = `${info.season},${info.timeOfDay},${info.weatherMain},${info.weatherMain}`;
      getLinkToImage(keyWordsQuery);

    })


}

document.addEventListener('DOMContentLoaded', () => {
  init();
  timeReload();
  initListener();
});
