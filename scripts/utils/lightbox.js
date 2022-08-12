    const Lightbox = document.querySelector('.lightbox');
    const lightboxClose = document.querySelector('.lightbox-close');

    function getLightbox() {
        const article = document.querySelectorAll('.photograph-filter-article img')
        article.forEach((e) => e.addEventListener("click", displayLightbox));
        console.log(article);
    }

    function displayLightbox(e) {
        console.log(e.target.src)
        console.log(e.target.closest('article').querySelector('h3').textContent)
        const lightboxImg = document.querySelector('.lightbox img')
        const lightboxTitle = document.querySelector('.lightbox h3')
        lightboxImg.src = e.target.src;
        lightboxTitle.textContent = e.target.closest('article').querySelector('h3').textContent;
        Lightbox.style.display = "block";
        console.log('lightbox OPEN');
    }

    function closeLightbox() {
        Lightbox.style.display = "none";
        console.log('lightbox CLOSE');
    };

    lightboxClose.addEventListener("click", closeLightbox);