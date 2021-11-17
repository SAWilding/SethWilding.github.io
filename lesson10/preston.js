
// Function for toggling navigation menu.
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide")
}
// Create formating for last updated information
var weekday = new Array(
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday",
    "Thursday", 
    "Friday", 
    "Saturday"
    );
var months = new Array(
    "January", 
    "February", 
    "March",
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September",
    "October", 
    "November", 
    "December"
    );
const year = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
var day = lastModified.getDay();
var day = weekday[day];
var month = lastModified.getMonth();
var month = months[month];

var lastModifiedFormatted = day + ', ' + lastModified.getDate() + ' ' + month + " " + lastModified.getFullYear();

// Display copyright year and date last modified to footer of HTML document.
document.getElementById("dateLastModified").textContent = lastModifiedFormatted;
document.getElementById("copyrightYear").textContent = year;

// Make banner appear only on fridays //
function createBanner(day) {
    if (day == 5) {
        document.querySelector("#banner").style.display = "block";
    }
}
var bannerDay = new Date().getDay();
createBanner(bannerDay);

// Grab weather information from API

const apiKey = "2a7fa7e1f8aad6f5d62a78519050b029";
let cityId = "5604473";

let prestonLink = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=imperial`;

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
    let tempContent = document.querySelector("#temp");
    let windSpeedContent = document.querySelector("#windSpeed");
    let humidityContent = document.querySelector("#humidity");
    let descriptionContent = document.querySelector("#description");

    let windSpeed = Math.round(data.wind.speed);
    let temp = Math.round(data.main.temp);
    let humidity = data.main.humidity;
    let description = data.weather[0].description;

    windSpeedContent.textContent = windSpeed;
    tempContent.textContent = temp;
    humidityContent.textContent = humidity;
    descriptionContent.textContent = description;
    buildWC(windSpeed, temp);
});

// Create windchill function //

function buildWC(speed, temp) {
    let wcTemp = document.querySelector('#windchill');

    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    wc = Math.floor(wc);

    wc = (wc > temp)?temp:wc;
    wcTemp.innerHTML = wc;

}

// 5 day forecast


let forecastLink = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=imperial`;

fetch(forecastLink)
.then(response => {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error("Unable to fetch forecast data.");
    }
})
.then(data => {
    console.log(data);
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
    
    var forecastIndex = 6;

    for (i=0; i < 5; i++) {
        
        // Day of the week
        let dayForecast = weekdayForecast[dayIndex]
        let forecast = document.querySelector("#forecast");
        let day = document.createElement("div");
        let dayOfWeek = document.createElement("h2");
        dayOfWeek.innerHTML = dayForecast;

        // Image
        let imagesrc = 'https://openweathermap.org/img/w/' + data.list[forecastIndex].weather[0].icon + '.png'; 
        let desc = data.list[forecastIndex].weather[0].description;  
        let icon = document.createElement("img");
        icon.setAttribute("src", imagesrc);
        icon.setAttribute("alt", desc);

        // Forecast temperature
        let temp = document.createElement("p");

        let forecastTemp = `${Math.round(data.list[forecastIndex].main.temp)} &deg;F`

        temp.innerHTML = forecastTemp;

        // Append elements to forecast
        day.appendChild(dayOfWeek);
        day.appendChild(icon);
        day.appendChild(temp);
        forecast.appendChild(day);

        // Adjust indexes for next loop
        forecastIndex += 8;
        dayIndex++;
        
        if (dayIndex > 6) {
            dayIndex = 0;
        }
    }


})




