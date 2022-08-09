// FACTORY INDEX + PHOTOGRAPHER PAGES

// link media with portrait photographer
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

  // get media with portrait photographer in html
  function getUserCardDOM() {
    const photographPortrait = document.createElement("article");
    photographPortrait.innerHTML =
      `
        <a href="photographer.html?id=${id}"><img class="img-portrait" src="${picture}" alt ="${name}" title = "picture of" + "${name}">
        <h2 class="name-portrait">${name}</h2></a>
        <p class="city-portrait">${city}, ${country}</p>
        <p class="tagline-portrait">${tagline}</p>
        <p class="price-portrait">${price}€/jour</p>
        `

    return (photographPortrait);
  }

  // FACTORY PAGE PHOTOGRAPHER HEADER

  // get media for portrait photographer in html
  function getPortraitPhotographer() {
    const photographHeaderSection = document.querySelector('.photograph-header')
    const photographHeader = document.createElement('div')
    photographHeader.classList.add('photograph-header-container')
    photographHeader.innerHTML =
      `
    <div class="photograph-portrait">
    <h2 class="name-portrait">${name}</h2>
    <p class="city-portrait">${city}, ${country}</p>
    <p class="tagline-portrait">${tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <img class="img-portrait" src="${picture}" alt="${id}" title="picture of" + "${id}">
        `
    return (photographHeader)
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

// FACTORY PAGE PHOTOGRAPHER FILTER MEDIAS

// link with media in factories
function mediaFactory(data) {
  const {
    photographerId,
    title,
    image,
    likes,
    video,
  } = data;

  // links with medias files
  const mediaImage = `<img src="./assets/images/${photographerId}/${image}"/>`;
  const mediaVideo = `<video><source src="./assets/images/${photographerId}/${video}#t=5.0" type="video/mp4"></video>`;
  let media
  if (!image) {
    media = mediaVideo
  } else {
    media = mediaImage
  }

  // get media in html
  function getMediaFactory() {
    const photographFilterArticle = document.createElement('article')
    photographFilterArticle.classList.add('photograph-filter-article')
    photographFilterArticle.innerHTML +=
      `
          ${media}
          <div class="photograph-filter-text">
            <h3>${title}</h3>
            <ul class="photograph-like">
              <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
    `
    return (photographFilterArticle)
  }
  return {
    photographerId,
    title,
    image,
    likes,
    video,
    getMediaFactory
  }
}

// FACTORY PAGE PHOTOGRAPHER NAV

// link with nav in factories
function navFactory(data) {
  const {
    price,
    likes
  } = data;

  // get nav elements in factories
  function getNavFactory() {

    const photographNav = document.createElement('div')
    photographNav.classList.add('photograph-nav-container')
    photographNav.innerHTML =
      `
      <ul class="photograph-like">
        <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
      </ul>
      <p>${price}€ / jour</p>
          `
    return (photographNav)
  }
  return {
    price,
    likes,
    getNavFactory
  }

}