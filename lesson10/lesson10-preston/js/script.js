 function toggleMenu () {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide")
 }


const dow = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let date = new Date();
let output = dow[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();

document.getElementById('current-date').innerText = output;

/* Compute the wind chill based on high temperature and wind speed */
(() => {
   const temp = document.getElementById('high-temperature').innerText;
   const speed = document.getElementById('wind-speed').innerText;
   const windChillElement = document.getElementById('wind-chill');

   let windChill = 'n/a';
   if (temp <= 50 && speed > 3) {
      windChill = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
      windChill = windChill.toFixed(0);
   }

   windChillElement.innerText = windChill;
})();

