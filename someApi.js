// Weather api practise
// const API_KEY = "2e58277c5eae0f2123db55f62deb1118";
// const cityName = "Miami"
// // URL - Погода по имени города
// const Weather_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
// const weatherInfo = document.getElementById("weather--about");

// fetch(Weather_URL).then((resp) => {
//   console.log(resp);
// });


// Weather api practise
const API_KEY = "2e58277c5eae0f2123db55f62deb1118";
const cityName = "Miami"
// URL - Погода по имени города
const Weather_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
const weatherInfo = document.getElementById("weather--about");

fetch(Weather_URL).then((resp) => {
  console.log(resp);
});