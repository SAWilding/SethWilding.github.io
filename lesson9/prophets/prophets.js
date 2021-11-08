const URL = "latter-day-prophets.json"

fetch(URL)
.then(response => {
    if (response.ok){
        return response.json()
    }
    throw new Error("Network response was not ok.")
    })
.then(data => {
    for (let i=0; i < data.prophets.length; i++) {
    const section = document.createElement("section")
    const name = document.createElement("h2");
    const bd = document.createElement("p");
    const bp = document.createElement("p");
    const img = document.createElement("img");

    name.textContent = `${data.prophets[i].name} ${data.prophets[i].lastname}`
    bd.textContent = `Date of birth: ${data.prophets[i].birthdate}`;
    bp.textContent = `Place of birth: ${data.prophets[i].birthplace}`;
    img.setAttribute("src", data.prophets[i].imageurl);

    card = document.querySelector(".cards");
    section.appendChild(name);
    section.appendChild(bd);
    section.appendChild(bp);
    section.appendChild(img);
    card.appendChild(section);
    }

})