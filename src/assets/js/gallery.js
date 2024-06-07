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

const container = document.querySelectorAll(".gallery-container");
const filterButton = document.querySelectorAll(".filter-button");
const filter = (e) => {
  console.log(e.target);
  alert("connected");
};

filterButton.addEventListener("click", filter);
