// DOM elements
const lightboxSection = document.getElementById("lightbox");
const lightboxContainers = document.querySelectorAll(".lightbox-container");
const lightboxArray = Array.from(lightboxContainers);
const closeLightboxBtn = document.querySelector(".close-lb-btn");
const prevLightboxBtn = document.querySelector(".prev-lb-btn");
const nextLightboxBtn = document.querySelector(".next-lb-btn");
const lightboxMediaItem = document.querySelector(".lightbox-media");
console.log(lightboxArray)
console.log(lightboxMediaItem)


// Opens the lightbox modal when user clicks on a media or presses Enter
async function openLightbox() {
  lightboxSection.style.display = "block";
}

function closeLightbox() {
  lightboxSection.style.display = "none";
}

document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

function moveRight(id, medias, photographer) {
  let img = document.querySelector(`.lightbox-media`);
  let indexCurrentMedia = medias.findIndex(m => m.id == id);
  let nextMedia = medias[indexCurrentMedia + 1];
  console.log(nextMedia)
  img.src = `./assets/media/${photographer.name}/${nextMedia.image}`
  console.log(img)
  img.innerHTML = nextMedia.hasOwnProperty("image")
        ? `<img src="./assets/media/${photographer.name}/${nextMedia.image}" class="lightbox-media id-${nextMedia.id}" alt="${nextMedia.title}" tabindex="0" onclick="openLightbox(this.src)"></img>`
        : nextMedia.hasOwnProperty("video")
        ? `<video src="./assets/media/${photographer.name}/${nextMedia.video}" class="lightbox-media id-${nextMedia.id}" alt="${nextMedia.title}" tabindex="0" onclick="openLightbox()" controls></video>`
        : ""
}