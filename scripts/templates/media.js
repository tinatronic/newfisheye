async function mediaTemplate(media, photographer) {
    const { id, photographerID, title, image, video, likes, date, price } = media;
    
    async function displayMediaCardDOM() {
        const mediaArticle = document.createElement('article');
        
        // Create the media figure and check if the media is an img or a video
        const mediaContent = `<figure class="media-card">
        ${media.hasOwnProperty("image")
        ? `<a href="#" class="media-link"><img src="../assets/media/${photographer.name}/${image}" class="media-content id-${id}" alt="${title}"></img></a>`
        : media.hasOwnProperty("video")
        ? `<a href="#" class="media-link"><video src="../assets/media/${photographer.name}/${video}" class="media-content id-${id}" alt="${title}"></video></a>`
        : ""}
        <figcaption class="media-description">
        <p>${title}</p>
        <div>
        <span>${likes}</span>
        <i class="fas fa-heart" aria-label="likes"></i>
        </div>
        </figcaption>
        </figure>`
        
        mediaArticle.innerHTML = mediaContent;
        //
        
        return mediaArticle;    
    }
    
    async function displayTotalLikesDOM() {
        const totalLikesWrapper = document.createElement('div');
        totalLikesWrapper.classList.add('totalLikes-wrapper');
        const likeContent = `
        <div>
        <span id="total-likes">99</span>
        <i class="fas fa-heart"></i>
        </div>
        <span>${price}€ / jour</span>`
        
        totalLikesWrapper.innerHTML = likeContent;
    }
    
    
    
    return { displayMediaCardDOM, displayTotalLikesDOM }
}