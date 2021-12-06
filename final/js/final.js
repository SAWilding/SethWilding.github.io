//  Toggle menu 
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide")
}



// Weather 

const apiKey = "2a7fa7e1f8aad6f5d62a78519050b029";
let lat = "41"
let lon = "-111"
let part = "minutely,hourly"

let prestonLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}&units=imperial`;

fetch(prestonLink)
.then(response => {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error("Unable to fetch data.");
    }
})
.then(data => {
    console.log(data);
    // Current conditions
    curTemp = document.querySelector("#curTemp");
    curTemp.innerHTML = Math.round(data.current.temp);

    curDescription = document.querySelector("#curDescription");
    curDescription.innerHTML = data.current.weather[0].description;

    curHumidity = document.querySelector("#curHumidity");
    curHumidity.innerHTML = data.current.humidity;

    // 3 Day Forecast

    var dayIndex = new Date().getDay() + 1;
    var weekdayForecast = new Array(
            "Sun", 
            "Mon", 
            "Tues", 
            "Wed",
            "Thurs", 
            "Fri", 
            "Sat"
            );
    
    var forecastIndex = 1;
    for (i=0; i < 3; i++) {

        let dayForecast = weekdayForecast[dayIndex]
        let forecast = document.querySelector("#forecast");
        let day = document.createElement("div");
        let dayOfWeek = document.createElement("h3");
        dayOfWeek.innerHTML = dayForecast;

        let imagesrc = 'https://openweathermap.org/img/w/' + data.daily[forecastIndex].weather[0].icon + '.png'; 
        let desc = data.daily[forecastIndex].weather[0].description;  
        let icon = document.createElement("img");
        icon.setAttribute("src", imagesrc);
        icon.setAttribute("alt", desc);

        let maxTemp = document.createElement("p");

        let forecastTempMax = `High: ${Math.round(data.daily[forecastIndex].temp.max)} &deg;F`

        maxTemp.innerHTML = forecastTempMax;

        let minTemp = document.createElement("p");

        let forecastTempMin = `Low: ${Math.round(data.daily[forecastIndex].temp.min)} &deg;F`

        minTemp.innerHTML = forecastTempMin;

        day.appendChild(dayOfWeek);
        day.appendChild(icon);
        day.appendChild(maxTemp);
        day.appendChild(minTemp)
        forecast.appendChild(day);

        forecastIndex++;
        dayIndex++

        if (dayIndex == 7) {
            dayIndex = 0;
        }

    }
});