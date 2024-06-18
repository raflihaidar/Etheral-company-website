(function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("fullImage");
  const container = document.querySelectorAll(".gallery-container");
  const contentContainer = document.querySelector(".content-container");
  const filterButton = document.querySelectorAll(".filter-button");
  const closeButton = document.querySelector(".close");
  const listModalImage = document.querySelector(".image-list");
  const imageIndex = document.querySelector(".image-index");
  const galleryItem = document.querySelectorAll(".gallery-item");
  const nextIcon = document.querySelector(".next-icon");
  const precIcon = document.querySelector(".prev-icon");

  const viewImage = (e) => {
    modal.style.display = "block";
    modalImg.classList.add("blur-animation");
    modalImg.src = e.target.getAttribute("src");
    modalImg.classList.add("blur-animation");
    galleryItem.forEach((item) => {
      if (item.classList == e.target.parentNode.classList) {
        item.classList.add("image-active");
      } else {
        item.classList.remove("image-active");
      }
    });
  };

  const nextSlide = () => {
    console.log("index of image : ", imageIndex.textContent);
    console.log(modalImg.src);
  };

  const prevSlide = () => {
    console.log("index of image : ", imageIndex.textContent);
    galleryItem.forEach((item, index) => {
      console.log(modalImg.src);
    });
  };

  nextIcon.addEventListener("click", nextSlide);
  precIcon.addEventListener("click", prevSlide);

  modalImg.addEventListener("animationend", function () {
    modalImg.classList.remove("blur-animation");
  });

  galleryItem.forEach((item) => {
    item.addEventListener("click", viewImage);
  });

  const closeModal = () => {
    galleryItem.forEach((item) => {
      item.classList.remove("image-active");
    });
    modal.style.display = "none";
    listModalImage.firstChild.classList.remove("image-list");
    contentContainer.appendChild(listModalImage.firstChild);
    listModalImage.removeChild(listModalImage.firstChild);
  };

  function addEventListenersToGroup(groupName) {
    const images = document.querySelectorAll(
      `.image-item[data-group='${groupName}']`
    );

    images.forEach(function (image, index) {
      image.addEventListener("click", function () {
        const parentButton = image.parentNode.parentNode;
        if (!parentButton.classList.contains("image-list")) {
          parentButton.classList.toggle("image-list");
          listModalImage.appendChild(parentButton);
        }

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
