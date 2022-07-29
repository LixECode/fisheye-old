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
    const section = document.querySelector('.photograph-section')
    const divHeaderPhotograph = document.createElement('div')
    divHeaderPhotograph.classList.add('photograph-header-container')
    divHeaderPhotograph.innerHTML =
      `
    <div class="photograph-header">
    <h2 class="name-portrait">${name}</h2>
    <p class="city-portrait">${city}, ${country}</p>
    <p class="tagline-portrait">${tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <img class="img-portrait" src="${picture}" alt="${id}" title="picture of" + "${id}">
        `
    return (divHeaderPhotograph)
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
    video,
  } = data;

  // const images = `assets/images/${photographerId}/${image}`;
  const mediaImage = `<img src="./assets/images/${photographerId}/${image}"/>`;
  const mediaVideo = `<video><source src="./assets/images/${photographerId}/${video}#t=5.0" type="video/mp4"></video>`;
  // const media = image == undefined ? mediaVideo : mediaImage;
  let media
  if (!image) {
    media = mediaVideo
  } else {
    media = mediaImage
  }

  function getMediaFactory() {
    const article = document.createElement('article')
    article.classList.add('filter-article')
    article.innerHTML +=
      `
          ${media}
          <div class="filter-text">
            <h3>${title}</h3>
            <ul class="photograph-like">
              <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
    `
    return (article)
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