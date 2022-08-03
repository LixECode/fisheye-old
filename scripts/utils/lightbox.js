const article = document.querySelector('.photograph-filter-article')
article.forEach((e) => e.addEventListener("click", displayLightbox));

function displayLightbox() {
    const lightbox = document.getElementById('.lightbox');
    lightbox.style.display = "block";
}

function closeLightbox() {
    const lightbox = document.getElementById('.lightbox');
    lightbox.style.display = "none";
}