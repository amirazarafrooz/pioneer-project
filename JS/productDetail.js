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
