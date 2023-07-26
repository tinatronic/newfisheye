//Get the value of the ID parameter of the URL
const url = new URLSearchParams(document.location.search);
const photographerIdURL = parseInt(url.get("id"));

async function getPhotographers() {
    try {
        const res = await fetch('../data/photographers.json');
        const data = await res.json();
        const photographers = data.photographers;

        return photographers;
    } catch(err) {
        throw new Error("Error fetching data.");
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

    photographerMediaById.forEach((photographerMediaById) => {
        const mediaModel = mediaTemplate(photographerMediaById);
        const mediaCardDOM = mediaModel.displayMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });
}

async function init() {
    const photographertoDisplay = await getPhotographerbyId();
    const mediatoDisplay = await getMediabyId();
    displayPhotographerHeader(photographertoDisplay);
    displayMedia(mediatoDisplay);
}

init();