document.getElementById("popupButton").onclick = function (event) {
  event.preventDefault();
  document.getElementById("popup").style.display = "block";
};

document.getElementsByClassName("close")[0].onclick = function () {
  document.getElementById("popup").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("popup")) {
    document.getElementById("popup").style.display = "none";
  }
};
