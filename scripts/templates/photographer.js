function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/${portrait}`;
    const link = `./photographer.html?id=${id}`;

    function displayCardDOM() {
        const article = document.createElement('article');
        article.classList.add("photographer");
        
        const photographerCard = `<a href="${link}" aria-label="navigate to the photographer page" tabindex="0">
                                    <img class="photographer__portrait" src="${picture}" alt="photographer portrait">
                                    <h2>${name}</h2>
                                  </a>
                                  <p class="photographer__location">${city}, ${country}</p>
                                  <p class="photographer__tagline">${tagline}</p>
                                  <p class="photographer__price">${price}€/jour</p>`

        article.innerHTML = photographerCard;
        // const img = document.createElement( 'img' );
        // img.setAttribute("src", picture)
        // const h2 = document.createElement( 'h2' );
        // h2.textContent = name;
        // article.appendChild(img);
        // article.appendChild(h2);
        
        return article;
    }

    function displayHeaderDOM() {
        const photographerHeader = document.querySelector(".photographer__header");
        const headerContent = `<div class="photographer__info">
                                <h1 class="info-name">${name}</h1>
                                <p class="info-location">${city}, ${country}</p>
                                <p class="info-tagline">${tagline}</p>
                            </div>
                            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                            <img class="photographer__portrait" src="${picture}" alt="${name}">`

        photographerHeader.innerHTML = headerContent;
        return photographerHeader;
    }
    
    return { displayCardDOM, displayHeaderDOM }
}