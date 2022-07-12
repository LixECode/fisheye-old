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
      medias = data.medias
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
  const photographersMain = document.querySelector('#main')
  console.log(urlId)
  console.log(photographers)

  //photographersFactory
  const photographer = photographers.find(function (findIdPhotographer) {
    return findIdPhotographer.id == urlId;
  });
  console.log(photographer)
  const photographerModel = photographerFactory(photographer);
  const userPortrait = photographerModel.getPortraitPhotographer();
  photographersMain.appendChild(userPortrait);

  //mediaFactory
  const media = medias.find(function (findMedia) {
    return findMedia.id == urlId;
  });
  console.log(media)
  const filterModel = mediaFactory(media);
  const userFilter = filterModel.getMediaFactory();
  photographersMain.appendChild(userFilter);

  //navFactory
  const navSection = nav.find(function (findNav) {
    return findNav.id == urlId;
  });

  console.log(nav)
  const navModel = NavFactory(photographers, media);
  const navDisplay = navModel.getNavFactory();
  photographersMain.appendChild(navDisplay);

};