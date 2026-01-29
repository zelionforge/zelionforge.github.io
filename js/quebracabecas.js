document.querySelectorAll(".qb-carousel").forEach(carousel => {
  const images = carousel.querySelectorAll("img");
  let index = 0;

  images[0].classList.add("active");

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 2500);
});
