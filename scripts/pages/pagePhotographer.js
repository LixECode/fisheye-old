//Mettre le code JavaScript lié à la page photographer.html

// link beetween ID photographer and url
//URLsearchparams scrapps the location url
let str = new URLSearchParams(window.location.search);
// .get scrapps in urlsearchparams the "id" and get it
let urlId = str.get("id");

// same fetch system than index, need to link data with our JS variables for displaying after
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

  //photographersheaderFactory
  // .find calls a function searching the id linked to our variable Url on top of here
  const photographer = photographers.find(function (findIdPhotographer) {
    return findIdPhotographer.id == urlId;
  });
  console.log(photographer)
  // our variable is the id inside the photographerFactory
  const photographerModel = photographerFactory(photographer);
  // our variable need to .get medias of PortraitPhotographer
  const userPortrait = photographerModel.getPortraitPhotographer();
  // .appenchild displays all 
  photographersHeader.appendChild(userPortrait);

  //filterMediaFactory
  const media = medias.filter(function (findMedia) {
    return findMedia.photographerId == urlId;
  });
  console.log(media)
  const photographersFilter = document.querySelector('.photograph-filter-container')
  // we use for each to display the exact number of media for each ID. no need to create 10 articles balise in html.
  media.forEach(function (e) {
    const filterModel = mediaFactory(e);
    const userFilter = filterModel.getMediaFactory();
    photographersFilter.appendChild(userFilter);
  });

  //navFactory
  const nav = document.querySelector('.photograph-nav')
  // give a number to our variable
  let like = 0;
  // for each media declaring behand, we create a function linking to media from photographers.json
  // and count the total of likes
  media.forEach(function (totalLikes) {
    like += totalLikes.likes;
  })
  console.log(like)

  console.log(nav)
  // we link to our factorynav a variable concercing prices and likes
  const navModel = navFactory({
    price: photographer.price,
    likes: like
  });
  const navDisplay = navModel.getNavFactory();
  nav.appendChild(navDisplay);

};

// LIKES CHOICE CLICK
function getLikes() {
  // create a function otherwise it displays a empty table
  const LikeCounters = document.querySelectorAll('.photograph-filter-like')
  // add span to only choose likes inside the html
  const TotalLikes = document.querySelector('.photograph-nav-like span')
  console.log(LikeCounters)
  // for each like, add an event
  LikeCounters.forEach(function (likeCounter) {
    console.log('like fonctionne')
    likeCounter.addEventListener("click", function () {
      // .closet choose exactly in html the class to link after to queryselector (choose parent of child)
      const numero = likeCounter.closest('.photograph-filter-text').querySelector('.photograph-filter-total-like li')
      // change the element choosing to number with parseInt
      let numeroPlus = parseInt(numero.textContent)
      let TotalLikesPlus = parseInt(TotalLikes.textContent)
      console.log(typeof numeroPlus)
      // if the like .contains the class css 'active', like looses 1
      if (likeCounter.classList.contains('active')) {
        numeroPlus--
        TotalLikesPlus--
        // otherwise, like adds 1
      } else {
        numeroPlus++
        TotalLikesPlus++
      }
      // declare thant our new vaiable number = text of our cont numero. same for totallikesplus
      numero.textContent = numeroPlus
      TotalLikes.textContent = TotalLikesPlus
      // add .toggle to play with the active css class and create the click on, click off
      likeCounter.classList.toggle('active')
    })
  })

};


// FILTER MENU

const filterTotal = document.querySelector('.filter-total')
// add event on filter menu of filters medias in photographer page
filterTotal.addEventListener("click", function () {
  const filterChoices = document.querySelector('.filter-choices')
  // play with to css class none (dislay: none) or active for go or back the click of header of filter menu
  filterChoices.classList.toggle('none')
  filterTotal.classList.toggle('active')
})

const filterChoicesTable = document.querySelectorAll('.filter-choices button')
filterChoicesTable.forEach(function (choice) {
  // create an event for choices of filter menu
  choice.addEventListener("click", function () {
    console.log('coucou')
    // back to the old 
    const filterChoiceButton = document.querySelector('.filter-choices .none')
    filterChoiceButton.classList.remove('none')
    // hidden the button on click
    choice.classList.add('none')
    // change the title of header of filter menu
    const filterChoiceTotalText = choice.textContent
    filterTotal.querySelector('span').textContent = filterChoiceTotalText
  })
});

//function table en fonction du choix
// 3 choix 

// click on date
// link date with media
// organize by date with filter media

// click on popularity
// link popularity with media
// organize by popularity with filter media

// click on title
// link title with media
// organize by title with filter media