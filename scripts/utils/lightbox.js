function getLightbox() {
    const article = document.querySelectorAll('.photograph-filter-article')
    article.forEach((e) => e.addEventListener("click", displayLightbox));
    console.log(article);
}

function displayLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = "block";
    console.log('lightbox OK')
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = "none";
}