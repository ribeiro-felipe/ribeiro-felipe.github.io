( () => {

   // Get current weather information
   const apikey = 'f5389a0574c4c42c4b119e7c147d1402';
   const baseURL = '//api.openweathermap.org/data/2.5/';
   let cityid = '5605242';  // rexburg. Preston is 5604473
   let method = 'weather';
   let units = 'imperial';
   let apiURL = baseURL +
                method + '?' +
                'id=' + cityid + 
                '&APPID=' + apikey + 
                '&units=' + units;
   
   // let apiURL = 'weather-api.json'; // for testing
   fetch(apiURL)
      .then( response => response.json())
      .then( data => {
         const temp = data.main.temp_max;
         const speed = data.wind.speed;
         const desc = data.weather[0].description;
         const humidity = data.main.humidity;
         document.getElementById('weather-summary-currently').innerText = desc;
         document.getElementById('high-temperature').innerHTML = temp.toFixed(0) + ' &deg;F';
         document.getElementById('weather-summary-humidity').innerText = humidity + '%';
         document.getElementById('wind-speed').innerText = speed + ' mph';
      
         let windChill = 'n/a';
         if (temp <= 50 && speed > 3) {
            windChill = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
            windChill = windChill.toFixed(0);
            windChill += ' &deg;F';
         }
      
         document.getElementById('wind-chill').innerHTML = windChill;
      });