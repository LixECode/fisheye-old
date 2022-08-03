async function getPhotographers() {
    let photographers = [];
    await fetch("/data/photographers.json")
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })

        // .then((data) => {
        //     photographers = data.photographers;
        // });
        .then(function (data) {
            photographers = data.photographers
        })
    console.log(photographers);
    return {
        photographers
    };
}


// .catch(function (error) {
//     // erreur survenue
// })


async function displayDataIndex(photographers) {
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
    displayDataIndex(photographers);
};

init();