export const info = {};
export const infoUpdate = {};
export const projectFolder = 'fancy-weather';
export const keyAccessUnsplash = '507aee803d5a35c77ef11a924ce9d04d9041aaf25398cd6643ef145f8f35f496';
const keyAccessCurrentUserPosition = '6a4f6150c8388c';

export const urlIpInfo = `https://ipinfo.io/json?token=${keyAccessCurrentUserPosition}`;

const keyAccessWeatherFiveDays = '37fca4b1c0a061ceabdb06c08a838dc9';
export const city = 'Saint Petersburg';
export const weatherLang = 'en';
const weatherUnit = 'imperial';
export const urlWeatherFiveDays = `https://api.openweathermap.org/data/2.5/forecast?units=${weatherUnit}&APPID=${keyAccessWeatherFiveDays}&q=${city}&lang=${weatherLang}`;
export const urlWeatherFiveDaysShort = `https://api.openweathermap.org/data/2.5/forecast?units=${weatherUnit}&APPID=${keyAccessWeatherFiveDays}`;

export const keyAccessOpencagedata = '672546f90ce445a5b5f17943fe5a0553';
const cityOpencagedata = 'Нью Йорк';
const langOpencagedata = 'ru';

export const urlOpencagedata = `https://api.opencagedata.com/geocode/v1/json?key=${keyAccessOpencagedata}&q=${cityOpencagedata}&language=${langOpencagedata}&pretty=1`;

export const keyAccessMapbox = 'pk.eyJ1IjoiZGlub3NhdnIiLCJhIjoiY2s0OTF6MXhnMDB3ZDNucW9nOXFoZHdzNiJ9.xZqvImg8mDEyLpgqwEyKTA';

export const body = document.getElementById('body');
export const outputError = document.getElementById('outputError');
export const btnSendTownName = document.getElementById('btnSendTownName');
export const inputNameTown = document.getElementById('inputNameTown');

export const dateTodayTime = document.getElementById('dateTodayTime');

export const weatherFiveDays = document.getElementById('weatherFiveDays');
export const btnRefresh = document.getElementById('btnRefresh');
export const btnVoice = document.getElementById('btnVoice');


export const optionsDateToday = { weekday: 'short', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
export const optionsDateThreeDays = { weekday: 'long' };

export const monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

export const dayNames = [
  "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday", "Sunday"
];



export const wordsLang = {
  'EN': {
    placeholder: 'Search city',
    weatherTodayDetails__title: 'OVERCAST',
    feelLike: 'FEELS LIKE',
    wind: 'WIND',
    humidity: 'HUMIDITY',
    latitude: 'Latitude',
    longitude: 'Longitude',
  },
  'RU': {
    placeholder: 'Город',
    weatherTodayDetails__title: 'OVERCAST',
    feelLike: 'ОЩУЩАЕТСЯ',
    wind: 'ВЕТЕР',
    humidity: 'ВЛАЖНОСТЬ',
    latitude: 'Широта',
    longitude: 'Долгота',
  },
  'BE': {
    placeholder: 'Горад',
    weatherTodayDetails__title: 'OVERCAST',
    feelLike: 'АДЧУВАЦЦА',
    wind: 'ВЕЦЕР',
    humidity: 'ВІЛЬГОТНАСЦЬ',
    latitude: 'Шыраты',
    longitude: 'Даўгата',
  },

}



export const WeatherConditionCodes = {
  '200': {
    en: 'thunderstorm with light rain',
    ru: 'гроза с небольшим дождем',
    be: 'навальніца з невялікім дажджом',
  },
  '201': {
    en: 'thunderstorm with rain',
    ru: 'гроза с дождем',
    be: 'навальніца з дажджом',
  },
  '202': {
    en: 'thunderstorm with heavy rain',
    ru: 'гроза с проливным дождем',
    be: 'навальніца з моцным дажджом',
  },
  '210': {
    en: 'light thunderstorm',
    ru: 'легкая гроза',
    be: 'лёгкая навальніца',
  },
  '211': {
    en: 'thunderstorm',
    ru: 'гроза',
    be: 'навальніца',
  },
  '212': {
    en: 'heavy thunderstorm',
    ru: 'сильная гроза',
    be: 'моцная навальніца',
  },
  '221': {
    en: 'ragged thunderstorm',
    ru: 'рваная гроза',
    be: 'ірваная навальніца',
  },
  '230': {
    en: 'thunderstorm with light drizzle',
    ru: 'гроза с моросящим дождем',
    be: 'навальніца пры невялікім дожджыку',
  },
  '231': {
    en: 'thunderstorm with drizzle',
    ru: 'Моросящий дождь',
    be: 'навальніца з кароткачасовымі ападкамі',
  },
  '232': {
    en: 'thunderstorm with heavy drizzle',
    ru: 'гроза с сильным моросящим дождем',
    be: 'навальніца з моцнай моцай',
  },
  '300': {
    en: 'light intensity drizzle',
    ru: 'Моросить',
    be: 'кароткачасовы дождж',
  },
  '301': {
    en: 'drizzle',
    ru: 'моросящий дождь',
    be: 'імжа',
  },
  '302': {
    en: 'heavy intensity drizzle',
    ru: 'интенсивный моросящий дождь',
    be: 'кароткачасовая імзея',
  },
  '310': {
    en: 'light intensity drizzle rain',
    ru: 'Моросящий дождь сильной интенсивности',
    be: 'Лёгкі дождж',
  },
  '311': {
    en: 'drizzle rain',
    ru: 'морось и дождь',
    be: 'дождж з дожджыкам',
  },
  '312': {
    en: 'heavy intensity drizzle rain',
    ru: 'сильный ливень и дождь',
    be: 'моцны дождж з дожджыкам ',
  },
  '313': {
    en: 'shower rain and drizzle',
    ru: 'моросящий дождь',
    be: 'дождж і дождж',
  },
  '314': {
    en: 'heavy shower rain and drizzle',
    ru: 'сильный ливень и дождь',
    be: 'моцны дождж і дождж',

  },
  '321': {
    en: 'shower drizzle',
    ru: 'моросящий дождь',
    be: 'кароткачасовы душ',
  },
  '500': {
    en: 'light rain',
    ru: 'легкий дождь',
    be: 'невялікі дождж',
  },
  '501': {
    en: 'moderate rain',
    ru: 'умеренный дождь',
    be: 'ўмераны дождж',
  },
  '502': {
    en: 'heavy intensity rain',
    ru: 'сильный дождь',
    be: 'моцны дождж',
  },
  '503': {
    en: 'very heavy rain',
    ru: 'очень сильный дождь',
    be: 'вельмі моцны дождж',
  },
  '504': {
    en: 'extreme rain',
    ru: 'экстремальный дождь',
    be: 'моцны дождж',
  },
  '511': {
    en: 'freezing rain',
    ru: 'холодный дождь',
    be: 'ледзяны дождж',
  },
  '520': {
    en: 'light intensity shower rain',
    ru: 'легкий дождь',
    be: 'лёгкі дождж з дажджом',
  },
  '521': {
    en: 'shower rain',
    ru: 'дождь ливень',
    be: 'лівень',
  },
  '522': {
    en: 'heavy intensity shower rain',
    ru: 'сильный ливневый дождь',
    be: 'моцны дождж з дажджом',
  },
  '531': {
    en: 'ragged shower rain',
    ru: 'рваный дождь',
    be: 'ірваны дождж з дажджом',
  },
  '600': {
    en: 'light snow',
    ru: 'легкий снег',
    be: 'невялікі снег',
  },
  '601': {
    en: 'Snow',
    ru: 'Снег',
    be: 'Снег',
  },
  '602': {
    en: 'Heavy snow',
    ru: 'Снегопад',
    be: 'Моцны снег',
  },
  '611': {
    en: 'Sleet',
    ru: 'Мокрый',
    be: 'Мокры снег',
  },
  '612': {
    en: 'Light shower sleet',
    ru: 'Легкий душевой каблук',
    be: 'Лёгкі мокры снег',
  },
  '613': {
    en: 'Shower sleet',
    ru: 'Душ со снегом',
    be: 'Душ мокры снег',
  },
  '615': {
    en: 'Light rain and snow',
    ru: 'Небольшой дождь и снег',
    be: 'Невялікі дождж і снег',
  },
  '616': {
    en: 'Rain and snow',
    ru: 'Дождь и снег',
    be: 'Дождж і снег',
  },
  '620': {
    en: 'Light shower snow',
    ru: 'Легкий дождь снега',
    be: 'Лёгкі снег',
  },
  '621': {
    en: 'Shower snow',
    ru: 'Душ снега',
    be: 'Снег з душам',
  },
  '622': {
    en: 'Heavy shower snow',
    ru: 'Сильный ливень снега',
    be: 'Моцны снег з душам',
  },
  '701': {
    en: 'mist',
    ru: 'Туман',
    be: 'туман',
  },
  '711': {
    en: 'Smoke',
    ru: 'Дым',
    be: 'Дым',
  },
  '721': {
    en: 'Haze',
    ru: 'Мгла',
    be: 'Дымка',
  },
  '731': {
    en: 'sand/ dust whirls',
    ru: 'песок / пыль кружится',
    be: 'пясок / пыл круціцца',
  },
  '741': {
    en: 'fog',
    ru: 'туман',
    be: 'туман',
  },
  '751': {
    en: 'sand',
    ru: 'Песок',
    be: 'пясок',
  },
  '761': {
    en: 'dust',
    ru: 'Пыль',
    be: 'пыл',
  },
  '762': {
    en: 'volcanic ash',
    ru: 'вулканический пепел',
    be: 'вулканічны попел',
  },
  '771': {
    en: 'squalls',
    ru: 'шквалы',
    be: 'шквал',
  },
  '781': {
    en: 'tornado',
    ru: 'торнадо',
    be: 'тарнада',
  },
  '800': {
    en: 'clear sky',
    ru: 'чистое небо',
    be: 'яснае неба',
  },
  '801': {
    en: 'few clouds',
    ru: 'мало облаков',
    be: 'некалькі аблокаў',
  },
  '802': {
    en: 'scattered clouds',
    ru: 'рассеянные облака',
    be: 'раскіданыя хмары',
  },
  '803': {
    en: 'broken clouds',
    ru: 'облачность',
    be: 'разбітыя хмары',
  },
  '804': {
    en: 'overcast clouds',
    ru: 'пасмурные облака',
    be: 'воблачна',
  }
}

export const isoCountries = {
  'AF': {
    name: 'Afghanistan',
  },
  'AX': {
    name: 'Aland Islands',
  },
  'AL': {
    name: 'Albania',
  },
  'DZ': {
    name: 'Algeria',
  },
  'AS': {
    name: 'American Samoa',
  },
  'AD': {
    name: 'Andorra',
  },
  'AO': {
    name: 'Angola',
  },
  'AI': {
    name: 'Anguilla',
  },
  'AQ': {
    name: 'Antarctica',
  },
  'AG': {
    name: 'Antigua And Barbuda',
  },
  'AR': {
    name: 'Argentina',
  },
  'AM': {
    name: 'Armenia',
  },
  'AW': {
    name: 'Aruba',
  },
  'AU': {
    name: 'Australia',
  },
  'AT': {
    name: 'Austria',
  },
  'AZ': {
    name: 'Azerbaijan',
  },
  'BS': {
    name: 'Bahamas',
  },
  'BH': {
    name: 'Bahrain',
  },
  'BD': {
    name: 'Bangladesh',
  },
  'BB': {
    name: 'Barbados',
  },
  'BY': {
    name: 'Belarus',
  },
  'BE': {
    name: 'Belgium',
  },
  'BZ': {
    name: 'Belize',
  },
  'BJ': {
    name: 'Benin',
  },
  'BM': {
    name: 'Bermuda',
  },
  'BT': {
    name: 'Bhutan',
  },
  'BO': {
    name: 'Bolivia',
  },
  'BA': {
    name: 'Bosnia And Herzegovina',
  },
  'BW': {
    name: 'Botswana',
  },
  'BV': {
    name: 'Bouvet Island',
  },
  'BR': {
    name: 'Brazil',
  },
  'IO': {
    name: 'British Indian Ocean Territory',
  },
  'BN': {
    name: 'Brunei Darussalam',
  },
  'BG': {
    name: 'Bulgaria',
  },
  'BF': {
    name: 'Burkina Faso',
  },
  'BI': {
    name: 'Burundi',
  },
  'KH': {
    name: 'Cambodia',
  },
  'CM': {
    name: 'Cameroon',
  },
  'CA': {
    name: 'Canada',
  },
  'CV': {
    name: 'Cape Verde',
  },
  'KY': {
    name: 'Cayman Islands',
  },
  'CF': {
    name: 'Central African Republic',
  },
  'TD': {
    name: 'Chad',
  },
  'CL': {
    name: 'Chile',
  },
  'CN': {
    name: 'China',
  },
  'CX': {
    name: 'Christmas Island',
  },
  'CC': {
    name: 'Cocos (Keeling) Islands',
  },
  'CO': {
    name: 'Colombia',
  },
  'KM': {
    name: 'Comoros',
  },
  'CG': {
    name: 'Congo',
  },
  'CD': {
    name: 'Congo, Democratic Republic',
  },
  'CK': {
    name: 'Cook Islands',
  },
  'CR': {
    name: 'Costa Rica',
  },
  'CI': {
    name: 'Cote D\'Ivoire',
  },
  'HR': {
    name: 'Croatia',
  },
  'CU': {
    name: 'Cuba',
  },
  'CY': {
    name: 'Cyprus',
  },
  'CZ': {
    name: 'Czech Republic',
  },
  'DK': {
    name: 'Denmark',
  },
  'DJ': {
    name: 'Djibouti',
  },
  'DM': {
    name: 'Dominica',
  },
  'DO': {
    name: 'Dominican Republic',
  },
  'EC': {
    name: 'Ecuador',
  },
  'EG': {
    name: 'Egypt',
  },
  'SV': {
    name: 'El Salvador',
  },
  'GQ': {
    name: 'Equatorial Guinea',
  },
  'ER': {
    name: 'Eritrea',
  },
  'EE': {
    name: 'Estonia',
  },
  'ET': {
    name: 'Ethiopia',
  },
  'FK': {
    name: 'Falkland Islands (Malvinas)',
  },
  'FO': {
    name: 'Faroe Islands',
  },
  'FJ': {
    name: 'Fiji',
  },
  'FI': {
    name: 'Finland',
  },
  'FR': {
    name: 'France',
  },
  'GF': {
    name: 'French Guiana',
  },
  'PF': {
    name: 'French Polynesia',
  },
  'TF': {
    name: 'French Southern Territories',
  },
  'GA': {
    name: 'Gabon',
  },
  'GM': {
    name: 'Gambia',
  },
  'GE': {
    name: 'Georgia',
  },
  'DE': {
    name: 'Germany',
  },
  'GH': {
    name: 'Ghana',
  },
  'GI': {
    name: 'Gibraltar',
  },
  'GR': {
    name: 'Greece',
  },
  'GL': {
    name: 'Greenland',
  },
  'GD': {
    name: 'Grenada',
  },
  'GP': {
    name: 'Guadeloupe',
  },
  'GU': {
    name: 'Guam',
  },
  'GT': {
    name: 'Guatemala',
  },
  'GG': {
    name: 'Guernsey',
  },
  'GN': {
    name: 'Guinea',
  },
  'GW': {
    name: 'Guinea-Bissau',
  },
  'GY': {
    name: 'Guyana',
  },
  'HT': {
    name: 'Haiti',
  },
  'HM': {
    name: 'Heard Island & Mcdonald Islands',
  },
  'VA': {
    name: 'Holy See (Vatican City State)',
  },
  'HN': {
    name: 'Honduras',
  },
  'HK': {
    name: 'Hong Kong',
  },
  'HU': {
    name: 'Hungary',
  },
  'IS': {
    name: 'Iceland',
  },
  'IN': {
    name: 'India',
  },
  'ID': {
    name: 'Indonesia',
  },
  'IR': {
    name: 'Iran, Islamic Republic Of',
  },
  'IQ': {
    name: 'Iraq',
  },
  'IE': {
    name: 'Ireland',
  },
  'IM': {
    name: 'Isle Of Man',
  },
  'IL': {
    name: 'Israel',
  },
  'IT': {
    name: 'Italy',
  },
  'JM': {
    name: 'Jamaica',
  },
  'JP': {
    name: 'Japan',
  },
  'JE': {
    name: 'Jersey',
  },
  'JO': {
    name: 'Jordan',
  },
  'KZ': {
    name: 'Kazakhstan',
  },
  'KE': {
    name: 'Kenya',
  },
  'KI': {
    name: 'Kiribati',
  },
  'KR': {
    name: 'Korea',
  },
  'KW': {
    name: 'Kuwait',
  },
  'KG': {
    name: 'Kyrgyzstan',
  },
  'LA': {
    name: 'Lao People\'s Democratic Republic',
  },
  'LV': {
    name: 'Latvia',
  },
  'LB': {
    name: 'Lebanon',
  },
  'LS': {
    name: 'Lesotho',
  },
  'LR': {
    name: 'Liberia',
  },
  'LY': {
    name: 'Libyan Arab Jamahiriya',
  },
  'LI': {
    name: 'Liechtenstein',
  },
  'LT': {
    name: 'Lithuania',
  },
  'LU': {
    name: 'Luxembourg',
  },
  'MO': {
    name: 'Macao',
  },
  'MK': {
    name: 'Macedonia',
  },
  'MG': {
    name: 'Madagascar',
  },
  'MW': {
    name: 'Malawi',
  },
  'MY': {
    name: 'Malaysia',
  },
  'MV': {
    name: 'Maldives',
  },
  'ML': {
    name: 'Mali',
  },
  'MT': {
    name: 'Malta',
  },
  'MH': {
    name: 'Marshall Islands',
  },
  'MQ': {
    name: 'Martinique',
  },
  'MR': {
    name: 'Mauritania',
  },
  'MU': {
    name: 'Mauritius',
  },
  'YT': {
    name: 'Mayotte',
  },
  'MX': {
    name: 'Mexico',
  },
  'FM': {
    name: 'Micronesia, Federated States Of',
  },
  'MD': {
    name: 'Moldova',
  },
  'MC': {
    name: 'Monaco',
  },
  'MN': {
    name: 'Mongolia',
  },
  'ME': {
    name: 'Montenegro',
  },
  'MS': {
    name: 'Montserrat',
  },
  'MA': {
    name: 'Morocco',
  },
  'MZ': {
    name: 'Mozambique',
  },
  'MM': {
    name: 'Myanmar',
  },
  'NA': {
    name: 'Namibia',
  },
  'NR': {
    name: 'Nauru',
  },
  'NP': {
    name: 'Nepal',
  },
  'NL': {
    name: 'Netherlands',
  },
  'AN': {
    name: 'Netherlands Antilles',
  },
  'NC': {
    name: 'New Caledonia',
  },
  'NZ': {
    name: 'New Zealand',
  },
  'NI': {
    name: 'Nicaragua',
  },
  'NE': {
    name: 'Niger',
  },
  'NG': {
    name: 'Nigeria',
  },
  'NU': {
    name: 'Niue',
  },
  'NF': {
    name: 'Norfolk Island',
  },
  'MP': {
    name: 'Northern Mariana Islands',
  },
  'NO': {
    name: 'Norway',
  },
  'OM': {
    name: 'Oman',
  },
  'PK': {
    name: 'Pakistan',
  },
  'PW': {
    name: 'Palau',
  },
  'PS': {
    name: 'Palestinian Territory, Occupied',
  },
  'PA': {
    name: 'Panama',
  },
  'PG': {
    name: 'Papua New Guinea',
  },
  'PY': {
    name: 'Paraguay',
  },
  'PE': {
    name: 'Peru',
  },
  'PH': {
    name: 'Philippines',
  },
  'PN': {
    name: 'Pitcairn',
  },
  'PL': {
    name: 'Poland',
  },
  'PT': {
    name: 'Portugal',
  },
  'PR': {
    name: 'Puerto Rico',
  },
  'QA': {
    name: 'Qatar',
  },
  'RE': {
    name: 'Reunion',
  },
  'RO': {
    name: 'Romania',
  },
  'RU': {
    name: 'Russian Federation',
  },
  'RW': {
    name: 'Rwanda',
  },
  'BL': {
    name: 'Saint Barthelemy',
  },
  'SH': {
    name: 'Saint Helena',
  },
  'KN': {
    name: 'Saint Kitts And Nevis',
  },
  'LC': {
    name: 'Saint Lucia',
  },
  'MF': {
    name: 'Saint Martin',
  },
  'PM': {
    name: 'Saint Pierre And Miquelon',
  },
  'VC': {
    name: 'Saint Vincent And Grenadines',
  },
  'WS': {
    name: 'Samoa',
  },
  'SM': {
    name: 'San Marino',
  },
  'ST': {
    name: 'Sao Tome And Principe',
  },
  'SA': {
    name: 'Saudi Arabia',
  },
  'SN': {
    name: 'Senegal',
  },
  'RS': {
    name: 'Serbia',
  },
  'SC': {
    name: 'Seychelles',
  },
  'SL': {
    name: 'Sierra Leone',
  },
  'SG': {
    name: 'Singapore',
  },
  'SK': {
    name: 'Slovakia',
  },
  'SI': {
    name: 'Slovenia',
  },
  'SB': {
    name: 'Solomon Islands',
  },
  'SO': {
    name: 'Somalia',
  },
  'ZA': {
    name: 'South Africa',
  },
  'GS': {
    name: 'South Georgia And Sandwich Isl.',
  },
  'ES': {
    name: 'Spain',
  },
  'LK': {
    name: 'Sri Lanka',
  },
  'SD': {
    name: 'Sudan',
  },
  'SR': {
    name: 'Suriname',
  },
  'SJ': {
    name: 'Svalbard And Jan Mayen',
  },
  'SZ': {
    name: 'Swaziland',
  },
  'SE': {
    name: 'Sweden',
  },
  'CH': {
    name: 'Switzerland',
  },
  'SY': {
    name: 'Syrian Arab Republic',
  },
  'TW': {
    name: 'Taiwan',
  },
  'TJ': {
    name: 'Tajikistan',
  },
  'TZ': {
    name: 'Tanzania',
  },
  'TH': {
    name: 'Thailand',
  },
  'TL': {
    name: 'Timor-Leste',
  },
  'TG': {
    name: 'Togo',
  },
  'TK': {
    name: 'Tokelau',
  },
  'TO': {
    name: 'Tonga',
  },
  'TT': {
    name: 'Trinidad And Tobago',
  },
  'TN': {
    name: 'Tunisia',
  },
  'TR': {
    name: 'Turkey',
  },
  'TM': {
    name: 'Turkmenistan',
  },
  'TC': {
    name: 'Turks And Caicos Islands',
  },
  'TV': {
    name: 'Tuvalu',
  },
  'UG': {
    name: 'Uganda',
  },
  'UA': {
    name: 'Ukraine',
  },
  'AE': {
    name: 'United Arab Emirates',
  },
  'GB': {
    name: 'United Kingdom',
  },
  'US': {
    name: 'United States',
  },
  'UM': {
    name: 'United States Outlying Islands',
  },
  'UY': {
    name: 'Uruguay',
  },
  'UZ': {
    name: 'Uzbekistan',
  },
  'VU': {
    name: 'Vanuatu',
  },
  'VE': {
    name: 'Venezuela',
  },
  'VN': {
    name: 'Viet Nam',
  },
  'VG': {
    name: 'Virgin Islands, British',
  },
  'VI': {
    name: 'Virgin Islands, U.S.',
  },
  'WF': {
    name: 'Wallis And Futuna',
  },
  'EH': {
    name: 'Western Sahara',
  },
  'YE': {
    name: 'Yemen',
  },
  'ZM': {
    name: 'Zambia',
  },
  'ZW': {
    name: 'Zimbabwe'
  },
};
