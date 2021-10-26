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