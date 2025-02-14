const upButton = document.getElementById("upButton");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    upButton.classList.add("show");
  } else {
    upButton.classList.remove("show");
  }
};

upButton.onclick = function () {
  window.scrollTo(0);
};

window.onload = generateGallery;
