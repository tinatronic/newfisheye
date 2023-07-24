function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    console.log(name);
    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        const article = document.createElement('article');
        
        article.innerHTML = `<a href="#">
                                <img src="../assets/photographers/${portrait}" alt="photographer portrait">
                                <h2>${name}</h2>
                             </a>
                             <p>${city}, ${country}</p>
                             <p>${tagline}</p>
                             <p>${price}€/jour</p>`
        // const img = document.createElement( 'img' );
        // img.setAttribute("src", picture)
        // const h2 = document.createElement( 'h2' );
        // h2.textContent = name;
        // article.appendChild(img);
        // article.appendChild(h2);
        
        return article;
    }
    return { name, picture, getUserCardDOM }
}