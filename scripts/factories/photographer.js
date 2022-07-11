function photographerFactory(data) {
    const {
        name,
        id,
        city,
        country,
        tagline,
        price,
        portrait
    } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");
        article.innerHTML =
            `
        <a href="photographer.html?id=${id}"><img class="img-portrait" src="${picture}" alt ="${name}" title = "picture of" + "${name}">
        <h2 class="name-portrait">${name}</h2></a>
        <p class="city-portrait">${city}, ${country}</p>
        <p class="tagline-portrait">${tagline}</p>
        <p class="price-portrait">${price}€/jour</p>
        `

        return (article);
    }

    return {
        name,
        picture,
        getUserCardDOM
    }
}