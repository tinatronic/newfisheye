async function getPhotographers() {
    // Get Json data with using fetch
    let photographers = await fetch('../data/photographers.json')
    // Promise => response
    .then(data => data.json())
    // Return array of photographers
    //console.log(photographers);
    return photographers;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer__section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.displayCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();