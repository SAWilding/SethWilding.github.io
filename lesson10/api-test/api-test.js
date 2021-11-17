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
    let content = document.querySelector("div");
    let temp = data.main.temp + " &deg;F"
    content.innerHTML = temp
});


