const nextBtn = document.querySelector(".next-btn");

//console.log(lightboxContainersArray);
let currentIndex = 0;

function displayLightbox(media) {
  const lightboxSection = document.getElementById("lightbox");
  lightboxSection.style.display = "block";
  lightboxSection.focus();
  const lightboxContainers = document.querySelectorAll(".lightbox-container");
  const lightboxContainersArray = Array.from(lightboxContainers);
  console.log(lightboxContainersArray)
  lightboxContainersArray.forEach(function (container) {
    const mediaElement = container.querySelector(".lightbox-media");
    //const videoElement = container.querySelector("video");
    console.log(mediaElement);  
    
    if (mediaElement && parseInt(mediaElement.dataset.id) === media) {
      container.style.display = "block";
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

function next(direction) {
  const lightboxContainers = document.querySelectorAll(".lightbox-container");
  const lightboxContainersArray = Array.from(lightboxContainers);

  const currentIndex = lightboxContainersArray.findIndex(function (container) {
    return container.style.display === "flex";
  });

  let nextIndex;

  if (direction === "prev") {
    nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
      nextIndex = lightboxContainersArray.length - 1;
    }
  } else if (direction === "next") {
    nextIndex = currentIndex + 1;
    if (nextIndex >= lightboxContainersArray.length) {
      nextIndex = 0;
    }
  }

  lightboxContainersArray.forEach(function (container, index) {
    if (index === nextIndex) {
      container.style.display = "flex"; // Afficher le média suivant ou précédent
    } else {
      container.style.display = "none"; // Masquer les autres médias
    }
  });
}