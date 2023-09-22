function initializeImageAnimation() {
  const image = document.getElementById("heroImageID");

  image.style.height = "300px";
}

// Attach the event listener to the image load event
document.getElementById("heroImageID").addEventListener("load", initializeImageAnimation);

// Call the function immediately in case the image is already cached
if (document.getElementById("heroImageID").complete) {
  initializeImageAnimation();
}
