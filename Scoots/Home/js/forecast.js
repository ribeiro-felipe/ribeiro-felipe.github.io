// Forecast

let baseUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&id=";
// let cityId ="3530103";
// const apiKey ="329d11b9c25e61d61a5971a86a937b6a";

let apiUrl = url +
                  cityId +
                    "&appid=" + apiKey; +
                    
console.log(apiUrl);

fetch(requestUrl)
  .then(response => response.json())
  .then(data => {

    let temp =  Math.round(data.main.temp)  + ' °F';
    document.getElementById('temperature').innerText = temp;
    let feels_like =  Math.round(data.main.feels_like)  + ' °F';
    document.getElementById('feelslike').innerText = feels_like;
    let description = (data.weather[0].main);
    document.getElementById('description').innerText = description;
    let humidity = (data.main.humidity) + '%';
    document.getElementById('humidity').innerText = humidity;
  });