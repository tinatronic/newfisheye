//Get the value of the ID parameter of the URL
const url = new URLSearchParams(document.location.search);
const photographerIdURL = parseInt(url.get("id"));

async function getAllData() {
    try {
        const res = await fetch('../data/photographers.json');
        const data = await res.json();
        return data; 
    } catch(err) {
        throw new Error("Error.");
    }
}

// Get the photographer corresponsing of the Id of the page
async function getPhotographerbyId() {
    try {
        const res = await fetch('../data/photographers.json');
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
        const res = await fetch('../data/photographers.json')
        const data = await res.json();
        const photographerMediaById = data.media.filter((dataMediaPhotographer) => dataMediaPhotographer.photographerId === photographerIdURL);

        return photographerMediaById
    } catch(err) {
        throw new Error("Error fetching data.");
    }
}

// Get the header template and display the data on the page
async function displayPhotographerHeader(photographerById) {
    const headerModel = photographerTemplate(photographerById);
    headerModel.displayHeaderDOM();
}

// Get the media template and display the data on the page
async function displayMedia(photographerMediaById) {
    const mediaSection = document.getElementById("media"); 

    for (const media of photographerMediaById) {
        const mediaModel = await mediaTemplate(media);
        const mediaCardDOM = await mediaModel.displayMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    }
    // photographerMediaById.forEach((photographerMediaById) => {
    //     const mediaModel = mediaTemplate(photographerMediaById);
    //     //console.log(mediaModel)
    //     const mediaCardDOM = mediaModel.displayMediaCardDOM(media);
    //     //console.log(mediaCardDOM)
    //     mediaSection.appendChild(mediaCardDOM);
    // });
}

async function init() {
    const photographertoDisplay = await getPhotographerbyId();
    const mediaToDisplay = await getMediabyId();
    displayPhotographerHeader(photographertoDisplay);
    displayMedia(mediaToDisplay);
}

init();