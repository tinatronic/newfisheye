class Lightbox {
    constructor(MediaById) {
        this._lightboxSection = document.getElementById("light");
        this._lightboxContainer = document.querySelector(".lightbox-container");
        this._btnNextLightBox = document.querySelector(".button-next");
        this._btnPreviousLightBox = document.querySelector(".button-previous");
        this._media = document.querySelector(`.id-${photographerDataMediaById.id}`);
        this._array = photographerDataMediaByIdAll;
        this._currentIndex = 0; 
    }

    displayLightbox(mediaById) {
        // Ajoute un écouteur d'événement sur le clic de l'utilisateur pour ouvrir la lightbox
      this._media.addEventListener("click", () => {
        // Change la propriété display du modal pour l'afficher
        this._modalLightBox.style.display = "block";
        // Injecte le contenu de la lightbox dans le container
        this._lightbox__container.innerHTML = `
        ${
          photographerDataMediaById.image
            ? `<img alt="${photographerDataMediaById.title}" aria-label="${photographerDataMediaById.title}" src="../assets/media/${photographerDataById.name}/${photographerDataMediaById.image}">`
            : `<video title="${photographerDataMediaById.title}" aria-label="${photographerDataMediaById.title}" src="../assets/media/${photographerDataById.name}/${photographerDataMediaById.video}" controls></video>`
        }
        <p tabindex="0" class="lightbox__title">${
          photographerDataMediaById.title
        }</p>
        `;
      });
      // Ajoute un écouteur d'événement sur la touche entrée pour ouvrir la lightbox
      this._media.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this._modalLightBox.style.display = "block";
          this._lightbox__container.innerHTML = `
          ${
            photographerDataMediaById.image
              ? `<img alt="${photographerDataMediaById.title}" aria-label="${photographerDataMediaById.title}" src="../assets/media/${photographerDataById.name}/${photographerDataMediaById.image}">`
              : `<video title="${photographerDataMediaById.title}" aria-label="${photographerDataMediaById.title}" src="../assets/media/${photographerDataById.name}/${photographerDataMediaById.video}" controls></video>`
          }
          <p tabindex="0" class="lightbox__title">${
            photographerDataMediaById.title
          }</p>
        `;
        }
      });
    }
}





// // Get the DOM elements
// const lightbox = document.getElementById("lightbox");
// const lightboxWrap = document.querySelector(".lightbox-container");
// const lightboxCard = document.querySelector(".lightbox-card");
// // Get the tag of the media element
// //const media = document.querySelector(`id-${photograperDataMediaById}`);
// //const mediaArray = photographerMediaDataAll;
// const currentIndex = 0;

// async function photographerMediaById() {
//     const dataMedia = await getMediabyId();
//     //console.log(dataMedia)
//     const mediaById = dataMedia;
//     //console.log(mediaById);
//     return mediaById;
// }

// // Display lightbox
// async function displayLightbox(media, getPhotographerName) {
//     lightbox.style.display = "block";
//     lightbox.focus();

//     const dataMedia = await photographerMediaById();
//     console.log(dataMedia)

//     const lightboxContainers = document.querySelectorAll(".lightbox-container");
//     const lightboxContainersArray = Array.from(lightboxContainers);
//     console.log(lightboxContainersArray)
// }

// displayLightbox()