function viewImage(button) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("fullImage");
  modal.style.display = "block";
  modalImg.src = button.previousElementSibling.src;
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const viewButtons = document.querySelectorAll(".view-button");
  viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      viewImage(button);
    });
  });

  const closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", closeModal);
});
