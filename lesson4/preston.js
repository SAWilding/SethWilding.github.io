function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide")
}

document.getElementById("dateLastModified").textContent = document.lastModified;

let d = new Date();
let year = d.getFullYear();
document.getElementById("copyrightYear").textContent = year;