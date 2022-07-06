function photographerFactory(data) {
    const {
        name,
        city,
        country,
        tagline,
        price,
        portrait
    } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");
        const img = document.createElement("img");
        img.setAttribute("src", picture)
        // créer un a pour redirection
        article.appendChild(img);

        const h2 = document.createElement("h2");
        h2.textContent = name;
        article.appendChild(h2);

        const text = document.createElement("p");
        text.innerHTML = `<div class="article_information">
      <p class="city">${city + ", " + country}</p>
      <p class="tagline">${tagline}</p>
      <p class="price">${price}€/jour</p>
      </div>`
        article.appendChild(text);

        return (article);
    }

    return {
        name,
        picture,
        getUserCardDOM
    }
}