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
  const prevIcon = document.querySelector(".prev-icon");

  let currentGroup = "";
  let currentIndex = 0;

  const viewImage = (e) => {
    modal.style.display = "block";
    modalImg.classList.add("blur-animation");
    modalImg.src = e.target.getAttribute("src");
    modalImg.classList.add("blur-animation");
    currentGroup = e.target.getAttribute("data-group");
    const images = document.querySelectorAll(
      `.image-item[data-group="${currentGroup}"]`
    );
    currentIndex = Array.from(images).indexOf(e.target);
    updateImageIndex();
    galleryItem.forEach((item) => {
      if (item.classList == e.target.parentNode.classList) {
        item.classList.add("image-active");
      } else {
        item.classList.remove("image-active");
      }
    });
    updateNavigationButtons(images.length);
  };

  const nextSlide = () => {
    const images = document.querySelectorAll(
      `.image-item[data-group="${currentGroup}"]`
    );
    if (currentIndex < images.length - 1) {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex, images);
    }
    updateNavigationButtons(images.length);
  };

  const prevSlide = () => {
    const images = document.querySelectorAll(
      `.image-item[data-group="${currentGroup}"]`
    );
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex, images);
    updateNavigationButtons(images.length);
  };

  const showImage = (index, images) => {
    const image = images[index];
    modalImg.src = image.getAttribute("src");
    updateImageIndex();
    galleryItem.forEach((item) => {
      if (item.children[0] == image) {
        item.classList.add("image-active");
      } else {
        item.classList.remove("image-active");
      }
    });
  };

  const updateNavigationButtons = (total) => {
    prevIcon.style.display = currentIndex === 0 ? "none" : "block";
    nextIcon.style.display = currentIndex === total - 1 ? "none" : "block";
  };

  const updateImageIndex = () => {
    imageIndex.textContent = (currentIndex + 1).toString().padStart(2, "0");
  };

  nextIcon.addEventListener("click", nextSlide);
  prevIcon.addEventListener("click", prevSlide);

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

    images.forEach(function (image) {
      image.addEventListener("click", function () {
        const parentButton = image.parentNode.parentNode;
        if (!parentButton.classList.contains("image-list")) {
          parentButton.classList.toggle("image-list");
          listModalImage.appendChild(parentButton);
        }

        // Update the index display
        updateImageIndex();
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
