async function getPhotographers() {
    let photographers = [];
    await fetch("/data/photographers.json")
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })

        .then(function (data) {
            if (data.value == photographers) {
                console.log(photographers);
                return photographers;
            }
        });

    `
        <article>
            < div class="photographer_section">
                <h2>${name}</h2>
                <h3>${city}, ${country}</h3>
                <p>${tagline}</p>
            </div>
                <img src="${picture}" alt="${name}"
            </article>`

    .catch(function (error) {
        // erreur survenue
    })
};



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