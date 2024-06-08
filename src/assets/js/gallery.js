(function () {
  let modal = document.getElementById("imageModal");
  let modalImg = document.getElementById("fullImage");
  const container = document.querySelectorAll(".gallery-container");
  const filterButton = document.querySelectorAll(".filter-button");
  const closeButton = document.querySelector(".close");
  const viewButtons = document.querySelectorAll(".view-button");

  const viewImage = (button) => {
    modal.style.display = "block";
    modalImg.src = button.previousElementSibling.src;
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      viewImage(button);
    });
  });

  closeButton.addEventListener("click", closeModal);

  const filter = (e) => {
    filterButton.forEach((button, index) => {
      const isActive = button === e.target;
      button.classList.toggle("active", isActive);
      container[index].classList.toggle("container-active", isActive);
    });
  };

  filterButton.forEach((button) => {
    button.addEventListener("click", filter);
  });
})();
