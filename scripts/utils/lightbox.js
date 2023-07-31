function displayLightbox(media) {
  const lightboxSection = document.getElementById("lightbox");
  lightboxSection.style.display = "block";
  lightboxSection.focus();

  const lightboxContainers = document.querySelectorAll(".lightbox-container");
  const lightboxContainersArray = Array.from(lightboxContainers);
  
  console.log(lightboxContainersArray)
  lightboxContainersArray.forEach(function (container) {
    const imgElement = container.querySelector("img");
    const videoElement = container.querySelector("video");
    console.log(imgElement)

    if (imgElement && parseInt(imgElement.dataset.id) === media) {
      container.style.display = "flex";
      container.setAttribute("tabindex", "2");
    } else if (videoElement && parseInt(videoElement.dataset.id) === media) {
      container.style.display = "flex";
      container.setAttribute("tabindex", "2");
    } else {
      container.style.display = "none";
      container.setAttribute("tabindex", "2");
    }
  });
}

function closeLightbox() {
  const lightboxSection = document.getElementById("lightbox");
  lightboxSection.style.display = "none";
}

document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});