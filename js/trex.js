const images = [
  "../../img/trex/1.jpg",
  "../../img/trex/2.jpg",
  "../../img/trex/3.jpg"
];

let current = 0;
const mainImage = document.getElementById("mainImage");

function nextImage() {
  current = (current + 1) % images.length;
  mainImage.src = images[current];
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  mainImage.src = images[current];
}

/* LIGHTBOX */
mainImage.onclick = () => {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightboxImg").src = mainImage.src;
};

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
