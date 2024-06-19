//* Humburger Menu

const navigation = document.querySelector("#nav #navigation");
const backToTop = document.querySelector("#back-to-top");

const menuToggle = document.querySelector(".humberger-menu input");
menuToggle.addEventListener("click", function () {
  if (menuToggle.checked) {
    navigation.style.transform = "translateY(0)";
  } else {
    navigation.style.transform = "translateY(-100%)";
  }
});

window.onload = () => {
  window.addEventListener("scroll", console.log(window.scrollY));
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.visibility = "visible";
    backToTop.style.opacity = "100%";
  } else {
    backToTop.style.visibility = "hidden";
    backToTop.style.opacity = "0";
  }
});
