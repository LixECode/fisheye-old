// FACTORY 1

function photographerFactory(data) {
    const {
        name,
        id,
        city,
        country,
        tagline,
        price,
        portrait
    } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");
        article.innerHTML =
            `
        <a href="photographer.html?id=${id}"><img class="img-portrait" src="${picture}" alt ="${name}" title = "picture of" + "${name}">
        <h2 class="name-portrait">${name}</h2></a>
        <p class="city-portrait">${city}, ${country}</p>
        <p class="tagline-portrait">${tagline}</p>
        <p class="price-portrait">${price}€/jour</p>
        `

        return (article);
    }

    // FACTORY PHOTOGRAPHER 1

    function getPortraitPhotographer() {
        const section = document.createElement('section')
        section.classList.add('photograph-section')
        section.innerHTML =
            `
    <div class="photograph-header">
    <h2 class="name-portrait">${name}</h2>
    <p class="city-portrait">${city}, ${country}</p>
    <p class="tagline-portrait">${tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <img class="img-portrait" src="${picture}" alt="${id}" title="picture of" + "${id}">
        `
        return (section)
    }

    return {
        name,
        id,
        city,
        country,
        tagline,
        price,
        portrait,
        picture,
        getUserCardDOM,
        getPortraitPhotographer
    }
}

// FACTORY PHOTOGRAPHER 2

function mediaFactory(data) {
    const {
        photographerId,
        title,
        image,
        likes,
    } = data;

    const images = `assets/images/${photographerId}/${image}`;

    function getMediaFactory() {
        const filter = document.createElement('section')
        filter.classList.add('photograph-filter')
        filter.innerHTML =
            `
      <div class="filter-header">
        <label for="filter-menu">Trier par</label><br>
        <select name="filters" id="filters-select">
          <option class="filter-popularity" value="popularity">Popularité</option>
          <option class="filter-date" value="date">Date</option>
          <option class="filter-title" value="title">Titre</option>
        </select>
      </div>

      <div class="filter-container">
        <article class="filter-article">
          <img src="${images}" alt="${title}" title= "picture of" + "${title}">
          <div class="filter-text">
            <h3>${title}</h3>
            <ul class="photograph-like">
              <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
        </article>
        <article class="filter-article">
          <img src="${images}" alt="${title}" title= "picture of" + "${title}">
          <div class="filter-text">
            <h3>$${title}</h3>
            <ul class="photograph-like">
              <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
        </article>
        <article class="filter-article">
          <img src="${images}" alt="${title}" title= "picture of" + "${title}">
          <div class="filter-text">
            <h3>${title}</h3>
            <ul class="photograph-like">
              <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
        </article>
        <article class="filter-article">
          <img src="${images}" alt="${title}" title= "picture of" + "${title}">
          <div class="filter-text">
            <h3>${title}</h3>
            <ul class="photograph-like">
              <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
        </article>
        <article class="filter-article">
          <img src="${images}" alt="${title}" title= "picture of" + "${title}">
          <div class="filter-text">
            <h3>${title}</h3>
            <ul class="photograph-like">
              <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
        </article>
        <article class="filter-article">
          <img src="${images}" alt="${title}" title= "picture of" + "${title}">
          <div class="filter-text">
            <h3>${title}</h3>
            <ul class="photograph-like">
              <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
        </article>
        <article class="filter-article">
          <img src="${images}" alt="${title}" title= "picture of" + "${title}">
          <div class="filter-text">
            <h3>${title}</h3>
            <ul class="photograph-like">
              <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
        </article>
        <article class="filter-article">
          <img src="${images}" alt="${title}" title= "picture of" + "${title}">
          <div class="filter-text">
            <h3>${title}</h3>
            <ul class="photograph-like">
              <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
        </article>
        <article class="filter-article">
          <img src="${images}" alt="${title}" title= "picture of" + "${title}">
          <div class="filter-text">
            <h3>${title}</h3>
            <ul class="photograph-like">
              <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
        </article>
      </div>
    `
        return (filter)
    }
    return {
        photographerId,
        title,
        image,
        likes,
        getMediaFactory
    }
}

// FACTORY PHOTOGRAPHER NAV

function NavFactory(data) {
    const {
        price,
        likes
    } = data;

    function getNavFactory() {

        const nav = document.createElement('div')
        nav.classList.add('photograph-nav')
        nav.innerHTML =
            `
      <ul class="photograph-like">
        <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
      </ul>
      <p>${price}€/jour</p>
          `
        return (nav)
    }
    return {
        price,
        likes,
        getNavFactory
    }

}