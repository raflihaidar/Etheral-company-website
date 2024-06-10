(function () {
  let modal = document.getElementById("imageModal");
  let modalImg = document.getElementById("fullImage");
  const container = document.querySelectorAll(".gallery-container");
  const contentContainer = document.querySelector(".content-container");
  const filterButton = document.querySelectorAll(".filter-button");
  const closeButton = document.querySelector(".close");
  const viewButtons = document.querySelectorAll(".view-button");
  const listModalImage = document.querySelector(".image-list");
  const imageIndex = document.querySelector(".image-index");

  const viewImage = (button) => {
    modal.style.display = "block";
    modalImg.src = button.previousElementSibling.src;
  };

  const closeModal = () => {
    modal.style.display = "none";
    listModalImage.firstChild.classList.remove("image-list");
    console.log("before", contentContainer);
    contentContainer.appendChild(listModalImage.firstChild);
    console.log("after", contentContainer);
    listModalImage.removeChild(listModalImage.firstChild);
  };

  function addEventListenersToGroup(groupName) {
    const buttons = document.querySelectorAll(
      `.view-button[data-group='${groupName}']`
    );

    buttons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        const parentButton = button.parentNode.parentNode;
        viewImage(button);
        parentButton.classList.toggle("image-list");
        listModalImage.appendChild(parentButton);
        console.log(listModalImage.childNodes);
        console.log(parseInt(imageIndex.innerHTML));

        // Update the index display
        imageIndex.textContent = (index + 1).toString().padStart(2, "0");
      });
    });
  }

  // Add event listeners for each group separately
  addEventListenersToGroup("book-1");
  addEventListenersToGroup("book-2");
  addEventListenersToGroup("book-3");

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
