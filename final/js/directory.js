//  Toggle menu

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide")
}

// Last Updated 

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


// Display directory information
const URL = "js/companies.json"

fetch(URL)
.then(response => {
    if (response.ok){
        return response.json()
    }
    throw new Error("Network response was not ok.")
    })
.then(data => {
    for (let i=0; i < data.companies.length; i++) {
    let info = document.createElement("div");
    let card = document.createElement("div")
    card.setAttribute("class", "card");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let website = document.createElement("a");
    website.setAttribute("href", data.companies[i].website);
    website.setAttribute("target", "_blank")
    let logo = document.createElement("img");

    name.textContent = data.companies[i].name;
    address.textContent = data.companies[i].address;
    website.innerHTML = "&#127760; website";
    logo.setAttribute("src", data.companies[i].logo);
    logo.setAttribute("alt", "Company logo");

    cards = document.querySelector("#cards");
    info.appendChild(name);
    info.appendChild(address);
    info.appendChild(website);
    card.appendChild(info);
    card.appendChild(logo);
    cards.appendChild(card);
    }

})

// Toggle Directory Layout

function toggleGrid() {
    document.getElementById("cards").setAttribute("class", "grid");
}

function toggleList() {
    document.getElementById("cards").setAttribute("class", "block");
}