// Weather API Key - 65bc2b3a8ee66a77db7476664e5245bc
// api.openweathermap.org/data/2.5/weather?q=india&appid=65bc2b3a8ee66a77db7476664e5245bc&unit=metric

const apiKey = "65bc2b3a8ee66a77db7476664e5245bc";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    

    let cityName = document.querySelector(".cityname");
    cityName.innerText = data.name;
    

    let tempAture = document.querySelector(".temprature");
    tempAture.innerText = Math.round(data.main.temp) + ` °C`;
    

    let humiDity = document.querySelector(".humidity");
    humiDity.innerText = data.main.humidity + ` %`;
   

    let windSpeed = document.querySelector(".wind");
    windSpeed.innerText = data.wind.speed + ` km/hr`;
    

    if (data.weather[0].main == "clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
