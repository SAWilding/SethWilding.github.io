
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

// Create windchill function //

function buildWC(speed, temp) {
    let wcTemp = document.getElementById('windchill');

    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);
    wc = Math.floor(wc);

    wc = (wc > temp)?temp:wc;
    wcTemp.innerHTML = wc;

}
let speed = document.querySelector("#speed").innerHTML;
let temp = document.querySelector("#temp").innerHTML;

buildWC(speed, temp);