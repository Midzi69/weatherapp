const api = "716f01e5da5d9344666c58ffe02e91ed";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const buttonSearch = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function weatherCheck(city) {
    const response = await fetch(apiUrl + city + `&appid=${api}`);
    let data = await response.json();

    if(response.status == 404 || response.status == 400) {
        alert(`Invalid city name!`);
    } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" Km/h";

        if(data.weather[0].main == "Clouds") {
            icon.src = "img/clouds.png";
        } else if(data.weather[0].main == "Clear"){
            icon.src = "img/clear.png";
        } else if(data.weather[0].main == "Rain") {
            icon.src = "img/rain.png";
        } else if(data.weather[0].main == "Drizzle") {
            icon.src = "img/drizzle.png";
        } else if(data.weather[0].main == "Mist") {
            icon.src = "img/mist.png";
        } else if(data.weather[0].main == "Snow") {
            icon.src = "img/snow.png";
        }

    }


}

buttonSearch.addEventListener('click', function() {
    weatherCheck(searchBox.value);
})

