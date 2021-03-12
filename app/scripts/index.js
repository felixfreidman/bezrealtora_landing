mybutton = document.getElementById("toTopButton");
let burgerButton = document.querySelector(".header_burger-button-mobile");
let darkLayerContainer = document.querySelector(".header_dark-layer");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

burgerButton.addEventListener("click", () => {
  darkLayerContainer.style.display = "flex";
});

darkLayerContainer.addEventListener("click", () => {
  darkLayerContainer.style.display = "none";
});
