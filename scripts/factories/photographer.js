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
        // const img = document.createElement("img");
        // img.setAttribute("src", picture)
        // article.appendChild(img);

        // const h2 = document.createElement("h2");
        // h2.textContent = name;
        // article.appendChild(h2);

        // const paragraph = document.createElement("div");
        // paragraph.innerHTML =
        //     `
        // <p class="city">${city}, ${country}</p>
        // <p class="tagline">${tagline}</p>
        // <p class="price">${price}€/jour</p>
        // `
        // article.appendChild(paragraph);

        // const a = document.createElement('a');
        // a.setAttribute('href', 'photographer.html');
        // a.innerHTML = name;
        // article.appendChild(a);

        return (article);
    }

    return {
        name,
        picture,
        getUserCardDOM
    }
}