// Récupère toutes les données (media et phographes)
async function getData() {
    try {
        const res = await fetch('./data/photographers.json');
        const data = await res.json();
        return data;
    } catch(err) {
        console.log(err)
        throw new Error("Error fetching data.")
    }   
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
    const { photographers } = await getData();
    displayData(photographers);
}

init();