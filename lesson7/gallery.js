
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

// Lazy loading

const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const datasrc = img.getAttribute("data-src");
    if (!datasrc) {
        return;
    }

    img.src = datasrc;    
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
        
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
            
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image)

})
