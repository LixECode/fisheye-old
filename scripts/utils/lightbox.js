    const Lightbox = document.querySelector('.lightbox');
    const lightboxClose = document.querySelector('.lightbox-close');

    function getLightbox() {
        const article = document.querySelectorAll('.photograph-filter-article')
        article.forEach((e) => e.addEventListener("click", displayLightbox));
        console.log(article);
    }

    function displayLightbox() {
        Lightbox.style.display = "block";
        console.log('lightbox OPEN');
    }

    function closeLightbox() {
        Lightbox.style.display = "none";
        console.log('lightbox CLOSE');
    };

    lightboxClose.addEventListener("click", closeLightbox);