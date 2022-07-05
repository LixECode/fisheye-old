async function getPhotographers() {

    fetch('data/photographers.json')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })

        .then(function (photographers) {
            console.log(photographers);
            return `
        <article>
            <div class=info tabindex="2">
                <h2>${name}</h2>
                <h3>${city}, ${country}</h3>
                <p>${tagline}</p>
            </div>
                <img src="${picture}" alt="${name}"
            </article>`
        })

        .catch(function (error) {
            // erreur survenue
        })
};

// Penser à remplacer par les données récupérées dans le json
const photographers = {
    name,
    portrait,
    city,
    country,
    tagline,
}

const picture = `/src/assets/photographers/${portrait}`;

// // et bien retourner le tableau photographers seulement une fois
// return ({
//     photographers
// });




async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const {
        photographers
    } = await getPhotographers();
    displayData(photographers);
};

init();