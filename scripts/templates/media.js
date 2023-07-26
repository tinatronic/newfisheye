console.log("Toto")
function mediaTemplate(data) {
    const { id, photographerId, title, image, video, likes, date, price, name } = data;

    function displayMediaCardDOM() {
        const mediaArticle = document.createElement('article');
        mediaArticle.classList('media-card');

        const mediaContent = `<figure>
                                <img src="../assets/media/${photographerId}/${image}">
                            </figure>`

        mediaArticle.innerHTML = mediaContent;

        return mediaArticle;    
    }

    return { displayMediaCardDOM }
}

mediaTemplate();