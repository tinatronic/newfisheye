async function mediaTemplate(media, photographer) {
    const { id, photographerID, title, image, video, likes, date, price } = media;
    
    // Creates the media section template
    async function displayMediaCardDOM() {
        const mediaArticle = document.createElement('article');
        
        // Checks if the media is an img or a video
        const mediaContent = `<figure class="media-card">
        ${media.hasOwnProperty("image")
        ? `<img src="../assets/media/${photographer.name}/${image}" class="media-content id-${id}" alt="${title}" tabindex="0"></img>`
        : media.hasOwnProperty("video")
        ? `<video src="../assets/media/${photographer.name}/${video}" class="media-content id-${id}" alt="${title}" tabindex="0"></video>`
        : ""}
        <figcaption class="media-description">
        <p>${title}</p>
        <div>
        <span>${likes}</span>
        <i class="fas fa-heart like-btn" aria-label="likes" role="button"></i>
        </div>
        </figcaption>
        </figure>`
        
        mediaArticle.innerHTML = mediaContent;
        
        return mediaArticle;    
    }

    async function createLightboxDOM() {
        const lightboxSection = document.getElementById("lightbox");
        const lightboxContainer = document.createElement('div');
        lightboxContainer.classList.add('lightbox-container');

        const lightboxContent = `<div class="lightbox-card">
        ${media.hasOwnProperty("image")
        ? `<img src="../assets/media/${photographer.name}/${image}" class="lightbox-media id-${id}" alt="${title}" tabindex="0" onclick="openLightbox(this.src)"></img>`
        : media.hasOwnProperty("video")
        ? `<video src="../assets/media/${photographer.name}/${video}" class="lightbox-media id-${id}" alt="${title}" tabindex="0" onclick="openLightbox()" controls></video>`
        : ""}
        <p>${title}</p>
        <button class="close-lb-btn">
        <i class="fas fa-xmark"></i>
        </button>
        <button type="button" class="prev-lb-btn">
        <i class="fas fa-chevron-left"></i>
        </button>
        <button type="button" class="next-lb-btn">
        <i class="fas fa-chevron-right"></i>
        </button>
        </div>`

        lightboxContainer.innerHTML = lightboxContent;
        lightboxSection.appendChild(lightboxContainer);
        return lightboxContainer;
    }

    return { displayMediaCardDOM, createLightboxDOM }
}