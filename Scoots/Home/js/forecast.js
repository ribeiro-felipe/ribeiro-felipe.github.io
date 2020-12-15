const apikey  = '329d11b9c25e61d61a5971a86a937b6a';
const baseURL = 'http://api.openweathermap.org/data/2.5/';
let cityid    = '3530103';
let units     = 'imperial';

method = 'forecast';
apiURL = baseURL +
         method + '?' +
         'id=' + cityid +
         '&APPID=' + apikey +
         '&units=' + units;

const DOW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
fetch(apiURL)
   .then(response => response.json())
   .then(data => {
      console.log('Forecast data:');
      console.log(data);

      let forecast_temps = document.querySelectorAll('.forecast-day .temp');
      let forecast_dow = document.querySelectorAll('.forecast-day .dow');
      let forecast_day_num = 0;
      let list = data.list;


      for (item of list) {
         if (item.dt_txt.includes('18:00:00')) {
            let date = new Date(item.dt * 1000);
            forecast_dow[forecast_day_num].innerHTML = DOW[date.getDay()];
            forecast_temps[forecast_day_num].innerHTML = Math.round(item.main.temp) + "&deg;F";
            forecast_day_num++;
         }
      }
   });