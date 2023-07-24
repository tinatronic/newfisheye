function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    //const picture = `assets/photographers/${portrait}`;
    
    function displayCardDOM() {
        const article = document.createElement('article');
        article.classList.add("photographer");
        
        const photographerCard = `<a href="./photographer.html?id=${id}" aria-label="navigate to the photographer page" tabindex="0">
                                    <img class="photographer__portrait" src="../assets/photographers/${portrait}" alt="photographer portrait">
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
    return { displayCardDOM }
}