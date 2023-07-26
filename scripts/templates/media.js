function mediaTemplate(media) {
    const { id, title, image, video, likes } = media;
    
    function displayMediaCardDOM() {
        const mediaArticle = document.createElement('article');

        // Create the media figure and check if the media is an img or a video
        const mediaContent = `<figure class="media-card">
                                ${media.hasOwnProperty("image")
                                ? `<a href="#" class="media-link"><img src="../assets/media/${image}" class="media-content id-${id}" alt="${title}"></img></a>`
                                : media.hasOwnProperty("video")
                                ? `<a href="#" class="media-link"><video src="../assets/media/${video}" class="media-content id-${id}" alt="${title}"></video></a>`
                                : ""}
                                <figcaption class="media-description">${title}
                                    <div>
                                        <span>${likes}</span>
                                        <i class="fas fa-heart" aria-label="likes"></i>
                                    </div>
                                </figcaption>
                            </figure>`

        mediaArticle.innerHTML = mediaContent;

        return mediaArticle;    
    }

    return { displayMediaCardDOM }
}

mediaTemplate();