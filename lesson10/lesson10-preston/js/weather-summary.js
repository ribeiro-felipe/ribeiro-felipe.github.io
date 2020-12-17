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





// Forecast

const apikey  = '329d11b9c25e61d61a5971a86a937b6a';
const baseURL = 'https://api.openweathermap.org/data/2.5/';
let cityid    = '5604473';
let units     = 'imperial';

method = 'forecast';
apiURL = baseURL +
         method + '?' +
         'id=' + cityid +
         '&APPID=' + apikey +
         '&units=' + units;



// const days = document.querySelectorAll('.five-day-forecast-content');
// const dayHeadings = document.querySelectorAll('.five-day-forecast-heading');
// const DOW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
fetch(apiURL)
   .then(response => response.json())
   .then(data => {
      console.log('Forecast data:');
      console.log(data);


      const dayHeadings = document.querySelectorAll('.five-day-forecast-heading');
      const days = document.querySelectorAll('.five-day-forecast-content');
      const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


      // let forecast_temps = document.querySelectorAll('.forecast-day .temp');
      // let forecast_dow = document.querySelectorAll('.forecast-day .dow');
      // let forecast_day_num = 0;
      // let list = data.list;


      for (item of list) {
         if (item.dt_txt.includes('18:00:00')) {
            let date = new Date(item.dt * 1000);
            forecast_dow[forecast_day_num].innerHTML = DOW[date.getDay()];
            forecast_temps[forecast_day_num].innerHTML = Math.round(item.main.temp) + "&deg;F";
            forecast_day_num++;
         }
      }
   });


//    fetch(apiURL)
//    .then( response => response.json())
//    .then( data => {
//       // Get all the <div> elements with the class "five-day-forecast-content"
//       const days = document.querySelectorAll('.five-day-forecast-content');

//       // Get all the <div> elements with the class "five-day-forecast-heading"
//       const dayHeadings = document.querySelectorAll('.five-day-forecast-heading');

//       // Array to hold the day of the week names
//       const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//       // Loop over array of forecast data looking for only the 18:00:00 forecasts
//       let day = 0; // the day we are currently on 0-4
//       for (item of data.list){

//          // Only use forecast data for 6:00pm (18:00:00) each day
//          if (item.dt_txt.includes("18:00:00")){

//             // convert date to a day of week name
//             const dow = new Date(item.dt * 1000).getDay();
//             const dayName = dayOfWeek[dow];

//             // get temperature and icon
//             const temp = item.main.temp_max;
//             const iconsrc = '//openweathermap.org/img/w/' + 
//                             item.weather[0].icon + 
//                             '.png';

//             // Update page
//             days[day].firstElementChild.setAttribute('src', iconsrc); // the image src attribute
//             days[day].firstElementChild.setAttribute('alt', item.weather[0].description) // image alt attribute
//             days[day].lastElementChild.innerHTML = temp.toFixed(0) + '&deg;F'; // the temperature
//             dayHeadings[day].innerText = dayName;  // the day of the week

//             day++;
//             if (day >= days.length) // don't keep looping if we have run out of <div> elements
//                break;
//          }
//       }

//    });

// })();