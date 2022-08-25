// aynchrom function for linking photographers.json to our factories and display them
async function getPhotographers() {
    let photographers = [];
    // fetch for scrapping data and display if ok
    await fetch("/data/photographers.json")
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        // if ok so our variable photographers is linking to data json
        .then(function (data) {
            photographers = data.photographers
        })
    console.log(photographers);
    // display the data linked
    return {
        photographers
    };
}

// aynchrom function for displaying our fetch function 

async function displayDataIndex(photographers) {
    // choose the place in html for linked our fetch
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        // for each data, link our factories portrait photographer, portrait CARD photographer and display them
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // A REVOIR // Différence entre aynchrome and init ?
    const {
        photographers
    } = await getPhotographers();
    displayDataIndex(photographers);
};

init();