function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/${portrait}`;
    const link = `./photographer.html?id=${id}`;
    
    // Creates the HTML structure of the photographers cards
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
    
    // Creates the HTML structure of the photographer header
    function displayHeaderDOM() {
        const photographerHeader = document.querySelector('.photographer__header');
        
        const photographerInfo = document.createElement('div');
        photographerInfo.classList.add('photographer__info');
        
        const infoName = document.createElement('h1');
        infoName.classList.add('info-name');
        infoName.textContent = name;

        const infoLocation = document.createElement('p');
        infoLocation.classList.add('info-location');
        infoLocation.textContent = city + ", " + country;

        const infoTagline = document.createElement('p');
        infoTagline.classList.add('info-tagline');
        infoTagline.textContent = tagline;

        photographerInfo.appendChild(infoName);
        photographerInfo.appendChild(infoLocation);
        photographerInfo.appendChild(infoTagline);

        const contactBtn = document.getElementById('open-btn');

        const photographerPortrait = document.createElement('img');
        photographerPortrait.classList.add('photographer__portrait');
        photographerPortrait.setAttribute('src', picture);

        // const headerContent = `<div class="photographer__info">
        // <h1 class="info-name" tabindex="0">${name}</h1>
        // <p class="info-location" tabindex="0">${city}, ${country}</p>
        // <p class="info-tagline" tabindex="0">${tagline}</p>
        // </div>
        // <button id="open-btn" type="button" class="contact_button open-btn" aria-label="Contact me" tabindex="0" onclick="displayModal()">Contactez-moi</button>
        // <img class="photographer__portrait" src="${picture}" alt="${name}">`
        
        //photographerHeader.innerHTML = headerContent;

        photographerHeader.appendChild(photographerInfo);
        photographerHeader.appendChild(contactBtn);
        photographerHeader.appendChild(photographerPortrait);
        
        return photographerHeader;
    }

    async function createTotalLikesDOM() {
        const totalLikesSection = document.getElementById('photographer_pricing');

        const likesContent = `<div>
        <span id="total-likes">99</span>
        <i class="fas fa-heart"></i>
        </div>
        <span>${price}€ / jour</span>`
        
        totalLikesSection.innerHTML = likesContent;

        return totalLikesSection;
    }
    
    return { displayCardDOM, displayHeaderDOM, createTotalLikesDOM }
}