const closeIcon = document.querySelector(".containerheader__navbar__menu__closeicon");
const hamburgerMenuIcon = document.querySelector(".containerheader__navbar__hamburgermenu");
const navbarMenu = document.querySelector(".containerheader__navbar__menu");


hamburgerMenuIcon.addEventListener("click", () => {
    hamburgerMenuIcon.classList.toggle("active");
    navbarMenu.classList.toggle("active");


})

closeIcon.addEventListener("click", () => {
    hamburgerMenuIcon.classList.remove("active");
    navbarMenu.classList.remove("active");
})

document.querySelectorAll(".containerheader__navbar__menu__link").forEach(n => n.addEventListener("click", () => {
    hamburgerMenuIcon.classList.remove("active");
    navbarMenu.classList.remove("active");
}))



StickyNavMenu = document.getElementById("containerheader");
window.addEventListener("scroll", () => {

    if (document.documentElement.scrollTop > 100) {
        StickyNavMenu.classList.add("sticky");
    } else {
        StickyNavMenu.classList.remove("sticky");
    }

})


// popup modal for images in product details page

var modal = document.getElementById('imageModalSection');
var modalImage = document.getElementById('modalImg');
var img = document.querySelectorAll('#attrImg');
var modalClose = document.querySelector('.containerproductdetail_downimage_attr_modal span');

img.forEach(image => {
    image.onclick = () => {
        modal.style.display = 'flex';
        modalImage.src = image.getAttribute('src');
    }
})
modalClose.onclick = () => {
    modal.style.display = 'none';
}