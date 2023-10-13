//Get the value of the ID parameter of the URL
const url = new URLSearchParams(document.location.search);
const photographerIdURL = parseInt(url.get("id"));

// Get the photographer corresponsing of the Id of the page
async function getPhotographerbyId() {
    try {
        const res = await fetch('./data/photographers.json');
        const data = await res.json();
        const photographerById = data.photographers.find((dataPhotographer) => dataPhotographer.id === photographerIdURL);

        return photographerById;
    } catch(err) {
        throw new Error("Error fetching data.");
    }
}

// Get the media of the photographer corresponding of the Id of the page
async function getMediabyId() {
    try {
        const res = await fetch('./data/photographers.json')
        const data = await res.json();
        const photographerMediaById = data.media.filter((dataMediaPhotographer) => dataMediaPhotographer.photographerId === photographerIdURL);

        return photographerMediaById
    } catch(err) {
        throw new Error("Error fetching data.");
    }
}

// Get the header template and display the data on the page
async function displayPhotographerHeader(photographer) {
    const headerModel = photographerTemplate(photographer);
    headerModel.displayHeaderDOM();
}

// Get the media template and display the data on the page
async function displayMedia(medias, photographer) {
    const mediaSection = document.getElementById("media");
    // Use of for...of loop as await can't be used in a foreach
    for (const media of medias) {
        const mediaModel = await mediaTemplate(media, photographer);
        const mediaCardDOM = await mediaModel.displayMediaCardDOM();
        mediaCardDOM.addEventListener('click', async () => {
            await mediaModel.createLightboxDOM();
            await openLightbox();
        })
        mediaSection.appendChild(mediaCardDOM);
        //await mediaModel.createLightboxDOM();
    }
    // photographerMediaById.forEach((photographerMediaById) => {
    //     const mediaModel = mediaTemplate(photographerMediaById);
    //     //console.log(mediaModel)
    //     const mediaCardDOM = mediaModel.displayMediaCardDOM(media);
    //     //console.log(mediaCardDOM)
    //     mediaSection.appendChild(mediaCardDOM);
    // });
    
}

const likeBtn = document.querySelectorAll(".like-btn");
likeBtn.forEach(function (likeBtn) {
    incrementLikes(likeBtn);
});

function incrementLikes() {
    console.log("toto")
}

async function displayTotalLikes(price) {
    const totalLikesModel = photographerTemplate(price);
    totalLikesModel.createTotalLikesDOM();
}

// async function displayLightbox(media, photographer) {
//     const lightboxModel = await mediaTemplate(media, photographer);
//     lightboxModel.createLightboxDOM();
// }

async function init() {
    const photographertoDisplay  = await getPhotographerbyId();
    const mediaToDisplay  = await getMediabyId();
    displayPhotographerHeader(photographertoDisplay);
    displayMedia(mediaToDisplay, photographertoDisplay);
    displayTotalLikes(photographertoDisplay);
    //displayLightbox(mediaToDisplay, photographertoDisplay);
}

init();