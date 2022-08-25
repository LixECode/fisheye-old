// FACTORY CARD PORTRAIT PHOTOGRAPHER

// link media data from photographers.json with portrait photographer on Index page
function photographerFactory(data) {
  // list of all media data
  const {
    name,
    id,
    city,
    country,
    tagline,
    price,
    portrait
  } = data;

  // link portrait image in files project
  const picture = `assets/photographers/${portrait}`;

  // get media data from photographers.json with portrait CARD photographer on Index page in html
  function getUserCardDOM() {
    // create a article balise in html
    const photographPortrait = document.createElement("article");
    // create the html in article balise with id variable of media data from photographers.json
    photographPortrait.innerHTML =
      `
        <a href="photographer.html?id=${id}"><img class="img-portrait" src="${picture}" alt ="${name}" title = "picture of" + "${name}">
        <h2 class="name-portrait">${name}</h2></a>
        <p class="city-portrait">${city}, ${country}</p>
        <p class="tagline-portrait">${tagline}</p>
        <p class="price-portrait">${price}€/jour</p>
        `
    // display the new article balise created
    return (photographPortrait);
  }

  // FACTORY PORTRAIT SUBLINES PHOTOGRAPHER

  // get media data from photographers.json with portrait sublines photographer on Index page in html
  function getPortraitPhotographer() {
    // search in html the class for creating new div inside in html
    const photographHeaderSection = document.querySelector('.photograph-header')
    // create a div balise in html
    const photographHeader = document.createElement('div')
    // add a id class to the div
    photographHeader.classList.add('photograph-header-container')
    // create the html in div balise with id variable of media data from photographers.json
    photographHeader.innerHTML =
      `
    <div class="photograph-portrait">
    <h2 class="name-portrait">${name}</h2>
    <p class="city-portrait">${city}, ${country}</p>
    <p class="tagline-portrait">${tagline}</p>
    </div>
    <button class="contact-button" onclick="displayModal()">Contactez-moi</button>
    <img class="img-portrait" src="${picture}" alt="${id}" title="picture of" + "${id}">
        `
    return (photographHeader)
  }
  // display the new div balise created with variables tags inside
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

// link with photographer data from photographer.json
function mediaFactory(data) {
  const {
    photographerId,
    title,
    image,
    likes,
    video,
  } = data;

  // links medias in files project
  const mediaImage = `<img src="./assets/images/${photographerId}/${image}"/>`;
  const mediaVideo = `<video><source src="./assets/images/${photographerId}/${video}#t=5.0" type="video/mp4"></video>`;
  // create a variable for choosing to display video or image
  let media
  if (!image) {
    media = mediaVideo
  } else {
    media = mediaImage
  }

  // get photographer data from photographer.json in html
  function getMediaFactory() {
    // create a new article balise in html
    const photographFilterArticle = document.createElement('article')
    // add a class id to the article
    photographFilterArticle.classList.add('photograph-filter-article')
    // create html inside the new article balise with variable tags
    photographFilterArticle.innerHTML +=
      `
          ${media}
          <div class="photograph-filter-text">
            <h3>${title}</h3>
            <ul class="photograph-filter-total-like">
            <li>${likes}</li>
            </ul>
            <ul class="photograph-filter-like">
            <li><i class="photograph-like-choice photograph-dislike fa-regular fa-heart"></i></i></li>
            <li><i class="photograph-like-choice photograph-like fa-solid fa-heart heartSolid"></i></li>
            </ul>
          </div>
    `
    // display new html for checking if $media is video or image
    return (photographFilterArticle)
  }
  // display all the html after checking if media is video or image
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

// link media in photographers.json with nav 
function navFactory(data) {
  const {
    price,
    likes
  } = data;

  // get media in photographers.jason with html
  function getNavFactory() {
    // create new div
    const photographNav = document.createElement('div')
    // add class to th new div
    photographNav.classList.add('photograph-nav-container')
    // create the html of the new div with tags variable data
    photographNav.innerHTML =
      `
      <ul class="photograph-nav-like">
        <li><span>${likes}</span><i class="photograph-nav-likes fa-solid fa-heart heartSolid"></i></li>
      </ul>
      <p>${price}€ / jour</p>
          `
    // display new div checking likes and prices
    return (photographNav)
  }
  // display all new html creating
  return {
    price,
    likes,
    getNavFactory
  }

};