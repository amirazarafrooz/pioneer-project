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

// popup modal for images in product details page

var modal = document.getElementById("imageModalSection");
var modalImage = document.getElementById("modalImg");
var img = document.querySelectorAll("#attrImg");
var modalClose = document.querySelector(
  ".containerproductdetail_downimage_attr_modal span"
);

img.forEach((image) => {
  image.onclick = () => {
    modal.style.display = "flex";
    modalImage.src = image.getAttribute("src");
  };
});
modalClose.onclick = () => {
  modal.style.display = "none";
};

// skillsbar for process page

let execute = false;
window.addEventListener(
  "scroll",
  function (event) {
    var top = this.scrollY;
    if (top > 1600) {
      move("myBar", "precentage", 10, 78);
      move("myBar2", "precentage2", 10, 95);
      move("myBar3", "precentage3", 10, 40);
      execute = true;
    }
  },
  false
);

function move(ProgressBarId, PercentSpanId, FrameInterval, PercentNum) {
  if (execute) return;
  var elem = document.getElementById(ProgressBarId);
  var elem2 = document.getElementById(PercentSpanId);
  var width = 0;
  var id = setInterval(frame, FrameInterval);
  function frame() {
    if (width >= PercentNum) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem2.innerHTML = width * 1 + "%";
    }
  }
}
