const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.getElementById("overlay");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  mobileNav.style.display = "flex";
  overlay.style.display = "block";
  body.classList.add("overlay-active");
});

closeBtn.addEventListener("click", () => {
  mobileNav.style.display = "none";
  overlay.style.display = "none";
  body.classList.remove("overlay-active");
});
