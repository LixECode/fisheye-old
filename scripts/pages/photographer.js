//Mettre le code JavaScript lié à la page photographer.html

// let str = window.location.search;
// let id = str.searchParams.get("id");
// console.log(id)

let str = new URLSearchParams(window.location.search);
let urlId = str.get("id");

async function getMedia() {
  let media = [];
  let photographers = [];
  await fetch("/data/photographers.json")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })

    .then(function (data) {
      media = data.media
      photographers = data.photographers
    })
  return {
    media,
    photographers
  };
}

// filtrer par ID en 2 fois (.then) ou fonction à part appelée dans le .then //


async function init() {
  // Récupère les datas des photographes
  const {
    media,
    photographers
  } = await getMedia();
  displayDataPhotographer(photographers, media)
};

init();
// Afficher les informations data
async function displayDataPhotographer(photographers, media) {
  const photographersMain = document.querySelector('#main')
  console.log(urlId)
  console.log(photographers)

  const photographer = photographers.find(function (findId) {
    return findId.id == urlId
  });
  console.log(photographer)
  const photographerModel = photographerFactory(photographer);
  const userPortrait = photographerModel.getPortraitPhotographer();
  photographersMain.appendChild(userPortrait);

  //tableau media
};