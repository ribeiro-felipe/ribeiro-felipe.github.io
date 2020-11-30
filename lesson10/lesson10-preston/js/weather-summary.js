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
    
    
    
    /*** Get Forecast information ***/
    method = 'forecast';
    apiURL = baseURL +
             method + '?' +
             'id=' + cityid + 
             '&APPID=' + apikey + 
             '&units=' + units;
    
    // apiURL = 'weather-api-forecast.json'; // for testing
    
    fetch(apiURL)
       .then( response => response.json())
       .then( data => {
          // Get all the <div> elements with the class "five-day-forecast-content"
          const days = document.querySelectorAll('.five-day-forecast-content');
    
          // Get all the <div> elements with the class "five-day-forecast-heading"
          const dayHeadings = document.querySelectorAll('.five-day-forecast-heading');
    
          // Array to hold the day of the week names
          const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
          // Loop over array of forecast data looking for only the 18:00:00 forecasts
          let day = 0; // the day we are currently on 0-4
          for (item of data.list){
    
             // Only use forecast data for 6:00pm (18:00:00) each day
             if (item.dt_txt.includes("18:00:00")){
    
                // convert date to a day of week name
                const dow = new Date(item.dt * 1000).getDay();
                const dayName = dayOfWeek[dow];
    
                // get temperature and icon
                const temp = item.main.temp_max;
                const iconsrc = '//openweathermap.org/img/w/' + 
                                item.weather[0].icon + 
                                '.png';
    
                // Update page
                days[day].firstElementChild.setAttribute('src', iconsrc); // the image src attribute
                days[day].firstElementChild.setAttribute('alt', item.weather[0].description) // image alt attribute
                days[day].lastElementChild.innerHTML = temp.toFixed(0) + '&deg;F'; // the temperature
                dayHeadings[day].innerText = dayName;  // the day of the week
    
                day++;
                if (day >= days.length) // don't keep looping if we have run out of <div> elements
                   break;
             }
          }
    
       });
    
    })();