const weatherApi = {
  key: "828cc99e0335c9476a8f751b7c386d9a",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}
let lat, long, dat;
let city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let min = document.querySelector('.min');
let max = document.querySelector('.max');
let humidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.wind-speed');
let clouds = document.querySelector('.clouds');
let visibility = document.querySelector('.visibility');
const searchInputBox = document.getElementById('input-box');
const searchIcon = document.querySelector('.search-icon');
let notFound = document.querySelector('.not-found');
const weatherStatus = document.querySelector('.weather-status');


searchInputBox.addEventListener('keypress' , (event) => {
  if(event.keyCode == 13) {

      console.log(searchInputBox.value);
      getWeatherReport(searchInputBox.value);

  }
});
searchIcon.addEventListener('click', function(event) {
      console.log(searchInputBox.value);
      getWeatherReport(searchInputBox.value);
})

function getWeatherReport(city){
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
  .then(weather => {
      return weather.json();
  }).then((data) => {
    showWeatherReport(data);
    lat = data.coord.lat;
    long = data.coord.lon;
    console.log(data);
  }).catch(function(err){
    // console.log(err);
    notFound.innerHTML = `City not found, Please try again!`;
    clouds.innerHTML = ``;
    temp.innerHTML = ``;
    min.innerHTML = ``;
    max.innerHTML = ``;
    humidity.innerHTML=``;
    windSpeed.innerHTML = ``;
    visibility.innerHTML = ``;
    city.innerText = ``;

  })
}
function showWeatherReport(weather){
  console.log(weather);
  notFound.innerHTML='';
  city.innerHTML = `${weather.name},${weather.sys.country}`;
  clouds.innerHTML = `${weather.weather[0].description}`
  temp.innerHTML = `Temperature: ${Math.round(weather.main.temp)}&deg;C`;
  min.innerHTML = `Min Temperature: ${Math.floor(weather.main.temp_min)}&deg;C`;
  max.innerHTML = ` Max Temperature: ${Math.ceil(weather.main.temp_min)}&deg;C`;
  humidity.innerHTML=`Humidity: ${weather.main.humidity}`;
  windSpeed.innerHTML = `Wind: ${weather.wind.speed} Km/h`;
  let vis = weather.visibility;

  if(vis<40){
    visibility.innerHTML = `Visibility: Dense Fog`;
  }
  else if(vis>=40 && vis<200){
    visibility.innerHTML = `Visibility: Thick Fog`;
  }
  else if(vis>=200 && vis<1000){
    visibility.innerHTML = `Visibility: Fog`;
  }
  else if(vis>=1000 && vis<2000){
    visibility.innerHTML = `Visibility: Mist/Haze`;
  }
  else if(vis>=2000 && vis<4000){
    visibility.innerHTML = `Visibility: Poor Visibility`;
  }
  else if(vis>=4000 && vis<10000){
    visibility.innerHTML = `Visibility: Moderate Visibility`;
  }
  else if(vis>=10000 && vis<40000){
    visibility.innerHTML = `Visibility: Good Visibility`;
  }
  else{
    visibility.innerHTML = `Visibility: Excellent Visibility`;
  }
  
}

let tags = [
'Afghanistan',
'Albania',
'Algeria',
'Andorra',
'Angola',
'Antigua and Barbuda',
'Argentina',
'Armenia',
'Australia',
'Austria',
'Azerbaijan',
'Bahamas',
'Bahrain',
'Bangladesh',
'Barbados',
'Belarus',
'Belgium',
'Belize',
'Benin',
'Bhutan',
'Bolivia',
'Bosnia and Herzegovina',
'Botswana',
'Brazil',
'Brunei',
'Bulgaria',
'Burkina Faso',
'Burundi',
'Cabo Verde',
'Cambodia',
'Cameroon',
'Canada',
'Central African Republic (CAR)',
'Chad',
'Chile',
'China',
'Colombia',
'Comoros',
"Cote d'Ivoire",
'Croatia',
'Cuba',
'Cyprus',
'Czechia',
'Denmark',
'Djibouti',
'Dominica',
'Dominican Republic',
'Ecuador',
'Egypt',
'El Salvador',
'Equatorial Guinea',
'Eritrea',
'Estonia',
'Eswatini',
'Ethiopia',
'Fiji',
'Finland',
'France',
'Gabon',
'Gambia',
'Georgia',
'Germany',
'Ghana',
'Greece',
'Grenada',
'Guatemala',
'Guinea',
'Guinea-Bissau',
'Guyana',
'Haiti',
'Honduras',
'Hungary',
'Iceland',
'India',
'Indonesia',
'Iran',
'Iraq',
'Ireland',
'Israel',
'Italy',
'Jamaica',
'Japan',
'Jordan',
'Kazakhstan',
'Kenya',
'Kiribati',
'Kosovo',
'Kuwait',
'Kyrgyzstan',
'Laos',
'Latvia',
'Lebanon',
'Lesotho',
'Liberia',
'Libya',
'Liechtenstein',
'Lithuania',
'Luxembourg',
'Madagascar',
'Malawi',
'Malaysia',
'Maldives',
'Mali',
'Malta',
'Marshall Islands',
'Mauritania',
'Mauritius',
'Mexico',
'Micronesia',
'Moldova',
'Monaco',
'Mongolia',
'Montenegro',
'Morocco',
'Mozambique',
'Myanmar',
'Namibia',
'Nauru',
'Nepal',
'Netherlands',
'New Zealand',
'Nicaragua',
'Niger',
'Nigeria',
'North Korea',
'North Macedonia',
'Norway',
'Oman',
'Pakistan',
'Palau',
'Palestine',
'Panama',
'Papua New Guinea',
'Paraguay',
'Peru',
'Philippines',
'Poland',
'Portugal',
'Qatar',
'Romania',
'Russia',
'Rwanda',
'Saint Kitts and Nevis',
'Saint Lucia',
'Saint Vincent and the Grenadines',
'Samoa',
'San Marino',
'Sao Tome and Principe',
'Saudi Arabia',
'Senegal',
'Serbia',
'Seychelles',
'Sierra Leone',
'Singapore',
'Slovakia',
'Slovenia',
'Solomon Islands',
'Somalia',
'South Africa',
'South Korea',
'South Sudan',
'Spain',
'Sri Lanka',
'Sudan',
'Suriname',
'Sweden',
'Switzerland',
'Syria',
'Taiwan',
'Tajikistan',
'Tanzania',
'Thailand',
'Timor-Leste',
'Togo',
'Tonga',
'Trinidad and Tobago',
'Tunisia',
'Turkey',
'Turkmenistan',
'Tuvalu',
'Uganda',
'Ukraine',
'United Arab Emirates (UAE)',
'United Kingdom (UK)',
'United States of America (USA)',
'Uruguay',
'Uzbekistan',
'Vanuatu',
'Vatican City (Holy See)',
'Venezuela',
'Vietnam',
'Yemen',
'Zambia',
'Zimbabwe',
"Delhi",
"Ahmedabad",
"Punjab",
"Uttar Pradesh",
"Himachal Pradesh",
"Karnataka",
"Kerala",
"Maharashtra",
"Gujrat",
"Rajasthan",
"Bihar",
"Tamil Nadu",
"Haryana",
'Kabul',
'Tirana',
'Algiers',
'Andorra la Vella',
'Luanda',
"Saint John's",
'Buenos Aires',
'Yerevan',
'Canberra',
'Vienna',
'Baku',
'Nassau',
'Manama',
'Dhaka',
'Bridgetown',
'Minsk',
'Brussels',
'Belmopan',
'Porto-Novo',
'Thimphu',
'Sarajevo',
'Gaborone',
'Brasilia',
'Bandar Seri Begawan',
'Sofia',
'Ouagadougou',
'Gitega',
'Praia',
'Phnom Penh',
'Yaounde',
'Ottawa',
'Bangui',
"N'Djamena",
'Santiago',
'Beijing',
'Bogotá',
'Moroni',
'Kinshasa',
'Brazzaville',
'San Jose',
'Yamoussoukro',
'Zagreb',
'Havana',
'Nicosia',
'Prague',
'Copenhagen',
'Roseau',
'Santo Domingo',
'Quito',
'Cairo',
'San Salvador',
'Malabo ',
'Oyala',
'Asmara',
'Tallinn',
'Mbabane',
'Lobamba',
'Addis Ababa',
'Suva',
'Helsinki',
'Paris',
'Libreville',
'Banjul',
'Tbilisi',
'Berlin',
'Accra',
'Athens',
"Saint George's",
'Guatemala City',
'Conakry',
'Bissau',
'Georgetown',
'Port-au-Prince',
'Tegucigalpa',
'Budapest',
'Reykjavik',
'New Delhi',
'Jakarta',
'Tehran',
'Baghdad',
'Dublin',
'Jerusalem',
'Rome',
'Kingston',
'Tokyo',
'Amman',
'Nur-Sultan',
'Nairobi',
'Tarawa',
'Pristina',
'Kuwait City',
'Bishkek',
'Vientiane',
'Riga',
'Beirut',
'Maseru',
'Monrovia',
'Tripoli',
'Vaduz',
'Vilnius',
'Antananarivo',
'Lilongwe',
'Kuala Lumpur',
'Male',
'Bamako',
'Valletta',
'Majuro',
'Nouakchott',
'Port Louis',
'Mexico City',
'Palikir',
'Chisinau',
'Monaco',
'Ulaanbaatar',
'Podgorica',
'Rabat',
'Maputo',
'Naypyidaw',
'Windhoek',
'Yaren District', 
'Kathmandu',
'Amsterdam',
'Wellington',
'Managua',
'Niamey',
'Abuja',
'Pyongyang',
'Skopje',
'Oslo',
'Muscat',
'Islamabad',
'Ngerulmud',
'Jerusalem ',
'Panama City',
'Port Moresby',
'Asunción',
'Lima',
'Manila',
'Warsaw',
'Lisbon',
'Doha',
'Bucharest',
'Moscow',
'Kigali',
'Basseterre',
'Castries',
'Kingstown',
'Apia',
'San Marino',
'São Tomé',
'Riyadh',
'Dakar',
'Belgrade',
'Victoria',
'Freetown',
'Bratislava',
'Ljubljana',
'Honiara',
'Mogadishu',
'Pretoria',
'Cape Town',
'Bloemfontein',
'Seoul',
'Juba',
'Madrid',
'Sri Jayawardenepura Kotte',
'Khartoum',
'Paramaribo',
'Stockholm',
'Bern',
'Damascus',
'Taipei',
'Dushanbe',
'Dodoma',
'Bangkok',
'Dili',
'Lomé',
'Nukuʻalofa',
'Port of Spain',
'Tunis',
'Ankara',
'Ashgabat',
'Funafuti',
'Kampala',
'Kyiv',
'Abu Dhabi',
'London',
'Washington',
'Tashkent',
'Port Vila',
'Vatican City',
'Caracas',
'Hanoi',
"Sana'a",
'Lusaka',
'Harare',
'Alipore',
'Alipur Duar',
'Asansol',
'Baharampur',
'Bally',
'Balurghat',
'Bankura',
'Baranagar',
'Barasat',
'Barrackpore',
'Basirhat',
'Bhatpara',
'Bishnupur',
'Budge Budge',
'Burdwan',
'Chandernagore',
'Darjeeling',
'Diamond Harbour',
'Dum Dum',
'Durgapur',
'Halisahar',
'Haora',
'Hugli',
'Ingraj Bazar',
'Jalpaiguri',
'Kalimpong',
'Kamarhati',
'Kanchrapara',
'Kharagpur',
'Cooch Behar',
'Kolkata',
"Krishnanagar",
'Malda',
'Midnapore',
"Murshidabad",
'Nabadwip',
'Palashi',
'Panihati',
"Purulia",
"Raiganj",
"Santipur",
'Shantiniketan',
'Shrirampur',
'Siliguri',
'Siuri',
'Tamluk',
'Titagarh',
"Almora",
'Dehra Dun',
'Haridwar',
"Mussoorie",
'Nainital',
"Pithoragarh",
"Agra",
'Aligarh',
"Amroha",
"Ayodhya",
'Azamgarh',
"Bahraich",
'Ballia',
"Banda",
"Bara Banki",
'Bareilly',
'Basti',
'Bijnor',
'Bithur',
'Budaun',
'Bulandshahr',
'Deoria',
'Etah',
'Etawah',
'Faizabad',
'Farrukhabad',
'Fatehpur',
'Fatehpur Sikri',
'Ghaziabad',
'Ghazipur',
'Gonda',
'Gorakhpur',
'Hamirpur',
"Hardoi",
'Hathras',
"Jalaun",
'Jaunpur',
'Jhansi',
'Kannauj',
'Kanpur',
'Lakhimpur',
'Lalitpur',
'Lucknow',
'Mainpuri',
'Mathura',
"Meerut",
'Mirzapur-Vindhyachal',
'Moradabad',
'Muzaffarnagar',
'Partapgarh',
'Pilibhit',
'Prayagraj',
"Rae Bareli",
'Rampur',
'Saharanpur',
'Sambhal',
"Shahjahanpur",
'Sitapur',
'Sultanpur',
'Tehri',
'Varanasi',
'Agartala',
'Hyderabad',
'Karimnagar',
'Khammam',
'Mahbubnagar',
'Nizamabad',
'Sangareddi',
'Warangal',
'Arcot',
'Chengalpattu',
'Chennai',
'Chidambaram',
'Coimbatore',
'Cuddalore',
'Dharmapuri',
'Dindigul',
'Erode',
'Kanchipuram',
'Kanniyakumari',
'Kodaikanal',
'Kumbakonam',
'Madurai',
'Mamallapuram',
'Nagappattinam',
'Nagercoil',
'Palayamkottai',
'Pudukkottai',
'Rajapalayam',
'Ramanathapuram',
'Salem',
'Thanjavur',
'Tiruchchirappalli',
'Tirunelveli',
'Tiruppur',
'Thoothukudi',
'Udhagamandalam',
'Vellore',
'Gangtok',
'Gyalshing',
'Lachung',
'Mangan',
'Abu',
'Ajmer',
'Alwar',
'Amer',
'Barmer',
'Beawar',
'Bharatpur',
'Bhilwara',
'Bikaner',
'Bundi',
'Chittaurgarh',
'Churu',
'Dhaulpur',
'Dungarpur',
'Ganganagar',
'Hanumangarh',
'Jaipur',
'Jaisalmer',
'Jalor',
'Jhalawar',
'Jhunjhunu',
'Jodhpur',
'Kishangarh',
'Kota',
'Merta',
'Nagaur',
'Nathdwara',
'Pali',
'Phalodi',
"Pushkar",
'Sawai Madhopur',
'Shahpura',
'Sikar',
'Sirohi',
'Tonk',
'Udaipur',
'Amritsar',
'Batala',
'Chandigarh',
'Faridkot',
'Firozpur',
'Gurdaspur',
'Hoshiarpur',
'Jalandhar',
'Kapurthala',
'Ludhiana',
'Nabha',
'Patiala',
'Rupnagar',
'Sangrur',
'Karaikal',
'Mahe',
'Puducherry',
'Yanam',
'Balangir',
'Baleshwar',
'Baripada',
'Bhubaneshwar',
'Brahmapur',
'Cuttack',
'Dhenkanal',
'Kendujhar',
'Konark',
'Koraput',
'Paradip',
'Phulabani',
'Puri',
'Sambalpur',
'Udayagiri',
'Kohima',
'Mon',
'Phek',
'Wokha',
'Zunheboto',
'Aizawl',
'Lunglei',
'Cherrapunji',
'Shillong',
'Imphal',
'Ahmadnagar',
'Akola',
'Amravati',
'Aurangabad',
'Bhandara',
'Bhusawal',
'Bid',
'Buldhana',
'Chandrapur',
'Daulatabad',
'Dhule',
'Jalgaon',
'Kalyan',
'Karli',
'Kolhapur',
'Mahabaleshwar',
'Malegaon',
'Matheran',
'Mumbai',
'Nagpur',
'Nanded',
'Nashik',
'Osmanabad',
'Pandharpur',
'Parbhani',
'Pune',
'Ratnagiri',
'Sangli',
'Satara',
'Sevagram',
'Solapur',
'Thane',
'Ulhasnagar',
'Vasai-Virar',
'Wardha',
'Yavatmal',
'Balaghat',
'Barwani',
"Betul",
'Bharhut',
'Bhind',
'Bhojpur',
'Bhopal',
'Burhanpur',
'Chhatarpur',
'Chhindwara',
'Damoh',
'Datia',
'Dewas',
'Dhar',
'Dr. Ambedkar Nagar',
'Guna',
"Gwalior",
'Hoshangabad',
'Indore',
"Itarsi",
'Jabalpur',
"Jhabua",
'Khajuraho',
'Khandwa',
'Khargone',
"Maheshwar",
"Mandla",
"Mandsaur",
"Morena",
"Murwara",
'Narsimhapur',
'Narsinghgarh',
"Narwar",
'Neemuch',
'Nowgong',
'Orchha',
'Panna',
'Raisen',
"Rajgarh",
'Ratlam',
'Rewa',
"Sagar",
"Sarangpur",
"Satna",
'Sehore',
'Seoni',
'Shahdol',
"Shajapur",
'Sheopur',
'Shivpuri',
"Ujjain",
"Vidisha",
"Kargil",
'Leh',
'Alappuzha',
"Vatakara",
'Idukki',
'Kannur',
"Kochi",
'Kollam',
'Kottayam',
'Kozhikode',
'Mattancheri',
'Palakkad',
'Thalassery',
'Thiruvananthapuram',
'Thrissur',
"Badami",
'Ballari',
'Bengaluru',
'Belagavi',
"Bhadravati",
'Bidar',
'Chikkamagaluru',
'Chitradurga',
'Davangere',
'Halebid',
'Hassan',
"Hubballi-Dharwad",
'Kalaburagi',
'Kolar',
'Madikeri',
'Mandya',
'Mangaluru',
'Mysuru',
'Raichur',
'Shivamogga',
'Shravanabelagola',
"Shrirangapattana",
'Tumakuru',
"Vijayapura",
'Bokaro',
'Chaibasa',
'Deoghar',
'Dhanbad',
'Dumka',
'Giridih',
"Hazaribag",
"Jamshedpur",
"Jharia",
'Rajmahal',
'Ranchi',
'Saraikela',
'Anantnag',
"Baramula",
'Doda',
"Gulmarg",
'Jammu',
"Kathua",
"Punch",
"Rajouri",
"Srinagar",
"Udhampur",
"Bilaspur",
'Chamba',
'Dalhousie',
"Dharmshala",
'Hamirpur',
"Kangra",
'Kullu',
'Mandi',
'Nahan',
'Shimla',
'Una',
'Ambala',
'Bhiwani',
"Chandigarh",
'Faridabad',
'Firozpur Jhirka',
'Gurugram',
'Hansi',
'Hisar',
'Jind',
"Kaithal",
'Karnal',
'Kurukshetra',
'Panipat',
'Pehowa',
'Rewari',
'Rohtak',
'Sirsa',
'Sonipat',
'Ahmadabad',
"Amreli",
'Bharuch',
'Bhavnagar',
'Bhuj',
"Dwarka",
'Gandhinagar',
"Godhra",
"Jamnagar",
'Junagadh',
'Kandla',
'Khambhat',
'Kheda',
'Mahesana',
'Morbi',
'Nadiad',
'Navsari',
'Okha',
'Palanpur',
"Patan",
'Porbandar',
'Rajkot',
'Surat',
'Surendranagar',
'Valsad',
'Veraval',
"Madgaon",
'Panaji',
"Delhi",
'New Delhi',
'Daman',
"Diu",
"Silvassa",
'Ambikapur',
"Bhilai",
"Bilaspur",
'Dhamtari',
'Durg',
"Jagdalpur",
'Raipur',
'Rajnandgaon',
'Chandigarh',
'Ara',
'Barauni',
'Begusarai',
'Bettiah',
'Bhagalpur',
'Bihar Sharif',
'Bodh Gaya',
'Buxar',
'Chapra',
'Darbhanga',
'Dehri',
"Dinapur Nizamat",
'Gaya',
'Hajipur',
'Jamalpur',
"Katihar",
'Madhubani',
'Motihari',
'Munger',
'Muzaffarpur',
'Patna',
'Purnia',
'Pusa',
'Saharsa',
'Samastipur',
'Sasaram',
'Sitamarhi',
'Siwan',
'Dhuburi',
'Dibrugarh',
'Dispur',
"Guwahati",
'Jorhat',
'Nagaon',
'Sivasagar',
'Silchar',
"Tezpur",
"Tinsukia",
'Itanagar',
"Adoni",
'Amaravati',
'Anantapur',
"Chandragiri",
'Chittoor',
"Dowlaiswaram",
'Eluru',
'Guntur',
'Kadapa',
'Kakinada',
'Kurnool',
'Machilipatnam',
'Nagarjunakoṇḍa',
'Rajahmundry',
'Srikakulam',
'Tirupati',
'Vijayawada',
'Visakhapatnam',
'Vizianagaram',
'Yemmiganur',
'Port Blair',

];
// Number of available options 
const n = tags.length;

// Creating function for auto complete
function autoComplete(value){
    // Setting datalist empty so that same name doesn;t repeat
    document.getElementById('datalist').innerHTML='';

    // length of input
    len = value.length;
    for(let i=0;i<n;i++){
        if(tags[i].toLowerCase().indexOf(value.toLowerCase())>-1){
            let node = document.createElement("option");
            let val = document.createTextNode(tags[i]);
            node.appendChild(val);
            document.getElementById("datalist").appendChild(node);
        }
    }

}
