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
  // const photographersNav = nav.find(function (findNav) {
  //   return findNav.nav == urlId;
  // });
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

  // A CHECKER 

  // ++ likes
  const heart = document.queryselector('.heart');
  heart.addEventListener("click", UpLikes)

  function UpLikes() {
    heart = 0;
    heart.forEach(function (addLike) {
      heart += +1;
    })
  };

};


// A CHECKER

//lightboxfactory
// const lightbox = document.querySelector('.lightbox')

// const lightboxModel = lightboxFactory();
// const lightboxDisplay = lightboxModel.getLightboxFactory();
// lightbox.appendChild(lightboxDisplay);

// };

// A CHECKER

// FILTER MENU

const filterMenu = document.querySelector('.filter-container button')
filterMenu.addEventListener("click", displayFilterMenu())
console.log('fitler menu event ok')

function displayFilterMenu() {
  console.log('filterMenu function ok')
  const filterDate = document.querySelector('.filter-date')
  const filterTitle = document.querySelector('.filter-title')
  filterDate.style.display = "block";
  filterTitle.style.display = "block";
  console.log('filterMenu is OPEN');
  filterDate.addEventListener("click", displayFilterDate())
  filterTitle.addEventListener("click", displayFilterTitle())
};

// function displayFilterDate() {
//   // filter par date et afficher par date

//   //changer inerthml filter-popularity par filter-date en premier et deuxième de place

//   // fermer les boutons 2 et 3 display none pour n'afficher que le 1er
// }

// function displayFilterTitle() {
//   // filter par title et afficher par title

//   //changer inerthml filter-popularity par filter-title en premier et troisième de place

//   // fermer les boutons 2 et 3 display none pour n'afficher que le 1er
// };