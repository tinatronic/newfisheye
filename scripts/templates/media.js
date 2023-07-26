async function mediaTemplate(media) {
    const { id, title, image, video, likes } = media;
    const mid = media.id;
    console.log(mid)

    // Get the name of the photographer to add in the path of the img or the video
    async function getPhotographerName() {
        const photodata = await getPhotographerbyId();
        const photoname = photodata.name;
        return photoname;
     }
    
    async function displayMediaCardDOM() {
        // Store the photographer name in a variable
        const name = await getPhotographerName();
        const mediaArticle = document.createElement('article');

        // Create the media figure and check if the media is an img or a video
        const mediaContent = `<figure class="media-card">
                                ${media.hasOwnProperty("image")
                                ? `<a href="#" class="media-link"><img src="../assets/media/${name}/${image}" class="media-content id-${id}" alt="${title}"></img></a>`
                                : media.hasOwnProperty("video")
                                ? `<a href="#" class="media-link"><video src="../assets/media/${name}/${video}" class="media-content id-${id}" alt="${title}"></video></a>`
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

        return mediaArticle;    
    }

    return { displayMediaCardDOM }
}

mediaTemplate();