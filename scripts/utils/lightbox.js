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
function openLightbox() {
  const lightboxSection = document.getElementById("lightbox");
  
  
}

function closeLightbox() {

  lightboxSection.style.display = "none";
}

document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});