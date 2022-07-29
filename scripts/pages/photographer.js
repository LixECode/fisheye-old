//Mettre le code JavaScript lié à la page photographer.html

// let str = window.location.search;
// let id = str.searchParams.get("id");
// console.log(id)

let str = new URLSearchParams(window.location.search);
let urlId = str.get("id");

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

// filtrer par ID en 2 fois (.then) ou fonction à part appelée dans le .then //


async function init() {
  // Récupère les datas photographers / media
  const {
    medias,
    photographers
  } = await getMedia();
  displayDataPhotographer(photographers, medias)
};

init();
// Afficher les informations data
async function displayDataPhotographer(photographers, medias) {
  const photographersHeader = document.querySelector('.photograph-section')
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
  const photographersFilter = document.querySelector('.filter-container')
  media.forEach(function (e) {
    const filterModel = mediaFactory(e);
    const userFilter = filterModel.getMediaFactory();
    photographersFilter.appendChild(userFilter);
  });

  //navFactory
  //   const navSection = nav.find(function (findNav) {
  //     return findNav.nav == urlId;
  //   });
  // // ajouter le total like 
  //   console.log(nav)
  //   const navModel = NavFactory(navSection);
  //   const navDisplay = navModel.getNavFactory();
  //   photographersMain.appendChild(navDisplay);

};