//Mettre le code JavaScript lié à la page photographer.html

// link beetween ID photographer and url
let str = new URLSearchParams(window.location.search);
let urlId = str.get("id");

// link between datas and json file
async function getMedia() {
  let medias = [];
  let photographers = [];
  await fetch("/data/photographers.json")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })

    .then(function (data) {
      medias = data.media
      photographers = data.photographers
    })

  return {
    medias,
    photographers
  };
}

// A FAIRE  >>> filtrer par ID en 2 fois (.then) ou fonction à part appelée dans le .then //


async function init() {
  // get datas photographer and media
  const {
    medias,
    photographers
  } = await getMedia();
  displayDataPhotographer(photographers, medias)
  getLightbox()
  getLikes()
};

init();
// display datas photographers and medias
async function displayDataPhotographer(photographers, medias) {
  const photographersHeader = document.querySelector('.photograph-header')
  console.log(urlId)
  console.log(photographers)
  console.log(medias)

  //photographersFactory
  const photographer = photographers.find(function (findIdPhotographer) {
    return findIdPhotographer.id == urlId;
  });
  console.log(photographer)
  const photographerModel = photographerFactory(photographer);
  const userPortrait = photographerModel.getPortraitPhotographer();
  photographersHeader.appendChild(userPortrait);

  //mediaFactory
  const media = medias.filter(function (findMedia) {
    return findMedia.photographerId == urlId;
  });
  console.log(media)
  const photographersFilter = document.querySelector('.photograph-filter-container')
  media.forEach(function (e) {
    const filterModel = mediaFactory(e);
    const userFilter = filterModel.getMediaFactory();
    photographersFilter.appendChild(userFilter);
  });

  //navFactory
  const nav = document.querySelector('.photograph-nav')
  let like = 0;
  media.forEach(function (totalLikes) {
    like += totalLikes.likes;
  })
  console.log(like)

  console.log(nav)
  const navModel = navFactory({
    price: photographer.price,
    likes: like
  });
  const navDisplay = navModel.getNavFactory();
  nav.appendChild(navDisplay);

};

// LIKES CHOICE CLICK
function getLikes() {
  // sinon ça affiche un table vide
  const LikeCounters = document.querySelectorAll('.photograph-filter-like')
  const TotalLikes = document.querySelector('.photograph-nav-like span')
  console.log(LikeCounters)
  LikeCounters.forEach(function (likeCounter) {
    console.log('like fonctionne')
    likeCounter.addEventListener("click", function () {

      const numero = likeCounter.closest('.photograph-filter-text').querySelector('.photograph-filter-total-like li')
      let numeroPlus = parseInt(numero.textContent)
      let TotalLikesPlus = parseInt(TotalLikes.textContent)
      console.log(typeof numeroPlus)
      if (likeCounter.classList.contains('active')) {
        numeroPlus--
        TotalLikesPlus--
      } else {
        numeroPlus++
        TotalLikesPlus++
      }
      numero.textContent = numeroPlus
      TotalLikes.textContent = TotalLikesPlus
      likeCounter.classList.toggle('active')
    })
  })

};


// FILTER MENU

const filterTotal = document.querySelector('.filter-total')
filterTotal.addEventListener("click", function () {
  const filterChoices = document.querySelector('.filter-choices')
  filterChoices.classList.toggle('none')
  filterTotal.classList.toggle('active')
})

const filterChoicesTable = document.querySelectorAll('.filter-choices button')
filterChoicesTable.forEach(function (choice) {
  choice.addEventListener("click", function () {
    console.log('coucou')
    // reafficher l'ancien
    const filterChoiceButton = document.querySelector('.filter-choices .none')
    filterChoiceButton.classList.remove('none')
    // cacher celui sur lequel on clique
    choice.classList.add('none')
    // changement du titre en haut
    const filterChoiceTotalText = choice.textContent
    filterTotal.querySelector('span').textContent = filterChoiceTotalText
  })
});

//function table en fonction du choix
// 3 choix 