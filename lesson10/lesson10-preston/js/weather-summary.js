// Weather Summary

let url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&id=";
let cityId ="5604473";
const apiKey ="329d11b9c25e61d61a5971a86a937b6a";

let requestUrl = url +
                  cityId +
                    "&appid=" + apiKey; +


console.log(requestUrl);
fetch(requestUrl)
  .then(response => response.json())
  .then(data => {

   const description = (data.weather[0].main);
   document.getElementById('currently').innerText = description;
   const temp = data.main.temp_max;
   document.getElementById('high').innerHTML = temp.toFixed(0) + ' &deg;F';
   const humidity = (data.main.humidity) + '%';
   document.getElementById('humidity').innerText = humidity;
   const speed = (data.wind.speed) + ' mph';
   document.getElementById('speed').innerText = speed;

    let windChill = 'n/a';
    if (temp <= 50 && speed > 3) {
       windChill = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
       windChill = windChill.toFixed(0);
       windChill += ' &deg;F';
    }
 
    document.getElementById('chill').innerHTML = windChill;
  });