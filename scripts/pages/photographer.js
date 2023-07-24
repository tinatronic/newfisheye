const url = new URLSearchParams(document.location.search);
const photographerIdURL = parseInt(url.get("id"));

async function getPhotographers() {
    try {
        const res = await fetch('../data/photographers.json');
        const data = await res.json();
        const photographers = data.photographers;
        console.log(photographers);
        return photographers;
    } catch(err) {
        throw new Error("Error fetching data.");
    }
    
}

async function getPhotographerbyId() {
    try {
        const res = await fetch('../data/photographers.json');
        const data = await res.json();
        const photographerById = data.photographers.find((dataPhotographer) => dataPhotographer.id === photographerIdURL);
        console.log(photographerById);
        return photographerById;
    } catch(err) {
        throw new Error("Error fetching data.");
    }
}

async function displayPhotographerHeader(photographerById) {
    const headerModel = photographerTemplate(photographerById);
    headerModel.displayHeaderDOM();
}

async function init() {
    const photographertoDisplay = await getPhotographerbyId();
    console.log(photographertoDisplay);
    displayPhotographerHeader(photographertoDisplay);
}

init();