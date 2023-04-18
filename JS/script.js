const closeIcon = document.querySelector(
  ".containerheader__navbar__menu__closeicon"
);
const hamburgerMenuIcon = document.querySelector(
  ".containerheader__navbar__hamburgermenu"
);
const navbarMenu = document.querySelector(".containerheader__navbar__menu");
const navbarcover = document.querySelector(".containerheader__cover");

hamburgerMenuIcon.addEventListener("click", () => {
  hamburgerMenuIcon.classList.toggle("active");
  navbarMenu.classList.toggle("active");
  navbarcover.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
  hamburgerMenuIcon.classList.remove("active");
  navbarMenu.classList.remove("active");
  navbarcover.classList.remove("active");
});

document.querySelectorAll(".containerheader__navbar__menu__link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerMenuIcon.classList.remove("active");
    navbarMenu.classList.remove("active");
    navbarcover.classList.remove("active");
  })
);

StickyNavMenu = document.getElementById("containerheader");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 80) {
    StickyNavMenu.classList.add("sticky");
  } else {
    StickyNavMenu.classList.remove("sticky");
  }
});


