//Mettre le code JavaScript lié à la page photographer.html

// let str = window.location.search;
// let id = str.searchParams.get("id");
// console.log(id)

let str = new URLSearchParams(window.location.search);
let id = str.get("id");
console.log(id)

// faire un fetch photographers comme home
async function getMedia() {
    let media = [];
    await fetch("/data/photographers.json")
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })

        .then(function (data) {
            media = data.media
        })
    console.log(media);
    return {
        media
    };
}

// filtrer par ID en 2 fois (.then) ou fonction à part appelée dans le .then //


function photographerMedia(data) {
    const {
        id,
        photographerId,
        title,
        image,
        likes,
        date,
        price
    } = data;

    // A CHECKER LA REDIRECTION
    const images = `assets/images/${photographerId}/${image}`;

    // A CHECKER CAR CA AFFICHE RIEN
    // j'ai créer une div factice pour mettre mes deux sections dedans mais ça n'affiche rien
    // j'ai gardé le html en comments dans la page html
    function getUserMediaDOM() {
        const div = document.createElement('div')
        div.innerHTML =
            `
    <section class="photograph-section">
   
    <div class="photograph-header">
    <h2 class="name-portrait">${id}</h2>
    <p class="city-portrait">${city}, ${country}</p>
    <p class="tagline-portrait">${tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <img class="img-portrait" src="${picture}" alt="${id}" title="picture of" + "${id}">
    
    </section>

    <section class="photograph-filter">

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
    </section>
    
 <div class="photograph-nav">
      <ul class="photograph-like">
        <li>${likes}<i class="fa-solid fa-heart heartSolid"></i></li>
      </ul>
      <p>${price}€/jour</p>
    </div>
          `
        return (div);
    }

    return {
        image,
        title,
        price,
        likes,
        getUserMediaDOM
    }

}